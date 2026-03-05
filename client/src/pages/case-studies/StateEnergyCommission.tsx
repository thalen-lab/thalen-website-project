import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function StateEnergyCommission() {
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
            State Energy Commission Reduces Grid Outages 65%
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a StateRAMP-authorized IoT platform monitoring 500+ substations with 15,000+ sensors enabled predictive maintenance that reduced outages by 65% for 8.5 million residents and delivered an estimated $12M in annual savings.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                A state Energy Commission serving 8.5 million residents faced increasing grid outages due to aging infrastructure and reactive maintenance practices. The commission manually monitored 500+ substations across the state with no early warning system for equipment failures. Outages disrupted businesses, affected critical services, and cost the state economy an estimated $45 million annually. Emergency repairs were expensive and time-consuming, while residents experienced extended power disruptions.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The challenges were compounded by the complexity of the existing infrastructure. Field technicians performed reactive inspections, often missing early warning signs of equipment degradation. When failures occurred, they happened unexpectedly, extending restoration times and increasing costs. The commission needed a solution that could provide predictive capabilities while meeting StateRAMP authorization requirements for state data security and integrating with legacy SCADA systems.
              </p>
              <p className="text-slate-600 leading-relaxed">
                NexDyne Technology was selected through a competitive state procurement process to design and implement a StateRAMP-authorized IoT platform for real-time grid monitoring and predictive maintenance. The solution would deploy 15,000+ sensors across 500+ substations, integrate with legacy SCADA systems, and use machine learning to predict equipment failures weeks in advance.
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
                NexDyne Technology deployed a StateRAMP-authorized cloud platform on Azure Government with 15,000+ IoT sensors across 500+ substations, collecting real-time data on temperature, vibration, load, and equipment health. The implementation achieved NERC CIP compliance for critical infrastructure protection while establishing secure data pipelines with encryption and access controls.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Machine learning models were developed using five years of historical maintenance and outage data. The models achieved 89% accuracy in predicting equipment failures 2-4 weeks in advance, enabling proactive maintenance scheduling during planned downtime windows. This predictive capability reduced emergency repairs by 78% through early failure detection and prevented 65% of potential outages through proactive interventions.
              </p>
              <p className="text-slate-600 leading-relaxed">
                A comprehensive monitoring dashboard using Power BI Gov provided real-time visualization of grid health across all substations. Automated alerting for equipment anomalies and threshold violations ensured rapid response. A mobile app for field technicians integrated with work order systems, reducing average fault detection and response time by 45 minutes. Legacy SCADA systems were integrated using secure APIs and data transformation pipelines, preserving existing operational workflows while adding modern predictive capabilities.
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
                The platform delivered transformative results for grid reliability and operational efficiency. Grid outages decreased by 65% through predictive maintenance interventions, significantly improving service reliability for 8.5 million residents. The 89% prediction accuracy enabled the commission to shift from reactive emergency repairs to planned maintenance, reducing costs and minimizing service disruptions.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Financial impact was substantial, with an estimated $12 million in annual savings achieved through reduced emergency repairs, optimized maintenance scheduling, and prevented outages. The economic benefit to the state extended beyond direct savings, as improved grid reliability reduced business disruptions and supported economic growth across the service area.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The success has positioned the commission as a leader in smart grid modernization. The StateRAMP-authorized platform serves as a model for other state energy agencies seeking to improve grid reliability through predictive analytics. The integration approach demonstrated that modern IoT and analytics capabilities can be added to legacy infrastructure without disrupting existing operations, providing a pathway for other utilities facing similar modernization challenges.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Modernize your grid infrastructure
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how IoT and predictive analytics can improve grid reliability while meeting state security requirements and integrating with your existing systems.
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
