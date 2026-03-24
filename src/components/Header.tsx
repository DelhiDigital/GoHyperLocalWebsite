"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Asset 20@4x-8.png"
              alt="GoHyperLocal"
              width={44}
              height={44}
              className="rounded-lg"
            />
            <span className={`text-lg font-bold hidden sm:block transition-colors ${scrolled ? "text-navy" : "text-white"}`}>
              GoHyperLocal
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? "text-muted hover:text-navy hover:bg-surface"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919220592205"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? "text-muted hover:text-navy" : "text-white/70 hover:text-white"}`}
            >
              <Phone className="w-4 h-4" />
              +91 92205 92205
            </a>
            <Link href="#contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-navy" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-navy" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-xl">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-muted hover:text-navy hover:bg-surface rounded-lg font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+919220592205"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted"
              >
                <Phone className="w-4 h-4" />
                +91 92205 92205
              </a>
              <Link
                href="#contact"
                className="btn-primary w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
