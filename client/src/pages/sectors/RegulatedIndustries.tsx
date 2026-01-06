import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import SectorClientLogos from '@/components/SectorClientLogos';
import { motion } from 'framer-motion';

export default function RegulatedIndustriesSector() {
  const stats = [
    { value: '99.9%', label: 'Fraud Detection Accuracy' },
    { value: '$45M+', label: 'Fraud Prevented' },
    { value: '40%', label: 'Patient Outcome Improvement' },
    { value: '75%', label: 'Downtime Reduction' }
  ];

  const industries = [
    {
      name: 'Healthcare & Life Sciences',
      tagline: 'HIPAA-Compliant Digital Transformation',
      description: 'Healthcare organizations face mounting pressure to improve patient outcomes while navigating complex regulatory requirements including HIPAA, HITECH, and FDA 21 CFR Part 11. Our solutions address the critical challenges of interoperability, clinical workflow optimization, and value-based care transformation.',
      capabilities: [
        'Unified Data Integration across Epic, Cerner, and Meditech systems',
        'Clinical Workflow Automation reducing administrative burden',
        'Predictive Analytics for population health management',
        'HIPAA-Compliant Security Architecture with end-to-end encryption'
      ],
      compliance: ['HIPAA', 'HITECH', 'FDA 21 CFR Part 11'],
      link: '/industries/healthcare'
    },
    {
      name: 'Financial Services',
      tagline: 'Real-Time Fraud Detection & RegTech',
      description: 'Financial institutions must balance customer experience with stringent regulatory compliance across Dodd-Frank, Basel III, MiFID II, and AML requirements. Our AI-powered solutions detect fraud in real-time while automating compliance workflows and modernizing legacy core banking systems.',
      capabilities: [
        'AI-Powered Fraud Detection processing 50M+ daily transactions',
        'Automated Compliance & Risk Management reducing costs by 60%',
        'Zero-Trust Security Architecture exceeding PCI-DSS requirements',
        'Real-Time Risk Analytics enabling instant loan approvals'
      ],
      compliance: ['PCI-DSS', 'SOC 2', 'Dodd-Frank', 'AML/KYC'],
      link: '/industries/financial'
    },
    {
      name: 'Manufacturing & Energy',
      tagline: 'Industry 4.0 & Predictive Operations',
      description: 'Industrial manufacturers and energy companies face complex operational challenges including unplanned downtime, supply chain disruptions, and quality control issues. Our IoT-enabled solutions deliver predictive maintenance, digital twin capabilities, and real-time operational intelligence.',
      capabilities: [
        'Predictive Maintenance predicting failures 2-4 weeks in advance',
        'Digital Twin & Process Simulation for virtual commissioning',
        'Real-Time OEE Monitoring achieving 99.2% equipment effectiveness',
        'Supply Chain Intelligence reducing inventory costs by 30%'
      ],
      compliance: ['Industry 4.0', 'OT Security', 'NERC CIP'],
      link: '/industries/manufacturing'
    }
  ];

  const caseStudies = [
    {
      title: 'Healthcare System Saves $12M Through AI Analytics',
      industry: 'Healthcare',
      description: 'Data intelligence platform delivered real-time insights improving patient outcomes by 40% while achieving full HIPAA compliance across 15 facilities.',
      metrics: [
        { value: '$12M', label: 'Annual Savings' },
        { value: '40%', label: 'Outcome Improvement' },
        { value: '15', label: 'Facilities' }
      ],
      href: '/case-studies/healthcare-ai'
    },
    {
      title: 'Bank Prevents $45M in Fraud with AI',
      industry: 'Financial Services',
      description: 'Real-time fraud detection system analyzing 50M+ transactions daily with 99.7% accuracy and sub-second response times.',
      metrics: [
        { value: '$45M', label: 'Fraud Prevented' },
        { value: '99.7%', label: 'Accuracy' },
        { value: '50M+', label: 'Daily Transactions' }
      ],
      href: '/case-studies/bank-fraud'
    },
    {
      title: 'Manufacturing Giant Achieves 99.2% Uptime',
      industry: 'Manufacturing',
      description: 'Cybersecurity and predictive maintenance eliminated 75% of unplanned downtime across 50+ facilities.',
      metrics: [
        { value: '99.2%', label: 'Uptime' },
        { value: '75%', label: 'Downtime Reduction' },
        { value: '50+', label: 'Facilities' }
      ],
      href: '/case-studies/manufacturing-uptime'
    }
  ];

  const complianceFrameworks = [
    { name: 'HIPAA', description: 'Healthcare data protection' },
    { name: 'PCI-DSS', description: 'Payment card security' },
    { name: 'SOC 2 Type II', description: 'Enterprise security controls' },
    { name: 'ISO 27001', description: 'Information security management' },
    { name: 'NERC CIP', description: 'Critical infrastructure protection' },
    { name: 'FDA 21 CFR', description: 'Life sciences compliance' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Sectors' },
                { label: 'Regulated Industries' }
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
              Regulated Industries
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Serving healthcare, financial services, and energy sectors with solutions that meet stringent regulatory and compliance requirements. From HIPAA to PCI-DSS, we deliver innovation without compromising on security or compliance.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule Industry Assessment
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
              Compliance-First Innovation
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Regulated industries operate in environments where a single compliance failure can result in millions of dollars in fines, reputational damage, and operational disruption. Healthcare organizations must protect patient data under HIPAA while improving care quality. Financial institutions must detect fraud in milliseconds while meeting complex AML and KYC requirements. Energy companies must secure critical infrastructure while modernizing aging operational technology.
              </p>
              <p>
                NexDyne Technologies brings deep expertise across these highly regulated sectors, combining industry-specific knowledge with advanced technology capabilities. Our teams include former compliance officers, healthcare IT specialists, and financial services technologists who understand both the regulatory landscape and the operational realities of your industry. This dual expertise enables us to design solutions that achieve compliance objectives while delivering measurable business value.
              </p>
              <p>
                Our approach integrates compliance requirements into solution architecture from day one—not as an afterthought. We implement defense-in-depth security strategies, comprehensive audit logging, and automated compliance monitoring that provide continuous assurance. Whether you're modernizing legacy systems, implementing AI-powered analytics, or transforming customer experiences, our solutions are designed to meet the highest standards of security, privacy, and regulatory compliance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Industries We Serve</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Sector-Specific Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Deep domain knowledge combined with advanced technology capabilities across healthcare, financial services, and industrial sectors.
            </p>
          </motion.div>

          <div className="space-y-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8 md:p-10">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <p className="text-[oklch(0.65_0.18_55)] font-semibold text-sm mb-2">{industry.tagline}</p>
                        <h3 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{industry.name}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">{industry.description}</p>
                        <ul className="space-y-3 mb-6">
                          {industry.capabilities.map((capability, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                              <span className="text-sm text-slate-700">{capability}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild variant="outline" className="border-[oklch(0.65_0.18_55)] text-[oklch(0.65_0.18_55)] hover:bg-[oklch(0.65_0.18_55)] hover:text-white">
                          <Link href={industry.link}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-sm font-semibold text-slate-500 mb-3">Compliance Expertise</p>
                        <div className="flex flex-wrap gap-2">
                          {industry.compliance.map((comp, idx) => (
                            <span 
                              key={idx} 
                              className="px-3 py-1.5 bg-[oklch(0.97_0.01_250)] text-[oklch(0.20_0.05_250)] text-sm font-medium rounded-full"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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
              Regulatory Frameworks We Support
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Deep expertise across industry-specific compliance requirements and security standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-4">
                    <div className="font-bold text-lg text-[oklch(0.20_0.05_250)] mb-1">{framework.name}</div>
                    <div className="text-xs text-slate-500">{framework.description}</div>
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
              Industry Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real-world results demonstrating our impact across regulated industries.
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
                      <p className="text-[oklch(0.65_0.18_55)] text-sm font-semibold mb-2">{study.industry}</p>
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
              <Link href="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <SectorClientLogos 
        sector="regulated" 
        title="Trusted by Regulated Industries"
        subtitle="Delivering compliance-first solutions for healthcare, financial services, and energy organizations."
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
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Regulated Operations?</h2>
            <p className="text-lg text-white/80 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Let's discuss how NexDyne can help your organization achieve compliance objectives while delivering measurable business value. Schedule a complimentary industry assessment today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                <Link href="/contact">
                  Schedule Industry Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/services/cybersecurity">
                  Explore Compliance Services
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
