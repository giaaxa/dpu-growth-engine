import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Instagram, Eye, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Brand logos
import ktmLogo from "@/assets/brands/ktm.jpeg";
import husqvarnaLogo from "@/assets/brands/husqvarna.png";
import bajajLogo from "@/assets/brands/bajaj.jpeg";

const automotiveBrands = [
  { name: "Bajaj Auto", logo: bajajLogo },
  { name: "KTM", logo: ktmLogo },
  { name: "Husqvarna", logo: husqvarnaLogo },
];

const caseStudies = [
  {
    brand: "Bajaj Auto",
    logo: bajajLogo,
    title: "Building India's Most Engaged Motorcycle Community",
    description: "Social strategy, content creation, and community building for Pulsar that drove millions of views and 500K+ followers.",
    tags: ["Social Strategy", "Community", "Content"],
  },
  {
    brand: "KTM",
    logo: ktmLogo,
    title: "Launching KTM's Premium Positioning in New Markets",
    description: "Integrated campaign development, influencer partnerships, and experiential activations across Southeast Asia.",
    tags: ["Brand Launch", "Experiential", "Influencer"],
  },
  {
    brand: "Husqvarna",
    logo: husqvarnaLogo,
    title: "Establishing a New Premium Motorcycle Brand",
    description: "Full-funnel strategy from brand positioning to dealer activation and demand generation.",
    tags: ["Brand Building", "Dealer Activation", "Demand Gen"],
  },
];

const Automotive = () => {
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const isCaseStudiesInView = useInView(caseStudiesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-dpu-cyan/10 rounded-full blur-[150px]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="text-sm font-medium text-primary">Automotive Practice</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Built for brands{" "}
              <span className="text-gradient-glow">in motion.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Automotive strategy, content and experiences that move people — and markets.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              DPU combines category experience, senior strategy and specialist execution across the automotive customer journey. From global brand building and always-on social to launches, events, dealer activation and demand generation.
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-dpu-blue-light text-primary-foreground font-semibold px-8 h-14 text-base shadow-glow hover:shadow-dpu-lg transition-all duration-300"
              onClick={() => window.open('https://calendly.com/gia-pereira31/15-min-discovery-call', '_blank')}
            >
              Talk to Our Automotive Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 border-y border-border/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">
              Trusted by leading automotive brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
              {automotiveBrands.map((brand) => (
                <motion.div
                  key={brand.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="h-20 w-32 flex items-center justify-center bg-card rounded-xl border border-border p-4">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-full w-auto max-w-full object-contain"
                    />
                  </div>
                  <span className="font-heading text-sm font-semibold text-foreground">
                    {brand.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="py-24 bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Automotive Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our automotive campaigns, activations, and brand experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
                <video
                  controls
                  className="w-full aspect-video"
                >
                  <source src="/videos/dpu-showreel-2026.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-dpu-cyan/10 to-primary/20 rounded-3xl blur-2xl -z-10 opacity-50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Success Story */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] p-[1px] rounded-2xl">
              <div className="bg-card rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center">
                    <Instagram className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Featured Growth Story</p>
                    <p className="font-heading font-bold text-foreground">@mypulsarofficial</p>
                  </div>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Building India's Most Engaged Motorcycle Community
                </h3>

                <p className="text-muted-foreground mb-8">
                  We grew the official Pulsar Instagram into a powerhouse of engagement, creating content that resonates with motorcycle enthusiasts across India and beyond.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-muted/30 rounded-xl p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <UserPlus className="text-primary" size={20} />
                      <span className="font-heading text-3xl md:text-4xl font-bold text-foreground">500K+</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Followers Grown</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Eye className="text-dpu-cyan" size={20} />
                      <span className="font-heading text-3xl md:text-4xl font-bold text-foreground">Millions</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Views Generated</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C]/10"
                  onClick={() => window.open('https://www.instagram.com/mypulsarofficial/?hl=en', '_blank')}
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  View on Instagram
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-card/50" ref={caseStudiesRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="text-sm font-medium text-primary">Portfolio</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Selected Automotive Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Case studies from our automotive partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.brand}
                initial={{ opacity: 0, y: 30 }}
                animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="h-full bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  {/* Brand header */}
                  <div className="h-32 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center p-6">
                    <img
                      src={study.logo}
                      alt={study.brand}
                      className="h-16 w-auto object-contain"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-primary font-medium mb-2">{study.brand}</p>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your next campaign{" "}
              <span className="text-gradient-blue">starts here.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Ready to accelerate your automotive brand? Let's talk strategy, creative, and execution.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-dpu-blue-light text-primary-foreground font-semibold px-10 h-16 text-lg shadow-glow hover:shadow-dpu-lg transition-all duration-300"
              onClick={() => window.open('https://www.instagram.com/mypulsarofficial/?hl=en', '_blank')}
            >
              Talk to Our Automotive Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Automotive;
