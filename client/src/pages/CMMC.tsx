import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Contractual Requirements Analysis",
    description: "Identify DoD contractual obligations for Federal Contract Information (FCI) and Controlled Unclassified Information (CUI) handling. Analyze prime and subcontractor flow-down requirements to ensure proper scoping before assessment.",
    levels: "All Levels"
  },
  {
    title: "Contract Compliance Strategy Development",
    description: "Develop comprehensive compliance strategies aligned with your contract portfolio, including certification timelines for prime contractors and subcontractors. Establish roadmaps for achieving required CMMC levels.",
    levels: "All Levels"
  },
  {
    title: "Readiness Assessment & Self-Assessment Support",
    description: "Assess organizational readiness for CMMC Level 1, Level 2, or Level 3 certification. Support self-assessment processes including control testing, gap identification, and evidence collection against all applicable security practices.",
    levels: "Level 1, 2, 3"
  },
  {
    title: "Gap Remediation & Security Program Development",
    description: "Provide guidance on security control system design, security program development, and implementation of technical and administrative controls. Address identified gaps with prioritized remediation plans aligned with certification timelines.",
    levels: "Level 2, 3"
  },
  {
    title: "Third-Party & Supply Chain Management",
    description: "Assist prime contractors with subcontractor compliance management, including scoping support, flow-down requirement implementation, and auditing subcontractor CMMC compliance status throughout the supply chain.",
    levels: "All Levels"
  },
  {
    title: "Technical Security Evaluations",
    description: "Perform comprehensive technical assessments including vulnerability scanning, penetration testing, web application security testing, and network security evaluations to validate control effectiveness before C3PAO assessment.",
    levels: "Level 2, 3"
  },
  {
    title: "C3PAO Assessment Preparation",
    description: "Prepare for CMMC Third Party Assessment Organization (C3PAO) assessment with evidence collection, artifact review, control validation, and mock assessments. Coordinate with C3PAOs and manage assessment logistics.",
    levels: "Level 2, 3"
  },
  {
    title: "Ongoing Compliance & Annual Attestation",
    description: "Support continuous compliance monitoring, annual attestation preparation, and compliance maintenance activities. Provide ongoing advisory services to maintain certification status and address evolving threats.",
    levels: "Level 2, 3"
  }
];

const caseStudy = {
  title: "Mid-Sized Defense Contractor: CMMC Level 2 Certification",
  challenge: "A defense contractor with $120M in annual DoD contracts needed CMMC Level 2 certification to maintain contract eligibility. Initial contract analysis revealed CUI handling requirements across 15 active contracts with varying scoping needs. The organization faced significant gaps in security controls, inadequate documentation, and unclear subcontractor compliance requirements.",
  results: [
    "CMMC Level 2 certification achieved in 7 months following contract-first methodology",
    "Zero findings during C3PAO assessment with comprehensive evidence package",
    "Subcontractor compliance program established for 8 key suppliers",
    "Vulnerability assessment identified and remediated 47 security gaps pre-assessment",
    "Maintained $120M contract portfolio eligibility and positioned for $45M in new opportunities"
  ]
};

