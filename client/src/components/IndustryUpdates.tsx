import { useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, Newspaper, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface UpdateItem {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  date: string;
  category: "compliance" | "security" | "policy" | "technology";
}

const industryUpdates: UpdateItem[] = [
  {
    id: "1",
    title: "OMB M-24-18: AI Governance Requirements for Federal Agencies",
    source: "Office of Management and Budget",
    sourceUrl: "https://www.whitehouse.gov/omb/management/ofcio/",
    date: "Dec 2024",
    category: "policy",
  },
  {
    id: "2",
    title: "FedRAMP Rev 5 Transition Deadline Extended to March 2025",
    source: "FedRAMP PMO",
    sourceUrl: "https://www.fedramp.gov/",
    date: "Dec 2024",
    category: "compliance",
  },
  {
    id: "3",
    title: "CISA Zero Trust Maturity Model 2.0 Implementation Guide Released",
    source: "CISA",
    sourceUrl: "https://www.cisa.gov/zero-trust-maturity-model",
    date: "Nov 2024",
    category: "security",
  },
  {
    id: "4",
    title: "Executive Order 14110: Safe AI Development Standards Now Effective",
    source: "White House",
    sourceUrl: "https://www.whitehouse.gov/briefing-room/presidential-actions/",
    date: "Nov 2024",
    category: "policy",
  },
  {
    id: "5",
    title: "CMMC 2.0 Final Rule Published - Phased Rollout Begins Q1 2025",
    source: "DoD CIO",
    sourceUrl: "https://dodcio.defense.gov/CMMC/",
    date: "Oct 2024",
    category: "compliance",
  },
  {
    id: "6",
    title: "GSA MAS IT Category Refresh: New SINs for AI/ML Services",
    source: "GSA",
    sourceUrl: "https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology",
    date: "Oct 2024",
    category: "technology",
  },
  {
    id: "7",
    title: "HIPAA Security Rule Update: Enhanced Cybersecurity Requirements",
    source: "HHS OCR",
    sourceUrl: "https://www.hhs.gov/hipaa/for-professionals/security/index.html",
    date: "Sep 2024",
    category: "compliance",
  },
  {
    id: "8",
    title: "NIST SP 800-53 Rev 5.1: Updated Security Controls Catalog",
    source: "NIST",
    sourceUrl: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
    date: "Sep 2024",
    category: "security",
  },
];

export default function IndustryUpdates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate through updates
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % industryUpdates.length);
        setIsAnimating(false);
      }, 150);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeUpdate = industryUpdates[activeIndex];

  const goToPrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + industryUpdates.length) % industryUpdates.length);
      setIsAnimating(false);
    }, 150);
  };

  const goToNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % industryUpdates.length);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <section 
      className="relative bg-slate-950 border-y border-slate-800/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="container relative">
        <div className="flex items-center">
          {/* Bold Label Section */}
          <div className="hidden lg:flex items-center gap-3 py-8 pr-8 border-r border-slate-800/70">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <TrendingUp className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-orange-400 uppercase tracking-widest">Latest</span>
              <span className="text-base font-bold text-white">Industry Updates</span>
            </div>
          </div>

          {/* Mobile Label */}
          <div className="lg:hidden flex items-center gap-2 py-6 pr-4 border-r border-slate-800/70">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Updates</span>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex items-center gap-4 py-8 px-6 lg:px-8">
            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevious}
                className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/50 hover:border-slate-600 transition-all duration-200"
                aria-label="Previous update"
              >
                <ChevronLeft className="w-5 h-5 text-slate-400" />
              </button>
              <button
                onClick={goToNext}
                className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/50 hover:border-slate-600 transition-all duration-200"
                aria-label="Next update"
              >
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Ticker Content */}
            <div className="flex-1 min-w-0 overflow-hidden">
              <a
                href={activeUpdate.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex items-center gap-4 transition-all duration-150",
                  isAnimating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
                )}
              >
                {/* Title */}
                <span className="flex-1 text-base md:text-lg lg:text-xl text-slate-200 font-medium leading-tight group-hover:text-white transition-colors truncate md:whitespace-normal md:line-clamp-1">
                  {activeUpdate.title}
                </span>

                {/* External Link Icon */}
                <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-orange-400 transition-colors shrink-0" />
              </a>
            </div>

            {/* Source & Date */}
            <div className="hidden xl:flex items-center gap-4 pl-4 border-l border-slate-800/70">
              <div className="flex flex-col items-end">
                <span className="text-xs text-slate-500 uppercase tracking-wider">Source</span>
                <span className="text-base text-slate-300 font-medium whitespace-nowrap">{activeUpdate.source}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-slate-500 uppercase tracking-wider">Date</span>
                <span className="text-base text-slate-300 font-medium">{activeUpdate.date}</span>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="hidden md:flex items-center gap-3 py-8 pl-6 border-l border-slate-800/70">
            <div className="flex items-center gap-1.5">
              {industryUpdates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(index);
                      setIsAnimating(false);
                    }, 150);
                  }}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === activeIndex 
                      ? "bg-orange-400 w-8" 
                      : "bg-slate-700 hover:bg-slate-600"
                  )}
                  aria-label={`Go to update ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Counter - Mobile */}
          <div className="md:hidden flex items-center gap-1 py-6 pl-4 border-l border-slate-800/70 text-base text-slate-500 tabular-nums">
            <span className="text-white font-bold">{activeIndex + 1}</span>
            <span>/</span>
            <span>{industryUpdates.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
