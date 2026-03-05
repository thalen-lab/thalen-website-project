import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function HospitalWaitTimes() {
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
            Hospital Reduces Wait Times 65%
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a patient flow optimization platform reduced emergency department wait times from 4.5 hours to 1.5 hours while improving satisfaction scores by 85%. The platform now manages operations across the entire health system, serving as a model for healthcare operational excellence.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Emergency departments serve as the front door to healthcare for millions of Americans, yet many struggle with crowding that delays treatment and frustrates patients. A regional hospital serving a diverse urban community faced this challenge acutely. Average wait times in the emergency department exceeded 4.5 hours from arrival to treatment, with some patients waiting substantially longer during peak periods. Patient satisfaction scores languished in the bottom quartile nationally, and the hospital faced increasing pressure from regulators concerned about treatment delays that might compromise patient outcomes.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The root causes extended beyond simple capacity constraints. The hospital had adequate beds and staff, but inefficient patient flow meant that resources remained underutilized while patients waited. Physicians spent time searching for available exam rooms. Nurses struggled to track which patients needed attention most urgently. Laboratory and imaging results arrived unpredictably, creating bottlenecks that delayed diagnosis and treatment decisions. The hospital's leadership understood that the problem required more than adding capacity—it demanded fundamental changes in how patient flow was managed and optimized.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The Chief Medical Officer recognized that modern analytics and automation could transform emergency department operations. Real-time visibility into patient status, predictive models that anticipated demand surges, and automated workflow optimization could dramatically reduce wait times while improving both patient outcomes and staff satisfaction. The challenge extended beyond technology implementation. Any solution needed to integrate seamlessly with existing clinical workflows, earn the trust of physicians and nurses who would use it daily, and maintain strict HIPAA compliance while handling sensitive patient information.
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
                Working with Thalen Technologies, the hospital deployed a patient flow optimization platform that integrated with the existing electronic medical records system to track every patient's journey from arrival through discharge. The platform provided real-time dashboards that showed patient locations, wait times, and treatment status, enabling staff to identify and address bottlenecks immediately.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The technical architecture leveraged machine learning to predict patient volumes based on historical patterns, weather conditions, local events, and other factors that influenced emergency department demand. These predictions enabled the hospital to adjust staffing proactively, ensuring adequate coverage during anticipated surge periods. The platform automatically assigned patients to available exam rooms based on acuity, specialty requirements, and resource availability, eliminating the manual coordination that previously consumed nursing time. Integration with laboratory and imaging systems enabled automatic notification when results became available, accelerating diagnosis and treatment decisions.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The implementation prioritized clinical workflow integration and user experience. Rather than requiring staff to learn complex new systems, the platform delivered information through intuitive mobile interfaces that nurses and physicians could access throughout the department. Automated alerts notified staff when patients required attention, when test results arrived, or when discharge processes could begin. The system respected clinical judgment, providing recommendations rather than mandates and enabling physicians to override automated decisions when appropriate. Comprehensive audit logging and encryption ensured HIPAA compliance while the enhanced coordination improved rather than complicated patient care delivery.
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
                The patient flow platform transformed emergency department operations. Average wait times declined from 4.5 hours to 1.5 hours, a sixty-five percent improvement that moved the hospital from the bottom quartile to the top quartile nationally. Patient satisfaction scores increased by eighty-five percent, with particular improvements in perceptions of wait times and staff responsiveness. The hospital now consistently meets or exceeds regulatory benchmarks for treatment timeliness, eliminating a significant source of compliance risk.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The operational improvements extended beyond wait time reduction. The emergency department now treats forty-two percent more patients with the same physical capacity and staffing levels, as optimized patient flow eliminated the bottlenecks that previously limited throughput. Staff satisfaction improved markedly, with nurses and physicians reporting that automated coordination reduced frustration and enabled them to focus on patient care rather than administrative tasks. The predictive staffing capabilities reduced both understaffing during surge periods and overstaffing during slower times, improving both service quality and cost efficiency.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Perhaps most significantly, the platform established a foundation for continuous improvement in hospital operations. The success in the emergency department led to expansion throughout the hospital, with the patient flow platform now managing admissions, surgical scheduling, and discharge planning. The hospital has become a regional leader in operational excellence, attracting patients who value efficient, high-quality care. Other hospitals in the health system are adopting similar platforms, and the original implementation serves as a model for how technology can enhance rather than complicate healthcare delivery.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Transform your hospital operations
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how patient flow platforms can help your hospital reduce wait times, improve satisfaction, and increase throughput while maintaining HIPAA compliance.
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
