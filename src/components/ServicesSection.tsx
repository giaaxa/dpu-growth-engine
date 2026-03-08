import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Megaphone,
  Brain,
  Globe2,
  Palette,
  TrendingUp,
  Video,
  Shield,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Brand Marketing and Consulting",
    description:
      "Build lasting reputation through strategic media relations, thought leadership, and crisis management. We connect your brand with audiences that matter.",
    tags: ["Media Relations", "Crisis Management", "Thought Leadership"],
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "group-hover:border-blue-500/50",
  },
  {
    icon: Brain,
    title: "AI-Powered Marketing",
    description:
      "Leverage cutting-edge AI for predictive analytics, automated campaigns, and intelligent audience targeting. Stay ahead with data-driven decisions.",
    tags: ["Predictive Analytics", "Automation", "Smart Targeting"],
    color: "from-violet-500/30 to-purple-500/30",
    borderColor: "group-hover:border-violet-500/50",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "ROI-focused campaigns across search, social, and programmatic channels. We optimize every dollar for maximum impact and measurable growth.",
    tags: ["PPC", "Social Ads", "Conversion Optimization"],
    color: "from-emerald-500/30 to-green-500/30",
    borderColor: "group-hover:border-emerald-500/50",
  },
  {
    icon: Globe2,
    title: "Global Brand Strategy",
    description:
      "Craft compelling brand narratives that resonate across cultures and markets. From positioning to activation, we build brands that lead.",
    tags: ["Brand Positioning", "Market Entry", "Creative Strategy"],
    color: "from-orange-500/30 to-amber-500/30",
    borderColor: "group-hover:border-orange-500/50",
  },
  {
    icon: Palette,
    title: "Website Design, Development and UX",
    description:
      "Create intuitive, beautiful digital experiences. Our designers blend aesthetics with functionality to engage users and drive conversions.",
    tags: ["UI/UX Design", "Web Development", "App Design"],
    color: "from-pink-500/30 to-rose-500/30",
    borderColor: "group-hover:border-pink-500/50",
  },
  {
    icon: Video,
    title: "Content Production",
    description:
      "From corporate films to social content, we produce compelling visual stories. High-quality production that captures attention and drives engagement.",
    tags: ["Video Production", "Motion Graphics", "Photography"],
    color: "from-red-500/30 to-orange-500/30",
    borderColor: "group-hover:border-red-500/50",
  },
  {
    icon: Shield,
    title: "Reputation Management",
    description:
      "Monitor, protect, and enhance your online reputation 24/7. Proactive strategies to maintain trust and respond to challenges swiftly.",
    tags: ["ORM", "Social Listening", "Crisis Response"],
    color: "from-slate-400/30 to-gray-400/30",
    borderColor: "group-hover:border-slate-500/50",
  },
  {
    icon: Sparkles,
    title: "Social Media Excellence",
    description:
      "Build engaged communities and drive conversations. Strategic content, influencer partnerships, and community management that grows your presence.",
    tags: ["Community Management", "Influencer Marketing", "Content Strategy"],
    color: "from-cyan-500/30 to-teal-500/30",
    borderColor: "group-hover:border-cyan-500/50",
  },
];

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden" id="services">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="text-sm font-medium text-primary">Our Capabilities</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Full-Spectrum Digital{" "}
            <span className="text-gradient-blue">Consulting</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We combine strategic thinking with hands-on execution. From brand strategy to
            AI-powered marketing, we deliver integrated solutions that drive real business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-[hsl(220_20%_12%)] rounded-2xl p-6 border border-[hsl(220_15%_20%)] transition-all duration-500 cursor-pointer
                ${hoveredIndex === i ? "border-primary/50 shadow-dpu-lg scale-[1.02] bg-[hsl(220_20%_16%)]" : "hover:border-primary/30 hover:bg-[hsl(220_20%_14%)]"}
                ${hoveredIndex !== null && hoveredIndex !== i ? "opacity-60 scale-[0.98]" : ""}`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300`}
                  >
                    <service.icon size={24} />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-foreground transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 group-hover:text-muted-foreground/80 transition-colors">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Looking for something specific? We tailor solutions to your unique challenges.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-dpu-cyan transition-colors"
          >
            Let's discuss your needs
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
