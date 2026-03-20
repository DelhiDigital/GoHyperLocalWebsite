import { Wifi, Brain, Eye, AlertTriangle } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Wifi,
    title: "Serviceability API",
    description:
      "Get real-time rider availability, pricing, and pickup ETA before the shipment is created.",
    color: "from-blue/10 to-blue/5",
    iconColor: "text-blue",
  },
  {
    icon: Brain,
    title: "Smart Carrier Selection",
    description:
      "Auto-assign carriers based on your dark store configurations, rider availability, and speed.",
    color: "from-cyan/10 to-cyan/5",
    iconColor: "text-cyan",
  },
  {
    icon: Eye,
    title: "Real-Time Tracking & Visibility",
    description:
      "Display accurate ETAs on product pages and power live tracking with embedded map view for customers.",
    color: "from-navy/10 to-navy/5",
    iconColor: "text-navy",
  },
  {
    icon: AlertTriangle,
    title: "Delivery Exceptions Management",
    description:
      "Manage failed deliveries, customer reschedules, and address issues without manual intervention.",
    color: "from-orange-500/10 to-orange-500/5",
    iconColor: "text-orange-500",
  },
];

export default function ProductPillars() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Activate quick commerce with GoHyperLocal
          </h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            Four powerful capabilities that set your hyperlocal delivery
            operations apart from the competition.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-medium leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="#contact" className="btn-gradient inline-block">
            Talk to a Q-Commerce Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
