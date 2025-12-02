import { useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { prefetchImage } from '@/lib/prefetch';
import { useSwipe } from '@/hooks/useSwipe';

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
    description: "Implemented UiPath Gov RPA platform with comprehensive ATO documentation, reducing claims processing time from 6 weeks to 2 days while maintaining Top Secret/SCI compliance.",
    image: "/rocket-federal.webp",
    link: "/case-studies/federal-automation",
    category: "Federal Government"
  },
  {
    id: "dod-manufacturing",
    title: "DoD Manufacturing Facility Achieves 99.2% Uptime",
    description: "Deployed FedRAMP-authorized cybersecurity platforms and predictive maintenance analytics for defense manufacturing operations, eliminating 75% of unplanned downtime across 50+ production lines.",
    image: "/manufacturing-security.jpg",
    link: "/case-studies/dod-manufacturing",
    category: "Department of Defense"
  },
  {
    id: "va-healthcare",
    title: "VA Medical Center Integrates 12 Legacy Systems",
    description: "Unified patient data across 12 disparate VA healthcare systems with FedRAMP-authorized integration platforms, reducing administrative burden by 60% and improving care coordination for 500K+ veterans.",
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
    description: "Zero-downtime migration of mission-critical intelligence systems to FedRAMP High cloud infrastructure, achieving Impact Level 5 compliance while reducing infrastructure costs by 40%.",
    image: "/defense-cyber-ops.b7c4e1f3.jpg",
    link: "/case-studies/defense-cloud",
    category: "Intelligence Community"
  },
  {
    id: "state-energy",
    title: "State Energy Commission Reduces Outages 65%",
    description: "Deployed StateRAMP-authorized IoT platform monitoring 500+ substations with 15,000+ sensors and predictive maintenance analytics, reducing grid outages by 65% for 8.5 million residents.",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Swipe handlers for case study carousel
  const swipeRef = useSwipe({
    onSwipeLeft: () => scroll('right'),
    onSwipeRight: () => scroll('left'),
  });

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const cardWidth = containerRef.current.offsetWidth / 3; // Width of one card
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    containerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });

    // Update index
    if (direction === 'right' && currentIndex < caseStudies.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-sm font-medium text-orange-600 mb-3">Case Studies</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Proven Government Results
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg text-slate-600 mb-6">
              Real-world case studies demonstrating measurable mission impact across federal, state, and local government agencies.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                asChild
                variant="default"
                className="bg-slate-900 hover:bg-slate-800 text-white"
              >
                <Link href="/case-studies">
                  All cases
                </Link>
              </Button>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  disabled={currentIndex === 0}
                  className="w-10 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-slate-900 hover:bg-slate-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Previous cases"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-900" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={currentIndex >= caseStudies.length - 3}
                  className="w-10 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-slate-900 hover:bg-slate-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Next cases"
                >
                  <ChevronRight className="w-5 h-5 text-slate-900" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case Study Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div 
          ref={(el) => {
            containerRef.current = el;
            if (swipeRef.current !== el) {
              (swipeRef as any).current = el;
            }
          }}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 touch-pan-y"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {caseStudies.map((study) => (
            <Card 
              key={study.id}
              className="flex-none w-full lg:w-[calc(33.333%-1rem)] snap-start bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              onMouseEnter={() => prefetchImage(study.image)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <ImageWithLoader
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-slate-900 rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {study.description}
                </p>
                <Link href={study.link} className="w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors group/btn">
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
