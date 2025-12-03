import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, Network, Cloud, GitMerge, Server, Database, Workflow, Bot, GitBranch } from 'lucide-react';

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
            <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-4 border border-orange-500/30">
              FedRAMP & StateRAMP Authorized • FIPS 140-2 Compliant
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise Integration Platform
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Your agency runs on dozens of disconnected systems. Financial data lives in one place, HR records in another, and mission-critical information is scattered across legacy mainframes and modern cloud apps. The result? Your team wastes hours manually transferring data, reconciling spreadsheets, and chasing down information. Thalen Technologies' integration platform connects everything—securely, automatically, and without expensive system replacements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Integration Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section - Keep Cards for Visual Hierarchy */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Integration Built for Government Complexity</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Government agencies (federal, state, and local) face integration challenges that commercial iPaaS vendors can't solve. We specialize in the hard problems—legacy systems, air-gapped networks, and strict compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all">
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

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* The Integration Problem - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Government Integration Is Different</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Commercial integration platforms assume you're working with modern, API-enabled systems in a single cloud environment. That's not reality for government agencies (federal, state, and local). You're running mission-critical applications on mainframes from the 1980s alongside cutting-edge AI tools. You have air-gapped networks, strict data residency requirements, and systems that were never designed to communicate.
              </p>
              <p>
                Thalen Technologies' integration platform was purpose-built for this complexity. We connect AS/400 mainframes to Salesforce. We synchronize data across classified and unclassified networks. We integrate COTS products that don't have APIs. And we do it all while maintaining FedRAMP and StateRAMP authorization with full audit trails.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">50+ Pre-Built FedRAMP Connectors</h4>
                <p className="text-muted-foreground leading-relaxed">Salesforce Gov Cloud, ServiceNow Gov, Workday Gov, Microsoft 365 GCC High, and more</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">Legacy System Support</h4>
                <p className="text-muted-foreground leading-relaxed">AS/400, Oracle E-Business Suite, SAP ECC, COBOL applications, and custom databases</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">Air-Gapped Network Orchestration</h4>
                <p className="text-muted-foreground leading-relaxed">Secure data transfer between classified and unclassified environments with full compliance</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">Real-Time & Batch Processing</h4>
                <p className="text-muted-foreground leading-relaxed">Choose the right integration pattern for each use case—event-driven, scheduled, or on-demand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* Common Integration Challenges - Keep Cards for Visual Impact */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Common Integration Challenges We Solve</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real-world integration scenarios that government agencies face every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrationChallenges.map((challenge, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <challenge.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* Implementation Approach - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Integration Implementation Approach</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A proven methodology for enterprise integration projects in government environments.
            </p>
          </div>

          <div className="space-y-12">
            <div className="border-l-4 border-orange-500 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">Discovery & Architecture Design</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We map your existing systems, data flows, and integration requirements. Then we design a scalable architecture that balances real-time needs with batch processing efficiency.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">Platform Configuration & Testing</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Deploy the integration platform in your environment (cloud, on-premise, or hybrid). Configure connectors, build data transformation logic, and validate with comprehensive testing.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">Phased Rollout & Monitoring</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Launch integrations in waves, starting with non-critical systems. Monitor performance, error rates, and data quality. Adjust as needed before expanding to mission-critical workflows.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">Ongoing Support & Optimization</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Provide 24/7 monitoring, incident response, and continuous optimization. As your systems evolve, we adapt integrations to maintain seamless data flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices
        services={[
          { title: 'Government RPA Implementation', description: 'Implement FedRAMP-authorized RPA platforms with process discovery and bot development', href: '/services/automation/rpa', icon: Bot },
          { title: 'Workflow Orchestration', description: 'Automate end-to-end business processes across multiple departments and systems', href: '/services/automation/orchestration', icon: GitBranch },
          { title: 'Cloud Infrastructure & Modernization', description: 'Migrate to AWS GovCloud, Azure Government, or Salesforce Gov Cloud with ATO support', href: '/services/cloud', icon: Cloud }
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Connect Your Systems?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Schedule a free integration assessment to map your systems and identify quick wins.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Integration Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
