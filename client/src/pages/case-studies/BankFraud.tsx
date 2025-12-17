import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'wouter';

// Define the statistics data structure for the clean grid
const statistics = [
  { value: '$45M', label: 'Fraud Losses Prevented' },
  { value: '80%', label: 'False Positive Reduction' },
  { value: '98.5%', label: 'Real-Time Detection Accuracy' },
  { value: '<100ms', label: 'Transaction Scoring Latency' },
];

export default function BankFraud() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 font-sans">
              Financial Services Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Implementing AI-Powered Fraud Detection to Protect a Major Financial Institution from $45 Million in Annual Losses
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 font-sans">
              A strategic deployment of real-time machine learning fraud detection reduced false positives by 80% while preventing $45 million in fraudulent transactions annually.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90 font-sans">
              <Download className="mr-2 h-5 w-5" />
              Download Full Case Study (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 font-sans">
            The Opportunity
          </p>
          <h2 className="text-4xl font-serif font-bold mb-8">
            Addressing Escalating Fraud and Customer Friction in Legacy Systems
          </h2>
          <div className="space-y-6 text-lg leading-relaxed font-sans">
            <p>
              A top-10 U.S. bank, managing over 500 million transactions annually, faced a critical challenge with escalating fraud losses, which had surpassed $60 million per year. The sophistication of modern financial crime, including synthetic identity fraud and account takeover schemes, was overwhelming their legacy systems, posing a significant threat to the institution's financial stability and reputation.
            </p>
            <p>
              The bank's existing rule-based fraud detection system was not only failing to keep pace with evolving threats but was also severely impacting customer experience. It generated an unacceptable 35% false positive rate, leading to the unwarranted decline of legitimate transactions and significant customer friction. This high rate of false alarms created operational inefficiencies and eroded customer trust.
            </p>
            <p>
              The institution required a comprehensive, modern fraud detection system that could operate in real-time—specifically, with sub-100ms latency—across its massive transaction volume. The solution needed to balance robust security with a seamless customer experience while adhering to strict regulatory compliance for model explainability and audit trails, a necessity in the highly regulated financial sector.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 font-sans">
            The Solution
          </p>
          <h2 className="text-4xl font-serif font-bold mb-8">
            Deploying a Multi-Model, Real-Time Machine Learning Architecture
          </h2>
          <div className="space-y-6 text-lg leading-relaxed font-sans">
            <p>
              The engagement began with the design and deployment of a multi-model machine learning architecture. This advanced system utilized an ensemble of specialized models, including gradient boosting, neural networks, and graph analytics, each optimized for distinct fraud typologies. A model stacking approach was implemented to synthesize the outputs for a final, highly accurate decision, moving beyond the limitations of single-model systems.
            </p>
            <p>
              Central to the solution was the development of a sophisticated behavioral analytics engine. This engine continuously analyzed over 200 features per transaction, incorporating device fingerprinting, geolocation patterns, and transaction velocity to establish a unique, real-time profile for every user. This shift from static rules to dynamic behavioral modeling was key to reducing false positives and accurately identifying anomalous behavior indicative of fraud.
            </p>
            <p>
              To meet the demanding performance requirements, a high-performance scoring infrastructure was deployed, capable of processing more than 15,000 transactions per second with the mandated sub-100ms latency. Furthermore, a SHAP-based Explainable AI (XAI) framework was integrated, providing human-readable reasons for every fraud decision. This transparency ensured regulatory compliance and empowered fraud analysts with the context needed for efficient case review.
            </p>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 font-sans">
            The Impact
          </p>
          <h2 className="text-4xl font-serif font-bold mb-12">
            Measurable Financial Protection and Enhanced Customer Experience
          </h2>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {statistics.map((metric, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-600 font-sans">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-lg leading-relaxed font-sans">
            <p>
              The implementation resulted in a substantial 75% reduction in annual fraud losses, preventing an estimated $45 million in fraudulent transactions within the first year of deployment. This immediate financial impact was complemented by a dramatic improvement in operational efficiency and, crucially, in the overall customer experience.
            </p>
            <p>
              The false positive rate was successfully reduced by 80%, dropping from the initial 35% to a mere 7%. This significant reduction directly translated into fewer legitimate transactions being declined, leading to a 28-point increase in customer satisfaction scores and a marked decrease in customer service inquiries related to declined cards.
            </p>
            <p>
              Beyond the financial and customer-facing metrics, the new platform fundamentally changed the bank's operational workflow. The integrated fraud analyst workbench, coupled with the XAI framework, reduced investigation time by 60%. This allowed the bank's security team to shift their focus from reviewing false alarms to proactively investigating sophisticated, high-value fraud cases, thereby maximizing the return on their security investment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Protect Your Institution from Evolving Financial Threats
          </h2>
          <p className="text-xl opacity-90 mb-8 font-sans">
            Discover how NexDyne's AI fraud detection solutions can reduce losses while dramatically improving customer experience and operational efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90 font-sans">
                Schedule a Fraud Risk Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-sans">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
