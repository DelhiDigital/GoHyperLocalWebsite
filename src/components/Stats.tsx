import { TrendingUp, Clock, Package, Users } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  {
    icon: TrendingUp,
    value: "$5.5B",
    label: "Quick commerce market in India by 2025",
    solid: "bg-blue-600",
  },
  {
    icon: Clock,
    value: "42%",
    label: "YoY growth in same-day hyperlocal orders",
    solid: "bg-violet-600",
  },
  {
    icon: Users,
    value: "61%",
    label: "Shoppers expect delivery under 3 hours",
    solid: "bg-emerald-600",
  },
  {
    icon: Package,
    value: "30%",
    label: "Higher repeat rate with branded tracking",
    solid: "bg-amber-600",
  },
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-primary">Market Opportunity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4 tracking-tight">
            The Quick Commerce
            <span className="gradient-text"> Opportunity</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            The market is moving fast. These numbers show why now is the time to
            launch your hyperlocal delivery operations.
          </p>
        </Reveal>

        <Reveal animation="stagger" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-8 border border-border text-center card-hover"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.solid} flex items-center justify-center mx-auto mb-5 shadow-sm`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-navy mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
