import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Users, Award, Bot, Network, GitBranch } from 'lucide-react';

export default function Automation() {
  // Primary service offerings (3 core automation capabilities)
  const primaryServices = [
    {
      icon: Bot,
      title: 'Government RPA Implementation',
      description: 'Implement FedRAMP-authorized RPA platforms (UiPath Gov, Automation Anywhere Gov, Blue Prism Gov) with process discovery, bot development, ATO documentation, and Center of Excellence setup.',
      benefits: ['Process assessment & discovery', 'FedRAMP platform deployment', 'ATO compliance documentation'],
      link: '/services/automation/rpa'
    },
    {
      icon: Network,
      title: 'Enterprise Integration Services',
      description: 'Connect FedRAMP-authorized platforms and legacy government systems with secure APIs, data synchronization, and compliance-ready integration patterns.',
      benefits: ['50+ FedRAMP platform connectors', 'Legacy system modernization', 'API security & governance'],
      link: '/services/automation/integration'
    },
    {
      icon: GitBranch,
      title: 'Workflow Orchestration',
      description: 'Automate end-to-end business processes across multiple departments and systems with intelligent workflow orchestration and process optimization.',
      benefits: ['Cross-system automation', 'Business process management', 'Real-time monitoring'],
      link: '/services/automation/orchestration'
    }
  ];

  // Additional capabilities (compact format)
  const additionalCapabilities = [
    { name: 'Intelligent Document Processing (IDP)', description: 'AI-powered document extraction and classification for unstructured data' },
    { name: 'Process Mining & Discovery', description: 'Identify automation opportunities through process analytics and mining' },
    { name: 'Hyperautomation Strategy', description: 'Combine RPA, AI/ML, OCR, and workflow tools for end-to-end automation' },
    { name: 'Bot Maintenance & Support', description: 'Ongoing monitoring, optimization, and scaling of automation solutions' }
  ];

  const keyDifferentiators = [
    {
      icon: Shield,
      title: 'FedRAMP Platform Expertise',
      description: 'Deep implementation experience with 50+ FedRAMP-authorized automation platforms including UiPath Gov, Automation Anywhere Gov, and ServiceNow Gov.'
    },
    {
      icon: Users,
      title: 'Vendor-Neutral Consulting',
      description: 'We help you select the RIGHT automation platforms for your mission requirements, then implement them with proven government-specific best practices.'
    },
    {
      icon: Award,
      title: 'Mission-Focused Implementation',
      description: 'Automation solutions designed for measurable mission impact—faster processing, reduced errors, compliance assurance, and operational cost savings.'
    }
  ];

  const governmentExperience = [
    { agency: 'Federal Agency', project: 'Claims Processing Automation', outcome: '85% automation rate achieved' },
    { agency: 'Department of Defense', project: 'Contract Management RPA', outcome: '$4.2M annual cost savings' },
    { agency: 'Department of Veterans Affairs', project: 'Benefits Processing Bots', outcome: '60% faster processing time' }
  ];

  const fedrampPlatforms = [
    {
      category: 'RPA & Intelligent Automation',
      platforms: ['UiPath Government Cloud', 'Automation Anywhere Gov', 'Blue Prism Government', 'Microsoft Power Automate Gov']
    },
    {
      category: 'Integration & iPaaS',
      platforms: ['MuleSoft Government Cloud', 'Dell Boomi Gov', 'Informatica Gov', 'SnapLogic Gov']
    },
    {
      category: 'Workflow & BPM',
      platforms: ['ServiceNow Gov', 'Pega Government Cloud', 'Appian Government Cloud', 'Camunda']
    },
    {
      category: 'Document Processing',
      platforms: ['UiPath Document Understanding', 'Automation Anywhere IQ Bot', 'ABBYY FlexiCapture Gov', 'Kofax TotalAgility']
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
              Core Service
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Government Automation Implementation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We help government agencies implement FedRAMP-authorized automation platforms with RPA, systems integration, and workflow orchestration. Vendor-neutral consulting with proven expertise across all major automation technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request Automation Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/automation/rpa">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Explore RPA Services
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

      {/* Primary Automation Services */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Automation Implementation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end automation capabilities from RPA to enterprise integration, designed for government agencies requiring FedRAMP compliance and mission-critical reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
            <h3 className="text-2xl font-bold mb-8 text-center">Additional Automation Capabilities</h3>
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

      {/* Government Automation Experience */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Government Automation Implementation Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven track record implementing automation platforms and solutions across government agencies with measurable mission impact.
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
                View All Automation Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FedRAMP Automation Platform Expertise */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">FedRAMP-Authorized Automation Platform Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement and integrate FedRAMP-authorized automation platforms from leading vendors, helping you select the right tools for your mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fedrampPlatforms.map((category, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all active:scale-95">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.platforms.map((platform, idx) => (
                      <span key={idx} className="bg-card border border-border text-primary px-3 py-1 rounded-full text-sm font-medium">
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
              Plus 30+ additional FedRAMP-authorized automation and integration platforms
            </p>
            <Link href="/federal-solutions">
              <Button variant="outline" size="lg">
                View All FedRAMP Platforms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your Government Operations?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule an automation assessment to discuss your agency's automation opportunities, evaluate FedRAMP platform options, and develop a roadmap for mission-critical automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Assessment
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
