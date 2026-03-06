import { Link } from "react-router-dom";
import { MapPin, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import logoImg from "@/assets/logo-dpu.jpg";

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border pt-20 pb-8">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logoImg} alt="DPU" className="h-10 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
              Digital Professionals Unwired – Strategic marketing consultancy and digital communications partner for ambitious brands worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/dpu-digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Digital PR & Communications",
                "AI-Powered Marketing",
                "Performance Marketing",
                "Brand Strategy",
                "Content Production",
                "Social Media Management",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/#services"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {service}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Capabilities", href: "/#services" },
                { label: "About Us", href: "/#about" },
                { label: "Director", href: "/director" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-foreground font-medium">Headquarters</p>
                  <p className="text-muted-foreground">Birmingham, United Kingdom</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email Us</p>
                  <a
                    href="mailto:info@dpunwired.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@dpunwired.com
                  </a>
                </div>
              </li>
            </ul>

            {/* Global note */}
            <div className="mt-6 p-4 rounded-xl bg-muted/30 border border-border">
              <p className="text-xs text-muted-foreground">
                <span className="text-foreground font-medium">Global Service:</span> Clients across
                Singapore, UK, India, Taiwan, Indonesia & more
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Digital Professionals Unwired (DPU). All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
