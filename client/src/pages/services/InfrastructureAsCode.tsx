import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, CheckCircle2, Code, GitBranch, Shield, Zap, FileCode, Cloud, TrendingUp, RefreshCw, Server, Lock as LockIcon } from 'lucide-react';

export default function InfrastructureAsCode() {
  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Provisioning',
      description: 'Deploy complete infrastructure in minutes vs. days with automated, repeatable processes and version-controlled templates.'
    },
    {
      icon: Shield,
      title: 'Consistency & Compliance',
      description: 'Ensure all environments meet security standards with version-controlled infrastructure code and automated compliance validation.'
    },
    {
      icon: RefreshCw,
      title: 'Disaster Recovery',
      description: 'Rebuild entire environments instantly with infrastructure-as-code templates, automated backup, and tested recovery procedures.'
    }
  ];

  const capabilities = [
    {
      title: 'Multi-Cloud Provisioning',
      icon: Server,
      description: 'Unified infrastructure code across AWS, Azure, and Google Cloud with Terraform for vendor-agnostic deployments.',
      features: [
        'Cross-cloud resource provisioning',
        'Unified state management',
        'Cloud-agnostic modules',
        'Multi-region deployment'
      ]
    },
    {
      title: 'Configuration Management',
      icon: FileCode,
      description: 'Automated configuration and application deployment with Ansible, Chef, and Puppet for consistent environments.',
      features: [
        'Automated configuration drift detection',
        'Application deployment automation',
        'Package management',
        'Security hardening'
      ]
    },
    {
      title: 'CI/CD Integration',
      icon: GitBranch,
      description: 'Automated testing, validation, and deployment pipelines with GitLab CI/CD, GitHub Actions, and Jenkins.',
      features: [
        'Automated infrastructure testing',
        'Policy-as-code validation',
        'Automated deployment pipelines',
        'Rollback automation'
      ]
    },
    {
      title: 'Security & Compliance',
      icon: LockIcon,
      description: 'Policy-as-code enforcement with Sentinel, OPA, and automated compliance scanning for FedRAMP and NIST controls.',
      features: [
        'Policy-as-code enforcement',
        'Automated compliance scanning',
        'Secret management integration',
        'Audit trail and versioning'
      ]
    }
  ];

  const tools = [
    { name: 'Terraform', description: 'Multi-cloud infrastructure provisioning with declarative configuration' },
    { name: 'AWS CloudFormation', description: 'Native AWS infrastructure automation with stack management' },
    { name: 'Azure Resource Manager', description: 'Azure infrastructure deployment with ARM templates and Bicep' },
    { name: 'Ansible', description: 'Configuration management and application deployment automation' },
    { name: 'Kubernetes', description: 'Container orchestration and cloud-native application deployment' },
    { name: 'GitLab CI/CD', description: 'Automated pipeline for infrastructure testing and deployment' }
  ];

  const process = [
    {
      step: '01',
      title: 'Infrastructure Assessment',
      description: 'Analyze current infrastructure, identify automation opportunities, and design IaC architecture strategy.'
    },
    {
      step: '02',
      title: 'Code Development',
      description: 'Develop infrastructure-as-code modules, templates, and reusable components with best practices.'
    },
    {
      step: '03',
      title: 'Testing & Validation',
      description: 'Automated testing, policy validation, and compliance scanning before production deployment.'
    },
    {
      step: '04',
      title: 'Deployment & Operations',
      description: 'Automated deployment with CI/CD pipelines, monitoring, and continuous optimization.'
    }
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
            <span>Infrastructure as Code (IaC)</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-semibold mb-4">
              Automated Provisioning • Version-Controlled Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Infrastructure as Code (IaC)
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Automate infrastructure provisioning with Terraform, CloudFormation, and Ansible for consistent, repeatable deployments across all environments. Thalen Technologies's IaC framework reduces provisioning time from days to minutes while ensuring FedRAMP compliance and audit-ready documentation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule IaC Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download IaC Best Practices
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Infrastructure as Code Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform infrastructure management with automation, version control, and policy-as-code enforcement.
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

      {/* Capabilities */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive IaC Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end infrastructure automation from provisioning to configuration management and compliance enforcement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <capability.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IaC Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our IaC Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured approach to infrastructure automation ensuring successful adoption and sustained operational excellence.
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">IaC Tools & Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade tools for infrastructure automation, configuration management, and policy enforcement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your Infrastructure?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start with an IaC readiness assessment and discover how Thalen Technologies can deliver automated, version-controlled infrastructure with FedRAMP compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule IaC Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View IaC Examples
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Cloud Migration & Transition',
            description: 'Automate infrastructure provisioning during migration with Terraform and CloudFormation templates.',
            href: '/services/cloud-migration',
            icon: Cloud
          },
          {
            title: 'Cloud Optimization & FinOps',
            description: 'Codify cost-optimized configurations and automate rightsizing policies for continuous savings.',
            href: '/services/cloud-optimization',
            icon: TrendingUp
          },
          {
            title: 'Disaster Recovery & Business Continuity',
            description: 'Automate disaster recovery infrastructure deployment with version-controlled recovery procedures.',
            href: '/services/disaster-recovery',
            icon: RefreshCw
          }
        ]}
        title="Automate Your Cloud Infrastructure"
        description="Combine IaC with migration, optimization, and disaster recovery for fully automated cloud operations."
      />

      <Footer />
    </div>
  );
}
