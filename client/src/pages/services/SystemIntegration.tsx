import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, GitBranch, Shield, Zap, Database, Cloud, Lock, Users, Award, Globe } from 'lucide-react';

export default function SystemIntegration() {
  // Primary service offerings (reduced to 4 core capabilities)
  const primaryServices = [
    {
      icon: GitBranch,
      title: 'FedRAMP & StateRAMP Platform Integration',
      description: 'We help agencies connect multiple FedRAMP and StateRAMP-authorized platforms (Salesforce Government Cloud, ServiceNow, Workday, etc.) with secure APIs and unified data flows.',
      benefits: ['50+ FedRAMP platform connectors', 'ATO-compliant API gateways', 'Real-time data synchronization'],
      link: '/services/fedramp-integration'
    },
    {
      icon: Database,
      title: 'Legacy System Modernization',
      description: 'We help agencies integrate mainframe, COBOL, and legacy databases with modern FedRAMP and StateRAMP platforms using secure adapters, APIs, and middleware.',
      benefits: ['Zero business disruption', 'Bidirectional data sync', 'Compliance-ready architecture'],
      link: '/services/legacy-integration'
    },
    {
      icon: Cloud,
      title: 'Hybrid Cloud Integration',
      description: 'We help agencies connect on-premise systems with FedRAMP and StateRAMP cloud platforms through secure tunnels, VPNs, and hybrid architecture patterns.',
      benefits: ['Multi-cloud orchestration', 'Secure hybrid connectivity', 'Workload portability'],
      link: '/services/hybrid-cloud'
    },
    {
      icon: Shield,
      title: 'API Security & Management',
      description: 'We help agencies design and implement secure API gateways with authentication, rate limiting, encryption, and comprehensive monitoring for government workloads.',
      benefits: ['OAuth 2.0 / SAML implementation', 'API threat protection', 'Compliance logging'],
      link: '/services/api-security'
    }
  ];

  // Additional capabilities (compact list format)
  const additionalCapabilities = [
    { name: 'Enterprise Service Bus (ESB) Implementation', description: 'Message queuing and event-driven architecture for complex integrations' },
    { name: 'Data Integration & ETL Pipelines', description: 'Automated data transformation and synchronization across systems' },
    { name: 'Microservices Architecture', description: 'Build scalable, maintainable integrations using modern patterns' },
    { name: 'Integration Platform as a Service (iPaaS)', description: 'Deploy and manage integrations on FedRAMP and StateRAMP-authorized platforms' }
  ];

  const keyDifferentiators = [
    {
      icon: Globe,
      title: 'Multi-Vendor Integration Expertise',
      description: 'We integrate 50+ FedRAMP and StateRAMP platforms including Salesforce Gov Cloud, ServiceNow, Workday, Adobe, and dozens of specialized government SaaS solutions.'
    },
    {
      icon: Users,
      title: 'Vendor-Neutral Architecture',
      description: 'We design integration architectures that avoid vendor lock-in, ensuring you can swap platforms without rebuilding your entire integration layer.'
    },
    {
      icon: Award,
      title: 'ATO-Ready Integration Patterns',
      description: 'All integration designs include security controls documentation, API security assessments, and data flow diagrams ready for ATO packages.'
    }
  ];

  const governmentExperience = [
    { agency: 'Federal Civilian Agencies', projects: '20+ integration projects', clearance: 'Public Trust' },
    { agency: 'Department of Defense', projects: '12 multi-system integrations', clearance: 'Secret' },
    { agency: 'State & Local Government', projects: '30+ system integration projects', clearance: 'N/A' }
  ];

  const fedrampIntegrations = [
    { 
      category: 'CRM & Case Management', 
      platforms: ['Salesforce Government Cloud', 'Microsoft Dynamics 365 Government', 'ServiceNow Government'],
      useCase: 'Citizen services, case tracking, constituent management'
    },
    { 
      category: 'HR & Financial Systems', 
      platforms: ['Workday Government Cloud', 'Oracle Cloud Government', 'SAP NS2'],
      useCase: 'Employee management, payroll, financial operations'
    },
    { 
      category: 'Collaboration & Productivity', 
      platforms: ['Microsoft 365 GCC High', 'Google Workspace Government', 'Slack Government'],
      useCase: 'Team collaboration, document management, communication'
    },
    { 
      category: 'Security & Compliance', 
      platforms: ['Splunk Cloud Government', 'Palo Alto Prisma Cloud', 'Tenable Cloud Government'],
      useCase: 'SIEM, threat detection, vulnerability management'
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Government Systems Integration & Interoperability
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We integrate multiple FedRAMP and StateRAMP-authorized platforms, legacy government systems, and agency-specific applications with secure APIs and compliant data flows. Vendor-neutral consulting that breaks down data silos.
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

      {/* Key Differentiators */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Agencies Choose Thalen Technologies for Integration</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not a platform vendor—we're integration specialists who make your chosen FedRAMP platforms work together seamlessly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-8">
                    <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Integration Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From FedRAMP platform integration to legacy system modernization
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {primaryServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-colors group">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={service.link}>
                      <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Capabilities */}
          <div className="bg-background rounded-lg p-8 border-2">
            <h3 className="text-2xl font-bold mb-6">Additional Integration Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <div key={index} className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">{capability.name}</div>
                    <div className="text-sm text-muted-foreground">{capability.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Experience */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Government Integration Experience</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by federal, state, and local agencies for mission-critical integrations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {governmentExperience.map((exp, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">{exp.agency}</h3>
                    <p className="text-2xl font-bold text-accent mb-2">{exp.projects}</p>
                    <div className="inline-block bg-secondary px-3 py-1 rounded-full text-sm">
                      Clearance: {exp.clearance}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FedRAMP Platform Integration Expertise */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">FedRAMP & StateRAMP Platform Integration Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've integrated 50+ FedRAMP and StateRAMP-authorized platforms across every category
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {fedrampIntegrations.map((integration, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <Cloud className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{integration.category}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{integration.useCase}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {integration.platforms.map((platform, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                        <span>{platform}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Connect Your Systems?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our integration specialists can help you design and implement secure, compliant integrations across your entire technology stack.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Integration Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contract-vehicle-comparison">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Compare Contract Vehicles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
