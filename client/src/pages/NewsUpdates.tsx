import { useState, useRef, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, ChevronLeft, ChevronRight, Bell, ExternalLink } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NewsItem {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  date: string;
  category: 'company' | 'awards' | 'partnership' | 'compliance' | 'security' | 'policy' | 'technology';
  description: string;
}

// Company news and announcements
const companyNews: NewsItem[] = [
  {
    id: 'c1',
    title: 'Thalen Technologies Expands Federal Practice with New Leadership',
    source: 'Thalen Technologies',
    sourceUrl: '/news/federal-practice-expansion',
    date: 'Jan 2026',
    category: 'company',
    description: 'New executive hires and expanded capabilities position Thalen Technologies for continued growth in federal automation and AI services.',
  },
  {
    id: 'c2',
    title: 'Recognized as Top Government IT Contractor 2025',
    source: 'Government Technology Awards',
    sourceUrl: '/news/government-it-contractor-award',
    date: 'Dec 2025',
    category: 'awards',
    description: 'Industry recognition for excellence in government technology modernization, automation solutions, and mission-critical implementations.',
  },
  {
    id: 'c3',
    title: 'Strategic Partnership with Leading Cloud Provider',
    source: 'Thalen Technologies',
    sourceUrl: '/news/cloud-partnership',
    date: 'Nov 2025',
    category: 'partnership',
    description: 'New technology partnerships expand our capabilities in AI-powered automation, cloud services, and FedRAMP-authorized solutions.',
  },
  {
    id: 'c4',
    title: 'Thalen Technologies Achieves FedRAMP High Authorization',
    source: 'FedRAMP PMO',
    sourceUrl: '/news/fedramp-high-authorization',
    date: 'Oct 2025',
    category: 'compliance',
    description: 'Successfully completed FedRAMP High authorization for our government cloud platform, enabling secure federal deployments.',
  },
  {
    id: 'c5',
    title: 'New CMMC Level 2 Certification Achieved',
    source: 'CMMC Accreditation Body',
    sourceUrl: '/news/cmmc-certification',
    date: 'Sep 2025',
    category: 'security',
    description: 'Thalen Technologies achieves CMMC Level 2 certification, strengthening our position as a trusted defense contractor partner.',
  },
  {
    id: 'c6',
    title: 'Awarded $15M Federal Automation Contract',
    source: 'Thalen Technologies',
    sourceUrl: '/news/federal-automation-contract',
    date: 'Aug 2025',
    category: 'company',
    description: 'Multi-year contract to modernize federal agency operations through intelligent automation and process optimization.',
  },
  {
    id: 'c7',
    title: 'Launch of AI-Powered Document Processing Platform',
    source: 'Thalen Technologies',
    sourceUrl: '/news/document-processing-platform',
    date: 'Jul 2025',
    category: 'technology',
    description: 'New intelligent document processing solution reduces manual review time by 85% while maintaining 99.7% accuracy for federal agencies.',
  },
  {
    id: 'c8',
    title: 'Named to GovTech 100 List for Third Consecutive Year',
    source: 'Government Technology Magazine',
    sourceUrl: '/news/govtech-100',
    date: 'Jun 2025',
    category: 'awards',
    description: 'Recognition for innovative solutions that transform how government agencies deliver services and engage with citizens.',
  },
  {
    id: 'c9',
    title: 'Expanded Cybersecurity Operations Center Opens',
    source: 'Thalen Technologies',
    sourceUrl: '/news/security-operations-center',
    date: 'May 2025',
    category: 'security',
    description: 'New 24/7 Security Operations Center provides enhanced threat monitoring and incident response for federal clients.',
  },
  {
    id: 'c10',
    title: 'Joint Venture with Defense Contractor Announced',
    source: 'Thalen Technologies',
    sourceUrl: '/news/defense-joint-venture',
    date: 'Apr 2025',
    category: 'partnership',
    description: 'Strategic alliance combines expertise in defense systems integration with advanced AI capabilities for DoD missions.',
  },
  {
    id: 'c11',
    title: 'StateRAMP Authorization Achieved',
    source: 'StateRAMP PMO',
    sourceUrl: '/news/stateramp-authorization',
    date: 'Mar 2025',
    category: 'compliance',
    description: 'Cloud platform now authorized for state and local government deployments, expanding our public sector reach.',
  },
];

