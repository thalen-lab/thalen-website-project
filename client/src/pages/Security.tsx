import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { APP_TITLE } from '@/const';
import Breadcrumb from '@/components/Breadcrumb';

export default function Security() {
  const securityPractices = [
    {
      title: "Data Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We implement end-to-end encryption for sensitive communications and data transfers."
    },
    {
      title: "Access Controls",
      description: "We employ role-based access control (RBAC), multi-factor authentication (MFA), and the principle of least privilege to ensure only authorized personnel can access sensitive systems and data."
    },
    {
      title: "Continuous Monitoring",
      description: "Our security operations center (SOC) provides 24/7 monitoring of all systems. We use advanced threat detection, SIEM solutions, and automated alerting to identify and respond to potential security incidents."
    },
    {
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-[url('/img/pattern.svg')] bg-cover bg-center py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Enterprise-Grade Security</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Security at {APP_TITLE}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              We are committed to protecting your data with industry-leading security practices, compliance certifications, and continuous monitoring.
            </p>
            <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 font-semibold py-3 px-8">
              <Link href="/contact">Request a Security Report</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Security Commitment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Commitment</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">A Foundation of Trust</h2>
            <p className="text-lg text-slate-600 mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 max-w-3xl mx-auto">
              Security is not just a feature—it's foundational to everything we do. As a trusted partner to federal agencies and enterprise clients, we maintain the highest standards of data protection and security governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {securityPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-[oklch(0.20_0.05_250)] mb-3">{practice.title}</h3>
                <p className="text-slate-600">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Verified & Certified</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Compliance & Certifications</h2>
            <p className="text-lg text-slate-600 mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
              We maintain comprehensive compliance certifications to meet the stringent requirements of government and enterprise clients.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-slate-200 rounded-lg p-5 text-center transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl flex flex-col justify-center items-center h-full"
              >
                <h3 className="font-semibold text-[oklch(0.20_0.05_250)] mb-1 text-base">{cert.name}</h3>
                <p className="text-sm text-slate-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Policies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Practices</p>
              <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">Security Policies & Practices</h2>
            </div>

            <div className="space-y-8">
              {[ "Incident Response", "Vulnerability Management", "Employee Security", "Third-Party Security", "Business Continuity" ].map((title, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-[oklch(0.20_0.05_250)] mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {[
                      "We maintain a comprehensive incident response plan that includes detection, containment, eradication, recovery, and post-incident analysis. Our security team is trained to respond to incidents within defined SLAs, and we conduct regular tabletop exercises to ensure readiness.",
                      "We perform regular vulnerability assessments and penetration testing on our systems. Critical vulnerabilities are addressed within 24 hours, and we maintain a responsible disclosure program for security researchers.",
                      "All employees undergo background checks and security clearance verification where required. We provide mandatory security awareness training, and employees with access to sensitive systems maintain appropriate security clearances (up to Top Secret/SCI).",
                      "We conduct thorough security assessments of all third-party vendors and partners. Our vendor management program ensures that partners meet our security standards and maintain appropriate certifications.",
                      "Our business continuity and disaster recovery plans ensure service availability even in the event of major disruptions. We maintain redundant systems across multiple data centers and conduct regular DR testing."
                    ][index]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Report a Vulnerability */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border-2 border-slate-200 rounded-lg p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
              <h2 className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Report a Security Vulnerability</h2>
              <p className="text-slate-600 mb-6">
                We take security vulnerabilities seriously and appreciate responsible disclosure. If you believe you have discovered a security vulnerability in our systems, please report it to our security team. We commit to acknowledging reports within 24 hours and providing regular updates on our investigation.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-1"></span>
                <span className="font-medium text-[oklch(0.20_0.05_250)]">security@thalentechnologies.com</span>
              </div>
              <p className="text-sm text-slate-600">
                Please include detailed information about the vulnerability, steps to reproduce, and any supporting evidence. We request that you do not publicly disclose the vulnerability until we have had an opportunity to address it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Questions About Our Security?</h2>
            <p className="text-lg text-white/80 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Our security team is available to discuss our security practices, compliance certifications, and how we can meet your organization's security requirements.
            </p>
            <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 font-semibold py-3 px-8">
              <Link href="/contact">
                Contact Security Team <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
