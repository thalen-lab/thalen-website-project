import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, LineChart, Activity, Gauge, Eye, Zap, Shield, Database, Brain, TrendingUp } from 'lucide-react';

export default function Visualization() {
  const visualizationBenefits = [
    {
      icon: Activity,
      title: 'Real-Time Operational Dashboards',
      description: 'Monitor mission-critical operations as they happen with sub-second data refresh rates. Track threats, operations, logistics, and resource status in real-time—not with yesterday\'s batch reports.'
    },
    {
      icon: Gauge,
      title: 'Executive Command Centers',
      description: 'Give leadership the intelligence they need to make decisions with confidence. Purpose-built dashboards that surface critical KPIs, anomalies, and trends without overwhelming users with irrelevant data.'
    },
    {
      icon: Eye,
      title: 'Predictive Insights, Not Just Historical Reports',
      description: 'Move beyond backward-looking reports. Our analytics platforms combine real-time data with ML models to forecast trends, predict failures, and identify emerging threats before they escalate.'
    }
  ];

  const useCases = [
    {
      title: 'Intelligence Analysis Workbenches',
      description: 'Analysts need to correlate data from dozens of sources, identify patterns, and brief leadership—all under time pressure. NexDyne Technology builds custom intelligence workbenches that integrate SIGINT, HUMINT, OSINT, and other data streams into unified visual analysis environments.',
      metrics: ['50+ data sources integrated', '3-second query response', 'Classified data handling']
    },
    {
      title: 'Operational Command & Control',
      description: 'Military and emergency response operations require real-time situational awareness. We build command center dashboards that display asset locations, mission status, weather, threats, and logistics on unified displays with map-based visualization.',
      metrics: ['Real-time GPS tracking', 'Multi-source data fusion', 'Mobile field access']
    },
    {
      title: 'Fraud Detection & Monitoring',
      description: 'Benefits programs lose billions to fraud annually. Our fraud detection dashboards combine transaction monitoring, behavioral analytics, and ML-based anomaly detection to flag suspicious activity in real-time for investigator review.',
      metrics: ['$500M+ fraud prevented', '95% detection accuracy', 'Automated case routing']
    },
    {
      title: 'Performance Management Dashboards',
      description: 'Agency leaders need visibility into program performance, budget execution, and mission outcomes. We build executive dashboards that track KPIs, highlight variances, and enable drill-down analysis without requiring SQL or BI tool training.',
      metrics: ['50+ KPIs tracked', 'Automated reporting', 'Mobile executive access']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <nav className="text-sm mb-6 opacity-80">
            <Link href="/services/data-analytics" className="hover:text-accent">Data Analytics & Intelligence</Link>
            <span className="mx-2">/</span>
            <span>Real-Time Analytics & Visualization</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-semibold mb-4">
              Mission-Critical Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real-Time Analytics & Visualization
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Federal operations do not run on last night's batch reports. When threats emerge, operations unfold, or crises develop, decision-makers need real-time intelligence—not data that is hours or days old. NexDyne Technology builds mission-critical analytics platforms that deliver actionable insights in real-time with government-grade security. From intelligence analysis to operational command centers, our dashboards turn massive data streams into clear, actionable intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Dashboard Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Visualization Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visualization Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Real-Time Analytics Matter for Federal Missions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When decisions have national security implications, you cannot afford to wait for overnight ETL jobs to complete.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visualizationBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <benefit.icon className="h-14 w-14 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Visualization Problem */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Commercial BI Tools Are Not Built for Federal Missions</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Tableau and Power BI are excellent for sales dashboards and marketing reports. They are not designed for intelligence analysis, threat monitoring, or operational command and control. Commercial tools cannot handle classified data, lack real-time streaming capabilities, and provide no audit trails for congressional oversight.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              NexDyne Technology builds custom analytics platforms purpose-designed for federal missions. Our dashboards handle real-time sensor feeds, integrate classified and unclassified data, provide full audit trails, and meet FedRAMP High security requirements. You get intelligence platforms, not generic business intelligence tools.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Sub-Second Data Refresh</div>
                  <div className="text-sm text-muted-foreground">Real-time streaming analytics with Apache Kafka, Flink, and Spark Streaming</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Classified Data Handling</div>
                  <div className="text-sm text-muted-foreground">Air-gapped deployments for TS/SCI environments with full security controls</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Custom Visualizations</div>
                  <div className="text-sm text-muted-foreground">Purpose-built dashboards for your mission—not generic templates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Mission-Critical Analytics Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              NexDyne Technology has built real-time analytics platforms for intelligence, operations, fraud detection, and executive decision support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl hover:border-accent transition-all duration-300 border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.metrics.map((metric, idx) => (
                      <span key={idx} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-semibold">
                        {metric}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real-Time Analytics Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use proven, government-approved technologies for mission-critical analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg hover:border-accent transition-all border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Streaming Data Processing</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                    <span>Apache Kafka for event streaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                    <span>Apache Flink for real-time processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                    <span>Spark Streaming for batch + streaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                    <span>Redis for sub-second caching</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:border-accent transition-all border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Visualization & Dashboards</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                    <span>React + D3.js for custom viz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                    <span>Grafana for operational monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                    <span>Mapbox for geospatial analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                    <span>WebSockets for live updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:border-accent transition-all border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Data Storage & Query</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                    <span>ClickHouse for OLAP queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                    <span>Elasticsearch for full-text search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                    <span>TimescaleDB for time-series data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                    <span>PostgreSQL for relational data</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-navy-gradient text-primary-foreground border-0 hover:shadow-2xl transition-all active:scale-95">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">&lt;50ms</div>
                  <div className="text-sm opacity-80">Query response time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1M+</div>
                  <div className="text-sm opacity-80">Events per second processed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99.99%</div>
                  <div className="text-sm opacity-80">Platform uptime SLA</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-80">FedRAMP High compliant</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complementary Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your analytics capabilities with these related NexDyne Technology offerings
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg hover:border-accent transition-all border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Intelligent Automation & Process Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Turn your analytics insights into automated action. Our RPA and process orchestration solutions trigger workflows based on real-time data thresholds and alerts.
                </p>
                <Link href="/services/automation">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:border-accent transition-all border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Custom Software Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Build custom mission applications powered by your analytics platform. We develop bespoke dashboards, mobile apps, and citizen portals that leverage your data infrastructure.
                </p>
                <Link href="/services/custom-software">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Real-Time Analytics for Your Mission?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a demo. We will show you live examples of real-time analytics platforms we have built for government agencies and discuss your specific requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Live Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Architecture Guide
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Data Engineering & Pipelines',
            description: 'Build reliable data pipelines that feed your visualization and BI platforms.',
            href: '/services/data-analytics/engineering',
            icon: Database
          },
          {
            title: 'Machine Learning & AI',
            description: 'Enhance visualizations with predictive analytics and AI-powered insights.',
            href: '/services/data-analytics/ml-ai',
            icon: Brain
          },
          {
            title: 'Business Intelligence Strategy',
            description: 'Develop comprehensive BI strategy that aligns analytics with organizational goals.',
            href: '/services/business-intelligence',
            icon: TrendingUp
          }
        ]}
        title="Enhance Your Analytics"
        description="Combine visualization with data engineering, ML/AI, and BI strategy for complete analytics solutions."
      />

      <Footer />
    </div>
  );
}
