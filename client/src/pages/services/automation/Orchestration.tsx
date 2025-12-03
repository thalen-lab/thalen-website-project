import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, Workflow, GitBranch, Layers, Target, Activity, Users, Search, Bot, Network, Cloud } from 'lucide-react';

export default function Orchestration() {
  const orchestrationBenefits = [
    {
      icon: Layers,
      title: 'End-to-End Process Visibility',
      description: 'See exactly how work flows through your organization in real-time. Identify bottlenecks, measure cycle times, and pinpoint where processes stall—all from a single dashboard.'
    },
    {
      icon: Target,
      title: 'Policy-Driven Automation',
      description: 'Encode your business rules, approval hierarchies, and compliance requirements into automated workflows. Ensure every process follows policy without manual oversight.'
    },
    {
      icon: Activity,
      title: 'Adaptive Workflow Management',
      description: 'Processes change as missions evolve. Our orchestration platform adapts to new requirements without custom coding—your team configures workflows through visual tools, not developer tickets.'
    }
  ];

  const orchestrationScenarios = [
    {
      title: 'Multi-Agency Coordination',
      description: 'Orchestrate workflows that span federal, state, and local agencies. Automate handoffs, enforce SLAs, and maintain visibility across organizational boundaries for disaster response, law enforcement, and interagency initiatives.',
      metric: '75% faster coordination',
      icon: Users
    },
    {
      title: 'Procurement & Contracting',
      description: 'Automate the entire acquisition lifecycle from requisition through contract award. Route approvals based on dollar thresholds, enforce FAR compliance, and integrate with financial systems for seamless obligation tracking.',
      metric: '60% cycle time reduction',
      icon: GitBranch
    },
    {
      title: 'Case Management Workflows',
      description: 'Orchestrate complex case processing workflows for benefits administration, investigations, and regulatory enforcement. Automatically assign work, escalate aging cases, and ensure consistent handling across your organization.',
      metric: '80% SLA compliance',
      icon: Search
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
            <span>Process Orchestration</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-4 border border-orange-500/30">
              FedRAMP & StateRAMP Authorized Workflow Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Process Orchestration for Government Agencies
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Your most important work involves multiple departments, systems, and decision points. Approvals get stuck in email chains. Work sits in queues waiting for the next step. Nobody has visibility into where things stand. NexDyne Process Orchestration automates these complex, multi-step workflows from end to end—routing work intelligently, enforcing policy automatically, and giving you real-time visibility into every process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Process Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Keep Cards for Visual Impact */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transform How Your Agency Operates</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Process orchestration is not just workflow automation—it is the operating system for your entire organization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {orchestrationBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <benefit.icon className="h-14 w-14 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
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

      {/* Orchestration Scenarios - Keep Cards for Visual Impact */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Common Orchestration Scenarios</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From procurement to case management, government agencies (federal, state, and local) orchestrate their most complex processes with NexDyne.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {orchestrationScenarios.map((scenario, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <scenario.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{scenario.description}</p>
                  <p className="text-lg font-bold text-primary">{scenario.metric}</p>
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

      {/* How It Works - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">How Process Orchestration Works</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A proven approach to automating complex, multi-step workflows across government agencies.
            </p>
          </div>

          <div className="space-y-12">
            <div className="border-l-4 border-orange-500 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">Process Discovery & Mapping</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We document your current workflows, identify bottlenecks, and map out the ideal future state. This includes stakeholder interviews, process mining, and compliance requirement analysis.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">Workflow Design & Configuration</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Design automated workflows using visual tools—no coding required. Configure routing rules, approval hierarchies, SLA thresholds, and integration points with existing systems.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">Testing & Validation</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Validate workflows with real users in a sandbox environment. Test edge cases, error handling, and compliance controls before deploying to production.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">Deployment & Continuous Improvement</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Roll out workflows in phases, monitor performance metrics, and iterate based on user feedback. Our platform provides real-time analytics to identify optimization opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* Key Capabilities - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Orchestration Platform Capabilities</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Enterprise-grade workflow automation built for government compliance and mission-critical operations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">Visual Workflow Designer</h4>
                <p className="text-muted-foreground leading-relaxed">Drag-and-drop interface for building complex workflows without coding</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">Intelligent Routing & Assignment</h4>
                <p className="text-muted-foreground leading-relaxed">Route work based on business rules, workload balancing, and skill matching</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">SLA Management & Escalation</h4>
                <p className="text-muted-foreground leading-relaxed">Automatically escalate aging work items and enforce service level agreements</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">Real-Time Analytics Dashboard</h4>
                <p className="text-muted-foreground leading-relaxed">Monitor process performance, identify bottlenecks, and track KPIs in real-time</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">Compliance & Audit Trail</h4>
                <p className="text-muted-foreground leading-relaxed">Complete audit logs for every action, decision, and system interaction</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">Multi-System Integration</h4>
                <p className="text-muted-foreground leading-relaxed">Connect workflows to 50+ FedRAMP platforms and legacy government systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices
        services={[
          { title: 'Government RPA Implementation', description: 'Implement FedRAMP-authorized RPA platforms with process discovery and bot development', href: '/services/automation/rpa', icon: Bot },
          { title: 'Enterprise Integration Services', description: 'Connect FedRAMP-authorized platforms and legacy government systems with secure APIs', href: '/services/automation/integration', icon: Network },
          { title: 'Cloud Infrastructure & Modernization', description: 'Migrate to AWS GovCloud, Azure Government, or Salesforce Gov Cloud with ATO support', href: '/services/cloud', icon: Cloud }
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Orchestrate Your Processes?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Schedule a free process assessment to identify automation opportunities and build your orchestration roadmap.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Process Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
