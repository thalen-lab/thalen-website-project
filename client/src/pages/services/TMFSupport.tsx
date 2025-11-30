import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, DollarSign, FileText, TrendingUp, Award, Target, Shield, Users, CheckSquare } from 'lucide-react';

export default function TMFSupport() {
  const tmfCapabilities = [
    {
      icon: FileText,
      title: 'TMF Proposal Development',
      description: 'We help agencies develop compelling TMF proposals including executive summaries, problem statements, solution descriptions, and implementation plans that align with TMF Board priorities.',
      benefits: ['Proposal writing', 'Executive summaries', 'Solution architecture', 'Implementation roadmaps']
    },
    {
      icon: TrendingUp,
      title: 'ROI & Business Case Development',
      description: 'We build detailed financial models showing cost savings, efficiency gains, and mission impact with 5-year projections that demonstrate clear return on investment.',
      benefits: ['Financial modeling', 'Cost-benefit analysis', 'ROI projections', 'Mission impact metrics']
    },
    {
      icon: Target,
      title: 'TMF Board Preparation',
      description: 'We prepare agencies for TMF Board presentations including pitch deck development, Q&A preparation, and mock presentations to ensure confidence and clarity.',
      benefits: ['Pitch deck development', 'Q&A preparation', 'Mock presentations', 'Board coaching']
    },
    {
      icon: CheckSquare,
      title: 'Implementation Oversight',
      description: 'We provide program management and implementation support to ensure TMF-funded projects deliver on promised outcomes and meet repayment obligations.',
      benefits: ['Program management', 'Milestone tracking', 'Risk mitigation', 'Reporting support']
    }
  ];

  const tmfPriorities = [
    {
      priority: 'Cybersecurity Modernization',
      description: 'Zero trust architecture, cloud security, identity management, and security operations modernization',
      examples: ['Zero trust implementation', 'Cloud security posture management', 'Identity and access management']
    },
    {
      priority: 'Legacy System Modernization',
      description: 'Migration from mainframe and legacy systems to modern cloud platforms with improved security and efficiency',
      examples: ['Mainframe migration', 'COBOL modernization', 'Cloud-native architecture']
    },
    {
      priority: 'Customer Experience Improvement',
      description: 'Citizen-facing digital services with mobile-first design, accessibility, and self-service capabilities',
      examples: ['Mobile applications', 'Self-service portals', 'Chatbots and virtual assistants']
    },
    {
      priority: 'Data Analytics & AI',
      description: 'Modern data platforms, self-service analytics, and AI/ML capabilities for mission-critical insights',
      examples: ['Cloud data warehouses', 'Self-service BI', 'Predictive analytics']
    }
  ];

  const proposalProcess = [
    { step: '1. Initial Consultation', description: 'Assess TMF eligibility, identify modernization opportunities, and develop initial concept' },
    { step: '2. Proposal Development', description: 'Write comprehensive proposal including problem statement, solution, ROI, and implementation plan' },
    { step: '3. Financial Modeling', description: 'Build detailed 5-year financial model showing costs, savings, and repayment schedule' },
    { step: '4. Board Preparation', description: 'Develop pitch deck, prepare Q&A, and conduct mock presentations' },
    { step: '5. Submission & Review', description: 'Submit proposal to TMF Program Management Office and respond to questions' },
    { step: '6. Implementation Support', description: 'Provide program management and oversight to ensure successful delivery' }
  ];

  const successFactors = [
    { factor: 'Clear Problem Statement', description: 'Articulate the current pain points, inefficiencies, and mission impact of legacy systems' },
    { factor: 'Compelling ROI', description: 'Demonstrate measurable cost savings and efficiency gains that justify the investment' },
    { factor: 'Realistic Implementation Plan', description: 'Provide detailed roadmap with milestones, risks, and mitigation strategies' },
    { factor: 'Executive Sponsorship', description: 'Secure strong executive support and commitment to drive the initiative' },
    { factor: 'Repayment Strategy', description: 'Show clear path to repay TMF funding through realized savings or appropriations' },
    { factor: 'Alignment with TMF Priorities', description: 'Connect proposal to TMF Board priorities like cybersecurity, legacy modernization, or CX' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <Link href="/services/digital-transformation">
              <Button variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
                ← Back to IT Modernization
              </Button>
            </Link>
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              TMF Support
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Technology Modernization Fund (TMF) Support
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We help agencies secure Technology Modernization Fund awards through end-to-end proposal development, ROI modeling, TMF Board preparation, and implementation support—we've helped agencies secure $45M+ in TMF funding.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Start TMF Proposal Development
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

      {/* TMF Capabilities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">TMF Support Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end support for Technology Modernization Fund proposals and implementation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {tmfCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                        <p className="text-muted-foreground mb-4">{capability.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* TMF Priorities */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">TMF Board Priorities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We align proposals with TMF Board priorities to maximize approval chances
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {tmfPriorities.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-3">{item.priority}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="text-sm font-semibold mb-2">Example Projects:</div>
                    <div className="space-y-1">
                      {item.examples.map((example, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Process */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">TMF Proposal Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured 6-step process from initial consultation to implementation support
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {proposalProcess.map((item, index) => (
              <div key={index} className="flex gap-3 p-6 bg-secondary rounded-lg border-2 border-border">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">{item.step}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">TMF Proposal Success Factors</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Critical elements that increase TMF proposal approval rates
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {successFactors.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-2">{item.factor}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Pursue TMF Funding?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our TMF specialists can help you develop compelling proposals, build financial models, and prepare for TMF Board presentations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Schedule TMF Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/digital-transformation">
                <Button size="lg" variant="outline">
                  View All Modernization Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
