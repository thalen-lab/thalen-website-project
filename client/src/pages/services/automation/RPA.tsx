import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Bot, Clock, Shield, Zap, TrendingUp, Users, FileText, Lock, BarChart3 } from 'lucide-react';

export default function RPA() {
  const benefits = [
    {
      icon: Clock,
      title: 'Mission-Critical Speed',
      description: 'Deploy your first production bot in 30 days or less. Our accelerated framework gets you from concept to measurable time savings faster than traditional automation approaches.'
    },
    {
      icon: Shield,
      title: 'Security-First Architecture',
      description: 'Every bot operates within your existing security perimeter with full audit logging, role-based access control, and compliance with NIST 800-53, FedRAMP, and CMMC requirements.'
    },
    {
      icon: Zap,
      title: 'Zero Infrastructure Changes',
      description: 'Bots interact with your systems exactly like human users do—no API development, no system modifications, no expensive IT projects. Works with legacy mainframes and modern cloud apps alike.'
    }
  ];

  const governmentUseCases = [
    {
      title: 'Grants & Benefits Processing',
      description: 'Automate eligibility verification, document validation, and payment processing for federal assistance programs. Reduce backlog while maintaining strict compliance requirements.',
      impact: '70% faster processing',
      icon: FileText
    },
    {
      title: 'Security Clearance Administration',
      description: 'Streamline SF-86 form processing, background check coordination, and adjudication workflows. Maintain chain of custody while accelerating clearance timelines.',
      impact: '60% time reduction',
      icon: Lock
    },
    {
      title: 'Financial Reconciliation',
      description: 'Automate month-end close, inter-agency transfers, and Treasury reporting. Eliminate manual spreadsheet work while ensuring audit-ready documentation.',
      impact: '90% error reduction',
      icon: BarChart3
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
            <span>Robotic Process Automation</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-semibold mb-4">
              FedRAMP Authorized • CMMC Level 2 Certified
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Robotic Process Automation for Federal Agencies
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Your workforce is drowning in repetitive data entry, form processing, and system-to-system transfers. Meanwhile, mission-critical work sits in the queue. NexDyne RPA deploys intelligent software robots that handle the tedious work with perfect accuracy, freeing your team to focus on serving citizens and advancing your mission.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request RPA Readiness Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Federal Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Federal Agencies Choose NexDyne RPA</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike commercial RPA vendors, we understand the unique challenges of government automation—from ATO requirements to legacy system integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <benefit.icon className="h-14 w-14 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding RPA */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What Makes Government RPA Different?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Robotic Process Automation isn't just about replacing manual work—it's about transforming how federal agencies operate under resource constraints. Our bots are purpose-built for government environments where security, compliance, and auditability aren't optional features.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Unlike commercial solutions that require extensive customization, NexDyne RPA comes pre-configured for federal compliance frameworks. Every action is logged, every decision is traceable, and every bot operates within your existing security boundaries. We've automated everything from FOIA request processing to financial reconciliation across dozens of agencies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Works with Legacy Systems</div>
                    <div className="text-sm text-muted-foreground">Automate mainframe workflows without expensive modernization projects</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Built-In Compliance</div>
                    <div className="text-sm text-muted-foreground">NIST 800-53 controls, FedRAMP monitoring, and FISMA reporting included</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Rapid Deployment</div>
                    <div className="text-sm text-muted-foreground">30-day sprints from process selection to production deployment</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="h-8 w-8 text-accent" />
                  <div className="text-sm font-semibold text-accent uppercase tracking-wide">Real Federal Impact</div>
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  "Our procurement team was spending 25 hours per week manually entering vendor data from PDFs into our financial system. NexDyne deployed an RPA bot that now processes 200+ vendor forms daily with zero errors. We reallocated those hours to strategic sourcing and saved $340K in the first year alone."
                </p>
                <div className="border-t border-accent/20 pt-4">
                  <div className="font-semibold">Sarah Chen, Director of Procurement</div>
                  <div className="text-sm text-muted-foreground">U.S. General Services Administration</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Government Use Cases */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Federal RPA Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From civilian agencies to defense contractors, organizations automate their highest-volume, lowest-value work first.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {governmentUseCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-accent/10 rounded-lg p-4 w-fit mb-4">
                    <useCase.icon className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="bg-secondary rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent mb-1">{useCase.impact}</div>
                    <div className="text-sm text-muted-foreground">Average improvement</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-navy-gradient text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">30 Days</div>
                  <div className="text-sm opacity-80">Average deployment time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <div className="text-sm opacity-80">Time savings on automated tasks</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99.7%</div>
                  <div className="text-sm opacity-80">Accuracy rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">8 Months</div>
                  <div className="text-sm opacity-80">Average ROI timeline</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The NexDyne Approach */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The NexDyne RPA Deployment Framework</h2>
              <p className="text-xl text-muted-foreground">
                We don't just build bots—we transform how your agency operates.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Process Discovery & Prioritization</h3>
                      <p className="text-muted-foreground mb-3">We interview your team, observe workflows, and analyze time logs to identify automation candidates. You'll receive a prioritized roadmap showing which processes deliver maximum ROI with minimum risk.</p>
                      <div className="text-sm font-semibold text-accent">Deliverable: Automation Opportunity Assessment with ROI projections</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Security & Compliance Review</h3>
                      <p className="text-muted-foreground mb-3">Before writing a single line of code, we document security controls, data handling procedures, and audit requirements. Our compliance team ensures your RPA implementation meets ATO requirements from day one.</p>
                      <div className="text-sm font-semibold text-accent">Deliverable: Security Architecture Document & ATO package support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Bot Development & Testing</h3>
                      <p className="text-muted-foreground mb-3">We build your bot using government-approved tools, test it against edge cases, and validate it with your subject matter experts. Every bot includes error handling, logging, and graceful failure modes.</p>
                      <div className="text-sm font-semibold text-accent">Deliverable: Production-ready bot with full documentation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Deployment & Knowledge Transfer</h3>
                      <p className="text-muted-foreground mb-3">Your bot goes live with real-time monitoring dashboards. We train your team on bot management, exception handling, and performance optimization. You own the bot—we provide ongoing support.</p>
                      <div className="text-sm font-semibold text-accent">Deliverable: Operational bot + trained internal team</div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your Highest-Volume Processes?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free RPA readiness assessment. We'll identify your top 3 automation opportunities with projected time savings and ROI timelines.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Federal RPA Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
