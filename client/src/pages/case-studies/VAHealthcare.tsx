import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function VAHealthcare() {
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
            How a VA medical center integrated twelve disparate healthcare systems using FedRAMP-authorized iPaaS platform, reducing administrative burden by 60% for 8,500 staff members serving 500,000+ veterans.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Veterans Affairs medical centers serve populations with complex healthcare needs that require coordination across multiple specialties and services. A large VA medical center serving more than five hundred thousand veterans confronted a critical challenge: twelve separate information systems operated independently, creating data silos that prevented effective care coordination. The electronic health records system, pharmacy management platform, laboratory information system, radiology system, and eight other specialized applications each maintained their own databases with limited ability to share information. Clinicians and administrative staff spent substantial time manually transferring data between systems, searching for information across multiple applications, and reconciling inconsistent records.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                This fragmentation carried real consequences for veterans and staff alike. A physician prescribing medication might not have immediate visibility into recent laboratory results stored in a separate system, creating potential safety risks. Care coordinators managing complex cases spent hours each week gathering information from multiple systems to understand the complete picture of a veteran's care. Administrative staff processed the same information multiple times as it moved through different systems, consuming time that could have been devoted to direct patient support. The medical center estimated that system fragmentation cost more than eight thousand hours of staff time weekly while creating quality and safety risks that no healthcare organization could accept.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The medical center's leadership understood that replacing all twelve systems was neither feasible nor desirable, as each provided specialized functionality that served important needs. Instead, they recognized that modern integration platforms could connect these disparate systems, enabling seamless data flow while preserving the specialized capabilities that made each system valuable. Any solution needed FedRAMP authorization to operate in the VA's cloud environment, robust security controls to protect sensitive veteran health information, and integration capabilities sophisticated enough to handle the complex data transformations required when connecting healthcare systems built on different standards and technologies.
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
                The medical center needed an integration platform that could connect diverse healthcare systems while meeting the strict security and compliance requirements that govern VA operations. Working with NexDyne Technology, the medical center deployed a FedRAMP-authorized integration platform as a service that established secure, real-time connections between all twelve legacy systems. The platform translated data between the different formats and standards that each system used, enabling seamless information flow while preserving the specialized functionality that made each system valuable to its users.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The technical architecture implemented a hub-and-spoke model where the integration platform served as a central data exchange connecting all twelve systems. Rather than requiring point-to-point connections between every system pair, which would have created sixty-six separate integration points, the platform enabled each system to connect once to the central hub. The platform handled complex data transformations, converting laboratory results from one format to another, mapping medication codes between different coding systems, and reconciling patient identifiers across systems that used different identification schemes. Real-time event processing ensured that updates in one system immediately propagated to others, eliminating the delays that had previously characterized manual data transfer.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The implementation prioritized security and compliance alongside technical functionality. The platform implemented comprehensive encryption for data in transit and at rest, role-based access controls that ensured users could only access information appropriate to their function, and detailed audit logging that tracked every data access and transformation. These controls met both HIPAA requirements for protecting health information and the additional security standards that govern VA systems. The FedRAMP authorization provided assurance that the platform met federal security requirements, enabling the medical center to leverage cloud-based integration capabilities while maintaining the security posture required for handling veteran health information.
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
                The integration platform transformed operations at the VA medical center. Staff members report that administrative burden decreased by sixty percent as automated data flow eliminated manual transfer tasks that previously consumed substantial time. Clinicians now access complete patient information through their primary system without needing to log into multiple applications, improving both efficiency and the quality of clinical decision-making. Care coordinators manage complex cases more effectively as they can see the complete picture of a veteran's care across all specialties and services. The medical center estimates that the integration platform saves more than eight thousand staff hours weekly, time that can now be devoted to direct patient care and support.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The quality and safety improvements proved equally significant. Medication errors decreased by forty-two percent as physicians gained immediate visibility into recent laboratory results and current medications when prescribing new treatments. Care coordination improved measurably, with veterans reporting better communication between different providers and services. The medical center's patient satisfaction scores increased substantially, driven largely by improvements in care coordination and reduced administrative friction. The platform's audit capabilities provide complete visibility into how information flows through the system, supporting both quality improvement initiatives and compliance requirements.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Perhaps most importantly, the integration platform established a foundation for continued innovation in veteran care delivery. The medical center has used the platform to implement new services that would have been impossible with fragmented systems, including a telehealth program that provides integrated access to patient information for remote consultations. Other VA medical centers are adopting similar integration approaches, and the success has influenced VA-wide strategies for modernizing healthcare information technology. The transformation demonstrated that legacy systems can be unified without wholesale replacement, delivering substantial benefits through integration while preserving the specialized capabilities that make individual systems valuable.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Unify your healthcare systems
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how integration platforms can connect your legacy systems while meeting federal security requirements and improving care coordination.
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
