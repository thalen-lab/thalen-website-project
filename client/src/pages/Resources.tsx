import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  Shield, 
  TrendingUp, 
  BarChart3,
  BookOpen,
  Calculator,
  FileCheck,
  Award,
  ArrowRight,
  Mail
} from 'lucide-react';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [downloadingResource, setDownloadingResource] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'whitepapers', label: 'Whitepapers' },
    { id: 'checklists', label: 'Compliance Checklists' },
    { id: 'calculators', label: 'ROI Calculators' },
    { id: 'reports', label: 'Industry Reports' },
    { id: 'case-studies', label: 'Case Study PDFs' }
  ];

  const resources = [
    {
      id: 'wp-gov-automation',
      category: 'whitepapers',
      title: 'Government Automation Strategy Guide',
      description: 'Comprehensive 45-page guide covering automation assessment, vendor selection, implementation roadmap, and change management for federal agencies.',
      icon: FileText,
      pages: 45,
      type: 'PDF Whitepaper',
      popular: true
    },
    {
      id: 'wp-zero-trust',
      category: 'whitepapers',
      title: 'Zero-Trust Architecture Implementation',
      description: 'Technical whitepaper detailing zero-trust principles, architecture patterns, and step-by-step implementation for government and enterprise environments.',
      icon: Shield,
      pages: 38,
      type: 'PDF Whitepaper',
      popular: true
    },
    {
      id: 'wp-ai-governance',
      category: 'whitepapers',
      title: 'Responsible AI Governance Framework',
      description: 'Executive guide to establishing AI governance, ethical guidelines, bias detection, and compliance frameworks for mission-critical AI deployments.',
      icon: BookOpen,
      pages: 52,
      type: 'PDF Whitepaper',
      popular: false
    },
    {
      id: 'wp-cloud-migration',
      category: 'whitepapers',
      title: 'Multi-Cloud Strategy & Migration Playbook',
      description: 'Detailed playbook covering cloud assessment, workload prioritization, migration strategies, and cost optimization across AWS, Azure, and GCP.',
      icon: FileText,
      pages: 41,
      type: 'PDF Whitepaper',
      popular: false
    },
    {
      id: 'checklist-fedramp',
      category: 'checklists',
      title: 'FedRAMP Authorization Readiness Checklist',
      description: 'Complete checklist covering all FedRAMP Moderate and High baseline controls, documentation requirements, and authorization timeline.',
      icon: FileCheck,
      pages: 12,
      type: 'PDF Checklist',
      popular: true
    },
    {
      id: 'checklist-cmmc',
      category: 'checklists',
      title: 'CMMC Level 3 Compliance Checklist',
      description: 'Comprehensive checklist for achieving CMMC Level 3 certification, including all 130 practices across 17 domains with implementation guidance.',
      icon: Shield,
      pages: 18,
      type: 'PDF Checklist',
      popular: true
    },
    {
      id: 'checklist-hipaa',
      category: 'checklists',
      title: 'HIPAA Security & Privacy Compliance Checklist',
      description: 'Complete HIPAA compliance checklist covering administrative, physical, and technical safeguards with BAA requirements and breach response procedures.',
      icon: FileCheck,
      pages: 15,
      type: 'PDF Checklist',
      popular: false
    },
    {
      id: 'checklist-iso27001',
      category: 'checklists',
      title: 'ISO 27001:2022 Implementation Checklist',
      description: 'Detailed checklist for ISO 27001:2022 certification covering all Annex A controls, risk assessment, and ISMS documentation requirements.',
      icon: Award,
      pages: 22,
      type: 'PDF Checklist',
      popular: false
    },
    {
      id: 'calc-automation-roi',
      category: 'calculators',
      title: 'Automation ROI Calculator',
      description: 'Interactive Excel calculator with industry benchmarks to project automation savings, implementation costs, payback period, and 5-year ROI.',
      icon: Calculator,
      pages: 0,
      type: 'Excel Calculator',
      popular: true
    },
    {
      id: 'calc-cloud-tco',
      category: 'calculators',
      title: 'Cloud Migration TCO Calculator',
      description: 'Comprehensive TCO calculator comparing on-premises vs. cloud costs including infrastructure, labor, licensing, and operational expenses.',
      icon: TrendingUp,
      pages: 0,
      type: 'Excel Calculator',
      popular: false
    },
    {
      id: 'calc-security-maturity',
      category: 'calculators',
      title: 'Cybersecurity Maturity Assessment',
      description: 'Self-assessment tool evaluating your organization across 12 security domains with scoring, gap analysis, and remediation recommendations.',
      icon: Shield,
      pages: 0,
      type: 'Excel Calculator',
      popular: true
    },
    {
      id: 'report-federal-2024',
      category: 'reports',
      title: '2024 Federal Automation Trends Report',
      description: 'Annual report analyzing automation adoption across 50+ federal agencies, budget trends, technology preferences, and ROI benchmarks.',
      icon: BarChart3,
      pages: 67,
      type: 'PDF Report',
      popular: true
    },
    {
      id: 'report-healthcare-ai',
      category: 'reports',
      title: 'Healthcare AI Adoption & ROI Study',
      description: 'Research report covering AI adoption rates, use cases, implementation challenges, and measured ROI across 200+ healthcare organizations.',
      icon: TrendingUp,
      pages: 54,
      type: 'PDF Report',
      popular: false
    },
    {
      id: 'report-manufacturing',
      category: 'reports',
      title: 'Manufacturing Digital Transformation Benchmark',
      description: 'Industry benchmark report analyzing digital transformation maturity, technology investments, and operational outcomes across manufacturing sector.',
      icon: BarChart3,
      pages: 48,
      type: 'PDF Report',
      popular: false
    },
    {
      id: 'cs-federal-automation',
      category: 'case-studies',
      title: 'Federal Agency 85% Automation Case Study',
      description: 'Detailed case study documenting how a federal agency achieved 85% process automation, reducing processing time from 6 weeks to 2 days.',
      icon: FileText,
      pages: 8,
      type: 'PDF Case Study',
      popular: true
    },
    {
      id: 'cs-healthcare-ai',
      category: 'case-studies',
      title: 'Healthcare System $12M Savings Case Study',
      description: 'Case study showing how AI-powered analytics delivered $12M annual savings and 40% improvement in patient outcomes.',
      icon: FileText,
      pages: 6,
      type: 'PDF Case Study',
      popular: false
    },
    {
      id: 'cs-defense-cloud',
      category: 'case-studies',
      title: 'Defense Contractor Zero-Downtime Migration',
      description: 'Case study detailing zero-downtime cloud migration for defense contractor while achieving CMMC Level 3 certification.',
      icon: FileText,
      pages: 7,
      type: 'PDF Case Study',
      popular: false
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  const handleDownload = (resourceId: string) => {
    setDownloadingResource(resourceId);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && downloadingResource) {
      // In production, this would send email to backend and trigger download
      alert(`Thank you! Your download link has been sent to ${email}`);
      setEmail('');
      setDownloadingResource(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }} />
        </div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Resource Library</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Expert insights, practical tools, and proven methodologies to accelerate your digital transformation journey.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>17 Premium Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Free Downloads</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary border-b">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'bg-accent hover:bg-accent/90' : ''}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <resource.icon className="h-8 w-8 text-accent" />
                    </div>
                    {resource.popular && (
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <span>{resource.type}</span>
                    {resource.pages > 0 && <span>{resource.pages} pages</span>}
                  </div>
                  
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90"
                    onClick={() => handleDownload(resource.id)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {downloadingResource && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Get Your Free Resource</h3>
                <p className="text-muted-foreground">
                  Enter your email to receive instant access to this resource and stay updated with our latest insights.
                </p>
              </div>
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="flex gap-3">
                  <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90">
                    Send Download Link
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => {
                      setDownloadingResource(null);
                      setEmail('');
                    }}
                  >
                    Cancel
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient diagonal-top text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Custom Guidance?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our automation strategy experts are ready to provide personalized recommendations for your organization's unique challenges.
          </p>
          <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 transition-opacity">
            <Link href="/contact">
              Schedule Strategic Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
