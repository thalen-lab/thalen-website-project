import { useState, useEffect } from "react";
import { ExternalLink, AlertCircle, FileText, Shield, Building2, Scale, ChevronRight, Newspaper } from "lucide-react";
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
  regulation: { icon: Scale, label: "Regulation", color: "text-amber-600 dark:text-amber-400" },
  compliance: { icon: Shield, label: "Compliance", color: "text-emerald-600 dark:text-emerald-400" },
  policy: { icon: FileText, label: "Policy", color: "text-blue-600 dark:text-blue-400" },
  security: { icon: AlertCircle, label: "Security", color: "text-red-600 dark:text-red-400" },
  procurement: { icon: Building2, label: "Procurement", color: "text-purple-600 dark:text-purple-400" },
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
  const CategoryIcon = categoryConfig[activeUpdate.category].icon;

  return (
    <section 
      className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-y border-slate-700/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative py-3">
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Label */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full shrink-0">
            <Newspaper className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Industry Updates</span>
          </div>

          {/* Mobile label */}
          <div className="sm:hidden flex items-center gap-1.5 shrink-0">
            <Newspaper className="w-4 h-4 text-orange-400" />
          </div>

          {/* Main ticker content */}
          <div className="flex-1 min-w-0">
            <a
              href={activeUpdate.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              {/* Category badge */}
              <div className={cn(
                "hidden md:flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-white/5 border border-white/10",
                categoryConfig[activeUpdate.category].color
              )}>
                <CategoryIcon className="w-3 h-3" />
                <span>{categoryConfig[activeUpdate.category].label}</span>
              </div>

              {/* Title */}
              <div className="flex-1 min-w-0 flex items-center gap-2">
                {activeUpdate.isNew && (
                  <span className="shrink-0 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-orange-500 text-white rounded">
                    New
                  </span>
                )}
                <span className="text-sm text-white font-medium truncate group-hover:text-orange-300 transition-colors">
                  {activeUpdate.title}
                </span>
              </div>

              {/* Source and date */}
              <div className="hidden lg:flex items-center gap-3 text-xs text-slate-400 shrink-0">
                <span className="flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  {activeUpdate.source}
                </span>
                <span className="text-slate-500">|</span>
                <span>{activeUpdate.date}</span>
              </div>

              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-orange-400 transition-colors shrink-0" />
            </a>
          </div>

          {/* Navigation dots */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            {industryUpdates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  idx === activeIndex 
                    ? "bg-orange-400 w-4" 
                    : "bg-slate-600 hover:bg-slate-500"
                )}
                aria-label={`Go to update ${idx + 1}`}
              />
            ))}
          </div>

          {/* Quick links dropdown */}
          <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-slate-700">
            <a
              href="https://www.fedramp.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors"
            >
              FedRAMP
            </a>
            <a
              href="https://www.cisa.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors"
            >
              CISA
            </a>
            <a
              href="https://csrc.nist.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors"
            >
              NIST
            </a>
            <a
              href="https://sam.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors"
            >
              SAM.gov
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
