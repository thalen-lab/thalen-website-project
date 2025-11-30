import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, BarChart3, Brain, Database, LineChart, CheckCircle2, Shield, Users, Award, TrendingUp } from 'lucide-react';

export default function DataAnalytics() {
  // Primary service offerings (4 core capabilities)
  const primaryServices = [
    {
      icon: LineChart,
      title: 'Analytics Platform Implementation',
      description: 'We implement FedRAMP-authorized analytics platforms (Tableau Government, Power BI Gov, Qlik Government) with real-time dashboards and mission intelligence.',
      benefits: ['FedRAMP platform selection', 'Custom dashboard development', 'Data source integration'],
      link: '/services/data-analytics/visualization'
    },
    {
      icon: Brain,
      title: 'AI/ML Model Development & Deployment',
      description: 'Deploy machine learning models for predictive analytics, fraud detection, and operational optimization using government-approved AI platforms.',
      benefits: ['Explainable AI implementation', 'Model governance frameworks', 'Bias detection & mitigation'],
      link: '/services/data-analytics/ml-ai'
    },
    {
      icon: Database,
      title: 'Data Engineering & Pipeline Development',
      description: 'Build scalable data pipelines using FedRAMP ETL tools (Informatica Gov, Talend, AWS Glue) for reliable, trusted data at operational scale.',
      benefits: ['Automated data pipelines', 'Data quality frameworks', 'Real-time processing'],
      link: '/services/data-analytics/engineering'
    },
    {
      icon: BarChart3,
      title: 'Data Strategy & Governance',
      description: 'Develop comprehensive data strategies aligned with mission objectives, including governance frameworks, data architecture, and analytics roadmaps.',
      benefits: ['6-week strategy assessment', '3-year implementation roadmap', 'Quick wins identification'],
      link: '/services/data-analytics/strategy'
    }
  ];

  // Additional capabilities (compact format)
  const additionalCapabilities = [
    { name: 'Data Warehouse Modernization', description: 'Migrate legacy data warehouses to cloud-native platforms (Snowflake Gov, Redshift)' },
    { name: 'Master Data Management (MDM)', description: 'Implement MDM solutions for data consistency across agency systems' },
    { name: 'Data Quality & Observability', description: 'Deploy data quality monitoring and automated anomaly detection' },
    { name: 'Analytics Training & Enablement', description: 'Train agency staff on analytics tools and data-driven decision-making' }
  ];

  const keyDifferentiators = [
    {
      icon: Shield,
      title: 'FedRAMP Analytics Platforms',
      description: 'Deep implementation experience with 30+ FedRAMP-authorized analytics, BI, and AI/ML platforms across all major vendors.'
    },
    {
      icon: Users,
      title: 'Vendor-Neutral Analytics Consulting',
      description: 'We help you select the RIGHT analytics platforms for your mission requirements, then integrate them with existing systems.'
    },
    {
      icon: Award,
      title: 'Mission-Focused Outcomes',
      description: 'Analytics solutions designed for measurable mission impact—faster decisions, improved outcomes, and operational efficiency.'
    }
  ];

  const governmentExperience = [
    { agency: 'Department of Veterans Affairs', project: 'Predictive Analytics Platform', outcome: '60% faster claims processing' },
    { agency: 'Department of Defense', project: 'Automated Data Pipelines', outcome: '$12M annual cost savings' },
    { agency: 'Health & Human Services', project: 'Public Health Surveillance', outcome: 'Real-time disease tracking' }
  ];

  const fedrampPlatforms = [
    {
      category: 'Business Intelligence & Visualization',
      platforms: ['Tableau Government', 'Microsoft Power BI Gov', 'Qlik Government', 'Domo Government']
    },
    {
      category: 'AI/ML & Predictive Analytics',
      platforms: ['AWS SageMaker (GovCloud)', 'Azure Machine Learning Gov', 'DataRobot Government', 'H2O.ai']
    },
    {
      category: 'Data Engineering & ETL',
      platforms: ['Informatica Government', 'Talend Government', 'AWS Glue', 'Azure Data Factory Gov']
    },
    {
      category: 'Data Warehousing',
      platforms: ['Snowflake Government', 'Amazon Redshift', 'Azure Synapse Analytics Gov', 'Google BigQuery']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Implementation Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Government Data Analytics & Intelligence
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We help government agencies implement FedRAMP-authorized analytics platforms, AI/ML models, and data pipelines that transform massive datasets into mission-critical intelligence. Vendor-neutral consulting with proven expertise across 30+ analytics platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Analytics Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/data-analytics/assessment">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Take Data Maturity Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Analytics Services */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Analytics Implementation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end analytics capabilities from strategy to deployment, designed for government agencies requiring FedRAMP compliance and mission-critical reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {primaryServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all border-2 hover:border-accent">
                <CardContent className="p-8">
                  <service.icon className="h-16 w-16 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.link}>
                    <Button variant="outline" className="w-full border-2 border-dashed border-primary/30 hover:border-accent hover:bg-accent/5">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Capabilities - Compact Format */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Additional Analytics Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start p-6 bg-background rounded-lg border-2 border-border hover:border-accent/50 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">{capability.name}</h4>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Analytics Experience */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Government Analytics Implementation Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven track record implementing analytics platforms and AI/ML solutions across federal agencies with measurable mission impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {governmentExperience.map((exp, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">{exp.agency}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.project}</p>
                  <p className="text-lg font-bold text-accent">{exp.outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button variant="outline" size="lg">
                View All Analytics Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FedRAMP Analytics Platform Expertise */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">FedRAMP-Authorized Analytics Platform Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement and integrate FedRAMP-authorized analytics platforms from leading vendors, helping you select the right tools for your mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fedrampPlatforms.map((category, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.platforms.map((platform, idx) => (
                      <span key={idx} className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-semibold">
                        {platform}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Plus 20+ additional FedRAMP-authorized analytics platforms including SAS Government, SPSS, Alteryx, and more.
            </p>
            <Link href="/partners">
              <Button variant="outline" size="lg">
                View All Analytics Platforms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Data into Intelligence?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule an analytics assessment to discuss your agency's data challenges, evaluate FedRAMP platform options, and develop a roadmap for mission-critical analytics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Analytics Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services/data-analytics/assessment">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Take Data Maturity Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
