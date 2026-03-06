import { motion } from "framer-motion";
import officeCityscape from "@/assets/office-cityscape.jpg";

const NetworkSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Network of 500+</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              Your Go-To Destination For All Digital Communication Needs
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Welcome! Reach out to Digital Professionals Unwired DPU Pvt Ltd – Whether you require assistance with technology solutions, search engine optimisation SEO, digital PR, website development, social media management SMM, Corporate Videos, Content building or any other aspect of digital communication, our team of specialists are ready to deliver outstanding results tailored to your specific needs.
              </p>
              <p>
                Partner with Digital Professionals Unwired, DPU Ltd and experience the benefits of our high-value teams in solving your digital communication challenges.
              </p>
              <p>
                Digital Professionals Unwired DPU, your go-to destination for all your digital communication needs. We are a leading global company in the digital communication space, offering a wide range of solutions tailored to combat the various challenges you might face in the ever-evolving digital landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-dpu-lg">
              <img src={officeCityscape} alt="Modern office with city skyline view" className="w-full h-auto" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-dpu-blue-light to-accent rounded-xl -z-10 opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
