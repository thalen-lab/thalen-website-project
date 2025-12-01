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
      description: 'We help agencies and contractors achieve CMMC Level 2/3 certification and FedRAMP authorization through gap assessments, security control implementation, and ATO support.',
      benefits: ['CMMC gap assessment', 'Security controls implementation', 'ATO package preparation'],
      link: '/services/security-assessment'
    },
    {
      icon: Network,
      title: 'Zero Trust Architecture Implementation',
      description: 'Deploy NIST 800-207 Zero Trust frameworks using FedRAMP-authorized security platforms with micro-segmentation, continuous verification, and identity-centric controls.',
      benefits: ['NIST 800-207 implementation', 'Micro-segmentation design', 'Identity-centric security'],
      link: '/services/zero-trust-architecture'
    },
    {
      icon: Eye,
      title: 'Security Operations Center (SOC) Setup',
      description: 'Implement 24/7 security monitoring using FedRAMP SIEM/SOAR platforms (Splunk Gov, LogRhythm, Palo Alto Cortex) with automated threat detection and response.',
      benefits: ['24/7 threat monitoring', 'SIEM/SOAR deployment', 'Automated incident response'],
      link: '/services/security-operations-center'
    },
    {
      icon: Lock,
      title: 'Identity & Access Management (IAM)',
      description: 'Deploy Zero Trust identity solutions using FedRAMP IAM platforms with PIV/CAC integration, privileged access management, and identity governance.',
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
      description: 'Proven track record achieving CMMC Level 2/3 certifications and FedRAMP ATOs with 100% success rate across 25+ agencies.'
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
    { agency: 'Defense Contractors', project: 'CMMC Level 3 Certification', outcome: '15 contractors certified' },
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
              Government Cybersecurity & Compliance Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We help government agencies (federal, state, and local) and defense contractors implement FedRAMP and StateRAMP-authorized security platforms, achieve CMMC certification, and deploy Zero Trust architectures. Vendor-neutral consulting with cleared security professionals and proven ATO success.
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
              Proven track record implementing security platforms and achieving compliance certifications across government agencies and defense contractors.
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
