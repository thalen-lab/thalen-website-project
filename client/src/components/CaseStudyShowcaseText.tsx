import { useState, useRef, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, TrendingUp, Clock, Users, DollarSign, Shield, Zap } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
  metric: string;
  metricLabel: string;
  icon: typeof TrendingUp;
  accentColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "federal-automation",
    title: "Federal Agency Achieves 85% Process Automation",
    description: "Implemented UiPath Gov RPA platform for federal agency with comprehensive ATO documentation, reducing claims processing time from 6 weeks to 2 days while maintaining Top Secret/SCI compliance.",
    link: "/case-studies/federal-automation",
    category: "Federal Government",
    metric: "85%",
    metricLabel: "Automation Rate",
    icon: Zap,
    accentColor: "from-[#E07020] to-[#F08030]"
  },
  {
    id: "dod-manufacturing",
    title: "DoD Manufacturing Facility Achieves 99.2% Uptime",
    description: "Deployed FedRAMP-authorized cybersecurity platforms and predictive maintenance analytics for DoD defense manufacturing operations, eliminating 75% of unplanned downtime across 50+ production lines.",
    link: "/case-studies/dod-manufacturing",
    category: "Department of Defense",
    metric: "99.2%",
    metricLabel: "System Uptime",
    icon: Shield,
    accentColor: "from-[#0A2540] to-[#12344D]"
  },
  {
    id: "va-healthcare",
    title: "VA Medical Center Integrates 12 Legacy Systems",
    description: "Unified patient data across 12 disparate VA healthcare systems with FedRAMP-authorized integration platforms, reducing administrative burden by 60% and improving care coordination for 500K+ veterans.",
    link: "/case-studies/va-healthcare",
    category: "Veterans Affairs",
    metric: "60%",
    metricLabel: "Burden Reduced",
    icon: Users,
    accentColor: "from-[#E07020] to-[#F08030]"
  },
  {
    id: "state-law-enforcement",
    title: "State Attorney General Prevents $50M in Fraud",
    description: "Implemented CJIS-compliant fraud detection system for state attorney general's office, processing 10M+ daily transactions with real-time ML analytics and preventing $50M in fraudulent activities annually.",
    link: "/case-studies/state-attorney-general",
    category: "State Government",
    metric: "$50M",
    metricLabel: "Fraud Prevented",
    icon: DollarSign,
    accentColor: "from-[#0A2540] to-[#12344D]"
  },
  {
    id: "defense-cloud",
    title: "Defense Agency Migrates to IL5 Cloud",
    description: "Zero-downtime migration of mission-critical intelligence systems to FedRAMP High cloud infrastructure for federal defense agency, achieving Impact Level 5 compliance while reducing infrastructure costs by 40%.",
    link: "/case-studies/defense-cloud",
    category: "Intelligence Community",
    metric: "40%",
    metricLabel: "Cost Reduction",
    icon: TrendingUp,
    accentColor: "from-[#E07020] to-[#F08030]"
  },
  {
    id: "state-energy",
    title: "State Energy Commission Reduces Outages 65%",
    description: "Deployed StateRAMP-authorized IoT platform for state energy commission monitoring 500+ substations with 15,000+ sensors and predictive maintenance analytics, reducing grid outages by 65% for 8.5 million residents.",
    link: "/case-studies/state-energy-commission",
    category: "State Government",
    metric: "65%",
    metricLabel: "Outages Reduced",
    icon: Clock,
    accentColor: "from-[#0A2540] to-[#12344D]"
  }
];

export default function CaseStudyShowcaseText() {
  const featuredCaseStudies = caseStudies.slice(0, 6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < featuredCaseStudies.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  }, [currentIndex, featuredCaseStudies.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#0A2540] overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12344D]"></div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-10 h-[2px] bg-[#E07020]"></div>
              <span className="text-[#E07020] font-semibold text-xs uppercase tracking-[0.2em]">Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Proven Government Results
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-base lg:text-lg text-white/80 leading-relaxed">
              Real-world case studies demonstrating measurable mission impact. FedRAMP serves federal agencies; StateRAMP/GovRAMP serves state, local, and tribal governments.
            </p>
          </div>
        </motion.div>

        {/* Mobile Swipeable Carousel */}
        <div className="md:hidden mb-10">
          <div
            className="relative overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredCaseStudies.map((study) => (
                <div key={study.id} className="w-full flex-shrink-0 px-2">
                  <CaseStudyCardText study={study} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredCaseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-[#E07020] w-6" 
                    : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe hint */}
          <p className="text-center text-white/50 text-sm mt-4 flex items-center justify-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Swipe to explore
            <ChevronRight className="h-4 w-4" />
          </p>
        </div>

        {/* Desktop Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-12"
        >
          {featuredCaseStudies.map((study) => (
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
              <CaseStudyCardText study={study} />
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
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-gradient-to-r from-[#E07020] to-[#F08030] hover:from-[#D06010] hover:to-[#E07020] text-white font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Text-based Card Component (no images)
function CaseStudyCardText({ study }: { study: CaseStudy }) {
  const IconComponent = study.icon;
  
  return (
    <Card 
      className="h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#E07020]/50 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col p-0 hover:-translate-y-1"
    >
      {/* Top accent bar */}
      <div className={`h-1 bg-gradient-to-r ${study.accentColor}`}></div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category badge and metric */}
        <div className="flex items-start justify-between mb-4">
          <span className="inline-block px-3 py-1 bg-white/10 text-xs font-medium text-white/80 rounded-full">
            {study.category}
          </span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E07020]/20 to-[#F08030]/20 flex items-center justify-center">
              <IconComponent className="w-4 h-4 text-[#E07020]" />
            </div>
          </div>
        </div>
        
        {/* Metric highlight */}
        <div className="mb-4">
          <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
            {study.metric}
          </div>
          <div className="text-sm text-[#E07020] font-medium uppercase tracking-wider">
            {study.metricLabel}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-[#E07020] transition-colors">
          {study.title}
        </h3>
        
        {/* Description */}
        <p className="text-white/70 text-sm mb-5 line-clamp-3 flex-grow leading-relaxed">
          {study.description}
        </p>
        
        {/* Learn More Link */}
        <Link 
          href={study.link}
          className="inline-flex items-center p-0 h-auto text-white hover:text-[#E07020] font-medium group/btn transition-colors text-sm"
        >
          Read Case Study
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}
