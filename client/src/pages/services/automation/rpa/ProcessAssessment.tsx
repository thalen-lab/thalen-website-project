import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, FileSearch, Target, TrendingUp, DollarSign, Clock, BarChart3, Users, AlertCircle } from 'lucide-react';

export default function ProcessAssessment() {
  const assessmentPhases = [
    {
      phase: 'Phase 1',
      title: 'Process Inventory & Documentation',
      duration: '1-2 weeks',
      activities: [
        'Interview agency stakeholders and process owners',
        'Document current-state workflows with process maps',
        'Identify pain points, bottlenecks, and manual tasks',
        'Collect time tracking and volume data'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Automation Opportunity Scoring',
      duration: '1 week',
      activities: [
        'Evaluate each process against automation feasibility criteria',
        'Calculate ROI potential (time savings × labor cost)',
        'Assess technical complexity and implementation risk',
        'Score and rank opportunities using proprietary matrix'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Business Case Development',
      duration: '1-2 weeks',
      activities: [
        'Build detailed ROI models for top 5-10 opportunities',
        'Estimate implementation costs and timelines',
        'Document compliance and security considerations',
        'Create executive presentation with recommendations'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Roadmap & Prioritization',
      duration: '1 week',
      activities: [
        'Develop 12-18 month automation roadmap',
        'Sequence projects based on ROI, complexity, and dependencies',
        'Identify quick wins (30-60 day implementations)',
        'Define success metrics and KPIs for each initiative'
      ]
    }
  ];

  const assessmentCriteria = [
    {
      criterion: 'Rule-Based & Repeatable',
      description: 'Process follows consistent rules with minimal exceptions',
      ideal: 'Same steps every time, clear decision logic',
      icon: CheckCircle2
    },
    {
      criterion: 'High Volume & Frequency',
      description: 'Process runs frequently with significant transaction volume',
      ideal: 'Daily/weekly execution, 100+ transactions/month',
      icon: TrendingUp
    },
    {
      criterion: 'Time-Consuming',
      description: 'Process consumes significant staff time',
      ideal: '10+ hours/week of manual effort',
      icon: Clock
    },
    {
      criterion: 'Digital Inputs',
      description: 'Process uses structured digital data (not paper-based)',
      ideal: 'Data in spreadsheets, databases, or web forms',
      icon: FileSearch
    },
    {
      criterion: 'Stable Systems',
      description: 'Underlying systems are stable with minimal changes',
      ideal: 'No major system upgrades planned in next 12 months',
      icon: Target
    },
    {
      criterion: 'Error-Prone',
      description: 'Manual process has high error rates or rework',
      ideal: 'Frequent data entry errors or quality issues',
      icon: AlertCircle
    }
  ];

  const deliverables = [
    {
      title: 'Process Inventory Report',
      description: 'Comprehensive catalog of all evaluated processes with current-state documentation, time/volume data, and pain point analysis.',
      pages: '20-30 pages'
    },
    {
      title: 'Automation Opportunity Matrix',
      description: 'Scored and ranked list of automation candidates with feasibility assessment, ROI projections, and implementation complexity ratings.',
      pages: '10-15 pages'
    },
    {
      title: 'Business Case Package',
      description: 'Detailed ROI models for top opportunities including cost-benefit analysis, implementation timeline, resource requirements, and risk assessment.',
      pages: '30-40 pages'
    },
    {
      title: 'Implementation Roadmap',
      description: '12-18 month phased roadmap with sequenced projects, resource allocation, milestone definitions, and success metrics.',
      pages: '15-20 pages'
    },
    {
      title: 'Executive Presentation',
      description: 'C-level presentation deck summarizing findings, recommendations, and expected business impact with compelling visualizations.',
      pages: '20-25 slides'
    }
  ];

  const roiExample = {
    process: 'Vendor Invoice Processing',
    currentState: {
      volume: '500 invoices/month',
      timePerInvoice: '15 minutes',
      totalHours: '125 hours/month',
      laborCost: '$50/hour',
      monthlyCost: '$6,250',
      errorRate: '8%',
      reworkCost: '$500/month'
    },
    futureState: {
      automationRate: '85%',
      timePerInvoice: '2 minutes (bot)',
      totalHours: '17 hours/month',
      monthlySavings: '$5,400',
      annualSavings: '$64,800',
      implementationCost: '$45,000',
      paybackPeriod: '8.3 months'
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <nav className="text-sm mb-6 opacity-80">
            <Link href="/services/automation" className="hover:text-accent">Intelligent Automation</Link>
            <span className="mx-2">/</span>
            <Link href="/services/automation/rpa" className="hover:text-accent">RPA Implementation</Link>
            <span className="mx-2">/</span>
            <span>Process Assessment</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-semibold mb-4">
              Foundation for RPA Success
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              RPA Process Assessment & Discovery
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Not all processes are good automation candidates. Our comprehensive assessment identifies your highest-value opportunities with detailed ROI projections, implementation roadmaps, and risk analysis—so you invest in bots that deliver measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/case-studies/federal-automation">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Phases */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our 4-Phase Assessment Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Typically completed in 4-6 weeks with minimal disruption to agency operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {assessmentPhases.map((phase, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm text-accent font-semibold">{phase.phase}</div>
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                      <div className="text-sm text-muted-foreground">Duration: {phase.duration}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                        <span className="text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Criteria */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Makes a Good RPA Candidate?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We evaluate every process against these 6 criteria to predict automation success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessmentCriteria.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2">
                  <CardContent className="pt-8">
                    <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.criterion}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="bg-accent/10 rounded-lg px-3 py-2">
                      <div className="text-xs text-accent font-semibold">Ideal State:</div>
                      <div className="text-xs">{item.ideal}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Example */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Real-World ROI Example</h2>
            <p className="text-xl text-muted-foreground">
              Federal agency vendor invoice processing automation
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">{roiExample.process}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-secondary rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-4">Current State (Manual)</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Volume:</span>
                          <span className="font-semibold">{roiExample.currentState.volume}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Time per invoice:</span>
                          <span className="font-semibold">{roiExample.currentState.timePerInvoice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total hours/month:</span>
                          <span className="font-semibold">{roiExample.currentState.totalHours}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Labor cost:</span>
                          <span className="font-semibold">{roiExample.currentState.laborCost}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between">
                          <span className="font-semibold">Monthly cost:</span>
                          <span className="font-bold text-lg">{roiExample.currentState.monthlyCost}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Error rate:</span>
                          <span className="text-red-500 font-semibold">{roiExample.currentState.errorRate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-accent/10 rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-4">Future State (Automated)</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Automation rate:</span>
                          <span className="font-semibold text-accent">{roiExample.futureState.automationRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Time per invoice:</span>
                          <span className="font-semibold">{roiExample.futureState.timePerInvoice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total hours/month:</span>
                          <span className="font-semibold">{roiExample.futureState.totalHours}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between">
                          <span className="font-semibold">Monthly savings:</span>
                          <span className="font-bold text-lg text-accent">{roiExample.futureState.monthlySavings}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Annual savings:</span>
                          <span className="font-bold text-xl text-accent">{roiExample.futureState.annualSavings}</span>
                        </div>
                        <div className="border-t pt-2 space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Implementation cost:</span>
                            <span>{roiExample.futureState.implementationCost}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold">Payback period:</span>
                            <span className="font-bold text-accent">{roiExample.futureState.paybackPeriod}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Assessment Deliverables</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive documentation package to support your RPA investment decisions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {deliverables.map((deliverable, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{deliverable.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{deliverable.description}</p>
                      <div className="text-xs text-accent font-semibold">{deliverable.pages}</div>
                    </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Identify Your Top RPA Opportunities?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our assessment typically identifies 5-10 high-value automation opportunities with 6-12 month payback periods.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services/automation/rpa">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Back to RPA Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
