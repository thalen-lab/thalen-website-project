import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Visualization() {
  const implementationPhases = [
    {
      phase: 'Phase 1',
      title: 'Assessment & Platform Selection',
      duration: '2-3 weeks',
      activities: [
        'Evaluate current analytics tools and data infrastructure',
        'Document reporting requirements and user needs',
        'Assess FedRAMP compliance requirements',
        'Score and recommend optimal platform (Tableau Gov, Power BI Gov, Qlik)'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Architecture & Data Integration',
      duration: '3-4 weeks',
      activities: [
        'Design data architecture and connection strategy',
        'Build secure data pipelines from source systems',
        'Implement data governance and access controls',
        'Configure FedRAMP-compliant cloud infrastructure'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Dashboard Development',
      duration: '4-6 weeks',
      activities: [
        'Develop executive dashboards with KPI visualizations',
        'Build operational dashboards for day-to-day monitoring',
        'Create self-service analytics capabilities',
        'Implement drill-down and interactive features'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Training & Enablement',
      duration: '2-3 weeks',
      activities: [
        'Train power users on dashboard creation',
        'Enable analysts with self-service capabilities',
        'Document best practices and governance policies',
        'Establish ongoing support and enhancement processes'
      ]
    }
  ];

  const platformCapabilities = [
    {
      platform: 'Tableau Government',
      description: 'Industry-leading visualization with drag-and-drop interface and powerful analytics',
      ideal: 'Complex visualizations, data exploration, executive dashboards'
    },
    {
      platform: 'Microsoft Power BI Gov',
      description: 'Deep Microsoft 365 integration with enterprise-scale analytics and AI features',
      ideal: 'Microsoft-centric environments, embedded analytics, natural language queries'
    },
    {
      platform: 'Qlik Government',
      description: 'Associative analytics engine with powerful data discovery capabilities',
      ideal: 'Ad-hoc analysis, data discovery, associative exploration'
    },
    {
      platform: 'AWS QuickSight',
      description: 'Serverless BI service with ML-powered insights and pay-per-session pricing',
      ideal: 'AWS environments, cost-sensitive deployments, embedded analytics'
    },
    {
      platform: 'Domo Government',
      description: 'Cloud-native platform with 1,000+ pre-built connectors and real-time data',
      ideal: 'Real-time dashboards, data integration, mobile-first analytics'
    },
    {
      platform: 'Looker (Google Cloud)',
      description: 'Modern BI platform with semantic modeling and embedded analytics',
      ideal: 'Data modeling, embedded analytics, Google Cloud environments'
    }
  ];

  const deliverables = [
    {
      title: 'Platform Assessment Report',
      description: 'Comprehensive evaluation of your analytics needs with platform recommendations, cost analysis, and implementation roadmap.',
      pages: '25-35 pages'
    },
    {
      title: 'Data Architecture Design',
      description: 'Detailed data architecture documentation including data flows, security controls, and integration specifications.',
      pages: '30-40 pages'
    },
    {
      title: 'Dashboard Portfolio',
      description: 'Suite of production-ready dashboards including executive views, operational monitors, and self-service templates.',
      pages: '10-20 dashboards'
    },
    {
      title: 'Training & Documentation',
      description: 'User guides, training materials, and governance documentation for sustainable analytics operations.',
      pages: '50+ pages'
    }
  ];

  const caseStudy = {
    agency: 'Department of Health & Human Services',
    challenge: 'HHS needed real-time visibility into public health data across 50 state health departments, but legacy reporting systems delivered data 7+ days late.',
    solution: 'Implemented Tableau Government with real-time data feeds, automated ETL pipelines, and 12 interactive dashboards for epidemiological analysis.',
    results: [
      { metric: '7 days → 4 hours', label: 'Outbreak detection time' },
      { metric: '300+', label: 'Public health analysts supported' },
      { metric: '50', label: 'State data sources integrated' },
      { metric: '99.9%', label: 'Platform uptime achieved' }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Data Analytics', href: '/services/data-analytics' },
                { label: 'Analytics Platform Implementation' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">FedRAMP-Authorized Platforms</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Analytics Platform Implementation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Optimize your existing analytics tools and dashboards first—or implement FedRAMP-authorized platforms (Tableau Government, Power BI Gov, Qlik Government) when compliance mandates it or your current tools lack needed capabilities. Vendor-neutral guidance with proven expertise across 30+ BI platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Platform Assessment
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
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Methodology</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              4-Phase Implementation Methodology
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Typically completed in 12-16 weeks with minimal disruption to agency operations
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
                  <CardContent className="p-6">
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

      {/* Platform Capabilities */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              FedRAMP-Authorized BI Platforms
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We help you select the right platform for your mission requirements and compliance needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-2">{item.platform}</h3>
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

      {/* Case Study */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Real-World Implementation Results
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
              <CardContent className="p-8">
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
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">What You Receive</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Implementation Deliverables
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
                  <CardContent className="p-6">
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
      <section className="py-16 md:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Analytics Capabilities?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a complimentary consultation to discuss your analytics needs and learn how we can help you select and implement the right platform for your mission.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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

      <Footer />
    </div>
  );
}
