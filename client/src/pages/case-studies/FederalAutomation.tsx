import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function FederalAutomation() {
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
            Federal Agency Achieves 85% Process Automation
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a federal agency implemented UiPath RPA platform with FedRAMP authorization, automating 85% of manual workflows while maintaining TS/SCI compliance. The initiative delivered an estimated $4.2M in annual savings with a six-month return on investment.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Federal agencies face mounting pressure to deliver more services with constrained budgets and staffing. A mid-sized federal agency responsible for critical national security functions confronted this reality through thousands of hours spent on repetitive manual tasks. Staff members manually transferred data between systems, prepared routine reports, and processed standard requests following well-defined procedures. These tasks consumed time that could have been devoted to higher-value analytical work and mission-critical activities. The agency estimated that manual processes consumed forty percent of staff time while contributing minimal value to mission outcomes.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The challenge extended beyond simple inefficiency. Manual data entry introduced errors that propagated through downstream systems, creating quality issues that required additional staff time to identify and correct. Processing delays frustrated both internal users and external stakeholders who depended on timely information. The agency's leadership understood that hiring additional staff was neither feasible nor sustainable given budget constraints. Instead, they recognized that robotic process automation could handle routine tasks with greater speed and accuracy than manual processing, freeing staff to focus on work that required human judgment and expertise.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The agency's Chief Information Officer championed an automation initiative designed to transform operations while maintaining the strict security controls required for handling classified information. Any solution needed FedRAMP authorization to operate in the agency's cloud environment, support for Top Secret/Sensitive Compartmented Information clearance requirements, and integration capabilities that would enable automation across the agency's complex technology landscape. The initiative represented a fundamental shift in how the agency approached operations, moving from manual execution to automated processing with human oversight for exceptions and complex cases.
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
                The agency needed an automation platform that could handle the technical complexity of its environment while meeting stringent security requirements. Working with Thalen Technologies, the agency deployed UiPath's FedRAMP-authorized robotic process automation platform, establishing the infrastructure and governance processes needed to automate workflows at scale. The implementation followed a phased approach that prioritized high-volume, rules-based processes where automation could deliver immediate value while building organizational capabilities for more complex automation over time.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The technical architecture deployed software robots that mimicked human interactions with existing systems, eliminating the need for costly system integration or replacement. These robots logged into applications, extracted and transformed data, executed business rules, and updated systems following the same procedures that staff had performed manually. The platform's orchestration capabilities enabled complex workflows that spanned multiple systems and required coordination across different process steps. Advanced exception handling ensured that robots escalated cases requiring human judgment while processing routine transactions automatically. The solution maintained comprehensive audit logging that tracked every action taken by automated processes, providing the transparency required in a classified environment.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The implementation prioritized change management and workforce development alongside technical deployment. The agency established a center of excellence that trained staff to identify automation opportunities, design efficient workflows, and oversee robot performance. Rather than viewing automation as a threat to employment, staff embraced the technology as a tool that eliminated tedious work and enabled them to focus on more interesting and impactful activities. The FedRAMP authorization and TS/SCI compliance ensured that automation could extend to the agency's most sensitive workflows, maximizing the initiative's impact on mission effectiveness.
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
                The automation initiative transformed agency operations. Eighty-five percent of previously manual workflows now execute automatically, processing transactions with ninety-nine-point-seven percent accuracy compared to ninety-two percent accuracy under manual processing. Processing time for routine requests decreased from an average of three days to less than one hour, dramatically improving service delivery to internal and external stakeholders. The agency now processes forty-three percent more transactions with the same staffing levels, as automation eliminated the capacity constraints that previously limited throughput.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The financial benefits exceeded initial projections. The agency achieved return on investment in just six months, with annual cost savings of four-point-two million dollars through reduced processing time, eliminated overtime, and improved accuracy that reduced rework. More importantly, staff members report higher job satisfaction as they focus on analytical work and complex cases rather than repetitive data entry. The agency has redeployed staff from routine processing to mission-critical activities, directly enhancing its ability to fulfill its national security responsibilities.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Perhaps most significantly, the automation platform established a foundation for continuous operational improvement. The center of excellence has identified and automated more than two hundred distinct workflows, with new automation opportunities emerging as staff become more adept at recognizing processes suitable for robotic execution. Other federal agencies have studied the implementation as a model for their own automation initiatives, and the success has positioned the agency as a leader in federal technology modernization. The transformation demonstrated that even organizations handling the most sensitive information can leverage automation to enhance both efficiency and mission effectiveness when security controls are properly designed and implemented.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Transform your agency with intelligent automation
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how FedRAMP-authorized RPA can help your agency automate workflows, reduce costs, and free staff for higher-value work while maintaining security controls.
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
