import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function HybridCloud() {
  const hybridCapabilities = [
    {
      title: 'Secure Hybrid Connectivity',
      description: 'We help agencies establish secure connections between on-premise data centers and FedRAMP/StateRAMP cloud platforms using VPNs, Direct Connect, ExpressRoute, and private network links.',
      benefits: ['AWS Direct Connect', 'Azure ExpressRoute', 'Google Cloud Interconnect', 'Site-to-site VPN tunnels']
    },
    {
      title: 'Multi-Cloud Orchestration',
      description: 'We implement orchestration layers that manage workloads across on-premise infrastructure, AWS GovCloud, Azure Government, and Google Cloud while maintaining unified security controls.',
      benefits: ['Workload portability', 'Unified management', 'Cost optimization', 'Disaster recovery']
    },
    {
      title: 'Hybrid Data Synchronization',
      description: 'We design data replication strategies that keep on-premise and cloud databases synchronized with bi-directional sync, conflict resolution, and data consistency guarantees.',
      benefits: ['Real-time replication', 'Conflict resolution', 'Data validation', 'Audit logging']
    },
    {
      title: 'Hybrid Security Controls',
      description: 'We implement unified security controls across hybrid environments including identity federation, network segmentation, encryption, and centralized monitoring.',
      benefits: ['Identity federation (SAML/OAuth)', 'Network micro-segmentation', 'End-to-end encryption', 'Centralized SIEM']
    }
  ];

  const cloudPlatforms = [
    {
      category: 'AWS GovCloud',
      features: [
        { name: 'AWS Direct Connect', description: 'Dedicated network connection from on-premise to AWS GovCloud regions' },
        { name: 'AWS Transit Gateway', description: 'Hub-and-spoke network architecture for multi-VPC connectivity' },
        { name: 'AWS Outposts', description: 'Run AWS infrastructure on-premise for hybrid workloads' }
      ]
    },
    {
      category: 'Azure Government',
      features: [
        { name: 'Azure ExpressRoute', description: 'Private connection to Azure Government datacenters' },
        { name: 'Azure Arc', description: 'Extend Azure management to on-premise and multi-cloud resources' },
        { name: 'Azure Stack Hub', description: 'Run Azure services in your on-premise datacenter' }
      ]
    },
    {
      category: 'Google Cloud',
      features: [
        { name: 'Cloud Interconnect', description: 'Dedicated connectivity to Google Cloud Platform' },
        { name: 'Anthos', description: 'Unified platform for managing workloads across on-premise and cloud' },
        { name: 'Cloud VPN', description: 'Secure IPsec VPN tunnels for hybrid connectivity' }
      ]
    },
    {
      category: 'Multi-Cloud Management',
      features: [
        { name: 'Kubernetes Federation', description: 'Manage containerized workloads across multiple clouds' },
        { name: 'Terraform Enterprise', description: 'Infrastructure-as-code for multi-cloud provisioning' },
        { name: 'HashiCorp Consul', description: 'Service mesh for hybrid and multi-cloud networking' }
      ]
    }
  ];

  const architecturePatterns = [
    { name: 'Cloud Bursting', description: 'Scale workloads to cloud during peak demand while maintaining on-premise baseline' },
    { name: 'Active-Active Hybrid', description: 'Run workloads simultaneously on-premise and in cloud for high availability' },
    { name: 'Data Residency Hybrid', description: 'Keep sensitive data on-premise while running compute workloads in cloud' },
    { name: 'Disaster Recovery Hybrid', description: 'Use cloud as disaster recovery site for on-premise production systems' }
  ];

  const networkingSecurity = [
    { name: 'Private Network Links', description: 'Dedicated fiber connections between on-premise datacenters and cloud regions (not public internet)' },
    { name: 'Network Segmentation', description: 'Micro-segmentation using VPCs, subnets, security groups, and network ACLs' },
    { name: 'Encryption in Transit', description: 'TLS 1.2+ encryption for all data moving between on-premise and cloud environments' },
    { name: 'Identity Federation', description: 'Single sign-on (SSO) using SAML, OAuth, or Active Directory Federation Services (ADFS)' }
  ];

  const complianceFeatures = [
    { name: 'FedRAMP & StateRAMP Compliance', description: 'All hybrid architectures follow FedRAMP and StateRAMP boundary requirements and security controls' },
    { name: 'FISMA Compliance', description: 'Hybrid designs meet FISMA Low, Moderate, and High security requirements' },
    { name: 'Data Sovereignty', description: 'Ensure data remains within authorized geographic regions and cloud environments' },
    { name: 'Audit & Monitoring', description: 'Centralized logging and monitoring across hybrid infrastructure for compliance audits' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-28 sm:py-32 lg:py-40" style={{ backgroundImage: 'url(/images/patterns/pattern-1.png)' }}>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl text-white">
            <Link href="/services/system-integration">
              <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
                ← Back to Systems Integration
              </Button>
            </Link>
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Hybrid Cloud Architecture
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hybrid Cloud Integration
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We help agencies connect on-premise systems with FedRAMP and StateRAMP cloud platforms through secure tunnels, VPNs, and hybrid architecture patterns—enabling workload portability and unified management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Start Hybrid Cloud Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/capability-generator">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  Generate Capability Statement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Capabilities */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Capabilities</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Hybrid Cloud Integration Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Connect on-premise infrastructure with cloud platforms while maintaining security and compliance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {hybridCapabilities.map((capability, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{capability.title}</h3>
                        <p className="text-slate-600 mb-4">{capability.description}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-600">{benefit}</span>
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

      {/* Cloud Platforms */}
      <section className="py-20 sm:py-24 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Support</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Hybrid Cloud Platform Support</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We integrate on-premise infrastructure with AWS GovCloud, Azure Government, and Google Cloud
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{platform.category}</h3>
                        <div className="space-y-4">
                          {platform.features.map((feature, idx) => (
                            <div key={idx}>
                              <div className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">{feature.name}</div>
                              <div className="text-sm text-slate-600">{feature.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Patterns */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Approach</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Hybrid Architecture Patterns</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We design hybrid architectures tailored to your agency's specific workload requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {architecturePatterns.map((pattern, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-[oklch(0.97_0.01_250)] rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                <div>
                  <div className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">{pattern.name}</div>
                  <div className="text-sm text-slate-600">{pattern.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking & Security */}
      <section className="py-20 sm:py-24 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Secure & Compliant</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Networking & Security</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We build secure, compliant hybrid environments that meet government standards
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div whileHover={{ y: -5 }}>
              <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Networking</h3>
                  <div className="space-y-4">
                    {networkingSecurity.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <div>
                          <div className="font-semibold text-sm text-[oklch(0.20_0.05_250)]">{item.name}</div>
                          <div className="text-sm text-slate-600">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div whileHover={{ y: -5 }}>
              <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Compliance</h3>
                  <div className="space-y-4">
                    {complianceFeatures.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <div>
                          <div className="font-semibold text-sm text-[oklch(0.20_0.05_250)]">{item.name}</div>
                          <div className="text-sm text-slate-600">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-28 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Hybrid Cloud?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/80">
            Let our experts design and implement a secure, scalable, and compliant hybrid cloud architecture that bridges your on-premise and cloud environments. We help you unlock workload portability, optimize costs, and accelerate innovation.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                Explore Other Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
