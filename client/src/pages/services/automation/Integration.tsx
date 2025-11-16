import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Network, Gauge, Sliders, TrendingUp, Database, Workflow } from 'lucide-react';

export default function Integration() {
  const benefits = [
    {
      icon: Network,
      title: 'Your Central Command Center',
      description: 'A single FedRAMP-authorized platform connects all your systems and workflows instantly. Having all business logic in one place enables real-time decision-making.'
    },
    {
      icon: Gauge,
      title: 'Rapid Scalability',
      description: 'Connect new systems in hours without custom development. Your business can quickly adapt to policy changes and mission requirements without IT bottlenecks.'
    },
    {
      icon: Sliders,
      title: 'Complete Control',
      description: 'Integrate entire business processes, not just point-to-point connections. Gain strategic visibility into data flows across your entire organization.'
    }
  ];

  const useCases = [
    {
      title: 'Legacy System Modernization',
      description: 'Connect decades-old mainframes to modern cloud applications without risky migrations. Preserve institutional knowledge while enabling digital transformation.',
      icon: Database
    },
    {
      title: 'Cross-Agency Data Sharing',
      description: 'Securely exchange data between federal, state, and local systems with built-in encryption, audit trails, and FISMA compliance.',
      icon: Network
    },
    {
      title: 'Real-Time Workflow Orchestration',
      description: 'Automate complex processes that span multiple departments and systems—from procurement to citizen service delivery.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise Integration Platform (iPaaS)
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Your systems need to work together, but they don't talk to each other. So you're stuck manually transferring data between isolated islands. Our FedRAMP-authorized iPaaS connects all your applications and brings them together into a secure, cohesive whole.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Integration Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download iPaaS Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Seamlessly Integrate Enterprise Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Eliminate Excel exports, manual data transfers, and siloed systems with government-certified integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8 text-center">
                  <benefit.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About iPaaS */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About iPaaS</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Excel exports and manual data transfers are outdated, but many government agencies still struggle with applications that don't communicate. Integration Platform as a Service (iPaaS) brings all your systems under one roof.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                No more data silos. No more version control nightmares. Just one streamlined landscape where data flows securely between departments, contractors, and partner agencies. You finally get the control and visibility you've been demanding.
              </p>
              <p className="text-lg text-muted-foreground">
                For federal agencies, our iPaaS solution is FedRAMP High authorized and CMMC Level 2 certified, supporting Top Secret/SCI workloads with continuous monitoring and automated compliance reporting.
              </p>
            </div>

            <Card className="bg-accent/5 border-2 border-accent">
              <CardContent className="p-8">
                <div className="text-sm font-semibold text-accent mb-3">FEDERAL CIO TESTIMONIAL</div>
                <p className="text-lg italic mb-4">
                  "With NexDyne's iPaaS, we don't just connect systems—we connect our entire organization. That means faster mission execution, better decisions, and zero manual data reconciliation. We eliminated 40 hours per week of spreadsheet work in the first month alone."
                </p>
                <div className="text-sm font-semibold">Dr. Patricia Wong</div>
                <div className="text-sm text-muted-foreground">Chief Information Officer - Department of Energy</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Common Integration Challenges We Solve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From federal agencies to healthcare systems, organizations rely on NexDyne iPaaS to eliminate integration complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <useCase.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The NexDyne iPaaS Approach */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">iPaaS at NexDyne</h2>
              <p className="text-xl text-muted-foreground">
                We believe in the power of simplicity—even for the most complex government IT environments.
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Map Your Data Landscape</h3>
                      <p className="text-muted-foreground">We document every system, data flow, and integration point across your organization. You'll see exactly where data gets stuck and where automation will deliver maximum impact.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Connect Through One Central Platform</h3>
                      <p className="text-muted-foreground">No more custom APIs. No more point-to-point integrations that break every time a system updates. Our FedRAMP-authorized platform handles all connections with built-in security, monitoring, and compliance.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Identify Cost Savings & Optimization</h3>
                      <p className="text-muted-foreground">You'll immediately see where manual work is costing you time and money. Our analytics dashboard shows exactly which processes to automate next for maximum ROI.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Scale Alongside Your Mission</h3>
                      <p className="text-muted-foreground">The platform grows with your organization. Add new systems, contractors, and partner agencies without custom development. One platform solves all your integration challenges from here on out.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-8 w-8 text-accent" />
                    <div>
                      <div className="font-bold text-lg">40+ Hours Saved Per Week</div>
                      <div className="text-sm text-muted-foreground">Average time savings from eliminating manual data transfers</div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Eliminate Data Silos?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free integration assessment and we'll map your current data landscape with recommendations for immediate improvements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Integration Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
