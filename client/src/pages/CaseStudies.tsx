import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');

  const caseStudies = [
    {
      category: 'Federal Government',
      title: 'Federal Agency Achieves 85% Process Automation',
      description: 'Transformed manual workflows into intelligent automation, reducing processing time from 6 weeks to 2 days while maintaining Top Secret/SCI compliance.',
      metrics: [
        { value: '85%', label: 'Automation Rate' },
        { value: '6 weeks → 2 days', label: 'Processing Time' }
      ],
      tags: ['Automation', 'Compliance', 'Federal'],
      href: '/case-studies/federal-automation'
    },
    {
      category: 'Healthcare',
      title: 'Healthcare System Saves $12M Through AI Analytics',
      description: 'Data intelligence platform delivered real-time insights improving patient outcomes by 40% while achieving full HIPAA compliance.',
      metrics: [
        { value: '$12M', label: 'Annual Savings' },
        { value: '40%', label: 'Outcome Improvement' }
      ],
      tags: ['Analytics', 'AI', 'Healthcare'],
      href: '/case-studies/healthcare-ai'
    },
    {
      category: 'Defense',
      title: 'Defense Contractor: Zero-Downtime Cloud Migration',
      description: 'Modernized entire infrastructure while achieving CMMC Level 3 certification with 100% operational continuity.',
      metrics: [
        { value: '100%', label: 'Uptime Maintained' },
        { value: 'CMMC L3', label: 'Certified' }
      ],
      tags: ['Cloud', 'Security', 'Defense'],
      href: '/case-studies/defense-cloud'
    },
    {
      category: 'Manufacturing',
      title: 'Manufacturing Giant Achieves 99.2% Uptime',
      description: 'Cybersecurity and predictive maintenance eliminated 75% of unplanned downtime across 50+ facilities.',
      metrics: [
        { value: '99.2%', label: 'System Uptime' },
        { value: '75%', label: 'Downtime Reduction' }
      ],
      tags: ['Cybersecurity', 'IoT', 'Manufacturing'],
      href: '/case-studies/manufacturing-uptime'
    },
    {
      category: 'Energy',
      title: 'Energy Grid Automation Prevents $500M in Outage Costs',
      description: 'Smart grid automation for regional utility serving 12M customers achieved 99.97% reliability through predictive maintenance.',
      metrics: [
        { value: '$500M', label: 'Costs Prevented' },
        { value: '99.97%', label: 'Grid Reliability' }
      ],
      tags: ['Automation', 'Energy', 'IoT'],
      href: '/case-studies/energy-grid'
    },
    {
      category: 'Financial Services',
      title: 'Bank Achieves Real-Time Fraud Detection at Scale',
      description: 'AI-powered fraud detection processing 50M+ daily transactions with 99.9% accuracy and zero false positives.',
      metrics: [
        { value: '50M+', label: 'Daily Transactions' },
        { value: '99.9%', label: 'Detection Accuracy' }
      ],
      tags: ['AI', 'Financial', 'Security'],
      href: '/case-studies/bank-fraud'
    },
    {
      category: 'Federal Government',
      title: 'Intelligence Agency: Zero Security Incidents in 3 Years',
      description: 'Comprehensive zero-trust architecture for classified information processing with FedRAMP High authorization.',
      metrics: [
        { value: '0', label: 'Security Incidents' },
        { value: '3 Years', label: 'Perfect Record' }
      ],
      tags: ['Security', 'Compliance', 'Federal'],
      href: '/case-studies/intelligence-security'
    },
    {
      category: 'Healthcare',
      title: 'Hospital Network Reduces Wait Times by 60%',
      description: 'Process automation and patient flow optimization across 15 facilities serving 2M+ patients annually.',
      metrics: [
        { value: '60%', label: 'Wait Time Reduction' },
        { value: '2M+', label: 'Patients Served' }
      ],
      tags: ['Automation', 'Healthcare', 'Operations'],
      href: '/case-studies/hospital-wait-times'
    },
    {
      category: 'Manufacturing',
      title: 'Aerospace Manufacturer Achieves Digital Twin Integration',
      description: 'Real-time digital twin platform optimizing production across 8 facilities with 35% efficiency gains.',
      metrics: [
        { value: '35%', label: 'Efficiency Gain' },
        { value: '8', label: 'Facilities' }
      ],
      tags: ['Digital Twin', 'Manufacturing', 'IoT'],
      href: '/case-studies/aerospace-digital-twin'
    }
  ];

  const industries = ['All', 'Federal Government', 'Healthcare', 'Manufacturing', 'Financial Services', 'Defense', 'Energy'];
  const services = ['All', 'Automation', 'Analytics', 'Cloud', 'Cybersecurity', 'AI', 'Security'];

  // Filter case studies based on selected industry and service
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.category === selectedIndustry;
    const matchesService = selectedService === 'All' || study.tags.some(tag => 
      tag.toLowerCase() === selectedService.toLowerCase()
    );
    return matchesIndustry && matchesService;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Proven Transformation Results
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Real-world case studies demonstrating how NexDyne's strategic automation delivers measurable ROI across mission-critical environments.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100+', label: 'Successful Projects' },
              { value: '$2.3B+', label: 'Client ROI Delivered' },
              { value: '85%', label: 'Avg Efficiency Gain' },
              { value: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container">
          {/* Industry Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Filter by Industry</h3>
            <div className="flex flex-wrap gap-2">
              {industries.map(industry => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                  className={selectedIndustry === industry ? 'bg-orange-gradient' : ''}
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>

          {/* Service Filters */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Filter by Service</h3>
            <div className="flex flex-wrap gap-2">
              {services.map(service => (
                <Button
                  key={service}
                  variant={selectedService === service ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedService(service)}
                  className={selectedService === service ? 'bg-orange-gradient' : ''}
                >
                  {service}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            {filteredCaseStudies.length === 0 ? (
              'No case studies found'
            ) : (
              <>
                Showing {filteredCaseStudies.length} case {filteredCaseStudies.length === 1 ? 'study' : 'studies'}
                {selectedIndustry !== 'All' && ` in ${selectedIndustry}`}
                {selectedService !== 'All' && ` for ${selectedService}`}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No Case Studies Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to see more results.
              </p>
              <Button
                onClick={() => {
                  setSelectedIndustry('All');
                  setSelectedService('All');
                }}
                variant="outline"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="text-sm font-semibold text-accent mb-3">{study.category}</div>
                    <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">{study.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-accent/10 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-accent mb-1">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-secondary px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link href={study.href}>
                      <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all">
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Discover how NexDyne's proven methodology can deliver transformative results for your organization.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Strategic Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
