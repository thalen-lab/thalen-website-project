import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, FileCheck, Lock, AlertTriangle, CheckCircle2, FileText, Users, Clock } from 'lucide-react';

export default function ATOCompliance() {
  const complianceFrameworks = [
    {
      framework: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program for cloud services',
      levels: ['Low', 'Moderate', 'High'],
      controls: '300+ security controls',
      icon: Shield
    },
    {
      framework: 'FISMA',
      description: 'Federal Information Security Management Act requirements',
      levels: ['Low', 'Moderate', 'High'],
      controls: 'NIST 800-53 controls',
      icon: Lock
    },
    {
      framework: 'NIST 800-53',
      description: 'Security and Privacy Controls for Information Systems',
      levels: ['Rev 4', 'Rev 5'],
      controls: '1,000+ control enhancements',
      icon: FileCheck
    },
    {
      framework: 'CMMC',
      description: 'Cybersecurity Maturity Model Certification for DoD contractors',
      levels: ['Level 1', 'Level 2', 'Level 3'],
      controls: '171 practices (Level 3)',
      icon: AlertTriangle
    }
  ];

  const atoPhases = [
    {
      phase: 'Phase 1',
      title: 'Security Controls Identification',
      duration: '1-2 weeks',
      activities: [
        'Identify applicable security control baselines (NIST 800-53)',
        'Map RPA platform controls to agency requirements',
        'Document inherited controls from FedRAMP authorization',
        'Identify agency-specific control overlays'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'System Security Plan (SSP) Development',
      duration: '3-4 weeks',
      activities: [
        'Document system architecture and data flows',
        'Detail security control implementations',
        'Create system boundary diagrams',
        'Document roles, responsibilities, and access controls'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Security Assessment & Testing',
      duration: '4-6 weeks',
      activities: [
        'Conduct vulnerability scanning and penetration testing',
        'Perform security control assessments',
        'Document findings and remediation plans',
        'Generate Security Assessment Report (SAR)'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'ATO Package Submission & Authorization',
      duration: '2-4 weeks',
      activities: [
        'Compile complete ATO package for review',
        'Present to agency Authorizing Official (AO)',
        'Address AO questions and concerns',
        'Receive ATO decision and authorization letter'
      ]
    }
  ];

  const atoDocuments = [
    {
      document: 'System Security Plan (SSP)',
      description: 'Comprehensive documentation of security controls, system architecture, and implementation details.',
      pages: '150-300 pages',
      icon: FileText
    },
    {
      document: 'Security Assessment Report (SAR)',
      description: 'Independent assessment of security controls with findings, risks, and remediation recommendations.',
      pages: '50-100 pages',
      icon: FileCheck
    },
    {
      document: 'Plan of Action & Milestones (POA&M)',
      description: 'Tracking document for identified vulnerabilities with remediation timelines and responsible parties.',
      pages: '10-30 pages',
      icon: Clock
    },
    {
      document: 'Continuous Monitoring Plan',
      description: 'Ongoing security monitoring strategy including scanning schedules, metrics, and reporting procedures.',
      pages: '20-40 pages',
      icon: Shield
    },
    {
      document: 'Incident Response Plan',
      description: 'Procedures for detecting, responding to, and recovering from security incidents.',
      pages: '30-50 pages',
      icon: AlertTriangle
    },
    {
      document: 'Contingency Plan',
      description: 'Business continuity and disaster recovery procedures for RPA systems.',
      pages: '40-60 pages',
      icon: Users
    }
  ];

  const securityControls = [
    {
      family: 'Access Control (AC)',
      examples: ['AC-2: Account Management', 'AC-3: Access Enforcement', 'AC-6: Least Privilege'],
      rpaContext: 'Bot credentials, role-based access, privileged account management'
    },
    {
      family: 'Audit & Accountability (AU)',
      examples: ['AU-2: Audit Events', 'AU-6: Audit Review', 'AU-12: Audit Generation'],
      rpaContext: 'Bot activity logging, transaction auditing, compliance reporting'
    },
    {
      family: 'Identification & Authentication (IA)',
      examples: ['IA-2: User Identification', 'IA-5: Authenticator Management', 'IA-8: Identification'],
      rpaContext: 'Bot authentication, credential rotation, PIV/CAC integration'
    },
    {
      family: 'System & Communications Protection (SC)',
      examples: ['SC-7: Boundary Protection', 'SC-8: Transmission Confidentiality', 'SC-13: Cryptographic Protection'],
      rpaContext: 'Network segmentation, encrypted communications, data protection'
    },
    {
      family: 'System & Information Integrity (SI)',
      examples: ['SI-2: Flaw Remediation', 'SI-3: Malicious Code Protection', 'SI-4: System Monitoring'],
      rpaContext: 'Bot patching, malware protection, anomaly detection'
    }
  ];

  const governmentExperience = [
    {
      agency: 'Federal Civilian Agency',
      framework: 'FedRAMP Moderate',
      timeline: '14 weeks to ATO',
      outcome: 'Zero high-risk findings, approved on first submission'
    },
    {
      agency: 'Department of Defense',
      framework: 'CMMC Level 2 + NIST 800-171',
      timeline: '18 weeks to ATO',
      outcome: 'Full compliance, 45 bots authorized for production'
    },
    {
      agency: 'Intelligence Community',
      framework: 'ICD 503 + NIST 800-53 High',
      timeline: '22 weeks to ATO',
      outcome: 'High-security environment authorization achieved'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <nav className="text-sm mb-6 opacity-80">
            <Link href="/services/automation" className="hover:text-accent">Intelligent Automation</Link>
            <span className="mx-2">/</span>
            <Link href="/services/automation/rpa" className="hover:text-accent">RPA Implementation</Link>
            <span className="mx-2">/</span>
            <span>ATO & Compliance</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-semibold mb-4">
              Security First, Mission Always
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              RPA ATO & Compliance Documentation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Government RPA deployments (federal, state, and local) require rigorous security documentation and compliance validation. We provide complete ATO packages for FedRAMP, StateRAMP, and CMMC compliance, security control implementation, and ongoing compliance support—so your bots meet agency security requirements without delays.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request ATO Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/case-studies/federal-automation">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Compliance Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Government Compliance Frameworks We Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive documentation and control implementation for all major government security frameworks
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {complianceFrameworks.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{item.framework}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-muted rounded-lg px-3 py-2">
                        <div className="text-xs font-semibold mb-1">Authorization Levels</div>
                        <div className="text-xs">{item.levels.join(', ')}</div>
                      </div>
                      <div className="bg-muted rounded-lg px-3 py-2">
                        <div className="text-xs font-semibold mb-1">Security Controls</div>
                        <div className="text-xs">{item.controls}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ATO Process */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our ATO Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Typical timeline: 10-16 weeks from kickoff to ATO authorization
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {atoPhases.map((phase, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-card border-2 border-border text-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm text-primary font-semibold">{phase.phase}</div>
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                      <div className="text-sm text-muted-foreground">Duration: {phase.duration}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-1" />
                        <span className="text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ATO Documents */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete ATO Documentation Package</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver all required artifacts for agency Authorizing Official (AO) review and approval
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atoDocuments.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2">
                  <CardContent className="pt-8">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.document}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="inline-block bg-card border border-border text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {item.pages}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Controls */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">NIST 800-53 Security Controls for RPA</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We document and implement security controls specific to RPA deployments
            </p>
          </div>
          <div className="space-y-4 max-w-5xl mx-auto">
            {securityControls.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-card border-2 border-border text-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{item.family}</h3>
                      <div className="mb-3">
                        <div className="text-sm font-semibold mb-1">Example Controls:</div>
                        <div className="flex flex-wrap gap-2">
                          {item.examples.map((example, idx) => (
                            <span key={idx} className="inline-block bg-muted text-foreground px-3 py-1 rounded-full text-xs">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-muted rounded-lg px-4 py-3">
                        <div className="text-xs font-semibold mb-1">RPA Context:</div>
                        <div className="text-sm">{item.rpaContext}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Experience */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Government ATO Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've secured ATOs for RPA deployments across federal, defense, and intelligence agencies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {governmentExperience.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.agency}</h3>
                  <div className="mb-3">
                    <div className="inline-block bg-card border border-border text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {item.framework}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.timeline}</p>
                  <p className="text-sm font-semibold text-primary">{item.outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need ATO Support for Your RPA Deployment?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let our compliance experts handle the documentation while you focus on automation outcomes. We'll get your bots authorized faster.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request ATO Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services/automation/rpa/platform-implementation">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Platform Implementation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