// Industry news and updates (same as homepage)
const industryNews: NewsItem[] = [
  {
    id: 'i1',
    title: 'OMB M-24-18: AI Governance Requirements',
    source: 'Office of Management and Budget',
    sourceUrl: 'https://www.whitehouse.gov/omb/management/ofcio/',
    date: 'Dec 2024',
    category: 'policy',
    description: 'New federal requirements for AI governance, risk management, and responsible deployment across all executive branch agencies.',
  },
  {
    id: 'i2',
    title: 'FedRAMP Rev 5 Transition Deadline Extended',
    source: 'FedRAMP PMO',
    sourceUrl: 'https://www.fedramp.gov/',
    date: 'Dec 2024',
    category: 'compliance',
    description: 'Cloud service providers now have until March 2025 to complete transition to FedRAMP Rev 5 security controls baseline.',
  },
  {
    id: 'i3',
    title: 'CISA Zero Trust Maturity Model 2.0',
    source: 'CISA',
    sourceUrl: 'https://www.cisa.gov/zero-trust-maturity-model',
    date: 'Nov 2024',
    category: 'security',
    description: 'Updated implementation guide for federal agencies advancing their zero trust architecture adoption and maturity assessment.',
  },
  {
    id: 'i4',
    title: 'Executive Order 14110: Safe AI Standards',
    source: 'White House',
    sourceUrl: 'https://www.whitehouse.gov/briefing-room/presidential-actions/',
    date: 'Nov 2024',
    category: 'policy',
    description: 'Comprehensive AI safety and security standards now effective for federal agencies and government contractors.',
  },
  {
    id: 'i5',
    title: 'CMMC 2.0 Final Rule Published',
    source: 'DoD CIO',
    sourceUrl: 'https://dodcio.defense.gov/CMMC/',
    date: 'Oct 2024',
    category: 'compliance',
    description: 'Cybersecurity Maturity Model Certification final rule establishes phased rollout beginning Q1 2025 for defense contractors.',
  },
  {
    id: 'i6',
    title: 'GSA MAS IT Category Refresh',
    source: 'GSA',
    sourceUrl: 'https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology',
    date: 'Oct 2024',
    category: 'technology',
    description: 'New Special Item Numbers (SINs) added for AI/ML services, expanding procurement pathways for emerging technologies.',
  },
];

const categoryColors: Record<string, string> = {
  company: 'bg-blue-500',
  awards: 'bg-amber-500',
  partnership: 'bg-purple-500',
  compliance: 'bg-blue-500',
  security: 'bg-red-500',
  policy: 'bg-purple-500',
  technology: 'bg-green-500',
};

const categoryLabels: Record<string, string> = {
  company: 'Company News',
  awards: 'Awards',
  partnership: 'Partnership',
  compliance: 'Compliance',
  security: 'Security',
  policy: 'Policy',
  technology: 'Technology',
};

