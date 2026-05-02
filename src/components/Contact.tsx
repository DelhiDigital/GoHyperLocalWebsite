"use client";

import { useState } from "react";
import { Send, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { submitLead } from "@/lib/meta-capi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitLead({ ...formData, source: "Contact Form" });
      setStatus("success");
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <Image
        src="/images/boxes-stack.jpg"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/92" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-semibold text-accent">Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Ready to Launch
              <span className="text-accent"> Quick Commerce?</span>
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Get in touch with our team to see how GoHyperLocal can power your
              hyperlocal delivery operations and customer experience.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@delhidigital.co?cc=anuj@delhidigital.co"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">hello@delhidigital.co</span>
              </a>
              <a
                href="tel:+919958848981"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">+91 99588 48981</span>
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/15"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Tell us about your requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent resize-none transition-all"
                  placeholder="We're looking to launch quick commerce for our D2C brand..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-white w-full sm:w-auto disabled:opacity-60"
              >
                {status === "success" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Sent — we&apos;ll be in touch
                  </>
                ) : status === "submitting" ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-200 mt-3">
                  Something went wrong. Please call us or email hello@delhidigital.co directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
