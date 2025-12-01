import { CheckCircle2, Shield, Lock, AlertTriangle, Code2, Zap, Database, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";

export default function ApplicationSecurity() {
  const benefits = [
    { icon: Shield, title: "Secure SDLC Implementation", description: "Security built into every phase of development—from requirements to deployment and beyond." },
    { icon: Lock, title: "Continuous Security Testing", description: "Automated vulnerability scanning, static analysis, dynamic testing, and penetration testing throughout development." },
    { icon: CheckCircle2, title: "FedRAMP Compliance Validation", description: "Ensure applications meet FedRAMP, StateRAMP, NIST 800-53, and government security requirements (federal, state, local) with comprehensive documentation." },
    { icon: AlertTriangle, title: "Vulnerability Remediation", description: "Rapid identification and remediation of security vulnerabilities with prioritized risk-based approach." }
  ];

  const securityPractices = [
    { title: "Secure Code Review", description: "Manual and automated code review to identify security flaws, injection vulnerabilities, and logic errors" },
    { title: "Threat Modeling", description: "Identify potential threats and attack vectors early in development to design secure architectures" },
    { title: "Security Testing", description: "SAST, DAST, penetration testing, fuzzing, and vulnerability scanning integrated into CI/CD pipelines" },
    { title: "Compliance Documentation", description: "Security control implementation, ATO packages, risk assessments, and compliance evidence" }
  ];

  const relatedServices = [
    { title: "Custom Application Development", description: "Build secure applications with security-first development practices from day one.", href: "/services/custom-application-development", icon: Code2 },
    { title: "Security Assessment", description: "Comprehensive security assessments and compliance validation for existing applications.", href: "/services/security-assessment", icon: Shield },
    { title: "Penetration Testing", description: "Offensive security testing to identify vulnerabilities before attackers do.", href: "/services/penetration-testing", icon: AlertTriangle }
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
                { label: 'Application Security & Compliance' }
              ]}
              className="text-primary-foreground/80 hover:text-primary-foreground mb-4"
            />
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Secure SDLC • FedRAMP Validation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Application Security & Compliance
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We help agencies implement secure software development lifecycle (SDLC) practices with DevSecOps pipelines, automated security testing, and compliance validation tools. Ensure your applications meet FedRAMP, StateRAMP, NIST 800-53, and government security requirements (federal, state, local) through our proven implementation framework.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Secure Your Apps
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Download Security Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Application Security Matters</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Security breaches cost agencies millions and compromise mission success. Build security in from the start.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0"><Icon className="w-7 h-7 text-accent" /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Security Practices We Implement</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Comprehensive security practices integrated throughout the development lifecycle.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {securityPractices.map((practice, index) => (
              <div key={index} className="bg-background rounded-lg p-8 border-2 border-border hover:border-accent transition-colors">
                <h3 className="text-2xl font-bold mb-3">{practice.title}</h3>
                <p className="text-muted-foreground">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Applications?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore how we can help you build security into your development process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Security Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices title="Enhance Your Security Posture" services={relatedServices} />
      <Footer />
    </div>
  );
}
