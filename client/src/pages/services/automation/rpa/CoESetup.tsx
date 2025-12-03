import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Users, GraduationCap, BookOpen, Shield } from 'lucide-react';

export default function CoESetup() {
  const coeComponents = [
    {
      component: 'Governance Framework',
      description: 'Policies, standards, and decision-making processes for enterprise RPA programs',
      elements: ['RPA governance charter', 'Project intake and prioritization', 'Change management procedures', 'Risk management framework'],
      icon: Shield
    },
    {
      component: 'Development Standards',
      description: 'Technical standards and best practices for bot development and deployment',
      elements: ['Coding standards and conventions', 'Reusable component library', 'Testing and QA procedures', 'Deployment and release management'],
      icon: BookOpen
    },
    {
      component: 'Training Program',
      description: 'Comprehensive training curriculum for citizen developers and RPA professionals',
      elements: ['Platform-specific training', 'Process analysis workshops', 'Bot development bootcamps', 'Certification pathways'],
      icon: GraduationCap
    },
    {
      component: 'Operating Model',
      description: 'Organizational structure, roles, and responsibilities for sustainable RPA operations',
      elements: ['CoE team structure', 'Roles and responsibilities', 'Service delivery model', 'Support and escalation procedures'],
      icon: Users
    }
  ];

  const setupPhases = [
    {
      phase: 'Phase 1',
      title: 'CoE Strategy & Design',
      duration: '2-3 weeks',
      activities: [
        'Define CoE vision, mission, and success metrics',
        'Design governance framework and decision processes',
        'Establish CoE organizational structure and roles',
        'Create 12-month CoE roadmap and milestones'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Standards & Framework Development',
      duration: '3-4 weeks',
      activities: [
        'Develop bot development standards and conventions',
        'Create reusable component library and templates',
        'Document testing, deployment, and monitoring procedures',
        'Establish security and compliance guidelines'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Training & Enablement',
      duration: '4-6 weeks',
      activities: [
        'Develop training curriculum and materials',
        'Conduct platform training for citizen developers',
        'Run process discovery and analysis workshops',
        'Deliver bot development bootcamps'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Launch & Continuous Improvement',
      duration: 'Ongoing',
      activities: [
        'Launch CoE with initial project portfolio',
        'Establish ongoing support and mentoring',
        'Track KPIs and program metrics',
        'Iterate and improve based on feedback'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Faster Time-to-Value',
      description: 'Standardized processes and reusable components accelerate bot development from months to weeks'
    },
    {
      title: 'Reduced Technical Debt',
      description: 'Governance frameworks and coding standards prevent the "bot sprawl" that plagues unmanaged RPA programs'
    },
    {
      title: 'Sustainable Scaling',
      description: 'Training programs and citizen developer enablement allow agencies to scale automation without proportional headcount growth'
    },
    {
      title: 'Improved ROI',
      description: 'CoE-managed programs deliver 2-3x higher ROI than ad-hoc automation initiatives through better project selection and execution'
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
            <span>CoE Setup</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-4 border border-orange-500/30">
              RPA PROGRAM MANAGEMENT
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              RPA Center of Excellence (CoE) Setup
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Ad-hoc RPA implementations create technical debt, governance gaps, and unsustainable operations. A properly structured Center of Excellence provides the governance, standards, and training needed to scale automation across your agency. We help government organizations establish enterprise RPA programs with proven frameworks, development standards, and citizen developer enablement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request CoE Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CoE Components - Keep Cards for Visual Organization */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Center of Excellence Components</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A sustainable RPA program requires four foundational components working together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coeComponents.map((item, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <item.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{item.component}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="space-y-2">
                    {item.elements.map((element, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">{element}</span>
                      </div>
                    ))}
                  </div>
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

      {/* CoE Setup Process - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our CoE Setup Process</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A proven four-phase approach to establishing enterprise RPA Centers of Excellence in government agencies.
            </p>
          </div>

          <div className="space-y-16">
            {setupPhases.map((phase, index) => (
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
                {index < setupPhases.length - 1 && (
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

      {/* CoE Benefits - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Agencies Need a Center of Excellence</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Without a CoE, RPA programs fail to scale, accumulate technical debt, and deliver diminishing returns.
            </p>
          </div>

          <div className="space-y-8">
            {benefits.map((item, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-8 py-4">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* CoE Success Metrics - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Typical CoE Success Metrics</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              How we measure the success of your Center of Excellence program.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">10-15 Bots Deployed in Year 1</h4>
                <p className="text-muted-foreground leading-relaxed">Typical deployment velocity for agencies with established CoE frameworks</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">50-75% Reduction in Development Time</h4>
                <p className="text-muted-foreground leading-relaxed">Standardized components and templates accelerate bot development</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">20-30 Citizen Developers Trained</h4>
                <p className="text-muted-foreground leading-relaxed">Enable business users to build simple automations without IT involvement</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">2-3x Higher Program ROI</h4>
                <p className="text-muted-foreground leading-relaxed">CoE-managed programs deliver significantly higher returns than ad-hoc initiatives</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">90%+ Bot Uptime</h4>
                <p className="text-muted-foreground leading-relaxed">Proper governance and monitoring ensure reliable, production-grade automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Establish Your RPA Center of Excellence?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Schedule a free consultation to discuss your CoE strategy and implementation roadmap.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request CoE Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
