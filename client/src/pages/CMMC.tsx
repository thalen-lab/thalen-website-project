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
      title: "Contract Analysis & Scope Definition",
      description: "Review DoD contracts and task orders to identify Federal Contract Information (FCI) and Controlled Unclassified Information (CUI) handling requirements, establishing the appropriate assessment scope.",
      deliverables: ["Contract review documentation", "CUI identification analysis", "Assessment scope definition", "Flow-down requirements mapping"]
    },
    {
      icon: Target,
      title: "Gap Assessment",
      description: "Evaluate current cybersecurity posture against CMMC requirements, identifying gaps in security controls and prioritizing remediation activities.",
      deliverables: ["Gap analysis report", "Prioritized remediation roadmap", "Implementation timeline", "Resource requirements"]
    },
    {
      icon: Shield,
      title: "Security Controls Implementation",
      description: "Implement required CMMC practices across IT infrastructure, networks, and operational processes to address identified gaps.",
      deliverables: ["Implemented security controls", "Configuration documentation", "Policy and procedure templates", "Training materials"]
    },
    {
      icon: FileCheck,
      title: "System Security Plan (SSP) Development",
      description: "Document security controls, policies, and procedures aligned with CMMC requirements and NIST SP 800-171.",
      deliverables: ["System Security Plan", "Control implementation descriptions", "Network diagrams", "Data flow documentation"]
    },
    {
      icon: Award,
      title: "C3PAO Assessment Preparation",
      description: "Prepare for CMMC Third Party Assessment Organization (C3PAO) assessment, including evidence collection and assessment coordination.",
      deliverables: ["Evidence packages", "Assessment readiness review", "Finding remediation support", "Assessment coordination"]
    },
    {
      icon: TrendingUp,
      title: "Annual Attestation Support",
      description: "Support ongoing compliance maintenance and annual attestation requirements to maintain CMMC certification.",
      deliverables: ["Compliance monitoring", "Annual attestation preparation", "Change management support", "Evidence management"]
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
    title: "Mid-Sized Defense Contractor: CMMC Level 2 Certification",
    challenge: "A defense contractor with $120M in annual DoD contracts needed CMMC Level 2 certification to maintain contract eligibility. Initial assessment identified significant gaps in security controls implementation and documentation.",
    solution: "NexDyne conducted contract analysis to define assessment scope, performed gap assessment across all 110 required practices, implemented remediation plan, developed System Security Plan documentation, and coordinated C3PAO assessment.",
    results: [
      "CMMC Level 2 certification achieved in 6 months",
      "110 security practices implemented across 17 domains",
      "C3PAO assessment completed with zero findings",
      "Contract eligibility maintained for $120M annual revenue",
      "Continuous monitoring program established"
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
              Cybersecurity Maturity Model Certification
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              CMMC Consulting Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Supporting federal contractors and subcontractors through the Cybersecurity Maturity Model Certification process to meet DoD requirements and maintain contract eligibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Download Implementation Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative diagonal cut */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 40%, 0 100%)' }}></div>
      </section>

      {/* What is CMMC Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Understanding CMMC</h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-4">
              <p>
                The Cybersecurity Maturity Model Certification (CMMC) is a unified standard for implementing cybersecurity across the Defense Industrial Base (DIB). The Department of Defense developed CMMC to protect Federal Contract Information (FCI) and Controlled Unclassified Information (CUI) within the defense supply chain.
              </p>
              <p>
                CMMC certification is required for Department of Defense contractors and subcontractors. The framework incorporates cybersecurity standards and best practices, including NIST SP 800-171, mapped to processes and practices across maturity levels.
              </p>
              <p>
                Unlike self-attestation approaches, CMMC requires third-party assessment by certified CMMC Third Party Assessment Organizations (C3PAOs), providing objective verification of cybersecurity practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Context Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Regulatory Framework</h2>
            
            <div className="space-y-6">
              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white p-3 rounded-lg">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">32 CFR Part 170</h3>
                      <p className="text-slate-700 mb-3">
                        The Department of Defense published the final CMMC rule in the Federal Register, effective December 16, 2024. This regulation establishes CMMC as a requirement for DoD contractors handling Federal Contract Information (FCI) and Controlled Unclassified Information (CUI).
                      </p>
                      <p className="text-slate-700">
                        Under 32 CFR Part 170, organizations must achieve the CMMC level corresponding to the type of information they handle. CMMC requirements will be phased into DoD contracts over 12-24 months, with high-priority programs requiring certification first.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-600 text-white p-3 rounded-lg">
                      <FileCheck className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">DFARS 252.204-7021</h3>
                      <p className="text-slate-700 mb-3">
                        The Defense Federal Acquisition Regulation Supplement (DFARS) clause 252.204-7021 requires contractors to maintain a current CMMC certificate at the level specified in the contract. This clause is being incorporated into new DoD solicitations and contract modifications.
                      </p>
                      <p className="text-slate-700">
                        Contractors must maintain CMMC certification throughout the contract performance period and provide certification evidence to the Contracting Officer upon request.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 text-white p-3 rounded-lg">
                      <Target className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">SPRS Self-Assessment & Annual Attestation</h3>
                      <p className="text-slate-700 mb-3">
                        Organizations handling CUI conduct annual self-assessments using the Supplier Performance Risk System (SPRS). These assessments evaluate implementation of NIST SP 800-171 security requirements.
                      </p>
                      <p className="text-slate-700 mb-3">
                        After achieving CMMC Level 2 certification, organizations must submit annual attestations confirming continued compliance with all 110 security practices. Failure to maintain compliance can result in certificate suspension or revocation.
                      </p>
                      <p className="text-sm text-slate-600 bg-white p-4 rounded border border-slate-200">
                        <strong>Note:</strong> Organizations can pass a CMMC assessment but remain non-compliant if contractual CUI requirements were not properly validated during scoping. Contract analysis before assessment scope definition helps ensure alignment between certification and contractual obligations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">CMMC Compliance Methodology</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our approach prioritizes contract analysis and scope definition to ensure CMMC certification aligns with DoD contractual requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-900">
                    <div className="bg-red-100 text-red-700 p-2 rounded">
                      <span className="text-2xl">⚠️</span>
                    </div>
                    Common Compliance Gap
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Organizations can pass CMMC assessments but remain non-compliant when assessment scope does not cover all CUI flows identified in DoD contracts.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Assessment scope defined without contract review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>CUI identification based on assumptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Systems handling CUI excluded from assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Certification achieved without full contract compliance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-900">
                    <div className="bg-green-100 text-green-700 p-2 rounded">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    Contract-First Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    We begin engagements with DoD contract analysis to identify CUI requirements and establish assessment scope that addresses contractual obligations.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Review DoD contracts and task orders for CUI clauses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Map CUI flows across organizational systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Define assessment scope covering contractual obligations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Align certification scope with contract requirements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Implementation Process</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                    <h4 className="font-bold text-slate-900 mb-2">Contract Analysis</h4>
                    <p className="text-sm text-slate-600">Review DoD contracts, identify CUI requirements, map information flows</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                    <h4 className="font-bold text-slate-900 mb-2">Gap Assessment</h4>
                    <p className="text-sm text-slate-600">Evaluate current security posture, identify gaps, prioritize remediation</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                    <h4 className="font-bold text-slate-900 mb-2">Implementation</h4>
                    <p className="text-sm text-slate-600">Implement security controls, develop documentation, prepare evidence</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                    <h4 className="font-bold text-slate-900 mb-2">Assessment</h4>
                    <p className="text-sm text-slate-600">Coordinate C3PAO assessment, address findings, obtain certification</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Experience & Credentials</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-900">
                    <Award className="h-6 w-6 text-blue-600" />
                    Cyber AB Registered Practitioner Organization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    NexDyne Technologies is a Cyber AB Registered Practitioner Organization (RPO) with credentialed CMMC consultants authorized to provide advisory services to organizations pursuing CMMC certification.
                  </p>
                  <p className="text-slate-600">
                    Our consultants have completed training and maintain current knowledge of CMMC requirements, assessment processes, and implementation practices as validated by the Cyber Accreditation Body.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-900">
                    <Shield className="h-6 w-6 text-blue-600" />
                    Federal Cybersecurity Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Our team has supported CMMC certifications across defense contractors, from small subcontractors to large prime contractors.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>15+ years federal cybersecurity experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>NIST 800-171 and FedRAMP expertise</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Defense Industrial Base sector knowledge</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CMMC Levels Section */}
      <section className="py-20 bg-white">
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
                    <div className="text-sm font-semibold text-slate-700 mb-1">Applicable To</div>
                    <div className="text-sm text-slate-600">{level.suitable}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">CMMC Consulting Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive support from contract analysis through certification and ongoing compliance maintenance.
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
                    <div className="text-sm font-semibold text-slate-700">Deliverables:</div>
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
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">CMMC Level 2 Security Domains</h2>
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
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
              Implementation Example
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{caseStudy.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Situation</h3>
                <p className="text-slate-600">{caseStudy.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Approach</h3>
                <p className="text-slate-600">{caseStudy.solution}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Outcome</h3>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Begin Your CMMC Certification?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to discuss your CMMC requirements and timeline. Our team can assess your current security posture and develop an implementation roadmap aligned with your DoD contracts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Download CMMC Resources
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