export default function CMMC() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cmmc-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Government Solutions', href: '/federal-solutions' },
                { label: 'CMMC Compliance' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Defense Industrial Base Cybersecurity</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              CMMC Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Comprehensive CMMC consulting services for defense contractors pursuing Level 1, Level 2, and Level 3 certification. From contractual requirements analysis and technical security evaluations to supply chain management and C3PAO assessment preparation, we deliver end-to-end compliance support aligned with your DoD contract obligations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact/government">
                  Schedule Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/resources">
                  Download CMMC Resources
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is CMMC Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Understanding CMMC</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  The Cybersecurity Maturity Model Certification (CMMC) is a unified standard for implementing cybersecurity across the Defense Industrial Base (DIB). The Department of Defense developed CMMC to protect Federal Contract Information (FCI) and Controlled Unclassified Information (CUI) within the defense supply chain.
                </p>
                <p>
                  CMMC certification is required for Department of Defense contractors and subcontractors. The framework incorporates cybersecurity standards and best practices, including NIST SP 800-171, mapped to processes and practices across maturity levels.
                </p>
                <p>
                  Unlike self-attestation approaches, CMMC requires third-party assessment by certified CMMC Third Party Assessment Organizations (C3PAOs), providing objective verification of cybersecurity practices.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="/cmmc-security.png" 
                alt="CMMC Cybersecurity Framework" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory Updates */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Regulatory Status</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">CMMC Regulatory Status</h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Final Rule Published (December 2024)',
                content: 'The Department of Defense published the final CMMC rule in the Federal Register, effective December 16, 2024. This regulation establishes CMMC as a requirement for DoD contractors handling Federal Contract Information (FCI) and Controlled Unclassified Information (CUI).',
                note: 'Under 32 CFR Part 170, organizations must achieve the CMMC level corresponding to the type of information they handle. CMMC requirements will be phased into DoD contracts over 12-24 months, with high-priority programs requiring certification first.'
              },
              {
                title: 'DFARS Clause 252.204-7021',
                content: 'The Defense Federal Acquisition Regulation Supplement (DFARS) clause 252.204-7021 requires contractors to maintain a current CMMC certificate at the level specified in the contract. This clause is being incorporated into new DoD solicitations and contract modifications.',
                note: 'Contractors must maintain CMMC certification throughout the contract performance period and provide certification evidence to the Contracting Officer upon request.'
              },
              {
                title: 'Annual Attestation Requirement',
                content: 'After achieving CMMC Level 2 certification, organizations must submit annual attestations confirming continued compliance with all 110 security practices. Failure to maintain compliance can result in certificate suspension or revocation.',
                note: 'Note: Organizations can pass a CMMC assessment but remain non-compliant if contractual CUI requirements were not properly validated during scoping. Contract analysis before assessment scope definition helps ensure alignment between certification and contractual obligations.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{item.content}</p>
                  <p className="text-slate-600 leading-relaxed">{item.note}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <img 
                src="/cmmc-team-meeting.jpg" 
                alt="CMMC Consulting Team" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Contract-First CMMC Methodology</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our methodology begins with contractual requirements analysis—not technical assessments. We identify DoD Federal Contract Information (FCI) and Controlled Unclassified Information (CUI) handling obligations before defining assessment scope. This contract-first approach prevents a critical failure mode: achieving CMMC certification while remaining non-compliant with actual contractual obligations.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Organizations can pass C3PAO assessments and achieve perfect NIST 800-171 scores, yet still violate contract terms if CUI requirements were improperly scoped. Our upfront contract analysis ensures certification aligns with your actual compliance obligations.
              </p>
              
              <Card className="p-6 bg-white border-2 border-slate-200 mt-8">
                <h3 className="font-bold text-[oklch(0.20_0.05_250)] mb-4">This approach allows us to tailor services to provide:</h3>
                <ul className="space-y-3">
                  {['NIST 800-171 assessment services', 'CMMC Level 1 self-assessment support', 'CMMC Level 2 readiness', 'Self-assessment support', 'Accurate CMMC documentation'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 bg-white border-2 border-[oklch(0.70_0.18_55)] mt-6">
                <p className="text-slate-600 leading-relaxed">
                  Upon successful awarding of a CMMC certification, we also provide ongoing support for the required annual attestation and subsequent contracting arrangements.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Credentials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">Experience & Credentials</h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Cyber AB Registered Practitioner Organization',
                content: 'NexDyne Technology is a Cyber AB Registered Practitioner Organization (RPO) with credentialed CMMC consultants authorized to provide advisory services to organizations pursuing CMMC certification.',
                note: 'Our consultants have completed training and maintain current knowledge of CMMC requirements, assessment processes, and implementation practices as validated by the Cyber Accreditation Body.'
              },
              {
                title: 'Proven Track Record',
                content: 'Our team has supported CMMC certifications across defense contractors, from small subcontractors to large prime contractors.',
                stats: ['15+ CMMC Level 2 certifications supported', '100% assessment success rate', 'Average 6-8 month implementation timeline']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{item.content}</p>
                  {item.note && <p className="text-slate-600 leading-relaxed">{item.note}</p>}
                  {item.stats && (
                    <ul className="space-y-3 mt-4">
                      {item.stats.map((stat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-slate-700">{stat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="/cmmc-professionals.jpg" 
              alt="CMMC Professional Team" 
              className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CMMC Levels Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Certification Levels</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">CMMC Maturity Levels</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              CMMC consists of three levels, each building upon the previous to provide progressively advanced cybersecurity protection.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: 'Level 1: Foundational (17 practices)',
                description: 'Basic cyber hygiene practices to protect Federal Contract Information (FCI). Suitable for contractors handling only FCI without CUI. Implements foundational security controls including access control, identification and authentication, media protection, physical protection, system and communications protection, and system and information integrity.',
                assessment: 'Annual self-assessment with affirmation statement',
                timeline: '2-4 months for implementation and self-assessment'
              },
              {
                title: 'Level 2: Advanced (110 practices)',
                description: 'Implements all NIST SP 800-171 security requirements to protect Controlled Unclassified Information (CUI). Required for most DoD contractors and subcontractors handling CUI. Encompasses 17 security domains including access control, incident response, risk assessment, security assessment, system and communications protection, and system and information integrity.',
                assessment: 'Third-party assessment by certified C3PAO (triennial cycle) with annual self-attestation between assessments',
                timeline: '6-12 months for gap remediation, implementation, and C3PAO assessment',
                contract: 'DFARS clause 252.204-7021 requires Level 2 for contracts involving CUI'
              },
              {
                title: 'Level 3: Expert (130 practices)',
                description: 'Advanced and progressive cybersecurity practices to protect CUI against Advanced Persistent Threats (APTs). Builds upon Level 2 with 20 additional practices focused on threat hunting, advanced monitoring, and proactive defense. Required for high-priority programs, critical national security information, and contracts explicitly requiring Level 3 certification.',
                assessment: 'Government-led assessment by Defense Industrial Base Cybersecurity Assessment Center (DIBCAC) or authorized government assessors',
                timeline: '12-18 months for comprehensive implementation and government assessment',
                contract: 'Specified in individual contracts for critical programs and APT-targeted environments'
              }
            ].map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{level.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{level.description}</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[oklch(0.97_0.01_250)] p-6 rounded-lg">
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.20_0.05_250)] mb-2">Assessment Method:</p>
                      <p className="text-sm text-slate-600">{level.assessment}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.20_0.05_250)] mb-2">Typical Timeline:</p>
                      <p className="text-sm text-slate-600">{level.timeline}</p>
                    </div>
                    {level.contract && (
                      <div>
                        <p className="text-sm font-semibold text-[oklch(0.20_0.05_250)] mb-2">Contract Requirements:</p>
                        <p className="text-sm text-slate-600">{level.contract}</p>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Comprehensive CMMC Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              End-to-end support from contract analysis through certification and ongoing compliance. Our services address the full spectrum of CMMC requirements across all certification levels, including technical evaluations, supply chain management, and strategic compliance planning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)]">{service.title}</h3>
                    <span className="text-xs font-medium text-[oklch(0.65_0.18_55)] bg-[oklch(0.95_0.05_55)] px-3 py-1 rounded-full flex-shrink-0 ml-4">
                      {service.levels}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Domains Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Security Domains</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">CMMC Level 2 Security Domains</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              CMMC Level 2 encompasses 110 practices across 17 security domains aligned with NIST SP 800-171.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Access Control (AC)',
              'Awareness and Training (AT)',
              'Audit and Accountability (AU)',
              'Configuration Management (CM)',
              'Identification and Authentication (IA)',
              'Incident Response (IR)',
              'Maintenance (MA)',
              'Media Protection (MP)',
              'Personnel Security (PS)',
              'Physical Protection (PE)',
              'Risk Assessment (RA)',
              'Security Assessment (CA)',
              'System and Communications Protection (SC)',
              'System and Information Integrity (SI)',
              'Planning (PL)',
              'Program Management (PM)',
              'Recovery (RE)'
            ].map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="flex items-start gap-3 p-5 bg-white rounded-lg border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                <span className="text-slate-700 font-medium">{domain}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Success Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">Client Success Story</h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-6">{caseStudy.title}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[oklch(0.20_0.05_250)] mb-3 text-lg">Challenge</h4>
                    <p className="text-slate-600 leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[oklch(0.20_0.05_250)] mb-4 text-lg">Results</h4>
                    <ul className="space-y-3">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-slate-600 leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="/cmmc-compliance.jpg" 
                alt="CMMC Compliance Success" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your CMMC Certification?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us to discuss your CMMC requirements and timeline. Our team can assess your current security posture and develop an implementation roadmap aligned with your DoD contracts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact/government">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/resources">
                  Download CMMC Resources
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
