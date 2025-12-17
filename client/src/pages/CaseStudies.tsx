import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { useLQIP } from '@/hooks/useLQIP';
import { usePrefetch } from '@/hooks/usePrefetch';
import Footer from '@/components/Footer';
import { ArrowRight, Search, X, Bookmark } from 'lucide-react';
import SaveSearchDialog from '@/components/SaveSearchDialog';
import SavedSearchesDropdown from '@/components/SavedSearchesDropdown';
import { trpc } from '@/lib/trpc';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);

  const { data: user } = trpc.auth.me.useQuery();

  const hasActiveFilters = searchQuery !== '' || selectedIndustry !== 'All' || selectedService !== 'All';

  const handleLoadSearch = (search: { searchQuery: string; industry: string; service: string }) => {
    setSearchQuery(search.searchQuery);
    setSelectedIndustry(search.industry);
    setSelectedService(search.service);
  };

  const caseStudies = [
    {
      category: 'Federal Government',
      title: 'Federal Agency Achieves 85% Process Automation',
      description: 'Implemented UiPath RPA platform with FedRAMP authorization for federal agency, automating 85% of manual workflows while maintaining TS/SCI compliance. $4.2M contract delivered 6-month ROI.',
      tags: ['RPA', 'FedRAMP'],
      image: '/rocket-federal.webp',
      href: '/case-studies/federal-automation'
    },
    {
      category: 'Defense',
      title: 'DoD Manufacturing Facility Achieves 99.2% Uptime',
      description: 'Implemented FedRAMP-authorized predictive maintenance platform for DoD manufacturing facility. Achieved CMMC Level 3 certification with 99.2% uptime.',
      tags: ['Cybersecurity', 'IoT', 'CMMC'],
      image: '/manufacturing-security.jpg',
      href: '/case-studies/dod-manufacturing'
    },
    {
      category: 'Federal Government',
      title: 'VA Medical Center Integrates 12 Legacy Systems',
      description: 'Integrated 12 disparate VA healthcare systems using FedRAMP-authorized iPaaS platform for federal operations. Reduced administrative burden by 60% for 8,500 staff members.',
      tags: ['Integration', 'HIPAA', 'FedRAMP'],
      image: '/healthcare-legacy-it.jpg',
      href: '/case-studies/va-healthcare'
    },
    {
      category: 'State Government',
      title: 'State Attorney General Prevents $50M+ in Fraud',
      description: 'Implemented AI-powered fraud detection system with CJIS compliance for state law enforcement. Analyzed 2.3M cases, prevented $50M+ in fraud.',
      tags: ['AI', 'Analytics', 'CJIS'],
      image: '/images/case-studies/state-law-enforcement.jpg',
      href: '/case-studies/state-attorney-general'
    },
    {
      category: 'State Government',
      title: 'State Energy Commission Reduces Grid Outages 65%',
      description: 'Deployed StateRAMP-authorized smart grid platform for state energy commission. Reduced outages by 65% across 4.2M customer service area.',
      tags: ['Automation', 'IoT', 'StateRAMP/GovRAMP'],
      image: '/images/case-studies/energy-grid-control.jpg',
      href: '/case-studies/state-energy-commission'
    },
    {
      category: 'County Government',
      title: 'County Health Department Speeds Outbreak Response 40%',
      description: 'Integrated 8 public health systems for county health department. Achieved 40% faster outbreak response with HIPAA-compliant data sharing.',
      tags: ['Integration', 'HIPAA'],
      image: '/images/case-studies/public-health-data.jpg',
      href: '/case-studies/county-health-department'
    },
    {
      category: 'Defense',
      title: 'Defense Contractor: Zero-Downtime Cloud Migration',
      description: 'Migrated 150+ applications and 500TB classified data to AWS GovCloud and Azure Government. Achieved CMMC Level 3 with 100% uptime and $4.5M annual savings.',
      tags: ['Cloud', 'Cybersecurity', 'CMMC'],
      image: '/images/case-studies/defense-cyber-ops.jpg',
      href: '/case-studies/defense-cloud'
    },
    {
      category: 'Healthcare',
      title: 'Healthcare System Saves $12M Through AI Analytics',
      description: 'Data intelligence platform delivered real-time insights improving patient outcomes by 40% while achieving full HIPAA compliance across 15 facilities.',
      tags: ['AI', 'Analytics', 'HIPAA'],
      image: '/images/case-studies/healthcare-analytics.jpg',
      href: '/case-studies/healthcare-ai'
    },
    {
      category: 'Manufacturing',
      title: 'Manufacturing Giant Achieves 99.2% Uptime',
      description: 'Cybersecurity and predictive maintenance eliminated 75% of unplanned downtime across 50+ facilities.',
      tags: ['Cybersecurity', 'IoT', 'Predictive Analytics'],
      image: '/images/case-studies/manufacturing-facility.jpg',
      href: '/case-studies/manufacturing-uptime'
    },
    {
      category: 'Energy',
      title: 'Energy Company Deploys $500M Smart Grid',
      description: 'Modernized energy infrastructure serving 8M customers with real-time monitoring and automated response systems.',
      tags: ['IoT', 'Cloud', 'Automation'],
      image: '/images/case-studies/smart-grid.jpg',
      href: '/case-studies/energy-grid'
    },
    {
      category: 'Financial Services',
      title: 'Bank Prevents $45M in Fraud with AI',
      description: 'Real-time fraud detection system analyzing 50M+ transactions daily with 99.7% accuracy and sub-second response times.',
      tags: ['AI', 'Cybersecurity', 'Analytics'],
      image: '/images/case-studies/financial-security.jpg',
      href: '/case-studies/bank-fraud'
    },
    {
      category: 'Defense',
      title: 'Intelligence Agency Achieves TS/SCI Collaboration',
      description: 'Secure collaboration platform enabling real-time intelligence sharing across 12 agencies with zero security incidents.',
      tags: ['Cybersecurity', 'Cloud', 'TS/SCI'],
      image: '/images/case-studies/intelligence-ops.jpg',
      href: '/case-studies/intelligence-security'
    },
    {
      category: 'Healthcare',
      title: 'Hospital Reduces Wait Times 65%',
      description: 'Patient flow optimization platform reduced ER wait times from 4.5 hours to 1.5 hours while improving satisfaction scores by 85%.',
      tags: ['Analytics', 'Automation', 'HIPAA'],
      image: '/images/case-studies/hospital-operations.jpg',
      href: '/case-studies/hospital-wait-times'
    },
    {
      category: 'Defense',
      title: 'Aerospace Contractor Implements Digital Twin',
      description: 'Digital twin platform reduced design costs by 40% and accelerated time-to-market by 6 months for next-gen aircraft.',
      tags: ['AI', 'IoT', 'Cloud'],
      image: '/images/case-studies/aerospace-engineering.jpg',
      href: '/case-studies/aerospace-digital-twin'
    },
    {
      category: 'Federal Government',
      title: 'VA Reduces Claims Processing Time 60% with Predictive Analytics',
      description: 'Predictive analytics platform processing 2M+ claims annually with 60% faster processing and 95% accuracy.',
      tags: ['AI', 'Analytics', 'FedRAMP'],
      image: '/images/case-studies/va-analytics.jpg',
      href: '/case-studies/va-predictive-analytics'
    },
    {
      category: 'Defense',
      title: 'DOD Saves $12M Annually with Automated Data Pipelines',
      description: 'Automated data pipelines processing 500TB+ classified data daily with 99.9% uptime and $12M annual savings.',
      tags: ['Cloud', 'Automation', 'CMMC'],
      image: '/images/case-studies/dod-data-center.jpg',
      href: '/case-studies/dod-data-pipelines'
    },
    {
      category: 'Federal Government',
      title: 'HHS Achieves Real-Time Public Health Surveillance',
      description: 'Real-time surveillance platform monitoring 50 states with 78% faster outbreak detection and automated alerting.',
      tags: ['Analytics', 'Cloud', 'FedRAMP'],
      image: '/images/case-studies/public-health-monitoring.jpg',
      href: '/case-studies/hhs-public-health'
    },
    {
      category: 'State Government',
      title: 'State DOT Modernizes Asset Management with 92% Efficiency Gain',
      description: 'Migrated 40-year-old COBOL mainframe to Salesforce Government Cloud, achieving 92% efficiency improvement and $3.8M annual savings.',
      tags: ['Cloud', 'Integration', 'StateRAMP'],
      image: '/images/case-studies/dot-infrastructure.jpg',
      href: '/case-studies/state-dot'
    },
    {
      category: 'County Government',
      title: 'County Health Department Achieves 78% Faster Disease Surveillance',
      description: 'Real-time public health surveillance platform for 1.2M residents with 78% faster outbreak detection and 95% data accuracy.',
      tags: ['Analytics', 'Integration', 'HIPAA'],
      image: '/images/case-studies/county-health-system.jpg',
      href: '/case-studies/county-health'
    }
  ];

  const industries = ['All', 'Federal Government', 'State Government', 'County Government', 'Defense', 'Healthcare', 'Manufacturing', 'Energy', 'Financial Services'];
  const services = ['All', 'Automation', 'RPA', 'Integration', 'Analytics', 'AI', 'Cloud', 'Cybersecurity', 'IoT', 'Predictive Analytics', 'TS/SCI'];

  // Filter case studies based on search query, industry, and service
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.category === selectedIndustry;
    const matchesService = selectedService === 'All' || study.tags.some(tag => 
      tag.toLowerCase() === selectedService.toLowerCase()
    );
    
    // Search across title, description, category, and tags
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchLower) ||
      study.description.toLowerCase().includes(searchLower) ||
      study.category.toLowerCase().includes(searchLower) ||
      study.tags.some(tag => tag.toLowerCase().includes(searchLower));
    
    return matchesIndustry && matchesService && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Real-world government case studies demonstrating platform implementation expertise. FedRAMP serves federal agencies; StateRAMP/GovRAMP serves state, local, and tribal governments.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Years Government Experience' },
              { value: '$45M+', label: 'Government Contracts' },
              { value: '50+', label: 'Authorized Platforms' },
              { value: '100%', label: 'Authorization Success Rate' }
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
          {/* Search Bar */}
          <div className="mb-8">
            <div className="flex gap-3 items-start">
              <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search case studies by keyword, industry, or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
              </div>
              
              {/* Save/Load Search Buttons */}
              <div className="flex gap-2">
                {user && <SavedSearchesDropdown onLoadSearch={handleLoadSearch} />}
                {user && hasActiveFilters && (
                  <Button
                    variant="outline"
                    onClick={() => setSaveDialogOpen(true)}
                  >
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save Search
                  </Button>
                )}
              </div>
            </div>
          </div>

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
                {searchQuery && ` matching "${searchQuery}"`}
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
                  setSearchQuery('');
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
              {filteredCaseStudies.map((study, index) => {
                const CaseStudyCard = () => {
                  const prefetchHandlers = usePrefetch(study.href);
                  
                  return (
                    <Link key={index} href={study.href} {...prefetchHandlers}>
                      <Card className="group hover:shadow-xl hover:border-accent transition-all flex flex-col h-full cursor-pointer overflow-hidden rounded-none border-2 p-0">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithLoader
                        src={study.image}
                        alt={study.title}
                        lqip={useLQIP(study.image)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        skeletonClassName="h-64"
                      />
                      {/* Category badge overlay */}
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-semibold bg-accent text-accent-foreground px-3 py-1.5 rounded-full shadow-lg">
                          {study.category}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{study.title}</h3>
                      <p className="text-muted-foreground mb-6 flex-1">{study.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-secondary px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                      </Card>
                    </Link>
                  );
                };
                
                return <CaseStudyCard key={index} />;
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Request an assessment to discuss your agency's technology requirements.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Request Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      
      {/* Save Search Dialog */}
      <SaveSearchDialog
        open={saveDialogOpen}
        onOpenChange={setSaveDialogOpen}
        searchQuery={searchQuery}
        industry={selectedIndustry}
        service={selectedService}
      />
    </div>
  );
}
