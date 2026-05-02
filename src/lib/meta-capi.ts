export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  source?: string;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const WEB3FORMS_ACCESS_KEY = "8a238738-e081-400b-82a0-bbd854a0f627";

const makeEventId = () =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

async function sendWeb3Forms(data: LeadPayload, sourceUrl?: string) {
  const subject = `New lead: ${data.name}${data.company ? " — " + data.company : ""}`;
  const messageBody =
    `Source: ${data.source || "Website Form"}\n` +
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone || "—"}\n` +
    `Company: ${data.company || "—"}\n` +
    `Message: ${data.message || "—"}\n` +
    `Page: ${sourceUrl || "—"}\n` +
    `Time: ${new Date().toISOString()}`;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: "GoHyperLocal Website",
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      company: data.company || "",
      message: messageBody,
    }),
  });
  return res.ok;
}

export async function submitLead(data: LeadPayload) {
  const eventId = makeEventId();
  const sourceUrl =
    typeof window !== "undefined" ? window.location.href : undefined;

  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(
      "track",
      "Lead",
      { company: data.company, source: data.source },
      { eventID: eventId }
    );
  }

  const [emailRes, capiRes] = await Promise.allSettled([
    sendWeb3Forms(data, sourceUrl),
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, eventId, sourceUrl }),
    }),
  ]);

  const emailOk =
    emailRes.status === "fulfilled" && emailRes.value === true;
  const capiOk = capiRes.status === "fulfilled" && capiRes.value.ok;

  if (!emailOk && !capiOk) {
    throw new Error("Lead submission failed");
  }
  return { emailOk, capiOk };
}
