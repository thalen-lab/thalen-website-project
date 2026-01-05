import { useState, useCallback } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { useLQIP } from '@/hooks/useLQIP';
import { usePrefetch } from '@/hooks/usePrefetch';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import SaveSearchDialog from '@/components/SaveSearchDialog';
import SavedSearchesDropdown from '@/components/SavedSearchesDropdown';
import { trpc } from '@/lib/trpc';
import PullToRefresh from '@/components/PullToRefresh';
import { toast } from 'sonner';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());

  const handleRefresh = useCallback(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastRefreshed(new Date());
    toast.success('Content refreshed', {
      description: `Last updated: ${new Date().toLocaleTimeString()}`,
    });
  }, []);

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

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.category === selectedIndustry;
    const matchesService = selectedService === 'All' || study.tags.some(tag => 
      tag.toLowerCase() === selectedService.toLowerCase()
    );
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchLower) ||
      study.description.toLowerCase().includes(searchLower) ||
      study.category.toLowerCase().includes(searchLower) ||
      study.tags.some(tag => tag.toLowerCase().includes(searchLower));
    
    return matchesIndustry && matchesService && matchesSearch;
  });

  return (
    <PullToRefresh onRefresh={handleRefresh}>
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      <section className="relative py-12 sm:py-16 md:py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="relative container">
          <div className="mb-6 md:mb-8">
            <Breadcrumb items={[{ label: 'Case Studies' }]} variant="light" />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Our Work</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Case Studies
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90">
              Real-world government case studies demonstrating platform implementation expertise. FedRAMP serves federal agencies; StateRAMP/GovRAMP serves state, local, and tribal governments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { value: '15+', label: 'Years Government Experience' },
              { value: '$45M+', label: 'Government Contracts' },
              { value: '50+', label: 'Authorized Platforms' },
              { value: '100%', label: 'Authorization Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container">
          <div className="mb-8">
            <div className="relative flex-1 max-w-2xl">
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-3 rounded-lg border border-slate-300 bg-white text-[oklch(0.20_0.05_250)] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)] focus:border-[oklch(0.70_0.18_55)]"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-sm">Filter by Industry</h3>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
              {industries.map(industry => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                  className={`shrink-0`}
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-sm">Filter by Service</h3>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
              {services.map(service => (
                <Button
                  key={service}
                  variant={selectedService === service ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedService(service)}
                  className={`shrink-0`}
                >
                  {service}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="mb-8 text-sm text-slate-600">
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

          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-2 text-[oklch(0.20_0.05_250)]">No Case Studies Found</h3>
              <p className="text-slate-600 mb-6">
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
                      <Card className="group bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all flex flex-col h-full cursor-pointer overflow-hidden p-0">
                        <div className="relative h-64 overflow-hidden">
                          <ImageWithLoader
                            src={study.image}
                            alt={study.title}
                            lqip={useLQIP(study.image)}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            skeletonClassName="h-64"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="text-xs font-semibold bg-[oklch(0.75_0.15_55)] text-white px-3 py-1.5 rounded-full shadow-lg">
                              {study.category}
                            </span>
                          </div>
                        </div>

                        <CardContent className="p-6 flex flex-col flex-1">
                          <h3 className="text-xl font-bold mb-2 text-[oklch(0.20_0.05_250)]">{study.title}</h3>
                          <p className="text-slate-600 mb-6 flex-1">{study.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag, idx) => (
                              <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
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

      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Request an assessment to discuss your agency's technology requirements.
          </p>
          <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-slate-200">
            Request Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      
      <SaveSearchDialog
        open={saveDialogOpen}
        onOpenChange={setSaveDialogOpen}
        searchQuery={searchQuery}
        industry={selectedIndustry}
        service={selectedService}
      />
    </div>
    </PullToRefresh>
  );
}
