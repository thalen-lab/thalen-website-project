import { useState, useEffect } from "react";
import { ExternalLink, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface UpdateItem {
  id: string;
  category: "regulation" | "compliance" | "policy" | "security" | "procurement";
  title: string;
  source: string;
  sourceUrl: string;
  date: string;
  isNew?: boolean;
}

const industryUpdates: UpdateItem[] = [
  {
    id: "1",
    category: "regulation",
    title: "OMB M-24-18: AI Governance Requirements for Federal Agencies",
    source: "Office of Management and Budget",
    sourceUrl: "https://www.whitehouse.gov/omb/management/ofcio/",
    date: "Dec 2024",
    isNew: true,
  },
  {
    id: "2",
    category: "compliance",
    title: "FedRAMP Rev 5 Transition Deadline Extended to March 2025",
    source: "FedRAMP PMO",
    sourceUrl: "https://www.fedramp.gov/",
    date: "Dec 2024",
    isNew: true,
  },
  {
    id: "3",
    category: "security",
    title: "CISA Zero Trust Maturity Model 2.0 Implementation Guide Released",
    source: "CISA",
    sourceUrl: "https://www.cisa.gov/zero-trust-maturity-model",
    date: "Nov 2024",
  },
  {
    id: "4",
    category: "policy",
    title: "Executive Order 14110: Safe AI Development Standards Now Effective",
    source: "White House",
    sourceUrl: "https://www.whitehouse.gov/briefing-room/presidential-actions/",
    date: "Nov 2024",
  },
  {
    id: "5",
    category: "compliance",
    title: "CMMC 2.0 Final Rule Published - Phased Rollout Begins Q1 2025",
    source: "DoD CIO",
    sourceUrl: "https://dodcio.defense.gov/CMMC/",
    date: "Oct 2024",
  },
  {
    id: "6",
    category: "procurement",
    title: "GSA MAS IT Category Refresh: New SINs for AI/ML Services",
    source: "GSA",
    sourceUrl: "https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology",
    date: "Oct 2024",
  },
  {
    id: "7",
    category: "regulation",
    title: "HIPAA Security Rule Update: Enhanced Cybersecurity Requirements",
    source: "HHS OCR",
    sourceUrl: "https://www.hhs.gov/hipaa/for-professionals/security/index.html",
    date: "Sep 2024",
  },
  {
    id: "8",
    category: "security",
    title: "NIST SP 800-53 Rev 5.1: Updated Security Controls Catalog",
    source: "NIST",
    sourceUrl: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
    date: "Sep 2024",
  },
];

const categoryConfig = {
  regulation: { label: "Regulation", color: "text-white" },
  compliance: { label: "Compliance", color: "text-white" },
  policy: { label: "Policy", color: "text-white" },
  security: { label: "Security", color: "text-white" },
  procurement: { label: "Procurement", color: "text-white" },
};

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

  return (
    <section 
      className="relative border-y border-[oklch(0.20_0.05_250)]"
      style={{ background: 'linear-gradient(to right, oklch(0.20 0.05 250), oklch(0.22 0.05 250), oklch(0.20 0.05 250))' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative py-5 md:py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          {/* Label */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full shrink-0">
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Industry Updates</span>
          </div>

          {/* Main ticker content */}
          <div className="flex-1 min-w-0 w-full">
            <a
              href={activeUpdate.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:opacity-90 transition-opacity"
            >
              {/* Category badge */}
              <div className={cn(
                "inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-white/5 border border-white/10 shrink-0",
                categoryConfig[activeUpdate.category].color
              )}>
                <span>{categoryConfig[activeUpdate.category].label}</span>
              </div>

              {/* Title */}
              <div className="flex-1 min-w-0 flex items-center gap-3">
                {activeUpdate.isNew && (
                  <span className="shrink-0 px-2 py-1 text-xs font-bold uppercase tracking-wider bg-orange-500 text-white rounded">
                    New
                  </span>
                )}
                <span className="text-base md:text-lg text-white font-medium leading-snug group-hover:text-orange-300 transition-colors">
                  {activeUpdate.title}
                </span>
              </div>

              {/* Source and date */}
              <div className="hidden lg:flex items-center gap-4 text-sm text-white/70 shrink-0">
                <span className="flex items-center gap-1.5">
                  <ExternalLink className="w-4 h-4" />
                  {activeUpdate.source}
                </span>
                <span className="text-white/50">|</span>
                <span>{activeUpdate.date}</span>
              </div>

              <ChevronRight className="hidden sm:block w-5 h-5 text-white/50 group-hover:text-orange-400 transition-colors shrink-0" />
            </a>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center gap-2 shrink-0 mt-2 sm:mt-0">
            {industryUpdates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  idx === activeIndex 
                    ? "bg-orange-400 w-6" 
                    : "bg-slate-600 hover:bg-slate-500"
                )}
                aria-label={`Go to update ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quick links - moved to separate row for better spacing */}
        <div className="hidden xl:flex items-center gap-3 mt-4 pt-4 border-t border-slate-700/50">
          <span className="text-sm text-white/60 mr-2">Quick Links:</span>
          <a
            href="https://www.fedramp.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-sm font-medium text-white/70 hover:text-orange-400 hover:bg-white/5 rounded-md transition-colors"
          >
            FedRAMP
          </a>
          <a
            href="https://www.cisa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-sm font-medium text-white/70 hover:text-orange-400 hover:bg-white/5 rounded-md transition-colors"
          >
            CISA
          </a>
          <a
            href="https://csrc.nist.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-sm font-medium text-white/70 hover:text-orange-400 hover:bg-white/5 rounded-md transition-colors"
          >
            NIST
          </a>
          <a
            href="https://sam.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-sm font-medium text-white/70 hover:text-orange-400 hover:bg-white/5 rounded-md transition-colors"
          >
            SAM.gov
          </a>
        </div>
      </div>
    </section>
  );
}
