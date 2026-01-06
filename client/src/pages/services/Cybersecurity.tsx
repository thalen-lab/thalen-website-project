import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function Cybersecurity() {
  // Primary service offerings (4 core capabilities)
  const primaryServices = [
    {
      title: 'CMMC & FedRAMP Compliance Implementation',
      description: 'Strengthen your existing security controls and close compliance gaps through assessments and remediation—with FedRAMP-authorized tools recommended only when CMMC Level 2/3 or ATO requirements demand certified platforms.',
      benefits: ['CMMC gap assessment', 'Security controls implementation', 'ATO package preparation'],
      link: '/services/security-assessment'
    },
    {
      title: 'Zero Trust Architecture Implementation',
      description: 'Implement Zero Trust principles with your existing network infrastructure and security tools—or deploy FedRAMP Zero Trust platforms when micro-segmentation and continuous verification require enterprise-scale orchestration.',
      benefits: ['NIST 800-207 implementation', 'Micro-segmentation design', 'Identity-centric security'],
      link: '/services/zero-trust-architecture'
    },
    {
      title: 'Security Operations Center (SOC) Setup',
      description: 'Build security monitoring capabilities with your existing log aggregation and detection tools—or implement FedRAMP SIEM/SOAR platforms (Splunk Gov, LogRhythm) when compliance or threat volume requires enterprise-grade correlation.',
      benefits: ['24/7 threat monitoring', 'SIEM/SOAR deployment', 'Automated incident response'],
      link: '/services/security-operations-center'
    },
    {
      title: 'Identity & Access Management (IAM)',
      description: 'Modernize your existing identity and access controls with PIV/CAC integration and privilege management—or deploy FedRAMP IAM platforms (Okta Gov, Ping Identity Gov) when identity governance at scale is required.',
      benefits: ['PIV/CAC integration', 'Privileged access management', 'Identity governance frameworks'],
      link: '/services/identity-access-management'
    }
  ];

  // Additional capabilities (compact format)
  const additionalCapabilities = [
    { name: 'Penetration Testing & Red Team Exercises', description: 'Offensive security testing to identify vulnerabilities before adversaries' },
    { name: 'Incident Response & Digital Forensics', description: 'Rapid breach containment and forensic analysis with <1 hour response time' },
    { name: 'Vulnerability Management Programs', description: 'Continuous scanning and remediation tracking for FISMA compliance' },
    { name: 'Security Awareness Training', description: 'Role-based security training for government employees and contractors' }
  ];

  const keyDifferentiators = [
    {
      title: 'FedRAMP Security Platform Expertise',
      description: 'Deep implementation experience with 40+ FedRAMP-authorized security tools including SIEM, EDR, IAM, and vulnerability management platforms.'
    },
    {
      title: 'Cleared Security Professionals',
      description: 'Team holds Secret and TS/SCI clearances with CISSP, CISM, and CEH certifications for sensitive government environments.'
    },
    {
      title: 'CMMC & ATO Success Record',
      description: 'Experience achieving CMMC Level 2/3 certifications and FedRAMP ATOs with 100% success rate across 25+ agencies.'
    }
  ];

  const complianceFrameworks = [
    { framework: 'CMMC Level 2/3', controls: '110-130 controls', timeline: '6-12 months' },
    { framework: 'FedRAMP Moderate/High', controls: '325-421 controls', timeline: '12-18 months' },
    { framework: 'NIST 800-53 Rev 5', controls: '320+ controls', timeline: '9-15 months' },
    { framework: 'NIST 800-171', controls: '110 controls', timeline: '6-9 months' }
  ];

  const fedrampSecurityPlatforms = [
    {
      category: 'SIEM & Security Analytics',
      platforms: ['Splunk Government', 'LogRhythm Government', 'Palo Alto Cortex', 'IBM QRadar Gov']
    },
    {
      category: 'Endpoint Detection & Response (EDR)',
      platforms: ['CrowdStrike Government', 'SentinelOne Government', 'Microsoft Defender Gov', 'Trellix Gov']
    },
    {
      category: 'Identity & Access Management',
      platforms: ['Okta Government', 'Ping Identity Gov', 'Azure AD Government', 'CyberArk Government']
    },
    {
      category: 'Vulnerability Management',
      platforms: ['Tenable.sc Government', 'Qualys Government', 'Rapid7 Government', 'Nessus Professional']
    }
  ];

  const governmentExperience = [
    { agency: 'Defense Contractors', project: 'CMMC Level 3 Compliance Support', outcome: '15 contractors supported' },
    { agency: 'Government Civilian Agencies', project: 'FedRAMP/StateRAMP ATO Support', outcome: '8 ATOs achieved' },
    { agency: 'Intelligence Community', project: 'Zero Trust Implementation', outcome: 'TS/SCI environments secured' }
  ];

  const complianceCards = [
    {
      title: 'FedRAMP & StateRAMP Implementation',
      description: 'Expert implementation services for FedRAMP and StateRAMP-authorized platforms across federal, state, and local agencies at Moderate and High impact levels with comprehensive ATO support.'
    },
    {
      title: 'ISO 27001 Implementation Services',
      description: 'Proven methodologies for implementing ISO 27001:2022-compliant information security management systems for government and enterprise clients seeking certification.',
      hasImage: true
    },
    {
      title: 'CMMC Consulting Services',
      description: 'Comprehensive CMMC readiness assessments and implementation support for defense contractors seeking Level 2 and Level 3 certification to protect Controlled Unclassified Information (CUI).'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cybersecurity/cybersecurity-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Cybersecurity' }
              ]} 
              variant="light" 
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Implementation Services</p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cybersecurity & Compliance
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Thalen Technologies delivers security through a dual approach: first, we strengthen your existing security posture with gap assessments, control implementation, and compliance frameworks—then deploy FedRAMP security platforms (Splunk Gov, CrowdStrike Gov) when compliance mandates it or threat models require certified tools. Vendor-neutral consulting with cleared security professionals and proven ATO success.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/resources">
                  Download CMMC Checklist
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Services Cards */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Compliance Expertise</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Compliance</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Built for the most demanding security and compliance requirements across government agencies and enterprise organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {card.hasImage && (
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src="/iso27001-service.jpg" 
                        alt="ISO 27001 Implementation Services" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4 sm:p-6 md:p-8 text-center">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{card.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Security Services */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Core Capabilities</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Core Cybersecurity Implementation Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              End-to-end security capabilities from compliance assessment to Zero Trust deployment, designed for government agencies (federal, state, local) and defense contractors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            {primaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-4 sm:p-6 md:p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="outline" className="w-full border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:bg-[oklch(0.97_0.01_250)]">
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Capabilities - Compact Format */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 text-center">Additional Security Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">{capability.name}</h4>
                  <p className="text-sm text-slate-600">{capability.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Framework Expertise */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Framework Expertise</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Government Compliance Framework Expertise</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Deep expertise implementing security controls across all major government compliance frameworks including FedRAMP (federal), StateRAMP (state/local), CMMC (defense), and CJIS (law enforcement) with proven ATO success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-3 sm:p-4 md:p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300 text-center">
                  <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-2">{framework.framework}</h3>
                  <p className="text-sm text-slate-500 mb-1">{framework.controls}</p>
                  <p className="text-xs text-[oklch(0.65_0.18_55)] font-semibold">{framework.timeline}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Security Experience */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Proven Results</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Government Security Implementation Success</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experience implementing security platforms and achieving compliance certifications across government agencies and defense contractors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {governmentExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-4 sm:p-6 md:p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{exp.agency}</h3>
                  <p className="text-sm text-slate-500 mb-3">{exp.project}</p>
                  <p className="text-lg font-bold text-[oklch(0.65_0.18_55)]">{exp.outcome}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
              <Link href="/case-studies">
                View Security Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FedRAMP Security Platform Expertise */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Expertise</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">FedRAMP-Authorized Security Platform Expertise</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We implement and integrate FedRAMP-authorized security platforms from leading vendors, helping you build defense-in-depth architectures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {fedrampSecurityPlatforms.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-4 sm:p-6 md:p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.platforms.map((platform, idx) => (
                      <span key={idx} className="text-xs bg-[oklch(0.97_0.01_250)] text-slate-700 px-3 py-1 rounded-full font-semibold">
                        {platform}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Plus 30+ additional FedRAMP-authorized security platforms including firewalls, DLP, CASB, and threat intelligence tools.
            </p>
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
              <Link href="/partners">
                View All Security Platforms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAR Compliance for Cybersecurity Services */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Compliance</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Government Contracting Compliance</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Cybersecurity implementations comply with Federal Acquisition Regulation requirements and Defense Federal Acquisition Regulation Supplement (DFARS) for DoD contracts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Card className="p-3 sm:p-4 md:p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-all duration-300">
              <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-4">
                IT Security Requirements (FAR)
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Cybersecurity services comply with FAR 52.239-1 (Privacy or Security Safeguards) and FAR 52.204-21 (Basic Safeguarding), implementing NIST controls for federal information protection.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span>NIST 800-53 control implementation and documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span>Security assessment and continuous monitoring</span>
                </li>
              </ul>
            </Card>

            <Card className="p-3 sm:p-4 md:p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-all duration-300">
              <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-4">
                DoD Contracts (DFARS)
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                For Department of Defense contracts, we maintain compliance with DFARS 252.204-7012 (Safeguarding Covered Defense Information) and CMMC requirements for CUI protection.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span>NIST SP 800-171 controls for CUI safeguarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span>CMMC Level 2 certification support and implementation</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-3 sm:p-4 md:p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-all duration-300">
            <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-4">Procurement Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 text-sm">
              <div>
                <p className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">Faster Contract Execution</p>
                <p className="text-slate-600">Pre-established compliance frameworks reduce contract negotiation time for security services.</p>
              </div>
              <div>
                <p className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">Reduced Agency Risk</p>
                <p className="text-slate-600">Documented FAR and DFARS compliance minimizes contractor performance risk and oversight burden.</p>
              </div>
              <div>
                <p className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">Audit-Ready Documentation</p>
                <p className="text-slate-600">Maintained compliance records support agency audits and CPARS evaluations.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Achieve CMMC or FedRAMP Compliance?</h2>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Schedule a security assessment to discuss your compliance requirements, evaluate FedRAMP security platforms, and develop a roadmap for certification success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/resources">
                  Download CMMC Checklist
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Success Story</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">See Government Cybersecurity in Action</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Learn how a DoD manufacturing facility achieved 99.2% uptime with FedRAMP-authorized cybersecurity platforms and predictive maintenance analytics.
            </p>
          </motion.div>
          <Card className="max-w-4xl mx-auto overflow-hidden border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2">
              <div className="bg-[oklch(0.97_0.01_250)] p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[oklch(0.65_0.18_55)]/10 text-[oklch(0.55_0.18_55)] rounded-full text-xs font-semibold mb-4 w-fit">
                  Department of Defense
                </span>
                <h3 className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-4">DoD Manufacturing Facility Achieves 99.2% Uptime</h3>
                <p className="text-slate-600 mb-6">
                  Deployed FedRAMP-authorized cybersecurity platforms and predictive maintenance analytics for defense manufacturing operations, eliminating 75% of unplanned downtime across 50+ production lines.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                  <div>
                    <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">99.2%</div>
                    <div className="text-sm text-slate-500">System Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">75%</div>
                    <div className="text-sm text-slate-500">Downtime Reduction</div>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg w-full">
                  <Link href="/case-studies/dod-manufacturing">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="/manufacturing-security.jpg" 
                  alt="DoD Manufacturing Cybersecurity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
