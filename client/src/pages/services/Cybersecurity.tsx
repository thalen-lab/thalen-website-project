import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Shield, FileSearch, Lock, Eye, AlertTriangle, Network } from 'lucide-react';

export default function Cybersecurity() {
  const subServices = [
    {
      icon: FileSearch,
      title: 'Security Assessment & Compliance',
      description: 'Comprehensive security assessments and compliance audits for FedRAMP, CMMC, NIST 800-53/171, and ISO 27001 with gap analysis and remediation roadmaps.',
      benefits: ['FedRAMP assessment support', 'CMMC Level 1-3 certification', 'NIST 800-53/171 compliance', 'Continuous compliance monitoring'],
      link: '/services/security-assessment'
    },
    {
      icon: AlertTriangle,
      title: 'Penetration Testing & Vulnerability Management',
      description: 'Offensive security testing and continuous vulnerability scanning to identify and remediate security weaknesses before adversaries exploit them.',
      benefits: ['Annual penetration testing', 'Continuous vulnerability scanning', 'Exploit validation', 'Prioritized remediation'],
      link: '/services/penetration-testing'
    },
    {
      icon: Lock,
      title: 'Identity & Access Management (IAM)',
      description: 'Zero Trust identity solutions with multi-factor authentication, privileged access management, and identity governance for federal environments.',
      benefits: ['Zero Trust implementation', 'MFA/PIV integration', 'Privileged access management', 'Identity governance'],
      link: '/services/identity-access-management'
    },
    {
      icon: Eye,
      title: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring and threat detection with SIEM, automated response, and expert security analysts protecting your critical assets.',
      benefits: ['24/7 threat monitoring', 'SIEM/SOAR integration', 'Automated incident response', 'Threat intelligence'],
      link: '/services/security-operations-center'
    },
    {
      icon: Shield,
      title: 'Incident Response & Forensics',
      description: 'Rapid incident response and digital forensics services to contain breaches, investigate root causes, and restore operations with minimal impact.',
      benefits: ['< 1 hour response time', 'Digital forensics analysis', 'Breach containment', 'Recovery planning'],
      link: '/services/incident-response'
    },
    {
      icon: Network,
      title: 'Zero Trust Architecture',
      description: 'Modern security framework implementation with micro-segmentation, continuous verification, and least-privilege access controls for federal networks.',
      benefits: ['Micro-segmentation', 'Continuous verification', 'Least-privilege access', 'Policy-based controls'],
      link: '/services/zero-trust-architecture'
    }
  ];

  const certifications = [
    { name: 'FedRAMP Authorized', level: 'Moderate & High' },
    { name: 'CMMC Level 3', level: 'Expert' },
    { name: 'ISO 27001:2022', level: 'Certified' },
    { name: 'NIST Framework', level: 'Compliant' },
    { name: 'SOC 2 Type II', level: 'Audited' },
    { name: 'FISMA ATO', level: 'Authorized' },
    { name: 'HIPAA BAA', level: 'Compliant' },
    { name: 'TS/SCI Cleared', level: 'Verified' }
  ];

  const threatResponse = [
    { metric: '<15min', label: 'Threat Detection' },
    { metric: '24/7', label: 'SOC Monitoring' },
    { metric: '99.9%', label: 'Threat Prevention' },
    { metric: '<1hr', label: 'Incident Response' }
  ];

  const caseStudies = [
    {
      title: 'Federal Agency Achieves Zero Security Incidents',
      description: 'Implemented comprehensive zero-trust architecture with continuous monitoring, achieving zero security incidents over 3 years while maintaining FedRAMP High authorization.',
      metric: '0',
      metricLabel: 'Security Incidents',
      industry: 'Federal Government'
    },
    {
      title: 'Defense Contractor Achieves CMMC Level 3',
      description: 'Guided defense contractor through CMMC Level 3 certification process, implementing 130+ security controls and achieving certification in 6 months.',
      metric: '6 Mo',
      metricLabel: 'Certification Timeline',
      industry: 'Defense'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Core Service
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cybersecurity & Compliance
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              FedRAMP, CMMC, and NIST compliance solutions with zero-trust architecture, 24/7 security operations, and continuous monitoring. NexDyne delivers government-grade cybersecurity that protects mission-critical assets against evolving threats.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Compliance Matrix
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Response Metrics */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {threatResponse.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{item.metric}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Specializations */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Cybersecurity Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end security capabilities from assessment to operations, designed for federal agencies and defense contractors with the most demanding security requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all border-2 hover:border-accent">
                <CardContent className="p-8">
                  <service.icon className="h-16 w-16 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.link}>
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Security Certifications & Authorizations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certified and authorized across the most demanding federal security and compliance frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-accent">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                      <Shield className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-center">{cert.name}</h3>
                  <div className="text-sm text-accent text-center">{cert.level}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Defense-in-Depth Framework */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Defense-in-Depth Security Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-layered security approach that protects against evolving threats at every level.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { layer: 'Perimeter', desc: 'Firewall & IDS/IPS' },
              { layer: 'Network', desc: 'Segmentation & Monitoring' },
              { layer: 'Application', desc: 'WAF & Code Security' },
              { layer: 'Data', desc: 'Encryption & DLP' },
              { layer: 'Identity', desc: 'MFA & Zero-Trust' }
            ].map((layer, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow border-2">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">{index + 1}</div>
                  <h3 className="text-lg font-bold mb-1">{layer.layer}</h3>
                  <p className="text-xs text-muted-foreground">{layer.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Security Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world success stories demonstrating NexDyne's cybersecurity expertise across federal agencies and defense contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-primary text-primary-foreground p-8">
                    <div className="text-sm font-semibold text-accent mb-2">{study.industry}</div>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <p className="text-primary-foreground/90 mb-6">{study.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-4xl font-bold text-accent">{study.metric}</div>
                        <div className="text-sm text-primary-foreground/80">{study.metricLabel}</div>
                      </div>
                      <Button className="bg-orange-gradient hover:opacity-90">
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Protect Your Mission-Critical Assets</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive security assessment and discover how NexDyne can strengthen your cybersecurity posture with FedRAMP-authorized solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Security Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
