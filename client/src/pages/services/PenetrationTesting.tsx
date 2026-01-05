import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PenetrationTesting() {
  const testingServices = [
    {
      title: 'External Penetration Testing',
      description: 'Simulate real-world attacks against your external-facing infrastructure to identify vulnerabilities before adversaries exploit them.',
      benefits: ['Network penetration testing', 'Web application testing', 'Social engineering', 'Wireless security testing']
    },
    {
      title: 'Internal Penetration Testing',
      description: 'Test internal network security and identify lateral movement opportunities that insider threats or compromised accounts could exploit.',
      benefits: ['Internal network testing', 'Active Directory assessment', 'Privilege escalation testing', 'Lateral movement analysis']
    },
    {
      title: 'Application Security Testing',
      description: 'Comprehensive web and mobile application security testing using OWASP Top 10 methodology and automated scanning.',
      benefits: ['OWASP Top 10 testing', 'API security testing', 'Mobile app testing', 'Secure code review']
    },
    {
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/hero-pattern.svg')"}}></div>
        <div className="container relative z-20">
          <div className="max-w-4xl">
            <Breadcrumb 
              items={[
                { label: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
                { label: 'Penetration Testing & Vulnerability Management' }
              ]}
              className="text-white/80 hover:text-white mb-4"
            />
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-6">
              Offensive Security • Continuous Scanning
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Penetration Testing & Vulnerability Management
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Uncover security weaknesses before adversaries exploit them with comprehensive penetration testing and continuous vulnerability management for government agencies (federal, state, local) and defense contractors. Thalen Technologies's offensive security experts simulate real-world attacks to validate your defenses and prioritize remediation efforts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Schedule Penetration Test
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                Download Testing Methodology
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Approach</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Comprehensive Penetration Testing Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multi-layered security testing approach that identifies vulnerabilities across your entire attack surface.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testingServices.map((service, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-slate-600">
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

      {/* Vulnerability Management Process */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Continuous Vulnerability Management</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Automated scanning and intelligent prioritization to keep your environment secure against emerging threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {vulnerabilityManagement.map((step, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-[oklch(0.22_0.06_250)] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)]">{step.phase}</h3>
                    </div>
                    <p className="text-slate-600 mb-6">{step.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-1 mr-2"></span>
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Methodologies */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Frameworks</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Industry-Standard Testing Methodologies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our penetration testing follows recognized industry standards and frameworks for comprehensive security validation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testingMethodologies.map((methodology, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl h-full">
                  <CardContent className="p-6 text-center flex flex-col justify-center items-center h-full">
                    <div className="font-semibold text-[oklch(0.20_0.05_250)]">{methodology}</div>
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
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Results</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Proven Testing Results</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
              <div key={index} className="text-center bg-white p-6 rounded-lg border-2 border-slate-200">
                <div className="text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">{item.metric}</div>
                <div className="text-sm text-slate-600 uppercase tracking-wider font-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Find Vulnerabilities Before Attackers Do</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive penetration test and discover how Thalen Technologies can identify and help remediate security weaknesses in your government environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Schedule Penetration Test
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
              View Sample Report
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
