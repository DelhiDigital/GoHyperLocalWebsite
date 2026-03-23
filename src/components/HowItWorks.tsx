import { Store, Truck, Monitor, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    step: "01",
    icon: Store,
    title: "Set Up Your Dark Stores",
    description:
      "Configure your retail stores or warehouses as fulfillment centers. Define delivery zones, serviceability polygons, and store-level inventory rules.",
  },
  {
    step: "02",
    icon: Truck,
    title: "We Integrate Your Carriers",
    description:
      "Tell us which carriers you work with — or need — and we handle the integration. New carrier? We'll onboard them for you, tailored to your operations.",
  },
  {
    step: "03",
    icon: Monitor,
    title: "Launch Your Branded Experience",
    description:
      "Your customers get a polished delivery experience — live rider tracking, branded pages, and real-time notifications — all under your brand, not ours.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Optimize & Scale",
    description:
      "Monitor carrier performance, automate exception handling, and scale to new cities. We grow with you as your quick commerce operations expand.",
  },
];

export default function HowItWorks() {
  return (
    <section id="integrations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            From setup to scale — we adapt to your carriers, your stores, and
            your customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue/20 to-transparent -translate-x-4" />
              )}
              <div className="text-5xl font-bold text-blue/10 mb-4">
                {item.step}
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image banner */}
        <div className="relative rounded-2xl overflow-hidden h-64 mb-12">
          <Image
            src="/images/delivery-box.jpg"
            alt="Packing and preparing parcels for quick commerce delivery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40 flex items-center">
            <div className="px-8 sm:px-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to go live?
              </h3>
              <p className="text-white/70 max-w-md mb-4">
                Most brands launch their quick commerce operations with us in under 2 weeks.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-white text-navy font-semibold px-6 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
