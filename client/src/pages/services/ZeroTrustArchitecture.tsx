
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, CheckCircle2, Network, Shield, Lock, Eye, Users, Layers } from 'lucide-react';

export default function ZeroTrustArchitecture() {
  const ztPillars = [
    {
      icon: Users,
      title: 'Identity',
      description: 'Strong identity verification with multi-factor authentication, continuous validation, and risk-based access policies.',
      capabilities: ['MFA/PIV authentication', 'Continuous verification', 'Risk-based policies', 'Identity governance']
    },
    {
      icon: Shield,
      title: 'Devices',
      description: 'Device compliance validation, health attestation, and endpoint security before granting network access.',
      capabilities: ['Device compliance', 'Health attestation', 'Endpoint security', 'Mobile device management']
    },
    {
      icon: Network,
      title: 'Network',
      description: 'Micro-segmentation, encrypted communications, and software-defined perimeters to prevent lateral movement.',
      capabilities: ['Micro-segmentation', 'Encrypted traffic', 'Software-defined perimeter', 'Network access control']
    },
    {
      icon: Lock,
      title: 'Data',
      description: 'Data classification, encryption at rest and in transit, and data loss prevention to protect sensitive information.',
      capabilities: ['Data classification', 'Encryption (FIPS 140-2)', 'Data loss prevention', 'Rights management']
    },
    {
      icon: Layers,
      title: 'Applications',
      description: 'Application-level security controls, API security, and secure software development lifecycle practices.',
      capabilities: ['Application security', 'API protection', 'Secure SDLC', 'Container security']
    },
    {
      icon: Eye,
      title: 'Visibility & Analytics',
      description: 'Comprehensive logging, behavioral analytics, and threat intelligence to detect and respond to anomalies.',
      capabilities: ['Centralized logging', 'Behavioral analytics', 'Threat intelligence', 'Automated response']
    }
  ];

  const implementationPhases = [
    {
      phase: 'Assessment & Planning',
      description: 'Evaluate current architecture, identify trust boundaries, and develop Zero Trust roadmap aligned with NIST 800-207.',
      deliverables: ['Current state assessment', 'Trust boundary mapping', 'Zero Trust roadmap', 'Resource planning']
    },
    {
      phase: 'Identity & Access Foundation',
      description: 'Implement strong identity controls, MFA, and privileged access management as the foundation of Zero Trust.',
      deliverables: ['MFA deployment', 'PAM implementation', 'Identity governance', 'Access policies']
    },
    {
      phase: 'Network Segmentation',
      description: 'Deploy micro-segmentation, software-defined perimeters, and encrypted communications to isolate resources.',
      deliverables: ['Micro-segmentation', 'SDP deployment', 'Network policies', 'Encrypted tunnels']
    },
    {
      phase: 'Continuous Monitoring & Optimization',
      description: 'Enable comprehensive logging, behavioral analytics, and continuous policy refinement based on threat intelligence.',
      deliverables: ['SIEM integration', 'Analytics deployment', 'Policy optimization', 'Threat response']
    }
  ];

  const ztFrameworks = [
    'NIST SP 800-207',
    'DoD Zero Trust Reference Architecture',
    'CISA Zero Trust Maturity Model',
    'NSA Zero Trust Guidance',
    'Google BeyondCorp',
    'Forrester Zero Trust eXtended (ZTX)'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <Breadcrumb 
              items={[
                { label: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
                { label: 'Zero Trust Architecture' }
              ]}
              className="text-primary-foreground/80 hover:text-primary-foreground mb-4"
            />
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              NIST 800-207 • DoD Zero Trust
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Zero Trust Architecture
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Implement modern Zero Trust security framework with micro-segmentation, continuous verification, and least-privilege access controls. Thalen Technologies delivers NIST 800-207 and DoD Zero Trust Reference Architecture implementations for federal agencies eliminating implicit trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Zero Trust Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Zero Trust Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Trust Pillars */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Six Pillars of Zero Trust</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive Zero Trust implementation across identity, devices, networks, data, applications, and visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ztPillars.map((pillar, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors hover:shadow-xl">
                <CardContent className="p-8">
                  <pillar.icon className="h-16 w-16 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-6">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Zero Trust Implementation Roadmap</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Phased approach to Zero Trust adoption minimizing disruption while maximizing security improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {implementationPhases.map((phase, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{phase.phase}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{phase.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3 text-sm">Key Deliverables:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="h-2 w-2 bg-accent rounded-full mr-2"></div>
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Trust Frameworks */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Zero Trust Frameworks & Standards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Implementation aligned with federal and industry Zero Trust frameworks and best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ztFrameworks.map((framework, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-accent">
                <CardContent className="p-6 text-center">
                  <Shield className="h-10 w-10 text-accent mx-auto mb-3" />
                  <div className="font-semibold text-sm">{framework}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Zero Trust Security Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable security improvements from Zero Trust architecture implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: '90%', label: 'Reduction in Lateral Movement' },
              { metric: '80%', label: 'Faster Breach Detection' },
              { metric: '70%', label: 'Reduced Attack Surface' },
              { metric: '100%', label: 'NIST 800-207 Alignment' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">{item.metric}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Implement Zero Trust Security</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a Zero Trust assessment and discover how Thalen Technologies can help you eliminate implicit trust and implement modern security architecture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Zero Trust Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Zero Trust Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
