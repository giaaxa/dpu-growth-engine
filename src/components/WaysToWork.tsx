import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Briefcase, TrendingUp, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const workOptions = [
  {
    icon: Briefcase,
    title: "One-Off Projects",
    heading: "Need one thing done properly?",
    description:
      "For clearly defined projects where you need senior thinking and specialist execution without an ongoing retainer.",
    items: [
      "Website refreshes",
      "Landing pages",
      "Brand strategy",
      "Marketing strategy",
      "Campaign development",
      "Social content",
      "Video content",
      "Photography",
      "SEO projects",
      "Paid campaign setup",
      "PR campaigns",
      "Market research",
      "Competitor research",
      "Events and activations",
    ],
    cta: "Discuss a Project",
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Growth Partnerships",
    heading: "Need consistent marketing support?",
    description:
      "For ambitious SMEs and scaling businesses that need ongoing marketing capability without building an entire internal department.",
    items: [
      "Marketing strategy",
      "Brand positioning",
      "Campaign planning",
      "Social media",
      "Content production",
      "Short-form video",
      "Website optimisation",
      "Landing pages",
      "SEO",
      "Paid media",
      "Lead generation",
      "PR and outreach",
      "Reputation management",
      "Competitor intelligence",
      "Reporting and optimisation",
    ],
    footnote:
      "The team, channels and priorities are built around the growth plan rather than predetermined service quotas.",
    cta: "Explore Growth Partnerships",
    ctaLink: "/growth",
    color: "dpu-cyan",
    featured: true,
  },
  {
    icon: Building2,
    title: "Brand Partnerships",
    heading: "Need an integrated team?",
    description:
      "For established brands, automotive companies and organisations requiring strategy and execution across multiple disciplines, markets or campaigns.",
    items: [
      "Brand strategy",
      "Integrated campaigns",
      "Automotive marketing",
      "Content and production",
      "Social and community",
      "Creator and influencer programmes",
      "PR and reputation",
      "Product launches",
      "Events and experiential",
      "Dealer activation",
      "Performance marketing",
      "Research and insights",
      "Market localisation",
    ],
    cta: "Discuss a Brief",
    color: "primary",
  },
];

const WaysToWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" id="ways-to-work">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="text-sm font-medium text-primary">Ways to Work With Us</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built around the <span className="text-gradient-blue">brief.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            No two businesses need exactly the same marketing team. Some clients come to DPU for a
            single project. Others use us as an ongoing growth partner. For larger organisations, we
            build multidisciplinary teams around the challenge.
          </p>
          <p className="text-base text-muted-foreground">
            Tell us where you are, where you're trying to get to, and we'll recommend the right way
            to work together.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {workOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className={`group relative ${option.featured ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              <div
                className={`h-full bg-card rounded-2xl border transition-all duration-500 overflow-hidden ${
                  option.featured
                    ? "border-dpu-cyan/50 shadow-lg shadow-dpu-cyan/10"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {/* Featured badge */}
                {option.featured && (
                  <div className="bg-gradient-to-r from-dpu-cyan to-primary py-2 text-center">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon and title */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                      option.color === "dpu-cyan"
                        ? "bg-dpu-cyan/10 text-dpu-cyan"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <option.icon size={26} />
                  </div>

                  <p
                    className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
                      option.color === "dpu-cyan" ? "text-dpu-cyan" : "text-primary"
                    }`}
                  >
                    {option.title}
                  </p>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {option.heading}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6">{option.description}</p>

                  {/* Items */}
                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                      Possible work includes:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {option.items.slice(0, 8).map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                      {option.items.length > 8 && (
                        <span className="px-2.5 py-1 text-xs bg-muted/30 text-muted-foreground rounded-md">
                          +{option.items.length - 8} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footnote */}
                  {option.footnote && (
                    <p className="text-xs text-muted-foreground italic mb-6 p-3 bg-muted/30 rounded-lg">
                      {option.footnote}
                    </p>
                  )}

                  {/* CTA */}
                  <Button
                    className={`w-full h-12 font-semibold ${
                      option.featured
                        ? "bg-dpu-cyan hover:bg-dpu-cyan/90 text-white shadow-lg"
                        : "bg-primary hover:bg-dpu-blue-light text-primary-foreground"
                    }`}
                    onClick={() => {
                      if (option.ctaLink) {
                        window.location.href = option.ctaLink;
                      } else {
                        window.open(
                          "https://calendly.com/gia-pereira31/15-min-discovery-call",
                          "_blank"
                        );
                      }
                    }}
                  >
                    {option.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToWork;
