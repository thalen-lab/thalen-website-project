import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function FederalAgencyAutomation() {
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
            How a large federal agency transformed benefit processing through intelligent automation, reducing processing time by 67% and delivering an estimated $4.2M ROI in just 6 months while maintaining TS/SCI compliance.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                One of the hallmarks of successful government agencies is their commitment to continuous improvement. No matter how well they serve their constituents, they are always looking to deliver better outcomes and prepare for the next challenge. A large federal agency processing over 50,000 benefit applications monthly exemplified this mindset. Although the agency maintained high accuracy standards and strong security protocols, leadership recognized that manual workflows were creating unnecessary delays and preventing staff from focusing on complex cases requiring human judgment.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The agency could see that automation technology was evolving rapidly, transforming operations across both private and public sectors. Staff spent 70 percent of their time on repetitive data entry and validation tasks, leading to processing delays of 45 to 60 days. As the agency's Chief Operations Officer noted, efficiency, accuracy, and technology adoption would become core attributes for future success in federal service delivery.
              </p>
              <p className="text-slate-600 leading-relaxed">
                To secure its position in that future, the agency was determined to lead the adoption of intelligent automation. It aspired to reduce processing times for constituents, create a more engaging workplace for staff by eliminating tedious tasks, and establish a scalable foundation for handling future volume increases. The agency needed to accomplish all of this while maintaining strict TS/SCI compliance and FedRAMP High authorization requirements.
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
                The agency needed to embrace automation technology to both improve existing operations and, more importantly, to create transformative new capabilities. A technology upgrade alone would not be enough. The agency also needed to evolve its operational culture by fundamentally changing how staff approached their work, making the entire organization more agile, faster at innovation, and far more efficient.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Working with Thalen Technologies, the agency implemented a phased automation strategy using UiPath's FedRAMP-authorized robotic process automation platform. The approach prioritized high-volume, rules-based processes that could deliver immediate impact while building toward comprehensive workflow automation. The implementation began with establishing secure infrastructure and comprehensive audit logging, then expanded systematically across twelve additional workflows including data validation, document processing, and inter-system transfers.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The technical architecture connected the RPA platform to fifteen legacy systems, including COBOL mainframes, using secure API gateways. Custom middleware enabled seamless data flow while maintaining strict security boundaries. Role-based access controls and encrypted credential vaults ensured that automation enhanced rather than compromised security posture. Real-time monitoring dashboards provided visibility into bot performance, while exception handling workflows ensured human oversight remained integral to the process.
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
                The automation platform now processes the majority of routine benefit applications without human intervention, reducing average processing time from 45 days to just 15 days. Staff who previously spent their time on data entry now focus on complex cases requiring nuanced judgment and direct constituent interaction. The agency has redeployed 120 full-time equivalents to higher-value work, including fraud detection, quality assurance, and process improvement initiatives.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Error rates in data processing decreased by 94 percent, as automated validation eliminated the transcription mistakes inherent in manual data entry. The comprehensive audit logging actually strengthened the agency's security posture, providing unprecedented visibility into every system interaction. During the most recent security assessment, auditors noted that the automated workflows demonstrated better compliance with data handling procedures than previous manual processes.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Perhaps most significantly, the agency established a foundation for continuous innovation. The RPA platform now serves as an integration layer connecting legacy systems to modern applications, enabling capabilities that would have required years of system replacement. Staff trained in automation development have created fifteen additional bots to address emerging needs, demonstrating that the transformation extended beyond technology to fundamentally change how the organization approaches operational challenges.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Ready to transform your operations?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how intelligent automation can help your agency deliver better outcomes while maintaining the highest security standards.
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
