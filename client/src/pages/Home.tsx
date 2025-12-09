import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import CaseStudyShowcase from '@/components/CaseStudyShowcase';
import Footer from '@/components/Footer';
import SmallBusinessCertifications from '@/components/SmallBusinessCertifications';
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
      description: 'Modernize your existing workflows with RPA and orchestration—or implement FedRAMP platforms (UiPath Gov, Automation Anywhere Gov) when needed. Includes legacy system integration, ATO support, and compliance documentation.',
      href: '/services/automation'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Intelligence',
      description: 'Optimize your existing data infrastructure and analytics capabilities—or implement FedRAMP BI platforms (Tableau Gov, Power BI Gov) when compliance requires it. Includes data strategy, governance, and custom dashboards.',
      href: '/services/data-analytics'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Modernization',
      description: 'Modernize on-premises infrastructure or migrate to FedRAMP cloud platforms (AWS GovCloud, Azure Gov) when mission demands it. Includes hybrid architecture, legacy system integration, and ATO support.',
      href: '/services/cloud'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Strengthen your existing security posture or implement FedRAMP security platforms when compliance mandates it. Includes gap analysis, CMMC/FISMA compliance, zero-trust architecture, and ATO documentation.',
      href: '/services/cybersecurity'
    },
    {
      icon: Code,
      title: 'Application Development & Integration',
      description: 'Integrate your existing systems with modern APIs and workflows—or connect FedRAMP platforms (Salesforce Gov, ServiceNow, Workday) when needed. Vendor-neutral architecture ensures no lock-in.',
      href: '/services/system-integration'
    },
    {
      icon: Users,
      title: 'Digital Transformation & Modernization',
      description: 'Transform your existing operations through process redesign, change management, and technology optimization—with FedRAMP platform implementation when compliance requires it. Includes TMF support and vendor-neutral guidance.',
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
      description: 'Integrated 12 legacy healthcare systems with FedRAMP-authorized platforms, delivering real-time patient data access and 170% ROI over three years with measurable productivity gains.',
      metric: '170%',
      metricLabel: 'ROI (3 Years)',
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">Government Technology Implementation Services</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 text-white/95 leading-relaxed">We deliver end-to-end technology solutions that modernize government operations, enhance security, and improve citizen services through proven implementation expertise</p>
            
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

      {/* Who We Are Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative overflow-hidden shadow-2xl">
                <ImageWithLoader
                  src="/government-data-centers-t-jpg.webp"
                  alt="Who we are - Continuous innovation meets operational excellence"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Who we are</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Continuous innovation, meet operational excellence.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We help customers in every industry ensure their essential systems will work when, where, and how they need them to. But steady operations aren't enough in today's dynamic IT landscape—NexDyne brings the data, insights, patterns and proven methodologies businesses need to stay competitive.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/about">
                    Our story
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2">
                  <Link href="/about#awards">
                    Awards and recognition
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2">
                  <Link href="/about#team">
                    Join our team
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Small Business Certifications Section */}
      <SmallBusinessCertifications />

      {/* Services Section - 2x3 Grid Layout */}
      <section className="py-16 md:py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-accent mb-4 tracking-wider uppercase">Core Capabilities</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Government Technology Services
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive technology solutions for federal, state, and local agencies. From automation to cybersecurity, we deliver mission-critical results.
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
                      <service.icon className="h-14 w-14 text-accent" />
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
                    <div className="w-20 h-20 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <TrendingUp className="h-10 w-10 text-accent" />
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
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Stakeholder alignment workshops</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Compliance gap analysis (FedRAMP, CMMC, FISMA)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Platform-agnostic solution design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
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
                    <div className="w-20 h-20 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Shield className="h-10 w-10 text-accent" />
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
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>FedRAMP/StateRAMP-authorized platforms only</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Zero-trust architecture by default</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Complete ATO documentation packages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
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
                    <div className="w-20 h-20 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Code className="h-10 w-10 text-accent" />
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
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Independent platform evaluation and selection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Multi-vendor integration expertise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Avoid vendor lock-in with open standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
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
                    <div className="w-20 h-20 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Users className="h-10 w-10 text-accent" />
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
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Top Secret/SCI cleared team members available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Deep federal procurement expertise (GSA Schedule 70)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Experience across 20+ federal agencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
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
