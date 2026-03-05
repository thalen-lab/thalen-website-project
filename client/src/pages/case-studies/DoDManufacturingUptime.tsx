import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function DoDManufacturingUptime() {
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
            How FedRAMP-authorized cybersecurity platforms and predictive maintenance analytics transformed defense manufacturing operations, eliminating 75% of unplanned downtime while achieving CMMC Level 3 certification.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                A critical DoD manufacturing facility producing defense components was experiencing frequent unplanned equipment failures that disrupted production schedules and threatened mission-critical supply chains. The facility operated 24/7 with aging equipment and relied on reactive maintenance that resulted in costly emergency repairs and production delays. Equipment downtime averaged 18-22% annually, with each incident requiring 12-48 hours for diagnosis and repair.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The facility needed to modernize maintenance operations while meeting strict DoD cybersecurity requirements including CMMC Level 3 certification for handling Controlled Unclassified Information. Leadership recognized that predictive maintenance technology had matured to the point where it could transform their operations, but implementation would require careful attention to security requirements and integration with legacy industrial control systems.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The stakes were significant. Production delays at this facility had downstream effects on defense programs across multiple branches of the military. The facility needed to achieve near-continuous operations while maintaining air-gapped network segments for classified operations and ensuring all systems met the stringent requirements for handling CUI.
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
                Working with Thalen Technologies, the facility implemented a comprehensive predictive maintenance platform using FedRAMP-authorized IoT and analytics tools. The approach enabled the facility to shift from reactive to proactive maintenance while meeting all DoD cybersecurity requirements. The implementation began with a thorough equipment criticality analysis that identified 45 high-priority assets and established baseline performance metrics from historical failure data.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The technical infrastructure included deployment of over 200 industrial IoT sensors monitoring vibration, temperature, pressure, and power consumption across critical equipment. Edge computing capabilities enabled real-time data processing while maintaining CMMC-compliant data collection and transmission protocols. The sensor network fed into machine learning models that analyzed 50 million data points daily to predict failures 7-14 days in advance.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Security architecture received particular attention throughout the implementation. The platform achieved CMMC Level 3 compliance with encrypted data transmission, role-based access control, and comprehensive audit logging. Integration with existing CMMS, ERP, and supply chain systems enabled automated work order generation when the predictive models identified potential issues. Real-time dashboards provided maintenance teams with mobile alerts, while the air-gapped network segments for classified operations remained completely isolated.
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
                The predictive maintenance platform transformed facility operations, achieving 99.2% equipment uptime compared to the previous 78-82% baseline. Unplanned downtime decreased by 78%, with the remaining incidents typically resolved within 2-4 hours rather than the previous 12-48 hour average. The facility now schedules maintenance during planned production windows, eliminating the cascade effects that previously disrupted defense supply chains.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Maintenance costs decreased by 45% as the facility shifted from emergency repairs to planned interventions. The predictive models proved remarkably accurate, identifying potential failures with sufficient lead time to order parts and schedule technicians without disrupting production. Spare parts inventory optimization reduced carrying costs while ensuring critical components remained available when needed.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The successful CMMC Level 3 certification validated the security architecture and positioned the facility as a model for other DoD manufacturing operations. The platform now serves as a foundation for additional capabilities including digital twin modeling and advanced analytics. Most importantly, the facility has established the operational resilience required to support mission-critical defense programs with confidence.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Ready to achieve operational excellence?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how predictive maintenance and IoT analytics can transform your manufacturing operations while meeting the most stringent security requirements.
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
