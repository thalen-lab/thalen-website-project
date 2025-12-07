import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function DefenseCloud() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container relative z-10">
          <Link href="/case-studies">
            <Button variant="ghost" className="text-white hover:text-orange-500 mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
          
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8">
              <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">Case Study</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white mb-8 leading-tight">
              Defense Contractor Achieves Zero-Downtime Cloud Migration
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
              How a major defense contractor modernized its entire infrastructure while maintaining continuous operations and achieving CMMC Level 3 certification
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4">The Opportunity</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-slate-900 leading-tight">
                A defense contractor recognized that legacy infrastructure threatened future competitiveness
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Defense contractors operate in an environment where technological capability directly determines competitive advantage. A major contractor with more than two billion dollars in annual Department of Defense contracts understood this reality acutely. The company's aging on-premises infrastructure, built over two decades of organic growth and acquisitions, had become a strategic liability. Legacy systems limited the organization's ability to respond quickly to new contract opportunities, increased cybersecurity risks, and consumed resources that could be better deployed toward innovation.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                The situation grew more urgent as the Department of Defense announced that future contracts would require Cybersecurity Maturity Model Certification at Level 3. The contractor's existing infrastructure could not meet these requirements without fundamental modernization. Leadership recognized that the organization faced a choice: undertake a comprehensive cloud migration that would position the company for future growth, or accept gradual obsolescence as competitors leveraged more modern technology platforms.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed">
                The challenge extended beyond technology. The contractor supported critical defense programs that operated continuously. Any disruption to these systems could jeopardize national security missions and breach contract obligations. The Chief Information Officer needed to modernize the entire infrastructure while maintaining perfect operational continuity. The organization required a partner who understood both the technical complexities of large-scale cloud migration and the unique requirements of defense sector operations. The contractor was determined to prove that comprehensive modernization and zero downtime were not mutually exclusive objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-slate-400 tracking-wider uppercase mb-4">The Solution</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-white leading-tight">
                A phased migration strategy delivered complete modernization without compromising operations
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The contractor needed more than a lift-and-shift migration. The organization required a transformation that would modernize application architectures, strengthen security posture, and establish a foundation for continuous innovation. Working with NexDyne, the contractor designed and executed an eighteen-month migration strategy that moved more than 150 applications and 500 terabytes of classified data to AWS GovCloud and Azure Government environments.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The approach prioritized risk mitigation through careful sequencing and comprehensive testing. The migration began with non-critical applications that would provide valuable lessons without jeopardizing essential operations. Each application moved through a standardized process: assessment and planning, architecture redesign for cloud-native capabilities, parallel deployment in the target environment, extensive testing and validation, cutover during planned maintenance windows, and post-migration optimization. This methodology ensured that the team identified and resolved issues before they could impact production systems.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                The technical architecture leveraged the unique capabilities of government cloud environments while maintaining strict security boundaries. Sensitive workloads deployed to AWS GovCloud regions with FedRAMP High authorization. The platform implemented defense-in-depth security with network segmentation, encryption at rest and in transit, comprehensive logging and monitoring, and automated compliance validation. The migration team worked closely with DoD cybersecurity assessors throughout the process, ensuring that the new environment would meet CMMC Level 3 requirements. By the time the final application migrated, the contractor had achieved certification and established operational patterns that would maintain compliance as the environment evolved.
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
              <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4">The Impact</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">100%</div>
                <p className="text-slate-700 text-sm">uptime maintained throughout migration</p>
              </div>
              
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">18 mo</div>
                <p className="text-slate-700 text-sm">total migration timeline</p>
              </div>
              
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">Level 3</div>
                <p className="text-slate-700 text-sm">CMMC certification achieved</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">$4.5M</div>
                <p className="text-slate-700 text-sm">in annual infrastructure savings</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  The migration transformed the contractor's competitive position. The organization achieved CMMC Level 3 certification three months before the DoD deadline, positioning itself to compete for contracts that many competitors could not yet pursue. The modern cloud infrastructure enabled the contractor to respond to new opportunities with unprecedented speed. Proposal teams could spin up development environments in hours rather than weeks, allowing the organization to demonstrate technical capabilities during the competitive process rather than merely describing them.
                </p>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  The financial impact exceeded initial projections. Infrastructure costs decreased by 4.5 million dollars annually as the organization eliminated expensive data center leases and reduced the staff required for hardware maintenance. The cloud platform's elasticity allowed the contractor to scale resources to match project demands, avoiding both over-provisioning during quiet periods and capacity constraints during peak workloads. The migration achieved return on investment in just over two years, with ongoing savings continuing to accrue.
                </p>
                
                <p className="text-slate-700 text-lg leading-relaxed">
                  Perhaps most significantly, the transformation established a foundation for continuous innovation. Development teams adopted cloud-native architectures and DevSecOps practices that accelerated software delivery while strengthening security. The contractor now deploys new capabilities multiple times per week rather than quarterly, enabling rapid response to changing mission requirements. The organization's success with cloud migration has become a competitive differentiator in its own right, with the DoD citing the contractor's modern infrastructure as a factor in several recent contract awards. The company proved that defense contractors could achieve the agility of commercial technology companies without compromising the security and reliability that national security missions demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-slate-900 mb-6">
              Modernize your infrastructure without compromising operations
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how strategic cloud migration can help your organization achieve compliance, reduce costs, and accelerate innovation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
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
