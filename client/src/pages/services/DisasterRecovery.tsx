import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, CheckCircle2, RefreshCw, Shield, Clock, Database, AlertTriangle, Server, Cloud, Lock, Code } from 'lucide-react';

export default function DisasterRecovery() {
  const benefits = [
    {
      icon: Clock,
      title: '< 15 Min RTO Guaranteed',
      description: 'Recovery Time Objective (RTO) under 15 minutes for mission-critical systems with automated failover and tested recovery procedures.'
    },
    {
      icon: Database,
      title: 'Geo-Redundant Backups',
      description: 'Multi-region backup replication across AWS, Azure, and Google Cloud with automated verification and compliance documentation.'
    },
    {
      icon: Shield,
      title: 'FedRAMP-Compliant DR',
      description: 'Disaster recovery architecture meeting FedRAMP High requirements with continuous monitoring and federal continuity standards.'
    }
  ];

  const drCapabilities = [
    {
      title: 'Automated Failover',
      icon: RefreshCw,
      description: 'Intelligent traffic routing and automated failover across cloud providers and regions ensuring continuous availability.',
      features: [
        'Health monitoring and automated detection',
        'DNS-based traffic routing',
        'Application-level failover',
        'Database replication and sync'
      ]
    },
    {
      title: 'Backup & Recovery',
      icon: Database,
      description: 'Automated backup with point-in-time recovery, geo-redundant storage, and compliance-ready retention policies.',
      features: [
        'Automated backup scheduling',
        'Point-in-time recovery (PITR)',
        'Cross-region replication',
        'Backup verification testing'
      ]
    },
    {
      title: 'Business Continuity',
      icon: Server,
      description: 'Comprehensive business continuity planning with documented procedures, regular testing, and compliance validation.',
      features: [
        'Business impact analysis (BIA)',
        'Recovery procedure documentation',
        'Regular DR testing and drills',
        'Compliance reporting'
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Lock,
      description: 'Encrypted backups, access controls, and audit trails meeting federal security and privacy requirements.',
      features: [
        'Encryption at rest and in transit',
        'Role-based access control',
        'Audit logging and monitoring',
        'Compliance documentation'
      ]
    }
  ];

  const drStrategies = [
    {
      title: 'Hot Standby (Active-Active)',
      rto: '< 1 minute',
      rpo: 'Near-zero',
      description: 'Fully redundant infrastructure running in multiple regions with real-time synchronization for mission-critical systems.',
      useCase: 'Mission-critical systems requiring continuous availability'
    },
    {
      title: 'Warm Standby (Active-Passive)',
      rto: '< 15 minutes',
      rpo: '< 5 minutes',
      description: 'Scaled-down infrastructure in secondary region with automated scaling and failover for rapid recovery.',
      useCase: 'Production systems with moderate recovery requirements'
    },
    {
      title: 'Cold Standby (Backup & Restore)',
      rto: '< 4 hours',
      rpo: '< 1 hour',
      description: 'Infrastructure-as-code templates and automated backup restoration for cost-effective disaster recovery.',
      useCase: 'Non-critical systems with flexible recovery timelines'
    }
  ];

  const complianceStandards = [
    'FedRAMP High', 'FISMA', 'NIST 800-34', 'DoD Continuity',
    'COOP Requirements', 'FEMA Guidelines', 'OMB Circular A-130'
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
            <span>Disaster Recovery & Business Continuity</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-semibold mb-4">
              &lt; 15 Min RTO • Geo-Redundant • FedRAMP-Compliant
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Disaster Recovery & Business Continuity
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Enterprise-grade DR solutions with automated failover, geo-redundant backups, and guaranteed RTOs meeting federal continuity requirements. NexDyne delivers disaster recovery architecture ensuring mission continuity with &lt; 15 minute recovery times and FedRAMP High compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request DR Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download DR Planning Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Disaster Recovery Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mission-critical disaster recovery capabilities ensuring operational continuity and federal compliance.
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

      {/* DR Capabilities */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive DR Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end disaster recovery capabilities from automated failover to business continuity planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {drCapabilities.map((capability, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <capability.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DR Strategies */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Disaster Recovery Strategies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored DR approaches based on your agency's recovery objectives, budget, and mission requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {drStrategies.map((strategy, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{strategy.title}</h3>
                    <AlertTriangle className="h-8 w-8 text-accent" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-accent/10 p-3 rounded">
                      <div className="text-xs text-muted-foreground mb-1">RTO</div>
                      <div className="text-lg font-bold text-accent">{strategy.rto}</div>
                    </div>
                    <div className="bg-accent/10 p-3 rounded">
                      <div className="text-xs text-muted-foreground mb-1">RPO</div>
                      <div className="text-lg font-bold text-accent">{strategy.rpo}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{strategy.description}</p>
                  <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                    <p className="text-xs font-medium">
                      <span className="text-accent font-semibold">Best for:</span> {strategy.useCase}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Federal Continuity Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Disaster recovery architecture meeting all federal continuity and resilience requirements.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <span key={index} className="bg-card border-2 border-border px-6 py-3 rounded-lg font-semibold hover:border-accent transition-colors">
                {standard}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Ensure Mission Continuity?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start with a comprehensive disaster recovery assessment and discover how NexDyne can deliver &lt; 15 minute RTOs with FedRAMP-compliant architecture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request DR Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View DR Case Studies
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Cloud Migration & Transition',
            description: 'Build disaster recovery capabilities into your cloud migration with automated failover and geo-redundancy.',
            href: '/services/cloud-migration',
            icon: Cloud
          },
          {
            title: 'Cloud Security & Compliance',
            description: 'Secure backup encryption, access controls, and compliance-ready recovery procedures for federal data.',
            href: '/services/cloud-security',
            icon: Lock
          },
          {
            title: 'Multi-Cloud Strategy & Management',
            description: 'Cross-cloud disaster recovery with failover between AWS, Azure, and GCP for maximum resilience.',
            href: '/services/multi-cloud',
            icon: Server
          }
        ]}
        title="Comprehensive Business Continuity"
        description="Integrate disaster recovery with migration, security, and multi-cloud strategies for mission-critical resilience."
      />

      <Footer />
    </div>
  );
}
