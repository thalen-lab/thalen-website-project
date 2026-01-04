import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, Cloud, Server, Lock } from 'lucide-react';

export default function CloudOptimization() {
  const benefits = [
    {
      title: '40-60% Cost Reduction',
      description: 'Average savings through right-sizing, reserved instances, automated cost controls, and intelligent resource allocation across all cloud workloads.'
    },
    {
      title: '200-300% Performance Improvement',
      description: 'Dramatically improve application performance through architecture optimization, resource tuning, and cloud-native service adoption.'
    },
    {
      title: 'Security Enhancement',
      description: 'Strengthen security posture while optimizing costs with automated compliance monitoring, threat detection, and zero-trust architecture.'
    }
  ];

  const optimizationAreas = [
    {
      title: 'Compute Optimization',
      items: [
        'Right-sizing EC2/VM instances based on actual usage patterns',
        'Implementing auto-scaling for dynamic workloads',
        'Leveraging spot instances for non-critical workloads',
        'Optimizing container and Kubernetes resource allocation'
      ]
    },
    {
      title: 'Storage Optimization',
      items: [
        'Implementing intelligent tiering for S3/Blob storage',
        'Optimizing database instance types and storage classes',
        'Automated lifecycle policies for data archival',
        'Deduplication and compression strategies'
      ]
    },
    {
      title: 'Network Optimization',
      items: [
        'Optimizing data transfer costs across regions',
        'Implementing CDN for content delivery',
        'VPC peering and transit gateway optimization',
        'Load balancer and traffic routing efficiency'
      ]
    },
    {
      title: 'Licensing Optimization',
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-28 bg-[url('/patterns/hero-pattern.svg')] bg-cover bg-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85 z-0"></div>
        <div className="container relative z-10">
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/services/cloud" className="hover:text-[oklch(0.75_0.15_55)]">Cloud Infrastructure & Modernization</Link>
            <span className="mx-2">/</span>
            <span>Cloud Optimization & Cost Management</span>
          </nav>
          
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              40-60% Average Cost Reduction • 200-300% Performance Gains
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Cloud Optimization & Cost Management
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              We help agencies maximize cloud ROI across AWS GovCloud, Azure Government, and Google Cloud through intelligent resource optimization, automated cost controls, and performance tuning. Our optimization framework reduces cloud spending by 40-60% while improving application performance by 200-300%—delivering immediate financial impact and operational excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 font-semibold">
                Request Cost Optimization Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)] font-semibold">
                Calculate Your Savings
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Measurable Results</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Data-Driven Optimization Outcomes</h2>
            <p className="text-xl text-slate-600">
              Government agencies achieve dramatic cost savings and performance improvements through NexDyne Technology's data-driven optimization approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Core Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Comprehensive Optimization Areas</h2>
            <p className="text-xl text-slate-600">
              End-to-end optimization across compute, storage, network, and licensing to maximize cloud efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {optimizationAreas.map((area, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-6">{area.title}</h3>
                  <ul className="space-y-4">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
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
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">A Structured Path to Efficiency</h2>
            <p className="text-xl text-slate-600">
              Our structured approach delivers immediate cost savings and sustained optimization over time, ensuring long-term value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 text-left">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{phase.title}</h3>
                  <p className="text-sm text-slate-600">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Tools & Platforms</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Enterprise-Grade Technology Stack</h2>
            <p className="text-xl text-slate-600">
              We leverage enterprise-grade tools for continuous cost monitoring, performance optimization, and security.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <span key={index} className="bg-white border-2 border-slate-200 px-6 py-3 rounded-lg font-semibold text-[oklch(0.20_0.05_250)] hover:border-[oklch(0.70_0.18_55)] transition-colors text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Optimize Your Cloud Spend?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start with a comprehensive cost optimization assessment and discover how much your agency can save with NexDyne's proven optimization framework.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 font-semibold">
              Request Cost Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)] font-semibold">
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
