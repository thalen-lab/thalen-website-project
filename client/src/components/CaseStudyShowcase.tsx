import { useState, useRef, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { cn } from "@/lib/utils";
import { CaseStudyCardSkeleton } from "@/components/SkeletonLoaders";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "federal-automation",
    title: "Federal Agency Achieves 85% Process Automation",
    description: "Implemented UiPath Gov RPA platform for federal agency with comprehensive ATO documentation, reducing claims processing time from 6 weeks to 2 days while maintaining Top Secret/SCI compliance.",
    image: "/rocket-federal.webp",
    link: "/case-studies/federal-automation",
    category: "Federal Government"
  },
  {
    id: "dod-manufacturing",
    title: "DoD Manufacturing Facility Achieves 99.2% Uptime",
    description: "Deployed FedRAMP-authorized cybersecurity platforms and predictive maintenance analytics for DoD defense manufacturing operations, eliminating 75% of unplanned downtime across 50+ production lines.",
    image: "/manufacturing-security.jpg",
    link: "/case-studies/dod-manufacturing",
    category: "Department of Defense"
  },
  {
    id: "va-healthcare",
    title: "VA Medical Center Integrates 12 Legacy Systems",
    description: "Unified patient data across 12 disparate VA healthcare systems with FedRAMP-authorized integration platforms for federal healthcare operations, reducing administrative burden by 60% and improving care coordination for 500K+ veterans.",
    image: "/healthcare-legacy-it.jpg",
    link: "/case-studies/va-healthcare",
    category: "Veterans Affairs"
  },
  {
    id: "state-law-enforcement",
    title: "State Attorney General Prevents $50M in Fraud",
    description: "Implemented CJIS-compliant fraud detection system for state attorney general's office, processing 10M+ daily transactions with real-time ML analytics and preventing $50M in fraudulent activities annually.",
    image: "/financial-fraud-soc.a8f3d9e2.jpg",
    link: "/case-studies/state-attorney-general",
    category: "State Government"
  },
  {
    id: "defense-cloud",
    title: "Defense Agency Migrates to IL5 Cloud",
    description: "Zero-downtime migration of mission-critical intelligence systems to FedRAMP High cloud infrastructure for federal defense agency, achieving Impact Level 5 compliance while reducing infrastructure costs by 40%.",
    image: "/defense-cyber-ops.b7c4e1f3.jpg",
    link: "/case-studies/defense-cloud",
    category: "Intelligence Community"
  },
  {
    id: "state-energy",
    title: "State Energy Commission Reduces Outages 65%",
    description: "Deployed StateRAMP-authorized IoT platform for state energy commission monitoring 500+ substations with 15,000+ sensors and predictive maintenance analytics, reducing grid outages by 65% for 8.5 million residents.",
    image: "/energy-grid-control.c9d5f2a4.jpg",
    link: "/case-studies/state-energy-commission",
    category: "State Government"
  },
  {
    id: "county-health",
    title: "County Health Department Accelerates Outbreak Response",
    description: "Integrated 12 county health systems with state health department for real-time disease surveillance, reducing outbreak response time by 40% and enabling coordinated public health interventions across 2.5M residents.",
    image: "/healthcare-legacy-it.jpg",
    link: "/case-studies/county-health-department",
    category: "Local Government"
  }
];

export default function CaseStudyShowcase() {
  const featuredCaseStudies = caseStudies.slice(0, 6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Swipe threshold in pixels
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

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < featuredCaseStudies.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#0A2540] overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#081C30] via-[#0A2540] to-[#12344D]"></div>
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
            <p className="text-[#E07020] font-semibold mb-3 uppercase tracking-wider text-sm">Case Studies</p>
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

        {/* Mobile Swipeable Carousel */}
        <div className="md:hidden mb-10">
          <div
            ref={containerRef}
            className="relative overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {isLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-2">
                    <CaseStudyCardSkeleton />
                  </div>
                ))
              ) : (
                featuredCaseStudies.map((study) => (
                  <div key={study.id} className="w-full flex-shrink-0 px-2">
                    <CaseStudyCard study={study} />
                  </div>
                ))
              )}
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
                staggerChildren: 0.15,
              },
            },
          }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12"
        >
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <CaseStudyCardSkeleton key={i} />
            ))
          ) : (
            featuredCaseStudies.slice(0, 3).map((study) => (
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
                <CaseStudyCard study={study} />
              </motion.div>
            ))
          )}
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
            View All Cases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Extracted Card Component
function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Card 
      className="h-full bg-white border-0 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col p-0 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-slate-200">
        <ImageWithLoader
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-[#0A2540]/90 backdrop-blur-sm text-xs font-medium text-white rounded-full">
            {study.category}
          </span>
        </div>
        {/* Orange accent bar at top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E07020] to-[#F08030]"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#0A2540] mb-3 line-clamp-2">
          {study.title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-3 flex-grow">
          {study.description}
        </p>
        <Link 
          href={study.link}
          className="inline-flex items-center p-0 h-auto text-[#0A2540] hover:text-[#E07020] font-medium group/btn transition-colors"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}
