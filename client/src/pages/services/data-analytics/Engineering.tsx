import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Database, Zap, Shield } from 'lucide-react';

export default function Engineering() {
  const engineeringBenefits = [
    {
      icon: Database,
      title: 'Automated Data Pipelines',
      description: 'Stop manually moving data between systems. We build automated ETL/ELT pipelines using FedRAMP-authorized tools (Informatica Gov, Talend, AWS Glue) that extract, transform, and load data on schedules or in real-time—no manual intervention required.'
    },
    {
      icon: Zap,
      title: 'Real-Time Data Processing',
      description: 'Batch processing is too slow for operational decisions. Our real-time data pipelines process streaming data from sensors, applications, and external sources with sub-second latency using Kafka, Kinesis, and stream processing frameworks.'
    },
    {
      icon: Shield,
      title: 'Data Quality & Governance',
      description: 'Bad data leads to bad decisions. We implement data quality frameworks with automated validation, cleansing, and monitoring to ensure your analytics and ML models train on trusted, accurate data.'
    }
  ];

  const engineeringUseCases = [
    {
      title: 'Multi-Source Data Integration for Intelligence Analysis',
      description: 'Intelligence analysts need to correlate data from dozens of classified and unclassified sources—SIGINT, HUMINT, OSINT, sensor data, and partner feeds. Thalen Technologies built a real-time data integration platform for a defense intelligence agency that ingests 50+ data sources, normalizes formats, resolves entity identities, and loads data into a unified analytics environment. Analysts can now query across all sources in seconds instead of waiting days for manual data integration.',
      metrics: ['50+ data sources integrated', '3-second query latency', '99.9% pipeline uptime']
    },
    {
      title: 'Real-Time Fraud Detection Pipeline',
      description: 'A federal benefits agency needed to detect fraudulent claims before payments were issued. We built a real-time data pipeline that streams transaction data from multiple systems, enriches it with third-party data (credit bureaus, identity verification), runs ML fraud models, and flags suspicious claims for investigator review—all within 5 seconds of claim submission.',
      metrics: ['$500M fraud prevented', '5-second processing time', '95% detection accuracy']
    },
    {
      title: 'Data Warehouse Modernization',
      description: 'A state government agency was running a legacy on-premises data warehouse that took 12 hours to refresh and cost $2M annually to maintain. We migrated them to Snowflake Government with automated ELT pipelines that refresh data every 15 minutes. The new platform reduced costs by 60% while improving data freshness from 12 hours to 15 minutes.',
      metrics: ['60% cost reduction', '15-minute data refresh', '10x query performance']
    },
    {
      title: 'IoT Sensor Data Processing',
      description: 'A defense logistics agency needed to monitor the condition of equipment across 200+ facilities using IoT sensors. We built a real-time data pipeline that ingests sensor telemetry (temperature, vibration, power), detects anomalies using ML models, and triggers maintenance alerts before failures occur. The system processes 10M sensor readings per day with sub-second latency.',
      metrics: ['10M readings/day', 'Sub-second latency', '35% downtime reduction']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section - Z100 Editorial Style */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container max-w-5xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-12">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-zinc-900 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/data-analytics" className="hover:text-zinc-900 transition-colors">Data Analytics</Link>
            <span>/</span>
            <span className="text-zinc-900">Data Engineering & Pipeline Development</span>
          </div>

          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-light text-zinc-900 leading-[1.1] tracking-tight">
              Data Engineering & Pipeline Development
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light max-w-4xl">
              Analytics and ML models are only as good as the data they run on. If your data is stuck in silos, arrives late, or contains errors, your insights will be wrong. Thalen Technologies builds scalable data pipelines using FedRAMP and StateRAMP-authorized ETL tools (Informatica Gov, Talend, AWS Glue) that automate data movement, transformation, and quality validation across government systems (federal, state, and local). From batch processing to real-time streaming, we ensure your data arrives on time, in the right format, and ready for analysis.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 text-base font-normal rounded-none"
                >
                  Request Data Engineering Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white px-8 h-12 text-base font-normal rounded-none"
              >
                View Pipeline Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Engineering Benefits - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4 tracking-tight">
            Why Data Engineering Matters for Government Analytics
          </h2>
          <p className="text-xl text-zinc-600 leading-relaxed font-light mb-16 max-w-3xl">
            You cannot build reliable analytics on unreliable data. Data engineering ensures your data is accurate, timely, and ready for analysis.
          </p>

          <div className="space-y-12">
            {engineeringBenefits.map((benefit, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <benefit.icon className="h-8 w-8 text-zinc-900" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-zinc-900 mb-3">{benefit.title}</h3>
                  <p className="text-base text-zinc-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Engineering Use Cases - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-16 tracking-tight">
            Data Engineering Implementation Success Stories
          </h2>

          <div className="space-y-16">
            {engineeringUseCases.map((useCase, index) => (
              <div key={index} className="border-l-2 border-zinc-900 pl-8">
                <h3 className="text-2xl font-light text-zinc-900 mb-4">{useCase.title}</h3>
                <p className="text-base text-zinc-600 leading-relaxed mb-6">{useCase.description}</p>
                
                <div className="flex flex-wrap gap-4">
                  {useCase.metrics.map((metric, idx) => (
                    <span key={idx} className="text-sm text-zinc-900 px-4 py-2 border border-zinc-300">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* FedRAMP Data Engineering Tools - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-8 tracking-tight">
            FedRAMP-Authorized Data Engineering Tools
          </h2>
          
          <p className="text-base text-zinc-600 leading-relaxed mb-8">
            We build data pipelines using government-authorized ETL/ELT tools that meet your security and compliance requirements:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Informatica Government</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Enterprise data integration platform with FedRAMP authorization for complex ETL workflows and data quality management
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Talend Government</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Open-source data integration platform with government support for batch and real-time data pipelines
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">AWS Glue (GovCloud)</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Serverless ETL service for automated data discovery, transformation, and loading into data lakes and warehouses
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Azure Data Factory Government</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Cloud-native data integration service for building scalable ELT pipelines across hybrid environments
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Apache Kafka / AWS Kinesis</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Real-time data streaming platforms for processing high-volume event streams with sub-second latency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Data Engineering Approach - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-12 tracking-tight">
            Our Data Engineering Approach
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">1. Data Source Discovery & Assessment</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We start by mapping all data sources, understanding data formats, volumes, and refresh frequencies. We assess data quality issues and identify integration challenges before building pipelines.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">2. Data Architecture Design</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We design scalable data architectures (data lakes, data warehouses, lakehouses) that support your analytics and ML requirements. Architecture decisions are driven by data volume, latency requirements, and cost constraints.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">3. Pipeline Development & Testing</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We build ETL/ELT pipelines with automated testing, error handling, and monitoring. All pipelines include data quality validation, transformation logic, and audit logging for compliance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">4. Data Quality Framework Implementation</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We implement data quality rules, validation checks, and automated cleansing logic to ensure downstream analytics and ML models receive accurate data. Quality metrics are monitored and reported.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">5. Deployment & Monitoring</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We deploy pipelines with comprehensive monitoring, alerting, and automated recovery. Pipeline performance, data quality, and SLA compliance are tracked and reported to stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Data Quality & Governance - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-8 tracking-tight">
            Data Quality & Governance
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed mb-8">
            Data pipelines must include quality controls to ensure analytics and ML models receive accurate, trusted data:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Automated Data Validation</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Validate data completeness, accuracy, and consistency at every pipeline stage with automated quality checks
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Data Profiling & Anomaly Detection</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Profile incoming data to detect schema changes, outliers, and anomalies before they impact downstream systems
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Data Lineage & Audit Trails</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Track data movement from source to destination with complete audit trails for compliance and troubleshooting
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Data Quality Dashboards</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Monitor data quality metrics in real-time with dashboards that surface issues and track quality trends over time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* CTA Section - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 tracking-tight">
              Ready to Build Scalable Data Pipelines?
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-light max-w-3xl">
              Let's discuss your data engineering requirements and how we can help you implement FedRAMP-authorized data pipelines that deliver accurate, timely data for analytics and ML.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 text-base font-normal rounded-none"
                >
                  Request Data Engineering Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
