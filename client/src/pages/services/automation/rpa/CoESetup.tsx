import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Users, GraduationCap, BookOpen, Shield, TrendingUp, CheckCircle2, Target, Zap, Award } from 'lucide-react';

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

  const governanceElements = [
    {
      element: 'Project Intake & Prioritization',
      description: 'Standardized process for evaluating and prioritizing automation opportunities',
      deliverables: ['Intake form template', 'Scoring criteria', 'Approval workflow']
    },
    {
      element: 'Change Management',
      description: 'Procedures for managing changes to bots, infrastructure, and processes',
      deliverables: ['Change request process', 'Impact assessment template', 'Approval matrix']
    },
    {
      element: 'Risk Management',
      description: 'Framework for identifying, assessing, and mitigating RPA-related risks',
      deliverables: ['Risk register template', 'Risk assessment criteria', 'Mitigation strategies']
    },
    {
      element: 'Performance Metrics',
      description: 'KPIs and dashboards for tracking RPA program value and health',
      deliverables: ['KPI definitions', 'Reporting dashboards', 'Executive scorecards']
    }
  ];

  const trainingTracks = [
    {
      track: 'Citizen Developer',
      audience: 'Business users building simple bots',
      duration: '2-3 days',
      topics: ['RPA fundamentals', 'Platform basics', 'Simple bot development', 'Testing and deployment'],
      outcome: 'Build and deploy simple attended bots'
    },
    {
      track: 'Professional Developer',
      audience: 'IT staff building complex automation',
      duration: '5-7 days',
      topics: ['Advanced bot development', 'Exception handling', 'API integrations', 'Performance optimization'],
      outcome: 'Build enterprise-grade unattended bots'
    },
    {
      track: 'Process Analyst',
      audience: 'Business analysts identifying opportunities',
      duration: '2 days',
      topics: ['Process discovery', 'Automation feasibility', 'ROI modeling', 'Requirements documentation'],
      outcome: 'Identify and document automation opportunities'
    },
    {
      track: 'RPA Administrator',
      audience: 'IT operations managing RPA infrastructure',
      duration: '3-4 days',
      topics: ['Platform administration', 'Security configuration', 'Monitoring and alerting', 'Troubleshooting'],
      outcome: 'Administer and support RPA platform'
    }
  ];

  const coeRoles = [
    {
      role: 'CoE Director',
      responsibility: 'Overall program leadership, strategy, and stakeholder management',
      commitment: 'Full-time'
    },
    {
      role: 'RPA Architect',
      responsibility: 'Technical architecture, standards, and platform governance',
      commitment: 'Full-time'
    },
    {
      role: 'Lead Developer',
      responsibility: 'Bot development, code reviews, and developer mentoring',
      commitment: 'Full-time'
    },
    {
      role: 'Business Analyst',
      responsibility: 'Process discovery, requirements gathering, and ROI analysis',
      commitment: 'Full-time'
    },
    {
      role: 'Change Manager',
      responsibility: 'Stakeholder engagement, training, and adoption support',
      commitment: 'Part-time (50%)'
    },
    {
      role: 'Security & Compliance Lead',
      responsibility: 'Security controls, compliance documentation, and ATO support',
      commitment: 'Part-time (50%)'
    }
  ];

  const governmentExperience = [
    {
      agency: 'Federal Civilian Agency',
      scope: 'Enterprise CoE serving 8 bureaus',
      outcome: '120+ bots deployed, $18M annual savings',
      timeline: '12-week CoE setup'
    },
    {
      agency: 'Department of Defense',
      scope: 'Command-level CoE with 15-person team',
      outcome: '200+ citizen developers trained',
      timeline: '16-week CoE setup'
    },
    {
      agency: 'State Government',
      scope: 'Statewide CoE supporting 25 agencies',
      outcome: '85 bots deployed in first year',
      timeline: '14-week CoE setup'
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
            <Link href="/services/automation/rpa" className="hover:text-accent">RPA Implementation</Link>
            <span className="mx-2">/</span>
            <span>CoE Setup</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-semibold mb-4">
              Scale RPA Across Your Agency
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              RPA Center of Excellence (CoE) Setup
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              One-off bot projects deliver limited value. A properly structured RPA Center of Excellence scales automation enterprise-wide with governance, standards, training, and sustainable operations—turning RPA into a strategic capability, not just a tactical tool.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request CoE Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/case-studies/federal-automation">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View CoE Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CoE Components */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Four Pillars of a Successful RPA CoE</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We establish all four components to ensure your CoE delivers sustainable, enterprise-wide automation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coeComponents.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.component}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {item.elements.map((element, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-1" />
                          <span className="text-sm">{element}</span>
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

      {/* Setup Phases */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">CoE Setup Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Typical timeline: 9-13 weeks from kickoff to operational CoE
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {setupPhases.map((phase, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-card border-2 border-border text-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm text-primary font-semibold">{phase.phase}</div>
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                      <div className="text-sm text-muted-foreground">Duration: {phase.duration}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-1" />
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

      {/* Governance Elements */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Governance Framework Components</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We establish comprehensive governance to ensure RPA program success and sustainability
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {governanceElements.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.element}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <div className="space-y-1">
                    {item.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-xs">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Tracks */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Training Program</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Role-based training tracks to build internal RPA capabilities across your agency
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {trainingTracks.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.track}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.audience}</p>
                      <div className="inline-block bg-card border border-border text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {item.duration}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-semibold mb-2">Topics Covered:</div>
                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic, idx) => (
                        <span key={idx} className="inline-block bg-muted text-foreground px-2 py-1 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg px-4 py-3">
                    <div className="text-xs font-semibold mb-1">Learning Outcome:</div>
                    <div className="text-sm">{item.outcome}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CoE Roles */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recommended CoE Team Structure</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Typical enterprise CoE requires 4-6 FTEs with these core roles
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 hover:border-accent hover:shadow-lg transition-all active:scale-95">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {coeRoles.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                      <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-bold">{item.role}</h3>
                          <span className="inline-block bg-card border border-border text-primary px-3 py-1 rounded-full text-xs font-semibold">
                            {item.commitment}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.responsibility}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Government Experience */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Government CoE Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've established RPA Centers of Excellence across federal, state, and local government agencies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {governmentExperience.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.agency}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.scope}</p>
                  <p className="text-sm font-semibold text-primary mb-2">{item.outcome}</p>
                  <div className="inline-block bg-card border border-border text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {item.timeline}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Establish Your RPA CoE?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you build a sustainable, enterprise-wide RPA program with governance, standards, and trained teams.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule CoE Workshop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services/automation/rpa/process-assessment">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Start with Process Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
