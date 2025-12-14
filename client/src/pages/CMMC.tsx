import { Award, CheckCircle2, FileText, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';

const services = [
  {
    title: "Gap Assessment & Readiness",
    description: "Evaluate current cybersecurity posture against CMMC requirements, identifying gaps in security controls and prioritizing remediation activities.",
    icon: FileText
  },
  {
    title: "Security Controls Implementation",
    description: "Implement required CMMC practices across IT infrastructure, networks, and operational processes to address identified gaps.",
    icon: Shield
  },
  {
    title: "Documentation & Policies",
    description: "Document security controls, policies, and procedures aligned with CMMC requirements and NIST SP 800-171.",
    icon: FileText
  },
  {
    title: "Assessment Preparation",
    description: "Prepare for CMMC Third Party Assessment Organization (C3PAO) assessment, including evidence collection and assessment coordination.",
    icon: Users
  },
  {
    title: "Ongoing Compliance Support",
    description: "Support ongoing compliance maintenance and annual attestation requirements to maintain CMMC certification.",
    icon: CheckCircle2
  }
];

const caseStudy = {
  title: "Mid-Sized Defense Contractor: CMMC Level 2 Certification",
  challenge: "A defense contractor with $120M in annual DoD contracts needed CMMC Level 2 certification to maintain contract eligibility. Initial assessment identified significant gaps in security controls implementation and documentation.",
  results: [
    "CMMC Level 2 certification achieved in 6 months",
    "Zero findings during C3PAO assessment",
    "Maintained $120M contract portfolio eligibility",
    "Positioned for growth in DoD market"
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
              Expert consulting to help defense contractors achieve CMMC Level 2 and Level 3 compliance through comprehensive gap analysis, controls implementation, and audit preparation.
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Explore Our CMMC Compliance Methodology</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Unlike typical technical approaches to CMMC assessments, our approach prioritizes scoping, identifying DoD FCI and CUI handling requirements. Failing to do so can lead to CMMC assessment success without actual contract compliance. It is possible to pass a CMMC assessment and achieve a NIST 800-171 score of 110, yet still be non-compliant with the contract if contractual CUI handling requirements were never initially validated. This can include performing upfront DoD contract analyses where available. This refined scope of work increases compliance success.
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
                    Basic cyber hygiene practices to protect Federal Contract Information (FCI). Suitable for contractors handling only FCI without CUI.
                  </p>
                  <p className="text-sm text-slate-500">Assessment Method: Annual self-assessment</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50/20">
                <CardHeader>
                  <CardTitle className="text-slate-900">Level 2: Advanced (110 practices)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Implements NIST SP 800-171 security requirements to protect Controlled Unclassified Information (CUI). Required for most DoD contractors handling CUI.
                  </p>
                  <p className="text-sm text-slate-500">Assessment Method: Third-party assessment by C3PAO (triennial) + annual self-attestation</p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Level 3: Expert (130 practices)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Advanced and progressive cybersecurity practices to protect CUI against Advanced Persistent Threats (APTs). Required for high-priority programs and critical national security information.
                  </p>
                  <p className="text-sm text-slate-500">Assessment Method: Government-led assessment</p>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">CMMC Consulting Services</h2>
            <p className="text-xl text-slate-600 mb-12">
              Comprehensive support throughout your CMMC certification journey
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="border-slate-200 hover:border-blue-300 transition-colors">
                    <CardHeader>
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg text-slate-900">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-sm">{service.description}</p>
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
