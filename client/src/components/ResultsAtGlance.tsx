import { ArrowRight, Shield, CheckCircle2, Award } from "lucide-react";
import { Link } from "wouter";
import { motion } from 'framer-motion';

interface ResultMetric {
  value: string;
  label: string;
  agencyType: string;
  caseStudyLink: string;
  image: string;
}

const resultMetrics: ResultMetric[] = [
  {
    value: "85%",
    label: "Process Automation",
    agencyType: "Federal Agency",
    caseStudyLink: "/case-studies/federal-automation",
    image: "/images/results/federal-automation.jpg"
  },
  {
    value: "99.2%",
    label: "System Uptime",
    agencyType: "DoD Manufacturing",
    caseStudyLink: "/case-studies/dod-manufacturing",
    image: "/images/results/manufacturing-uptime.jpg"
  },
  {
    value: "12",
    label: "Systems Integrated",
    agencyType: "VA Healthcare",
    caseStudyLink: "/case-studies/va-healthcare",
    image: "/images/results/healthcare-systems.jpg"
  },
  {
    value: "$50M",
    label: "Fraud Prevented",
    agencyType: "State Government",
    caseStudyLink: "/case-studies/state-attorney-general",
    image: "/images/results/fraud-prevention.jpg"
  }
];

const complianceBadges = [
  { name: "FedRAMP High", icon: Shield },
  { name: "StateRAMP", icon: CheckCircle2 },
  { name: "CMMC Level 2", icon: Award },
  { name: "IL5 Authorized", icon: Shield }
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
          <p className="text-sm font-medium text-orange-400 mb-3 tracking-wider uppercase">Proven Results</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Results at a Glance
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Measurable outcomes from federal, state, and local government engagements
          </p>
        </motion.div>

        {/* Flip Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12"
        >
          {resultMetrics.map((metric, index) => (
            <Link 
              key={index}
              href={metric.caseStudyLink}
              className="group perspective-1000"
            >
              <div className="relative h-[200px] md:h-[240px] lg:h-[260px] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* Front Face - Stats */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="bg-[#0d3050]/80 backdrop-blur-sm border border-blue-400/20 rounded-lg p-5 md:p-6 text-center h-full flex flex-col justify-center hover:border-orange-500/50 transition-all duration-300">
                    {/* Agency Badge */}
                    <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full mb-3 mx-auto">
                      {metric.agencyType}
                    </span>
                    
                    {/* Metric Value */}
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                      {metric.value}
                    </div>
                    
                    {/* Metric Label */}
                    <p className="text-blue-200/70 text-sm md:text-base font-medium">
                      {metric.label}
                    </p>
                    
                    {/* Hover Hint */}
                    <div className="mt-3 text-blue-300/50 text-xs">
                      Hover to see more
                    </div>
                  </div>
                </div>

                {/* Back Face - Image */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="relative h-full rounded-lg overflow-hidden border border-orange-500/50">
                    <img 
                      src={metric.image} 
                      alt={metric.label}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent" />
                    
                    {/* Content on Image */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                      <span className="inline-block px-2 py-0.5 bg-orange-500 text-white text-xs font-medium rounded mb-2 w-fit">
                        {metric.agencyType}
                      </span>
                      <p className="text-white font-bold text-lg md:text-xl mb-1">
                        {metric.value} {metric.label}
                      </p>
                      <div className="flex items-center text-orange-400 text-sm font-medium">
                        View Case Study
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8"
        >
          {complianceBadges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-[#0d3050]/50 border border-blue-400/20 rounded-full"
              >
                <IconComponent className="w-4 h-4 text-green-400" />
                <span className="text-sm text-blue-100/80 font-medium">{badge.name}</span>
              </div>
            );
          })}
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

      {/* Custom CSS for 3D flip effect */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
