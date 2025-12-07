import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Bot, FileCheck, Cog, GraduationCap, CheckCircle2, Shield, Users, Award, TrendingUp } from 'lucide-react';

export default function RPA() {
  // Primary service offerings (4 core capabilities)
  const primaryServices = [
    {
      icon: FileCheck,
      title: 'Process Assessment & Discovery',
      description: 'We identify high-value automation opportunities through comprehensive process analysis, ROI modeling, and feasibility assessment for government agencies (federal, state, and local).',
      benefits: ['Process discovery workshops', 'Automation ROI analysis', 'Feasibility assessment'],
      link: '/services/automation/rpa/process-assessment'
    },
    {
      icon: Bot,
      title: 'RPA Platform Selection & Implementation',
      description: 'Vendor-neutral selection and implementation of FedRAMP-authorized RPA platforms (UiPath Gov, Automation Anywhere Gov, Blue Prism Gov) tailored to your mission.',
      benefits: ['FedRAMP platform selection', 'Bot development & deployment', 'System integration'],
      link: '/services/automation/rpa/platform-implementation'
    },
    {
      icon: Shield,
      title: 'ATO & Compliance Documentation',
      description: 'Complete security controls documentation, FedRAMP/FISMA compliance packages, and ATO support for RPA deployments in government environments.',
      benefits: ['Security controls documentation', 'FedRAMP compliance packages', 'ATO support'],
      link: '/services/automation/rpa/ato-compliance'
    },
    {
      icon: GraduationCap,
      title: 'RPA Center of Excellence (CoE) Setup',
      description: 'Establish governance frameworks, development standards, training programs, and ongoing support for sustainable enterprise RPA programs.',
      benefits: ['Governance frameworks', 'Developer training programs', 'Best practices & standards'],
      link: '/services/automation/rpa/coe-setup'
    }
  ];

  // Additional capabilities (compact format)
  const additionalCapabilities = [
    { name: 'Bot Maintenance & Optimization', description: 'Ongoing bot monitoring, performance tuning, and scaling support' },
    { name: 'Intelligent Document Processing (IDP)', description: 'AI-powered document extraction and classification for unstructured data' },
    { name: 'Process Mining & Optimization', description: 'Discover automation opportunities through process mining analytics' },
    { name: 'Hyperautomation Strategy', description: 'Combine RPA with AI/ML, OCR, and workflow orchestration for end-to-end automation' }
  ];

  const keyDifferentiators = [
    {
      icon: Shield,
      title: 'FedRAMP RPA Platforms',
      description: 'Deep implementation experience with all major FedRAMP-authorized RPA platforms including UiPath Gov, Automation Anywhere Gov, and Blue Prism Gov.'
    },
    {
      icon: Users,
      title: 'Vendor-Neutral RPA Consulting',
      description: 'We help you select the RIGHT RPA platform for your mission requirements, then implement it with proven government-specific best practices.'
    },
    {
      icon: Award,
      title: 'Mission-Focused Automation',
      description: 'RPA solutions designed for measurable mission impact—faster processing, reduced errors, and operational cost savings.'
    }
  ];

  const governmentExperience = [
    { agency: 'Federal Agency', project: 'Claims Processing Automation', outcome: '85% automation rate achieved' },
    { agency: 'Department of Defense', project: 'Contract Management RPA', outcome: '$4.2M annual cost savings' },
    { agency: 'Department of Veterans Affairs', project: 'Benefits Processing Bots', outcome: '60% faster processing time' }
  ];

  const fedrampPlatforms = [
    {
      category: 'Enterprise RPA Platforms',
      platforms: ['UiPath Government Cloud', 'Automation Anywhere Gov', 'Blue Prism Government', 'Microsoft Power Automate Gov']
    },
    {
      category: 'Intelligent Document Processing',
      platforms: ['UiPath Document Understanding', 'Automation Anywhere IQ Bot', 'ABBYY FlexiCapture Gov', 'Kofax TotalAgility']
    },
    {
      category: 'Process Mining & Analytics',
      platforms: ['UiPath Process Mining', 'Celonis Government', 'Microsoft Process Advisor', 'ARIS Process Mining']
    },
    {
      category: 'Workflow Orchestration',
      platforms: ['ServiceNow Gov', 'Pega Government Cloud', 'Appian Government Cloud', 'Camunda']
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Government RPA Implementation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We help government agencies (federal, state, and local) implement FedRAMP and StateRAMP-authorized RPA platforms with process discovery, bot development, ATO documentation, and Center of Excellence setup. Vendor-neutral consulting with proven expertise across all major RPA platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request RPA Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/automation/rpa/process-assessment">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Start Process Discovery
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
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary RPA Services */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core RPA Implementation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end RPA capabilities from process discovery to Center of Excellence, designed for government agencies (federal, state, and local) requiring FedRAMP and StateRAMP compliance and mission-critical reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {primaryServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all border-2 hover:border-accent">
                <CardContent className="p-8">
                  <service.icon className="h-16 w-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
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

          {/* Additional Capabilities - Compact Format */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Additional RPA Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start p-6 bg-background rounded-lg border-2 border-border hover:border-accent/50 transition-colors">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold mb-1">{capability.name}</h4>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government RPA Experience */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Government RPA Implementation Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience implementing RPA platforms and automation solutions across government agencies (federal, state, and local) with measurable mission impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {governmentExperience.map((exp, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-2xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{exp.agency}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.project}</p>
                  <p className="text-lg font-bold text-primary">{exp.outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button variant="outline" size="lg">
                View All RPA Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FedRAMP RPA Platform Expertise */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">FedRAMP-Authorized RPA Platform Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement and integrate FedRAMP-authorized RPA platforms from leading vendors, helping you select the right tools for your mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fedrampPlatforms.map((category, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.platforms.map((platform, idx) => (
                      <span key={idx} className="px-3 py-1 bg-card border border-border text-primary rounded-full text-sm font-medium">
                        {platform}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Plus 20+ additional FedRAMP-authorized RPA and intelligent automation platforms including WorkFusion, Kryon, and more.
            </p>
            <Link href="/partners">
              <Button variant="outline" size="lg">
                View All RPA Platforms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Government Operations?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Schedule an RPA assessment to discuss your agency's automation opportunities, evaluate FedRAMP platform options, and develop a roadmap for mission-critical automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request RPA Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services/automation/rpa/process-assessment">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Start Process Discovery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Success Story
            </div>
            <h2 className="text-4xl font-bold mb-4">See Government RPA in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how a federal agency achieved 85% process automation with FedRAMP-authorized RPA platforms and comprehensive ATO documentation.
            </p>
          </div>
          <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-2xl transition-all active:scale-95">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-12 flex flex-col justify-center">
                <div className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit">
                  Federal Government
                </div>
                <h3 className="text-3xl font-bold mb-4">Federal Agency Achieves 85% Process Automation</h3>
                <p className="text-muted-foreground mb-6">
                  Implemented UiPath Gov RPA platform with comprehensive ATO documentation, reducing claims processing time from 6 weeks to 2 days while maintaining Top Secret/SCI compliance.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-primary">85%</div>
                    <div className="text-sm text-muted-foreground">Process Automation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">6w → 2d</div>
                    <div className="text-sm text-muted-foreground">Processing Time</div>
                  </div>
                </div>
                <Link href="/case-studies/federal-automation">
                  <Button size="lg" className="bg-orange-gradient hover:opacity-90 w-full">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="/rocket-federal.webp" 
                  alt="Federal Agency RPA Implementation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
