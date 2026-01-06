import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function SecurityAssessment() {
  const capabilities = [
    {
      title: "FedRAMP Assessment & Authorization",
      description:
        "End-to-end FedRAMP assessment support from readiness to ATO, including SSP development, control implementation, and continuous monitoring.",
      benefits: [
        "FedRAMP readiness assessment",
        "SSP development & review",
        "3PAO coordination",
        "ATO package preparation",
      ],
    },
    {
      title: "CMMC Certification Support",
      description:
        "Comprehensive CMMC Level 1-3 certification support with gap analysis, remediation planning, and C3PAO assessment coordination.",
      benefits: [
        "CMMC gap analysis",
        "Level 1-3 preparation",
        "SSP/POAM development",
        "C3PAO coordination",
      ],
    },
    {
      title: "NIST 800-53/171 Compliance",
      description:
        "NIST framework implementation and assessment for government agencies (800-53) and defense contractors (800-171) across federal, state, and local levels.",
      benefits: [
        "Control implementation",
        "Compliance gap analysis",
        "POA&M management",
        "Continuous monitoring",
      ],
    },
    {
      title: "ISO 27001 Certification",
      description:
        "International information security management system (ISMS) implementation and certification support for global operations.",
      benefits: [
        "ISMS implementation",
        "Risk assessment",
        "Internal audits",
        "Certification support",
      ],
    },
  ];

  const assessmentProcess = [
    {
      phase: "Readiness Assessment",
      description:
        "Evaluate current security posture against target framework requirements and identify compliance gaps.",
      deliverables: [
        "Gap analysis report",
        "Compliance scorecard",
        "Risk assessment",
        "Remediation roadmap",
      ],
    },
    {
      phase: "Remediation Planning",
      description:
        "Develop detailed remediation plan with prioritized actions, timelines, and resource requirements.",
      deliverables: [
        "Remediation plan",
        "POA&M document",
        "Resource estimates",
        "Implementation timeline",
      ],
    },
    {
      phase: "Control Implementation",
      description:
        "Implement security controls, policies, and procedures to meet framework requirements.",
      deliverables: [
        "Security policies",
        "Control implementation",
        "Evidence collection",
        "Documentation",
      ],
    },
    {
      phase: "Assessment & Authorization",
      description:
        "Coordinate third-party assessment and support authorization process through to ATO/certification.",
      deliverables: [
        "Assessment coordination",
        "Evidence packages",
        "ATO support",
        "Certification achievement",
      ],
    },
  ];

  const frameworks = [
    "FedRAMP (Low, Moderate, High)",
    "CMMC (Level 1, 2, 3)",
    "NIST 800-53 (Rev 5)",
    "NIST 800-171 (Rev 2)",
    "ISO 27001:2022",
    "SOC 2 Type II",
    "FISMA",
    "HIPAA/HITECH",
    "PCI DSS",
    "StateRAMP",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cybersecurity/cmmc-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="container relative">
          <div className="max-w-4xl">
            <Breadcrumb
              items={[
                {
                  label: "Cybersecurity & Compliance",
                  href: "/services/cybersecurity",
                },
                { label: "Security Assessment & Compliance" },
              ]}
              className="text-white/80 hover:text-white mb-4"
            />
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              FedRAMP Authorized • CMMC Expert
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Security Assessment & Compliance
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              We help government agencies (federal, state, local) and defense
              contractors achieve FedRAMP, StateRAMP, CMMC, and NIST compliance
              through expert gap assessments, security controls implementation,
              and ATO package preparation. Our proven methodology reduces typical
              12-18 month timelines to 6-9 months while ensuring first-time
              assessment success.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button
                size="lg"
                className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90"
              >
                Schedule Readiness Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]"
              >
                Download Compliance Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">
              Why Choose Thalen Technologies
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Expertise in Government & Defense Compliance
            </h2>
            <p className="text-xl text-slate-600">
              Unlike generic compliance consultants, we understand government
              authorization processes (FedRAMP, StateRAMP, CJIS), security
              clearances, and mission continuity imperatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 h-full hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {capability.description}
                    </p>
                    <ul className="space-y-2">
                      {capability.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600">
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

      {/* Assessment Process */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">
              Our Methodology
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Our Assessment Process
            </h2>
            <p className="text-xl text-slate-600">
              Structured, repeatable methodology ensuring successful compliance
              achievement with minimal business disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {assessmentProcess.map((step, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-[oklch(0.22_0.06_250)] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)]">
                      {step.phase}
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6">{step.description}</p>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-semibold mb-3 text-sm text-[oklch(0.20_0.05_250)]">
                      Key Deliverables:
                    </h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600">
                           <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Frameworks */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">
              Compliance Frameworks
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Supported Compliance Frameworks
            </h2>
            <p className="text-xl text-slate-600">
              Expert assessment and certification support across all major
              government security frameworks (FedRAMP, StateRAMP, CMMC, CJIS).
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {frameworks.map((framework, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-3 sm:p-4 md:p-6 text-center flex flex-col items-center justify-center h-full">
                  <div className="text-sm font-semibold text-[oklch(0.20_0.05_250)]">
                    {framework}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Achieve Compliance?
          </h2>
          <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            Start with a comprehensive readiness assessment and discover how
            Thalen Technologies can accelerate your path to FedRAMP, StateRAMP,
            CMMC, or NIST compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90"
            >
              Schedule Readiness Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]"
            >
              View Compliance Case Studies
            </Button>
          </div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
