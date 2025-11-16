import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Target, BarChart, Bot, Network, GitBranch } from 'lucide-react';

export default function Automation() {
  const subServices = [
    {
      icon: Bot,
      title: 'Robotic Process Automation (RPA)',
      description: 'Deploy AI-powered digital workers that execute repetitive tasks 24/7 with zero errors, freeing your team to focus on mission-critical work.',
      benefits: ['24/7 automated processing', 'Zero-error execution', 'Rapid 4-6 week deployment', 'FedRAMP-compliant bots'],
      link: '/services/automation/rpa'
    },
    {
      icon: Network,
      title: 'Enterprise Integration Platform',
      description: 'Eliminate data silos and manual transfers by connecting all your systems through a secure, government-certified integration platform.',
      benefits: ['Unified data landscape', 'Real-time synchronization', 'No custom APIs needed', 'CMMC Level 2 certified'],
      link: '/services/automation/integration'
    },
    {
      icon: GitBranch,
      title: 'Process Orchestration',
      description: 'Automate complex, multi-system workflows from end to end with intelligent orchestration that adapts to your agency\'s unique processes.',
      benefits: ['End-to-end automation', 'Cross-department workflows', 'Bottleneck identification', 'Continuous optimization'],
      link: '/services/automation/orchestration'
    }
  ];

  const methodology = [
    {
      number: '1',
      title: 'Process Assessment',
      subtitle: 'Comprehensive mapping & analysis',
      points: [
        'End-to-end process mapping',
        'Bottleneck identification',
        'ROI opportunity analysis',
        'Current state documentation'
      ]
    },
    {
      number: '2',
      title: 'ROI-Focused Design',
      subtitle: 'Strategic automation planning',
      points: [
        'Architecture optimization',
        'Technology stack selection',
        'Implementation roadmap',
        'Risk mitigation strategy'
      ]
    },
    {
      number: '3',
      title: 'AI-Assisted Implementation',
      subtitle: 'Intelligent pipeline development',
      points: [
        'RPA deployment',
        'ML model integration',
        'Decision support systems',
        'Workflow orchestration'
      ]
    },
    {
      number: '4',
      title: 'Performance Monitoring',
      subtitle: 'Continuous optimization',
      points: [
        'Real-time dashboards',
        'ROI tracking',
        'Predictive analytics',
        'Continuous improvement'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '85% Average Efficiency Gain',
      description: 'Proven track record of dramatically reducing processing time and operational costs'
    },
    {
      icon: Target,
      title: '12-Month ROI Breakeven',
      description: 'Fast return on investment with measurable business impact from day one'
    },
    {
      icon: CheckCircle2,
      title: '100% Security Compliance',
      description: 'Maintained compliance across FedRAMP, CMMC, and ISO 27001 standards'
    }
  ];

  const caseStudies = [
    {
      title: 'Federal Agency Achieves 85% Process Automation',
      description: 'Transformed manual workflows into intelligent automation, reducing processing time from 6 weeks to 2 days while maintaining Top Secret/SCI compliance.',
      metric: '85%',
      metricLabel: 'Automation Rate',
      industry: 'Federal Government'
    },
    {
      title: 'Manufacturing Giant Achieves 99.2% Uptime',
      description: 'Cybersecurity and predictive maintenance automation eliminated 75% of unplanned downtime across 50+ facilities.',
      metric: '99.2%',
      metricLabel: 'System Uptime',
      industry: 'Manufacturing'
    },
    {
      title: 'Energy Grid Automation Prevents $500M in Outage Costs',
      description: 'Smart grid automation for regional utility serving 12M customers achieved 99.97% reliability through predictive maintenance.',
      metric: '$500M',
      metricLabel: 'Annual Savings',
      industry: 'Energy'
    }
  ];

  const technologies = [
    'UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate',
    'Camunda', 'Apache Airflow', 'TensorFlow', 'PyTorch', 'AWS SageMaker',
    'Azure ML', 'Google Cloud AI', 'Kubernetes', 'Docker'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Flagship Service
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Intelligent Automation & Process Optimization
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Our flagship service combines comprehensive process assessment, strategic automation design, and AI-assisted implementation to deliver measurable ROI and sustained business transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Service Sheet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Specializations */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Automation Specializations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three proven approaches to transform your operations with intelligent automation tailored to your agency's unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all border-2 hover:border-accent">
                <CardContent className="p-8">
                  <service.icon className="h-16 w-16 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.link}>
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container">
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

      {/* The NexDyne Methodology */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The NexDyne Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven four-phase approach that ensures successful automation implementation with measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((phase, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-accent/10 -mr-4 -mt-4">
                    {phase.number}
                  </div>
                  <div className="relative">
                    <div className="text-5xl font-bold text-accent mb-2">{phase.number}</div>
                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{phase.subtitle}</p>
                    <ul className="space-y-2">
                      {phase.points.map((point, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Explore Full Methodology
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Results Across Industries</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world examples of how our intelligent automation delivers transformative outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="text-sm font-semibold text-accent mb-3">{study.industry}</div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  <div className="bg-accent/10 rounded-lg p-6 text-center mb-6">
                    <div className="text-4xl font-bold text-accent mb-1">{study.metric}</div>
                    <div className="text-sm text-muted-foreground">{study.metricLabel}</div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage industry-leading automation and AI technologies to deliver best-in-class solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-card border border-border rounded-lg px-6 py-3 text-sm font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive automation assessment and discover how our proven methodology can deliver measurable ROI for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
