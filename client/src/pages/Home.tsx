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
      title: 'Process Automation & Optimization',
      description: 'Optimize your existing workflows through process redesign and custom automation. When legacy systems cannot be modernized or compliance requires it, we implement FedRAMP platforms (UiPath Gov, Automation Anywhere Gov) with full ATO support.',
      href: '/services/automation'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Intelligence',
      description: 'Enhance your existing data infrastructure and analytics capabilities through custom development and integration. When new capabilities are needed or compliance requires it, we implement FedRAMP BI platforms (Tableau Gov, Power BI Gov).',
      href: '/services/data-analytics'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Modernization',
      description: 'Modernize your on-premises infrastructure through optimization and hybrid architecture. When mission requirements or compliance mandate cloud migration, we implement FedRAMP cloud platforms (AWS GovCloud, Azure Gov) with full ATO support.',
      href: '/services/cloud'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Strengthen your existing security posture through gap analysis, controls implementation, and zero-trust architecture. When compliance mandates FedRAMP-authorized security tools, we implement and integrate those platforms with full ATO documentation.',
      href: '/services/cybersecurity'
    },
    {
      icon: Code,
      title: 'Application Development & Integration',
      description: 'Integrate your existing systems through custom APIs, middleware, and workflow orchestration. When agencies need new capabilities that existing systems cannot provide, we implement FedRAMP platforms (Salesforce Gov, ServiceNow, Workday) and integrate them with your infrastructure.',
      href: '/services/system-integration'
    },
    {
      icon: Users,
      title: 'Digital Transformation & Modernization',
      description: 'Transform your existing operations through process redesign, change management, and technology optimization. When transformation requires new capabilities or FedRAMP compliance, we implement authorized platforms and integrate them with your systems. Includes TMF support.',
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
      description: 'experience supporting agencies through FISMA Authority to Operate (ATO) processes with security documentation and compliance assessments.'
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
      <section className="relative min-h-[500px] sm:h-[600px] overflow-hidden">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">Government Technology Modernization & Implementation</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 text-white/95 leading-relaxed">We help government agencies modernize their existing systems and operations—and implement FedRAMP/StateRAMP-authorized platforms when needed</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">
                  Request Assessment
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
              Two Core Service Areas
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              We primarily help agencies modernize their existing systems and operations. When legacy systems can't meet mission needs or compliance requires FedRAMP-authorized tools, we implement and integrate those platforms. Vendor-neutral, mission-focused, compliance-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-accent text-xs font-semibold group-hover:gap-2 gap-1.5 transition-all">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Approach Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Our Approach</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              When Do You Need What?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Most agencies start with modernizing their existing systems and operations. When that is not enough or when compliance requires FedRAMP-authorized tools, we implement and integrate those platforms. Often, it is both.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Modernize Existing Systems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <TrendingUp className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Modernize Your Existing Systems
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Our primary focus: optimize what you already have
                    </p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Legacy system modernization:</strong> Refactor, re-architect, or integrate existing applications</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Process optimization:</strong> Automate workflows without replacing infrastructure</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Custom integrations:</strong> Connect disparate systems with APIs and middleware</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Infrastructure upgrades:</strong> Improve performance, security, and scalability</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Implement FedRAMP Platforms */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-accent/20 hover:border-accent/40 transition-all">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Shield className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Implement FedRAMP/StateRAMP Platforms
                    </h3>
                    <p className="text-slate-600 mb-6">
                      When modernization isn't enough, we implement authorized platforms
                    </p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>When legacy can't be modernized:</strong> Replace end-of-life systems with authorized platforms</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>When compliance mandates it:</strong> FedRAMP/StateRAMP authorization required for data sensitivity</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>When new capabilities needed:</strong> Add functionality your existing systems can't provide</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Integration with existing systems:</strong> Connect new platforms to your current infrastructure</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-slate-600 mb-6">
              <strong className="text-slate-900">The key insight:</strong> We help agencies modernize their existing systems first. When that's not sufficient or compliance requires FedRAMP-authorized tools, we implement those platforms and integrate them with your infrastructure.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Discuss Your Specific Needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
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

      {/* Our Approach Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Our Approach</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              How We Deliver Mission-Critical Results
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Four strategic pillars that ensure compliant, secure, and vendor-neutral technology implementations for government agencies
            </p>
          </motion.div>

          {/* Four Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Pillar 1: Rapid Assessment & Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <Card className="h-full border-2 border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-xl bg-white">
                <CardContent className="p-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <TrendingUp className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Rapid Assessment & Architecture
                    </h3>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    We begin every engagement with a comprehensive 2-week discovery phase that maps your current state, identifies compliance gaps, and designs a vendor-neutral architecture aligned with your mission objectives. Our assessments include stakeholder interviews, technical infrastructure review, security posture analysis, and detailed ROI projections.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Stakeholder alignment workshops</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Compliance gap analysis (FedRAMP, CMMC, FISMA)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Platform-agnostic solution design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Detailed implementation roadmap with milestones</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pillar 2: Security-Native Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <Card className="h-full border-2 border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-xl bg-white">
                <CardContent className="p-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Shield className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Security-Native Implementation
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Security and compliance are embedded from day one—not bolted on afterward. We implement only FedRAMP and StateRAMP-authorized platforms, configure zero-trust architectures by default, and prepare all security documentation needed for agency authorization. Every integration follows NIST 800-53 controls and agency-specific security requirements.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>FedRAMP/StateRAMP-authorized platforms only</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Zero-trust architecture by default</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Complete ATO documentation packages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>NIST 800-53 controls implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pillar 3: Vendor-Agnostic Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <Card className="h-full border-2 border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-xl bg-white">
                <CardContent className="p-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Code className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Vendor-Agnostic Solutions
                    </h3>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    We are not tied to any single vendor or platform. Our recommendations are based solely on your mission requirements, budget constraints, and technical environment. We evaluate 50+ FedRAMP-authorized platforms across automation, analytics, cloud, and integration categories to identify the best-fit solutions—then implement them with full transparency and knowledge transfer.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Independent platform evaluation and selection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Multi-vendor integration expertise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Avoid vendor lock-in with open standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Full knowledge transfer and documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pillar 4: Cleared Team Execution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group"
            >
              <Card className="h-full border-2 border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-xl bg-white">
                <CardContent className="p-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Cleared Team Execution
                    </h3>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    Our team includes Top Secret/SCI cleared personnel with decades of federal government experience. We understand agency culture, procurement processes, and the unique challenges of implementing technology in classified and sensitive environments. Every project is staffed with experienced consultants who have delivered similar implementations for agencies like yours.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Top Secret/SCI cleared team members available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Deep federal procurement expertise (GSA Schedule 70)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Experience across 20+ federal agencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Proven change management and training delivery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-lg text-slate-600 mb-6">
              Contact us to discuss your agency's requirements.
            </p>
            <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
              <Link href="/contact">
                Request Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Request an assessment to evaluate how our services can support your agency's technology requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
              <Link href="/contact">
                Request Assessment
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
