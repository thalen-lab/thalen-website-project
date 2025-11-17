import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, CheckCircle2, FileSearch, Shield, FileCheck, ClipboardCheck } from 'lucide-react';

export default function SecurityAssessment() {
  const capabilities = [
    {
      icon: Shield,
      title: 'FedRAMP Assessment & Authorization',
      description: 'End-to-end FedRAMP assessment support from readiness to ATO, including SSP development, control implementation, and continuous monitoring.',
      benefits: ['FedRAMP readiness assessment', 'SSP development & review', '3PAO coordination', 'ATO package preparation']
    },
    {
      icon: FileCheck,
      title: 'CMMC Certification Support',
      description: 'Comprehensive CMMC Level 1-3 certification support with gap analysis, remediation planning, and C3PAO assessment coordination.',
      benefits: ['CMMC gap analysis', 'Level 1-3 preparation', 'SSP/POAM development', 'C3PAO coordination']
    },
    {
      icon: ClipboardCheck,
      title: 'NIST 800-53/171 Compliance',
      description: 'NIST framework implementation and assessment for both federal civilian (800-53) and defense contractor (800-171) requirements.',
      benefits: ['Control implementation', 'Compliance gap analysis', 'POA&M management', 'Continuous monitoring']
    },
    {
      icon: FileSearch,
      title: 'ISO 27001 Certification',
      description: 'International information security management system (ISMS) implementation and certification support for global operations.',
      benefits: ['ISMS implementation', 'Risk assessment', 'Internal audits', 'Certification support']
    }
  ];

  const assessmentProcess = [
    {
      phase: 'Readiness Assessment',
      description: 'Evaluate current security posture against target framework requirements and identify compliance gaps.',
      deliverables: ['Gap analysis report', 'Compliance scorecard', 'Risk assessment', 'Remediation roadmap']
    },
    {
      phase: 'Remediation Planning',
      description: 'Develop detailed remediation plan with prioritized actions, timelines, and resource requirements.',
      deliverables: ['Remediation plan', 'POA&M document', 'Resource estimates', 'Implementation timeline']
    },
    {
      phase: 'Control Implementation',
      description: 'Implement security controls, policies, and procedures to meet framework requirements.',
      deliverables: ['Security policies', 'Control implementation', 'Evidence collection', 'Documentation']
    },
    {
      phase: 'Assessment & Authorization',
      description: 'Coordinate third-party assessment and support authorization process through to ATO/certification.',
      deliverables: ['Assessment coordination', 'Evidence packages', 'ATO support', 'Certification achievement']
    }
  ];

  const frameworks = [
    'FedRAMP (Low, Moderate, High)',
    'CMMC (Level 1, 2, 3)',
    'NIST 800-53 (Rev 5)',
    'NIST 800-171 (Rev 2)',
    'ISO 27001:2022',
    'SOC 2 Type II',
    'FISMA',
    'HIPAA/HITECH',
    'PCI DSS',
    'StateRAMP'
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
                { label: 'Security Assessment & Compliance' }
              ]}
              className="text-primary-foreground/80 hover:text-primary-foreground mb-4"
            />
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              FedRAMP Authorized • CMMC Expert
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Security Assessment & Compliance
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Achieve FedRAMP, CMMC, and NIST compliance with expert assessment services that guide you from readiness to authorization. NexDyne's proven methodology reduces typical 12-18 month timelines to 6-9 months while ensuring first-time assessment success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Readiness Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Compliance Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Federal Agencies Choose NexDyne</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike generic compliance consultants, we understand federal authorization processes, security clearances, and mission continuity imperatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors hover:shadow-xl">
                <CardContent className="p-8">
                  <capability.icon className="h-16 w-16 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground mb-6">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Assessment Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured, repeatable methodology ensuring successful compliance achievement with minimal business disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {assessmentProcess.map((step, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{step.phase}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3 text-sm">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="h-1.5 w-1.5 bg-accent rounded-full mr-2 mt-1.5"></div>
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
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Supported Compliance Frameworks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert assessment and certification support across all major federal and commercial security frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {frameworks.map((framework, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-accent">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-sm font-semibold">{framework}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Achieve Compliance?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start with a comprehensive readiness assessment and discover how NexDyne can accelerate your path to FedRAMP, CMMC, or NIST compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Readiness Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Compliance Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
