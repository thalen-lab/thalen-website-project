import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function CountyHealth() {
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
            County Health Department Achieves 78% Faster Disease Surveillance
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a real-time public health surveillance platform for 1.2M residents reduced outbreak detection time from 14 days to 3 days with HIPAA-compliant infrastructure and integration with 120+ healthcare providers, labs, and pharmacies.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                A county health department serving 1.2 million residents relied on manual, paper-based disease surveillance processes that took 14+ days to identify potential outbreaks. Healthcare providers faxed or mailed disease reports to the health department, where staff manually entered data into spreadsheets. This delay created significant public health risks, particularly during seasonal flu outbreaks and emerging infectious diseases.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The root causes extended beyond simple process inefficiency. The county had no real-time visibility into disease patterns, with seasonal flu outbreaks often identified weeks after peak transmission began. Data sources were completely disconnected—120+ healthcare providers, 15 labs, and 80 pharmacies all reported through different channels with no integration.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Any solution needed to meet strict compliance requirements. The platform required HIPAA compliance for protected health information and CJIS compliance for law enforcement integration supporting contact tracing and quarantine enforcement. Thalen Technologies was selected through a competitive procurement process to design and implement a comprehensive real-time public health surveillance platform.
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
                Thalen Technologies designed and implemented a HIPAA-compliant real-time surveillance platform that automatically ingests disease reports from all healthcare providers, labs, and pharmacies. The platform enables outbreak detection within 3 days instead of 14, transforming the county's public health response capabilities.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The technical implementation included building HL7/FHIR integration with 120+ healthcare providers for automated disease reporting, integrating with 15 commercial labs for real-time lab result ingestion, and connecting to 80 pharmacies for syndromic surveillance including flu medication purchases. Automated outbreak detection algorithms using CDC guidelines were implemented alongside real-time dashboards for epidemiologists with geographic heat maps.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Full compliance was achieved through deployment on HIPAA-compliant AWS GovCloud infrastructure with end-to-end encryption. Role-based access controls with audit logging for all PHI access ensured accountability. CJIS compliance was achieved for law enforcement integration, and Business Associate Agreements were established with all 120+ healthcare providers. A third-party HIPAA security assessment resulted in zero findings.
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
                The platform delivered transformative public health outcomes. Outbreak detection improved by 78%, reducing the timeline from 14 days to 3 days. Real-time surveillance now covers all 1.2 million residents, with data accuracy improving from 67% with manual entry to 95% with automated ingestion. Automated alerts now monitor 45+ reportable diseases continuously.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Operational efficiency improved dramatically across the department. Manual data entry was reduced by 92%, with 120+ providers now integrated with automated reporting. Staff time spent on data collection decreased by 85%, freeing epidemiologists to focus on analysis and response rather than data gathering. Full compliance with both HIPAA and CJIS requirements was maintained throughout.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The platform has become a model for county health departments nationwide. During subsequent disease outbreaks, the county was able to identify and respond to emerging threats days faster than neighboring jurisdictions, demonstrating the life-saving potential of real-time public health surveillance. The success has led to discussions about expanding the platform to serve a regional consortium of counties.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Modernize your public health infrastructure
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how our secure, scalable, and compliant technology solutions can help you protect your community and improve public health outcomes.
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
