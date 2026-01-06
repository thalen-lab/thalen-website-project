import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function CloudMigration() {
  const benefits = [
    {
      title: 'Zero Downtime Migration',
      description: 'Proven strategies ensuring 99.99% uptime during transition with automated failover and rollback capabilities for mission-critical government systems.'
    },
    {
      title: 'FedRAMP Compliant Process',
      description: 'End-to-end migration to FedRAMP High, Moderate, or Low authorized cloud environments with continuous compliance monitoring and ATO support.'
    },
    {
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
      useCase: 'Legacy systems requiring quick cloud adoption'
    },
    {
      title: 'Replatform',
      description: 'Optimize applications during migration by leveraging cloud-native services without full redesign for improved performance.',
      useCase: 'Applications needing performance improvements'
    },
    {
      title: 'Refactor/Re-architect',
      description: 'Redesign applications to fully leverage cloud-native capabilities for maximum efficiency, scalability, and cost optimization.',
      useCase: 'Critical systems requiring modernization'
    },
    {
      title: 'Hybrid Migration',
      description: 'Maintain on-premises infrastructure while migrating select workloads to cloud environments for maximum flexibility.',
      useCase: 'Agencies with regulatory or operational constraints'
    }
  ];

  const technologies = [
    'AWS Migration Hub', 'Azure Migrate', 'Google Cloud Migrate', 'CloudEndure',
    'Terraform', 'Ansible', 'Kubernetes', 'Docker'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cloud-migration-hero.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Government Solutions', href: '/federal-solutions' },
                { label: 'Cloud Migration & Transition' }
              ]} 
              variant="light" 
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">FedRAMP Authorized • Zero Downtime Guaranteed</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Cloud Migration & Transition
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              We help agencies migrate mission-critical systems to FedRAMP-authorized cloud platforms (AWS GovCloud, Azure Government, Google Cloud) with proven strategies that ensure complete data integrity, zero downtime, and accelerated timelines. Our migration framework reduces typical 6-12 month timelines to 30-60 days while maintaining 100% operational continuity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 font-semibold">
                <Link href="/contact/government">
                  Schedule Migration Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)] font-semibold">
                <Link href="/resources">
                  Download Migration Guide
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Government Agencies Choose Thalen Technologies</h2>
            <p className="text-lg text-slate-600">
              Unlike commercial migration services, we understand government compliance requirements (FedRAMP, StateRAMP, CJIS), security clearances, and mission continuity imperatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Structured, Repeatable Methodology</h2>
            <p className="text-lg text-slate-600">
              Our phased approach ensures successful cloud transitions with zero business disruption, complete data integrity, and full compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {process.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold text-[oklch(0.65_0.18_55)] mb-2">{phase.step}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{phase.description}</p>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-semibold mb-3">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Strategies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Strategies</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Migration Strategies</h2>
            <p className="text-lg text-slate-600">
              We select the right migration path for each application based on your agency's specific technical requirements, budget, and timeline.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{type.description}</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Use Case: <span className="font-semibold">{type.useCase}</span></p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Technology Stack</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Leading Migration Tools</h2>
            <p className="text-lg text-slate-600 mb-10">
              We leverage a powerful suite of automation and management tools from cloud providers and third-party leaders to accelerate migration, reduce risk, and ensure a seamless transition.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {technologies.map((tech, index) => (
              <motion.p 
                key={index} 
                className="text-lg font-medium text-slate-700"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {tech}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Cloud Journey?</h2>
            <p className="text-lg text-white/80 mb-8">
              Schedule a complimentary migration assessment with our certified cloud architects. We'll provide a detailed roadmap, cost analysis, and timeline for your agency's transition to a secure, compliant, and modernized cloud environment.
            </p>
            <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 font-semibold">
              <Link href="/contact/government">
                Request a Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <RelatedServices
        title="Related Cloud Services"
        description="Explore complementary cloud services to enhance your migration."
        services={[
          { title: 'Cloud Optimization & FinOps', description: 'Reduce cloud costs by 40% with intelligent workload placement and automated rightsizing.', href: '/services/cloud-optimization' },
          { title: 'Cloud Security & Compliance', description: 'Unified security policies and compliance monitoring across cloud environments.', href: '/services/cloud-security' },
          { title: 'Hybrid Cloud Architecture', description: 'Connect on-premise systems with cloud platforms through secure hybrid architecture.', href: '/services/hybrid-cloud' }
        ]}
      />
      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
