import { Award, CheckCircle2, FileText, Shield, Users, Search, Settings, Network, TestTube, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';

const services = [
  {
    title: "Contractual Requirements Analysis",
    description: "Identify DoD contractual obligations for Federal Contract Information (FCI) and Controlled Unclassified Information (CUI) handling. Analyze prime and subcontractor flow-down requirements to ensure proper scoping before assessment.",
    icon: Search,
    levels: "All Levels"
  },
  {
    title: "Contract Compliance Strategy Development",
    description: "Develop comprehensive compliance strategies aligned with your contract portfolio, including certification timelines for prime contractors and subcontractors. Establish roadmaps for achieving required CMMC levels.",
    icon: Scale,
    levels: "All Levels"
  },
  {
    title: "Readiness Assessment & Self-Assessment Support",
    description: "Assess organizational readiness for CMMC Level 1, Level 2, or Level 3 certification. Support self-assessment processes including control testing, gap identification, and evidence collection against all applicable security practices.",
    icon: FileText,
    levels: "Level 1, 2, 3"
  },
  {
    title: "Gap Remediation & Security Program Development",
    description: "Provide guidance on security control system design, security program development, and implementation of technical and administrative controls. Address identified gaps with prioritized remediation plans aligned with certification timelines.",
    icon: Settings,
    levels: "Level 2, 3"
  },
  {
    title: "Third-Party & Supply Chain Management",
    description: "Assist prime contractors with subcontractor compliance management, including scoping support, flow-down requirement implementation, and auditing subcontractor CMMC compliance status throughout the supply chain.",
    icon: Network,
    levels: "All Levels"
  },
  {
    title: "Technical Security Evaluations",
    description: "Perform comprehensive technical assessments including vulnerability scanning, penetration testing, web application security testing, and network security evaluations to validate control effectiveness before C3PAO assessment.",
    icon: TestTube,
    levels: "Level 2, 3"
  },
  {
    title: "C3PAO Assessment Preparation",
    description: "Prepare for CMMC Third Party Assessment Organization (C3PAO) assessment with evidence collection, artifact review, control validation, and mock assessments. Coordinate with C3PAOs and manage assessment logistics.",
    icon: Users,
    levels: "Level 2, 3"
  },
  {
    title: "Ongoing Compliance & Annual Attestation",
    description: "Support continuous compliance monitoring, annual attestation preparation, and compliance maintenance activities. Provide ongoing advisory services to maintain certification status and address evolving threats.",
    icon: CheckCircle2,
    levels: "Level 2, 3"
  }
];

const caseStudy = {
  title: "Mid-Sized Defense Contractor: CMMC Level 2 Certification",
  challenge: "A defense contractor with $120M in annual DoD contracts needed CMMC Level 2 certification to maintain contract eligibility. Initial contract analysis revealed CUI handling requirements across 15 active contracts with varying scoping needs. The organization faced significant gaps in security controls, inadequate documentation, and unclear subcontractor compliance requirements.",
  results: [
    "CMMC Level 2 certification achieved in 7 months following contract-first methodology",
    "Zero findings during C3PAO assessment with comprehensive evidence package",
    "Subcontractor compliance program established for 8 key suppliers",
    "Vulnerability assessment identified and remediated 47 security gaps pre-assessment",
    "Maintained $120M contract portfolio eligibility and positioned for $45M in new opportunities"
  ]
};

export default function CMMC() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bTAtMzZjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Defense Industrial Base Cybersecurity</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              CMMC Consulting Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive CMMC consulting services for defense contractors pursuing Level 1, Level 2, and Level 3 certification. From contractual requirements analysis and technical security evaluations to supply chain management and C3PAO assessment preparation, we deliver end-to-end compliance support aligned with your DoD contract obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/government">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule Assessment
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Download CMMC Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is CMMC Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Understanding CMMC</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                The Cybersecurity Maturity Model Certification (CMMC) is a unified standard for implementing cybersecurity across the Defense Industrial Base (DIB). The Department of Defense developed CMMC to protect Federal Contract Information (FCI) and Controlled Unclassified Information (CUI) within the defense supply chain.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                CMMC certification is required for Department of Defense contractors and subcontractors. The framework incorporates cybersecurity standards and best practices, including NIST SP 800-171, mapped to processes and practices across maturity levels.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Unlike self-attestation approaches, CMMC requires third-party assessment by certified CMMC Third Party Assessment Organizations (C3PAOs), providing objective verification of cybersecurity practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Updates */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">CMMC Regulatory Status</h2>
            
            <div className="space-y-6">
              <Card className="border-blue-200 bg-blue-50/30">
                <CardHeader>
                  <CardTitle className="text-slate-900">Final Rule Published (December 2024)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    The Department of Defense published the final CMMC rule in the Federal Register, effective December 16, 2024. This regulation establishes CMMC as a requirement for DoD contractors handling Federal Contract Information (FCI) and Controlled Unclassified Information (CUI).
                  </p>
                  <p className="text-slate-700 leading-relaxed mt-4">
                    Under 32 CFR Part 170, organizations must achieve the CMMC level corresponding to the type of information they handle. CMMC requirements will be phased into DoD contracts over 12-24 months, with high-priority programs requiring certification first.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">DFARS Clause 252.204-7021</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    The Defense Federal Acquisition Regulation Supplement (DFARS) clause 252.204-7021 requires contractors to maintain a current CMMC certificate at the level specified in the contract. This clause is being incorporated into new DoD solicitations and contract modifications.
                  </p>
                  <p className="text-slate-700 leading-relaxed mt-4">
                    Contractors must maintain CMMC certification throughout the contract performance period and provide certification evidence to the Contracting Officer upon request.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Annual Attestation Requirement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    After achieving CMMC Level 2 certification, organizations must submit annual attestations confirming continued compliance with all 110 security practices. Failure to maintain compliance can result in certificate suspension or revocation.
                  </p>
                  <p className="text-slate-700 leading-relaxed mt-4">
                    <strong>Note:</strong> Organizations can pass a CMMC assessment but remain non-compliant if contractual CUI requirements were not properly validated during scoping. Contract analysis before assessment scope definition helps ensure alignment between certification and contractual obligations.
                  </p>
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Contract-First CMMC Methodology</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our methodology begins with contractual requirements analysis—not technical assessments. We identify DoD Federal Contract Information (FCI) and Controlled Unclassified Information (CUI) handling obligations before defining assessment scope. This contract-first approach prevents a critical failure mode: achieving CMMC certification while remaining non-compliant with actual contractual obligations. Organizations can pass C3PAO assessments and achieve perfect NIST 800-171 scores, yet still violate contract terms if CUI requirements were improperly scoped. Our upfront contract analysis ensures certification aligns with your actual compliance obligations.
              </p>
            </div>

            <div className="mb-12">
              <p className="text-lg text-slate-600 mb-8">
                This approach allows us to tailor services to provide:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">NIST 800-171 assessment services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">CMMC Level 1 self-assessment support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">CMMC Level 2 readiness</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Self-assessment support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Accurate CMMC documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
              <p className="text-slate-700 leading-relaxed">
                Upon successful awarding of a CMMC certification, we also provide ongoing support for the required annual attestation and subsequent contracting arrangements.
              </p>
            </div>
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
                  <p className="text-slate-600 leading-relaxed">
                    NexDyne Technologies is a Cyber AB Registered Practitioner Organization (RPO) with credentialed CMMC consultants authorized to provide advisory services to organizations pursuing CMMC certification.
                  </p>
                  <p className="text-slate-600 leading-relaxed mt-4">
                    Our consultants have completed training and maintain current knowledge of CMMC requirements, assessment processes, and implementation practices as validated by the Cyber Accreditation Body.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-900">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    Proven Track Record
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Our team has supported CMMC certifications across defense contractors, from small subcontractors to large prime contractors.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">15+ CMMC Level 2 certifications supported</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">100% assessment success rate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">Average 6-8 month implementation timeline</span>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">CMMC Maturity Levels</h2>
            <p className="text-xl text-slate-600 mb-12">
              CMMC consists of three levels, each building upon the previous to provide progressively advanced cybersecurity protection.
            </p>

            <div className="space-y-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Level 1: Foundational (17 practices)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Basic cyber hygiene practices to protect Federal Contract Information (FCI). Suitable for contractors handling only FCI without CUI. Implements foundational security controls including access control, identification and authentication, media protection, physical protection, system and communications protection, and system and information integrity.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-700">Assessment Method:</p>
                    <p className="text-sm text-slate-600">Annual self-assessment with affirmation statement</p>
                    <p className="text-sm font-semibold text-slate-700 mt-3">Typical Timeline:</p>
                    <p className="text-sm text-slate-600">2-4 months for implementation and self-assessment</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50/20">
                <CardHeader>
                  <CardTitle className="text-slate-900">Level 2: Advanced (110 practices)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Implements all NIST SP 800-171 security requirements to protect Controlled Unclassified Information (CUI). Required for most DoD contractors and subcontractors handling CUI. Encompasses 17 security domains including access control, incident response, risk assessment, security assessment, system and communications protection, and system and information integrity.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-700">Assessment Method:</p>
                    <p className="text-sm text-slate-600">Third-party assessment by certified C3PAO (triennial cycle) with annual self-attestation between assessments</p>
                    <p className="text-sm font-semibold text-slate-700 mt-3">Typical Timeline:</p>
                    <p className="text-sm text-slate-600">6-12 months for gap remediation, implementation, and C3PAO assessment</p>
                    <p className="text-sm font-semibold text-slate-700 mt-3">Contract Requirements:</p>
                    <p className="text-sm text-slate-600">DFARS clause 252.204-7021 requires Level 2 for contracts involving CUI</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Level 3: Expert (130 practices)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Advanced and progressive cybersecurity practices to protect CUI against Advanced Persistent Threats (APTs). Builds upon Level 2 with 20 additional practices focused on threat hunting, advanced monitoring, and proactive defense. Required for high-priority programs, critical national security information, and contracts explicitly requiring Level 3 certification.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-700">Assessment Method:</p>
                    <p className="text-sm text-slate-600">Government-led assessment by Defense Industrial Base Cybersecurity Assessment Center (DIBCAC) or authorized government assessors</p>
                    <p className="text-sm font-semibold text-slate-700 mt-3">Typical Timeline:</p>
                    <p className="text-sm text-slate-600">12-18 months for comprehensive implementation and government assessment</p>
                    <p className="text-sm font-semibold text-slate-700 mt-3">Contract Requirements:</p>
                    <p className="text-sm text-slate-600">Specified in individual contracts for critical programs and APT-targeted environments</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive CMMC Services</h2>
            <p className="text-xl text-slate-600 mb-12">
              End-to-end support from contract analysis through certification and ongoing compliance. Our services address the full spectrum of CMMC requirements across all certification levels, including technical evaluations, supply chain management, and strategic compliance planning.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="border-slate-200 hover:border-blue-300 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {service.levels}
                        </span>
                      </div>
                      <CardTitle className="text-lg text-slate-900">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Security Domains Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">CMMC Level 2 Security Domains</h2>
            <p className="text-xl text-slate-600 mb-12">
              CMMC Level 2 encompasses 110 practices across 17 security domains aligned with NIST SP 800-171.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Access Control (AC)',
                'Awareness and Training (AT)',
                'Audit and Accountability (AU)',
                'Configuration Management (CM)',
                'Identification and Authentication (IA)',
                'Incident Response (IR)',
                'Maintenance (MA)',
                'Media Protection (MP)',
                'Personnel Security (PS)',
                'Physical Protection (PE)',
                'Risk Assessment (RA)',
                'Security Assessment (CA)',
                'System and Communications Protection (SC)',
                'System and Information Integrity (SI)',
                'Planning (PL)',
                'Program Management (PM)',
                'Recovery (RE)'
              ].map((domain, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{domain}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Client Success Story</h2>
            
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">{caseStudy.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Challenge</h3>
                    <p className="text-slate-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-3">Results</h3>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Begin Your CMMC Certification?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to discuss your CMMC requirements and timeline. Our team can assess your current security posture and develop an implementation roadmap aligned with your DoD contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/government">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Download CMMC Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
