import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, FileSearch, Target, TrendingUp, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

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
      ideal: 'Same steps every time, clear decision logic'
    },
    {
      criterion: 'High Volume & Frequency',
      description: 'Process runs frequently with significant transaction volume',
      ideal: 'Daily/weekly execution, 100+ transactions/month'
    },
    {
      criterion: 'Time-Consuming',
      description: 'Process consumes significant staff time',
      ideal: '10+ hours/week of manual effort'
    },
    {
      criterion: 'Digital Inputs',
      description: 'Process uses structured digital data (not paper-based)',
      ideal: 'Data in spreadsheets, databases, or web forms'
    },
    {
      criterion: 'Stable Systems',
      description: 'Underlying systems are stable with minimal changes',
      ideal: 'No major system upgrades planned in next 12 months'
    },
    {
      criterion: 'Error-Prone',
      description: 'Manual process has high error rates or rework',
      ideal: 'Frequent data entry errors or quality issues'
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
      description: 'Scored and ranked list of automation candidates with feasibility ratings, ROI estimates, and implementation complexity.',
      pages: '10-15 pages'
    },
    {
      title: 'Business Case Presentations',
      description: 'Executive-ready slide decks for top opportunities with ROI models, implementation timelines, and risk mitigation strategies.',
      pages: '5-10 slides per opportunity'
    },
    {
      title: 'Implementation Roadmap',
      description: '12-18 month phased plan with project sequencing, resource requirements, and success metrics.',
      pages: '15-20 pages'
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
            <Link href="/services/automation/rpa" className="hover:text-accent">Government RPA</Link>
            <span className="mx-2">/</span>
            <span>Process Assessment</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-4 border border-orange-500/30">
              RPA DISCOVERY SERVICES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Process Assessment & Discovery
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Not every process should be automated. We help government agencies identify the RIGHT automation opportunities—processes with high ROI potential, low implementation risk, and measurable mission impact. Our structured assessment methodology evaluates feasibility, calculates ROI, and builds a prioritized roadmap for your RPA program.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Methodology - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Assessment Methodology</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A proven four-phase approach to identifying and prioritizing automation opportunities in government agencies.
            </p>
          </div>

          <div className="space-y-16">
            {assessmentPhases.map((phase, index) => (
              <div key={index}>
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-orange-500/10 border-2 border-orange-500 flex items-center justify-center">
                      <span className="text-xl font-bold text-orange-500">{phase.phase.split(' ')[1]}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <h3 className="text-3xl font-bold">{phase.title}</h3>
                      <span className="text-sm text-muted-foreground font-semibold">{phase.duration}</span>
                    </div>
                    <div className="space-y-3">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                          <p className="text-muted-foreground leading-relaxed">{activity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < assessmentPhases.length - 1 && (
                  <div className="border-t border-border mt-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* Assessment Criteria - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">What Makes a Good Automation Candidate?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We evaluate processes against six key criteria to determine automation feasibility and ROI potential.
            </p>
          </div>

          <div className="space-y-8">
            {assessmentCriteria.map((item, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-8 py-4">
                <h3 className="text-2xl font-bold mb-2">{item.criterion}</h3>
                <p className="text-lg text-muted-foreground mb-2 leading-relaxed">{item.description}</p>
                <p className="text-sm font-semibold text-primary">Ideal: {item.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* Deliverables - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Assessment Deliverables</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              You receive comprehensive documentation to guide your automation program from assessment through implementation.
            </p>
          </div>

          <div className="space-y-8">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-sm text-muted-foreground font-semibold">{item.pages}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* Typical Results - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Typical Assessment Results</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              What government agencies typically discover through our process assessment.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">15-25 Automation Opportunities Identified</h4>
                <p className="text-muted-foreground leading-relaxed">Most agencies have 15-25 viable automation candidates across departments</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">5-10 High-ROI Quick Wins</h4>
                <p className="text-muted-foreground leading-relaxed">5-10 processes with 200%+ ROI and 60-90 day implementation timelines</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">$500K-$2M Annual Savings Potential</h4>
                <p className="text-muted-foreground leading-relaxed">Typical savings range for mid-size agencies (500-2000 employees)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">12-18 Month Implementation Roadmap</h4>
                <p className="text-muted-foreground leading-relaxed">Phased rollout plan with sequenced projects and resource requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discover Your Automation Opportunities?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Schedule a free consultation to discuss your process assessment needs and timeline.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
