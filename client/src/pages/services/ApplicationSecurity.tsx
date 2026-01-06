import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function ApplicationSecurity() {
  const benefits = [
    { title: "Secure SDLC Implementation", description: "Security built into every phase of development—from requirements to deployment and beyond." },
    { title: "Continuous Security Testing", description: "Automated vulnerability scanning, static analysis, dynamic testing, and penetration testing throughout development." },
    { title: "FedRAMP Compliance Validation", description: "Ensure applications meet FedRAMP, StateRAMP, NIST 800-53, and government security requirements (federal, state, local) with comprehensive documentation." },
    { title: "Vulnerability Remediation", description: "Rapid identification and remediation of security vulnerabilities with a prioritized risk-based approach." }
  ];

  const securityPractices = [
    { title: "Secure Code Review", description: "Manual and automated code review to identify security flaws, injection vulnerabilities, and logic errors" },
    { title: "Threat Modeling", description: "Identify potential threats and attack vectors early in development to design secure architectures" },
    { title: "Security Testing", description: "SAST, DAST, penetration testing, fuzzing, and vulnerability scanning integrated into CI/CD pipelines" },
    { title: "Compliance Documentation", description: "Security control implementation, ATO packages, risk assessments, and compliance evidence" }
  ];

  const relatedServices = [
    { title: "Custom Application Development", description: "Build secure applications with security-first development practices from day one.", href: "/services/custom-application-development" },
    { title: "Security Assessment", description: "Comprehensive security assessments and compliance validation for existing applications.", href: "/services/security-assessment" },
    { title: "Penetration Testing", description: "Offensive security testing to identify vulnerabilities before attackers do.", href: "/services/penetration-testing" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/pattern-dark.svg')] bg-center [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="container relative">
          <div className="max-w-4xl">
            <Breadcrumb 
              items={[
                { label: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
                { label: 'Application Security & Compliance' }
              ]}
              className="text-white/80 hover:text-white mb-4"
            />
            <div className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-6">
              Secure SDLC • FedRAMP Validation
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Application Security & Compliance
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              We help agencies implement secure software development lifecycle (SDLC) practices with DevSecOps pipelines, automated security testing, and compliance validation tools. Ensure your applications meet FedRAMP, StateRAMP, NIST 800-53, and government security requirements (federal, state, local) through our proven implementation framework.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Secure Your Apps
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  Download Security Guide
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Why It Matters</h2>
            <h3 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Build Security In, Not Bolted On</h3>
            <p className="text-xl text-slate-600">Security breaches cost agencies millions and compromise mission success. Proactive application security is non-negotiable.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{benefit.title}</h4>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Approach</h2>
            <h3 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Security Practices We Implement</h3>
            <p className="text-xl text-slate-600">Comprehensive security practices integrated throughout the development lifecycle.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {securityPractices.map((practice, index) => (
              <motion.div 
                key={index} 
                className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{practice.title}</h4>
                <p className="text-slate-600">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Applications?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore how we can help you build security into your development process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                View Security Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices title="Enhance Your Security Posture" services={relatedServices} />
      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
