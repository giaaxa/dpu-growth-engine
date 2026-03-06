import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-2xl font-bold text-primary-foreground tracking-tight">
              DPU<span className="text-dpu-cyan">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              Digital Professionals Unwired – Your go-to destination for all digital communication needs. A leading global company serving clients worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Social Media Management</li>
              <li>Digital Content Production</li>
              <li>Search Engine Marketing</li>
              <li>Digital PR</li>
              <li>Online Reputation Management</li>
              <li>Technology Solutions</li>
              <li>AI Training & Development</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/#services" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link to="/#about" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Birmingham, United Kingdom
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                info@dpunwired.com
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Digital Professionals Unwired (DPU). All rights reserved. Serving clients across the UK and globally.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
