import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import CaseStudyShowcase from '@/components/CaseStudyShowcase';
import CaseStudyShowcaseText from '@/components/CaseStudyShowcaseText';
import Footer from '@/components/Footer';
import SmallBusinessCertifications from '@/components/SmallBusinessCertifications';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import HeroCarousel from '@/components/HeroCarousel';
import IndustryUpdates from '@/components/IndustryUpdates';
import AnnouncementTicker from '@/components/AnnouncementTicker';
import InsightsSection from '@/components/InsightsSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import TrustedByClients from '@/components/TrustedByClients';
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

      {/* Trusted By Clients Section */}
      <TrustedByClients />

      {/* Mission-Focused Solutions Section - Dark Navy with Cards */}
      <section className="relative py-14 sm:py-10 sm:py-12 md:py-16 lg:py-20 lg:py-24 bg-[#0A2540] overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12344D]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        <div className="container relative z-10">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-10 h-[2px] bg-[#FF6B35]"></div>
                <span className="text-[#FF6B35] font-semibold text-xs uppercase tracking-[0.2em]">Our Solutions</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-[1.1] tracking-tight">
                Mission-Focused Solutions
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed border-l-3 border-[#FF6B35]/50 pl-3">
                We don't just implement technology—we solve <strong className="text-white">mission-critical challenges</strong>. Our solutions are purpose-built for the unique constraints and requirements of the public sector.
              </p>
            </motion.div>
            
            {/* View All Capabilities Link - Navy CTA, not orange */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/services" className="group inline-flex items-center gap-2 text-white hover:text-[#FF6B35] font-semibold tracking-wider text-sm uppercase transition-colors">
                View All Capabilities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Service Cards Grid - Equal height cards with grid auto-rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-fr">
            {/* Card 1: Citizen Services Modernization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-full"
            >
              <Card className="group relative h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FF6B35] transition-all duration-300 overflow-hidden !p-0 !gap-0">
                {/* Image on top - fixed height */}
                <div className="relative h-48 flex-shrink-0 overflow-hidden">
                  <img 
                    src="/images/citizen-services-government.jpg" 
                    alt="Citizen Services Modernization" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent"></div>
                </div>
                {/* Content Section - flex-grow to fill remaining space */}
                <CardContent className="p-5 md:p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
                    Citizen Services Modernization
                  </h3>
                  
                  {/* Description - flex-grow pushes link to bottom */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
                    Transforming how agencies interact with the public through <strong className="text-white">accessible, secure, and efficient</strong> digital platforms.
                  </p>
                  
                  {/* Explore Link - always at bottom */}
                  <Link href="/services/digital-transformation" className="group/link inline-flex items-center gap-1.5 text-white/80 hover:text-[#FF6B35] font-semibold text-xs uppercase tracking-wider transition-colors mt-auto">
                    Explore Solution
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
              className="h-full"
            >
              <Card className="group relative h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FF6B35] transition-all duration-300 overflow-hidden !p-0 !gap-0">
                {/* Image on top - fixed height */}
                <div className="relative h-48 flex-shrink-0 overflow-hidden">
                  <img 
                    src="/images/mission-critical-security.png" 
                    alt="Mission-Critical Security" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent"></div>
                </div>
                {/* Content Section - flex-grow to fill remaining space */}
                <CardContent className="p-5 md:p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
                    Mission-Critical Security
                  </h3>
                  
                  {/* Description - flex-grow pushes link to bottom */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
                    Protecting sensitive government data with <strong className="text-white">Zero Trust architectures</strong> and advanced threat detection systems.
                  </p>
                  
                  {/* Explore Link - always at bottom */}
                  <Link href="/services/cybersecurity" className="group/link inline-flex items-center gap-1.5 text-white/80 hover:text-[#FF6B35] font-semibold text-xs uppercase tracking-wider transition-colors mt-auto">
                    Explore Solution
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
              className="h-full"
            >
              <Card className="group relative h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FF6B35] transition-all duration-300 overflow-hidden !p-0 !gap-0">
                {/* Image on top - fixed height */}
                <div className="relative h-48 flex-shrink-0 overflow-hidden">
                  <img 
                    src="/images/compliance-ai-dashboard.webp" 
                    alt="AI-Powered Regulatory Compliance Dashboard" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent"></div>
                </div>
                {/* Content Section - flex-grow to fill remaining space */}
                <CardContent className="p-5 md:p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
                    Regulatory Compliance
                  </h3>
                  
                  {/* Description - flex-grow pushes link to bottom */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
                    Navigating <strong className="text-white">FedRAMP, CMMC, and FISMA</strong> frameworks to ensure continuous authorization to operate.
                  </p>
                  
                  {/* Explore Link - always at bottom */}
                  <Link href="/services/cybersecurity" className="group/link inline-flex items-center gap-1.5 text-white/80 hover:text-[#FF6B35] font-semibold text-xs uppercase tracking-wider transition-colors mt-auto">
                    Explore Solution
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach & Core Capabilities Section - Refined Design */}
      <section className="relative py-12 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="container relative z-10">
          {/* Two Column Layout - Left Text, Right Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Our Approach */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-10 h-[2px] bg-[#FF6B35]"></div>
                <span className="text-[#FF6B35] font-semibold text-xs uppercase tracking-[0.2em]">How We Work</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540] mb-4 leading-[1.1]">
                Our Approach
              </h2>
              
              <div className="space-y-3 mb-5">
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Our approach combines <strong className="text-[#0A2540]">deep domain expertise</strong> with rigorous compliance methodology.
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  We understand that government technology must meet the highest standards for security, reliability, and accountability—and we build every solution with those requirements at the foundation.
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  From initial assessment through deployment and ongoing support, we partner with agencies to deliver <strong className="text-[#0A2540]">measurable outcomes</strong> that advance their mission objectives.
                </p>
              </div>
              
              {/* Navy link, not orange CTA */}
              <Link href="/our-approach" className="group inline-flex items-center gap-2 text-[#0A2540] hover:text-[#FF6B35] font-semibold text-sm uppercase tracking-wider transition-colors">
                Learn Our Methodology
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right Column - Core Capabilities Grid - No icons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Capability 1: Security-First Architecture */}
              <div className="group relative bg-white rounded-xl p-5 border border-slate-200 hover:border-[#FF6B35] hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  Security-First Architecture
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong className="text-[#0A2540]">Zero-trust frameworks</strong> designed for classified and sensitive environments, ensuring data protection at every layer.
                </p>
              </div>

              {/* Capability 2: Compliance Expertise */}
              <div className="group relative bg-white rounded-xl p-5 border border-slate-200 hover:border-[#FF6B35] hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  Compliance Expertise
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deep experience with <strong className="text-[#0A2540]">FedRAMP, CMMC, FISMA</strong>, and agency-specific requirements for seamless authorization.
                </p>
              </div>

              {/* Capability 3: Mission Assurance */}
              <div className="group relative bg-white rounded-xl p-5 border border-slate-200 hover:border-[#FF6B35] hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  Mission Assurance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Proven delivery across <strong className="text-[#0A2540]">defense, civilian, and intelligence</strong> community programs with measurable outcomes.
                </p>
              </div>

              {/* Capability 4: Acquisition Alignment */}
              <div className="group relative bg-white rounded-xl p-5 border border-slate-200 hover:border-[#FF6B35] hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  Acquisition Alignment
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Solutions structured for <strong className="text-[#0A2540]">federal procurement</strong> and contract requirements, streamlining the acquisition process.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance-First Approach Section - Bold Redesign */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#0A2540] overflow-hidden">
        {/* Dramatic background with geometric pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0d2d4a] to-[#12344D]"></div>
        {/* Large decorative shield watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]">
          <ShieldCheck className="w-full h-full text-white" strokeWidth={0.5} />
        </div>
        {/* Accent line top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A2540]"></div>
        
        <div className="container relative z-10">
          {/* Two-column layout: Left = big statement, Right = framework cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column - Bold Statement (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 lg:sticky lg:top-24"
            >
              {/* Section Label */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-[2px] bg-[#FF6B35]"></div>
                <span className="text-[#FF6B35] font-semibold text-xs uppercase tracking-[0.2em]">Compliance Excellence</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-[1.05] tracking-tight">
                Mission-First,<br />
                Compliance-Assured
              </h2>
              
              <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Every solution we implement starts with your <strong className="text-white">mission objectives</strong>. Our team brings deep expertise in critical compliance frameworks—<strong className="text-white">battle-tested</strong> in government environments. We ensure your technology investments drive <strong className="text-white">mission success</strong> while meeting the most stringent compliance mandates. Our compliance-first approach is embedded in every solution we deliver.
              </p>

              {/* CTA Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about#story" className="group inline-flex items-center gap-2 text-white hover:text-[#FF6B35] font-semibold text-sm uppercase tracking-wider transition-colors">
                  Our Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/our-approach" className="group inline-flex items-center gap-2 text-white/70 hover:text-[#FF6B35] font-semibold text-sm uppercase tracking-wider transition-colors">
                  Learn Our Approach
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Framework Cards (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* StateRAMP */}
                <div className="group relative bg-white/[0.06] backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/10 hover:border-[#FF6B35] transition-all duration-400 hover:bg-white/[0.1] hover:shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors">StateRAMP</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">Standardized security for state and local government cloud.</p>
                </div>

                {/* CMMC */}
                <div className="group relative bg-white/[0.06] backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/10 hover:border-[#FF6B35] transition-all duration-400 hover:bg-white/[0.1] hover:shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors">CMMC</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">Cybersecurity Maturity Model for defense contractors.</p>
                </div>

                {/* FISMA */}
                <div className="group relative bg-white/[0.06] backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/10 hover:border-[#FF6B35] transition-all duration-400 hover:bg-white/[0.1] hover:shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors">FISMA</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">Federal Information Security Management Act compliance.</p>
                </div>

                {/* HIPAA */}
                <div className="group relative bg-white/[0.06] backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/10 hover:border-[#FF6B35] transition-all duration-400 hover:bg-white/[0.1] hover:shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors">HIPAA</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">Healthcare data protection and privacy standards.</p>
                </div>

                {/* FedRAMP - Full width below the four cards */}
                <div className="group relative sm:col-span-2 bg-white/[0.06] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-[#FF6B35] transition-all duration-500 hover:bg-white/[0.1] hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center">
                        <ShieldCheck className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#FF6B35] transition-colors">FedRAMP</h3>
                      <p className="text-sm text-white/70 leading-relaxed">Federal Risk & Authorization Program for cloud service providers. The gold standard for federal cloud security authorization.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Accent line bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0A2540]"></div>
      </section>

      {/* Who We Serve Section - Refined Design */}
      <section className="relative py-12 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-10 h-[2px] bg-[#FF6B35]"></div>
              <span className="text-[#FF6B35] font-semibold text-xs uppercase tracking-[0.2em]">Who We Serve</span>
              <div className="w-10 h-[2px] bg-[#FF6B35]"></div>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-[#0A2540] leading-[1.1]">
              Trusted Partners Across Sectors
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We deliver <strong className="text-[#0A2540]">mission-critical technology solutions</strong> to organizations that demand the highest standards of security, compliance, and operational excellence.
            </p>
          </motion.div>
          
          {/* Customer Categories Grid - Orange border only on hover */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
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
                image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/xQGPfhhxYkvzGYov.jpg',
                link: '/sectors/federal-government',
                number: '01'
              },
              {
                title: 'State & Local Government',
                description: 'Empowering state and municipal agencies with scalable, compliant solutions that modernize public services and citizen engagement.',
                image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/CuywQSPKAgQDWQFr.jpg',
                link: '/sectors/state-local-government',
                number: '02'
              },
              {
                title: 'Regulated Industries',
                description: 'Serving healthcare, financial services, and energy sectors with solutions that meet stringent regulatory and compliance requirements.',
                image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/xyazUvJLeQlThDJL.JPG',
                link: '/sectors/regulated-industries',
                number: '03'
              },
              {
                title: 'Federal Contractors',
                description: 'Guiding defense contractors through CMMC certification and compliance, ensuring readiness for DoD contract requirements.',
                image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/rAoswLqnmOzobrXm.jpg',
                link: '/sectors/federal-contractors',
                number: '04'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[#FF6B35] flex flex-col"
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
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-[#0A2540]/30 to-transparent" />
  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white drop-shadow-lg">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                    {category.description}
                  </p>
                  <Link 
                    href={category.link}
                    className="inline-flex items-center text-[#0A2540] font-semibold text-xs uppercase tracking-wider hover:text-[#FF6B35] transition-colors group/link mt-3"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Showcase - Text-based cards */}
      <CaseStudyShowcaseText />

      {/* Insights Section */}
      <InsightsSection />

      {/* Industry Updates Section */}
      <IndustryUpdates />

      <Footer />
    </div>
  );
}
