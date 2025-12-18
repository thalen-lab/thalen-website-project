import { useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface UpdateItem {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  date: string;
}

const industryUpdates: UpdateItem[] = [
  {
    id: "1",
    title: "OMB M-24-18: AI Governance Requirements for Federal Agencies",
    source: "Office of Management and Budget",
    sourceUrl: "https://www.whitehouse.gov/omb/management/ofcio/",
    date: "Dec 2024",
  },
  {
    id: "2",
    title: "FedRAMP Rev 5 Transition Deadline Extended to March 2025",
    source: "FedRAMP PMO",
    sourceUrl: "https://www.fedramp.gov/",
    date: "Dec 2024",
  },
  {
    id: "3",
    title: "CISA Zero Trust Maturity Model 2.0 Implementation Guide Released",
    source: "CISA",
    sourceUrl: "https://www.cisa.gov/zero-trust-maturity-model",
    date: "Nov 2024",
  },
  {
    id: "4",
    title: "Executive Order 14110: Safe AI Development Standards Now Effective",
    source: "White House",
    sourceUrl: "https://www.whitehouse.gov/briefing-room/presidential-actions/",
    date: "Nov 2024",
  },
  {
    id: "5",
    title: "CMMC 2.0 Final Rule Published - Phased Rollout Begins Q1 2025",
    source: "DoD CIO",
    sourceUrl: "https://dodcio.defense.gov/CMMC/",
    date: "Oct 2024",
  },
  {
    id: "6",
    title: "GSA MAS IT Category Refresh: New SINs for AI/ML Services",
    source: "GSA",
    sourceUrl: "https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology",
    date: "Oct 2024",
  },
  {
    id: "7",
    title: "HIPAA Security Rule Update: Enhanced Cybersecurity Requirements",
    source: "HHS OCR",
    sourceUrl: "https://www.hhs.gov/hipaa/for-professionals/security/index.html",
    date: "Sep 2024",
  },
  {
    id: "8",
    title: "NIST SP 800-53 Rev 5.1: Updated Security Controls Catalog",
    source: "NIST",
    sourceUrl: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
    date: "Sep 2024",
  },
];

export default function IndustryUpdates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate through updates
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industryUpdates.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeUpdate = industryUpdates[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + industryUpdates.length) % industryUpdates.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % industryUpdates.length);
  };

  return (
    <section 
      className="relative bg-primary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container relative py-4 md:py-5">
        <div className="flex items-center gap-4 md:gap-6">
          {/* Label */}
          <div className="hidden sm:flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full shrink-0">
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Industry Updates</span>
          </div>

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors shrink-0"
            aria-label="Previous update"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>

          {/* Main ticker content */}
          <div className="flex-1 min-w-0">
            <a
              href={activeUpdate.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start md:items-center gap-4 hover:opacity-90 transition-opacity"
            >
              {/* Title */}
              <span className="flex-1 text-base md:text-lg text-white font-medium leading-snug group-hover:text-orange-300 transition-colors line-clamp-2">
                {activeUpdate.title}
              </span>

              {/* Source and date */}
              <div className="hidden lg:flex items-center gap-3 text-sm text-white/70 shrink-0">
                <span className="flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5" />
                  {activeUpdate.source}
                </span>
                <span className="text-white/40">|</span>
                <span>{activeUpdate.date}</span>
              </div>

              <ChevronRight className="hidden md:block w-4 h-4 text-white/50 group-hover:text-orange-400 transition-colors shrink-0" />
            </a>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors shrink-0"
            aria-label="Next update"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>

          {/* Counter indicator */}
          <div className="hidden sm:flex items-center gap-1 text-sm text-white/60 shrink-0 tabular-nums">
            <span className="text-white font-medium">{activeIndex + 1}</span>
            <span>/</span>
            <span>{industryUpdates.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
