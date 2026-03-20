"use client";

const brands = [
  "Decathlon",
  "PUMA",
  "Nykaa",
  "Birkenstock",
  "Adidas",
  "The Body Shop",
  "TATA 1mg",
  "Lenskart",
  "Mamaearth",
  "boAt",
  "Sugar Cosmetics",
  "Bewakoof",
];

export default function TrustedBrands() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg font-semibold text-gray-medium mb-10">
          Trusted by <span className="text-navy font-bold">450+</span> global
          brands
        </p>
        <div className="overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex logo-slider">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="bg-gray-50 rounded-xl px-8 py-4 border border-gray-100 hover:border-blue/30 transition-colors">
                  <span className="text-lg font-semibold text-gray-400 whitespace-nowrap">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
