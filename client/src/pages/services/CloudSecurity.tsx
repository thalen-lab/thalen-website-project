import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight } from 'lucide-react';

export default function CloudSecurity() {
  const benefits = [
    {
      title: 'FedRAMP High Authorized',
      description: 'Cloud security architecture meeting FedRAMP High requirements with continuous monitoring, ATO support, and compliance documentation.'
    },
    {
      title: 'CMMC Level 3 Consulting',
      description: 'Defense-grade security controls consulting to help organizations meet CMMC Level 3 requirements for handling Controlled Unclassified Information (CUI).'
    },
    {
      title: 'Zero-Trust Architecture',
      description: 'Identity-based security with continuous verification, least-privilege access controls, and micro-segmentation for mission-critical workloads.'
    }
  ];

  const securityLayers = [
    {
      title: 'Identity & Access Management',
      controls: [
        'Multi-factor authentication (MFA) for all users',
        'Role-based access control (RBAC) with least privilege',
        'Privileged access management (PAM) for administrators',
        'Single sign-on (SSO) with SAML 2.0 integration'
      ]
    },
    {
      title: 'Data Protection',
      controls: [
        'Encryption at rest using FIPS 140-2 validated modules',
        'Encryption in transit with TLS 1.3',
        'Key management with HSM and automated rotation',
        'Data loss prevention (DLP) and classification'
      ]
    },
    {
      title: 'Network Security',
      controls: [
        'Micro-segmentation and zero-trust network access',
        'Web application firewall (WAF) with OWASP protection',
        'DDoS mitigation and traffic inspection',
        'VPN and private connectivity to on-premises'
      ]
    },
    {
      title: 'Threat Detection',
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
      description: 'Federal Risk and Authorization Management Program (FedRAMP) for cloud services'
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
      description: 'Federal Information Security Management Act (FISMA) compliance'
    }
  ];

  const tools = [
    'AWS GuardDuty', 'Azure Sentinel', 'Google Cloud Armor', 'CrowdStrike',
    'Palo Alto Prisma Cloud', 'Splunk', 'Tenable', 'Qualys'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-24 text-white" style={{ backgroundImage: "url('/patterns/pattern-dark.svg')" }}>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85" />
        <div className="container relative">
          <div className="max-w-4xl">
            <Breadcrumb 
              items={[
                { label: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
                { label: 'Cloud Security & Compliance' }
              ]}
              className="text-white/80 hover:text-white mb-4"
            />
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              FedRAMP High • CMMC Level 3 • NIST 800-53
            </p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
            >
              Cloud Security & Compliance
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              We help agencies implement government-grade security controls for FedRAMP High authorization, StateRAMP, CMMC Level 3 certification, and zero-trust architecture for mission-critical workloads. Our team delivers defense-grade cloud security implementation meeting the most stringent government compliance requirements across federal, state, and local levels while enabling operational agility.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Request Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                Download Compliance Guide
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Government-Grade Security</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Defense-Grade Cloud Controls</h2>
            <p className="text-xl text-slate-600">
              Meeting the most stringent government compliance requirements for classified and sensitive workloads.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Defense-in-Depth</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Multi-Layered Security Architecture</h2>
            <p className="text-xl text-slate-600">
              Protecting your cloud infrastructure, applications, and data from advanced threats with layered security controls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {securityLayers.map((layer, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{layer.title}</h3>
                  <ul className="space-y-3 text-slate-600">
                    {layer.controls.map((control, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
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
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Compliance Support</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Government Compliance Frameworks</h2>
            <p className="text-xl text-slate-600">
              Comprehensive compliance support across all major government security and privacy frameworks (FedRAMP, StateRAMP, CJIS).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {complianceFrameworks.map((item, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-[oklch(0.20_0.05_250)]">{item.framework}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.levels.map((level, idx) => (
                      <span key={idx} className="text-xs bg-[oklch(0.97_0.01_250)] text-[oklch(0.20_0.05_250)] px-3 py-1 rounded-full font-semibold">
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
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Tools & Platforms</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Security Tool & Platform Expertise</h2>
            <p className="text-xl text-slate-600">
              Enterprise-grade security tools for threat detection, compliance monitoring, and incident response.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <span key={index} className="bg-white border-2 border-slate-200 px-6 py-3 rounded-lg font-semibold hover:border-[oklch(0.70_0.18_55)] transition-colors text-slate-600">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Cloud Infrastructure?</h2>
          <p className="text-xl text-white/90 mb-8">
            Start with a comprehensive security assessment and discover how NexDyne can deliver FedRAMP-authorized platforms and CMMC compliance consulting for your cloud security needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Request Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
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
          },
          {
            title: 'Multi-Cloud Strategy & Management',
            description: 'Implement consistent security policies across AWS, Azure, and GCP with unified threat detection.',
            href: '/services/multi-cloud',
          },
          {
            title: 'Disaster Recovery & Business Continuity',
            description: 'Secure backup and recovery strategies with encrypted data replication and compliance-ready restoration.',
            href: '/services/disaster-recovery',
          }
        ]}
        title="Complete Cloud Security"
        description="Integrate security across migration, multi-cloud management, and disaster recovery for comprehensive protection."
      />

      <Footer />
    </div>
  );
}
