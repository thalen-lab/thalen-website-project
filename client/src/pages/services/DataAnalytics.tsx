import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, BarChart3, Brain, Database, LineChart, Shield, Users, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

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
    { 
      agency: 'Department of Veterans Affairs', 
      project: 'Predictive Analytics Platform', 
      outcome: '60% faster claims processing',
      details: 'Deployed machine learning models on AWS SageMaker GovCloud to predict claim approval likelihood. Analyzed 2.3 million historical claims. Reduced average processing time from 28 days to 11 days. Improved first-pass approval rate from 68% to 84%.'
    },
    { 
      agency: 'Department of Defense', 
      project: 'Automated Data Pipelines', 
      outcome: '$12M annual cost savings',
      details: 'Built automated ETL pipelines using Informatica Gov to consolidate data from 14 legacy systems. Eliminated 85,000 hours of manual data processing annually. Reduced data latency from 48 hours to 15 minutes. Improved data accuracy to 99.7%.'
    },
    { 
      agency: 'Health & Human Services', 
      project: 'Public Health Surveillance', 
      outcome: 'Real-time disease tracking',
      details: 'Implemented Tableau Government platform with real-time data feeds from 50 state health departments. Built 12 interactive dashboards for epidemiological analysis. Reduced outbreak detection time from 7 days to 4 hours. Supports 300+ public health analysts.'
    }
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

  const implementationApproach = [
    {
      phase: '01',
      title: 'Data Strategy & Assessment',
      duration: '4-6 weeks',
      description: 'Evaluate your existing data infrastructure and analytics capabilities—or implement FedRAMP BI platforms (Tableau Gov, Power BI Gov) when compliance requires it.',
      deliverables: [
        'Current state assessment',
        'Data maturity evaluation',
        'Platform recommendations',
        'Implementation roadmap'
      ]
    },
    {
      phase: '02',
      title: 'Platform Implementation',
      duration: '8-12 weeks',
      description: 'Deploy FedRAMP-authorized analytics platforms with custom dashboards, data source integration, and user training.',
      deliverables: [
        'Platform configuration',
        'Dashboard development',
        'Data source integration',
        'User training & documentation'
      ]
    },
    {
      phase: '03',
      title: 'Data Pipeline Development',
      duration: '10-16 weeks',
      description: 'Build automated data pipelines using FedRAMP ETL tools to consolidate data from legacy systems and ensure data quality.',
      deliverables: [
        'ETL pipeline development',
        'Data quality frameworks',
        'Automated monitoring',
        'Performance optimization'
      ]
    },
    {
      phase: '04',
      title: 'AI/ML Model Deployment',
      duration: '12-20 weeks',
      description: 'Deploy machine learning models for predictive analytics, fraud detection, and operational optimization using government-approved AI platforms.',
      deliverables: [
        'Model development & training',
        'Explainable AI implementation',
        'Model governance frameworks',
        'Continuous monitoring'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Implementation Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Data Analytics & Intelligence
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Optimize your existing data infrastructure and analytics capabilities—or implement FedRAMP BI platforms (Tableau Gov, Power BI Gov) when compliance requires it. Includes data strategy, governance, and custom dashboards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Assessment
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
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Implementation Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A phased methodology that balances quick wins with long-term transformation, designed for government agencies requiring FedRAMP compliance and mission-critical reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {implementationApproach.map((phase, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all border-2 hover:border-accent">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-6xl font-bold text-primary/20 leading-none">{phase.phase}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground font-semibold">{phase.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{phase.description}</p>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">Key Deliverables:</p>
                    {phase.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Analytics Services */}
      <section className="py-20 bg-background">
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
                  <service.icon className="h-16 w-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0 mr-2"></span>
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
                <div key={index} className="flex items-start p-6 bg-secondary rounded-lg border-2 border-border hover:border-accent/50 transition-colors">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0 mr-4"></span>
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
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Government Analytics Implementation Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience implementing analytics platforms and AI/ML solutions across government agencies with measurable mission impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {governmentExperience.map((exp, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-2xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{exp.agency}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.project}</p>
                  <p className="text-lg font-bold text-accent mb-4">{exp.outcome}</p>
                  <p className="text-sm text-muted-foreground">{exp.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-2">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FedRAMP Platform Expertise */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">FedRAMP-Authorized Analytics Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep implementation experience with 30+ FedRAMP-authorized analytics, BI, and AI/ML platforms. We help you select the RIGHT platforms for your mission requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fedrampPlatforms.map((category, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.platforms.map((platform, idx) => (
                      <span key={idx} className="px-3 py-1 bg-secondary text-sm rounded-full border border-border">
                        {platform}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Data into Intelligence?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Schedule a free assessment to evaluate your data maturity and identify quick wins for analytics implementation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Assessment
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
