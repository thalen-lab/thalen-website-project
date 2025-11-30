import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
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
      description: 'Implemented UiPath RPA platform with FedRAMP authorization, automating 85% of manual workflows while maintaining TS/SCI compliance. $4.2M contract delivered 6-month ROI.',
      metrics: [
        { value: '85%', label: 'Automation Rate' },
        { value: '$4.2M', label: 'Contract Value' }
      ],
      tags: ['RPA', 'FedRAMP'],
      href: '/case-studies/federal-automation'
    },
    {
      category: 'Defense',
      title: 'DoD Manufacturing Facility Achieves 99.2% Uptime',
      description: 'Implemented FedRAMP-authorized predictive maintenance platform across DoD manufacturing facility. Achieved CMMC Level 3 certification with 99.2% uptime.',
      metrics: [
        { value: '99.2%', label: 'System Uptime' },
        { value: 'CMMC L3', label: 'Certified' }
      ],
      tags: ['Cybersecurity', 'IoT', 'CMMC'],
      href: '/case-studies/dod-manufacturing'
    },
    {
      category: 'Federal Government',
      title: 'VA Medical Center Integrates 12 Legacy Systems',
      description: 'Integrated 12 disparate healthcare systems using FedRAMP-authorized iPaaS platform. Reduced administrative burden by 60% for 8,500 staff members.',
      metrics: [
        { value: '12', label: 'Systems Integrated' },
        { value: '60%', label: 'Admin Reduction' }
      ],
      tags: ['Integration', 'HIPAA', 'FedRAMP'],
      href: '/case-studies/va-healthcare'
    },
    {
      category: 'State Government',
      title: 'State Attorney General Prevents $50M+ in Fraud',
      description: 'Implemented AI-powered fraud detection system with CJIS compliance for state law enforcement. Analyzed 2.3M cases, prevented $50M+ in fraud.',
      metrics: [
        { value: '$50M+', label: 'Fraud Prevented' },
        { value: '2.3M', label: 'Cases Analyzed' }
      ],
      tags: ['AI', 'Analytics', 'CJIS'],
      href: '/case-studies/state-attorney-general'
    },
    {
      category: 'State Government',
      title: 'State Energy Commission Reduces Grid Outages 65%',
      description: 'Deployed StateRAMP-authorized smart grid platform for state energy commission. Reduced outages by 65% across 4.2M customer service area.',
      metrics: [
        { value: '65%', label: 'Outage Reduction' },
        { value: '4.2M', label: 'Customers Served' }
      ],
      tags: ['Automation', 'IoT', 'StateRAMP'],
      href: '/case-studies/state-energy-commission'
    },
    {
      category: 'County Government',
      title: 'County Health Department Speeds Outbreak Response 40%',
      description: 'Integrated 8 public health systems for county health department. Achieved 40% faster outbreak response with HIPAA-compliant data sharing.',
      metrics: [
        { value: '40%', label: 'Faster Response' },
        { value: '8', label: 'Systems Integrated' }
      ],
      tags: ['Integration', 'HIPAA'],
      href: '/case-studies/county-health-department'
    },
    {
      category: 'Defense',
      title: 'Defense Contractor: Zero-Downtime Cloud Migration',
      description: 'Migrated 150+ applications and 500TB classified data to AWS GovCloud and Azure Government. Achieved CMMC Level 3 with 100% uptime and $4.5M annual savings.',
      metrics: [
        { value: '100%', label: 'Uptime Maintained' },
        { value: 'CMMC L3', label: 'Certified' }
      ],
      tags: ['Cloud', 'Cybersecurity', 'CMMC'],
      href: '/case-studies/defense-cloud'
    }
  ];

  const industries = ['All', 'Federal Government', 'State Government', 'County Government', 'Defense'];
  const services = ['All', 'Automation', 'RPA', 'Integration', 'Analytics', 'AI', 'Cloud', 'Cybersecurity'];

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
              Proven Transformation Results
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Real-world government case studies demonstrating FedRAMP and StateRAMP platform implementation expertise across federal, state, and local agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Years Government Experience' },
              { value: '$45M+', label: 'Government Contracts' },
              { value: '50+', label: 'FedRAMP Platforms' },
              { value: '100%', label: 'ATO Success Rate' }
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
              {filteredCaseStudies.map((study, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="text-sm font-semibold text-accent mb-3">{study.category}</div>
                    <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">{study.description}</p>

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
