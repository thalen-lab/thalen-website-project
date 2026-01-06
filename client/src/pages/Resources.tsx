import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Mail, Download } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

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
      description: 'Comprehensive 45-page guide covering automation assessment, vendor selection, implementation roadmap, and change management for federal, state, and local government agencies.',
      pages: 45,
      type: 'PDF Whitepaper',
      popular: true
    },
    {
      id: 'wp-zero-trust',
      category: 'whitepapers',
      title: 'Zero-Trust Architecture Implementation',
      description: 'Technical whitepaper detailing zero-trust principles, architecture patterns, and step-by-step implementation for government and enterprise environments.',
      pages: 38,
      type: 'PDF Whitepaper',
      popular: true
    },
    {
      id: 'wp-ai-governance',
      category: 'whitepapers',
      title: 'Responsible AI Governance Framework',
      description: 'Executive guide to establishing AI governance, ethical guidelines, bias detection, and compliance frameworks for mission-critical AI deployments in government agencies.',
      pages: 52,
      type: 'PDF Whitepaper',
      popular: false
    },
    {
      id: 'wp-cloud-migration',
      category: 'whitepapers',
      title: 'Multi-Cloud Strategy & Migration Playbook',
      description: 'Detailed playbook covering cloud assessment, workload prioritization, migration strategies, and cost optimization across AWS GovCloud, Azure Government, and Google Cloud.',
      pages: 41,
      type: 'PDF Whitepaper',
      popular: false
    },
    {
      id: 'wp-stateramp-fedramp',
      category: 'whitepapers',
      title: 'StateRAMP vs FedRAMP: Complete Comparison Guide',
      description: 'Comprehensive comparison of StateRAMP and FedRAMP programs, including authorization processes, cost analysis, and strategic considerations for federal, state, and local agencies.',
      pages: 28,
      type: 'PDF Whitepaper',
      popular: true
    },
    {
      id: 'checklist-fedramp',
      category: 'checklists',
      title: 'FedRAMP Authorization Readiness Checklist',
      description: 'Complete checklist covering all FedRAMP Moderate and High baseline controls, documentation requirements, 3PAO assessment preparation, and authorization timeline for federal agencies.',
      pages: 12,
      type: 'PDF Checklist',
      popular: true
    },
    {
      id: 'checklist-stateramp',
      category: 'checklists',
      title: 'StateRAMP Authorization Readiness Checklist',
      description: 'Comprehensive checklist for achieving StateRAMP authorization, including Fast Track pathway for FedRAMP-authorized providers and state-specific RAMP program requirements.',
      pages: 14,
      type: 'PDF Checklist',
      popular: true
    },
    {
      id: 'checklist-cmmc',
      category: 'checklists',
      title: 'CMMC Level 3 Compliance Checklist',
      description: 'Comprehensive checklist for achieving CMMC Level 3 certification, including all 130 practices across 17 domains with implementation guidance for defense contractors.',
      pages: 18,
      type: 'PDF Checklist',
      popular: true
    },
    {
      id: 'checklist-hipaa',
      category: 'checklists',
      title: 'HIPAA Security & Privacy Compliance Checklist',
      description: 'Complete HIPAA compliance checklist covering administrative, physical, and technical safeguards with BAA requirements and breach response procedures for healthcare agencies.',
      pages: 15,
      type: 'PDF Checklist',
      popular: false
    },
    {
      id: 'checklist-iso27001',
      category: 'checklists',
      title: 'ISO 27001:2022 Implementation Checklist',
      description: 'Detailed checklist for ISO 27001:2022 certification covering all Annex A controls, risk assessment, and ISMS documentation requirements for government and enterprise.',
      pages: 22,
      type: 'PDF Checklist',
      popular: false
    },
    {
      id: 'calc-automation-roi',
      category: 'calculators',
      title: 'Government Automation ROI Calculator',
      description: 'Interactive calculator with federal, state, and local government benchmarks to project automation savings, implementation costs, payback period, and 5-year ROI with real-time results.',
      pages: 0,
      type: 'Interactive Calculator',
      popular: true
    },
    {
      id: 'calc-cloud-tco',
      category: 'calculators',
      title: 'Cloud Migration TCO Calculator',
      description: 'Comprehensive TCO calculator comparing on-premises vs. cloud costs for government agencies, including infrastructure, labor, licensing, and operational expenses across AWS GovCloud, Azure Government, and GCP.',
      pages: 0,
      type: 'Interactive Calculator',
      popular: false
    },
    {
      id: 'calc-security-maturity',
      category: 'calculators',
      title: 'Cybersecurity Maturity Assessment',
      description: 'Self-assessment tool evaluating your organization across 12 security domains aligned with NIST frameworks, with scoring, gap analysis, and remediation recommendations for government agencies.',
      pages: 0,
      type: 'Interactive Calculator',
      popular: true
    },
    {
      id: 'calc-compliance-cost',
      category: 'calculators',
      title: 'FedRAMP vs StateRAMP Cost Comparison',
      description: 'Interactive calculator comparing authorization costs, timelines, and resource requirements between FedRAMP and StateRAMP pathways to help agencies choose the right compliance approach.',
      pages: 0,
      type: 'Interactive Calculator',
      popular: false
    },
    {
      id: 'report-federal-2024',
      category: 'reports',
      title: '2024 Federal Automation Trends Report',
      description: 'Annual report analyzing automation adoption across 50+ federal government agencies, budget trends, technology preferences, and ROI benchmarks from real-world implementations.',
      pages: 67,
      type: 'PDF Report',
      popular: true
    },
    {
      id: 'report-state-local-2024',
      category: 'reports',
      title: '2024 State & Local Government Digital Transformation Study',
      description: 'Research report covering digital transformation maturity, cloud adoption rates, automation use cases, and measured outcomes across 200+ state and local government agencies.',
      pages: 58,
      type: 'PDF Report',
      popular: true
    },
    {
      id: 'report-healthcare-ai',
      category: 'reports',
      title: 'Healthcare AI Adoption & ROI Study',
      description: 'Research report covering AI adoption rates, use cases, implementation challenges, and measured ROI across 200+ healthcare organizations and government health agencies.',
      pages: 54,
      type: 'PDF Report',
      popular: false
    },
    {
      id: 'report-manufacturing',
      category: 'reports',
      title: 'Manufacturing Digital Transformation Benchmark',
      description: 'Industry benchmark report analyzing digital transformation maturity, technology investments, and operational outcomes across manufacturing sector and defense industrial base.',
      pages: 48,
      type: 'PDF Report',
      popular: false
    },
    {
      id: 'cs-federal-automation',
      category: 'case-studies',
      title: 'Federal Agency 85% Automation Case Study',
      description: 'Detailed case study documenting how a federal agency achieved 85% process automation, reducing processing time from 6 weeks to 2 days while maintaining FedRAMP compliance.',
      pages: 8,
      type: 'PDF Case Study',
      popular: true
    },
    {
      id: 'cs-state-stateramp',
      category: 'case-studies',
      title: 'State Agency StateRAMP Authorization Success',
      description: 'Case study showing how a state agency achieved StateRAMP authorization in 4 months using Fast Track pathway, enabling cloud adoption across 12 departments.',
      pages: 6,
      type: 'PDF Case Study',
      popular: true
    },
    {
      id: 'cs-healthcare-ai',
      category: 'case-studies',
      title: 'Healthcare System $12M Savings Case Study',
      description: 'Case study showing how AI-powered analytics delivered $12M annual savings and 40% improvement in patient outcomes for a government healthcare system.',
      pages: 6,
      type: 'PDF Case Study',
      popular: false
    },
    {
      id: 'cs-defense-cloud',
      category: 'case-studies',
      title: 'Defense Contractor Zero-Downtime Migration',
      description: 'Case study detailing zero-downtime cloud migration for defense contractor while achieving CMMC Level 3 certification and maintaining continuous operations.',
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
    console.log(`Email submitted for resource ${downloadingResource}: ${email}`);
    // Here you would typically handle the file download
    setDownloadingResource(null);
    setEmail('');
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources" }
  ];

  return (
    <div className="bg-white text-slate-600">
      <Navigation />
      <main>
        <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/img/patterns/hero-pattern.svg')" }}>
          <div className="bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85 text-white">
            <div className="container mx-auto px-4 py-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Breadcrumb items={breadcrumbItems} variant="light" />
                <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mt-4">Nexdyne Resource Center</p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4">Guides, Tools & Reports</h1>
                <p className="max-w-3xl mx-auto mt-6 text-lg text-white/90">Explore our library of whitepapers, checklists, calculators, and industry reports to accelerate your government automation and compliance initiatives.</p>
                <div className="mt-8 flex justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-slate-200">
                    <Link to="#resources">Explore Resources</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <section id="resources" className="py-20 bg-[oklch(0.97_0.01_250)]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(category => (
                <Button 
                  key={category.id} 
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full ${selectedCategory === category.id ? 'bg-[oklch(0.22_0.06_250)] text-white' : 'bg-white text-[oklch(0.22_0.06_250)]'}`}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map(resource => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-2 uppercase tracking-wider text-sm">{resource.type}</p>
                        <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{resource.title}</h3>
                        <p className="text-slate-600 mb-4">{resource.description}</p>
                      </div>
                      <div>
                        {downloadingResource === resource.id ? (
                          <form onSubmit={handleEmailSubmit} className="mt-4">
                            <div className="flex gap-2">
                              <Input 
                                type="email" 
                                placeholder="Enter your email to download"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-grow"
                              />
                              <Button type="submit" size="icon" className="bg-[oklch(0.22_0.06_250)] text-white">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </form>
                        ) : (
                          <Button variant="outline" className="w-full mt-4 group" onClick={() => handleDownload(resource.id)}>
                            {resource.category === 'calculators' ? 'Launch Calculator' : 'Download Now'}
                            <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[oklch(0.22_0.06_250)] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Stay Ahead of the Curve</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-white/90">Subscribe to our newsletter for the latest insights on government technology, compliance, and automation trends.</p>
            <form className="mt-8 max-w-lg mx-auto flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-offset-[oklch(0.75_0.15_55)]"
              />
              <Button type="submit" size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-slate-200">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>
      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
