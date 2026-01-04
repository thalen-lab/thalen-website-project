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

  const certifications = ['FedRAMP', 'CMMC', 'FISMA', 'IL4/IL5', 'SOC 2', 'ISO 27001'];

  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A2540' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container relative z-10">
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#E07020]"></div>
            <span className="text-[#0A2540]/60 font-medium text-sm uppercase tracking-[0.2em]">
              About NexDyne
            </span>
            <div className="w-12 h-[2px] bg-[#E07020]"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6 leading-[1.1] tracking-tight">
            Technology Partner to the<br className="hidden sm:block" /> Federal Government
          </h2>

          <p className="text-[#0A2540]/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            NexDyne delivers mission-critical technology solutions to federal agencies, defense organizations, and the intelligence community. We specialize in modernizing legacy systems, securing sensitive data, and enabling digital transformation across government operations.
          </p>
        </motion.div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 md:mb-20">
          {/* Left Column - Our Approach */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#0A2540]/5"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-5">Our Approach</h3>
            <div className="space-y-4 text-[#0A2540]/70 text-base leading-relaxed">
              <p>
                Our approach combines deep domain expertise with rigorous compliance methodology. We understand that government technology must meet the highest standards for security, reliability, and accountability—and we build every solution with those requirements at the foundation.
              </p>
              <p>
                From initial assessment through deployment and ongoing support, we partner with agencies to deliver measurable outcomes that advance their mission objectives while maintaining the strictest security posture.
              </p>
            </div>

            {/* Certifications */}
            <div className="mt-8 pt-6 border-t border-[#0A2540]/10">
              <div className="text-xs uppercase tracking-wider text-[#0A2540]/50 font-semibold mb-4">Certifications & Compliance</div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 bg-[#0A2540]/5 rounded-full text-xs font-semibold text-[#0A2540]/70 hover:bg-[#E07020]/10 hover:text-[#E07020] transition-colors cursor-default"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-6">Core Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
                  className="group bg-white rounded-xl p-5 shadow-sm border border-[#0A2540]/5 hover:border-[#E07020]/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-[#0A2540]/5 to-[#0A2540]/10 flex items-center justify-center group-hover:from-[#E07020]/10 group-hover:to-[#E07020]/15 transition-all duration-300">
                      <capability.icon className="w-5 h-5 text-[#0A2540]/70 group-hover:text-[#E07020] transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[#0A2540] text-[15px] mb-1.5 group-hover:text-[#E07020] transition-colors">
                        {capability.title}
                      </h4>
                      <p className="text-[#0A2540]/60 text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTAs - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white group shadow-md hover:shadow-lg transition-all px-8 h-13 text-base">
            <Link href="/about">
              Learn About Our Approach
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-[#0A2540]/20 text-[#0A2540] hover:bg-[#0A2540]/5 hover:border-[#0A2540]/30 bg-transparent px-8 h-13 text-base">
            <Link href="/contract-vehicles">
              View Contract Vehicles
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
