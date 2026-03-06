import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Globe2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-dpu-cyan/15 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Start Your Transformation</span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ready to Dominate Your{" "}
            <span className="text-gradient-glow">Digital Market?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join leading brands who trust DPU to drive their digital growth. Let's discuss how we
            can transform your marketing and communications strategy.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar size={18} className="text-primary" />
              <span>Free Strategy Session</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe2 size={18} className="text-dpu-cyan" />
              <span>Global Team Available</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-dpu-blue-light text-primary-foreground font-semibold px-10 h-14 text-base shadow-glow hover:shadow-dpu-lg transition-all duration-300"
            >
              <Link to="/contact">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:border-primary/50 text-foreground hover:bg-primary/5 font-semibold px-10 h-14 text-base transition-all duration-300"
            >
              <Link to="/director">
                Meet Our Director
              </Link>
            </Button>
          </div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-10 text-sm text-muted-foreground"
          >
            Trusted by teams at ICICI Lombard, Bajaj Auto, Autodesk, and 100+ more companies worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
