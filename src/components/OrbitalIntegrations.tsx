"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { brandIcons } from "./brandIcons";

type Brand = {
  name: string;
  icon?: string; // key in brandIcons
  color: string;
  fallback?: string; // letter fallback if no icon
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

function BrandIcon({
  brand,
  size,
}: {
  brand: Brand;
  size: number;
}) {
  const iconData = brand.icon ? brandIcons[brand.icon] : null;
  const iconSize = size * 0.45;

  if (iconData) {
    return (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={brand.color}
      >
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

function OrbitRing({
  brands,
  rx,
  ry,
  duration,
  reverse,
  baseSize,
  visible,
  delayOffset,
  startAngle,
  spread,
}: {
  brands: Brand[];
  rx: number;
  ry: number;
  duration: number;
  reverse?: boolean;
  baseSize: number;
  visible: boolean;
  delayOffset: number;
  startAngle: number;
  spread: number;
}) {
  const dir = reverse ? -1 : 1;

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        animation: visible
          ? `orbit${reverse ? "Rev" : "Fwd"} ${duration}s linear infinite`
          : "none",
        transitionDelay: `${delayOffset * 200}ms`,
      }}
    >
      {brands.map((brand, i) => {
        const total = brands.length;
        const angleDeg =
          startAngle + (spread / (total - 1)) * i;
        const angleRad = (angleDeg * Math.PI) / 180;
        const cx = 50;
        const cy = 100;
        const x = cx + rx * Math.cos(angleRad);
        const y = cy + ry * Math.sin(angleRad);

        return (
          <div
            key={brand.name}
            className="absolute z-10"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              opacity: visible ? 1 : 0,
              animation: visible
                ? `iconPop 0.5s ease-out ${delayOffset * 0.15 + i * 0.08}s both`
                : "none",
            }}
          >
            {/* Counter-rotate to keep icon upright */}
            <div
              className="group relative"
              style={{
                animation: visible
                  ? `orbit${reverse ? "Fwd" : "Rev"} ${duration}s linear infinite`
                  : "none",
              }}
            >
              <div
                className="rounded-full bg-white shadow-lg flex items-center justify-center cursor-default hover:scale-[1.2] transition-transform duration-300 border border-white/80"
                style={{ width: baseSize, height: baseSize }}
              >
                <BrandIcon brand={brand} size={baseSize} />
              </div>
              {/* Tooltip */}
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-white text-navy text-[10px] font-semibold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none z-50">
                {brand.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
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
            <span className="text-sm font-semibold text-accent">
              Integrations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            One Platform,{" "}
            <span className="text-primary-light">Infinite Integrations</span>
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
            <ellipse
              cx="400" cy="520" rx="390" ry="370"
              stroke="rgba(6,182,212,0.1)" strokeWidth="1"
            />
            <ellipse
              cx="400" cy="520" rx="280" ry="265"
              stroke="rgba(6,182,212,0.07)" strokeWidth="1"
            />
            <ellipse
              cx="400" cy="520" rx="170" ry="160"
              stroke="rgba(6,182,212,0.05)" strokeWidth="1"
            />
          </svg>

          {/* Center hub */}
          <div
            className={`absolute bottom-0 left-1/2 z-30 transition-all duration-1000 ease-out`}
            style={{
              transform: `translateX(-50%) translateY(50%) scale(${visible ? 1 : 0.5})`,
              opacity: visible ? 1 : 0,
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

          {/* Three orbiting rings */}
          <OrbitRing
            brands={outerRing}
            rx={48}
            ry={70}
            duration={80}
            baseSize={52}
            visible={visible}
            delayOffset={0}
            startAngle={195}
            spread={150}
          />
          <OrbitRing
            brands={middleRing}
            rx={35}
            ry={51}
            duration={65}
            reverse
            baseSize={46}
            visible={visible}
            delayOffset={2}
            startAngle={200}
            spread={140}
          />
          <OrbitRing
            brands={innerRing}
            rx={21}
            ry={30}
            duration={50}
            baseSize={40}
            visible={visible}
            delayOffset={4}
            startAngle={210}
            spread={120}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes orbitFwd {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitRev {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes iconPop {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
