import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Rocket, BarChart3, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Discover",
    description:
      "We dive deep into your business, market, and audience. Through research and analysis, we uncover the insights that will drive your strategy.",
  },
  {
    icon: Target,
    step: "02",
    title: "Strategize",
    description:
      "Our specialists craft bespoke strategies aligned with your goals. We assemble expert teams tailored to your specific industry and challenges.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute",
    description:
      "We deliver with precision and speed. Every campaign, every piece of content, every touchpoint is optimized for maximum impact.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Optimize",
    description:
      "Continuous learning drives continuous improvement. We analyze, adapt, and evolve your strategy based on real performance data.",
  },
];

const differentiators = [
  "14+ years of global experience across 6 countries",
  "Network of 500+ specialized digital professionals",
  "AI-powered insights and automation capabilities",
  "Full-service: strategy through execution",
  "Proven results with Fortune 500 and growth companies",
  "24/7 support with dedicated account teams",
];

const ApproachSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" id="about">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container relative z-10" ref={containerRef}>
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side - About DPU */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dpu-cyan/30 bg-dpu-cyan/5 mb-6">
              <span className="text-sm font-medium text-dpu-cyan">About DPU</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              We're Your Strategic Partners in{" "}
              <span className="text-gradient-blue">Digital Growth</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Digital Professionals Unwired (DPU) isn't just another agency — we're a{" "}
              <strong className="text-foreground">global consultancy</strong> that combines deep
              strategic expertise with hands-on execution excellence.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Founded by industry veterans with decades of experience at Ogilvy, Publicis, and
              Genesis Burson-Marsteller, we bring enterprise-grade thinking to companies of all
              sizes. Our network spans the UK, Singapore, India, Taiwan, Indonesia, and beyond —
              giving you truly global reach with local insight.
            </p>

            {/* Differentiators */}
            <div className="space-y-3 mb-8">
              {differentiators.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-dpu-cyan shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="relative pl-6 border-l-2 border-primary"
            >
              <p className="text-lg text-foreground italic mb-2">
                "Creative messaging that moves at speed and adapts decisively to data."
              </p>
              <p className="text-sm text-muted-foreground">
                — Our guiding philosophy
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
              How We Work
            </h3>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="group relative"
                >
                  {/* Connection line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-6 top-14 w-px h-16 bg-gradient-to-b from-border to-transparent" />
                  )}

                  <div className="flex gap-5">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                        <step.icon size={22} />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {step.step.replace("0", "")}
                      </span>
                    </div>

                    <div className="flex-1 pt-1">
                      <h4 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
