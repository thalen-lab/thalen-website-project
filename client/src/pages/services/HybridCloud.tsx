import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

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
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/services/system-integration/hero-hybrid-cloud.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/85 to-[#12344D]/80"></div>
        <div className="container relative">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Services', href: '/consulting-services' },
                  { label: 'System Integration', href: '/services/system-integration' },
                  { label: 'Hybrid Cloud Integration' }
                ]} 
                variant="light" 
              />
            </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <Link href="/services/system-integration">
              <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
                ← Back to Systems Integration
              </Button>
            </Link>
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Hybrid Cloud Architecture
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Hybrid Cloud Integration
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              We help agencies connect on-premise systems with FedRAMP and StateRAMP cloud platforms through secure tunnels, VPNs, and hybrid architecture patterns—enabling workload portability and unified management.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
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
          </motion.div>
        </div>
      </section>

      {/* Hybrid Capabilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Capabilities</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Hybrid Cloud Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive hybrid cloud services for connecting on-premise and cloud infrastructure
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {hybridCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="pt-8">
                    <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{capability.title}</h3>
                    <p className="text-slate-600 mb-4">{capability.description}</p>
                    <div className="space-y-2 pt-4 border-t border-slate-100">
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
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Expertise</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Government Cloud Platforms</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We have deep expertise with all major FedRAMP-authorized cloud platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{platform.category}</h3>
                  <div className="space-y-4">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="border-l-2 border-slate-200 pl-4">
                        <div className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">{feature.name}</div>
                        <div className="text-sm text-slate-600">{feature.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Patterns */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Architecture</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Hybrid Architecture Patterns</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We design hybrid architectures tailored to your agency's specific requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {architecturePatterns.map((pattern, index) => (
              <div key={index} className="flex gap-3 p-3 sm:p-4 md:p-6 bg-[oklch(0.97_0.01_250)] rounded-lg border-2 border-slate-200">
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
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Network Security</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Networking & Security</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Secure connectivity between on-premise and cloud environments
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {networkingSecurity.map((item, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <div>
                      <div className="font-semibold mb-2 text-[oklch(0.20_0.05_250)]">{item.name}</div>
                      <div className="text-sm text-slate-600">{item.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Security First</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Compliance & Security</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              All hybrid architectures meet FedRAMP, StateRAMP, and FISMA requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <div>
                      <div className="font-semibold mb-2 text-[oklch(0.20_0.05_250)]">{feature.name}</div>
                      <div className="text-sm text-slate-600">{feature.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Hybrid Cloud?</h2>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Our hybrid cloud specialists can help you design and implement secure connections between your on-premise infrastructure and government cloud platforms.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Schedule Hybrid Cloud Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/system-integration">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  View All Integration Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
