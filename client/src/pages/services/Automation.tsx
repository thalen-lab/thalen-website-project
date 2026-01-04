import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';

export default function Automation() {
  // Primary service offerings (3 core automation capabilities)
  const primaryServices = [
    {
      title: 'Government RPA Implementation',
      description: 'Automate repetitive manual processes by optimizing your existing automation tools first, or implement FedRAMP-authorized RPA platforms (UiPath Gov, Automation Anywhere Gov) when new capabilities or compliance requirements demand it.',
      benefits: ['Process assessment & discovery', 'Bot development & deployment', 'Integration with existing systems'],
      link: '/services/automation/rpa'
    },
    {
      title: 'Enterprise Integration Services',
      description: 'Connect and modernize your existing government systems, databases, and applications with custom APIs and integration patterns—or implement FedRAMP iPaaS platforms (MuleSoft Gov, Boomi Gov) when enterprise-scale orchestration is required.',
      benefits: ['Legacy system connectivity', 'Custom API development', 'Data synchronization & governance'],
      link: '/services/automation/integration'
    },
    {
      title: 'Workflow Orchestration',
      description: 'Streamline your existing cross-departmental workflows through process redesign and optimization—or deploy FedRAMP workflow platforms (ServiceNow Gov, Appian Gov) when complex orchestration across legacy systems is needed.',
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

  const caseStudies = [
    {
      category: 'Federal Government',
      title: 'Federal Agency Achieves 85% Process Automation',
      description: 'Implemented UiPath RPA platform with FedRAMP authorization, automating 85% of manual workflows while maintaining TS/SCI compliance. $4.2M contract delivered 6-month ROI.',
      attribution: 'Led by [Team Member Name] at [Previous Agency/Organization]',
      tags: ['RPA', 'FedRAMP', 'CMMC'],
      link: '/case-studies/federal-agency-automation'
    },
    {
      category: 'Defense',
      title: 'DoD Manufacturing Facility Achieves 99.2% Uptime',
      description: 'Implemented FedRAMP-authorized predictive maintenance platform across DoD manufacturing facility. Achieved CMMC Level 3 certification with 99.2% uptime.',
      attribution: 'Led by [Team Member Name] at [Previous Agency/Organization]',
      tags: ['Cybersecurity', 'IoT', 'CMMC'],
      link: '/case-studies/dod-manufacturing-uptime'
    },
    {
      category: 'Federal Government',
      title: 'VA Medical Center Integrates 12 Legacy Systems',
      description: 'Integrated 12 disparate healthcare systems using FedRAMP iPaaS platform. Reduced administrative burden by 60% for 8,500 staff members.',
      attribution: 'Led by [Team Member Name] at [Previous Agency/Organization]',
      tags: ['Integration', 'HIPAA', 'FedRAMP'],
      link: '/case-studies/va-medical-integration'
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
          style={{ backgroundImage: "url('/automation-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Intelligent Automation' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Core Service</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Intelligent Automation & Process Optimization
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              NexDyne Technology delivers automation through a dual approach: first, we modernize and optimize your existing workflows, systems, and processes—then implement FedRAMP/StateRAMP-authorized platforms (UiPath Gov, Automation Anywhere Gov) only when new capabilities are needed or compliance requires it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Automation Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/services/automation/rpa">
                  Explore RPA Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Primary Automation Services */}
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
              Core Automation Implementation Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link} className="block group h-full">
                  <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3 group-hover:text-[oklch(0.65_0.18_55)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-[oklch(0.65_0.18_55)] text-sm font-semibold group-hover:gap-3 gap-2 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Capabilities */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Extended Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Additional Automation Capabilities</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">{capability.name}</h4>
                  <p className="text-sm text-slate-600">{capability.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAR Compliance for Automation Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Compliance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Government Contracting Compliance</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our automation implementations comply with Federal Acquisition Regulation requirements for IT services.
            </p>
          </motion.div>

          <Card className="p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-4">
                  FAR Part 39 Compliance
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Automation implementations comply with FAR Part 39 (Acquisition of Information Technology) requirements governing IT professional services and cloud solutions.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span><strong>FAR 52.239-1:</strong> Privacy and security safeguards for automation platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span><strong>FAR 52.204-21:</strong> Basic safeguarding of contractor information systems</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-4">
                  Procurement Benefits
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Pre-established compliance frameworks enable faster contract execution and reduced oversight requirements for agency procurement officers.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>Streamlined task order awards under GSA Schedule contracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>Documented compliance reduces agency oversight burden</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Team Experience Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Proven Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Our Team's Experience
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our team members have delivered automation solutions at leading government agencies. These projects were completed during their tenure at previous organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={study.link} className="block h-full group">
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-slate-400 text-sm font-medium">Project Image</div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-[oklch(0.65_0.18_55)] text-white text-xs font-semibold rounded-full">
                          {study.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3 group-hover:text-[oklch(0.65_0.18_55)] transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        {study.description}
                      </p>
                      <p className="text-xs text-slate-500 mb-4 italic">
                        {study.attribution}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Government Processes?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a free automation assessment to identify opportunities, evaluate your existing systems, and develop a roadmap for implementation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
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
