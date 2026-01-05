import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function VALegacyIntegration() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[oklch(0.18_0.06_250)]/85 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="container relative z-10">
          <Link href="/case-studies">
            <Button variant="ghost" className="text-white hover:text-[oklch(0.75_0.15_55)] mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>

          <div className="max-w-4xl">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-6">
              Federal Government
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              VA Medical Center Integrates 12 Legacy Systems
            </h1>

            <p className="text-xl text-white/90 mb-8">
              Integrated 12 disparate healthcare systems using FedRAMP iPaaS platform. Reduced administrative burden by 60% for 8,500 staff members.
            </p>

            <div className="flex flex-wrap gap-8 text-white">
              <div>
                <div className="text-4xl font-bold text-[oklch(0.75_0.15_55)]">12</div>
                <div className="text-sm text-slate-400 mt-1">Systems Integrated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[oklch(0.75_0.15_55)]">60%</div>
                <div className="text-sm text-slate-400 mt-1">Reduced Admin Burden</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[oklch(0.75_0.15_55)]">8,500</div>
                <div className="text-sm text-slate-400 mt-1">Staff Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Challenge</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-8">Data Fragmentation and Clinical Inefficiency</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                A large VA Medical Center operated 12 separate healthcare information systems that did not communicate with each other, forcing clinical and administrative staff to manually enter the same patient information into multiple systems. This data fragmentation created significant inefficiencies and increased the risk of medical errors.
              </p>

              <p className="text-slate-600 leading-relaxed mb-6">
                Clinicians spent 30-40% of their time on administrative tasks rather than patient care. Duplicate data entry across systems led to inconsistencies in patient records, and staff had no unified view of patient information. The facility needed to integrate these systems while maintaining HIPAA compliance and ensuring zero disruption to patient care operations.
              </p>

              <Card className="bg-white border-2 border-slate-200 p-6 my-8 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h3 className="text-xl font-semibold text-[oklch(0.20_0.05_250)] mb-4">Key Constraints</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">Required HIPAA-compliant integration platform with FedRAMP authorization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">Must maintain continuous patient care operations during implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">Integration with legacy systems including VistA EHR and proprietary clinical applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">Zero tolerance for data loss or patient safety incidents</span>
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
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-8">Unified Data Layer via FedRAMP iPaaS</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-8">
                We implemented a comprehensive integration platform using FedRAMP-authorized iPaaS technology, creating a unified data layer that enabled seamless information flow across all 12 healthcare systems while maintaining strict HIPAA compliance and data security standards.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="p-6 bg-white border-2 border-slate-200 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                  <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)] mb-2">Phase 1: Discovery</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Mapped data flows across all 12 systems and identified critical integration points. Documented existing workflows and pain points with clinical and administrative staff.
                  </p>
                </Card>

                <Card className="p-6 bg-white border-2 border-slate-200 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                  <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)] mb-2">Phase 2: Foundation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Deployed FedRAMP-compliant iPaaS platform with HIPAA-compliant data encryption and access controls. Established master data governance framework.
                  </p>
                </Card>

                <Card className="p-6 bg-white border-2 border-slate-200 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                  <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)] mb-2">Phase 3: Integration</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Built 45+ integration workflows connecting clinical, administrative, and ancillary systems. Implemented real-time data synchronization and validation rules.
                  </p>
                </Card>

                <Card className="p-6 bg-white border-2 border-slate-200 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                  <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)] mb-2">Phase 4: Adoption</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Conducted comprehensive staff training and deployed unified clinical dashboard. Established ongoing support and continuous improvement processes.
                  </p>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-[oklch(0.20_0.05_250)] mb-4 mt-12">Technical Implementation</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span className="text-slate-600"><strong>Integration Platform:</strong> FedRAMP-authorized iPaaS with HL7 FHIR support, connecting VistA EHR, pharmacy systems, lab systems, radiology PACS, and administrative applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span className="text-slate-600"><strong>Data Governance:</strong> Master patient index (MPI) ensuring consistent patient identification across all systems with automated duplicate detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span className="text-slate-600"><strong>Security:</strong> End-to-end encryption, role-based access control, comprehensive audit logging for HIPAA compliance and VA security requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span className="text-slate-600"><strong>User Interface:</strong> Unified clinical dashboard providing single-pane-of-glass view of patient information across all systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Results & Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-8">60% Reduction in Administrative Burden</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center bg-white border-2 border-slate-200 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <div className="text-4xl font-bold text-[oklch(0.65_0.18_55)] mb-2">60%</div>
                <div className="text-sm text-slate-600">Reduced administrative burden</div>
              </Card>

              <Card className="p-6 text-center bg-white border-2 border-slate-200 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <div className="text-4xl font-bold text-[oklch(0.65_0.18_55)] mb-2">100%</div>
                <div className="text-sm text-slate-600">HIPAA Compliance</div>
              </Card>

              <Card className="p-6 text-center bg-white border-2 border-slate-200 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <div className="text-4xl font-bold text-[oklch(0.65_0.18_55)] mb-2">8,500</div>
                <div className="text-sm text-slate-600">Staff members impacted</div>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed">
                The integrated system eliminated redundant data entry, providing clinicians with a unified view of patient information and freeing up significant time for patient care. The solution not only improved operational efficiency but also enhanced patient safety by ensuring data consistency across all platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Modernize Your Infrastructure?</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Let us help you integrate your legacy systems and unlock new levels of efficiency and security. Contact us for a consultation.
          </p>
          <Button size="lg" asChild className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-slate-200">
            <Link href="/contact">
              Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
