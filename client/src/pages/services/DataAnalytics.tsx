import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function DataAnalytics() {
  // Primary service offerings (4 core capabilities)
  const primaryServices = [
    {
      title: 'Analytics Platform Implementation',
      description: 'Optimize your existing analytics tools and dashboards first—or implement FedRAMP-authorized platforms (Tableau Government, Power BI Gov, Qlik Government) when compliance mandates it or your current tools lack needed capabilities.',
      benefits: ['FedRAMP platform selection', 'Custom dashboard development', 'Data source integration'],
      link: '/services/data-analytics/visualization'
    },
    {
      title: 'AI/ML Model Development & Deployment',
      description: 'Build custom ML models on your existing infrastructure and data science tools—or deploy FedRAMP AI/ML platforms (AWS SageMaker GovCloud, Azure ML Gov) when enterprise-scale model governance and compliance are required.',
      benefits: ['Explainable AI implementation', 'Model governance frameworks', 'Bias detection & mitigation'],
      link: '/services/data-analytics/ml-ai'
    },
    {
      title: 'Data Engineering & Pipeline Development',
      description: 'Modernize your existing data pipelines with custom ETL scripts and integrations—or implement FedRAMP ETL platforms (Informatica Gov, Talend, AWS Glue) when enterprise-scale data orchestration and governance are needed.',
      benefits: ['Automated data pipelines', 'Data quality frameworks', 'Real-time processing'],
      link: '/services/data-analytics/engineering'
    },
    {
      title: 'Data Strategy & Governance',
      description: 'Develop comprehensive data strategies that maximize your existing data assets and infrastructure—with FedRAMP platform recommendations only when new capabilities align with mission objectives and compliance requirements.',
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
      title: 'FedRAMP Analytics Platforms',
      description: 'Deep implementation experience with 30+ FedRAMP-authorized analytics, BI, and AI/ML platforms across all major vendors.'
    },
    {
      title: 'Vendor-Neutral Analytics Consulting',
      description: 'We help you select the RIGHT analytics platforms for your mission requirements, then integrate them with existing systems.'
    },
    {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/data-analytics-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Data Analytics' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Implementation Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Data Analytics & Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Thalen Technologies delivers analytics through a dual approach: first, we optimize your existing data infrastructure and analytics capabilities—then implement FedRAMP-authorized BI platforms (Tableau Gov, Power BI Gov) when compliance requires it or new analytical capabilities are needed. Vendor-neutral consulting with proven expertise across 30+ analytics platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/services/data-analytics/assessment">
                  Take Data Maturity Assessment
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Analytics Services */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Core Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Core Analytics Implementation Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              End-to-end analytics capabilities from strategy to deployment, designed for government agencies requiring FedRAMP compliance and mission-critical reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {primaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="outline" className="w-full border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:bg-[oklch(0.97_0.01_250)]">
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Capabilities - Compact Format */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-8 text-center">Additional Analytics Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <Card key={index} className="p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">{capability.name}</h4>
                  <p className="text-sm text-slate-600">{capability.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Government Analytics Experience */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Proven Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Government Analytics Implementation Success</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experience implementing analytics platforms and AI/ML solutions across government agencies with measurable mission impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {governmentExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{exp.agency}</h3>
                  <p className="text-sm text-slate-500 mb-3">{exp.project}</p>
                  <p className="text-lg font-bold text-[oklch(0.65_0.18_55)] mb-4">{exp.outcome}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{exp.details}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
              <Link href="/case-studies">
                View All Analytics Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FedRAMP Analytics Platform Expertise */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">FedRAMP-Authorized Analytics Platform Expertise</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We implement and integrate FedRAMP-authorized analytics platforms from leading vendors, helping you select the right tools for your mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {fedrampPlatforms.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.platforms.map((platform, idx) => (
                      <span key={idx} className="text-xs bg-[oklch(0.97_0.01_250)] text-slate-700 px-3 py-1 rounded-full font-semibold">
                        {platform}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Plus 20+ additional FedRAMP-authorized analytics platforms including SAS Government, SPSS, Alteryx, and more.
            </p>
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
              <Link href="/partners">
                View All Analytics Platforms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us to discuss your agency's data analytics requirements and evaluate available platform options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/services/data-analytics/assessment">
                  Take Data Maturity Assessment
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Success Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">See Government Data Analytics in Action</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Learn how a state attorney general's office prevented $50M in fraud with CJIS-compliant real-time ML analytics processing 10M+ daily transactions.
            </p>
          </motion.div>
          <Card className="max-w-4xl mx-auto overflow-hidden border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2">
              <div className="bg-[oklch(0.97_0.01_250)] p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[oklch(0.65_0.18_55)]/10 text-[oklch(0.55_0.18_55)] rounded-full text-xs font-semibold mb-4 w-fit">
                  State Government
                </span>
                <h3 className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-4">State Attorney General Prevents $50M in Fraud</h3>
                <p className="text-slate-600 mb-6">
                  Implemented CJIS-compliant fraud detection system processing 10M+ daily transactions with real-time ML analytics and preventing $50M in fraudulent activities annually.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">$50M+</div>
                    <div className="text-sm text-slate-500">Annual Fraud Prevented</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">10M+</div>
                    <div className="text-sm text-slate-500">Daily Transactions</div>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg w-full">
                  <Link href="/case-studies/state-attorney-general">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="/financial-fraud-soc.a8f3d9e2.jpg" 
                  alt="State Attorney General Fraud Detection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
