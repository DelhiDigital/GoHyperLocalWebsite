"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Clock, TrendingUp, Send, ArrowRight } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New Enquiry from ${formData.name} — ${formData.company}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone || "Not provided"}\n\nMessage:\n${formData.message || "No message"}`
    );
    window.location.href = `mailto:hello@delhidigital.co?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative pt-[72px] overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Quick Commerce Platform
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              <span className="text-navy">Power Your</span>
              <br />
              <span className="gradient-text">Quick Commerce</span>
              <br />
              <span className="text-navy">Deliveries</span>
            </h1>

            <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
              End-to-end logistics intelligence with a branded customer-facing
              delivery experience. Real-time tracking, smart carrier switching,
              and accurate ETAs — all under your brand.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="#features" className="btn-outline">
                Explore Features
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-2xl font-bold text-navy">30%</span>
                </div>
                <span className="text-xs text-muted">Higher repeat purchases</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-2xl font-bold text-navy">10 min</span>
                </div>
                <span className="text-xs text-muted">Fastest delivery</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-2xl font-bold text-navy">2 weeks</span>
                </div>
                <span className="text-xs text-muted">Go live timeline</span>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-border"
            >
              <h2 className="text-xl font-bold text-navy mb-1">
                Get Started Today
              </h2>
              <p className="text-sm text-muted mb-6">
                Tell us about your requirements and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hero-name" className="block text-sm font-medium text-navy mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="hero-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-navy placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="hero-email" className="block text-sm font-medium text-navy mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="hero-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-navy placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hero-company" className="block text-sm font-medium text-navy mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      id="hero-company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-navy placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="hero-phone" className="block text-sm font-medium text-navy mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="hero-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-navy placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="hero-message" className="block text-sm font-medium text-navy mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="hero-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-navy placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 resize-none transition-all text-sm"
                    placeholder="Tell us about your quick commerce requirements..."
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full mt-6">
                <Send className="w-4 h-4" />
                Contact Us
              </button>

              <p className="text-xs text-muted text-center mt-4">
                Or call us directly at{" "}
                <a href="tel:+919220592205" className="text-primary font-medium hover:underline">
                  +91 92205 92205
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
