"use client";

import { useState } from "react";
import { Send, Mail } from "lucide-react";
import Image from "next/image";

export default function Contact() {
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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/logistics-belt.jpg"
        alt="Logistics warehouse operations"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to launch quick commerce?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Get in touch with our team to see how GoHyperLocal can power your
            hyperlocal delivery operations and customer experience.
          </p>

          {/* Direct contact options */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <a
              href="mailto:hello@delhidigital.co"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">hello@delhidigital.co</span>
            </a>
          </div>
        </div>

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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.company}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-transparent resize-none"
              placeholder="We're looking to launch quick commerce for our D2C brand..."
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}
