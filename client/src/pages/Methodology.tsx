import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Download, CheckCircle } from 'lucide-react';

export default function Methodology() {
  const handleDownloadPDF = () => {
    // PDF will be generated and placed in public folder
    window.open('/rapid-framework-methodology.pdf', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero Section - Clean and Minimal */}
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Our Methodology</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The RAPID Framework
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven Government Implementation Methodology: Structured 4-phase approach delivering compliant, on-budget FedRAMP and StateRAMP platform deployments
            </p>
          </div>

          {/* Download PDF Button */}
          <div className="flex justify-center mb-16">
            <Button 
              onClick={handleDownloadPDF}
              size="lg"
              className="gap-2"
            >
              <Download className="w-5 h-5" />
              Download Framework Overview (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Overview - Minimal Design */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2-3 weeks</div>
              <div className="text-sm text-muted-foreground">Research & Assessment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3-4 weeks</div>
              <div className="text-sm text-muted-foreground">Architecture & Planning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">8-10 weeks</div>
              <div className="text-sm text-muted-foreground">Implementation & Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Ongoing</div>
              <div className="text-sm text-muted-foreground">Performance & Optimization</div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t">
            <div className="text-2xl font-bold mb-2">90-Day ATO Timeline</div>
            <div className="text-muted-foreground">From kickoff to Authority to Operate</div>
          </div>
        </div>
      </section>

      {/* Phase 1: Research & Assessment */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border-2 border-border rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div>
                <h2 className="text-3xl font-bold">Research & Assessment</h2>
                <p className="text-muted-foreground">Duration: 2-3 weeks</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-foreground">
                Comprehensive discovery phase establishing baseline metrics, identifying optimization opportunities, and projecting ROI. We conduct stakeholder interviews, process mapping workshops, and technical assessments to understand current state and define success criteria.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Key Deliverables</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Current State Assessment Report</div>
                    <div className="text-sm text-muted-foreground">Detailed analysis of existing systems, processes, and pain points</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Opportunity Identification Matrix</div>
                    <div className="text-sm text-muted-foreground">Prioritized list of automation and integration opportunities with impact scores</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">ROI Projection Model</div>
                    <div className="text-sm text-muted-foreground">Financial analysis with cost savings, efficiency gains, and payback period</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Stakeholder Interview Summary</div>
                    <div className="text-sm text-muted-foreground">Consolidated feedback from key personnel across departments</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border">
              <h4 className="font-bold mb-3">Case Study Example</h4>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Federal Agency Automation:</strong> Conducted 3-week assessment across 12 departments, identifying 47 automation opportunities. ROI projection showed $2.1M annual savings with 18-month payback period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Architecture & Planning */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border-2 border-border rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div>
                <h2 className="text-3xl font-bold">Architecture & Planning</h2>
                <p className="text-muted-foreground">Duration: 3-4 weeks</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-foreground">
                Design phase translating assessment findings into detailed technical architecture and implementation roadmap. We select appropriate FedRAMP/StateRAMP-authorized platforms, design integration patterns, and create phased deployment plans aligned with agency constraints.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Key Deliverables</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Solution Architecture Document</div>
                    <div className="text-sm text-muted-foreground">Technical design with platform selection, integration patterns, and data flows</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Technology Stack Evaluation</div>
                    <div className="text-sm text-muted-foreground">Vendor-neutral comparison of FedRAMP/StateRAMP platforms with recommendations</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Phased Implementation Roadmap</div>
                    <div className="text-sm text-muted-foreground">Detailed timeline with milestones, dependencies, and resource requirements</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Security & Compliance Plan</div>
                    <div className="text-sm text-muted-foreground">ATO documentation strategy, security controls mapping, and audit preparation</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h4 className="font-bold mb-3">Case Study Example</h4>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">DoD Manufacturing Facility:</strong> Designed hybrid architecture integrating UiPath Gov RPA with legacy MES systems. Created 3-phase roadmap prioritizing high-impact processes while maintaining CMMC Level 2 compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: Implementation & Delivery */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border-2 border-border rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div>
                <h2 className="text-3xl font-bold">Implementation & Delivery</h2>
                <p className="text-muted-foreground">Duration: 8-10 weeks</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-foreground">
                Execution phase deploying platforms, configuring security controls, and migrating workloads with zero downtime. We follow agile sprints with continuous testing, ATO documentation preparation, and stakeholder training to ensure smooth adoption and compliance readiness.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Key Deliverables</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Platform Configuration & Deployment</div>
                    <div className="text-sm text-muted-foreground">Production-ready systems with security controls and integrations configured</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">ATO Documentation Package</div>
                    <div className="text-sm text-muted-foreground">Complete System Security Plan (SSP), POA&M, and control implementation evidence</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Security Controls Implementation</div>
                    <div className="text-sm text-muted-foreground">NIST 800-53 controls configured with continuous monitoring enabled</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">User Training & Change Management</div>
                    <div className="text-sm text-muted-foreground">Role-based training materials, workshops, and adoption support resources</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border">
              <h4 className="font-bold mb-3">Case Study Example</h4>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">VA Medical Center Integration:</strong> Deployed Salesforce Health Cloud with FedRAMP authorization, integrated 12 legacy systems, and achieved ATO in 87 days. Zero downtime migration serving 4.2M patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 4: Performance & Optimization */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border-2 border-border rounded-full flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <div>
                <h2 className="text-3xl font-bold">Performance & Optimization</h2>
                <p className="text-muted-foreground">Duration: Ongoing</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-foreground">
                Continuous improvement phase monitoring system performance, tracking ROI metrics, and optimizing workflows based on real-world usage. We provide ongoing support, predictive maintenance, and iterative enhancements to maximize value realization and ensure sustained compliance.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Key Deliverables</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Real-Time Performance Dashboards</div>
                    <div className="text-sm text-muted-foreground">Executive and operational dashboards tracking KPIs, SLAs, and system health</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">ROI Measurement & Reporting</div>
                    <div className="text-sm text-muted-foreground">Quarterly business reviews with actual vs. projected savings analysis</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Predictive Maintenance Alerts</div>
                    <div className="text-sm text-muted-foreground">AI-powered anomaly detection preventing issues before they impact operations</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Continuous Compliance Monitoring</div>
                    <div className="text-sm text-muted-foreground">Automated security scanning and control validation for ongoing ATO maintenance</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h4 className="font-bold mb-3">Case Study Example</h4>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">State Attorney General Office:</strong> Ongoing optimization delivered 23% additional efficiency gains in Year 2 through workflow refinements. Predictive maintenance prevented 14 potential outages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Framework Success Metrics</h2>
            <p className="text-lg text-muted-foreground">
              Proven results across 100+ government implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="text-4xl font-bold mb-2">90 days</div>
              <div className="text-sm text-muted-foreground">Average ATO Timeline</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Authorization Success Rate</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold mb-2">Zero</div>
              <div className="text-sm text-muted-foreground">Operational Disruption</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Implement the RAPID Framework?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss how our proven methodology can deliver compliant, on-budget platform deployments for your agency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Assessment</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleDownloadPDF}
              className="gap-2"
            >
              <Download className="w-5 h-5" />
              Download PDF Overview
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
