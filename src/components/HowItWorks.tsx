import { Store, Truck, Monitor, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    step: "01",
    icon: Store,
    title: "Set Up Dark Stores",
    description:
      "Configure your retail stores or warehouses as fulfillment centers. Define delivery zones and serviceability polygons.",
    image: "/images/foundation-new.jpg",
    imageAlt: "Warehouse aisle set up as dark store fulfillment center",
    color: "from-blue-500 to-blue-600",
  },
  {
    step: "02",
    icon: Truck,
    title: "Integrate Carriers",
    description:
      "Tell us your carriers — or let us recommend. We handle integration and onboarding tailored to your operations.",
    image: "/images/delivery-van.jpg",
    imageAlt: "Delivery van loaded with parcels for hyperlocal delivery",
    color: "from-violet-500 to-violet-600",
  },
  {
    step: "03",
    icon: Monitor,
    title: "Launch Branded Frontend",
    description:
      "Your customers get a polished experience — live rider tracking, branded pages, real-time notifications under your brand.",
    image: "/images/mobile-tracking.jpg",
    imageAlt: "Customer using branded delivery tracking on mobile phone",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Optimize & Scale",
    description:
      "Monitor carrier performance, automate exception handling, and expand to new cities as your operations grow.",
    image: "/images/team-collab.jpg",
    imageAlt: "Team collaborating on logistics optimization and scaling",
    color: "from-amber-500 to-amber-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-primary">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4 tracking-tight">
            Go Live in <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From setup to scale — we adapt to your carriers, your stores, and your customers.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl overflow-hidden border border-border card-hover group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-4xl font-extrabold text-white/20">
                  {item.step}
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src="/images/city-aerial.jpg"
            alt="City landscape representing hyperlocal delivery coverage"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-primary/60" />
          <div className="relative px-8 sm:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to go live?
              </h3>
              <p className="text-white/70 max-w-md">
                Most brands launch their quick commerce operations with us in under 2 weeks.
              </p>
            </div>
            <Link href="#contact" className="btn-white flex-shrink-0">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
