import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, Database, GitBranch, Shield, Zap, TrendingUp, AlertCircle, Search, BarChart3, Cloud } from 'lucide-react';

export default function Engineering() {
  const engineeringBenefits = [
    {
      icon: GitBranch,
      title: 'Automated Data Pipelines',
      description: 'Stop manually extracting, transforming, and loading data. We build automated pipelines that move data from source systems to analytics platforms with zero manual intervention—running 24/7 with error handling and retry logic.'
    },
    {
      icon: Shield,
      title: 'Data Quality & Governance',
      description: 'Bad data produces bad analytics. Our pipelines include built-in data quality checks, validation rules, and governance controls to ensure only trusted, accurate data reaches your analytics platforms.'
    },
    {
      icon: Zap,
      title: 'Real-Time & Batch Processing',
      description: 'Some analytics need real-time data, others can wait for overnight batch jobs. We build hybrid architectures that optimize for both—streaming data for operational dashboards, batch processing for historical analysis.'
    }
  ];

  const engineeringCapabilities = [
    {
      title: 'ETL/ELT Pipeline Development',
      description: 'We build data pipelines that extract data from legacy systems, transform it into analytics-ready formats, and load it into modern data platforms. Whether you need batch ETL or real-time ELT, we design pipelines optimized for your use case.',
      technologies: ['Apache Airflow', 'AWS Glue', 'dbt', 'Fivetran']
    },
    {
      title: 'Real-Time Streaming Pipelines',
      description: 'For operational analytics and real-time monitoring, we build streaming data pipelines using Kafka, Flink, and Spark Streaming. Ingest sensor data, transaction logs, and event streams with sub-second latency.',
      technologies: ['Apache Kafka', 'Apache Flink', 'Spark Streaming', 'Kinesis']
    },
    {
      title: 'Data Quality & Validation',
      description: 'Every pipeline includes automated data quality checks—schema validation, null checks, referential integrity, business rule validation. Bad data is quarantined for review instead of polluting your analytics.',
      technologies: ['Great Expectations', 'dbt tests', 'Custom validation']
    },
    {
      title: 'Data Catalog & Lineage',
      description: 'Know where your data comes from, how it is transformed, and who uses it. We implement data catalogs and lineage tracking so analysts can trust the data and auditors can verify compliance.',
      technologies: ['Apache Atlas', 'DataHub', 'AWS Glue Catalog']
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
            <span>Data Engineering & Pipelines</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-semibold mb-4">
              Data Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Data Engineering & Pipeline Development
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Analytics platforms are only as good as the data that feeds them. If your data is stuck in legacy systems, updated manually, or riddled with quality issues, your analytics will fail. Thalen Technologies builds enterprise-grade data pipelines that automate data movement, enforce quality standards, and deliver trusted data to your analytics platforms—24/7, with zero manual intervention. From batch ETL to real-time streaming, we engineer the data infrastructure that powers mission-critical analytics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Pipeline Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Architecture Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Data Engineering Is Critical for Analytics Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Without reliable data pipelines, your analytics team spends 80% of their time finding and cleaning data instead of analyzing it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engineeringBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <benefit.icon className="h-14 w-14 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Engineering Problem */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Manual Data Processes Are Killing Your Analytics ROI</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Most federal agencies have analysts who spend their days manually extracting data from legacy systems, cleaning it in Excel, and copying it into dashboards. This is not analytics work—this is data janitorial work. When data pipelines break, dashboards go stale. When data quality is poor, leadership loses trust in analytics. When data lineage is unknown, audits fail.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Thalen Technologies builds automated data pipelines that eliminate manual data work. We extract data from your legacy systems (mainframes, Oracle, SQL Server, flat files), transform it into analytics-ready formats, validate quality, and load it into modern data platforms—all automatically, with monitoring and alerting. Your analysts can finally focus on analysis instead of data plumbing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold mb-1">Zero Manual Intervention</div>
                    <div className="text-sm text-muted-foreground">Pipelines run automatically on schedule with error handling and retry logic</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold mb-1">Built-In Data Quality Checks</div>
                    <div className="text-sm text-muted-foreground">Automated validation ensures only trusted data reaches analytics platforms</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold mb-1">Full Lineage & Audit Trails</div>
                    <div className="text-sm text-muted-foreground">Track data from source to dashboard for compliance and troubleshooting</div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Data Engineering Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From batch ETL to real-time streaming, we build data pipelines for every use case.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {engineeringCapabilities.map((capability, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{capability.description}</p>
                  <div className="bg-secondary rounded-lg p-4">
                    <div className="text-sm font-semibold mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {capability.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-muted text-foreground px-3 py-1 rounded-lg border border-border font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Thalen Technologies Approach */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The Thalen Technologies Data Engineering Approach</h2>
              <p className="text-xl text-muted-foreground">
                We follow a proven methodology for building production-grade data pipelines.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Data Source Analysis</h3>
                      <p className="text-muted-foreground mb-3">We inventory your data sources, understand schemas, assess data quality, and identify integration challenges. You receive a comprehensive data landscape report with recommendations for pipeline architecture.</p>
                      <div className="text-sm font-semibold text-accent">Deliverable: Data Source Inventory & Integration Assessment</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Pipeline Architecture Design</h3>
                      <p className="text-muted-foreground mb-3">We design the optimal pipeline architecture for your use case—batch vs. streaming, ETL vs. ELT, orchestration tools, data quality frameworks. The architecture balances performance, cost, and maintainability.</p>
                      <div className="text-sm font-semibold text-accent">Deliverable: Pipeline Architecture Document & Technology Selection</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Pipeline Development & Testing</h3>
                      <p className="text-muted-foreground mb-3">We build the pipelines with automated testing, error handling, and monitoring. Every pipeline includes data quality checks, retry logic, and alerting. We test with production data volumes to ensure performance.</p>
                      <div className="text-sm font-semibold text-accent">Deliverable: Production-Ready Data Pipelines with Test Results</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Deployment & Knowledge Transfer</h3>
                      <p className="text-muted-foreground mb-3">We deploy pipelines to production with monitoring dashboards, runbooks, and documentation. Your team receives training on pipeline operations, troubleshooting, and extending pipelines for new data sources.</p>
                      <div className="text-sm font-semibold text-accent">Deliverable: Production Deployment with Operations Documentation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Data Engineering Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use proven, government-approved tools for enterprise data pipelines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Orchestration & Workflow</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Apache Airflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>AWS Step Functions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Prefect</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Azure Data Factory</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Data Processing</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Apache Spark</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>dbt (data build tool)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>AWS Glue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Python/Pandas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Data Quality & Governance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Great Expectations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Apache Atlas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>DataHub</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>dbt tests</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-navy-gradient text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-sm opacity-80">Pipeline uptime SLA</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">10TB+</div>
                  <div className="text-sm opacity-80">Data processed daily</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-80">Automated quality checks</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">&lt;15min</div>
                  <div className="text-sm opacity-80">Average incident response</div>
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
              Build a complete data infrastructure with these related Thalen Technologies offerings
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Cloud Infrastructure & Modernization</h3>
                <p className="text-muted-foreground mb-4">
                  Host your data pipelines on FedRAMP-authorized cloud platforms. We architect scalable, secure cloud infrastructure optimized for data workloads with auto-scaling and disaster recovery.
                </p>
                <Link href="/services/cloud">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Application Development & Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Connect your data pipelines to mission applications. We build APIs, microservices, and integration layers that make your engineered data accessible to downstream systems.
                </p>
                <Link href="/services/app-development">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your Data Pipelines?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free pipeline assessment. We will evaluate your current data processes, identify automation opportunities, and provide a roadmap for implementation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Pipeline Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Engineering Guide
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Data Assessment & Architecture Review',
            description: 'Evaluate current data infrastructure and design optimal architecture for your pipelines.',
            href: '/services/data-analytics/assessment',
            icon: Search
          },
          {
            title: 'Data Visualization & BI',
            description: 'Turn engineered data into actionable insights with interactive dashboards and analytics.',
            href: '/services/data-analytics/visualization',
            icon: BarChart3
          },
          {
            title: 'Cloud Infrastructure & Modernization',
            description: 'Deploy data pipelines on scalable cloud infrastructure with automated provisioning.',
            href: '/services/cloud',
            icon: Cloud
          }
        ]}
        title="Complete Data Infrastructure"
        description="Enhance your data engineering capabilities with assessment, visualization, and cloud services."
      />

      <Footer />
    </div>
  );
}
