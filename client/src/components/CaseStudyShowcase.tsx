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

export default function CaseStudyShowcase() {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 lg:py-24 bg-[#0A2540] overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12344D]"></div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-10 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 lg:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-[#FF6B35] font-semibold mb-3 uppercase tracking-wider text-sm">Case Studies</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Proven Government Results
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg text-white/80">
              Real-world case studies demonstrating measurable mission impact. FedRAMP serves federal agencies; StateRAMP/GovRAMP serves state, local, and tribal governments.
            </p>
          </div>
        </motion.div>

        {/* Simple 3-Card Grid */}
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
          className="grid md:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
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

        {/* All Cases CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link 
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] hover:from-[#e55a2b] hover:to-[#c84d1a] text-white font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            View All Cases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Simple Card Component - Aqua-inspired design
function SimpleCaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="h-full bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 md:p-6 md:p-8 flex flex-col hover:bg-white/15 transition-all duration-300 group">
      {/* Large Metric */}
      <div className="mb-4">
        <span className="text-4xl md:text-5xl font-bold text-white">
          {study.metric}
        </span>
      </div>
      
      {/* Metric Label */}
      <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider mb-4">
        {study.metricLabel}
      </p>
      
      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
        {study.title}
      </h3>
      
      {/* Description */}
      <p className="text-white/70 text-sm md:text-base mb-6 flex-grow line-clamp-3">
        {study.description}
      </p>
      
      {/* Link */}
      <Link 
        href={study.link}
        className="inline-flex items-center text-[#FF6B35] hover:text-[#e55a2b] font-medium text-sm group/link transition-colors"
      >
        {study.linkText}
        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
