import Link from "next/link";

const carriers = [
  "Shadowfax",
  "Porter",
  "Dunzo",
  "Borzo",
  "Zomato",
  "Swiggy",
  "Uber",
  "Delhivery",
  "Pidge",
  "Blowhorn",
  "Doordash",
  "Rapido",
  "Loadshare",
  "Shipyaari",
  "Ecom Express",
  "BlueDart",
  "DTDC",
  "Xpressbees",
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Go live faster with 30+ hyperlocal carrier integrations
          </h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            Pre-built integrations with all major hyperlocal and express delivery
            carriers. Go live in days, not months.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-10">
          {carriers.map((carrier) => (
            <div
              key={carrier}
              className="bg-gray-50 rounded-xl border border-gray-100 p-4 flex items-center justify-center h-20 hover:border-blue/30 hover:shadow-md transition-all"
            >
              <span className="text-sm font-semibold text-gray-500 text-center">
                {carrier}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#contact"
            className="text-blue font-semibold hover:underline text-lg"
          >
            View all integrations →
          </Link>
        </div>
      </div>
    </section>
  );
}
