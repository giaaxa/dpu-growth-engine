import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Animated globe component
const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const width = canvas.getBoundingClientRect().width;
    const height = canvas.getBoundingClientRect().height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.38;

    // Connection points (cities)
    const points = [
      { lat: 51.5, lon: -0.12, name: "London" },
      { lat: 40.7, lon: -74, name: "New York" },
      { lat: 1.35, lon: 103.8, name: "Singapore" },
      { lat: 19.07, lon: 72.87, name: "Mumbai" },
      { lat: 35.68, lon: 139.69, name: "Tokyo" },
      { lat: -33.86, lon: 151.2, name: "Sydney" },
      { lat: 25.2, lon: 55.27, name: "Dubai" },
      { lat: 52.52, lon: 13.4, name: "Berlin" },
      { lat: -23.55, lon: -46.63, name: "São Paulo" },
      { lat: 37.77, lon: -122.4, name: "San Francisco" },
    ];

    let rotation = 0;

    const latLonTo3D = (lat: number, lon: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + rotation) * (Math.PI / 180);
      return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.cos(phi),
        z: r * Math.sin(phi) * Math.sin(theta),
      };
    };

    const project = (x: number, y: number, z: number) => {
      const scale = 400 / (400 + z);
      return {
        x: centerX + x * scale,
        y: centerY + y * scale,
        scale,
        visible: z < 100,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw globe outline with glow
      const gradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius * 1.5
      );
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.15)");
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.05)");
      gradient.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Globe border
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw latitude lines
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        for (let lon = 0; lon <= 360; lon += 5) {
          const pos = latLonTo3D(lat, lon, radius);
          const proj = project(pos.x, pos.y, pos.z);
          if (lon === 0) {
            ctx.moveTo(proj.x, proj.y);
          } else if (proj.visible) {
            ctx.lineTo(proj.x, proj.y);
          }
        }
        ctx.strokeStyle = "rgba(59, 130, 246, 0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw longitude lines
      for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath();
        for (let lat = -90; lat <= 90; lat += 5) {
          const pos = latLonTo3D(lat, lon, radius);
          const proj = project(pos.x, pos.y, pos.z);
          if (lat === -90) {
            ctx.moveTo(proj.x, proj.y);
          } else if (proj.visible) {
            ctx.lineTo(proj.x, proj.y);
          }
        }
        ctx.strokeStyle = "rgba(59, 130, 246, 0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw connections
      const projectedPoints = points.map((p) => {
        const pos = latLonTo3D(p.lat, p.lon, radius);
        return { ...project(pos.x, pos.y, pos.z), name: p.name };
      });

      // Draw arcs between points
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          if (p1.visible && p2.visible && Math.random() > 0.7) {
            ctx.beginPath();
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2 - 30;
            ctx.moveTo(p1.x, p1.y);
            ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * p1.scale * p2.scale})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw points
      projectedPoints.forEach((p) => {
        if (p.visible) {
          // Glow
          const glowGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 15 * p.scale);
          glowGradient.addColorStop(0, "rgba(6, 182, 212, 0.8)");
          glowGradient.addColorStop(0.5, "rgba(6, 182, 212, 0.2)");
          glowGradient.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(p.x, p.y, 15 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = glowGradient;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = "#06b6d4";
          ctx.fill();
        }
      });

      rotation += 0.15;
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCount1((prev) => (prev < 14 ? prev + 1 : 14));
    }, 100);
    const timer2 = setInterval(() => {
      setCount2((prev) => (prev < 500 ? prev + 25 : 500));
    }, 50);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero noise-overlay"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-dpu-blue/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-dpu-cyan/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <motion.div style={{ y, opacity }} className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dpu-blue/30 bg-dpu-blue/10 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-dpu-cyan animate-pulse" />
              <span className="text-sm font-medium text-dpu-cyan">
                Strategic Marketing & Digital Consultancy
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6"
            >
              Transform Your{" "}
              <span className="text-gradient-glow">Digital Presence</span>{" "}
              Into Market Leadership
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              We're not just another agency. We're your strategic partners in{" "}
              <strong className="text-foreground">AI-powered marketing</strong>,{" "}
              <strong className="text-foreground">Digital PR</strong>, and{" "}
              <strong className="text-foreground">brand consulting</strong> — driving measurable growth across global markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-dpu-blue-light text-primary-foreground font-semibold px-8 h-14 text-base shadow-glow hover:shadow-dpu-lg transition-all duration-300"
                onClick={() => window.open('https://calendly.com/gia-pereira31/15-min-discovery-call', '_blank')}
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-dpu-blue/50 text-foreground hover:bg-dpu-blue/10 font-semibold px-8 h-14 text-base transition-all duration-300"
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Play className="mr-2 h-4 w-4" />
                See Our Work
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-8 pt-8 border-t border-border/50"
            >
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  {count1}+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  {count2}+
                </div>
                <div className="text-sm text-muted-foreground">Global Experts</div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient-blue">
                  6
                </div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </motion.div>
          </div>

          {/* Right - Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] globe-container"
          >
            <div className="absolute inset-0 globe-glow">
              <Globe />
            </div>

            {/* Floating labels */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/4 right-0 px-4 py-2 rounded-lg border border-dpu-cyan/30 bg-card/80 backdrop-blur-sm"
            >
              <div className="text-xs text-dpu-cyan font-medium">Singapore</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/3 left-0 px-4 py-2 rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm"
            >
              <div className="text-xs text-primary font-medium">London</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 right-8 px-4 py-2 rounded-lg border border-dpu-cyan/30 bg-card/80 backdrop-blur-sm"
            >
              <div className="text-xs text-dpu-cyan font-medium">Mumbai</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
