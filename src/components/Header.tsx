"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Truck,
  BarChart3,
  Package,
  RotateCcw,
  Bell,
  Zap,
  Store,
  ShoppingBag,
  Building2,
  Landmark,
} from "lucide-react";

const platformItems = [
  {
    title: "Multi-Carrier Integrations",
    icon: Truck,
    desc: "Connect with 500+ carriers globally",
  },
  {
    title: "Carrier Allocation",
    icon: BarChart3,
    desc: "AI-powered smart carrier selection",
  },
  {
    title: "Shipment Tracking",
    icon: Package,
    desc: "Real-time visibility across carriers",
  },
  {
    title: "NDR Management",
    icon: Bell,
    desc: "Automated non-delivery resolution",
  },
  {
    title: "Returns & Exchanges",
    icon: RotateCcw,
    desc: "Seamless reverse logistics",
  },
  {
    title: "Hyperlocal Delivery",
    icon: Zap,
    desc: "Ultra-fast quick commerce solutions",
  },
];

const solutionItems = [
  { title: "D2C Brands", icon: ShoppingBag },
  { title: "Retail Brands", icon: Store },
  { title: "Marketplaces", icon: Building2 },
  { title: "Banks & Fintech", icon: Landmark },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue to-cyan flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">
              GoHyperLocal
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Platform dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("platform")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                Platform
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "platform" && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 mt-1">
                  {platformItems.map((item) => (
                    <Link
                      key={item.title}
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-blue mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 mt-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
                    By Industry
                  </p>
                  {solutionItems.map((item) => (
                    <Link
                      key={item.title}
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-blue" />
                      <span className="text-sm font-medium text-gray-900">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#features"
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#integrations"
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Integrations
            </Link>
            <Link
              href="#faq"
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact"
              className="btn-gradient inline-block text-center"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="#features"
              className="block text-white/80 hover:text-white font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#integrations"
              className="block text-white/80 hover:text-white font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Integrations
            </Link>
            <Link
              href="#faq"
              className="block text-white/80 hover:text-white font-medium"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="btn-gradient inline-block text-center w-full"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
