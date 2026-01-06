import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function CountyHealthDepartment() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pattern-dark.svg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="container relative">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Case Studies', href: '/case-studies' },
                  { label: 'County Health Department' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="max-w-4xl">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              County Government Case Study
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              County Health Department Integrates 12 Systems for Real-Time Disease Surveillance
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Implementing HIPAA-compliant integration platform serving 2.5 million residents, reducing outbreak detection time by 40% with automated disease surveillance and state reporting.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Download Full Case Study (PDF)
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                View All Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { value: '40%', label: 'Faster Outbreak Response' },
              { value: '12', label: 'Systems Integrated' },
              { value: '2.5M', label: 'Residents Served' },
              { value: '100%', label: 'State Reporting Compliance' },
            ].map((metric, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{metric.value}</div>
                <div className="text-sm text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Challenge</p>
          <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Disconnected Systems and Manual Processes</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              A county health department serving 2.5 million residents operated 12 disconnected health information systems that couldn't share data. Electronic health records, laboratory systems, immunization registries, and vital records databases existed in isolation, forcing epidemiologists to manually gather data through phone calls and chart reviews. Disease surveillance required 48-72 hours to detect outbreak patterns, creating significant public health risks during seasonal flu outbreaks and emerging infectious diseases.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Thalen Technologies Technologies was selected through a competitive county procurement process to design and implement a HIPAA-compliant health data integration platform. The solution would connect all 12 county health systems, enable real-time disease surveillance, automate mandatory state reporting, and provide public health analytics dashboards for 200+ county health workers.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Details */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{challenge.title}</h3>
                    <p className="text-slate-600">{challenge.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Solution</p>
          <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">A Unified, Real-Time Public Health Platform</h2>
          <div className="space-y-8">
            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">HIPAA-Compliant Health Data Integration Platform</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Thalen Technologies Technologies designed and implemented a secure integration platform on Azure Government that connected all 12 county health systems with HIPAA-compliant data exchange, enabling real-time disease surveillance and automated state reporting.
                </p>
                <ul className="space-y-3">
                  {[
                    'Built HIPAA-compliant integration hub on Azure Government with end-to-end PHI encryption',
                    'Implemented HL7 FHIR interfaces for all 12 systems (EHR, lab, immunization, vital records)',
                    'Established secure data pipelines with role-based access controls (RBAC) and audit logging',
                    'Integrated with state health information exchange (HIE) for automated mandatory reporting',
                    'Achieved Business Associate Agreements (BAAs) with all healthcare providers'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Real-Time Disease Surveillance System</h3>
                <p className="text-lg text-slate-600 mb-6">
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
                    <li key={index} className="flex items-start gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Public Health Analytics Dashboards</h3>
                <p className="text-lg text-slate-600 mb-6">
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
                    <li key={index} className="flex items-start gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
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
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Results</p>
          <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">40% Faster Outbreak Response and 100% Compliance</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            {[
              {
                title: 'Public Health Impact',
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
                  'Eliminated 200+ hours of manual data entry per week',
                  'Reduced system maintenance overhead by 30%',
                  'Provided a single source of truth for all health data'
                ]
              }
            ].map((result, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{result.title}</h3>
                  <ul className="space-y-3">
                    {result.metrics.map((metric, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Modernize Your Public Health Infrastructure</h2>
          <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            Connect your disparate health systems, automate disease surveillance, and empower your public health teams with real-time data. Thalen Technologies can help you build a secure, compliant, and scalable health integration platform.
          </p>
          <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
