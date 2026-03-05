import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function AerospaceDigitalTwin() {
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
            Aerospace Contractor Implements Digital Twin
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a comprehensive digital twin platform enabled predictive maintenance across a fleet of 250+ aircraft, reducing design costs by 40% and accelerating time-to-market by 6 months for next-generation aircraft development. The platform delivered an estimated $95 million in annual operational savings.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                A leading aerospace and defense organization, managing a vast fleet of commercial aircraft, faced a critical challenge: escalating maintenance expenditures estimated at over $240 million annually. The reliance on traditional, time-based maintenance schedules led to unnecessary component replacements, excessive downtime, and a high operational cost base.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                This reactive approach was further complicated by frequent, unscheduled maintenance events. These unexpected failures severely disrupted flight schedules, negatively impacting service delivery and creating significant logistical strain. The lack of foresight into component health meant the organization was constantly reacting to failures rather than proactively preventing them.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The imperative was clear: transition from a costly, reactive maintenance model to a data-driven, predictive framework. The organization required a sophisticated, integrated platform capable of providing real-time fleet health monitoring and accurate forecasting of component degradation to optimize maintenance windows and maximize asset utilization.
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
                Working with NexDyne Technology, a comprehensive digital twin platform was engineered and deployed across the entire fleet of over 250 aircraft. This solution created high-fidelity virtual replicas of each asset, integrating vast streams of real-time sensor telemetry with advanced physics-based models to simulate wear and fatigue under actual operating conditions.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The core of the solution was a sophisticated predictive maintenance engine powered by machine learning. This engine analyzed over 10,000 sensor streams per aircraft, enabling the accurate forecasting of component failures 30 to 90 days in advance with an 89% prediction accuracy. This foresight allowed maintenance teams to move from emergency repairs to planned, optimized interventions.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Furthermore, the project established a unified data platform, consolidating siloed information from maintenance records, flight operations, and supply chain logistics. This holistic data view, coupled with optimization algorithms, allowed for the intelligent scheduling of maintenance activities, minimizing operational disruption while ensuring maximum safety and component life.
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
                The implementation of the digital twin platform delivered immediate and substantial financial returns. Maintenance costs were reduced by a remarkable 40%, translating to an estimated annual operational saving of $95 million. This rapid return on investment was achieved by eliminating unnecessary maintenance tasks and optimizing the timing of essential repairs.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Operational reliability saw a dramatic improvement, with unscheduled maintenance events plummeting by 70%. By accurately predicting and preventing failures, the organization significantly enhanced its service delivery consistency and reduced the logistical complexity associated with unexpected groundings. Aircraft availability improved by 12%, enabling more efficient utilization of the fleet.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The strategic shift to predictive maintenance also accelerated new aircraft development timelines by six months. With a comprehensive, data-driven view of fleet health and component performance, the aerospace organization is now operating with greater efficiency, reduced risk, and a significantly lower total cost of ownership for its critical assets. The platform has become a foundational capability for ongoing innovation in aircraft design and operations.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Partner with us for predictive maintenance excellence
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how our digital twin solutions can transform your operational efficiency, reduce costs, and enhance the reliability of your most critical assets.
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
