import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import CaseStudyShowcase from '@/components/CaseStudyShowcase';
import Footer from '@/components/Footer';
import SmallBusinessCertifications from '@/components/SmallBusinessCertifications';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import HeroCarousel from '@/components/HeroCarousel';
import IndustryUpdates from '@/components/IndustryUpdates';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  ShieldCheck,
  Cloud, 
  BarChart3,
  Cpu,
  Code,
  Users,
  Search,
  Lock,
  Layers,
  Award,
  Landmark,
  Building2,
  Scale,
  FileCheck,
  HeartPulse
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




  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Industry Updates Ticker */}
      <IndustryUpdates />

      {/* Who We Are Section - Enhanced with Signature Blue */}
      <WhoWeAreSection />

      {/* Mission-Focused Solutions Section - Dark Navy with Cards */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-[#0A2540] overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#081C30] via-[#0A2540] to-[#12344D]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        <div className="container relative z-10">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12 mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight uppercase">
                Mission-Focused<br />Solutions
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                We don't just implement technology; we solve mission-critical challenges. Our solutions are purpose-built for the unique constraints and requirements of the public sector.
              </p>
            </motion.div>
            
            {/* View All Capabilities Link */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/services" className="group inline-flex items-center gap-2 text-[#E07020] hover:text-[#F08030] font-semibold tracking-wider text-sm uppercase transition-colors">
                View All Capabilities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Citizen Services Modernization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="group relative h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#E07020]/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 md:p-8 h-full flex flex-col">
                  {/* Icon and Badge Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#E07020]/10 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-[#E07020]" />
                    </div>
                    {/* Decorative Badge */}
                    <div className="w-16 h-16 opacity-20">
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="28" stroke="#E07020" strokeWidth="2" strokeDasharray="4 4" />
                        <circle cx="32" cy="32" r="20" stroke="#E07020" strokeWidth="1.5" />
                        <path d="M32 16v32M16 32h32" stroke="#E07020" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 uppercase tracking-wide">
                    Citizen Services<br />Modernization
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    Transforming how agencies interact with the public through accessible, secure, and efficient digital platforms.
                  </p>
                  
                  {/* Explore Link */}
                  <Link href="/services/digital-transformation" className="group/link inline-flex items-center gap-2 text-[#E07020] hover:text-[#F08030] font-semibold text-sm uppercase tracking-wider transition-colors">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2: Mission-Critical Security */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="group relative h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#E07020]/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 md:p-8 h-full flex flex-col">
                  {/* Icon and Badge Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#E07020]/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[#E07020]" />
                    </div>
                    {/* Decorative Badge */}
                    <div className="w-16 h-16 opacity-20">
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 8L52 18v16c0 12-8.5 22-20 26-11.5-4-20-14-20-26V18L32 8z" stroke="#E07020" strokeWidth="2" />
                        <path d="M32 16L44 22v10c0 8-5.5 14.5-12 17-6.5-2.5-12-9-12-17V22L32 16z" stroke="#E07020" strokeWidth="1.5" strokeDasharray="3 3" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 uppercase tracking-wide">
                    Mission-Critical<br />Security
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    Protecting sensitive government data and operations with Zero Trust architectures and advanced threat detection.
                  </p>
                  
                  {/* Explore Link */}
                  <Link href="/services/cybersecurity" className="group/link inline-flex items-center gap-2 text-[#E07020] hover:text-[#F08030] font-semibold text-sm uppercase tracking-wider transition-colors">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3: Regulatory Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="group relative h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#E07020]/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 md:p-8 h-full flex flex-col">
                  {/* Icon and Badge Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#E07020]/10 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-[#E07020]" />
                    </div>
                    {/* Decorative Badge */}
                    <div className="w-16 h-16 opacity-20">
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="12" y="24" width="40" height="32" rx="4" stroke="#E07020" strokeWidth="2" />
                        <path d="M22 24V16a10 10 0 0 1 20 0v8" stroke="#E07020" strokeWidth="2" />
                        <circle cx="32" cy="40" r="4" stroke="#E07020" strokeWidth="1.5" />
                        <path d="M32 44v6" stroke="#E07020" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 uppercase tracking-wide">
                    Regulatory<br />Compliance
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    Navigating complex frameworks like FedRAMP, CMMC, and FISMA to ensure continuous authorization to operate.
                  </p>
                  
                  {/* Explore Link */}
                  <Link href="/services/cybersecurity" className="group/link inline-flex items-center gap-2 text-[#E07020] hover:text-[#F08030] font-semibold text-sm uppercase tracking-wider transition-colors">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E07020]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#E07020]/3 rounded-full blur-3xl" />
      </section>

      {/* Compliance-First Approach Section - Professional Government Design */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-[#0A2540] overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#081C30] via-[#0A2540] to-[#12344D]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        <div className="container relative z-10">
          {/* Section Header - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Shield className="w-4 h-4 text-[#4A90D9]" />
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Compliance Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Mission-First, Compliance-Assured
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Every solution we implement starts with your mission objectives. Our team brings deep expertise in critical compliance frameworks—battle-tested in government environments.
            </p>
          </motion.div>

          {/* Compliance Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12 md:mb-16"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {/* FedRAMP */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#E07020]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#E07020]/10">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E07020] transition-colors">FedRAMP</h3>
                  <p className="text-sm text-white/70 leading-relaxed">Federal Risk & Authorization Program for cloud service providers serving government agencies.</p>
                </div>
              </div>

              {/* StateRAMP */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#E07020]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#E07020]/10">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E07020] transition-colors">StateRAMP</h3>
                  <p className="text-sm text-white/70 leading-relaxed">Standardized security framework for state and local government cloud solutions.</p>
                </div>
              </div>

              {/* CMMC */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#E07020]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#E07020]/10">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E07020] transition-colors">CMMC</h3>
                  <p className="text-sm text-white/70 leading-relaxed">Cybersecurity Maturity Model Certification for defense industrial base contractors.</p>
                </div>
              </div>

              {/* FISMA */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#E07020]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#E07020]/10">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E07020] transition-colors">FISMA</h3>
                  <p className="text-sm text-white/70 leading-relaxed">Federal Information Security Management Act compliance for federal systems.</p>
                </div>
              </div>

              {/* HIPAA */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#E07020]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#E07020]/10 col-span-2 sm:col-span-1">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E07020] transition-colors">HIPAA</h3>
                  <p className="text-sm text-white/70 leading-relaxed">Healthcare data protection and privacy standards for medical information systems.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Content - Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-white/5 to-transparent rounded-2xl p-8 md:p-10 border border-white/10"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Your Technology Investments, Protected
                </h3>
                <p className="text-white/70 max-w-2xl">
                  We ensure your technology investments drive mission success while meeting the most stringent compliance mandates. Our compliance-first approach is embedded in every solution we deliver.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" size="lg" className="bg-white hover:bg-white/90 text-[#0A2540] font-semibold shadow-lg hover:shadow-xl transition-all px-8 min-h-[52px]">
                  <Link href="/about#story">
                    Our Story
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 min-h-[52px]">
                  <Link href="/our-approach">
                    Learn Our Approach
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve Section - Clean White Background */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white overflow-hidden">
        {/* Subtle background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E07020]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A2540]/5 rounded-full blur-3xl -z-10" />
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#E07020] font-semibold mb-3 md:mb-4 uppercase tracking-wider text-xs sm:text-sm">Who We Serve</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#0A2540] leading-tight">
              Trusted Partners Across Sectors
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We deliver mission-critical technology solutions to organizations that demand the highest standards of security, compliance, and operational excellence.
            </p>
          </motion.div>
          
          {/* Customer Categories Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {[
              {
                title: 'Federal Government',
                description: 'Supporting federal agencies with FedRAMP-authorized solutions, cleared personnel, and mission-critical technology implementations.',
                image: '/images/customers/federal-government.jpg',
                link: '/industries/federal'
              },
              {
                title: 'State & Local Government',
                description: 'Empowering state and municipal agencies with scalable, compliant solutions that modernize public services and citizen engagement.',
                image: '/images/customers/state-local-government.jpg',
                link: '/industries/state-local'
              },
              {
                title: 'Regulated Industries',
                description: 'Serving healthcare, financial services, and energy sectors with solutions that meet stringent regulatory and compliance requirements.',
                image: '/images/customers/regulated-industries.jpg',
                link: '/industries/regulated'
              },
              {
                title: 'Federal Contractors',
                description: 'Guiding defense contractors through CMMC certification and compliance, ensuring readiness for DoD contract requirements.',
                image: '/images/customers/federal-contractors.jpg',
                link: '/services/cybersecurity'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                }}
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-[#0A2540]/20 to-transparent" />
                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 sm:p-6">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <Link 
                    href={category.link}
                    className="inline-flex items-center text-[#E07020] font-semibold text-sm hover:text-[#D06010] transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Customers Section - Signature Blue */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-[#0A2540] overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#081C30] via-[#0A2540] to-[#12344D]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-normal text-white mb-10 md:mb-12"
          >
            Our Agency Partners
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {[
              { name: 'Department of Defense', src: '/customers/dod-seal.png' },
              { name: 'Department of Homeland Security', src: '/customers/dhs-seal.png' },
              { name: 'U.S. Army', src: '/customers/army-seal.png' },
              { name: 'State of Michigan', src: '/customers/michigan-seal.png' },
              { name: 'Department of Veterans Affairs', src: '/customers/va-seal.png' },
              { name: 'Federal Bureau of Investigation', src: '/customers/fbi-seal.png' },
              { name: 'General Services Administration', src: '/customers/gsa-seal.png' },
              { name: 'Department of Health & Human Services', src: '/customers/hhs-seal.png' },
            ].map((customer) => (
              <motion.div
                key={customer.name}
                className="flex items-center justify-center"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="cursor-pointer transition-all duration-300 hover:scale-105 brightness-0 invert opacity-70 hover:opacity-100">
                      <img
                        src={customer.src}
                        alt={customer.name}
                        className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{customer.name}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Clean White */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white overflow-hidden">
        {/* Subtle background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E07020]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A2540]/5 rounded-full blur-3xl -z-10" />
        
        <motion.div 
          className="container text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#0A2540]">Contact Us</h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-8 md:mb-10 max-w-2xl mx-auto">
            Request an assessment to evaluate how our services can support your agency's technology requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#E07020] to-[#F08030] hover:from-[#D06010] hover:to-[#E07020] text-white shadow-lg hover:shadow-xl transition-all px-6 sm:px-8 min-h-[48px] w-full sm:w-auto">
              <Link href="/contact">
                Request Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white px-6 sm:px-8 min-h-[48px] w-full sm:w-auto">
              <Link href="/about">
                Learn About Our Team
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
