import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";


interface UpdateItem {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  date: string;
  category: "compliance" | "security" | "policy" | "technology";
  description: string;
}

const industryUpdates: UpdateItem[] = [
  {
    id: "1",
    title: "OMB M-24-18: AI Governance Requirements",
    source: "Office of Management and Budget",
    sourceUrl: "https://www.whitehouse.gov/omb/management/ofcio/",
    date: "Dec 2024",
    category: "policy",
    description: "New federal requirements for AI governance, risk management, and responsible deployment across all executive branch agencies.",
  },
  {
    id: "2",
    title: "FedRAMP Rev 5 Transition Deadline Extended",
    source: "FedRAMP PMO",
    sourceUrl: "https://www.fedramp.gov/",
    date: "Dec 2024",
    category: "compliance",
    description: "Cloud service providers now have until March 2025 to complete transition to FedRAMP Rev 5 security controls baseline.",
  },
  {
    id: "3",
    title: "CISA Zero Trust Maturity Model 2.0",
    source: "CISA",
    sourceUrl: "https://www.cisa.gov/zero-trust-maturity-model",
    date: "Nov 2024",
    category: "security",
    description: "Updated implementation guide for federal agencies advancing their zero trust architecture adoption and maturity assessment.",
  },
  {
    id: "4",
    title: "Executive Order 14110: Safe AI Standards",
    source: "White House",
    sourceUrl: "https://www.whitehouse.gov/briefing-room/presidential-actions/",
    date: "Nov 2024",
    category: "policy",
    description: "Comprehensive AI safety and security standards now effective for federal agencies and government contractors.",
  },
  {
    id: "5",
    title: "CMMC 2.0 Final Rule Published",
    source: "DoD CIO",
    sourceUrl: "https://dodcio.defense.gov/CMMC/",
    date: "Oct 2024",
    category: "compliance",
    description: "Cybersecurity Maturity Model Certification final rule establishes phased rollout beginning Q1 2025 for defense contractors.",
  },
  {
    id: "6",
    title: "GSA MAS IT Category Refresh",
    source: "GSA",
    sourceUrl: "https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology",
    date: "Oct 2024",
    category: "technology",
    description: "New Special Item Numbers (SINs) added for AI/ML services, expanding procurement pathways for emerging technologies.",
  },
];

const categoryColors = {
  compliance: "bg-blue-500",
  security: "bg-red-500",
  policy: "bg-purple-500",
  technology: "bg-green-500",
};

const categoryLabels = {
  compliance: "Compliance",
  security: "Security",
  policy: "Policy",
  technology: "Technology",
};

export default function IndustryUpdates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
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

    if (isLeftSwipe && currentIndex < industryUpdates.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-[#0A2540] overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12344D]"></div>
      
      <div className="container relative z-10">
        {/* Header - Reduced spacing */}
        <motion.div 
          className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 sm:gap-4">
            <div>
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
                <div className="w-8 sm:w-10 h-[2px] bg-[#E07020]"></div>
                <span className="text-[#E07020] font-semibold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em]">Industry Updates</span>
              </div>
              
              <h2 className="text-xl xs:text-2xl sm:text-2xl xs:text-3xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
                Latest Government Tech News
              </h2>
            </div>
            <div className="max-w-lg">
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed border-l-2 sm:border-l-3 border-[#E07020]/50 pl-2 sm:pl-3">
                Stay informed on the latest <strong className="text-white">compliance requirements</strong>, security updates, and policy changes affecting federal technology programs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mobile Swipeable Carousel */}
        <div className="md:hidden mb-4 sm:mb-6">
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
              {industryUpdates.map((update) => (
                <div key={update.id} className="w-full flex-shrink-0 px-1">
                  <UpdateCard update={update} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            {industryUpdates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300 min-w-[16px] min-h-[16px] flex items-center justify-center",
                  index === currentIndex 
                    ? "bg-[#E07020] w-4 sm:w-5" 
                    : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe hint */}
          <p className="text-center text-white/50 text-[10px] sm:text-xs mt-2 sm:mt-3 flex items-center justify-center gap-1">
            <ChevronLeft className="h-3 w-3" />
            Swipe to explore
            <ChevronRight className="h-3 w-3" />
          </p>
        </div>

        {/* Desktop Grid - Reduced gap */}
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
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
        >
          {industryUpdates.map((update, index) => (
            <motion.div
              key={update.id}
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
              <UpdateCard update={update} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Update Card Component - Refined design
function UpdateCard({ update, index = 0 }: { update: UpdateItem; index?: number }) {
  return (
    <a
      href={update.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card 
        className="h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#E07020] rounded-lg transition-all duration-300 overflow-hidden group flex flex-col p-0"
      >
        {/* Content - Reduced padding */}
        <div className="p-3 sm:p-4 flex flex-col flex-grow">
          {/* Category Label and Date */}
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className={cn("w-1.5 h-1.5 rounded-full", categoryColors[update.category])}></div>
              <span className="text-[10px] sm:text-xs text-white font-semibold uppercase tracking-wider">
                {categoryLabels[update.category]}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-white/60 font-medium">{update.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-[#E07020] transition-colors">
            {update.title}
          </h3>

          {/* Description */}
          <p className="text-white/70 text-[11px] sm:text-xs mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-3 flex-grow leading-relaxed">
            {update.description}
          </p>

          {/* Source and Link */}
          <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-white/10">
            <span className="text-[10px] sm:text-xs text-white/50 line-clamp-1 flex-1 mr-2">
              <span className="text-white/70 font-medium">{update.source}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-white/70 text-[10px] sm:text-xs font-semibold uppercase tracking-wider group-hover:text-[#E07020] transition-colors flex-shrink-0">
              Read
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Card>
    </a>
  );
}
