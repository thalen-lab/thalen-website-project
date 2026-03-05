import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function IntelligenceSecurity() {
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
            Intelligence Agency Achieves TS/SCI Collaboration
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a secure, cross-domain collaboration platform enabled 15 partner agencies to share Top Secret/SCI information while maintaining strict compartmentalization. The platform achieved a three-year record of zero security incidents with 99.1% automated classification accuracy.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                The Intelligence Community operates on a foundation of shared, timely information, yet a major agency faced a critical challenge: intelligence was fragmented across 15 distinct partner organizations. Legacy systems were inherently siloed, lacking a secure, unified mechanism for cross-agency collaboration. This structural impediment significantly hindered mission-critical intelligence sharing, slowing down response times and creating operational inefficiencies in a high-stakes environment where seconds can determine mission success.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The core difficulty was not merely connecting the agencies, but doing so while adhering to the most stringent security protocols. The platform required the capability to handle Top Secret/Sensitive Compartmented Information (TS/SCI) and maintain strict compartmentalization. This necessitated a system capable of fine-grained access control, ensuring that only personnel with the correct clearance, need-to-know, and special access program authorization could view specific data, a requirement that traditional perimeter-based security models could not satisfy.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Furthermore, the solution had to facilitate secure information flow between different classification domains—a complex cross-domain security challenge—while preventing unauthorized disclosure or data spillage. This operational requirement was compounded by the need for a comprehensive, immutable audit trail for all access, modifications, and sharing activities, ensuring continuous compliance with rigorous IC directives such as ICD 503. The agency required a partner capable of delivering a secure, scalable, and fully compliant platform under an IDIQ contract.
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
                Working with Thalen Technologies, the agency designed and deployed a comprehensive, Zero-Trust-based cross-domain collaboration platform. The foundational element was a fine-grained Attribute-Based Access Control (ABAC) system, which enforced access decisions dynamically based on a user's clearance level, organizational affiliation, and the specific attributes of the data being requested. This replaced outdated role-based models, providing the necessary precision to maintain strict TS/SCI compartmentalization across all 15 partner agencies.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                To manage the immense volume of classified data, the team integrated an advanced Machine Learning-powered classification engine. This engine automatically tagged content with appropriate classification markings and compartment labels, achieving a verified accuracy rate of 99.1%. This automation significantly reduced human error and the administrative burden associated with manual classification. Concurrently, a secure cross-domain guard architecture was established to enable controlled, monitored information flow between different classification levels, incorporating human-in-the-loop review for all sensitive transfers.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The platform was completed with a suite of secure collaboration tools, including classified messaging, document co-editing, and video conferencing, all protected by end-to-end encryption and ephemeral key management. Furthermore, a continuous monitoring system, utilizing behavioral analytics and anomaly detection, was implemented to identify potential insider threats and unauthorized access attempts in real-time. This holistic approach ensured both maximum operational utility and uncompromised security compliance.
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
                The deployment of the secure collaboration platform resulted in an immediate and measurable improvement in operational efficiency across the Intelligence Community. By connecting all 15 partner agencies and providing a unified, secure environment, the platform eliminated the critical information silos that had previously hampered intelligence operations. This integration enabled over 5,000 cleared users to actively collaborate, leading to an 85% reduction in the time required to share critical intelligence across domains.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Crucially, the platform's robust security architecture has delivered a perfect security record, with zero security incidents reported over three years of continuous operation. This achievement is a direct result of the fine-grained ABAC, the automated classification engine, and the continuous monitoring system, which collectively enforce a strict Zero-Trust posture. The 99.1% accuracy of the automated classification engine ensures that data is correctly handled from ingestion, minimizing the risk of accidental spillage or unauthorized access.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Beyond security and speed, the solution ensured full regulatory compliance. The comprehensive, immutable audit system captures every user action, providing the necessary data for automated compliance reporting and maintaining 100% adherence to IC ICD 503 requirements. This success story demonstrates that it is possible to achieve unprecedented levels of cross-agency collaboration and speed without compromising the most stringent national security standards.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Secure your classified operations
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how our intelligence community solutions can enable secure collaboration at the highest classification levels while maintaining full compliance.
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
