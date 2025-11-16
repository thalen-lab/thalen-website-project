import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, GitBranch, Search, ThumbsUp, Users, TrendingUp, Zap } from 'lucide-react';

export default function Orchestration() {
  const benefits = [
    {
      icon: Search,
      title: 'Insight Into Agency Processes',
      description: 'Visualize workflows and data flows across departments, identify bottlenecks in real-time, and optimize processes with data-driven insights.'
    },
    {
      icon: ThumbsUp,
      title: 'Lower Error Margin',
      description: 'Automate manual decision points and reduce human error with intelligent decision trees that enforce policy compliance automatically.'
    },
    {
      icon: Users,
      title: 'Collaborate Smoothly',
      description: 'Process orchestration acts as an overarching layer across your organization, enabling departments to work together seamlessly on complex workflows.'
    },
    {
      icon: TrendingUp,
      title: 'Creates Growth Opportunities',
      description: 'Handle more citizens with fewer staff by automating tasks. Your agency can finally grow mission impact without increasing operational costs.'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Process Orchestration
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Enhance efficiency and save time with our government-certified process orchestration tools. Automate end-to-end business processes and streamline complex workflows that span multiple departments, systems, and decision points.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Orchestration Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Orchestration Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Benefits of Process Orchestration</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From federal agencies to healthcare systems, organizations use process orchestration to optimize complex workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Smarter Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Working Smarter? Process Orchestration!</h2>
            
            <div className="space-y-6 mb-12">
              <p className="text-lg text-muted-foreground">
                Process Orchestration acts as an overarching layer across your organization, automating and streamlining entire business processes from start to finish. It integrates various systems, departments, and devices to ensure seamless collaboration and efficient workflow execution.
              </p>
              <p className="text-lg text-muted-foreground">
                Process Orchestration is ideal for agencies with complex, recurring processes that span multiple systems and departments. Often, these organizations aim to improve citizen service delivery without increasing headcount. Process Orchestration provides insights into organizational bottlenecks, automates manual decision points, and enforces policy compliance. The result? Higher mission impact, improved constituent satisfaction, and empowered employees.
              </p>
            </div>

            <Card className="bg-accent/5 border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg italic mb-4">
                  "Process Orchestration enables you to optimize all processes across departments, systems, and people. We went from 6-week procurement cycles to 8 days, and our staff can finally focus on strategic work instead of chasing approvals."
                </p>
                <div className="text-sm font-semibold">Michael Chen</div>
                <div className="text-sm text-muted-foreground">Director of Operations - Department of Transportation</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">The Solution You Didn't Know You Needed</h2>
            
            <div className="space-y-6 mb-12">
              <p className="text-lg text-muted-foreground">
                Process Orchestration often isn't what you're searching for—it's the solution to an agency-wide problem. Your mission is expanding, but your team can't keep up. Processes are clunky, staff turnover is rising, and citizen satisfaction scores keep dropping. It's time for change.
              </p>
              <p className="text-lg text-muted-foreground">
                We map out your processes together—every single one. From the entire constituent journey to invoicing, from your supply chain to onboarding new employees, we uncover how processes flow, which systems are used, and which employees handle each step. We assess the RPA and low-code solutions you already have and build on them to drive automation further across your entire organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Zap className="h-6 w-6 text-accent" />
                    What We Deliver
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Complete process mapping across all departments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Bottleneck identification with time/cost impact</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Automated workflow orchestration platform</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Real-time dashboards for process monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Integration with existing RPA and automation tools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <GitBranch className="h-6 w-6 text-accent" />
                    Common Use Cases
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Multi-step procurement and contracting workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Citizen service requests with cross-department routing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Employee onboarding and offboarding automation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Compliance reporting and audit preparation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Budget approval and financial reconciliation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The NexDyne Approach */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Process Orchestration at NexDyne</h2>
              <p className="text-xl text-muted-foreground">
                Our proven methodology delivers orchestration that actually works in government environments.
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Comprehensive Process Discovery</h3>
                      <p className="text-muted-foreground">We map every process in your organization—from constituent intake to final service delivery. You'll see exactly where time is wasted, where errors occur, and where automation will deliver maximum ROI.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Design Intelligent Workflows</h3>
                      <p className="text-muted-foreground">We build orchestration workflows that connect your RPA bots, integrate your systems, and automate decision points. All while maintaining FedRAMP compliance and audit trails.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Deploy & Monitor</h3>
                      <p className="text-muted-foreground">Your orchestrated processes go live with real-time monitoring dashboards. You'll see exactly how work flows through your organization and where bottlenecks emerge before they become problems.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                      <p className="text-muted-foreground">We analyze performance data and continuously refine workflows. As your mission evolves, your orchestration adapts automatically without custom development.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-8 w-8 text-accent" />
                    <div>
                      <div className="font-bold text-lg">65% Faster Process Completion</div>
                      <div className="text-sm text-muted-foreground">Average improvement in end-to-end workflow cycle time</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Orchestrate Your Processes?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free process discovery session and we'll map your top 3 workflow bottlenecks with recommendations for immediate improvement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Free Discovery Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Orchestration Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
