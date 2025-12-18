import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export default function ManufacturingUptime() {
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
              Manufacturing Giant Achieves 99.2% Uptime
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
              How a Fortune 500 manufacturer transformed operations through predictive maintenance and industrial cybersecurity across fifty facilities
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-24 bg-white">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Manufacturing Uptime' }
              ]} 
              variant="light" 
            />
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4">The Opportunity</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-slate-900 leading-tight">
                A manufacturing leader recognized that unplanned downtime was eroding competitive advantage
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Manufacturing excellence depends on reliability. A Fortune 500 company operating more than fifty facilities across North America understood this principle intellectually, yet struggled to achieve it operationally. The organization experienced an average of eight percent unplanned downtime across its production lines, costing seventy-two million dollars annually in lost production, emergency repairs, and expedited shipping to meet customer commitments. Each unexpected equipment failure created cascading effects throughout the supply chain, damaging relationships with customers who depended on predictable delivery schedules.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                The company's leadership recognized that the problem extended beyond aging equipment. The organization's maintenance practices remained fundamentally reactive, responding to failures rather than preventing them. Industrial control systems that managed production lines lacked adequate cybersecurity protections, creating vulnerabilities that could enable both accidental disruptions and deliberate attacks. The company needed to transform its approach to operational technology, embracing predictive maintenance and modern security practices that would prevent problems rather than merely responding to them.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed">
                The Chief Operating Officer understood that this transformation would require more than new technology. The organization needed to fundamentally change how maintenance teams worked, how production managers made decisions, and how the company balanced short-term production pressures against long-term reliability investments. The manufacturer was determined to prove that operational excellence and production efficiency were complementary rather than competing objectives, and that modern technology could deliver both simultaneously.
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
                An integrated platform combined predictive maintenance with industrial cybersecurity
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The manufacturer needed a comprehensive solution that addressed both the technical and cultural dimensions of the reliability challenge. Working with NexDyne, the organization deployed an integrated platform combining industrial cybersecurity, IoT sensor networks, and artificial intelligence-powered predictive maintenance. The implementation began with a detailed assessment of equipment health, maintenance practices, and cybersecurity posture across all facilities, establishing baselines that would measure progress and identify priorities.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The technical architecture deployed thousands of sensors across critical equipment, monitoring vibration, temperature, pressure, and other indicators that signal impending failures. Machine learning models trained on the company's historical maintenance data learned to recognize patterns that preceded equipment problems, enabling maintenance teams to intervene before failures occurred. The platform integrated with existing enterprise resource planning and computerized maintenance management systems, automatically generating work orders when predictive models identified equipment requiring attention.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                Industrial cybersecurity protections secured the operational technology environment without disrupting production. The implementation established network segmentation that isolated industrial control systems from corporate networks, deployed continuous monitoring that detected anomalous behavior, and implemented access controls that ensured only authorized personnel could modify production systems. These protections addressed both cybersecurity risks and operational risks, as many equipment failures resulted from unauthorized or accidental configuration changes. The security measures actually improved operational stability while protecting against external threats.
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
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">99.2%</div>
                <p className="text-slate-700 text-sm">system uptime achieved</p>
              </div>
              
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">75%</div>
                <p className="text-slate-700 text-sm">reduction in unplanned downtime</p>
              </div>
              
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">$18M</div>
                <p className="text-slate-700 text-sm">in annual savings realized</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">50+</div>
                <p className="text-slate-700 text-sm">facilities connected to platform</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  The transformation fundamentally changed how the manufacturer operates. Unplanned downtime decreased by seventy-five percent, with system uptime reaching 99.2 percent across all facilities. Maintenance teams shifted from fighting fires to preventing them, using predictive insights to schedule interventions during planned maintenance windows rather than responding to emergency failures. This shift improved both equipment reliability and maintenance team morale, as technicians could take pride in preventing problems rather than merely reacting to crises.
                </p>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  The financial impact exceeded initial projections. The reduction in unplanned downtime saved eighteen million dollars annually in direct costs, while improved reliability enabled the company to accept additional customer commitments that generated substantial new revenue. Equipment lifespan increased by an average of thirty percent as predictive maintenance prevented the cascading damage that occurs when minor problems go unaddressed. The company reduced its spare parts inventory by forty percent, as predictive insights enabled just-in-time procurement rather than maintaining large safety stocks.
                </p>
                
                <p className="text-slate-700 text-lg leading-relaxed">
                  Perhaps most significantly, the transformation established a foundation for continuous improvement. The manufacturer now uses the sensor network and analytics platform to optimize production processes, identify energy efficiency opportunities, and support quality improvement initiatives. The cybersecurity protections have enabled the company to confidently connect production systems to enterprise networks and cloud platforms, unlocking capabilities that were previously too risky to pursue. The organization's success with operational technology modernization has become a competitive differentiator, with customers citing the company's reliability improvements as a factor in contract renewals and expansions.
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
              Transform reliability from a challenge into a competitive advantage
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how predictive maintenance and industrial cybersecurity can help your organization achieve operational excellence.
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
