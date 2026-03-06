import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Expert Specialists",
    description: "Firstly, you gain access to a team of specialists who are highly skilled and experienced in their respective domains. This ensures that you receive the highest quality of work and expertise tailored to your requirements."
  },
  {
    title: "Diverse Perspectives",
    description: "Secondly, our ability to assemble teams based on specific verticals means that you benefit from a diverse range of perspectives and insights. This collaborative approach fosters innovation and allows us to develop creative and effective solutions."
  },
  {
    title: "Integrated Solutions",
    description: "Thirdly, our emphasis on assembling the right team for your needs means that you save time and effort. We take care of the process for you, providing you with a cohesive and integrated solution under one roof."
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-dpu-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            The Benefits Of Our Approach Are Manifold.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-10 shadow-dpu text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-primary text-primary mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