// News Card Component - Matching homepage Industry Updates style
function NewsCard({ item, variant = 'dark' }: { item: NewsItem; variant?: 'dark' | 'light' }) {
  const isExternal = item.sourceUrl.startsWith('http');
  
  const cardContent = (
    <Card 
      className={cn(
        "h-full rounded-lg transition-all duration-300 overflow-hidden group flex flex-col p-0",
        variant === 'dark' 
          ? "bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#E07020]" 
          : "bg-white border border-gray-200 hover:border-[#E07020] hover:shadow-lg"
      )}
    >
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Category Label and Date */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={cn("w-2 h-2 rounded-full", categoryColors[item.category])}></div>
            <span className={cn(
              "text-xs font-semibold uppercase tracking-wider",
              variant === 'dark' ? "text-white" : "text-gray-800"
            )}>
              {categoryLabels[item.category]}
            </span>
          </div>
          <span className={cn(
            "text-xs font-medium",
            variant === 'dark' ? "text-white/60" : "text-gray-500"
          )}>
            {item.date}
          </span>
        </div>

        {/* Title */}
        <h3 className={cn(
          "text-base sm:text-lg font-bold mb-2 line-clamp-2 group-hover:text-[#E07020] transition-colors",
          variant === 'dark' ? "text-white" : "text-gray-900"
        )}>
          {item.title}
        </h3>

        {/* Description */}
        <p className={cn(
          "text-sm mb-4 line-clamp-3 flex-grow leading-relaxed",
          variant === 'dark' ? "text-white/70" : "text-gray-600"
        )}>
          {item.description}
        </p>

        {/* Source and Link */}
        <div className={cn(
          "flex items-center justify-between pt-3 border-t",
          variant === 'dark' ? "border-white/10" : "border-gray-100"
        )}>
          <span className={cn(
            "text-xs line-clamp-1 flex-1 mr-2",
            variant === 'dark' ? "text-white/50" : "text-gray-400"
          )}>
            <span className={cn(
              "font-medium",
              variant === 'dark' ? "text-white/70" : "text-gray-600"
            )}>
              {item.source}
            </span>
          </span>
          <span className={cn(
            "inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider group-hover:text-[#E07020] transition-colors flex-shrink-0",
            variant === 'dark' ? "text-white/70" : "text-gray-500"
          )}>
            Read
            {isExternal ? <ExternalLink className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
          </span>
        </div>
      </div>
    </Card>
  );

  if (isExternal) {
    return (
      <a
        href={item.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={item.sourceUrl} className="block h-full">
      {cardContent}
    </Link>
  );
}

// Mobile Carousel Component
function MobileCarousel({ items, variant = 'dark' }: { items: NewsItem[]; variant?: 'dark' | 'light' }) {
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

    if (isLeftSwipe && currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  }, [currentIndex, items.length]);

  return (
    <div className="md:hidden">
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
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 px-1">
              <NewsCard item={item} variant={variant} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300 min-w-[16px] min-h-[16px] flex items-center justify-center",
              index === currentIndex 
                ? "bg-[#E07020] w-5" 
                : variant === 'dark' ? "bg-white/30 hover:bg-white/50" : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Swipe hint */}
      <p className={cn(
        "text-center text-xs mt-3 flex items-center justify-center gap-1",
        variant === 'dark' ? "text-white/50" : "text-gray-400"
      )}>
        <ChevronLeft className="h-3 w-3" />
        Swipe to explore
        <ChevronRight className="h-3 w-3" />
      </p>
    </div>
  );
}

export default function NewsUpdates() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 text-white">
        <div className="absolute inset-0 bg-[url('/img/patterns/hero-pattern.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="relative container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb 
              items={[
                { label: 'About', href: '/about' },
                { label: 'News & Updates' }
              ]} 
              variant="light" 
              className="mb-6 md:mb-8"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center leading-tight text-white">
                News & Updates
              </h1>
              
              <p className="text-base md:text-lg text-white/90 text-center max-w-3xl mx-auto">
                Stay informed about the latest developments at Thalen Technologies, including company announcements, industry recognition, partnership news, and regulatory updates affecting government technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company News Section - Light Theme */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container">
          <motion.div 
            className="mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-10 h-[2px] bg-[#E07020]"></div>
                  <span className="text-[#E07020] font-semibold text-xs uppercase tracking-[0.2em]">Company News</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Thalen Announcements
                </h2>
              </div>
              <div className="max-w-lg">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed border-l-3 border-[#E07020]/50 pl-3">
                  Latest updates on <strong className="text-gray-900">company milestones</strong>, awards, partnerships, and strategic initiatives.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mobile Carousel */}
          <MobileCarousel items={companyNews} variant="light" />

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
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {companyNews.map((item) => (
              <motion.div
                key={item.id}
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
                <NewsCard item={item} variant="light" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Updates Section - Dark Theme (matching homepage) */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#0A2540] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12344D]"></div>
        
        <div className="container relative z-10">
          <motion.div 
            className="mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-10 h-[2px] bg-[#E07020]"></div>
                  <span className="text-[#E07020] font-semibold text-xs uppercase tracking-[0.2em]">Industry Updates</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Government Tech News
                </h2>
              </div>
              <div className="max-w-lg">
                <p className="text-sm md:text-base text-white/80 leading-relaxed border-l-3 border-[#E07020]/50 pl-3">
                  Stay informed on the latest <strong className="text-white">compliance requirements</strong>, security updates, and policy changes affecting federal technology programs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mobile Carousel */}
          <MobileCarousel items={industryNews} variant="dark" />

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
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {industryNews.map((item) => (
              <motion.div
                key={item.id}
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
                <NewsCard item={item} variant="dark" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subscribe CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Bell className="w-4 h-4" />
              Stay Updated
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Get the Latest Updates
            </h2>
            <p className="text-gray-600 mb-8 text-base md:text-lg">
              Subscribe to our newsletter for the latest company news, industry insights, and regulatory updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/insights">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                  View Insights <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
