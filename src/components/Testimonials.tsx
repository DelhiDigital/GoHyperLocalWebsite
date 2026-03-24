"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We were juggling three different tools for carrier management, tracking, and customer notifications. After switching, everything runs from one dashboard. The branded tracking page alone cut our 'where is my order' tickets by almost half.",
    name: "Raghav S.",
    role: "Logistics Lead",
    initials: "RS",
    bg: "bg-blue-600",
  },
  {
    quote:
      "The real difference for us was the customer-facing side. Our previous provider only gave us APIs and backend dashboards. Now our customers actually see a professional delivery experience with live maps and WhatsApp updates — it feels like we built it ourselves.",
    name: "Meera T.",
    role: "Head of Operations",
    initials: "MT",
    bg: "bg-violet-600",
  },
  {
    quote:
      "We went from zero to live hyperlocal delivery in about 10 days. The carrier integrations were already there, the dark store config was straightforward, and the auto-switching saved us on day one when a rider no-showed. Honestly didn't expect it to be this smooth.",
    name: "Karthik D.",
    role: "Co-founder & CTO",
    initials: "KD",
    bg: "bg-emerald-600",
  },
  {
    quote:
      "What I appreciate most is that I don't have to explain the platform to my ops team every week. The interface is clean, the alerts are useful, and the carrier performance data actually helps us make decisions instead of just sitting in a report nobody reads.",
    name: "Priya N.",
    role: "Supply Chain Manager",
    initials: "PN",
    bg: "bg-amber-600",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-primary">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Trusted by <span className="gradient-text">Operations Teams</span>
          </h2>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-sm p-8 sm:p-12 border border-border">
            {/* Quote icon */}
            <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center mb-6">
              <Quote className="w-5 h-5 text-primary" />
            </div>

            <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 font-medium">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center text-white font-bold text-sm shadow-sm`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-surface hover:border-primary/30 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-muted" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-surface hover:border-primary/30 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-muted" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
