import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Shield, Users, Bot, Network, GitBranch, FileText, Search, Workflow, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Automation() {


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
    { icon: FileText, name: 'Intelligent Document Processing (IDP)', description: 'AI-powered document extraction and classification for unstructured data' },
    { icon: Search, name: 'Process Mining & Discovery', description: 'Identify automation opportunities through process analytics and mining' },
    { icon: Workflow, name: 'Hyperautomation Strategy', description: 'Combine RPA, AI/ML, OCR, and workflow tools for end-to-end automation' },
    { icon: Settings, name: 'Bot Maintenance & Support', description: 'Ongoing monitoring, optimization, and scaling of automation solutions' }
  ];


  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
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
              We help government agencies automate processes and workflows through two approaches: modernizing and optimizing your existing systems first, then implementing FedRAMP/StateRAMP-authorized platforms when needed.
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



      {/* Primary Automation Services */}
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
              End-to-end automation capabilities designed for government agencies (federal, state, and local) requiring compliance and mission-critical reliability.
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

          {/* Additional Capabilities */}
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
                  <capability.icon className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
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

      {/* FAR Compliance for Automation Services */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-3">Government Contracting Compliance</h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Our automation implementations comply with Federal Acquisition Regulation requirements for IT services.
              </p>
            </div>

            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-3 flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                      FAR Part 39 Compliance
                    </h3>
                    <p className="text-sm text-slate-700 mb-4">
                      Automation implementations comply with FAR Part 39 (Acquisition of Information Technology) requirements governing IT professional services and cloud solutions.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>FAR 52.239-1:</strong> Privacy and security safeguards for automation platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>FAR 52.204-21:</strong> Basic safeguarding of contractor information systems</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-3 flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                      Procurement Benefits
                    </h3>
                    <p className="text-sm text-slate-700 mb-4">
                      Pre-established compliance frameworks enable faster contract execution and reduced oversight requirements for agency procurement officers.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Streamlined task order awards under GSA Schedule contracts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Documented compliance reduces agency oversight burden</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
              Schedule a free automation assessment to identify opportunities, evaluate your existing systems, and develop a roadmap for implementation.
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
