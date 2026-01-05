import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, Bot, Network, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Orchestration() {
  const orchestrationBenefits = [
    {
      title: 'End-to-End Process Visibility',
      description: 'See exactly how work flows through your organization in real-time. Identify bottlenecks, measure cycle times, and pinpoint where processes stall—all from a single dashboard.'
    },
    {
      title: 'Policy-Driven Automation',
      description: 'Encode your business rules, approval hierarchies, and compliance requirements into automated workflows. Ensure every process follows policy without manual oversight.'
    },
    {
      title: 'Adaptive Workflow Management',
      description: 'Processes change as missions evolve. Our orchestration platform adapts to new requirements without custom coding—your team configures workflows through visual tools, not developer tickets.'
    }
  ];

  const orchestrationScenarios = [
    {
      title: 'Multi-Agency Coordination',
      description: 'Orchestrate workflows that span federal, state, and local agencies. Automate handoffs, enforce SLAs, and maintain visibility across organizational boundaries for disaster response, law enforcement, and interagency initiatives.',
      metric: '75% faster coordination'
    },
    {
      title: 'Procurement & Contracting',
      description: 'Automate the entire acquisition lifecycle from requisition through contract award. Route approvals based on dollar thresholds, enforce FAR compliance, and integrate with financial systems for seamless obligation tracking.',
      metric: '60% cycle time reduction'
    },
    {
      title: 'Case Management Workflows',
      description: 'Orchestrate complex case processing workflows for benefits administration, investigations, and regulatory enforcement. Automatically assign work, escalate aging cases, and ensure consistent handling across your organization.',
      metric: '80% SLA compliance'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Process Mining & Analysis',
      description: 'We analyze your current process by interviewing stakeholders, reviewing documentation, and observing actual workflows. You will receive a detailed process map showing every step, decision point, and handoff—plus recommendations for optimization before automation.',
      deliverable: 'Current State Process Map & Optimization Recommendations'
    },
    {
      number: '02',
      title: 'Workflow Design & Policy Encoding',
      description: 'We design the optimized workflow with your team, encoding business rules, approval hierarchies, and compliance requirements. Every decision point is documented, and exception handling is built in from the start.',
      deliverable: 'Future State Workflow Design & Business Rules Documentation'
    },
    {
      number: '03',
      title: 'Platform Configuration & Integration',
      description: 'We configure the orchestration platform to match your workflow design, integrate with your existing systems (ERP, case management, email, etc.), and build dashboards for process monitoring.',
      deliverable: 'Configured platform with full system integration'
    },
    {
      number: '04',
      title: 'Deployment & Continuous Improvement',
      description: 'The orchestrated process goes live with full monitoring and support. We track performance metrics, identify bottlenecks, and continuously refine workflows based on actual usage data.',
      deliverable: 'Production workflow + ongoing optimization support'
    }
  ];

  const stats = [
    { value: '65%', label: 'Faster process completion' },
    { value: '90%', label: 'SLA compliance rate' },
    { value: '100%', label: 'Process visibility' },
    { value: '45 Days', label: 'Average implementation' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/orchestration-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Intelligent Automation', href: '/services/automation' },
                { label: 'Process Orchestration' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">FedRAMP & StateRAMP Authorized Workflow Automation</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Process Orchestration for Government Agencies
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Your most important work involves multiple departments, systems, and decision points. Approvals get stuck in email chains. Work sits in queues waiting for the next step. NexDyne Technology Process Orchestration automates these complex, multi-step workflows from end to end—routing work intelligently, enforcing policy automatically, and giving you real-time visibility into every process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Process Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View Orchestration Examples
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Key Benefits</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Transform How Your Agency Operates
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Process orchestration is not just workflow automation—it is the operating system for your entire organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {orchestrationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Orchestration Scenarios */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Common Orchestration Scenarios
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From procurement to case management, government agencies (federal, state, and local) orchestrate their most complex processes with NexDyne Technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {orchestrationScenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">
                      {scenario.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {scenario.description}
                    </p>
                    <div className="bg-[oklch(0.97_0.01_250)] rounded-lg p-4">
                      <div className="text-2xl font-bold text-[oklch(0.65_0.18_55)] mb-1">{scenario.metric}</div>
                      <div className="text-sm text-slate-600">Typical improvement</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              The NexDyne Technology Orchestration Framework
            </h2>
            <p className="text-lg text-slate-600">
              We do not just automate your current process—we optimize it first.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[oklch(0.35_0.10_250)]/20 -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-16`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-[oklch(0.97_0.01_250)] rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-colors duration-300">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="text-4xl font-bold text-[oklch(0.35_0.10_250)]/20">{step.number}</span>
                        <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)]">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-3">{step.description}</p>
                      <span className="inline-block text-sm font-semibold text-[oklch(0.65_0.18_55)]">
                        Deliverable: {step.deliverable}
                      </span>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[oklch(0.35_0.10_250)] border-4 border-white shadow-md"></div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
              Ready to Orchestrate Your Complex Workflows?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a free process assessment. We will map your current workflow, identify bottlenecks, and show you exactly how orchestration will improve cycle times and compliance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View Orchestration Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Robotic Process Automation (RPA)',
            description: 'Deploy intelligent bots within orchestrated workflows for end-to-end process automation.',
            href: '/services/automation/rpa',
            icon: Bot
          },
          {
            title: 'System Integration & APIs',
            description: 'Connect disparate systems that your workflows orchestrate with seamless integrations.',
            href: '/services/automation/integration',
            icon: Network
          },
          {
            title: 'Process Mining & Optimization',
            description: 'Discover optimization opportunities in your workflows with AI-powered process mining and analysis.',
            href: '/services/process-optimization',
            icon: BarChart3
          }
        ]}
        title="Complete Workflow Automation"
        description="Enhance orchestration capabilities with RPA, integration, and process optimization services."
      />

      <Footer />
    </div>
  );
}
