import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, CheckCircle2, Network, Zap, Shield, Database, Cloud, Lock, GitBranch, Code, Bot, Workflow, GitMerge, Server } from 'lucide-react';

export default function Integration() {
  const capabilities = [
    {
      icon: Cloud,
      title: 'Hybrid Cloud Orchestration',
      description: 'Seamlessly connect on-premise legacy systems with modern cloud applications. Our FedRAMP High-authorized platform bridges the gap between your mainframe data and SaaS tools without compromising security.'
    },
    {
      icon: GitMerge,
      title: 'Real-Time Data Synchronization',
      description: 'Eliminate batch processing delays and manual reconciliation. Changes propagate across systems in seconds, not overnight, giving decision-makers access to current data when they need it most.'
    },
    {
      icon: Server,
      title: 'API-Free Integration',
      description: 'Connect systems that were never designed to talk to each other—no custom API development required. Works with COTS products, legacy applications, and everything in between.'
    }
  ];

  const integrationChallenges = [
    {
      title: 'Cross-Agency Information Sharing',
      description: 'Enable secure data exchange between federal, state, and local systems while maintaining strict access controls and audit trails. Perfect for law enforcement, emergency management, and interagency task forces.',
      icon: Network
    },
    {
      title: 'ERP & Financial System Unification',
      description: 'Connect your financial management system to procurement, HR, and project management tools. Eliminate duplicate data entry and ensure budget data flows automatically where it is needed.',
      icon: Database
    },
    {
      title: 'Citizen Service Portals',
      description: 'Integrate public-facing portals with back-office systems so citizens can check status, upload documents, and receive updates without manual intervention from your staff.',
      icon: Workflow
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <nav className="text-sm mb-6 opacity-80">
            <Link href="/services/automation" className="hover:text-accent">Intelligent Automation</Link>
            <span className="mx-2">/</span>
            <span>Enterprise Integration Platform</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-semibold mb-4">
              FedRAMP & StateRAMP Authorized • FIPS 140-2 Compliant
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise Integration Platform
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Your agency runs on dozens of disconnected systems. Financial data lives in one place, HR records in another, and mission-critical information is scattered across legacy mainframes and modern cloud apps. The result? Your team wastes hours manually transferring data, reconciling spreadsheets, and chasing down information. Thalen Technologies's integration platform connects everything—securely, automatically, and without expensive system replacements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Integration Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Integration Architecture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Integration Built for Government Complexity</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Government agencies (federal, state, and local) face integration challenges that commercial iPaaS vendors can't solve. We specialize in the hard problems—legacy systems, air-gapped networks, and strict compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-8">
                  <capability.icon className="h-14 w-14 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Integration Problem */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Government Integration Is Different</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Commercial integration platforms assume you're working with modern, API-enabled systems in a single cloud environment. That's not reality for government agencies (federal, state, and local). You're running mission-critical applications on mainframes from the 1980s alongside current AI tools. You have air-gapped networks, strict data residency requirements, and systems that were never designed to communicate.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Thalen Technologies's integration platform was purpose-built for this complexity. We connect AS/400 mainframes to Salesforce. We synchronize data across classified and unclassified networks. We integrate COTS products that don't have APIs. And we do it all while maintaining FedRAMP and StateRAMP authorization with full audit trails.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold mb-1">No System Left Behind</div>
                    <div className="text-sm text-muted-foreground">Connect legacy mainframes, COTS products, and modern SaaS—all through one platform</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold mb-1">Air-Gap Ready</div>
                    <div className="text-sm text-muted-foreground">Secure data transfer between classified and unclassified environments</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold mb-1">Compliance Automation</div>
                    <div className="text-sm text-muted-foreground">Automated FISMA reporting, continuous ATO monitoring, and audit-ready logs</div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Integration Challenges */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Common Integration Challenges We Solve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From defense contractors to civilian agencies, organizations trust Thalen Technologies to connect their most complex systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {integrationChallenges.map((challenge, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:border-accent transition-all duration-300 border-2">
                <CardContent className="p-8">
                  <div className="bg-muted rounded-lg p-4 w-fit mb-4">
                    <challenge.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-navy-gradient text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-sm opacity-80">Pre-built connectors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50%</div>
                  <div className="text-sm opacity-80">Reduction in manual data entry</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-sm opacity-80">Platform uptime SLA</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">60 Days</div>
                  <div className="text-sm opacity-80">Average integration timeline</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Thalen Technologies Approach */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The Thalen Technologies Integration Methodology</h2>
              <p className="text-xl text-muted-foreground">
                We don't just connect systems—we architect sustainable integration ecosystems.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-card border-2 border-border text-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">System Inventory & Data Flow Mapping</h3>
                      <p className="text-muted-foreground mb-3">We document every system in your environment, map current data flows (manual and automated), and identify integration pain points. You'll receive a comprehensive architecture diagram showing exactly how information moves through your organization today.</p>
                      <div className="text-sm font-semibold text-primary">Deliverable: Current State Architecture & Integration Gap Analysis</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-card border-2 border-border text-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Integration Architecture Design</h3>
                      <p className="text-muted-foreground mb-3">We design a future-state architecture that connects your systems through our FedRAMP-authorized platform. This includes data transformation rules, security controls, error handling, and scalability planning. Every integration is documented and approved before implementation.</p>
                      <div className="text-sm font-semibold text-primary">Deliverable: Target Architecture Blueprint & Security Plan</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-card border-2 border-border text-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Phased Implementation & Testing</h3>
                      <p className="text-muted-foreground mb-3">We implement integrations in priority order, starting with your highest-impact data flows. Each integration is thoroughly tested in a sandbox environment before production deployment. Your team validates data accuracy at every step.</p>
                      <div className="text-sm font-semibold text-primary">Deliverable: Production integrations with full test documentation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-card border-2 border-border text-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Monitoring & Continuous Optimization</h3>
                      <p className="text-muted-foreground mb-3">Once live, you gain access to real-time monitoring dashboards showing data flow health, error rates, and performance metrics. We continuously optimize integrations based on usage patterns and provide quarterly architecture reviews.</p>
                      <div className="text-sm font-semibold text-primary">Deliverable: Operational platform + ongoing support & optimization</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Connect Your Systems?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free integration assessment. We'll map your current system landscape and identify your top 3 integration opportunities with projected time savings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Integration Guide
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Robotic Process Automation (RPA)',
            description: 'Automate repetitive tasks across integrated systems with intelligent bots that work 24/7 without errors.',
            href: '/services/automation/rpa',
            icon: Bot
          },
          {
            title: 'Workflow Automation & Orchestration',
            description: 'Orchestrate complex multi-system workflows that leverage your integrated enterprise architecture.',
            href: '/services/automation/orchestration',
            icon: Workflow
          },
          {
            title: 'Data Analytics & Intelligence',
            description: 'Unlock insights from integrated data sources with advanced analytics and business intelligence.',
            href: '/services/data-analytics',
            icon: Database
          }
        ]}
        title="Maximize Integration Value"
        description="Leverage your integrated systems with these complementary automation and analytics services."
      />

      <Footer />
    </div>
  );
}
