import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Cloud, Shield, Bot, BarChart3, Users, Building2, Zap, Target } from 'lucide-react';

type ServiceCategory = 'cloud' | 'security' | 'automation' | 'analytics';

interface Service {
  name: string;
  tagline: string;
  bestFor: string[];
  keyFeatures: string[];
  timeline: string;
  complexity: 'Low' | 'Medium' | 'High';
  href: string;
  icon: typeof Cloud;
}

export default function ServiceComparison() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('cloud');

  const categories = [
    { id: 'cloud' as ServiceCategory, label: 'Cloud Infrastructure', icon: Cloud },
    { id: 'security' as ServiceCategory, label: 'Cybersecurity', icon: Shield },
    { id: 'automation' as ServiceCategory, label: 'Automation', icon: Bot },
    { id: 'analytics' as ServiceCategory, label: 'Data Analytics', icon: BarChart3 }
  ];

  const comparisons: Record<ServiceCategory, Service[]> = {
    cloud: [
      {
        name: 'Cloud Migration',
        tagline: 'Move workloads to cloud with zero downtime',
        bestFor: [
          'Agencies with on-premise legacy systems',
          'Data center consolidation initiatives',
          'FedRAMP compliance requirements'
        ],
        keyFeatures: [
          'Zero-downtime migration strategy',
          'FedRAMP-authorized cloud environments',
          'Legacy application modernization',
          'Automated testing & validation'
        ],
        timeline: '3-6 months',
        complexity: 'High',
        href: '/services/cloud-migration',
        icon: Cloud
      },
      {
        name: 'Multi-Cloud Strategy',
        tagline: 'Optimize across AWS, Azure, and GCP',
        bestFor: [
          'Agencies using multiple cloud providers',
          'Avoiding vendor lock-in',
          'Workload-specific cloud optimization'
        ],
        keyFeatures: [
          'Unified management across clouds',
          'Cost optimization algorithms',
          'Workload placement automation',
          'Cross-cloud disaster recovery'
        ],
        timeline: '2-4 months',
        complexity: 'High',
        href: '/services/multi-cloud',
        icon: Cloud
      },
      {
        name: 'Cloud Optimization',
        tagline: 'Reduce cloud costs by 30-60%',
        bestFor: [
          'High cloud spending without visibility',
          'Over-provisioned resources',
          'Cost allocation challenges'
        ],
        keyFeatures: [
          'Right-sizing recommendations',
          'Reserved instance optimization',
          'Automated resource scheduling',
          'Cost allocation & chargeback'
        ],
        timeline: '1-2 months',
        complexity: 'Medium',
        href: '/services/cloud-optimization',
        icon: Zap
      },
      {
        name: 'Cloud Security',
        tagline: 'FedRAMP-compliant security controls',
        bestFor: [
          'FedRAMP authorization preparation',
          'Continuous compliance monitoring',
          'Security posture improvement'
        ],
        keyFeatures: [
          'FedRAMP security controls',
          'Continuous compliance monitoring',
          'Automated vulnerability scanning',
          'Security incident response'
        ],
        timeline: '2-3 months',
        complexity: 'High',
        href: '/services/cloud-security',
        icon: Shield
      }
    ],
    security: [
      {
        name: 'Security Assessment',
        tagline: 'Comprehensive compliance & risk evaluation',
        bestFor: [
          'FedRAMP authorization preparation',
          'CMMC certification requirements',
          'Annual security assessments'
        ],
        keyFeatures: [
          'FedRAMP/CMMC gap analysis',
          'NIST 800-53/171 compliance',
          'Risk assessment & remediation',
          'Security control validation'
        ],
        timeline: '4-8 weeks',
        complexity: 'Medium',
        href: '/services/security-assessment',
        icon: Shield
      },
      {
        name: 'Penetration Testing',
        tagline: 'Offensive security & vulnerability management',
        bestFor: [
          'Annual pen test requirements',
          'Pre-deployment security validation',
          'Continuous vulnerability management'
        ],
        keyFeatures: [
          'Manual penetration testing',
          'Automated vulnerability scanning',
          'Web/mobile/API testing',
          'Remediation verification'
        ],
        timeline: '2-4 weeks',
        complexity: 'Medium',
        href: '/services/penetration-testing',
        icon: Target
      },
      {
        name: 'Identity & Access Management',
        tagline: 'Zero Trust identity & privileged access',
        bestFor: [
          'Zero Trust implementation',
          'Privileged access management',
          'Multi-factor authentication rollout'
        ],
        keyFeatures: [
          'Zero Trust architecture',
          'Privileged access management (PAM)',
          'Multi-factor authentication (MFA)',
          'Identity governance'
        ],
        timeline: '3-5 months',
        complexity: 'High',
        href: '/services/identity-access-management',
        icon: Users
      },
      {
        name: 'Zero Trust Architecture',
        tagline: 'Never trust, always verify security model',
        bestFor: [
          'Modernizing perimeter security',
          'Remote workforce security',
          'NIST 800-207 compliance'
        ],
        keyFeatures: [
          'NIST 800-207 implementation',
          'Micro-segmentation',
          'Continuous authentication',
          'Least privilege access'
        ],
        timeline: '4-6 months',
        complexity: 'High',
        href: '/services/zero-trust-architecture',
        icon: Shield
      }
    ],
    automation: [
      {
        name: 'Robotic Process Automation',
        tagline: 'Automate repetitive tasks with software bots',
        bestFor: [
          'High-volume data entry tasks',
          'Cross-system data transfers',
          'Rules-based decision processes'
        ],
        keyFeatures: [
          'Unattended & attended bots',
          'OCR & document processing',
          'System integration without APIs',
          'FedRAMP-compliant bot platform'
        ],
        timeline: '6-12 weeks',
        complexity: 'Medium',
        href: '/services/automation/rpa',
        icon: Bot
      },
      {
        name: 'Workflow Orchestration',
        tagline: 'Coordinate multi-step processes end-to-end',
        bestFor: [
          'Complex approval workflows',
          'Multi-department processes',
          'Case management automation'
        ],
        keyFeatures: [
          'Visual workflow designer',
          'Policy-driven routing',
          'SLA monitoring & escalation',
          'Real-time process visibility'
        ],
        timeline: '8-16 weeks',
        complexity: 'High',
        href: '/services/automation/orchestration',
        icon: Zap
      },
      {
        name: 'System Integration',
        tagline: 'Connect legacy & modern systems seamlessly',
        bestFor: [
          'Eliminating manual data transfers',
          'ERP & financial system integration',
          'Cross-agency data sharing'
        ],
        keyFeatures: [
          '200+ pre-built connectors',
          'Real-time data synchronization',
          'API & legacy system support',
          'FedRAMP-authorized platform'
        ],
        timeline: '8-12 weeks',
        complexity: 'High',
        href: '/services/automation/integration',
        icon: Cloud
      }
    ],
    analytics: [
      {
        name: 'Data Strategy',
        tagline: 'Roadmap for data-driven transformation',
        bestFor: [
          'Starting data modernization journey',
          'Aligning data with mission goals',
          'Building data governance framework'
        ],
        keyFeatures: [
          'Data maturity assessment',
          'Strategic roadmap development',
          'Governance framework design',
          'Technology stack recommendations'
        ],
        timeline: '6-10 weeks',
        complexity: 'Medium',
        href: '/services/data-analytics/strategy',
        icon: Target
      },
      {
        name: 'Data Engineering',
        tagline: 'Build scalable data pipelines & infrastructure',
        bestFor: [
          'Modernizing data infrastructure',
          'Building data lakes/warehouses',
          'Real-time data processing'
        ],
        keyFeatures: [
          'ETL/ELT pipeline development',
          'Data lake & warehouse design',
          'Real-time streaming pipelines',
          'Cloud-native data platforms'
        ],
        timeline: '3-6 months',
        complexity: 'High',
        href: '/services/data-analytics/engineering',
        icon: Cloud
      },
      {
        name: 'Machine Learning & AI',
        tagline: 'Predictive analytics & intelligent automation',
        bestFor: [
          'Predictive maintenance',
          'Fraud detection & anomaly detection',
          'Natural language processing'
        ],
        keyFeatures: [
          'Custom ML model development',
          'Model training & deployment',
          'MLOps & model monitoring',
          'Responsible AI governance'
        ],
        timeline: '4-8 months',
        complexity: 'High',
        href: '/services/data-analytics/ml-ai',
        icon: Bot
      },
      {
        name: 'Data Visualization',
        tagline: 'Interactive dashboards & business intelligence',
        bestFor: [
          'Executive dashboards',
          'Operational monitoring',
          'Self-service analytics'
        ],
        keyFeatures: [
          'Interactive dashboard design',
          'Real-time data visualization',
          'Self-service BI platforms',
          'Mobile-responsive analytics'
        ],
        timeline: '6-12 weeks',
        complexity: 'Medium',
        href: '/services/data-analytics/visualization',
        icon: BarChart3
      }
    ]
  };

  const activeServices = comparisons[activeCategory];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-semibold mb-4">
              Service Selection Guide
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Compare Our Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Not sure which service is right for your agency? Compare features, timelines, and use cases side-by-side to find the perfect fit for your mission.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeCategory === category.id
                      ? 'bg-accent text-accent-foreground shadow-lg'
                      : 'bg-background hover:bg-accent/10'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {activeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="border-b bg-secondary/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-accent/10 rounded-lg p-3">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Complexity</div>
                        <div className={`font-bold ${
                          service.complexity === 'High' ? 'text-orange-500' :
                          service.complexity === 'Medium' ? 'text-yellow-500' :
                          'text-green-500'
                        }`}>
                          {service.complexity}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.name}</CardTitle>
                    <p className="text-muted-foreground">{service.tagline}</p>
                  </CardHeader>
                  
                  <CardContent className="p-6 space-y-6">
                    {/* Best For */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-accent" />
                        Best For
                      </h4>
                      <ul className="space-y-2">
                        {service.bestFor.map((use, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-accent" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.keyFeatures.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline */}
                    <div className="bg-secondary rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-1">Typical Timeline</div>
                      <div className="text-xl font-bold text-accent">{service.timeline}</div>
                    </div>

                    {/* CTA */}
                    <Link href={service.href}>
                      <Button className="w-full bg-orange-gradient hover:opacity-90">
                        Learn More About {service.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Not Sure Which Service You Need?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Schedule a free consultation with our federal technology experts. We'll assess your requirements and recommend the optimal service mix for your agency.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View All Services
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
