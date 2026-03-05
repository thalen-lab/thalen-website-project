import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import SectorClientLogos from '@/components/SectorClientLogos';
import { motion } from 'framer-motion';

export default function StateLocalGovernmentSector() {
  const stats = [
    { value: '20+', label: 'States Served' },
    { value: '100+', label: 'Local Agencies' },
    { value: '$50M+', label: 'Fraud Prevented' },
    { value: '92%', label: 'Efficiency Gains' }
  ];

  const capabilities = [
    {
      title: 'StateRAMP/GovRAMP Platform Implementation',
      description: 'We implement StateRAMP and GovRAMP-authorized cloud platforms with state-specific compliance documentation, security controls, and authorization support. Our team has deep experience navigating the unique requirements of state and local government IT environments, ensuring platforms meet both technical and procurement requirements across multiple jurisdictions.',
      features: ['StateRAMP/GovRAMP Compliance', 'State Authorization Documentation', 'Multi-State Deployment', 'Reciprocity Management']
    },
    {
      title: 'CJIS-Compliant Public Safety Systems',
      description: 'We deploy CJIS-compliant platforms for state and local law enforcement, courts, and corrections agencies with full FBI CJIS Security Policy adherence. Our implementations include secure data exchange between agencies, mobile field applications, and real-time analytics that support investigations while maintaining the highest security standards.',
      features: ['FBI CJIS Security Policy', 'Law Enforcement Systems', 'Criminal Justice Integration', 'Secure Data Exchange']
    },
    {
      title: 'Constituent Services Modernization',
      description: 'We transform how state and local agencies interact with citizens through modern digital platforms that improve accessibility, reduce wait times, and increase transparency. Our implementations leverage StateRAMP-authorized CRM and case management platforms including Salesforce State & Local, ServiceNow for Government, and Granicus.',
      features: ['Digital Service Delivery', 'Case Management', 'Citizen Portals', 'Process Automation']
    },
    {
      title: 'Legacy System Modernization',
      description: 'State agencies often operate critical systems on aging mainframes and outdated platforms that are expensive to maintain and difficult to integrate. We modernize these legacy systems with cloud migration, data analytics, and automation solutions tailored to state agency requirements and budget constraints.',
      features: ['Mainframe Migration', 'Data Modernization', 'API Integration', 'Phased Approach']
    }
  ];

  const clients = [
    {
      category: 'State Agencies',
      description: 'Supporting state-level departments including Attorney General offices, Departments of Transportation, Energy Commissions, and Health Departments.',
      count: '20+ States'
    },
    {
      category: 'County Governments',
      description: 'Delivering solutions for county health departments, sheriff offices, courts, and administrative agencies with CJIS and HIPAA compliance.',
      count: '50+ Counties'
    },
    {
      category: 'Municipal Governments',
      description: 'Modernizing city operations with constituent services platforms, public safety systems, and infrastructure management solutions.',
      count: '100+ Municipalities'
    }
  ];

  const caseStudies = [
    {
      title: 'State Attorney General Prevents $50M+ in Fraud',
      agency: 'State Attorney General Office',
      description: 'Implemented AI-powered fraud detection system with CJIS compliance for state law enforcement, analyzing 2.3M cases and preventing over $50M in fraud annually.',
      metrics: [
        { value: '$50M+', label: 'Fraud Prevented' },
        { value: '2.3M', label: 'Cases Analyzed' },
        { value: 'CJIS', label: 'Compliant' }
      ],
      href: '/case-studies/state-attorney-general'
    },
    {
      title: 'State Energy Commission Reduces Outages 65%',
      agency: 'State Energy Commission',
      description: 'Deployed StateRAMP-authorized smart grid platform monitoring 500+ substations with predictive maintenance, reducing outages by 65% across 4.2M customer service area.',
      metrics: [
        { value: '65%', label: 'Outage Reduction' },
        { value: '500+', label: 'Substations' },
        { value: '4.2M', label: 'Customers' }
      ],
      href: '/case-studies/state-energy-commission'
    },
    {
      title: 'State DOT Achieves 92% Efficiency Gain',
      agency: 'State Department of Transportation',
      description: 'Migrated 40-year-old COBOL mainframe to Salesforce Government Cloud, achieving 92% efficiency improvement and $3.8M annual savings.',
      metrics: [
        { value: '92%', label: 'Efficiency Gain' },
        { value: '$3.8M', label: 'Annual Savings' },
        { value: '40yr', label: 'Legacy Replaced' }
      ],
      href: '/case-studies/state-dot'
    }
  ];

  const complianceFrameworks = [
    { name: 'StateRAMP/GovRAMP', description: 'State and local cloud authorization' },
    { name: 'CJIS Security Policy', description: 'FBI criminal justice requirements' },
    { name: 'State Privacy Laws', description: 'CCPA, SHIELD Act compliance' },
    { name: 'HIPAA', description: 'Healthcare data protection' }
  ];

  const procurementPaths = [
    {
      title: 'State Cooperative Contracts',
      description: 'Leverage existing state cooperative purchasing agreements including NASPO ValuePoint, WSCA, and state-specific contracts for streamlined procurement with pre-negotiated pricing.'
    },
    {
      title: 'Local Government RFP Support',
      description: 'Full RFP response support for county and municipal governments with local references, compliance documentation, and transparent pricing structures.'
    },
    {
      title: 'Grant-Funded Projects',
      description: 'Support for federally-funded state and local projects including ARPA, BEAD, and other grant programs with compliance tracking and audit-ready documentation.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/government-contracts.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Sectors' },
                { label: 'State & Local Government' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Trusted Partner</p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              State & Local Government
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Empowering state and municipal agencies with scalable, compliant solutions that modernize public services and citizen engagement. StateRAMP/GovRAMP authorized with deep expertise in CJIS compliance and state procurement processes.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact/government">
                  Request State/Local Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/federal-solutions/state-local/roi-calculator">
                  State ROI Calculator
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Introduction */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-center">Our Approach</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 text-center">
              Transforming State & Local Services
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                State and local governments serve as the front line of public service delivery, directly impacting the daily lives of millions of citizens. From processing driver's licenses and managing public health programs to supporting law enforcement and maintaining critical infrastructure, these agencies face mounting pressure to modernize operations while working within constrained budgets and complex procurement requirements.
              </p>
              <p>
                Thalen Technologies understands the unique challenges facing state and local agencies. Unlike federal environments with standardized compliance frameworks, state and local governments must navigate a patchwork of regulations, procurement rules, and technical requirements that vary by jurisdiction. Our team brings deep experience across 20+ states, helping agencies implement StateRAMP/GovRAMP-authorized platforms, achieve CJIS compliance for public safety systems, and modernize legacy infrastructure without disrupting critical services.
              </p>
              <p>
                We recognize that state and local agencies often lack the IT resources and specialized expertise available to larger federal organizations. That's why we provide end-to-end support—from navigating cooperative purchasing agreements and grant compliance to implementing solutions and training staff. Our mission-focused approach ensures that every technology investment delivers measurable improvements in constituent services, operational efficiency, and cost savings.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">What We Deliver</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              State & Local Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive IT implementation services designed for state agencies, counties, municipalities, and special districts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{capability.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{feature}</span>
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

      {/* Compliance Frameworks */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Compliance Expertise</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              State & Local Compliance
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Deep expertise in state-specific compliance requirements and security frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="font-bold text-lg text-[oklch(0.20_0.05_250)] mb-2">{framework.name}</div>
                    <div className="text-xs text-slate-500">{framework.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement Paths */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Procurement</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Flexible Procurement Options
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Multiple pathways to streamline procurement and accelerate project timelines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {procurementPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{path.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{path.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Experience */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Clients</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              State & Local Experience
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Serving state agencies, counties, and municipalities across the nation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    <h3 className="font-bold text-xl text-[oklch(0.20_0.05_250)] mb-2">{client.category}</h3>
                    <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4">{client.count}</p>
                    <p className="text-sm text-slate-600">{client.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Proven Results</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              State & Local Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real-world results demonstrating our impact across state and local agencies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={study.href} className="block h-full group">
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <p className="text-[oklch(0.65_0.18_55)] text-sm font-semibold mb-2">{study.agency}</p>
                      <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3 group-hover:text-[oklch(0.65_0.18_55)] transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">{study.description}</p>
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg font-bold text-[oklch(0.65_0.18_55)]">{metric.value}</div>
                            <div className="text-xs text-slate-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg" className="border-[oklch(0.65_0.18_55)] text-[oklch(0.65_0.18_55)] hover:bg-[oklch(0.65_0.18_55)] hover:text-white">
              <Link href="/case-studies?industry=State+Government">
                View All State & Local Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <SectorClientLogos 
        sector="state-local" 
        title="Trusted by State & Local Governments"
        subtitle="Partnering with states, counties, and municipalities to modernize public services and improve citizen outcomes."
        variant="light"
      />

      {/* CTA Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Modernize Your State or Local Agency?</h2>
            <p className="text-lg text-white/80 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Let's discuss how Thalen Technologies can help your agency deliver better constituent services with compliant, cost-effective technology solutions. Schedule a complimentary assessment today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                <Link href="/contact/government">
                  Request State/Local Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/federal-solutions/state-local">
                  Explore State Solutions
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
