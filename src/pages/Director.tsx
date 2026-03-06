import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, MapPin, Briefcase, Award, Globe, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import albertImg from "@/assets/albert-pereira.jpg";

const experiences = [
  {
    company: "Mio Design Pvt. Ltd.",
    role: "Director & Co-Founder",
    period: "2012 - Present",
    description:
      "Leading a digital-first 360° communication consultancy focused on building integrated, future-ready brand experiences. Partnered with clients across industries to accelerate digital growth.",
  },
  {
    company: "Digital Professionals Unwired (DPU)",
    role: "Founder Director",
    period: "2012 - Present",
    description:
      "Designed and developed an industry-first digital marketing course for working executives. Trained professionals who joined firms like Google, Microsoft, Mindshare, and Publicis.",
  },
  {
    company: "Genesis Burson-Marsteller",
    role: "President Digital & Chief Marketing Officer",
    period: "2011 - 2012",
    description:
      "Regional role for South Asia. Launched and grew the digital practice, delivering innovative campaigns for Pepsi, Vodafone, Microsoft India, Ford, and Intel.",
  },
  {
    company: "Vivaki Digital & Mobile (Publicis Media Group)",
    role: "Director of Marketing & Business Development",
    period: "2008 - 2011",
    description:
      "Launched Phonevalley brand in India for Publicis Media group. Integrated mobile into marketing plans for clients including Puma, HP, Raymonds, and Nestle.",
  },
  {
    company: "Ogilvy & Mather",
    role: "Director International Clients",
    period: "1999 - 2008",
    description:
      "Led integrated teams across Beijing and Mumbai. Won Cannes Lions and multiple awards working on Pidilite (Fevicol), Kodak, TATA Motors, Bajaj Auto, and more.",
  },
];

const skills = [
  "Management Consulting",
  "Creative Strategy",
  "Digital Strategy",
  "Brand Development",
  "Leadership",
  "Marketing Operations",
];

const speakingEvents = [
  "Economic Times CDO Summit",
  "World Mobile Broadband Conference (Lisbon)",
  "Click Asia Summit",
  "CAS Social CRM Panel",
];

const Director = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 order-1 lg:order-2"
            >
              <div className="relative max-w-sm mx-auto lg:mx-0">
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-dpu-cyan/20 rounded-3xl blur-2xl" />

                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-dpu-lg">
                  <img
                    src={albertImg}
                    alt="Albert Pereira - Director of DPU"
                    className="w-full h-auto object-cover"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-card rounded-xl p-3 border border-border shadow-dpu"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">14+ Years</p>
                      <p className="text-[10px] text-muted-foreground">Industry Experience</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dpu-cyan/30 bg-dpu-cyan/5 mb-6">
                <span className="text-sm font-medium text-dpu-cyan">Meet Our Director</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Albert Pereira
              </h1>

              <p className="text-xl text-primary font-medium mb-4">
                Championing outcomes through a culture of collaboration, growth, and agility
              </p>

              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin size={18} />
                <span>Halesowen, England, United Kingdom</span>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Global Brand Strategy", "Communications", "Execution"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#0077B5] hover:bg-[#005885] text-white shadow-lg">
                  <a
                    href="https://www.linkedin.com/in/albertpereira/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-border hover:border-primary/50">
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" ref={containerRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              About
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Albert Pereira has a strong background in the business of communications, marketing
                strategy, business operations and consulting, having worked across the{" "}
                <strong className="text-foreground">UK, China, India, and Southeast Asia</strong>{" "}
                markets. His career spans advertising, media, and public relations, with senior
                leadership roles including Director of International Clients at Ogilvy China,
                Country Manager at Vivaki Digital & Mobile (Publicis Media Group), and President
                Digital & Chief Marketing Officer at Genesis Burson-Marsteller India.
              </p>
              <p>
                He has helped drive digital transformation, structure ambiguous problems and build
                scalable solutions for some of the world's most established brands.
              </p>
              <p>
                A strong believer in continuous learning and capability-building, Albert created a
                comprehensive Digital Marketing program tailored for working professionals, covering
                the full digital spectrum from owned media to earned and paid strategies.
              </p>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-10 p-8 rounded-2xl bg-card border border-border relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-dpu-cyan" />
              <p className="text-xl text-foreground italic mb-3 pl-6">
                "Creative messaging that moves at speed and adapts decisively to data."
              </p>
              <p className="text-sm text-muted-foreground pl-6">— Albert's MARCOM Mantra</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Award size={24} />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Top Skills
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 bg-card border border-border text-foreground font-medium rounded-xl shadow-sm hover:border-primary/30 hover:shadow-dpu transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Briefcase size={24} />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Experience
              </h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-dpu transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap px-3 py-1 rounded-full bg-muted/50">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speaking Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-dpu-cyan/10 text-dpu-cyan flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Speaking Engagements
              </h2>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              Albert is a seasoned speaker and has delivered keynotes on digital transformation,
              mobile marketing, AI in communications, and more at premier global events:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {speakingEvents.map((event) => (
                <div
                  key={event}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-dpu-cyan/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-dpu-cyan" />
                  <span className="text-foreground font-medium">{event}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={32} />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work With Albert
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Interested in workshops on digital marketing, brand strategy, or communications?
              Albert frequently conducts sessions for blue-chip companies and professionals.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-dpu-blue-light shadow-glow h-14 px-10"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Director;
