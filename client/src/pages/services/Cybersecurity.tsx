import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle2, FileCheck } from 'lucide-react';

export default function Cybersecurity() {
  const services = [
    {
      icon: Shield,
      title: 'Zero-Trust Architecture',
      description: 'Identity-based security with continuous verification, micro-segmentation, and least-privilege access controls.'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: 'Real-time threat detection and response with 24/7 SOC support and automated incident response.'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit with FIPS 140-2 validated cryptography.'
    },
    {
      icon: FileCheck,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting for FedRAMP, CMMC, ISO 27001, and HIPAA.'
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Management',
      description: 'Continuous scanning, penetration testing, and remediation with prioritized risk assessment.'
    },
    {
      icon: CheckCircle2,
      title: 'Security Training',
      description: 'Comprehensive security awareness training and phishing simulation programs.'
    }
  ];

  const certifications = [
    { name: 'FedRAMP Authorized', level: 'Moderate & High', description: 'Full authorization for federal cloud services' },
    { name: 'CMMC Level 3', level: 'Expert', description: 'Advanced cybersecurity for defense contractors' },
    { name: 'ISO 27001:2022', level: 'Certified', description: 'International information security management' },
    { name: 'NIST Framework v2.0', level: 'Compliant', description: 'Comprehensive cybersecurity framework' },
    { name: 'SOC 2 Type II', level: 'Audited', description: 'Service organization controls validation' },
    { name: 'FISMA Moderate ATO', level: 'Authorized', description: 'Federal information security authorization' },
    { name: 'HIPAA BAA Ready', level: 'Compliant', description: 'Healthcare data protection standards' },
    { name: 'TS/SCI Cleared Team', level: 'Verified', description: 'Top Secret/SCI security clearances' }
  ];

  const threatResponse = [
    { metric: '<15min', label: 'Threat Detection' },
    { metric: '24/7', label: 'SOC Monitoring' },
    { metric: '99.9%', label: 'Threat Prevention' },
    { metric: '<1hr', label: 'Incident Response' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Mission-Critical Security
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cybersecurity & Compliance
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              FedRAMP, CMMC, ISO 27001 compliance solutions with zero-trust architecture and continuous monitoring. Built for the most demanding security requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Compliance Matrix
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

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Security Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end cybersecurity solutions designed for government and enterprise environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all border-2">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Security Certifications & Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certified and authorized across the most demanding security and compliance frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                      <Shield className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-center">{cert.name}</h3>
                  <div className="text-sm text-accent text-center mb-2">{cert.level}</div>
                  <p className="text-xs text-muted-foreground text-center">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container">
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary text-primary-foreground p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-accent mb-2">Federal Agency Success</div>
                  <h3 className="text-3xl font-bold mb-4">Zero Security Incidents in 3 Years</h3>
                  <p className="text-primary-foreground/90 mb-6">
                    NexDyne implemented comprehensive zero-trust architecture for a federal agency processing classified information, achieving zero security incidents while maintaining FedRAMP High authorization.
                  </p>
                  <Button className="bg-orange-gradient hover:opacity-90 w-fit">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-accent/10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-accent mb-2">0</div>
                    <div className="text-lg text-muted-foreground mb-6">Security Incidents</div>
                    <div className="text-4xl font-bold text-accent mb-2">3 Years</div>
                    <div className="text-lg text-muted-foreground">Perfect Record</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Defense-in-Depth Security Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-layered security approach that protects against evolving threats.
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
              <Card key={index} className="text-center">
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

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Protect Your Mission-Critical Assets</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive security assessment and discover how we can strengthen your cybersecurity posture.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Security Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
