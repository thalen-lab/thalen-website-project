import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function LegacyIntegration() {
  const modernizationCapabilities = [
    {
      title: 'Mainframe & Legacy Database Integration',
      description: 'We help agencies connect mainframe systems (IBM z/OS, AS/400), COBOL applications, and legacy databases (DB2, Oracle, SQL Server) to modern FedRAMP and StateRAMP platforms.',
      benefits: ['COBOL/RPG application integration', 'Mainframe data extraction', 'Legacy database connectors', 'Zero downtime migration']
    },
    {
      title: 'API Wrapper Development',
      description: 'We build secure API wrappers around legacy systems that expose modern REST/GraphQL interfaces while maintaining existing business logic and data validation rules.',
      benefits: ['RESTful API design', 'GraphQL endpoints', 'Legacy logic preservation', 'Versioned API contracts']
    },
    {
      title: 'Secure Data Synchronization',
      description: 'We implement bi-directional data synchronization between legacy systems and modern platforms with encryption, validation, and comprehensive audit trails.',
      benefits: ['Real-time & batch sync', 'Data validation rules', 'Conflict resolution', 'Audit logging']
    },
    {
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/services/system-integration/hero-legacy-modernization.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/80"></div>
        <div className="container relative">
          <div className="max-w-4xl">
            <Link href="/services/system-integration">
              <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
                ← Back to Systems Integration
              </Button>
            </Link>
            <div className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-6">
              Legacy Modernization
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Legacy System Modernization & Integration
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We help agencies integrate mainframe, COBOL, and legacy databases with modern FedRAMP and StateRAMP platforms using secure adapters, APIs, and middleware—without disrupting existing operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Start Modernization Project
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
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Capabilities</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Legacy System Integration Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Connect decades-old systems to modern cloud platforms without business disruption
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {modernizationCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl h-full">
                  <CardContent className="pt-8">
                    <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{capability.title}</h3>
                    <p className="text-slate-600 mb-4">{capability.description}</p>
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy System Types */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Supported Systems</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Legacy Systems We Integrate</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We have deep expertise integrating mainframes, legacy databases, and custom applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {legacySystemTypes.map((category, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{category.category}</h3>
                  <div className="space-y-4">
                    {category.systems.map((system, idx) => (
                      <div key={idx} className="border-l-2 border-slate-200 pl-4">
                        <div className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">{system.name}</div>
                        <div className="text-sm text-slate-600">{system.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Approaches */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Approach</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Integration & Modernization Approaches</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We use proven patterns to modernize legacy systems without risky "big bang" migrations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {integrationApproaches.map((approach, index) => (
              <div key={index} className="flex items-start gap-3 p-6 bg-[oklch(0.97_0.01_250)] rounded-lg border-2 border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                <div>
                  <div className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">{approach.name}</div>
                  <div className="text-sm text-slate-600">{approach.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Quality Assurance</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Risk Mitigation & Quality Assurance</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We eliminate the risks typically associated with legacy system integration projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {riskMitigation.map((risk, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <div>
                      <div className="font-semibold mb-2 text-[oklch(0.20_0.05_250)]">{risk.name}</div>
                      <div className="text-sm text-slate-600">{risk.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Security First</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Security & Compliance</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              All legacy integrations meet FedRAMP, StateRAMP, and FISMA security requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <div>
                      <div className="font-semibold mb-2 text-[oklch(0.20_0.05_250)]">{feature.name}</div>
                      <div className="text-sm text-slate-600">{feature.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Legacy Systems?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our legacy integration specialists can help you connect mainframe and legacy systems to modern cloud platforms without disrupting operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Schedule Modernization Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/system-integration">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
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
