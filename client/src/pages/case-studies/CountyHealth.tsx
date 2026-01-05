import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

export default function CountyHealth() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/case-studies/county-health-hero-bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        <div className="container relative">
          <div className="max-w-4xl">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              County Government Case Study
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              County Health Department Achieves 78% Faster Disease Surveillance
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Implementing real-time public health analytics platform serving 1.2M residents, reducing outbreak detection time from 14 days to 3 days with HIPAA-compliant infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                View Live Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                Download PDF
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
              { value: '78%', label: 'Faster Outbreak Detection' },
              { value: '14 → 3 days', label: 'Detection Timeline' },
              { value: '1.2M', label: 'Residents Served' },
              { value: '95%', label: 'Data Accuracy' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{metric.value}</div>
                <div className="text-sm text-slate-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl text-[oklch(0.20_0.05_250)]">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Story</p>
          <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="mb-6">
              A county health department serving 1.2 million residents relied on manual, paper-based disease surveillance processes that took 14+ days to identify potential outbreaks. Healthcare providers faxed or mailed disease reports to the health department, where staff manually entered data into spreadsheets. This delay created significant public health risks, particularly during seasonal flu outbreaks and emerging infectious diseases.
            </p>
            <p className="mb-6">
              NexDyne Technology was selected through a competitive procurement process to design and implement a real-time public health surveillance platform that would integrate with 120+ healthcare providers, labs, and pharmacies while maintaining strict HIPAA compliance and meeting CJIS requirements for law enforcement integration.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Challenge</p>
          <h2 className="text-4xl font-bold mb-8 text-[oklch(0.20_0.05_250)]">Manual Processes & Disconnected Data</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Manual Disease Reporting',
                description: 'Healthcare providers faxed or mailed disease reports. Health department staff manually entered data into Excel, taking 14+ days to identify trends.'
              },
              {
                title: 'No Real-Time Visibility',
                description: 'No ability to detect emerging outbreaks in real-time. Seasonal flu outbreaks identified weeks after peak transmission began.'
              },
              {
                title: 'Disconnected Data Sources',
                description: '120+ healthcare providers, 15 labs, 80 pharmacies—all reporting through different channels with no data integration.'
              },
              {
                title: 'HIPAA & CJIS Requirements',
                description: 'Platform needed HIPAA compliance for health data and CJIS compliance for law enforcement integration (contact tracing, quarantine enforcement).'
              }
            ].map((challenge, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{challenge.title}</h3>
                  <p className="text-slate-600">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Solution</p>
          <h2 className="text-4xl font-bold mb-8 text-[oklch(0.20_0.05_250)]">Real-Time Public Health Platform</h2>
          <div className="space-y-8">
            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Real-Time Public Health Surveillance Platform</h3>
                <p className="text-lg text-slate-600 mb-6">
                  NexDyne Technology designed and implemented a HIPAA-compliant real-time surveillance platform that automatically ingests disease reports from 120+ healthcare providers, labs, and pharmacies, enabling outbreak detection within 3 days instead of 14.
                </p>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'Built HL7/FHIR integration with 120+ healthcare providers for automated disease reporting',
                    'Integrated with 15 commercial labs for real-time lab result ingestion',
                    'Connected to 80 pharmacies for syndromic surveillance (flu medication purchases)',
                    'Implemented automated outbreak detection algorithms using CDC guidelines',
                    'Created real-time dashboards for epidemiologists with geographic heat maps'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">HIPAA & CJIS Compliance</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Ensured full compliance with HIPAA for protected health information (PHI) and CJIS for law enforcement integration.
                </p>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'Deployed on HIPAA-compliant AWS GovCloud infrastructure with end-to-end encryption',
                    'Implemented role-based access controls (RBAC) with audit logging for all PHI access',
                    'Achieved CJIS compliance for law enforcement integration (contact tracing, quarantine enforcement)',
                    'Established Business Associate Agreements (BAAs) with 120+ healthcare providers',
                    'Conducted third-party HIPAA security assessment with zero findings'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
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
          <h2 className="text-4xl font-bold mb-8 text-[oklch(0.20_0.05_250)]">78% Faster Detection, 92% Less Manual Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Public Health Impact</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  '78% faster outbreak detection (14 days → 3 days)',
                  'Real-time surveillance for 1.2M residents',
                  '95% data accuracy vs. 67% with manual entry',
                  'Automated alerts for 45+ reportable diseases'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Operational Efficiency</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  '92% reduction in manual data entry',
                  '120+ providers integrated with automated reporting',
                  '85% reduction in staff time spent on data collection',
                  'Full compliance with HIPAA and CJIS requirements'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Modernize Your Public Health Infrastructure</h2>
          <p className="text-xl text-white/90 mb-8">
            NexDyne provides secure, scalable, and compliant technology solutions for government agencies. See how we can help you protect your community and improve public health outcomes.
          </p>
          <Button size="lg" asChild className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
            <Link to="/contact/sales">
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
