import {
  Store, MapPin, Navigation, Hexagon,
  UserCheck, ShieldCheck, Clock, RefreshCw,
  Map, Smartphone, Layers, MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

const featureSections = [
  {
    badge: "Foundation",
    title: "Build Your Quick Commerce Infrastructure",
    description:
      "Set up your hyperlocal backbone — dark stores, delivery zones, and accurate ETAs powered by real-time data.",
    items: [
      { icon: Store, text: "Convert retail stores into dark stores or micro-fulfillment centers" },
      { icon: Clock, text: "Show accurate delivery ETAs on product pages based on customer location" },
      { icon: Navigation, text: "Auto-select the nearest serviceable store for every order" },
      { icon: Hexagon, text: "Configure polygon-level delivery zones for precise serviceability" },
    ],
    image: "/images/modern-warehouse.jpg",
    imageAlt: "Modern warehouse set up as a dark store for quick commerce fulfillment",
  },
  {
    badge: "Delivery Operations",
    title: "Hyperlocal Deliveries That Build Loyalty",
    description:
      "Ensure every order gets picked up and delivered on time with smart carrier management and automatic failover.",
    items: [
      { icon: UserCheck, text: "Check rider availability in real-time before creating shipments" },
      { icon: ShieldCheck, text: "Reduce failed pickups with live carrier capacity checks" },
      { icon: Clock, text: "Prevent orders from sitting idle at stores waiting for pickup" },
      { icon: RefreshCw, text: "Automatic carrier switching when riders don't show up" },
    ],
    image: "/images/parcels-closeup.jpg",
    imageAlt: "Parcels being prepared and sorted for hyperlocal delivery operations",
  },
  {
    badge: "Customer Experience",
    title: "A Delivery Experience Your Customers Love",
    description:
      "We build a branded customer-facing frontend — live maps, real-time updates, and full transparency under your brand.",
    items: [
      { icon: Map, text: "Live rider tracking with interactive map on branded pages" },
      { icon: Smartphone, text: "Embeddable tracking widget for your mobile app" },
      { icon: Layers, text: "Unified delivery statuses across all carrier partners" },
      { icon: MessageSquare, text: "Multi-channel alerts via WhatsApp, SMS, and email" },
    ],
    image: "/images/ecommerce-packing.jpg",
    imageAlt: "Online shopping and ecommerce delivery experience",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-primary">Platform Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4 tracking-tight">
            Everything You Need to Launch
            <br className="hidden sm:block" />
            <span className="gradient-text"> Quick Commerce</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From backend logistics intelligence to a customer-facing delivery experience — all in one platform.
          </p>
        </Reveal>

        {/* Feature sections */}
        <div className="space-y-20 lg:space-y-32">
          {featureSections.map((section, idx) => (
            <div
              key={section.title}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text side */}
              <Reveal animation={idx % 2 === 0 ? "left" : "right"} className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-3 py-1 mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {section.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 tracking-tight leading-tight">
                  {section.title}
                </h3>
                <p className="text-muted mb-8 leading-relaxed text-base">
                  {section.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {section.items.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <span className="text-foreground text-[15px] leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn more
                  <span className="text-lg">→</span>
                </Link>
              </Reveal>

              {/* Image side */}
              <Reveal animation={idx % 2 === 0 ? "right" : "left"} className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative group">
                  <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      width={640}
                      height={440}
                      className="object-cover w-full h-[320px] lg:h-[420px] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Decorative accent */}
                  <div className={`absolute -z-10 w-full h-full rounded-2xl lg:rounded-3xl top-4 ${idx % 2 === 0 ? "left-4" : "-left-4"} bg-primary/10`} />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
