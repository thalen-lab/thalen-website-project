import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function Analytics() {
  const capabilities = [
    {
      title: 'Data Infrastructure',
      description: 'Build robust, secure data infrastructure with enterprise-scale reliability and government-grade security.'
    },
    {
      title: 'Real-Time Analytics',
      description: 'Live dashboards and analytics platforms that provide actionable insights at operational scale.'
    },
    {
      title: 'ML/AI Models',
      description: 'Custom machine learning models for intelligent automation, prediction, and optimization.'
    },
    {
      title: 'Predictive Insights',
      description: 'Advanced analytics that forecast trends, identify risks, and optimize decision-making.'
    },
    {
      title: 'Performance Optimization',
      description: 'Query optimization and data pipeline engineering for maximum performance.'
    },
    {
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-white bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85">
        {/* Add background image pattern here */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Services', href: '/consulting-services' },
                  { label: 'Analytics' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="max-w-4xl">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Data & Analytics</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Data Analytics & Intelligence
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Real-time analytics platforms with ML/AI models for intelligent automation and optimized performance at operational scale with government-grade security and predictive insights.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Comprehensive Analytics Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From data infrastructure to advanced AI models, we deliver end-to-end analytics solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-4"></span>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{capability.title}</h3>
                      <p className="text-slate-600">{capability.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <Card className="overflow-hidden max-w-5xl mx-auto bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-[oklch(0.22_0.06_250)] text-white p-12 flex flex-col justify-center">
                  <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Featured Success Story</p>
                  <h3 className="text-3xl font-bold mb-4">Healthcare System Saves $12M Through AI Analytics</h3>
                  <p className="text-white/90 mb-6">
                    Thalen Technologies's data intelligence platform transformed a multi-facility healthcare network's decision-making, delivering real-time insights that improved patient outcomes and operational efficiency by 40%.
                  </p>
                  <Button className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 w-fit">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-[oklch(0.65_0.18_55)] mb-2">$12M</div>
                    <div className="text-lg text-slate-600 mb-4">Annual Savings</div>
                    <div className="text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">40%</div>
                    <div className="text-lg text-slate-600">Efficiency Improvement</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Use Cases</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Industry-Specific Use Cases</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proven analytics solutions tailored to the unique challenges of your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{useCase.title}</h3>
                  <p className="text-slate-600 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.industries.map((industry, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
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
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Technology</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Advanced Analytics Technology Stack</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Enterprise-grade tools and platforms for data analytics and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {['Snowflake', 'Databricks', 'AWS Redshift', 'Google BigQuery', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Apache Spark', 'Tableau', 'Power BI', 'Looker', 'Grafana'].map((tech, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-lg p-4 text-center font-medium text-[oklch(0.20_0.05_250)]">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Turn Data Into Strategic Advantage</h2>
          <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            Learn how our analytics solutions provide insights and support measurable business outcomes.
          </p>
          <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
            Schedule Data Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
