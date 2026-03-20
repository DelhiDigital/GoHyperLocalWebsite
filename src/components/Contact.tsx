"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

// Get your free access key at https://web3forms.com — enter hello@delhidigital.co
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      access_key: WEB3FORMS_KEY,
      subject: "New Enquiry — GoHyperLocal Website",
      from_name: "GoHyperLocal Website",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to send. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(267.57% 95.42% at 45.81% 75.5%, #001644 0%, #155FFF 60.78%, #00E6E4 93.43%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to launch quick commerce?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Get in touch with our team to see how GoHyperLocal can power your
            hyperlocal delivery operations and customer experience.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center border border-white/20">
            <CheckCircle2 className="w-16 h-16 text-cyan mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Thank you for reaching out!
            </h3>
            <p className="text-white/70">
              Our team will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/20"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80 mb-1.5"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-white/80 mb-1.5"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-transparent"
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white/80 mb-1.5"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80 mb-1.5"
              >
                Tell us about your requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-transparent resize-none"
                placeholder="We're looking to launch quick commerce for our D2C brand..."
              />
            </div>

            {error && <p className="text-red-300 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {loading ? "Sending..." : "Contact Us"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
