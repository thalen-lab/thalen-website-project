import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Bot, FileCheck, Cog, GraduationCap, Shield } from 'lucide-react';

export default function RPA() {
  // Primary service offerings (4 core capabilities)
  const primaryServices = [
    {
      icon: FileCheck,
      title: 'Process Assessment & Discovery',
      description: 'We identify high-value automation opportunities through comprehensive process analysis, ROI modeling, and feasibility assessment for government agencies (federal, state, and local).',
      link: '/services/automation/rpa/process-assessment'
    },
    {
      icon: Bot,
      title: 'RPA Platform Selection & Implementation',
      description: 'Vendor-neutral selection and implementation of FedRAMP-authorized RPA platforms (UiPath Gov, Automation Anywhere Gov, Blue Prism Gov) tailored to your mission.',
      link: '/services/automation/rpa/platform-implementation'
    },
    {
      icon: Shield,
      title: 'ATO & Compliance Documentation',
      description: 'Complete security controls documentation, FedRAMP/FISMA compliance packages, and ATO support for RPA deployments in government environments.',
      link: '/services/automation/rpa/ato-compliance'
    },
    {
      icon: GraduationCap,
      title: 'RPA Center of Excellence (CoE) Setup',
      description: 'Establish governance frameworks, development standards, training programs, and ongoing support for sustainable enterprise RPA programs.',
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
      title: 'FedRAMP RPA Platforms',
      description: 'Deep implementation experience with all major FedRAMP-authorized RPA platforms including UiPath Gov, Automation Anywhere Gov, and Blue Prism Gov.'
    },
    {
      title: 'Vendor-Neutral RPA Consulting',
      description: 'We help you select the RIGHT RPA platform for your mission requirements, then implement it with proven government-specific best practices.'
    },
    {
      title: 'Mission-Focused Automation',
      description: 'RPA solutions designed for measurable mission impact—faster processing, reduced errors, and operational cost savings.'
    }
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
            <div className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-500/30">
              IMPLEMENTATION SERVICES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Government RPA Implementation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We help government agencies (federal, state, and local) implement FedRAMP and StateRAMP-authorized RPA platforms with process discovery, bot development, ATO documentation, and Center of Excellence setup. Vendor-neutral consulting with proven expertise across all major RPA platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Request RPA Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Thalen Technologies for RPA</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Three core strengths that define our approach to government RPA implementation.
            </p>
          </div>

          <div className="space-y-12">
            {keyDifferentiators.map((item, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-8 py-4">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="container">
        <div className="border-t border-border"></div>
      </div>

      {/* Primary RPA Services - Z100 Editorial Style */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core RPA Implementation Services</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              End-to-end RPA capabilities from process discovery to Center of Excellence, designed for government agencies (federal, state, and local) requiring FedRAMP and StateRAMP compliance and mission-critical reliability.
            </p>
          </div>

          <div className="space-y-16">
            {primaryServices.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-6 mb-4">
                  <service.icon className="h-12 w-12 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <Link href={service.link}>
                      <Button variant="outline" className="border-2 hover:border-accent hover:bg-accent/5">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                {index < primaryServices.length - 1 && (
                  <div className="border-t border-border mt-16"></div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Capabilities - Compact Format */}
          <div className="mt-20 pt-16 border-t border-border">
            <h3 className="text-2xl font-bold mb-8">Additional RPA Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold mb-1">{capability.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* FedRAMP RPA Platform Expertise */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">FedRAMP-Authorized RPA Platform Expertise</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We implement and integrate FedRAMP-authorized RPA platforms from leading vendors, helping you select the right tools for your mission.
            </p>
          </div>

          <div className="space-y-12">
            {fedrampPlatforms.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.platforms.map((platform, idx) => (
                    <span key={idx} className="bg-secondary border border-border text-foreground px-4 py-2 rounded-full text-sm font-medium">
                      {platform}
                    </span>
                  ))}
                </div>
                {index < fedrampPlatforms.length - 1 && (
                  <div className="border-t border-border mt-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Implement RPA in Your Agency?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Schedule a free RPA assessment to identify high-impact automation opportunities and build your implementation roadmap.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
