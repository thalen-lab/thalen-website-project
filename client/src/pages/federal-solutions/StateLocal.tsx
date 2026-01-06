import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';

export default function StateLocal() {
  const keyDifferentiators = [
    {
      title: 'StateRAMP & CJIS Expertise',
      description: 'Deep implementation experience with StateRAMP-authorized platforms and CJIS-compliant systems for state and local law enforcement agencies.'
    },
    {
      title: 'State Procurement Experience',
      description: 'Navigate state-specific procurement processes, cooperative purchasing agreements, and local government contracting requirements with proven expertise.'
    },
    {
      title: 'Mission-Focused for State Agencies',
      description: 'Solutions designed for state and local government missions—faster constituent services, reduced costs, and improved transparency.'
    }
  ];

  const primaryServices = [
    {
      title: 'StateRAMP/GovRAMP Platform Implementation',
      description: 'Implement StateRAMP/GovRAMP-authorized cloud platforms and SaaS solutions with state-specific compliance documentation, security controls, and authorization support.',
      benefits: ['StateRAMP/GovRAMP compliance expertise', 'State authorization documentation', 'Multi-state deployment experience'],
      link: '/services/cloud'
    },
    {
      title: 'CJIS-Compliant Systems',
      description: 'Deploy CJIS-compliant platforms for state and local law enforcement, courts, and corrections agencies with FBI CJIS Security Policy adherence.',
      benefits: ['CJIS Security Policy compliance', 'Law enforcement systems', 'Criminal justice integration'],
      link: '/services/cybersecurity'
    },
    {
      title: 'State Government Modernization',
      description: 'Modernize legacy state systems with cloud migration, data analytics, and automation solutions tailored to state agency requirements and budgets.',
      benefits: ['Legacy system modernization', 'State-specific customization', 'Budget-conscious solutions'],
      link: '/services/digital-transformation'
    }
  ];

  const stateLocalCaseStudies = [
    {
      agency: 'State Attorney General',
      project: 'CJIS-Compliant Fraud Detection',
      outcome: '$50M in fraud prevented annually',
      description: 'Implemented CJIS-compliant fraud detection system processing 10M+ daily transactions with real-time ML analytics.'
    },
    {
      agency: 'State Energy Commission',
      project: 'Grid Optimization Platform',
      outcome: '65% reduction in outages',
      description: 'Deployed StateRAMP-authorized analytics platform monitoring 500+ substations with predictive maintenance.'
    },
    {
      agency: 'County Health Department',
      project: 'Public Health Data Integration',
      outcome: '40% faster outbreak response',
      description: 'Integrated 12 county health systems with state health department for real-time disease surveillance.'
    }
  ];

  const stateRampPlatforms = [
    {
      category: 'Cloud Infrastructure',
      platforms: ['AWS State & Local', 'Microsoft Azure Government', 'Google Cloud for Government', 'Oracle Cloud for State & Local']
    },
    {
      category: 'Public Safety & CJIS',
      platforms: ['Tyler Technologies', 'CentralSquare', 'Motorola Solutions', 'Axon Evidence.com']
    },
    {
      category: 'Constituent Services',
      platforms: ['Salesforce State & Local', 'ServiceNow for Government', 'Granicus', 'OpenGov']
    },
    {
      category: 'Data & Analytics',
      platforms: ['Tableau for Government', 'Microsoft Power BI Gov', 'Qlik Sense Gov', 'Socrata (Tyler Technologies)']
    }
  ];

  const complianceFrameworks = [
    {
      name: 'StateRAMP/GovRAMP',
      description: 'State Risk and Authorization Management Program (recently rebranded as GovRAMP) for cloud service providers serving state, local, tribal, and educational institutions'
    },
    {
      name: 'CJIS Security Policy',
      description: 'FBI Criminal Justice Information Services Security Policy for law enforcement and criminal justice systems'
    },
    {
      name: 'State Data Privacy Laws',
      description: 'Compliance with state-specific data privacy regulations including CCPA, SHIELD Act, and state breach notification laws'
    }
  ];

  const procurementPaths = [
    {
      title: 'State Cooperative Contracts',
      description: 'Leverage existing state cooperative purchasing agreements (NASPO ValuePoint, WSCA, state-specific contracts) for streamlined procurement.',
      benefits: ['Pre-negotiated pricing', 'Simplified procurement', 'Reduced timeline']
    },
    {
      title: 'Local Government RFP Support',
      description: 'Full RFP response support for county and municipal governments with references, compliance documentation, and pricing.',
      benefits: ['RFP response expertise', 'Local references', 'Transparent pricing']
    },
    {
      title: 'Grant-Funded Projects',
      description: 'Support for federally-funded state and local projects including ARPA, BEAD, and other grant programs with compliance tracking.',
      benefits: ['Grant compliance expertise', 'Federal funding alignment', 'Audit-ready documentation']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/state-local-hero.a1b2c3d4.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Government Solutions', href: '/federal-solutions' },
                { label: 'State & Local' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">State & Local Government Solutions</p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              StateRAMP/GovRAMP & CJIS-Compliant IT Implementation
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              We help state, local, and tribal government agencies implement StateRAMP/GovRAMP-authorized platforms, CJIS-compliant systems, and modern IT solutions with state-specific compliance expertise and procurement support.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
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

      {/* Key Differentiators */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Services</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">State & Local Government Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive IT implementation services designed for state agencies, counties, municipalities, and special districts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {primaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild variant="outline" className="w-full border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
                      <Link href={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* State/Local Case Studies */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Success Stories</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">State & Local Government Success Stories</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experience implementing IT solutions for state agencies, counties, and municipalities with measurable outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {stateLocalCaseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{study.agency}</h3>
                    <p className="text-sm text-slate-500 mb-3">{study.project}</p>
                    <p className="text-lg font-bold text-[oklch(0.65_0.18_55)] mb-4">{study.outcome}</p>
                    <p className="text-sm text-slate-600">{study.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
              <Link href="/case-studies">
                View All State/Local Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Compliance</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">State & Local Compliance Expertise</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Deep expertise with state-specific compliance frameworks and security requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{framework.name}</h3>
                    <p className="text-slate-600">{framework.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* StateRAMP Platforms */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Expertise</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">StateRAMP & State-Approved Platform Expertise</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We implement and integrate StateRAMP-authorized and state-approved platforms from leading vendors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {stateRampPlatforms.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.platforms.map((platform, idx) => (
                        <span key={idx} className="inline-flex items-center px-3 py-1.5 rounded-full bg-[oklch(0.95_0.02_250)] text-[oklch(0.30_0.05_250)] text-sm font-medium">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Plus 40+ additional StateRAMP-authorized and state-approved platforms
            </p>
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
              <Link href="/federal-solutions">
                View All Government Platforms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Procurement Paths */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Procurement</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Streamlined State & Local Procurement</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Multiple procurement paths to simplify contracting for state and local government agencies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
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
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{path.title}</h3>
                    <p className="text-slate-600 mb-6">{path.description}</p>
                    
                    <ul className="space-y-3">
                      {path.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-slate-700">{benefit}</span>
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

      {/* Procurement Guide CTA */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white border-2 border-[oklch(0.70_0.18_55)]">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Procurement Resource</p>
                    <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Streamlined State & Local Procurement</h2>
                    <p className="text-lg text-slate-600 mb-6">
                      Reduce procurement time from 6-12 months to 1-4 weeks with cooperative purchasing contracts, state master agreements, and grant-funded project support.
                    </p>
                    <ul className="space-y-3 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                      {[
                        'NASPO ValuePoint, Sourcewell, OMNIA Partners cooperative contracts',
                        '12 state master agreements with pre-negotiated pricing',
                        'Traditional RFP support with state/local references',
                        'ARPA, BEAD, and state grant-funded project assistance'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="lg" className="bg-[linear-gradient(135deg,oklch(0.65_0.20_40),oklch(0.55_0.22_40))] hover:opacity-90 text-white">
                      <Link href="/federal-solutions/state-local/procurement-guide">
                        View Procurement Guide
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-[oklch(0.97_0.01_250)] p-4 sm:p-6 md:p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Procurement Paths</h3>
                    <div className="space-y-4">
                      {[
                        { num: '1', title: 'Cooperative Purchasing', desc: '1-4 weeks • Pre-vetted vendor • No RFP required' },
                        { num: '2', title: 'State Master Agreements', desc: '1-4 weeks • State-specific terms • Pre-approved' },
                        { num: '3', title: 'Traditional RFP', desc: '4-6 weeks • Full response support • Local references' },
                        { num: '4', title: 'Grant-Funded Projects', desc: 'ARPA, BEAD • Compliance tracking • Audit-ready' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-[oklch(0.65_0.18_55)] text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                            {item.num}
                          </div>
                          <div>
                            <p className="font-semibold text-[oklch(0.20_0.05_250)]">{item.title}</p>
                            <p className="text-sm text-slate-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Modernize Your State or Local Agency?</h2>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
              Schedule a state/local government assessment to discuss your agency's IT modernization needs, evaluate StateRAMP platforms, and develop a roadmap for mission-critical implementation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/federal-solutions/state-local/compliance-checklist">
                  State Compliance Checklist
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
