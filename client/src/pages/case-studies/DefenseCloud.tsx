import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function DefenseCloud() {
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
            Defense Contractor Achieves Zero-Downtime Cloud Migration
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How a major defense contractor modernized its entire infrastructure while maintaining continuous operations and achieving CMMC Level 3 certification. The 18-month migration delivered an estimated $4.5M in annual savings with zero downtime maintained throughout.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Defense contractors operate in an environment where technological capability directly determines competitive advantage. A major contractor with more than two billion dollars in annual Department of Defense contracts understood this reality acutely. The company's aging on-premises infrastructure, built over two decades of organic growth and acquisitions, had become a strategic liability. Legacy systems limited the organization's ability to respond quickly to new contract opportunities, increased cybersecurity risks, and consumed resources that could be better deployed toward innovation.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The situation grew more urgent as the Department of Defense announced that future contracts would require Cybersecurity Maturity Model Certification at Level 3. The contractor's existing infrastructure could not meet these requirements without fundamental modernization. Leadership recognized that the organization faced a choice: undertake a comprehensive cloud migration that would position the company for future growth, or accept gradual obsolescence as competitors leveraged more modern technology platforms.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The challenge extended beyond technology. The contractor supported critical defense programs that operated continuously. Any disruption to these systems could jeopardize national security missions and breach contract obligations. The Chief Information Officer needed to modernize the entire infrastructure while maintaining perfect operational continuity. The organization required a partner who understood both the technical complexities of large-scale cloud migration and the unique requirements of defense sector operations. The contractor was determined to prove that comprehensive modernization and zero downtime were not mutually exclusive objectives.
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
                The contractor needed more than a lift-and-shift migration. The organization required a transformation that would modernize application architectures, strengthen security posture, and establish a foundation for continuous innovation. Working with NexDyne Technology, the contractor designed and executed an eighteen-month migration strategy that moved more than 150 applications and 500 terabytes of classified data to AWS GovCloud and Azure Government environments.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The approach prioritized risk mitigation through careful sequencing and comprehensive testing. The migration began with non-critical applications that would provide valuable lessons without jeopardizing essential operations. Each application moved through a standardized process: assessment and planning, architecture redesign for cloud-native capabilities, parallel deployment in the target environment, extensive testing and validation, cutover during planned maintenance windows, and post-migration optimization. This methodology ensured that the team identified and resolved issues before they could impact production systems.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The technical architecture leveraged the unique capabilities of government cloud environments while maintaining strict security boundaries. Sensitive workloads deployed to AWS GovCloud regions with FedRAMP High authorization. The platform implemented defense-in-depth security with network segmentation, encryption at rest and in transit, comprehensive logging and monitoring, and automated compliance validation. The migration team worked closely with DoD cybersecurity assessors throughout the process, ensuring that the new environment would meet CMMC Level 3 requirements. By the time the final application migrated, the contractor had achieved certification and established operational patterns that would maintain compliance as the environment evolved.
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
                The migration transformed the contractor's competitive position. The organization achieved CMMC Level 3 certification three months before the DoD deadline, positioning itself to compete for contracts that many competitors could not yet pursue. The modern cloud infrastructure enabled the contractor to respond to new opportunities with unprecedented speed. Proposal teams could spin up development environments in hours rather than weeks, allowing the organization to demonstrate technical capabilities during the competitive process rather than merely describing them.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The financial impact exceeded initial projections. Infrastructure costs decreased by 4.5 million dollars annually as the organization eliminated expensive data center leases and reduced the staff required for hardware maintenance. The cloud platform's elasticity allowed the contractor to scale resources to match project demands, avoiding both over-provisioning during quiet periods and capacity constraints during peak workloads. The migration achieved return on investment in just over two years, with ongoing savings continuing to accrue.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Most importantly, the contractor maintained perfect operational continuity throughout the migration. Not a single minute of unplanned downtime affected production systems during the eighteen-month transformation. This achievement validated the careful planning and risk mitigation approach that guided the project. The contractor has since won three major contracts that specifically required CMMC Level 3 certification, representing more than 800 million dollars in new business that would not have been possible without the modernization initiative. The transformation demonstrated that even the most demanding operational environments can achieve comprehensive modernization when the approach prioritizes both technical excellence and business continuity.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Ready to modernize your defense infrastructure?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how our cloud migration expertise can help your organization achieve compliance and competitive advantage while maintaining operational continuity.
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
