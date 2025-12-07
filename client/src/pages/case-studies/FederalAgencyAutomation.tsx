import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, TrendingUp, Clock, Shield, Users } from "lucide-react";

export default function FederalAgencyAutomation() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container relative z-10">
          <Link href="/case-studies">
            <Button variant="ghost" className="text-white hover:text-orange-500 mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <span className="text-orange-500 text-sm font-medium">Federal Government</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Federal Agency Achieves 85% Process Automation
            </h1>
            
            <p className="text-xl text-slate-300 mb-8">
              Implemented UiPath RPA platform with FedRAMP authorization, automating 85% of manual workflows while maintaining TS/SCI compliance. $4.2M contract delivered 6-month ROI.
            </p>
            
            <div className="flex flex-wrap gap-8 text-white">
              <div>
                <div className="text-4xl font-bold text-orange-500">85%</div>
                <div className="text-sm text-slate-400 mt-1">Process Automation</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500">6 mo</div>
                <div className="text-sm text-slate-400 mt-1">ROI Timeline</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500">$4.2M</div>
                <div className="text-sm text-slate-400 mt-1">Contract Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Challenge</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                A large federal agency was processing over 50,000 benefit applications monthly through manual workflows that required extensive human review. Staff spent 70% of their time on repetitive data entry and validation tasks, leading to processing delays of 45-60 days and mounting backlogs during peak periods.
              </p>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                The agency needed to maintain strict compliance with federal data security requirements (TS/SCI clearance) while modernizing operations. Previous automation attempts had failed due to security concerns and integration challenges with legacy mainframe systems.
              </p>
              
              <Card className="bg-white border-l-4 border-l-orange-500 p-6 my-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Constraints</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Required FedRAMP High authorization for all automation platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Must maintain TS/SCI compliance throughout implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Integration with 15+ legacy systems including COBOL mainframes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Zero tolerance for data loss or security incidents</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Approach</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-8">
                We implemented a phased automation strategy using UiPath's FedRAMP-authorized RPA platform, prioritizing high-volume, rules-based processes that could deliver immediate impact while building toward comprehensive workflow automation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="p-6 border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 1: Foundation</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Established FedRAMP-compliant RPA infrastructure with secure credential management and audit logging. Automated 3 high-volume processes as proof of concept.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 2: Scale</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Expanded to 12 additional workflows including data validation, document processing, and inter-system transfers. Trained agency staff on bot monitoring.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 3: Integration</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Connected RPA platform to legacy mainframe systems using secure API gateways. Implemented exception handling and human-in-the-loop workflows.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 4: Optimize</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Implemented continuous monitoring and optimization. Added intelligent document processing using machine learning for unstructured data extraction.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 mt-12">Technical Implementation</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Platform:</strong> UiPath Automation Cloud (FedRAMP High authorized) with on-premises orchestrator for sensitive operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Integration:</strong> Custom API middleware for mainframe connectivity, ServiceNow integration for case management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Security:</strong> Role-based access control, encrypted credential vaults, comprehensive audit logging for FISMA compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Monitoring:</strong> Real-time bot performance dashboards, automated alerting, and exception handling workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Results & Impact</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center border-slate-200">
                <div className="text-4xl font-bold text-orange-500 mb-2">85%</div>
                <div className="text-sm text-slate-600">Manual workflows automated</div>
              </Card>
              
              <Card className="p-6 text-center border-slate-200">
                <div className="text-4xl font-bold text-orange-500 mb-2">67%</div>
                <div className="text-sm text-slate-600">Reduction in processing time</div>
              </Card>
              
              <Card className="p-6 text-center border-slate-200">
                <div className="text-4xl font-bold text-orange-500 mb-2">99.8%</div>
                <div className="text-sm text-slate-600">Accuracy rate maintained</div>
              </Card>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                The automation platform now processes over 42,000 applications monthly with minimal human intervention. Processing time dropped from 45-60 days to 15-20 days, significantly improving citizen service delivery. Staff were redeployed to higher-value activities including complex case review and customer service.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Operational Improvements</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Eliminated backlog of 12,000+ pending applications within 90 days of full deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Reduced data entry errors by 94% through automated validation rules</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Achieved 6-month ROI through labor cost savings and efficiency gains</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Maintained zero security incidents throughout implementation and ongoing operations</span>
                </li>
              </ul>
              
              <Card className="bg-slate-900 text-white p-8 my-8">
                <blockquote className="text-lg italic mb-4">
                  "The automation platform transformed our operations while maintaining the security and compliance standards critical to our mission. We're now processing applications faster than ever, and our staff are focused on serving citizens rather than data entry."
                </blockquote>
                <div className="text-sm text-slate-400">
                  — Led by [Team Member Name] at [Previous Agency/Organization]
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Technologies & Standards</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                RPA
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                FedRAMP
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                CMMC
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                UiPath
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                ServiceNow
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                API Integration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Learn how we can help your agency achieve similar results with compliant automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 border-white">
                  Schedule Assessment
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-orange-600">
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
