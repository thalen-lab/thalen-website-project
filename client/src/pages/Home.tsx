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
  Award
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



  // Featured certifications (top 3 most important for government/enterprise)
  const featuredCertifications = [
    {
      name: 'FedRAMP & StateRAMP Implementation',
      description: 'Expert implementation services for FedRAMP and StateRAMP-authorized platforms across federal, state, and local agencies at Moderate and High impact levels with comprehensive ATO support.',
      icon: Shield,
      image: '/fedramp-capitol.jpg',
      href: '/services/fedramp'
    },
    {
      name: 'ISO 27001 Implementation Services',
      description: 'Proven methodologies for implementing ISO 27001:2022-compliant information security management systems for government and enterprise clients seeking certification.',
      icon: Shield,
      image: '/iso-logo.jpg',
      href: '/services/iso-27001'
    },
    {
      name: 'CMMC Consulting Services',
      description: 'Expert consulting to help defense contractors achieve CMMC Level 2 and Level 3 compliance through comprehensive gap analysis, controls implementation, and audit preparation.',
      icon: Shield,
      image: '/cmmc-consulting.jpg',
      href: '/cmmc'
    }
  ];

  // Additional credentials displayed as compact badges
  const additionalCredentials = [
    { name: 'NIST Framework', shortDesc: 'Cybersecurity Framework v2.0 Expertise' },
    { name: 'GSA Schedule', shortDesc: 'Application in Progress' },
    { name: 'ATO Support', shortDesc: 'FISMA Authority to Operate Services' },
    { name: 'CJIS Compliance', shortDesc: 'Implementation Services' },
    { name: 'Cleared Personnel', shortDesc: 'TS/SCI Available Upon Award' }
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

      {/* Who We Are Section - Enhanced with Kyndryl-inspired Interactive Elements */}
      <WhoWeAreSection />

      {/* Comprehensive Technology Solutions - Static Section */}
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none"></div>
              </div>

              {/* Decorative accent element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
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
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                What we do
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Comprehensive Technology Solutions
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                From cloud modernization and cybersecurity to data analytics and AI/ML, we deliver end-to-end technology solutions tailored for government and regulated sectors. Our services include intelligent automation, DevSecOps, application development, and digital transformation—all designed with compliance-first architecture and measurable outcomes.
              </p>

              {/* CTA Buttons - Enhanced for Core Capabilities */}
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/core-capabilities">
                    Explore Our Solutions
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2">
                  <Link href="/contact">
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
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
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">How We Deliver</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
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
                  className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white"
                  onClick={() => window.location.href = '/about#story'}
                >
                  Our story
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100"
                  onClick={() => window.location.href = '/about#awards'}
                >
                  Awards and recognition
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100"
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Incentro Style */}
      <CaseStudyShowcase />

      {/* Certifications Section - Featured + Grid Layout (GovTech Best Practice) */}
      <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#0A2540] to-[#1e3a4c]">
        <div className="container">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Trusted & Certified</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Enterprise & Government Security & Compliance
            </h2>
            <p className="text-xl text-slate-200 leading-relaxed">
              Built for the most demanding security and compliance requirements across government agencies and enterprise organizations.
            </p>
          </motion.div>

          {/* Featured Certifications - Top 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {featuredCertifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <Link href={cert.href} className="block h-full">
                   <Card className="h-full border border-slate-700 hover:border-accent transition-all duration-300 hover:shadow-lg bg-slate-800/50 overflow-hidden cursor-pointer">
                    {cert.image ? (
                      <>
                        <div className="w-full h-48 overflow-hidden">
                          <img 
                            src={cert.image} 
                            alt={cert.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center">
                            <h3 className="text-xl font-bold text-white mb-3">
                              {cert.name}
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                              {cert.description}
                            </p>
                          </div>
                        </CardContent>
                      </>
                    ) : (
                      <CardContent className="p-8">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                            <IconComponent className="w-8 h-8 text-accent" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">
                            {cert.name}
                          </h3>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {cert.description}
                          </p>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Credentials - Compact Badge Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-6 text-center">Additional Credentials & Authorizations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {additionalCredentials.map((cred, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
                    <Shield className="w-6 h-6 text-slate-300 group-hover:text-accent transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{cred.name}</h4>
                  <p className="text-xs text-slate-300">{cred.shortDesc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Our Approach Teaser Section - Links to Dedicated Page */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container max-w-5xl">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Our Approach</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
              How We Deliver Mission-Critical Results
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Four strategic pillars ensure compliant, secure, and vendor-neutral technology implementations for government agencies—from rapid assessment to cleared team execution.
            </p>
            <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
              <Link href="/our-approach">
                Learn About Our Approach
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-navy-gradient text-primary-foreground">
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
