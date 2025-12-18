import { ImageWithLoader } from '@/components/ImageWithLoader';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function WhoWeAreSection() {
  return (
    <section className="relative pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12 bg-white overflow-hidden">
      
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-6 leading-tight">
              Thalen Technologies Overview
            </h2>

            <p className="text-[#0A2540]/70 italic text-base md:text-lg mb-6">
              Intelligence, Delivered
            </p>

            <p className="text-lg text-[#0A2540]/80 leading-relaxed mb-8">
              We serve government agencies and highly regulated industries, ensuring their mission-critical systems deliver when it matters most. Thalen combines deep compliance expertise, proven methodologies, and cutting-edge technology to help public sector organizations navigate complex IT challenges while maintaining the highest security and regulatory standards.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#E07020] to-[#F08030] hover:from-[#D06010] hover:to-[#E07020] text-white group shadow-lg hover:shadow-xl transition-all">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#0A2540]/30 text-[#0A2540] hover:bg-[#0A2540]/5 hover:border-[#0A2540]/50 bg-transparent">
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Capitol Building Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl">
              <ImageWithLoader
                src="/images/who-we-are-capitol.png"
                alt="U.S. Capitol building dome with puzzle pieces representing government technology solutions"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

        </div>
      </div>


    </section>
  );
}
