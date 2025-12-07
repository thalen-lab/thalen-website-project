import { ArrowRight, CheckCircle2, TrendingDown, Zap, DollarSign, Database } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function DODDataPipelines() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-sm font-semibold text-orange-400">CASE STUDY • DATA ENGINEERING</span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                IDIQ Contract
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                Secret Clearance
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              DOD Saves $12M Annually with Automated Data Pipelines
            </h1>
            <p className="text-xl opacity-90 mb-8">
              How the Department of Defense eliminated manual data integration work and achieved real-time supply chain visibility across 47 systems
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <div className="font-semibold text-orange-400">Client</div>
                <div>Department of Defense</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Industry</div>
                <div>Federal Government</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Timeline</div>
                <div>24 months</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Contract Value</div>
                <div>$18.5M</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Services</div>
                <div>Data Engineering, Cloud Infrastructure, Integration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Impact at a Glance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">$12M</div>
                <div className="text-muted-foreground">Annual Cost Savings</div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-muted-foreground">Reduction in Manual Data Work</div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <Database className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">47</div>
                <div className="text-muted-foreground">Systems Integrated</div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <TrendingDown className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">18hrs</div>
                <div className="text-muted-foreground">to 15min Data Refresh Time</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              The Department of Defense logistics command managed a $180 billion supply chain spanning 47 disparate systems—ERP platforms, warehouse management systems, transportation tracking tools, and legacy mainframes. Each system used different data formats, update frequencies, and access protocols.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              A team of 35 data analysts spent their days manually extracting data from these systems, transforming it into common formats, and loading it into Excel spreadsheets for reporting. This process took 18 hours to complete and was error-prone. By the time leadership received supply chain reports, the data was already outdated.
            </p>
            <p className="text-lg text-muted-foreground">
              The DOD needed real-time visibility into inventory levels, shipment status, and procurement activities to optimize logistics operations, reduce waste, and ensure mission readiness. Manual data integration was unsustainable—they needed automated data pipelines that could handle the scale and complexity of defense logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Thalen Technologies Solution</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">1. Cloud-Native Data Lake Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  We designed a FedRAMP-authorized data lake on AWS GovCloud that serves as the central repository for all supply chain data. The architecture uses S3 for raw data storage, Glue for ETL orchestration, and Athena for SQL queries—providing scalability, security, and cost efficiency.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-semibold mb-2">Architecture Highlights:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Multi-zone encryption with AWS KMS</li>
                    <li>• Automated data lifecycle management</li>
                    <li>• Petabyte-scale storage with sub-second query performance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">2. Automated Data Ingestion Pipelines</h3>
                <p className="text-muted-foreground mb-4">
                  We built 47 custom data connectors that automatically extract data from source systems every 15 minutes. Each connector handles system-specific authentication, rate limiting, and error recovery. Data flows through validation, transformation, and enrichment stages before landing in the data lake.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-semibold mb-2">Pipeline Capabilities:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Real-time CDC (Change Data Capture) for critical systems</li>
                    <li>• Automated schema drift detection and adaptation</li>
                    <li>• Self-healing retry logic with exponential backoff</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">3. Data Quality & Governance Framework</h3>
                <p className="text-muted-foreground mb-4">
                  We implemented automated data quality checks that validate completeness, accuracy, and consistency at every pipeline stage. The system flags anomalies, tracks data lineage, and maintains audit logs for compliance. Data stewards receive alerts when quality thresholds are breached.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-semibold mb-2">Quality Controls:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• 127 automated validation rules</li>
                    <li>• Real-time data quality dashboards</li>
                    <li>• Automated reconciliation with source systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">4. Unified Analytics Layer</h3>
                <p className="text-muted-foreground mb-4">
                  We created a semantic data model that provides a single source of truth for supply chain analytics. Business users can query data using familiar terms (e.g., "available inventory," "in-transit shipments") without needing to understand the underlying 47 systems. The model automatically joins data across sources and applies business logic.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-semibold mb-2">Analytics Features:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Pre-built data marts for common use cases</li>
                    <li>• Self-service BI tool integration (Tableau, Power BI)</li>
                    <li>• API access for custom applications</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Results & Impact</h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">$12M Annual Cost Savings</h3>
                    <p className="text-muted-foreground">
                      Eliminated 35 FTE positions previously dedicated to manual data extraction and transformation. Redeployed analysts to higher-value work like supply chain optimization and demand forecasting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">95% Reduction in Manual Data Work</h3>
                    <p className="text-muted-foreground">
                      Automated pipelines process 2.4 million records daily with zero manual intervention. Data analysts now spend 95% less time on data wrangling and 95% more time on analysis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Real-Time Data Refresh (15 Minutes)</h3>
                    <p className="text-muted-foreground">
                      Supply chain data is now refreshed every 15 minutes (down from 18 hours). Leadership has real-time visibility into inventory, shipments, and procurement—enabling faster, data-driven decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">99.8% Data Pipeline Uptime</h3>
                    <p className="text-muted-foreground">
                      Automated monitoring, self-healing retry logic, and redundant infrastructure ensure pipelines run reliably 24/7. The system has maintained 99.8% uptime over 18 months of production operation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">$340M in Inventory Optimization</h3>
                    <p className="text-muted-foreground">
                      Real-time visibility enabled the DOD to identify $340M in excess inventory that could be redistributed or liquidated. Improved demand forecasting reduced stockouts by 42%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-3xl text-accent mb-6">"</div>
              <p className="text-xl mb-6 italic">
                Thalen Technologies's data engineering expertise transformed our supply chain operations. We went from waiting 18 hours for stale reports to having real-time visibility across 47 systems. The automated pipelines are rock-solid—they just work. Our analysts are finally doing analysis instead of data janitorial work.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-bold">Colonel Michael Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Director of Logistics Analytics, Department of Defense</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Used in This Project</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the Thalen Technologies capabilities that delivered these results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Data Engineering & Pipelines</h3>
                <p className="text-muted-foreground mb-4">
                  Build automated data pipelines that ingest, transform, and deliver mission-critical data at scale with 99.9% uptime.
                </p>
                <Link href="/services/data-analytics/engineering">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Cloud Infrastructure & Modernization</h3>
                <p className="text-muted-foreground mb-4">
                  Architect FedRAMP-authorized cloud platforms optimized for data workloads with security and scalability.
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
                <h3 className="text-xl font-bold mb-3">Enterprise Integration Platform</h3>
                <p className="text-muted-foreground mb-4">
                  Connect siloed systems with automated data synchronization and real-time integration workflows.
                </p>
                <Link href="/services/automation/integration">
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
            Schedule a free pipeline assessment. We will evaluate your current data processes, identify automation opportunities, and show you how to achieve real-time data visibility.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Free Pipeline Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
