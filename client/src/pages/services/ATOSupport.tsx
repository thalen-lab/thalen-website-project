import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ATOSupport() {
  const pillars = [
    {
      title: 'Security by Design',
      tagline: 'Authorization frameworks built into architecture from day one',
      description: 'During initial project planning, NexDyne Technology conducts a security requirements assessment to determine the appropriate authorization framework (FedRAMP, FISMA Moderate/High, DoD IL-4/5). We architect the system with security controls built in from the start, not bolted on later.',
      features: [
        'Authorization framework determination (FedRAMP, FISMA, DoD IL)',
        'Security control baseline selection aligned with mission',
        'Architecture security review and threat modeling',
        'FedRAMP/StateRAMP platform evaluation for inherited controls'
      ],
      sectors: ['Federal', 'State', 'Defense']
    },
    {
      title: 'Parallel Documentation',
      tagline: 'Security documentation progresses alongside technical development',
      description: 'As NexDyne Technology develops and configures the system, our security team simultaneously documents security controls in the System Security Plan (SSP). We implement required controls using Infrastructure as Code, creating auditable evidence of compliance.',
      features: [
        'System Security Plan (SSP) development in parallel',
        'Security control implementation with IaC automation',
        'Configuration management and audit trail creation',
        'Continuous monitoring setup from project inception'
      ],
      sectors: ['Federal', 'State', 'Defense']
    },
    {
      title: 'Assessment Coordination',
      tagline: 'Expert navigation of 3PAO testing and remediation',
      description: 'NexDyne Technology coordinates with third-party assessment organizations (3PAO) to validate security control effectiveness. We prepare the environment for assessment, manage the testing process, and rapidly remediate any findings.',
      features: [
        'Pre-assessment readiness review and gap analysis',
        '3PAO coordination and testing support',
        'Vulnerability scanning and penetration testing',
        'Finding remediation and evidence documentation'
      ],
      sectors: ['Federal', 'State', 'Defense']
    },
    {
      title: 'Authorization & Go-Live',
      tagline: 'Seamless transition from ATO approval to production',
      description: 'NexDyne Technology prepares the authorization package and coordinates with the agency\'s Authorizing Official (AO) to secure final ATO approval. We establish continuous monitoring capabilities to maintain authorization and provide ongoing compliance support.',
      features: [
        'Authorization package preparation and submission',
        'Authorizing Official (AO) briefings and coordination',
        'Continuous monitoring implementation and reporting',
        'Go-live support and post-authorization validation'
      ],
      sectors: ['Federal', 'State', 'Defense']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Project Kickoff: Security by Design',
      description: 'Conduct security requirements assessment to determine the appropriate authorization framework. Architect the system with security controls built in from the start.',
      duration: '1-2 weeks',
      deliverables: ['Security requirements document', 'Control inheritance matrix', 'ATO timeline integrated into project plan']
    },
    {
      number: '02',
      title: 'Development: Documentation in Parallel',
      description: 'Document security controls in the System Security Plan (SSP) while development progresses. Implement controls using Infrastructure as Code for auditable compliance.',
      duration: '8-12 weeks',
      deliverables: ['Complete SSP documentation', 'Security policies and procedures', 'Control implementation evidence']
    },
    {
      number: '03',
      title: 'Testing: Security Assessment',
      description: 'Coordinate with 3PAO to validate security control effectiveness. Prepare the environment, manage testing, and rapidly remediate any findings.',
      duration: '4-6 weeks',
      deliverables: ['Security Assessment Report (SAR)', 'Plan of Action & Milestones (POA&M)', 'Remediation evidence documentation']
    },
    {
      number: '04',
      title: 'Authorization & Go-Live',
      description: 'Prepare authorization package and coordinate with the Authorizing Official (AO). Establish continuous monitoring and provide ongoing compliance support.',
      duration: '2-4 weeks',
      deliverables: ['ATO approval letter', 'Continuous monitoring plan', 'Ongoing compliance reporting']
    }
  ];

  const stats = [
    { value: '100%', label: 'ATO Success Rate' },
    { value: '6-9', label: 'Months Average Timeline' },
    { value: '50+', label: 'ATOs Achieved' },
    { value: '20+', label: 'Federal Agencies Served' },
    { value: '15+', label: 'State & Local Governments' },
    { value: 'TS/SCI', label: 'Cleared Personnel Available' }
  ];

  const complianceFrameworks = [
    { name: 'FedRAMP', type: 'Federal' },
    { name: 'StateRAMP', type: 'State' },
    { name: 'TX-RAMP', type: 'State' },
    { name: 'CMMC', type: 'Defense' },
    { name: 'FISMA', type: 'Federal' },
    { name: 'NIST 800-53', type: 'All Sectors' },
    { name: 'DoD IL-4/5', type: 'Defense' },
    { name: 'HIPAA', type: 'Healthcare' },
    { name: 'CJIS', type: 'Law Enforcement' },
    { name: 'IRS 1075', type: 'Tax/Revenue' },
    { name: 'SOC 2', type: 'Enterprise' },
    { name: 'PCI-DSS', type: 'Financial' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/federal-building.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Government Solutions', href: '/federal-solutions' },
                { label: 'ATO Support & Authorization' }
              ]} 
              variant="light" 
            />
          </div>
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">ATO Support Built Into Every Implementation</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ATO Support & Authorization
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              When federal agencies choose NexDyne Technology to implement cloud migrations, automation platforms, 
              or data systems, they get more than technical expertise—they get a contractor who navigates 
              the entire ATO process from day one, ensuring your system goes live on schedule.
            </p>
            {/* Sector badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Federal Government', 'State Government', 'Defense & Intelligence'].map((sector) => (
                <div 
                  key={sector}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium"
                >
                  {sector}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/methodology">
                  View RAPID Framework
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-7xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our ATO Methodology</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              The Four Pillars of ATO Success
            </h2>
            <p className="text-lg text-slate-600">
              Our methodology integrates security authorization into every implementation project from day one, ensuring your system achieves ATO on schedule without delays.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8 lg:p-10">
                    {/* Title */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-base font-semibold text-[oklch(0.65_0.18_55)]">
                        {pillar.tagline}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    
                    {/* Features - Bullet points */}
                    <ul className="space-y-3 mb-6">
                      {pillar.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Sector Tags */}
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Serving</p>
                      <div className="flex flex-wrap gap-2">
                        {pillar.sectors.map((sector) => (
                          <span 
                            key={sector}
                            className="inline-flex items-center px-3 py-1.5 rounded-full bg-[oklch(0.95_0.02_250)] text-[oklch(0.30_0.05_250)] text-xs font-medium"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-6xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Authorization Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Frameworks We Navigate
            </h2>
            <p className="text-lg text-slate-600">
              Deep expertise across the authorization and compliance landscape for government and regulated industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[oklch(0.97_0.01_250)] border-2 border-slate-200 rounded-lg p-4 text-center hover:border-[oklch(0.70_0.18_55)] hover:shadow-md transition-all duration-300"
              >
                <p className="font-bold text-[oklch(0.20_0.05_250)] text-sm">{framework.name}</p>
                <p className="text-xs text-slate-500">{framework.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Implementation Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              ATO Support Throughout Implementation
            </h2>
            <p className="text-lg text-slate-600">
              NexDyne Technology integrates ATO activities into every phase of system implementation, ensuring security authorization progresses in parallel with technical development.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[oklch(0.35_0.10_250)]/20 -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-16`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-colors duration-300">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="text-4xl font-bold text-[oklch(0.35_0.10_250)]/20">{step.number}</span>
                        <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)]">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-4">{step.description}</p>
                      <span className="inline-block text-sm font-semibold text-[oklch(0.35_0.10_250)] bg-[oklch(0.35_0.10_250)]/10 px-3 py-1 rounded-full mb-4">
                        {step.duration}
                      </span>
                      {/* Deliverables */}
                      <div className={`pt-4 border-t border-slate-100 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Deliverables</p>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                              <span className="text-xs text-slate-600">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[oklch(0.35_0.10_250)] border-4 border-white shadow-md"></div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FedRAMP Advantage Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Strategy</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">
                Leveraging FedRAMP & StateRAMP
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                NexDyne Technology leverages FedRAMP and StateRAMP authorized platforms to accelerate ATO timelines when appropriate. Using a FedRAMP-authorized platform does not automatically grant your agency ATO—your specific implementation still requires authorization.
              </p>
              
              {/* Bullet points */}
              <div className="space-y-4">
                {[
                  'Reduced ATO timeline: 6-9 months vs. 18-24 months for custom systems',
                  'Inherited infrastructure controls reduce documentation burden',
                  'Platform vendor maintains continuous monitoring for inherited controls',
                  'Proven security baseline accepted across federal agencies'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <Card key={index} className="bg-[oklch(0.97_0.01_250)] border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Control Inheritance Section */}
      <section className="py-16 md:py-20 bg-[oklch(0.22_0.06_250)]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Understanding Control Inheritance</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What FedRAMP Authorization Really Means</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              FedRAMP authorization means the cloud platform infrastructure (AWS GovCloud, Azure Government, Salesforce Government Cloud) has been pre-authorized by the vendor. This provides <strong>inherited controls</strong> that reduce the number of controls your agency must implement and document.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              However, <strong>customer-managed controls</strong> remain your responsibility: platform configuration, user access management, system integration, and data handling all require documentation and validation. NexDyne Technology manages this inheritance model by documenting which controls are inherited versus agency-managed, and implementing customer-managed controls correctly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAR Compliance Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Regulatory Compliance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">FAR Compliance Integrated with ATO Process</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Federal Acquisition Regulation requirements are integrated into our ATO methodology, ensuring contract compliance throughout the security authorization lifecycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: 'Security Safeguards (FAR 52.239-1)',
                tagline: 'Privacy and security protections for federal IT systems',
                description: 'Our ATO process ensures compliance with FAR 52.239-1 Privacy or Security Safeguards, documenting security controls and privacy protections required for federal IT systems.',
                features: [
                  'Security control implementation documented in System Security Plan (SSP)',
                  'Privacy Impact Assessment (PIA) completed for systems handling PII',
                  'Continuous monitoring ensures ongoing compliance with security requirements'
                ]
              },
              {
                title: 'Information Safeguarding (FAR 52.204-21)',
                tagline: 'Basic safeguarding for Covered Contractor Information Systems',
                description: 'ATO implementations include FAR 52.204-21 Basic Safeguarding requirements for Covered Contractor Information Systems, protecting federal information throughout the project lifecycle.',
                features: [
                  'NIST SP 800-171 controls implemented for CUI protection',
                  'Incident response procedures documented and tested',
                  'Security assessment validates safeguarding effectiveness'
                ]
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{card.title}</h3>
                      <p className="text-base font-semibold text-[oklch(0.65_0.18_55)]">{card.tagline}</p>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">{card.description}</p>
                    <ul className="space-y-3">
                      {card.features.map((feature, idx) => (
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

          {/* Procurement Advantages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <Card className="bg-white border-2 border-[oklch(0.70_0.18_55)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-6 text-center">Procurement Advantages</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { title: 'Streamlined Contract Execution', desc: 'Pre-established FAR compliance frameworks reduce contract negotiation time and enable faster project initiation.' },
                    { title: 'Reduced Oversight Burden', desc: 'Documented compliance with FAR security requirements minimizes agency oversight and contractor management effort.' },
                    { title: 'Audit-Ready Documentation', desc: 'Maintained compliance records support agency audits and CPARS evaluations with evidence of regulatory adherence.' }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-3">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Implementation Expertise with ATO Built-In</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Partner with NexDyne Technology for implementation expertise that includes security 
              authorization from day one. Your systems go live on schedule with full ATO in place.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View Case Studies
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
