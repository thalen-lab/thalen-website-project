import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Target, ShieldCheck, Brain, UserCheck } from 'lucide-react';

export default function WhoWeAreSection() {
  const highlights = [
    { text: 'Mission-Focused Solutions', icon: Target },
    { text: 'Security-First Architecture', icon: ShieldCheck },
    { text: 'Advanced AI & Analytics', icon: Brain },
    { text: 'Cleared Personnel', icon: UserCheck }
  ];

  return (
    <section className="relative bg-white overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(10,37,64,0.03)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(224,112,32,0.03)_0%,transparent_50%)]"></div>
      
      <div className="container relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-3"
        >
          <div className="w-10 h-[2px] bg-[#E07020]"></div>
          <span className="text-[#E07020] font-semibold text-xs uppercase tracking-[0.2em]">Who We Are</span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Title and Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540] mb-3 leading-[1.1] tracking-tight">
              Thalen Technologies Overview
            </h2>
            
            {/* Tagline with accent border */}
            <p className="text-[#0A2540] text-lg md:text-xl font-semibold mb-5 border-l-4 border-[#E07020] pl-3">
              Govern Smart
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 mb-5">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#0A2540]">15+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Experience</div>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#0A2540]">TS/SCI</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Cleared Staff</div>
              </div>
            </div>

            {/* Read More Link */}
            <Link 
              href="/about" 
              className="group inline-flex items-center gap-2 text-[#0A2540] hover:text-[#E07020] font-semibold text-sm uppercase tracking-wider transition-colors"
            >
              <span>Read More about Thalen Technologies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column - Description and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Description */}
            <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              <p>
                <strong className="text-[#0A2540]">Thalen Technologies, Inc.</strong> provides a broad spectrum of information technology services and cloud-based artificial intelligence and advanced analytics solutions to the <strong className="text-[#0A2540]">U.S. Federal Government</strong>.
              </p>
              <p>
                Thalen Technologies' support of the <strong className="text-[#0A2540]">U.S. Military</strong>, <strong className="text-[#0A2540]">Intelligence Community</strong>, and civilian agencies is making government more efficient through the strategic use of advanced technology, process automation, and data-driven decision making.
              </p>
            </div>

            {/* Highlight Cards Grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="group relative bg-gradient-to-br from-[#0A2540]/[0.03] to-transparent border border-[#0A2540]/10 rounded-lg p-3 hover:border-[#E07020]/30 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#0A2540]/5 flex items-center justify-center group-hover:bg-[#E07020]/10 transition-colors">
                        <Icon className="w-3.5 h-3.5 text-[#0A2540] group-hover:text-[#E07020] transition-colors" />
                      </div>
                      <span className="text-xs font-medium text-[#0A2540] leading-tight">
                        {item.text}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A2540] via-[#E07020] to-[#0A2540]"></div>
    </section>
  );
}
