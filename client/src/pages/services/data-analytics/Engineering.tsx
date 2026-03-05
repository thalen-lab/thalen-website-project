import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function Engineering() {
  const implementationPhases = [
    {
      phase: 'Phase 1',
      title: 'Data Architecture Assessment',
      duration: '2-3 weeks',
      activities: [
        'Inventory existing data sources, pipelines, and storage systems',
        'Document data flows, dependencies, and transformation logic',
        'Assess data quality issues and governance gaps',
        'Evaluate FedRAMP ETL platform options (Informatica Gov, Talend, AWS Glue)'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Pipeline Design & Architecture',
      duration: '3-4 weeks',
      activities: [
        'Design target-state data architecture and pipeline topology',
        'Define data models, schemas, and transformation specifications',
        'Establish data quality rules and validation frameworks',
        'Plan migration strategy for legacy pipelines'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Pipeline Development & Testing',
      duration: '6-10 weeks',
      activities: [
        'Build automated ETL/ELT pipelines with error handling',
        'Implement data quality monitoring and alerting',
        'Develop data lineage tracking and audit capabilities',
        'Conduct integration testing with source and target systems'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Deployment & Operations',
      duration: '2-3 weeks',
      activities: [
        'Deploy pipelines to FedRAMP-authorized infrastructure',
        'Configure monitoring dashboards and alerting',
        'Train operations team on pipeline management',
        'Establish runbooks for incident response and maintenance'
      ]
    }
  ];

  const pipelineCapabilities = [
    {
      capability: 'Batch ETL Pipelines',
      description: 'Scheduled data extraction, transformation, and loading for periodic data processing',
      ideal: 'Nightly data warehouse loads, monthly reporting, historical analysis'
    },
    {
      capability: 'Real-Time Streaming',
      description: 'Sub-second data processing for operational dashboards and event-driven architectures',
      ideal: 'Fraud detection, operational monitoring, IoT sensor data'
    },
    {
      capability: 'Data Lake Architecture',
      description: 'Scalable storage for structured and unstructured data with schema-on-read flexibility',
      ideal: 'Big data analytics, data science workloads, archival storage'
    },
    {
      capability: 'Data Warehouse Modernization',
      description: 'Migration from legacy warehouses to cloud-native platforms (Snowflake Gov, Redshift)',
      ideal: 'Performance optimization, cost reduction, scalability'
    },
    {
      capability: 'Data Quality Frameworks',
      description: 'Automated validation, profiling, and anomaly detection for data integrity',
      ideal: 'Regulatory compliance, mission-critical reporting, analytics accuracy'
    },
    {
      capability: 'Master Data Management',
      description: 'Single source of truth for critical entities across agency systems',
      ideal: 'Customer/citizen data, vendor management, asset tracking'
    }
  ];

  const deliverables = [
    {
      title: 'Data Architecture Blueprint',
      description: 'Comprehensive documentation of target-state architecture including data flows, schemas, and integration specifications.',
      pages: '40-60 pages'
    },
    {
      title: 'Pipeline Documentation',
      description: 'Technical documentation for all pipelines including transformation logic, scheduling, error handling, and dependencies.',
      pages: '50-75 pages'
    },
    {
      title: 'Production Pipeline System',
      description: 'Deployed, monitored data pipelines with automated scheduling, error handling, and data quality validation.',
      pages: 'Full system'
    },
    {
      title: 'Operations & Runbook',
      description: 'Operational procedures for pipeline monitoring, incident response, maintenance, and capacity planning.',
      pages: '30-40 pages'
    }
  ];

  const caseStudy = {
    agency: 'Department of Defense',
    challenge: 'DOD was spending 85,000 hours annually on manual data processing across 14 legacy systems. Data latency of 48+ hours prevented real-time decision-making.',
    solution: 'Built automated ETL pipelines using Informatica Gov to consolidate data from all legacy systems with real-time streaming for critical operational data.',
    results: [
      { metric: '$12M', label: 'Estimated annual cost savings' },
      { metric: '48hrs → 15min', label: 'Data latency reduction' },
      { metric: '99.7%', label: 'Data accuracy achieved' },
      { metric: '85,000', label: 'Manual hours eliminated' }
    ]
  };

  const platformExpertise = [
    {
      category: 'ETL/ELT Platforms',
      platforms: ['Informatica Government', 'Talend Government', 'AWS Glue', 'Azure Data Factory Gov']
    },
    {
      category: 'Streaming Platforms',
      platforms: ['Apache Kafka', 'Amazon Kinesis', 'Azure Event Hubs', 'Apache Flink']
    },
    {
      category: 'Data Warehouses',
      platforms: ['Snowflake Government', 'Amazon Redshift', 'Azure Synapse Gov', 'Google BigQuery']
    },
    {
      category: 'Data Lakes',
      platforms: ['AWS S3 (GovCloud)', 'Azure Data Lake Gov', 'Databricks Government', 'Delta Lake']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Data Analytics', href: '/services/data-analytics' },
                { label: 'Data Engineering & Pipelines' }
              ]} 
              variant="light" 
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Enterprise Data Infrastructure</p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Data Engineering & Pipeline Development
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Modernize your existing data pipelines with custom ETL scripts and integrations—or implement FedRAMP ETL platforms (Informatica Gov, Talend, AWS Glue) when enterprise-scale data orchestration and governance are needed. Reliable, scalable data infrastructure that powers analytics and AI initiatives.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Pipeline Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Methodology</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              4-Phase Pipeline Development Methodology
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Typically completed in 14-20 weeks depending on pipeline complexity and system integrations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {implementationPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[oklch(0.65_0.18_55)] text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm text-[oklch(0.65_0.18_55)] font-semibold">{phase.phase}</div>
                        <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)]">{phase.title}</h3>
                        <div className="text-sm text-slate-500">Duration: {phase.duration}</div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Capabilities */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Pipeline Capabilities</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Enterprise Data Engineering Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              End-to-end data pipeline capabilities from batch processing to real-time streaming
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {pipelineCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-2">{item.capability}</h3>
                    <p className="text-sm text-slate-600 mb-3">{item.description}</p>
                    <div className="bg-[oklch(0.97_0.01_250)] rounded-lg px-3 py-2">
                      <div className="text-xs text-[oklch(0.65_0.18_55)] font-semibold">Best For:</div>
                      <div className="text-xs text-slate-700">{item.ideal}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Technology Stack</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              FedRAMP-Authorized Data Platforms
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Deep expertise across government-approved data engineering platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {platformExpertise.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.platforms.map((platform, idx) => (
                        <span key={idx} className="text-xs bg-[oklch(0.97_0.01_250)] text-slate-700 px-3 py-1.5 rounded-full font-medium">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Success Story</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Real-World Pipeline Implementation Results
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{caseStudy.agency}</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-2">Challenge</h4>
                    <p className="text-sm text-slate-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[oklch(0.65_0.18_55)] mb-2">Solution</h4>
                    <p className="text-sm text-slate-600">{caseStudy.solution}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-[oklch(0.65_0.18_55)]">{result.metric}</div>
                      <div className="text-xs text-slate-600">{result.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">What You Receive</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Pipeline Implementation Deliverables
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)]">{deliverable.title}</h3>
                      <span className="text-xs bg-[oklch(0.65_0.18_55)]/10 text-[oklch(0.65_0.18_55)] px-2 py-1 rounded font-semibold">{deliverable.pages}</span>
                    </div>
                    <p className="text-sm text-slate-600">{deliverable.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to Modernize Your Data Infrastructure?
            </h2>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Schedule a complimentary consultation to discuss your data engineering needs and learn how we can help you build reliable, scalable data pipelines.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/services/data-analytics">
                  Back to Data Analytics
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
