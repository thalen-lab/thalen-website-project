import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function StateAttorneyGeneral() {
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
            State Attorney General Prevents Estimated $50M+ in Fraud
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a state attorney general's office implemented AI-powered fraud detection with CJIS compliance, analyzing 2.3M cases and detecting 73% more fraud schemes to protect 12 million residents.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Consumer protection ranks among the most important responsibilities of state attorneys general, yet fraud schemes grow increasingly sophisticated as criminals leverage technology to operate at scale. A state attorney general's office responsible for protecting twelve million residents confronted this reality through a surge in consumer complaints about financial fraud, identity theft, and deceptive business practices. The office's consumer protection division received more than two hundred thousand complaints annually, but limited staff could investigate only a small fraction in depth. Meanwhile, sophisticated fraud schemes that victimized hundreds or thousands of consumers often remained undetected until substantial harm had occurred.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The challenge extended beyond simple volume. Traditional fraud detection relied on individual complaints reaching a threshold that triggered investigation, but modern fraud schemes deliberately operated below these thresholds to avoid detection. A scam that defrauded each victim of two hundred dollars might steal millions in aggregate while generating complaints that appeared isolated and unrelated. The office's investigators possessed deep expertise in identifying fraud patterns, but manual review of hundreds of thousands of complaints made it impossible to connect the dots across seemingly disparate cases. The attorney general estimated that undetected fraud cost state residents more than one hundred million dollars annually.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The attorney general's leadership recognized that artificial intelligence and advanced analytics could transform fraud detection. Machine learning algorithms could analyze all complaints simultaneously, identifying patterns and connections that would be invisible to manual review. The challenge required more than technical capability. Any solution needed to comply with Criminal Justice Information Services security requirements, integrate with existing case management systems, and support rather than replace the judgment of experienced investigators who would ultimately decide which cases warranted prosecution.
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
                The attorney general's office needed a platform that could analyze massive volumes of complaint data while meeting the strict security requirements for law enforcement systems. Working with Thalen Technologies, the office deployed a CJIS-compliant fraud detection platform that applied machine learning and network analysis to identify fraud schemes operating across the state. The platform integrated with the office's existing case management system, enriching complaint data with external information sources while maintaining the security controls required for handling criminal justice information.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The technical architecture leveraged multiple AI techniques to detect fraud patterns. Natural language processing analyzed complaint narratives to identify similar descriptions of fraudulent schemes even when victims used different terminology. Network analysis mapped relationships between complaints based on shared phone numbers, addresses, bank accounts, and other identifiers, revealing organized fraud operations that targeted multiple victims. Machine learning models trained on historical cases learned to predict which complaints likely represented serious fraud warranting immediate investigation. The platform generated risk scores and relationship maps that enabled investigators to quickly assess whether individual complaints represented isolated incidents or components of larger fraud schemes.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The implementation prioritized investigator workflow and decision-making authority. Rather than automating investigation decisions, the platform provided investigators with insights and recommendations that enhanced their ability to identify significant cases. Investigators could explore the relationships and patterns that the AI identified, applying their expertise to determine whether the evidence warranted further action. The system maintained comprehensive audit trails documenting how AI-generated insights influenced case decisions, providing the transparency required in law enforcement contexts.
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
                The fraud detection platform transformed the attorney general's consumer protection capabilities. The office now identifies seventy-three percent more fraud schemes than under manual review processes, detecting sophisticated operations that would have remained invisible using traditional methods. During the first two years of operation, investigations enabled by the platform prevented an estimated fifty million dollars in fraud through enforcement actions, restitution orders, and consumer warnings about active schemes. The platform's ability to detect fraud early in its lifecycle has substantially reduced the harm that schemes inflict before law enforcement intervention.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The operational improvements extended beyond fraud detection. Investigators report that AI-generated insights enable them to assess case significance much faster, allowing the office to prioritize resources toward cases with the greatest consumer impact. The platform identified several multi-state fraud operations that led to coordinated enforcement actions with other attorneys general, demonstrating how technology can enhance interstate cooperation on consumer protection. The office has expanded the platform to analyze complaints in additional areas including data privacy violations and unfair business practices, multiplying the initial investment's value.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Perhaps most significantly, the platform established the attorney general's office as a national leader in technology-enabled consumer protection. Other states have studied the implementation as a model for their own fraud detection initiatives, and the success has attracted additional resources and legislative support for consumer protection efforts. The transformation demonstrated that artificial intelligence can enhance rather than replace human judgment in law enforcement contexts, providing investigators with insights that enable more effective protection of consumers while respecting the discretion and expertise that experienced professionals bring to complex cases.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Enhance your fraud detection capabilities
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how AI-powered analytics can help your organization detect fraud schemes faster while maintaining compliance with law enforcement security requirements.
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
