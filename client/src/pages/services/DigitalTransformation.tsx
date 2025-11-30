import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Target, Users, TrendingUp, Lightbulb, Shield, Award, Globe, DollarSign } from 'lucide-react';

export default function DigitalTransformation() {
  // Primary service offerings (reduced to 4 core capabilities)
  const primaryServices = [
    {
      icon: Target,
      title: 'FedRAMP & StateRAMP Platform Selection',
      description: 'We help agencies select optimal FedRAMP and StateRAMP platforms for their mission needs through vendor-neutral assessment, multi-year implementation roadmaps, and TCO analysis.',
      benefits: ['50+ FedRAMP/StateRAMP platform evaluations', 'Vendor-neutral recommendations', 'Multi-year strategic roadmap'],
      link: '/services/platform-selection'
    },
    {
      icon: Lightbulb,
      title: 'Legacy System Modernization',
      description: 'We help agencies migrate from mainframe and legacy systems to modern FedRAMP and StateRAMP cloud platforms with zero business disruption and comprehensive change management.',
      benefits: ['Zero downtime migrations', 'Data integrity validation', 'User adoption programs'],
      link: '/services/legacy-modernization-dt'
    },
    {
      icon: Users,
      title: 'Change Management & Training',
      description: 'Structured organizational change programs using proven frameworks (Prosci ADKAR, Kotter 8-Step) with role-based training and adoption strategies.',
      benefits: ['85% user adoption rate', 'Change champion programs', 'Executive governance'],
      link: '/services/change-management'
    },
    {
      icon: TrendingUp,
      title: 'Technology Modernization Fund (TMF) Support',
      description: 'End-to-end TMF proposal development, ROI modeling, and implementation support for agencies seeking modernization funding.',
      benefits: ['TMF proposal writing', 'ROI and business case', 'Implementation oversight'],
      link: '/services/tmf-support'
    }
  ];

  // Additional capabilities (compact list format)
  const additionalCapabilities = [
    { name: 'Digital Service Delivery', description: 'Modernize citizen-facing services with mobile-first design and accessibility' },
    { name: 'Data Modernization & Analytics', description: 'Migrate to cloud data platforms and implement self-service analytics' },
    { name: 'Cybersecurity Modernization', description: 'Implement zero trust architecture and modern security operations' },
    { name: 'Continuous Improvement & Optimization', description: 'Post-implementation optimization and performance tuning' }
  ];

  const keyDifferentiators = [
    {
      icon: Globe,
      title: 'Vendor-Neutral Modernization',
      description: 'We don\'t sell platforms—we help you select the RIGHT FedRAMP and StateRAMP solutions for your mission, then implement them successfully. No vendor lock-in, no hidden agendas.'
    },
    {
      icon: Users,
      title: 'Change Management First',
      description: 'Technology alone doesn\'t transform agencies—people do. We integrate change management from day one, ensuring your modernization investments deliver lasting impact.'
    },
    {
      icon: Award,
      title: 'TMF & Modernization Funding Expertise',
      description: 'We\'ve helped agencies secure $45M+ in Technology Modernization Fund awards with compelling business cases and proven implementation track records.'
    }
  ];

  const governmentExperience = [
    { agency: 'Federal Civilian Agencies', projects: '25+ modernization projects', clearance: 'Public Trust' },
    { agency: 'Department of Defense', projects: '10 IT transformation programs', clearance: 'Secret' },
    { agency: 'State & Local Government', projects: '35+ digital transformation initiatives', clearance: 'N/A' }
  ];

  const modernizationApproaches = [
    { 
      title: 'Assess Current State', 
      description: 'Comprehensive assessment of legacy systems, technical debt, and modernization readiness',
      deliverables: ['Current state architecture', 'Technical debt analysis', 'Modernization roadmap']
    },
    { 
      title: 'Select FedRAMP & StateRAMP Platforms', 
      description: 'Vendor-neutral evaluation and selection of optimal cloud platforms and SaaS solutions',
      deliverables: ['Platform comparison matrix', 'TCO analysis', 'Vendor recommendations']
    },
    { 
      title: 'Implement & Migrate', 
      description: 'Phased implementation with zero business disruption, comprehensive testing, and rollback plans',
      deliverables: ['Migration playbooks', 'Cutover plans', 'Rollback procedures']
    },
    { 
      title: 'Train & Adopt', 
      description: 'Role-based training programs, change champion networks, and adoption measurement',
      deliverables: ['Training curricula', 'Adoption dashboards', 'Change management plans']
    },
    { 
      title: 'Optimize & Improve', 
      description: 'Continuous improvement cycles with user feedback, performance tuning, and cost optimization',
      deliverables: ['Optimization reports', 'Cost savings analysis', 'Performance metrics']
    }
  ];

  const tmfSuccessStories = [
    { agency: 'Federal Civilian Agency', award: '$15M', project: 'Legacy mainframe modernization to cloud-native architecture', roi: '40% cost reduction' },
    { agency: 'Department of Veterans Affairs', award: '$18M', project: 'Citizen services digital transformation', roi: '60% faster service delivery' },
    { agency: 'Department of Justice', award: '$12M', project: 'Case management system modernization', roi: '50% efficiency gain' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Implementation Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Federal IT Modernization & Transformation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We guide federal, state, and local agencies through IT modernization with vendor-neutral platform selection, implementation roadmaps, change management, and Technology Modernization Fund (TMF) support. Transform legacy systems into modern, cloud-based operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Start Modernization Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/compliance-roadmap">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Generate Modernization Roadmap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Agencies Choose Thalen Technologies for Modernization</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not a platform vendor—we're modernization specialists who help you select and implement the right solutions for your mission.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-8">
                    <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Modernization Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From platform selection to change management and TMF support
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {primaryServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-colors group">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={service.link}>
                      <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Capabilities */}
          <div className="bg-background rounded-lg p-8 border-2">
            <h3 className="text-2xl font-bold mb-6">Additional Modernization Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <div key={index} className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">{capability.name}</div>
                    <div className="text-sm text-muted-foreground">{capability.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Experience */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Government Modernization Experience</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by federal, state, and local agencies for mission-critical transformations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {governmentExperience.map((exp, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">{exp.agency}</h3>
                    <p className="text-2xl font-bold text-accent mb-2">{exp.projects}</p>
                    <div className="inline-block bg-secondary px-3 py-1 rounded-full text-sm">
                      Clearance: {exp.clearance}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modernization Approach */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Modernization Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven 5-phase methodology that ensures successful transformation
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent/30 hidden md:block" />
            
            <div className="space-y-8">
              {modernizationApproaches.map((phase, index) => (
                <div key={index} className="relative md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-6 h-8 w-8 rounded-full bg-accent flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                    {index + 1}
                  </div>
                  
                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground mb-4">{phase.description}</p>
                      <div>
                        <div className="text-sm font-semibold mb-2">Key Deliverables:</div>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <span key={idx} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TMF Success Stories */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technology Modernization Fund (TMF) Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've helped agencies secure $45M+ in TMF awards with compelling business cases and proven implementation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tmfSuccessStories.map((story, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">{story.award}</div>
                      <div className="text-sm text-muted-foreground">TMF Award</div>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{story.agency}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{story.project}</p>
                  <div className="bg-secondary rounded-lg px-3 py-2">
                    <div className="text-xs text-muted-foreground">Achieved ROI:</div>
                    <div className="font-semibold">{story.roi}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90">
                Explore TMF Opportunities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize Your Agency?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our modernization specialists can help you assess your current state, select optimal platforms, and execute a successful transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Modernization Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/federal-solutions">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Federal Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
