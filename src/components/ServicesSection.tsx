import { motion } from "framer-motion";
import {
  Monitor, MessageSquare, Search, PenTool, Brain, Settings,
  Share2, Film, CalendarDays, Shield, BarChart3, Lightbulb
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management And Optimisation",
    description: "Harness the power of social media platforms to connect with your audience, build brand awareness, and drive engagement. Our experts develop comprehensive strategies tailored to your business objectives."
  },
  {
    icon: Film,
    title: "Digital Content Production",
    description: "Tell your brand's story in a captivating and visually appealing way with our digital content production services. Our team of content creators produce high-quality videos, images, and written content that engage and inspire."
  },
  {
    icon: CalendarDays,
    title: "Creative Content Calendar Development",
    description: "Stay organised and consistently deliver valuable content to your audience. Our team will collaborate with you to develop a content strategy aligned with your goals across various platforms."
  },
  {
    icon: Search,
    title: "Search Engine Marketing (SEM)",
    description: "Boost your online presence and drive immediate results with our targeted search engine marketing campaigns. Our SEM specialists create highly optimised PPC advertising campaigns that deliver maximum ROI."
  },
  {
    icon: Brain,
    title: "AI Training And Development",
    description: "Tell your brand's story in a captivating way with our digital content production services. Our team of content creators can produce high-quality videos, images, and written content that engage your audience."
  },
  {
    icon: Settings,
    title: "Technology Solutions",
    description: "Our digital specialists excel in creating innovative and effective technology solutions tailored to your specific requirements. Whether you need a robust web application, mobile app, or API development."
  },
  {
    icon: MessageSquare,
    title: "Digital Public Relations (PR)",
    description: "Build a positive online reputation and establish strong relationships with your target audience through our digital PR services. Our PR experts leverage their media connections and storytelling skills."
  },
  {
    icon: Shield,
    title: "Online Reputation Management (ORM)",
    description: "At DPU we set up teams and training to monitor, respond and resolve all conversations, issues, and queries online. The ORM includes tonality setting, response development, and 24X7 response."
  },
  {
    icon: Lightbulb,
    title: "Research And Insight Mining",
    description: "Brands are living breathing personalities today. We provide digital audits that bring to the fore the brand its competition and category sentiments and insights that are in a state of constant change."
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of digital communication services designed to elevate your brand and drive measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-dpu-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/8 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
