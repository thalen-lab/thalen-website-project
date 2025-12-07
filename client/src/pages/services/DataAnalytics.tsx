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
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
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
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all">
                  Request Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/data-analytics/assessment">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all">
                  Take Data Maturity Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Implementation Approach */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Implementation Approach</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A phased methodology that balances quick wins with long-term transformation, designed for government agencies requiring FedRAMP compliance and mission-critical reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {implementationApproach.map((phase, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-6xl font-bold text-muted-foreground/20">{phase.phase}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{phase.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{phase.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold mb-3">Key Deliverables:</p>
                  {phase.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Analytics Implementation Services */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Analytics Implementation Services</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              End-to-end analytics capabilities from strategy to deployment, designed for government agencies requiring FedRAMP compliance and mission-critical reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Analytics Platform Implementation */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Analytics Platform Implementation</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We implement FedRAMP-authorized analytics platforms (Tableau Government, Power BI Gov, Qlik Government) with real-time dashboards and mission intelligence.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">FedRAMP platform selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Custom dashboard development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Data source integration</span>
                </li>
              </ul>
              <Link href="/services/data-analytics/visualization">
                <Button variant="outline" className="w-full group">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>

            {/* AI/ML Model Development & Deployment */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">AI/ML Model Development & Deployment</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Deploy machine learning models for predictive analytics, fraud detection, and operational optimization using government-approved AI platforms.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Explainable AI implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Model governance frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Bias detection & mitigation</span>
                </li>
              </ul>
              <Link href="/services/data-analytics/ml-ai">
                <Button variant="outline" className="w-full group">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Analytics Capabilities */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Additional Analytics Capabilities</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalCapabilities.map((capability, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-2">{capability.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{capability.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Analytics Implementation Success */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Government Analytics Implementation Success</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience implementing analytics platforms and AI/ML solutions across government agencies with measurable mission impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {governmentExperience.map((exp, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">{exp.agency}</h3>
                      <p className="text-sm text-muted-foreground">{exp.project}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-accent mb-2">{exp.outcome}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button variant="outline" size="lg" className="group">
                View All Case Studies 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FedRAMP-Authorized Analytics Platforms */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">FedRAMP-Authorized Analytics Platforms</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deep implementation experience with 30+ FedRAMP-authorized analytics, BI, and AI/ML platforms. We help you select the RIGHT platforms for your mission requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fedrampPlatforms.map((category, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.platforms.map((platform, idx) => (
                    <span key={idx} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                      {platform}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Data Analytics?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a free data maturity assessment to discover how analytics and AI/ML can accelerate your mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all">
                Schedule Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all">
                Download Analytics Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
