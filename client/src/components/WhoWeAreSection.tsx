import { ImageWithLoader } from '@/components/ImageWithLoader';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Users, Target } from 'lucide-react';
import { Link } from 'wouter';

export default function WhoWeAreSection() {
  const stats = [
    { value: '25+', label: 'Years Federal Service', icon: Award },
    { value: '500+', label: 'Agency Partners', icon: Users },
    { value: '100%', label: 'Mission Success Rate', icon: Target },
    { value: '15+', label: 'FedRAMP Authorizations', icon: Shield },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white overflow-hidden">
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            {/* 25 Years Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0A2540]/5 border border-[#0A2540]/10 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-[#E07020]" />
              <span className="text-[#0A2540] font-semibold text-sm">
                Celebrating 25 Years of Federal Government Service
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#0A2540] mb-4 md:mb-6 leading-tight">
              NexDyne Technology Overview
            </h2>

            <p className="text-[#E07020] font-semibold text-sm md:text-base lg:text-lg mb-4 md:mb-6 uppercase tracking-wider">
              Powering Government Mission Success
            </p>

            <p className="text-base md:text-lg text-[#0A2540]/80 leading-relaxed mb-6 md:mb-8">
              For over two decades, NexDyne has been the trusted technology partner for federal, state, and local government agencies. We deliver mission-enabling technology that modernizes critical systems, secures sensitive data, and improves citizen services. Our deep government expertise, battle-tested methodologies, and unwavering commitment to compliance ensure your mission always comes first.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0A2540]/5 rounded-lg p-4 text-center"
                >
                  <stat.icon className="w-5 h-5 text-[#E07020] mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-[#0A2540]">{stat.value}</div>
                  <div className="text-xs md:text-sm text-[#0A2540]/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#E07020] to-[#F08030] hover:from-[#D06010] hover:to-[#E07020] text-white group shadow-lg hover:shadow-xl transition-all px-6 min-h-[48px] w-full sm:w-auto">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[#0A2540]/30 text-[#0A2540] hover:bg-[#0A2540]/5 hover:border-[#0A2540]/50 bg-transparent px-6 min-h-[48px] w-full sm:w-auto">
                <Link href="/contact">
                  Contact Our Team
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
            <div className="relative overflow-hidden shadow-2xl rounded-sm bg-slate-100">
              <div className="aspect-[4/3] w-full">
                <ImageWithLoader
                  src="/images/who-we-are-capitol.png"
                  alt="U.S. Capitol building dome representing NexDyne's 25 years of federal government service"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Orange accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E07020] to-[#F08030]"></div>
              
              {/* 25 Years Overlay Badge */}
              <div className="absolute bottom-4 right-4 bg-[#0A2540]/90 backdrop-blur-sm text-white px-4 py-3 rounded-lg">
                <div className="text-2xl font-bold">25</div>
                <div className="text-xs uppercase tracking-wider opacity-80">Years</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>


    </section>
  );
}
