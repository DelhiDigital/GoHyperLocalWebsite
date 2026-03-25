"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";

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
      "Most brands go live within 1 week. Our platform handles everything from dark store configuration and delivery zone setup to carrier integration and customer tracking page deployment. We provide dedicated onboarding support and pre-built integrations, so you can focus on your business while we handle the logistics infrastructure.",
  },
  {
    question: "Can I use GoHyperLocal for both quick commerce and standard deliveries?",
    answer:
      "Yes. GoHyperLocal supports hyperlocal quick commerce with ultra-fast deliveries, same-day delivery, next-day delivery, and standard shipping. You can manage all delivery types from a single platform with unified tracking, notifications, and analytics.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-primary/20 bg-primary/[0.02] shadow-sm"
          : "border-border bg-white hover:border-primary/10"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`font-semibold pr-4 text-sm transition-colors ${
            isOpen ? "text-primary" : "text-navy"
          }`}
        >
          {faq.question}
        </span>
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
            isOpen ? "bg-primary text-white" : "bg-surface text-muted"
          }`}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </div>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-muted text-sm leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4 tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted">
            Everything you need to know about launching quick commerce with GoHyperLocal.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-4 items-start">
          <div className="space-y-4">
            {leftFaqs.map((faq, i) => (
              <FaqItem
                key={i * 2}
                faq={faq}
                isOpen={openSet.has(i * 2)}
                onToggle={() => toggle(i * 2)}
              />
            ))}
          </div>
          <div className="space-y-4">
            {rightFaqs.map((faq, i) => (
              <FaqItem
                key={i * 2 + 1}
                faq={faq}
                isOpen={openSet.has(i * 2 + 1)}
                onToggle={() => toggle(i * 2 + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
