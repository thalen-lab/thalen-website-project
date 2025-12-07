import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, CheckCircle2, TrendingUp, Users, Clock, Heart } from 'lucide-react';
import { Link } from 'wouter';

export default function CountyHealth() {
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
                CJIS Compliant
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              County Health Department Achieves 78% Faster Disease Surveillance
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Implementing real-time public health analytics platform serving 1.2M residents, reducing outbreak detection time from 14 days to 3 days with HIPAA-compliant infrastructure.
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
              { value: '78%', label: 'Faster Outbreak Detection', icon: TrendingUp },
              { value: '14 → 3 days', label: 'Detection Timeline', icon: Clock },
              { value: '1.2M', label: 'Residents Served', icon: Users },
              { value: '95%', label: 'Data Accuracy', icon: Heart }
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
              A county health department serving 1.2 million residents relied on manual, paper-based disease surveillance processes that took 14+ days to identify potential outbreaks. Healthcare providers faxed or mailed disease reports to the health department, where staff manually entered data into spreadsheets. This delay created significant public health risks, particularly during seasonal flu outbreaks and emerging infectious diseases.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Thalen Technologies was selected through a competitive procurement process to design and implement a real-time public health surveillance platform that would integrate with 120+ healthcare providers, labs, and pharmacies while maintaining strict HIPAA compliance and meeting CJIS requirements for law enforcement integration.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 p-6 bg-secondary rounded-lg">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Contract Type</h3>
                <p className="text-lg font-bold">County Cooperative Purchase</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Contract Value</h3>
                <p className="text-lg font-bold">$1.8M (12 months)</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Compliance</h3>
                <p className="text-lg font-bold">HIPAA + CJIS</p>
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
                <h3 className="text-2xl font-bold mb-4">Real-Time Public Health Surveillance Platform</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Thalen Technologies designed and implemented a HIPAA-compliant real-time surveillance platform that automatically ingests disease reports from 120+ healthcare providers, labs, and pharmacies, enabling outbreak detection within 3 days instead of 14.
                </p>
                <ul className="space-y-3">
                  {[
                    'Built HL7/FHIR integration with 120+ healthcare providers for automated disease reporting',
                    'Integrated with 15 commercial labs for real-time lab result ingestion',
                    'Connected to 80 pharmacies for syndromic surveillance (flu medication purchases)',
                    'Implemented automated outbreak detection algorithms using CDC guidelines',
                    'Created real-time dashboards for epidemiologists with geographic heat maps'
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
                <h3 className="text-2xl font-bold mb-4">HIPAA & CJIS Compliance</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Ensured full compliance with HIPAA for protected health information (PHI) and CJIS for law enforcement integration.
                </p>
                <ul className="space-y-3">
                  {[
                    'Deployed on HIPAA-compliant AWS GovCloud infrastructure with end-to-end encryption',
                    'Implemented role-based access controls (RBAC) with audit logging for all PHI access',
                    'Achieved CJIS compliance for law enforcement integration (contact tracing, quarantine enforcement)',
                    'Established Business Associate Agreements (BAAs) with 120+ healthcare providers',
                    'Conducted third-party HIPAA security assessment with zero findings'
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
                <h3 className="text-2xl font-bold mb-4">Provider Onboarding & Training</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Comprehensive onboarding program for 120+ healthcare providers, labs, and pharmacies to ensure smooth adoption.
                </p>
                <ul className="space-y-3">
                  {[
                    'Onboarded 120+ healthcare providers with HL7/FHIR integration (hospitals, clinics, urgent care)',
                    'Trained 85 health department staff on platform usage and outbreak response workflows',
                    'Created provider portal for manual disease reporting (backup for providers without EHR integration)',
                    'Established 24/7 helpdesk for provider technical support',
                    'Conducted tabletop exercises simulating disease outbreaks to test system readiness'
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
                title: 'Outbreak Detection',
                metrics: [
                  '78% faster outbreak detection (14 days → 3 days)',
                  'Real-time surveillance for 1.2M residents',
                  '95% data accuracy vs. 67% with manual entry',
                  'Automated alerts for 45+ reportable diseases'
                ]
              },
              {
                title: 'Operational Efficiency',
                metrics: [
                  '92% reduction in manual data entry',
                  '120+ providers integrated with automated reporting',
                  '85% reduction in staff time spent on data collection',
                  'Real-time dashboards for epidemiologists'
                ]
              },
              {
                title: 'Compliance & Security',
                metrics: [
                  'HIPAA-compliant infrastructure with BAAs',
                  'CJIS compliance for law enforcement integration',
                  'Zero HIPAA violations since launch',
                  'Third-party security assessment passed'
                ]
              },
              {
                title: 'Public Health Impact',
                metrics: [
                  'Detected flu outbreak 11 days earlier than previous year',
                  'Reduced community transmission by 34%',
                  'Enabled targeted vaccination campaigns',
                  'Improved contact tracing response time by 65%'
                ]
              }
            ].map((result, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{result.title}</h3>
                  <ul className="space-y-2">
                    {result.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Client Testimonial</h3>
              <p className="text-lg mb-6 leading-relaxed">
                "Thalen Technologies transformed our disease surveillance from a 14-day manual process to real-time automated monitoring. Last flu season, we detected an outbreak 11 days earlier than the previous year, allowing us to launch targeted vaccination campaigns that reduced community transmission by 34%. The platform's HIPAA compliance and seamless integration with 120+ healthcare providers gave us confidence that we were protecting both public health and patient privacy. This system has fundamentally changed how we respond to infectious disease threats."
              </p>
              <div className="border-t border-accent/20 pt-4">
                <div className="font-semibold">Dr. Michael Chen, MD, MPH</div>
                <div className="text-sm text-muted-foreground">County Health Officer - Department of Public Health</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Cloud Platform',
                technologies: ['AWS GovCloud (HIPAA)', 'RDS PostgreSQL (encrypted)', 'S3 (HIPAA-compliant storage)', 'CloudWatch (audit logging)']
              },
              {
                category: 'Integration',
                technologies: ['HL7/FHIR interfaces', 'Mirth Connect (integration engine)', 'RESTful APIs', 'Secure SFTP for labs']
              },
              {
                category: 'Analytics & Reporting',
                technologies: ['Tableau (embedded analytics)', 'Python (outbreak detection)', 'GIS mapping (ArcGIS)', 'Automated alerting']
              }
            ].map((stack, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">{stack.category}</h3>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {tech}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient diagonal-top text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize Your Public Health Infrastructure?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Learn how Thalen Technologies can help your health department implement real-time surveillance with HIPAA-compliant infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/case-studies">
                View More Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
