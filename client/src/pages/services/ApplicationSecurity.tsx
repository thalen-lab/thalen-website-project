import { CheckCircle2, Shield, Lock, AlertTriangle, Code2, Zap, Database } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";

export default function ApplicationSecurity() {
  const benefits = [
    { icon: Shield, title: "Secure SDLC Implementation", description: "Security built into every phase of development—from requirements to deployment and beyond." },
    { icon: Lock, title: "Continuous Security Testing", description: "Automated vulnerability scanning, static analysis, dynamic testing, and penetration testing throughout development." },
    { icon: CheckCircle2, title: "FedRAMP Compliance Validation", description: "Ensure applications meet FedRAMP, NIST 800-53, and federal security requirements with comprehensive documentation." },
    { icon: AlertTriangle, title: "Vulnerability Remediation", description: "Rapid identification and remediation of security vulnerabilities with prioritized risk-based approach." }
  ];

  const securityPractices = [
    { title: "Secure Code Review", description: "Manual and automated code review to identify security flaws, injection vulnerabilities, and logic errors" },
    { title: "Threat Modeling", description: "Identify potential threats and attack vectors early in development to design secure architectures" },
    { title: "Security Testing", description: "SAST, DAST, penetration testing, fuzzing, and vulnerability scanning integrated into CI/CD pipelines" },
    { title: "Compliance Documentation", description: "Security control implementation, ATO packages, risk assessments, and compliance evidence" }
  ];

  const relatedServices = [
    { title: "Custom Application Development", description: "Build secure applications with security-first development practices from day one.", link: "/services/custom-application-development", icon: Code2 },
    { title: "Security Assessment", description: "Comprehensive security assessments and compliance validation for existing applications.", link: "/services/security-assessment", icon: Shield },
    { title: "Penetration Testing", description: "Offensive security testing to identify vulnerabilities before attackers do.", link: "/services/penetration-testing", icon: AlertTriangle }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6TTI1IDEzNGg3djFoLTd6TTE2IDEzNGg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container relative z-10">
          <Breadcrumb items={[{ label: "Application Development & Integration", href: "/services/application-development" }, { label: "Application Security & Compliance" }]} />
          <div className="max-w-4xl mt-8">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">Secure SDLC • FedRAMP Validation</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Application Security & Compliance</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">Secure software development lifecycle practices with continuous security testing and compliance validation. Ensure your applications meet FedRAMP, NIST 800-53, and federal security requirements.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white"><Link href="/contact">Secure Your Apps</Link></Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10"><Link href="/package-builder">Build Service Package</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
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
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Icon className="w-7 h-7 text-accent" /></div>
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
              <div key={index} className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-3">{practice.title}</h3>
                <p className="text-muted-foreground">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Applications?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Schedule a consultation to explore how we can help you build security into your development process.</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white"><Link href="/contact">Schedule Free Consultation</Link></Button>
        </div>
      </section>

      <RelatedServices title="Enhance Your Security Posture" services={relatedServices} />
      <Footer />
    </div>
  );
}
