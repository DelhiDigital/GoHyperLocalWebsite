export type LeadPayload = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  company?: string;
  message?: string;
};

const makeEventId = () =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export async function trackLead(data: LeadPayload) {
  const eventId = makeEventId();
  const sourceUrl = typeof window !== "undefined" ? window.location.href : undefined;

  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", { company: data.company }, { eventID: eventId });
  }

  try {
    await fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: "Lead",
        eventId,
        email: data.email,
        phone: data.phone,
        firstName: data.firstName,
        lastName: data.lastName,
        city: data.city,
        sourceUrl,
        customData: {
          company: data.company,
          message: data.message,
        },
      }),
      keepalive: true,
    });
  } catch {
    // Fire-and-forget — don't block the user flow
  }
}
