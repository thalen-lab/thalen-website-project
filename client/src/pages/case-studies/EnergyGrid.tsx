import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, CheckCircle2, Zap, DollarSign, Users } from 'lucide-react';
import { Link } from 'wouter';

export default function EnergyGrid() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Energy & Utilities Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart Grid Modernization: $500M Infrastructure Investment
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              AI-powered grid optimization reduced outages by 60% while improving renewable energy integration for 3M+ customers.
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
              { value: '60%', label: 'Outage Reduction', icon: Zap },
              { value: '$500M', label: 'Infrastructure Investment', icon: DollarSign },
              { value: '3M+', label: 'Customers Served', icon: Users },
              { value: '45%', label: 'Renewable Integration', icon: CheckCircle2 }
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
              A regional utility serving 3M+ customers across 50,000 square miles faced aging grid infrastructure, increasing renewable energy integration challenges, and rising customer expectations for reliability. The utility committed $500M to smart grid modernization to address these challenges.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Thalen Technologies designed and implemented a comprehensive smart grid solution combining IoT sensors, AI-powered analytics, and automated grid management, reducing outages by 60% while enabling 45% renewable energy integration and delivering $85M in annual operational savings.
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
                title: 'Aging Infrastructure',
                description: '40-year-old grid infrastructure with limited visibility and manual operations leading to frequent outages and slow restoration times.'
              },
              {
                title: 'Renewable Integration Complexity',
                description: 'Increasing solar and wind generation creating grid stability challenges with unpredictable supply fluctuations.'
              },
              {
                title: 'Customer Reliability Expectations',
                description: 'Rising customer expectations for 99.99% reliability and real-time outage communication in competitive energy market.'
              },
              {
                title: 'Operational Inefficiency',
                description: 'Manual grid management and reactive maintenance costing $120M+ annually in operational expenses and lost revenue.'
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
                title: 'Smart Grid IoT Infrastructure',
                description: 'Deployed 50,000+ smart meters and 2,000+ grid sensors providing real-time visibility into grid conditions, load patterns, and equipment health.'
              },
              {
                title: 'AI-Powered Grid Optimization',
                description: 'Built machine learning models for load forecasting, renewable integration, and automated grid balancing, optimizing power flow in real-time.'
              },
              {
                title: 'Automated Fault Detection & Isolation',
                description: 'Implemented automated systems detecting and isolating faults within seconds, reducing outage duration by 75% and minimizing affected customers.'
              },
              {
                title: 'Distributed Energy Resource Management',
                description: 'Created DERMS platform managing 15,000+ distributed solar installations and battery storage systems for grid stability.'
              },
              {
                title: 'Customer Engagement Platform',
                description: 'Developed mobile app and web portal providing real-time usage data, outage notifications, and energy management tools to 3M+ customers.'
              },
              {
                title: 'Cybersecurity Framework',
                description: 'Implemented comprehensive OT/IT security controls meeting NERC CIP requirements with continuous threat monitoring.'
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
              { metric: '60%', label: 'Outage Reduction', detail: 'From 240 to 96 minutes SAIDI' },
              { metric: '75%', label: 'Faster Restoration', detail: 'Average restoration time reduced' },
              { metric: '$85M', label: 'Annual Savings', detail: 'Operational efficiency gains' },
              { metric: '45%', label: 'Renewable Integration', detail: 'From 12% to 45% renewable mix' },
              { metric: '50,000+', label: 'Smart Meters Deployed', detail: '100% customer coverage' },
              { metric: '92%', label: 'Customer Satisfaction', detail: 'Up from 68%' }
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
                Thalen Technologies's smart grid solution improved our operations and customer experience. The 60% reduction in outages has dramatically improved reliability, and the AI-powered renewable integration enables us to meet our sustainability goals while maintaining grid stability. This is the foundation for our next 40 years.
              </blockquote>
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center text-accent font-bold text-xl mr-4">
                  LT
                </div>
                <div>
                  <div className="font-bold text-lg">Lisa Thompson</div>
                  <div className="text-primary-foreground/80">Chief Operating Officer</div>
                  <div className="text-sm text-primary-foreground/60">Regional Utility Company</div>
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
              'Azure IoT',
              'AWS IoT',
              'Python',
              'TensorFlow',
              'Time Series Forecasting',
              'SCADA',
              'DERMS',
              'ADMS',
              'GIS',
              'Smart Meters',
              'NERC CIP',
              'IEC 61850',
              'OpenADR',
              'Machine Learning',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Modernize Your Energy Infrastructure</h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how Thalen Technologies's smart grid solutions can improve reliability and enable renewable energy integration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Energy Assessment
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
