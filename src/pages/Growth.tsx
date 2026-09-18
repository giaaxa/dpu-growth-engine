import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaysToWork from "@/components/WaysToWork";

// Capability areas with their services
const capabilities = [
  {
    title: "Website & Digital",
    services: [
      "Website refreshes",
      "Full website builds",
      "Landing pages",
      "UX improvements",
      "Conversion optimisation",
      "SEO",
      "Technical website improvements",
    ],
  },
  {
    title: "Content & Social",
    services: [
      "Social strategy",
      "Social content",
      "Carousels and static creative",
      "Short-form video",
      "Photography",
      "Content calendars",
      "Community management",
      "Creator content",
    ],
  },
  {
    title: "Campaigns & Growth",
    services: [
      "Paid social",
      "Paid search",
      "Lead generation",
      "Campaign development",
      "Launch campaigns",
      "CRM/customer journeys",
      "Conversion optimisation",
    ],
  },
  {
    title: "Brand & Strategy",
    services: [
      "Brand positioning",
      "Marketing strategy",
      "Go-to-market strategy",
      "Competitor research",
      "Customer research",
      "Quarterly planning",
      "Campaign strategy",
    ],
  },
  {
    title: "PR & Reputation",
    services: [
      "PR outreach",
      "Thought leadership",
      "Media relations",
      "Reputation management",
      "Social listening",
      "Brand monitoring",
    ],
  },
];

const Growth = () => {
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const isCapabilitiesInView = useInView(capabilitiesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* What We Can Actually Do Section */}
      <section className="pt-32 pb-24 relative" ref={capabilitiesRef}>
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-dpu-cyan/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="text-sm font-medium text-primary">Tangible Execution</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What we can actually <span className="text-gradient-blue">do</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not abstract strategy talk. Real work that drives real results.
            </p>
          </motion.div>

          {/* Capabilities Table Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden">
              {capabilities.map((cap, index) => (
                <div
                  key={cap.title}
                  className="bg-card p-6 hover:bg-card/80 transition-colors"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4 pb-3 border-b border-border">
                    {cap.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {cap.services.map((service) => (
                      <li
                        key={service}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-dpu-cyan mt-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Alternative: Clean horizontal layout for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              The team, channels and priorities are built around your growth plan
            </p>
            <Button
              variant="outline"
              className="border-dpu-cyan/50 text-dpu-cyan hover:bg-dpu-cyan/10"
              onClick={() => window.open('https://calendly.com/gia-pereira31/15-min-discovery-call', '_blank')}
            >
              Discuss Your Requirements
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Ways to Work Section */}
      <WaysToWork />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-dpu-cyan/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dpu-cyan/10 rounded-full blur-[150px]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to build your{" "}
              <span className="text-gradient-glow">growth engine?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Tell us where you are and where you're trying to get to. We'll recommend the right way to work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dpu-cyan hover:bg-dpu-cyan/90 text-white font-semibold px-10 h-16 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://calendly.com/gia-pereira31/15-min-discovery-call', '_blank')}
              >
                Tell Us About Your Brief
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-dpu-cyan/50 font-semibold px-10 h-16 text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Growth;
