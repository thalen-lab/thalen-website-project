import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, CheckCircle2, AlertTriangle, Bug, Shield, Target, Code, Wifi } from 'lucide-react';

export default function PenetrationTesting() {
  const testingServices = [
    {
      icon: Target,
      title: 'External Penetration Testing',
      description: 'Simulate real-world attacks against your external-facing infrastructure to identify vulnerabilities before adversaries exploit them.',
      benefits: ['Network penetration testing', 'Web application testing', 'Social engineering', 'Wireless security testing']
    },
    {
      icon: Shield,
      title: 'Internal Penetration Testing',
      description: 'Test internal network security and identify lateral movement opportunities that insider threats or compromised accounts could exploit.',
      benefits: ['Internal network testing', 'Active Directory assessment', 'Privilege escalation testing', 'Lateral movement analysis']
    },
    {
      icon: Code,
      title: 'Application Security Testing',
      description: 'Comprehensive web and mobile application security testing using OWASP Top 10 methodology and automated scanning.',
      benefits: ['OWASP Top 10 testing', 'API security testing', 'Mobile app testing', 'Secure code review']
    },
    {
      icon: Wifi,
      title: 'Wireless Security Assessment',
      description: 'Evaluate wireless network security including WiFi, Bluetooth, and IoT devices for unauthorized access and data leakage.',
      benefits: ['WiFi security testing', 'Rogue AP detection', 'IoT security assessment', 'Bluetooth testing']
    }
  ];

  const vulnerabilityManagement = [
    {
      phase: 'Continuous Scanning',
      description: 'Automated vulnerability scanning across all assets with weekly scans and real-time alerting for critical vulnerabilities.',
      metrics: ['Weekly scans', 'Real-time alerts', 'Asset discovery', 'Compliance reporting']
    },
    {
      phase: 'Risk Prioritization',
      description: 'Intelligent risk scoring based on exploitability, business impact, and threat intelligence to focus remediation efforts.',
      metrics: ['CVSS scoring', 'Business context', 'Exploit availability', 'Threat intelligence']
    },
    {
      phase: 'Remediation Tracking',
      description: 'Track remediation progress with SLA monitoring, automated ticketing, and executive dashboards.',
      metrics: ['SLA tracking', 'Automated tickets', 'Progress dashboards', 'Trend analysis']
    },
    {
      phase: 'Validation Testing',
      description: 'Verify remediation effectiveness with rescanning and manual validation to ensure vulnerabilities are properly addressed.',
      metrics: ['Rescan validation', 'Manual verification', 'False positive reduction', 'Closure confirmation']
    }
  ];

  const testingMethodologies = [
    'OWASP Testing Guide',
    'PTES (Penetration Testing Execution Standard)',
    'NIST SP 800-115',
    'OSSTMM',
    'MITRE ATT&CK Framework',
    'Red Team Operations'
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
                { label: 'Penetration Testing & Vulnerability Management' }
              ]}
              className="text-primary-foreground/80 hover:text-primary-foreground mb-4"
            />
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Offensive Security • Continuous Scanning
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Penetration Testing & Vulnerability Management
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Uncover security weaknesses before adversaries exploit them with comprehensive penetration testing and continuous vulnerability management. Thalen Technologies's offensive security experts simulate real-world attacks to validate your defenses and prioritize remediation efforts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Penetration Test
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Testing Methodology
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Penetration Testing Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-layered security testing approach that identifies vulnerabilities across your entire attack surface.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testingServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors hover:shadow-xl">
                <CardContent className="p-8">
                  <service.icon className="h-16 w-16 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
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

      {/* Vulnerability Management Process */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Continuous Vulnerability Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automated scanning and intelligent prioritization to keep your environment secure against emerging threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {vulnerabilityManagement.map((step, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{step.phase}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {step.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="h-2 w-2 bg-accent rounded-full mr-2"></div>
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Methodologies */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry-Standard Testing Methodologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our penetration testing follows recognized industry standards and frameworks for comprehensive security validation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testingMethodologies.map((methodology, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-accent">
                <CardContent className="p-6 text-center">
                  <Bug className="h-10 w-10 text-accent mx-auto mb-3" />
                  <div className="font-semibold">{methodology}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Testing Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our penetration testing uncovers critical vulnerabilities that automated scanners miss.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: '95%', label: 'Critical Findings Identified' },
              { metric: '< 5', label: 'Days to Detailed Report' },
              { metric: '100%', label: 'Remediation Guidance' },
              { metric: '24/7', label: 'Emergency Support' }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Find Vulnerabilities Before Attackers Do</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive penetration test and discover how Thalen Technologies can identify and help remediate security weaknesses in your environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Penetration Test
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Sample Report
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
