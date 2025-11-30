import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, BarChart3, Brain, Database, LineChart, Zap, TrendingUp } from 'lucide-react';

export default function Analytics() {
  const capabilities = [
    {
      icon: Database,
      title: 'Data Infrastructure',
      description: 'Build robust, secure data infrastructure with enterprise-scale reliability and government-grade security.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Live dashboards and analytics platforms that provide actionable insights at operational scale.'
    },
    {
      icon: Brain,
      title: 'ML/AI Models',
      description: 'Custom machine learning models for intelligent automation, prediction, and optimization.'
    },
    {
      icon: LineChart,
      title: 'Predictive Insights',
      description: 'Advanced analytics that forecast trends, identify risks, and optimize decision-making.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Query optimization and data pipeline engineering for maximum performance.'
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Executive dashboards and reporting that translate data into strategic business value.'
    }
  ];

  const useCases = [
    {
      title: 'Fraud Detection & Prevention',
      description: 'Real-time AI-powered fraud detection processing 50M+ transactions daily with 99.9% accuracy.',
      industries: ['Financial Services', 'E-commerce', 'Government']
    },
    {
      title: 'Predictive Maintenance',
      description: 'IoT sensor analytics predicting equipment failures before they occur, reducing downtime by 75%.',
      industries: ['Manufacturing', 'Energy', 'Transportation']
    },
    {
      title: 'Healthcare Analytics',
      description: 'Patient outcome prediction and operational efficiency analytics improving care quality by 40%.',
      industries: ['Healthcare', 'Life Sciences']
    },
    {
      title: 'Intelligence Analysis',
      description: 'Automated processing of 10TB daily classified data with 95% accuracy and full chain of custody.',
      industries: ['Federal Government', 'Defense']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Data Analytics & Intelligence
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Real-time analytics platforms with ML/AI models for intelligent automation and optimized performance at operational scale with government-grade security and predictive insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Analytics Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From data infrastructure to advanced AI models, we deliver end-to-end analytics solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all border-2">
                <CardContent className="p-8">
                  <capability.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary text-primary-foreground p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-accent mb-2">Featured Success Story</div>
                  <h3 className="text-3xl font-bold mb-4">Healthcare System Saves $12M Through AI Analytics</h3>
                  <p className="text-primary-foreground/90 mb-6">
                    Thalen Technologies's data intelligence platform transformed a multi-facility healthcare network's decision-making, delivering real-time insights that improved patient outcomes and operational efficiency by 40%.
                  </p>
                  <Button className="bg-orange-gradient hover:opacity-90 w-fit">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-accent/10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-accent mb-2">$12M</div>
                    <div className="text-lg text-muted-foreground mb-4">Annual Savings</div>
                    <div className="text-5xl font-bold text-accent mb-2">40%</div>
                    <div className="text-lg text-muted-foreground">Efficiency Improvement</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry-Specific Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven analytics solutions tailored to the unique challenges of your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.industries.map((industry, idx) => (
                      <span key={idx} className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                        {industry}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Analytics Technology Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade tools and platforms for data analytics and machine learning.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {['Snowflake', 'Databricks', 'AWS Redshift', 'Google BigQuery', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Apache Spark', 'Tableau', 'Power BI', 'Looker', 'Grafana'].map((tech, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 text-center font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Turn Data Into Strategic Advantage</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Discover how our analytics solutions can unlock insights and drive measurable business outcomes.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Data Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
