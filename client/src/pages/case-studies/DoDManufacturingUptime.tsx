import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, TrendingUp, Activity, Shield, Zap } from "lucide-react";

export default function DoDManufacturingUptime() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container relative z-10">
          <Link href="/case-studies">
            <Button variant="ghost" className="text-white hover:text-orange-500 mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <span className="text-orange-500 text-sm font-medium">Defense</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              DoD Manufacturing Facility Achieves 99.2% Uptime
            </h1>
            
            <p className="text-xl text-slate-300 mb-8">
              Implemented FedRAMP-authorized predictive maintenance platform across DoD manufacturing facility. Achieved CMMC Level 3 certification with 99.2% uptime.
            </p>
            
            <div className="flex flex-wrap gap-8 text-white">
              <div>
                <div className="text-4xl font-bold text-orange-500">99.2%</div>
                <div className="text-sm text-slate-400 mt-1">System Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500">78%</div>
                <div className="text-sm text-slate-400 mt-1">Reduced Downtime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500">Level 3</div>
                <div className="text-sm text-slate-400 mt-1">CMMC Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Challenge</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                A critical DoD manufacturing facility producing defense components was experiencing frequent unplanned equipment failures that disrupted production schedules and threatened mission-critical supply chains. The facility operated 24/7 with aging equipment and relied on reactive maintenance that resulted in costly emergency repairs and production delays.
              </p>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Equipment downtime averaged 18-22% annually, with each incident requiring 12-48 hours for diagnosis and repair. The facility needed to modernize maintenance operations while meeting strict DoD cybersecurity requirements including CMMC Level 3 certification for handling Controlled Unclassified Information (CUI).
              </p>
              
              <Card className="bg-white border-l-4 border-l-orange-500 p-6 my-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Constraints</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Required CMMC Level 3 certification for all systems handling CUI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Must maintain continuous operations during implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Integration with legacy industrial control systems and IoT sensors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Air-gapped network segments for classified operations</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Approach</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-8">
                We implemented a comprehensive predictive maintenance platform using FedRAMP-authorized IoT and analytics tools, enabling the facility to shift from reactive to proactive maintenance while meeting all DoD cybersecurity requirements.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="p-6 border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 1: Assessment</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Conducted equipment criticality analysis and identified 45 high-priority assets. Established baseline performance metrics and failure patterns from historical data.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 2: Infrastructure</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Deployed secure IoT sensor network with edge computing capabilities. Implemented CMMC-compliant data collection and transmission protocols.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 3: Analytics</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Built machine learning models for anomaly detection and failure prediction. Integrated real-time dashboards for maintenance teams with mobile alerts.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 4: Optimization</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Refined predictive models based on actual failure data. Established preventive maintenance schedules and spare parts inventory optimization.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 mt-12">Technical Implementation</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700"><strong>IoT Platform:</strong> Deployed 200+ industrial IoT sensors monitoring vibration, temperature, pressure, and power consumption across critical equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Analytics:</strong> Machine learning models analyzing 50+ million data points daily to predict failures 7-14 days in advance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Security:</strong> CMMC Level 3 compliant architecture with encrypted data transmission, role-based access control, and comprehensive audit logging</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Integration:</strong> Seamless connectivity with existing CMMS, ERP, and supply chain systems for automated work order generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Results & Impact</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center border-slate-200">
                <div className="text-4xl font-bold text-orange-500 mb-2">99.2%</div>
                <div className="text-sm text-slate-600">Equipment uptime achieved</div>
              </Card>
              
              <Card className="p-6 text-center border-slate-200">
                <div className="text-4xl font-bold text-orange-500 mb-2">78%</div>
                <div className="text-sm text-slate-600">Reduction in unplanned downtime</div>
              </Card>
              
              <Card className="p-6 text-center border-slate-200">
                <div className="text-4xl font-bold text-orange-500 mb-2">85%</div>
                <div className="text-sm text-slate-600">Failure prediction accuracy</div>
              </Card>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                The predictive maintenance platform transformed facility operations by enabling proactive intervention before equipment failures occurred. Unplanned downtime decreased from 18-22% to less than 1%, ensuring consistent production output and on-time delivery of critical defense components.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Operational Improvements</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Reduced emergency maintenance incidents by 82% through early failure detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Optimized spare parts inventory, reducing carrying costs by 35% while improving availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Achieved CMMC Level 3 certification on first audit with zero findings</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Improved production throughput by 23% through optimized maintenance scheduling</span>
                </li>
              </ul>
              
              <Card className="bg-slate-900 text-white p-8 my-8">
                <blockquote className="text-lg italic mb-4">
                  "The predictive maintenance platform gave us visibility into equipment health that we never had before. We're now preventing failures instead of reacting to them, which has dramatically improved our ability to meet production commitments."
                </blockquote>
                <div className="text-sm text-slate-400">
                  — Led by [Team Member Name] at [Previous Agency/Organization]
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Technologies & Standards</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                Cybersecurity
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                IoT
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                CMMC
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                Predictive Analytics
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                Machine Learning
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-lg text-center text-sm font-medium text-slate-700">
                Edge Computing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Learn how we can help your facility achieve similar results with predictive maintenance solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 border-white">
                  Schedule Assessment
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-orange-600">
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
