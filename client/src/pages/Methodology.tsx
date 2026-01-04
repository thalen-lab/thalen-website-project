import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';

export default function Methodology() {
  const handleDownloadPDF = () => {
    window.open('/rapid-framework-methodology.pdf', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-4 bg-cover bg-center" style={{ backgroundImage: "url('/images/methodology-hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        <div className="container max-w-4xl relative z-10">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Methodology' }]} />
          </div>
          <div className="text-center">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Our Methodology</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              The RAPID Framework
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Structured 4-phase approach helping federal, state, and local agencies modernize operations, achieve compliance, and deliver mission-critical results
            </p>
            <Button 
              onClick={handleDownloadPDF}
              size="lg"
              className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-slate-200 gap-2"
            >
              Download Framework Overview
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 px-4 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl text-center text-[oklch(0.20_0.05_250)]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold mb-2">2-3 weeks</div>
              <div className="text-sm text-slate-600">Research & Assessment</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3-4 weeks</div>
              <div className="text-sm text-slate-600">Architecture & Planning</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8-10 weeks</div>
              <div className="text-sm text-slate-600">Implementation & Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Ongoing</div>
              <div className="text-sm text-slate-600">Performance & Optimization</div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200">
            <p className="text-2xl font-bold">90-day implementation timeline · 100% client success rate · Zero operational disruption</p>
          </div>
        </div>
      </section>

      {/* Four Phases */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Framework</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)]">Four Phases to Modernization Success</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Phase 1-4 Cards */}
            {[{
              phase: 1,
              title: "Research & Assessment",
              description: "Comprehensive assessment of your agency's current operations, systems, and processes to identify modernization opportunities and establish ROI baseline.",
              items: [
                "Current state assessment and stakeholder interviews",
                "Opportunity identification matrix with impact scores",
                "ROI projection model with payback period analysis"
              ]
            }, {
              phase: 2,
              title: "Architecture & Planning",
              description: "Solution architecture design - whether modernizing existing systems, implementing FedRAMP/StateRAMP platforms, or integrating both - with detailed implementation roadmap.",
              items: [
                "FedRAMP/StateRAMP platform evaluation and selection",
                "Integration patterns and data flow architecture",
                "Security controls mapping and ATO documentation plan"
              ]
            }, {
              phase: 3,
              title: "Implementation & Delivery",
              description: "Hands-on implementation of system modernization, process automation, and compliance documentation - delivering measurable results with zero operational disruption.",
              items: [
                "Agile sprints with continuous testing and validation",
                "Comprehensive ATO package preparation and submission",
                "Stakeholder training and change management support"
              ]
            }, {
              phase: 4,
              title: "Performance & Optimization",
              description: "Ongoing monitoring, optimization, and support to ensure sustained performance improvements and continuous ROI growth.",
              items: [
                "Performance dashboards with real-time KPI tracking",
                "Quarterly optimization reviews and enhancement roadmap",
                "Predictive analytics for proactive issue resolution"
              ]
            }].map((phaseItem, index) => (
              <motion.div 
                key={phaseItem.phase}
                className="bg-white border-2 border-slate-200 rounded-lg p-8 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-[oklch(0.65_0.18_55)]">0{phaseItem.phase}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{phaseItem.title}</h3>
                    <p className="text-slate-600 mb-6">{phaseItem.description}</p>
                    <ul className="space-y-3 text-slate-600">
                      {phaseItem.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl text-center">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Proven Results</p>
          <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-12">Framework Success Metrics</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-[oklch(0.20_0.05_250)]">
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-sm text-slate-600">Client Project Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">90 Days</div>
              <div className="text-sm text-slate-600">Average ATO Achievement</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">Zero</div>
              <div className="text-sm text-slate-600">Operational Disruptions</div>
            </div>
            <div className="sm:col-span-1">
              <div className="text-5xl font-bold mb-2">$2.3B</div>
              <div className="text-sm text-slate-600">Total Agency ROI Delivered</div>
            </div>
            <div className="sm:col-span-1">
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-sm text-slate-600">Average Efficiency Gain</div>
            </div>
            <div className="sm:col-span-1">
              <div className="text-5xl font-bold mb-2">18 Mo</div>
              <div className="text-sm text-slate-600">Average ROI Payback</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Modernize Your Agency with Confidence</h2>
          <p className="text-lg text-white/80 mb-8">
            Request a complimentary assessment to see how the RAPID Framework can be tailored to your agency's specific modernization and compliance requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-slate-200 w-full sm:w-auto">
                Request Free Assessment
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleDownloadPDF}
              className="border-white/50 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto gap-2"
            >
              Download Framework PDF
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
