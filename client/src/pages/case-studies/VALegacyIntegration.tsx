import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function VALegacyIntegration() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1 pt-32 pb-24">
        <article className="container max-w-3xl mx-auto px-6">
          {/* Back Link */}
          <Link href="/case-studies" className="inline-flex items-center text-[oklch(0.55_0.15_250)] hover:text-[oklch(0.45_0.15_250)] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[oklch(0.15_0.05_250)] leading-tight mb-6">
            VA Medical Center Integrates 12 Legacy Systems
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How unified patient data across 12 disparate VA healthcare systems with FedRAMP-authorized integration platforms reduced administrative burden by 60% and improved care coordination for 8,500 staff members.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                A large VA Medical Center operated 12 separate healthcare information systems that did not communicate with each other, forcing clinical and administrative staff to manually enter the same patient information into multiple systems. This data fragmentation created significant inefficiencies and increased the risk of medical errors. Clinicians spent 30-40% of their time on administrative tasks rather than patient care, while duplicate data entry across systems led to inconsistencies in patient records.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Staff had no unified view of patient information, requiring them to log into multiple systems to piece together a complete picture of each veteran's health status. The situation was particularly challenging for care coordination, where specialists needed to understand the full context of a patient's treatment history before making clinical decisions. Emergency situations were especially problematic, as clinicians sometimes had to make critical decisions without access to complete patient records.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The facility needed to integrate these systems while maintaining HIPAA compliance and ensuring zero disruption to patient care operations. Any solution would need to work with the existing VistA EHR system, proprietary clinical applications, pharmacy systems, laboratory information systems, and radiology PACS. The integration had to be seamless enough that staff would adopt it willingly, while robust enough to handle the volume and sensitivity of healthcare data.
              </p>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Solution
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Working with NexDyne Technology, the medical center implemented a comprehensive integration platform using FedRAMP-authorized iPaaS technology. The approach created a unified data layer that enabled seamless information flow across all 12 healthcare systems while maintaining strict HIPAA compliance and data security standards. The implementation began with detailed discovery work that mapped data flows across all systems and identified critical integration points through extensive collaboration with clinical and administrative staff.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The technical foundation included a FedRAMP-compliant iPaaS platform with HL7 FHIR support, connecting VistA EHR, pharmacy systems, lab systems, radiology PACS, and administrative applications. A master patient index ensured consistent patient identification across all systems with automated duplicate detection. The platform built 45 integration workflows connecting clinical, administrative, and ancillary systems with real-time data synchronization and validation rules.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Security architecture received careful attention throughout the implementation. End-to-end encryption, role-based access control, and comprehensive audit logging ensured compliance with HIPAA requirements and VA security standards. The unified clinical dashboard provided a single-pane-of-glass view of patient information across all systems, while comprehensive staff training and ongoing support ensured successful adoption throughout the organization.
              </p>
            </div>
          </section>

          {/* The Impact */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Impact
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                The integration platform transformed how 8,500 staff members access and work with patient information. Administrative burden decreased by 60% as duplicate data entry was eliminated and information flowed automatically between systems. Clinicians now spend significantly more time on direct patient care, with the unified dashboard providing immediate access to complete patient records regardless of which system originally captured the data.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Care coordination improved dramatically as specialists gained visibility into the full context of each patient's treatment history. The master patient index eliminated the record inconsistencies that previously created confusion and potential safety risks. Emergency department staff now have immediate access to complete patient information, enabling faster and more informed clinical decisions during critical situations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The platform achieved and maintained 100% HIPAA compliance while processing millions of healthcare transactions. The comprehensive audit logging provides complete visibility into data access patterns, supporting both compliance requirements and quality improvement initiatives. Most importantly, the integration has established a foundation for future capabilities including advanced analytics, population health management, and enhanced veteran engagement tools.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Ready to unify your healthcare systems?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how enterprise integration can eliminate data silos, reduce administrative burden, and improve care coordination across your organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[oklch(0.65_0.18_55)] hover:bg-[oklch(0.55_0.18_55)] text-white">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                <Link href="/case-studies">
                  Explore More Case Studies
                </Link>
              </Button>
            </div>
          </section>
        </article>
      </main>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
