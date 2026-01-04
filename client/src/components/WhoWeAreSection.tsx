import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function WhoWeAreSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
        {/* Left Column - Text Content */}
        <div className="flex items-center py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0A2540] mb-4 leading-[1.15] tracking-tight">
              NexDyne Overview
            </h2>

            {/* Tagline */}
            <p className="text-[#0A2540]/80 text-lg md:text-xl italic mb-6">
              Intelligence, Delivered
            </p>

            {/* Description */}
            <div className="space-y-4 text-[#0A2540]/70 text-base md:text-[17px] leading-relaxed mb-8">
              <p>
                NexDyne Technology, Inc. provides a broad spectrum of information technology services and cloud-based artificial intelligence and advanced analytics solutions to the U.S. Federal Government.
              </p>
              <p>
                NexDyne's support of the U.S. Military, Intelligence Community, and civilian agencies is making government more efficient through the strategic use of advanced technology, process automation, and data-driven decision making.
              </p>
            </div>

            {/* Read More Link */}
            <Link 
              href="/about" 
              className="inline-flex items-center text-[#E07020] hover:text-[#C05010] font-semibold text-base transition-colors group"
            >
              Read More about NexDyne
              <svg 
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[350px] sm:h-[400px] lg:h-full"
        >
          <img
            src="/about-handshake.jpg"
            alt="Military and civilian partnership representing NexDyne's federal government collaboration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10"></div>
        </motion.div>
      </div>
    </section>
  );
}
