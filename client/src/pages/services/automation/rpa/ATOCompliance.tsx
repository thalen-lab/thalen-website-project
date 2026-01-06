import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function ATOCompliance() {
  const complianceFrameworks = [
    {
      framework: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program for cloud services',
      levels: ['Low', 'Moderate', 'High'],
      controls: '300+ security controls'
    },
    {
      framework: 'FISMA',
      description: 'Federal Information Security Management Act requirements',
      levels: ['Low', 'Moderate', 'High'],
      controls: 'NIST 800-53 controls'
    },
    {
      framework: 'NIST 800-53',
      description: 'Security and Privacy Controls for Information Systems',
      levels: ['Rev 4', 'Rev 5'],
      controls: '1,000+ control enhancements'
    },
    {
      framework: 'CMMC',
      description: 'Cybersecurity Maturity Model Certification for DoD contractors',
      levels: ['Level 1', 'Level 2', 'Level 3'],
      controls: '171 practices (Level 3)'
    }
  ];

  const atoPhases = [
    {
      phase: 'Phase 1',
      title: 'Security Controls Identification',
      duration: '1-2 weeks',
      activities: [
        'Identify applicable security control baselines (NIST 800-53)',
        'Map RPA platform controls to agency requirements',
        'Document inherited controls from FedRAMP authorization',
        'Identify agency-specific control overlays'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'System Security Plan (SSP) Development',
      duration: '3-4 weeks',
      activities: [
        'Document system architecture and data flows',
        'Detail security control implementations',
        'Create system boundary diagrams',
        'Document roles, responsibilities, and access controls'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Security Assessment & Testing',
      duration: '4-6 weeks',
      activities: [
        'Conduct vulnerability scanning and penetration testing',
        'Perform security control assessments',
        'Document findings and remediation plans',
        'Generate Security Assessment Report (SAR)'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'ATO Package Submission & Authorization',
      duration: '2-4 weeks',
      activities: [
        'Compile complete ATO package for review',
        'Present to agency Authorizing Official (AO)',
        'Address AO questions and concerns',
        'Receive ATO decision and authorization letter'
      ]
    }
  ];

  const atoDocuments = [
    {
      document: 'System Security Plan (SSP)',
      description: 'Comprehensive documentation of security controls, system architecture, and implementation details.',
      pages: '150-300 pages'
    },
    {
      document: 'Security Assessment Report (SAR)',
      description: 'Independent assessment of security controls with findings, risks, and remediation recommendations.',
      pages: '50-100 pages'
    },
    {
      document: 'Plan of Action & Milestones (POA&M)',
      description: 'Tracking document for identified vulnerabilities with remediation timelines and responsible parties.',
      pages: '10-30 pages'
    },
    {
      document: 'Continuous Monitoring Plan',
      description: 'Ongoing security monitoring strategy including scanning schedules, metrics, and reporting procedures.',
      pages: '20-40 pages'
    },
    {
      document: 'Incident Response Plan',
      description: 'Procedures for detecting, responding to, and recovering from security incidents.',
      pages: '30-50 pages'
    },
    {
      document: 'Contingency Plan',
      description: 'Business continuity and disaster recovery procedures for RPA systems.',
      pages: '40-60 pages'
    }
  ];

  const securityControls = [
    {
      family: 'Access Control (AC)',
      examples: ['AC-2: Account Management', 'AC-3: Access Enforcement', 'AC-6: Least Privilege'],
      rpaContext: 'Bot credentials, role-based access, privileged account management'
    },
    {
      family: 'Audit & Accountability (AU)',
      examples: ['AU-2: Audit Events', 'AU-6: Audit Review', 'AU-12: Audit Generation'],
      rpaContext: 'Bot activity logging, transaction auditing, compliance reporting'
    },
    {
      family: 'Identification & Authentication (IA)',
      examples: ['IA-2: User Identification', 'IA-5: Authenticator Management', 'IA-8: Identification'],
      rpaContext: 'Bot authentication, credential rotation, PIV/CAC integration'
    },
    {
      family: 'System & Communications Protection (SC)',
      examples: ['SC-7: Boundary Protection', 'SC-8: Transmission Confidentiality', 'SC-13: Cryptographic Protection'],
      rpaContext: 'Network segmentation, encrypted communications, data protection'
    },
    {
      family: 'System & Information Integrity (SI)',
      examples: ['SI-2: Flaw Remediation', 'SI-3: Malicious Code Protection', 'SI-4: System Monitoring'],
      rpaContext: 'Bot patching, malware protection, anomaly detection'
    }
  ];

  const governmentExperience = [
    {
      agency: 'Federal Civilian Agency',
      framework: 'FedRAMP Moderate',
      timeline: '14 weeks to ATO',
      outcome: 'Zero high-risk findings, approved on first submission'
    },
    {
      agency: 'Department of Defense',
      framework: 'CMMC Level 2 + NIST 800-171',
      timeline: '18 weeks to ATO',
      outcome: 'Full compliance, 45 bots authorized for production'
    },
    {
      agency: 'Intelligence Community',
      framework: 'ICD 503 + NIST 800-53 High',
      timeline: '22 weeks to ATO',
      outcome: 'High-security environment authorization achieved'
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
                { label: 'ATO & Compliance' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Security First, Mission Always</p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              RPA ATO & Compliance Documentation
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Government RPA deployments (federal, state, and local) require rigorous security documentation and compliance validation. We provide complete ATO packages for FedRAMP, StateRAMP, and CMMC compliance, security control implementation, and ongoing compliance support—so your bots meet agency security requirements without delays.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request ATO Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View Compliance Case Study
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Compliance Expertise</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Government Compliance Frameworks We Support
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive documentation and control implementation for all major government security frameworks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {complianceFrameworks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{item.framework}</h3>
                    <p className="text-sm text-slate-600 mb-4">{item.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[oklch(0.97_0.01_250)] rounded-lg px-3 py-2">
                        <div className="text-xs font-semibold text-[oklch(0.65_0.18_55)] mb-1">Authorization Levels</div>
                        <div className="text-xs text-slate-700">{item.levels.join(', ')}</div>
                      </div>
                      <div className="bg-[oklch(0.97_0.01_250)] rounded-lg px-3 py-2">
                        <div className="text-xs font-semibold text-[oklch(0.65_0.18_55)] mb-1">Security Controls</div>
                        <div className="text-xs text-slate-700">{item.controls}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ATO Process */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Our ATO Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Typical timeline: 10-16 weeks from kickoff to ATO authorization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {atoPhases.map((phase, index) => (
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

      {/* ATO Documents */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Deliverables</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              ATO Documentation Package
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Complete security documentation required for government authorization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {atoDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)]">{doc.document}</h3>
                      <span className="text-xs bg-[oklch(0.65_0.18_55)]/10 text-[oklch(0.65_0.18_55)] px-2 py-1 rounded font-semibold">{doc.pages}</span>
                    </div>
                    <p className="text-sm text-slate-600">{doc.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Controls */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Technical Depth</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Key Security Control Families for RPA
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              NIST 800-53 control families most relevant to RPA implementations
            </p>
          </motion.div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {securityControls.map((control, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-3">{control.family}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Example Controls</div>
                        <ul className="space-y-1">
                          {control.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                              <span className="text-sm text-slate-700">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase mb-2">RPA Context</div>
                        <p className="text-sm text-slate-600">{control.rpaContext}</p>
                      </div>
                    </div>
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
              Our Team's ATO Experience
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our team members have successfully guided RPA systems through ATO at leading government agencies. These projects were completed during their tenure at previous organizations.
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
                      <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)]">{exp.framework}</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase">Timeline</div>
                        <p className="text-sm text-slate-700">{exp.timeline}</p>
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
              Ready to Achieve RPA Authorization?
            </h2>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Schedule a consultation to discuss your agency's compliance requirements and learn how our ATO expertise can accelerate your RPA authorization.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule ATO Consultation
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
