import { ArrowRight, Shield, CheckCircle2, Award } from "lucide-react";
import { Link } from "wouter";
import { motion } from 'framer-motion';

interface ResultMetric {
  value: string;
  label: string;
  agencyType: string;
  caseStudyLink: string;
}

const resultMetrics: ResultMetric[] = [
  {
    value: "85%",
    label: "Process Automation",
    agencyType: "Federal Agency",
    caseStudyLink: "/case-studies/federal-automation"
  },
  {
    value: "99.2%",
    label: "System Uptime",
    agencyType: "DoD Manufacturing",
    caseStudyLink: "/case-studies/dod-manufacturing"
  },
  {
    value: "12",
    label: "Systems Integrated",
    agencyType: "VA Healthcare",
    caseStudyLink: "/case-studies/va-healthcare"
  },
  {
    value: "$50M",
    label: "Fraud Prevented",
    agencyType: "State Government",
    caseStudyLink: "/case-studies/state-attorney-general"
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
    <section className="py-16 md:py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

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
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Measurable outcomes from federal, state, and local government engagements
          </p>
        </motion.div>

        {/* Metrics Strip */}
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
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-5 md:p-6 text-center hover:bg-slate-800 hover:border-orange-500/50 transition-all duration-300 h-full">
                {/* Agency Badge */}
                <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full mb-3">
                  {metric.agencyType}
                </span>
                
                {/* Metric Value */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {metric.value}
                </div>
                
                {/* Metric Label */}
                <p className="text-slate-400 text-sm md:text-base font-medium">
                  {metric.label}
                </p>
                
                {/* View Case Study Link */}
                <div className="mt-3 flex items-center justify-center text-orange-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case Study
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
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
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/30 border border-slate-700 rounded-full"
              >
                <IconComponent className="w-4 h-4 text-green-400" />
                <span className="text-sm text-slate-300 font-medium">{badge.name}</span>
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
    </section>
  );
}
