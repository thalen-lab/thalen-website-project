import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, Users, FileCheck, Zap } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import SectorClientLogos from '@/components/SectorClientLogos';
import { motion } from 'framer-motion';

export default function FederalGovernmentSector() {
  const stats = [
    { value: '15+', label: 'Years Federal Experience' },
    { value: '50+', label: 'Successful ATOs' },
    { value: '$2.3B+', label: 'Federal ROI Delivered' },
    { value: '25+', label: 'Agencies Served' }
  ];

  const capabilities = [
    {
      title: 'FedRAMP Authorization Support',
      description: 'We guide agencies through the complete FedRAMP authorization lifecycle, from readiness assessment through continuous monitoring. Our team has achieved 15+ FedRAMP authorizations at Moderate and High impact levels with a 100% success rate, implementing 325+ security controls and managing 3PAO assessments with zero high findings.',
      features: ['Readiness Assessment', 'SSP Development', 'Security Controls Implementation', '3PAO Coordination', 'Continuous Monitoring']
    },
    {
      title: 'Zero-Trust Architecture Implementation',
      description: 'We implement comprehensive zero-trust frameworks aligned with NIST 800-207 and Executive Order 14028 requirements. Our approach includes continuous authentication, micro-segmentation, and real-time threat detection across all network layers, enabling agencies to protect sensitive data while maintaining operational agility.',
      features: ['Identity-Centric Security', 'Micro-Segmentation', 'Continuous Verification', 'NIST 800-207 Alignment']
    },
    {
      title: 'Mission-Critical Automation',
      description: 'Our automation strategies align directly with agency mission objectives, delivering measurable improvements in operational efficiency and citizen service delivery. We deploy FedRAMP-authorized RPA platforms including UiPath Gov and Automation Anywhere Gov, achieving an average 85% automation rate while maintaining full compliance with federal regulations.',
      features: ['Process Assessment', 'RPA Implementation', 'ATO Documentation', 'Change Management']
    },
    {
      title: 'Legacy System Modernization',
      description: 'We modernize aging COBOL and mainframe systems that create operational bottlenecks and security vulnerabilities. Our approach ensures mission continuity during transformation, integrating legacy systems with modern cloud platforms and APIs while maintaining data integrity and compliance requirements.',
      features: ['Assessment & Planning', 'Phased Migration', 'Data Integration', 'Training & Adoption']
    }
  ];

  const agencies = [
    {
      category: 'Department of Defense',
      description: 'Supporting DoD missions with CMMC-compliant solutions, classified system integration, and secure cloud migration across 15+ projects.',
      projects: '15+ Projects'
    },
    {
      category: 'Intelligence Community',
      description: 'Delivering TS/SCI-cleared engineering support for intelligence operations, secure collaboration platforms, and advanced analytics.',
      projects: 'TS/SCI Cleared'
    },
    {
      category: 'Civilian Agencies',
      description: 'Modernizing operations across 25+ civilian agencies including VA, HHS, PBGC, and FBI with FedRAMP-authorized platforms.',
      projects: '25+ Agencies'
    }
  ];

  const caseStudies = [
    {
      title: 'Federal Agency Achieves 85% Process Automation',
      agency: 'Federal Civilian Agency',
      description: 'Implemented UiPath Gov RPA platform with comprehensive ATO documentation, reducing claims processing time from 6 weeks to 2 days.',
      metrics: [
        { value: '85%', label: 'Automation Rate' },
        { value: '$4.2M', label: 'Contract Value' },
        { value: '6 mo', label: 'Time to ROI' }
      ],
      href: '/case-studies/federal-automation'
    },
    {
      title: 'VA Reduces Claims Processing Time 60%',
      agency: 'Department of Veterans Affairs',
      description: 'Predictive analytics platform processing 2M+ claims annually with 60% faster processing and 95% accuracy.',
      metrics: [
        { value: '60%', label: 'Faster Processing' },
        { value: '2M+', label: 'Annual Claims' },
        { value: '95%', label: 'Accuracy' }
      ],
      href: '/case-studies/va-predictive-analytics'
    },
    {
      title: 'HHS Achieves Real-Time Public Health Surveillance',
      agency: 'Health and Human Services',
      description: 'Real-time surveillance platform monitoring 50 states with 78% faster outbreak detection and automated alerting.',
      metrics: [
        { value: '78%', label: 'Faster Detection' },
        { value: '50', label: 'States Monitored' },
        { value: '24/7', label: 'Real-Time Alerts' }
      ],
      href: '/case-studies/hhs-public-health'
    }
  ];

  const complianceFrameworks = [
    { name: 'FedRAMP', level: 'Moderate & High', description: 'Federal cloud security authorization' },
    { name: 'FISMA', level: 'ATO Approved', description: 'Federal information security management' },
    { name: 'NIST 800-53', level: 'Rev 5', description: 'Security and privacy controls' },
    { name: 'NIST 800-171', level: '110 Controls', description: 'CUI protection requirements' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/federal-handshake.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Sectors' },
                { label: 'Federal Government' }
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
              Federal Government
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Supporting federal agencies with FedRAMP-authorized solutions, cleared personnel, and mission-critical technology implementations. From civilian agencies to defense and intelligence, we deliver measurable results with compliance built in from day one.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact/government">
                  Schedule Federal Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/federal-solutions/past-performance">
                  View Past Performance
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
              Mission-First Federal Partnership
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Federal agencies face unprecedented pressure to modernize legacy systems, enhance cybersecurity posture, and deliver improved citizen services—all while navigating complex compliance requirements and budget constraints. NexDyne Technologies brings 15+ years of dedicated federal experience to help agencies overcome these challenges with proven methodologies and measurable results.
              </p>
              <p>
                Our approach begins with understanding your mission objectives, not just your technology requirements. We work backward from mission outcomes to identify the right combination of process optimization, platform implementation, and organizational change management. Whether you need to modernize a 40-year-old mainframe system, achieve FedRAMP authorization for a cloud migration, or implement zero-trust architecture across your enterprise, our cleared professionals deliver solutions that work within your operational constraints.
              </p>
              <p>
                What sets us apart is our commitment to compliance-first architecture. Every solution we deliver is designed with FedRAMP, FISMA, and NIST requirements integrated from the start—not bolted on as an afterthought. This approach has enabled us to achieve a 100% success rate across 50+ federal ATOs, helping agencies accelerate their modernization timelines while maintaining the highest security standards.
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
              Federal Technology Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive technology services designed specifically for federal requirements, delivered by cleared professionals with deep government experience.
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
              Built for Federal Standards
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every solution is designed with regulatory compliance integrated from day one.
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
                    <div className="font-bold text-lg text-[oklch(0.20_0.05_250)] mb-1">{framework.name}</div>
                    <div className="text-[oklch(0.65_0.18_55)] font-semibold text-sm mb-2">{framework.level}</div>
                    <div className="text-xs text-slate-500">{framework.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Experience */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
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
              Federal Agency Experience
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experience across defense, intelligence, and civilian agencies with cleared teams delivering mission-critical solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {agencies.map((agency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    <h3 className="font-bold text-xl text-[oklch(0.20_0.05_250)] mb-2">{agency.category}</h3>
                    <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4">{agency.projects}</p>
                    <p className="text-sm text-slate-600">{agency.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
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
              Federal Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real-world results demonstrating our impact across federal agencies.
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
              <Link href="/case-studies?industry=Federal+Government">
                View All Federal Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <SectorClientLogos 
        sector="federal" 
        title="Trusted by Federal Agencies"
        subtitle="Building lasting partnerships with agencies that demand mission-critical excellence and compliance."
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
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Modernize Your Federal Operations?</h2>
            <p className="text-lg text-white/80 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Let's discuss how NexDyne can help your agency achieve mission objectives with compliant, secure technology solutions. Schedule a complimentary assessment with our federal experts today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                <Link href="/contact/government">
                  Schedule Federal Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/contract-vehicles">
                  View Contract Vehicles
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
