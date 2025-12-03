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
  Users,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  FileCheck,
  Lock,
  Key,
  Heart
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
      icon: Shield,
      description: 'Deep expertise implementing FedRAMP and StateRAMP-authorized platforms for federal, state, and local agencies at Moderate and High impact levels with proven ATO support.'
    },
    {
      name: 'CMMC Compliance Partner',
      icon: ShieldCheck,
      description: 'Certified to help defense contractors achieve CMMC Level 2 and Level 3 compliance through gap analysis, controls implementation, and audit preparation.'
    },
    {
      name: 'ISO 27001 Certified',
      icon: Award,
      description: 'ISO 27001:2022 certified organization with proven methodologies for implementing information security management systems for government clients.'
    },
    {
      name: 'NIST Framework Expertise',
      icon: FileCheck,
      description: 'Extensive experience implementing NIST Cybersecurity Framework v2.0 controls and security assessments for federal and defense agencies.'
    },
    {
      name: 'GSA Schedule Holder',
      icon: Lock,
      description: 'GSA IT Schedule 70 contract holder providing streamlined procurement for government agencies seeking implementation and integration services.'
    },
    {
      name: 'ATO Support Services',
      icon: Key,
      description: 'Proven track record supporting agencies through FISMA Authority to Operate (ATO) processes with security documentation and compliance assessments.'
    },
    {
      name: 'CJIS & State Compliance',
      icon: Heart,
      description: 'CJIS-compliant implementations for state and local law enforcement agencies, plus expertise with state-specific compliance frameworks and data sovereignty requirements.'
    },
    {
      name: 'Cleared Personnel Available',
      icon: Users,
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
      <section className="relative h-[400px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
        </div>
        
        {/* Hero Content */}
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Implementing FedRAMP & StateRAMP Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Vendor-neutral consulting and systems integration for federal, state, and local government agencies</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all touch-feedback">
                <Link href="/contact">
                  Schedule Strategic Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary touch-feedback">
                <Link href="/methodology">View ROI Methodology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

        {/* Mission Statement Section */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-white">
        
        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <span className="text-sm font-medium text-orange-600">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">Govern Smart</h2>
            <p className="text-xl md:text-2xl italic text-slate-600 mb-8 leading-relaxed font-light">
              "Our philosophy has always been to offer government agencies only the finest expertise and service. We believe in building lasting relationships based on trust, excellence, and unwavering commitment to mission success."
            </p>
            
            {/* Signature - Regular Format */}
            <div className="flex flex-col items-center mb-10">
              <p className="text-base text-slate-600 font-medium">—David Seyaker</p>
              <p className="text-sm text-slate-500">Principal and CEO</p>
            </div>
            
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-10 rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              We implement FedRAMP and StateRAMP-authorized platforms for federal, state, and local government agencies. From cloud migration to automation to security compliance, we handle the technical complexity so you can focus on mission delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - 2x3 Grid Layout */}
      <section className="py-16 md:py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-accent mb-3 tracking-wide uppercase">Core Capabilities</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Government Technology Implementation Services
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl leading-relaxed">
              Vendor-neutral consulting for federal, state, and local agencies. We implement FedRAMP and StateRAMP-authorized platforms with proven compliance expertise and measurable mission impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="block group"
              >
                <div className="h-full border-2 border-primary-foreground/20 hover:border-accent rounded-lg p-6 transition-all hover:shadow-2xl">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base opacity-80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Incentro Style */}
      <CaseStudyShowcase />

      {/* Certifications Section - Editorial Layout */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-5xl">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">Trusted & Certified</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise & Government Security & Compliance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Built for the most demanding security and compliance requirements across government agencies and enterprise organizations.
            </p>
          </motion.div>

          {/* Editorial List - Typography-Driven */}
          <div className="space-y-0">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group border-t border-border hover:border-accent transition-colors py-8 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section - RAPID Framework - Streamlined Editorial */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-5xl">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">Our Methodology</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Thalen Technologies RAPID Framework</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Structured 4-phase approach delivering compliant, on-budget FedRAMP and StateRAMP platform deployments
            </p>
          </motion.div>

          {/* 2x2 Grid Layout with Horizontal Dividers */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {/* Phase 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="group py-8 first:pt-0"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-border group-hover:border-accent rounded-full flex items-center justify-center text-xl font-bold transition-colors">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      Research & Assessment
                    </h3>
                  </div>
                </div>
                <div className="w-full h-px bg-border group-hover:bg-accent transition-colors"></div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Comprehensive process mapping, bottleneck identification, and ROI analysis to establish baseline metrics.
                </p>
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="group py-8 first:pt-0"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-border group-hover:border-accent rounded-full flex items-center justify-center text-xl font-bold transition-colors">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      Architecture & Planning
                    </h3>
                  </div>
                </div>
                <div className="w-full h-px bg-border group-hover:bg-accent transition-colors"></div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Solution architecture design, technology stack selection, and detailed implementation roadmap.
                </p>
              </div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group py-8"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-border group-hover:border-accent rounded-full flex items-center justify-center text-xl font-bold transition-colors">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      Implementation & Delivery
                    </h3>
                  </div>
                </div>
                <div className="w-full h-px bg-border group-hover:bg-accent transition-colors"></div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Platform implementation with ATO documentation, security controls configuration, and zero-downtime migration.
                </p>
              </div>
            </motion.div>

            {/* Phase 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="group py-8"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-border group-hover:border-accent rounded-full flex items-center justify-center text-xl font-bold transition-colors">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      Performance & Optimization
                    </h3>
                  </div>
                </div>
                <div className="w-full h-px bg-border group-hover:bg-accent transition-colors"></div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Real-time monitoring, ROI tracking, and continuous optimization with predictive analytics.
                </p>
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
            <p className="text-base text-muted-foreground mb-6">
              <strong className="text-foreground">90-day ATO timeline</strong> • <strong className="text-foreground">100% authorization success rate</strong> • <strong className="text-foreground">Zero operational disruption</strong>
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

      {/* Partners Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="flex items-start justify-between mb-12">
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground mb-2">Partners</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                With these partners we deliver enterprise-grade solutions
              </h2>
              <Link href="/partners" className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-base font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
                All partners
              </Link>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const container = document.getElementById('partners-carousel');
                  if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="p-3 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  const container = document.getElementById('partners-carousel');
                  if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="p-3 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div id="partners-carousel" className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
            {/* Process Automation Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-6 text-foreground">Process Automation</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  UiPath
                </span>
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  Automation Anywhere
                </span>
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  Blue Prism
                </span>
              </div>
            </div>

            {/* Cloud Platforms Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-6 text-foreground">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  AWS GovCloud
                </span>
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  Azure Government
                </span>
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  Google Cloud
                </span>
              </div>
            </div>

            {/* Data & Analytics Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-6 text-foreground">Data & Analytics</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  Snowflake
                </span>
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  Databricks
                </span>
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  Tableau
                </span>
              </div>
            </div>

            {/* Cybersecurity Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-6 text-foreground">Cybersecurity</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  Palo Alto Networks
                </span>
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  CrowdStrike
                </span>
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  Splunk
                </span>
              </div>
            </div>

            {/* AI & Machine Learning Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-6 text-foreground">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  OpenAI
                </span>
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  Anthropic
                </span>
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  DataRobot
                </span>
              </div>
            </div>

            {/* Enterprise Software Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-6 text-foreground">Enterprise Software</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  ServiceNow
                </span>
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  Salesforce
                </span>
                <span className="px-6 py-3 bg-card border border-border text-primary rounded-full text-sm font-medium hover:border-primary hover:bg-muted transition-all cursor-pointer">
                  SAP
                </span>
              </div>
            </div>
          </div>
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
