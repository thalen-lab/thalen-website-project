import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import CaseStudyShowcase from '@/components/CaseStudyShowcase';
import Footer from '@/components/Footer';
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

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);

  const heroSlides = [
    {
      image: '/images/hero-datacenter.jpg',
      title: 'Implementing FedRAMP & StateRAMP Solutions',
      subtitle: 'Vendor-neutral consulting and systems integration for federal, state, and local government agencies'
    },
    {
      image: '/images/hero-automation.jpg',
      title: 'Government IT Implementation Excellence',
      subtitle: 'Deploy and optimize FedRAMP and StateRAMP-authorized platforms with proven compliance expertise'
    },
    {
      image: '/images/hero-federal.jpg',
      title: 'Trusted Government IT Partner',
      subtitle: 'Multi-vendor integration, ATO support, and mission-critical implementation services'
    }
  ];

  const services = [
    {
      icon: Cpu,
      title: 'Government RPA Implementation',
      description: 'Implement FedRAMP-authorized RPA platforms (UiPath Gov, Automation Anywhere Gov, Blue Prism Gov) with process discovery, bot development, ATO documentation, and Center of Excellence setup.',
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

  const stats = [
    { value: '15+', label: 'Years Implementing Government IT Solutions' },
    { value: '$2.3B+', label: 'In Government Contract Value Delivered' },
    { value: '50+', label: 'FedRAMP Platforms Integrated' },
    { value: '100+', label: 'Agency Implementations Completed' }
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
      description: 'GSA IT Schedule 70 contract holder providing streamlined procurement for federal agencies seeking implementation and integration services.'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section with Rotating Images */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: 'translateZ(0)',
                willChange: 'transform'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
              {/* Vignette effect */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_50%,rgba(0,0,0,0.3)_100%)]" />
            </div>
            <div className="relative container h-full flex items-center">
              <div className="max-w-2xl text-primary-foreground">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* CTA Buttons - Outside carousel to prevent duplicates */}
        <div className="absolute bottom-24 left-0 right-0">
          <div className="container">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 transition-opacity">
                  <Link href="/contact">
                    Schedule Strategic Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="/methodology">View ROI Methodology</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentHeroIndex ? 'bg-accent w-8' : 'bg-primary-foreground/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-navy-gradient diagonal-top text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent mb-2">Services</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Driving Mission Success Through Three Core Outcomes</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Operational Efficiency • Mission Continuity • Compliance Assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/10 border-primary-foreground/20 backdrop-blur hover:bg-card/20 transition-all group">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-primary-foreground">{service.title}</h3>
                  <p className="text-primary-foreground/80 mb-6">{service.description}</p>
                  <Button asChild variant="outline" className="w-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent group-hover:border-accent transition-all">
                    <Link href={service.href}>
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Incentro Style */}
      <CaseStudyShowcase />

      {/* Certifications Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise & Government Security & Compliance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for the most demanding security and compliance requirements across government agencies and enterprise organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-card border-2 border-border hover:border-accent rounded-lg p-6 text-center flex flex-col items-center justify-center transition-all hover:shadow-lg cursor-help min-h-[100px]">
                        <div className="text-sm font-semibold leading-tight">{cert.name}</div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="text-sm">{cert.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section - RAPID Framework */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-2">Our Methodology</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Thalen Technologies RAPID Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven Government Implementation Methodology: Structured 4-phase approach delivering compliant, on-budget FedRAMP and StateRAMP platform deployments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phase 1 */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 border-2 border-border rounded-full flex items-center justify-center text-2xl font-bold mb-4 text-foreground">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3">Research & Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive process mapping, bottleneck identification, and ROI analysis to establish baseline metrics.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Current state analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Opportunity identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>ROI projection modeling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 border-2 border-border rounded-full flex items-center justify-center text-2xl font-bold mb-4 text-foreground">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3">Architecture & Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Solution architecture design, technology stack selection, and detailed implementation roadmap.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Architecture optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Technology evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Phased roadmap creation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 border-2 border-border rounded-full flex items-center justify-center text-2xl font-bold mb-4 text-foreground">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3">Implementation & Delivery</h3>
                <p className="text-muted-foreground mb-4">
                  Platform implementation with ATO documentation, security controls configuration, and zero-downtime migration.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Compliance documentation & ATO support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Security controls implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Zero-downtime deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Phase 4 */}
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 border-2 border-border rounded-full flex items-center justify-center text-2xl font-bold mb-4 text-foreground">
                  4
                </div>
                <h3 className="text-2xl font-bold mb-3">Performance & Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time monitoring, ROI tracking, and continuous optimization with predictive analytics.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Real-time dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>ROI measurement & reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Predictive maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              <strong className="text-foreground">90-day ATO timeline</strong> • <strong className="text-foreground">100% authorization success rate</strong> • <strong className="text-foreground">Zero operational disruption</strong>
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
              <Link href="/contact">
                Learn More About RAPID
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
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
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">Process Automation</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  UiPath
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Automation Anywhere
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Blue Prism
                </span>
              </div>
            </div>

            {/* Cloud Platforms Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  AWS GovCloud
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Azure Government
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Google Cloud
                </span>
              </div>
            </div>

            {/* Data & Analytics Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">Data & Analytics</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Snowflake
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Databricks
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Tableau
                </span>
              </div>
            </div>

            {/* Cybersecurity Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">Cybersecurity</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Palo Alto Networks
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  CrowdStrike
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Splunk
                </span>
              </div>
            </div>

            {/* AI & Machine Learning Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  OpenAI
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Anthropic
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  DataRobot
                </span>
              </div>
            </div>

            {/* Enterprise Software Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">Enterprise Software</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  ServiceNow
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Salesforce
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
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
            <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 transition-opacity">
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
