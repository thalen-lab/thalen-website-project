import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumb from '@/components/Breadcrumb';

export default function HospitalWaitTimes() {
  return (
    <div className="min-h-screen flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 text-white">
        <div className="absolute inset-0 bg-[url('/img/pattern-dark.svg')] bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>

        <div className="container relative z-10">
          <Link href="/case-studies">
            <Button variant="ghost" className="text-white/90 hover:text-white mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Case Study
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white mb-8 leading-tight">
              Hospital Reduces Wait Times 65%
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              How a patient flow optimization platform reduced emergency department wait times from 4.5 hours to 1.5 hours while improving satisfaction scores by 85%
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Opportunity</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-[oklch(0.20_0.05_250)] leading-tight">
                A hospital recognized that emergency department crowding was compromising patient care
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Emergency departments serve as the front door to healthcare for millions of Americans, yet many struggle with crowding that delays treatment and frustrates patients. A regional hospital serving a diverse urban community faced this challenge acutely. Average wait times in the emergency department exceeded 4.5 hours from arrival to treatment, with some patients waiting substantially longer during peak periods. Patient satisfaction scores languished in the bottom quartile nationally, and the hospital faced increasing pressure from regulators concerned about treatment delays that might compromise patient outcomes.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The root causes extended beyond simple capacity constraints. The hospital had adequate beds and staff, but inefficient patient flow meant that resources remained underutilized while patients waited. Physicians spent time searching for available exam rooms. Nurses struggled to track which patients needed attention most urgently. Laboratory and imaging results arrived unpredictably, creating bottlenecks that delayed diagnosis and treatment decisions. The hospital's leadership understood that the problem required more than adding capacity—it demanded fundamental changes in how patient flow was managed and optimized.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed">
                The Chief Medical Officer recognized that modern analytics and automation could transform emergency department operations. Real-time visibility into patient status, predictive models that anticipated demand surges, and automated workflow optimization could dramatically reduce wait times while improving both patient outcomes and staff satisfaction. The challenge extended beyond technology implementation. Any solution needed to integrate seamlessly with existing clinical workflows, earn the trust of physicians and nurses who would use it daily, and maintain strict HIPAA compliance while handling sensitive patient information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Solution</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-[oklch(0.20_0.05_250)] leading-tight">
                A patient flow platform optimized operations through real-time analytics and automated coordination
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The hospital needed a platform that could provide complete visibility into emergency department operations while automating the coordination tasks that consumed valuable staff time. Working with NexDyne, the hospital deployed a patient flow optimization platform that integrated with the existing electronic medical records system to track every patient's journey from arrival through discharge. The platform provided real-time dashboards that showed patient locations, wait times, and treatment status, enabling staff to identify and address bottlenecks immediately.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The technical architecture leveraged machine learning to predict patient volumes based on historical patterns, weather conditions, local events, and other factors that influenced emergency department demand. These predictions enabled the hospital to adjust staffing proactively, ensuring adequate coverage during anticipated surge periods. The platform automatically assigned patients to available exam rooms based on acuity, specialty requirements, and resource availability, eliminating the manual coordination that previously consumed nursing time. Integration with laboratory and imaging systems enabled automatic notification when results became available, accelerating diagnosis and treatment decisions.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed">
                The implementation prioritized clinical workflow integration and user experience. Rather than requiring staff to learn complex new systems, the platform delivered information through intuitive mobile interfaces that nurses and physicians could access throughout the department. Automated alerts notified staff when patients required attention, when test results arrived, or when discharge processes could begin. The system respected clinical judgment, providing recommendations rather than mandates and enabling physicians to override automated decisions when appropriate. Comprehensive audit logging and encryption ensured HIPAA compliance while the enhanced coordination improved rather than complicated patient care delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Impact</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.20_0.05_250)] mb-3">65%</div>
                <p className="text-slate-600 text-sm">reduction in wait times</p>
              </div>

              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.20_0.05_250)] mb-3">85%</div>
                <p className="text-slate-600 text-sm">improvement in satisfaction</p>
              </div>

              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.20_0.05_250)] mb-3">1.5hrs</div>
                <p className="text-slate-600 text-sm">average wait time achieved</p>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.20_0.05_250)] mb-3">42%</div>
                <p className="text-slate-600 text-sm">increase in throughput</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  The patient flow platform transformed emergency department operations. Average wait times declined from 4.5 hours to 1.5 hours, a sixty-five percent improvement that moved the hospital from the bottom quartile to the top quartile nationally. Patient satisfaction scores increased by eighty-five percent, with particular improvements in perceptions of wait times and staff responsiveness. The hospital now consistently meets or exceeds regulatory benchmarks for treatment timeliness, eliminating a significant source of compliance risk.
                </p>

                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  The operational improvements extended beyond wait time reduction. The emergency department now treats forty-two percent more patients with the same physical capacity and staffing levels, as optimized patient flow eliminated the bottlenecks that previously limited throughput. Staff satisfaction improved markedly, with nurses and physicians reporting that automated coordination reduced frustration and enabled them to focus on patient care rather than administrative tasks. The predictive staffing capabilities reduced both understaffing during surge periods and overstaffing during slower times, improving both service quality and cost efficiency.
                </p>

                <p className="text-slate-600 text-lg leading-relaxed">
                  Perhaps most significantly, the platform established a foundation for continuous improvement in hospital operations. The success in the emergency department led to expansion throughout the hospital, with the patient flow platform now managing admissions, surgical scheduling, and discharge planning. The hospital has become a regional leader in operational excellence, attracting patients who value efficient, high-quality care. Other hospitals in the health system are adopting similar platforms, and the original implementation serves as a model for how technology can enhance rather than complicate healthcare delivery. The transformation demonstrated that even longstanding operational challenges can be addressed through thoughtful application of analytics and automation that respects clinical workflows and priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-6">
              Transform your hospital operations with patient flow optimization
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Discover how patient flow platforms can help your hospital reduce wait times, improve satisfaction, and increase throughput while maintaining HIPAA compliance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
