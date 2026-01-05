import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Server, Cloud, Shield, Zap, Database, TrendingDown, Award, CheckSquare } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function LegacyModernizationDT() {
  const modernizationCapabilities = [
    {
      icon: Cloud,
      title: 'Cloud Migration Strategy',
      description: 'We help agencies migrate legacy applications to FedRAMP and StateRAMP cloud platforms using the optimal approach (rehost, replatform, refactor, or rebuild) based on business needs.',
      benefits: ['Migration strategy assessment', 'Cloud platform selection', 'Phased migration roadmap', 'Zero downtime cutover']
    },
    {
      icon: Database,
      title: 'Data Migration & Validation',
      description: 'We design and execute data migration strategies with comprehensive validation, cleansing, and integrity checks to ensure accurate data transfer.',
      benefits: ['Data profiling & cleansing', 'Migration testing', 'Integrity validation', 'Rollback procedures']
    },
    {
      icon: Shield,
      title: 'Security & Compliance Modernization',
      description: 'We implement modern security controls (zero trust, encryption, IAM) and ensure compliance with FedRAMP, StateRAMP, and FISMA requirements.',
      benefits: ['Zero trust architecture', 'Encryption implementation', 'IAM modernization', 'Compliance validation']
    },
    {
      icon: TrendingDown,
      title: 'Cost Optimization',
      description: 'We analyze legacy system costs and design modern architectures that reduce operational expenses by 40-60% through cloud efficiencies and automation.',
      benefits: ['TCO analysis', 'Cost modeling', 'Resource optimization', 'Savings tracking']
    }
  ];

  const modernizationApproaches = [
    {
      approach: 'Rehost (Lift & Shift)',
      description: 'Move applications to cloud infrastructure with minimal changes',
      timeline: '2-4 months',
      effort: 'Low',
      bestFor: 'Quick cloud migration, time-sensitive projects, minimal business logic changes'
    },
    {
      approach: 'Replatform',
      description: 'Make targeted optimizations to leverage cloud capabilities',
      timeline: '4-6 months',
      effort: 'Medium',
      bestFor: 'Moderate modernization, cloud-native features, improved performance'
    },
    {
      approach: 'Refactor',
      description: 'Restructure code to improve performance and maintainability',
      timeline: '6-12 months',
      effort: 'High',
      bestFor: 'Applications needing significant optimization, technical debt reduction'
    },
    {
      approach: 'Rebuild',
      description: 'Redesign using modern patterns (microservices, cloud-native)',
      timeline: '12-24 months',
      effort: 'Very High',
      bestFor: 'Complete transformation, modern user experience, scalability requirements'
    }
  ];

  const legacySystemTypes = [
    { system: 'Mainframe Applications', description: 'COBOL, PL/I, JCL applications on IBM z/OS or AS/400 systems' },
    { system: 'Legacy Databases', description: 'Oracle 9i/10g/11g, SQL Server 2008/2012, DB2 for z/OS' },
    { system: 'Client-Server Applications', description: 'Windows/Unix applications with proprietary protocols' },
    { system: 'On-Premise ERP Systems', description: 'Older versions of SAP, Oracle, PeopleSoft, or custom ERP' },
    { system: 'Legacy Web Applications', description: 'Applications built on outdated frameworks or languages' },
    { system: 'File-Based Systems', description: 'FTP/SFTP file transfers, batch processing, flat files' }
  ];

  const migrationPhases = [
    { phase: '1. Assessment & Planning', description: 'Inventory legacy systems, assess modernization readiness, develop migration strategy' },
    { phase: '2. Proof of Concept', description: 'Pilot migration of low-risk application to validate approach and identify risks' },
    { phase: '3. Data Migration', description: 'Extract, transform, and load data with comprehensive validation and testing' },
    { phase: '4. Application Migration', description: 'Migrate applications using selected approach (rehost, replatform, refactor, rebuild)' },
    { phase: '5. Testing & Validation', description: 'End-to-end testing, performance testing, security testing, user acceptance testing' },
    { phase: '6. Cutover & Go-Live', description: 'Production cutover with rollback procedures and post-go-live support' }
  ];

  const riskMitigation = [
    { risk: 'Business Disruption', mitigation: 'Phased migration approach with parallel operations and rollback procedures' },
    { risk: 'Data Loss or Corruption', mitigation: 'Comprehensive backups, validation checks, and integrity testing at every stage' },
    { risk: 'Performance Degradation', mitigation: 'Performance testing in staging environments before production deployment' },
    { risk: 'Security Vulnerabilities', mitigation: 'Security assessments, penetration testing, and compliance validation' },
    { risk: 'User Resistance', mitigation: 'Change management, training programs, and executive sponsorship' },
    { risk: 'Cost Overruns', mitigation: 'Detailed cost modeling, contingency planning, and continuous budget tracking' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/legacy-modernization-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 via-[#0A2540]/80 to-[#12344D]/75"></div>
        <div className="container relative">
          <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Services', href: '/consulting-services' },
                  { label: 'Digital Transformation', href: '/services/digital-transformation' },
                  { label: 'Legacy Modernization' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="max-w-4xl">
            <Link href="/services/digital-transformation">
              <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
                ← Back to IT Modernization
              </Button>
            </Link>
            <div className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Legacy Modernization
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Legacy System Modernization
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We help agencies migrate from mainframe and legacy systems to modern FedRAMP and StateRAMP cloud platforms with zero business disruption, comprehensive change management, and 40-60% cost reduction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Start Modernization Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/capability-generator">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  Generate Capability Statement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modernization Capabilities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Legacy Modernization Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive modernization services for mainframe, legacy databases, and aging applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {modernizationCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                        <p className="text-muted-foreground mb-4">{capability.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modernization Approaches */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Modernization Approaches</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We select the optimal modernization approach based on your business needs and timeline
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {modernizationApproaches.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-3">{item.approach}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-semibold mb-1">Timeline:</div>
                      <div className="text-sm text-muted-foreground">{item.timeline}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1">Effort:</div>
                      <div className="text-sm text-muted-foreground">{item.effort}</div>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="text-sm font-semibold mb-1">Best For:</div>
                    <div className="text-sm text-muted-foreground">{item.bestFor}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy System Types */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Legacy Systems We Modernize</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We have deep expertise modernizing mainframes, legacy databases, and aging applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {legacySystemTypes.map((item, index) => (
              <div key={index} className="flex gap-3 p-6 bg-secondary rounded-lg border-2 border-border">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">{item.system}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Phases */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Migration Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured 6-phase process ensures successful legacy system modernization
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {migrationPhases.map((item, index) => (
              <div key={index} className="flex gap-3 p-6 bg-background rounded-lg border-2 border-border">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">{item.phase}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Risk Mitigation Strategies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We proactively address common modernization risks with proven mitigation strategies
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {riskMitigation.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3">
                    <div className="font-semibold mb-1">Risk: {item.risk}</div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">Mitigation:</span> {item.mitigation}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Legacy Systems?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our legacy modernization specialists can help you migrate to modern cloud platforms with zero business disruption and significant cost savings.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Schedule Modernization Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/digital-transformation">
                <Button size="lg" variant="outline">
                  View All Modernization Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
