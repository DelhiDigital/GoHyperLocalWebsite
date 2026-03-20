import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Products: [
    "Multi-Carrier Integrations",
    "Carrier Allocation",
    "Shipment Tracking",
    "NDR Management",
    "Returns & Exchanges",
    "Hyperlocal Delivery",
  ],
  Solutions: [
    "D2C Brands",
    "Retail Brands",
    "Marketplaces",
    "Quick Commerce",
    "Express Delivery",
  ],
  Resources: [
    "Blog",
    "Case Studies",
    "API Documentation",
    "ROI Calculator",
  ],
  Company: [
    "About Us",
    "Careers",
    "Press",
    "Contact",
  ],
  Legal: [
    "Privacy Policy",
    "Terms & Conditions",
    "Cookie Policy",
    "Security",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
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
            <p className="text-sm text-white/50 leading-relaxed">
              End-to-end logistics intelligence and customer delivery experience
              for quick commerce.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4 text-white/80">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/40 hover:text-white/80 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-8 border-t border-white/10 mb-8">
          {["SOC 2", "GDPR", "ISO 27001", "ISO 27701"].map((badge) => (
            <div
              key={badge}
              className="bg-white/5 rounded-lg px-4 py-2 text-xs font-semibold text-white/50 border border-white/10"
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <p className="text-sm text-white/40">
            © 2026 GoHyperLocal. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["LinkedIn", "Twitter", "Instagram", "YouTube"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-sm text-white/40 hover:text-white/80 transition-colors"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* SEO footer links */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            {[
              "Quick Commerce Platform",
              "Hyperlocal Delivery Software",
              "Logistics Management",
              "Courier Management Software",
              "Returns Management",
              "Shipment Tracking Software",
              "Last Mile Delivery",
              "Express Delivery Solutions",
              "D2C Logistics",
              "Dark Store Management",
              "Carrier Aggregation Platform",
              "Delivery Experience Platform",
            ].map((term) => (
              <Link
                key={term}
                href="#"
                className="text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
