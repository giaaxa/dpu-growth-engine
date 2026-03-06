import { motion } from "framer-motion";
import { Globe, Users, Zap, Shield } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Network of Professionals", description: "Highly skilled specialists across multiple verticals" },
  { icon: Globe, value: "Global", label: "Client Reach", description: "Clients across Singapore, U.K, India, Taiwan, Indonesia and more" },
  { icon: Zap, value: "Fast", label: "Speed & Accuracy", description: "Unmatched speed, accuracy and competitive costing on deliverables" },
  { icon: Shield, value: "Trusted", label: "Strategic Partner", description: "Timely approach with expertise to tackle your specific challenges" },
];

const CredibilitySection = () => {
  return (
    <section className="py-20 bg-dpu-light" id="capabilities">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-dpu text-center group hover:shadow-dpu-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <stat.icon size={26} />
              </div>
              <div className="font-heading text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="font-heading text-sm font-semibold text-primary mb-2">{stat.label}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
