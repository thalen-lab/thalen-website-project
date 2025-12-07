import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Download, CheckCircle2, TrendingUp, Users, Clock, Zap } from 'lucide-react';
import { Link } from 'wouter';

export default function StateEnergyCommission() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold">
                State Government Case Study
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                StateRAMP Authorized
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                IoT & Predictive Analytics
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              State Energy Commission Reduces Grid Outages 65% with Predictive Analytics
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Implementing StateRAMP-authorized IoT platform monitoring 500+ substations with 15,000+ sensors, enabling predictive maintenance that reduced outages by 65% for 8.5 million residents.
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
              { value: '65%', label: 'Outage Reduction', icon: TrendingUp },
              { value: '500+', label: 'Substations Monitored', icon: Zap },
              { value: '15K+', label: 'IoT Sensors Deployed', icon: Clock },
              { value: '$12M', label: 'Annual Savings', icon: Users }
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
              A state Energy Commission serving 8.5 million residents faced increasing grid outages due to aging infrastructure and reactive maintenance practices. The commission manually monitored 500+ substations across the state with no early warning system for equipment failures. Outages disrupted businesses, affected critical services, and cost the state economy over $45 million annually. Emergency repairs were expensive and time-consuming, while residents experienced extended power disruptions.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              NexDyne Technologies was selected through a competitive state procurement process to design and implement a StateRAMP-authorized IoT platform for real-time grid monitoring and predictive maintenance. The solution would deploy 15,000+ sensors across 500+ substations, integrate with legacy SCADA systems, and use machine learning to predict equipment failures weeks in advance.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 p-6 bg-secondary rounded-lg">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Contract Type</h3>
                <p className="text-lg font-bold">State Cooperative Purchase</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Contract Value</h3>
                <p className="text-lg font-bold">$6.8M (12 months)</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Compliance</h3>
                <p className="text-lg font-bold">StateRAMP + NERC CIP</p>
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
                title: 'Aging Grid Infrastructure',
                description: 'Increasing outage frequency and duration affecting 8.5M residents. Aging equipment failures disrupted businesses and critical services, costing the state economy $45M+ annually.'
              },
              {
                title: 'Manual Substation Monitoring',
                description: '500+ substations monitored manually with no predictive capabilities. Field technicians performed reactive inspections, missing early warning signs of equipment degradation.'
              },
              {
                title: 'Reactive Maintenance Approach',
                description: 'No predictive maintenance capabilities led to costly emergency repairs during outages. Equipment failures occurred unexpectedly, extending restoration times and increasing costs.'
              },
              {
                title: 'StateRAMP Compliance Requirements',
                description: 'Cloud-based monitoring platform required StateRAMP authorization for state data security. Legacy SCADA systems needed secure integration with modern analytics platforms.'
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
                <h3 className="text-2xl font-bold mb-4">StateRAMP-Authorized IoT Platform</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  NexDyne deployed a StateRAMP-authorized cloud platform on Azure Government with 15,000+ IoT sensors across 500+ substations, collecting real-time data on temperature, vibration, load, and equipment health.
                </p>
                <ul className="space-y-3">
                  {[
                    'Deployed 15,000+ IoT sensors across 500+ substations statewide',
                    'Implemented StateRAMP-authorized Azure Government cloud infrastructure',
                    'Collected real-time data on temperature, vibration, electrical load, and equipment health',
                    'Achieved NERC CIP compliance for critical infrastructure protection',
                    'Established secure data pipelines with encryption and access controls'
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
                <h3 className="text-2xl font-bold mb-4">Predictive Maintenance Analytics</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Implemented machine learning models analyzing sensor data to predict equipment failures 2-4 weeks in advance with 89% accuracy, enabling proactive maintenance and preventing outages.
                </p>
                <ul className="space-y-3">
                  {[
                    'Developed ML models trained on 5 years of historical maintenance and outage data',
                    'Achieved 89% accuracy in predicting equipment failures 2-4 weeks in advance',
                    'Enabled proactive maintenance scheduling during planned downtime windows',
                    'Reduced emergency repairs by 78% through early failure detection',
                    'Prevented 65% of potential outages through predictive interventions'
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
                <h3 className="text-2xl font-bold mb-4">Real-Time Grid Monitoring Dashboard</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Built comprehensive monitoring dashboard using Power BI Gov with real-time visualization of grid health, automated alerting for anomalies, and mobile access for field technicians.
                </p>
                <ul className="space-y-3">
                  {[
                    'Created real-time dashboards visualizing grid health across 500+ substations',
                    'Implemented automated alerting for equipment anomalies and threshold violations',
                    'Developed mobile app for field technicians with work order integration',
                    'Reduced average fault detection and response time by 45 minutes',
                    'Enabled data-driven decision-making for maintenance prioritization'
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
                <h3 className="text-2xl font-bold mb-4">Legacy SCADA Integration</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Integrated existing SCADA systems with modern analytics platform using secure APIs and data transformation pipelines, preserving existing operational workflows while adding predictive capabilities.
                </p>
                <ul className="space-y-3">
                  {[
                    'Integrated 500+ legacy SCADA systems with modern analytics platform',
                    'Implemented secure API middleware for real-time data exchange',
                    'Preserved existing operational workflows and operator interfaces',
                    'Established data transformation pipelines for SCADA protocol conversion',
                    'Maintained operational continuity during platform deployment'
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
                title: 'Outage Reduction',
                metrics: [
                  '65% reduction in grid outages statewide',
                  'Improved service reliability for 8.5M residents',
                  '78% reduction in emergency repairs',
                  'Extended equipment lifespan through proactive maintenance'
                ]
              },
              {
                title: 'Predictive Maintenance',
                metrics: [
                  '89% accuracy predicting failures 2-4 weeks in advance',
                  'Proactive maintenance scheduling during planned downtime',
                  '15,000+ sensors monitoring equipment health',
                  'Real-time anomaly detection and automated alerting'
                ]
              },
              {
                title: 'Operational Efficiency',
                metrics: [
                  '45 minutes faster fault detection and response',
                  'Real-time visibility across 500+ substations',
                  'Mobile access for field technicians',
                  'Data-driven maintenance prioritization'
                ]
              },
              {
                title: 'Cost Savings',
                metrics: [
                  '$12M annual savings from reduced outages and repairs',
                  'Optimized maintenance schedules reducing labor costs',
                  'Decreased outage-related economic impact',
                  'Extended equipment lifespan reducing capital expenditures'
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
                "NexDyne's predictive analytics platform transformed our grid operations. We reduced outages by 65%, saving $12M annually while dramatically improving service reliability for 8.5 million residents. The 2-4 week advance warning for equipment failures allows us to schedule maintenance proactively, eliminating costly emergency repairs. The StateRAMP-authorized platform gives us confidence in data security while the mobile app empowers our field technicians with real-time information."
              </blockquote>
              <p className="font-semibold">— Executive Director, State Energy Commission</p>
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
              'Azure Government (StateRAMP)',
              'Azure IoT Hub',
              'Azure Machine Learning',
              'Power BI Gov dashboards',
              'Azure Time Series Insights',
              'SCADA integration middleware',
              'Mobile app for field technicians',
              'NERC CIP compliance controls',
              'Automated alerting system'
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
          <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Energy Infrastructure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Learn how NexDyne can help your organization implement predictive maintenance, reduce outages, and achieve StateRAMP compliance.
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
