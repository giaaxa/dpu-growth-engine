import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

// Brand logos
import dbsLogo from "@/assets/brands/dbs.png";
import ktmLogo from "@/assets/brands/ktm.jpeg";
import husqvarnaLogo from "@/assets/brands/husqvarna.png";
import prilLogo from "@/assets/brands/pril.webp";
import iciciLogo from "@/assets/brands/icici.jpeg";
import bajajLogo from "@/assets/brands/bajaj.jpeg";
import autodeskLogo from "@/assets/brands/autodesk.png";

const brands = [
  { name: "DBS Bank", logo: dbsLogo },
  { name: "KTM", logo: ktmLogo },
  { name: "Husqvarna", logo: husqvarnaLogo },
  { name: "Pril", logo: prilLogo },
  { name: "ICICI Lombard", logo: iciciLogo },
  { name: "Bajaj Auto", logo: bajajLogo },
  { name: "Autodesk", logo: autodeskLogo },
];

const stats = [
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "Average Traffic Growth",
    description: "Across client campaigns in the first 6 months",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Expert Professionals",
    description: "In our global network of specialists",
  },
  {
    icon: Globe,
    value: 6,
    suffix: "",
    label: "Countries Served",
    description: "UK, Singapore, India, Taiwan, Indonesia & more",
  },
  {
    icon: Award,
    value: 14,
    suffix: "+",
    label: "Years Experience",
    description: "Building brands and driving digital growth",
  },
];

// Animated counter hook
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, start]);

  return count;
};

const StatCard = ({
  stat,
  index,
  isInView,
}: {
  stat: typeof stats[0];
  index: number;
  isInView: boolean;
}) => {
  const count = useCounter(stat.value, 2000, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden">
        {/* Gradient glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-dpu-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Pulse ring behind icon */}
        <div className="absolute top-8 left-8 w-14 h-14 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <stat.icon size={26} />
          </div>

          <div className="flex items-baseline gap-1 mb-2">
            <span className="font-heading text-5xl md:text-6xl font-bold text-foreground">
              {count}
            </span>
            <span className="font-heading text-3xl md:text-4xl font-bold text-primary">
              {stat.suffix}
            </span>
          </div>

          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
            {stat.label}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {stat.description}
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full" />
      </div>
    </motion.div>
  );
};

const CredibilitySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" id="capabilities">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dpu-cyan/30 bg-dpu-cyan/5 mb-6">
            <span className="text-sm font-medium text-dpu-cyan">Proven Results</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Numbers That <span className="text-gradient-blue">Speak</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record demonstrates consistent delivery of measurable outcomes for clients
            across industries and markets.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by leading brands across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <div className="h-10 flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-auto max-w-[100px] object-contain"
                  />
                </div>
                <span className="font-heading text-xs font-semibold text-muted-foreground">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySection;
