import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, CheckCircle2, Cloud, Layers, Shield, Zap, Network, Database, TrendingUp, Lock, RefreshCw, Server, Globe } from 'lucide-react';

export default function MultiCloud() {
  const benefits = [
    {
      icon: Shield,
      title: 'Vendor Independence',
      description: 'Avoid vendor lock-in with portable architectures across AWS, Azure, and Google Cloud platforms using cloud-agnostic tools and standards.'
    },
    {
      icon: Zap,
      title: '99.99% High Availability',
      description: 'Mission-critical uptime with automated failover across multiple cloud providers and geographic regions for operational resilience.'
    },
    {
      icon: Database,
      title: 'Geographic Redundancy',
      description: 'Disaster recovery and automated backup across cloud providers ensuring mission-critical data protection and business continuity.'
    }
  ];

  const architectures = [
    {
      title: 'Multi-Cloud Strategy',
      icon: Globe,
      description: 'Distribute workloads across multiple public cloud providers (AWS, Azure, GCP) for resilience, flexibility, and vendor diversification.',
      useCases: ['Mission-critical applications', 'Geographic redundancy', 'Vendor diversification', 'Cost optimization']
    },
    {
      title: 'Hybrid Cloud',
      icon: Lock,
      description: 'Seamlessly integrate on-premises infrastructure with public cloud for regulatory compliance, data sovereignty, and classified workloads.',
      useCases: ['Classified workloads', 'Data residency requirements', 'Legacy system integration', 'SCIF connectivity']
    },
    {
      title: 'Cloud-Agnostic Design',
      icon: Cloud,
      description: 'Build portable applications using Kubernetes, Terraform, and cloud-agnostic services for maximum flexibility and long-term independence.',
      useCases: ['Long-term vendor independence', 'Portable applications', 'Cost optimization', 'Technology flexibility']
    }
  ];

  const capabilities = [
    {
      title: 'Unified Management',
      description: 'Single pane of glass for managing resources across AWS GovCloud, Azure Government, and Google Cloud with centralized monitoring and cost tracking.'
    },
    {
      title: 'Workload Portability',
      description: 'Containerized applications with Kubernetes enabling seamless workload migration between cloud providers without code changes.'
    },
    {
      title: 'Automated Failover',
      description: 'Intelligent traffic routing and automated failover across cloud providers ensuring continuous availability during outages.'
    },
    {
      title: 'Cost Optimization',
      description: 'Deploy each workload to the most cost-effective cloud platform while maintaining consistent security and compliance standards.'
    }
  ];

  const tools = [
    'Kubernetes', 'Terraform', 'Ansible', 'HashiCorp Consul',
    'Istio Service Mesh', 'ArgoCD', 'Prometheus', 'Grafana'
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
            <span>Multi-Cloud & Hybrid Solutions</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-semibold mb-4">
              99.99% Uptime • Vendor-Agnostic Architecture
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Multi-Cloud & Hybrid Solutions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Vendor-agnostic architecture across AWS, Azure, and Google Cloud with unified management, disaster recovery, and seamless workload portability. NexDyne delivers multi-cloud strategies that maximize flexibility, minimize lock-in, and ensure 99.99% availability for mission-critical government operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Multi-Cloud Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Architecture Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Government Agencies Choose Multi-Cloud</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic advantages of multi-cloud architecture for mission-critical federal operations and long-term technology independence.
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

      {/* Architecture Approaches */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Multi-Cloud Architecture Approaches</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored multi-cloud strategies based on your agency's specific requirements, constraints, and mission objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {architectures.map((arch, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <arch.icon className="h-14 w-14 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{arch.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{arch.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Use Cases:</h4>
                    {arch.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Multi-Cloud Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade capabilities for managing complex multi-cloud environments with unified control and visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Multi-Cloud Tools & Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cloud-agnostic tools for unified management, orchestration, and monitoring across all cloud providers.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Embrace Multi-Cloud Strategy?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start with a comprehensive multi-cloud assessment and discover how NexDyne can deliver vendor independence with 99.99% availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Multi-Cloud Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Architecture Examples
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Cloud Optimization & FinOps',
            description: 'Reduce multi-cloud costs by 40% with intelligent workload placement, reserved capacity, and automated rightsizing.',
            href: '/services/cloud-optimization',
            icon: TrendingUp
          },
          {
            title: 'Cloud Security & Compliance',
            description: 'Unified security policies and compliance monitoring across AWS, Azure, and GCP environments.',
            href: '/services/cloud-security',
            icon: Lock
          },
          {
            title: 'Disaster Recovery & Business Continuity',
            description: 'Multi-cloud disaster recovery strategies with cross-cloud failover and geo-redundant backups.',
            href: '/services/disaster-recovery',
            icon: RefreshCw
          }
        ]}
        title="Strengthen Your Multi-Cloud Strategy"
        description="Enhance multi-cloud capabilities with cost optimization, security, and resilience services."
      />

      <Footer />
    </div>
  );
}
