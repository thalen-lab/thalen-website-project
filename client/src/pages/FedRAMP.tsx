import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Shield,
  FileCheck,
  Users,
  Building2,
  Lock,
  Target,
  ArrowRight,
  Award,
  BarChart3,
  FileText,
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
            FedRAMP Authorization Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
            Accelerate your path to FedRAMP authorization with our proven methodology, expert guidance, and comprehensive support. We help cloud service providers achieve and maintain FedRAMP compliance for federal agencies, opening doors to billions in federal opportunities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Schedule FedRAMP Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                Download FedRAMP Guide
              </Button>
            </Link>
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
                <span className="text-amber-500 font-medium">FedRAMP (Federal Risk and Authorization Management Program)</span> is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services. Established in 2011 and mandated by the Office of Management and Budget (OMB), FedRAMP enables federal agencies to accelerate adoption of secure cloud solutions while reducing duplicative security assessments.
              </p>
              
              <p>
                FedRAMP authorization is required for cloud service providers who want to do business with federal agencies. The program establishes rigorous security requirements based on NIST 800-53 standards and provides a "do once, use many times" framework that reduces duplication of effort and accelerates the adoption of secure cloud solutions across federal government.
              </p>

              <p>
                There are three FedRAMP authorization levels: <strong className="text-white">Low</strong>, <strong className="text-white">Moderate</strong>, and <strong className="text-white">High</strong>, each corresponding to the potential impact level of the data being processed. Most federal agencies require FedRAMP Moderate authorization at minimum. Once authorized, cloud services receive an Authority to Operate (ATO) that can be leveraged across multiple federal agencies, significantly reducing time-to-mission and compliance costs.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-xl font-medium text-white mb-4">Key Components of FedRAMP</h3>
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
            Who Needs FedRAMP Authorization?
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed mb-10">
            <p>
              Cloud service providers seeking to do business with federal agencies must obtain FedRAMP authorization. The requirement applies to any cloud-based solution that processes, stores, or transmits government data, regardless of whether the data is classified or unclassified. Without proper authorization, agencies cannot procure or use cloud services, making FedRAMP essential for market access.
            </p>

            <p>
              Organizations pursuing FedRAMP authorization typically include SaaS platforms, cloud infrastructure providers, managed security service providers, and government contractors offering cloud-enabled solutions. The authorization process is resource-intensive, often requiring 12-18 months for initial authorization and significant ongoing investment in continuous monitoring and compliance maintenance. However, the business value is substantial: FedRAMP-authorized services gain access to the $50+ billion federal cloud market and can leverage their authorization across hundreds of agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: "Cloud Service Providers",
                description: "SaaS, PaaS, and IaaS providers seeking to serve federal agencies with authorized cloud solutions."
              },
              {
                icon: Shield,
                title: "Managed Security Services",
                description: "Security operations centers, threat intelligence platforms, and cybersecurity tools used by government entities."
              },
              {
                icon: Server,
                title: "Government Contractors",
                description: "System integrators and contractors providing cloud-enabled solutions to federal agencies."
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

      {/* FedRAMP Impact Levels */}
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8 text-center">
            FedRAMP Impact Levels
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-[#12243d] rounded-lg p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-white mb-2">FedRAMP Low</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For cloud systems processing <strong className="text-white">public information</strong> where loss of confidentiality, integrity, or availability would have limited impact on agency operations, assets, or individuals.
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
                  <h3 className="text-2xl font-medium text-white mb-2">FedRAMP Moderate</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For cloud systems processing <strong className="text-white">sensitive information</strong> where loss of confidentiality, integrity, or availability could have serious adverse effects on agency operations, assets, or individuals. Most commonly required level.
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
                  <h3 className="text-2xl font-medium text-white mb-2">FedRAMP High</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For cloud systems processing <strong className="text-white">highly sensitive information</strong> where loss of confidentiality, integrity, or availability could have severe or catastrophic adverse effects on agency operations, assets, or individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our FedRAMP Services */}
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8 text-center">
            Our FedRAMP Services
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Comprehensive support throughout your entire FedRAMP journey, from initial readiness assessment to ongoing continuous monitoring.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "FedRAMP Readiness Assessment",
                description: "Comprehensive evaluation of your current security posture against FedRAMP requirements, identifying gaps and creating a detailed remediation roadmap.",
                deliverables: ["Gap analysis report", "Remediation roadmap", "Cost and timeline estimates"]
              },
              {
                title: "System Security Plan (SSP) Development",
                description: "Complete SSP documentation package including security controls implementation, policies, and procedures aligned with NIST 800-53.",
                deliverables: ["Complete SSP documentation", "Control implementation descriptions", "Policy and procedure templates"]
              },
              {
                title: "Security Controls Implementation",
                description: "Technical implementation of required security controls across your cloud infrastructure, applications, and operational processes.",
                deliverables: ["Implemented security controls", "Configuration documentation", "Testing and validation reports"]
              },
              {
                title: "3PAO Assessment Support",
                description: "End-to-end support throughout the Third Party Assessment Organization (3PAO) assessment process, including evidence collection and remediation.",
                deliverables: ["Evidence packages", "Assessment coordination", "Finding remediation support"]
              },
              {
                title: "Authorization Package Preparation",
                description: "Complete preparation of all required authorization package documents for submission to the FedRAMP PMO or agency authorization.",
                deliverables: ["Authorization package", "Security assessment report", "Plan of Action & Milestones (POA&M)"]
              },
              {
                title: "Continuous Monitoring & Maintenance",
                description: "Ongoing continuous monitoring, monthly reporting, and annual assessment support to maintain your FedRAMP authorization.",
                deliverables: ["Monthly continuous monitoring reports", "Annual assessment support", "Change management coordination"]
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
      <section className="bg-[#0d1c30] py-16 lg:py-20">
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
                activities: ["3PAO assessment", "Finding remediation", "Authorization package preparation", "PMO submission"]
              },
              {
                phase: "Phase 4",
                title: "Continuous Monitoring",
                activities: ["Monthly reporting", "Continuous monitoring", "Change management", "Annual assessments"]
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
      <section className="bg-[#0a1628] py-16 lg:py-20">
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
                SaaS Provider Achieves FedRAMP Moderate Authorization in 9 Months
              </h3>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div>
                  <h4 className="text-amber-500 font-medium mb-2">Challenge</h4>
                  <p>
                    A leading SaaS platform needed FedRAMP Moderate authorization to expand into the federal market but lacked internal expertise and resources.
                  </p>
                </div>

                <div>
                  <h4 className="text-amber-500 font-medium mb-2">Solution</h4>
                  <p>
                    Thalen Technologies led the complete FedRAMP authorization process, from readiness assessment through successful authorization, implementing 325+ security controls and managing the 3PAO assessment.
                  </p>
                </div>

                <div>
                  <h4 className="text-amber-500 font-medium mb-2">Results</h4>
                  <ul className="space-y-2">
                    {[
                      "Achieved FedRAMP Moderate authorization in 9 months",
                      "Implemented 325+ security controls across AWS infrastructure",
                      "Passed 3PAO assessment with zero high findings",
                      "$45M in new federal contracts secured within first year",
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
      <section className="bg-[#0d1c30] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase mb-8 text-center">
            Why Choose Thalen Technologies
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Proven Track Record",
                description: "15+ successful FedRAMP authorizations with 100% success rate across Low, Moderate, and High impact levels."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified security professionals with deep expertise in FedRAMP, NIST 800-53, and federal compliance requirements."
              },
              {
                icon: Target,
                title: "Accelerated Timeline",
                description: "Proven methodology reduces average time to authorization by 30% compared to industry standards."
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
      <section className="bg-[#0a1628] py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white uppercase mb-6">
              Ready to Start Your FedRAMP Journey?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Schedule a consultation with our FedRAMP experts to discuss your authorization requirements and develop a customized roadmap.
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
