import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const GRAPH_VERSION = "v21.0";

const hash = (value: string) =>
  crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");

const normalizePhone = (phone: string) => phone.replace(/\D/g, "");

export async function POST(req: NextRequest) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE;

  if (!pixelId || !accessToken) {
    return NextResponse.json(
      { error: "Meta CAPI not configured" },
      { status: 500 }
    );
  }

  const body = await req.json();
  const {
    eventName = "Lead",
    eventId,
    email,
    phone,
    firstName,
    lastName,
    city,
    sourceUrl,
    customData = {},
  } = body;

  const userData: Record<string, string | string[]> = {};
  if (email) userData.em = hash(email);
  if (phone) userData.ph = hash(normalizePhone(phone));
  if (firstName) userData.fn = hash(firstName);
  if (lastName) userData.ln = hash(lastName);
  if (city) userData.ct = hash(city);

  const fwd = req.headers.get("x-forwarded-for");
  const clientIp = fwd ? fwd.split(",")[0].trim() : req.headers.get("x-real-ip");
  if (clientIp) userData.client_ip_address = clientIp;
  const ua = req.headers.get("user-agent");
  if (ua) userData.client_user_agent = ua;

  const cookieHeader = req.headers.get("cookie") || "";
  const fbp = cookieHeader.match(/_fbp=([^;]+)/)?.[1];
  const fbc = cookieHeader.match(/_fbc=([^;]+)/)?.[1];
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: sourceUrl,
        user_data: userData,
        custom_data: customData,
      },
    ],
  };

  if (testEventCode) payload.test_event_code = testEventCode;

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${accessToken}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: data }, { status: res.status });
    }
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
