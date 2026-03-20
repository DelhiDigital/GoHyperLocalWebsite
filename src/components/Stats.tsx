import { TrendingUp, Clock, Package, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "$5.5B",
    label: "Quick commerce market in India by 2025",
  },
  {
    icon: Clock,
    value: "42%",
    label: "YoY growth in same-day hyperlocal orders",
  },
  {
    icon: Users,
    value: "61%",
    label: "Shoppers expect delivery under 3 hours",
  },
  {
    icon: Package,
    value: "30%",
    label: "Higher repeat rate with branded tracking",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-4">
          The quick commerce opportunity
        </h2>
        <p className="text-lg text-gray-medium text-center max-w-2xl mx-auto mb-12">
          The market is moving fast. These industry numbers show why now is the
          time to launch your hyperlocal delivery operations.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-8 border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-blue" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
