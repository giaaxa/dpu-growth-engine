import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const capabilities = [
  "Technology",
  "Performance Marketing",
  "Digital PR",
  "Digital Design",
  "Digital Content (Including Corporate Films)",
  "UI/UX",
  "Social Media Management",
  "Innovative AI Solutions",
];

const CapabilitiesGrid = () => {
  return (
    <section className="py-24 bg-dpu-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Our Expertise</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Comprehensive Digital Capabilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 bg-primary text-primary-foreground rounded-xl px-5 py-4 font-heading text-sm font-semibold shadow-dpu"
            >
              <CheckCircle size={18} className="shrink-0" />
              {cap}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;
