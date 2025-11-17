import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, BarChart3, Brain, Database, LineChart, TrendingUp, Shield, Zap, Target, Activity } from 'lucide-react';

export default function DataAnalytics() {
  const subServices = [
    {
      icon: Target,
      title: 'Data Strategy & Roadmap',
      description: 'Transform your agency into a data-driven organization with a comprehensive strategy that aligns analytics initiatives with mission objectives and measurable outcomes.',
      link: '/services/data-analytics/strategy',
      metrics: ['6-week assessment', '3-year roadmap', 'Quick wins identified']
    },
    {
      icon: LineChart,
      title: 'Real-Time Analytics & Visualization',
      description: 'Build mission-critical dashboards and analytics platforms that deliver actionable intelligence to decision-makers in real-time with government-grade security.',
      link: '/services/data-analytics/visualization',
      metrics: ['Real-time insights', 'Custom dashboards', 'Mobile-ready']
    },
    {
      icon: Brain,
      title: 'Predictive Analytics & ML/AI',
      description: 'Deploy machine learning models and AI-powered analytics for fraud detection, predictive maintenance, threat intelligence, and operational optimization.',
      link: '/services/data-analytics/ml-ai',
      metrics: ['Explainable AI', 'Model governance', 'Bias detection']
    },
    {
      icon: Database,
      title: 'Data Engineering & Pipelines',
      description: 'Build scalable data pipelines, ETL processes, and data quality frameworks that power your analytics initiatives with reliable, trusted data.',
      link: '/services/data-analytics/engineering',
      metrics: ['Automated pipelines', 'Data quality', '99.9% uptime']
    }
  ];

  const capabilities = [
    {
      icon: Shield,
      title: 'FedRAMP High Authorized',
      description: 'All analytics platforms meet FedRAMP High security requirements with continuous monitoring and ATO support.'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Stream processing and real-time analytics for time-sensitive intelligence and operational awareness.'
    },
    {
      icon: Activity,
      title: 'Predictive Intelligence',
      description: 'Machine learning models for forecasting, anomaly detection, and predictive maintenance across mission systems.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-semibold mb-4">
              Flagship Service
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Data Analytics & Intelligence
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Transform data into mission-critical intelligence with real-time analytics platforms, ML/AI models, and predictive insights. NexDyne delivers government-grade analytics solutions that turn massive datasets into actionable intelligence—enabling faster decisions, improved outcomes, and measurable mission impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Analytics Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Analytics Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Data Analytics Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to implementation, NexDyne provides end-to-end analytics capabilities that transform how federal agencies leverage data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {subServices.map((service, index) => (
              <Link key={index} href={service.link}>
                <Card className="group hover:shadow-2xl transition-all duration-300 h-full cursor-pointer border-2 hover:border-accent">
                  <CardContent className="p-8">
                    <div className="bg-accent/10 rounded-lg p-4 w-fit mb-6">
                      <service.icon className="h-12 w-12 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.metrics.map((metric, idx) => (
                        <span key={idx} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">
                          {metric}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Government-Grade Analytics Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built for federal agencies with security, compliance, and mission impact at the core.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8 text-center">
                  <capability.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-navy-gradient text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">10PB+</div>
                  <div className="text-sm opacity-80">Data processed annually</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50ms</div>
                  <div className="text-sm opacity-80">Real-time query latency</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-sm opacity-80">ML model accuracy</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-80">Monitoring & support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why NexDyne */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Why Federal Agencies Choose NexDyne for Analytics</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Mission-Focused Analytics, Not Generic BI Tools</h3>
                  <p className="text-muted-foreground">
                    Commercial analytics platforms are built for sales dashboards and marketing metrics. NexDyne builds analytics solutions for intelligence analysis, fraud detection, threat assessment, and operational command and control. Our platforms handle classified data, real-time sensor feeds, and mission-critical decision support—not just quarterly revenue reports.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Security and Compliance Built In, Not Bolted On</h3>
                  <p className="text-muted-foreground">
                    Every analytics platform we build meets FedRAMP High requirements from day one. We handle classified data processing, implement NIST 800-53 controls, maintain continuous ATO compliance, and provide full audit trails. Your data never leaves government-approved cloud environments, and all ML models include explainability for regulatory review.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Real-Time Intelligence, Not Yesterday's Reports</h3>
                  <p className="text-muted-foreground">
                    Federal operations do not run on batch reports generated overnight. NexDyne delivers real-time streaming analytics with sub-second latency. Monitor threats as they emerge, track operations in progress, and enable commanders to make decisions based on current intelligence—not stale data from last night's ETL run.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Explainable AI for Government Accountability</h3>
                  <p className="text-muted-foreground">
                    Black-box AI models are not acceptable for government decision-making. Our ML implementations include full explainability, bias detection, and model governance. Every prediction comes with transparent reasoning that can withstand congressional oversight, IG audits, and legal review. You will understand not just what the model predicts, but why.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Data into Intelligence?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free analytics assessment. We will evaluate your current data landscape, identify high-impact analytics opportunities, and provide a roadmap for implementation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Analytics Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
