import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, CheckCircle2, Shield, Lock, Eye, AlertTriangle, FileCheck, Network, Cloud, RefreshCw, Server, Users, Key } from 'lucide-react';

export default function CloudSecurity() {
  const benefits = [
    {
      icon: Shield,
      title: 'FedRAMP High Authorized',
      description: 'Cloud security architecture meeting FedRAMP High requirements with continuous monitoring, ATO support, and compliance documentation.'
    },
    {
      icon: Lock,
      title: 'CMMC Level 3 Certified',
      description: 'Defense-grade security controls meeting CMMC Level 3 certification requirements for handling Controlled Unclassified Information (CUI).'
    },
    {
      icon: Eye,
      title: 'Zero-Trust Architecture',
      description: 'Identity-based security with continuous verification, least-privilege access controls, and micro-segmentation for mission-critical workloads.'
    }
  ];

  const securityLayers = [
    {
      title: 'Identity & Access Management',
      icon: Users,
      controls: [
        'Multi-factor authentication (MFA) for all users',
        'Role-based access control (RBAC) with least privilege',
        'Privileged access management (PAM) for administrators',
        'Single sign-on (SSO) with SAML 2.0 integration'
      ]
    },
    {
      title: 'Data Protection',
      icon: Key,
      controls: [
        'Encryption at rest using FIPS 140-2 validated modules',
        'Encryption in transit with TLS 1.3',
        'Key management with HSM and automated rotation',
        'Data loss prevention (DLP) and classification'
      ]
    },
    {
      title: 'Network Security',
      icon: Server,
      controls: [
        'Micro-segmentation and zero-trust network access',
        'Web application firewall (WAF) with OWASP protection',
        'DDoS mitigation and traffic inspection',
        'VPN and private connectivity to on-premises'
      ]
    },
    {
      title: 'Threat Detection',
      icon: AlertTriangle,
      controls: [
        'SIEM integration with 24/7 SOC monitoring',
        'Automated threat detection and response',
        'Vulnerability scanning and patch management',
        'Penetration testing and security assessments'
      ]
    }
  ];

  const complianceFrameworks = [
    {
      framework: 'FedRAMP',
      levels: ['High', 'Moderate', 'Low'],
      description: 'Federal Risk and Authorization Management Program for cloud services'
    },
    {
      framework: 'CMMC',
      levels: ['Level 1', 'Level 2', 'Level 3'],
      description: 'Cybersecurity Maturity Model Certification for defense contractors'
    },
    {
      framework: 'NIST 800-53',
      levels: ['Rev 5 Controls'],
      description: 'Security and Privacy Controls for Information Systems'
    },
    {
      framework: 'FISMA',
      levels: ['High', 'Moderate', 'Low'],
      description: 'Federal Information Security Management Act compliance'
    }
  ];

  const tools = [
    'AWS GuardDuty', 'Azure Sentinel', 'Google Cloud Armor', 'CrowdStrike',
    'Palo Alto Prisma Cloud', 'Splunk', 'Tenable', 'Qualys'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <nav className="text-sm mb-6 opacity-80">
            <Link href="/services/cloud" className="hover:text-accent">Cloud Infrastructure & Modernization</Link>
            <span className="mx-2">/</span>
            <span>Cloud Security & Compliance</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-semibold mb-4">
              FedRAMP High • CMMC Level 3 • NIST 800-53
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloud Security & Compliance
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Government-grade security with FedRAMP High authorization, CMMC Level 3 certification, and zero-trust architecture for mission-critical workloads. NexDyne delivers defense-grade cloud security meeting the most stringent federal compliance requirements while enabling operational agility.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Compliance Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Government-Grade Cloud Security</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Defense-grade security controls meeting the most stringent federal compliance requirements for classified and sensitive workloads.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <benefit.icon className="h-14 w-14 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Defense-in-Depth Security Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-layered security controls protecting your cloud infrastructure, applications, and data from advanced threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {securityLayers.map((layer, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <layer.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{layer.title}</h3>
                  <ul className="space-y-3">
                    {layer.controls.map((control, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{control}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Federal Compliance Frameworks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive compliance support across all major federal security and privacy frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {complianceFrameworks.map((item, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{item.framework}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <FileCheck className="h-10 w-10 text-accent flex-shrink-0" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.levels.map((level, idx) => (
                      <span key={idx} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">
                        {level}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tools */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Security Tools & Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade security tools for threat detection, compliance monitoring, and incident response.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <span key={index} className="bg-card border-2 border-border px-6 py-3 rounded-lg font-semibold hover:border-accent transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Cloud Infrastructure?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start with a comprehensive security assessment and discover how NexDyne can deliver FedRAMP-authorized, CMMC-certified cloud security.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Compliance Matrix
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Cloud Migration & Transition',
            description: 'Migrate to FedRAMP-authorized cloud environments with built-in security controls and compliance validation.',
            href: '/services/cloud-migration',
            icon: Cloud
          },
          {
            title: 'Multi-Cloud Strategy & Management',
            description: 'Implement consistent security policies across AWS, Azure, and GCP with unified threat detection.',
            href: '/services/multi-cloud',
            icon: Server
          },
          {
            title: 'Disaster Recovery & Business Continuity',
            description: 'Secure backup and recovery strategies with encrypted data replication and compliance-ready restoration.',
            href: '/services/disaster-recovery',
            icon: RefreshCw
          }
        ]}
        title="Complete Cloud Security"
        description="Integrate security across migration, multi-cloud management, and disaster recovery for comprehensive protection."
      />

      <Footer />
    </div>
  );
}
