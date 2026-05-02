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

const makeEventId = () =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

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

  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, eventId, sourceUrl }),
  });

  if (!res.ok) {
    throw new Error(`Lead submission failed (${res.status})`);
  }
  return res.json();
}
