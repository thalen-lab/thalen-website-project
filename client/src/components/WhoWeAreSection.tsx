import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function WhoWeAreSection() {
  const highlights = [
    'Mission-Focused Solutions',
    'Security-First Architecture',
    'Advanced AI & Analytics',
    'Cleared Personnel'
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[550px] lg:min-h-[600px]">
        {/* Left Column - Text Content */}
        <div className="flex items-center py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-14 xl:px-20 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-[#E07020]"></div>
              <span className="text-[#E07020] font-semibold text-xs uppercase tracking-[0.2em]">Who We Are</span>
            </div>

            {/* Section Title - No orange on main title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-3 leading-[1.1] tracking-tight">
              NexDyne Overview
            </h2>

            {/* Tagline */}
            <p className="text-[#0A2540] text-lg md:text-xl font-semibold mb-4 border-l-4 border-[#E07020] pl-3">
              Intelligence, Delivered
            </p>

            {/* Description - Reduced spacing */}
            <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed mb-5">
              <p>
                <strong className="text-[#0A2540]">NexDyne Technology, Inc.</strong> provides a broad spectrum of information technology services and cloud-based artificial intelligence and advanced analytics solutions to the <strong className="text-[#0A2540]">U.S. Federal Government</strong>.
              </p>
              <p>
                NexDyne's support of the <strong className="text-[#0A2540]">U.S. Military</strong>, <strong className="text-[#0A2540]">Intelligence Community</strong>, and civilian agencies is making government more efficient through the strategic use of advanced technology, process automation, and data-driven decision making.
              </p>
            </div>

            {/* Highlight Pills - No icons */}
            <div className="flex flex-wrap gap-2 mb-5">
              {highlights.map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#0A2540]/5 border border-[#0A2540]/10 text-xs font-medium text-[#0A2540]"
                >
                  {text}
                </motion.div>
              ))}
            </div>

            {/* Read More Link - Not orange CTA button, just link */}
            <Link 
              href="/about" 
              className="group inline-flex items-center gap-2 text-[#0A2540] hover:text-[#E07020] font-semibold text-sm uppercase tracking-wider transition-colors"
            >
              <span>Read More about NexDyne</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column - Image with Overlay */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[350px] sm:h-[400px] lg:h-full order-1 lg:order-2"
        >
          <img
            src="/about-handshake.jpg"
            alt="Military and civilian partnership representing NexDyne's federal government collaboration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20"></div>
          
          {/* Stats Overlay Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-4 left-4 right-4 lg:left-auto lg:right-4 lg:bottom-6 lg:w-64"
          >
            <div className="bg-[#0A2540]/95 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-white">15+</div>
                  <div className="text-[10px] text-white/70 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-white">TS/SCI</div>
                  <div className="text-[10px] text-white/70 uppercase tracking-wider">Cleared Staff</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
            <div className="absolute top-3 right-3 w-16 h-16 border-t-3 border-r-3 border-[#E07020]/40"></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A2540] via-[#E07020] to-[#0A2540]"></div>
    </section>
  );
}
