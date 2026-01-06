import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function Strategy() {
  const implementationPhases = [
    {
      phase: 'Phase 1',
      title: 'Current State Assessment',
      duration: '2-3 weeks',
      activities: [
        'Inventory existing data assets, systems, and stakeholders',
        'Assess data quality, governance maturity, and compliance gaps',
        'Document pain points, quick wins, and strategic opportunities',
        'Benchmark against industry standards and best practices'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Strategy Development',
      duration: '3-4 weeks',
      activities: [
        'Define data vision, principles, and strategic objectives',
        'Develop data governance framework and operating model',
        'Create 3-year implementation roadmap with milestones',
        'Identify quick wins for immediate value demonstration'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Governance Framework Implementation',
      duration: '4-6 weeks',
      activities: [
        'Establish data governance council and stewardship roles',
        'Implement data quality rules and monitoring processes',
        'Deploy data catalog and metadata management tools',
        'Create policies for data access, security, and retention'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Operationalization & Adoption',
      duration: '2-4 weeks',
      activities: [
        'Train data stewards and governance council members',
        'Launch governance processes and monitoring dashboards',
        'Establish continuous improvement mechanisms',
        'Document lessons learned and success metrics'
      ]
    }
  ];

  const strategyComponents = [
    {
      component: 'Data Vision & Principles',
      description: 'Clear articulation of how data will drive mission outcomes and decision-making',
      ideal: 'Executive alignment, cultural transformation, strategic planning'
    },
    {
      component: 'Governance Operating Model',
      description: 'Roles, responsibilities, and processes for managing data as a strategic asset',
      ideal: 'Accountability, compliance, data quality improvement'
    },
    {
      component: 'Data Quality Framework',
      description: 'Standards, metrics, and processes for measuring and improving data quality',
      ideal: 'Analytics accuracy, regulatory compliance, operational efficiency'
    },
    {
      component: 'Metadata Management',
      description: 'Data catalog, business glossary, and lineage tracking for data discovery',
      ideal: 'Self-service analytics, impact analysis, compliance reporting'
    },
    {
      component: 'Data Security & Privacy',
      description: 'Policies and controls for data classification, access, and protection',
      ideal: 'FISMA compliance, PII protection, insider threat prevention'
    },
    {
      component: 'Implementation Roadmap',
      description: '3-year phased plan with milestones, dependencies, and resource requirements',
      ideal: 'Budget planning, stakeholder alignment, progress tracking'
    }
  ];

  const deliverables = [
    {
      title: 'Data Strategy Document',
      description: 'Comprehensive strategy including vision, principles, objectives, and 3-year roadmap aligned with mission priorities.',
      pages: '40-60 pages'
    },
    {
      title: 'Governance Framework',
      description: 'Operating model, roles and responsibilities, policies, standards, and procedures for enterprise data governance.',
      pages: '50-75 pages'
    },
    {
      title: 'Data Quality Playbook',
      description: 'Data quality dimensions, metrics, monitoring processes, and remediation procedures.',
      pages: '30-40 pages'
    },
    {
      title: 'Implementation Roadmap',
      description: 'Detailed 3-year roadmap with quarterly milestones, resource requirements, and success metrics.',
      pages: '25-35 pages'
    }
  ];

  const caseStudy = {
    agency: 'Federal Civilian Agency',
    challenge: 'The agency had no enterprise data strategy—each bureau managed data independently with inconsistent quality, no governance, and duplicate systems costing $15M annually.',
    solution: 'Developed comprehensive data strategy with governance framework, established data governance council, and implemented data catalog across all bureaus.',
    results: [
      { metric: '$8M', label: 'Annual cost savings' },
      { metric: '40%', label: 'Data quality improvement' },
      { metric: '6 months', label: 'Strategy to implementation' },
      { metric: '12', label: 'Bureaus unified' }
    ]
  };

  const governanceMaturity = [
    {
      level: 'Level 1: Initial',
      description: 'Ad-hoc data management, no formal governance, inconsistent quality',
      characteristics: ['No data ownership', 'Reactive quality fixes', 'Siloed data']
    },
    {
      level: 'Level 2: Managed',
      description: 'Basic governance in place, some data stewards, quality metrics defined',
      characteristics: ['Defined ownership', 'Quality monitoring', 'Basic catalog']
    },
    {
      level: 'Level 3: Defined',
      description: 'Enterprise governance framework, active stewardship, proactive quality',
      characteristics: ['Governance council', 'Quality standards', 'Metadata management']
    },
    {
      level: 'Level 4: Optimized',
      description: 'Data-driven culture, continuous improvement, strategic data asset management',
      characteristics: ['Data as asset', 'Predictive quality', 'Self-service analytics']
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80')" }}
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
                { label: 'Data Strategy & Governance' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Strategic Data Management</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Data Strategy & Governance
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Develop comprehensive data strategies that maximize your existing data assets and infrastructure—with FedRAMP platform recommendations only when new capabilities align with mission objectives and compliance requirements. Transform data from a cost center into a strategic asset.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Strategy Assessment
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
              6-Week Strategy Assessment
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive data strategy development with 3-year implementation roadmap
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

      {/* Strategy Components */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Strategy Components</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Comprehensive Data Strategy Framework
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              End-to-end strategy covering vision, governance, quality, and implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategyComponents.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-2">{item.component}</h3>
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

      {/* Governance Maturity */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Maturity Model</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Data Governance Maturity Levels
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Assess your current state and chart a path to data-driven excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {governanceMaturity.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-[oklch(0.65_0.18_55)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)]">{level.level}</h3>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.characteristics.map((char, idx) => (
                        <span key={idx} className="text-xs bg-[oklch(0.97_0.01_250)] text-slate-700 px-2 py-1 rounded font-medium">
                          {char}
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
              Real-World Strategy Implementation Results
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
              Strategy Engagement Deliverables
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
              Ready to Transform Data Into a Strategic Asset?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a complimentary consultation to discuss your data strategy needs and learn how we can help you build a data-driven organization.
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
