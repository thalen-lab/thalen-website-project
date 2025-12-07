import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  Shield,
  FileCheck,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  FileText,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";

export default function ATOSupport() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Authority to Operate (ATO) Support
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Navigate the ATO Process with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                Expert Guidance
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              You've won the contract. Now comes the critical challenge: achieving Authority to Operate. 
              NexDyne provides end-to-end ATO support to help federal agencies navigate the complex 
              authorization process with confidence.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Schedule ATO Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/methodology">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  View Our Methodology
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ height: '120px' }}>
          <path d="M0,0 L1440,60 L1440,120 L0,120 Z" fill="rgb(248, 250, 252)" />
        </svg>
      </section>

      {/* The Challenge Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              <h2 className="text-4xl font-bold text-navy-900">The Challenge</h2>
            </div>
            
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              After winning a government contract, agencies face a critical hurdle: obtaining Authority to Operate (ATO) 
              for their systems. This process is complex, time-consuming, and fraught with potential delays that can 
              jeopardize project timelines and budgets.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="text-xl font-bold text-navy-900 mb-3">Common Roadblocks</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Incomplete or inadequate System Security Plans (SSP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Insufficient security control implementation evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Lack of continuous monitoring capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Misalignment with NIST 800-53 control families</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-orange-500">
                <h3 className="text-xl font-bold text-navy-900 mb-3">The Cost of Delays</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Project launch delays of 6-18 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Budget overruns from extended security assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Stakeholder frustration and loss of confidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Potential contract penalties or termination</span>
                  </li>
                </ul>
              </Card>
            </div>
            
            <div className="bg-slate-100 rounded-lg p-6 border-l-4 border-l-navy-600">
              <p className="text-lg text-slate-800 font-medium">
                <strong className="text-navy-900">The Reality:</strong> Most agencies underestimate the complexity 
                of the ATO process. Without experienced guidance, even well-funded projects can stall for months 
                during the authorization phase, putting mission-critical initiatives at risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NexDyne's Approach Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Target className="w-8 h-8 text-orange-600" />
                <h2 className="text-4xl font-bold text-navy-900">NexDyne's ATO Support Approach</h2>
              </div>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Our proven 4-phase methodology streamlines the ATO process, reducing time-to-authorization 
                while ensuring comprehensive security compliance.
              </p>
            </div>
            
            <div className="grid gap-8">
              {/* Phase 1 */}
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-orange-600">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">
                      Assessment & Gap Analysis
                    </h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      We begin by conducting a comprehensive assessment of your current security posture against 
                      the required authorization framework (FedRAMP, FISMA, DoD IL-4/5, etc.). Our team identifies 
                      gaps in control implementation, documentation, and continuous monitoring capabilities.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Key Activities</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Security control assessment</li>
                          <li>• Documentation review</li>
                          <li>• Architecture evaluation</li>
                          <li>• Risk assessment</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Timeline</h4>
                        <p className="text-sm text-slate-700">2-4 weeks</p>
                        <h4 className="font-semibold text-navy-900 mt-3 mb-2">Deliverable</h4>
                        <p className="text-sm text-slate-700">Gap Analysis Report with prioritized remediation roadmap</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Phase 2 */}
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-orange-600">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">
                      Documentation & Control Implementation
                    </h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      Our team works alongside your staff to develop comprehensive security documentation and 
                      implement missing controls. We leverage automation and proven templates to accelerate 
                      this phase while maintaining quality and compliance.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Key Activities</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• System Security Plan (SSP) development</li>
                          <li>• Security control implementation</li>
                          <li>• Policy and procedure documentation</li>
                          <li>• Configuration management</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Timeline</h4>
                        <p className="text-sm text-slate-700">2-4 months</p>
                        <h4 className="font-semibold text-navy-900 mt-3 mb-2">Deliverables</h4>
                        <p className="text-sm text-slate-700">Complete SSP, security policies, control implementation evidence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Phase 3 */}
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-orange-600">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">
                      Security Assessment & Testing
                    </h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      We coordinate with third-party assessment organizations (3PAO) or conduct internal assessments 
                      to validate security control effectiveness. Our team prepares your environment for assessment, 
                      manages the testing process, and addresses findings efficiently.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Key Activities</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Pre-assessment readiness review</li>
                          <li>• 3PAO coordination and support</li>
                          <li>• Vulnerability scanning and penetration testing</li>
                          <li>• Finding remediation</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Timeline</h4>
                        <p className="text-sm text-slate-700">1-3 months</p>
                        <h4 className="font-semibold text-navy-900 mt-3 mb-2">Deliverables</h4>
                        <p className="text-sm text-slate-700">Security Assessment Report (SAR), Plan of Action & Milestones (POA&M)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Phase 4 */}
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-orange-600">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">
                      Authorization & Continuous Monitoring
                    </h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      We guide your authorization package through the approval process and establish continuous 
                      monitoring capabilities to maintain your ATO. Our team provides ongoing support to ensure 
                      sustained compliance and rapid response to emerging threats.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Key Activities</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Authorization package preparation</li>
                          <li>• Authorizing Official (AO) coordination</li>
                          <li>• Continuous monitoring setup</li>
                          <li>• Ongoing compliance support</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2">Timeline</h4>
                        <p className="text-sm text-slate-700">1-2 months (initial), ongoing</p>
                        <h4 className="font-semibold text-navy-900 mt-3 mb-2">Deliverables</h4>
                        <p className="text-sm text-slate-700">ATO approval, continuous monitoring plan, monthly compliance reports</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-orange-600" />
              <h2 className="text-4xl font-bold text-navy-900">Realistic Timeline & Variables</h2>
            </div>
            
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              The ATO process typically takes <strong className="text-navy-900">6-12 months</strong> from initial 
              assessment to final authorization. However, the actual timeline depends on several critical factors:
            </p>
            
            <div className="space-y-6 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">Impact Level & Framework</h3>
                <div className="space-y-2 text-slate-700">
                  <p><strong>FISMA Low:</strong> 6-8 months (fewer controls, simpler assessment)</p>
                  <p><strong>FISMA Moderate:</strong> 8-10 months (standard federal systems)</p>
                  <p><strong>FISMA High / DoD IL-4:</strong> 10-14 months (extensive controls, rigorous testing)</p>
                  <p><strong>DoD IL-5 / Top Secret:</strong> 12-18 months (maximum security requirements)</p>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">System Complexity</h3>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Simple systems:</strong> Single application, limited integrations (shorter timeline)</p>
                  <p><strong>Complex systems:</strong> Multiple components, extensive integrations, legacy systems (longer timeline)</p>
                  <p><strong>Cloud-hosted:</strong> May leverage FedRAMP authorizations for faster approval</p>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">Organizational Readiness</h3>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Mature security posture:</strong> Existing controls, documentation (faster)</p>
                  <p><strong>Limited security maturity:</strong> Significant gaps, minimal documentation (slower)</p>
                  <p><strong>Dedicated resources:</strong> Full-time security team accelerates progress</p>
                </div>
              </Card>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-l-orange-500">
              <p className="text-lg text-slate-800">
                <strong className="text-orange-900">NexDyne's Advantage:</strong> Our experienced team and proven 
                methodology can reduce ATO timelines by 30-40% compared to organizations attempting the process 
                without specialized guidance. We've helped agencies achieve authorization in as little as 6 months 
                for moderate-impact systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Example Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="w-8 h-8 text-orange-600" />
              <h2 className="text-4xl font-bold text-navy-900">Real-World Example</h2>
            </div>
            
            <Card className="p-8 border-t-4 border-t-orange-500">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  Department of Homeland Security
                </h3>
                <p className="text-lg text-orange-600 font-semibold">
                  Cloud Migration ATO for Critical Infrastructure Platform
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">9 months</div>
                  <p className="text-sm text-slate-700">From assessment to ATO approval</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">FISMA High</div>
                  <p className="text-sm text-slate-700">Authorization level achieved</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">$2.4M</div>
                  <p className="text-sm text-slate-700">Saved vs. extended delays</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-navy-900 mb-3">The Situation</h4>
                  <p className="text-slate-700 leading-relaxed">
                    After winning a $45M contract to modernize a critical infrastructure monitoring platform, 
                    a DHS component agency faced a complex ATO challenge. The system required FISMA High authorization 
                    due to the sensitivity of infrastructure data, and the agency had limited experience with 
                    cloud security authorizations.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-navy-900 mb-3">The Challenge</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Complex hybrid cloud architecture spanning AWS GovCloud and on-premises systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Integration with 12 external data sources requiring boundary protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Limited internal security documentation and control evidence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Aggressive 12-month project timeline with ATO as critical milestone</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-navy-900 mb-3">NexDyne's Solution</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-navy-900 mb-2">Phase 1-2 (Months 1-4)</h5>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Conducted rapid gap analysis identifying 47 control deficiencies</li>
                        <li>• Developed comprehensive 850-page SSP leveraging FedRAMP templates</li>
                        <li>• Implemented automated security controls using Infrastructure as Code</li>
                        <li>• Established continuous monitoring with SIEM integration</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-navy-900 mb-2">Phase 3-4 (Months 5-9)</h5>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Coordinated 3PAO assessment with minimal findings (8 low-risk items)</li>
                        <li>• Remediated all findings within 2 weeks</li>
                        <li>• Prepared authorization package with executive briefings</li>
                        <li>• Achieved ATO approval 3 months ahead of contract deadline</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-navy-900 mb-3">The Outcome</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-green-50 border-green-200">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-green-900 mb-1">Accelerated Timeline</p>
                          <p className="text-sm text-green-800">
                            Achieved ATO in 9 months vs. industry average of 12-14 months for FISMA High systems
                          </p>
                        </div>
                      </div>
                    </Card>
                    <Card className="p-4 bg-green-50 border-green-200">
                      <div className="flex items-start gap-3">
                        <Users className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-green-900 mb-1">Knowledge Transfer</p>
                          <p className="text-sm text-green-800">
                            Trained agency security team on continuous monitoring and compliance maintenance
                          </p>
                        </div>
                      </div>
                    </Card>
                    <Card className="p-4 bg-green-50 border-green-200">
                      <div className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-green-900 mb-1">Reusable Framework</p>
                          <p className="text-sm text-green-800">
                            Established security documentation templates for future system authorizations
                          </p>
                        </div>
                      </div>
                    </Card>
                    <Card className="p-4 bg-green-50 border-green-200">
                      <div className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-green-900 mb-1">Sustained Compliance</p>
                          <p className="text-sm text-green-800">
                            Maintained ATO for 3+ years with zero critical findings during annual assessments
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="mt-8 bg-navy-900 rounded-lg p-8 text-white">
              <p className="text-lg mb-4">
                <strong className="text-orange-400">"NexDyne's expertise was instrumental in achieving our ATO on schedule,"</strong> 
                said the DHS Program Director. <em>"Their systematic approach and deep knowledge of federal security requirements 
                gave us confidence throughout the process. They didn't just help us get authorized—they built our team's 
                capability to maintain compliance long-term."</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Navigate Your ATO Journey?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Don't let the authorization process delay your mission-critical project. 
              Partner with NexDyne for expert ATO support that delivers results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Schedule Free ATO Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  View More Case Studies
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
