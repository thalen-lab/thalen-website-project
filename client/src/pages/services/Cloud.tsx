import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function Cloud() {
  // Primary service offerings (reduced to 4 core capabilities)
  const primaryServices = [
    {
      title: 'Cloud Migration & Modernization',
      description: 'Modernize your on-premises infrastructure with hybrid cloud architectures first—or migrate to FedRAMP-authorized platforms (AWS GovCloud, Azure Government, Google Cloud) when compliance mandates it or operational needs require cloud-native capabilities.',
      benefits: ['Zero business disruption', 'ATO package preparation', 'Multi-vendor platform expertise'],
      link: '/services/cloud-migration'
    },
    {
      title: 'Multi-Cloud Integration & Orchestration',
      description: 'Integrate your existing on-premises and cloud infrastructure with unified management—or implement multi-cloud FedRAMP architectures when workload distribution and vendor diversification align with mission requirements.',
      benefits: ['Best-of-breed platform selection', 'Unified management layer', 'Workload portability'],
      link: '/services/multi-cloud'
    },
    {
      title: 'Cloud Security & Compliance Implementation',
      description: 'Strengthen your existing infrastructure security posture with NIST 800-53 controls and compliance frameworks—with FedRAMP-authorized security tools deployed only when compliance requirements or threat models demand certified platforms.',
      benefits: ['FedRAMP High implementation', 'CMMC Level 2/3 readiness', 'Continuous monitoring setup'],
      link: '/services/cloud-security'
    },
    {
      title: 'Infrastructure as Code (IaC) Implementation',
      description: 'Automate your existing infrastructure provisioning with custom scripts and configuration management—or implement enterprise IaC platforms (Terraform Enterprise, CloudFormation) when governance and compliance require centralized control.',
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
      title: 'FedRAMP Platform Expertise',
      description: 'Deep implementation experience with 50+ FedRAMP-authorized platforms across AWS, Azure, and Google Cloud ecosystems.'
    },
    {
      title: 'Vendor-Neutral Consulting',
      description: 'We help you select the RIGHT FedRAMP platforms for your mission, then integrate them into a cohesive architecture.'
    },
    {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cloud-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Cloud Infrastructure' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Implementation Services</p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cloud Infrastructure & Modernization
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Thalen Technologies delivers cloud transformation through a dual approach: first, we modernize your on-premises infrastructure with hybrid architectures and legacy system optimization—then migrate to FedRAMP cloud platforms (AWS GovCloud, Azure Gov) when mission demands it or compliance requires it. Zero-downtime migrations with full ATO support.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Cloud Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/resources">
                  Download Migration Guide
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Cloud Services */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Core Capabilities</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Core Cloud Implementation Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              End-to-end cloud implementation capabilities designed for government agencies requiring FedRAMP compliance and mission-critical reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            {primaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-4 sm:p-6 md:p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="outline" className="w-full border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:bg-[oklch(0.97_0.01_250)]">
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Capabilities - Compact Format */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 text-center">Additional Cloud Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">{capability.name}</h4>
                  <p className="text-sm text-slate-600">{capability.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Government Experience */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Proven Experience</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Government Cloud Implementation Experience</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experience implementing FedRAMP-authorized cloud solutions across federal, state, and local government agencies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {governmentExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-4 sm:p-6 md:p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300 text-center">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{exp.agency}</h3>
                  <p className="text-lg font-semibold text-[oklch(0.65_0.18_55)] mb-2">{exp.projects}</p>
                  <p className="text-sm text-slate-500">Clearance Level: {exp.clearance}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FedRAMP Platform Expertise */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Expertise</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">FedRAMP-Authorized Platform Expertise</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We implement and integrate FedRAMP-authorized cloud platforms from leading providers, helping you select the right tools for your mission.
            </p>
          </motion.div>

          <div className="space-y-6">
            {fedrampPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 sm:p-6 md:p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1 min-w-[250px]">
                      <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{platform.provider}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {platform.platforms.map((p, idx) => (
                          <span key={idx} className="text-xs bg-[oklch(0.97_0.01_250)] text-slate-700 px-3 py-1 rounded-full font-semibold">
                            {p}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-slate-600">
                        <span className="font-semibold">Implementation Services:</span> {platform.services}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Plus 40+ additional FedRAMP-authorized platforms including Salesforce Government Cloud, ServiceNow Gov, Oracle Cloud Government, and more.
            </p>
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
              <Link href="/partners">
                View All FedRAMP Platforms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAR Compliance for Cloud Services */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Compliance</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Government Contracting Compliance</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Cloud migration and infrastructure services comply with Federal Acquisition Regulation requirements for government IT acquisitions.
            </p>
          </motion.div>

          <Card className="p-4 sm:p-6 md:p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-4">
                  Cloud Security Requirements
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Cloud implementations comply with FAR 52.239-1 (Privacy or Security Safeguards) and FAR 52.204-21 (Basic Safeguarding), ensuring federal data protection throughout migration and operations.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>FedRAMP-authorized platforms meet FAR security requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>Continuous monitoring ensures ongoing compliance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-4">
                  Streamlined Procurement
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Pre-established compliance with FAR requirements enables faster contract execution through GSA Schedule vehicles, reducing procurement time and agency oversight burden.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>GSA Schedule 70 for IT Professional Services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>Documented compliance reduces contract negotiation time</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Migrate to FedRAMP Cloud?</h2>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Schedule a cloud assessment to discuss your agency's requirements, evaluate FedRAMP platform options, and develop a zero-downtime migration strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Cloud Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View Cloud Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Success Story</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">See Government Cloud Migration in Action</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Learn how a defense agency achieved zero-downtime migration to Impact Level 5 cloud infrastructure while reducing costs by 40%.
            </p>
          </motion.div>
          <Card className="max-w-4xl mx-auto overflow-hidden border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2">
              <div className="bg-[oklch(0.97_0.01_250)] p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[oklch(0.65_0.18_55)]/10 text-[oklch(0.55_0.18_55)] rounded-full text-xs font-semibold mb-4 w-fit">
                  Intelligence Community
                </span>
                <h3 className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Defense Agency Migrates to IL5 Cloud</h3>
                <p className="text-slate-600 mb-6">
                  Zero-downtime migration of mission-critical intelligence systems to FedRAMP High cloud infrastructure, achieving Impact Level 5 compliance while reducing infrastructure costs by 40%.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                  <div>
                    <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">Zero</div>
                    <div className="text-sm text-slate-500">Downtime Migration</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">40%</div>
                    <div className="text-sm text-slate-500">Cost Reduction</div>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg w-full">
                  <Link href="/case-studies/defense-cloud">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="/defense-cyber-ops.b7c4e1f3.jpg" 
                  alt="Defense Agency Cloud Migration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
