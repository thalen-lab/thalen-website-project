import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SecurityOperationsCenter() {
  const socCapabilities = [
    {
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock threat detection and monitoring by expert security analysts with TS/SCI clearances for classified environments.',
      benefits: ['24/7/365 coverage', 'TS/SCI cleared analysts', 'Real-time alerting', 'Escalation procedures']
    },
    {
      title: 'SIEM & Log Management',
      description: 'Centralized security information and event management with correlation rules, threat intelligence, and compliance reporting.',
      benefits: ['Log aggregation', 'Correlation rules', 'Threat intelligence', 'Compliance reports']
    },
    {
      title: 'Threat Hunting',
      description: 'Proactive threat hunting using MITRE ATT&CK framework and advanced analytics to identify hidden threats.',
      benefits: ['Proactive hunting', 'MITRE ATT&CK', 'Behavioral analytics', 'IOC detection']
    },
    {
      title: 'Automated Response (SOAR)',
      description: 'Security orchestration and automated response to contain threats and reduce mean time to respond (MTTR).',
      benefits: ['Automated playbooks', 'Threat containment', 'Reduced MTTR', 'Workflow orchestration']
    }
  ];

  const socServices = [
    {
      tier: 'Tier 1: Monitoring & Triage',
      description: 'Initial alert triage, event correlation, and incident classification with 24/7 monitoring coverage.',
      responsibilities: ['Alert monitoring', 'Event correlation', 'Incident classification', 'Initial containment']
    },
    {
      tier: 'Tier 2: Incident Investigation',
      description: 'Deep-dive analysis, threat validation, and coordinated response for confirmed security incidents.',
      responsibilities: ['Forensic analysis', 'Threat validation', 'Impact assessment', 'Response coordination']
    },
    {
      tier: 'Tier 3: Threat Intelligence',
      description: 'Advanced threat research, custom detection rules, and proactive threat hunting operations.',
      responsibilities: ['Threat research', 'Custom detections', 'Threat hunting', 'Intelligence sharing']
    },
    {
      tier: 'Leadership: SOC Management',
      description: 'Strategic oversight, metrics reporting, and continuous improvement of security operations.',
      responsibilities: ['Strategic planning', 'Metrics & KPIs', 'Process improvement', 'Stakeholder reporting']
    }
  ];

  const socTools = [
    'Splunk Enterprise Security',
    'Microsoft Sentinel',
    'IBM QRadar',
    'Palo Alto Cortex XSOAR',
    'CrowdStrike Falcon',
    'SentinelOne',
    'Carbon Black',
    'Recorded Future'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cybersecurity/soc-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        <div className="container relative">
          <div className="max-w-4xl">
            <Breadcrumb 
              items={[
                { label: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
                { label: 'Security Operations Center' }
              ]}
              className="text-white/80 hover:text-white mb-4"
            />
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-6">
              24/7 Monitoring • TS/SCI Cleared
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Security Operations Center (SOC)
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              We help government agencies (federal, state, local) implement 24/7 security operations centers using FedRAMP-authorized SIEM/SOAR platforms (Splunk Gov, LogRhythm, Palo Alto Cortex) with automated threat detection and response. Our team delivers government-grade SOC implementation with TS/SCI cleared personnel for classified environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Schedule SOC Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                Download SOC Services Overview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SOC Capabilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Comprehensive SOC Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Full-spectrum security operations from monitoring to response, designed for government mission-critical environments (federal, state, local).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {socCapabilities.map((capability, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{capability.title}</h3>
                    <p className="text-slate-600 mb-6">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                          <span>{benefit}</span>
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

      {/* SOC Tiers */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Service Structure</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Multi-Tier SOC Structure</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Structured escalation model ensuring the right expertise handles each security event efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {socServices.map((service, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-[oklch(0.22_0.06_250)] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)]">{service.tier}</h3>
                    </div>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <div className="border-t border-slate-200 pt-4">
                      <h4 className="font-semibold mb-3 text-sm text-[oklch(0.20_0.05_250)]">Key Responsibilities:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.responsibilities.map((resp, idx) => (
                          <div key={idx} className="flex items-center text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-1 mr-2"></span>
                            <span>{resp}</span>
                          </div>
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

      {/* SOC Tools */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Tools & Platforms</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Enterprise SOC Tools & Platforms</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Established security tools and platforms for comprehensive threat detection and response.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {socTools.map((tool, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                    <div className="font-semibold text-sm text-[oklch(0.20_0.05_250)]">{tool}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Performance</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">SOC Performance Metrics</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Established response times and threat detection rates for mission-critical environments.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: '<15min', label: 'Mean Time to Detect (MTTD)' },
              { metric: '<1hr', label: 'Mean Time to Respond (MTTR)' },
              { metric: '99.9%', label: 'Threat Detection Rate' },
              { metric: '24/7', label: 'Monitoring Coverage' }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg border-2 border-slate-200">
                <div className="text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">{item.metric}</div>
                <div className="text-sm text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Protect Your Assets 24/7</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a SOC consultation and discover how NexDyne Technology can deliver continuous security monitoring and threat detection for your mission-critical government environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Schedule SOC Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
              View SOC Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
