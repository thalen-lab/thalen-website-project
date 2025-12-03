import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, FileCheck, Lock, AlertTriangle } from 'lucide-react';

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
        'Address AO questions and remediate findings',
        'Receive ATO decision and authorization letter'
      ]
    }
  ];

  const deliverables = [
    {
      title: 'System Security Plan (SSP)',
      description: 'Comprehensive documentation of security controls, system architecture, and compliance posture',
      pages: '100-200 pages'
    },
    {
      title: 'Security Assessment Report (SAR)',
      description: 'Independent assessment of security control effectiveness with test results and findings',
      pages: '50-100 pages'
    },
    {
      title: 'Plan of Action & Milestones (POA&M)',
      description: 'Remediation plan for identified vulnerabilities with timelines and responsible parties',
      pages: '10-20 pages'
    },
    {
      title: 'Continuous Monitoring Plan',
      description: 'Ongoing security monitoring, vulnerability management, and compliance reporting procedures',
      pages: '20-30 pages'
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
            <Link href="/services/automation/rpa" className="hover:text-accent">Government RPA</Link>
            <span className="mx-2">/</span>
            <span>ATO & Compliance</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-4 border border-orange-500/30">
              COMPLIANCE & SECURITY SERVICES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ATO & Compliance Documentation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Deploying RPA in government environments requires rigorous security controls documentation and ATO (Authority to Operate) approval. We provide complete compliance support—from System Security Plans to Security Assessment Reports—ensuring your RPA deployment meets FedRAMP, FISMA, and agency-specific requirements. Our team has secured ATOs for 50+ government RPA implementations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request ATO Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks - Keep Cards for Comparison */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Government Compliance Frameworks</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide compliance documentation and ATO support for all major government security frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceFrameworks.map((item, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <item.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{item.framework}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">Authorization Levels:</span>
                      <span className="text-sm text-muted-foreground">{item.levels.join(', ')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">Security Controls:</span>
                      <span className="text-sm text-muted-foreground">{item.controls}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* ATO Process - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our ATO Process</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A proven four-phase methodology for securing Authority to Operate for RPA deployments in government environments.
            </p>
          </div>

          <div className="space-y-16">
            {atoPhases.map((phase, index) => (
              <div key={index}>
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-orange-500/10 border-2 border-orange-500 flex items-center justify-center">
                      <span className="text-xl font-bold text-orange-500">{phase.phase.split(' ')[1]}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <h3 className="text-3xl font-bold">{phase.title}</h3>
                      <span className="text-sm text-muted-foreground font-semibold">{phase.duration}</span>
                    </div>
                    <div className="space-y-3">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                          <p className="text-muted-foreground leading-relaxed">{activity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < atoPhases.length - 1 && (
                  <div className="border-t border-border mt-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* ATO Deliverables - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">ATO Package Deliverables</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Complete documentation package required for ATO approval and ongoing compliance.
            </p>
          </div>

          <div className="space-y-8">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-sm text-muted-foreground font-semibold">{item.pages}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* Why ATO Support Matters - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Why ATO Support Matters</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most RPA implementations fail to receive ATO approval on the first attempt. Agencies underestimate the documentation burden, misinterpret control requirements, or fail to properly inherit FedRAMP authorizations. The result? Months of delays, expensive remediation work, and frustrated stakeholders.
              </p>
              <p>
                Thalen Technologies has secured ATOs for 50+ government RPA implementations across federal, state, and local agencies. We know exactly what Authorizing Officials expect, how to properly document inherited controls, and how to navigate agency-specific security requirements. Our ATO packages pass review on the first submission 90% of the time.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
               <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">50+ Successful ATOs</h4>
                <p className="text-muted-foreground leading-relaxed">Proven track record securing Authority to Operate for RPA deployments across government agencies</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">90% First-Time Approval Rate</h4>
                <p className="text-muted-foreground leading-relaxed">Our ATO packages pass Authorizing Official review on first submission 90% of the time</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">FedRAMP Inheritance Expertise</h4>
                <p className="text-muted-foreground leading-relaxed">Properly document inherited controls from FedRAMP-authorized platforms to reduce compliance burden</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold mb-1">Continuous Monitoring Support</h4>
                <p className="text-muted-foreground leading-relaxed">Ongoing compliance monitoring, vulnerability management, and annual assessment support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your RPA ATO?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Schedule a free consultation to discuss your ATO requirements and timeline.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request ATO Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
