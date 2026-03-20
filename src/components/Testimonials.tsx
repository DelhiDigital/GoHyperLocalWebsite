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
    color: "bg-blue",
  },
  {
    quote:
      "The real difference for us was the customer-facing side. Our previous provider only gave us APIs and backend dashboards. Now our customers actually see a professional delivery experience with live maps and WhatsApp updates — it feels like we built it ourselves.",
    name: "Meera T.",
    role: "Head of Operations",
    initials: "MT",
    color: "bg-violet-500",
  },
  {
    quote:
      "We went from zero to live hyperlocal delivery in about 10 days. The carrier integrations were already there, the dark store config was straightforward, and the auto-switching saved us on day one when a rider no-showed. Honestly didn't expect it to be this smooth.",
    name: "Karthik D.",
    role: "Co-founder & CTO",
    initials: "KD",
    color: "bg-emerald-500",
  },
  {
    quote:
      "What I appreciate most is that I don't have to explain the platform to my ops team every week. The interface is clean, the alerts are useful, and the carrier performance data actually helps us make decisions instead of just sitting in a report nobody reads.",
    name: "Priya N.",
    role: "Supply Chain Manager",
    initials: "PN",
    color: "bg-amber-500",
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
    <section className="py-20 bg-gray-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-12">
          What our customers say
        </h2>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100">
            <Quote className="w-8 h-8 text-blue/15 mb-4" />
            <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              {t.quote}
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-semibold text-sm`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
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
                  i === current ? "w-6 bg-blue" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
