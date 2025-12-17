import { ImageWithLoader } from '@/components/ImageWithLoader';
import { motion } from 'framer-motion';

export default function WhoWeAreSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
              WHO WE ARE
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Govern Smart
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We serve government agencies and highly regulated industries, ensuring their mission-critical systems deliver when it matters most. Thalen combines deep compliance expertise, proven methodologies, and cutting-edge technology to help public sector organizations navigate complex IT challenges while maintaining the highest security and regulatory standards.
            </p>
          </motion.div>

          {/* Right: Command Center Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl rounded-lg">
              <ImageWithLoader
                src="/command-center.png"
                alt="Government command center with monitoring displays"
                className="w-full h-auto"
              />
            </div>

            {/* Floating metric card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white shadow-xl rounded-lg p-6 border-l-4 border-accent hidden lg:block"
            >
              <div className="text-4xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-slate-600 font-medium">Years of Excellence</div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
