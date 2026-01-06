import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function InfrastructureAsCode() {
  const benefits = [
    {
      title: 'Rapid Provisioning',
      description: 'Deploy complete infrastructure in minutes vs. days with automated, repeatable processes and version-controlled templates.'
    },
    {
      title: 'Consistency & Compliance',
      description: 'Ensure all environments meet security standards with version-controlled infrastructure code and automated compliance validation.'
    },
    {
      title: 'Disaster Recovery',
      description: 'Rebuild entire environments instantly with infrastructure-as-code templates, automated backup, and tested recovery procedures.'
    }
  ];

  const capabilities = [
    {
      title: 'Multi-Cloud Provisioning',
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
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/infrastructure-as-code-hero.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="container relative">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Services', href: '/consulting-services' },
                  { label: 'Cloud Infrastructure', href: '/services/cloud' },
                  { label: 'Infrastructure as Code' }
                ]} 
                variant="light" 
              />
            </div>
          <nav className="text-sm mb-6 text-white/90">
            <Link href="/services/cloud" className="hover:text-[oklch(0.75_0.15_55)]">Cloud Infrastructure & Modernization</Link>
            <span className="mx-2">/</span>
            <span>Infrastructure as Code (IaC)</span>
          </nav>
          
          <div className="max-w-4xl">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Automated Provisioning • Version-Controlled Infrastructure
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Infrastructure as Code (IaC)
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Automate infrastructure provisioning with Terraform, CloudFormation, and Ansible for consistent, repeatable deployments across all environments. Thalen Technologies's IaC framework reduces provisioning time from days to minutes while ensuring FedRAMP compliance and audit-ready documentation.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Schedule IaC Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                Download IaC Best Practices
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Key Benefits</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Infrastructure as Code Benefits</h2>
            <p className="text-xl text-slate-600">
              Transform infrastructure management with automation, version control, and policy-as-code enforcement.
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
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Comprehensive IaC Capabilities</h2>
            <p className="text-xl text-slate-600">
              End-to-end infrastructure automation from provisioning to configuration management and compliance enforcement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{capability.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{capability.description}</p>
                  <ul className="space-y-3">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
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
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Our IaC Implementation Process</h2>
            <p className="text-xl text-slate-600">
              Structured approach to infrastructure automation ensuring successful adoption and sustained operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{phase.step}</div>
                  <h3 className="text-xl font-bold mb-2 text-[oklch(0.20_0.05_250)]">{phase.title}</h3>
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
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Tools & Platforms</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">IaC Tools & Platforms</h2>
            <p className="text-xl text-slate-600">
              Enterprise-grade tools for infrastructure automation, configuration management, and policy enforcement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-lg font-bold mb-2 text-[oklch(0.20_0.05_250)]">{tool.name}</h3>
                  <p className="text-sm text-slate-600">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your Infrastructure?</h2>
          <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            Start with an IaC readiness assessment and discover how Thalen Technologies can deliver automated, version-controlled infrastructure with FedRAMP compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Schedule IaC Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
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
          },
          {
            title: 'Cloud Optimization & FinOps',
            description: 'Codify cost-optimized configurations and automate rightsizing policies for continuous savings.',
            href: '/services/cloud-optimization',
          },
          {
            title: 'Disaster Recovery & Business Continuity',
            description: 'Automate disaster recovery infrastructure deployment with version-controlled recovery procedures.',
            href: '/services/disaster-recovery',
          }
        ]}
        title="Automate Your Cloud Infrastructure"
        description="Combine IaC with migration, optimization, and disaster recovery for fully automated cloud operations."
      />

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
