import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, CheckCircle, FileCheck, Users } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import SectorClientLogos from '@/components/SectorClientLogos';
import { motion } from 'framer-motion';

export default function FederalContractorsSector() {
  const stats = [
    { value: '15+', label: 'Contractors Supported' },
    { value: '100%', label: 'C3PAO Success Rate' },
    { value: '7 mo', label: 'Avg. Time to Certification' },
    { value: '0', label: 'High Findings' }
  ];

  const cmmcLevels = [
    {
      level: 'Level 1',
      title: 'Foundational',
      practices: '17 Practices',
      description: 'Basic safeguarding of Federal Contract Information (FCI). Annual self-assessment required for contractors handling only FCI.',
      requirements: ['Basic cyber hygiene', 'Self-assessment', 'Annual affirmation']
    },
    {
      level: 'Level 2',
      title: 'Advanced',
      practices: '110 Practices',
      description: 'Protection of Controlled Unclassified Information (CUI) aligned with NIST SP 800-171. Third-party assessment required for critical programs.',
      requirements: ['NIST 800-171 alignment', 'Third-party assessment', 'Triennial certification']
    },
    {
      level: 'Level 3',
      title: 'Expert',
      practices: '130+ Practices',
      description: 'Enhanced protection against Advanced Persistent Threats (APTs). Government-led assessment required for highest-priority programs.',
      requirements: ['NIST 800-172 requirements', 'Government assessment', 'Enhanced controls']
    }
  ];

  const services = [
    {
      title: 'CMMC Readiness Assessment',
      description: 'Comprehensive gap analysis against CMMC requirements to identify deficiencies and develop a prioritized remediation roadmap. Our assessments evaluate your current security posture, policies, and technical controls against the specific CMMC level required for your contracts.',
      deliverables: ['Gap Analysis Report', 'Remediation Roadmap', 'Cost Estimation', 'Timeline Planning']
    },
    {
      title: 'Security Program Development',
      description: 'Design and implementation of security programs that meet CMMC requirements while aligning with your business operations. We develop policies, procedures, and technical controls that satisfy certification requirements without disrupting your ability to deliver on contracts.',
      deliverables: ['Security Policies', 'System Security Plan (SSP)', 'Plan of Action & Milestones (POA&M)', 'Incident Response Plan']
    },
    {
      title: 'Technical Implementation',
      description: 'Hands-on implementation of security controls including identity management, endpoint protection, network segmentation, and continuous monitoring. Our engineers deploy solutions that meet CMMC requirements while integrating with your existing infrastructure.',
      deliverables: ['Control Implementation', 'Configuration Hardening', 'Monitoring Setup', 'Evidence Collection']
    },
    {
      title: 'C3PAO Assessment Preparation',
      description: 'Comprehensive preparation for third-party assessments including mock assessments, evidence organization, and interview coaching. We ensure your team is ready to demonstrate compliance and respond to assessor questions with confidence.',
      deliverables: ['Mock Assessment', 'Evidence Package', 'Interview Preparation', 'Assessment Support']
    }
  ];

  const caseStudies = [
    {
      title: 'Mid-Sized Defense Contractor Achieves CMMC Level 2',
      client: 'Defense Manufacturing Company',
      description: 'Guided a 500-employee defense contractor through CMMC Level 2 certification in 7 months, implementing 110 security controls while maintaining production operations.',
      metrics: [
        { value: '7 mo', label: 'Time to Certification' },
        { value: '110', label: 'Controls Implemented' },
        { value: '0', label: 'Assessment Findings' }
      ],
      href: '/case-studies/defense-cmmc'
    },
    {
      title: 'Defense Cloud Migration with CMMC Level 3',
      client: 'Aerospace Contractor',
      description: 'Migrated 150+ applications and 500TB classified data to AWS GovCloud and Azure Government while achieving CMMC Level 3 certification with 100% uptime.',
      metrics: [
        { value: '150+', label: 'Applications Migrated' },
        { value: '500TB', label: 'Data Migrated' },
        { value: '$4.5M', label: 'Annual Savings' }
      ],
      href: '/case-studies/defense-cloud'
    },
    {
      title: 'DoD Manufacturing Facility Achieves 99.2% Uptime',
      client: 'DoD Manufacturing Contractor',
      description: 'Implemented FedRAMP-authorized predictive maintenance platform for DoD manufacturing facility, achieving CMMC Level 3 certification with 99.2% uptime.',
      metrics: [
        { value: '99.2%', label: 'Uptime Achieved' },
        { value: 'Level 3', label: 'CMMC Certified' },
        { value: '75%', label: 'Downtime Reduction' }
      ],
      href: '/case-studies/dod-manufacturing'
    }
  ];

  const complianceJourney = [
    {
      step: '01',
      title: 'Contract Analysis',
      description: 'Review DFARS clauses and contract requirements to determine the appropriate CMMC level and scope of certification.'
    },
    {
      step: '02',
      title: 'Gap Assessment',
      description: 'Comprehensive evaluation of current security posture against CMMC requirements with prioritized remediation roadmap.'
    },
    {
      step: '03',
      title: 'Remediation',
      description: 'Implementation of security controls, policies, and procedures to address identified gaps and meet certification requirements.'
    },
    {
      step: '04',
      title: 'Documentation',
      description: 'Development of System Security Plan (SSP), policies, and evidence packages required for assessment.'
    },
    {
      step: '05',
      title: 'Assessment Prep',
      description: 'Mock assessments, interview coaching, and evidence organization to ensure readiness for C3PAO evaluation.'
    },
    {
      step: '06',
      title: 'Certification',
      description: 'Support during C3PAO assessment and ongoing compliance maintenance to maintain certification status.'
    }
  ];

  const supplyChainServices = [
    {
      title: 'Supplier Assessment',
      description: 'Evaluate your supply chain partners\' CMMC readiness and identify risks that could impact your certification or contract performance.'
    },
    {
      title: 'Flow-Down Management',
      description: 'Develop and implement DFARS flow-down requirements for subcontractors handling CUI to ensure supply chain compliance.'
    },
    {
      title: 'Supplier Development',
      description: 'Support your critical suppliers in achieving CMMC certification to maintain your supply chain integrity and contract eligibility.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/case-studies/defense-cyber-ops.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Sectors' },
                { label: 'Federal Contractors' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Defense Industrial Base</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Federal Contractors
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Guiding defense contractors through CMMC certification and compliance, ensuring readiness for DoD contract requirements. From gap assessment to C3PAO preparation, we deliver the expertise needed to protect CUI and maintain contract eligibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact/cmmc">
                  Schedule CMMC Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/cmmc">
                  CMMC Overview
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
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
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-center">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-8 text-center">
              Your Partner in CMMC Compliance
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                The Cybersecurity Maturity Model Certification (CMMC) represents a fundamental shift in how the Department of Defense ensures the protection of sensitive information across the defense industrial base. For contractors handling Controlled Unclassified Information (CUI), achieving and maintaining CMMC certification is no longer optional—it's a prerequisite for competing on DoD contracts.
              </p>
              <p>
                NexDyne Technologies has guided 15+ defense contractors through successful CMMC certification, achieving a 100% success rate in C3PAO assessments with zero high findings. Our approach combines deep expertise in NIST 800-171 and CMMC requirements with practical implementation experience that minimizes disruption to your operations. We understand that defense contractors must balance security investments with competitive pricing and operational efficiency.
              </p>
              <p>
                What sets us apart is our end-to-end support model. From initial contract analysis and gap assessment through remediation, documentation, and assessment preparation, we provide the expertise and hands-on support needed at every stage of your CMMC journey. Our average time to certification is 7 months—significantly faster than industry averages—because we've refined our methodology through dozens of successful engagements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CMMC Levels */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">CMMC Framework</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Understanding CMMC Levels
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              CMMC 2.0 establishes three levels of cybersecurity maturity based on the sensitivity of information handled.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {cmmcLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[oklch(0.65_0.18_55)] font-bold text-lg">{level.level}</span>
                      <span className="text-slate-400">|</span>
                      <span className="text-slate-600 font-medium">{level.title}</span>
                    </div>
                    <div className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{level.practices}</div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{level.description}</p>
                    <ul className="space-y-2">
                      {level.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-[oklch(0.65_0.18_55)] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{req}</span>
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

      {/* Compliance Journey */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Your Path to CMMC Certification
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A proven six-step methodology that has achieved 100% certification success across 15+ defense contractors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {complianceJourney.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-[oklch(0.65_0.18_55)] font-bold text-3xl mb-3">{phase.step}</div>
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-2">{phase.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{phase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">What We Deliver</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              CMMC Consulting Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive support from initial assessment through certification and ongoing compliance maintenance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 mb-3">Key Deliverables</p>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((deliverable, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1.5 bg-[oklch(0.97_0.01_250)] text-[oklch(0.20_0.05_250)] text-sm font-medium rounded-full"
                          >
                            {deliverable}
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

      {/* Supply Chain Services */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Supply Chain</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Third-Party & Supply Chain Management
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Ensure your entire supply chain meets CMMC requirements to protect your certification and contract eligibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {supplyChainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Proven Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Defense Contractor Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real-world results demonstrating our impact across the defense industrial base.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
                    <CardContent className="p-8">
                      <p className="text-[oklch(0.65_0.18_55)] text-sm font-semibold mb-2">{study.client}</p>
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
              <Link href="/case-studies?industry=Defense">
                View All Defense Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <SectorClientLogos 
        sector="contractors" 
        title="Trusted by Defense Contractors"
        subtitle="Supporting defense and aerospace contractors with CMMC compliance, security solutions, and mission-critical technology."
        variant="light"
      />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Achieve CMMC Certification?</h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss your CMMC requirements and develop a roadmap to certification. Schedule a complimentary assessment with our CMMC experts today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                <Link href="/contact/cmmc">
                  Schedule CMMC Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/cmmc">
                  Learn About CMMC
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
