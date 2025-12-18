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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Industry Updates Ticker */}
      <IndustryUpdates />

      {/* Who We Are Section - Enhanced with Signature Blue */}
      <WhoWeAreSection />

      {/* Comprehensive Technology Solutions - Clean White Section */}
      <section className="relative py-16 md:py-24 lg:py-28 bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            
            {/* Left: Core Capabilities Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden shadow-2xl rounded-lg">
<ImageWithLoader
                                  src="/comprehensive-technology-solutions.jpg"
                                  alt="Technology professionals collaborating on comprehensive solutions with data analytics display"
                  className="w-full h-auto"
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.22_0.06_250)]/20 via-transparent to-[oklch(0.65_0.18_55)]/10 pointer-events-none"></div>
                {/* Orange accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[oklch(0.65_0.18_55)] to-[oklch(0.70_0.18_55)]"></div>
              </div>

              {/* Decorative accent element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-[oklch(0.65_0.18_55)]/20 rounded-full blur-3xl"
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
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-sm">
                What we do
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-6 leading-tight">
                Comprehensive Technology Solutions
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                From cloud modernization and cybersecurity to data analytics and AI/ML, we deliver end-to-end technology solutions tailored for government and regulated sectors. Our services include intelligent automation, DevSecOps, application development, and digital transformation—all designed with compliance-first architecture and measurable outcomes.
              </p>

              {/* CTA Buttons - Enhanced for Core Capabilities */}
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="default" size="lg" className="bg-[oklch(0.22_0.06_250)] hover:bg-[oklch(0.18_0.06_250)]">
                  <Link href="/core-capabilities">
                    Explore Our Solutions
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-[oklch(0.22_0.06_250)] text-[oklch(0.22_0.06_250)] hover:bg-[oklch(0.22_0.06_250)] hover:text-white">
                  <Link href="/contact">
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[oklch(0.65_0.18_55)]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[oklch(0.22_0.06_250)]/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Services Section - 2x3 Grid Layout - COMMENTED OUT
      <section className="py-20 md:py-24 lg:py-28 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="mb-12 md:mb-16 lg:mb-20 text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-accent mb-4 tracking-wider uppercase">Core Capabilities</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Government Technology Services
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive technology solutions for federal, state, and local agencies. From automation to cybersecurity, we deliver mission-critical results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="block group"
              >
                <Card className="h-full border border-white/10 hover:border-accent bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <CardContent className="p-10">
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
      */}


      {/* How We Deliver - Compliance-First Approach Section */}
      <section className="py-20 md:py-24 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-sm">How We Deliver</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-6">
                Compliance-First Approach
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Every solution we implement starts with regulatory requirements. Our team brings deep expertise in FedRAMP, StateRAMP, CMMC, FISMA, HIPAA, GDPR, SOC 2, PCI-DSS, and other critical frameworks, ensuring your technology investments meet compliance mandates while driving operational efficiency and mission success.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-[oklch(0.22_0.06_250)] hover:bg-[oklch(0.18_0.06_250)] text-white"
                  onClick={() => window.location.href = '/about#story'}
                >
                  Our story
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[oklch(0.22_0.06_250)]/30 text-[oklch(0.22_0.06_250)] hover:bg-[oklch(0.22_0.06_250)]/10"
                  onClick={() => window.location.href = '/about#awards'}
                >
                  Awards and recognition
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[oklch(0.22_0.06_250)]/30 text-[oklch(0.22_0.06_250)] hover:bg-[oklch(0.22_0.06_250)]/10"
                  onClick={() => window.location.href = '/contact'}
                >
                  Join our team
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
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <ImageWithLoader
                  src="/compliance-first-approach.jpg"
                  alt="Server infrastructure representing compliance-first approach"
                  className="w-full h-auto"
                />
                {/* Orange accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[oklch(0.65_0.18_55)] to-[oklch(0.70_0.18_55)]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Signature Blue */}
      <CaseStudyShowcase />

      {/* Our Approach Teaser Section - Signature Blue Background */}
      <section className="relative py-20 md:py-28 bg-[oklch(0.22_0.06_250)] overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.06_250)] via-[oklch(0.22_0.06_250)] to-[oklch(0.28_0.05_250)]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        <div className="container max-w-5xl relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider text-sm">Our Approach</p>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              How We Deliver Mission-Critical Results
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Four strategic pillars ensure compliant, secure, and vendor-neutral technology implementations for government agencies—from rapid assessment to cleared team execution.
            </p>
            
            {/* Sector badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { label: 'Federal Government', icon: Landmark },
                { label: 'State Government', icon: Building2 },
                { label: 'Local Government', icon: Users },
                { label: 'Regulated Industries', icon: Scale }
              ].map((sector) => (
                <div 
                  key={sector.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white"
                >
                  <sector.icon className="h-4 w-4 text-[oklch(0.75_0.15_55)]" />
                  {sector.label}
                </div>
              ))}
            </div>
            
            <Button asChild size="lg" className="bg-gradient-to-r from-[oklch(0.45_0.12_250)] to-[oklch(0.35_0.14_250)] hover:from-[oklch(0.40_0.14_250)] hover:to-[oklch(0.30_0.14_250)] text-white shadow-lg hover:shadow-xl transition-all">
              <Link href="/our-approach">
                Learn About Our Approach
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

      </section>



      {/* CTA Section - Signature Blue */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-[oklch(0.22_0.06_250)] overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.06_250)] via-[oklch(0.22_0.06_250)] to-[oklch(0.28_0.05_250)]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Request an assessment to evaluate how our services can support your agency's technology requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-[oklch(0.45_0.12_250)] to-[oklch(0.35_0.14_250)] hover:from-[oklch(0.40_0.14_250)] hover:to-[oklch(0.30_0.14_250)] text-white shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">
                Request Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50">
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
