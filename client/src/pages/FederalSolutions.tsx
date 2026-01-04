import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FederalROICalculator from '@/components/FederalROICalculator';
import { ArrowRight, CheckCircle2, Shield, FileText, Award, Users, Building2, Target, Clock, DollarSign } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

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
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[{ label: 'Federal Solutions' }]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Government Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Government Solutions & Contract Vehicles
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              NexDyne Technology Technology is a trusted government IT implementation partner with GSA Schedule contracts, StateRAMP expertise, proven past performance, and cleared personnel ready to support federal, state, and local government agencies.
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
              Pre-approved contract vehicles enabling streamlined procurement for government agencies and simplified acquisition processes.
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
            <h2 className="text-4xl font-bold mb-4">Why Procure Through NexDyne Technology?</h2>
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
              experience delivering mission-critical IT solutions across federal, state, and local government agencies.
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
                        <span className="text-xs bg-muted text-accent px-3 py-1 rounded-full font-semibold">
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
              Certifications and cleared personnel supporting federal security and quality standards compliance.
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

      {/* FAR Compliance & Contract Requirements */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Federal Acquisition Regulation (FAR) Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              NexDyne Technology maintains compliance with Federal Acquisition Regulation requirements for government IT services, ensuring streamlined contract execution and reduced agency risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardContent className="p-8">
                <FileText className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">IT Services Compliance</h3>
                <p className="text-muted-foreground mb-6">
                  Our operations comply with FAR Part 39 (Acquisition of Information Technology) and associated clauses governing IT professional services, cloud solutions, and cybersecurity implementations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-foreground mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-sm">FAR 52.204-21:</span>
                      <span className="text-sm text-muted-foreground ml-1">Basic Safeguarding of Covered Contractor Information Systems</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-foreground mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-sm">FAR 52.239-1:</span>
                      <span className="text-sm text-muted-foreground ml-1">Privacy or Security Safeguards for IT systems and services</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-foreground mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-sm">FAR 52.204-25:</span>
                      <span className="text-sm text-muted-foreground ml-1">Prohibition on Contracting for Certain Telecommunications and Video Surveillance Services or Equipment</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">Defense Contracts Compliance</h3>
                <p className="text-muted-foreground mb-6">
                  For Department of Defense contracts, we maintain compliance with Defense Federal Acquisition Regulation Supplement (DFARS) requirements governing Controlled Unclassified Information (CUI).
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-foreground mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-sm">DFARS 252.204-7012:</span>
                      <span className="text-sm text-muted-foreground ml-1">Safeguarding Covered Defense Information and Cyber Incident Reporting</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-foreground mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-sm">NIST SP 800-171:</span>
                      <span className="text-sm text-muted-foreground ml-1">Protecting Controlled Unclassified Information in Nonfederal Systems</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-foreground mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-sm">CMMC Level 2:</span>
                      <span className="text-sm text-muted-foreground ml-1">Cybersecurity Maturity Model Certification for DoD supply chain</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 bg-secondary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Procurement Benefits of FAR Compliance</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <Clock className="h-10 w-10 text-accent mb-4" />
                  <h4 className="font-semibold mb-2">Faster Contract Execution</h4>
                  <p className="text-sm text-muted-foreground">
                    Pre-established compliance frameworks reduce contract negotiation time and enable faster task order awards under IDIQ vehicles.
                  </p>
                </div>
                <div>
                  <Shield className="h-10 w-10 text-accent mb-4" />
                  <h4 className="font-semibold mb-2">Reduced Agency Risk</h4>
                  <p className="text-sm text-muted-foreground">
                    Documented compliance with FAR security and privacy requirements minimizes agency oversight burden and contractor performance risk.
                  </p>
                </div>
                <div>
                  <CheckCircle2 className="h-10 w-10 text-accent mb-4" />
                  <h4 className="font-semibold mb-2">Audit-Ready Documentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Maintained compliance documentation supports agency audits and CPARS evaluations with evidence of regulatory adherence.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-secondary">
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
                        <CheckCircle2 className="h-5 w-5 text-foreground mr-3 mt-0.5 flex-shrink-0" />
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

      {/* Teaming & Subcontracting */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Teaming & Subcontracting Partnerships</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              NexDyne Technology partners with certified small businesses to strengthen proposals for set-aside contracts and deliver comprehensive solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="border-2 text-center">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">8(a) Partners</h3>
                <p className="text-sm text-muted-foreground">SBA-certified disadvantaged business partnerships</p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">SDVOSB Partners</h3>
                <p className="text-sm text-muted-foreground">Service-disabled veteran-owned small business</p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">WOSB Partners</h3>
                <p className="text-sm text-muted-foreground">Women-owned small business certifications</p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">HUBZone Partners</h3>
                <p className="text-sm text-muted-foreground">Historically underutilized business zones</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Teaming Benefits & Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-foreground mr-2" />
                    Set-Aside Contract Eligibility
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Our small business partnerships enable participation in 8(a), SDVOSB, WOSB, and HUBZone set-aside contracts, expanding opportunities for both prime and subcontractor roles.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-foreground mr-2" />
                    Complementary Expertise
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Partners bring specialized capabilities in niche technologies, regional presence, and industry-specific domain knowledge that complement NexDyne Technology's core competencies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-foreground mr-2" />
                    Proven Teaming Success
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    15+ successful teaming arrangements resulting in $45M+ in contract awards, with documented past performance demonstrating effective collaboration and delivery.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-foreground mr-2" />
                    Mentor-Protégé Programs
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Active participation in SBA Mentor-Protégé and agency-specific programs, providing technical assistance and business development support to small business partners.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in teaming with NexDyne Technology on an upcoming opportunity? Contact our partnerships team.
            </p>
            <Link href="/contact/partnerships">
              <Button variant="outline" size="lg">
                Explore Teaming Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* State & Local Government Solutions */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">State & Local Government Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT implementation services for state agencies, counties, municipalities, and education institutions through cooperative purchasing and state-specific contracts.
            </p>
          </div>

          {/* State/Local Contract Vehicles */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Cooperative Purchasing Contracts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">NASPO ValuePoint</h3>
                  <p className="text-sm text-accent font-mono mb-4">Cloud Solutions Contract</p>
                  <p className="text-muted-foreground mb-4">
                    Multi-state cooperative purchasing for cloud services, enabling streamlined procurement across participating states.
                  </p>
                  <div className="text-sm">
                    <span className="font-semibold">Scope:</span> All 50 states and territories
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Sourcewell</h3>
                  <p className="text-sm text-accent font-mono mb-4">#012345-ABC</p>
                  <p className="text-muted-foreground mb-4">
                    Cooperative purchasing organization serving government, education, and nonprofit entities nationwide.
                  </p>
                  <div className="text-sm">
                    <span className="font-semibold">Scope:</span> 50,000+ participating agencies
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <Building2 className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">OMNIA Partners</h3>
                  <p className="text-sm text-accent font-mono mb-4">R191902</p>
                  <p className="text-muted-foreground mb-4">
                    Public sector procurement cooperative providing competitively solicited contracts for government entities.
                  </p>
                  <div className="text-sm">
                    <span className="font-semibold">Scope:</span> Public sector nationwide
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <Building2 className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">State Master Agreements</h3>
                  <p className="text-sm text-accent font-mono mb-4">Multiple States</p>
                  <p className="text-muted-foreground mb-4">
                    Direct state-specific IT services contracts with departments of technology and administration.
                  </p>
                  <div className="text-sm">
                    <span className="font-semibold">Scope:</span> 12 state master agreements
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* State/Local Compliance */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">State & Local Compliance Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <Shield className="h-10 w-10 text-accent mb-4" />
                  <h4 className="font-bold mb-2">StateRAMP</h4>
                  <p className="text-sm text-muted-foreground">
                    State-level cloud security authorization program implementation expertise for state agencies requiring secure cloud solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <Shield className="h-10 w-10 text-accent mb-4" />
                  <h4 className="font-bold mb-2">CJIS Compliance</h4>
                  <p className="text-sm text-muted-foreground">
                    Criminal Justice Information Services security policy implementation for law enforcement and public safety agencies.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <Shield className="h-10 w-10 text-accent mb-4" />
                  <h4 className="font-bold mb-2">State Privacy Laws</h4>
                  <p className="text-sm text-muted-foreground">
                    CCPA, GDPR-like state requirements, and data residency compliance for state and local data protection mandates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* State/Local Past Performance */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">State & Local Past Performance Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">State Departments of Transportation</h4>
                      <p className="text-sm text-muted-foreground">8 contracts | $6M+</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">Cloud migration, real-time analytics for traffic management, and data integration across legacy systems.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Cloud Migration</span>
                    <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Data Analytics</span>
                    <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Integration</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">County Sheriff Departments</h4>
                      <p className="text-sm text-muted-foreground">6 contracts | $4M+</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">CJIS-compliant cloud infrastructure, cybersecurity assessments, and secure data sharing platforms.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-muted text-accent px-2 py-1 rounded">CJIS Compliance</span>
                    <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Cybersecurity</span>
                    <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Cloud</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">State Health Departments</h4>
                      <p className="text-sm text-muted-foreground">7 contracts | $5M+</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">Public health surveillance analytics, HIPAA-compliant cloud solutions, and data visualization dashboards.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Data Analytics</span>
                    <span className="text-xs bg-muted text-accent px-2 py-1 rounded">HIPAA</span>
                    <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Cloud</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">Municipal Government</h4>
                      <p className="text-sm text-muted-foreground">4 contracts | $3M+</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">Process automation for permitting, cloud-based constituent services, and legacy system modernization.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Automation</span>
                    <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Cloud</span>
                    <span className="text-xs bg-muted text-accent px-2 py-1 rounded">Modernization</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/federal-solutions/state-local">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Explore State & Local Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Federal ROI Calculator */}
      <section className="py-20 bg-background">
        <div className="container">
          <FederalROICalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work with NexDyne Technology?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Generate a customized capability statement, schedule a consultation, or learn more about our government contract vehicles and past performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/capability-generator">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Generate Capability Statement
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
