import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Shield,
  FileCheck,
  Users,
  Building2,
  Globe,
  Lock,
  Target,
  ArrowRight,
  Phone,
  Mail,
  Award,
  Briefcase,
  BarChart3,
  FileText,
  AlertTriangle,
  Server,
  Cloud,
  CheckCircle2,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FedRAMP() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Amber accent bar at top - Cyber AB style */}
      <div className="h-1.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />

      {/* Hero Section - Dark navy background */}
      <section className="bg-[#0a1628] py-20 lg:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white uppercase mb-6">
            FedRAMP & StateRAMP Implementation Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
            Expert implementation services for FedRAMP and StateRAMP-authorized platforms across federal, state, and local agencies at Moderate and High impact levels with comprehensive ATO support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Request Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              View Our Certifications
            </Button>
          </div>
        </div>
      </section>

      {/* What is FedRAMP Section */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <div className="bg-[#12243d] rounded-lg p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
              What is FedRAMP?
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <span className="text-amber-500 font-medium">FedRAMP (Federal Risk and Authorization Management Program)</span> is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services. Established in 2011 and mandated by the Office of Management and Budget (OMB), FedRAMP enables federal agencies to accelerate adoption of secure cloud solutions while reducing duplicative security assessments. The program is based on NIST Special Publication 800-53 security controls and requires rigorous third-party assessment by FedRAMP-accredited 3PAOs (Third Party Assessment Organizations).
              </p>
              
              <p>
                FedRAMP authorization demonstrates that a cloud service provider has implemented comprehensive security controls and maintains continuous monitoring capabilities that meet federal standards. The program offers three authorization pathways: <strong className="text-white">Agency Authorization</strong> (agency-sponsored ATO), <strong className="text-white">JAB Provisional Authorization</strong> (Joint Authorization Board review for high-impact systems), and <strong className="text-white">FedRAMP Tailored</strong> (for low-risk applications). Once authorized, cloud services receive an Authority to Operate (ATO) that can be leveraged across multiple federal agencies, significantly reducing time-to-mission and compliance costs.
              </p>

              <p>
                <span className="text-amber-500 font-medium">StateRAMP</span> extends the FedRAMP framework to state and local government entities, providing a standardized security authorization process for cloud services used by state agencies, municipalities, and educational institutions. StateRAMP leverages the same NIST 800-53 control baselines as FedRAMP but offers flexibility for state-specific requirements and risk tolerances. The program enables reciprocity across participating states, allowing cloud providers to achieve authorization once and reuse it across multiple state jurisdictions, dramatically reducing the burden of state-by-state compliance efforts.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-xl font-medium text-white mb-4">Key Components of FedRAMP/StateRAMP</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">•</span>
                    <span><strong className="text-white">System Security Plan (SSP)</strong> — Comprehensive documentation of security controls implementation, system architecture, and risk management approach</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">•</span>
                    <span><strong className="text-white">Security Assessment Report (SAR)</strong> — Independent 3PAO assessment validating control implementation and identifying any deviations</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">•</span>
                    <span><strong className="text-white">Plan of Action & Milestones (POA&M)</strong> — Documented remediation plan for identified vulnerabilities and control gaps</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">•</span>
                    <span><strong className="text-white">Continuous Monitoring</strong> — Ongoing security assessment, vulnerability scanning, and incident response capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs FedRAMP Section */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
            Who Needs FedRAMP/StateRAMP Authorization?
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed mb-10">
            <p>
              Cloud service providers seeking to do business with federal, state, or local government agencies must obtain FedRAMP or StateRAMP authorization. The requirement applies to any cloud-based solution that processes, stores, or transmits government data, regardless of whether the data is classified or unclassified. Without proper authorization, agencies cannot procure or use cloud services, making FedRAMP/StateRAMP essential for market access.
            </p>

            <p>
              Organizations pursuing FedRAMP authorization typically include SaaS platforms, cloud infrastructure providers, managed security service providers, and government contractors offering cloud-enabled solutions. The authorization process is resource-intensive, often requiring 12-18 months for initial authorization and significant ongoing investment in continuous monitoring and compliance maintenance. However, the business value is substantial: FedRAMP-authorized services gain access to the $50+ billion federal cloud market and can leverage their authorization across hundreds of agencies.
            </p>

            <p>
              StateRAMP authorization is critical for cloud providers serving state and local governments, K-12 education systems, and public universities. As states increasingly adopt cloud-first policies, StateRAMP provides a competitive advantage and streamlines procurement processes. Many states now require StateRAMP authorization for cloud services handling sensitive state data, making it a prerequisite for market participation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: "Cloud Service Providers",
                description: "SaaS, PaaS, and IaaS providers seeking to serve federal agencies and state governments with authorized cloud solutions."
              },
              {
                icon: Shield,
                title: "Managed Security Services",
                description: "Security operations centers, threat intelligence platforms, and cybersecurity tools used by government entities."
              },
              {
                icon: Server,
                title: "Government Contractors",
                description: "System integrators and contractors providing cloud-enabled solutions to federal, state, and local agencies."
              },
              {
                icon: FileText,
                title: "Collaboration Platforms",
                description: "Communication, document management, and collaboration tools used across government organizations."
              },
              {
                icon: BarChart3,
                title: "Data Analytics Platforms",
                description: "Business intelligence, data warehousing, and analytics solutions processing government data."
              },
              {
                icon: Users,
                title: "HR & Financial Systems",
                description: "Enterprise resource planning, payroll, and human capital management systems for public sector organizations."
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

      {/* Dedicated Services CTAs */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-4">
              Explore Our Specialized Compliance Services
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dive deeper into our dedicated FedRAMP and StateRAMP/GovRAMP services, tailored to your specific government sector needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* FedRAMP CTA Card */}
            <div className="bg-gradient-to-br from-[#12243d] to-[#0d1c30] rounded-lg p-8 border border-blue-500/30 hover:border-blue-500/60 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-medium text-white">FedRAMP</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Comprehensive FedRAMP compliance services for federal agencies. Navigate the rigorous security requirements with our expert guidance.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Federal agency authorization (ATO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Low, Moderate, and High impact levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>NIST 800-53 control implementation</span>
                </li>
              </ul>
              <Link href="/compliance/fedramp">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Explore FedRAMP Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* StateRAMP CTA Card */}
            <div className="bg-gradient-to-br from-[#12243d] to-[#0d1c30] rounded-lg p-8 border border-amber-500/30 hover:border-amber-500/60 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-500/20 rounded-lg p-3">
                  <Building2 className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-medium text-white">StateRAMP/GovRAMP</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Specialized StateRAMP/GovRAMP compliance services for state, local, and tribal governments. Achieve multi-state authorization reciprocity.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>State and local government authorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Multi-state reciprocity framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>State-specific compliance requirements</span>
                </li>
              </ul>
              <Link href="/compliance/stateramp">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Explore StateRAMP Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Levels Section */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <div className="bg-[#12243d] rounded-lg p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
              FedRAMP Impact Levels
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              FedRAMP defines three impact levels based on FIPS 199 categorization, each requiring progressively more rigorous security controls. Understanding the appropriate impact level is critical for scoping your authorization effort and ensuring compliance with federal requirements.
            </p>

            <div className="space-y-6">
              <div className="bg-[#0d1c30] rounded-lg p-6 border-l-4 border-amber-500">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 rounded-lg p-3">
                    <Shield className="w-8 h-8 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white mb-2">Low Impact (LI-SaaS)</h3>
                    <p className="text-gray-300 mb-3">
                      For cloud services where loss of confidentiality, integrity, or availability would have limited adverse effect. Requires implementation of 125 baseline security controls from NIST 800-53.
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">Typical Use Cases:</strong> Public-facing websites, collaboration tools with non-sensitive data, general productivity applications
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d1c30] rounded-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 rounded-lg p-3">
                    <AlertTriangle className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white mb-2">Moderate Impact</h3>
                    <p className="text-gray-300 mb-3">
                      For cloud services where loss of confidentiality, integrity, or availability would have serious adverse effect. Requires implementation of 325+ baseline security controls from NIST 800-53.
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">Typical Use Cases:</strong> Systems processing CUI, financial systems, HR platforms, case management systems, most federal agency applications
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d1c30] rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500/10 rounded-lg p-3">
                    <Lock className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white mb-2">High Impact</h3>
                    <p className="text-gray-300 mb-3">
                      For cloud services where loss of confidentiality, integrity, or availability would have severe or catastrophic adverse effect. Requires implementation of 421+ baseline security controls from NIST 800-53.
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">Typical Use Cases:</strong> Law enforcement systems, emergency services, national security applications, critical infrastructure, systems processing sensitive CUI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Implementation Methodology Section */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
            Our Implementation Methodology
          </h2>

          <p className="text-gray-300 leading-relaxed mb-10 max-w-4xl">
            Thalen Technologies employs a proven, phased approach to FedRAMP and StateRAMP authorization that minimizes time-to-ATO while ensuring comprehensive security control implementation. Our methodology leverages deep expertise in federal compliance frameworks, cloud security architecture, and government authorization processes.
          </p>

          <div className="space-y-6">
            {[
              {
                phase: "Phase 1",
                title: "Readiness Assessment & Gap Analysis",
                description: "Comprehensive evaluation of current security posture against FedRAMP/StateRAMP requirements. We assess your cloud environment, identify control gaps, evaluate documentation maturity, and develop a detailed remediation roadmap. This phase includes impact level determination, boundary definition, and 3PAO selection guidance.",
                deliverables: [
                  "Gap analysis report with prioritized findings",
                  "System boundary documentation",
                  "Control implementation roadmap",
                  "Resource and timeline estimates"
                ]
              },
              {
                phase: "Phase 2",
                title: "Security Control Implementation",
                description: "Systematic implementation of required NIST 800-53 security controls across your cloud infrastructure. We configure technical controls, establish security policies and procedures, implement continuous monitoring tools, and develop required documentation artifacts. Our team works alongside your engineers to ensure controls are implemented efficiently and effectively.",
                deliverables: [
                  "Implemented technical and administrative controls",
                  "Security policies and procedures library",
                  "Continuous monitoring infrastructure",
                  "Control implementation evidence"
                ]
              },
              {
                phase: "Phase 3",
                title: "Documentation & Package Development",
                description: "Development of comprehensive FedRAMP/StateRAMP authorization package including System Security Plan (SSP), security architecture diagrams, control implementation statements, and supporting evidence. We ensure all documentation meets FedRAMP/StateRAMP template requirements and addresses common PMO feedback areas.",
                deliverables: [
                  "Complete System Security Plan (SSP)",
                  "Security architecture diagrams",
                  "Control traceability matrix",
                  "Policies, procedures, and plans"
                ]
              },
              {
                phase: "Phase 4",
                title: "3PAO Assessment Support",
                description: "Coordination with your selected 3PAO throughout the security assessment process. We facilitate evidence collection, respond to assessment findings, manage POA&M development, and ensure timely resolution of identified vulnerabilities. Our team acts as liaison between your organization and the 3PAO to streamline the assessment.",
                deliverables: [
                  "Assessment coordination and evidence management",
                  "POA&M development and tracking",
                  "Remediation guidance for findings",
                  "Security Assessment Report (SAR) review"
                ]
              },
              {
                phase: "Phase 5",
                title: "Authorization & ATO Support",
                description: "Support throughout the authorization process including agency coordination, PMO review response, and final ATO package submission. For JAB authorizations, we provide specialized support for the rigorous review process. We ensure all PMO feedback is addressed comprehensively and authorization package meets quality standards.",
                deliverables: [
                  "Complete authorization package submission",
                  "PMO review response coordination",
                  "Agency ATO support and negotiation",
                  "Authorization decision documentation"
                ]
              },
              {
                phase: "Phase 6",
                title: "Continuous Monitoring & Compliance",
                description: "Ongoing support for continuous monitoring requirements including monthly vulnerability scanning, annual assessments, significant change evaluation, and POA&M management. We help maintain your authorization through automated compliance monitoring, regular control testing, and timely reporting to agencies and the FedRAMP PMO.",
                deliverables: [
                  "Continuous monitoring program implementation",
                  "Monthly ConMon deliverables",
                  "Annual assessment coordination",
                  "Ongoing compliance advisory services"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#12243d] rounded-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-amber-500/10 rounded-lg px-4 py-2">
                      <span className="text-amber-500 font-medium">{item.phase}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                    <div className="bg-[#0d1c30] rounded-lg p-4">
                      <p className="text-sm font-medium text-amber-500 mb-2">Key Deliverables:</p>
                      <ul className="space-y-1.5">
                        {item.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Authorization Section */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
            Benefits of FedRAMP/StateRAMP Authorization
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Globe,
                title: "Market Access",
                description: "Unlock access to the $50+ billion federal cloud market and growing state/local government sector. FedRAMP authorization is often a prerequisite for federal procurement."
              },
              {
                icon: Award,
                title: "Competitive Advantage",
                description: "Differentiate your cloud offering with third-party validated security. Authorized providers gain significant competitive advantage in government sales cycles."
              },
              {
                icon: Target,
                title: "Reciprocity & Reuse",
                description: "Achieve authorization once and leverage it across multiple agencies. FedRAMP reciprocity dramatically reduces duplicative security assessments and accelerates time-to-contract."
              },
              {
                icon: Shield,
                title: "Enhanced Security Posture",
                description: "Implement comprehensive, defense-in-depth security controls based on NIST 800-53. FedRAMP authorization demonstrates security maturity to all customers, not just government."
              },
              {
                icon: FileCheck,
                title: "Streamlined Compliance",
                description: "FedRAMP authorization satisfies multiple compliance requirements including FISMA, NIST frameworks, and agency-specific security mandates."
              },
              {
                icon: BarChart3,
                title: "Customer Confidence",
                description: "Third-party assessment and continuous monitoring provide ongoing assurance to government customers that security controls remain effective."
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

      {/* Why Choose Thalen Section */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
            Why Choose Thalen Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 rounded-lg p-3 flex-shrink-0">
                  <Award className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Proven Track Record</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Successfully guided dozens of cloud service providers through FedRAMP and StateRAMP authorization at all impact levels. Our team includes former federal security assessors and compliance officers with deep program knowledge.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 rounded-lg p-3 flex-shrink-0">
                  <Users className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Experienced Team</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our consultants hold CISSP, CISM, CAP, and other relevant certifications. Many team members have direct experience working within federal agencies and understand government authorization processes from both sides.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 rounded-lg p-3 flex-shrink-0">
                  <Target className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Accelerated Time-to-ATO</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our proven methodology and deep familiarity with PMO expectations reduce authorization timelines by 30-40% compared to industry averages. We know what the PMO looks for and ensure your package is right the first time.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 rounded-lg p-3 flex-shrink-0">
                  <FileText className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Comprehensive Documentation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We develop complete, audit-ready documentation packages that meet FedRAMP template requirements and address common PMO feedback areas. Our deliverables are consistently praised for clarity and completeness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 rounded-lg p-3 flex-shrink-0">
                  <Server className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Technical Depth</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Beyond compliance expertise, our team includes cloud architects and security engineers who implement technical controls hands-on. We don't just document—we build secure cloud environments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 rounded-lg p-3 flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Ongoing Support</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Authorization is just the beginning. We provide continuous monitoring support, annual assessment coordination, and compliance advisory services to maintain your ATO and support your growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0d1c30] to-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <div className="bg-[#12243d] rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-4">
              Ready to Achieve FedRAMP or StateRAMP Authorization?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Our team of FedRAMP and StateRAMP experts is ready to guide you through every phase of the authorization process. Schedule a consultation to discuss your cloud authorization needs and develop a customized roadmap to ATO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                  Download FedRAMP Guide
                  <FileText className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500" />
                  <span>fedramp@thalen.tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
