import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Download } from 'lucide-react';

export default function Methodology() {
  const handleDownloadPDF = () => {
    // PDF will be generated and placed in public folder
    window.open('/rapid-framework-methodology.pdf', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero Section - Clean and Minimal */}
      <section className="pt-32 pb-20 px-4">
        <div className="container max-w-4xl text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Our Methodology</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The RAPID Framework
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Proven Government Implementation Methodology: Structured 4-phase approach helping federal, state, and local agencies achieve compliant, on-budget FedRAMP and StateRAMP platform deployments
          </p>
          
          {/* Download PDF Button */}
          <Button 
            onClick={handleDownloadPDF}
            size="lg"
            className="gap-2"
          >
            <Download className="w-5 h-5" />
            Download Framework Overview (PDF)
          </Button>
        </div>
      </section>

      {/* Timeline Overview - Minimal Design */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2-3 weeks</div>
              <div className="text-sm text-muted-foreground">Research & Assessment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3-4 weeks</div>
              <div className="text-sm text-muted-foreground">Architecture & Planning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">8-10 weeks</div>
              <div className="text-sm text-muted-foreground">Implementation & Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Ongoing</div>
              <div className="text-sm text-muted-foreground">Performance & Optimization</div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-border/50">
            <div className="text-2xl font-bold mb-2">90-day implementation timeline · 100% client success rate · Zero operational disruption</div>
          </div>
        </div>
      </section>

      {/* Four Phases - 2x2 Grid Layout */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            
            {/* Phase 1: Research & Assessment */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 border-2 border-border rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Research & Assessment</h2>
                  <div className="h-px bg-border mb-4"></div>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive process mapping, bottleneck identification, and ROI analysis to establish baseline metrics.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Current state assessment and stakeholder interviews</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Opportunity identification matrix with impact scores</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>ROI projection model with payback period analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2: Architecture & Planning */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 border-2 border-border rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Architecture & Planning</h2>
                  <div className="h-px bg-border mb-4"></div>
                  <p className="text-muted-foreground mb-4">
                    Solution architecture design, technology stack selection, and detailed implementation roadmap.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>FedRAMP/StateRAMP platform evaluation and selection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Integration patterns and data flow architecture</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Security controls mapping and ATO documentation plan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3: Implementation & Delivery */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 border-2 border-border rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Implementation & Delivery</h2>
                  <div className="h-px bg-border mb-4"></div>
                  <p className="text-muted-foreground mb-4">
                    Platform implementation with ATO documentation, security controls configuration, and zero-downtime migration.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Agile sprints with continuous testing and validation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Comprehensive ATO package preparation and submission</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Stakeholder training and change management support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4: Performance & Optimization */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 border-2 border-border rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Performance & Optimization</h2>
                  <div className="h-px bg-border mb-4"></div>
                  <p className="text-muted-foreground mb-4">
                    Real-time monitoring, ROI tracking, and continuous optimization with predictive analytics.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Performance dashboards with real-time KPI tracking</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Quarterly optimization reviews and enhancement roadmap</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Predictive analytics for proactive issue resolution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Framework Success Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">90 Days</div>
              <div className="text-sm text-muted-foreground">Average ATO Achievement Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Zero</div>
              <div className="text-sm text-muted-foreground">Client Operational Disruptions</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$2.3B</div>
              <div className="text-sm text-muted-foreground">Total Agency ROI Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Average Agency Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">18 Mo</div>
              <div className="text-sm text-muted-foreground">Average Agency ROI Payback</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a complimentary assessment to discover how the RAPID Framework can deliver measurable results for your agency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Schedule Assessment
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleDownloadPDF}
              className="gap-2"
            >
              <Download className="w-5 h-5" />
              Download Framework PDF
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
