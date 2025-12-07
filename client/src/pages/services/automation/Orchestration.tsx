import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Workflow, GitBranch, Activity, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Orchestration() {
  // Primary service offerings (4 core capabilities)
  const primaryServices = [
    {
      icon: Layers,
      title: 'End-to-End Process Visibility',
      description: 'Real-time visibility into how work flows through your organization with bottleneck identification, cycle time measurement, and process analytics dashboards.',
      benefits: ['Real-time process monitoring', 'Bottleneck identification', 'Performance analytics']
    },
    {
      icon: GitBranch,
      title: 'Policy-Driven Automation',
      description: 'Encode business rules, approval hierarchies, and compliance requirements into automated workflows that enforce policy without manual oversight.',
      benefits: ['Business rule automation', 'Approval routing', 'Compliance enforcement']
    },
    {
      icon: Activity,
      title: 'Adaptive Workflow Management',
      description: 'Configure workflows through visual tools without custom coding, enabling your team to adapt processes as missions evolve without developer tickets.',
      benefits: ['Visual workflow designer', 'No-code configuration', 'Rapid process changes']
    },
    {
      icon: Workflow,
      title: 'Cross-System Orchestration',
      description: 'Automate end-to-end business processes across multiple departments and systems with intelligent workflow orchestration and process optimization.',
      benefits: ['Multi-system coordination', 'Automated handoffs', 'SLA enforcement']
    }
  ];

  // Additional capabilities (compact format)
  const additionalCapabilities = [
    { name: 'Multi-Agency Coordination', description: 'Orchestrate workflows spanning federal, state, and local agencies with automated handoffs' },
    { name: 'Procurement & Contracting Automation', description: 'Automate acquisition lifecycle from requisition through contract award with FAR compliance' },
    { name: 'Case Management Workflows', description: 'Orchestrate complex case processing for benefits administration and investigations' },
    { name: 'Business Process Management (BPM)', description: 'Design, execute, and optimize business processes with comprehensive BPM capabilities' }
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
              Implementation Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Workflow Orchestration
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Automate end-to-end business processes across multiple departments and systems with intelligent workflow orchestration and process optimization. Route work intelligently, enforce policy automatically, and gain real-time visibility into every process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">
                  Request Process Assessment
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

      {/* Primary Orchestration Services */}
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
              Core Orchestration Implementation Services
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              End-to-end workflow orchestration capabilities designed for government agencies (federal, state, and local) requiring compliance and mission-critical reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {primaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
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

                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-white/80">
                          <ArrowRight className="h-4 w-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Additional Orchestration Capabilities</h3>
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

      <Footer />
    </div>
  );
}
