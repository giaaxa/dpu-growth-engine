import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Send, CheckCircle, Globe2, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// hCaptcha site key - replace with your own from https://dashboard.hcaptcha.com
// Using test key for development: 10000000-ffff-ffff-ffff-000000000001
const HCAPTCHA_SITE_KEY = "10000000-ffff-ffff-ffff-000000000001";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleCaptchaExpire = () => {
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast({ title: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    if (!captchaToken) {
      toast({ title: "Please complete the CAPTCHA verification.", variant: "destructive" });
      return;
    }

    setLoading(true);

    try {
      // Send to Web3Forms (free form backend - no server needed)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with actual key from web3forms.com
          name: form.name,
          email: form.email,
          company: form.company || "Not provided",
          message: form.message,
          subject: `New Contact Form Submission from ${form.name}`,
          from_name: "DPU Website",
          "h-captcha-response": captchaToken,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      // Fallback: Open email client with pre-filled message
      const mailtoLink = `mailto:info@dpunwired.com?subject=${encodeURIComponent(
        `Contact Form: ${form.name}`
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "Not provided"}\n\nMessage:\n${form.message}`
      )}`;
      window.location.href = mailtoLink;

      toast({
        title: "Opening email client...",
        description: "Please send the email to complete your message.",
      });
    } finally {
      setLoading(false);
      // Reset captcha
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-dpu-cyan/10 rounded-full blur-[150px]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Start Your{" "}
              <span className="text-gradient-blue">Growth Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your digital presence? Reach out and our team will respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Headquarters</p>
                      <p className="text-muted-foreground">Birmingham, United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:info@dpunwired.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@dpunwired.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Response Time</p>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border shadow-dpu">
                <div className="flex items-center gap-3 mb-4">
                  <Globe2 className="text-primary" size={24} />
                  <p className="font-heading font-semibold text-foreground">Global Service</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Our clients are based across Singapore, UK, India, Taiwan, Indonesia and more.
                  We can service your briefs and mandates wherever you are based.
                </p>
                <a
                  href="/director"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-dpu-cyan transition-colors"
                >
                  Meet Our Director
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-card border border-border rounded-2xl p-12 text-center shadow-dpu">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-dpu-success/10 text-dpu-success mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. Our team will be in touch within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", company: "", message: "" });
                    }}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card border border-border rounded-2xl p-8 shadow-dpu space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value.slice(0, 100) })
                        }
                        placeholder="Your name"
                        className="h-12 bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value.slice(0, 255) })
                        }
                        placeholder="your@email.com"
                        className="h-12 bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Company
                    </label>
                    <Input
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value.slice(0, 100) })
                      }
                      placeholder="Your company"
                      className="h-12 bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value.slice(0, 1000) })
                      }
                      placeholder="Tell us about your project, goals, or challenges..."
                      rows={5}
                      className="bg-muted/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  {/* hCaptcha */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck size={16} className="text-dpu-success" />
                      <span>Protected by hCaptcha</span>
                    </div>
                    <HCaptcha
                      ref={captchaRef}
                      sitekey={HCAPTCHA_SITE_KEY}
                      onVerify={handleCaptchaVerify}
                      onExpire={handleCaptchaExpire}
                      theme="dark"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading || !captchaToken}
                    className="w-full h-14 bg-primary hover:bg-dpu-blue-light text-primary-foreground font-semibold text-base shadow-glow hover:shadow-dpu-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to receive communications from DPU. We respect your
                    privacy.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
