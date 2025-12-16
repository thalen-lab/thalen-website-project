import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Shield,
  CheckCircle,
  FileCheck,
  Users,
  Building2,
  Globe,
  Lock,
  ClipboardCheck,
  Target,
  ArrowRight,
  Phone,
  Mail,
  Award,
  Briefcase,
  BarChart3,
  Settings,
  FileText,
  AlertTriangle,
  Server,
  UserCheck,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ISO27001() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Amber accent bar at top - Cyber AB style */}
      <div className="h-1.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />

      {/* Hero Section - Dark navy background */}
      <section className="bg-[#0a1628] py-20 lg:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white uppercase mb-6">
            ISO 27001 Implementation Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
            Proven methodologies for implementing ISO 27001:2022-compliant information security management systems for government and enterprise clients seeking certification.
          </p>
        </div>
      </section>

      {/* What is ISO 27001 Section */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <div className="bg-[#12243d] rounded-lg p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
              What is ISO 27001?
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <span className="text-amber-500 font-medium">ISO/IEC 27001:2022</span> is the internationally recognized standard for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). Published by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC), this standard provides a systematic approach to managing sensitive company information so that it remains secure.
              </p>
              
              <p>
                The standard encompasses people, processes, and technology, ensuring that organizations implement comprehensive security controls tailored to their specific risk environment. ISO 27001 certification demonstrates to clients, partners, and regulatory bodies that an organization has implemented best-practice information security processes.
              </p>

              <p>
                The 2022 revision of ISO 27001 introduced significant updates to Annex A controls, reducing the total number from 114 to 93 while reorganizing them into four themes: Organizational, People, Physical, and Technological controls. This restructuring reflects the evolving threat landscape and modern security practices, including enhanced focus on cloud security, threat intelligence, and data protection.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-xl font-medium text-white mb-4">Key Components of ISO 27001</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Risk Assessment Framework</strong> — Systematic identification, analysis, and evaluation of information security risks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Statement of Applicability (SoA)</strong> — Documentation of which controls are applicable and their implementation status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Continuous Improvement</strong> — Plan-Do-Check-Act (PDCA) cycle ensuring ongoing security enhancement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Management Commitment</strong> — Leadership engagement and resource allocation for security initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs ISO 27001 Section */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
            Who Needs ISO 27001 Certification?
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed mb-10">
            <p>
              Organizations across all industries benefit from ISO 27001 certification, particularly those handling sensitive data, operating in regulated environments, or seeking to demonstrate security maturity to clients and partners. The standard is industry-agnostic and scalable, making it applicable to organizations of any size.
            </p>

            <p>
              Government contractors and organizations working with federal agencies increasingly require ISO 27001 certification as part of their security posture. The standard complements other frameworks such as FedRAMP, NIST 800-53, and CMMC, providing a foundation for comprehensive security governance.
            </p>

            <p>
              For enterprises pursuing digital transformation, ISO 27001 certification provides assurance to stakeholders that security is embedded into business processes. Many organizations find that certification opens doors to new business opportunities, particularly in sectors where information security is paramount.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Government Contractors",
                description: "Federal, state, and local government contractors handling sensitive but unclassified information who need to demonstrate security compliance."
              },
              {
                icon: Server,
                title: "Technology & SaaS Providers",
                description: "Cloud service providers, software companies, and managed service providers seeking to assure clients of their security practices."
              },
              {
                icon: Briefcase,
                title: "Financial Services",
                description: "Banks, insurance companies, and fintech organizations managing financial data and meeting regulatory requirements."
              },
              {
                icon: Users,
                title: "Healthcare Organizations",
                description: "Healthcare providers and business associates seeking to complement HIPAA compliance with international security standards."
              },
              {
                icon: Globe,
                title: "Global Enterprises",
                description: "Multinational organizations requiring a unified security framework across diverse regulatory environments."
              },
              {
                icon: Lock,
                title: "Critical Infrastructure",
                description: "Energy, utilities, and transportation organizations protecting operational technology and critical systems."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#12243d] rounded-lg p-6">
                <item.icon className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO 27001:2022 Requirements Section */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <div className="bg-[#12243d] rounded-lg p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
              ISO 27001:2022 Control Domains
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              The 2022 revision reorganized Annex A controls into four thematic categories, streamlining implementation while addressing modern security challenges. Organizations must evaluate each control's applicability based on their risk assessment and document justifications in the Statement of Applicability.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: ClipboardCheck,
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
                  icon: UserCheck,
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
                  icon: Building2,
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
                  icon: Settings,
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
              ].map((domain, index) => (
                <div key={index} className="border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <domain.icon className="w-8 h-8 text-amber-500" />
                    <h3 className="text-lg font-medium text-white">{domain.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {domain.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology Section */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
            Our Implementation Methodology
          </h2>

          <p className="text-gray-300 leading-relaxed mb-10 max-w-4xl">
            NexDyne's ISO 27001 implementation methodology is designed to minimize disruption while ensuring comprehensive coverage of all standard requirements. Our phased approach typically achieves certification readiness within 6-12 months, depending on organizational complexity and existing security maturity.
          </p>

          <div className="space-y-6">
            {[
              {
                phase: "Phase 1",
                title: "Gap Assessment & Scoping",
                duration: "4-6 weeks",
                description: "We conduct a comprehensive assessment of your current security posture against ISO 27001:2022 requirements. This phase establishes the ISMS scope, identifies gaps, and develops a prioritized remediation roadmap.",
                deliverables: ["Gap analysis report", "ISMS scope definition", "Risk register template", "Implementation project plan"]
              },
              {
                phase: "Phase 2",
                title: "Risk Assessment & Treatment",
                duration: "6-8 weeks",
                description: "Our team facilitates a systematic risk assessment process, identifying threats and vulnerabilities to information assets. We develop risk treatment plans aligned with your organization's risk appetite and business objectives.",
                deliverables: ["Asset inventory", "Risk assessment methodology", "Risk treatment plan", "Statement of Applicability (draft)"]
              },
              {
                phase: "Phase 3",
                title: "Policy & Control Implementation",
                duration: "12-16 weeks",
                description: "We develop and implement the required policies, procedures, and technical controls. This phase includes security awareness training, process documentation, and integration with existing management systems.",
                deliverables: ["ISMS policy framework", "Control implementation evidence", "Security awareness program", "Operational procedures"]
              },
              {
                phase: "Phase 4",
                title: "Internal Audit & Management Review",
                duration: "4-6 weeks",
                description: "We conduct internal audits to verify ISMS effectiveness and identify improvement opportunities. Management reviews ensure leadership engagement and resource allocation for ongoing security operations.",
                deliverables: ["Internal audit reports", "Management review minutes", "Corrective action plans", "Certification readiness assessment"]
              },
              {
                phase: "Phase 5",
                title: "Certification Support",
                duration: "4-8 weeks",
                description: "We provide comprehensive support during the external certification audit, including preparation, evidence organization, and audit accompaniment. Post-certification, we assist with surveillance audit preparation and continuous improvement.",
                deliverables: ["Audit preparation checklist", "Evidence repository", "Certification audit support", "Surveillance audit planning"]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-[#12243d] rounded-lg p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2 text-center">
                      <span className="text-amber-500 font-medium text-sm">{phase.phase}</span>
                      <p className="text-gray-400 text-xs mt-1">{phase.duration}</p>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-medium text-white mb-3">{phase.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{phase.description}</p>
                    <div>
                      <h4 className="text-sm font-medium text-amber-500 mb-2">Key Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <span key={idx} className="bg-[#0a1628] text-gray-400 text-xs px-3 py-1 rounded-full">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <div className="bg-[#12243d] rounded-lg p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
              Benefits of ISO 27001 Certification
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg flex-shrink-0">
                    <Award className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Competitive Advantage</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Differentiate your organization in competitive procurements. Many government and enterprise RFPs now require or prefer ISO 27001 certification as evidence of security maturity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Risk Reduction</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Systematically identify and mitigate information security risks. Organizations with ISO 27001 certification report significantly fewer security incidents and faster recovery times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Regulatory Alignment</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Satisfy multiple compliance requirements with a single framework. ISO 27001 maps to NIST, HIPAA, SOC 2, GDPR, and other regulatory standards, reducing audit fatigue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Operational Efficiency</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Streamline security operations with documented processes and clear responsibilities. The ISMS framework reduces duplication and improves incident response capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Stakeholder Confidence</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Build trust with clients, partners, and regulators through independent verification of your security practices. Certification demonstrates commitment to protecting sensitive information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg flex-shrink-0">
                    <Target className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Continuous Improvement</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Establish a culture of ongoing security enhancement through regular audits, management reviews, and corrective actions. The PDCA cycle ensures your ISMS evolves with emerging threats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NexDyne Section */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
            Why Choose NexDyne
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                NexDyne brings deep expertise in information security management systems, with consultants who have led ISO 27001 implementations across government agencies, defense contractors, and Fortune 500 enterprises. Our team includes certified Lead Auditors and Lead Implementers who understand both the technical requirements and business implications of certification.
              </p>

              <p>
                We take a pragmatic approach to ISO 27001 implementation, focusing on controls that deliver genuine security value rather than checkbox compliance. Our methodology integrates with your existing security investments and management systems, minimizing redundancy while maximizing protection.
              </p>

              <p>
                Our government and enterprise experience means we understand the unique challenges of implementing security frameworks in complex environments. We've successfully guided organizations through certification while maintaining operational continuity and stakeholder satisfaction.
              </p>
            </div>

            <div className="bg-[#12243d] rounded-lg p-6 lg:p-8">
              <h3 className="text-lg font-medium text-white mb-6">Our Credentials</h3>
              <ul className="space-y-4">
                {[
                  "ISO 27001 Lead Auditor and Lead Implementer certified consultants",
                  "Experience with 50+ successful ISO 27001 certifications",
                  "Deep expertise in federal security frameworks (FedRAMP, NIST, CMMC)",
                  "Proven methodology with average certification timeline of 8 months",
                  "Post-certification support including surveillance audit preparation",
                  "Integration expertise with SOC 2, HIPAA, and GDPR compliance programs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-amber-600/20 to-amber-500/10 border border-amber-500/30 rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-4">
              Ready to Begin Your ISO 27001 Journey?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Contact our team to schedule a complimentary consultation and learn how NexDyne can guide your organization to ISO 27001 certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500/10 px-8 py-3 text-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
            Related Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Cybersecurity & Compliance",
                description: "Comprehensive security services including vulnerability assessments, penetration testing, and compliance program development.",
                link: "/services/cybersecurity"
              },
              {
                icon: FileText,
                title: "FedRAMP Authorization",
                description: "End-to-end support for cloud service providers seeking FedRAMP authorization at any impact level.",
                link: "/services/cybersecurity"
              },
              {
                icon: AlertTriangle,
                title: "CMMC Compliance",
                description: "Preparation and implementation services for Cybersecurity Maturity Model Certification requirements.",
                link: "/services/cybersecurity"
              }
            ].map((service, index) => (
              <Link key={index} href={service.link}>
                <div className="bg-[#12243d] rounded-lg p-6 h-full hover:bg-[#162d4d] transition-colors cursor-pointer group">
                  <service.icon className="w-10 h-10 text-amber-500 mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-amber-500 text-sm flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
