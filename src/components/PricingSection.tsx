import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Rocket, TrendingUp, Crown, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Growth Starter",
    price: "£350 – £1,050",
    period: "/ month",
    description: "For early-stage brands that need structure, a cleaner presence, and consistent output.",
    icon: Rocket,
    features: [
      "1× Strategy Call (60 mins) + action plan",
      "1× Website Refresh (up to 3 pages)",
      "8× Social Posts (or 2 carousels + 4 posts)",
      "1× PR Outreach Sprint (10 targets + 1 press angle)",
      "1× Competitor Snapshot (5 competitors)",
      "1× Performance Review + next steps",
    ],
    bestFor: "Founders who want "clean + credible + consistent" fast.",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-blue-500/50",
  },
  {
    name: "Digital Acceleration",
    price: "£1,350 – £3,350",
    period: "/ month",
    description: "For brands that want measurable growth, content cadence, and campaigns that actually move.",
    icon: TrendingUp,
    features: [
      "2× Strategy Sessions (45 mins each)",
      "16× Social Posts (mix of posts + carousels)",
      "2× Short-Form Videos (15–30s edits)",
      "1× Landing Page Build/Refresh",
      "2× PR Outreach Sprints (25 targets total)",
      "1× Paid/Performance Optimisation (up to £2k ad spend)",
      "1× Monthly Insights Report",
    ],
    bestFor: "Growth companies that need "strategy + execution + results" in one lane.",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "hover:border-violet-500/50",
    popular: true,
  },
  {
    name: "Market Leadership",
    price: "£3,850 – £7,850+",
    period: "/ month",
    description: "For brands ready to look and operate like the leader — multi-channel, higher production, reputational strength.",
    icon: Crown,
    features: [
      "4× Senior Strategy Touchpoints (weekly)",
      "30× Social Assets with content calendar",
      "4× Short-Form Videos (15–45s)",
      "1× Hero Content Piece (Brand Film / Article / Campaign Pack)",
      "Ongoing Reputation + Social Listening",
      "PR Program: 50 targets/month + thought-leadership placement",
      "Performance Marketing (up to £10k ad spend)",
      "Monthly Exec Dashboard",
    ],
    bestFor: "Brands that want domination energy — consistent presence, higher output, and serious authority.",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "hover:border-amber-500/50",
  },
  {
    name: "SEO Package",
    price: "Custom from £500",
    period: "",
    description: "Tailored SEO services to boost your organic visibility and search rankings.",
    icon: Search,
    features: [
      "Technical SEO audit",
      "Keyword research & strategy",
      "On-page optimisation",
      "Content recommendations",
      "Monthly ranking reports",
      "Competitor analysis",
    ],
    bestFor: "Brands focused on long-term organic growth and search visibility.",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "hover:border-emerald-500/50",
  },
];

const PricingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" id="pricing">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="text-sm font-medium text-primary">Packages</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Growth <span className="text-gradient-blue">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the package that fits your stage. All packages include strategic guidance, creative direction, and measurable deliverables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative bg-card rounded-2xl p-6 border border-border ${pkg.borderColor} transition-all duration-500 hover:shadow-dpu-lg flex flex-col ${pkg.popular ? "ring-2 ring-primary/50" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <pkg.icon size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {pkg.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="font-heading text-3xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {pkg.description}
                </p>

                <div className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border mb-6">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Best for:</span> {pkg.bestFor}
                  </p>
                </div>

                <Link to="/contact" className="mt-auto">
                  <Button
                    className="w-full group/btn"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Get Started
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Need something custom? <Link to="/contact" className="text-primary font-semibold hover:text-dpu-cyan transition-colors">Let's talk</Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
