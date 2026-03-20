import Link from "next/link";
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
          </div>

          {/* Right visual */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Dashboard mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 bg-gray-100 rounded-full h-6 ml-4" />
                </div>
                {/* Mock tracking UI */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-900">
                        Live Order Tracking
                      </span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                        On the way
                      </span>
                    </div>
                    {/* Map placeholder */}
                    <div className="bg-gradient-to-br from-blue/10 to-blue/5 rounded-lg h-40 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 left-8 w-20 h-0.5 bg-gray-400 rotate-12" />
                        <div className="absolute top-12 left-4 w-32 h-0.5 bg-gray-400 -rotate-6" />
                        <div className="absolute top-20 left-16 w-24 h-0.5 bg-gray-400 rotate-3" />
                        <div className="absolute bottom-12 left-8 w-28 h-0.5 bg-gray-400 -rotate-12" />
                        <div className="absolute top-8 left-20 w-0.5 h-24 bg-gray-400 rotate-6" />
                        <div className="absolute top-4 right-16 w-0.5 h-32 bg-gray-400 -rotate-3" />
                      </div>
                      <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center shadow-lg animate-pulse z-10">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                      <div className="absolute bottom-4 right-4 w-6 h-6 bg-blue/60 rounded-full flex items-center justify-center shadow z-10">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div
                        className="absolute z-10"
                        style={{
                          top: "45%",
                          left: "35%",
                          width: "30%",
                          height: "2px",
                          background:
                            "linear-gradient(90deg, #155FFF, #155FFF80)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue">12 min</div>
                      <div className="text-xs text-gray-500">ETA</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-gray-900">2.4 km</div>
                      <div className="text-xs text-gray-500">Distance</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-green-600">Active</div>
                      <div className="text-xs text-gray-500">Rider Status</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
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
