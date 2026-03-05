import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function DoDManufacturing() {
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
            DoD Manufacturing Facility Achieves 99.2% Uptime
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How FedRAMP-authorized cybersecurity platforms and IoT-powered predictive maintenance across 50 production lines eliminated 75% of unplanned downtime while achieving CMMC Level 3 certification and delivering an estimated $12.5M in annual savings.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                A Department of Defense manufacturing facility producing critical defense components across 50 production lines experienced 150+ unplanned downtime incidents annually. The facility's aging industrial control systems, some over 15 years old, lacked predictive maintenance capabilities and had significant cybersecurity vulnerabilities. Unplanned downtime disrupted mission-critical production schedules, threatened delivery commitments, and cost an estimated $18 million annually in lost production and emergency repairs.
              </p>
              <p className="text-slate-600 leading-relaxed">
                NexDyne Technology was awarded a contract through DoD's IDIQ vehicle to modernize the facility's cybersecurity posture, implement predictive maintenance analytics, and achieve CMMC Level 3 certification. The solution would eliminate unplanned downtime, provide real-time operational visibility, and ensure compliance with stringent defense cybersecurity requirements.
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
                NexDyne Technology deployed FedRAMP-authorized cybersecurity platforms with zero-trust network architecture and continuous monitoring specifically designed for ICS/SCADA environments. The implementation included zero-trust network architecture with micro-segmentation, FedRAMP-authorized endpoint protection on all industrial control systems, and continuous monitoring with SIEM integration for real-time threat detection.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The team deployed IoT sensors across all 50 production lines with machine learning-powered predictive maintenance analytics. Over 2,500 IoT sensors were installed monitoring vibration, temperature, and pressure across critical equipment. The system achieved 94% accuracy in predicting equipment failures 72 hours in advance, enabling maintenance teams to schedule repairs during planned downtime rather than responding to emergency situations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The comprehensive approach addressed both cybersecurity and operational efficiency simultaneously. Real-time dashboards provided facility leadership with complete visibility into equipment health, production status, and security posture. Automated alerting ensured rapid response to both emerging equipment issues and potential security threats.
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
                The implementation delivered transformative results for the manufacturing facility. System uptime improved to 99.2%, with unplanned downtime incidents reduced by 75%—from 150+ annually to just 38. The 72-hour advance warning for equipment failures allowed maintenance to be scheduled during planned downtime, eliminating the emergency repairs that had previously disrupted production schedules.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Financial impact was substantial, with an estimated $12.5 million in annual savings achieved through reduced emergency repairs, improved production efficiency, and optimized maintenance scheduling. The facility successfully achieved CMMC Level 3 certification, meeting all stringent defense cybersecurity requirements and maintaining eligibility for defense contracts.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The facility director noted that the predictive maintenance platform transformed manufacturing operations, enabling the shift from reactive emergency response to proactive maintenance planning. The success has led to discussions about expanding the implementation to additional DoD manufacturing facilities, establishing a model for defense industrial base modernization.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Modernize your manufacturing operations
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Learn how we can help your facility achieve operational excellence, implement predictive maintenance, and achieve CMMC compliance.
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
