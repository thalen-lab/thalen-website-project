import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function BankFraud() {
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
            Bank Prevents $45M in Fraud with AI
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a top-10 U.S. bank deployed real-time machine learning fraud detection that reduced false positives by 80% while preventing $45 million in fraudulent transactions annually. The system analyzes 50M+ transactions daily with 99.7% accuracy and sub-second response times.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                A top-10 U.S. bank, managing over 500 million transactions annually, faced a critical challenge with escalating fraud losses, which had surpassed $60 million per year. The sophistication of modern financial crime, including synthetic identity fraud and account takeover schemes, was overwhelming their legacy systems, posing a significant threat to the institution's financial stability and reputation.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The bank's existing rule-based fraud detection system was not only failing to keep pace with evolving threats but was also severely impacting customer experience. It generated an unacceptable 35% false positive rate, leading to the unwarranted decline of legitimate transactions and significant customer friction. This high rate of false alarms created operational inefficiencies and eroded customer trust.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The institution required a comprehensive, modern fraud detection system that could operate in real-time—specifically, with sub-100ms latency—across its massive transaction volume. The solution needed to balance robust security with a seamless customer experience while adhering to strict regulatory compliance for model explainability and audit trails, a necessity in the highly regulated financial sector.
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
                Working with NexDyne Technology, the bank designed and deployed a multi-model machine learning architecture. This advanced system utilized an ensemble of specialized models, including gradient boosting, neural networks, and graph analytics, each optimized for distinct fraud typologies. A model stacking approach was implemented to synthesize the outputs for a final, highly accurate decision, moving beyond the limitations of single-model systems.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Central to the solution was the development of a sophisticated behavioral analytics engine. This engine continuously analyzed over 200 features per transaction, incorporating device fingerprinting, geolocation patterns, and transaction velocity to establish a unique, real-time profile for every user. This shift from static rules to dynamic behavioral modeling was key to reducing false positives and accurately identifying anomalous behavior indicative of fraud.
              </p>
              <p className="text-slate-600 leading-relaxed">
                To meet the demanding performance requirements, a high-performance scoring infrastructure was deployed, capable of processing more than 15,000 transactions per second with the mandated sub-100ms latency. Furthermore, a SHAP-based Explainable AI (XAI) framework was integrated, providing human-readable reasons for every fraud decision. This transparency ensured regulatory compliance and empowered fraud analysts with the context needed for efficient case review.
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
                The implementation resulted in a substantial 75% reduction in annual fraud losses, preventing an estimated $45 million in fraudulent transactions within the first year of deployment. This immediate financial impact was complemented by a dramatic improvement in operational efficiency and, crucially, in the overall customer experience.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The false positive rate was successfully reduced by 80%, dropping from the initial 35% to a mere 7%. This significant reduction directly translated into fewer legitimate transactions being declined, leading to a 28-point increase in customer satisfaction scores and a marked decrease in customer service inquiries related to declined cards.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Beyond the financial and customer-facing metrics, the new platform fundamentally changed the bank's operational workflow. The integrated fraud analyst workbench, coupled with the XAI framework, reduced investigation time by 60%. This allowed the bank's security team to shift their focus from reviewing false alarms to proactively investigating sophisticated, high-value fraud cases, thereby maximizing the return on their security investment.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Protect your institution from evolving financial threats
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how our AI fraud detection solutions can reduce losses while dramatically improving customer experience and operational efficiency.
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
