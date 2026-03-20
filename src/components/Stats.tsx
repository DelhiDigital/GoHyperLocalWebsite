import { Star } from "lucide-react";

export default function Stats() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* G2 Rating */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center shadow-sm">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <div className="text-3xl font-bold text-navy mb-1">4.8 / 5</div>
            <div className="text-gray-medium">Rated on G2</div>
          </div>

          {/* Key stat */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center shadow-sm">
            <div className="text-4xl font-bold text-blue mb-2">42%</div>
            <div className="text-gray-medium leading-relaxed">
              Same-day hyperlocal orders grew by 42% in one year
            </div>
          </div>

          {/* Capterra Rating */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center shadow-sm">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < 4
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-yellow-400/50 fill-yellow-400/50"
                  }`}
                />
              ))}
            </div>
            <div className="text-3xl font-bold text-navy mb-1">4.4 / 5</div>
            <div className="text-gray-medium">Rated on Capterra</div>
          </div>
        </div>
      </div>
    </section>
  );
}
