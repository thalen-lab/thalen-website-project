import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, CheckCircle2, Cloud, Shield, Zap, Database, Clock, Server, Lock, RefreshCw } from 'lucide-react';

export default function CloudMigration() {
  const benefits = [
    {
      icon: Zap,
      title: 'Zero Downtime Migration',
      description: 'Proven strategies ensuring 99.99% uptime during transition with automated failover and rollback capabilities for mission-critical government systems.'
    },
    {
      icon: Shield,
      title: 'FedRAMP Compliant Process',
      description: 'End-to-end migration to FedRAMP High, Moderate, or Low authorized cloud environments with continuous compliance monitoring and ATO support.'
    },
    {
      icon: Database,
      title: 'Complete Data Integrity',
      description: 'Automated validation and verification processes ensuring 100% data accuracy and consistency throughout migration with audit trails.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of current infrastructure, applications, and dependencies with detailed migration roadmap and risk assessment.',
      deliverables: ['Infrastructure inventory', 'Dependency mapping', 'Risk assessment', 'Migration strategy document']
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design target cloud architecture optimized for performance, security, and cost-efficiency with FedRAMP compliance built-in.',
      deliverables: ['Cloud architecture diagrams', 'Security controls matrix', 'Cost optimization plan', 'Disaster recovery design']
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Phased migration with automated tools, continuous monitoring, and real-time validation ensuring zero data loss and operational continuity.',
      deliverables: ['Automated migration scripts', 'Validation reports', 'Performance benchmarks', 'Rollback procedures']
    },
    {
      step: '04',
      title: 'Optimization & Handoff',
      description: 'Post-migration optimization, performance tuning, and comprehensive knowledge transfer to your team with ongoing support.',
      deliverables: ['Performance optimization report', 'Operations runbooks', 'Training materials', 'Support transition plan']
    }
  ];

  const migrationTypes = [
    {
      title: 'Rehost (Lift & Shift)',
      description: 'Rapidly migrate applications to cloud with minimal changes, ideal for time-sensitive migrations and legacy system modernization.',
      useCase: 'Legacy systems requiring quick cloud adoption',
      icon: Server
    },
    {
      title: 'Replatform',
      description: 'Optimize applications during migration by leveraging cloud-native services without full redesign for improved performance.',
      useCase: 'Applications needing performance improvements',
      icon: RefreshCw
    },
    {
      title: 'Refactor/Re-architect',
      description: 'Redesign applications to fully leverage cloud-native capabilities for maximum efficiency, scalability, and cost optimization.',
      useCase: 'Critical systems requiring modernization',
      icon: Cloud
    },
    {
      title: 'Hybrid Migration',
      description: 'Maintain on-premises infrastructure while migrating select workloads to cloud environments for maximum flexibility.',
      useCase: 'Agencies with regulatory or operational constraints',
      icon: Lock
    }
  ];

  const technologies = [
    'AWS Migration Hub', 'Azure Migrate', 'Google Cloud Migrate', 'CloudEndure',
    'Terraform', 'Ansible', 'Kubernetes', 'Docker'
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
            <span>Cloud Migration & Transition</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-semibold mb-4">
              FedRAMP Authorized • Zero Downtime Guaranteed
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloud Migration & Transition
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We help agencies migrate mission-critical systems to FedRAMP-authorized cloud platforms (AWS GovCloud, Azure Government, Google Cloud) with proven strategies that ensure complete data integrity, zero downtime, and accelerated timelines. Our migration framework reduces typical 6-12 month timelines to 30-60 days while maintaining 100% operational continuity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Migration Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Migration Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Government Agencies Choose NexDyne Technology Migration</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike commercial migration services, we understand government compliance requirements (FedRAMP, StateRAMP, CJIS), security clearances, and mission continuity imperatives.
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

      {/* Migration Process */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Migration Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured, repeatable methodology ensuring successful cloud transitions with zero business disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {process.map((phase, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl hover:border-accent transition-all active:scale-95">
                <CardContent className="p-8">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-muted/20 -mr-4 -mt-4">
                    {phase.step}
                  </div>
                  <div className="relative">
                    <div className="text-5xl font-bold text-primary mb-2">{phase.step}</div>
                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0 mr-2"></span>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Strategies */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Migration Strategies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored approaches based on your agency's specific needs, constraints, and mission requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {migrationTypes.map((type, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <type.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
                  <div className="bg-muted border-l-4 border-primary p-3 rounded">
                    <p className="text-sm font-medium">
                      <span className="text-primary font-semibold">Best for:</span> {type.useCase}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Migration Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade tools and platforms for secure, efficient cloud migration.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-card border-2 border-border px-6 py-3 rounded-lg font-semibold hover:border-accent transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Migrate to the Cloud?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start with a comprehensive migration assessment and discover how NexDyne Technology can deliver zero-downtime cloud adoption with FedRAMP compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Migration Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Migration Case Studies
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Cloud Security & Compliance',
            description: 'Implement FedRAMP-compliant security controls and continuous monitoring to protect migrated workloads.',
            href: '/services/cloud-security',
            icon: Shield
          },
          {
            title: 'Disaster Recovery & Business Continuity',
            description: 'Ensure mission continuity with automated failover, backup strategies, and recovery time objectives under 4 hours.',
            href: '/services/disaster-recovery',
            icon: RefreshCw
          },
          {
            title: 'Infrastructure as Code',
            description: 'Automate infrastructure provisioning and configuration management for consistent, repeatable deployments.',
            href: '/services/infrastructure-as-code',
            icon: Server
          }
        ]}
        title="Enhance Your Cloud Migration"
        description="Strengthen your cloud migration strategy with these complementary services."
      />

      <Footer />
    </div>
  );
}
