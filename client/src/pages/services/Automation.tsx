import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Users, Award, Bot, Network, GitBranch, Wrench, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Automation() {
  // Two ways we serve government agencies
  const twoApproaches = [
    {
      icon: Wrench,
      number: '1',
      title: 'Modernize Your Existing Systems',
      description: 'We help agencies optimize and automate THEIR OWN existing systems and operations without requiring new platform purchases.',
      capabilities: [
        'Legacy system modernization and integration',
        'Process optimization and workflow automation',
        'Custom integrations between existing tools',
        'Infrastructure upgrades and improvements'
      ],
      emphasis: 'Start here: Most agencies can achieve significant automation gains by modernizing what they already have.'
    },
    {
      icon: Cloud,
      number: '2',
      title: 'Implement FedRAMP Platforms When Needed',
      description: 'When existing systems cannot meet mission requirements, we implement FedRAMP/StateRAMP-authorized platforms and integrate them with your current infrastructure.',
      capabilities: [
        'When agencies need new capabilities not available internally',
        'When legacy systems cannot be cost-effectively modernized',
        'When compliance requires FedRAMP-authorized solutions',
        'Integration of new platforms with existing systems'
      ],
      emphasis: 'Platform-agnostic: We recommend platforms only when modernization is not sufficient.'
    }
  ];

  // Primary service offerings (3 core automation capabilities)
  const primaryServices = [
    {
      icon: Bot,
      title: 'Government RPA Implementation',
      description: 'Automate repetitive manual processes using robotic process automation—either with your existing tools or FedRAMP-authorized platforms when needed.',
      benefits: ['Process assessment & discovery', 'Bot development & deployment', 'Integration with existing systems'],
      link: '/services/automation/rpa'
    },
    {
      icon: Network,
      title: 'Enterprise Integration Services',
      description: 'Connect your existing government systems, databases, and applications with secure APIs, data synchronization, and compliance-ready integration patterns.',
      benefits: ['Legacy system connectivity', 'Custom API development', 'Data synchronization & governance'],
      link: '/services/automation/integration'
    },
    {
      icon: GitBranch,
      title: 'Workflow Orchestration',
      description: 'Automate end-to-end business processes across multiple departments and systems with intelligent workflow orchestration and process optimization.',
      benefits: ['Cross-system automation', 'Business process management', 'Real-time monitoring'],
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

  const keyDifferentiators = [
    {
      icon: Wrench,
      title: 'Modernization-First Approach',
      description: 'We start by optimizing and automating your existing systems and operations before recommending new platform purchases.'
    },
    {
      icon: Shield,
      title: 'Platform-Agnostic Consulting',
      description: 'Vendor-neutral guidance. We implement FedRAMP platforms only when your existing systems cannot meet mission requirements.'
    },
    {
      icon: Award,
      title: 'Mission-Focused Implementation',
      description: 'Automation solutions designed for measurable mission impact—faster processing, reduced errors, compliance assurance, and operational cost savings.'
    }
  ];

  const governmentExperience = [
    { 
      agency: 'Federal Agency', 
      project: 'Claims Processing Automation', 
      outcome: '85% automation rate achieved',
      details: 'Automated 12 claims processing workflows by modernizing existing systems and integrating legacy databases. Reduced manual processing time from 45 minutes to 6 minutes per claim without new platform purchases.'
    },
    { 
      agency: 'Department of Defense', 
      project: 'Contract Management Automation', 
      outcome: '$4.2M annual cost savings',
      details: 'Implemented workflow automation for contract review and compliance checking across existing systems. Automated 8 processes across 3 offices. Reduced contract processing cycle from 14 days to 3 days.'
    },
    { 
      agency: 'Department of Veterans Affairs', 
      project: 'Benefits Processing Optimization', 
      outcome: '60% faster processing time',
      details: 'Built automation bots for benefits eligibility verification and integrated with 5 legacy systems. Reduced average processing time from 28 days to 11 days. Improved accuracy rate to 99.2%.'
    }
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

      {/* Hero Section - Enhanced with design system patterns */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden min-h-[500px] sm:h-[600px] flex items-center">
        <div className="container">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Core Service
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Government Process Automation
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 text-white/95 leading-relaxed">
              We help government agencies automate processes and workflows through two approaches: modernizing and optimizing your existing systems first, then implementing FedRAMP/StateRAMP-authorized platforms when needed.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">
                  Request Automation Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all">
                <Link href="/services/automation/rpa">
                  Explore RPA Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two Ways We Serve Government Agencies - Enhanced spacing and animations */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 tracking-wider uppercase">Two Ways We Serve Government Agencies</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Modernization First, Platforms When Needed
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Most agencies can achieve significant automation gains by modernizing their existing systems. We implement new platforms only when modernization cannot meet mission requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {twoApproaches.map((approach, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <approach.icon className="h-8 w-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-5xl font-bold text-accent/20 mb-2">{approach.number}</div>
                        <h3 className="text-2xl font-bold mb-3">{approach.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{approach.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {approach.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-accent/5 border-l-4 border-accent p-4 rounded">
                      <p className="text-sm font-semibold">{approach.emphasis}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators - Enhanced with design system patterns */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 tracking-wider uppercase">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Proven Automation Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {keyDifferentiators.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Automation Services - Enhanced with design system patterns */}
      <section className="py-16 md:py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <motion.div 
            className="mb-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 tracking-wider uppercase">Core Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Core Automation Implementation Services
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              End-to-end automation capabilities designed for government agencies (federal, state, and local) requiring compliance and mission-critical reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {primaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link href={service.link} className="block group h-full">
                  <Card className="h-full border-2 border-white/10 hover:border-accent bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                        <service.icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {service.title}
                      </h3>
                      <p className="text-base text-white/80 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-white/80">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center text-accent text-sm font-semibold group-hover:gap-3 gap-2 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional Capabilities */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Additional Automation Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start p-6 bg-white/5 backdrop-blur-sm rounded-lg border-2 border-white/10 hover:border-accent/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">{capability.name}</h4>
                    <p className="text-sm text-white/70">{capability.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Government Automation Experience - Enhanced with design system patterns */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 tracking-wider uppercase">Proven Results</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Government Automation Implementation Success
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience implementing automation solutions across government agencies (federal, state, and local) with measurable mission impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {governmentExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full border-2 hover:border-accent hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <TrendingUp className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{exp.agency}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exp.project}</p>
                    <p className="text-2xl font-bold text-accent mb-4">{exp.outcome}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Button asChild size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all">
              <Link href="/case-studies">
                View All Automation Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FedRAMP Platform Expertise - Enhanced with design system patterns */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 tracking-wider uppercase">Platform Expertise (When Needed)</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              FedRAMP-Authorized Platform Implementation
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              When your existing systems cannot meet mission requirements, we implement and integrate FedRAMP-authorized automation platforms from leading vendors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {fedrampPlatforms.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full border-2 hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.platforms.map((platform, idx) => (
                        <span key={idx} className="bg-muted text-accent px-3 py-1 rounded-full text-sm font-medium border border-border hover:bg-accent/10 hover:border-accent transition-colors">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 bg-card border-2 border-border rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-card-foreground mb-4 text-center">
              <strong>Platform-Agnostic Approach:</strong> We evaluate your existing systems first and recommend FedRAMP platforms only when modernization cannot achieve mission objectives. Our implementation includes full ATO support, compliance documentation, and integration with your current infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced with design system patterns */}
      <section className="py-16 md:py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Ready to Automate Your Government Processes?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Schedule a free automation assessment to identify opportunities for process optimization, cost savings, and mission impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">
                  Schedule Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all">
                <Link href="/case-studies">
                  View Success Stories
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
