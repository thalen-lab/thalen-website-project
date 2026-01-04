import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, CheckCircle2, Workflow, GitBranch, Shield, Zap, Clock, BarChart3, Network, Bot, Code, Target, Activity, Users, Search, Layers } from 'lucide-react';

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
            <div className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-semibold mb-4">
              FedRAMP & StateRAMP Authorized Workflow Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Process Orchestration for Government Agencies (Federal, State, and Local)
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Your most important work involves multiple departments, systems, and decision points. Approvals get stuck in email chains. Work sits in queues waiting for the next step. Nobody has visibility into where things stand. NexDyne Technology Process Orchestration automates these complex, multi-step workflows from end to end—routing work intelligently, enforcing policy automatically, and giving you real-time visibility into every process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Process Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Orchestration Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transform How Your Agency Operates</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Process orchestration is not just workflow automation—it is the operating system for your entire organization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {orchestrationBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all active:scale-95">
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



      {/* Orchestration Scenarios */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Common Orchestration Scenarios</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From procurement to case management, government agencies (federal, state, and local) orchestrate their most complex processes with NexDyne Technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {orchestrationScenarios.map((scenario, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:border-accent transition-all duration-300 border-2">
                <CardContent className="p-8">
                  <div className="bg-muted rounded-lg p-4 w-fit mb-4">
                    <scenario.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{scenario.description}</p>
                  <div className="bg-secondary rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{scenario.metric}</div>
                    <div className="text-sm text-muted-foreground">Typical improvement</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-navy-gradient text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">65%</div>
                  <div className="text-sm opacity-80">Faster process completion</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">90%</div>
                  <div className="text-sm opacity-80">SLA compliance rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-80">Process visibility</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">45 Days</div>
                  <div className="text-sm opacity-80">Average implementation</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The NexDyne Technology Approach */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The NexDyne Technology Orchestration Framework</h2>
              <p className="text-xl text-muted-foreground">
                We do not just automate your current process—we optimize it first.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-card border-2 border-border text-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Process Mining & Analysis</h3>
                      <p className="text-muted-foreground mb-3">We analyze your current process by interviewing stakeholders, reviewing documentation, and observing actual workflows. You will receive a detailed process map showing every step, decision point, and handoff—plus recommendations for optimization before automation.</p>
                      <div className="text-sm font-semibold text-primary">Deliverable: Current State Process Map & Optimization Recommendations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-card border-2 border-border text-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Workflow Design & Policy Encoding</h3>
                      <p className="text-muted-foreground mb-3">We design the optimized workflow with your team, encoding business rules, approval hierarchies, and compliance requirements. Every decision point is documented, and exception handling is built in from the start.</p>
                      <div className="text-sm font-semibold text-primary">Deliverable: Future State Workflow Design & Business Rules Documentation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-card border-2 border-border text-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Platform Configuration & Integration</h3>
                      <p className="text-muted-foreground mb-3">We configure the orchestration platform to match your workflow design, integrate with your existing systems (ERP, case management, email, etc.), and build dashboards for process monitoring. Your team validates the configuration in a test environment.</p>
                      <div className="text-sm font-semibold text-primary">Deliverable: Configured platform with full system integration</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-card border-2 border-border text-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Deployment & Continuous Improvement</h3>
                      <p className="text-muted-foreground mb-3">The orchestrated process goes live with full monitoring and support. We track performance metrics, identify bottlenecks, and continuously refine workflows based on actual usage data. Your team can make configuration changes without developer involvement.</p>
                      <div className="text-sm font-semibold text-primary">Deliverable: Production workflow + ongoing optimization support</div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Orchestrate Your Complex Workflows?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free process assessment. We will map your current workflow, identify bottlenecks, and show you exactly how orchestration will improve cycle times and compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Orchestration Case Studies
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Robotic Process Automation (RPA)',
            description: 'Deploy intelligent bots within orchestrated workflows for end-to-end process automation.',
            href: '/services/automation/rpa',
            icon: Bot
          },
          {
            title: 'System Integration & APIs',
            description: 'Connect disparate systems that your workflows orchestrate with seamless integrations.',
            href: '/services/automation/integration',
            icon: Network
          },
          {
            title: 'Process Mining & Optimization',
            description: 'Discover optimization opportunities in your workflows with AI-powered process mining and analysis.',
            href: '/services/process-optimization',
            icon: BarChart3
          }
        ]}
        title="Complete Workflow Automation"
        description="Enhance orchestration capabilities with RPA, integration, and process optimization services."
      />

      <Footer />
    </div>
  );
}
