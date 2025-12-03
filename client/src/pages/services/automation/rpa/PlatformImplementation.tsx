import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Bot, Shield, Zap, Cloud } from 'lucide-react';

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
      duration: '2-4 weeks',
      activities: [
        'Provision FedRAMP-authorized cloud environment',
        'Configure identity management and access controls',
        'Set up development, test, and production environments',
        'Integrate with agency systems (Active Directory, SIEM, etc.)'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Bot Development & Testing',
      duration: '4-8 weeks per process',
      activities: [
        'Build automation workflows using platform tools',
        'Develop error handling and exception management',
        'Create monitoring and logging capabilities',
        'Conduct unit testing, integration testing, and UAT'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Deployment & Hypercare',
      duration: '2-4 weeks',
      activities: [
        'Deploy bots to production environment',
        'Monitor performance and error rates closely',
        'Provide on-site support during initial rollout',
        'Tune and optimize based on real-world performance'
      ]
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
            <span>Platform Implementation</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-4 border border-orange-500/30">
              RPA PLATFORM SERVICES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              RPA Platform Selection & Implementation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Choosing the wrong RPA platform costs agencies years of technical debt and millions in sunk costs. We provide vendor-neutral consulting to help you select the RIGHT platform for your mission requirements, then implement it with proven government-specific best practices. Our team has deep implementation experience across all major FedRAMP-authorized RPA platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Platform Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FedRAMP Platforms - Keep Cards for Comparison */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">FedRAMP-Authorized RPA Platforms</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We implement and support all major government-authorized RPA platforms. Each has unique strengths—we help you choose the right fit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <platform.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-4">{platform.authorization}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Strengths:</h4>
                    <div className="space-y-2">
                      {platform.strengths.map((strength, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold mb-1">Best For:</p>
                    <p className="text-sm text-muted-foreground">{platform.bestFor}</p>
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

      {/* Platform Selection Criteria - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Select the Right Platform</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our vendor-neutral evaluation framework considers five key factors, weighted by importance to your mission.
            </p>
          </div>

          <div className="space-y-8">
            {selectionCriteria.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 border-2 border-orange-500 flex items-center justify-center">
                    <span className="text-lg font-bold text-orange-500">{item.weight}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.criterion}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
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

      {/* Implementation Methodology - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Implementation Methodology</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A proven four-phase approach to deploying RPA platforms in government environments with FedRAMP compliance and ATO support.
            </p>
          </div>

          <div className="space-y-16">
            {implementationPhases.map((phase, index) => (
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
                {index < implementationPhases.length - 1 && (
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

      {/* Why Vendor-Neutral Matters - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Vendor-Neutral Consulting Matters</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most RPA vendors push their platform regardless of fit. System integrators have preferred vendor partnerships that influence their recommendations. This leads to poor platform choices that cost agencies millions in technical debt, licensing fees, and failed implementations.
              </p>
              <p>
                Thalen Technologies maintains no vendor partnerships or reseller agreements. We evaluate platforms objectively based on YOUR mission requirements, technical environment, and budget constraints. Our only incentive is to recommend the platform that will deliver the best outcomes for your agency.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
               <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">No Vendor Partnerships</h4>
                <p className="text-muted-foreground leading-relaxed">We maintain independence from all RPA vendors to provide unbiased recommendations</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">Multi-Platform Expertise</h4>
                <p className="text-muted-foreground leading-relaxed">Deep implementation experience across UiPath, Automation Anywhere, Blue Prism, and Power Automate</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">Government-Specific Evaluation</h4>
                <p className="text-muted-foreground leading-relaxed">Platform selection criteria tailored to FedRAMP, ATO, and government compliance requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Select Your RPA Platform?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Schedule a free consultation to discuss your requirements and receive an objective platform recommendation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Platform Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
