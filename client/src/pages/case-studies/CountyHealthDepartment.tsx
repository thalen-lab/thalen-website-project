import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Download, CheckCircle2, TrendingUp, Users, Clock, Heart } from 'lucide-react';
import { Link } from 'wouter';

export default function CountyHealthDepartment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold">
                County Government Case Study
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                HIPAA Compliant
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Health IT Integration
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              County Health Department Integrates 12 Systems for Real-Time Disease Surveillance
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Implementing HIPAA-compliant integration platform serving 2.5 million residents, reducing outbreak detection time by 40% with automated disease surveillance and state reporting.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              <Download className="mr-2 h-5 w-5" />
              Download Full Case Study (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '40%', label: 'Faster Outbreak Response', icon: TrendingUp },
              { value: '12', label: 'Systems Integrated', icon: Heart },
              { value: '2.5M', label: 'Residents Served', icon: Users },
              { value: '100%', label: 'State Reporting Compliance', icon: CheckCircle2 }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              A county health department serving 2.5 million residents operated 12 disconnected health information systems that couldn't share data. Electronic health records, laboratory systems, immunization registries, and vital records databases existed in isolation, forcing epidemiologists to manually gather data through phone calls and chart reviews. Disease surveillance required 48-72 hours to detect outbreak patterns, creating significant public health risks during seasonal flu outbreaks and emerging infectious diseases.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              NexDyne Technologies was selected through a competitive county procurement process to design and implement a HIPAA-compliant health data integration platform. The solution would connect all 12 county health systems, enable real-time disease surveillance, automate mandatory state reporting, and provide public health analytics dashboards for 200+ county health workers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 p-6 bg-secondary rounded-lg">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Contract Type</h3>
                <p className="text-lg font-bold">County Cooperative Purchase</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Contract Value</h3>
                <p className="text-lg font-bold">$2.4M (10 months)</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Compliance</h3>
                <p className="text-lg font-bold">HIPAA + State HIE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Disconnected Health Systems',
                description: '12 separate systems (EHR, lab, immunization, vital records) with no data sharing. Epidemiologists manually gathered data through phone calls, taking 48-72 hours to identify outbreak patterns.'
              },
              {
                title: 'Manual Disease Surveillance',
                description: 'No automated disease surveillance capabilities. Staff reviewed paper charts and spreadsheets to detect trends, missing critical early warning signs of outbreaks.'
              },
              {
                title: 'HIPAA Compliance Requirements',
                description: 'Platform needed strict HIPAA compliance for protected health information (PHI) with encryption, access controls, audit logging, and Business Associate Agreements with all providers.'
              },
              {
                title: 'State Reporting Obligations',
                description: 'Mandatory disease reporting to state health department was manual, error-prone, and often late. County needed automated reporting to achieve 100% on-time compliance.'
              }
            ].map((challenge, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">The Solution</h2>
          <div className="space-y-8">
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">HIPAA-Compliant Health Data Integration Platform</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  NexDyne Technologies designed and implemented a secure integration platform on Azure Government that connected all 12 county health systems with HIPAA-compliant data exchange, enabling real-time disease surveillance and automated state reporting.
                </p>
                <ul className="space-y-3">
                  {[
                    'Built HIPAA-compliant integration hub on Azure Government with end-to-end PHI encryption',
                    'Implemented HL7 FHIR interfaces for all 12 systems (EHR, lab, immunization, vital records)',
                    'Established secure data pipelines with role-based access controls (RBAC) and audit logging',
                    'Integrated with state health information exchange (HIE) for automated mandatory reporting',
                    'Achieved Business Associate Agreements (BAAs) with all healthcare providers'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Real-Time Disease Surveillance System</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Implemented automated disease surveillance system that analyzes patient data in real-time to detect outbreak patterns, replacing manual 48-72 hour reporting delays with immediate alerts.
                </p>
                <ul className="space-y-3">
                  {[
                    'Developed real-time disease surveillance algorithms based on CDC guidelines',
                    'Created automated outbreak detection for 45+ reportable diseases',
                    'Built geographic heat maps showing disease distribution across county',
                    'Implemented automated alerts for epidemiologists when thresholds exceeded',
                    'Reduced outbreak detection time from 48-72 hours to real-time (40% improvement)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Public Health Analytics Dashboards</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Deployed role-based analytics dashboards using Power BI Gov, providing 200+ county health workers with real-time disease trends, outbreak alerts, and population health metrics.
                </p>
                <ul className="space-y-3">
                  {[
                    'Created role-based dashboards for epidemiologists, nurses, and administrators',
                    'Implemented real-time disease trend visualization with drill-down capabilities',
                    'Built automated state reporting workflows eliminating manual data entry',
                    'Enabled data-driven identification of at-risk populations for targeted interventions',
                    'Provided complete patient health history for case investigations and contact tracing'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Outbreak Response',
                metrics: [
                  '40% faster outbreak detection and response',
                  'Real-time surveillance for 2.5M residents',
                  'Automated alerts for 45+ reportable diseases',
                  '95% data accuracy vs. 67% with manual entry'
                ]
              },
              {
                title: 'Operational Efficiency',
                metrics: [
                  '100% on-time state reporting compliance',
                  '92% reduction in manual data entry errors',
                  '12 systems unified with complete patient history',
                  '85% reduction in staff time spent on data collection'
                ]
              },
              {
                title: 'Population Health',
                metrics: [
                  '25% increase in preventive care outreach',
                  'Data-driven identification of at-risk populations',
                  'Targeted intervention programs for chronic diseases',
                  'Improved contact tracing for infectious diseases'
                ]
              },
              {
                title: 'Compliance & Security',
                metrics: [
                  'Full HIPAA compliance with zero violations',
                  'Comprehensive audit logging for all PHI access',
                  'Business Associate Agreements with all providers',
                  'State HIE integration for mandatory reporting'
                ]
              }
            ].map((result, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{result.title}</h3>
                  <ul className="space-y-2">
                    {result.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-accent">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Client Testimonial</h3>
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "NexDyne's integration platform transformed our public health operations. We now detect outbreaks in real-time instead of waiting days for manual data collection. The automated state reporting ensures we never miss a deadline, and our epidemiologists can focus on protecting public health instead of gathering data. This system has become mission-critical for serving 2.5 million county residents."
              </blockquote>
              <p className="font-semibold">— Director of Public Health, County Health Department</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Technologies & Platforms</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Azure Government (HIPAA-compliant)',
              'HL7 FHIR for health data exchange',
              'Azure API Management',
              'Power BI Gov dashboards',
              'Azure SQL Database with encryption',
              'State health information exchange (HIE)',
              'Role-based access controls (RBAC)',
              'Automated disease reporting workflows',
              'CDC surveillance algorithms'
            ].map((tech, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-4">
                  <p className="text-sm font-semibold">{tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Health IT Systems?</h2>
          <p className="text-xl mb-8 opacity-90">
            Learn how NexDyne can help your organization integrate health systems, enable real-time surveillance, and achieve HIPAA compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-background text-foreground hover:bg-background/90">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="bg-background text-foreground hover:bg-background/90">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
