import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Shield, 
  Cloud, 
  BarChart3,
  Cpu,
  Code,
  Users,
  CheckCircle,
  Building2,
  Award,
  Zap,
  Target
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoreCapabilities() {
  const services = [
    {
      icon: Cpu,
      title: 'Process Automation & Optimization',
      description: 'Modernize your existing workflows with RPA and orchestration—or implement FedRAMP platforms (UiPath Gov, Automation Anywhere Gov) when needed. Includes legacy system integration, ATO support, and compliance documentation.',
      href: '/services/automation',
      features: ['RPA Implementation', 'Legacy System Integration', 'ATO Support', 'Compliance Documentation']
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Intelligence',
      description: 'Optimize your existing data infrastructure and analytics capabilities—or implement FedRAMP BI platforms (Tableau Gov, Power BI Gov) when compliance requires it. Includes data strategy, governance, and custom dashboards.',
      href: '/services/data-analytics',
      features: ['Data Strategy', 'BI Platform Implementation', 'Custom Dashboards', 'Data Governance']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Modernization',
      description: 'Modernize on-premises infrastructure or migrate to FedRAMP cloud platforms (AWS GovCloud, Azure Gov) when mission demands it. Includes hybrid architecture, legacy system integration, and ATO support.',
      href: '/services/cloud',
      features: ['Cloud Migration', 'Hybrid Architecture', 'FedRAMP Authorization', 'Infrastructure Optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Strengthen your existing security posture or implement FedRAMP security platforms when compliance mandates it. Includes gap analysis, CMMC/FISMA compliance, zero-trust architecture, and ATO documentation.',
      href: '/services/cybersecurity',
      features: ['Zero-Trust Architecture', 'CMMC Compliance', 'Gap Analysis', 'Security Assessments']
    },
    {
      icon: Code,
      title: 'Application Development & Integration',
      description: 'Integrate your existing systems with modern APIs and workflows—or connect FedRAMP platforms (Salesforce Gov, ServiceNow, Workday) when needed. Vendor-neutral architecture ensures no lock-in.',
      href: '/services/system-integration',
      features: ['API Development', 'System Integration', 'Custom Applications', 'Platform Connectivity']
    },
    {
      icon: Users,
      title: 'Digital Transformation & Modernization',
      description: 'Transform your existing operations through process redesign, change management, and technology optimization—with FedRAMP platform implementation when compliance requires it. Includes TMF support and vendor-neutral guidance.',
      href: '/services/digital-transformation',
      features: ['Process Redesign', 'Change Management', 'TMF Support', 'Technology Optimization']
    }
  ];

  const complianceFrameworks = [
    { name: 'FedRAMP', description: 'Moderate & High Impact Levels' },
    { name: 'CMMC', description: 'Level 2 & Level 3 Compliance' },
    { name: 'FISMA', description: 'Federal Information Security' },
    { name: 'NIST 800-53', description: 'Security Controls Framework' },
    { name: 'StateRAMP', description: 'State & Local Authorization' },
    { name: 'HIPAA', description: 'Healthcare Data Protection' }
  ];

  const differentiators = [
    {
      icon: Target,
      title: 'Mission-First Approach',
      description: 'We start with your mission objectives and work backward to technology solutions, ensuring every implementation drives measurable outcomes.'
    },
    {
      icon: Shield,
      title: 'Compliance Built-In',
      description: 'Every solution is designed with FedRAMP, CMMC, and other regulatory requirements integrated from day one—not bolted on as an afterthought.'
    },
    {
      icon: Zap,
      title: 'Vendor-Neutral Guidance',
      description: 'We recommend the right technology for your needs, whether that means optimizing existing systems or implementing new FedRAMP platforms.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Our track record includes 85% automation rates, 170% ROI, and 99.2% uptime across federal, state, and commercial clients.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-navy-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
              <Building2 className="h-4 w-4" />
              <span className="text-sm font-medium">Government Technology Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Core Capabilities
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions for federal, state, and local agencies. From automation to cybersecurity, we deliver mission-critical results with compliance-first architecture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">
                  Schedule Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </section>

      {/* Differentiators Section */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 md:py-24 lg:py-28 bg-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold text-accent mb-4 tracking-wider uppercase">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              End-to-End Technology Services
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We deliver tailored solutions across six core capability areas, each designed with government compliance requirements built in from day one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="block h-full group">
                  <Card className="h-full border border-slate-200 hover:border-accent hover:shadow-xl transition-all duration-300 bg-white">
                    <CardContent className="p-8">
                      <div className="mb-6 p-3 inline-flex rounded-lg bg-accent/10">
                        <service.icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-accent font-semibold group-hover:gap-2 gap-1.5 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-accent mb-4 tracking-wider uppercase">Compliance Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Built for Government Standards
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every solution we deliver is designed with compliance requirements integrated from the start, not bolted on as an afterthought.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 bg-slate-50 rounded-lg border border-slate-200 text-center hover:border-accent hover:shadow-md transition-all"
              >
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">{framework.name}</h3>
                <p className="text-xs text-slate-500">{framework.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-navy-gradient text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Agency?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our technology solutions can help you achieve your mission objectives while maintaining full compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/methodology">
                  View Our Methodology
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
