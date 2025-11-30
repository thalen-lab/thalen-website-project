import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Shield, FileText, Award, Users, Building2, Target, Clock, DollarSign } from 'lucide-react';

export default function FederalSolutions() {
  const contractVehicles = [
    {
      name: 'GSA Schedule 70',
      number: 'GS-35F-0119Y',
      description: 'IT Professional Services including cloud migration, cybersecurity, data analytics, and intelligent automation implementation.',
      scope: 'Federal, State, and Local Government',
      icon: Shield
    },
    {
      name: 'GSA Schedule 84',
      number: 'GS-07F-0123X',
      description: 'Total Solutions for Law Enforcement, Security, Facilities Management, Fire, Rescue, and Emergency Response.',
      scope: 'Federal Law Enforcement and Security Agencies',
      icon: Shield
    },
    {
      name: 'SEWP V',
      number: 'NNG15SD21B',
      description: 'NASA Solutions for Enterprise-Wide Procurement for IT products and services.',
      scope: 'NASA and Other Federal Agencies',
      icon: Building2
    },
    {
      name: 'NIH NITAAC CIO-SP3',
      number: 'HHSN316201200012W',
      description: 'Chief Information Officer - Solutions and Partners 3 for comprehensive IT solutions.',
      scope: 'NIH and Federal Health Agencies',
      icon: Building2
    }
  ];

  const certifications = [
    {
      name: 'FedRAMP Implementation Partner',
      description: 'Authorized to implement FedRAMP Moderate and High solutions',
      icon: Shield
    },
    {
      name: 'CMMC Registered Practitioner',
      description: 'Certified to conduct CMMC assessments and implementation',
      icon: Award
    },
    {
      name: 'ISO 27001:2022 Certified',
      description: 'Information security management system certification',
      icon: Award
    },
    {
      name: 'Cleared Personnel',
      description: 'Team members hold Secret and TS/SCI clearances',
      icon: Users
    }
  ];

  const pastPerformance = [
    {
      agency: 'Department of Defense',
      projects: '12 contracts',
      value: '$45M+',
      clearance: 'Secret/TS-SCI',
      services: 'Cloud migration, CMMC implementation, data analytics'
    },
    {
      agency: 'Department of Veterans Affairs',
      projects: '8 contracts',
      value: '$28M+',
      clearance: 'Public Trust',
      services: 'Predictive analytics, automation, cloud infrastructure'
    },
    {
      agency: 'Department of Health & Human Services',
      projects: '6 contracts',
      value: '$22M+',
      clearance: 'Public Trust',
      services: 'Real-time analytics, data visualization, integration'
    },
    {
      agency: 'Intelligence Community',
      projects: '4 contracts',
      value: '$35M+',
      clearance: 'TS/SCI with Poly',
      services: 'Secure collaboration, zero trust architecture, SOC'
    },
    {
      agency: 'State & Local Government',
      projects: '25+ contracts',
      value: '$18M+',
      clearance: 'N/A',
      services: 'Cloud migration, cybersecurity, data modernization'
    }
  ];

  const procurementAdvantages = [
    {
      icon: Clock,
      title: 'Streamlined Procurement',
      description: 'GSA Schedule contracts enable faster procurement with pre-negotiated terms and conditions, reducing acquisition time from months to weeks.'
    },
    {
      icon: DollarSign,
      title: 'Best Value Pricing',
      description: 'Competitive GSA pricing with volume discounts and Most Favored Customer (MFC) clause ensuring best government pricing.'
    },
    {
      icon: FileText,
      title: 'Simplified Compliance',
      description: 'Pre-vetted contractor with established compliance frameworks (FedRAMP, CMMC, NIST 800-53) reducing agency risk and oversight burden.'
    },
    {
      icon: Target,
      title: 'Proven Past Performance',
      description: '55+ successful federal contracts with documented outcomes, measurable ROI, and strong CPARS ratings demonstrating reliable delivery.'
    }
  ];

  const capabilities = [
    {
      category: 'Cloud & Infrastructure',
      services: [
        'FedRAMP Cloud Migration (AWS GovCloud, Azure Government, Google Cloud)',
        'Multi-Cloud Integration & Orchestration',
        'Infrastructure as Code (IaC) Implementation',
        'Cloud Security & Compliance (FedRAMP, FISMA)',
        'Disaster Recovery & Business Continuity'
      ]
    },
    {
      category: 'Cybersecurity & Compliance',
      services: [
        'CMMC Level 2/3 Certification Support',
        'FedRAMP Authorization (ATO Support)',
        'Zero Trust Architecture Implementation',
        'Security Operations Center (SOC) Setup',
        'Identity & Access Management (IAM)'
      ]
    },
    {
      category: 'Data & Analytics',
      services: [
        'Analytics Platform Implementation (Tableau Gov, Power BI Gov)',
        'AI/ML Model Development & Deployment',
        'Data Engineering & Pipeline Development',
        'Real-Time Analytics & Visualization',
        'Data Strategy & Governance'
      ]
    },
    {
      category: 'Intelligent Automation',
      services: [
        'RPA Implementation (UiPath FedRAMP, Automation Anywhere Gov)',
        'Process Automation & Orchestration',
        'Enterprise Integration (iPaaS)',
        'Workflow Automation & BPM',
        'Change Management & Training'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Government Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Federal Solutions & Contract Vehicles
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              NexDyne Technology is a trusted government IT implementation partner with GSA Schedule contracts, proven past performance, and cleared personnel ready to support federal, state, and local agencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Capability Statement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Past Performance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Vehicles */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Government Contract Vehicles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pre-approved contract vehicles enabling streamlined procurement for federal agencies and simplified acquisition processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contractVehicles.map((vehicle, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <vehicle.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-sm text-accent font-mono mb-4">{vehicle.number}</p>
                  <p className="text-muted-foreground mb-4">{vehicle.description}</p>
                  <div className="text-sm">
                    <span className="font-semibold">Scope:</span> {vehicle.scope}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Need help determining the right contract vehicle for your agency? Contact our government contracts team.
            </p>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Government Contracts Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Procurement Advantages */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Procure Through NexDyne?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamlined acquisition, competitive pricing, and proven delivery reduce risk and accelerate mission outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procurementAdvantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <advantage.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Past Performance & Agency Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven track record delivering mission-critical IT solutions across federal, state, and local government agencies.
            </p>
          </div>

          <div className="space-y-6">
            {pastPerformance.map((performance, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-5 gap-6 items-center">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold mb-2">{performance.agency}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-semibold">
                          {performance.clearance}
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-accent">{performance.projects}</p>
                      <p className="text-sm text-muted-foreground">Completed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-accent">{performance.value}</p>
                      <p className="text-sm text-muted-foreground">Contract Value</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{performance.services}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button variant="outline" size="lg">
                View Detailed Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications & Government Credentials</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading certifications and cleared personnel ensure compliance with federal security and quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-2 text-center">
                <CardContent className="p-8">
                  <cert.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Government IT Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT implementation services designed for government agencies requiring FedRAMP compliance and mission-critical reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{capability.category}</h3>
                  <ul className="space-y-3">
                    {capability.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services/automation">
              <Button variant="outline" size="lg">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work with NexDyne?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Request a capability statement, schedule a consultation, or learn more about our government contract vehicles and past performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Capability Statement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Past Performance
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
