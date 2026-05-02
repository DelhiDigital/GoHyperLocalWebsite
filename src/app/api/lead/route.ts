import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";

const GRAPH_VERSION = "v21.0";
const PIXEL_ID = "1434455288430633";

const TO_EMAIL = "hello@delhidigital.co";
const CC_EMAIL = "anuj@delhidigital.co";

const hash = (value: string) =>
  crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");

const normalizePhone = (p: string) => p.replace(/\D/g, "");

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

async function sendCapi(args: {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  eventId: string;
  sourceUrl?: string;
  customData?: Record<string, unknown>;
  clientIp?: string | null;
  userAgent?: string | null;
  fbp?: string;
  fbc?: string;
}) {
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!accessToken) return { skipped: true, reason: "no_token" };
  const pixelId = process.env.META_PIXEL_ID || PIXEL_ID;
  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE;

  const userData: Record<string, string | string[]> = {};
  if (args.email) userData.em = [hash(args.email)];
  if (args.phone) userData.ph = [hash(normalizePhone(args.phone))];
  if (args.firstName) userData.fn = [hash(args.firstName)];
  if (args.lastName) userData.ln = [hash(args.lastName)];
  if (args.city) userData.ct = [hash(args.city)];
  if (args.clientIp) userData.client_ip_address = args.clientIp;
  if (args.userAgent) userData.client_user_agent = args.userAgent;
  if (args.fbp) userData.fbp = args.fbp;
  if (args.fbc) userData.fbc = args.fbc;

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: args.eventId,
        action_source: "website",
        event_source_url: args.sourceUrl,
        user_data: userData,
        custom_data: args.customData || {},
      },
    ],
  };
  if (testEventCode) payload.test_event_code = testEventCode;

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${accessToken}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  return { ok: res.ok, response: json };
}

async function sendEmail(args: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  source: string;
  pageUrl?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { skipped: true, reason: "no_resend_key" };

  const resend = new Resend(apiKey);
  const fromAddress =
    process.env.RESEND_FROM || "GoHyperLocal Leads <onboarding@resend.dev>";

  const html = `
    <h2>New lead from ${escapeHtml(args.source)}</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
      <tr><td><b>Name</b></td><td>${escapeHtml(args.name)}</td></tr>
      <tr><td><b>Email</b></td><td><a href="mailto:${escapeHtml(args.email)}">${escapeHtml(args.email)}</a></td></tr>
      <tr><td><b>Phone</b></td><td>${escapeHtml(args.phone || "—")}</td></tr>
      <tr><td><b>Company</b></td><td>${escapeHtml(args.company || "—")}</td></tr>
      <tr><td><b>Message</b></td><td>${escapeHtml(args.message || "—")}</td></tr>
      <tr><td><b>Page</b></td><td>${escapeHtml(args.pageUrl || "—")}</td></tr>
      <tr><td><b>Time</b></td><td>${new Date().toISOString()}</td></tr>
    </table>
  `;

  const subject = `New lead: ${args.name}${args.company ? " — " + args.company : ""}`;

  const result = await resend.emails.send({
    from: fromAddress,
    to: [TO_EMAIL],
    cc: [CC_EMAIL],
    replyTo: args.email,
    subject,
    html,
  });
  return { ok: !result.error, result };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name = "",
      email = "",
      phone = "",
      company = "",
      message = "",
      source = "Website Form",
      sourceUrl,
    } = body;

    if (!email || !name) {
      return NextResponse.json(
        { ok: false, error: "name and email required" },
        { status: 400 }
      );
    }

    const [firstName, ...rest] = name.trim().split(" ");
    const lastName = rest.join(" ");

    const fwd = req.headers.get("x-forwarded-for");
    const clientIp = fwd ? fwd.split(",")[0].trim() : req.headers.get("x-real-ip");
    const userAgent = req.headers.get("user-agent");
    const cookieHeader = req.headers.get("cookie") || "";
    const fbp = cookieHeader.match(/_fbp=([^;]+)/)?.[1];
    const fbc = cookieHeader.match(/_fbc=([^;]+)/)?.[1];

    const eventId =
      body.eventId ||
      `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

    const [emailResult, capiResult] = await Promise.allSettled([
      sendEmail({
        name,
        email,
        phone,
        company,
        message,
        source,
        pageUrl: sourceUrl,
      }),
      sendCapi({
        email,
        phone,
        firstName,
        lastName,
        eventId,
        sourceUrl,
        customData: { company, source },
        clientIp,
        userAgent,
        fbp,
        fbc,
      }),
    ]);

    return NextResponse.json({
      ok: true,
      eventId,
      email:
        emailResult.status === "fulfilled" ? emailResult.value : { error: "failed" },
      capi:
        capiResult.status === "fulfilled" ? capiResult.value : { error: "failed" },
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
