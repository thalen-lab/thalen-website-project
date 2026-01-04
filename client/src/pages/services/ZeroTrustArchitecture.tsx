import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ZeroTrustArchitecture() {
  const ztPillars = [
    {
      title: "Identity",
      description: "Strong identity verification with multi-factor authentication, continuous validation, and risk-based access policies.",
      capabilities: ["MFA/PIV authentication", "Continuous verification", "Risk-based policies", "Identity governance"]
    },
    {
      title: "Devices",
      description: "Device compliance validation, health attestation, and endpoint security before granting network access.",
      capabilities: ["Device compliance", "Health attestation", "Endpoint security", "Mobile device management"]
    },
    {
      title: "Network",
      description: "Micro-segmentation, encrypted communications, and software-defined perimeters to prevent lateral movement.",
      capabilities: ["Micro-segmentation", "Encrypted traffic", "Software-defined perimeter", "Network access control"]
    },
    {
      title: "Data",
      description: "Data classification, encryption at rest and in transit, and data loss prevention to protect sensitive information.",
      capabilities: ["Data classification", "Encryption (FIPS 140-2)", "Data loss prevention", "Rights management"]
    },
    {
      title: "Applications",
      description: "Application-level security controls, API security, and secure software development lifecycle practices.",
      capabilities: ["Application security", "API protection", "Secure SDLC", "Container security"]
    },
    {
      title: "Visibility & Analytics",
      description: "Comprehensive logging, behavioral analytics, and threat intelligence to detect and respond to anomalies.",
      capabilities: ["Centralized logging", "Behavioral analytics", "Threat intelligence", "Automated response"]
    }
  ];

  const implementationPhases = [
    {
      phase: "Assessment & Planning",
      description: "Evaluate current architecture, identify trust boundaries, and develop Zero Trust roadmap aligned with NIST 800-207.",
      deliverables: ["Current state assessment", "Trust boundary mapping", "Zero Trust roadmap", "Resource planning"]
    },
    {
      phase: "Identity & Access Foundation",
      description: "Implement strong identity controls, MFA, and privileged access management as the foundation of Zero Trust.",
      deliverables: ["MFA deployment", "PAM implementation", "Identity governance", "Access policies"]
    },
    {
      phase: "Network Segmentation",
      description: "Deploy micro-segmentation, software-defined perimeters, and encrypted communications to isolate resources.",
      deliverables: ["Micro-segmentation", "SDP deployment", "Network policies", "Encrypted tunnels"]
    },
    {
      phase: "Continuous Monitoring & Optimization",
      description: "Enable comprehensive logging, behavioral analytics, and continuous policy refinement based on threat intelligence.",
      deliverables: ["SIEM integration", "Analytics deployment", "Policy optimization", "Threat response"]
    }
  ];

  const ztFrameworks = [
    "NIST SP 800-207",
    "DoD Zero Trust Reference Architecture",
    "CISA Zero Trust Maturity Model",
    "NSA Zero Trust Guidance",
    "Google BeyondCorp",
    "Forrester Zero Trust eXtended (ZTX)"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url(/img/pattern-dark.svg)] bg-center [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        <div className="container relative">
          <div className="max-w-4xl">
            <Breadcrumb 
              items={[
                { label: "Cybersecurity & Compliance", href: "/services/cybersecurity" },
                { label: "Zero Trust Architecture" }
              ]}
              className="text-white/80 hover:text-white mb-4"
            />
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              NIST 800-207 • DoD Zero Trust
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Zero Trust Architecture
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Implement modern Zero Trust security framework with micro-segmentation, continuous verification, and least-privilege access controls. NexDyne Technology delivers NIST 800-207 and DoD Zero Trust Reference Architecture implementations for government agencies (federal, state, local) eliminating implicit trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Schedule Zero Trust Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                Download Zero Trust Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Trust Pillars */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Core Principles</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Six Pillars of Zero Trust</h2>
            <p className="text-xl text-slate-600">
              Comprehensive Zero Trust implementation across identity, devices, networks, data, applications, and visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ztPillars.map((pillar, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{pillar.title}</h3>
                    <p className="text-slate-600 mb-6">{pillar.description}</p>
                    <ul className="space-y-3">
                      {pillar.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                          <span>{capability}</span>
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

      {/* Implementation Phases */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Zero Trust Implementation Roadmap</h2>
            <p className="text-xl text-slate-600">
              Phased approach to Zero Trust adoption minimizing disruption while maximizing security improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {implementationPhases.map((phase, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-[oklch(0.22_0.06_250)] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)]">{phase.phase}</h3>
                  </div>
                  <p className="text-slate-600 mb-6">{phase.description}</p>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-semibold mb-3 text-sm text-[oklch(0.20_0.05_250)]">Key Deliverables:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-1.5 mr-2"></span>
                          <span>{deliverable}</span>
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

      {/* Zero Trust Frameworks */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Compliance</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Zero Trust Frameworks & Standards</h2>
            <p className="text-xl text-slate-600">
              Implementation aligned with government (federal, state, local) and industry Zero Trust frameworks and best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {ztFrameworks.map((framework, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center flex flex-col justify-center h-full">
                  <p className="font-semibold text-[oklch(0.20_0.05_250)]">{framework}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Outcomes</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Zero Trust Security Benefits</h2>
            <p className="text-xl text-slate-600">
              Measurable security improvements from Zero Trust architecture implementation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: "90%", label: "Reduction in Lateral Movement" },
              { metric: "80%", label: "Faster Breach Detection" },
              { metric: "70%", label: "Reduced Attack Surface" },
              { metric: "100%", label: "NIST 800-207 Alignment" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">{item.metric}</div>
                <div className="text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Implement Zero Trust Security</h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a Zero Trust assessment and discover how NexDyne Technology can help you eliminate implicit trust and implement modern security architecture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Schedule Zero Trust Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
              View Zero Trust Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
