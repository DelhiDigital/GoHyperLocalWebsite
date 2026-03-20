"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question:
      "How does GoHyperLocal improve the customer experience for quick commerce?",
    answer:
      "GoHyperLocal provides branded tracking pages with live rider maps, real-time ETA updates, and multi-channel notifications (WhatsApp, SMS, email). Unlike other platforms that only handle backend logistics, we build the complete customer-facing delivery experience — so your customers see your brand, not a generic tracking page. This drives higher satisfaction and repeat purchases.",
  },
  {
    question:
      "Which hyperlocal carriers does GoHyperLocal integrate with?",
    answer:
      "We integrate with 30+ hyperlocal and express delivery carriers including Shadowfax, Porter, Dunzo, Borzo, Zomato, Swiggy, Uber, Delhivery, Pidge, Blowhorn, and many more. Our pre-built integrations let you go live in days, and our smart carrier allocation ensures orders are always assigned to the best available rider.",
  },
  {
    question:
      "How does GoHyperLocal help reduce operational costs?",
    answer:
      "Our platform reduces costs through smart carrier allocation (picking the most cost-effective rider), automatic carrier switching (preventing order delays and re-attempts), real-time serviceability checks (reducing failed deliveries), and centralized operations management. Brands typically see a 20-30% reduction in logistics costs after switching to GoHyperLocal.",
  },
  {
    question:
      "What makes GoHyperLocal different from other logistics platforms?",
    answer:
      "While other platforms focus solely on backend logistics intelligence, GoHyperLocal offers everything they do — multi-carrier integrations, smart allocation, tracking, NDR management, returns — PLUS we build the customer-facing frontend for your express delivery and quick commerce operations. Branded tracking pages, live maps, embeddable widgets, and notification flows — all under your brand. It's the only end-to-end solution for D2C quick commerce.",
  },
  {
    question: "How quickly can I launch quick commerce with GoHyperLocal?",
    answer:
      "Most brands go live within 1-2 weeks. Our platform handles everything from dark store configuration and delivery zone setup to carrier integration and customer tracking page deployment. We provide dedicated onboarding support and pre-built integrations, so you can focus on your business while we handle the logistics infrastructure.",
  },
  {
    question:
      "Can I use GoHyperLocal for both quick commerce and standard deliveries?",
    answer:
      "Yes. GoHyperLocal supports hyperlocal quick commerce (10-minute to 2-hour deliveries), same-day delivery, next-day delivery, and standard shipping. You can manage all delivery types from a single platform with unified tracking, notifications, and analytics.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-medium">
            Everything you need to know about launching quick commerce with
            GoHyperLocal.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-navy pr-4">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-blue flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-5 text-gray-medium leading-relaxed">
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
