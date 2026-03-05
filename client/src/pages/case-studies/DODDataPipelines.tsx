import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function DODDataPipelines() {
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
            DOD Saves Estimated $12M Annually with Automated Data Pipelines
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How the Department of Defense eliminated manual data integration work across 47 disparate systems, achieving real-time supply chain visibility with 99.9% uptime and processing 500TB+ of classified data daily.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                The Department of Defense logistics command oversees a vast, complex supply chain valued at over $180 billion. This critical operation was managed across 47 disparate, siloed systems, including legacy mainframes, various ERP platforms, and specialized warehouse management tools. The inherent heterogeneity of these systems—each with unique data formats, update frequencies, and access protocols—created a significant data integration challenge.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                To gain any holistic view of the supply chain, a dedicated team of 35 data analysts was required to manually extract, transform, and load data into common reporting formats, often relying on error-prone spreadsheets. This laborious process consumed 18 hours for a single reporting cycle. Consequently, by the time leadership received critical supply chain reports, the underlying data was already outdated, severely limiting the ability to make timely, informed decisions.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Mission readiness and operational efficiency demanded a fundamental shift. The DOD required real-time, unified visibility into inventory levels, shipment statuses, and procurement activities. The manual data integration model was unsustainable and posed a risk to logistics optimization. The clear objective was to implement automated, scalable data pipelines capable of handling the immense volume and complexity of defense logistics data.
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
                Working with Thalen Technologies, the solution began with the design and deployment of a FedRAMP-authorized, cloud-native data lake within AWS GovCloud. This architecture established a secure, central repository for all supply chain data, utilizing services like S3 for scalable raw data storage, AWS Glue for robust ETL orchestration, and Athena for efficient, cost-effective SQL querying. This foundation provided the necessary security, scalability, and compliance framework for defense-level data workloads.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The core of the solution involved building 47 custom, high-performance data connectors. These connectors were engineered to automatically and securely extract data from each of the 47 source systems, with a refresh cycle reduced to every 15 minutes. Each pipeline incorporated system-specific authentication, rate-limiting, and self-healing error recovery logic, ensuring continuous, reliable data flow without manual intervention.
              </p>
              <p className="text-slate-600 leading-relaxed">
                To ensure data integrity, a comprehensive Data Quality and Governance Framework was implemented. This framework applies automated validation rules at every stage of the pipeline, flagging anomalies and maintaining a complete audit trail for compliance and data lineage. Finally, a unified analytics layer was created to provide a single semantic model, allowing logistics officers to query data using familiar business terms, thereby democratizing access to real-time supply chain intelligence.
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
                The implementation of the automated data pipelines delivered immediate and substantial returns on investment. By eliminating the need for 35 full-time employees to perform manual data extraction and transformation, the Department of Defense realized an estimated annual operational cost saving of $12 million. These highly skilled analysts were subsequently redeployed to higher-value activities, such as supply chain optimization and advanced demand forecasting.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Operational efficiency saw a dramatic improvement, with a 95% reduction in manual data work. The automated system now processes 2.4 million records daily with near-zero human intervention. This shift allowed analysts to dedicate their time to strategic analysis rather than data janitorial tasks, fundamentally changing the nature of the logistics command's data operations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Most critically, the data refresh time was reduced from an unacceptable 18 hours to a near real-time 15 minutes. This real-time visibility into inventory, shipments, and procurement enabled leadership to make faster, data-driven decisions, leading to the identification and redistribution of an estimated $340 million in excess inventory. The system has maintained a 99.8% pipeline uptime over 18 months, demonstrating the reliability and resilience required for mission-critical defense infrastructure.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Ready to automate your data pipelines?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Schedule a free pipeline assessment. We will evaluate your current data processes, identify automation opportunities, and show you how to achieve real-time data visibility.
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
