import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function StateDOT() {
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
            State DOT Modernizes Asset Management with 92% Efficiency Gain
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How migrating a 40-year-old COBOL mainframe to Salesforce Government Cloud enabled real-time asset tracking across 12,000 miles of highway and 2,400 bridges, delivering $3.8M in annual savings.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                A state Department of Transportation managing 12,000+ miles of highway, 2,400 bridges, and $800M in annual infrastructure spending relied on a 40-year-old COBOL mainframe system for asset management. The legacy system lacked mobile access, real-time reporting, and integration with modern GIS platforms, creating operational inefficiencies and limiting the agency's ability to respond to infrastructure emergencies.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The challenges were significant. Asset data resided in the mainframe, GIS data in ArcGIS, and financial data in SAP—with no integration between systems, requiring manual data reconciliation. Field crews lacked real-time access to asset condition data during emergency repairs, causing delays and safety risks. The mainframe itself cost $1.2M annually just to maintain.
              </p>
              <p className="text-slate-600 leading-relaxed">
                NexDyne Technology was selected through a competitive RFP process to migrate the DOT's asset management system to Salesforce Government Cloud, a StateRAMP-authorized platform. The project required zero downtime during migration, integration with existing GIS and financial systems, and comprehensive training for 850+ field and office personnel.
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
                NexDyne Technology designed and implemented a comprehensive asset management solution on Salesforce Government Cloud, replacing the 40-year-old mainframe with a modern, mobile-first platform. The team migrated 2.4 million asset records from the COBOL mainframe to Salesforce with zero data loss, built a custom mobile app for field crews to access asset data and submit inspection reports offline, and integrated Salesforce with ArcGIS for real-time location-based asset visualization.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The platform connected to the SAP financial system for automated budget tracking and procurement workflows. Predictive maintenance algorithms were implemented using historical inspection data to prioritize maintenance activities. Full compliance with state security and data residency requirements was achieved through StateRAMP-authorized infrastructure with data residency configured to keep all state data within state boundaries.
              </p>
              <p className="text-slate-600 leading-relaxed">
                A comprehensive change management program ensured smooth adoption across the organization. The team trained 850+ users through role-based programs for field crews, engineers, and administrators. Over 40 training videos and quick reference guides were created for common workflows. A DOT Center of Excellence was established with 12 power users for ongoing support, and a 6-week pilot with 3 districts preceded the statewide rollout. Ninety-day hypercare support post-launch included a dedicated on-site team.
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
                The platform delivered transformative results for the DOT's operations. Efficiency improved by 92% as field crews gained real-time access to asset data and could submit inspection reports from anywhere. The project was completed in 14 months, on time and within budget. Annual cost savings of $3.8M were achieved through elimination of mainframe maintenance, reduced manual data reconciliation, and improved maintenance planning.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Emergency response capabilities improved dramatically. Field crews now have immediate access to asset condition data, maintenance history, and related documentation during emergency repairs. The integration with ArcGIS enables rapid identification of nearby assets that may be affected by incidents. Response times have decreased significantly, improving both safety and service to the public.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The success has positioned the DOT as a leader in transportation technology modernization. The StateRAMP-authorized platform serves as a model for other state agencies seeking to modernize legacy systems while meeting security and data sovereignty requirements. The predictive maintenance capabilities have enabled more proactive infrastructure management, extending asset life and improving allocation of the $800M annual infrastructure budget.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Modernize your legacy systems
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how cloud migration can transform your agency's operations while meeting state security requirements and preserving institutional knowledge.
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
