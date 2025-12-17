import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, GitBranch, Cloud, Shield, Zap, Database, Users, Award, FileCheck } from 'lucide-react';

export default function FedRAMPIntegration() {
  const integrationCapabilities = [
    {
      icon: GitBranch,
      title: 'Multi-Platform API Integration',
      description: 'We help agencies connect 50+ FedRAMP and StateRAMP platforms through standardized REST APIs, webhooks, and event-driven architectures with real-time data synchronization.',
      benefits: ['Bi-directional data sync', 'Event-driven workflows', 'Real-time updates', 'Error handling & retry logic']
    },
    {
      icon: Shield,
      title: 'Secure Integration Patterns',
      description: 'We implement OAuth 2.0, SAML, API keys, and certificate-based authentication with encryption in transit and at rest for all data flows between platforms.',
      benefits: ['OAuth 2.0 / SAML authentication', 'TLS 1.2+ encryption', 'API key rotation', 'Audit logging']
    },
    {
      icon: Database,
      title: 'Data Transformation & Mapping',
      description: 'We design data mapping logic that transforms data formats between platforms while maintaining data integrity, validation rules, and compliance requirements.',
      benefits: ['Schema mapping', 'Data validation', 'Format transformation', 'Duplicate detection']
    },
    {
      icon: Zap,
      title: 'Integration Monitoring & Management',
      description: 'We implement comprehensive monitoring dashboards with alerting, performance metrics, error tracking, and automated recovery for all integration workflows.',
      benefits: ['Real-time monitoring', 'Error alerting', 'Performance metrics', 'Automated recovery']
    }
  ];

  const platformCategories = [
    {
      category: 'CRM & Case Management',
      platforms: [
        { name: 'Salesforce Government Cloud', description: 'Citizen services, case tracking, constituent relationship management' },
        { name: 'Microsoft Dynamics 365 Government', description: 'Customer engagement, field service, case management' },
        { name: 'ServiceNow Government', description: 'IT service management, workflow automation, incident tracking' }
      ]
    },
    {
      category: 'HR & Financial Systems',
      platforms: [
        { name: 'Workday Government Cloud', description: 'Human capital management, payroll, financial planning' },
        { name: 'Oracle Cloud Government', description: 'ERP, financial management, procurement' },
        { name: 'SAP NS2', description: 'Enterprise resource planning, supply chain management' }
      ]
    },
    {
      category: 'Collaboration & Productivity',
      platforms: [
        { name: 'Microsoft 365 GCC High', description: 'Email, document collaboration, team communication' },
        { name: 'Google Workspace Government', description: 'Cloud productivity, document management, video conferencing' },
        { name: 'Slack Government', description: 'Team messaging, workflow automation, app integrations' }
      ]
    },
    {
      category: 'Security & Compliance',
      platforms: [
        { name: 'Splunk Cloud Government', description: 'SIEM, log aggregation, security analytics' },
        { name: 'Palo Alto Prisma Cloud', description: 'Cloud security posture management, threat detection' },
        { name: 'Tenable Cloud Government', description: 'Vulnerability management, compliance scanning' }
      ]
    }
  ];

  const integrationPatterns = [
    { name: 'Point-to-Point Integration', description: 'Direct API connections between two platforms for simple use cases' },
    { name: 'Hub-and-Spoke Architecture', description: 'Central integration hub that connects multiple platforms through a unified layer' },
    { name: 'Event-Driven Integration', description: 'Real-time event streaming using message queues and pub/sub patterns' },
    { name: 'Batch Integration', description: 'Scheduled data synchronization for high-volume, non-real-time workflows' }
  ];

  const complianceFeatures = [
    { name: 'ATO Documentation Support', description: 'Security controls documentation, data flow diagrams, and API security assessments ready for ATO packages' },
    { name: 'FedRAMP & StateRAMP Compliance', description: 'All integration patterns follow FedRAMP and StateRAMP security requirements and authorization boundaries' },
    { name: 'Data Residency Controls', description: 'Ensure data remains within authorized cloud environments and complies with data sovereignty requirements' },
    { name: 'Audit Trail & Logging', description: 'Comprehensive logging of all API calls, data transformations, and system events for compliance audits' }
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
              Integration Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              FedRAMP & StateRAMP Platform Integration
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We help agencies connect multiple FedRAMP and StateRAMP-authorized platforms with secure APIs, unified data flows, and compliant integration patterns. Break down data silos while maintaining security controls.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Start Integration Project
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

      {/* Integration Capabilities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Integration Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive integration services for connecting FedRAMP and StateRAMP platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {integrationCapabilities.map((capability, index) => {
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

      {/* Platform Categories */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Supported FedRAMP & StateRAMP Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We integrate 50+ authorized platforms across every government technology category
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {platformCategories.map((category, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <Cloud className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                      <div className="space-y-4">
                        {category.platforms.map((platform, idx) => (
                          <div key={idx} className="border-l-2 border-border pl-4">
                            <div className="font-semibold mb-1">{platform.name}</div>
                            <div className="text-sm text-muted-foreground">{platform.description}</div>
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

      {/* Integration Patterns */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Integration Architecture Patterns</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We design integration architectures tailored to your agency's specific requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {integrationPatterns.map((pattern, index) => (
              <div key={index} className="flex gap-3 p-6 bg-secondary rounded-lg border-2 border-border">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">{pattern.name}</div>
                  <div className="text-sm text-muted-foreground">{pattern.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compliance & Security Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All integration implementations include comprehensive security controls and compliance documentation
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

      {/* Compliance Program CTAs */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore Our Compliance Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn more about our specialized FedRAMP and StateRAMP implementation services
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">FedRAMP Implementation</h3>
                    <p className="text-muted-foreground mb-6">
                      Comprehensive FedRAMP authorization services for federal agencies. From readiness assessments to ATO support, we guide you through every step of the federal authorization process.
                    </p>
                    <Link href="/compliance/fedramp">
                      <Button className="bg-orange-gradient hover:opacity-90">
                        Learn About FedRAMP Services
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">StateRAMP Implementation</h3>
                    <p className="text-muted-foreground mb-6">
                      Specialized StateRAMP/GovRAMP authorization services for state, local, and tribal governments. We help you achieve authorization for government cloud services at the state level.
                    </p>
                    <Link href="/compliance/stateramp">
                      <Button className="bg-orange-gradient hover:opacity-90">
                        Learn About StateRAMP Services
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Connect Your Platforms?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our integration specialists can help you design and implement secure, compliant integrations between your FedRAMP and StateRAMP platforms.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Schedule Integration Consultation
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
