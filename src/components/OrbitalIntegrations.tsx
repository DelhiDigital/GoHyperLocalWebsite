"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { brandIcons } from "./brandIcons";

type Brand = {
  name: string;
  icon?: string;
  color: string;
  fallback?: string;
};

const outerRing: Brand[] = [
  { name: "Shopify", icon: "shopify", color: "#7AB55C" },
  { name: "Uber", icon: "uber", color: "#000000" },
  { name: "Swiggy", icon: "swiggy", color: "#FC8019" },
  { name: "WooCommerce", icon: "woocommerce", color: "#96588A" },
  { name: "Wix", icon: "wix", color: "#0C6EFC" },
  { name: "Dunzo", icon: "dunzo", color: "#00D290" },
  { name: "Zomato", icon: "zomato", color: "#E23744" },
  { name: "FedEx", icon: "fedex", color: "#4D148C" },
];

const middleRing: Brand[] = [
  { name: "Delhivery", color: "#E30613", fallback: "De" },
  { name: "BlueDart", color: "#003DA5", fallback: "BD" },
  { name: "Shadowfax", color: "#6C3CFC", fallback: "Sf" },
  { name: "DHL", icon: "dhl", color: "#D0A400" },
  { name: "Porter", color: "#2C3E50", fallback: "Pt" },
  { name: "Ecom Express", color: "#1A237E", fallback: "Ee" },
];

const innerRing: Brand[] = [
  { name: "WhatsApp", icon: "whatsapp", color: "#25D366" },
  { name: "Razorpay", icon: "razorpay", color: "#0C2451" },
  { name: "Google Maps", icon: "googlemaps", color: "#4285F4" },
  { name: "PhonePe", icon: "phonepe", color: "#5F259F" },
];

