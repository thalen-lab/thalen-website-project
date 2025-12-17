import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from 'framer-motion';

interface CaseStudyCard {
  title: string;
  agencyType: string;
  caseStudyLink: string;
  image: string;
  description: string;
}

const caseStudies: CaseStudyCard[] = [
  {
    title: "Claims Processing Transformation",
    agencyType: "Federal Agency",
    caseStudyLink: "/case-studies/federal-automation",
    image: "/hero-datacenter.jpg",
    description: "Streamlined claims processing through intelligent automation, reducing turnaround time and improving citizen services."
  },
  {
    title: "Predictive Maintenance Platform",
    agencyType: "Defense & Aerospace",
    caseStudyLink: "/case-studies/dod-manufacturing",
    image: "/defense-cyber-ops.b7c4e1f3.jpg",
    description: "Implemented predictive analytics to optimize maintenance schedules and ensure mission-critical system availability."
  },
  {
    title: "Healthcare Systems Integration",
    agencyType: "VA Healthcare",
    caseStudyLink: "/case-studies/va-healthcare",
    image: "/healthcare-legacy-it.jpg",
    description: "Unified disparate healthcare systems to enable real-time patient data access and improved care coordination."
  },
  {
    title: "Fraud Detection & Prevention",
    agencyType: "State Government",
    caseStudyLink: "/case-studies/state-attorney-general",
    image: "/financial-fraud-soc.a8f3d9e2.jpg",
    description: "Deployed AI-powered analytics to identify and prevent fraudulent activities, protecting taxpayer resources."
  }
];


export default function ResultsAtGlance() {
  return (
    <section className="py-16 md:py-20 bg-[#0A2540] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540]/95 to-[#1a3a5c]/90" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-blue-300 mb-3 tracking-wider uppercase">Featured Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            See how we've helped government agencies and enterprises solve complex challenges.
          </p>
        </motion.div>

        {/* Case Study Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12"
        >
          {caseStudies.map((study, index) => (
            <Link 
              key={index}
              href={study.caseStudyLink}
              className="group block"
            >
              <div className="relative h-[280px] md:h-[320px] lg:h-[340px] rounded-xl overflow-hidden border border-blue-400/20 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Gradient Overlay - stronger at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/70 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                  {/* Top: Category Badge */}
                  <div>
                    <span className="inline-block px-3 py-1.5 bg-slate-700/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg">
                      {study.agencyType}
                    </span>
                  </div>
                  
                  {/* Bottom: Title and Description */}
                  <div>
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                      {study.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-blue-100/80 mb-4 line-clamp-3">
                      {study.description}
                    </p>
                    
                    {/* View Case Study Link */}
                    <div className="flex items-center text-orange-400 text-sm font-semibold group-hover:text-orange-300 transition-colors">
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <Link 
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
