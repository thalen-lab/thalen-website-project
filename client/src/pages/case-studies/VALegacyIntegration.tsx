import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, TrendingUp, Database, Shield, Users } from "lucide-react";

export default function VALegacyIntegration() {
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
              VA Medical Center Integrates 12 Legacy Systems
            </h1>
            
            <p className="text-xl text-slate-300 mb-8">
              Integrated 12 disparate healthcare systems using FedRAMP iPaaS platform. Reduced administrative burden by 60% for 8,500 staff members.
            </p>
            
            <div className="flex flex-wrap gap-8 text-white">
              <div>
                <div className="text-4xl font-bold text-orange-500">12</div>
                <div className="text-sm text-slate-400 mt-1">Systems Integrated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500">60%</div>
                <div className="text-sm text-slate-400 mt-1">Reduced Admin Burden</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500">8,500</div>
                <div className="text-sm text-slate-400 mt-1">Staff Impacted</div>
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
                A large VA Medical Center operated 12 separate healthcare information systems that did not communicate with each other, forcing clinical and administrative staff to manually enter the same patient information into multiple systems. This data fragmentation created significant inefficiencies and increased the risk of medical errors.
              </p>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Clinicians spent 30-40% of their time on administrative tasks rather than patient care. Duplicate data entry across systems led to inconsistencies in patient records, and staff had no unified view of patient information. The facility needed to integrate these systems while maintaining HIPAA compliance and ensuring zero disruption to patient care operations.
              </p>
              
              <Card className="bg-white border-l-4 border-l-orange-500 p-6 my-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Constraints</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Required HIPAA-compliant integration platform with FedRAMP authorization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Must maintain continuous patient care operations during implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Integration with legacy systems including VistA EHR and proprietary clinical applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Zero tolerance for data loss or patient safety incidents</span>
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
                We implemented a comprehensive integration platform using FedRAMP-authorized iPaaS technology, creating a unified data layer that enabled seamless information flow across all 12 healthcare systems while maintaining strict HIPAA compliance and data security standards.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="p-6 border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 1: Discovery</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Mapped data flows across all 12 systems and identified critical integration points. Documented existing workflows and pain points with clinical and administrative staff.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 2: Foundation</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Deployed FedRAMP-compliant iPaaS platform with HIPAA-compliant data encryption and access controls. Established master data governance framework.
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
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 3: Integration</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Built 45+ integration workflows connecting clinical, administrative, and ancillary systems. Implemented real-time data synchronization and validation rules.
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
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 4: Adoption</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Conducted comprehensive staff training and deployed unified clinical dashboard. Established ongoing support and continuous improvement processes.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 mt-12">Technical Implementation</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Integration Platform:</strong> FedRAMP-authorized iPaaS with HL7 FHIR support, connecting VistA EHR, pharmacy systems, lab systems, radiology PACS, and administrative applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Data Governance:</strong> Master patient index (MPI) ensuring consistent patient identification across all systems with automated duplicate detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Security:</strong> End-to-end encryption, role-based access control, comprehensive audit logging for HIPAA compliance and VA security requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700"><strong>User Interface:</strong> Unified clinical dashboard providing single-pane-of-glass view of patient information across all systems</span>
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
                <div className="text-4xl font-bold text-orange-500 mb-2">60%</div>
                <div className="text-sm text-slate-600">Reduced administrative burden</div>
              </Card>
              
              <Card className="p-6 text-center border-slate-200">
                <div className="text-4xl font-bold text-orange-500 mb-2">85%</div>
                <div className="text-sm text-slate-600">Reduction in duplicate data entry</div>
              </Card>
              
              <Card className="p-6 text-center border-slate-200">
                <div className="text-4xl font-bold text-orange-500 mb-2">8,500</div>
                <div className="text-sm text-slate-600">Staff members impacted</div>
              </Card>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                The integration platform transformed clinical operations by eliminating redundant data entry and providing staff with a unified view of patient information. Clinicians now spend significantly more time on direct patient care rather than administrative tasks, and the risk of medical errors from data inconsistencies has been substantially reduced.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Operational Improvements</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Reduced time spent on administrative tasks by 60%, allowing clinicians to see 15-20% more patients</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Eliminated 85% of duplicate data entry across systems, improving data accuracy and consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Improved patient safety through unified medication reconciliation and allergy checking across all systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Achieved zero HIPAA violations or security incidents throughout implementation and ongoing operations</span>
                </li>
              </ul>
              
              <Card className="bg-slate-900 text-white p-8 my-8">
                <blockquote className="text-lg italic mb-4">
                  "The integration platform gave us back time to focus on what matters most—caring for our veterans. We no longer waste hours entering the same information into multiple systems, and we have confidence that patient data is accurate and up-to-date across all our systems."
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
                Integration
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                HIPAA
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                FedRAMP
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                HL7 FHIR
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                iPaaS
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                VistA EHR
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
              Ready to Integrate Your Systems?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Learn how we can help your organization achieve similar results with compliant integration solutions.
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
