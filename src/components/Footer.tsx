import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/Asset 21@4x-8.png"
                alt="GoHyperLocal"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold">GoHyperLocal</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              End-to-end logistics intelligence and customer delivery experience
              for quick commerce.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#integrations" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:hello@delhidigital.co"
                  className="text-sm text-white/40 hover:text-white/80 transition-colors"
                >
                  hello@delhidigital.co
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <Link
                href="https://in.linkedin.com/company/delhidigitalco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/delhidigitalco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-sm text-white/40">
            © 2026 GoHyperLocal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
