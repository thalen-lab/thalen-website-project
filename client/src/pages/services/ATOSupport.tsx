import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  Shield,
  FileCheck,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  FileText,
  Users,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function ATOSupport() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-navy-gradient">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              ATO Support Built Into Every Implementation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Implementation Expertise
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600 mt-2">
                Plus ATO Authorization
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              When federal agencies choose Thalen Technologies to implement cloud migrations, automation platforms, 
              or data systems, they get more than technical expertise—they get a contractor who navigates 
              the entire ATO process from day one, ensuring your system goes live on schedule.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all">
                  Discuss Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/methodology">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all">
                  View RAPID Framework
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-navy-900">Our ATO Approach</h2>
            </div>
            
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Federal systems require Authority to Operate (ATO) before going live. Thalen Technologies 
              integrates security authorization into every implementation project from day one, ensuring 
              your system achieves ATO on schedule without delays.
            </p>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-accent/20">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">What Sets Thalen Technologies Apart</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-navy-900 mb-3">Deep Security Expertise</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>NIST 800-53 control implementation specialists on every project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Proven System Security Plan (SSP) development methodology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Established relationships with 3PAO assessment organizations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-3">Parallel Development Model</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Security documentation progresses alongside technical development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Continuous monitoring built into system architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>ATO milestones integrated into project timelines from kickoff</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Integrate ATO Section */}
      <section className="py-20 bg-navy-gradient relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-6">
                <h2 className="text-4xl font-bold text-white">ATO Support Throughout Implementation</h2>
              </div>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                Thalen Technologies integrates ATO activities into every phase of system implementation, ensuring 
                security authorization progresses in parallel with technical development—not as an afterthought.
              </p>
            </div>
            
            <div className="grid gap-8">
              {/* Phase 1 */}
              <Card className="h-full border-2 border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-xl bg-white p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-slate-600">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">
                      Project Kickoff: Security by Design
                    </h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      During initial project planning, Thalen Technologies conducts a security requirements assessment 
                      to determine the appropriate authorization framework (FedRAMP, FISMA Moderate/High, 
                      DoD IL-4/5). We architect the system with security controls built in from the start, 
                      not bolted on later. This includes selecting FedRAMP-authorized cloud platforms when 
                      applicable to leverage inherited controls and accelerate authorization timelines.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Key Activities</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Authorization framework determination</li>
                          <li>• Security control baseline selection</li>
                          <li>• Architecture security review</li>
                          <li>• FedRAMP/StateRAMP platform evaluation</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Deliverables</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Security requirements document</li>
                          <li>• Control inheritance matrix</li>
                          <li>• ATO timeline integrated into project plan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Phase 2 */}
              <Card className="h-full border-2 border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-xl bg-white p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-slate-600">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">
                      Development: Documentation in Parallel
                    </h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      As Thalen Technologies develops and configures the system, our security team simultaneously 
                      documents security controls in the System Security Plan (SSP). We implement required 
                      controls using Infrastructure as Code and automated configuration management, creating 
                      auditable evidence of compliance. This parallel approach eliminates the typical 
                      post-development scramble to document what was built.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Key Activities</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• System Security Plan (SSP) development</li>
                          <li>• Security control implementation</li>
                          <li>• Configuration management automation</li>
                          <li>• Continuous monitoring setup</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Deliverables</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Complete SSP documentation</li>
                          <li>• Security policies and procedures</li>
                          <li>• Control implementation evidence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Phase 3 */}
              <Card className="h-full border-2 border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-xl bg-white p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-slate-600">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">
                      Testing: Security Assessment Coordination
                    </h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      Thalen Technologies coordinates with third-party assessment organizations (3PAO) to validate 
                      security control effectiveness. We prepare the environment for assessment, manage 
                      the testing process, and rapidly remediate any findings. Our experience with federal 
                      security assessments means we anticipate common issues and address them proactively, 
                      minimizing assessment delays and rework.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Key Activities</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Pre-assessment readiness review</li>
                          <li>• 3PAO coordination and support</li>
                          <li>• Vulnerability scanning and pen testing</li>
                          <li>• Finding remediation and retesting</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Deliverables</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Security Assessment Report (SAR)</li>
                          <li>• Plan of Action & Milestones (POA&M)</li>
                          <li>• Remediation evidence documentation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Phase 4 */}
              <Card className="h-full border-2 border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-xl bg-white p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-slate-600">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">
                      Authorization & Go-Live
                    </h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      Thalen Technologies prepares the authorization package and coordinates with the agency's 
                      Authorizing Official (AO) to secure final ATO approval. We establish continuous 
                      monitoring capabilities to maintain authorization and provide ongoing compliance 
                      support. The system goes live on schedule with full authorization in place—no delays, 
                      no surprises.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Key Activities</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Authorization package preparation</li>
                          <li>• Authorizing Official (AO) coordination</li>
                          <li>• Continuous monitoring implementation</li>
                          <li>• Go-live support and validation</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Deliverables</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• ATO approval letter</li>
                          <li>• Continuous monitoring plan</li>
                          <li>• Ongoing compliance reporting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FedRAMP Advantage Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-navy-900">Leveraging FedRAMP & StateRAMP</h2>
            </div>
            
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Thalen Technologies leverages FedRAMP and StateRAMP authorized platforms to accelerate 
              ATO timelines when appropriate. Using a FedRAMP-authorized platform does not automatically 
              grant your agency ATO—your specific implementation still requires authorization.
            </p>
            
            <div className="bg-navy-gradient rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Understanding Control Inheritance</h3>
              <p className="text-slate-200 mb-4 leading-relaxed">
                FedRAMP authorization means the cloud platform infrastructure (AWS GovCloud, Azure Government, 
                Salesforce Government Cloud) has been pre-authorized by the vendor. This provides 
                <strong> inherited controls</strong> that reduce the number of controls your agency must 
                implement and document.
              </p>
              <p className="text-slate-200 leading-relaxed">
                However, <strong>customer-managed controls</strong> remain your responsibility: platform 
                configuration, user access management, system integration, and data handling all require 
                documentation and validation. Thalen Technologies manages this inheritance model by documenting 
                which controls are inherited versus agency-managed, and implementing customer-managed controls correctly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="group p-6 border border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-bold text-navy-900 mb-3">FedRAMP Advantages</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-black mt-1">•</span>
                    <span>Reduced ATO timeline: 6-9 months vs. 18-24 months for custom systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black mt-1">•</span>
                    <span>Inherited infrastructure controls reduce documentation burden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black mt-1">•</span>
                    <span>Platform vendor maintains continuous monitoring for inherited controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black mt-1">•</span>
                    <span>Proven security baseline accepted across federal agencies</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="group p-6 border border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-bold text-navy-900 mb-3">Agency Responsibilities</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-black mt-1">•</span>
                    <span>Document agency-specific system configuration and data flows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black mt-1">•</span>
                    <span>Implement customer-managed security controls (access, encryption, logging)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black mt-1">•</span>
                    <span>Conduct security assessment for the agency's implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black mt-1">•</span>
                    <span>Obtain agency-specific ATO from Authorizing Official</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Implementation Expertise with ATO Built-In
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Partner with Thalen Technologies for implementation expertise that includes security 
              authorization from day one. Your systems go live on schedule with full ATO in place.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all">
                  Discuss Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all">
                  View Case Studies
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
