import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import CaseStudyShowcase from '@/components/CaseStudyShowcase';
import Footer from '@/components/Footer';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Cloud, 
  BarChart3,
  Cpu,
  Code,
  Users
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { useSwipe } from '@/hooks/useSwipe';

export default function Home() {
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);

  const services = [
    {
      icon: Cpu,
      title: 'Government Process Automation',
      description: 'Comprehensive automation services including RPA implementation, FedRAMP platform integration (50+ connectors), and workflow orchestration across government agencies with ATO documentation and compliance support.',
      href: '/services/automation'
    },
    {
      icon: BarChart3,
      title: 'Government Data Analytics Implementation',
      description: 'Implement secure analytics solutions using FedRAMP-authorized BI tools with data governance, compliance controls, and agency-specific customization.',
      href: '/services/data-analytics'
    },
    {
      icon: Cloud,
      title: 'FedRAMP Cloud Migration & Integration',
      description: 'Migrate to AWS GovCloud, Azure Government, or Salesforce Gov Cloud with ATO support, security compliance, and multi-cloud orchestration.',
      href: '/services/cloud'
    },
    {
      icon: Shield,
      title: 'Compliance & Security Implementation',
      description: 'Achieve FedRAMP, CMMC, and FISMA compliance through gap analysis, security controls implementation, and audit preparation support.',
      href: '/services/cybersecurity'
    },
    {
      icon: Code,
      title: 'Government Systems Integration',
      description: 'Connect 50+ FedRAMP platforms (Salesforce Gov Cloud, ServiceNow, Workday) with legacy systems using secure APIs, vendor-neutral architecture, and ATO-ready patterns.',
      href: '/services/system-integration'
    },
    {
      icon: Users,
      title: 'Federal IT Modernization',
      description: 'Vendor-neutral platform selection, legacy system modernization, change management, and Technology Modernization Fund (TMF) support for agencies.',
      href: '/services/digital-transformation'
    }
  ];

  const caseStudies = [
    {
      category: 'Federal Government',
      title: 'Federal Agency Achieves 85% Process Automation',
      description: 'Implemented UiPath Gov RPA platform with comprehensive ATO documentation, reducing claims processing time from 6 weeks to 2 days. $4.2M contract delivered 85% automation rate.',
      metric: '85%',
      metricLabel: 'Automation Rate',
      href: '/case-studies/federal-automation'
    },
    {
      category: 'Manufacturing',
      title: 'Manufacturing Giant Achieves 99.2% Uptime',
      description: 'Implemented FedRAMP-authorized cybersecurity platforms and predictive maintenance analytics, eliminating 75% of unplanned downtime across 50+ facilities with measurable ROI.',
      metric: '99.2%',
      metricLabel: 'System Uptime',
      href: '/case-studies/manufacturing-uptime'
    },
    {
      category: 'Healthcare',
      title: 'Healthcare System Integrates 12 Legacy Systems',
      description: 'Integrated 12 legacy healthcare systems with FedRAMP-authorized platforms, delivering real-time patient data access and $12M annual operational cost savings.',
      metric: '$12M',
      metricLabel: 'Annual Savings',
      href: '/case-studies/hhs-public-health'
    }
  ];



  const certifications = [
    {
      name: 'FedRAMP & StateRAMP Expert',
      description: 'Deep expertise implementing FedRAMP and StateRAMP-authorized platforms for federal, state, and local agencies at Moderate and High impact levels with proven ATO support.'
    },
    {
      name: 'CMMC Compliance Partner',
      description: 'Certified to help defense contractors achieve CMMC Level 2 and Level 3 compliance through gap analysis, controls implementation, and audit preparation.'
    },
    {
      name: 'ISO 27001 Certified',
      description: 'ISO 27001:2022 certified organization with proven methodologies for implementing information security management systems for government clients.'
    },
    {
      name: 'NIST Framework Expertise',
      description: 'Extensive experience implementing NIST Cybersecurity Framework v2.0 controls and security assessments for federal and defense agencies.'
    },
    {
      name: 'GSA Schedule Holder',
      description: 'GSA IT Schedule 70 contract holder providing streamlined procurement for government agencies seeking implementation and integration services.'
    },
    {
      name: 'ATO Support Services',
      description: 'Proven track record supporting agencies through FISMA Authority to Operate (ATO) processes with security documentation and compliance assessments.'
    },
    {
      name: 'CJIS & State Compliance',
      description: 'CJIS-compliant implementations for state and local law enforcement agencies, plus expertise with state-specific compliance frameworks and data sovereignty requirements.'
    },
    {
      name: 'Cleared Personnel Available',
      description: 'Top Secret/SCI cleared team members available for classified projects and sensitive government implementations requiring security clearances.'
    }
  ];



  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        {/* Hero Content */}
        <div className="relative container h-full flex items-center">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Implementing FedRAMP & StateRAMP Solutions</h1>
            <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed">Vendor-neutral consulting and systems integration for federal, state, and local government agencies</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">
                  Schedule Strategic Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all">
                <Link href="/methodology">View ROI Methodology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section - 2x3 Grid Layout */}
      <section className="py-16 md:py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-accent mb-4 tracking-wider uppercase">Core Capabilities</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Government Technology Implementation Services
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Vendor-neutral consulting for federal, state, and local agencies. We implement FedRAMP and StateRAMP-authorized platforms with proven compliance expertise and measurable mission impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="block group"
              >
                <Card className="h-full border border-white/10 hover:border-accent bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <service.icon className="h-12 w-12 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-base text-white/80 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-accent text-sm font-semibold group-hover:gap-3 gap-2 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Incentro Style */}
      <CaseStudyShowcase />

      {/* Certifications Section - Editorial Layout */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Trusted & Certified</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Enterprise & Government Security & Compliance
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Built for the most demanding security and compliance requirements across government agencies and enterprise organizations.
            </p>
          </motion.div>

          {/* 3-Column Grid with Hover-Reveal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative"
                >
                  <Card className="h-full border border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-lg bg-white">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                          {cert.name}
                        </h3>
                        <p className="text-base text-slate-600 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section - RAPID Framework - Redesigned */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Our Methodology</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">The NexDyne RAPID Framework</h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Structured 4-phase approach delivering compliant, on-budget FedRAMP and StateRAMP platform deployments
            </p>
          </motion.div>

          {/* Vertical Timeline Layout */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Phase 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="group relative"
            >
              <div className="flex gap-8 items-start">
                {/* Phase Number */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 group-hover:bg-white/10 group-hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    Research & Assessment
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Comprehensive process mapping, bottleneck identification, and ROI analysis to establish baseline metrics.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              <div className="flex gap-8 items-start">
                {/* Phase Number */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 group-hover:bg-white/10 group-hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    Architecture & Planning
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Solution architecture design, technology stack selection, and detailed implementation roadmap.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative"
            >
              <div className="flex gap-8 items-start">
                {/* Phase Number */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 group-hover:bg-white/10 group-hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    Implementation & Delivery
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Platform implementation with ATO documentation, security controls configuration, and zero-downtime migration.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phase 4 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative"
            >
              <div className="flex gap-8 items-start">
                {/* Phase Number */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl font-bold text-white">4</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 group-hover:bg-white/10 group-hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    Performance & Optimization
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Real-time monitoring, ROI tracking, and continuous optimization with predictive analytics.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-16 pt-12 border-t border-border text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base text-white mb-6">
              <strong className="text-white">90-day ATO timeline</strong> • <strong className="text-white">100% authorization success rate</strong> • <strong className="text-white">Zero operational disruption</strong>
            </p>
            <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
              <Link href="/methodology">
                Learn More About RAPID
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient diagonal-top text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive automation assessment and discover how our proven methodology can deliver measurable ROI for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
              <Link href="/contact">
                Schedule Strategic Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/about">
                Learn About Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
