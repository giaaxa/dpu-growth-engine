import { motion } from "framer-motion";

const SocialMetrics = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Social Metrics</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Increase Your Website Traffic And Attract More Customers Organically
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Finally, our approach enables us to stay at the forefront of the digital communication industry. With specialists in various verticals, we are constantly learning and adapting to the latest trends, technologies, and best practices. This ensures that the content communication solutions we deliver to you are not only effective today but also future-proofed to meet the evolving demands of the digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Abstract metrics visual */}
            <div className="bg-gradient-to-br from-dpu-blue-light/10 to-accent/5 rounded-2xl p-12 border border-border">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "300%", label: "Traffic Growth" },
                  { value: "85%", label: "Client Retention" },
                  { value: "150+", label: "Projects Delivered" },
                  { value: "24/7", label: "Global Support" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-heading text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialMetrics;
