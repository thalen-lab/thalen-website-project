import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight } from 'lucide-react';

export default function MultiCloud() {
  const benefits = [
    {
      title: 'Vendor Independence',
      description: 'Avoid vendor lock-in with portable architectures across AWS, Azure, and Google Cloud platforms using cloud-agnostic tools and standards.'
    },
    {
      title: '99.99% High Availability',
      description: 'Mission-critical uptime with automated failover across multiple cloud providers and geographic regions for operational resilience.'
    },
    {
      title: 'Geographic Redundancy',
      description: 'Disaster recovery and automated backup across cloud providers ensuring mission-critical data protection and business continuity.'
    }
  ];

  const architectures = [
    {
      title: 'Multi-Cloud Strategy',
      description: 'Distribute workloads across multiple public cloud providers (AWS, Azure, GCP) for resilience, flexibility, and vendor diversification.',
      useCases: ['Mission-critical applications', 'Geographic redundancy', 'Vendor diversification', 'Cost optimization']
    },
    {
      title: 'Hybrid Cloud',
      description: 'Seamlessly integrate on-premises infrastructure with public cloud for regulatory compliance, data sovereignty, and classified workloads.',
      useCases: ['Classified workloads', 'Data residency requirements', 'Legacy system integration', 'SCIF connectivity']
    },
    {
      title: 'Cloud-Agnostic Design',
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/multi-cloud-hero.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        <div className="container relative">
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/services/cloud" className="hover:text-[oklch(0.75_0.15_55)]">Cloud Infrastructure & Modernization</Link>
            <span className="mx-2">/</span>
            <span>Multi-Cloud & Hybrid Solutions</span>
          </nav>
          
          <div className="max-w-4xl">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              99.99% Uptime • Vendor-Agnostic Architecture
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Multi-Cloud & Hybrid Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Vendor-agnostic architecture across AWS, Azure, and Google Cloud with unified management, disaster recovery, and seamless workload portability. NexDyne delivers multi-cloud strategies that maximize flexibility, minimize lock-in, and ensure 99.99% availability for mission-critical government operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Request Multi-Cloud Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                Download Architecture Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Key Benefits</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Why Government Agencies Choose Multi-Cloud</h2>
            <p className="text-xl text-slate-600">
              Strategic advantages of multi-cloud architecture for mission-critical government operations and long-term technology independence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Approaches */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Architecture Models</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Multi-Cloud Architecture Approaches</h2>
            <p className="text-xl text-slate-600">
              Tailored multi-cloud strategies based on your agency's specific requirements, constraints, and mission objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {architectures.map((arch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{arch.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{arch.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-[oklch(0.20_0.05_250)]">Use Cases:</h4>
                      {arch.useCases.map((useCase, idx) => (
                        <div key={idx} className="flex items-start text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                          <span>{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Core Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Multi-Cloud Capabilities</h2>
            <p className="text-xl text-slate-600">
              Enterprise-grade capabilities for managing complex multi-cloud environments with unified control and visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{capability.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Tools & Platforms</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Multi-Cloud Tools & Platforms</h2>
            <p className="text-xl text-slate-600">
              Cloud-agnostic tools for unified management, orchestration, and monitoring across all cloud providers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <span key={index} className="bg-white border-2 border-slate-200 px-6 py-3 rounded-lg font-semibold text-[oklch(0.20_0.05_250)] hover:border-[oklch(0.70_0.18_55)] transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Embrace a Multi-Cloud Strategy?</h2>
          <p className="text-xl text-white/90 mb-8">
            Start with a comprehensive multi-cloud assessment and discover how NexDyne can deliver vendor independence with 99.99% availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Request Multi-Cloud Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
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
          },
          {
            title: 'Cloud Security & Compliance',
            description: 'Unified security policies and compliance monitoring across AWS, Azure, and GCP environments.',
            href: '/services/cloud-security',
          },
          {
            title: 'Disaster Recovery & Business Continuity',
            description: 'Multi-cloud disaster recovery strategies with cross-cloud failover and geo-redundant backups.',
            href: '/services/disaster-recovery',
          }
        ]}
        title="Strengthen Your Multi-Cloud Strategy"
        description="Enhance multi-cloud capabilities with cost optimization, security, and resilience services."
      />

      <Footer />
    </div>
  );
}
