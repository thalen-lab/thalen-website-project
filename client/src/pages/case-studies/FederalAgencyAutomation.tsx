import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumb from '@/components/Breadcrumb';

export default function FederalAgencyAutomation() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[oklch(0.18_0.06_250)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>

        <div className="container relative z-10">
          <Link href="/case-studies">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)] mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-8">Case Study</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white mb-8 leading-tight">
              Federal Agency Achieves 85% Process Automation
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              How a large federal agency transformed benefit processing through intelligent automation while maintaining the highest security standards
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Opportunity</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-[oklch(0.20_0.05_250)] leading-tight">
                A federal agency saw a chance to modernize operations without compromising security
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="leading-relaxed mb-6">
                One of the hallmarks of successful government agencies is their commitment to continuous improvement. No matter how well they serve their constituents, they are always looking to deliver better outcomes and prepare for the next challenge. A large federal agency processing over 50,000 benefit applications monthly exemplified this mindset. Although the agency maintained high accuracy standards and strong security protocols, leadership recognized that manual workflows were creating unnecessary delays and preventing staff from focusing on complex cases requiring human judgment.
              </p>

              <p className="leading-relaxed mb-6">
                The agency could see that automation technology was evolving rapidly, transforming operations across both private and public sectors. Staff spent 70 percent of their time on repetitive data entry and validation tasks, leading to processing delays of 45 to 60 days. As the agency's Chief Operations Officer noted, efficiency, accuracy, and technology adoption would become core attributes for future success in federal service delivery.
              </p>

              <p className="leading-relaxed">
                To secure its position in that future, the agency was determined to lead the adoption of intelligent automation. It aspired to reduce processing times for constituents, create a more engaging workplace for staff by eliminating tedious tasks, and establish a scalable foundation for handling future volume increases. The agency needed to accomplish all of this while maintaining strict TS/SCI compliance and FedRAMP High authorization requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Solution</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-[oklch(0.20_0.05_250)] leading-tight">
                The agency deployed intelligent automation to transform workflows while strengthening security
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="leading-relaxed mb-6">
                The agency needed to embrace automation technology to both improve existing operations and, more importantly, to create transformative new capabilities. A technology upgrade alone would not be enough. The agency also needed to evolve its operational culture by fundamentally changing how staff approached their work, making the entire organization more agile, faster at innovation, and far more efficient.
              </p>

              <p className="leading-relaxed mb-6">
                Working with NexDyne, the agency implemented a phased automation strategy using UiPath's FedRAMP-authorized robotic process automation platform. The approach prioritized high-volume, rules-based processes that could deliver immediate impact while building toward comprehensive workflow automation. The implementation began with establishing secure infrastructure and comprehensive audit logging, then expanded systematically across twelve additional workflows including data validation, document processing, and inter-system transfers.
              </p>

              <p className="leading-relaxed">
                The technical architecture connected the RPA platform to fifteen legacy systems, including COBOL mainframes, using secure API gateways. Custom middleware enabled seamless data flow while maintaining strict security boundaries. Role-based access controls and encrypted credential vaults ensured that automation enhanced rather than compromised security posture. Real-time monitoring dashboards provided visibility into bot performance, while exception handling workflows ensured human oversight remained integral to the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Impact</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.18_55)] mb-3">85%</div>
                <p className="text-slate-600 text-sm">manual workflows automated</p>
              </div>

              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.18_55)] mb-3">67%</div>
                <p className="text-slate-600 text-sm">reduction in processing time</p>
              </div>

              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.18_55)] mb-3">6 mo</div>
                <p className="text-slate-600 text-sm">return on investment timeline</p>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.18_55)] mb-3">$4.2M</div>
                <p className="text-slate-600 text-sm">total contract value</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none text-slate-600">
                <p className="leading-relaxed mb-6">
                  The automation platform now processes the majority of routine benefit applications without human intervention, reducing average processing time from 45 days to just 15 days. Staff who previously spent their time on data entry now focus on complex cases requiring nuanced judgment and direct constituent interaction. The agency has redeployed 120 full-time equivalents to higher-value work, including fraud detection, quality assurance, and process improvement initiatives.
                </p>

                <p className="leading-relaxed mb-6">
                  Error rates in data processing decreased by 94 percent, as automated validation eliminated the transcription mistakes inherent in manual data entry. The comprehensive audit logging actually strengthened the agency's security posture, providing unprecedented visibility into every system interaction. During the most recent security assessment, auditors noted that the automated workflows demonstrated better compliance with data handling procedures than previous manual processes.
                </p>

                <p className="leading-relaxed">
                  Perhaps most significantly, the agency established a foundation for continuous innovation. The RPA platform now serves as an integration layer connecting legacy systems to modern applications, enabling capabilities that would have required years of system replacement. Staff trained in automation development have created fifteen additional bots to address emerging needs, demonstrating that the transformation extended beyond technology to fundamentally change how the organization approaches operational challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-6">
              Ready to transform your operations?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Discover how intelligent automation can help your agency deliver better outcomes while maintaining the highest security standards.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
