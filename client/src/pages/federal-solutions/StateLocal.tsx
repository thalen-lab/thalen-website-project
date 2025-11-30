import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Shield, Users, Award, TrendingUp, Building2, Scale, Landmark } from 'lucide-react';

export default function StateLocal() {
  const keyDifferentiators = [
    {
      icon: Shield,
      title: 'StateRAMP & CJIS Expertise',
      description: 'Deep implementation experience with StateRAMP-authorized platforms and CJIS-compliant systems for state and local law enforcement agencies.'
    },
    {
      icon: Users,
      title: 'State Procurement Experience',
      description: 'Navigate state-specific procurement processes, cooperative purchasing agreements, and local government contracting requirements with proven expertise.'
    },
    {
      icon: Award,
      title: 'Mission-Focused for State Agencies',
      description: 'Solutions designed for state and local government missions—faster constituent services, reduced costs, and improved transparency.'
    }
  ];

  const primaryServices = [
    {
      icon: Building2,
      title: 'StateRAMP Platform Implementation',
      description: 'Implement StateRAMP-authorized cloud platforms and SaaS solutions with state-specific compliance documentation, security controls, and ATO support.',
      benefits: ['StateRAMP compliance expertise', 'State ATO documentation', 'Multi-state deployment experience'],
      link: '/services/cloud'
    },
    {
      icon: Scale,
      title: 'CJIS-Compliant Systems',
      description: 'Deploy CJIS-compliant platforms for state and local law enforcement, courts, and corrections agencies with FBI CJIS Security Policy adherence.',
      benefits: ['CJIS Security Policy compliance', 'Law enforcement systems', 'Criminal justice integration'],
      link: '/services/cybersecurity'
    },
    {
      icon: Landmark,
      title: 'State Government Modernization',
      description: 'Modernize legacy state systems with cloud migration, data analytics, and automation solutions tailored to state agency requirements and budgets.',
      benefits: ['Legacy system modernization', 'State-specific customization', 'Budget-conscious solutions'],
      link: '/services/digital-transformation'
    }
  ];

  const stateLocalCaseStudies = [
    {
      agency: 'State Attorney General',
      project: 'CJIS-Compliant Fraud Detection',
      outcome: '$50M in fraud prevented annually',
      description: 'Implemented CJIS-compliant fraud detection system processing 10M+ daily transactions with real-time ML analytics.'
    },
    {
      agency: 'State Energy Commission',
      project: 'Grid Optimization Platform',
      outcome: '65% reduction in outages',
      description: 'Deployed StateRAMP-authorized analytics platform monitoring 500+ substations with predictive maintenance.'
    },
    {
      agency: 'County Health Department',
      project: 'Public Health Data Integration',
      outcome: '40% faster outbreak response',
      description: 'Integrated 12 county health systems with state health department for real-time disease surveillance.'
    }
  ];

  const stateRampPlatforms = [
    {
      category: 'Cloud Infrastructure',
      platforms: ['AWS State & Local', 'Microsoft Azure Government', 'Google Cloud for Government', 'Oracle Cloud for State & Local']
    },
    {
      category: 'Public Safety & CJIS',
      platforms: ['Tyler Technologies', 'CentralSquare', 'Motorola Solutions', 'Axon Evidence.com']
    },
    {
      category: 'Constituent Services',
      platforms: ['Salesforce State & Local', 'ServiceNow for Government', 'Granicus', 'OpenGov']
    },
    {
      category: 'Data & Analytics',
      platforms: ['Tableau for Government', 'Microsoft Power BI Gov', 'Qlik Sense Gov', 'Socrata (Tyler Technologies)']
    }
  ];

  const complianceFrameworks = [
    {
      name: 'StateRAMP',
      description: 'State Risk and Authorization Management Program for cloud service providers serving state and local governments',
      icon: Shield
    },
    {
      name: 'CJIS Security Policy',
      description: 'FBI Criminal Justice Information Services Security Policy for law enforcement and criminal justice systems',
      icon: Scale
    },
    {
      name: 'State Data Privacy Laws',
      description: 'Compliance with state-specific data privacy regulations including CCPA, SHIELD Act, and state breach notification laws',
      icon: Landmark
    }
  ];

  const procurementPaths = [
    {
      title: 'State Cooperative Contracts',
      description: 'Leverage existing state cooperative purchasing agreements (NASPO ValuePoint, WSCA, state-specific contracts) for streamlined procurement.',
      benefits: ['Pre-negotiated pricing', 'Simplified procurement', 'Reduced timeline']
    },
    {
      title: 'Local Government RFP Support',
      description: 'Full RFP response support for county and municipal governments with references, compliance documentation, and pricing.',
      benefits: ['RFP response expertise', 'Local references', 'Transparent pricing']
    },
    {
      title: 'Grant-Funded Projects',
      description: 'Support for federally-funded state and local projects including ARPA, BEAD, and other grant programs with compliance tracking.',
      benefits: ['Grant compliance expertise', 'Federal funding alignment', 'Audit-ready documentation']
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
              State & Local Government Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              StateRAMP & CJIS-Compliant IT Implementation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We help state and local government agencies implement StateRAMP-authorized platforms, CJIS-compliant systems, and modern IT solutions with state-specific compliance expertise and procurement support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request State/Local Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/federal-solutions/state-local/roi-calculator">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  State ROI Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">State & Local Government Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT implementation services designed for state agencies, counties, municipalities, and special districts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all border-2 hover:border-accent">
                <CardContent className="p-8">
                  <service.icon className="h-16 w-16 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.link}>
                    <Button variant="outline" className="w-full border-2 border-dashed border-primary/30 hover:border-accent hover:bg-accent/5">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* State/Local Case Studies */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">State & Local Government Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven track record implementing IT solutions for state agencies, counties, and municipalities with measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stateLocalCaseStudies.map((study, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">{study.agency}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{study.project}</p>
                  <p className="text-lg font-bold text-accent mb-4">{study.outcome}</p>
                  <p className="text-sm text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button variant="outline" size="lg">
                View All State/Local Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">State & Local Compliance Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep expertise with state-specific compliance frameworks and security requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8 text-center">
                  <framework.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{framework.name}</h3>
                  <p className="text-muted-foreground">{framework.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* StateRAMP Platforms */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">StateRAMP & State-Approved Platform Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement and integrate StateRAMP-authorized and state-approved platforms from leading vendors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {stateRampPlatforms.map((category, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.platforms.map((platform, idx) => (
                      <span key={idx} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {platform}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Plus 40+ additional StateRAMP-authorized and state-approved platforms
            </p>
            <Link href="/federal-solutions">
              <Button variant="outline" size="lg">
                View All Government Platforms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Procurement Paths */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Streamlined State & Local Procurement</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple procurement paths to simplify contracting for state and local government agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {procurementPaths.map((path, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{path.title}</h3>
                  <p className="text-muted-foreground mb-6">{path.description}</p>
                  
                  <ul className="space-y-3">
                    {path.benefits.map((benefit, idx) => (
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

      {/* Final CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize Your State or Local Agency?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a state/local government assessment to discuss your agency's IT modernization needs, evaluate StateRAMP platforms, and develop a roadmap for mission-critical implementation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/federal-solutions/state-local/compliance-checklist">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                State Compliance Checklist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
