
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, CheckCircle2, Eye, Shield, Bell, Activity, Search, Zap } from 'lucide-react';

export default function SecurityOperationsCenter() {
  const socCapabilities = [
    {
      icon: Eye,
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock threat detection and monitoring by expert security analysts with TS/SCI clearances for classified environments.',
      benefits: ['24/7/365 coverage', 'TS/SCI cleared analysts', 'Real-time alerting', 'Escalation procedures']
    },
    {
      icon: Bell,
      title: 'SIEM & Log Management',
      description: 'Centralized security information and event management with correlation rules, threat intelligence, and compliance reporting.',
      benefits: ['Log aggregation', 'Correlation rules', 'Threat intelligence', 'Compliance reports']
    },
    {
      icon: Search,
      title: 'Threat Hunting',
      description: 'Proactive threat hunting using MITRE ATT&CK framework and advanced analytics to identify hidden threats.',
      benefits: ['Proactive hunting', 'MITRE ATT&CK', 'Behavioral analytics', 'IOC detection']
    },
    {
      icon: Zap,
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <Breadcrumb 
              items={[
                { label: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
                { label: 'Security Operations Center' }
              ]}
              className="text-primary-foreground/80 hover:text-primary-foreground mb-4"
            />
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              24/7 Monitoring • TS/SCI Cleared
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Security Operations Center (SOC)
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              24/7 security monitoring and threat detection with expert analysts, SIEM/SOAR integration, and automated response. NexDyne's SOC delivers government-grade security operations with TS/SCI cleared personnel for classified environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule SOC Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download SOC Services Overview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SOC Capabilities */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive SOC Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-spectrum security operations from monitoring to response, designed for federal mission-critical environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {socCapabilities.map((capability, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors hover:shadow-xl">
                <CardContent className="p-8">
                  <capability.icon className="h-16 w-16 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground mb-6">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOC Tiers */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Multi-Tier SOC Structure</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured escalation model ensuring the right expertise handles each security event efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {socServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{service.tier}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3 text-sm">Key Responsibilities:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="h-2 w-2 bg-accent rounded-full mr-2"></div>
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOC Tools */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise SOC Tools & Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Best-in-class security tools and platforms for comprehensive threat detection and response.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {socTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-accent">
                <CardContent className="p-6 text-center">
                  <Activity className="h-10 w-10 text-accent mx-auto mb-3" />
                  <div className="font-semibold text-sm">{tool}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">SOC Performance Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading response times and threat detection rates for mission-critical environments.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: '<15min', label: 'Mean Time to Detect (MTTD)' },
              { metric: '<1hr', label: 'Mean Time to Respond (MTTR)' },
              { metric: '99.9%', label: 'Threat Detection Rate' },
              { metric: '24/7', label: 'Monitoring Coverage' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">{item.metric}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Protect Your Assets 24/7</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a SOC consultation and discover how NexDyne can deliver continuous security monitoring and threat detection for your mission-critical environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule SOC Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View SOC Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
