import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function FedRAMP() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[url('/img/backgrounds/circuit-board-pattern.svg')] bg-cover bg-center py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Government Cloud Solutions
            </p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              FedRAMP & StateRAMP Implementation Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Expert implementation services for FedRAMP and StateRAMP-authorized platforms across federal, state, and local agencies at Moderate and High impact levels with comprehensive ATO support.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Request Consultation
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                View Our Certifications
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is FedRAMP Section */}
      <section className="bg-[oklch(0.97_0.01_250)] py-16 lg:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-center">
              Understanding the Framework
            </p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
              What are FedRAMP & StateRAMP?
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                <strong className="text-[oklch(0.20_0.05_250)]">FedRAMP (Federal Risk and Authorization Management Program)</strong> is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services. Established in 2011, it enables federal agencies to accelerate adoption of secure cloud solutions while reducing duplicative security assessments based on NIST SP 800-53 controls.
              </p>
              
              <p>
                <strong className="text-[oklch(0.20_0.05_250)]">StateRAMP</strong> extends this framework to state and local governments, providing a standardized security authorization process for cloud services used by state agencies, municipalities, and educational institutions. It enables reciprocity across participating states, allowing providers to achieve authorization once and reuse it across multiple jurisdictions.
              </p>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <h3 className="text-xl font-semibold text-[oklch(0.20_0.05_250)] mb-4">Key Components</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span><strong className="text-[oklch(0.20_0.05_250)]">System Security Plan (SSP):</strong> Comprehensive documentation of security controls and system architecture.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span><strong className="text-[oklch(0.20_0.05_250)]">Security Assessment Report (SAR):</strong> Independent 3PAO assessment validating control implementation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span><strong className="text-[oklch(0.20_0.05_250)]">Plan of Action & Milestones (POA&M):</strong> Remediation plan for identified vulnerabilities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span><strong className="text-[oklch(0.20_0.05_250)]">Continuous Monitoring:</strong> Ongoing security assessment and vulnerability scanning.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs FedRAMP Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-center">
            Market Requirements
          </p>
          <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            Who Needs Authorization?
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-slate-600 leading-relaxed mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 text-lg">
            <p>
              Any cloud service provider seeking to do business with federal, state, or local government agencies must obtain FedRAMP or StateRAMP authorization. The requirement applies to any cloud solution that processes, stores, or transmits government data.
            </p>
            <p>
              The authorization process is resource-intensive, but the business value is substantial, granting access to the vast public sector cloud market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                title: "Cloud Service Providers",
                description: "SaaS, PaaS, and IaaS providers seeking to serve federal and state governments."
              },
              {
                title: "Managed Security Services",
                description: "Security operations centers and threat intelligence platforms used by government."
              },
              {
                title: "Government Contractors",
                description: "System integrators providing cloud-enabled solutions to public sector agencies."
              },
              {
                title: "Collaboration Platforms",
                description: "Communication and document management tools used across government."
              },
              {
                title: "Data Analytics Platforms",
                description: "Business intelligence and data warehousing solutions processing government data."
              },
              {
                title: "HR & Financial Systems",
                description: "ERP, payroll, and human capital management systems for the public sector."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)] mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Services CTAs */}
      <section className="bg-[oklch(0.97_0.01_250)] py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">
              Our Expertise
            </p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Explore Our Specialized Compliance Services
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
              Dive deeper into our dedicated FedRAMP and StateRAMP services, tailored to your specific government sector needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-slate-200 rounded-lg p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl flex flex-col">
              <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">FedRAMP</h3>
              <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
                Comprehensive FedRAMP compliance services for federal agencies. Navigate the rigorous security requirements with our expert guidance.
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span>Federal agency authorization (ATO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span>Low, Moderate, and High impact levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span>NIST 800-53 control implementation</span>
                </li>
              </ul>
              <Link href="/compliance/fedramp" className="mt-auto">
                <Button className="w-full bg-[oklch(0.22_0.06_250)] hover:bg-[oklch(0.20_0.05_250)] text-white">
                  Explore FedRAMP Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl flex flex-col">
              <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">StateRAMP/GovRAMP</h3>
              <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
                Specialized StateRAMP/GovRAMP services for state, local, and tribal governments. Achieve multi-state authorization reciprocity.
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span>State and local government authorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span>Multi-state reciprocity framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span>State-specific compliance requirements</span>
                </li>
              </ul>
              <Link href="/compliance/stateramp" className="mt-auto">
                <Button className="w-full bg-[oklch(0.22_0.06_250)] hover:bg-[oklch(0.20_0.05_250)] text-white">
                  Explore StateRAMP Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Levels Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-center">
            Security Baselines
          </p>
          <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            FedRAMP Impact Levels
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 max-w-4xl mx-auto text-center text-lg">
            FedRAMP defines three impact levels based on FIPS 199 categorization, each requiring progressively more rigorous security controls. Understanding the appropriate impact level is critical for scoping your authorization effort.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
              <h3 className="text-xl font-semibold text-[oklch(0.20_0.05_250)] mb-2">Low Impact (LI-SaaS)</h3>
              <p className="text-slate-600 mb-3">
                For services where loss of data would have limited adverse effect. Requires 125 baseline security controls.
              </p>
              <p className="text-sm text-slate-500">
                <strong className="text-[oklch(0.20_0.05_250)]">Use Cases:</strong> Public websites, collaboration tools with non-sensitive data.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
              <h3 className="text-xl font-semibold text-[oklch(0.20_0.05_250)] mb-2">Moderate Impact</h3>
              <p className="text-slate-600 mb-3">
                For services where loss of data would have a serious adverse effect. Requires 325+ baseline security controls.
              </p>
              <p className="text-sm text-slate-500">
                <strong className="text-[oklch(0.20_0.05_250)]">Use Cases:</strong> Systems with CUI, financial systems, HR platforms.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
              <h3 className="text-xl font-semibold text-[oklch(0.20_0.05_250)] mb-2">High Impact</h3>
              <p className="text-slate-600 mb-3">
                For services where loss of data would have a severe or catastrophic adverse effect. Requires 421+ controls.
              </p>
              <p className="text-sm text-slate-500">
                <strong className="text-[oklch(0.20_0.05_250)]">Use Cases:</strong> Law enforcement, emergency services, national security systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Implementation Methodology Section */}
      <section className="bg-[oklch(0.97_0.01_250)] py-16 lg:py-20">
        <div className="container">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-center">
            Our Process
          </p>
          <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            Our Implementation Methodology
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 max-w-4xl mx-auto text-center text-lg">
            Thalen Technologies employs a proven, phased approach to authorization that minimizes time-to-ATO while ensuring comprehensive security control implementation and leveraging deep expertise in federal compliance.
          </p>

          <div className="space-y-6">
            {[
              {
                phase: "Phase 1",
                title: "Readiness Assessment & Gap Analysis",
                description: "Comprehensive evaluation of your current security posture against FedRAMP/StateRAMP requirements, including impact level determination and boundary definition.",
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
                description: "Systematic implementation of required NIST 800-53 security controls, configuration of technical controls, and establishment of security policies and procedures.",
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
                description: "Development of the comprehensive authorization package, including the System Security Plan (SSP), security architecture diagrams, and supporting evidence.",
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
                description: "Coordination with your selected 3PAO throughout the security assessment, including evidence collection, responding to findings, and managing POA&M development.",
                deliverables: [
                  "Assessment coordination and evidence management",
                  "POA&M development and tracking",
                  "Remediation guidance for findings",
                  "Security Assessment Report (SAR) review"
                ]
              },
              {
                phase: "Phase 5",
                title: "Authorization & Agency ATO",
                description: "Management of the final authorization package submission to the FedRAMP PMO or StateRAMP board and support for agency sponsorship and ATO issuance.",
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
                description: "Ongoing support for continuous monitoring requirements, including monthly vulnerability scanning, annual assessments, and significant change evaluation.",
                deliverables: [
                  "Continuous monitoring program implementation",
                  "Monthly ConMon deliverables",
                  "Annual assessment coordination",
                  "Ongoing compliance advisory services"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-lg p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-[oklch(0.97_0.01_250)] rounded-lg px-4 py-2">
                      <span className="text-[oklch(0.65_0.18_55)] font-semibold">{item.phase}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[oklch(0.20_0.05_250)] mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{item.description}</p>
                    <div className="bg-[oklch(0.97_0.01_250)] rounded-lg p-4">
                      <p className="text-sm font-semibold text-[oklch(0.65_0.18_55)] mb-3">Key Deliverables:</p>
                      <ul className="space-y-2">
                        {item.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-1.5"></span>
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
      <section className="bg-white py-16 lg:py-20">
        <div className="container">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-center">
            Business Value
          </p>
          <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            Benefits of Authorization
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                title: "Market Access",
                description: "Unlock access to the $50+ billion federal cloud market and growing state/local government sector."
              },
              {
                title: "Competitive Advantage",
                description: "Differentiate your cloud offering with third-party validated security and gain a significant edge in sales cycles."
              },
              {
                title: "Reciprocity & Reuse",
                description: "Achieve authorization once and leverage it across multiple agencies, reducing duplicative security assessments."
              },
              {
                title: "Enhanced Security Posture",
                description: "Implement comprehensive, defense-in-depth security controls based on NIST 800-53 standards."
              },
              {
                title: "Streamlined Compliance",
                description: "FedRAMP authorization satisfies multiple compliance requirements including FISMA and other mandates."
              },
              {
                title: "Customer Confidence",
                description: "Third-party assessment provides ongoing assurance to government customers that security controls are effective."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)] mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Thalen Technologies Section */}
      <section className="bg-[oklch(0.97_0.01_250)] py-16 lg:py-20">
        <div className="container">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-center">
            Your Trusted Partner
          </p>
          <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            Why Choose Thalen Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)]">Proven Track Record</h3>
              <p className="text-slate-600 leading-relaxed">
                Successfully guided dozens of cloud service providers through FedRAMP and StateRAMP authorization at all impact levels.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)]">Experienced Team</h3>
              <p className="text-slate-600 leading-relaxed">
                Our consultants hold CISSP, CISM, CAP certifications and have direct experience working within federal agencies.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)]">Accelerated Time-to-ATO</h3>
              <p className="text-slate-600 leading-relaxed">
                Our proven methodology reduces authorization timelines by 30-40% compared to industry averages.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)]">Comprehensive Documentation</h3>
              <p className="text-slate-600 leading-relaxed">
                We develop complete, audit-ready documentation packages that meet FedRAMP template requirements.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)]">Technical Depth</h3>
              <p className="text-slate-600 leading-relaxed">
                Our team includes cloud architects and security engineers who implement technical controls hands-on.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)]">Ongoing Support</h3>
              <p className="text-slate-600 leading-relaxed">
                We provide continuous monitoring support and advisory services to maintain your ATO and support your growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[oklch(0.22_0.06_250)] py-16 lg:py-20">
        <div className="container text-center">
          <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Achieve Authorization?
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 leading-relaxed text-lg">
            Our team of experts is ready to guide you through every phase of the authorization process. Schedule a consultation to discuss your cloud authorization needs and develop a customized roadmap to ATO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
              Download FedRAMP Guide
            </Button>
          </div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
