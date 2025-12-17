import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, FileCheck, Lock, Users, Clock } from "lucide-react";
import { Link } from "wouter";

export default function FedRAMP() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmMmU0YSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30 mb-6">
              <Shield className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-medium text-blue-200">Federal Government Compliance</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              FedRAMP Compliance
              <span className="block text-blue-300 mt-2">For Federal Agencies</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              Navigate the Federal Risk and Authorization Management Program (FedRAMP) with confidence. NexDyne delivers secure, compliant cloud solutions that meet the rigorous requirements of federal government agencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule FedRAMP Consultation
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800/50">
                  Download FedRAMP Checklist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is FedRAMP Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">What is FedRAMP?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The <strong>Federal Risk and Authorization Management Program (FedRAMP)</strong> is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services used by federal agencies.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                FedRAMP establishes a rigorous security baseline based on NIST 800-53 controls, ensuring that cloud service providers meet the stringent security requirements necessary to protect federal data and systems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 border-2 border-slate-200">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Security Baseline</h3>
                <p className="text-slate-600">
                  Based on NIST 800-53 controls with three impact levels: Low, Moderate, and High
                </p>
              </Card>

              <Card className="p-6 border-2 border-slate-200">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Standardized Process</h3>
                <p className="text-slate-600">
                  "Do once, use many times" approach reduces duplicative agency assessments
                </p>
              </Card>

              <Card className="p-6 border-2 border-slate-200">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Continuous Monitoring</h3>
                <p className="text-slate-600">
                  Ongoing security assessment ensures sustained compliance and risk management
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FedRAMP Impact Levels */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">FedRAMP Impact Levels</h2>
            
            <div className="space-y-6">
              <Card className="p-8 border-2 border-green-200 bg-green-50">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">FedRAMP Low</h3>
                    <p className="text-slate-700 mb-4">
                      For cloud systems where the loss of confidentiality, integrity, and availability would result in <strong>limited adverse effects</strong> on agency operations, assets, or individuals.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>125 security controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Suitable for low-impact SaaS applications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-blue-200 bg-blue-50">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">FedRAMP Moderate</h3>
                    <p className="text-slate-700 mb-4">
                      For cloud systems where the loss of confidentiality, integrity, and availability would result in <strong>serious adverse effects</strong> on agency operations, assets, or individuals.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>325 security controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Most common baseline for federal cloud services</span>
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
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">FedRAMP High</h3>
                    <p className="text-slate-700 mb-4">
                      For cloud systems where the loss of confidentiality, integrity, and availability would result in <strong>severe or catastrophic adverse effects</strong> on agency operations, assets, or individuals.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>421 security controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Required for law enforcement, emergency services, and critical infrastructure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* NexDyne's FedRAMP Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-slate-900">NexDyne's FedRAMP Services</h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              We guide federal agencies and cloud service providers through every phase of the FedRAMP authorization process
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-slate-200 hover:border-blue-400 transition-colors">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Readiness Assessment</h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive gap analysis against FedRAMP security controls to identify compliance gaps and create a detailed remediation roadmap.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Control gap analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Remediation planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Cost and timeline estimation</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-slate-200 hover:border-blue-400 transition-colors">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Security Package Development</h3>
                <p className="text-slate-600 mb-4">
                  Complete System Security Plan (SSP), Security Assessment Plan (SAP), and supporting documentation required for FedRAMP authorization.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>SSP development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Control implementation evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Policy and procedure documentation</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-slate-200 hover:border-blue-400 transition-colors">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">3PAO Coordination</h3>
                <p className="text-slate-600 mb-4">
                  Manage the Third Party Assessment Organization (3PAO) engagement, coordinate testing activities, and facilitate remediation of findings.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>3PAO selection and coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Testing support and evidence collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Finding remediation</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-slate-200 hover:border-blue-400 transition-colors">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Continuous Monitoring</h3>
                <p className="text-slate-600 mb-4">
                  Ongoing compliance management, monthly continuous monitoring deliverables, and annual assessment support to maintain FedRAMP authorization.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Monthly ConMon reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Vulnerability scanning and remediation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Annual assessment coordination</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Authorization Paths */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">FedRAMP Authorization Paths</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Agency Authorization</h3>
                <p className="text-slate-600 mb-6">
                  A federal agency sponsors a Cloud Service Provider (CSP) through the authorization process. The CSP works directly with the agency's authorizing official.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600">1</span>
                    </div>
                    <p className="text-slate-600">Agency selects CSP and initiates authorization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600">2</span>
                    </div>
                    <p className="text-slate-600">CSP develops security package</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600">3</span>
                    </div>
                    <p className="text-slate-600">3PAO conducts security assessment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600">4</span>
                    </div>
                    <p className="text-slate-600">Agency grants Authority to Operate (ATO)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-orange-200">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">JAB Provisional Authorization</h3>
                <p className="text-slate-600 mb-6">
                  The Joint Authorization Board (JAB) — consisting of CIOs from DoD, DHS, and GSA — grants a Provisional Authority to Operate (P-ATO) for high-impact or widely-used services.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600">1</span>
                    </div>
                    <p className="text-slate-600">CSP submits FedRAMP Connect request</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600">2</span>
                    </div>
                    <p className="text-slate-600">JAB selects CSP for review</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600">3</span>
                    </div>
                    <p className="text-slate-600">CSP completes kickoff and authorization process</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600">4</span>
                    </div>
                    <p className="text-slate-600">JAB grants P-ATO for use by all agencies</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Achieve FedRAMP Compliance?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of FedRAMP experts will guide you through every step of the authorization process, from readiness assessment to continuous monitoring.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800/50">
                  Download FedRAMP Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
