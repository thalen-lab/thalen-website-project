import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from 'framer-motion';

interface CaseStudy {
  id: string;
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "federal-automation",
    metric: "85%",
    metricLabel: "AUTOMATION RATE",
    title: "Federal Agency Achieves 85% Process Automation",
    description: "Implemented UiPath Gov RPA platform for federal agency with comprehensive ATO documentation, reducing claims processing time from 6 weeks to 2 days while maintaining Top Secret/SCI compliance.",
    link: "/case-studies/federal-automation",
    linkText: "Read Case Study"
  },
  {
    id: "dod-manufacturing",
    metric: "99.2%",
    metricLabel: "SYSTEM UPTIME",
    title: "DoD Manufacturing Facility Achieves 99.2% Uptime",
    description: "Deployed FedRAMP-authorized cybersecurity platforms and predictive maintenance analytics for DoD defense manufacturing operations, eliminating 75% of unplanned downtime.",
    link: "/case-studies/dod-manufacturing",
    linkText: "Read Case Study"
  },
  {
    id: "va-healthcare",
    metric: "60%",
    metricLabel: "BURDEN REDUCED",
    title: "VA Medical Center Integrates 12 Legacy Systems",
    description: "Unified patient data across 12 disparate VA healthcare systems with FedRAMP-authorized integration platforms, reducing administrative burden by 60% and improving care coordination.",
    link: "/case-studies/va-healthcare",
    linkText: "Read Case Study"
  }
];

export default function CaseStudyShowcaseText() {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-[#0A2540] overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12344D]"></div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 lg:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 xl:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-8 sm:w-10 h-[2px] bg-[#FF6B35]"></div>
              <span className="text-[#FF6B35] font-semibold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em]">Case Studies</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Proven Government Results
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mb-3 sm:mb-4">
              Real-world case studies demonstrating measurable mission impact. FedRAMP serves federal agencies; StateRAMP/GovRAMP serves state, local, and tribal governments.
            </p>
            <Link 
              href="/case-studies"
              className="inline-flex items-center text-[#FF6B35] hover:text-[#e55a2b] font-medium text-xs sm:text-sm transition-colors self-start min-h-[44px]"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </motion.div>

        {/* Simple 3-Card Grid - Aqua-inspired design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 lg:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
            >
              <SimpleCaseStudyCard study={study} />
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}

// Simple Card Component - Aqua-inspired design (no icons, clean layout)
function SimpleCaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="h-full bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col hover:bg-white/15 transition-all duration-300 group">
      {/* Large Metric */}
      <div className="mb-2 sm:mb-3">
        <span className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold text-white">
          {study.metric}
        </span>
      </div>
      
      {/* Metric Label */}
      <p className="text-[#FF6B35] font-semibold text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
        {study.metricLabel}
      </p>
      
      {/* Title */}
      <h3 className="text-base xs:text-lg sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight line-clamp-2">
        {study.title}
      </h3>
      
      {/* Description */}
      <p className="text-white/70 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 flex-grow line-clamp-3 sm:line-clamp-4">
        {study.description}
      </p>
      
      {/* Link */}
      <Link 
        href={study.link}
        className="inline-flex items-center text-[#FF6B35] hover:text-[#e55a2b] font-medium text-xs sm:text-sm group/link transition-colors min-h-[44px]"
      >
        {study.linkText}
        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
