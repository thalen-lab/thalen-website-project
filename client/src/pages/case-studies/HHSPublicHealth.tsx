import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumb from '@/components/Breadcrumb';

export default function HHSPublicHealth() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#0A2540] text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>

        <div className="container relative z-10">
          <Link href="/case-studies">
            <Button variant="ghost" className="text-white hover:text-[oklch(0.75_0.15_55)] mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Case Study</p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white mb-8 leading-tight">
              HHS Achieves Real-Time Public Health Surveillance
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              How the Department of Health and Human Services deployed a real-time analytics platform to detect disease outbreaks faster and coordinate response across three thousand jurisdictions
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-24 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Opportunity</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-[oklch(0.20_0.05_250)] leading-tight">
                A federal agency recognized that delayed disease detection threatened public health
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Public health surveillance depends on the ability to detect emerging threats quickly enough to mount effective responses. The Department of Health and Human Services coordinated disease monitoring across more than three thousand state, local, and territorial health jurisdictions, each operating its own surveillance systems and reporting processes. This fragmented infrastructure meant that critical patterns often remained invisible until outbreaks had already spread across multiple jurisdictions. By the time federal officials recognized emerging threats, valuable days or weeks had passed.
              </p>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The existing surveillance system relied on manual data aggregation and weekly reporting cycles. Local health departments submitted case reports through various channels, including fax, email, and legacy electronic systems. Federal epidemiologists spent significant time cleaning and standardizing data before analysis could begin. This process worked adequately for routine surveillance, but proved inadequate when rapid response was essential. The COVID-19 pandemic exposed these limitations dramatically, as decision-makers struggled to obtain timely, accurate information about disease spread.
              </p>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                The agency's leadership understood that modern technology could transform public health surveillance. Real-time data integration and advanced analytics could detect emerging outbreaks days earlier, enabling faster intervention and potentially saving thousands of lives. The challenge extended beyond technology implementation. The solution needed to work within the complex federal-state-local public health infrastructure, respect jurisdictional autonomy, protect patient privacy, and earn the trust of thousands of public health professionals who would use the system daily. The department was determined to prove that enhanced surveillance and privacy protection were complementary rather than competing objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-white text-[oklch(0.20_0.05_250)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Solution</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal leading-tight">
                A real-time analytics platform unified surveillance while preserving jurisdictional control
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The department needed a platform that could integrate data from thousands of disparate sources while maintaining the flexibility to accommodate varying local capabilities and requirements. Working with NexDyne, HHS deployed a cloud-based real-time analytics platform that established secure connections to surveillance systems across all jurisdictions. The platform accepted data in multiple formats, automatically standardizing and de-duplicating records while preserving the detailed information that epidemiologists needed for investigation.
              </p>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The technical architecture leveraged machine learning to detect anomalous patterns that might signal emerging outbreaks. The system continuously analyzed incoming case reports, comparing current trends against historical baselines and identifying geographic clusters that warranted investigation. Advanced algorithms distinguished genuine threats from statistical noise, dramatically reducing false alerts that had previously overwhelmed local health departments. The platform provided customizable dashboards that enabled both federal oversight and local operational management, ensuring that each jurisdiction could access the information most relevant to its needs.
              </p>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                Privacy protections were built into the platform's foundation rather than added as an afterthought. The system implemented differential privacy techniques that enabled population-level analysis while protecting individual patient information. Role-based access controls ensured that users could only access data appropriate to their jurisdiction and function. Comprehensive audit logging tracked every data access, providing transparency and accountability. These protections actually strengthened the platform's value, as jurisdictions proved more willing to share data when they understood that privacy safeguards were robust and verifiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact Section */}
      <section className="py-24 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Impact</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.18_55)] mb-3">72hrs</div>
                <p className="text-slate-600 text-sm">faster outbreak detection</p>
              </div>
              
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.18_55)] mb-3">3,000</div>
                <p className="text-slate-600 text-sm">jurisdictions connected</p>
              </div>
              
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.18_55)] mb-3">89%</div>
                <p className="text-slate-600 text-sm">reduction in false alerts</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.18_55)] mb-3">12K</div>
                <p className="text-slate-600 text-sm">public health officials using platform</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  The platform transformed public health surveillance across the United States. The system now detects emerging outbreaks an average of seventy-two hours faster than the previous manual process, providing critical additional time for intervention. During the first year of operation, the platform identified fourteen disease clusters that likely would have gone undetected until they had spread more widely. Early detection enabled targeted public health responses that contained these outbreaks with minimal disruption and cost.
                </p>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  The reduction in false alerts proved equally significant. The previous surveillance system generated numerous alerts that proved to be statistical artifacts rather than genuine threats, consuming substantial public health resources for investigation. The machine learning algorithms reduced false alerts by eighty-nine percent while maintaining sensitivity to genuine outbreaks. This improvement enabled epidemiologists to focus their attention on real threats rather than chasing false leads, improving both effectiveness and morale.
                </p>
                
                <p className="text-slate-600 text-lg leading-relaxed">
                  Perhaps most importantly, the platform established a foundation for continuous improvement in public health surveillance. More than twelve thousand public health officials now use the system daily, and their feedback drives ongoing enhancements. The department has expanded the platform to monitor additional health threats beyond infectious diseases, including environmental hazards and chronic disease patterns. State and local jurisdictions report that the platform has improved their operational capabilities while reducing the burden of federal reporting requirements. The success has inspired similar modernization efforts in other federal health programs, demonstrating that legacy public health infrastructure can be transformed without disrupting essential operations.
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
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-6">
              Transform your data into actionable public health intelligence
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Discover how real-time analytics can help your organization detect threats faster while protecting privacy and maintaining operational continuity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-slate-200">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white">
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
