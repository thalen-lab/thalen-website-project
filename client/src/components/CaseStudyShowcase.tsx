import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ImageWithLoader } from '@/components/ImageWithLoader';

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
  // Display only the first three case studies
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-10 md:mb-12 lg:mb-16"
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
            <p className="text-lg text-slate-600">
              Real-world case studies demonstrating measurable mission impact across federal, state, and local government agencies.
            </p>
          </div>
        </motion.div>

        {/* Case Study Cards - Static 3-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12"
        >
          {featuredCaseStudies.map((study) => (
            <Card 
              key={study.id}
              className="bg-white border-2 border-slate-200 rounded-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col p-0"
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
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3 flex-grow">
                  {study.description}
                </p>
                <Link 
                  href={study.link}
                  className="inline-flex items-center p-0 h-auto text-slate-900 hover:text-orange-600 font-medium group/btn transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
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
            className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors"
          >
            View All Cases
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
