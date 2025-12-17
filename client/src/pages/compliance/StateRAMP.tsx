import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, FileCheck, Lock, Users, Building2 } from "lucide-react";
import { Link } from "wouter";

export default function StateRAMP() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmMmU0YSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-400/30 mb-6">
              <Building2 className="h-4 w-4 text-emerald-300" />
              <span className="text-sm font-medium text-emerald-200">State & Local Government Compliance</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              StateRAMP & GovRAMP
              <span className="block text-emerald-300 mt-2">For State, Local & Tribal Governments</span>
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-3xl">
              Navigate state and local government cloud security requirements with confidence. NexDyne delivers secure, compliant cloud solutions tailored to the unique needs of state agencies, municipalities, and tribal governments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule StateRAMP Consultation
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-emerald-300 text-emerald-100 hover:bg-emerald-800/50">
                  Download StateRAMP Checklist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is StateRAMP Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">What is StateRAMP?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>StateRAMP</strong> (State Risk and Authorization Management Program) is a nonprofit organization that provides a standardized approach to cloud security for state and local governments. Modeled after FedRAMP, StateRAMP helps government entities adopt secure cloud services while reducing duplicative security assessments.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                StateRAMP establishes a common security and privacy baseline based on NIST 800-53 controls, adapted specifically for the unique requirements of state, local, and tribal governments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 border-2 border-slate-200">
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">State-Focused Baseline</h3>
                <p className="text-slate-600">
                  Security controls tailored to state and local government requirements and risk profiles
                </p>
              </Card>

              <Card className="p-6 border-2 border-slate-200">
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Reciprocity</h3>
                <p className="text-slate-600">
                  "Authorized once, accepted everywhere" reduces costs and accelerates cloud adoption
                </p>
              </Card>

              <Card className="p-6 border-2 border-slate-200">
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Continuous Assurance</h3>
                <p className="text-slate-600">
                  Ongoing monitoring ensures sustained compliance and evolving security posture
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* GovRAMP Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">What is GovRAMP?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>GovRAMP</strong> (Government Risk and Authorization Management Program) is an emerging framework that extends cloud security standardization to the broader public sector, including local municipalities, counties, and special districts.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                GovRAMP aims to create a unified approach to cloud security across all levels of government, promoting interoperability and shared security assessments between federal, state, and local entities.
              </p>
            </div>

            <Card className="p-8 border-2 border-emerald-200 bg-emerald-50 mt-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Unified Public Sector Security</h3>
                  <p className="text-slate-700 mb-4">
                    GovRAMP bridges the gap between federal FedRAMP requirements and state/local StateRAMP standards, enabling seamless collaboration and data sharing across government levels.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Cross-jurisdictional reciprocity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Harmonized security controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Reduced compliance burden for multi-level deployments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* StateRAMP Impact Levels */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">StateRAMP Impact Levels</h2>
            
            <div className="space-y-6">
              <Card className="p-8 border-2 border-green-200 bg-green-50">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">StateRAMP Low</h3>
                    <p className="text-slate-700 mb-4">
                      For cloud systems processing <strong>public information</strong> where loss of confidentiality, integrity, or availability would have limited impact on government operations.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Public-facing websites and portals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>General collaboration tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Non-sensitive administrative systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-emerald-200 bg-emerald-50">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">StateRAMP Moderate</h3>
                    <p className="text-slate-700 mb-4">
                      For cloud systems processing <strong>sensitive but unclassified information</strong> where loss would have serious impact on government operations or citizen privacy.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Personally Identifiable Information (PII)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Financial and tax systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Healthcare and social services data</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-red-200 bg-red-50">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">StateRAMP High</h3>
                    <p className="text-slate-700 mb-4">
                      For cloud systems processing <strong>highly sensitive information</strong> where loss would have severe or catastrophic impact on public safety or government operations.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Law enforcement and criminal justice systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Emergency services and 911 systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Critical infrastructure control systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* NexDyne's StateRAMP Services */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-slate-900">NexDyne's StateRAMP & GovRAMP Services</h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              We guide state, local, and tribal governments through cloud security compliance with tailored solutions for your jurisdiction
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-slate-200 hover:border-emerald-400 transition-colors">
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Compliance Readiness Assessment</h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive evaluation of your current cloud security posture against StateRAMP requirements, with detailed gap analysis and remediation roadmap.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Security control gap analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Risk assessment and prioritization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Budget and timeline planning</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-slate-200 hover:border-emerald-400 transition-colors">
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Security Documentation</h3>
                <p className="text-slate-600 mb-4">
                  Complete System Security Plan (SSP) development and supporting documentation tailored to state and local government requirements.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>SSP and security package development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Control implementation evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Policy and procedure templates</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-slate-200 hover:border-emerald-400 transition-colors">
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Third-Party Assessment Coordination</h3>
                <p className="text-slate-600 mb-4">
                  Manage StateRAMP-recognized assessor engagement, coordinate security testing, and facilitate remediation of audit findings.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Assessor selection and coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Testing support and artifact collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Finding remediation and retesting</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-slate-200 hover:border-emerald-400 transition-colors">
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Continuous Compliance Management</h3>
                <p className="text-slate-600 mb-4">
                  Ongoing security monitoring, vulnerability management, and compliance reporting to maintain StateRAMP authorization.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Continuous monitoring and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Vulnerability scanning and patching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Annual re-assessment support</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Use StateRAMP */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">Who Should Use StateRAMP?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-2 border-emerald-200">
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">State Agencies</h3>
                <p className="text-slate-600">
                  State departments and agencies looking to adopt cloud services while meeting state-specific security and privacy requirements.
                </p>
              </Card>

              <Card className="p-8 border-2 border-emerald-200">
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Local Governments</h3>
                <p className="text-slate-600">
                  Cities, counties, and municipalities seeking standardized cloud security frameworks for cost-effective compliance.
                </p>
              </Card>

              <Card className="p-8 border-2 border-emerald-200">
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Tribal Governments</h3>
                <p className="text-slate-600">
                  Tribal nations and organizations requiring secure cloud solutions that respect sovereignty and cultural considerations.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* StateRAMP vs FedRAMP Comparison */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-slate-900">StateRAMP vs FedRAMP: Which Do You Need?</h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Understanding the differences between state/local and federal compliance frameworks helps you choose the right path for your organization.
            </p>

            <div className="bg-white rounded-lg border-2 border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 w-1/4">Aspect</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-emerald-900 w-3/8 border-l-2 border-slate-200">StateRAMP</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-blue-900 w-3/8 border-l-2 border-slate-200">FedRAMP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold text-slate-900">Target Audience</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">State, local, and tribal governments</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">Federal agencies and departments</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Authorization Scope</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">Voluntary but increasingly adopted by states</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">Mandatory for federal cloud services</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-slate-900">Security Baseline</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">NIST 800-53 controls adapted for state/local needs</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">NIST 800-53 controls (125-421 controls)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Impact Levels</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">Low, Moderate, High</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">Low, Moderate, High</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-slate-900">Authorization Process</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">StateRAMP authorization with state reciprocity</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">JAB P-ATO or Agency ATO</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Timeline</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">9-15 months depending on impact level</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">12-18 months (Moderate), 18-24 months (High)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-slate-900">Cost Range</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">$150K-$3M+ depending on scope</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">$250K-$5M+ depending on complexity</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Reciprocity</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">Growing reciprocity across participating states</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">Accepted by all federal agencies</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-slate-900">Best For</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">Organizations serving state/local governments or multi-level deployments</td>
                      <td className="px-6 py-4 text-slate-700 border-l-2 border-slate-200">Organizations serving federal government exclusively</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 p-8 bg-emerald-50 border-2 border-emerald-200 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Need Help Choosing?</h3>
                  <p className="text-slate-700 mb-4">
                    Our compliance experts can assess your specific requirements and recommend the optimal compliance path. Many organizations pursue both StateRAMP and FedRAMP to serve clients across all government levels.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact">
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        Schedule Assessment
                      </Button>
                    </Link>
                    <Link href="/compliance/fedramp">
                      <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                        Learn About FedRAMP
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Comprehensive Compliance Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/services/fedramp">
                <Card className="p-8 border-2 border-emerald-200 hover:border-emerald-400 transition-colors cursor-pointer h-full">
                  <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">StateRAMP Implementation Services</h3>
                  <p className="text-slate-600 mb-4">
                    Explore our full suite of StateRAMP implementation services, including readiness assessments, documentation support, and continuous monitoring.
                  </p>
                  <div className="text-emerald-600 font-semibold flex items-center gap-2">
                    View Services →
                  </div>
                </Card>
              </Link>

              <Link href="/services/cybersecurity">
                <Card className="p-8 border-2 border-slate-200 hover:border-slate-400 transition-colors cursor-pointer h-full">
                  <div className="h-12 w-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-slate-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Cybersecurity & Compliance</h3>
                  <p className="text-slate-600 mb-4">
                    Discover our broader cybersecurity and compliance services, including CMMC, NIST 800-171, and Zero Trust Architecture.
                  </p>
                  <div className="text-slate-600 font-semibold flex items-center gap-2">
                    View Services →
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Achieve StateRAMP Compliance?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Our team specializes in helping state, local, and tribal governments navigate cloud security compliance. Let us guide you through the StateRAMP authorization process.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-emerald-300 text-emerald-100 hover:bg-emerald-800/50">
                  Download StateRAMP Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
