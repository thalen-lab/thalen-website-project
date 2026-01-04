import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FedRAMP() {
  const impactLevels = [
    {
      level: 'FedRAMP Low',
      color: 'green',
      description: 'For cloud systems where the loss of confidentiality, integrity, and availability would result in limited adverse effects on agency operations, assets, or individuals.',
      controls: '125 security controls',
      suitable: 'Suitable for low-impact SaaS applications'
    },
    {
      level: 'FedRAMP Moderate',
      color: 'blue',
      description: 'For cloud systems where the loss of confidentiality, integrity, and availability would result in serious adverse effects on agency operations, assets, or individuals.',
      controls: '325 security controls',
      suitable: 'Most common baseline for federal cloud services'
    },
    {
      level: 'FedRAMP High',
      color: 'navy',
      description: 'For cloud systems where the loss of confidentiality, integrity, and availability would result in severe or catastrophic adverse effects on agency operations, assets, or individuals.',
      controls: '421 security controls',
      suitable: 'Required for law enforcement, emergency services, and critical infrastructure'
    }
  ];

  const services = [
    {
      title: 'Readiness Assessment',
      description: 'Comprehensive gap analysis against FedRAMP security controls to identify compliance gaps and create a detailed remediation roadmap.',
      features: ['Control gap analysis', 'Remediation planning', 'Cost and timeline estimation']
    },
    {
      title: 'Security Package Development',
      description: 'Complete System Security Plan (SSP), Security Assessment Plan (SAP), and supporting documentation required for FedRAMP authorization.',
      features: ['SSP development', 'Control implementation evidence', 'Policy and procedure documentation']
    },
    {
      title: '3PAO Coordination',
      description: 'Manage the Third Party Assessment Organization (3PAO) engagement, coordinate testing activities, and facilitate remediation of findings.',
      features: ['3PAO selection and coordination', 'Testing support and evidence collection', 'Finding remediation']
    },
    {
      title: 'Continuous Monitoring',
      description: 'Ongoing compliance management, monthly continuous monitoring deliverables, and annual assessment support to maintain FedRAMP authorization.',
      features: ['Monthly ConMon reporting', 'Vulnerability scanning and remediation', 'Annual assessment coordination']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/federal-building.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Government Solutions', href: '/federal-solutions' },
                { label: 'FedRAMP Compliance' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Federal Government Compliance</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              FedRAMP Compliance
              <span className="block text-white/80 mt-2">For Federal Agencies</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Navigate the Federal Risk and Authorization Management Program (FedRAMP) with confidence. NexDyne delivers secure, compliant cloud solutions that meet the rigorous requirements of federal government agencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule FedRAMP Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/resources">
                  Download FedRAMP Checklist
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is FedRAMP Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">What is FedRAMP?</h2>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                The <strong>Federal Risk and Authorization Management Program (FedRAMP)</strong> is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services used by federal agencies.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                FedRAMP establishes a rigorous security baseline based on NIST 800-53 controls, ensuring that cloud service providers meet the stringent security requirements necessary to protect federal data and systems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { title: 'Security Baseline', desc: 'Based on NIST 800-53 controls with three impact levels: Low, Moderate, and High' },
                { title: 'Standardized Process', desc: '"Do once, use many times" approach reduces duplicative agency assessments' },
                { title: 'Continuous Monitoring', desc: 'Ongoing security assessment ensures sustained compliance and risk management' }
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

      {/* FedRAMP Impact Levels */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Impact Levels</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">FedRAMP Impact Levels</h2>
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
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{level.level}</h3>
                      <p className="text-slate-600 mb-4">{level.description}</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-slate-700">{level.controls}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-slate-700">{level.suitable}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NexDyne's FedRAMP Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">NexDyne's FedRAMP Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We guide federal agencies and cloud service providers through every phase of the FedRAMP authorization process
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

      {/* Authorization Paths */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Authorization</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">FedRAMP Authorization Paths</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Agency Authorization</h3>
                <p className="text-slate-600 mb-6">
                  A federal agency sponsors a Cloud Service Provider (CSP) through the authorization process. The CSP works directly with the agency's authorizing official.
                </p>
                <div className="space-y-3">
                  {['Agency selects CSP and initiates authorization', 'CSP develops security package', '3PAO conducts security assessment', 'Agency grants Authority to Operate (ATO)'].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-[oklch(0.65_0.18_55)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">{idx + 1}</span>
                      </div>
                      <p className="text-slate-600">{step}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full p-8 bg-white border-2 border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">JAB Provisional Authorization</h3>
                <p className="text-slate-600 mb-6">
                  The Joint Authorization Board (JAB) — consisting of CIOs from DoD, DHS, and GSA — grants a Provisional Authority to Operate (P-ATO) for high-impact or widely-used services.
                </p>
                <div className="space-y-3">
                  {['CSP submits FedRAMP Connect request', 'JAB selects CSP for review', 'CSP completes kickoff and authorization process', 'JAB grants P-ATO for use by all agencies'].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-[oklch(0.65_0.18_55)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">{idx + 1}</span>
                      </div>
                      <p className="text-slate-600">{step}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FedRAMP vs StateRAMP Comparison */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">FedRAMP vs StateRAMP: Which Do You Need?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Understanding the differences between federal and state/local compliance frameworks helps you choose the right path for your organization.
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
                    <th className="px-6 py-4 text-left text-sm font-bold text-[oklch(0.20_0.05_250)] w-3/8 border-l-2 border-slate-200">FedRAMP</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[oklch(0.20_0.05_250)] w-3/8 border-l-2 border-slate-200">StateRAMP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { aspect: 'Target Audience', fedramp: 'Federal agencies and departments', stateramp: 'State, local, and tribal governments' },
                    { aspect: 'Authorization Scope', fedramp: 'Mandatory for federal cloud services', stateramp: 'Voluntary but increasingly adopted by states' },
                    { aspect: 'Security Baseline', fedramp: 'NIST 800-53 controls (125-421 controls)', stateramp: 'NIST 800-53 controls adapted for state/local needs' },
                    { aspect: 'Impact Levels', fedramp: 'Low, Moderate, High', stateramp: 'Low, Moderate, High' },
                    { aspect: 'Authorization Process', fedramp: 'JAB P-ATO or Agency ATO', stateramp: 'StateRAMP authorization with state reciprocity' },
                    { aspect: 'Timeline', fedramp: '12-18 months (Moderate), 18-24 months (High)', stateramp: '9-15 months depending on impact level' },
                    { aspect: 'Cost Range', fedramp: '$250K-$5M+ depending on complexity', stateramp: '$150K-$3M+ depending on scope' },
                    { aspect: 'Reciprocity', fedramp: 'Accepted by all federal agencies', stateramp: 'Growing reciprocity across participating states' },
                    { aspect: 'Best For', fedramp: 'Organizations serving federal government exclusively', stateramp: 'Organizations serving state/local governments or multi-level deployments' }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 1 ? 'bg-[oklch(0.97_0.01_250)]' : ''}>
                      <td className="px-6 py-4 font-semibold text-[oklch(0.20_0.05_250)]">{row.aspect}</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">{row.fedramp}</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">{row.stateramp}</td>
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
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">Need Help Choosing?</h3>
                  <p className="text-slate-600 mb-4">
                    Our compliance experts can assess your specific requirements and recommend the optimal compliance path. Many organizations pursue both FedRAMP and StateRAMP to serve clients across all government levels.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-[linear-gradient(135deg,oklch(0.65_0.20_40),oklch(0.55_0.22_40))] hover:opacity-90 text-white">
                      <Link href="/contact">
                        Schedule Assessment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
                      <Link href="/compliance/stateramp">
                        Learn About StateRAMP
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Services CTA */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
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
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">FedRAMP Implementation Services</h3>
                  <p className="text-slate-600 mb-4">
                    Explore our full suite of FedRAMP implementation services, including readiness assessments, documentation support, and continuous monitoring.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Achieve FedRAMP Compliance?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team of FedRAMP experts will guide you through every step of the authorization process, from readiness assessment to continuous monitoring.
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
                  Download FedRAMP Guide
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
