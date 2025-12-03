import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Bot, Network, GitBranch } from 'lucide-react';

export default function Automation() {
  // Primary service offerings (3 core automation capabilities)
  const primaryServices = [
    {
      icon: Bot,
      title: 'Government RPA Implementation',
      description: 'Implement FedRAMP-authorized RPA platforms (UiPath Gov, Automation Anywhere Gov, Blue Prism Gov) with process discovery, bot development, ATO documentation, and Center of Excellence setup.',
      link: '/services/automation/rpa'
    },
    {
      icon: Network,
      title: 'Enterprise Integration Services',
      description: 'Connect FedRAMP-authorized platforms and legacy government systems with secure APIs, data synchronization, and compliance-ready integration patterns.',
      link: '/services/automation/integration'
    },
    {
      icon: GitBranch,
      title: 'Workflow Orchestration',
      description: 'Automate end-to-end business processes across multiple departments and systems with intelligent workflow orchestration and process optimization.',
      link: '/services/automation/orchestration'
    }
  ];

  // Additional capabilities (compact format)
  const additionalCapabilities = [
    { name: 'Intelligent Document Processing (IDP)', description: 'AI-powered document extraction and classification for unstructured data' },
    { name: 'Process Mining & Discovery', description: 'Identify automation opportunities through process analytics and mining' },
    { name: 'Hyperautomation Strategy', description: 'Combine RPA, AI/ML, OCR, and workflow tools for end-to-end automation' },
    { name: 'Bot Maintenance & Support', description: 'Ongoing monitoring, optimization, and scaling of automation solutions' }
  ];



  // 4-Step Implementation Process
  const implementationProcess = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Process mining to identify automation opportunities, ROI modeling, and FedRAMP platform selection based on your mission requirements.',
      duration: '2-4 weeks'
    },
    {
      step: '02',
      title: 'Design & Compliance',
      description: 'Solution architecture, security controls design, ATO documentation preparation, and compliance validation (FedRAMP, FISMA, NIST).',
      duration: '4-6 weeks'
    },
    {
      step: '03',
      title: 'Build & Test',
      description: 'Bot development, integration with legacy systems, user acceptance testing, and performance optimization with government stakeholders.',
      duration: '8-12 weeks'
    },
    {
      step: '04',
      title: 'Deploy & Scale',
      description: 'Production deployment, Center of Excellence setup, training programs, and ongoing optimization to maximize mission impact.',
      duration: 'Ongoing'
    }
  ];

  // Platforms We Implement Most Often
  const topPlatforms = [
    { name: 'UiPath Government Cloud', category: 'RPA' },
    { name: 'Automation Anywhere Gov', category: 'RPA' },
    { name: 'ServiceNow Gov', category: 'Workflow' },
    { name: 'Microsoft Power Automate Gov', category: 'RPA' },
    { name: 'Blue Prism Government', category: 'RPA' },
    { name: 'MuleSoft Government Cloud', category: 'Integration' },
    { name: 'Pega Government Cloud', category: 'BPM' },
    { name: 'Appian Government Cloud', category: 'BPM' }
  ];

  const governmentExperience = [
    { agency: 'Federal Agency', project: 'Claims Processing Automation', outcome: '85% automation rate achieved' },
    { agency: 'Department of Defense', project: 'Contract Management RPA', outcome: '$4.2M annual cost savings' },
    { agency: 'Department of Veterans Affairs', project: 'Benefits Processing Bots', outcome: '60% faster processing time' }
  ];

  const fedrampPlatforms = [
    {
      category: 'RPA & Intelligent Automation',
      platforms: ['UiPath Government Cloud', 'Automation Anywhere Gov', 'Blue Prism Government', 'Microsoft Power Automate Gov']
    },
    {
      category: 'Integration & iPaaS',
      platforms: ['MuleSoft Government Cloud', 'Dell Boomi Gov', 'Informatica Gov', 'SnapLogic Gov']
    },
    {
      category: 'Workflow & BPM',
      platforms: ['ServiceNow Gov', 'Pega Government Cloud', 'Appian Government Cloud', 'Camunda']
    },
    {
      category: 'Document Processing',
      platforms: ['UiPath Document Understanding', 'Automation Anywhere IQ Bot', 'ABBYY FlexiCapture Gov', 'Kofax TotalAgility']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-500/30">
              CORE CAPABILITIES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Government Process Automation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Vendor-neutral consulting for federal, state, and local agencies. We implement FedRAMP and StateRAMP-authorized platforms with proven compliance expertise and measurable mission impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Automation Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Automation Implementation Process */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Automation Implementation Process</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A proven 4-step methodology for delivering compliant, mission-focused automation solutions.
            </p>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Phase 1 */}
            <div className="p-8 md:p-12 border-b md:border-r border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted border-2 border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold">Research & Assessment</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive process mapping, bottleneck identification, and ROI analysis to establish baseline metrics.
              </p>
            </div>

            {/* Phase 2 - Orange Accent */}
            <div className="p-8 md:p-12 border-b border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border-2 border-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-orange-600 dark:text-orange-400">2</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">Architecture & Planning</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Solution architecture design, technology stack selection, and detailed implementation roadmap.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="p-8 md:p-12 md:border-r border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted border-2 border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold">Implementation & Delivery</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Platform implementation with ATO documentation, security controls configuration, and zero-downtime migration.
              </p>
            </div>

            {/* Phase 4 */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted border-2 border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-2xl font-bold">Performance & Optimization</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Real-time monitoring, ROI tracking, and continuous optimization with predictive analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* Platforms We Implement Most Often */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Platforms We Implement Most Often</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              FedRAMP-authorized automation platforms we deploy for government agencies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topPlatforms.map((platform, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <h4 className="font-semibold mb-2 text-base leading-tight text-gray-900">{platform.name}</h4>
                  <p className="text-sm text-gray-600 uppercase tracking-wide">{platform.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              We implement 50+ FedRAMP-authorized platforms. Need help selecting the right tools?
            </p>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Request Platform Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* Primary Automation Services - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Government Technology Implementation Services</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive automation services including RPA implementation, FedRAMP platform integration (50+ connectors), and workflow orchestration across government agencies with ATO documentation and compliance support.
            </p>
          </div>

          <div className="space-y-16">
            {primaryServices.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-6 mb-4">
                  <service.icon className="h-12 w-12 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <Link href={service.link}>
                      <Button variant="outline" className="border-2 hover:border-accent hover:bg-accent/5">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                {index < primaryServices.length - 1 && (
                  <div className="border-t border-border mt-16"></div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Capabilities - Compact Format */}
          <div className="mt-20 pt-16 border-t border-border">
            <h3 className="text-2xl font-bold mb-8">Additional Automation Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold mb-1">{capability.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* FedRAMP Automation Platform Expertise */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">FedRAMP-Authorized Automation Platform Expertise</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We implement and integrate FedRAMP-authorized automation platforms from leading vendors, helping you select the right tools for your mission.
            </p>
          </div>

          <div className="space-y-12">
            {fedrampPlatforms.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.platforms.map((platform, idx) => (
                    <span key={idx} className="bg-secondary border border-border text-foreground px-4 py-2 rounded-full text-sm font-medium">
                      {platform}
                    </span>
                  ))}
                </div>
                {index < fedrampPlatforms.length - 1 && (
                  <div className="border-t border-border mt-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Government Processes?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Schedule a free automation assessment to identify high-impact opportunities and build your roadmap.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
