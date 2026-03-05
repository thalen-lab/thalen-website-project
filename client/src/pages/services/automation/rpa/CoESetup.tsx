import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function CoESetup() {
  const coeComponents = [
    {
      component: 'Governance Framework',
      description: 'Policies, standards, and decision-making processes for enterprise RPA programs',
      elements: ['RPA governance charter', 'Project intake and prioritization', 'Change management procedures', 'Risk management framework']
    },
    {
      component: 'Development Standards',
      description: 'Technical standards and best practices for bot development and deployment',
      elements: ['Coding standards and conventions', 'Reusable component library', 'Testing and QA procedures', 'Deployment and release management']
    },
    {
      component: 'Training Program',
      description: 'Comprehensive training curriculum for citizen developers and RPA professionals',
      elements: ['Platform-specific training', 'Process analysis workshops', 'Bot development bootcamps', 'Certification pathways']
    },
    {
      component: 'Operating Model',
      description: 'Organizational structure, roles, and responsibilities for sustainable RPA operations',
      elements: ['CoE team structure', 'Roles and responsibilities', 'Service delivery model', 'Support and escalation procedures']
    }
  ];

  const setupPhases = [
    {
      phase: 'Phase 1',
      title: 'CoE Strategy & Design',
      duration: '2-3 weeks',
      activities: [
        'Define CoE vision, mission, and success metrics',
        'Design governance framework and decision processes',
        'Establish CoE organizational structure and roles',
        'Create 12-month CoE roadmap and milestones'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Standards & Framework Development',
      duration: '3-4 weeks',
      activities: [
        'Develop bot development standards and conventions',
        'Create reusable component library and templates',
        'Document testing, deployment, and monitoring procedures',
        'Establish security and compliance guidelines'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Training & Enablement',
      duration: '4-6 weeks',
      activities: [
        'Develop training curriculum and materials',
        'Conduct platform training for citizen developers',
        'Run process discovery and analysis workshops',
        'Deliver bot development bootcamps'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Launch & Continuous Improvement',
      duration: 'Ongoing',
      activities: [
        'Launch CoE with initial project portfolio',
        'Establish ongoing support and mentoring',
        'Track KPIs and program metrics',
        'Iterate and improve based on feedback'
      ]
    }
  ];

  const governanceElements = [
    {
      element: 'Project Intake & Prioritization',
      description: 'Standardized process for evaluating and prioritizing automation opportunities',
      deliverables: ['Intake form template', 'Scoring criteria', 'Approval workflow']
    },
    {
      element: 'Change Management',
      description: 'Procedures for managing changes to bots, infrastructure, and processes',
      deliverables: ['Change request process', 'Impact assessment template', 'Approval matrix']
    },
    {
      element: 'Risk Management',
      description: 'Framework for identifying, assessing, and mitigating RPA-related risks',
      deliverables: ['Risk register template', 'Risk assessment criteria', 'Mitigation strategies']
    },
    {
      element: 'Performance Metrics',
      description: 'KPIs and dashboards for tracking RPA program value and health',
      deliverables: ['KPI definitions', 'Reporting dashboards', 'Executive scorecards']
    }
  ];

  const trainingTracks = [
    {
      track: 'Citizen Developer',
      audience: 'Business users building simple bots',
      duration: '2-3 days',
      topics: ['RPA fundamentals', 'Platform basics', 'Simple bot development', 'Testing and deployment'],
      outcome: 'Build and deploy simple attended bots'
    },
    {
      track: 'Professional Developer',
      audience: 'IT staff building complex automation',
      duration: '5-7 days',
      topics: ['Advanced bot development', 'Exception handling', 'API integrations', 'Performance optimization'],
      outcome: 'Build enterprise-grade unattended bots'
    },
    {
      track: 'Process Analyst',
      audience: 'Business analysts identifying opportunities',
      duration: '2 days',
      topics: ['Process discovery', 'Automation feasibility', 'ROI modeling', 'Requirements documentation'],
      outcome: 'Identify and document automation opportunities'
    },
    {
      track: 'RPA Administrator',
      audience: 'IT operations managing RPA infrastructure',
      duration: '3-4 days',
      topics: ['Platform administration', 'Security configuration', 'Monitoring and alerting', 'Troubleshooting'],
      outcome: 'Administer and support RPA platform'
    }
  ];

  const coeRoles = [
    {
      role: 'CoE Director',
      responsibility: 'Overall program leadership, strategy, and stakeholder management',
      commitment: 'Full-time'
    },
    {
      role: 'RPA Architect',
      responsibility: 'Technical architecture, standards, and platform governance',
      commitment: 'Full-time'
    },
    {
      role: 'Lead Developer',
      responsibility: 'Bot development, code reviews, and developer mentoring',
      commitment: 'Full-time'
    },
    {
      role: 'Business Analyst',
      responsibility: 'Process discovery, requirements gathering, and ROI analysis',
      commitment: 'Full-time'
    },
    {
      role: 'Change Manager',
      responsibility: 'Stakeholder engagement, training, and adoption support',
      commitment: 'Part-time (50%)'
    },
    {
      role: 'Security & Compliance Lead',
      responsibility: 'Security controls, compliance documentation, and ATO support',
      commitment: 'Part-time (50%)'
    }
  ];

  const governmentExperience = [
    {
      agency: 'Federal Civilian Agency',
      scope: 'Enterprise CoE serving 8 bureaus',
      outcome: '120+ bots deployed, estimated $18M annual savings',
      timeline: '12-week CoE setup'
    },
    {
      agency: 'Department of Defense',
      scope: 'Command-level CoE with 15-person team',
      outcome: '200+ citizen developers trained',
      timeline: '16-week CoE setup'
    },
    {
      agency: 'State Government',
      scope: 'Statewide CoE supporting 25 agencies',
      outcome: '85 bots deployed in first year',
      timeline: '14-week CoE setup'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/rpa-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Intelligent Automation', href: '/services/automation' },
                { label: 'Government RPA', href: '/services/automation/rpa' },
                { label: 'CoE Setup' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Scale RPA Across Your Agency</p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              RPA Center of Excellence (CoE) Setup
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              One-off bot projects deliver limited value. A properly structured RPA Center of Excellence helps government agencies (federal, state, and local) scale automation enterprise-wide with governance, standards, training, and sustainable operations—turning RPA into a strategic capability, not just a tactical tool.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request CoE Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View CoE Case Study
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CoE Components */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Core Components</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Four Pillars of a Successful RPA CoE
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We establish all four components to ensure your CoE delivers sustainable, enterprise-wide automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {coeComponents.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{item.component}</h3>
                    <p className="text-sm text-slate-600 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.elements.map((element, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{element}</span>
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

      {/* Setup Phases */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              CoE Setup Methodology
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Typical timeline: 10-16 weeks from kickoff to operational CoE
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {setupPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
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

      {/* Governance Elements */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Governance Framework</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Key Governance Elements
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Essential governance components for sustainable RPA program management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {governanceElements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-2">{item.element}</h3>
                    <p className="text-sm text-slate-600 mb-4">{item.description}</p>
                    <div className="bg-[oklch(0.97_0.01_250)] rounded-lg px-4 py-3">
                      <div className="text-xs font-semibold text-[oklch(0.65_0.18_55)] mb-2">Deliverables</div>
                      <div className="flex flex-wrap gap-2">
                        {item.deliverables.map((deliverable, idx) => (
                          <span key={idx} className="text-xs bg-white px-2 py-1 rounded border border-slate-200 text-slate-700">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Tracks */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Training Program</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Role-Based Training Tracks
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive training curriculum tailored to different roles in your RPA program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {trainingTracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)]">{track.track}</h3>
                      <span className="text-xs bg-[oklch(0.65_0.18_55)]/10 text-[oklch(0.65_0.18_55)] px-2 py-1 rounded font-semibold">{track.duration}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{track.audience}</p>
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Topics Covered</div>
                      <ul className="space-y-1">
                        {track.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                            <span className="text-sm text-slate-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[oklch(0.97_0.01_250)] rounded-lg px-4 py-3">
                      <div className="text-xs font-semibold text-[oklch(0.65_0.18_55)] mb-1">Outcome</div>
                      <p className="text-sm text-slate-700">{track.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CoE Roles */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Team Structure</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Recommended CoE Roles
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Key roles and responsibilities for a successful RPA Center of Excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="space-y-4">
                  {coeRoles.map((role, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b border-slate-200 last:border-b-0 last:pb-0">
                      <div className="flex-1">
                        <h4 className="font-bold text-[oklch(0.20_0.05_250)] mb-1">{role.role}</h4>
                        <p className="text-sm text-slate-600">{role.responsibility}</p>
                      </div>
                      <span className="text-xs bg-[oklch(0.65_0.18_55)]/10 text-[oklch(0.65_0.18_55)] px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                        {role.commitment}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Government Experience */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Proven Experience</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Our Team's CoE Experience
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our team members have established RPA Centers of Excellence at leading government agencies. These projects were completed during their tenure at previous organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            {governmentExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-[oklch(0.65_0.18_55)] text-white text-xs font-semibold rounded-full mb-2">
                        {exp.agency}
                      </span>
                      <p className="text-sm text-slate-600">{exp.scope}</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase">Timeline</div>
                        <p className="text-sm text-slate-700">{exp.timeline}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase">Outcome</div>
                        <p className="text-sm text-[oklch(0.65_0.18_55)] font-semibold">{exp.outcome}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your RPA Center of Excellence?
            </h2>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Schedule a consultation to discuss your agency's automation goals and learn how a properly structured CoE can help you scale RPA enterprise-wide.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule CoE Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/services/automation/rpa">
                  Back to RPA Services
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
