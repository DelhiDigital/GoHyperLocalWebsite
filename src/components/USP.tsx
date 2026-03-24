import { Monitor, Server, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

const cards = [
  {
    icon: Server,
    title: "Backend Logistics Intelligence",
    description:
      "Multi-carrier integrations, smart allocation, real-time tracking, NDR management, and returns — everything leading platforms offer.",
    features: ["Multi-carrier management", "Smart allocation", "NDR handling"],
  },
  {
    icon: Monitor,
    title: "Customer-Facing Frontend",
    description:
      "Branded tracking pages, live rider maps, embeddable widgets, and multi-channel notifications — built for your customers, under your brand.",
    features: ["Branded tracking pages", "Live rider maps", "WhatsApp/SMS alerts"],
    highlighted: true,
  },
  {
    icon: Sparkles,
    title: "End-to-End Experience",
    description:
      "One platform for your entire quick commerce stack — from dark store setup to the moment your customer sees \"Delivered\" on their screen.",
    features: ["Dark store management", "Delivery zones", "Unified analytics"],
  },
];

export default function USP() {
  return (
    <section id="why-us" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/image.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-navy/85" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-accent">Our Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            What Makes GoHyperLocal
            <span className="text-accent"> Different?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Other platforms stop at backend logistics. We go further — building the complete
            customer-facing delivery experience for your quick commerce operations.
          </p>
        </Reveal>

        <Reveal animation="stagger" className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 ${
                card.highlighted
                  ? "bg-white/15 backdrop-blur-sm border-2 border-accent/40 ring-1 ring-accent/20"
                  : "bg-white/8 backdrop-blur-sm border border-white/10"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                card.highlighted ? "bg-accent/20" : "bg-white/10"
              }`}>
                <card.icon className={`w-6 h-6 ${card.highlighted ? "text-accent" : "text-white/80"}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm mb-5">
                {card.description}
              </p>
              {card.highlighted && (
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                  <Sparkles className="w-3 h-3" />
                  Only with GoHyperLocal
                </div>
              )}
              <ul className="space-y-2">
                {card.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal className="text-center">
          <Link href="#contact" className="btn-white">
            Contact Us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
