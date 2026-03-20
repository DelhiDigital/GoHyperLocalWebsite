import {
  Store,
  MapPin,
  Navigation,
  Hexagon,
  UserCheck,
  ShieldCheck,
  Clock,
  RefreshCw,
  Map,
  Smartphone,
  Layers,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const featureSections = [
  {
    badge: "Foundation",
    title: "Build your quick commerce foundation",
    description:
      "Set up your hyperlocal infrastructure with dark store management, precise serviceability, and accurate ETAs — everything you need to get started.",
    items: [
      {
        icon: Store,
        text: "Convert retail stores into dark stores or fulfillment centers",
      },
      {
        icon: Clock,
        text: "Display accurate delivery ETAs on product pages based on location",
      },
      {
        icon: Navigation,
        text: "Auto-select the nearest serviceable store for each order",
      },
      {
        icon: Hexagon,
        text: "Configure polygon-level delivery zones for precise serviceability",
      },
    ],
    visual: "foundation",
  },
  {
    badge: "Delivery Operations",
    title: "Hyperlocal deliveries that build loyalty",
    description:
      "Ensure every order gets picked up and delivered on time with smart carrier management and automatic failover.",
    items: [
      {
        icon: UserCheck,
        text: "Check rider availability before creating shipments",
      },
      {
        icon: ShieldCheck,
        text: "Reduce failed pickups with real-time carrier capacity checks",
      },
      {
        icon: Clock,
        text: "Ensure orders don't sit idle at stores waiting for pickup",
      },
      {
        icon: RefreshCw,
        text: "Automatic carrier switching if riders don't show up",
      },
    ],
    visual: "delivery",
  },
  {
    badge: "Customer Experience",
    title: "Keep customers in the know",
    description:
      "Unlike other platforms, we build a beautiful, branded customer-facing delivery experience — live maps, real-time updates, and full transparency.",
    items: [
      {
        icon: Map,
        text: "Live rider tracking with map view on branded tracking pages",
      },
      {
        icon: Smartphone,
        text: "Embeddable map widget for your mobile app",
      },
      {
        icon: Layers,
        text: "Standardized delivery statuses across all carriers",
      },
      {
        icon: MessageSquare,
        text: "Multi-channel notifications via WhatsApp, SMS, and email",
      },
    ],
    visual: "customer",
  },
];

function FeatureVisual({ type }: { type: string }) {
  if (type === "foundation") {
    return (
      <div className="bg-gradient-to-br from-navy/5 to-blue/5 rounded-2xl p-6 h-full min-h-[320px] flex items-center justify-center">
        <div className="space-y-4 w-full max-w-xs">
          <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-blue" />
              <span className="text-sm font-semibold text-gray-900">
                Dark Store Config
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Zone A", "Zone B", "Zone C"].map((z) => (
                <div
                  key={z}
                  className="bg-blue/10 rounded-lg p-2 text-center text-xs font-medium text-blue"
                >
                  {z}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Estimated ETA</span>
              <span className="text-lg font-bold text-green-600">18 min</span>
            </div>
            <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-blue to-cyan rounded-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "delivery") {
    return (
      <div className="bg-gradient-to-br from-navy/5 to-blue/5 rounded-2xl p-6 h-full min-h-[320px] flex items-center justify-center">
        <div className="space-y-4 w-full max-w-xs">
          <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-900">
                Carrier Status
              </span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                3 Available
              </span>
            </div>
            {["Rider A — 2 min away", "Rider B — 5 min away", "Rider C — Standby"].map(
              (r, i) => (
                <div
                  key={r}
                  className={`flex items-center gap-2 py-2 ${
                    i < 2 ? "border-b border-gray-50" : ""
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      i === 0
                        ? "bg-green-500"
                        : i === 1
                        ? "bg-yellow-500"
                        : "bg-gray-300"
                    }`}
                  />
                  <span className="text-sm text-gray-700">{r}</span>
                </div>
              )
            )}
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-blue" />
            <div>
              <div className="text-sm font-medium text-gray-900">
                Auto-Switch Active
              </div>
              <div className="text-xs text-gray-500">
                Fallback to next carrier in 3 min
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-navy/5 to-blue/5 rounded-2xl p-6 h-full min-h-[320px] flex items-center justify-center">
      <div className="space-y-4 w-full max-w-xs">
        <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
          <div className="text-sm font-semibold text-gray-900 mb-3">
            Your Brand — Live Tracking
          </div>
          <div className="bg-gradient-to-br from-blue/10 to-cyan/10 rounded-lg h-32 relative overflow-hidden mb-3">
            <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-blue rounded-full flex items-center justify-center shadow animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <div className="absolute bottom-4 right-4 w-4 h-4 bg-cyan rounded-full shadow" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Arriving in</span>
            <span className="font-bold text-navy">8 minutes</span>
          </div>
        </div>
        <div className="flex gap-2">
          {["WhatsApp", "SMS", "Email"].map((ch) => (
            <div
              key={ch}
              className="flex-1 bg-white rounded-lg shadow-sm p-2 text-center border border-gray-100"
            >
              <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto mb-1" />
              <span className="text-xs text-gray-600">{ch}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Launch and scale your quick commerce operations
          </h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            Everything you need to power hyperlocal deliveries — from backend
            logistics intelligence to the customer-facing delivery experience.
          </p>
        </div>

        <div className="space-y-24">
          {featureSections.map((section, idx) => (
            <div
              key={section.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-block text-sm font-semibold text-blue bg-blue/10 px-3 py-1 rounded-full mb-4">
                  {section.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-medium mb-6 leading-relaxed">
                  {section.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {section.items.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-blue" />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="text-blue font-semibold hover:underline"
                >
                  Talk to our experts →
                </Link>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <FeatureVisual type={section.visual} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
