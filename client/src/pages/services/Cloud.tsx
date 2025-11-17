import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Cloud as CloudIcon, Shield, Zap, RefreshCw, Lock, Globe, GitBranch } from 'lucide-react';

export default function Cloud() {
  const subServices = [
    {
      icon: RefreshCw,
      title: 'Cloud Migration & Transition',
      description: 'Zero-downtime migration strategies that move your applications and data to the cloud while maintaining 100% operational continuity and regulatory compliance.',
      benefits: ['Zero business disruption', 'FedRAMP-compliant process', 'Automated validation', 'Rollback capability'],
      link: '/services/cloud-migration'
    },
    {
      icon: Zap,
      title: 'Cloud Optimization & Cost Management',
      description: 'Maximize cloud ROI through intelligent resource optimization, automated cost controls, and performance tuning that reduces spend by 30-50%.',
      benefits: ['30-50% cost reduction', 'Auto-scaling optimization', 'Reserved instance planning', 'Real-time monitoring'],
      link: '/services/cloud-optimization'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud & Hybrid Solutions',
      description: 'Vendor-agnostic architecture across AWS, Azure, and Google Cloud with unified management, disaster recovery, and seamless workload portability.',
      benefits: ['Vendor independence', 'Unified management', 'Workload portability', 'Disaster recovery'],
      link: '/services/multi-cloud'
    },
    {
      icon: Shield,
      title: 'Cloud Security & Compliance',
      description: 'Government-grade security with FedRAMP High authorization, CMMC Level 3 certification, and zero-trust architecture for mission-critical workloads.',
      benefits: ['FedRAMP High authorized', 'CMMC Level 3 certified', 'Zero-trust architecture', 'Continuous monitoring'],
      link: '/services/cloud-security'
    },
    {
      icon: GitBranch,
      title: 'Infrastructure as Code (IaC)',
      description: 'Automate infrastructure provisioning with Terraform, CloudFormation, and Ansible for consistent, repeatable deployments across all environments.',
      benefits: ['Automated provisioning', 'Version-controlled infrastructure', 'Consistent environments', 'Rapid deployment'],
      link: '/services/infrastructure-as-code'
    },
    {
      icon: Lock,
      title: 'Disaster Recovery & Business Continuity',
      description: 'Enterprise-grade DR solutions with automated failover, geo-redundant backups, and guaranteed RTOs that meet federal continuity requirements.',
      benefits: ['< 15 min RTO', 'Geo-redundant backups', 'Automated failover', 'Compliance-ready'],
      link: '/services/disaster-recovery'
    }
  ];

  const capabilities = [
    {
      icon: Shield,
      title: 'FedRAMP High Authorized',
      description: 'All cloud infrastructure meets FedRAMP High security requirements with continuous monitoring and ATO support.'
    },
    {
      icon: Zap,
      title: 'Zero-Downtime Migration',
      description: 'Proven migration methodology that maintains 100% operational continuity throughout the cloud transition.'
    },
    {
      icon: CloudIcon,
      title: 'Multi-Cloud Expertise',
      description: 'Deep expertise across AWS GovCloud, Azure Government, and Google Cloud with vendor-agnostic architecture.'
    }
  ];

  const caseStudies = [
    {
      title: 'Defense Contractor: Zero-Downtime Cloud Migration',
      description: 'Modernized entire infrastructure while achieving CMMC Level 3 certification with 100% uptime.',
      metric: '100%',
      metricLabel: 'Uptime Maintained',
      industry: 'Defense'
    },
    {
      title: 'Federal Agency Achieves 85% Process Automation',
      description: 'Transformed manual workflows into intelligent automation, reducing processing time from 6 weeks to 2 days.',
      metric: '85%',
      metricLabel: 'Automation Rate',
      industry: 'Federal Government'
    }
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services', services: ['EC2', 'S3', 'RDS', 'Lambda', 'EKS'] },
    { name: 'Microsoft Azure', services: ['VMs', 'Blob Storage', 'SQL Database', 'Functions', 'AKS'] },
    { name: 'Google Cloud Platform', services: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Functions', 'GKE'] }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Core Service
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloud Infrastructure & Modernization
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Zero-downtime migration and government-grade security with DevOps solutions that support and scale your business. NexDyne delivers FedRAMP-authorized cloud infrastructure with multi-cloud strategy, automated deployment pipelines, and enterprise-grade disaster recovery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Start Cloud Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Migration Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Service Specializations */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Cloud Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end cloud capabilities from migration to optimization, designed for mission-critical federal operations and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Key Capabilities */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Government-Grade Cloud Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built for federal agencies with security, compliance, and mission continuity at the core.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8 text-center">
                  <capability.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Cloud Expertise */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Multi-Cloud Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep expertise across all major cloud platforms for vendor-agnostic solutions that maximize flexibility and minimize lock-in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cloudProviders.map((provider, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{provider.name}</h3>
                  <ul className="space-y-2">
                    {provider.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="h-2 w-2 bg-accent rounded-full mr-3"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Cloud Transformation Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world success stories demonstrating NexDyne's cloud expertise across federal agencies and defense contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-primary text-primary-foreground p-8">
                    <div className="text-sm font-semibold text-accent mb-2">{study.industry}</div>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <p className="text-primary-foreground/90 mb-6">{study.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-4xl font-bold text-accent">{study.metric}</div>
                        <div className="text-sm text-primary-foreground/80">{study.metricLabel}</div>
                      </div>
                      <Button className="bg-orange-gradient hover:opacity-90">
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize Your Infrastructure?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start your cloud journey with a comprehensive infrastructure assessment and discover how NexDyne can deliver zero-downtime migration with FedRAMP-authorized security.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Cloud Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Cloud Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
