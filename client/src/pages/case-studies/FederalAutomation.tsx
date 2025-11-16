import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, CheckCircle2, TrendingUp, Users, Clock } from 'lucide-react';
import { Link } from 'wouter';

export default function FederalAutomation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Federal Government Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Federal Agency Achieves 85% Process Automation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Transforming manual workflows into intelligent automation while maintaining Top Secret/SCI compliance, reducing processing time from 6 weeks to 2 days.
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
              { value: '85%', label: 'Automation Rate', icon: TrendingUp },
              { value: '6 weeks → 2 days', label: 'Processing Time', icon: Clock },
              { value: '$8.2M', label: 'Annual Savings', icon: TrendingUp },
              { value: '250+', label: 'Users Trained', icon: Users }
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
              A major federal agency responsible for processing thousands of mission-critical applications annually faced severe bottlenecks due to manual, paper-based workflows. Processing times averaged 6 weeks, with error rates exceeding 12%, creating operational inefficiencies and impacting mission readiness.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              NexDyne was selected through a competitive procurement process to design and implement an intelligent automation solution that would maintain the agency's strict Top Secret/SCI security requirements while dramatically improving operational efficiency.
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
                title: 'Manual Processing Bottlenecks',
                description: 'Over 15,000 applications processed annually through paper-based workflows requiring 12-15 manual touchpoints per application.'
              },
              {
                title: 'High Error Rates',
                description: '12% error rate in data entry and validation, leading to rework and delays in mission-critical operations.'
              },
              {
                title: 'Security Compliance',
                description: 'All solutions must maintain Top Secret/SCI compliance with FedRAMP High authorization and FISMA controls.'
              },
              {
                title: 'Legacy System Integration',
                description: 'Need to integrate with 8 legacy systems spanning 20+ years of technology evolution without disruption.'
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
                title: 'Intelligent Document Processing',
                description: 'Deployed AI-powered OCR and natural language processing to automatically extract and validate data from paper and digital documents with 99.2% accuracy.'
              },
              {
                title: 'Workflow Automation Engine',
                description: 'Built custom workflow automation using robotic process automation (RPA) to handle 12 of the 15 manual touchpoints, reducing human intervention by 85%.'
              },
              {
                title: 'Legacy System Integration',
                description: 'Developed secure API middleware to connect 8 legacy systems, enabling real-time data synchronization without modifying core systems.'
              },
              {
                title: 'Zero-Trust Security Architecture',
                description: 'Implemented comprehensive zero-trust security controls with continuous monitoring, achieving FedRAMP High authorization within 6 months.'
              },
              {
                title: 'Change Management Program',
                description: 'Executed comprehensive training program for 250+ users with role-based training modules and ongoing support infrastructure.'
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
              { metric: '85%', label: 'Automation Rate', detail: '12 of 15 manual touchpoints eliminated' },
              { metric: '6 weeks → 2 days', label: 'Processing Time', detail: '95% reduction in cycle time' },
              { metric: '$8.2M', label: 'Annual Savings', detail: 'ROI achieved in 14 months' },
              { metric: '99.2%', label: 'Accuracy Rate', detail: 'From 88% to 99.2%' },
              { metric: '250+', label: 'Users Trained', detail: '98% user satisfaction rating' },
              { metric: '0', label: 'Security Incidents', detail: 'Perfect security record maintained' }
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
                NexDyne transformed our operations while maintaining the highest security standards. The 85% automation rate exceeded our expectations, and the 2-day processing time has dramatically improved our mission readiness. Their team's expertise in federal compliance was invaluable.
              </blockquote>
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl mr-4">
                  JD
                </div>
                <div>
                  <div className="font-bold text-lg">John Doe</div>
                  <div className="text-primary-foreground/80">Director of Operations</div>
                  <div className="text-sm text-primary-foreground/60">Federal Agency (Name Withheld)</div>
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
              'UiPath RPA',
              'Microsoft Power Automate',
              'Azure AI Services',
              'ServiceNow',
              'Python',
              'Node.js',
              'PostgreSQL',
              'Redis',
              'Docker',
              'Kubernetes',
              'Azure DevOps',
              'FedRAMP High',
              'NIST 800-53',
              'Zero-Trust Architecture',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Agency?</h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how NexDyne's proven federal automation methodology can deliver similar results for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Federal Assessment
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
