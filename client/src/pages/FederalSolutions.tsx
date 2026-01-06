import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FederalROICalculator from '@/components/FederalROICalculator';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';

export default function FederalSolutions() {
  const contractVehicles = [
    {
      name: 'GSA Schedule 70',
      number: 'GS-35F-0119Y',
      description: 'IT Professional Services including cloud migration, cybersecurity, data analytics, and intelligent automation implementation.',
      scope: 'Federal, State, and Local Government'
    },
    {
      name: 'GSA Schedule 84',
      number: 'GS-07F-0123X',
      description: 'Total Solutions for Law Enforcement, Security, Facilities Management, Fire, Rescue, and Emergency Response.',
      scope: 'Federal Law Enforcement and Security Agencies'
    },
    {
      name: 'SEWP V',
      number: 'NNG15SD21B',
      description: 'NASA Solutions for Enterprise-Wide Procurement for IT products and services.',
      scope: 'NASA and Other Federal Agencies'
    },
    {
      name: 'NIH NITAAC CIO-SP3',
      number: 'HHSN316201200012W',
      description: 'Chief Information Officer - Solutions and Partners 3 for comprehensive IT solutions.',
      scope: 'NIH and Federal Health Agencies'
    }
  ];

  const certifications = [
    {
      name: 'FedRAMP Implementation Partner',
      description: 'Authorized to implement FedRAMP Moderate and High solutions'
    },
    {
      name: 'CMMC Registered Practitioner',
      description: 'Certified to conduct CMMC assessments and implementation'
    },
    {
      name: 'ISO 27001:2022 Certified',
      description: 'Information security management system certification'
    },
    {
      name: 'Cleared Personnel',
      description: 'Team members hold Secret and TS/SCI clearances'
    }
  ];

  const pastPerformance = [
    {
      agency: 'Department of Defense',
      projects: '12 contracts',
      value: '$45M+',
      clearance: 'Secret/TS-SCI',
      services: 'Cloud migration, CMMC implementation, data analytics'
    },
    {
      agency: 'Department of Veterans Affairs',
      projects: '8 contracts',
      value: '$28M+',
      clearance: 'Public Trust',
      services: 'Predictive analytics, automation, cloud infrastructure'
    },
    {
      agency: 'Department of Health & Human Services',
      projects: '6 contracts',
      value: '$22M+',
      clearance: 'Public Trust',
      services: 'Real-time analytics, data visualization, integration'
    },
    {
      agency: 'Intelligence Community',
      projects: '4 contracts',
      value: '$35M+',
      clearance: 'TS/SCI with Poly',
      services: 'Secure collaboration, zero trust architecture, SOC'
    },
    {
      agency: 'State & Local Government',
      projects: '25+ contracts',
      value: '$18M+',
      clearance: 'N/A',
      services: 'Cloud migration, cybersecurity, data modernization'
    }
  ];

  const procurementAdvantages = [
    {
      title: 'Streamlined Procurement',
      description: 'GSA Schedule contracts enable faster procurement with pre-negotiated terms and conditions, reducing acquisition time from months to weeks.'
    },
    {
      title: 'Best Value Pricing',
      description: 'Competitive GSA pricing with volume discounts and Most Favored Customer (MFC) clause ensuring best government pricing.'
    },
    {
      title: 'Simplified Compliance',
      description: 'Pre-vetted contractor with established compliance frameworks (FedRAMP, CMMC, NIST 800-53) reducing agency risk and oversight burden.'
    },
    {
      title: 'Proven Past Performance',
      description: '55+ successful federal contracts with documented outcomes, measurable ROI, and strong CPARS ratings demonstrating reliable delivery.'
    }
  ];

  const capabilities = [
    {
      category: 'Cloud & Infrastructure',
      services: [
        'FedRAMP Cloud Migration (AWS GovCloud, Azure Government, Google Cloud)',
        'Multi-Cloud Integration & Orchestration',
        'Infrastructure as Code (IaC) Implementation',
        'Cloud Security & Compliance (FedRAMP, FISMA)',
        'Disaster Recovery & Business Continuity'
      ]
    },
    {
      category: 'Cybersecurity & Compliance',
      services: [
        'CMMC Level 2/3 Certification Support',
        'FedRAMP Authorization (ATO Support)',
        'Zero Trust Architecture Implementation',
        'Security Operations Center (SOC) Setup',
        'Identity & Access Management (IAM)'
      ]
    },
    {
      category: 'Data & Analytics',
      services: [
        'Analytics Platform Implementation (Tableau Gov, Power BI Gov)',
        'AI/ML Model Development & Deployment',
        'Data Engineering & Pipeline Development',
        'Real-Time Analytics & Visualization',
        'Data Strategy & Governance'
      ]
    },
    {
      category: 'Intelligent Automation',
      services: [
        'RPA Implementation (UiPath FedRAMP, Automation Anywhere Gov)',
        'Process Automation & Orchestration',
        'Enterprise Integration (iPaaS)',
        'Workflow Automation & BPM',
        'Change Management & Training'
      ]
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
          style={{ backgroundImage: "url('/federal-solutions-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[{ label: 'Federal Solutions' }]} 
              variant="light" 
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Government Services</p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Government Solutions & Contract Vehicles
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Thalen Technologies is a trusted government IT implementation partner with GSA Schedule contracts, StateRAMP expertise, proven past performance, and cleared personnel ready to support federal, state, and local government agencies.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Capability Statement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View Past Performance
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contract Vehicles */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Contract Vehicles</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Government Contract Vehicles</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Pre-approved contract vehicles enabling streamlined procurement for government agencies and simplified acquisition processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {contractVehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{vehicle.name}</h3>
                    <p className="text-sm text-[oklch(0.65_0.18_55)] font-mono mb-4">{vehicle.number}</p>
                    <p className="text-slate-600 mb-4">{vehicle.description}</p>
                    <div className="text-sm">
                      <span className="font-semibold text-[oklch(0.20_0.05_250)]">Scope:</span> <span className="text-slate-600">{vehicle.scope}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Need help determining the right contract vehicle for your agency? Contact our government contracts team.
            </p>
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
              <Link href="/contact">
                Contact Government Contracts Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Procurement Advantages */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Why Choose Us</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Why Procure Through Thalen Technologies?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Streamlined acquisition, competitive pricing, and proven delivery reduce risk and accelerate mission outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procurementAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{advantage.title}</h3>
                <p className="text-slate-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Track Record</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Past Performance & Agency Experience</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experience delivering mission-critical IT solutions across federal, state, and local government agencies.
            </p>
          </motion.div>

          <div className="space-y-6">
            {pastPerformance.map((performance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="grid md:grid-cols-5 gap-6 items-center">
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{performance.agency}</h3>
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[oklch(0.95_0.02_250)] text-[oklch(0.30_0.05_250)] text-xs font-medium">
                          {performance.clearance}
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">{performance.projects}</p>
                        <p className="text-sm text-slate-500">Completed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">{performance.value}</p>
                        <p className="text-sm text-slate-500">Contract Value</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600">{performance.services}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
              <Link href="/case-studies">
                View Detailed Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Credentials</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Certifications & Government Credentials</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Certifications and cleared personnel supporting federal security and quality standards compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-2">{cert.name}</h3>
                    <p className="text-sm text-slate-600">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAR Compliance & Contract Requirements */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Regulatory Compliance</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Federal Acquisition Regulation (FAR) Compliance</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Thalen Technologies maintains compliance with Federal Acquisition Regulation requirements for government IT services, ensuring streamlined contract execution and reduced agency risk.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">IT Services Compliance</h3>
                  <p className="text-slate-600 mb-6">
                    Our operations comply with FAR Part 39 (Acquisition of Information Technology) and associated clauses governing IT professional services, cloud solutions, and cybersecurity implementations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <div>
                        <span className="font-semibold text-sm text-[oklch(0.20_0.05_250)]">FAR 52.204-21:</span>
                        <span className="text-sm text-slate-600 ml-1">Basic Safeguarding of Covered Contractor Information Systems</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <div>
                        <span className="font-semibold text-sm text-[oklch(0.20_0.05_250)]">FAR 52.239-1:</span>
                        <span className="text-sm text-slate-600 ml-1">Privacy or Security Safeguards for IT systems and services</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <div>
                        <span className="font-semibold text-sm text-[oklch(0.20_0.05_250)]">FAR 52.204-25:</span>
                        <span className="text-sm text-slate-600 ml-1">Prohibition on Contracting for Certain Telecommunications and Video Surveillance Services or Equipment</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Defense Contracts Compliance</h3>
                  <p className="text-slate-600 mb-6">
                    For Department of Defense contracts, we maintain compliance with Defense Federal Acquisition Regulation Supplement (DFARS) requirements governing Controlled Unclassified Information (CUI).
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <div>
                        <span className="font-semibold text-sm text-[oklch(0.20_0.05_250)]">DFARS 252.204-7012:</span>
                        <span className="text-sm text-slate-600 ml-1">Safeguarding Covered Defense Information and Cyber Incident Reporting</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <div>
                        <span className="font-semibold text-sm text-[oklch(0.20_0.05_250)]">NIST SP 800-171:</span>
                        <span className="text-sm text-slate-600 ml-1">Protecting Controlled Unclassified Information in Nonfederal Systems</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <div>
                        <span className="font-semibold text-sm text-[oklch(0.20_0.05_250)]">CMMC Level 2:</span>
                        <span className="text-sm text-slate-600 ml-1">Cybersecurity Maturity Model Certification for DoD supply chain</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[oklch(0.97_0.01_250)] border-2 border-slate-200">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Procurement Benefits of FAR Compliance</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">Faster Contract Execution</h4>
                    <p className="text-sm text-slate-600">
                      Pre-established compliance frameworks reduce contract negotiation time and enable faster task order awards under IDIQ vehicles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">Reduced Agency Risk</h4>
                    <p className="text-sm text-slate-600">
                      Documented compliance with FAR security and privacy requirements minimizes agency oversight burden and contractor performance risk.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">Audit-Ready Documentation</h4>
                    <p className="text-sm text-slate-600">
                      Maintained compliance documentation supports agency audits and CPARS evaluations with evidence of regulatory adherence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Expertise</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Core Government IT Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive IT implementation services designed for government agencies requiring FedRAMP compliance and mission-critical reliability.
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
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-6">{capability.category}</h3>
                    <ul className="space-y-3">
                      {capability.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
              <Link href="/services/automation">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Teaming & Subcontracting */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Partnerships</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Teaming & Subcontracting Partnerships</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Thalen Technologies partners with certified small businesses to strengthen proposals for set-aside contracts and deliver comprehensive solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            {[
              { name: '8(a) Partners', description: 'SBA-certified disadvantaged business partnerships' },
              { name: 'SDVOSB Partners', description: 'Service-disabled veteran-owned small business' },
              { name: 'WOSB Partners', description: 'Women-owned small business certifications' },
              { name: 'HUBZone Partners', description: 'Historically underutilized business zones' }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-2">{partner.name}</h3>
                    <p className="text-sm text-slate-600">{partner.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Teaming Benefits & Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Set-Aside Contract Eligibility', description: 'Our small business partnerships enable participation in 8(a), SDVOSB, WOSB, and HUBZone set-aside contracts, expanding opportunities for both prime and subcontractor roles.' },
                    { title: 'Complementary Expertise', description: 'Partners bring specialized capabilities in niche technologies, regional presence, and industry-specific domain knowledge that complement Thalen Technologies\'s core competencies.' },
                    { title: 'Proven Teaming Success', description: '15+ successful teaming arrangements resulting in $45M+ in contract awards, with documented past performance demonstrating effective collaboration and delivery.' },
                    { title: 'Mentor-Protégé Programs', description: 'Active participation in SBA Mentor-Protégé and agency-specific programs, providing technical assistance and business development support to small business partners.' }
                  ].map((item, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-3 flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 ml-5">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Interested in teaming with Thalen Technologies on an upcoming opportunity? Contact our partnerships team.
            </p>
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
              <Link href="/contact/partnerships">
                Explore Teaming Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* State & Local Government Solutions */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">State & Local</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">State & Local Government Solutions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive IT implementation services for state agencies, counties, municipalities, and education institutions through cooperative purchasing and state-specific contracts.
            </p>
          </motion.div>

          {/* State/Local Contract Vehicles */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 text-center">Cooperative Purchasing Contracts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {[
                { name: 'NASPO ValuePoint', number: 'Cloud Solutions Contract', description: 'Multi-state cooperative purchasing for cloud services, enabling streamlined procurement across participating states.', scope: 'All 50 states and territories' },
                { name: 'Sourcewell', number: '#012345-ABC', description: 'Cooperative purchasing organization serving government, education, and nonprofit entities nationwide.', scope: '50,000+ participating agencies' },
                { name: 'OMNIA Partners', number: 'R191902', description: 'Public sector procurement cooperative providing competitively solicited contracts for government entities.', scope: 'Public sector nationwide' },
                { name: 'State Master Agreements', number: 'Multiple States', description: 'Direct state-specific IT services contracts with departments of technology and administration.', scope: '12 state master agreements' }
              ].map((vehicle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{vehicle.name}</h3>
                      <p className="text-sm text-[oklch(0.65_0.18_55)] font-mono mb-4">{vehicle.number}</p>
                      <p className="text-slate-600 mb-4">{vehicle.description}</p>
                      <div className="text-sm">
                        <span className="font-semibold text-[oklch(0.20_0.05_250)]">Scope:</span> <span className="text-slate-600">{vehicle.scope}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* State/Local Compliance */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 text-center">State & Local Compliance Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {[
                { name: 'StateRAMP', description: 'State-level cloud security authorization program implementation expertise for state agencies requiring secure cloud solutions.' },
                { name: 'CJIS Compliance', description: 'Criminal Justice Information Services security policy implementation for law enforcement and public safety agencies.' },
                { name: 'State Privacy Laws', description: 'CCPA, GDPR-like state requirements, and data residency compliance for state and local data protection mandates.' }
              ].map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-3 sm:p-4 md:p-6">
                      <h4 className="font-bold text-[oklch(0.20_0.05_250)] mb-2">{framework.name}</h4>
                      <p className="text-sm text-slate-600">{framework.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* State/Local Past Performance */}
          <div>
            <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 text-center">State & Local Past Performance Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'State Departments of Transportation', contracts: '8 contracts | $6M+', description: 'Cloud migration, real-time analytics for traffic management, and data integration across legacy systems.', tags: ['Cloud', 'Data Analytics', 'Integration'] },
                { title: 'County Sheriff Departments', contracts: '6 contracts | $4M+', description: 'CJIS-compliant cloud infrastructure, cybersecurity assessments, and secure data sharing platforms.', tags: ['CJIS Compliance', 'Cybersecurity', 'Cloud'] },
                { title: 'State Health Departments', contracts: '7 contracts | $5M+', description: 'Public health surveillance analytics, HIPAA-compliant cloud solutions, and data visualization dashboards.', tags: ['Data Analytics', 'HIPAA', 'Cloud'] },
                { title: 'Municipal Government', contracts: '4 contracts | $3M+', description: 'Process automation for permitting, cloud-based constituent services, and legacy system modernization.', tags: ['Automation', 'Cloud', 'Modernization'] }
              ].map((perf, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-3 sm:p-4 md:p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-lg text-[oklch(0.20_0.05_250)]">{perf.title}</h4>
                          <p className="text-sm text-slate-500">{perf.contracts}</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{perf.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {perf.tags.map((tag, idx) => (
                          <span key={idx} className="inline-flex items-center px-2 py-1 rounded-full bg-[oklch(0.95_0.02_250)] text-[oklch(0.30_0.05_250)] text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[linear-gradient(135deg,oklch(0.65_0.20_40),oklch(0.55_0.22_40))] hover:opacity-90 text-white">
              <Link href="/federal-solutions/state-local">
                Explore State & Local Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Federal ROI Calculator */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <FederalROICalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Work with Thalen Technologies?</h2>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
              Generate a customized capability statement, schedule a consultation, or learn more about our government contract vehicles and past performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/capability-generator">
                  Generate Capability Statement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View Past Performance
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
