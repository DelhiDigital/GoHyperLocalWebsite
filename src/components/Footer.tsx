import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white" style={{ borderRadius: "44px 44px 0 0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/Asset 21@4x-8.png"
                alt="GoHyperLocal"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-lg font-bold">GoHyperLocal</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              End-to-end logistics intelligence and customer delivery experience
              for quick commerce.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://in.linkedin.com/company/delhidigitalco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#0077B5] transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/delhidigitalco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-pink-600 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-5 text-white/70 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Why Us", href: "#why-us" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sm mb-5 text-white/70 uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-3">
              {[
                "Quick Commerce",
                "Express Delivery",
                "Same-Day Delivery",
                "Dark Store Management",
                "Branded Tracking",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#features"
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-5 text-white/70 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@delhidigital.co"
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  hello@delhidigital.co
                </a>
              </li>
              <li>
                <a
                  href="tel:+919220592205"
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91 92205 92205
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/40">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Delhi, India
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/8">
          <p className="text-xs text-white/30">
            © 2026 GoHyperLocal. All rights reserved. A product by{" "}
            <a
              href="https://delhidigital.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              Delhi Digital
            </a>
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
