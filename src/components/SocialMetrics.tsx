import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  LineChart,
  Target,
  Zap,
  Search,
  BarChart3,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const aiCapabilities = [
  {
    icon: Search,
    title: "Intelligent Market Analysis",
    description: "AI-powered competitive intelligence and market trend identification in real-time.",
  },
  {
    icon: Target,
    title: "Predictive Audience Targeting",
    description: "Machine learning models that identify and reach your highest-value prospects.",
  },
  {
    icon: LineChart,
    title: "Performance Forecasting",
    description: "Predictive analytics that optimize campaigns before they launch.",
  },
  {
    icon: Zap,
    title: "Automated Optimization",
    description: "Real-time bid management and creative optimization across channels.",
  },
];

const SocialMetrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-dpu-cyan/10 rounded-full blur-[150px]" />

      <div className="container relative z-10" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Intelligence</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Research & Insights{" "}
              <span className="text-gradient-blue">Reimagined</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We leverage cutting-edge AI and machine learning to deliver insights that traditional
              research can't match. Our proprietary systems analyze millions of data points to
              uncover opportunities your competitors miss.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              From sentiment analysis and trend prediction to competitive benchmarking and audience
              segmentation — our AI-driven approach transforms raw data into actionable strategies
              that drive measurable growth.
            </p>

            {/* AI Capabilities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {aiCapabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group flex gap-3 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <cap.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-foreground mb-1">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-dpu-blue-light shadow-glow">
              <Link to="/contact">
                Explore AI Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main visual card */}
            <div className="relative bg-card rounded-3xl p-8 border border-border shadow-dpu-lg overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-dpu-cyan/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-dpu-cyan flex items-center justify-center">
                      <Brain size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">AI Analytics</h3>
                      <p className="text-xs text-muted-foreground">Real-time insights</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-dpu-success/10 text-dpu-success text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-dpu-success animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Sentiment Score", value: "87%", trend: "+12%" },
                    { label: "Engagement Rate", value: "4.2x", trend: "+0.8x" },
                    { label: "Market Share", value: "23%", trend: "+5%" },
                    { label: "Brand Mentions", value: "12.4K", trend: "+2.1K" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-muted/30 rounded-xl p-4 border border-border/50"
                    >
                      <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                      <div className="flex items-end justify-between">
                        <span className="font-heading text-2xl font-bold text-foreground">
                          {metric.value}
                        </span>
                        <span className="text-xs font-medium text-dpu-success">{metric.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart mockup */}
                <div className="h-32 bg-muted/20 rounded-xl border border-border/50 p-4 relative overflow-hidden">
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 75, 85, 60, 100].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${height}%` } : {}}
                        transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                        className="flex-1 bg-gradient-to-t from-primary to-dpu-cyan rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="absolute top-3 left-4 flex items-center gap-2">
                    <BarChart3 size={14} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Performance Trend</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-card rounded-xl p-3 border border-border shadow-dpu"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-dpu-cyan/10 text-dpu-cyan flex items-center justify-center">
                  <Zap size={16} />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Optimization</p>
                  <p className="text-[10px] text-muted-foreground">+32% efficiency</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 border border-border shadow-dpu"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Target size={16} />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Targeting</p>
                  <p className="text-[10px] text-muted-foreground">98% accuracy</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialMetrics;
