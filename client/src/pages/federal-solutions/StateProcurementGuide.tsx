import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, CheckCircle2, FileText, Shield, DollarSign, Clock } from 'lucide-react';
import ProcurementTimeline from '@/components/ProcurementTimeline';

export default function StateProcurementGuide() {
  const procurementPaths = [
    {
      name: 'NASPO ValuePoint',
      icon: Shield,
      description: 'Multi-state cooperative purchasing for cloud services and IT solutions',
      scope: 'All 50 states and territories',
      process: [
        'Verify your state participates in NASPO ValuePoint Cloud Solutions contract',
        'Review NexDyne Technology\'s NASPO contract number and scope of services',
        'Issue purchase order or task order against NASPO contract',
        'No RFP required - pre-negotiated pricing and terms'
      ],
      timeline: '2-4 weeks from PO to project start',
      benefits: ['Pre-vetted vendor', 'Competitive pricing', 'Simplified procurement', 'Reduced legal review']
    },
    {
      name: 'Sourcewell',
      icon: Shield,
      description: 'Cooperative purchasing serving 50,000+ government and education entities',
      scope: 'Government, education, nonprofit nationwide',
      process: [
        'Confirm your agency is eligible for Sourcewell contracts (most government entities qualify)',
        'Review NexDyne Technology\'s Sourcewell contract #012345-ABC',
        'Complete Sourcewell registration (if not already registered)',
        'Issue purchase order directly to NexDyne Technology'
      ],
      timeline: '1-3 weeks from PO to project start',
      benefits: ['No membership fees', 'Simplified procurement', 'Compliant with state purchasing laws', 'Volume pricing']
    },
    {
      name: 'OMNIA Partners',
      icon: Shield,
      description: 'Public sector procurement cooperative with competitively solicited contracts',
      scope: 'Public sector entities nationwide',
      process: [
        'Verify your agency\'s eligibility for OMNIA Partners contracts',
        'Review NexDyne Technology\'s OMNIA contract R191902',
        'Complete OMNIA participation agreement (one-time)',
        'Issue purchase order or statement of work'
      ],
      timeline: '2-3 weeks from PO to project start',
      benefits: ['Competitively solicited', 'Transparent pricing', 'Reduced procurement time', 'Audit-ready documentation']
    },
    {
      name: 'State Master Agreements',
      icon: Shield,
      description: 'Direct state-specific IT services contracts',
      scope: '12 state master agreements',
      process: [
        'Check if your state has a master agreement with NexDyne Technology (contact us for list)',
        'Review state-specific contract terms and pricing',
        'Issue task order or purchase order against state contract',
        'Follow state-specific procurement procedures'
      ],
      timeline: '1-4 weeks depending on state requirements',
      benefits: ['State-specific terms', 'Pre-approved vendor', 'Streamlined state compliance', 'Local support']
    }
  ];

  const rfpSupport = [
    {
      title: 'RFP Response Expertise',
      description: 'Full RFP response support including technical approach, past performance, pricing, and compliance documentation.'
    },
    {
      title: 'Local References',
      description: 'State and local government references from similar projects with documented outcomes and client contacts.'
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear, competitive pricing with no hidden fees and flexible engagement models (fixed-price, T&M, hybrid).'
    },
    {
      title: 'Compliance Documentation',
      description: 'StateRAMP, CJIS, state data privacy, and accessibility compliance documentation ready for RFP submission.'
    }
  ];

  const grantFunding = [
    {
      name: 'ARPA (American Rescue Plan Act)',
      description: 'State and local fiscal recovery funds for IT modernization, cybersecurity, and digital services',
      support: 'Grant compliance tracking, eligible expense documentation, audit-ready reporting'
    },
    {
      name: 'BEAD (Broadband Equity, Access, and Deployment)',
      description: 'State broadband infrastructure grants with IT modernization components',
      support: 'Technical assistance, matching fund strategies, compliance documentation'
    },
    {
      name: 'State-Specific Grants',
      description: 'State technology modernization funds, cybersecurity grants, and public health IT grants',
      support: 'Grant application support, budget development, performance reporting'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              State & Local Government Resource
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              State & Local Procurement Guide
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Step-by-step guide to procuring NexDyne Technology IT implementation services through cooperative purchasing contracts, state master agreements, RFP processes, and grant-funded projects.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              <Download className="mr-2 h-5 w-5" />
              Download PDF Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Procurement Paths Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Streamlined Procurement Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple procurement paths to simplify contracting and reduce acquisition time for state and local government agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">Faster Procurement</h3>
                <p className="text-muted-foreground">
                  Reduce procurement time from 6-12 months (traditional RFP) to 1-4 weeks with cooperative purchasing contracts.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <DollarSign className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  Pre-negotiated pricing with volume discounts and most favored customer clauses ensuring best government pricing.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">Pre-Vetted Vendor</h3>
                <p className="text-muted-foreground">
                  Cooperative contracts include vendor vetting, compliance validation, and past performance review reducing agency risk.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <FileText className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">Simplified Compliance</h3>
                <p className="text-muted-foreground">
                  Contracts include pre-established compliance frameworks (StateRAMP, CJIS, accessibility) reducing legal and procurement overhead.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Procurement Paths */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">Cooperative Purchasing Contracts</h2>
          
          <div className="space-y-8">
            {procurementPaths.map((path, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <path.icon className="h-12 w-12 text-accent mr-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{path.name}</h3>
                      <p className="text-muted-foreground mb-2">{path.description}</p>
                      <p className="text-sm"><span className="font-semibold">Scope:</span> {path.scope}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold mb-4">Procurement Process</h4>
                      <ol className="space-y-3">
                        {path.process.map((step, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="bg-accent text-accent-foreground rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                      <div className="mt-4 p-3 bg-muted rounded-lg">
                        <p className="text-sm"><span className="font-semibold">Timeline:</span> {path.timeline}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold mb-4">Key Benefits</h4>
                      <div className="space-y-2">
                        {path.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle2 className="h-5 w-5 text-foreground mr-2 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <Link href="/contact">
                          <Button variant="outline" className="w-full">
                            Request Contract Information
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RFP Support */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Traditional RFP Support</h2>
            <p className="text-xl text-muted-foreground">
              For county and municipal governments requiring competitive RFP processes, NexDyne Technology provides comprehensive response support with local references and transparent pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {rfpSupport.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <CheckCircle2 className="h-10 w-10 text-foreground mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 mt-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">RFP Timeline & Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-accent text-accent-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    1
                  </span>
                  <div>
                    <p className="font-semibold">RFP Review & Questions (Week 1)</p>
                    <p className="text-sm text-muted-foreground">Review RFP requirements, submit clarifying questions, and confirm compliance with mandatory requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-accent text-accent-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    2
                  </span>
                  <div>
                    <p className="font-semibold">Response Development (Weeks 2-3)</p>
                    <p className="text-sm text-muted-foreground">Develop technical approach, gather past performance references, prepare pricing, and compile compliance documentation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-accent text-accent-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <p className="font-semibold">Submission & Presentation (Week 4)</p>
                    <p className="text-sm text-muted-foreground">Submit comprehensive RFP response and participate in oral presentations or demonstrations as required.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Grant-Funded Projects */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Grant-Funded Project Support</h2>
            <p className="text-xl text-muted-foreground">
              NexDyne Technology supports state and local agencies with federally-funded projects including ARPA, BEAD, and state-specific technology grants with compliance tracking and audit-ready documentation.
            </p>
          </div>

          <div className="space-y-6">
            {grantFunding.map((grant, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{grant.name}</h3>
                      <p className="text-muted-foreground">{grant.description}</p>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm"><span className="font-semibold">NexDyne Technology Support:</span> {grant.support}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 mt-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Grant Compliance Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-foreground mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Eligible expense documentation and tracking</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-foreground mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Quarterly and annual performance reporting</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-foreground mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Audit-ready project documentation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-foreground mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Federal funding compliance expertise</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interactive Procurement Timeline Tool */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Interactive Tool
            </div>
            <h2 className="text-4xl font-bold mb-4">Find Your Optimal Procurement Path</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Answer 4 quick questions about your agency and project to get a personalized procurement recommendation with timeline and next steps.
            </p>
          </div>
          <ProcurementTimeline />
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Download the Complete Procurement Guide</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get the full state and local procurement guide with contract details, step-by-step processes, and contact information for each procurement path.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              <Download className="mr-2 h-5 w-5" />
              Download PDF Guide
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Procurement Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
