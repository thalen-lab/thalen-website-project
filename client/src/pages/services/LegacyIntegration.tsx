import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Database, Shield, Zap, GitBranch, Server, Cloud, FileCode, Lock } from 'lucide-react';

export default function LegacyIntegration() {
  const modernizationCapabilities = [
    {
      icon: Database,
      title: 'Mainframe & Legacy Database Integration',
      description: 'We help agencies connect mainframe systems (IBM z/OS, AS/400), COBOL applications, and legacy databases (DB2, Oracle, SQL Server) to modern FedRAMP and StateRAMP platforms.',
      benefits: ['COBOL/RPG application integration', 'Mainframe data extraction', 'Legacy database connectors', 'Zero downtime migration']
    },
    {
      icon: GitBranch,
      title: 'API Wrapper Development',
      description: 'We build secure API wrappers around legacy systems that expose modern REST/GraphQL interfaces while maintaining existing business logic and data validation rules.',
      benefits: ['RESTful API design', 'GraphQL endpoints', 'Legacy logic preservation', 'Versioned API contracts']
    },
    {
      icon: Shield,
      title: 'Secure Data Synchronization',
      description: 'We implement bi-directional data synchronization between legacy systems and modern platforms with encryption, validation, and comprehensive audit trails.',
      benefits: ['Real-time & batch sync', 'Data validation rules', 'Conflict resolution', 'Audit logging']
    },
    {
      icon: Zap,
      title: 'Middleware & Adapter Development',
      description: 'We develop custom middleware and adapters that translate between legacy protocols (CICS, MQ Series, SOAP) and modern integration standards (REST, gRPC, Kafka).',
      benefits: ['Protocol translation', 'Message transformation', 'Error handling', 'Performance optimization']
    }
  ];

  const legacySystemTypes = [
    {
      category: 'Mainframe Systems',
      systems: [
        { name: 'IBM z/OS Mainframes', description: 'COBOL, PL/I, and JCL applications running on z/OS with CICS and DB2' },
        { name: 'IBM AS/400 (iSeries)', description: 'RPG and COBOL programs with DB2/400 databases' },
        { name: 'Unisys ClearPath', description: 'Legacy mainframe applications and databases' }
      ]
    },
    {
      category: 'Legacy Databases',
      systems: [
        { name: 'Oracle 9i/10g/11g', description: 'Older Oracle database versions requiring modernization' },
        { name: 'Microsoft SQL Server 2008/2012', description: 'Legacy SQL Server instances with critical data' },
        { name: 'IBM DB2 for z/OS', description: 'Mainframe database systems with decades of data' }
      ]
    },
    {
      category: 'Legacy Protocols',
      systems: [
        { name: 'SOAP Web Services', description: 'Legacy SOAP/XML-based integrations requiring REST modernization' },
        { name: 'IBM MQ Series', description: 'Message queue systems requiring modern event streaming' },
        { name: 'FTP/SFTP File Transfers', description: 'Batch file transfers requiring API-based alternatives' }
      ]
    },
    {
      category: 'Custom Applications',
      systems: [
        { name: 'Client-Server Applications', description: 'Legacy Windows/Unix applications with proprietary protocols' },
        { name: 'On-Premise ERP Systems', description: 'Older versions of SAP, Oracle, PeopleSoft requiring cloud integration' },
        { name: 'Custom COBOL/RPG Programs', description: 'Agency-specific business logic requiring preservation' }
      ]
    }
  ];

  const integrationApproaches = [
    { name: 'Strangler Fig Pattern', description: 'Gradually replace legacy functionality with modern services while maintaining existing interfaces' },
    { name: 'API Gateway Pattern', description: 'Create a unified API layer that abstracts legacy system complexity from modern applications' },
    { name: 'Change Data Capture (CDC)', description: 'Real-time data replication from legacy databases to modern data platforms' },
    { name: 'Event-Driven Integration', description: 'Convert legacy batch processes to real-time event streams using message queues' }
  ];

  const riskMitigation = [
    { name: 'Zero Business Disruption', description: 'All integrations run in parallel with existing systems—no cutover risk or downtime' },
    { name: 'Data Integrity Validation', description: 'Automated validation ensures data accuracy between legacy and modern systems' },
    { name: 'Rollback Capabilities', description: 'Every integration includes rollback procedures and fallback mechanisms' },
    { name: 'Comprehensive Testing', description: 'End-to-end testing in staging environments before production deployment' }
  ];

  const complianceFeatures = [
    { name: 'FedRAMP & StateRAMP Compliance', description: 'All integration patterns follow FedRAMP and StateRAMP security requirements for legacy system connections' },
    { name: 'Data Encryption', description: 'TLS 1.2+ encryption for data in transit and AES-256 encryption for data at rest' },
    { name: 'Access Controls', description: 'Role-based access controls (RBAC) and least-privilege principles for all integrations' },
    { name: 'Audit Trails', description: 'Comprehensive logging of all data access, transformations, and system events' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <Link href="/services/system-integration">
              <Button variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
                ← Back to Systems Integration
              </Button>
            </Link>
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Legacy Modernization
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Legacy System Modernization & Integration
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We help agencies integrate mainframe, COBOL, and legacy databases with modern FedRAMP and StateRAMP platforms using secure adapters, APIs, and middleware—without disrupting existing operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Start Modernization Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/capability-generator">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
            <h2 className="text-4xl font-bold mb-4">Legacy System Integration Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect decades-old systems to modern cloud platforms without business disruption
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

      {/* Legacy System Types */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Legacy Systems We Integrate</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We have deep expertise integrating mainframes, legacy databases, and custom applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {legacySystemTypes.map((category, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <Server className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                      <div className="space-y-4">
                        {category.systems.map((system, idx) => (
                          <div key={idx} className="border-l-2 border-border pl-4">
                            <div className="font-semibold mb-1">{system.name}</div>
                            <div className="text-sm text-muted-foreground">{system.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Approaches */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Integration & Modernization Approaches</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use proven patterns to modernize legacy systems without risky "big bang" migrations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {integrationApproaches.map((approach, index) => (
              <div key={index} className="flex gap-3 p-6 bg-secondary rounded-lg border-2 border-border">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">{approach.name}</div>
                  <div className="text-sm text-muted-foreground">{approach.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Risk Mitigation & Quality Assurance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We eliminate the risks typically associated with legacy system integration projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {riskMitigation.map((risk, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-2">{risk.name}</div>
                      <div className="text-sm text-muted-foreground">{risk.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Security & Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All legacy integrations meet FedRAMP, StateRAMP, and FISMA security requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-2">{feature.name}</div>
                      <div className="text-sm text-muted-foreground">{feature.description}</div>
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
              Our legacy integration specialists can help you connect mainframe and legacy systems to modern cloud platforms without disrupting operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Schedule Modernization Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/system-integration">
                <Button size="lg" variant="outline">
                  View All Integration Services
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