function BrandIcon({ brand, size }: { brand: Brand; size: number }) {
  const iconData = brand.icon ? brandIcons[brand.icon] : null;
  const iconSize = size * 0.45;

  if (iconData) {
    return (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill={brand.color}>
        <path d={iconData.path} />
      </svg>
    );
  }

  return (
    <span
      className="font-bold leading-none"
      style={{ color: brand.color, fontSize: iconSize * 0.55 }}
    >
      {brand.fallback || brand.name[0]}
    </span>
  );
}

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
          className="relative mx-auto"
          style={{ height: 520, maxWidth: 800 }}
        >
          {/* Arc lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 520"
            fill="none"
          >
            <ellipse cx="400" cy="520" rx="390" ry="370" stroke="rgba(6,182,212,0.1)" strokeWidth="1" />
            <ellipse cx="400" cy="520" rx="280" ry="265" stroke="rgba(6,182,212,0.07)" strokeWidth="1" />
            <ellipse cx="400" cy="520" rx="170" ry="160" stroke="rgba(6,182,212,0.05)" strokeWidth="1" />
          </svg>

          {/* Outer ring icons on elliptical path */}
          {outerRing.map((brand, i) => {
            const total = outerRing.length;
            const startAngle = 195;
            const spread = 150;
            const baseAngle = startAngle + (spread / (total - 1)) * i;

            return (
              <div
                key={brand.name}
                className="absolute group"
                style={{
                  left: "50%",
                  bottom: 0,
                  width: 0,
                  height: 0,
                  animation: visible ? `ellipseOrbit 80s linear infinite` : "none",
                  // Each icon gets a unique custom property for its starting angle
                  // and the ellipse radii
                  ["--start-angle" as string]: `${baseAngle}deg`,
                  ["--rx" as string]: "390px",
                  ["--ry" as string]: "370px",
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.5s ease ${i * 0.1}s`,
                }}
              >
                <div
                  className="absolute"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotate(calc(var(--start-angle) + var(--orbit-progress, 0deg)))
                    `,
                  }}
                >
                </div>
              </div>
            );
          })}

          {/* Use CSS motion path approach instead */}
          {/* Outer ring */}
          {outerRing.map((brand, i) => {
            const total = outerRing.length;
            const startAngle = 195;
            const spread = 150;
            const initAngle = startAngle + (spread / (total - 1)) * i;

            return (
              <div
                key={`outer-${brand.name}`}
                className="absolute group z-10"
                style={{
                  offsetPath: `ellipse(48.75% 71.15% at 50% 100%)`,
                  offsetRotate: "0deg",
                  offsetDistance: `${((initAngle - 180) / 360) * 100}%`,
                  animation: visible
                    ? `moveAlongPath 80s linear infinite`
                    : "none",
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.5s ease ${i * 0.08}s`,
                } as React.CSSProperties}
              >
                <div
                  className="rounded-full bg-white shadow-lg flex items-center justify-center cursor-default hover:scale-[1.3] transition-transform duration-300 border border-gray-100"
                  style={{ width: 52, height: 52 }}
                >
                  <BrandIcon brand={brand} size={52} />
                </div>
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-white text-navy text-[10px] font-semibold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none z-50">
                  {brand.name}
                </div>
              </div>
            );
          })}

          {/* Middle ring */}
          {middleRing.map((brand, i) => {
            const total = middleRing.length;
            const startAngle = 200;
            const spread = 140;
            const initAngle = startAngle + (spread / (total - 1)) * i;

            return (
              <div
                key={`mid-${brand.name}`}
                className="absolute group z-10"
                style={{
                  offsetPath: `ellipse(35% 50.96% at 50% 100%)`,
                  offsetRotate: "0deg",
                  offsetDistance: `${((initAngle - 180) / 360) * 100}%`,
                  animation: visible
                    ? `moveAlongPathReverse 65s linear infinite`
                    : "none",
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.5s ease ${0.3 + i * 0.08}s`,
                } as React.CSSProperties}
              >
                <div
                  className="rounded-full bg-white shadow-lg flex items-center justify-center cursor-default hover:scale-[1.3] transition-transform duration-300 border border-gray-100"
                  style={{ width: 46, height: 46 }}
                >
                  <BrandIcon brand={brand} size={46} />
                </div>
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-white text-navy text-[10px] font-semibold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none z-50">
                  {brand.name}
                </div>
              </div>
            );
          })}

          {/* Inner ring */}
          {innerRing.map((brand, i) => {
            const total = innerRing.length;
            const startAngle = 210;
            const spread = 120;
            const initAngle = startAngle + (spread / (total - 1)) * i;

            return (
              <div
                key={`inner-${brand.name}`}
                className="absolute group z-10"
                style={{
                  offsetPath: `ellipse(21.25% 30.77% at 50% 100%)`,
                  offsetRotate: "0deg",
                  offsetDistance: `${((initAngle - 180) / 360) * 100}%`,
                  animation: visible
                    ? `moveAlongPath 50s linear infinite`
                    : "none",
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.5s ease ${0.6 + i * 0.08}s`,
                } as React.CSSProperties}
              >
                <div
                  className="rounded-full bg-white shadow-lg flex items-center justify-center cursor-default hover:scale-[1.3] transition-transform duration-300 border border-gray-100"
                  style={{ width: 40, height: 40 }}
                >
                  <BrandIcon brand={brand} size={40} />
                </div>
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-white text-navy text-[10px] font-semibold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none z-50">
                  {brand.name}
                </div>
              </div>
            );
          })}

          {/* Center hub */}
          <div
            className="absolute bottom-0 left-1/2 z-30"
            style={{
              transform: `translateX(-50%) translateY(50%) scale(${visible ? 1 : 0.5})`,
              opacity: visible ? 1 : 0,
              transition: "all 1s ease-out",
            }}
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
        </div>
      </div>

      <style jsx>{`
        @keyframes moveAlongPath {
          from { offset-distance: 0%; }
          to { offset-distance: 100%; }
        }
        @keyframes moveAlongPathReverse {
          from { offset-distance: 100%; }
          to { offset-distance: 0%; }
        }
      `}</style>
    </section>
  );
}
