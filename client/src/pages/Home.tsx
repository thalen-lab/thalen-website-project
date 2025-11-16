import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Shield, 
  Cloud, 
  BarChart3,
  Cpu,
  Code,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);

  const heroSlides = [
    {
      image: '/images/hero-datacenter.jpg',
      title: 'Intelligence, Delivered',
      subtitle: 'Strategic automation with AI-assisted implementation'
    },
    {
      image: '/images/hero-automation.jpg',
      title: 'Transform Operations',
      subtitle: 'Measurable ROI and sustained business transformation'
    },
    {
      image: '/images/hero-federal.jpg',
      title: 'Government-Grade Security',
      subtitle: 'FedRAMP, CMMC, and Top Secret/SCI certified'
    }
  ];

  const services = [
    {
      icon: Cpu,
      title: 'Intelligent Automation & Process Optimization',
      description: 'Comprehensive process assessment, strategic automation design, and AI-assisted implementation delivering measurable ROI.',
      href: '/services/automation',
      stats: ['85% Efficiency Gain', '12mo ROI Breakeven']
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Intelligence',
      description: 'Real-time analytics platforms with ML/AI models for intelligent automation and optimized performance at operational scale.',
      href: '/services/analytics',
      stats: ['Real-time Insights', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Modernization',
      description: 'Zero-downtime migration and government-grade security with DevOps solutions that support and scale your business.',
      href: '/services/cloud',
      stats: ['Zero Downtime', 'Multi-Cloud Strategy']
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'FedRAMP, CMMC, ISO 27001 compliance solutions with zero-trust architecture and continuous monitoring.',
      href: '/services/cybersecurity',
      stats: ['FedRAMP Authorized', 'CMMC Level 3']
    },
    {
      icon: Code,
      title: 'Application Development & Integration',
      description: 'Custom applications, seamless integrations, and workflow automation for enhanced productivity.',
      href: '/services/app-development',
      stats: ['API Development', 'Microservices']
    },
    {
      icon: Users,
      title: 'Digital Transformation Enablement',
      description: 'End-to-end transformation support including change management, training, and adoption strategies.',
      href: '/services/digital-transformation',
      stats: ['Change Management', 'Success Metrics']
    }
  ];

  const caseStudies = [
    {
      category: 'Federal Government',
      title: 'Federal Agency Achieves 85% Process Automation',
      description: 'Transformed manual workflows into intelligent automation, reducing processing time from 6 weeks to 2 days.',
      metric: '85%',
      metricLabel: 'Automation Rate',
      href: '/case-studies/federal-automation'
    },
    {
      category: 'Healthcare',
      title: 'Healthcare System Saves $12M Through AI Analytics',
      description: 'Data intelligence platform delivered real-time insights improving patient outcomes by 40%.',
      metric: '$12M',
      metricLabel: 'Annual Savings',
      href: '/case-studies/healthcare-ai'
    },
    {
      category: 'Defense',
      title: 'Defense Contractor: Zero-Downtime Cloud Migration',
      description: 'Modernized entire infrastructure while achieving CMMC Level 3 certification with 100% uptime.',
      metric: '100%',
      metricLabel: 'Uptime Maintained',
      href: '/case-studies/defense-cloud'
    },
    {
      category: 'Manufacturing',
      title: 'Manufacturing Giant Achieves 99.2% Uptime',
      description: 'Cybersecurity and predictive maintenance eliminated 75% of unplanned downtime across 50+ facilities.',
      metric: '99.2%',
      metricLabel: 'System Uptime',
      href: '/case-studies/manufacturing-uptime'
    }
  ];

  const stats = [
    { value: '15+', label: 'Years of Automation Strategy Expertise' },
    { value: '$2.3B+', label: 'In Projected Client ROI' },
    { value: '7+', label: 'Security Clearance Certifications' },
    { value: '25+', label: 'Automation Technologies Mastered' }
  ];

  const certifications = [
    'FedRAMP Authorized',
    'CMMC Level 3',
    'ISO 27001:2022',
    'NIST Framework v2.0',
    'SOC 2 Type II',
    'FISMA Moderate ATO',
    'HIPAA BAA Ready',
    'TS/SCI Cleared Team'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section with Rotating Images */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
            </div>
            <div className="relative container h-full flex items-center">
              <div className="max-w-2xl text-primary-foreground">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 transition-opacity">
                  <Link href="/contact">
                    Schedule Strategic Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="/insights">
                    View ROI Methodology
                  </Link>
                </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Hero Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentHeroIndex ? 'bg-accent w-8' : 'bg-primary-foreground/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-navy-gradient diagonal-top text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Automation Intelligence Services</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Proven methodologies and expert implementation designed to address your most critical business transformation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/10 border-primary-foreground/20 backdrop-blur hover:bg-card/20 transition-all group">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-primary-foreground">{service.title}</h3>
                  <p className="text-primary-foreground/80 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.stats.map((stat, idx) => (
                      <span key={idx} className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                        {stat}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent group-hover:border-accent transition-all">
                    <Link href={service.href}>
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 diagonal-top">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Transformation Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world case studies demonstrating how NexDyne's strategic automation delivers measurable ROI across mission-critical environments.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="bg-primary text-primary-foreground p-12 flex flex-col justify-center">
                    <div className="text-sm font-semibold text-accent mb-2">{caseStudies[currentCaseStudy].category}</div>
                    <h3 className="text-3xl font-bold mb-4">{caseStudies[currentCaseStudy].title}</h3>
                    <p className="text-primary-foreground/90 mb-6">{caseStudies[currentCaseStudy].description}</p>
                  <Button asChild className="bg-orange-gradient hover:opacity-90 w-fit">
                    <Link href={caseStudies[currentCaseStudy].href}>
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  </div>
                  <div className="bg-accent/10 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl font-bold text-accent mb-2">{caseStudies[currentCaseStudy].metric}</div>
                      <div className="text-lg text-muted-foreground">{caseStudies[currentCaseStudy].metricLabel}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={prevCaseStudy}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-primary text-primary-foreground p-3 rounded-full hover:bg-accent transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextCaseStudy}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-primary text-primary-foreground p-3 rounded-full hover:bg-accent transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCaseStudy(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentCaseStudy ? 'bg-accent w-8' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise & Government Security & Compliance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for the most demanding security and compliance requirements across government agencies and enterprise organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center flex items-center justify-center">
                <div>
                  <CheckCircle2 className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-sm font-semibold">{cert}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="flex items-start justify-between mb-12">
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground mb-2">Partners</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                With these partners we deliver enterprise-grade solutions
              </h2>
              <Link href="/partners">
                <a className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-base font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
                  All partners
                </a>
              </Link>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const container = document.getElementById('partners-carousel');
                  if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="p-3 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  const container = document.getElementById('partners-carousel');
                  if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="p-3 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div id="partners-carousel" className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
            {/* Process Automation Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">Process Automation</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  UiPath
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Automation Anywhere
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Blue Prism
                </span>
              </div>
            </div>

            {/* Cloud Platforms Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  AWS GovCloud
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Azure Government
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Google Cloud
                </span>
              </div>
            </div>

            {/* Data & Analytics Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">Data & Analytics</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Snowflake
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Databricks
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Tableau
                </span>
              </div>
            </div>

            {/* Cybersecurity Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">Cybersecurity</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Palo Alto Networks
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  CrowdStrike
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Splunk
                </span>
              </div>
            </div>

            {/* AI & Machine Learning Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  OpenAI
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Anthropic
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  DataRobot
                </span>
              </div>
            </div>

            {/* Enterprise Software Card */}
            <div className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">Enterprise Software</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  ServiceNow
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Salesforce
                </span>
                <span className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  SAP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient diagonal-top text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive automation assessment and discover how our proven methodology can deliver measurable ROI for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 transition-opacity">
              <Link href="/contact">
                Schedule Strategic Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/about">
                Learn About Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
