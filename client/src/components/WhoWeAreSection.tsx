import { ImageWithLoader } from '@/components/ImageWithLoader';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, FileCheck, Lock, Building2 } from 'lucide-react';
import { Link } from 'wouter';

export default function WhoWeAreSection() {
  const capabilities = [
    {
      icon: Shield,
      title: 'Security-First Architecture',
      description: 'Zero-trust frameworks designed for classified and sensitive environments'
    },
    {
      icon: FileCheck,
      title: 'Compliance Expertise',
      description: 'Deep experience with FedRAMP, CMMC, FISMA, and agency-specific requirements'
    },
    {
      icon: Lock,
      title: 'Mission Assurance',
      description: 'Proven delivery across defense, civilian, and intelligence community programs'
    },
    {
      icon: Building2,
      title: 'Acquisition Alignment',
      description: 'Solutions structured for federal procurement and contract requirements'
    }
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A2540' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px] bg-[#E07020]"></div>
              <span className="text-[#0A2540]/60 font-medium text-sm uppercase tracking-[0.15em]">
                About NexDyne
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0A2540] mb-6 leading-[1.15] tracking-tight">
              Technology Partner to the<br className="hidden md:block" /> Federal Government
            </h2>

            <div className="space-y-5 text-[#0A2540]/75 text-base md:text-[17px] leading-relaxed mb-10">
              <p>
                NexDyne delivers mission-critical technology solutions to federal agencies, defense organizations, and the intelligence community. We specialize in modernizing legacy systems, securing sensitive data, and enabling digital transformation across government operations.
              </p>
              <p>
                Our approach combines deep domain expertise with rigorous compliance methodology. We understand that government technology must meet the highest standards for security, reliability, and accountability—and we build every solution with those requirements at the foundation.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0A2540]/5 flex items-center justify-center group-hover:bg-[#E07020]/10 transition-colors duration-300">
                      <capability.icon className="w-5 h-5 text-[#0A2540]/70 group-hover:text-[#E07020] transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0A2540] text-[15px] mb-1">
                        {capability.title}
                      </h3>
                      <p className="text-[#0A2540]/60 text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white group shadow-sm hover:shadow-md transition-all px-6 h-12">
                <Link href="/about">
                  Learn About Our Approach
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border border-[#0A2540]/20 text-[#0A2540] hover:bg-[#0A2540]/5 hover:border-[#0A2540]/30 bg-transparent px-6 h-12">
                <Link href="/contract-vehicles">
                  View Contract Vehicles
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Image with Professional Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-sm shadow-xl">
                <div className="aspect-[4/3] w-full">
                  <ImageWithLoader
                    src="/about-hero.jpg"
                    alt="Federal government technology operations center showcasing NexDyne's mission-critical solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 via-transparent to-transparent"></div>
              </div>

              {/* Credentials Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 md:-left-8 bg-white rounded-lg shadow-lg border border-[#0A2540]/10 p-5 max-w-[280px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#E07020]/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#E07020]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A2540] text-sm">Authorized Partner</div>
                    <div className="text-[#0A2540]/50 text-xs">Federal Government</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-[#0A2540]/5 rounded text-[11px] font-medium text-[#0A2540]/70">FedRAMP</span>
                  <span className="px-2.5 py-1 bg-[#0A2540]/5 rounded text-[11px] font-medium text-[#0A2540]/70">CMMC</span>
                  <span className="px-2.5 py-1 bg-[#0A2540]/5 rounded text-[11px] font-medium text-[#0A2540]/70">FISMA</span>
                  <span className="px-2.5 py-1 bg-[#0A2540]/5 rounded text-[11px] font-medium text-[#0A2540]/70">IL4/IL5</span>
                </div>
              </motion.div>

              {/* Accent line */}
              <div className="absolute top-0 left-0 w-1 h-24 bg-[#E07020] rounded-full"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
