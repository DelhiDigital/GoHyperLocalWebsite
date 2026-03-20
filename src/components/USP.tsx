import { Monitor, Server, Sparkles } from "lucide-react";
import Link from "next/link";

export default function USP() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #001644 0%, #001B61 40%, #155FFF 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What makes GoHyperLocal different?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Other platforms stop at backend logistics. We go further — building
            the complete customer-facing delivery experience for your express and
            quick commerce operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <Server className="w-10 h-10 text-cyan mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Backend Logistics Intelligence
            </h3>
            <p className="text-white/60 leading-relaxed">
              Multi-carrier integrations, smart allocation, real-time tracking,
              NDR management, and returns — everything leading platforms offer.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 ring-2 ring-cyan/30">
            <Monitor className="w-10 h-10 text-cyan mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Customer-Facing Frontend
            </h3>
            <p className="text-white/60 leading-relaxed">
              Branded tracking pages, live rider maps, embeddable widgets, and
              multi-channel notifications — built for your customers, under your
              brand.
            </p>
            <div className="mt-4 inline-block text-xs font-semibold text-cyan bg-cyan/10 px-3 py-1 rounded-full">
              Only with GoHyperLocal
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <Sparkles className="w-10 h-10 text-cyan mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              End-to-End Experience
            </h3>
            <p className="text-white/60 leading-relaxed">
              One platform for your entire quick commerce stack — from dark store
              setup to the moment your customer sees &ldquo;Delivered&rdquo; on their screen.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="#contact"
            className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
