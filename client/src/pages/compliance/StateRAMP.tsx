import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, FileCheck, Lock, Users, Building2, Cloud, Server, FileText, BarChart3, Award, Target, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function StateRAMP() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Amber accent bar at top - Cyber AB style */}
      <div className="h-1.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />

      {/* Hero Section - Dark navy background */}
      <section className="bg-[#0a1628] py-20 lg:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white uppercase mb-6">
            StateRAMP & GovRAMP Authorization Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
            Navigate state and local government cloud security requirements with confidence. We deliver secure, compliant cloud solutions tailored to the unique needs of state agencies, municipalities, and tribal governments with comprehensive authorization support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Schedule StateRAMP Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                Download StateRAMP Checklist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is StateRAMP Section */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <div className="bg-[#12243d] rounded-lg p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
              What is StateRAMP?
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <span className="text-amber-500 font-medium">StateRAMP (State Risk and Authorization Management Program)</span> is a nonprofit organization that provides a standardized approach to cloud security for state and local governments. Modeled after FedRAMP, StateRAMP helps government entities adopt secure cloud services while reducing duplicative security assessments. The program establishes a common security and privacy baseline based on NIST 800-53 controls, adapted specifically for the unique requirements of state, local, and tribal governments.
              </p>
              
              <p>
                StateRAMP enables "authorized once, accepted everywhere" reciprocity across participating states, allowing cloud providers to achieve authorization once and reuse it across multiple state jurisdictions. This dramatically reduces the burden of state-by-state compliance efforts while maintaining rigorous security standards. The program provides flexibility for state-specific requirements and risk tolerances while ensuring consistent baseline security across all participating entities.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-xl font-medium text-white mb-4">Key Benefits of StateRAMP</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">•</span>
                    <span><strong className="text-white">State-Focused Baseline</strong> — Security controls tailored to state and local government requirements and risk profiles</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">•</span>
                    <span><strong className="text-white">Reciprocity</strong> — "Authorized once, accepted everywhere" reduces costs and accelerates cloud adoption</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">•</span>
                    <span><strong className="text-white">Continuous Assurance</strong> — Ongoing monitoring ensures sustained compliance and evolving security posture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GovRAMP Section */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <div className="bg-[#12243d] rounded-lg p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
              What is GovRAMP?
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <span className="text-amber-500 font-medium">GovRAMP (Government Risk and Authorization Management Program)</span> is an emerging framework that extends cloud security standardization to the broader public sector, including local municipalities, counties, and special districts. GovRAMP aims to create a unified approach to cloud security across all levels of government, promoting interoperability and shared security assessments between federal, state, and local entities.
              </p>
              
              <p>
                GovRAMP bridges the gap between federal FedRAMP requirements and state/local StateRAMP standards, enabling seamless collaboration and data sharing across government levels. The framework provides cross-jurisdictional reciprocity, harmonized security controls, and reduced compliance burden for multi-level deployments, making it easier for cloud providers to serve the entire public sector ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs StateRAMP Section */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8">
            Who Needs StateRAMP/GovRAMP Authorization?
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed mb-10">
            <p>
              Cloud service providers serving state and local governments, K-12 education systems, and public universities require StateRAMP authorization. As states increasingly adopt cloud-first policies, StateRAMP provides a competitive advantage and streamlines procurement processes. Many states now require StateRAMP authorization for cloud services handling sensitive state data, making it a prerequisite for market participation.
            </p>

            <p>
              Organizations pursuing StateRAMP authorization include SaaS platforms, cloud infrastructure providers, education technology solutions, and government contractors serving state and local entities. The authorization demonstrates commitment to security standards while opening access to the growing state and local government cloud market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: "Cloud Service Providers",
                description: "SaaS, PaaS, and IaaS providers seeking to serve state agencies and local governments with authorized solutions."
              },
              {
                icon: Shield,
                title: "Education Technology",
                description: "Learning management systems, student information systems, and educational platforms for K-12 and higher education."
              },
              {
                icon: Server,
                title: "Government Contractors",
                description: "System integrators and contractors providing cloud-enabled solutions to state and local agencies."
              },
              {
                icon: FileText,
                title: "Collaboration Platforms",
                description: "Communication, document management, and collaboration tools used across state and local organizations."
              },
              {
                icon: BarChart3,
                title: "Data Analytics Platforms",
                description: "Business intelligence, data warehousing, and analytics solutions processing state and local government data."
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

      {/* StateRAMP Impact Levels */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8 text-center">
            StateRAMP Impact Levels
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-[#12243d] rounded-lg p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-white mb-2">StateRAMP Low</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For cloud systems processing <strong className="text-white">public information</strong> where loss of confidentiality, integrity, or availability would have limited impact on government operations, assets, or individuals.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#12243d] rounded-lg p-8 border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-white mb-2">StateRAMP Moderate</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For cloud systems processing <strong className="text-white">sensitive information</strong> where loss of confidentiality, integrity, or availability could have serious adverse effects on government operations, assets, or individuals. Most commonly required level.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#12243d] rounded-lg p-8 border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-white mb-2">StateRAMP High</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For cloud systems processing <strong className="text-white">highly sensitive information</strong> where loss of confidentiality, integrity, or availability could have severe or catastrophic adverse effects on government operations, assets, or individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our StateRAMP Services */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8 text-center">
            Our StateRAMP Services
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Comprehensive support throughout your entire StateRAMP journey, from initial readiness assessment to ongoing continuous monitoring.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "StateRAMP Readiness Assessment",
                description: "Comprehensive evaluation of your current security posture against StateRAMP requirements, identifying gaps and creating a detailed remediation roadmap.",
                deliverables: ["Gap analysis report", "Remediation roadmap", "Cost and timeline estimates"]
              },
              {
                title: "System Security Plan (SSP) Development",
                description: "Complete SSP documentation package including security controls implementation, policies, and procedures aligned with NIST 800-53 for state/local requirements.",
                deliverables: ["Complete SSP documentation", "Control implementation descriptions", "Policy and procedure templates"]
              },
              {
                title: "Security Controls Implementation",
                description: "Technical implementation of required security controls across your cloud infrastructure, applications, and operational processes tailored for state/local environments.",
                deliverables: ["Implemented security controls", "Configuration documentation", "Testing and validation reports"]
              },
              {
                title: "Third-Party Assessment Support",
                description: "End-to-end support throughout the third-party assessment process, including evidence collection, coordination, and remediation.",
                deliverables: ["Evidence packages", "Assessment coordination", "Finding remediation support"]
              },
              {
                title: "Authorization Package Preparation",
                description: "Complete preparation of all required authorization package documents for submission to StateRAMP or participating state authorities.",
                deliverables: ["Authorization package", "Security assessment report", "Plan of Action & Milestones (POA&M)"]
              },
              {
                title: "Continuous Monitoring & Maintenance",
                description: "Ongoing continuous monitoring, regular reporting, and assessment support to maintain your StateRAMP authorization across participating states.",
                deliverables: ["Regular continuous monitoring reports", "Assessment support", "Change management coordination"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-[#12243d] rounded-lg p-8">
                <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-amber-500">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-amber-500 mt-0.5 flex-shrink-0">•</span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8 text-center">
            Our Implementation Methodology
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Readiness Assessment",
                activities: ["Current state evaluation", "Gap analysis", "Roadmap development", "Resource planning"]
              },
              {
                phase: "Phase 2",
                title: "Documentation & Implementation",
                activities: ["SSP development", "Security controls implementation", "Policy creation", "Evidence collection"]
              },
              {
                phase: "Phase 3",
                title: "Assessment & Authorization",
                activities: ["Third-party assessment", "Finding remediation", "Authorization package preparation", "StateRAMP submission"]
              },
              {
                phase: "Phase 4",
                title: "Continuous Monitoring",
                activities: ["Regular reporting", "Continuous monitoring", "Change management", "Ongoing assessments"]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-[#12243d] rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-500/20 px-3 py-1 rounded-full">
                    <span className="text-amber-500 font-medium text-sm">{phase.phase}</span>
                  </div>
                  <h3 className="text-xl font-medium text-white">{phase.title}</h3>
                </div>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#12243d] to-[#0d1c30] rounded-lg p-8 lg:p-12 border border-amber-500/30">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-amber-500" />
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase">
                  Success Story
                </h2>
              </div>
              
              <h3 className="text-2xl font-medium text-white mb-6">
                Education Platform Achieves StateRAMP Authorization Across 15 States
              </h3>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div>
                  <h4 className="text-amber-500 font-medium mb-2">Challenge</h4>
                  <p>
                    A leading K-12 education technology platform needed to meet varying security requirements across multiple states, facing duplicative assessments and lengthy procurement delays.
                  </p>
                </div>

                <div>
                  <h4 className="text-amber-500 font-medium mb-2">Solution</h4>
                  <p>
                    Thalen Technologies led the complete StateRAMP authorization process, implementing standardized security controls and achieving reciprocal authorization across participating states.
                  </p>
                </div>

                <div>
                  <h4 className="text-amber-500 font-medium mb-2">Results</h4>
                  <ul className="space-y-2">
                    {[
                      "Achieved StateRAMP Moderate authorization accepted across 15 states",
                      "Reduced state-by-state assessment costs by 75%",
                      "Accelerated procurement timelines from 12 months to 3 months",
                      "Expanded market reach to 3,500+ school districts",
                      "Established continuous monitoring program for ongoing compliance"
                    ].map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Thalen Technologies */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8 text-center">
            Why Choose Thalen Technologies
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "State & Local Expertise",
                description: "Deep understanding of state and local government requirements with proven success across multiple jurisdictions."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified security professionals with expertise in StateRAMP, NIST 800-53, and state/local compliance requirements."
              },
              {
                icon: Target,
                title: "Reciprocity Focus",
                description: "Maximize authorization reuse across states to reduce costs and accelerate market expansion."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#12243d] rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-14 w-14 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <item.icon className="h-7 w-7 text-amber-500" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white uppercase mb-6">
              Ready to Start Your StateRAMP Journey?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Schedule a consultation with our StateRAMP experts to discuss your authorization requirements and develop a customized roadmap.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/fedramp">
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  View Implementation Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
