import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function EnergyGrid() {
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
            Energy Company Deploys Major Smart Grid Initiative
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a major regional utility modernized energy infrastructure serving 8M customers with real-time monitoring and automated response systems. The AI-powered grid optimization reduced outages by 60% while improving renewable energy integration to 45%.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                A major regional utility, responsible for serving over three million customers across a vast 50,000 square mile service territory, faced a critical challenge with its aging infrastructure. Decades of operation had resulted in a grid with limited real-time visibility and reliance on manual processes. This foundational deficit led directly to frequent service interruptions and protracted restoration times, creating a significant operational burden and eroding customer trust.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Compounding the infrastructure challenge was the utility's commitment to integrating a rapidly increasing volume of intermittent renewable energy sources, such as solar and wind. The existing grid architecture was not designed to manage the unpredictable supply fluctuations inherent in these sources, leading to complex grid stability issues. This technical complexity threatened to undermine both reliability targets and the utility's sustainability goals. Leadership recognized that comprehensive modernization was essential to meet customer expectations and regulatory requirements while positioning the organization for a sustainable energy future.
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
                Working with Thalen Technologies, the utility designed and deployed a holistic, AI-driven smart grid ecosystem. The initial phase involved establishing a foundational layer of intelligence through the deployment of over 50,000 smart meters and 2,000 grid sensors. This massive IoT infrastructure provided the utility with unprecedented, real-time visibility into grid conditions, load patterns, and equipment health, transforming a previously opaque system into a transparent, data-rich environment.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Building upon this data foundation, the team implemented advanced machine learning models for AI-powered grid optimization. These models were engineered to perform highly accurate load forecasting and automated grid balancing, optimizing power flow in real-time to manage the inherent variability of renewable energy sources. Crucially, this system included automated fault detection and isolation capabilities, enabling the grid to identify and self-heal localized issues within seconds, drastically minimizing the scope and duration of service disruptions.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The implementation also established a centralized grid operations center with advanced visualization and decision support tools. Operators gained the ability to monitor grid conditions across the entire service territory in real time, with AI-generated recommendations for optimal response to emerging situations. The platform integrated with existing utility systems including outage management, customer information, and workforce management, creating a unified operational environment that improved coordination and response effectiveness.
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
                The implementation of the AI-powered smart grid yielded immediate and transformative results across the utility's operations and customer experience. The most significant outcome was a 60% reduction in the System Average Interruption Duration Index (SAIDI), moving the utility from 240 minutes to a best-in-class 96 minutes. This dramatic improvement in reliability was directly supported by a 75% reduction in average restoration time, a testament to the effectiveness of the automated fault detection and isolation systems.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Beyond reliability, the modernization initiative delivered substantial financial and environmental benefits. Operational efficiency gains, driven by predictive maintenance and optimized power flow, resulted in an estimated $85 million in annual savings. Furthermore, the advanced grid management capabilities successfully enabled the utility to increase its renewable energy mix from 12% to 45%, demonstrating a clear pathway to meeting ambitious sustainability targets without compromising grid stability.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The transformation has positioned the utility as an industry leader in grid modernization. Regulatory bodies have cited the implementation as a model for other utilities undertaking similar initiatives. Customer satisfaction scores improved significantly as service reliability increased and the utility demonstrated its commitment to environmental sustainability. The smart grid platform continues to generate value through ongoing optimization and the integration of new capabilities, establishing a foundation for continued innovation in energy delivery.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Modernize your critical infrastructure
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how our intelligent infrastructure solutions can improve reliability, enable sustainability, and drive operational savings for your organization.
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
