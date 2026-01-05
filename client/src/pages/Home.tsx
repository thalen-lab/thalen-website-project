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

      {/* Who We Are Section - Enhanced with Signature Blue */}
      <WhoWeAreSection />

      {/* Mission-Focused Solutions Section - Dark Navy with Cards */}
      <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-[#0A2540] overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12344D]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-40 h-40 border-l-4 border-t-4 border-[#E07020]/20"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 border-r-4 border-b-4 border-[#E07020]/20"></div>
        
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
              {/* Section Label */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#E07020]"></div>
                <span className="text-[#E07020] font-semibold text-sm uppercase tracking-[0.2em]">Our Solutions</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Mission-Focused<br />
                <span className="text-[#E07020]">Solutions</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed border-l-4 border-[#E07020]/50 pl-4">
                We don't just implement technology—we solve <strong className="text-white">mission-critical challenges</strong>. Our solutions are purpose-built for the unique constraints and requirements of the public sector.
              </p>
            </motion.div>
            
            {/* View All Capabilities Link */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/services" className="group inline-flex items-center gap-3 px-6 py-3 bg-[#E07020] hover:bg-[#F08030] text-white font-bold tracking-wider text-sm uppercase transition-all rounded-lg shadow-lg hover:shadow-xl">
                View All Capabilities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              <Card className="group relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#E07020] transition-all duration-300 overflow-hidden hover:shadow-[0_0_40px_rgba(224,112,32,0.2)]">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E07020] to-[#F08030]"></div>
                <CardContent className="p-6 md:p-8 h-full flex flex-col">
                  {/* Icon and Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#E07020] flex items-center justify-center shadow-lg">
                      <Layers className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-white/10">01</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                    Citizen Services<br />Modernization
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-base leading-relaxed mb-6 flex-grow">
                    Transforming how agencies interact with the public through <strong className="text-white">accessible, secure, and efficient</strong> digital platforms.
                  </p>
                  
                  {/* Explore Link */}
                  <Link href="/services/digital-transformation" className="group/link inline-flex items-center gap-2 text-[#E07020] hover:text-[#F08030] font-bold text-sm uppercase tracking-wider transition-colors">
                    Explore Solution
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
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
              <Card className="group relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#E07020] transition-all duration-300 overflow-hidden hover:shadow-[0_0_40px_rgba(224,112,32,0.2)]">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E07020] to-[#F08030]"></div>
                <CardContent className="p-6 md:p-8 h-full flex flex-col">
                  {/* Icon and Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#E07020] flex items-center justify-center shadow-lg">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-white/10">02</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                    Mission-Critical<br />Security
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-base leading-relaxed mb-6 flex-grow">
                    Protecting sensitive government data with <strong className="text-white">Zero Trust architectures</strong> and advanced threat detection systems.
                  </p>
                  
                  {/* Explore Link */}
                  <Link href="/services/cybersecurity" className="group/link inline-flex items-center gap-2 text-[#E07020] hover:text-[#F08030] font-bold text-sm uppercase tracking-wider transition-colors">
                    Explore Solution
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
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
              <Card className="group relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#E07020] transition-all duration-300 overflow-hidden hover:shadow-[0_0_40px_rgba(224,112,32,0.2)]">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E07020] to-[#F08030]"></div>
                <CardContent className="p-6 md:p-8 h-full flex flex-col">
                  {/* Icon and Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#E07020] flex items-center justify-center shadow-lg">
                      <Lock className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-white/10">03</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                    Regulatory<br />Compliance
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-base leading-relaxed mb-6 flex-grow">
                    Navigating <strong className="text-white">FedRAMP, CMMC, and FISMA</strong> frameworks to ensure continuous authorization to operate.
                  </p>
                  
                  {/* Explore Link */}
                  <Link href="/services/cybersecurity" className="group/link inline-flex items-center gap-2 text-[#E07020] hover:text-[#F08030] font-bold text-sm uppercase tracking-wider transition-colors">
                    Explore Solution
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
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

      {/* Our Approach & Core Capabilities Section - Bold Professional Design */}
      <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0A2540]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E07020]/5 rounded-full blur-3xl -z-10" />
        
        {/* Decorative lines */}
        <div className="absolute top-20 left-0 w-32 h-[2px] bg-gradient-to-r from-[#E07020] to-transparent"></div>
        <div className="absolute bottom-20 right-0 w-32 h-[2px] bg-gradient-to-l from-[#E07020] to-transparent"></div>
        
        <div className="container relative z-10">
          {/* Two Column Layout - Left Text, Right Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Our Approach */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Label */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#E07020]"></div>
                <span className="text-[#E07020] font-semibold text-sm uppercase tracking-[0.2em]">How We Work</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A2540] mb-6 leading-[1.1]">
                Our<br />
                <span className="text-[#E07020]">Approach</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed border-l-4 border-[#E07020] pl-4">
                  Our approach combines <strong className="text-[#0A2540]">deep domain expertise</strong> with rigorous compliance methodology.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  We understand that government technology must meet the highest standards for security, reliability, and accountability—and we build every solution with those requirements at the foundation.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  From initial assessment through deployment and ongoing support, we partner with agencies to deliver <strong className="text-[#0A2540]">measurable outcomes</strong> that advance their mission objectives.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" size="lg" className="bg-[#E07020] hover:bg-[#D06010] text-white font-bold shadow-lg hover:shadow-xl transition-all px-8 min-h-[52px] uppercase tracking-wider">
                  <Link href="/our-approach">
                    Learn Our Methodology
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Core Capabilities Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {/* Capability 1: Security-First Architecture */}
              <div className="group relative bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-[#E07020] hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E07020] to-[#F08030] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E07020] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-slate-200">01</span>
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  Security-First Architecture
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong className="text-[#0A2540]">Zero-trust frameworks</strong> designed for classified and sensitive environments
                </p>
              </div>

              {/* Capability 2: Compliance Expertise */}
              <div className="group relative bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-[#E07020] hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E07020] to-[#F08030] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E07020] flex items-center justify-center flex-shrink-0 shadow-md">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-slate-200">02</span>
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  Compliance Expertise
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deep experience with <strong className="text-[#0A2540]">FedRAMP, CMMC, FISMA</strong>, and agency-specific requirements
                </p>
              </div>

              {/* Capability 3: Mission Assurance */}
              <div className="group relative bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-[#E07020] hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E07020] to-[#F08030] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E07020] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-slate-200">03</span>
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  Mission Assurance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Proven delivery across <strong className="text-[#0A2540]">defense, civilian, and intelligence</strong> community programs
                </p>
              </div>

              {/* Capability 4: Acquisition Alignment */}
              <div className="group relative bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-[#E07020] hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E07020] to-[#F08030] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E07020] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-slate-200">04</span>
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  Acquisition Alignment
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Solutions structured for <strong className="text-[#0A2540]">federal procurement</strong> and contract requirements
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance-First Approach Section - Bold Professional Design */}
      <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-[#0A2540] overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12344D]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-40 h-40 border-r-4 border-t-4 border-[#E07020]/20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 border-l-4 border-b-4 border-[#E07020]/20"></div>
        
        <div className="container relative z-10">
          {/* Section Header - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#E07020]"></div>
              <span className="text-[#E07020] font-semibold text-sm uppercase tracking-[0.2em]">Compliance Excellence</span>
              <div className="w-12 h-[2px] bg-[#E07020]"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-[1.1]">
              Mission-First,<br />
              <span className="text-[#E07020]">Compliance-Assured</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed border-l-4 border-[#E07020]/50 pl-4 text-left md:border-0 md:pl-0 md:text-center">
              Every solution we implement starts with your <strong className="text-white">mission objectives</strong>. Our team brings deep expertise in critical compliance frameworks—<strong className="text-white">battle-tested</strong> in government environments.
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
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border-2 border-white/10 hover:border-[#E07020] transition-all duration-300 hover:shadow-[0_0_30px_rgba(224,112,32,0.2)]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E07020] to-[#F08030] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E07020]/20 flex items-center justify-center mb-3 group-hover:bg-[#E07020] transition-colors">
                    <ShieldCheck className="w-6 h-6 text-[#E07020] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E07020] transition-colors">FedRAMP</h3>
                  <p className="text-sm text-white/70 leading-relaxed">Federal Risk & Authorization Program for cloud service providers.</p>
                </div>
              </div>

              {/* StateRAMP */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border-2 border-white/10 hover:border-[#E07020] transition-all duration-300 hover:shadow-[0_0_30px_rgba(224,112,32,0.2)]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E07020] to-[#F08030] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E07020]/20 flex items-center justify-center mb-3 group-hover:bg-[#E07020] transition-colors">
                    <Landmark className="w-6 h-6 text-[#E07020] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E07020] transition-colors">StateRAMP</h3>
                  <p className="text-sm text-white/70 leading-relaxed">Standardized security for state and local government cloud.</p>
                </div>
              </div>

              {/* CMMC */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border-2 border-white/10 hover:border-[#E07020] transition-all duration-300 hover:shadow-[0_0_30px_rgba(224,112,32,0.2)]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E07020] to-[#F08030] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E07020]/20 flex items-center justify-center mb-3 group-hover:bg-[#E07020] transition-colors">
                    <Shield className="w-6 h-6 text-[#E07020] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E07020] transition-colors">CMMC</h3>
                  <p className="text-sm text-white/70 leading-relaxed">Cybersecurity Maturity Model for defense contractors.</p>
                </div>
              </div>

              {/* FISMA */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border-2 border-white/10 hover:border-[#E07020] transition-all duration-300 hover:shadow-[0_0_30px_rgba(224,112,32,0.2)]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E07020] to-[#F08030] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E07020]/20 flex items-center justify-center mb-3 group-hover:bg-[#E07020] transition-colors">
                    <Scale className="w-6 h-6 text-[#E07020] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E07020] transition-colors">FISMA</h3>
                  <p className="text-sm text-white/70 leading-relaxed">Federal Information Security Management Act compliance.</p>
                </div>
              </div>

              {/* HIPAA */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border-2 border-white/10 hover:border-[#E07020] transition-all duration-300 hover:shadow-[0_0_30px_rgba(224,112,32,0.2)] col-span-2 sm:col-span-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E07020] to-[#F08030] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E07020]/20 flex items-center justify-center mb-3 group-hover:bg-[#E07020] transition-colors">
                    <HeartPulse className="w-6 h-6 text-[#E07020] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E07020] transition-colors">HIPAA</h3>
                  <p className="text-sm text-white/70 leading-relaxed">Healthcare data protection and privacy standards.</p>
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
            className="bg-gradient-to-r from-[#E07020]/10 via-white/5 to-transparent rounded-2xl p-8 md:p-12 border-2 border-[#E07020]/30"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Your Technology Investments, <span className="text-[#E07020]">Protected</span>
                </h3>
                <p className="text-white/80 max-w-2xl text-lg">
                  We ensure your technology investments drive <strong className="text-white">mission success</strong> while meeting the most stringent compliance mandates. Our compliance-first approach is embedded in every solution we deliver.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" size="lg" className="bg-[#E07020] hover:bg-[#F08030] text-white font-bold shadow-lg hover:shadow-xl transition-all px-8 min-h-[52px] uppercase tracking-wider">
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

      {/* Who We Serve Section - Bold White Background */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 xl:py-44 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E07020]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0A2540]/5 rounded-full blur-3xl -z-10" />
        
        {/* Decorative lines */}
        <div className="absolute top-20 right-0 w-32 h-[2px] bg-gradient-to-l from-[#E07020] to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-32 h-[2px] bg-gradient-to-r from-[#E07020] to-transparent"></div>
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#E07020]"></div>
              <span className="text-[#E07020] font-semibold text-sm uppercase tracking-[0.2em]">Who We Serve</span>
              <div className="w-12 h-[2px] bg-[#E07020]"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-[#0A2540] leading-[1.1]">
              Trusted Partners<br />
              <span className="text-[#E07020]">Across Sectors</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We deliver <strong className="text-[#0A2540]">mission-critical technology solutions</strong> to organizations that demand the highest standards of security, compliance, and operational excellence.
            </p>
          </motion.div>
          
          {/* Customer Categories Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
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
                image: '/federal-handshake.png',
                link: '/industries/federal',
                number: '01'
              },
              {
                title: 'State & Local Government',
                description: 'Empowering state and municipal agencies with scalable, compliant solutions that modernize public services and citizen engagement.',
                image: '/government-contracts.jpg',
                link: '/industries/state-local',
                number: '02'
              },
              {
                title: 'Regulated Industries',
                description: 'Serving healthcare, financial services, and energy sectors with solutions that meet stringent regulatory and compliance requirements.',
                image: '/manufacturing.webp',
                link: '/industries/regulated',
                number: '03'
              },
              {
                title: 'Federal Contractors',
                description: 'Guiding defense contractors through CMMC certification and compliance, ensuring readiness for DoD contract requirements.',
                image: '/defense.webp',
                link: '/services/cybersecurity',
                number: '04'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-[#E07020] flex flex-col"
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
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E07020] to-[#F08030] z-10"></div>
                
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-[#0A2540]/30 to-transparent" />
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#E07020] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{category.number}</span>
                  </div>
                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <p className="text-base text-slate-600 leading-relaxed flex-grow">
                    {category.description}
                  </p>
                  <Link 
                    href={category.link}
                    className="inline-flex items-center text-[#E07020] font-bold text-sm uppercase tracking-wider hover:text-[#D06010] transition-colors group/link mt-4"
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

      {/* Industry Updates Section */}
      <IndustryUpdates />

      <Footer />
    </div>
  );
}
