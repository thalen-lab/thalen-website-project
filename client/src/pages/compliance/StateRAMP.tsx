import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function StateRAMP() {
  const impactLevels = [
    {
      level: 'StateRAMP Low',
      description: 'For cloud systems processing public information where loss of confidentiality, integrity, or availability would have limited impact on government operations.',
      useCases: ['Public-facing websites and portals', 'General collaboration tools', 'Non-sensitive administrative systems']
    },
    {
      level: 'StateRAMP Moderate',
      description: 'For cloud systems processing sensitive but unclassified information where loss would have serious impact on government operations or citizen privacy.',
      useCases: ['Personally Identifiable Information (PII)', 'Financial and tax systems', 'Healthcare and social services data']
    },
    {
      level: 'StateRAMP High',
      description: 'For cloud systems processing highly sensitive information where loss would have severe or catastrophic impact on public safety or government operations.',
      useCases: ['Law enforcement and criminal justice systems', 'Emergency services and 911 systems', 'Critical infrastructure control systems']
    }
  ];

  const services = [
    {
      title: 'Compliance Readiness Assessment',
      description: 'Comprehensive evaluation of your current cloud security posture against StateRAMP requirements, with detailed gap analysis and remediation roadmap.',
      features: ['Security control gap analysis', 'Risk assessment and prioritization', 'Budget and timeline planning']
    },
    {
      title: 'Security Documentation',
      description: 'Complete System Security Plan (SSP) development and supporting documentation tailored to state and local government requirements.',
      features: ['SSP and security package development', 'Control implementation evidence', 'Policy and procedure templates']
    },
    {
      title: 'Third-Party Assessment Coordination',
      description: 'Manage StateRAMP-recognized assessor engagement, coordinate security testing, and facilitate remediation of audit findings.',
      features: ['Assessor selection and coordination', 'Testing support and artifact collection', 'Finding remediation and retesting']
    },
    {
      title: 'Continuous Compliance Management',
      description: 'Ongoing security monitoring, vulnerability management, and compliance reporting to maintain StateRAMP authorization.',
      features: ['Continuous monitoring and reporting', 'Vulnerability scanning and patching', 'Annual re-assessment support']
    }
  ];

  const audiences = [
    { title: 'State Agencies', description: 'State departments and agencies looking to adopt cloud services while meeting state-specific security and privacy requirements.' },
    { title: 'Local Governments', description: 'Cities, counties, and municipalities seeking standardized cloud security frameworks for cost-effective compliance.' },
    { title: 'Tribal Governments', description: 'Tribal nations and organizations requiring secure cloud solutions that respect sovereignty and cultural considerations.' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/state-capitol.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Government Solutions', href: '/federal-solutions' },
                { label: 'StateRAMP Compliance' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">State & Local Government Compliance</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              StateRAMP & GovRAMP
              <span className="block text-white/80 mt-2">For State, Local & Tribal Governments</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Navigate state and local government cloud security requirements with confidence. NexDyne delivers secure, compliant cloud solutions tailored to the unique needs of state agencies, municipalities, and tribal governments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule StateRAMP Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/resources">
                  Download StateRAMP Checklist
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is StateRAMP Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">What is StateRAMP?</h2>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>StateRAMP</strong> (State Risk and Authorization Management Program) is a nonprofit organization that provides a standardized approach to cloud security for state and local governments. Modeled after FedRAMP, StateRAMP helps government entities adopt secure cloud services while reducing duplicative security assessments.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                StateRAMP establishes a common security and privacy baseline based on NIST 800-53 controls, adapted specifically for the unique requirements of state, local, and tribal governments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { title: 'State-Focused Baseline', desc: 'Security controls tailored to state and local government requirements and risk profiles' },
                { title: 'Reciprocity', desc: '"Authorized once, accepted everywhere" reduces costs and accelerates cloud adoption' },
                { title: 'Continuous Assurance', desc: 'Ongoing monitoring ensures sustained compliance and evolving security posture' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GovRAMP Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Emerging Framework</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">What is GovRAMP?</h2>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>GovRAMP</strong> (Government Risk and Authorization Management Program) is an emerging framework that extends cloud security standardization to the broader public sector, including local municipalities, counties, and special districts.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                GovRAMP aims to create a unified approach to cloud security across all levels of government, promoting interoperability and shared security assessments between federal, state, and local entities.
              </p>
            </div>

            <Card className="p-8 bg-white border-2 border-[oklch(0.70_0.18_55)] mt-8">
              <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">Unified Public Sector Security</h3>
              <p className="text-slate-600 mb-4">
                GovRAMP bridges the gap between federal FedRAMP requirements and state/local StateRAMP standards, enabling seamless collaboration and data sharing across government levels.
              </p>
              <ul className="space-y-2">
                {['Cross-jurisdictional reciprocity', 'Harmonized security controls', 'Reduced compliance burden for multi-level deployments'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* StateRAMP Impact Levels */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Impact Levels</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">StateRAMP Impact Levels</h2>
          </motion.div>
          
          <div className="space-y-6">
            {impactLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{level.level}</h3>
                  <p className="text-slate-600 mb-4">{level.description}</p>
                  <ul className="space-y-2">
                    {level.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-slate-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NexDyne's StateRAMP Services */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">NexDyne's StateRAMP & GovRAMP Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We guide state, local, and tribal governments through cloud security compliance with tailored solutions for your jurisdiction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Use StateRAMP */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Target Audience</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">Who Should Use StateRAMP?</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{audience.title}</h3>
                  <p className="text-slate-600">{audience.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* StateRAMP vs FedRAMP Comparison */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">StateRAMP vs FedRAMP: Which Do You Need?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Understanding the differences between state/local and federal compliance frameworks helps you choose the right path for your organization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg border-2 border-slate-200 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[oklch(0.97_0.01_250)]">
                    <th className="px-6 py-4 text-left text-sm font-bold text-[oklch(0.20_0.05_250)] w-1/4">Aspect</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[oklch(0.20_0.05_250)] w-3/8 border-l-2 border-slate-200">StateRAMP</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[oklch(0.20_0.05_250)] w-3/8 border-l-2 border-slate-200">FedRAMP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { aspect: 'Target Audience', stateramp: 'State, local, and tribal governments', fedramp: 'Federal agencies and departments' },
                    { aspect: 'Authorization Scope', stateramp: 'Voluntary but increasingly adopted by states', fedramp: 'Mandatory for federal cloud services' },
                    { aspect: 'Security Baseline', stateramp: 'NIST 800-53 controls adapted for state/local needs', fedramp: 'NIST 800-53 controls (125-421 controls)' },
                    { aspect: 'Impact Levels', stateramp: 'Low, Moderate, High', fedramp: 'Low, Moderate, High' },
                    { aspect: 'Authorization Process', stateramp: 'StateRAMP authorization with state reciprocity', fedramp: 'JAB P-ATO or Agency ATO' },
                    { aspect: 'Timeline', stateramp: '9-15 months depending on impact level', fedramp: '12-18 months (Moderate), 18-24 months (High)' },
                    { aspect: 'Cost Range', stateramp: '$150K-$3M+ depending on scope', fedramp: '$250K-$5M+ depending on complexity' },
                    { aspect: 'Reciprocity', stateramp: 'Growing reciprocity across participating states', fedramp: 'Accepted by all federal agencies' },
                    { aspect: 'Best For', stateramp: 'Organizations serving state/local governments or multi-level deployments', fedramp: 'Organizations serving federal government exclusively' }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 1 ? 'bg-[oklch(0.97_0.01_250)]' : ''}>
                      <td className="px-6 py-4 font-semibold text-[oklch(0.20_0.05_250)]">{row.aspect}</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">{row.stateramp}</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">{row.fedramp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <Card className="p-8 bg-white border-2 border-[oklch(0.70_0.18_55)]">
              <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">Need Help Choosing?</h3>
              <p className="text-slate-600 mb-4">
                Our compliance experts can assess your specific requirements and recommend the optimal compliance path. Many organizations pursue both StateRAMP and FedRAMP to serve clients across all government levels.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[linear-gradient(135deg,oklch(0.65_0.20_40),oklch(0.55_0.22_40))] hover:opacity-90 text-white">
                  <Link href="/contact">
                    Schedule Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
                  <Link href="/compliance/fedramp">
                    Learn About FedRAMP
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Services CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Related Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">Comprehensive Compliance Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/services/fedramp">
                <Card className="p-8 h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">StateRAMP Implementation Services</h3>
                  <p className="text-slate-600 mb-4">
                    Explore our full suite of StateRAMP implementation services, including readiness assessments, documentation support, and continuous monitoring.
                  </p>
                  <div className="text-[oklch(0.65_0.18_55)] font-semibold flex items-center gap-2">
                    View Services <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/services/cybersecurity">
                <Card className="p-8 h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">Cybersecurity & Compliance</h3>
                  <p className="text-slate-600 mb-4">
                    Discover our broader cybersecurity and compliance services, including CMMC, NIST 800-171, and Zero Trust Architecture.
                  </p>
                  <div className="text-[oklch(0.65_0.18_55)] font-semibold flex items-center gap-2">
                    View Services <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Achieve StateRAMP Compliance?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team specializes in helping state, local, and tribal governments navigate cloud security compliance. Let us guide you through the StateRAMP authorization process.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/resources">
                  Download StateRAMP Guide
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
