import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, CheckCircle2, Factory, TrendingUp, AlertTriangle } from 'lucide-react';
import { Link } from 'wouter';

export default function ManufacturingUptime() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Manufacturing Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Manufacturing Giant Achieves 99.2% Uptime
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Cybersecurity and predictive maintenance eliminated 75% of unplanned downtime across 50+ facilities, saving $18M annually.
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
              { value: '75%', label: 'Downtime Reduction', icon: CheckCircle2 },
              { value: '$18M', label: 'Annual Savings', icon: TrendingUp },
              { value: '50+', label: 'Facilities Connected', icon: Factory }
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
              A Fortune 500 manufacturing company with 50+ facilities across North America faced chronic unplanned downtime costing $72M annually. Equipment failures, cybersecurity vulnerabilities, and reactive maintenance practices created operational inefficiencies and safety risks.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              NexDyne deployed an integrated solution combining industrial cybersecurity, IoT sensor networks, and AI-powered predictive maintenance, reducing unplanned downtime by 75% and achieving 99.2% system uptime across all facilities.
            </p>
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
                title: 'Chronic Unplanned Downtime',
                description: 'Average 8% unplanned downtime across facilities costing $72M annually in lost production and emergency repairs.'
              },
              {
                title: 'Cybersecurity Vulnerabilities',
                description: 'Legacy industrial control systems with no network segmentation, creating critical cybersecurity risks and regulatory exposure.'
              },
              {
                title: 'Reactive Maintenance Culture',
                description: 'Run-to-failure maintenance approach with no predictive capabilities, resulting in catastrophic equipment failures.'
              },
              {
                title: 'Fragmented Operations',
                description: 'No unified view of operations across 50+ facilities, limiting ability to identify patterns and optimize performance.'
              }
            ].map((challenge, index) => (
              <Card key={index}>
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
          <h2 className="text-4xl font-bold mb-8">Our Solution</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Industrial IoT Sensor Network',
                description: 'Deployed 15,000+ IoT sensors across critical equipment monitoring vibration, temperature, pressure, and electrical signatures in real-time.'
              },
              {
                title: 'AI-Powered Predictive Maintenance',
                description: 'Built machine learning models analyzing sensor data to predict equipment failures 2-4 weeks in advance with 94% accuracy, enabling proactive maintenance.'
              },
              {
                title: 'Industrial Cybersecurity Framework',
                description: 'Implemented network segmentation, zero-trust architecture, and continuous monitoring across all OT/IT systems, achieving IEC 62443 compliance.'
              },
              {
                title: 'Unified Operations Platform',
                description: 'Created centralized operations dashboard providing real-time visibility across all 50+ facilities with automated alerting and workflow management.'
              },
              {
                title: 'Maintenance Process Transformation',
                description: 'Redesigned maintenance workflows from reactive to predictive, with mobile apps for technicians and automated work order generation.'
              },
              {
                title: 'Team Training & Change Management',
                description: 'Trained 500+ maintenance technicians and operators on new predictive maintenance processes and digital tools.'
              }
            ].map((solution, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-accent/10">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Measurable Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { metric: '99.2%', label: 'System Uptime', detail: 'From 92% to 99.2%' },
              { metric: '75%', label: 'Downtime Reduction', detail: 'Unplanned downtime eliminated' },
              { metric: '$18M', label: 'Annual Savings', detail: 'ROI achieved in 16 months' },
              { metric: '94%', label: 'Prediction Accuracy', detail: 'AI model performance' },
              { metric: '15,000+', label: 'IoT Sensors Deployed', detail: 'Across 50+ facilities' },
              { metric: '0', label: 'Cybersecurity Incidents', detail: 'Since implementation' }
            ].map((result, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{result.metric}</div>
                  <div className="text-lg font-semibold mb-1">{result.label}</div>
                  <div className="text-sm text-muted-foreground">{result.detail}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12">
              <div className="text-6xl text-accent mb-6">"</div>
              <blockquote className="text-2xl font-medium mb-8">
                The transformation NexDyne delivered goes beyond the numbers. We've shifted from reactive firefighting to proactive optimization. The 99.2% uptime has enabled us to take on new contracts we couldn't have supported before, and our team's confidence in our systems has never been higher.
              </blockquote>
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl mr-4">
                  DW
                </div>
                <div>
                  <div className="font-bold text-lg">David Wilson</div>
                  <div className="text-primary-foreground/80">VP of Operations</div>
                  <div className="text-sm text-primary-foreground/60">Fortune 500 Manufacturing Company</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Technologies & Methodologies</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Azure IoT Hub',
              'AWS IoT Core',
              'Python',
              'TensorFlow',
              'Time Series Analysis',
              'Claroty',
              'Nozomi Networks',
              'Rockwell Automation',
              'Siemens PLC',
              'OPC UA',
              'IEC 62443',
              'NIST Cybersecurity Framework',
              'Predictive Analytics',
              'Digital Twin',
              'Agile/Scrum'
            ].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Eliminate Unplanned Downtime</h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how NexDyne's predictive maintenance and industrial cybersecurity solutions can transform your operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Manufacturing Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
