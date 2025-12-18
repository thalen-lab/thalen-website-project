import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, Server, CheckCircle, Mail, AlertTriangle } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { APP_TITLE } from '@/const';

export default function Security() {
  const securityPractices = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We implement end-to-end encryption for sensitive communications and data transfers."
    },
    {
      icon: Shield,
      title: "Access Controls",
      description: "We employ role-based access control (RBAC), multi-factor authentication (MFA), and the principle of least privilege to ensure only authorized personnel can access sensitive systems and data."
    },
    {
      icon: Eye,
      title: "Continuous Monitoring",
      description: "Our security operations center (SOC) provides 24/7 monitoring of all systems. We use advanced threat detection, SIEM solutions, and automated alerting to identify and respond to potential security incidents."
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Our infrastructure is hosted in SOC 2 Type II certified data centers with physical security controls, redundant systems, and disaster recovery capabilities across multiple geographic regions."
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", description: "Service Organization Control compliance" },
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "FedRAMP", description: "Federal Risk and Authorization Management" },
    { name: "CMMC Level 3", description: "Cybersecurity Maturity Model Certification" },
    { name: "HIPAA", description: "Health Insurance Portability and Accountability" },
    { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[{ label: 'Security' }]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security at {APP_TITLE}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We are committed to protecting your data with industry-leading security practices, compliance certifications, and continuous monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Security Commitment */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Security Commitment</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Security is not just a feature—it's foundational to everything we do. As a trusted partner to federal agencies and enterprise clients, we maintain the highest standards of data protection and security governance.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {securityPractices.map((practice, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <practice.icon className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{practice.title}</h3>
                    <p className="text-muted-foreground">{practice.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Compliance & Certifications</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              We maintain comprehensive compliance certifications to meet the stringent requirements of government and enterprise clients.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-5 text-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Policies */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Security Policies & Practices</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain a comprehensive incident response plan that includes detection, containment, eradication, recovery, and post-incident analysis. Our security team is trained to respond to incidents within defined SLAs, and we conduct regular tabletop exercises to ensure readiness.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Vulnerability Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We perform regular vulnerability assessments and penetration testing on our systems. Critical vulnerabilities are addressed within 24 hours, and we maintain a responsible disclosure program for security researchers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Employee Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All employees undergo background checks and security clearance verification where required. We provide mandatory security awareness training, and employees with access to sensitive systems maintain appropriate security clearances (up to Top Secret/SCI).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Third-Party Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We conduct thorough security assessments of all third-party vendors and partners. Our vendor management program ensures that partners meet our security standards and maintain appropriate certifications.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Business Continuity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our business continuity and disaster recovery plans ensure service availability even in the event of major disruptions. We maintain redundant systems across multiple data centers and conduct regular DR testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report a Vulnerability */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Report a Security Vulnerability</h2>
                    <p className="text-muted-foreground mb-6">
                      We take security vulnerabilities seriously and appreciate responsible disclosure. If you believe you have discovered a security vulnerability in our systems, please report it to our security team. We commit to acknowledging reports within 24 hours and providing regular updates on our investigation.
                    </p>
                    <div className="flex items-center gap-3 text-muted-foreground mb-4">
                      <Mail className="h-5 w-5 text-accent" />
                      <span className="font-medium">security@thalen.tech</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Please include detailed information about the vulnerability, steps to reproduce, and any supporting evidence. We request that you do not publicly disclose the vulnerability until we have had an opportunity to address it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Our Security?</h2>
            <p className="text-lg opacity-90 mb-8">
              Our security team is available to discuss our security practices, compliance certifications, and how we can meet your organization's security requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
                <Link href="/contact">Contact Security Team</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10">
                <Link href="/services/cybersecurity">View Security Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
