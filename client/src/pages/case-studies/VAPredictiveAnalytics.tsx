import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function VAPredictiveAnalytics() {
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
            VA Reduces Claims Processing Time 60% with Predictive Analytics
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How the Department of Veterans Affairs deployed machine learning to prioritize disability claims, processing 2M+ claims annually with 95% accuracy and delivering $8.2M in operational savings.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                The Department of Veterans Affairs faced a significant and growing challenge in managing the volume of disability compensation claims. With a backlog exceeding 400,000 cases, the average processing time had ballooned to over 180 days. This delay created substantial hardship for veterans awaiting crucial benefits they had earned through their service, leading to widespread frustration and a decline in trust in the VA's ability to deliver timely support. The core issue was a manual, first-in, first-out workflow that could not adapt to the complexity of modern claims.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The traditional claims adjudication process relied heavily on human review, where staff manually evaluated extensive medical records, service histories, and supporting documentation. This approach treated every claim equally, regardless of its inherent complexity or the urgency of the veteran's situation. Consequently, simple claims that could be resolved quickly were often delayed for months, trapped behind highly complex cases that required extensive research, inter-departmental coordination, and specialized medical expertise.
              </p>
              <p className="text-slate-600 leading-relaxed">
                To address this systemic inefficiency, the VA recognized the imperative to adopt a data-driven strategy. The goal was to implement a solution that could intelligently triage incoming claims, accurately predict their processing complexity, and dynamically route them to the most appropriate adjudicators. This modernization effort was essential not only to reduce the backlog and processing times but also to ensure the continued accuracy, fairness, and integrity of benefit determinations for all veterans.
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
                NexDyne Technology partnered with the VA to design and deploy a comprehensive Predictive Analytics solution centered on a machine learning-driven claims prioritization engine. The initial phase involved building sophisticated models trained on over 12 million historical claims. These models analyze incoming submissions against 47 key variables—including claimed conditions, completeness of medical evidence, service history patterns, and past adjudication outcomes—to assign a real-time complexity score to each claim within seconds of its arrival.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The core innovation was the development of an intelligent claim routing system. This system leverages the predictive complexity score to automatically match claims with the most suitable adjudicators based on their specific expertise, current workload, and historical performance metrics. Simple, low-complexity claims are fast-tracked to specialized teams for rapid resolution, often within days. Conversely, highly complex cases are routed to senior adjudicators with relevant medical and legal expertise, ensuring they receive the necessary attention without delaying simpler cases.
              </p>
              <p className="text-slate-600 leading-relaxed">
                To further enhance efficiency and decision quality, the team integrated a real-time Decision Support Dashboard. This tool provides adjudicators with instant access to relevant case precedents, medical research, and automated evidence checklists. By surfacing similar past cases and flagging potential issues, the system drastically reduces the time spent on research and quality assurance, transforming a process that once took hours into a matter of minutes. This holistic approach ensures that every veteran's claim is handled with the appropriate speed and expertise.
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
                The implementation of the Predictive Analytics engine yielded immediate and profound results for the Department of Veterans Affairs and the veterans they serve. The most critical metric—average claim processing time—saw a dramatic reduction from 180 days down to 72 days, a 60% improvement. This acceleration means veterans are receiving their earned benefits significantly faster, directly alleviating financial and emotional stress. Furthermore, the system successfully triages simple claims, which are now resolved in under 30 days, while ensuring complex cases are not rushed and receive the full attention of senior, specialized staff.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Operational efficiency also saw a massive boost. The VA is now capable of processing 475,000 claims annually, an increase of 125,000 cases from the previous baseline of 350,000, all without increasing the size of the adjudication staff. This increase in throughput has been instrumental in tackling the long-standing backlog, which has been reduced by 68% and continues to trend downward. The ability to manage higher volumes with existing resources translates directly into substantial financial benefits for the agency.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Beyond the quantitative metrics, the project has restored a crucial element of trust and service quality. The efficiency gains resulted in an estimated $8.2 million in annual operational cost savings, primarily by avoiding the need to hire 45 additional full-time adjudicators. Most importantly, the focus on faster, more accurate service delivery has been reflected in veteran feedback, with the overall satisfaction score rising to 94%. This case demonstrates the transformative power of applying advanced data science to mission-critical government services.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Transform your claims processing
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how predictive analytics and AI solutions can help your agency reduce backlogs, optimize resource allocation, and deliver superior service.
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
