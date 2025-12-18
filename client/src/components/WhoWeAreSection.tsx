import { ImageWithLoader } from '@/components/ImageWithLoader';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function WhoWeAreSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#0A2540] overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#081C30] via-[#0A2540] to-[#12344D]"></div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <p className="text-[#E07020] font-semibold mb-4 uppercase tracking-wider text-sm">
              WHO WE ARE
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Thalen Technology
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-8">
              We serve government agencies and highly regulated industries, ensuring their mission-critical systems deliver when it matters most. Thalen combines deep compliance expertise, proven methodologies, and cutting-edge technology to help public sector organizations navigate complex IT challenges while maintaining the highest security and regulatory standards.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#E07020] to-[#F08030] hover:from-[#D06010] hover:to-[#E07020] text-white group shadow-lg hover:shadow-xl transition-all">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent">
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Command Center Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl rounded-lg border border-white/10">
              <ImageWithLoader
                src="/thalen-technologies-capitol.jpg"
                alt="U.S. Capitol building dome representing government technology services"
                className="w-full h-auto"
              />
              {/* Subtle overlay for cohesion */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Decorative accent element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E07020]/20 rounded-full blur-3xl"
            />
          </motion.div>

        </div>
      </div>


    </section>
  );
}
