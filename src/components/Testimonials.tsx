"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "GoHyperLocal transformed our logistics operations. The real-time tracking and customer-facing delivery experience has been a game-changer. Our customers love the branded tracking pages and live rider maps.",
    name: "Piyush Kumar",
    role: "AVP, Logistics Operations",
    company: "Leading Beauty Platform",
  },
  {
    quote:
      "Quick commerce demands complete visibility and speed. GoHyperLocal gives us everything from carrier onboarding to final delivery, plus the customer frontend that none of our previous partners offered.",
    name: "Surendar M.",
    role: "Product Owner, Logistics",
    company: "Global Sports Retailer",
  },
  {
    quote:
      "What sets GoHyperLocal apart is they don't just handle the backend logistics — they also build the delivery experience our customers see. That end-to-end approach has driven a 35% increase in repeat orders.",
    name: "Anjali R.",
    role: "Head of Operations",
    company: "D2C Health & Wellness Brand",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100">
            <Quote className="w-10 h-10 text-blue/20 mb-6" />
            <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-navy text-lg">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-gray-medium">
                  {testimonials[current].role},{" "}
                  {testimonials[current].company}
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
