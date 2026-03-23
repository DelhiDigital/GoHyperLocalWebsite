import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Clock, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 overflow-hidden bg-white">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue/[0.03] to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue/[0.02] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue/5 border border-blue/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-blue rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue">
                Quick Commerce Platform
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-gray-900">
              Deliver{" "}
              <span className="text-blue">Now</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium mb-4 text-gray-700">
              Logistics Intelligence for{" "}
              <span className="text-blue font-semibold">
                D2C Quick Commerce
              </span>
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
              Real-time tracking, smart carrier switching, and accurate ETAs for
              ultra-fast hyperlocal deliveries — plus a beautiful branded
              customer-facing delivery experience built for your brand.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">30%</div>
                  <div className="text-sm text-gray-500">
                    Higher repeat purchases
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">61%</div>
                  <div className="text-sm text-gray-500">
                    Want delivery in &lt;3 hrs
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10 min</div>
                  <div className="text-sm text-gray-500">
                    Fastest delivery possible
                  </div>
                </div>
              </div>
            </div>

            <Link href="#contact" className="btn-gradient inline-block text-lg">
              Contact Us
            </Link>

            {/* Platform integrations */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-4">
                Integrates with your storefront
              </p>
              <div className="flex items-center gap-8 flex-wrap">
                {/* Shopify */}
                <svg className="h-7 text-gray-400 hover:text-[#96BF48] transition-colors" viewBox="0 0 256 292" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.828-.183.05-3.37 1.034-8.741 2.677-5.199-15.007-14.348-28.768-30.47-28.768-.444 0-.901.018-1.358.044C129.31 3.407 123.832.779 119.204.779c-36.932 0-54.607 46.148-60.136 69.636-14.357 4.444-24.548 7.607-25.788 7.964-8.025 2.524-8.274 2.773-9.328 10.345C23.25 94.881 0 271.706 0 271.706l176.312 30.599 95.682-20.76S223.975 58.8 223.774 57.34zM156.2 40.146l-11.784 3.647c.009-.32.013-.644.013-.96 0-9.836-1.367-17.766-3.613-23.96 8.969 1.67 14.944 11.33 15.384 21.273zm-27.88-19.222c2.544 6.354 4.186 15.44 4.186 27.803 0 .583-.009 1.13-.021 1.674-8.652 2.678-18.103 5.607-27.58 8.543 5.316-20.41 15.31-32.626 23.415-38.02zM118.4 7.758c1.584 0 3.144.528 4.652 1.567-11.052 5.198-22.888 18.285-27.885 44.388-7.536 2.332-14.913 4.614-21.86 6.766C80.6 39.128 94.834 7.758 118.4 7.758z"/>
                  <path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099a3.647 3.647 0 0 0-2.146-1.058l-2.187 252.223 95.682-20.76S223.975 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357z" opacity="0.25"/>
                  <path d="M133.383 99.076l-10.918 32.41s-12.079-5.558-26.297-5.558c-21.259 0-22.323 13.324-22.323 16.685 0 18.329 47.77 25.343 47.77 68.263 0 33.774-21.408 55.502-50.289 55.502-34.655 0-52.368-21.564-52.368-21.564l9.265-30.615s18.2 15.63 33.56 15.63c10.028 0 14.112-7.903 14.112-13.674 0-23.867-39.206-24.932-39.206-64.237 0-33.04 23.717-65.02 71.608-65.02 18.43 0 25.086 5.178 25.086 5.178z" fill="#fff"/>
                </svg>
                {/* WooCommerce */}
                <svg className="h-7 text-gray-400 hover:text-[#96588A] transition-colors" viewBox="0 0 512 153" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.5 0h393.7C464.1 0 483 15.2 488.1 37.8l23.4 89.3c2.7 10.3-3.5 20.9-13.8 23.6-1.6.4-3.3.7-5 .7H47.5c-14.1 0-26.5-9.4-30.3-23L.5 64.9C-4.6 45.5 6.7 25.5 26.1 20.4 30.6 19.2 35.3 18.6 40 19h7.5V0z" opacity="0.15"/>
                  <text x="60" y="100" fontFamily="system-ui" fontSize="72" fontWeight="700">Woo</text>
                </svg>
                {/* Wix */}
                <svg className="h-6 text-gray-400 hover:text-black transition-colors" viewBox="0 0 200 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <text x="10" y="60" fontFamily="system-ui" fontSize="64" fontWeight="800">Wix</text>
                </svg>
                {/* Magento */}
                <svg className="h-7 text-gray-400 hover:text-[#F46F25] transition-colors" viewBox="0 0 200 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <text x="5" y="58" fontFamily="system-ui" fontSize="48" fontWeight="700">Magento</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Background image */}
              <div className="rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/hero-warehouse.jpg"
                  alt="Aerial view of logistics and shipping containers powering quick commerce"
                  width={600}
                  height={480}
                  className="object-cover rounded-2xl w-full h-[480px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-transparent rounded-2xl" />

                {/* Dashboard mockup overlaid */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 w-full max-w-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <div className="flex-1 bg-gray-100 rounded-full h-5 ml-3" />
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-900">
                          Live Order Tracking
                        </span>
                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                          On the way
                        </span>
                      </div>
                      <div className="bg-gradient-to-br from-blue/10 to-blue/5 rounded-lg h-28 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-3 left-6 w-16 h-0.5 bg-gray-400 rotate-12" />
                          <div className="absolute top-8 left-3 w-24 h-0.5 bg-gray-400 -rotate-6" />
                          <div className="absolute top-14 left-12 w-20 h-0.5 bg-gray-400 rotate-3" />
                          <div className="absolute top-6 left-16 w-0.5 h-16 bg-gray-400 rotate-6" />
                        </div>
                        <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center shadow-lg animate-pulse z-10">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        <div className="absolute bottom-3 right-3 w-4 h-4 bg-blue/60 rounded-full flex items-center justify-center shadow z-10">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                        <div
                          className="absolute z-10"
                          style={{
                            top: "45%",
                            left: "35%",
                            width: "30%",
                            height: "2px",
                            background: "linear-gradient(90deg, #155FFF, #155FFF80)",
                          }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-blue">12 min</div>
                        <div className="text-[10px] text-gray-500">ETA</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-gray-900">2.4 km</div>
                        <div className="text-[10px] text-gray-500">Distance</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-green-600">Active</div>
                        <div className="text-[10px] text-gray-500">Rider</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      <span className="text-blue">42%</span> Growth
                    </div>
                    <div className="text-xs text-gray-500">
                      Same-day hyperlocal orders
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
