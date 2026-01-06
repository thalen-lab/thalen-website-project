import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function PlatformImplementation() {
  const platforms = [
    {
      name: 'UiPath Government Cloud',
      authorization: 'FedRAMP Moderate',
      strengths: ['Enterprise-grade scalability', 'AI/ML capabilities', 'Strong document processing', 'Extensive marketplace'],
      bestFor: 'Large-scale enterprise automation with complex workflows'
    },
    {
      name: 'Automation Anywhere Gov',
      authorization: 'FedRAMP Moderate',
      strengths: ['Cloud-native architecture', 'IQ Bot for intelligent automation', 'Strong analytics', 'Easy to use'],
      bestFor: 'Agencies prioritizing cloud-first and ease of use'
    },
    {
      name: 'Blue Prism Government',
      authorization: 'FedRAMP Moderate',
      strengths: ['Enterprise security focus', 'Digital workforce management', 'Strong governance', 'Audit trails'],
      bestFor: 'High-security environments requiring strict governance'
    },
    {
      name: 'Microsoft Power Automate Gov',
      authorization: 'FedRAMP High',
      strengths: ['Native Microsoft 365 integration', 'Low-code platform', 'Citizen developer friendly', 'Included in licenses'],
      bestFor: 'Microsoft-centric agencies with existing M365 investments'
    }
  ];

  const selectionCriteria = [
    {
      criterion: 'Mission Requirements',
      description: 'Process complexity, volume, integration needs',
      weight: '30%'
    },
    {
      criterion: 'Security & Compliance',
      description: 'FedRAMP level, data residency, audit requirements',
      weight: '25%'
    },
    {
      criterion: 'Technical Fit',
      description: 'System compatibility, scalability, AI/ML needs',
      weight: '20%'
    },
    {
      criterion: 'Total Cost of Ownership',
      description: 'Licensing, implementation, training, maintenance',
      weight: '15%'
    },
    {
      criterion: 'Vendor Support',
      description: 'Government experience, support quality, roadmap',
      weight: '10%'
    }
  ];

  const implementationPhases = [
    {
      phase: 'Phase 1',
      title: 'Platform Selection & Architecture',
      duration: '2-3 weeks',
      activities: [
        'Evaluate platforms against selection criteria',
        'Conduct vendor demos and proof-of-concepts',
        'Design technical architecture and integration patterns',
        'Document security controls and compliance requirements'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Environment Setup & Configuration',
      duration: '3-4 weeks',
      activities: [
        'Provision FedRAMP-authorized platform environment',
        'Configure security controls and access policies',
        'Establish development, test, and production environments',
        'Integrate with identity management (PIV/CAC)'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Bot Development & Testing',
      duration: '6-12 weeks',
      activities: [
        'Develop bots for prioritized processes',
        'Build reusable components and libraries',
        'Conduct unit, integration, and user acceptance testing',
        'Document bot logic and exception handling'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Deployment & Hypercare',
      duration: '2-4 weeks',
      activities: [
        'Deploy bots to production environment',
        'Monitor performance and handle exceptions',
        'Provide intensive support during initial weeks',
        'Optimize bot performance based on real-world usage'
      ]
    }
  ];

  const deliverables = [
    {
      title: 'Platform Selection Report',
      description: 'Comprehensive evaluation of FedRAMP RPA platforms with scoring matrix, vendor comparison, and recommendation rationale.'
    },
    {
      title: 'Technical Architecture Document',
      description: 'Detailed architecture diagrams, integration patterns, security controls, and infrastructure requirements.'
    },
    {
      title: 'Bot Development Standards',
      description: 'Coding standards, naming conventions, error handling patterns, and reusable component library.'
    },
    {
      title: 'ATO Documentation Package',
      description: 'Security controls documentation, system security plan updates, and compliance evidence for ATO submission.'
    },
    {
      title: 'Operations Runbook',
      description: 'Bot monitoring procedures, exception handling workflows, escalation paths, and maintenance schedules.'
    }
  ];

  const governmentExperience = [
    {
      agency: 'Federal Agency',
      platform: 'UiPath Government Cloud',
      scope: '45 bots deployed across 12 processes',
      outcome: '85% automation rate, $4.2M annual savings'
    },
    {
      agency: 'Department of Defense',
      platform: 'Blue Prism Government',
      scope: 'Contract management automation',
      outcome: 'CMMC Level 2 compliant, 60% faster processing'
    },
    {
      agency: 'Department of Veterans Affairs',
      platform: 'Automation Anywhere Gov',
      scope: 'Benefits claims processing',
      outcome: '40% reduction in processing time'
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
          style={{ backgroundImage: "url('/rpa-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Intelligent Automation', href: '/services/automation' },
                { label: 'Government RPA', href: '/services/automation/rpa' },
                { label: 'Platform Implementation' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Vendor-Neutral RPA Consulting</p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              RPA Platform Selection & Implementation
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              We help government agencies (federal, state, and local) select and implement the RIGHT FedRAMP and StateRAMP-authorized RPA platform for their mission requirements. Vendor-neutral consulting ensures you get the best fit—not just the platform we happen to sell.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Platform Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View Implementation Case Study
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FedRAMP RPA Platforms */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Options</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              FedRAMP-Authorized RPA Platforms
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We implement all major FedRAMP-authorized RPA platforms—our recommendation is based on YOUR requirements, not vendor relationships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)]">{platform.name}</h3>
                      <span className="inline-block bg-[oklch(0.65_0.18_55)]/10 text-[oklch(0.65_0.18_55)] px-3 py-1 rounded-full text-xs font-semibold">
                        {platform.authorization}
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-[oklch(0.20_0.05_250)] mb-2">Key Strengths:</div>
                      <ul className="space-y-2">
                        {platform.strengths.map((strength, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                            <span className="text-sm text-slate-700">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[oklch(0.97_0.01_250)] rounded-lg px-4 py-3">
                      <div className="text-xs font-semibold text-[oklch(0.65_0.18_55)] mb-1">Best For:</div>
                      <div className="text-sm text-slate-700">{platform.bestFor}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Selection Methodology</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Our Platform Selection Methodology
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We evaluate platforms using a weighted scoring model aligned with your agency's priorities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="space-y-4">
                  {selectionCriteria.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b border-slate-200 last:border-b-0 last:pb-0">
                      <div className="bg-[oklch(0.65_0.18_55)] text-white rounded-lg w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {item.weight}
                      </div>
                      <div>
                        <h4 className="font-bold text-[oklch(0.20_0.05_250)] mb-1">{item.criterion}</h4>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Implementation Process</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Our 4-Phase Implementation Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful RPA platform deployment in government environments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {implementationPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[oklch(0.65_0.18_55)] text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm text-[oklch(0.65_0.18_55)] font-semibold">{phase.phase}</div>
                        <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)]">{phase.title}</h3>
                        <div className="text-sm text-slate-500">Duration: {phase.duration}</div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">What You Receive</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Implementation Deliverables
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-3">{deliverable.title}</h3>
                    <p className="text-sm text-slate-600">{deliverable.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Our Team's Government Experience
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our team members have delivered RPA implementations at leading government agencies. These projects were completed during their tenure at previous organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            {governmentExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-[oklch(0.65_0.18_55)] text-white text-xs font-semibold rounded-full mb-2">
                        {exp.agency}
                      </span>
                      <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)]">{exp.platform}</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase">Scope</div>
                        <p className="text-sm text-slate-700">{exp.scope}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase">Outcome</div>
                        <p className="text-sm text-[oklch(0.65_0.18_55)] font-semibold">{exp.outcome}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to Select the Right RPA Platform?
            </h2>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Schedule a consultation to discuss your agency's requirements and learn how our vendor-neutral approach ensures you get the best-fit platform for your mission.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule Platform Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/services/automation/rpa">
                  Back to RPA Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
