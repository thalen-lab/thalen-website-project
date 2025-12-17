import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, Gauge, Shield, Clock, BarChart3, Zap, Database, Cloud, Server, Lock } from 'lucide-react';

export default function CloudOptimization() {
  const benefits = [
    {
      icon: DollarSign,
      title: '40-60% Cost Reduction',
      description: 'Average savings through right-sizing, reserved instances, automated cost controls, and intelligent resource allocation across all cloud workloads.'
    },
    {
      icon: Gauge,
      title: '200-300% Performance Improvement',
      description: 'Dramatically improve application performance through architecture optimization, resource tuning, and cloud-native service adoption.'
    },
    {
      icon: Shield,
      title: 'Security Enhancement',
      description: 'Strengthen security posture while optimizing costs with automated compliance monitoring, threat detection, and zero-trust architecture.'
    }
  ];

  const optimizationAreas = [
    {
      title: 'Compute Optimization',
      icon: Zap,
      items: [
        'Right-sizing EC2/VM instances based on actual usage patterns',
        'Implementing auto-scaling for dynamic workloads',
        'Leveraging spot instances for non-critical workloads',
        'Optimizing container and Kubernetes resource allocation'
      ]
    },
    {
      title: 'Storage Optimization',
      icon: Database,
      items: [
        'Implementing intelligent tiering for S3/Blob storage',
        'Optimizing database instance types and storage classes',
        'Automated lifecycle policies for data archival',
        'Deduplication and compression strategies'
      ]
    },
    {
      title: 'Network Optimization',
      icon: BarChart3,
      items: [
        'Optimizing data transfer costs across regions',
        'Implementing CDN for content delivery',
        'VPC peering and transit gateway optimization',
        'Load balancer and traffic routing efficiency'
      ]
    },
    {
      title: 'Licensing Optimization',
      icon: DollarSign,
      items: [
        'Reserved instance and savings plan analysis',
        'License mobility and BYOL strategies',
        'Commitment-based discount optimization',
        'Third-party software license management'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Cost & Performance Assessment',
      description: 'Comprehensive analysis of current cloud spending, resource utilization, and performance bottlenecks with detailed optimization opportunities.'
    },
    {
      step: '02',
      title: 'Optimization Strategy',
      description: 'Develop prioritized optimization roadmap with ROI projections, risk assessment, and implementation timeline for maximum impact.'
    },
    {
      step: '03',
      title: 'Implementation & Tuning',
      description: 'Execute optimization initiatives with continuous monitoring, validation, and performance tuning to ensure desired outcomes.'
    },
    {
      step: '04',
      title: 'Continuous Optimization',
      description: 'Ongoing monitoring, automated cost controls, and quarterly optimization reviews to maintain peak efficiency and cost-effectiveness.'
    }
  ];

  const tools = [
    'AWS Cost Explorer', 'Azure Cost Management', 'Google Cloud Billing', 'CloudHealth',
    'Spot.io', 'ParkMyCloud', 'Datadog', 'New Relic'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <nav className="text-sm mb-6 opacity-80">
            <Link href="/services/cloud" className="hover:text-accent">Cloud Infrastructure & Modernization</Link>
            <span className="mx-2">/</span>
            <span>Cloud Optimization & Cost Management</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-semibold mb-4">
              40-60% Average Cost Reduction • 200-300% Performance Gains
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloud Optimization & Cost Management
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We help agencies maximize cloud ROI across AWS GovCloud, Azure Government, and Google Cloud through intelligent resource optimization, automated cost controls, and performance tuning. Our optimization framework reduces cloud spending by 40-60% while improving application performance by 200-300%—delivering immediate financial impact and operational excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Cost Optimization Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Calculate Your Savings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Measurable Optimization Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Government agencies achieve dramatic cost savings and performance improvements through Thalen Technologies's data-driven optimization approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-8">
                  <benefit.icon className="h-14 w-14 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Optimization Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end optimization across compute, storage, network, and licensing to maximize cloud efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {optimizationAreas.map((area, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <area.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                  <ul className="space-y-3">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0 mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Optimization Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured approach delivering immediate cost savings and sustained optimization over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl hover:border-accent transition-all active:scale-95">
                <CardContent className="p-8">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-muted/20 -mr-4 -mt-4">
                    {phase.step}
                  </div>
                  <div className="relative">
                    <div className="text-5xl font-bold text-primary mb-2">{phase.step}</div>
                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Optimization Tools & Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade tools for continuous cost monitoring and performance optimization.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <span key={index} className="bg-card border-2 border-border px-6 py-3 rounded-lg font-semibold hover:border-accent transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Optimize Your Cloud Spending?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start with a comprehensive cost optimization assessment and discover how much your agency can save with Thalen Technologies's proven optimization framework.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Cost Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Calculate Potential Savings
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Multi-Cloud Strategy & Management',
            description: 'Optimize costs and performance across AWS, Azure, and GCP with unified management and workload placement strategies.',
            href: '/services/multi-cloud',
            icon: Cloud
          },
          {
            title: 'Cloud Security & Compliance',
            description: 'Maintain FedRAMP compliance while optimizing resources with automated security controls and continuous monitoring.',
            href: '/services/cloud-security',
            icon: Lock
          },
          {
            title: 'Infrastructure as Code',
            description: 'Codify optimized configurations for consistent deployment and automated cost management across environments.',
            href: '/services/infrastructure-as-code',
            icon: Server
          }
        ]}
        title="Maximize Cloud Value"
        description="Combine optimization with these services for comprehensive cloud cost and performance management."
      />

      <Footer />
    </div>
  );
}
