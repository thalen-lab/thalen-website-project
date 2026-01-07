import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function ManufacturingUptime() {
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
            Manufacturing Giant Achieves 99.2% Uptime
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a Fortune 500 manufacturer transformed operations through predictive maintenance and industrial cybersecurity across fifty facilities. The initiative eliminated 75% of unplanned downtime and delivered $18M in annual savings.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Manufacturing excellence depends on reliability. A Fortune 500 company operating more than fifty facilities across North America understood this principle intellectually, yet struggled to achieve it operationally. The organization experienced an average of eight percent unplanned downtime across its production lines, costing seventy-two million dollars annually in lost production, emergency repairs, and expedited shipping to meet customer commitments. Each unexpected equipment failure created cascading effects throughout the supply chain, damaging relationships with customers who depended on predictable delivery schedules.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The company's leadership recognized that the problem extended beyond aging equipment. The organization's maintenance practices remained fundamentally reactive, responding to failures rather than preventing them. Industrial control systems that managed production lines lacked adequate cybersecurity protections, creating vulnerabilities that could enable both accidental disruptions and deliberate attacks. The company needed to transform its approach to operational technology, embracing predictive maintenance and modern security practices that would prevent problems rather than merely responding to them.
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
                The manufacturer needed a comprehensive solution that addressed both the technical and cultural dimensions of the reliability challenge. Working with NexDyne Technology, the organization deployed an integrated platform combining industrial cybersecurity, IoT sensor networks, and artificial intelligence-powered predictive maintenance. The implementation began with a detailed assessment of equipment health, maintenance practices, and cybersecurity posture across all facilities, establishing baselines that would measure progress and identify priorities.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The technical architecture deployed thousands of sensors across critical equipment, monitoring vibration, temperature, pressure, and other indicators that signal impending failures. Machine learning models trained on the company's historical maintenance data learned to recognize patterns that preceded equipment problems, enabling maintenance teams to intervene before failures occurred. The platform integrated with existing enterprise resource planning and computerized maintenance management systems, automatically generating work orders when predictive models identified equipment requiring attention.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The cybersecurity component established defense-in-depth protections for industrial control systems. Network segmentation isolated operational technology from corporate IT networks, preventing potential attackers from pivoting between environments. Continuous monitoring detected anomalous behavior that might indicate compromise, while incident response procedures ensured rapid containment if threats emerged. The security architecture met the requirements of the NIST Cybersecurity Framework and industry-specific standards for critical infrastructure protection.
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
                The transformation fundamentally changed how the manufacturer operates. Unplanned downtime decreased by seventy-five percent, with system uptime reaching 99.2 percent across all facilities. Maintenance teams shifted from fighting fires to preventing them, using predictive insights to schedule interventions during planned maintenance windows rather than responding to emergency failures. This shift improved both equipment reliability and maintenance team morale, as technicians could take pride in preventing problems rather than merely reacting to crises.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The financial impact exceeded initial projections. The reduction in unplanned downtime saved eighteen million dollars annually in direct costs, while improved reliability enabled the company to accept additional customer commitments that generated substantial new revenue. Equipment lifespan increased by an average of thirty percent as predictive maintenance prevented the cascading damage that occurs when minor problems go unaddressed. The cybersecurity improvements eliminated several potential attack vectors and positioned the company to meet increasingly stringent customer requirements for supply chain security.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Perhaps most significantly, the transformation established a foundation for continuous improvement and competitive differentiation. The predictive maintenance platform generates insights that inform equipment purchasing decisions, capital planning, and operational strategy. Other manufacturers have studied the implementation as a model for their own digital transformation initiatives. The company has leveraged its operational excellence to win business from competitors who cannot match its reliability and delivery performance, demonstrating that investments in operational technology deliver strategic value beyond cost reduction.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Ready to enhance your manufacturing operations?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Learn how our industrial solutions can drive efficiency and reliability in your manufacturing environment through predictive maintenance and cybersecurity.
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
