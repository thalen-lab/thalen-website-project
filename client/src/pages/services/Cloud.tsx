import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Cloud as CloudIcon, Shield, Zap, RefreshCw, Lock, Globe, GitBranch, Award, Users } from 'lucide-react';

export default function Cloud() {
  // Primary service offerings (reduced to 4 core capabilities)
  const primaryServices = [
    {
      icon: RefreshCw,
      title: 'FedRAMP Cloud Migration Services',
      description: 'Modernize your existing infrastructure OR migrate to FedRAMP-authorized cloud platforms (AWS GovCloud, Azure Government, Google Cloud) when mission demands it—with zero downtime and full ATO support.',
      benefits: ['Zero business disruption', 'ATO package preparation', 'Multi-vendor platform expertise'],
      link: '/services/cloud-migration'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Integration & Orchestration',
      description: 'Vendor-neutral architecture design and implementation across multiple FedRAMP platforms with unified management and seamless interoperability.',
      benefits: ['Best-of-breed platform selection', 'Unified management layer', 'Workload portability'],
      link: '/services/multi-cloud'
    },
    {
      icon: Shield,
      title: 'Cloud Security & Compliance Implementation',
      description: 'Deploy and configure FedRAMP-authorized security tools with CMMC, FISMA, and NIST 800-53 compliance frameworks for mission-critical workloads.',
      benefits: ['FedRAMP High implementation', 'CMMC Level 2/3 readiness', 'Continuous monitoring setup'],
      link: '/services/cloud-security'
    },
    {
      icon: GitBranch,
      title: 'Infrastructure as Code (IaC) Implementation',
      description: 'Implement automated infrastructure provisioning using Terraform, CloudFormation, and Ansible for consistent, auditable deployments.',
      benefits: ['Automated provisioning', 'Version-controlled infrastructure', 'Compliance-ready templates'],
      link: '/services/infrastructure-as-code'
    }
  ];

  // Additional capabilities (compact list format)
  const additionalCapabilities = [
    { name: 'Cloud Cost Optimization & FinOps', description: 'Reduce cloud spend by 30-50% through intelligent resource management' },
    { name: 'Disaster Recovery & Business Continuity', description: 'Enterprise-grade DR with automated failover and geo-redundant backups' },
    { name: 'Cloud-Native Application Modernization', description: 'Containerization and microservices architecture for legacy applications' },
    { name: 'DevSecOps Pipeline Implementation', description: 'Automated CI/CD with integrated security scanning and compliance checks' }
  ];

  const keyDifferentiators = [
    {
      icon: Shield,
      title: 'FedRAMP Platform Expertise',
      description: 'Deep implementation experience with 50+ FedRAMP-authorized platforms across AWS, Azure, and Google Cloud ecosystems.'
    },
    {
      icon: Users,
      title: 'Vendor-Neutral Consulting',
      description: 'We help you select the RIGHT FedRAMP platforms for your mission, then integrate them into a cohesive architecture.'
    },
    {
      icon: Award,
      title: 'ATO Support & Compliance',
      description: 'End-to-end support for Authority to Operate (ATO) processes including SSP preparation, security controls, and POAM management.'
    }
  ];

  const governmentExperience = [
    { agency: 'Federal Civilian Agencies', projects: '15+ cloud migrations', clearance: 'Public Trust' },
    { agency: 'Department of Defense', projects: '8 multi-cloud implementations', clearance: 'Secret' },
    { agency: 'State & Local Government', projects: '25+ FedRAMP-equivalent deployments', clearance: 'N/A' }
  ];

  const fedrampPlatforms = [
    { 
      provider: 'Amazon Web Services', 
      platforms: ['AWS GovCloud (US)', 'AWS Commercial Cloud Services'],
      services: 'EC2, S3, RDS, Lambda, EKS, CloudFormation'
    },
    { 
      provider: 'Microsoft Azure', 
      platforms: ['Azure Government', 'Azure Commercial'],
      services: 'Virtual Machines, Blob Storage, SQL Database, Functions, AKS'
    },
    { 
      provider: 'Google Cloud', 
      platforms: ['Google Cloud Platform (FedRAMP Authorized)'],
      services: 'Compute Engine, Cloud Storage, Cloud SQL, Cloud Functions, GKE'
    }
  ];

  const implementationApproach = [
    {
      phase: '01',
      title: 'Cloud Readiness Assessment',
      duration: '2-4 weeks',
      description: 'Evaluate your existing infrastructure and applications—or implement FedRAMP cloud platforms (AWS GovCloud, Azure Gov) when mission demands it.',
      deliverables: [
        'Current state assessment',
        'Cloud readiness evaluation',
        'Platform recommendations',
        'Migration roadmap'
      ]
    },
    {
      phase: '02',
      title: 'Architecture Design & Planning',
      duration: '4-6 weeks',
      description: 'Design cloud architecture with FedRAMP compliance, security controls, and disaster recovery capabilities built in from day one.',
      deliverables: [
        'Architecture blueprints',
        'Security control mapping',
        'ATO documentation package',
        'Cost optimization strategy'
      ]
    },
    {
      phase: '03',
      title: 'Migration & Implementation',
      duration: '8-16 weeks',
      description: 'Execute phased migration with zero downtime, including application modernization, data migration, and security configuration.',
      deliverables: [
        'Infrastructure provisioning',
        'Application migration',
        'Data migration & validation',
        'Security hardening'
      ]
    },
    {
      phase: '04',
      title: 'Optimization & ATO Support',
      duration: '4-8 weeks',
      description: 'Optimize cloud resources for cost and performance, complete ATO documentation, and establish ongoing support and compliance monitoring.',
      deliverables: [
        'Performance optimization',
        'Cost optimization',
        'ATO package completion',
        'Managed services transition'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Implementation Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloud Infrastructure & Modernization
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We help agencies modernize their existing infrastructure and operations—then implement FedRAMP cloud platforms (AWS GovCloud, Azure Gov) when mission demands it. Includes hybrid architecture, legacy system integration, and ATO support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Cloud Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Download Migration Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Implementation Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A phased methodology that balances quick wins with long-term transformation—modernizing your existing infrastructure first, then implementing FedRAMP platforms when needed for compliance and new capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {implementationApproach.map((phase, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all border-2 hover:border-accent">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-6xl font-bold text-primary/20 leading-none">{phase.phase}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground font-semibold">{phase.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{phase.description}</p>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">Key Deliverables:</p>
                    {phase.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Cloud Services */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Cloud Implementation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end cloud implementation capabilities designed for government agencies requiring FedRAMP compliance and mission-critical reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {primaryServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all border-2 hover:border-accent active:scale-95">
                <CardContent className="p-8">
                  <service.icon className="h-16 w-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0 mr-2"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.link}>
                    <Button variant="outline" className="w-full border-2 border-dashed border-primary/30 hover:border-accent hover:bg-accent/5">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Capabilities - Compact Format */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Additional Cloud Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start p-6 bg-secondary rounded-lg border-2 border-border hover:border-accent/50 transition-colors">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0 mr-4"></span>
                  <div>
                    <h4 className="font-semibold mb-1">{capability.name}</h4>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Experience */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Government Cloud Implementation Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience implementing FedRAMP-authorized cloud solutions across federal, state, and local government agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {governmentExperience.map((exp, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-8 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{exp.agency}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{exp.projects}</p>
                  <p className="text-sm text-muted-foreground">Clearance Level: {exp.clearance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FedRAMP Platform Expertise */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">FedRAMP-Authorized Platform Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement and integrate FedRAMP-authorized cloud platforms from leading providers, helping you select the right tools for your mission.
            </p>
          </div>

          <div className="space-y-6">
            {fedrampPlatforms.map((platform, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1 min-w-[250px]">
                      <h3 className="text-2xl font-bold mb-2">{platform.provider}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {platform.platforms.map((p, idx) => (
                          <span key={idx} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-semibold">
                            {p}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Implementation Services:</span> {platform.services}
                      </p>
                    </div>
                    <CloudIcon className="h-16 w-16 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Modernize Your Cloud Infrastructure?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Schedule a free cloud readiness assessment to evaluate your infrastructure and identify migration opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Migration Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
