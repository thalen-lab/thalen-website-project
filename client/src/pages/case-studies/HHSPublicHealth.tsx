import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function HHSPublicHealth() {
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
            HHS Achieves Real-Time Public Health Surveillance
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            How the Department of Health and Human Services deployed a real-time analytics platform to detect disease outbreaks 72 hours faster and coordinate response across 3,000 jurisdictions with 89% reduction in false alerts.
          </p>

          {/* The Opportunity */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
              The Opportunity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Public health surveillance depends on the ability to detect emerging threats quickly enough to mount effective responses. The Department of Health and Human Services coordinated disease monitoring across more than three thousand state, local, and territorial health jurisdictions, each operating its own surveillance systems and reporting processes. This fragmented infrastructure meant that critical patterns often remained invisible until outbreaks had already spread across multiple jurisdictions. By the time federal officials recognized emerging threats, valuable days or weeks had passed.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The existing surveillance system relied on manual data aggregation and weekly reporting cycles. Local health departments submitted case reports through various channels, including fax, email, and legacy electronic systems. Federal epidemiologists spent significant time cleaning and standardizing data before analysis could begin. This process worked adequately for routine surveillance, but proved inadequate when rapid response was essential. The COVID-19 pandemic exposed these limitations dramatically, as decision-makers struggled to obtain timely, accurate information about disease spread.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The agency's leadership understood that modern technology could transform public health surveillance. Real-time data integration and advanced analytics could detect emerging outbreaks days earlier, enabling faster intervention and potentially saving thousands of lives. The challenge extended beyond technology implementation. The solution needed to work within the complex federal-state-local public health infrastructure, respect jurisdictional autonomy, protect patient privacy, and earn the trust of thousands of public health professionals who would use the system daily.
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
                The department needed a platform that could integrate data from thousands of disparate sources while maintaining the flexibility to accommodate varying local capabilities and requirements. Working with NexDyne Technology, HHS deployed a cloud-based real-time analytics platform that established secure connections to surveillance systems across all jurisdictions. The platform accepted data in multiple formats, automatically standardizing and de-duplicating records while preserving the detailed information that epidemiologists needed for investigation.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The technical architecture leveraged machine learning to detect anomalous patterns that might signal emerging outbreaks. The system continuously analyzed incoming case reports, comparing current trends against historical baselines and identifying geographic clusters that warranted investigation. Advanced algorithms distinguished genuine threats from statistical noise, dramatically reducing false alerts that had previously overwhelmed local health departments. The platform provided customizable dashboards that enabled both federal oversight and local operational management, ensuring that each jurisdiction could access the information most relevant to its needs.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Privacy protections were built into the platform's foundation rather than added as an afterthought. The system implemented differential privacy techniques that enabled population-level analysis while protecting individual patient information. Role-based access controls ensured that users could only access data appropriate to their jurisdiction and function. Comprehensive audit logging tracked every data access, providing transparency and accountability. These protections actually strengthened the platform's value, as jurisdictions proved more willing to share data when they understood that privacy safeguards were robust and verifiable.
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
                The platform transformed public health surveillance across the United States. The system now detects emerging outbreaks an average of seventy-two hours faster than the previous manual process, providing critical additional time for intervention. During the first year of operation, the platform identified fourteen disease clusters that likely would have gone undetected until they had spread more widely. Early detection enabled targeted public health responses that contained these outbreaks with minimal disruption and cost.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The reduction in false alerts proved equally significant. The previous surveillance system generated numerous alerts that proved to be statistical artifacts rather than genuine threats, consuming substantial public health resources for investigation. The machine learning algorithms reduced false alerts by eighty-nine percent while maintaining sensitivity to genuine outbreaks. This improvement enabled epidemiologists to focus their attention on real threats rather than chasing false leads, improving both effectiveness and morale.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Perhaps most importantly, the platform established a foundation for continuous improvement in public health surveillance. More than twelve thousand public health officials now use the system daily, and their feedback drives ongoing enhancements. The department has expanded the platform to monitor additional health threats beyond infectious diseases, including environmental hazards and chronic disease patterns. State and local jurisdictions report that the platform has improved their operational capabilities while reducing the burden of federal reporting requirements.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Transform your data into actionable intelligence
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how real-time analytics can help your organization detect threats faster while protecting privacy and maintaining operational continuity.
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
