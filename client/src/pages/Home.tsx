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
  Scale
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

      {/* Comprehensive Technology Solutions - Clean White Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left: Core Capabilities Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden shadow-2xl rounded-sm">
                <div className="aspect-[4/3] w-full">
                  <ImageWithLoader
                    src="/comprehensive-technology-solutions.jpg"
                    alt="Technology professionals collaborating on comprehensive solutions with data analytics display"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/20 via-transparent to-[#E07020]/10 pointer-events-none"></div>
                {/* Orange accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E07020] to-[#F08030]"></div>
              </div>

              {/* Decorative accent element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E07020]/20 rounded-full blur-3xl"
              />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#0A2540] mb-4 md:mb-6 leading-tight">
                Comprehensive Technology Solutions
              </h2>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
                We serve government agencies and highly regulated industries, ensuring their mission-critical systems deliver when it matters most. NexDyne combines deep compliance expertise, proven methodologies, and cutting-edge technology to help public sector organizations navigate complex IT challenges while maintaining the highest security and regulatory standards.
              </p>

              {/* CTA Buttons - Consistent sizing */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild variant="default" size="lg" className="bg-[#E07020] hover:bg-[#C85D15] text-white px-6 min-h-[48px] w-full sm:w-auto">
                  <Link href="/services">
                    Explore Our Services
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white px-6 min-h-[48px] w-full sm:w-auto">
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E07020]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A2540]/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Compliance-First Approach Section - Signature Blue */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[#0A2540] overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#081C30] via-[#0A2540] to-[#12344D]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white mb-4 md:mb-6 leading-tight">
                Compliance-First Approach
              </h2>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 md:mb-8">
                Every solution we implement starts with regulatory requirements. Our team brings deep expertise in FedRAMP, StateRAMP, CMMC, FISMA, HIPAA, GDPR, SOC 2, PCI-DSS, and other critical frameworks, ensuring your technology investments meet compliance mandates while driving operational efficiency and mission success.
              </p>
              
              {/* Action Buttons - Streamlined to 2 buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-[#E07020] to-[#F08030] hover:from-[#D06010] hover:to-[#E07020] text-white shadow-lg hover:shadow-xl transition-all px-6 min-h-[48px] w-full sm:w-auto">
                  <Link href="/about#story">
                    Our Story
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 min-h-[48px] w-full sm:w-auto">
                  <Link href="/about#approach">
                    Learn Our Approach
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden shadow-2xl rounded-sm border border-white/10">
                <div className="aspect-[4/3] w-full">
                  <ImageWithLoader
                    src="/compliance-first-approach.jpg"
                    alt="Server infrastructure representing compliance-first approach"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Orange accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E07020] to-[#F08030]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Teaser Section - Clean White Background */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white overflow-hidden">
        {/* Subtle background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E07020]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A2540]/5 rounded-full blur-3xl -z-10" />
        
        <div className="container max-w-5xl relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#E07020] font-semibold mb-3 md:mb-4 uppercase tracking-wider text-xs sm:text-sm">Our Approach</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#0A2540] leading-tight">
              How We Deliver Mission-Critical Results
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto">
              Four strategic pillars ensure compliant, secure, and vendor-neutral technology implementations for government agencies—from rapid assessment to cleared team execution.
            </p>
            
            {/* Sector badges */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {[
                { label: 'Federal Government', icon: Landmark },
                { label: 'State Government', icon: Building2 },
                { label: 'Local Government', icon: Users },
                { label: 'Regulated Industries', icon: Scale }
              ].map((sector) => (
                <motion.div 
                  key={sector.label}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#0A2540]/10 border border-[#0A2540]/20 text-xs sm:text-sm font-medium text-[#0A2540] hover:bg-[#0A2540]/15 transition-colors"
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      transition: {
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    },
                  }}
                >
                  <sector.icon className="h-4 w-4 text-[#E07020]" />
                  {sector.label}
                </motion.div>
              ))}
            </motion.div>
            
            <Button asChild size="lg" className="bg-gradient-to-r from-[#E07020] to-[#F08030] hover:from-[#D06010] hover:to-[#E07020] text-white shadow-lg hover:shadow-xl transition-all px-6 sm:px-8 min-h-[48px] w-full sm:w-auto">
              <Link href="/our-approach">
                Learn About Our Approach
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
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
            Our Customers
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
