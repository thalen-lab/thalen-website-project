import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function MLAI() {
  const implementationPhases = [
    {
      phase: 'Phase 1',
      title: 'Use Case Discovery & Data Assessment',
      duration: '2-3 weeks',
      activities: [
        'Identify high-value ML/AI use cases aligned with mission objectives',
        'Assess data availability, quality, and governance requirements',
        'Evaluate existing infrastructure and platform options',
        'Define success metrics and model performance requirements'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Model Development & Training',
      duration: '4-8 weeks',
      activities: [
        'Prepare and engineer features from source data',
        'Develop and train ML models using appropriate algorithms',
        'Implement explainability (SHAP, LIME) for transparent reasoning',
        'Conduct bias detection and fairness testing'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Validation & Governance',
      duration: '2-4 weeks',
      activities: [
        'Validate model performance against holdout data',
        'Establish model governance framework and documentation',
        'Create audit trails and lineage tracking',
        'Conduct security review and compliance assessment'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Deployment & Monitoring',
      duration: '2-3 weeks',
      activities: [
        'Deploy models to FedRAMP-authorized infrastructure',
        'Implement real-time monitoring and alerting',
        'Establish model retraining and drift detection processes',
        'Train operations team on model management'
      ]
    }
  ];

  const mlCapabilities = [
    {
      capability: 'Fraud Detection & Prevention',
      description: 'Identify fraudulent claims, transactions, and anomalies before payments are issued',
      ideal: 'Benefits programs, procurement, financial operations'
    },
    {
      capability: 'Predictive Maintenance',
      description: 'Predict equipment failures weeks in advance to prevent downtime and emergency repairs',
      ideal: 'Defense systems, fleet management, critical infrastructure'
    },
    {
      capability: 'Threat Intelligence',
      description: 'Detect cyber threats, insider risks, and anomalous behavior in real-time',
      ideal: 'Cybersecurity operations, insider threat programs'
    },
    {
      capability: 'Natural Language Processing',
      description: 'Extract insights from documents, automate classification, and enable intelligent search',
      ideal: 'Document processing, case management, FOIA requests'
    },
    {
      capability: 'Computer Vision',
      description: 'Analyze images and video for object detection, classification, and anomaly detection',
      ideal: 'Security monitoring, quality inspection, geospatial analysis'
    },
    {
      capability: 'Forecasting & Optimization',
      description: 'Predict demand, optimize resource allocation, and forecast budget requirements',
      ideal: 'Budget planning, workforce management, supply chain'
    }
  ];

  const deliverables = [
    {
      title: 'ML Use Case Assessment',
      description: 'Comprehensive evaluation of ML opportunities with ROI projections, data requirements, and implementation roadmap.',
      pages: '30-40 pages'
    },
    {
      title: 'Model Documentation Package',
      description: 'Complete model documentation including architecture, training data, performance metrics, and governance policies.',
      pages: '50-75 pages'
    },
    {
      title: 'Production ML System',
      description: 'Deployed, monitored ML models with APIs, dashboards, and integration with existing systems.',
      pages: 'Full system'
    },
    {
      title: 'Operations Runbook',
      description: 'Operational procedures for model monitoring, retraining, incident response, and performance management.',
      pages: '25-35 pages'
    }
  ];

  const caseStudy = {
    agency: 'Federal Benefits Agency',
    challenge: 'The agency was losing $1.2B annually to fraudulent benefits claims. Manual review processes could only catch obvious fraud, missing sophisticated schemes.',
    solution: 'Deployed ML-powered fraud detection analyzing claim patterns, applicant behavior, and third-party data with explainable AI for investigator review.',
    results: [
      { metric: '$500M', label: 'Fraud prevented annually' },
      { metric: '95%', label: 'Detection accuracy' },
      { metric: '<2%', label: 'False positive rate' },
      { metric: '40%', label: 'Reduction in fraud losses' }
    ]
  };

  const governanceFeatures = [
    {
      feature: 'Explainable AI (XAI)',
      description: 'SHAP, LIME, and attention mechanisms provide transparent reasoning for every prediction—essential for congressional oversight and IG audits.'
    },
    {
      feature: 'Bias Detection & Fairness',
      description: 'Continuous monitoring for demographic bias, disparate impact, and fairness metrics to ensure equitable treatment across populations.'
    },
    {
      feature: 'Model Governance Framework',
      description: 'Full lineage tracking, version control, approval workflows, and audit logs for regulatory compliance and accountability.'
    },
    {
      feature: 'Drift Detection & Monitoring',
      description: 'Real-time monitoring of model performance with automated alerts when predictions degrade or data distributions shift.'
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Data Analytics', href: '/services/data-analytics' },
                { label: 'AI/ML Model Development' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Explainable AI for Government</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI/ML Model Development & Deployment
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Build custom ML models on your existing infrastructure—or deploy FedRAMP AI/ML platforms (AWS SageMaker GovCloud, Azure ML Gov) when enterprise-scale model governance and compliance are required. Every prediction includes transparent reasoning, bias detection, and full audit trails for federal accountability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request ML Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View ML Case Studies
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
              4-Phase ML Development Methodology
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Typically completed in 10-18 weeks depending on model complexity and data readiness
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

      {/* ML Capabilities */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">ML Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Proven ML/AI Use Cases for Government
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Production ML systems for fraud detection, predictive maintenance, threat intelligence, and operational optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mlCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
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

      {/* Model Governance */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Responsible AI</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Federal-Grade Model Governance
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Black-box AI is not acceptable for government. Every prediction includes transparent reasoning and full audit trails.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {governanceFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-2">{item.feature}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
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
              Real-World ML Implementation Results
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
      <section className="py-20 md:py-28 bg-white">
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
              ML Implementation Deliverables
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
              Ready to Deploy Explainable AI for Your Mission?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a complimentary consultation to discuss your ML/AI use cases and learn how we can help you build accountable, transparent AI systems.
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

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
