import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, TrendingDown, Clock, MapPin, Activity } from 'lucide-react';

export default function StateEnergyCommissionCaseStudy() {
  const metrics = [
    { icon: TrendingDown, value: '65%', label: 'Reduction in Outages' },
    { icon: MapPin, value: '500+', label: 'Substations Monitored' },
    { icon: Activity, value: '15K+', label: 'Real-Time Sensors' },
    { icon: Clock, value: '45min', label: 'Faster Fault Detection' }
  ];

  const challenges = [
    'Aging grid infrastructure with increasing outage frequency and duration',
    'Manual monitoring of 500+ substations across the state',
    'Lack of predictive maintenance capabilities leading to reactive repairs',
    'StateRAMP compliance requirements for cloud-based monitoring',
    'Integration of legacy SCADA systems with modern analytics platforms',
    'Limited budget and 12-month implementation deadline'
  ];

  const solutions = [
    {
      title: 'StateRAMP-Authorized IoT Platform',
      description: 'Deployed StateRAMP-authorized cloud platform with 15,000+ IoT sensors across 500+ substations, collecting real-time data on temperature, vibration, load, and equipment health.'
    },
    {
      title: 'Predictive Maintenance Analytics',
      description: 'Implemented machine learning models analyzing sensor data to predict equipment failures 2-4 weeks in advance, enabling proactive maintenance and preventing outages.'
    },
    {
      title: 'Real-Time Grid Monitoring Dashboard',
      description: 'Built comprehensive monitoring dashboard with real-time visualization of grid health, automated alerting for anomalies, and mobile access for field technicians.'
    },
    {
      title: 'Legacy SCADA Integration',
      description: 'Integrated existing SCADA systems with modern analytics platform using secure APIs and data transformation pipelines, preserving existing operational workflows.'
    }
  ];

  const outcomes = [
    {
      title: 'Dramatic Outage Reduction',
      value: '65% decrease',
      description: 'Reduced grid outages by 65% through predictive maintenance and faster fault detection, improving service reliability for 8.5 million residents.'
    },
    {
      title: 'Proactive Maintenance',
      value: '2-4 weeks advance',
      description: 'Predict equipment failures 2-4 weeks in advance with 89% accuracy, shifting from reactive repairs to planned maintenance windows.'
    },
    {
      title: 'Faster Response',
      value: '45 minutes saved',
      description: 'Reduced average fault detection and response time by 45 minutes through real-time monitoring and automated alerting to field crews.'
    },
    {
      title: 'Cost Savings',
      value: '$12M annually',
      description: 'Achieved $12M in annual savings from reduced emergency repairs, optimized maintenance schedules, and decreased outage-related costs.'
    }
  ];

  const technologies = [
    'Azure Government (StateRAMP-authorized)',
    'Azure IoT Hub for sensor data ingestion',
    'Azure Machine Learning for predictive models',
    'Power BI Gov for real-time dashboards',
    'Azure Time Series Insights',
    'Secure SCADA integration middleware',
    'Mobile app for field technicians',
    'Automated alerting and incident management'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              State Government Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              State Energy Commission: Grid Optimization with Predictive Analytics
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              How a state Energy Commission reduced power outages by 65% with a StateRAMP-authorized IoT platform monitoring 500+ substations and 15,000+ sensors with predictive maintenance analytics.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-muted text-accent px-4 py-2 rounded-full text-sm">State Government</span>
              <span className="bg-muted text-accent px-4 py-2 rounded-full text-sm">StateRAMP</span>
              <span className="bg-muted text-accent px-4 py-2 rounded-full text-sm">IoT & Sensors</span>
              <span className="bg-muted text-accent px-4 py-2 rounded-full text-sm">Predictive Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="border-2 text-center">
                <CardContent className="p-8">
                  <metric.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">{metric.value}</div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">The Challenge</h2>
            <p className="text-xl text-muted-foreground">
              The state Energy Commission faced increasing grid outages affecting 8.5 million residents due to aging infrastructure and reactive maintenance practices. Manual monitoring of 500+ substations across the state provided no early warning of equipment failures, resulting in costly emergency repairs and extended outages.
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Key Challenges</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start">
                    <Zap className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Solution</h2>
            <p className="text-xl text-muted-foreground">
              Thalen Technologies designed and implemented a StateRAMP-authorized IoT and predictive analytics platform with 15,000+ sensors, real-time monitoring dashboards, and machine learning models for proactive equipment maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <CheckCircle2 className="h-10 w-10 text-foreground mb-4" />
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Implementation Approach</h2>
          
          <div className="space-y-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">StateRAMP Assessment & Planning (Weeks 1-4)</h3>
                    <p className="text-muted-foreground mb-4">
                      Conducted StateRAMP compliance assessment, selected Azure Government as StateRAMP-authorized platform, documented security controls, and developed phased sensor deployment plan for 500+ substations.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted text-accent px-2 py-1 rounded">StateRAMP Assessment</span>
                      <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Platform Selection</span>
                      <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Deployment Planning</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sensor Deployment & Data Integration (Weeks 5-28)</h3>
                    <p className="text-muted-foreground mb-4">
                      Deployed 15,000+ IoT sensors across 500+ substations in phased rollout, integrated sensor data with Azure IoT Hub, connected legacy SCADA systems, and established real-time data pipelines.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Sensor Installation</span>
                      <span className="text-xs bg-muted text-accent px-2 py-1 rounded">IoT Integration</span>
                      <span className="text-xs bg-muted text-accent px-2 py-1 rounded">SCADA Connection</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ML Model Development & Dashboard Build (Weeks 20-40)</h3>
                    <p className="text-muted-foreground mb-4">
                      Developed predictive maintenance ML models using historical failure data, built real-time monitoring dashboards with Power BI Gov, implemented automated alerting, and created mobile app for field technicians.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted text-accent px-2 py-1 rounded">ML Model Training</span>
                      <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Dashboard Development</span>
                      <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Mobile App</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Training & Production Launch (Weeks 41-52)</h3>
                    <p className="text-muted-foreground mb-4">
                      Trained 120 grid operators and field technicians on new platform, established 24/7 monitoring center, validated StateRAMP compliance, and launched production system with continuous model refinement.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted text-accent px-2 py-1 rounded">User Training</span>
                      <span className="text-xs bg-muted text-accent px-2 py-1 rounded">24/7 Operations</span>
                      <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Production Launch</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Outcomes & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <TrendingUp className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">{outcome.title}</h3>
                  <div className="text-3xl font-bold text-accent mb-3">{outcome.value}</div>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Technologies & Platforms</h2>
          
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-foreground mr-2 flex-shrink-0" />
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <div className="text-6xl mb-6">"</div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-8 italic">
            Thalen Technologies's grid optimization platform has been transformational for our state's energy infrastructure. The 65% reduction in outages has dramatically improved service reliability for millions of residents, and the predictive maintenance capabilities have shifted us from reactive firefighting to proactive planning. Their StateRAMP expertise ensured we met all compliance requirements while delivering cutting-edge IoT analytics.
          </blockquote>
          <div className="font-semibold text-xl">Executive Director</div>
          <div className="text-accent">State Energy Commission</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your State Agency?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn how Thalen Technologies can help your state or local government agency implement StateRAMP-authorized IoT and analytics solutions with proven results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule State/Local Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/federal-solutions/state-local">
              <Button size="lg" variant="outline">
                View State/Local Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
