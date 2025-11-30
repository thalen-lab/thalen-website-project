import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, CheckCircle2, Plane, TrendingUp, Wrench } from 'lucide-react';
import { Link } from 'wouter';

export default function AerospaceDigitalTwin() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Aerospace & Defense Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Aerospace: Digital Twin Reduces Maintenance Costs 40%
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Digital twin platform for aircraft fleet enabled predictive maintenance, reducing unscheduled maintenance by 70% and saving $95M annually.
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
              { value: '40%', label: 'Maintenance Cost Reduction', icon: TrendingUp },
              { value: '70%', label: 'Unscheduled Maintenance Reduction', icon: Wrench },
              { value: '$95M', label: 'Annual Savings', icon: TrendingUp },
              { value: '250+', label: 'Aircraft in Fleet', icon: Plane }
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
              A major aerospace manufacturer operating a fleet of 250+ commercial aircraft faced escalating maintenance costs ($240M+ annually) and frequent unscheduled maintenance events disrupting operations and customer satisfaction. Traditional time-based maintenance approaches were inefficient and costly.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Thalen Technologies designed and deployed a comprehensive digital twin platform integrating real-time sensor data, physics-based models, and AI analytics to enable predictive maintenance. The solution reduced maintenance costs by 40% ($95M annually), cut unscheduled maintenance by 70%, and improved aircraft availability by 12%.
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
                title: 'Escalating Maintenance Costs',
                description: '$240M+ annual maintenance costs with time-based maintenance resulting in unnecessary part replacements and excessive downtime.'
              },
              {
                title: 'Unscheduled Maintenance Events',
                description: 'Frequent unexpected failures disrupting flight schedules, impacting customer satisfaction, and creating safety risks.'
              },
              {
                title: 'Limited Predictive Capabilities',
                description: 'No ability to predict component failures in advance, forcing reactive maintenance approach and emergency part procurement.'
              },
              {
                title: 'Fragmented Data Systems',
                description: 'Maintenance data, sensor telemetry, and operational data siloed across multiple systems preventing holistic analysis.'
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
                title: 'Digital Twin Platform',
                description: 'Built comprehensive digital twin platform creating virtual replicas of all 250+ aircraft, integrating real-time sensor data with physics-based models.'
              },
              {
                title: 'Predictive Maintenance AI',
                description: 'Deployed ML models analyzing 10,000+ sensor streams per aircraft to predict component failures 30-90 days in advance with 89% accuracy.'
              },
              {
                title: 'Physics-Based Degradation Models',
                description: 'Developed engineering models simulating component wear, fatigue, and degradation under actual operating conditions for each aircraft.'
              },
              {
                title: 'Integrated Data Platform',
                description: 'Created unified data lake integrating maintenance records, sensor telemetry, flight operations, and supply chain data for holistic analysis.'
              },
              {
                title: 'Maintenance Optimization Engine',
                description: 'Built optimization algorithms scheduling maintenance to minimize operational disruption while maximizing component life and safety margins.'
              },
              {
                title: 'Technician Mobile Tools',
                description: 'Developed mobile apps providing technicians with digital twin insights, AR-guided repairs, and automated documentation during maintenance.'
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
              { metric: '40%', label: 'Maintenance Cost Reduction', detail: 'From $240M to $145M annually' },
              { metric: '70%', label: 'Unscheduled Maintenance Reduction', detail: 'Predictive approach eliminated most failures' },
              { metric: '$95M', label: 'Annual Savings', detail: 'ROI achieved in 22 months' },
              { metric: '89%', label: 'Prediction Accuracy', detail: 'Component failure forecasting' },
              { metric: '12%', label: 'Availability Improvement', detail: 'More aircraft in service' },
              { metric: '250+', label: 'Digital Twins Deployed', detail: 'Entire fleet coverage' }
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
                Thalen Technologies's digital twin platform has revolutionized our maintenance operations. The 70% reduction in unscheduled maintenance has dramatically improved our operational reliability, and the $95M in annual savings exceeded our business case. We now have unprecedented visibility into our fleet's health and can optimize maintenance like never before.
              </blockquote>
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl mr-4">
                  JK
                </div>
                <div>
                  <div className="font-bold text-lg">James Kim</div>
                  <div className="text-primary-foreground/80">VP of Maintenance & Engineering</div>
                  <div className="text-sm text-primary-foreground/60">Major Aerospace Manufacturer</div>
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
              'Azure Digital Twins',
              'Python',
              'TensorFlow',
              'Physics-Based Modeling',
              'Time Series Analysis',
              'Optimization Algorithms',
              'IoT Edge Computing',
              'Apache Kafka',
              'Databricks',
              'Power BI',
              'Unity AR',
              'React Native',
              'Finite Element Analysis',
              'Reliability Engineering',
              'Agile/SAFe'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Maintenance Operations</h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how Thalen Technologies's digital twin solutions can enable predictive maintenance and reduce costs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Digital Twin Assessment
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
