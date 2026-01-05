import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function DoDManufacturingUptime() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-center"></div>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>

        <div className="container relative z-10">
          <Link href="/case-studies">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>

          <div className="max-w-4xl">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Defense</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              DoD Manufacturing Facility Achieves 99.2% Uptime
            </h1>
            
            <p className="text-xl text-white/90 mb-8">
              Implemented FedRAMP-authorized predictive maintenance platform across DoD manufacturing facility. Achieved CMMC Level 3 certification with 99.2% uptime.
            </p>
            
            <div className="flex flex-wrap gap-8 text-white">
              <div>
                <div className="text-4xl font-bold text-[oklch(0.75_0.15_55)]">99.2%</div>
                <div className="text-sm text-white/70 mt-1">System Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[oklch(0.75_0.15_55)]">78%</div>
                <div className="text-sm text-white/70 mt-1">Reduced Downtime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[oklch(0.75_0.15_55)]">Level 3</div>
                <div className="text-sm text-white/70 mt-1">CMMC Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)] text-[oklch(0.20_0.05_250)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Challenge</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">A Mission-Critical Mandate for Modernization</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="leading-relaxed mb-6">
                A critical DoD manufacturing facility producing defense components was experiencing frequent unplanned equipment failures that disrupted production schedules and threatened mission-critical supply chains. The facility operated 24/7 with aging equipment and relied on reactive maintenance that resulted in costly emergency repairs and production delays.
              </p>
              
              <p className="leading-relaxed mb-6">
                Equipment downtime averaged 18-22% annually, with each incident requiring 12-48 hours for diagnosis and repair. The facility needed to modernize maintenance operations while meeting strict DoD cybersecurity requirements including CMMC Level 3 certification for handling Controlled Unclassified Information (CUI).
              </p>
              
              <Card className="bg-white border-2 border-slate-200 p-6 my-8 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-[oklch(0.20_0.05_250)] mb-4">Key Constraints</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>Required CMMC Level 3 certification for all systems handling CUI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>Must maintain continuous operations during implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>Integration with legacy industrial control systems and IoT sensors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>Air-gapped network segments for classified operations</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white text-[oklch(0.20_0.05_250)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Predictive Maintenance with Fortified Security</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="leading-relaxed mb-8">
                We implemented a comprehensive predictive maintenance platform using FedRAMP-authorized IoT and analytics tools, enabling the facility to shift from reactive to proactive maintenance while meeting all DoD cybersecurity requirements.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)] mb-2">Phase 1: Assessment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Conducted equipment criticality analysis and identified 45 high-priority assets. Established baseline performance metrics and failure patterns from historical data.
                  </p>
                </Card>
                
                <Card className="p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)] mb-2">Phase 2: Infrastructure</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Deployed secure IoT sensor network with edge computing capabilities. Implemented CMMC-compliant data collection and transmission protocols.
                  </p>
                </Card>
                
                <Card className="p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)] mb-2">Phase 3: Analytics</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Built machine learning models for anomaly detection and failure prediction. Integrated real-time dashboards for maintenance teams with mobile alerts.
                  </p>
                </Card>
                
                <Card className="p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)] mb-2">Phase 4: Optimization</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Refined predictive models based on actual failure data. Established preventive maintenance schedules and spare parts inventory optimization.
                  </p>
                </Card>
              </div>
              
              <h3 className="text-2xl font-semibold text-[oklch(0.20_0.05_250)] mb-4 mt-12">Technical Implementation</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span><strong>IoT Platform:</strong> Deployed 200+ industrial IoT sensors monitoring vibration, temperature, pressure, and power consumption across critical equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span><strong>Analytics:</strong> Machine learning models analyzing 50+ million data points daily to predict failures 7-14 days in advance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span><strong>Security:</strong> CMMC Level 3 compliant architecture with encrypted data transmission, role-based access control, and comprehensive audit logging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <span><strong>Integration:</strong> Seamless connectivity with existing CMMS, ERP, and supply chain systems for automated work order generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)] text-[oklch(0.20_0.05_250)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Results & Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Unprecedented Uptime and Operational Resilience</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <div className="text-4xl font-bold text-[oklch(0.65_0.18_55)] mb-2">99.2%</div>
                <div className="text-sm text-slate-600">Equipment uptime achieved</div>
              </Card>
              
              <Card className="p-6 text-center bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <div className="text-4xl font-bold text-[oklch(0.65_0.18_55)] mb-2">78%</div>
                <div className="text-sm text-slate-600">Reduction in unplanned downtime</div>
              </Card>
              
              <Card className="p-6 text-center bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <div className="text-4xl font-bold text-[oklch(0.65_0.18_55)] mb-2">45%</div>
                <div className="text-sm text-slate-600">Decrease in maintenance costs</div>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="leading-relaxed mb-6">
                The predictive maintenance platform transformed the facility's operations, enabling a shift from a reactive to a proactive and data-driven culture. Maintenance teams could anticipate failures, schedule repairs during planned downtime, and optimize resource allocation. This resulted in a significant increase in production output and a stronger, more resilient supply chain for critical defense components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Operations?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Discover how Nexdyne can help you achieve mission-critical uptime and security compliance. 
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 font-semibold">
              <Link href="/contact">Request a Consultation <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)] font-semibold">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
