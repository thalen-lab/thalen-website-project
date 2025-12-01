import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Bot, Shield, Zap, Cloud, CheckCircle2, Code, GitBranch, Users, Award } from 'lucide-react';

export default function PlatformImplementation() {
  const platforms = [
    {
      name: 'UiPath Government Cloud',
      authorization: 'FedRAMP Moderate',
      strengths: ['Enterprise-grade scalability', 'AI/ML capabilities', 'Strong document processing', 'Extensive marketplace'],
      bestFor: 'Large-scale enterprise automation with complex workflows',
      icon: Bot
    },
    {
      name: 'Automation Anywhere Gov',
      authorization: 'FedRAMP Moderate',
      strengths: ['Cloud-native architecture', 'IQ Bot for intelligent automation', 'Strong analytics', 'Easy to use'],
      bestFor: 'Agencies prioritizing cloud-first and ease of use',
      icon: Cloud
    },
    {
      name: 'Blue Prism Government',
      authorization: 'FedRAMP Moderate',
      strengths: ['Enterprise security focus', 'Digital workforce management', 'Strong governance', 'Audit trails'],
      bestFor: 'High-security environments requiring strict governance',
      icon: Shield
    },
    {
      name: 'Microsoft Power Automate Gov',
      authorization: 'FedRAMP High',
      strengths: ['Native Microsoft 365 integration', 'Low-code platform', 'Citizen developer friendly', 'Included in licenses'],
      bestFor: 'Microsoft-centric agencies with existing M365 investments',
      icon: Zap
    }
  ];

  const selectionCriteria = [
    {
      criterion: 'Mission Requirements',
      description: 'Process complexity, volume, integration needs',
      weight: '30%'
    },
    {
      criterion: 'Security & Compliance',
      description: 'FedRAMP level, data residency, audit requirements',
      weight: '25%'
    },
    {
      criterion: 'Technical Fit',
      description: 'System compatibility, scalability, AI/ML needs',
      weight: '20%'
    },
    {
      criterion: 'Total Cost of Ownership',
      description: 'Licensing, implementation, training, maintenance',
      weight: '15%'
    },
    {
      criterion: 'Vendor Support',
      description: 'Government experience, support quality, roadmap',
      weight: '10%'
    }
  ];

  const implementationPhases = [
    {
      phase: 'Phase 1',
      title: 'Platform Selection & Architecture',
      duration: '2-3 weeks',
      activities: [
        'Evaluate platforms against selection criteria',
        'Conduct vendor demos and proof-of-concepts',
        'Design technical architecture and integration patterns',
        'Document security controls and compliance requirements'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Environment Setup & Configuration',
      duration: '3-4 weeks',
      activities: [
        'Provision FedRAMP-authorized platform environment',
        'Configure security controls and access policies',
        'Establish development, test, and production environments',
        'Integrate with identity management (PIV/CAC)'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Bot Development & Testing',
      duration: '6-12 weeks',
      activities: [
        'Develop bots for prioritized processes',
        'Build reusable components and libraries',
        'Conduct unit, integration, and user acceptance testing',
        'Document bot logic and exception handling'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Deployment & Hypercare',
      duration: '2-4 weeks',
      activities: [
        'Deploy bots to production environment',
        'Monitor performance and handle exceptions',
        'Provide intensive support during initial weeks',
        'Optimize bot performance based on real-world usage'
      ]
    }
  ];

  const deliverables = [
    {
      title: 'Platform Selection Report',
      description: 'Comprehensive evaluation of FedRAMP RPA platforms with scoring matrix, vendor comparison, and recommendation rationale.'
    },
    {
      title: 'Technical Architecture Document',
      description: 'Detailed architecture diagrams, integration patterns, security controls, and infrastructure requirements.'
    },
    {
      title: 'Bot Development Standards',
      description: 'Coding standards, naming conventions, error handling patterns, and reusable component library.'
    },
    {
      title: 'ATO Documentation Package',
      description: 'Security controls documentation, system security plan updates, and compliance evidence for ATO submission.'
    },
    {
      title: 'Operations Runbook',
      description: 'Bot monitoring procedures, exception handling workflows, escalation paths, and maintenance schedules.'
    }
  ];

  const governmentExperience = [
    {
      agency: 'Federal Agency',
      platform: 'UiPath Government Cloud',
      scope: '45 bots deployed across 12 processes',
      outcome: '85% automation rate, $4.2M annual savings'
    },
    {
      agency: 'Department of Defense',
      platform: 'Blue Prism Government',
      scope: 'Contract management automation',
      outcome: 'CMMC Level 2 compliant, 60% faster processing'
    },
    {
      agency: 'Department of Veterans Affairs',
      platform: 'Automation Anywhere Gov',
      scope: 'Benefits claims processing',
      outcome: '40% reduction in processing time'
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
            <span>Platform Implementation</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-semibold mb-4">
              Vendor-Neutral RPA Consulting
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              RPA Platform Selection & Implementation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We help government agencies select and implement the RIGHT FedRAMP-authorized RPA platform for their mission requirements. Vendor-neutral consulting ensures you get the best fit—not just the platform we happen to sell.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Platform Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/case-studies/federal-automation">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Implementation Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FedRAMP RPA Platforms */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">FedRAMP-Authorized RPA Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement all major FedRAMP-authorized RPA platforms—our recommendation is based on YOUR requirements, not vendor relationships
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{platform.name}</h3>
                        <div className="inline-block bg-card border border-border text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          {platform.authorization}
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">Key Strengths:</div>
                    <div className="space-y-1">
                      {platform.strengths.map((strength, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-1" />
                          <span className="text-sm">{strength}</span>
                        </div>
                      ))}
                    </div>
                    </div>
                    <div className="bg-muted rounded-lg px-4 py-3">
                      <div className="text-xs font-semibold mb-1">Best For:</div>
                      <div className="text-sm">{platform.bestFor}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Platform Selection Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We evaluate platforms using a weighted scoring model aligned with your agency's priorities
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {selectionCriteria.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                      <div className="bg-card border-2 border-border text-foreground rounded-lg w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {item.weight}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1">{item.criterion}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Typical timeline: 13-23 weeks from platform selection to production deployment
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {implementationPhases.map((phase, index) => (
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

      {/* Deliverables */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What You Receive</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive documentation and artifacts for ongoing operations and compliance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {deliverables.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Experience */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Government RPA Implementation Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've implemented FedRAMP RPA platforms across federal, state, and local government agencies
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
                  <div className="mb-3">
                    <div className="inline-block bg-card border border-border text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {item.platform}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.scope}</p>
                  <p className="text-sm font-semibold text-primary">{item.outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Select Your RPA Platform?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your automation requirements and receive a vendor-neutral platform recommendation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Consultation
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
