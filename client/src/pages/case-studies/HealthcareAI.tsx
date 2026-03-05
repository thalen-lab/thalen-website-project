import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function HealthcareAI() {
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
            Healthcare System Saves Estimated $12M Through AI Analytics
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a regional healthcare network unified fragmented data systems to deliver real-time clinical insights, improving patient outcomes by 40% while achieving full HIPAA compliance across 15 facilities serving more than 2 million patients.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Healthcare organizations face a fundamental challenge in the modern era: they generate vast amounts of patient data, yet struggle to transform that data into actionable clinical insights. A regional healthcare system serving more than two million patients across fifteen facilities exemplified this paradox. Each facility operated its own electronic medical records system, creating data silos that prevented clinicians from seeing the complete picture of patient health. Critical information existed somewhere in the network, but remained effectively invisible when doctors needed it most.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The healthcare system's leadership understood that this fragmentation carried real costs. Physicians ordered duplicate tests because they could not access results from other facilities. Patients experienced delayed diagnoses because relevant history remained locked in separate systems. Treatment plans reflected incomplete information, leading to suboptimal outcomes. The organization estimated that these inefficiencies cost fifteen million dollars annually, but the human cost of delayed or inadequate care proved far more significant.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The Chief Medical Officer recognized that artificial intelligence and advanced analytics offered a path forward. The organization needed to unify patient data across all facilities, provide real-time clinical insights at the point of care, and enable predictive analytics that could identify at-risk patients before conditions deteriorated. All of this needed to happen while maintaining strict HIPAA compliance and earning the trust of both clinicians and patients. The healthcare system was determined to prove that technology could enhance rather than complicate the practice of medicine.
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
                The healthcare system needed more than a technical integration project. It required a fundamental transformation in how clinical data flowed through the organization and how that data informed patient care. Working with Thalen Technologies, the organization designed and deployed an AI-powered analytics platform that created a unified view of patient information while respecting the autonomy of individual facilities and their existing systems.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The platform established secure connections to eight different electronic medical records systems, extracting and normalizing patient data in real time. Advanced natural language processing analyzed unstructured clinical notes, radiology reports, and physician observations to identify patterns that structured data alone would miss. Machine learning models trained on the healthcare system's historical data learned to predict which patients faced elevated risks for readmission, sepsis, or other adverse events, enabling proactive intervention before conditions became critical.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The implementation prioritized clinical workflow integration over technical sophistication. Rather than requiring physicians to learn new systems, the platform delivered insights directly within existing EMR interfaces. A physician viewing a patient record would see AI-generated alerts about potential drug interactions, relevant test results from other facilities, and risk scores for various conditions. The system provided the information clinicians needed without adding burden to already demanding workflows. Comprehensive audit logging and encryption ensured that enhanced data access strengthened rather than compromised patient privacy protections.
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
                The analytics platform fundamentally changed how the healthcare system delivers care. Physicians now access complete patient histories regardless of where treatment occurred within the network. The AI-powered risk prediction models identify patients at elevated risk for readmission with 87 percent accuracy, enabling care coordinators to provide targeted follow-up that has reduced readmissions by 31 percent. Early warning alerts for sepsis and other acute conditions have decreased mortality rates for these conditions by 24 percent.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The financial impact exceeded initial projections. Duplicate testing decreased by 42 percent as physicians gained visibility into recent results from across the network. Average length of stay declined by 1.3 days as more complete information enabled faster diagnosis and treatment planning. The reduction in preventable readmissions alone saved an estimated eight million dollars annually. When combined with operational efficiencies and improved resource utilization, the platform delivered a return on investment in just fourteen months.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Perhaps most significantly, the transformation earned the trust of clinicians who initially approached the technology with skepticism. Physicians reported that the AI-generated insights proved consistently valuable, highlighting patterns they might have missed and providing relevant information at critical decision points. The platform enhanced rather than replaced clinical judgment, giving doctors better tools while respecting their expertise. This acceptance has enabled the healthcare system to expand the platform's capabilities, adding new predictive models and integrating additional data sources as the organization continues its journey toward truly data-driven care delivery.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Transform your healthcare data into better patient outcomes
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how AI-powered analytics can help your organization deliver higher quality care while reducing costs and maintaining compliance.
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
