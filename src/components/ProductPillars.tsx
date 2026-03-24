import { Wifi, Brain, Eye, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Wifi,
    title: "Serviceability API",
    description:
      "Real-time rider availability, pricing, and pickup ETA checks before shipment creation.",
    solid: "bg-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Brain,
    title: "Smart Carrier Selection",
    description:
      "Auto-assign carriers based on dark store config, rider availability, and delivery speed.",
    solid: "bg-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Eye,
    title: "Real-Time Tracking",
    description:
      "Accurate ETAs on product pages and live tracking with embedded map view for customers.",
    solid: "bg-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: AlertTriangle,
    title: "Exception Management",
    description:
      "Handle failed deliveries, reschedules, and address issues without manual intervention.",
    solid: "bg-amber-600",
    bg: "bg-amber-50",
  },
];

export default function ProductPillars() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-primary">Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4 tracking-tight">
            Powerful Capabilities for
            <span className="gradient-text"> Quick Commerce</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Four pillars that set your hyperlocal delivery operations apart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl border border-border p-7 card-hover group"
            >
              <div className={`w-14 h-14 rounded-2xl ${pillar.solid} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm`}>
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="#contact" className="btn-outline">
            Talk to a Q-Commerce Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
