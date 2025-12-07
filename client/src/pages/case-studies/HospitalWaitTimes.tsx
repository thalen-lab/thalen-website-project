import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, CheckCircle2, Heart, Clock, Users } from 'lucide-react';
import { Link } from 'wouter';

export default function HospitalWaitTimes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Healthcare Operations Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hospital Reduces ER Wait Times by 65%
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              AI-powered patient flow optimization reduced average ER wait times from 4.2 hours to 1.5 hours while improving patient satisfaction by 42 points.
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
              { value: '65%', label: 'Wait Time Reduction', icon: Clock },
              { value: '4.2h → 1.5h', label: 'Average ER Wait', icon: Clock },
              { value: '+42pts', label: 'Patient Satisfaction', icon: Heart },
              { value: '150K+', label: 'Annual ER Visits', icon: Users }
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
              A 500-bed urban hospital with 150,000+ annual ER visits faced chronic overcrowding with average wait times exceeding 4 hours. Patient satisfaction scores ranked in the bottom 10th percentile nationally, and the hospital faced CMS penalties for excessive wait times.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Thalen Technologies deployed an AI-powered patient flow optimization platform that reduced average ER wait times by 65% (from 4.2 hours to 1.5 hours), improved patient satisfaction scores by 42 points, and eliminated CMS penalties while handling 15% more patient volume.
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
                title: 'Excessive Wait Times',
                description: 'Average 4.2-hour ER wait times with peak periods exceeding 8 hours, creating patient safety risks and EMTALA compliance concerns.'
              },
              {
                title: 'Inefficient Resource Allocation',
                description: 'Manual staffing and bed assignment processes unable to adapt to fluctuating demand, leading to bottlenecks and underutilized capacity.'
              },
              {
                title: 'Poor Patient Experience',
                description: 'Patient satisfaction scores in bottom 10th percentile nationally, impacting hospital reputation and CMS reimbursement rates.'
              },
              {
                title: 'Operational Inefficiency',
                description: 'Fragmented systems and manual workflows creating communication gaps between ER, labs, imaging, and inpatient units.'
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
                title: 'AI-Powered Demand Forecasting',
                description: 'Built ML models predicting ER volume and acuity 6-12 hours in advance with 92% accuracy, enabling proactive staffing and resource allocation.'
              },
              {
                title: 'Intelligent Patient Routing',
                description: 'Deployed automated triage and routing system directing patients to optimal care pathways based on acuity, specialty needs, and current capacity.'
              },
              {
                title: 'Dynamic Bed Management',
                description: 'Created real-time bed management system optimizing bed assignments, discharge timing, and housekeeping workflows to maximize throughput.'
              },
              {
                title: 'Automated Workflow Orchestration',
                description: 'Implemented workflow automation coordinating labs, imaging, specialists, and admissions to eliminate delays and handoff failures.'
              },
              {
                title: 'Real-Time Operations Dashboard',
                description: 'Built command center dashboards providing real-time visibility into patient flow, bottlenecks, and resource utilization across all departments.'
              },
              {
                title: 'Patient Communication System',
                description: 'Developed automated patient communication providing wait time estimates, status updates, and post-visit follow-up via SMS and mobile app.'
              }
            ].map((solution, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-foreground mr-4 mt-1 flex-shrink-0" />
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
      <section className="py-20 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Measurable Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { metric: '65%', label: 'Wait Time Reduction', detail: 'From 4.2 hours to 1.5 hours' },
              { metric: '+42pts', label: 'Patient Satisfaction', detail: 'From 32nd to 74th percentile' },
              { metric: '15%', label: 'Volume Increase', detail: 'Handled without capacity expansion' },
              { metric: '92%', label: 'Forecast Accuracy', detail: 'Demand prediction model' },
              { metric: '$0', label: 'CMS Penalties', detail: 'Eliminated all wait time penalties' },
              { metric: '35%', label: 'Staff Efficiency', detail: 'Improved resource utilization' }
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
                The patient flow optimization platform from Thalen Technologies has been significant. We've cut wait times by 65% while handling 15% more patients. Our staff is more efficient, our patients are happier, and we've eliminated CMS penalties. This is the future of hospital operations.
              </blockquote>
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center text-accent font-bold text-xl mr-4">
                  EJ
                </div>
                <div>
                  <div className="font-bold text-lg">Dr. Emily Johnson</div>
                  <div className="text-primary-foreground/80">Chief Medical Officer</div>
                  <div className="text-sm text-primary-foreground/60">Urban Medical Center</div>
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
              'Python',
              'TensorFlow',
              'Time Series Forecasting',
              'Optimization Algorithms',
              'HL7 FHIR',
              'Epic Integration',
              'Cerner Integration',
              'Real-Time Analytics',
              'Azure IoT',
              'Twilio',
              'React Native',
              'HIPAA Compliance',
              'Lean Six Sigma',
              'Process Mining',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Optimize Your Patient Flow</h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how Thalen Technologies's patient flow optimization solutions can reduce wait times and improve patient satisfaction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Healthcare Assessment
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
