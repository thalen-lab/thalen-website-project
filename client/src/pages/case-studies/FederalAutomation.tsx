import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function FederalAutomation() {
  return (
    <div className="min-h-screen flex-col bg-white">
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
              Federal Agency Achieves 85% Process Automation
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
              How a federal agency implemented UiPath RPA platform with FedRAMP authorization, automating 85% of manual workflows while maintaining TS/SCI compliance
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
                A federal agency recognized that manual processes were limiting mission effectiveness
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Federal agencies face mounting pressure to deliver more services with constrained budgets and staffing. A mid-sized federal agency responsible for critical national security functions confronted this reality through thousands of hours spent on repetitive manual tasks. Staff members manually transferred data between systems, prepared routine reports, and processed standard requests following well-defined procedures. These tasks consumed time that could have been devoted to higher-value analytical work and mission-critical activities. The agency estimated that manual processes consumed forty percent of staff time while contributing minimal value to mission outcomes.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                The challenge extended beyond simple inefficiency. Manual data entry introduced errors that propagated through downstream systems, creating quality issues that required additional staff time to identify and correct. Processing delays frustrated both internal users and external stakeholders who depended on timely information. The agency's leadership understood that hiring additional staff was neither feasible nor sustainable given budget constraints. Instead, they recognized that robotic process automation could handle routine tasks with greater speed and accuracy than manual processing, freeing staff to focus on work that required human judgment and expertise.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed">
                The agency's Chief Information Officer championed an automation initiative designed to transform operations while maintaining the strict security controls required for handling classified information. Any solution needed FedRAMP authorization to operate in the agency's cloud environment, support for Top Secret/Sensitive Compartmented Information clearance requirements, and integration capabilities that would enable automation across the agency's complex technology landscape. The initiative represented a fundamental shift in how the agency approached operations, moving from manual execution to automated processing with human oversight for exceptions and complex cases.
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
                A FedRAMP-authorized RPA platform automated workflows while maintaining security controls
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The agency needed an automation platform that could handle the technical complexity of its environment while meeting stringent security requirements. Working with NexDyne, the agency deployed UiPath's FedRAMP-authorized robotic process automation platform, establishing the infrastructure and governance processes needed to automate workflows at scale. The implementation followed a phased approach that prioritized high-volume, rules-based processes where automation could deliver immediate value while building organizational capabilities for more complex automation over time.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The technical architecture deployed software robots that mimicked human interactions with existing systems, eliminating the need for costly system integration or replacement. These robots logged into applications, extracted and transformed data, executed business rules, and updated systems following the same procedures that staff had performed manually. The platform's orchestration capabilities enabled complex workflows that spanned multiple systems and required coordination across different process steps. Advanced exception handling ensured that robots escalated cases requiring human judgment while processing routine transactions automatically. The solution maintained comprehensive audit logging that tracked every action taken by automated processes, providing the transparency required in a classified environment.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                The implementation prioritized change management and workforce development alongside technical deployment. The agency established a center of excellence that trained staff to identify automation opportunities, design efficient workflows, and oversee robot performance. Rather than viewing automation as a threat to employment, staff embraced the technology as a tool that eliminated tedious work and enabled them to focus on more interesting and impactful activities. The FedRAMP authorization and TS/SCI compliance ensured that automation could extend to the agency's most sensitive workflows, maximizing the initiative's impact on mission effectiveness.
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
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">85%</div>
                <p className="text-slate-700 text-sm">of workflows automated</p>
              </div>
              
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">6mo</div>
                <p className="text-slate-700 text-sm">return on investment</p>
              </div>
              
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">$4.2M</div>
                <p className="text-slate-700 text-sm">annual cost savings</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">99.7%</div>
                <p className="text-slate-700 text-sm">processing accuracy</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  The automation initiative transformed agency operations. Eighty-five percent of previously manual workflows now execute automatically, processing transactions with ninety-nine-point-seven percent accuracy compared to ninety-two percent accuracy under manual processing. Processing time for routine requests decreased from an average of three days to less than one hour, dramatically improving service delivery to internal and external stakeholders. The agency now processes forty-three percent more transactions with the same staffing levels, as automation eliminated the capacity constraints that previously limited throughput.
                </p>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  The financial benefits exceeded initial projections. The agency achieved return on investment in just six months, with annual cost savings of four-point-two million dollars through reduced processing time, eliminated overtime, and improved accuracy that reduced rework. More importantly, staff members report higher job satisfaction as they focus on analytical work and complex cases rather than repetitive data entry. The agency has redeployed staff from routine processing to mission-critical activities, directly enhancing its ability to fulfill its national security responsibilities.
                </p>
                
                <p className="text-slate-700 text-lg leading-relaxed">
                  Perhaps most significantly, the automation platform established a foundation for continuous operational improvement. The center of excellence has identified and automated more than two hundred distinct workflows, with new automation opportunities emerging as staff become more adept at recognizing processes suitable for robotic execution. Other federal agencies have studied the implementation as a model for their own automation initiatives, and the success has positioned the agency as a leader in federal technology modernization. The transformation demonstrated that even organizations handling the most sensitive information can leverage automation to enhance both efficiency and mission effectiveness when security controls are properly designed and implemented.
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
              Transform your agency operations with intelligent automation
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how FedRAMP-authorized RPA platforms can help your agency automate workflows, reduce costs, and free staff for higher-value work while maintaining security controls.
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
