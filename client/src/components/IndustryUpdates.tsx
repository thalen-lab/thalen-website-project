import { useState, useRef, useCallback } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
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
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#0A2540] overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#0A2540]"></div>
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
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <TrendingUp className="w-5 h-5 text-orange-400" />
              </div>
              <p className="text-[#E07020] font-semibold uppercase tracking-wider text-sm">Industry Updates</p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Latest Government Tech News
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg text-white/80">
              Stay informed on the latest compliance requirements, security updates, and policy changes affecting federal technology programs.
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
              {industryUpdates.map((update) => (
                <div key={update.id} className="w-full flex-shrink-0 px-2">
                  <UpdateCard update={update} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {industryUpdates.map((_, index) => (
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
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industryUpdates.map((update) => (
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
              <UpdateCard update={update} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Update Card Component
function UpdateCard({ update }: { update: UpdateItem }) {
  return (
    <a
      href={update.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card 
        className="h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#E07020] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col p-0 hover:-translate-y-1"
      >
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category Label and Date */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-white/60 font-medium uppercase tracking-wider">
              {categoryLabels[update.category]}
            </span>
            <span className="text-xs text-white/50 font-medium">{update.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-[#E07020] transition-colors">
            {update.title}
          </h3>

          {/* Description */}
          <p className="text-white/70 text-sm mb-4 line-clamp-3 flex-grow">
            {update.description}
          </p>

          {/* Source and Link */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-xs text-white/50">
              Source: <span className="text-white/70">{update.source}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[#E07020] text-sm font-medium group-hover:gap-2 transition-all">
              Read More
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Card>
    </a>
  );
}
