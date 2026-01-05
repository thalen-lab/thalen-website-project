import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from '@/components/Breadcrumb';

export default function ISO27001() {
  const whoNeedsData = [
    {
      title: "Government Contractors",
      description: "Federal, state, and local government contractors handling sensitive but unclassified information who need to demonstrate security compliance."
    },
    {
      title: "Technology & SaaS Providers",
      description: "Cloud service providers, software companies, and managed service providers seeking to assure clients of their security practices."
    },
    {
      title: "Financial Services",
      description: "Banks, insurance companies, and fintech organizations managing financial data and meeting regulatory requirements."
    },
    {
      title: "Healthcare Organizations",
      description: "Healthcare providers and business associates seeking to complement HIPAA compliance with international security standards."
    },
    {
      title: "Global Enterprises",
      description: "Multinational organizations requiring a unified security framework across diverse regulatory environments."
    },
    {
      title: "Critical Infrastructure",
      description: "Energy, utilities, and transportation organizations protecting operational technology and critical systems."
    }
  ];

  const controlDomains = [
    {
      title: "Organizational Controls (37 controls)",
      items: [
        "Information security policies and procedures",
        "Roles, responsibilities, and segregation of duties",
        "Threat intelligence and information security in project management",
        "Asset management and information classification",
        "Identity management and access control",
        "Supplier relationships and cloud service security"
      ]
    },
    {
      title: "People Controls (8 controls)",
      items: [
        "Screening and terms of employment",
        "Information security awareness and training",
        "Disciplinary process and responsibilities after termination",
        "Remote working and confidentiality agreements",
        "Information security event reporting"
      ]
    },
    {
      title: "Physical Controls (14 controls)",
      items: [
        "Physical security perimeters and entry controls",
        "Securing offices, rooms, and facilities",
        "Physical security monitoring",
        "Equipment siting, protection, and maintenance",
        "Secure disposal and clear desk/screen policies",
        "Storage media management"
      ]
    },
    {
      title: "Technological Controls (34 controls)",
      items: [
        "Endpoint devices and privileged access rights",
        "Secure authentication and capacity management",
        "Protection against malware and vulnerability management",
        "Configuration and change management",
        "Data masking, leakage prevention, and backup",
        "Logging, monitoring, and network security"
      ]
    }
  ];

  const implementationPhases = [
    {
      number: "01",
      title: "Gap Assessment & Scoping",
      description: "We conduct a comprehensive assessment of your current security posture against ISO 27001:2022 requirements (Clauses 4-10 and Annex A). This phase establishes the ISMS scope (Clause 4.3), defines internal and external context (Clause 4.1), identifies interested parties (Clause 4.2), and develops a prioritized remediation roadmap.",
      duration: "2-4 weeks",
      deliverables: ["Gap analysis report", "ISMS scope definition", "Risk register template", "Implementation project plan"]
    },
    {
      number: "02",
      title: "Risk Assessment & Treatment",
      description: "Our team facilitates a systematic risk assessment process (Clauses 6.1.2, 8.2), identifying threats and vulnerabilities to information assets. We develop risk treatment plans (Clause 6.1.3) aligned with your organization's risk appetite and business objectives, selecting appropriate controls from Annex A.",
      duration: "3-4 weeks",
      deliverables: ["Asset inventory", "Risk assessment methodology", "Risk treatment plan", "Statement of Applicability (draft)"]
    },
    {
      number: "03",
      title: "Policy & Control Implementation",
      description: "We develop and implement the required policies (Clause 5.2), procedures, and technical controls selected during risk treatment. This phase includes security awareness training (Annex A Control 6.3), documented information (Clause 7.5), and operational planning and control (Clause 8).",
      duration: "8-12 weeks",
      deliverables: ["ISMS policy framework", "Control implementation evidence", "Security awareness program", "Operational procedures"]
    },
    {
      number: "04",
      title: "Internal Audit & Management Review",
      description: "We conduct internal audits (Clause 9.2) to verify ISMS effectiveness against planned arrangements and ISO 27001 requirements. Management reviews (Clause 9.3) ensure leadership engagement, evaluate ISMS performance, and determine resource needs.",
      duration: "2-3 weeks",
      deliverables: ["Internal audit reports", "Management review minutes", "Corrective action plans", "Certification readiness assessment"]
    },
    {
      number: "05",
      title: "Certification Support",
      description: "We provide comprehensive support during the external certification audit conducted by an accredited certification body, including preparation, evidence organization, and audit accompaniment. Post-certification, we assist with annual surveillance audits and triennial recertification.",
      duration: "2-4 weeks",
      deliverables: ["Audit preparation checklist", "Evidence repository", "Certification audit support", "Surveillance audit planning"]
    }
  ];

  const benefits = [
    {
      title: "Competitive Advantage",
      description: "Differentiate your organization in competitive procurements. Many government and enterprise RFPs now require or prefer ISO 27001 certification as evidence of security maturity."
    },
    {
      title: "Risk Reduction",
      description: "Systematically identify and mitigate information security risks. Organizations with ISO 27001 certification report significantly fewer security incidents and faster recovery times."
    },
    {
      title: "Regulatory Alignment",
      description: "Satisfy multiple compliance requirements with a single framework. ISO 27001 maps to NIST, HIPAA, SOC 2, GDPR, and other regulatory standards, reducing audit fatigue."
    },
    {
      title: "Operational Efficiency",
      description: "Streamline security operations with documented processes and clear responsibilities. The ISMS framework reduces duplication and improves incident response capabilities."
    },
    {
      title: "Stakeholder Confidence",
      description: "Build trust with clients, partners, and regulators through independent verification of your security practices. Certification demonstrates commitment to protecting sensitive information."
    },
    {
      title: "Continuous Improvement",
      description: "Establish a culture of ongoing security enhancement through regular audits, management reviews, and corrective actions. The PDCA cycle ensures your ISMS evolves with emerging threats."
    }
  ];

  const credentials = [
    "ISO 27001 Lead Auditor and Lead Implementer certified consultants",
    "Experience with 50+ successful ISO 27001 certifications",
    "Deep expertise in federal security frameworks (FedRAMP, NIST, CMMC)",
    "Proven methodology with average certification timeline of 8 months",
    "Post-certification support including surveillance audit preparation",
    "Integration expertise with SOC 2, HIPAA, and GDPR compliance programs"
  ];

  const relatedServices = [
    {
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security services including vulnerability assessments, penetration testing, and compliance program development.",
      link: "/services/cybersecurity"
    },
    {
      title: "FedRAMP Authorization",
      description: "End-to-end support for cloud service providers seeking FedRAMP authorization at any impact level.",
      link: "/services/fedramp"
    },
    {
      title: "CMMC Compliance",
      description: "Preparation and implementation services for Cybersecurity Maturity Model Certification requirements.",
      link: "/consulting-services"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/federal-building.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Cybersecurity', href: '/services/cybersecurity' },
                { label: 'ISO 27001 Certification' }
              ]} 
              variant="light" 
            />
          </div>
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Information Security Management</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ISO/IEC 27001 Implementation Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Proven methodologies for implementing ISO/IEC 27001:2022-compliant information security management systems for government and enterprise clients seeking certification.
            </p>
            {/* Sector badges - text only, no icons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Government Contractors', 'Enterprise', 'Healthcare', 'Financial Services'].map((sector) => (
                <div 
                  key={sector}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium"
                >
                  {sector}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/methodology">
                  View Our Methodology
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is ISO 27001 Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-center">Understanding the Standard</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] text-center mb-12">
              What is ISO 27001?
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                <strong className="text-[oklch(0.20_0.05_250)]">ISO/IEC 27001:2022</strong> — formally titled "Information security, cybersecurity and privacy protection — Information security management systems — Requirements" — is the world's best-known standard for Information Security Management Systems (ISMS). Published by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC), this internationally recognized standard provides a systematic approach to managing sensitive information assets so that they remain secure.
              </p>
              
              <p>
                The standard encompasses people, processes, and technology, ensuring that organizations implement comprehensive security controls tailored to their specific risk environment. At its core, ISO/IEC 27001 is built around the <strong className="text-[oklch(0.20_0.05_250)]">CIA Triad</strong> — protecting the <strong className="text-[oklch(0.20_0.05_250)]">Confidentiality</strong>, <strong className="text-[oklch(0.20_0.05_250)]">Integrity</strong>, and <strong className="text-[oklch(0.20_0.05_250)]">Availability</strong> of information assets.
              </p>

              <p>
                The 2022 revision represents the <strong className="text-[oklch(0.20_0.05_250)]">third edition</strong> of ISO/IEC 27001, introducing significant updates to Annex A controls, reducing the total number from 114 controls to 93 controls while reorganizing them into four themes: Organizational (37 controls), People (8 controls), Physical (14 controls), and Technological (34 controls).
              </p>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <h3 className="text-xl font-semibold text-[oklch(0.20_0.05_250)] mb-4">Key Components of ISO 27001</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span><strong className="text-[oklch(0.20_0.05_250)]">Risk Assessment Framework (Clauses 6.1.2, 8.2):</strong> Systematic identification, analysis, and evaluation of information security risks using defined criteria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span><strong className="text-[oklch(0.20_0.05_250)]">Statement of Applicability (SoA) (Clause 6.1.3d):</strong> Mandatory documentation of which Annex A controls are applicable, their implementation status, and justification for inclusions and exclusions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span><strong className="text-[oklch(0.20_0.05_250)]">Continuous Improvement (Clause 10):</strong> Plan-Do-Check-Act (PDCA) cycle ensuring ongoing security enhancement through nonconformity management and corrective actions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span><strong className="text-[oklch(0.20_0.05_250)]">Management Commitment (Clause 5):</strong> Leadership engagement, policy establishment, role assignment, and resource allocation for security initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Needs ISO 27001 Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Market Requirements</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Who Needs ISO 27001 Certification?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Organizations across all industries benefit from ISO 27001 certification, particularly those handling sensitive data, operating in regulated environments, or seeking to demonstrate security maturity to clients and partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoNeedsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO 27001:2022 Control Domains Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Control Framework</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              ISO 27001:2022 Control Domains
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The 2022 revision reorganized Annex A controls into four thematic categories, streamlining implementation while addressing modern security challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {controlDomains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{domain.title}</h3>
                    <ul className="space-y-3">
                      {domain.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{item}</span>
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

      {/* Implementation Methodology Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Implementation Methodology
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              NexDyne Technology's ISO 27001 implementation methodology is designed to minimize disruption while ensuring comprehensive coverage of all standard requirements. Our phased approach typically achieves certification readiness within 6-12 months.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[oklch(0.35_0.10_250)]/20 -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {implementationPhases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-16`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="text-4xl font-bold text-[oklch(0.35_0.10_250)]/20">{phase.number}</span>
                      <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)]">{phase.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-4">{phase.description}</p>
                    <span className="inline-block text-sm font-semibold text-[oklch(0.35_0.10_250)] bg-[oklch(0.35_0.10_250)]/10 px-3 py-1 rounded-full mb-4">
                      {phase.duration}
                    </span>
                    {/* Deliverables */}
                    <div className={`pt-4 border-t border-slate-200 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Deliverables</p>
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                            <span className="text-xs text-slate-600">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[oklch(0.35_0.10_250)] border-4 border-white shadow-md"></div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Business Value</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Benefits of ISO 27001 Certification
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              ISO 27001 certification delivers measurable business value through enhanced security, competitive advantage, and operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NexDyne Technology Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">
                Why Choose NexDyne Technology
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  NexDyne Technology brings deep expertise in information security management systems, with consultants who have led ISO 27001 implementations across government agencies, defense contractors, and Fortune 500 enterprises. Our team includes certified Lead Auditors and Lead Implementers who understand both the technical requirements and business implications of certification.
                </p>
                <p>
                  We take a pragmatic approach to ISO 27001 implementation, focusing on controls that deliver genuine security value rather than checkbox compliance. Our methodology integrates with your existing security investments and management systems, minimizing redundancy while maximizing protection.
                </p>
              </div>
            </motion.div>

            {/* Right Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-[oklch(0.97_0.01_250)] border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-colors duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Our Credentials</h3>
                  <ul className="space-y-4">
                    {credentials.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your ISO 27001 Journey?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Contact our team to schedule a complimentary consultation and learn how NexDyne Technology can guide your organization to ISO 27001 certification.
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
                  Download Resources
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Explore More</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Related Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-3 group-hover:text-[oklch(0.65_0.18_55)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                      <span className="text-[oklch(0.65_0.18_55)] text-sm flex items-center gap-1 font-medium">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
