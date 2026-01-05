import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, Bot, Workflow, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Integration() {
  const capabilities = [
    {
      title: 'Hybrid Cloud Orchestration',
      description: 'Seamlessly connect on-premise legacy systems with modern cloud applications. Our FedRAMP High-authorized platform bridges the gap between your mainframe data and SaaS tools without compromising security.'
    },
    {
      title: 'Real-Time Data Synchronization',
      description: 'Eliminate batch processing delays and manual reconciliation. Changes propagate across systems in seconds, not overnight, giving decision-makers access to current data when they need it most.'
    },
    {
      title: 'API-Free Integration',
      description: 'Connect systems that were never designed to talk to each other—no custom API development required. Works with COTS products, legacy applications, and everything in between.'
    }
  ];

  const integrationChallenges = [
    {
      title: 'Cross-Agency Information Sharing',
      description: 'Enable secure data exchange between federal, state, and local systems while maintaining strict access controls and audit trails. Perfect for law enforcement, emergency management, and interagency task forces.',
      metric: '75% faster coordination'
    },
    {
      title: 'ERP & Financial System Unification',
      description: 'Connect your financial management system to procurement, HR, and project management tools. Eliminate duplicate data entry and ensure budget data flows automatically where it is needed.',
      metric: '60% reduction in data entry'
    },
    {
      title: 'Citizen Service Portals',
      description: 'Integrate public-facing portals with back-office systems so citizens can check status, upload documents, and receive updates without manual intervention from your staff.',
      metric: '80% self-service rate'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'System Inventory & Data Flow Mapping',
      description: 'We document every system in your environment, map current data flows (manual and automated), and identify integration pain points. You\'ll receive a comprehensive architecture diagram showing exactly how information moves through your organization today.',
      deliverable: 'Current State Architecture & Pain Point Analysis'
    },
    {
      number: '02',
      title: 'Integration Architecture Design',
      description: 'We design a future-state architecture that connects your systems through our FedRAMP-authorized platform. This includes data transformation rules, security controls, error handling, and scalability planning.',
      deliverable: 'Target Architecture Blueprint & Security Plan'
    },
    {
      number: '03',
      title: 'Phased Implementation & Testing',
      description: 'We implement integrations in priority order, starting with your highest-impact data flows. Each integration is thoroughly tested in a sandbox environment before production deployment.',
      deliverable: 'Production integrations with full test documentation'
    },
    {
      number: '04',
      title: 'Monitoring & Continuous Optimization',
      description: 'Once live, you gain access to real-time monitoring dashboards showing data flow health, error rates, and performance metrics. We continuously optimize integrations based on usage patterns.',
      deliverable: 'Operational platform + ongoing support & optimization'
    }
  ];

  const stats = [
    { value: '200+', label: 'Pre-built connectors' },
    { value: '50%', label: 'Reduction in manual data entry' },
    { value: '99.9%', label: 'Platform uptime SLA' },
    { value: '60 Days', label: 'Average integration timeline' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/integration-hero.jpg')" }}
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
                { label: 'Enterprise Integration Platform' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">FedRAMP & StateRAMP Authorized • FIPS 140-2 Compliant</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Enterprise Integration Platform
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Your agency runs on dozens of disconnected systems. Financial data lives in one place, HR records in another, and mission-critical information is scattered across legacy mainframes and modern cloud apps. NexDyne Technology's integration platform connects everything—securely, automatically, and without expensive system replacements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Integration Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/resources">
                  View Integration Architecture
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Core Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Integration Built for Government Complexity
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Government agencies (federal, state, and local) face integration challenges that commercial iPaaS vendors can't solve. We specialize in the hard problems—legacy systems, air-gapped networks, and strict compliance requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
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
                      {capability.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Integration Problem */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Challenge</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">
                Why Government Integration Is Different
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Commercial integration platforms assume you're working with modern, API-enabled systems in a single cloud environment. That's not reality for government agencies. You're running mission-critical applications on mainframes from the 1980s alongside current AI tools.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                NexDyne Technology's integration platform was purpose-built for this complexity. We connect AS/400 mainframes to Salesforce. We synchronize data across classified and unclassified networks. We integrate COTS products that don't have APIs.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'No System Left Behind', desc: 'Connect legacy mainframes, COTS products, and modern SaaS—all through one platform' },
                  { title: 'Air-Gap Ready', desc: 'Secure data transfer between classified and unclassified environments' },
                  { title: 'Compliance Automation', desc: 'Automated FISMA reporting, continuous ATO monitoring, and audit-ready logs' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <div>
                      <div className="font-semibold text-[oklch(0.20_0.05_250)] mb-1">{item.title}</div>
                      <div className="text-sm text-slate-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Challenges */}
      <section className="py-20 md:py-28 bg-white">
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
              Common Integration Challenges We Solve
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From defense contractors to civilian agencies, organizations trust NexDyne Technology to connect their most complex systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrationChallenges.map((challenge, index) => (
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
                      {challenge.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {challenge.description}
                    </p>
                    <div className="bg-[oklch(0.97_0.01_250)] rounded-lg p-4">
                      <div className="text-2xl font-bold text-[oklch(0.65_0.18_55)] mb-1">{challenge.metric}</div>
                      <div className="text-sm text-slate-600">Typical improvement</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
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
              The NexDyne Technology Integration Methodology
            </h2>
            <p className="text-lg text-slate-600">
              We don't just connect systems—we architect sustainable integration ecosystems.
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
                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-colors duration-300">
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
              Ready to Connect Your Systems?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a free integration assessment. We'll map your current system landscape and identify your top 3 integration opportunities with projected time savings.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/resources">
                  Download Integration Guide
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
            description: 'Automate repetitive tasks across integrated systems with intelligent bots that work 24/7 without errors.',
            href: '/services/automation/rpa',
            icon: Bot
          },
          {
            title: 'Workflow Automation & Orchestration',
            description: 'Orchestrate complex multi-system workflows that leverage your integrated enterprise architecture.',
            href: '/services/automation/orchestration',
            icon: Workflow
          },
          {
            title: 'Data Analytics & Intelligence',
            description: 'Unlock insights from integrated data sources with advanced analytics and business intelligence.',
            href: '/services/data-analytics',
            icon: Database
          }
        ]}
        title="Maximize Integration Value"
        description="Leverage your integrated systems with these complementary automation and analytics services."
      />

      <Footer />
    </div>
  );
}
