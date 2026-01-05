import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Target, Shield, Cpu, Users } from 'lucide-react';

export default function WhoWeAreSection() {
  const highlights = [
    { icon: Target, text: 'Mission-Focused Solutions' },
    { icon: Shield, text: 'Security-First Architecture' },
    { icon: Cpu, text: 'Advanced AI & Analytics' },
    { icon: Users, text: 'Cleared Personnel' }
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Left Column - Text Content */}
        <div className="flex items-center py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16 xl:px-24 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-[2px] bg-[#E07020]"></div>
              <span className="text-[#E07020] font-semibold text-sm uppercase tracking-[0.2em]">Who We Are</span>
            </div>

            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0A2540] mb-4 leading-[1.1] tracking-tight">
              NexDyne<br />
              <span className="text-[#E07020]">Overview</span>
            </h2>

            {/* Tagline */}
            <p className="text-[#0A2540] text-xl md:text-2xl font-semibold mb-6 border-l-4 border-[#E07020] pl-4">
              Intelligence, Delivered
            </p>

            {/* Description */}
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-[#0A2540]">NexDyne Technology, Inc.</strong> provides a broad spectrum of information technology services and cloud-based artificial intelligence and advanced analytics solutions to the <strong className="text-[#0A2540]">U.S. Federal Government</strong>.
              </p>
              <p>
                NexDyne's support of the <strong className="text-[#0A2540]">U.S. Military</strong>, <strong className="text-[#0A2540]">Intelligence Community</strong>, and civilian agencies is making government more efficient through the strategic use of advanced technology, process automation, and data-driven decision making.
              </p>
            </div>

            {/* Highlight Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A2540]/5 border border-[#0A2540]/10 text-sm font-medium text-[#0A2540]"
                >
                  <item.icon className="w-4 h-4 text-[#E07020]" />
                  {item.text}
                </motion.div>
              ))}
            </div>

            {/* Read More Link */}
            <Link 
              href="/about" 
              className="group inline-flex items-center gap-3 text-[#E07020] hover:text-[#C05010] font-bold text-base uppercase tracking-wider transition-colors"
            >
              <span>Read More about NexDyne</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column - Image with Overlay */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] sm:h-[450px] lg:h-full order-1 lg:order-2"
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
            className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:bottom-8 lg:w-72"
          >
            <div className="bg-[#0A2540]/95 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">15+</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#E07020]">TS/SCI</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">Cleared Staff</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
            <div className="absolute top-4 right-4 w-20 h-20 border-t-4 border-r-4 border-[#E07020]/40"></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A2540] via-[#E07020] to-[#0A2540]"></div>
    </section>
  );
}
