import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { CheckCircle2, Shield, Target, Award, FileCheck, TrendingUp, ArrowRight } from "lucide-react";

export default function CMMC() {
  const levels = [
    {
      level: "Level 1",
      title: "Foundational",
      description: "Basic cyber hygiene practices to protect Federal Contract Information (FCI)",
      controls: "17 practices",
      suitable: "Contractors handling FCI only"
    },
    {
      level: "Level 2",
      title: "Advanced",
      description: "Intermediate cyber hygiene practices to protect Controlled Unclassified Information (CUI)",
      controls: "110 practices",
      suitable: "Most DoD contractors handling CUI"
    },
    {
      level: "Level 3",
      title: "Expert",
      description: "Advanced/progressive cybersecurity practices for protecting CUI from Advanced Persistent Threats (APTs)",
      controls: "130 practices",
      suitable: "Critical national security programs"
    }
  ];

  const services = [
    {
      icon: Target,
      title: "CMMC Gap Assessment",
      description: "Comprehensive evaluation of your current cybersecurity posture against CMMC requirements, identifying gaps and prioritizing remediation efforts.",
      deliverables: ["Detailed gap analysis", "Prioritized remediation roadmap", "Cost and timeline estimates", "Quick wins identification"]
    },
    {
      icon: Shield,
      title: "Security Controls Implementation",
      description: "Technical implementation of required CMMC practices across your IT infrastructure, networks, and operational processes.",
      deliverables: ["Implemented security controls", "Configuration documentation", "Policy and procedure templates", "Employee training materials"]
    },
    {
      icon: FileCheck,
      title: "System Security Plan (SSP) Development",
      description: "Complete documentation of your security controls, policies, and procedures aligned with CMMC requirements and NIST SP 800-171.",
      deliverables: ["Comprehensive SSP", "Control implementation descriptions", "Network diagrams", "Data flow documentation"]
    },
    {
      icon: Award,
      title: "C3PAO Assessment Preparation",
      description: "End-to-end preparation for your CMMC Third Party Assessment Organization (C3PAO) assessment, including evidence collection and mock assessments.",
      deliverables: ["Evidence packages", "Mock assessment", "Finding remediation", "Assessment coordination"]
    },
    {
      icon: TrendingUp,
      title: "Continuous Compliance Monitoring",
      description: "Ongoing monitoring and maintenance of your CMMC compliance posture with automated tools and regular assessments.",
      deliverables: ["Continuous monitoring platform", "Monthly compliance reports", "Annual re-assessment support", "Change management"]
    },
    {
      icon: Shield,
      title: "Supply Chain Security",
      description: "Assessment and enhancement of your supply chain cybersecurity, ensuring subcontractors meet CMMC requirements.",
      deliverables: ["Supply chain risk assessment", "Subcontractor compliance verification", "Flow-down requirements", "Vendor management framework"]
    }
  ];

  const domains = [
    { name: "Access Control", practices: "AC.1.001 - AC.2.016" },
    { name: "Awareness and Training", practices: "AT.2.056 - AT.2.057" },
    { name: "Audit and Accountability", practices: "AU.2.041 - AU.2.046" },
    { name: "Configuration Management", practices: "CM.2.061 - CM.2.065" },
    { name: "Identification and Authentication", practices: "IA.1.076 - IA.2.081" },
    { name: "Incident Response", practices: "IR.2.092 - IR.2.096" },
    { name: "Maintenance", practices: "MA.2.111 - MA.2.113" },
    { name: "Media Protection", practices: "MP.2.118 - MP.2.121" },
    { name: "Personnel Security", practices: "PS.2.127 - PS.2.128" },
    { name: "Physical Protection", practices: "PE.2.134 - PE.2.137" },
    { name: "Recovery", practices: "RE.2.137 - RE.2.139" },
    { name: "Risk Management", practices: "RM.2.141 - RM.2.143" },
    { name: "Security Assessment", practices: "CA.2.157 - CA.2.159" },
    { name: "Situational Awareness", practices: "SA.2.163 - SA.2.165" },
    { name: "System and Communications Protection", practices: "SC.1.175 - SC.2.179" },
    { name: "System and Information Integrity", practices: "SI.1.210 - SI.2.216" }
  ];

  const caseStudy = {
    title: "Defense Contractor Achieves CMMC Level 2 Certification in 6 Months",
    challenge: "A mid-sized defense contractor needed CMMC Level 2 certification to maintain eligibility for DoD contracts worth $120M annually but had significant cybersecurity gaps.",
    solution: "NexDyne conducted a comprehensive gap assessment, implemented 110 required practices across their infrastructure, developed complete documentation, and prepared them for successful C3PAO assessment.",
    results: [
      "Achieved CMMC Level 2 certification in 6 months",
      "Implemented 110 security practices across all domains",
      "Passed C3PAO assessment with zero findings",
      "Maintained eligibility for $120M in annual DoD contracts",
      "Reduced cybersecurity risk by 85%",
      "Established continuous monitoring program"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              Defense Industrial Base Security
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              CMMC Compliance Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Achieve and maintain Cybersecurity Maturity Model Certification (CMMC) compliance with our comprehensive assessment, implementation, and certification support services. Protect your DoD contracts and strengthen your cybersecurity posture.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule CMMC Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Download CMMC Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative diagonal cut */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 40%, 0 100%)' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-slate-600">CMMC Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">6 Months</div>
              <div className="text-slate-600">Average Time to Certification</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-slate-600">First-Time Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">$450M+</div>
              <div className="text-slate-600">Contracts Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CMMC Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">What is CMMC?</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p>
                The Cybersecurity Maturity Model Certification (CMMC) is a unified standard for implementing cybersecurity across the Defense Industrial Base (DIB). CMMC is designed to protect Federal Contract Information (FCI) and Controlled Unclassified Information (CUI) within the supply chain.
              </p>
              <p>
                CMMC certification is required for all Department of Defense contractors and subcontractors. The framework combines various cybersecurity standards and best practices, including NIST SP 800-171, and maps them to a series of processes and practices across several maturity levels.
              </p>
              <p>
                Unlike self-attestation approaches, CMMC requires third-party assessment by certified CMMC Third Party Assessment Organizations (C3PAOs), ensuring objective verification of cybersecurity practices and providing DoD with confidence in contractor security postures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CMMC Levels Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">CMMC Maturity Levels</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              CMMC consists of three levels, each building upon the previous to provide progressively advanced cybersecurity protection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100">
                    {level.level}
                  </Badge>
                  <CardTitle className="text-2xl text-slate-900">{level.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{level.description}</p>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-sm font-semibold text-slate-700 mb-1">Security Practices</div>
                    <div className="text-2xl font-bold text-blue-600">{level.controls}</div>
                  </div>
                  <div className="pt-2">
                    <div className="text-sm font-semibold text-slate-700 mb-1">Suitable For</div>
                    <div className="text-sm text-slate-600">{level.suitable}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our CMMC Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end CMMC compliance support, from initial gap assessment to certification and ongoing maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-slate-200 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-slate-700">Key Deliverables:</div>
                    {service.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">CMMC Security Domains</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              CMMC Level 2 encompasses 110 practices across 17 security domains aligned with NIST SP 800-171.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((domain, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">{domain.name}</div>
                      <div className="text-sm text-slate-500">{domain.practices}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
              Success Story
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{caseStudy.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">The Challenge</h3>
                <p className="text-slate-600">{caseStudy.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Our Solution</h3>
                <p className="text-slate-600">{caseStudy.solution}</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Results Achieved</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Protect Your DoD Contracts with CMMC Certification</h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't risk losing valuable DoD contracts. Our CMMC experts will assess your current posture, implement required controls, and guide you to successful certification.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Download CMMC Checklist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
