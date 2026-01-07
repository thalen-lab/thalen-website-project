import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function CountyHealthDepartment() {
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
            County Health Department Speeds Outbreak Response 40%
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a HIPAA-compliant integration platform connected 12 disconnected health systems serving 2.5 million residents, enabling real-time disease surveillance and automated state reporting with 100% compliance.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                A county health department serving 2.5 million residents operated 12 disconnected health information systems that couldn't share data. Electronic health records, laboratory systems, immunization registries, and vital records databases existed in isolation, forcing epidemiologists to manually gather data through phone calls and chart reviews. Disease surveillance required 48-72 hours to detect outbreak patterns, creating significant public health risks during seasonal flu outbreaks and emerging infectious diseases.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The lack of automated disease surveillance capabilities meant staff reviewed paper charts and spreadsheets to detect trends, often missing critical early warning signs of outbreaks. Mandatory disease reporting to the state health department was manual, error-prone, and frequently late. The county needed to achieve 100% on-time compliance while also meeting strict HIPAA requirements for protected health information.
              </p>
              <p className="text-slate-600 leading-relaxed">
                NexDyne Technology was selected through a competitive county procurement process to design and implement a HIPAA-compliant health data integration platform. The solution would connect all 12 county health systems, enable real-time disease surveillance, automate mandatory state reporting, and provide public health analytics dashboards for 200+ county health workers.
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
                NexDyne Technology designed and implemented a secure integration platform on Azure Government that connected all 12 county health systems with HIPAA-compliant data exchange. The platform enabled real-time disease surveillance and automated state reporting. Key technical components included building a HIPAA-compliant integration hub with end-to-end PHI encryption, implementing HL7 FHIR interfaces for all systems, and establishing secure data pipelines with role-based access controls and audit logging.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The real-time disease surveillance system implemented automated algorithms based on CDC guidelines, creating automated outbreak detection for 45+ reportable diseases. Geographic heat maps showed disease distribution across the county, with automated alerts triggering when thresholds were exceeded. This replaced the manual 48-72 hour reporting delays with immediate detection capabilities.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Role-based analytics dashboards using Power BI Gov provided 200+ county health workers with real-time disease trends, outbreak alerts, and population health metrics. Dashboards were tailored for epidemiologists, nurses, and administrators with appropriate access levels. Automated state reporting workflows eliminated manual data entry while enabling data-driven identification of at-risk populations for targeted interventions.
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
                The platform delivered transformative results for public health operations. Outbreak response time improved by 40% through real-time disease surveillance replacing the previous 48-72 hour manual detection process. All 12 health systems were successfully integrated, providing epidemiologists with complete patient health histories for case investigations and contact tracing.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                State reporting compliance reached 100% through automated workflows, eliminating the manual errors and delays that had previously plagued the department. The 200+ county health workers now have access to real-time analytics dashboards, enabling data-driven decision making and proactive identification of emerging health threats across the 2.5 million resident population.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Full HIPAA compliance was achieved and maintained, with Business Associate Agreements established with all healthcare providers and third-party security assessments confirming the platform's security posture. The success has positioned the county as a model for public health modernization, with neighboring jurisdictions exploring similar implementations based on the demonstrated outcomes.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Modernize your public health infrastructure
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how our HIPAA-compliant integration solutions can connect your health systems and enable real-time disease surveillance for your community.
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
