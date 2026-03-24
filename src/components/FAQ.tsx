"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does GoHyperLocal improve the customer experience for quick commerce?",
    answer:
      "GoHyperLocal provides branded tracking pages with live rider maps, real-time ETA updates, and multi-channel notifications (WhatsApp, SMS, email). Unlike other platforms that only handle backend logistics, we build the complete customer-facing delivery experience — so your customers see your brand, not a generic tracking page. This drives higher satisfaction and repeat purchases.",
  },
  {
    question: "Which carriers does GoHyperLocal work with?",
    answer:
      "We integrate with the carriers you already use — or need. Rather than locking you into a fixed list, we onboard and integrate carriers based on your specific requirements, geography, and operations. Whether it's a national logistics provider or a hyperlocal fleet, we handle the integration so you can go live fast.",
  },
  {
    question: "How does GoHyperLocal help reduce operational costs?",
    answer:
      "Our platform reduces costs through smart carrier allocation (picking the most cost-effective rider), automatic carrier switching (preventing order delays and re-attempts), real-time serviceability checks (reducing failed deliveries), and centralized operations management. Brands typically see a 20-30% reduction in logistics costs after switching to GoHyperLocal.",
  },
  {
    question: "What makes GoHyperLocal different from other logistics platforms?",
    answer:
      "While other platforms focus solely on backend logistics intelligence, GoHyperLocal offers everything they do — multi-carrier integrations, smart allocation, tracking, NDR management, returns — PLUS we build the customer-facing frontend for your express delivery and quick commerce operations. Branded tracking pages, live maps, embeddable widgets, and notification flows — all under your brand.",
  },
  {
    question: "How quickly can I launch quick commerce with GoHyperLocal?",
    answer:
      "Most brands go live within 1-2 weeks. Our platform handles everything from dark store configuration and delivery zone setup to carrier integration and customer tracking page deployment. We provide dedicated onboarding support and pre-built integrations, so you can focus on your business while we handle the logistics infrastructure.",
  },
  {
    question: "Can I use GoHyperLocal for both quick commerce and standard deliveries?",
    answer:
      "Yes. GoHyperLocal supports hyperlocal quick commerce (10-minute to 2-hour deliveries), same-day delivery, next-day delivery, and standard shipping. You can manage all delivery types from a single platform with unified tracking, notifications, and analytics.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4 tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted">
            Everything you need to know about launching quick commerce with GoHyperLocal.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i
                  ? "border-primary/20 bg-primary/[0.02] shadow-sm"
                  : "border-border bg-white hover:border-primary/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className={`font-semibold pr-4 transition-colors ${
                  openIndex === i ? "text-primary" : "text-navy"
                }`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                  openIndex === i
                    ? "bg-primary text-white rotate-0"
                    : "bg-surface text-muted"
                }`}>
                  {openIndex === i ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
