"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const orbitIcons = [
  // Outer arc
  { label: "Shopify", icon: "shopify", angle: 200, radius: 320, size: 52, delay: 0 },
  { label: "WooCommerce", icon: "woo", angle: 240, radius: 310, size: 48, delay: 0.5 },
  { label: "Carrier A", icon: "truck", angle: 280, radius: 330, size: 44, delay: 1 },
  { label: "Carrier B", icon: "box", angle: 320, radius: 320, size: 50, delay: 1.5 },
  { label: "Analytics", icon: "chart", angle: 350, radius: 310, size: 46, delay: 2 },
  // Inner arc
  { label: "Tracking", icon: "location", angle: 215, radius: 210, size: 42, delay: 0.3 },
  { label: "Notifications", icon: "bell", angle: 260, radius: 220, size: 44, delay: 0.8 },
  { label: "API", icon: "code", angle: 305, radius: 210, size: 40, delay: 1.3 },
  { label: "Dashboard", icon: "grid", angle: 340, radius: 220, size: 42, delay: 1.8 },
];

function IconSvg({ type, size }: { type: string; size: number }) {
  const s = size * 0.45;
  const icons: Record<string, React.ReactNode> = {
    shopify: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#96BF48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    woo: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#96588A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    truck: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    box: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    chart: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    location: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    bell: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    code: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    grid: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  };
  return <>{icons[type]}</>;
}

export default function OrbitalIntegrations() {
  const { ref, visible } = useReveal(0.2);

  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
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
        <div ref={ref} className="relative flex items-center justify-center" style={{ height: 500 }}>
          {/* Arc lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            {/* Outer arc */}
            <ellipse
              cx="400"
              cy="460"
              rx="340"
              ry="320"
              stroke="rgba(6, 182, 212, 0.12)"
              strokeWidth="1"
              strokeDasharray="6 6"
            />
            {/* Inner arc */}
            <ellipse
              cx="400"
              cy="460"
              rx="220"
              ry="210"
              stroke="rgba(6, 182, 212, 0.08)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Center logo */}
          <div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 transition-all duration-1000 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-primary flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.4)]">
              <Image
                src="/Asset 21@4x-8.png"
                alt="GoHyperLocal"
                width={64}
                height={64}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Orbiting icons */}
          {orbitIcons.map((item, idx) => {
            const rad = (item.angle * Math.PI) / 180;
            // Position relative to center-bottom
            const cx = 50; // center %
            const cy = 92; // near bottom %
            const xPct = cx + (item.radius / 8) * Math.cos(rad);
            const yPct = cy + (item.radius / 5) * Math.sin(rad);

            return (
              <div
                key={idx}
                className="absolute z-10"
                style={{
                  left: `${xPct}%`,
                  top: `${yPct}%`,
                  transform: "translate(-50%, -50%)",
                  opacity: visible ? 1 : 0,
                  animation: visible
                    ? `orbitFloat 4s ease-in-out ${item.delay}s infinite, orbitFadeIn 0.8s ease-out ${item.delay * 0.3}s both`
                    : "none",
                }}
              >
                <div
                  className="rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-default"
                  style={{ width: item.size, height: item.size }}
                  title={item.label}
                >
                  <IconSvg type={item.icon} size={item.size} />
                </div>
              </div>
            );
          })}

          {/* Connecting lines from icons to center */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
          >
            {orbitIcons.map((item, idx) => {
              const rad = (item.angle * Math.PI) / 180;
              const cx = 50;
              const cy = 92;
              const xPct = cx + (item.radius / 8) * Math.cos(rad);
              const yPct = cy + (item.radius / 5) * Math.sin(rad);

              return (
                <line
                  key={idx}
                  x1={`${xPct}`}
                  y1={`${yPct}`}
                  x2="50"
                  y2="92"
                  stroke="rgba(6, 182, 212, 0.08)"
                  strokeWidth="0.15"
                  className={visible ? "opacity-100" : "opacity-0"}
                  style={{
                    transition: `opacity 0.5s ease ${idx * 0.1}s`,
                  }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbitFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
        @keyframes orbitFadeIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </section>
  );
}
