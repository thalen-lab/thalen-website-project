import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Cloud, Shield, Network, Zap, Server, Lock, GitBranch, Database } from 'lucide-react';

export default function HybridCloud() {
  const hybridCapabilities = [
    {
      icon: Network,
      title: 'Secure Hybrid Connectivity',
      description: 'We help agencies establish secure connections between on-premise data centers and FedRAMP/StateRAMP cloud platforms using VPNs, Direct Connect, ExpressRoute, and private network links.',
      benefits: ['AWS Direct Connect', 'Azure ExpressRoute', 'Google Cloud Interconnect', 'Site-to-site VPN tunnels']
    },
    {
      icon: GitBranch,
      title: 'Multi-Cloud Orchestration',
      description: 'We implement orchestration layers that manage workloads across on-premise infrastructure, AWS GovCloud, Azure Government, and Google Cloud while maintaining unified security controls.',
      benefits: ['Workload portability', 'Unified management', 'Cost optimization', 'Disaster recovery']
    },
    {
      icon: Database,
      title: 'Hybrid Data Synchronization',
      description: 'We design data replication strategies that keep on-premise and cloud databases synchronized with bi-directional sync, conflict resolution, and data consistency guarantees.',
      benefits: ['Real-time replication', 'Conflict resolution', 'Data validation', 'Audit logging']
    },
    {
      icon: Shield,
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <Link href="/services/system-integration">
              <Button variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
                ← Back to Systems Integration
              </Button>
            </Link>
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Hybrid Cloud Architecture
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hybrid Cloud Integration
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We help agencies connect on-premise systems with FedRAMP and StateRAMP cloud platforms through secure tunnels, VPNs, and hybrid architecture patterns—enabling workload portability and unified management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Start Hybrid Cloud Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/capability-generator">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Generate Capability Statement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Capabilities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hybrid Cloud Integration Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect on-premise infrastructure with cloud platforms while maintaining security and compliance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {hybridCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                        <p className="text-muted-foreground mb-4">{capability.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hybrid Cloud Platform Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We integrate on-premise infrastructure with AWS GovCloud, Azure Government, and Google Cloud
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <Cloud className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">{platform.category}</h3>
                      <div className="space-y-4">
                        {platform.features.map((feature, idx) => (
                          <div key={idx} className="border-l-2 border-border pl-4">
                            <div className="font-semibold mb-1">{feature.name}</div>
                            <div className="text-sm text-muted-foreground">{feature.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Patterns */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hybrid Architecture Patterns</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We design hybrid architectures tailored to your agency's specific workload requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {architecturePatterns.map((pattern, index) => (
              <div key={index} className="flex gap-3 p-6 bg-secondary rounded-lg border-2 border-border">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">{pattern.name}</div>
                  <div className="text-sm text-muted-foreground">{pattern.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking & Security */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Networking & Security</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement enterprise-grade networking and security controls for hybrid environments
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {networkingSecurity.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-2">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compliance & Governance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All hybrid architectures meet FedRAMP, StateRAMP, and FISMA requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-2">{feature.name}</div>
                      <div className="text-sm text-muted-foreground">{feature.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Hybrid Cloud?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our hybrid cloud specialists can help you design and implement secure connections between on-premise infrastructure and FedRAMP/StateRAMP cloud platforms.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Schedule Hybrid Cloud Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/system-integration">
                <Button size="lg" variant="outline">
                  View All Integration Services
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
