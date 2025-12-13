import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Shield, FileSearch, Lock, Eye, Network, Users, Award, Target } from 'lucide-react';

export default function Cybersecurity() {
  // Primary service offerings (4 core capabilities)
  const primaryServices = [
    {
      icon: FileSearch,
      title: 'CMMC & FedRAMP Compliance Implementation',
      description: 'Strengthen your existing security controls and close compliance gaps through assessments and remediation—with FedRAMP-authorized tools recommended only when CMMC Level 2/3 or ATO requirements demand certified platforms.',
      benefits: ['CMMC gap assessment', 'Security controls implementation', 'ATO package preparation'],
      link: '/services/security-assessment'
    },
    {
      icon: Network,
      title: 'Zero Trust Architecture Implementation',
      description: 'Implement Zero Trust principles with your existing network infrastructure and security tools—or deploy FedRAMP Zero Trust platforms when micro-segmentation and continuous verification require enterprise-scale orchestration.',
      benefits: ['NIST 800-207 implementation', 'Micro-segmentation design', 'Identity-centric security'],
      link: '/services/zero-trust-architecture'
    },
    {
      icon: Eye,
      title: 'Security Operations Center (SOC) Setup',
      description: 'Build security monitoring capabilities with your existing log aggregation and detection tools—or implement FedRAMP SIEM/SOAR platforms (Splunk Gov, LogRhythm) when compliance or threat volume requires enterprise-grade correlation.',
      benefits: ['24/7 threat monitoring', 'SIEM/SOAR deployment', 'Automated incident response'],
      link: '/services/security-operations-center'
    },
    {
      icon: Lock,
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
      icon: Shield,
      title: 'FedRAMP Security Platform Expertise',
      description: 'Deep implementation experience with 40+ FedRAMP-authorized security tools including SIEM, EDR, IAM, and vulnerability management platforms.'
    },
    {
      icon: Users,
      title: 'Cleared Security Professionals',
      description: 'Team holds Secret and TS/SCI clearances with CISSP, CISM, and CEH certifications for sensitive government environments.'
    },
    {
      icon: Award,
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Implementation Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cybersecurity & Compliance
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Thalen Technologies delivers security through a dual approach: first, we strengthen your existing security posture with gap assessments, control implementation, and compliance frameworks—then deploy FedRAMP security platforms (Splunk Gov, CrowdStrike Gov) when compliance mandates it or threat models require certified tools. Vendor-neutral consulting with cleared security professionals and proven ATO success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Download CMMC Checklist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Services Cards */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Compliance</h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              Built for the most demanding security and compliance requirements across government agencies and enterprise organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* FedRAMP & StateRAMP Card */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">FedRAMP & StateRAMP Implementation</h3>
                <p className="text-slate-300 leading-relaxed">
                  Expert implementation services for FedRAMP and StateRAMP-authorized platforms across federal, state, and local agencies at Moderate and High impact levels with comprehensive ATO support.
                </p>
              </CardContent>
            </Card>

            {/* ISO 27001 Card */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src="/iso27001-service.jpg" 
                    alt="ISO 27001 Implementation Services" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4 text-white">ISO 27001 Implementation Services</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Proven methodologies for implementing ISO 27001:2022-compliant information security management systems for government and enterprise clients seeking certification.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CMMC Card */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">CMMC Consulting Services</h3>
                <p className="text-slate-300 leading-relaxed">
                  Expert consulting to help defense contractors achieve CMMC Level 2 and Level 3 compliance through comprehensive gap analysis, controls implementation, and audit preparation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Security Services */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Cybersecurity Implementation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end security capabilities from compliance assessment to Zero Trust deployment, designed for government agencies (federal, state, local) and defense contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {primaryServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all border-2 hover:border-accent">
                <CardContent className="p-8">
                  <service.icon className="h-16 w-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.link}>
                    <Button variant="outline" className="w-full border-2 border-dashed border-primary/30 hover:border-accent hover:bg-accent/5">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Capabilities - Compact Format */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Additional Security Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start p-6 bg-background rounded-lg border-2 border-border hover:border-accent/50 transition-colors">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">{capability.name}</h4>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Framework Expertise */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Government Compliance Framework Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep expertise implementing security controls across all major government compliance frameworks including FedRAMP (federal), StateRAMP (state/local), CMMC (defense), and CJIS (law enforcement) with proven ATO success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{framework.framework}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{framework.controls}</p>
                  <p className="text-xs text-primary font-semibold">{framework.timeline}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Security Experience */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Government Security Implementation Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience implementing security platforms and achieving compliance certifications across government agencies and defense contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {governmentExperience.map((exp, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{exp.agency}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.project}</p>
                  <p className="text-lg font-bold text-primary">{exp.outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button variant="outline" size="lg">
                View Security Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FedRAMP Security Platform Expertise */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">FedRAMP-Authorized Security Platform Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement and integrate FedRAMP-authorized security platforms from leading vendors, helping you build defense-in-depth architectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fedrampSecurityPlatforms.map((category, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.platforms.map((platform, idx) => (
                      <span key={idx} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-semibold">
                        {platform}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Plus 30+ additional FedRAMP-authorized security platforms including firewalls, DLP, CASB, and threat intelligence tools.
            </p>
            <Link href="/partners">
              <Button variant="outline" size="lg">
                View All Security Platforms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAR Compliance for Cybersecurity Services */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Government Contracting Compliance</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cybersecurity implementations comply with Federal Acquisition Regulation requirements and Defense Federal Acquisition Regulation Supplement (DFARS) for DoD contracts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                    IT Security Requirements (FAR)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Cybersecurity services comply with FAR 52.239-1 (Privacy or Security Safeguards) and FAR 52.204-21 (Basic Safeguarding), implementing NIST controls for federal information protection.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>NIST 800-53 control implementation and documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Security assessment and continuous monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                    DoD Contracts (DFARS)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For Department of Defense contracts, we maintain compliance with DFARS 252.204-7012 (Safeguarding Covered Defense Information) and CMMC requirements for CUI protection.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>NIST SP 800-171 controls for CUI safeguarding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>CMMC Level 2 certification support and implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Procurement Benefits</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Faster Contract Execution</p>
                    <p className="text-muted-foreground">Pre-established compliance frameworks reduce contract negotiation time for security services.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Reduced Agency Risk</p>
                    <p className="text-muted-foreground">Documented FAR and DFARS compliance minimizes contractor performance risk and oversight burden.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Audit-Ready Documentation</p>
                    <p className="text-muted-foreground">Maintained compliance records support agency audits and CPARS evaluations.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Achieve CMMC or FedRAMP Compliance?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a security assessment to discuss your compliance requirements, evaluate FedRAMP security platforms, and develop a roadmap for certification success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download CMMC Checklist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Success Story
            </div>
            <h2 className="text-4xl font-bold mb-4">See Government Cybersecurity in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how a DoD manufacturing facility achieved 99.2% uptime with FedRAMP-authorized cybersecurity platforms and predictive maintenance analytics.
            </p>
          </div>
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-12 flex flex-col justify-center">
                <div className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit">
                  Department of Defense
                </div>
                <h3 className="text-3xl font-bold mb-4">DoD Manufacturing Facility Achieves 99.2% Uptime</h3>
                <p className="text-muted-foreground mb-6">
                  Deployed FedRAMP-authorized cybersecurity platforms and predictive maintenance analytics for defense manufacturing operations, eliminating 75% of unplanned downtime across 50+ production lines.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-primary">99.2%</div>
                    <div className="text-sm text-muted-foreground">System Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">75%</div>
                    <div className="text-sm text-muted-foreground">Downtime Reduction</div>
                  </div>
                </div>
                <Link href="/case-studies/dod-manufacturing">
                  <Button size="lg" className="bg-orange-gradient hover:opacity-90 w-full">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
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

      <Footer />
    </div>
  );
}
