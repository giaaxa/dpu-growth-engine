import { motion } from "framer-motion";
import { Search, Target, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Understand",
    description: "We begin by deeply understanding your business, goals, and the unique challenges you face in the digital landscape."
  },
  {
    icon: Target,
    step: "02",
    title: "Strategise",
    description: "Our specialists assemble teams based on specific verticals to develop a tailored strategy that aligns with your objectives."
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute",
    description: "We deliver with unmatched speed and accuracy, ensuring every deliverable meets the highest standards of quality."
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Optimise",
    description: "We constantly learn and adapt to the latest trends, ensuring your solutions are effective today and future-proofed for tomorrow."
  },
];

const ApproachSection = () => {
  return (
    <section className="py-24 bg-gradient-cta relative overflow-hidden" id="about">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-primary-foreground rounded-full" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-dpu-cyan tracking-widest uppercase mb-3">Our Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">The DPU Approach</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            A methodical, strategic approach that ensures you receive the expertise necessary to tackle your specific challenges effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground mb-5">
                <step.icon size={28} />
              </div>
              <div className="text-xs font-bold text-dpu-cyan tracking-widest mb-2">{step.step}</div>
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
