"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

type Brand = { name: string; color: string; text: string; dark?: boolean };

// Three orbital rings with different brands
const outerRing: Brand[] = [
  { name: "Shopify", color: "#96BF48", text: "S" },
  { name: "Porter", color: "#2C3E50", text: "P" },
  { name: "Ola", color: "#EFF604", text: "O", dark: true },
  { name: "Uber", color: "#000000", text: "U" },
  { name: "Wix", color: "#0C6EFC", text: "W" },
  { name: "Magento", color: "#F46F25", text: "M" },
  { name: "Dunzo", color: "#00D26A", text: "D" },
  { name: "Swiggy", color: "#FC8019", text: "S" },
];

const middleRing: Brand[] = [
  { name: "Delhivery", color: "#E30613", text: "D" },
  { name: "BlueDart", color: "#003DA5", text: "B" },
  { name: "Shadowfax", color: "#6C3CFC", text: "S" },
  { name: "Loadshare", color: "#FF5722", text: "L" },
  { name: "Ecom Express", color: "#1A237E", text: "E" },
  { name: "Borzo", color: "#FFD600", text: "B", dark: true },
];

const innerRing: Brand[] = [
  { name: "WhatsApp", color: "#25D366", text: "W" },
  { name: "Razorpay", color: "#2B84EA", text: "R" },
  { name: "Google Maps", color: "#4285F4", text: "G" },
  { name: "Zoho", color: "#C8202B", text: "Z" },
];

export default function OrbitalIntegrations() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-accent">Integrations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            One Platform, <span className="text-primary-light">Infinite Integrations</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Connect your storefront, carriers, and tools — we handle the rest.
          </p>
        </div>

        {/* Orbital visualization */}
        <div
          ref={ref}
          className="relative mx-auto flex items-end justify-center"
          style={{ height: 520, maxWidth: 800 }}
        >
          {/* Arc lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 520"
            fill="none"
          >
            <ellipse cx="400" cy="520" rx="390" ry="370" stroke="rgba(6,182,212,0.1)" strokeWidth="1" />
            <ellipse cx="400" cy="520" rx="280" ry="265" stroke="rgba(6,182,212,0.08)" strokeWidth="1" />
            <ellipse cx="400" cy="520" rx="170" ry="160" stroke="rgba(6,182,212,0.06)" strokeWidth="1" />
          </svg>

          {/* Center hub */}
          <div
            className={`absolute bottom-0 left-1/2 z-30 transition-all duration-1000 ease-out ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ transform: `translateX(-50%) translateY(50%) ${visible ? "scale(1)" : "scale(0.5)"}` }}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-primary flex items-center justify-center shadow-[0_0_80px_rgba(37,99,235,0.5)] border-2 border-primary-light/30">
              <Image
                src="/Asset 21@4x-8.png"
                alt="GoHyperLocal"
                width={56}
                height={56}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Outer ring — orbiting */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
            style={{ animation: visible ? "spinSlow 60s linear infinite" : "none" }}
          >
            {outerRing.map((brand, i) => {
              const total = outerRing.length;
              const angleDeg = 180 + (180 / (total - 1)) * i; // spread across bottom semicircle (180° to 360°)
              const angleRad = (angleDeg * Math.PI) / 180;
              const rx = 48.5; // % of container width
              const ry = 71; // % of container height
              const cx = 50;
              const cy = 100;
              const x = cx + rx * Math.cos(angleRad);
              const y = cy + ry * Math.sin(angleRad);

              return (
                <div
                  key={brand.name}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                    animation: visible
                      ? `orbitFadeIn 0.6s ease-out ${i * 0.1}s both`
                      : "none",
                  }}
                >
                  {/* Counter-rotate to keep text upright */}
                  <div
                    className="group relative"
                    style={{ animation: visible ? "counterSpin 60s linear infinite" : "none" }}
                  >
                    <div
                      className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center cursor-default hover:scale-125 transition-transform duration-300"
                    >
                      <span
                        className="text-sm sm:text-base font-bold"
                        style={{ color: brand.dark ? "#333" : brand.color }}
                      >
                        {brand.text}
                      </span>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/95 text-navy text-[10px] font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
                      {brand.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Middle ring — orbiting reverse */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}
            style={{ animation: visible ? "spinSlowReverse 50s linear infinite" : "none" }}
          >
            {middleRing.map((brand, i) => {
              const total = middleRing.length;
              const angleDeg = 190 + (160 / (total - 1)) * i;
              const angleRad = (angleDeg * Math.PI) / 180;
              const rx = 35;
              const ry = 51;
              const cx = 50;
              const cy = 100;
              const x = cx + rx * Math.cos(angleRad);
              const y = cy + ry * Math.sin(angleRad);

              return (
                <div
                  key={brand.name}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                    animation: visible
                      ? `orbitFadeIn 0.6s ease-out ${0.3 + i * 0.1}s both`
                      : "none",
                  }}
                >
                  <div
                    className="group relative"
                    style={{ animation: visible ? "counterSpinReverse 50s linear infinite" : "none" }}
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-default hover:scale-125 transition-transform duration-300"
                    >
                      <span
                        className="text-xs sm:text-sm font-bold"
                        style={{ color: brand.dark ? "#333" : brand.color }}
                      >
                        {brand.text}
                      </span>
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/95 text-navy text-[10px] font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
                      {brand.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inner ring — orbiting */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}
            style={{ animation: visible ? "spinSlow 40s linear infinite" : "none" }}
          >
            {innerRing.map((brand, i) => {
              const total = innerRing.length;
              const angleDeg = 200 + (140 / (total - 1)) * i;
              const angleRad = (angleDeg * Math.PI) / 180;
              const rx = 21;
              const ry = 31;
              const cx = 50;
              const cy = 100;
              const x = cx + rx * Math.cos(angleRad);
              const y = cy + ry * Math.sin(angleRad);

              return (
                <div
                  key={brand.name}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                    animation: visible
                      ? `orbitFadeIn 0.6s ease-out ${0.6 + i * 0.1}s both`
                      : "none",
                  }}
                >
                  <div
                    className="group relative"
                    style={{ animation: visible ? "counterSpin 40s linear infinite" : "none" }}
                  >
                    <div
                      className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg flex items-center justify-center cursor-default hover:scale-125 transition-transform duration-300"
                    >
                      <span
                        className="text-[10px] sm:text-xs font-bold"
                        style={{ color: brand.dark ? "#333" : brand.color }}
                      >
                        {brand.text}
                      </span>
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/95 text-navy text-[10px] font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
                      {brand.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinSlowReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes counterSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes counterSpinReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitFadeIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </section>
  );
}
