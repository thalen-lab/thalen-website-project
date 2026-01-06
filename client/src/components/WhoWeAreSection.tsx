import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function WhoWeAreSection() {
  // Card data for the two linked cards on the right
  const featuredCards = [
    {
      image: '/images/state-local-hero.a1b2c3d4.jpg',
      title: 'StateRAMP & GovRAMP Compliance',
      subtitle: 'For State, Local & Tribal Governments',
      href: '/compliance/stateramp'
    },
    {
      image: '/images/federal-capitol.png',
      title: 'FedRAMP Authorization Support',
      subtitle: 'Federal Cloud Security Compliance',
      href: '/compliance/fedramp'
    }
  ];

  return (
    <section className="relative bg-white overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
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
          <div className="w-8 sm:w-10 h-[2px] bg-[#E07020]"></div>
          <span className="text-[#E07020] font-semibold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em]">Who We Are</span>
        </motion.div>

        {/* Main Content Grid - Fixed Layout with proper alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column - Title and Full Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540] mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              Thalen Technologies, Inc.
            </h2>
            
            {/* Full Description */}
            <div className="space-y-3 sm:space-y-2 sm:space-y-3 md:space-y-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-[#0A2540]">Thalen Technologies, Inc.</strong> provides a broad spectrum of information technology services and cloud-based artificial intelligence and advanced analytics solutions to the <strong className="text-[#0A2540]">U.S. Federal Government</strong>.
              </p>
              <p className="hidden xs:block">
                Thalen Technologies' support of the <strong className="text-[#0A2540]">U.S. Military</strong>, <strong className="text-[#0A2540]">Intelligence Community</strong>, and civilian agencies is making government more efficient through the strategic use of advanced technology, process automation, and data-driven decision making.
              </p>
            </div>

            {/* Read More Link */}
            <Link 
              href="/about" 
              className="group inline-flex items-center gap-2 text-[#E07020] hover:text-[#0A2540] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors mt-4 sm:mt-6 min-h-[44px]"
            >
              <span>Read More about Thalen Technologies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column - Two Linked Cards - aligned to top */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            {featuredCards.map((card, index) => (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link href={card.href}>
                  <div className="group relative flex items-center gap-3 sm:gap-4 bg-gradient-to-br from-[#0A2540]/[0.04] to-[#0A2540]/[0.02] border border-[#0A2540]/10 rounded-xl p-3 sm:p-4 hover:border-[#E07020]/40 hover:shadow-lg hover:shadow-[#E07020]/5 transition-all duration-300 cursor-pointer min-h-[80px] sm:min-h-[96px]">
                    {/* Card Image */}
                    <div className="relative flex-shrink-0 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg overflow-hidden">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/20 to-transparent"></div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#0A2540] mb-0.5 sm:mb-1 leading-tight group-hover:text-[#E07020] transition-colors line-clamp-2">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-snug line-clamp-2">
                        {card.subtitle}
                      </p>
                    </div>
                    
                    {/* Arrow Icon */}
                    <div className="flex-shrink-0">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-[#E07020] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A2540] via-[#E07020] to-[#0A2540]"></div>
    </section>
  );
}
