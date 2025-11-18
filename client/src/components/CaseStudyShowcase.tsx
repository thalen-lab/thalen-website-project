import { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
    description: "Transformed manual workflows into intelligent automation, reducing processing time from 6 weeks to 2 days while maintaining government-grade security and compliance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    link: "/case-studies/federal-automation",
    category: "Federal Government"
  },
  {
    id: "manufacturing-uptime",
    title: "Manufacturing Giant Achieves 99.2% Uptime",
    description: "Cybersecurity and predictive maintenance eliminated 75% of unplanned downtime across 50+ facilities, saving $18M annually through IoT sensors and AI-powered analytics.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    link: "/case-studies/manufacturing-uptime",
    category: "Manufacturing"
  },
  {
    id: "healthcare-ai",
    title: "Healthcare System Integrates 12 Legacy Platforms",
    description: "Unified patient data across disparate systems, reducing administrative burden by 60% and improving care coordination for 2M+ patients while ensuring HIPAA compliance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    link: "/case-studies/healthcare-ai",
    category: "Healthcare"
  },
  {
    id: "bank-fraud",
    title: "Financial Institution Detects $50M in Fraud",
    description: "Real-time ML-powered fraud detection system processes 10M+ daily transactions, reducing false positives by 80% and preventing $50M in fraudulent activities annually.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    link: "/case-studies/bank-fraud",
    category: "Financial Services"
  },
  {
    id: "defense-cloud",
    title: "Defense Agency Migrates to Secure Cloud",
    description: "Zero-downtime migration of mission-critical systems to FedRAMP High cloud infrastructure, achieving IL5 compliance while reducing infrastructure costs by 40%.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    link: "/case-studies/defense-cloud",
    category: "Federal Government"
  },
  {
    id: "energy-grid",
    title: "Energy Company Optimizes Grid Performance",
    description: "Real-time analytics platform monitors 500+ substations, predicting equipment failures 30 days in advance and reducing outages by 65% across the distribution network.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    link: "/case-studies/energy-grid",
    category: "Energy"
  }
];

export default function CaseStudyShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-sm font-medium text-orange-600 mb-3">Case Studies</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Proven Transformation Results
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg text-slate-600 mb-6">
              Real-world case studies demonstrating measurable ROI across mission-critical environments.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/case-studies">
                <Button 
                  variant="default"
                  className="bg-slate-900 hover:bg-slate-800 text-white"
                >
                  All cases
                </Button>
              </Link>
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
        </div>

        {/* Case Study Cards */}
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {caseStudies.map((study) => (
            <Card 
              key={study.id}
              className="flex-none w-full lg:w-[calc(33.333%-1rem)] snap-start bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img 
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
                <Link href={study.link}>
                  <button className="w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors group/btn">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
