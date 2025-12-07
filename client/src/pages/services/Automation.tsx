import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Users, Award, Bot, Network, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Automation() {
  // Primary service offerings (3 core automation capabilities)
  const primaryServices = [
    {
      icon: Bot,
      title: 'Government RPA Implementation',
      description: 'Implement FedRAMP-authorized RPA platforms (UiPath Gov, Automation Anywhere Gov, Blue Prism Gov) with process discovery, bot development, ATO documentation, and Center of Excellence setup.',
      benefits: ['Process assessment & discovery', 'FedRAMP platform deployment', 'ATO compliance documentation'],
      link: '/services/automation/rpa'
    },
    {
      icon: Network,
      title: 'Enterprise Integration Services',
      description: 'Connect FedRAMP-authorized platforms and legacy government systems with secure APIs, data synchronization, and compliance-ready integration patterns.',
      benefits: ['50+ FedRAMP platform connectors', 'Legacy system modernization', 'API security & governance'],
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
      icon: Shield,
      title: 'FedRAMP Platform Expertise',
      description: 'Deep implementation experience with 50+ FedRAMP-authorized automation platforms including UiPath Gov, Automation Anywhere Gov, and ServiceNow Gov.'
    },
    {
      icon: Users,
      title: 'Vendor-Neutral Consulting',
      description: 'We help you select the RIGHT automation platforms for your mission requirements, then implement them with proven government-specific best practices.'
    },
    {
      icon: Award,
      title: 'Mission-Focused Implementation',
      description: 'Automation solutions designed for measurable mission impact—faster processing, reduced errors, compliance assurance, and operational cost savings.'
    }
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

      {/* Hero Section - Matching Homepage Style */}
      <section className="relative py-20 md:py-32 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Core Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Government Process Automation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We help government agencies (federal, state, and local) implement FedRAMP and StateRAMP-authorized automation platforms with RPA, systems integration, and workflow orchestration. Vendor-neutral consulting with proven expertise across all major automation technologies.
            </p>
            <div className="flex flex-wrap gap-4">
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

      {/* Key Differentiators - Matching Homepage Card Style */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Why Choose Us</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Proven Automation Expertise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Automation Services - Glass-morphism Cards */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Core Capabilities</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Core Automation Implementation Services
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              End-to-end automation capabilities from RPA to enterprise integration, designed for government agencies (federal, state, and local) requiring FedRAMP and StateRAMP compliance and mission-critical reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.link} className="block group h-full">
                  <Card className="h-full border border-white/10 hover:border-accent bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <service.icon className="h-12 w-12 text-accent" />
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
                            <ArrowRight className="h-4 w-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
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

          {/* Additional Capabilities - Compact Format */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Additional Automation Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
                  <ArrowRight className="h-4 w-4 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">{capability.name}</h4>
                    <p className="text-sm text-white/70">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Government Automation Experience - Sharp Edges Style */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Proven Results</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Government Automation Implementation Success
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Proven track record implementing automation platforms and solutions across government agencies (federal, state, and local) with measurable mission impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {governmentExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full rounded-none border-2 border-slate-900 hover:shadow-2xl transition-all active:scale-95 group">
                  <CardContent className="p-8">
                    <TrendingUp className="h-12 w-12 text-primary mb-4 group-hover:text-accent transition-colors" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.agency}</h3>
                    <p className="text-sm text-slate-600 mb-3">{exp.project}</p>
                    <p className="text-lg font-bold text-primary">{exp.outcome}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button asChild size="lg" variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
              <Link href="/case-studies">
                View All Automation Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FedRAMP Automation Platform Expertise */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Platform Expertise</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              FedRAMP-Authorized Automation Platform Expertise
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We implement and integrate FedRAMP-authorized automation platforms from leading vendors, helping you select the right tools for your mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {fedrampPlatforms.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-accent/40 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.platforms.map((platform, idx) => (
                        <span key={idx} className="bg-slate-100 border border-slate-300 text-slate-900 px-3 py-1 rounded-full text-sm font-medium hover:bg-accent/10 hover:border-accent transition-colors">
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
            className="mt-12 text-center bg-primary/5 border-2 border-primary/20 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-slate-700 mb-4">
              <strong className="text-slate-900">Vendor-neutral approach:</strong> We help you evaluate and select the RIGHT automation platforms for your specific mission requirements, compliance needs, and budget constraints—then implement them with proven best practices.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Discuss Platform Selection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate Your Government Processes?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule a free automation assessment to identify opportunities, evaluate platforms, and develop a roadmap for implementation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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
