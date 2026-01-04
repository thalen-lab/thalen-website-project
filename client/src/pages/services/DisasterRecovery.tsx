import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight } from 'lucide-react';

export default function DisasterRecovery() {
  const benefits = [
    {
      title: '< 15 Min RTO Guaranteed',
      description: 'Recovery Time Objective (RTO) under 15 minutes for mission-critical systems with automated failover and tested recovery procedures.'
    },
    {
      title: 'Geo-Redundant Backups',
      description: 'Multi-region backup replication across AWS, Azure, and Google Cloud with automated verification and compliance documentation.'
    },
    {
      title: 'FedRAMP-Compliant DR',
      description: 'Disaster recovery architecture meeting FedRAMP High requirements with continuous monitoring and government continuity standards.'
    }
  ];

  const drCapabilities = [
    {
      title: 'Automated Failover',
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
      description: 'Encrypted backups, access controls, and audit trails meeting government security and privacy requirements.',
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/pattern-dark.svg" alt="background pattern" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        </div>
        <div className="container relative z-10">
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/services/cloud" className="hover:text-[oklch(0.75_0.15_55)]">Cloud Infrastructure & Modernization</Link>
            <span className="mx-2">/</span>
            <span>Disaster Recovery & Business Continuity</span>
          </nav>
          
          <div className="max-w-4xl">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              &lt; 15 Min RTO | Geo-Redundant | FedRAMP-Compliant
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Disaster Recovery & Business Continuity
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Enterprise-grade DR solutions with automated failover, geo-redundant backups, and guaranteed RTOs meeting government continuity requirements. NexDyne Technology delivers disaster recovery architecture ensuring mission continuity with &lt; 15 minute recovery times and FedRAMP/StateRAMP compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Request DR Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                Download DR Planning Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Key Benefits</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Enterprise Disaster Recovery Benefits</h2>
            <p className="text-xl text-slate-600">
              Mission-critical disaster recovery capabilities ensuring operational continuity and government compliance.
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
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DR Capabilities */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Comprehensive DR Capabilities</h2>
            <p className="text-xl text-slate-600">
              End-to-end disaster recovery capabilities from automated failover to business continuity planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {drCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{capability.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{capability.description}</p>
                  <ul className="space-y-3">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
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
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Recovery Strategies</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Disaster Recovery Strategies</h2>
            <p className="text-xl text-slate-600">
              Tailored DR approaches based on your agency's recovery objectives, budget, and mission requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {drStrategies.map((strategy, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full flex flex-col">
                <CardContent className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{strategy.title}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-[oklch(0.97_0.01_250)] p-3 rounded-lg">
                      <div className="text-xs text-slate-500 mb-1">RTO</div>
                      <div className="text-lg font-bold text-[oklch(0.20_0.05_250)]">{strategy.rto}</div>
                    </div>
                    <div className="bg-[oklch(0.97_0.01_250)] p-3 rounded-lg">
                      <div className="text-xs text-slate-500 mb-1">RPO</div>
                      <div className="text-lg font-bold text-[oklch(0.20_0.05_250)]">{strategy.rpo}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">{strategy.description}</p>
                  <div className="bg-[oklch(0.97_0.01_250)] p-3 rounded-lg mt-auto">
                    <p className="text-xs font-medium text-slate-600">
                      <span className="font-semibold text-[oklch(0.20_0.05_250)]">Best for:</span> {strategy.useCase}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Compliance Focus</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Federal Continuity Compliance</h2>
            <p className="text-xl text-slate-600">
              Disaster recovery architecture meeting all government continuity and resilience requirements (federal, state, local).
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <span key={index} className="bg-white border-2 border-slate-200 px-5 py-2 rounded-full font-semibold text-slate-600 hover:border-[oklch(0.70_0.18_55)] transition-colors text-sm">
                {standard}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Ensure Mission Continuity?</h2>
          <p className="text-xl text-white/90 mb-8">
            Start with a comprehensive disaster recovery assessment and discover how NexDyne Technology can deliver &lt; 15 minute RTOs with FedRAMP-compliant architecture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Request DR Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
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
          },
          {
            title: 'Cloud Security & Compliance',
            description: 'Secure backup encryption, access controls, and compliance-ready recovery procedures for government data.',
            href: '/services/cloud-security',
          },
          {
            title: 'Multi-Cloud Strategy & Management',
            description: 'Cross-cloud disaster recovery with failover between AWS, Azure, and GCP for maximum resilience.',
            href: '/services/multi-cloud',
          }
        ]}
        title="Comprehensive Business Continuity"
        description="Integrate disaster recovery with migration, security, and multi-cloud strategies for mission-critical resilience."
      />

      <Footer />
    </div>
  );
}
