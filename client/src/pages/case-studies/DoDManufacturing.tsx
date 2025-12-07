import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Download, CheckCircle2, TrendingUp, Users, Clock, Shield } from 'lucide-react';
import { Link } from 'wouter';

export default function DoDManufacturing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold">
                Department of Defense Case Study
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                CMMC Level 3
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                FedRAMP Authorized
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              DoD Manufacturing Facility Achieves 99.2% Uptime with Predictive Maintenance
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Implementing FedRAMP-authorized cybersecurity platforms and IoT-powered predictive maintenance across 50 production lines, eliminating 75% of unplanned downtime while achieving CMMC Level 3 certification.
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
              { value: '99.2%', label: 'System Uptime', icon: TrendingUp },
              { value: '75%', label: 'Downtime Reduction', icon: Clock },
              { value: '$12.5M', label: 'Annual Savings', icon: Shield },
              { value: 'CMMC L3', label: 'Compliance Achieved', icon: CheckCircle2 }
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
              A Department of Defense manufacturing facility producing critical defense components across 50 production lines experienced 150+ unplanned downtime incidents annually. The facility's aging industrial control systems, some over 15 years old, lacked predictive maintenance capabilities and had significant cybersecurity vulnerabilities. Unplanned downtime disrupted mission-critical production schedules, threatened delivery commitments, and cost over $18 million annually in lost production and emergency repairs.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              NexDyne Technologies was awarded a contract through DoD's IDIQ vehicle to modernize the facility's cybersecurity posture, implement predictive maintenance analytics, and achieve CMMC Level 3 certification. The solution would eliminate unplanned downtime, provide real-time operational visibility, and ensure compliance with stringent defense cybersecurity requirements.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 p-6 bg-secondary rounded-lg">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Contract Type</h3>
                <p className="text-lg font-bold">DoD IDIQ</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Contract Value</h3>
                <p className="text-lg font-bold">$8.7M (18 months)</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Compliance</h3>
                <p className="text-lg font-bold">CMMC Level 3 + FedRAMP</p>
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
                title: 'Frequent Unplanned Downtime',
                description: '150+ unplanned downtime incidents annually across 50 production lines. Mean time to repair (MTTR) averaged 18 hours, disrupting defense production schedules and threatening mission readiness.'
              },
              {
                title: 'Aging Industrial Control Systems',
                description: 'Legacy SCADA and industrial control systems spanning 15+ years with no predictive maintenance capabilities. Reactive maintenance approach led to catastrophic equipment failures.'
              },
              {
                title: 'CMMC Level 3 Compliance Gap',
                description: 'Facility required CMMC Level 3 certification to handle Controlled Unclassified Information (CUI) but had significant gaps in 130 NIST 800-171 security controls.'
              },
              {
                title: 'Limited Operational Visibility',
                description: 'No real-time visibility into equipment health, production metrics, or cybersecurity posture. Management operated with 24-48 hour reporting delays, preventing proactive decision-making.'
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
                <h3 className="text-2xl font-bold mb-4">FedRAMP-Authorized Cybersecurity Platform</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  NexDyne deployed FedRAMP-authorized cybersecurity platforms (Palo Alto Networks Prisma Cloud Gov, CrowdStrike Falcon Gov) with zero-trust network architecture and continuous monitoring specifically designed for ICS/SCADA environments.
                </p>
                <ul className="space-y-3">
                  {[
                    'Implemented zero-trust network architecture with micro-segmentation for 50 production lines',
                    'Deployed FedRAMP-authorized endpoint protection (CrowdStrike Falcon Gov) on all industrial control systems',
                    'Established continuous monitoring with SIEM integration for real-time threat detection',
                    'Implemented network segmentation isolating OT networks from IT infrastructure',
                    'Achieved zero cybersecurity incidents in 24 months of production operation'
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
                <h3 className="text-2xl font-bold mb-4">IoT-Powered Predictive Maintenance Analytics</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Deployed IoT sensors across 50 production lines with machine learning-powered predictive maintenance analytics, identifying equipment failures 72 hours before occurrence with 94% accuracy.
                </p>
                <ul className="space-y-3">
                  {[
                    'Installed 2,500+ IoT sensors monitoring vibration, temperature, pressure, and power consumption',
                    'Implemented ML models trained on 3 years of historical maintenance data',
                    'Achieved 94% accuracy in predicting equipment failures 72 hours in advance',
                    'Reduced mean time to repair (MTTR) from 18 hours to 4.2 hours',
                    'Eliminated 75% of unplanned downtime incidents (150 to 38 annually)'
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
                <h3 className="text-2xl font-bold mb-4">CMMC Level 3 Compliance Implementation</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Implemented all 130 NIST 800-171 security controls with comprehensive documentation, continuous monitoring, and third-party assessment support, achieving CMMC Level 3 certification in 8 months.
                </p>
                <ul className="space-y-3">
                  {[
                    'Implemented 130 NIST 800-171 security controls across all manufacturing systems',
                    'Established comprehensive security documentation (SSP, POA&M, incident response plans)',
                    'Deployed continuous monitoring for all security controls with automated compliance reporting',
                    'Conducted third-party CMMC Level 3 assessment with zero findings',
                    'Achieved CMMC Level 3 certification in 8 months, enabling CUI handling'
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
                <h3 className="text-2xl font-bold mb-4">Real-Time Operational Intelligence Platform</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Built unified operational intelligence platform integrating production metrics, equipment health, cybersecurity posture, and supply chain data, providing real-time visibility for executive decision-making.
                </p>
                <ul className="space-y-3">
                  {[
                    'Integrated data from 50 production lines, 2,500+ IoT sensors, and security systems',
                    'Created executive dashboards with real-time production metrics and equipment health',
                    'Implemented automated alerting for equipment failures, security threats, and production delays',
                    'Enabled data-driven decision-making with predictive analytics and trend analysis',
                    'Provided mobile access for facility managers to monitor operations remotely'
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
                title: 'Operational Excellence',
                metrics: [
                  '99.2% system uptime across all 50 production lines',
                  '75% reduction in unplanned downtime (150 to 38 incidents)',
                  'MTTR reduced from 18 hours to 4.2 hours',
                  '$12.5M annual cost savings from downtime elimination'
                ]
              },
              {
                title: 'Predictive Maintenance',
                metrics: [
                  '94% accuracy in predicting equipment failures',
                  '72-hour advance warning for potential failures',
                  '2,500+ IoT sensors monitoring equipment health',
                  'Proactive maintenance scheduling eliminating emergency repairs'
                ]
              },
              {
                title: 'Cybersecurity & Compliance',
                metrics: [
                  'CMMC Level 3 certification achieved in 8 months',
                  'Zero cybersecurity incidents in 24 months',
                  '130 NIST 800-171 controls implemented',
                  'Zero-trust architecture protecting critical systems'
                ]
              },
              {
                title: 'Operational Visibility',
                metrics: [
                  'Real-time visibility across all manufacturing operations',
                  'Executive dashboards with production and security metrics',
                  'Mobile access for remote facility monitoring',
                  'Data-driven decision-making with predictive analytics'
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
                "NexDyne's predictive maintenance platform transformed our manufacturing operations. We went from 150+ unplanned downtime incidents per year to just 38, achieving 99.2% uptime. The 72-hour advance warning for equipment failures allows us to schedule maintenance during planned downtime, eliminating emergency repairs that disrupted production. Combined with CMMC Level 3 certification, we now have the operational excellence and cybersecurity posture required for critical defense manufacturing."
              </blockquote>
              <p className="font-semibold">— Facility Director, DoD Manufacturing Facility</p>
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
              'Palo Alto Networks Prisma Cloud Gov',
              'CrowdStrike Falcon Gov',
              'Azure IoT Hub',
              'Azure Machine Learning',
              'Power BI Gov dashboards',
              'SCADA/ICS integration',
              'Zero-trust network architecture',
              'NIST 800-171 controls',
              'Continuous monitoring (SIEM)'
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
          <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Manufacturing Operations?</h2>
          <p className="text-xl mb-8 opacity-90">
            Learn how NexDyne can help your facility achieve operational excellence, implement predictive maintenance, and achieve CMMC compliance.
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
