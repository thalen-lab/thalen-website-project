import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, BarChart3, Brain, Database, LineChart } from 'lucide-react';

export default function DataAnalytics() {
  const primaryServices = [
    {
      icon: LineChart,
      title: 'Analytics Platform Implementation',
      description: 'We implement FedRAMP-authorized analytics platforms (Tableau Government, Power BI Gov, Qlik Government) with real-time dashboards and mission intelligence.',
      link: '/services/data-analytics/visualization'
    },
    {
      icon: Brain,
      title: 'AI/ML Model Development & Deployment',
      description: 'Deploy machine learning models for predictive analytics, fraud detection, and operational optimization using government-approved AI platforms.',
      link: '/services/data-analytics/ml-ai'
    },
    {
      icon: Database,
      title: 'Data Engineering & Pipeline Development',
      description: 'Build scalable data pipelines using FedRAMP ETL tools (Informatica Gov, Talend, AWS Glue) for reliable, trusted data at operational scale.',
      link: '/services/data-analytics/engineering'
    },
    {
      icon: BarChart3,
      title: 'Data Strategy & Governance',
      description: 'Develop comprehensive data strategies aligned with mission objectives, including governance frameworks, data architecture, and analytics roadmaps.',
      link: '/services/data-analytics/strategy'
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
            <span className="text-zinc-900">Data Analytics</span>
          </div>

          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-light text-zinc-900 leading-[1.1] tracking-tight">
              Government Data Analytics & Intelligence
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light max-w-4xl">
              We help government agencies (federal, state, and local) implement FedRAMP and StateRAMP-authorized analytics platforms, AI/ML models, and data pipelines that transform massive datasets into mission-critical intelligence. Vendor-neutral consulting with proven expertise across 30+ analytics platforms.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 text-base font-normal rounded-none"
                >
                  Request Analytics Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services/data-analytics/assessment">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white px-8 h-12 text-base font-normal rounded-none"
                >
                  Take Data Maturity Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Core Services Grid - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-16 tracking-tight">
            Core Analytics Implementation Services
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {primaryServices.map((service, index) => (
              <Link key={index} href={service.link}>
                <div className="group cursor-pointer">
                  <div className="mb-6">
                    <service.icon className="h-10 w-10 text-zinc-900" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-light text-zinc-900 mb-4 group-hover:text-zinc-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-zinc-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center text-sm text-zinc-900 group-hover:text-zinc-600 transition-colors">
                    <span className="font-normal">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Additional Capabilities - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-12 tracking-tight">
            Additional Analytics Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Data Warehouse Modernization</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Migrate legacy data warehouses to cloud-native platforms (Snowflake Gov, Redshift)
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Master Data Management (MDM)</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Implement MDM solutions for data consistency across agency systems
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Data Quality & Observability</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Deploy data quality monitoring and automated anomaly detection
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Analytics Training & Enablement</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Train agency staff on analytics tools and data-driven decision-making
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* FedRAMP Platform Expertise - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-12 tracking-tight">
            FedRAMP-Authorized Analytics Platform Expertise
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-4">Business Intelligence & Visualization</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Tableau Government, Microsoft Power BI Gov, Qlik Government, Domo Government
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-4">AI/ML & Predictive Analytics</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                AWS SageMaker (GovCloud), Azure Machine Learning Gov, DataRobot Government, H2O.ai
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-4">Data Engineering & ETL</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Informatica Government, Talend Government, AWS Glue, Azure Data Factory Gov
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-4">Data Warehousing</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Snowflake Government, Amazon Redshift, Azure Synapse Analytics Gov, Google BigQuery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Government Experience - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-12 tracking-tight">
            Government Analytics Implementation Success
          </h2>

          <div className="space-y-8">
            <div className="border-l-2 border-zinc-900 pl-6">
              <h3 className="text-xl font-normal text-zinc-900 mb-2">Department of Veterans Affairs</h3>
              <p className="text-base text-zinc-600 mb-1">Predictive Analytics Platform</p>
              <p className="text-base text-zinc-900">60% faster claims processing</p>
            </div>

            <div className="border-l-2 border-zinc-900 pl-6">
              <h3 className="text-xl font-normal text-zinc-900 mb-2">Department of Defense</h3>
              <p className="text-base text-zinc-600 mb-1">Automated Data Pipelines</p>
              <p className="text-base text-zinc-900">$12M annual cost savings</p>
            </div>

            <div className="border-l-2 border-zinc-900 pl-6">
              <h3 className="text-xl font-normal text-zinc-900 mb-2">Health & Human Services</h3>
              <p className="text-base text-zinc-600 mb-1">Public Health Surveillance</p>
              <p className="text-base text-zinc-900">Real-time disease tracking</p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/case-studies">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white px-8 h-12 text-base font-normal rounded-none"
              >
                View All Analytics Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
              Ready to Transform Your Data into Intelligence?
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-light max-w-3xl">
              Let's discuss your analytics requirements and how we can help you implement FedRAMP-authorized platforms that deliver mission-critical insights.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 text-base font-normal rounded-none"
                >
                  Schedule Analytics Consultation
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
