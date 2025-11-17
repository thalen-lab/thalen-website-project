import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Cloud, Shield, Bot, BarChart3, Package, Calendar, DollarSign, FileText, Download } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  category: 'cloud' | 'security' | 'automation' | 'analytics';
  basePrice: number; // in thousands
  duration: number; // in weeks
  description: string;
  icon: typeof Cloud;
  href: string;
}

export default function PackageBuilder() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services: Service[] = [
    // Cloud Services
    {
      id: 'cloud-migration',
      name: 'Cloud Migration & Transition',
      category: 'cloud',
      basePrice: 250,
      duration: 16,
      description: 'Zero-downtime migration to FedRAMP-authorized cloud',
      icon: Cloud,
      href: '/services/cloud-migration'
    },
    {
      id: 'cloud-optimization',
      name: 'Cloud Cost Optimization',
      category: 'cloud',
      basePrice: 85,
      duration: 6,
      description: 'Reduce cloud spending by 30-60% through right-sizing',
      icon: Cloud,
      href: '/services/cloud-optimization'
    },
    {
      id: 'multi-cloud',
      name: 'Multi-Cloud Strategy',
      category: 'cloud',
      basePrice: 180,
      duration: 12,
      description: 'Unified management across AWS, Azure, and GCP',
      icon: Cloud,
      href: '/services/multi-cloud'
    },
    {
      id: 'cloud-security',
      name: 'Cloud Security & Compliance',
      category: 'cloud',
      basePrice: 150,
      duration: 10,
      description: 'FedRAMP-compliant security controls and monitoring',
      icon: Shield,
      href: '/services/cloud-security'
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery & Business Continuity',
      category: 'cloud',
      basePrice: 120,
      duration: 8,
      description: 'Mission-critical failover with <4hr RTO',
      icon: Shield,
      href: '/services/disaster-recovery'
    },
    // Security Services
    {
      id: 'security-assessment',
      name: 'Security Assessment & Compliance',
      category: 'security',
      basePrice: 95,
      duration: 6,
      description: 'FedRAMP/CMMC gap analysis and remediation',
      icon: Shield,
      href: '/services/security-assessment'
    },
    {
      id: 'penetration-testing',
      name: 'Penetration Testing',
      category: 'security',
      basePrice: 65,
      duration: 3,
      description: 'Offensive security testing and vulnerability management',
      icon: Shield,
      href: '/services/penetration-testing'
    },
    {
      id: 'iam',
      name: 'Identity & Access Management',
      category: 'security',
      basePrice: 140,
      duration: 16,
      description: 'Zero Trust IAM with MFA and privileged access',
      icon: Shield,
      href: '/services/identity-access-management'
    },
    {
      id: 'zero-trust',
      name: 'Zero Trust Architecture',
      category: 'security',
      basePrice: 200,
      duration: 20,
      description: 'NIST 800-207 Zero Trust implementation',
      icon: Shield,
      href: '/services/zero-trust-architecture'
    },
    {
      id: 'soc',
      name: 'Security Operations Center (SOC)',
      category: 'security',
      basePrice: 180,
      duration: 12,
      description: '24/7 threat monitoring and incident response',
      icon: Shield,
      href: '/services/security-operations-center'
    },
    // Automation Services
    {
      id: 'rpa',
      name: 'Robotic Process Automation',
      category: 'automation',
      basePrice: 110,
      duration: 10,
      description: 'Automate repetitive tasks with intelligent bots',
      icon: Bot,
      href: '/services/automation/rpa'
    },
    {
      id: 'workflow-orchestration',
      name: 'Workflow Orchestration',
      category: 'automation',
      basePrice: 135,
      duration: 14,
      description: 'End-to-end process orchestration and SLA management',
      icon: Bot,
      href: '/services/automation/orchestration'
    },
    {
      id: 'integration',
      name: 'System Integration & APIs',
      category: 'automation',
      basePrice: 125,
      duration: 12,
      description: 'Connect legacy and modern systems seamlessly',
      icon: Bot,
      href: '/services/automation/integration'
    },
    // Data Analytics Services
    {
      id: 'data-strategy',
      name: 'Data Strategy & Roadmap',
      category: 'analytics',
      basePrice: 90,
      duration: 8,
      description: 'Comprehensive data modernization strategy',
      icon: BarChart3,
      href: '/services/data-analytics/strategy'
    },
    {
      id: 'data-engineering',
      name: 'Data Engineering & Pipelines',
      category: 'analytics',
      basePrice: 160,
      duration: 20,
      description: 'Build scalable data lakes and ETL pipelines',
      icon: BarChart3,
      href: '/services/data-analytics/engineering'
    },
    {
      id: 'ml-ai',
      name: 'Machine Learning & AI',
      category: 'analytics',
      basePrice: 220,
      duration: 24,
      description: 'Custom ML models and AI-powered analytics',
      icon: BarChart3,
      href: '/services/data-analytics/ml-ai'
    },
    {
      id: 'data-visualization',
      name: 'Data Visualization & BI',
      category: 'analytics',
      basePrice: 75,
      duration: 10,
      description: 'Interactive dashboards and self-service analytics',
      icon: BarChart3,
      href: '/services/data-analytics/visualization'
    }
  ];

  const categories = [
    { id: 'cloud', label: 'Cloud Infrastructure', icon: Cloud, color: 'text-blue-500' },
    { id: 'security', label: 'Cybersecurity', icon: Shield, color: 'text-red-500' },
    { id: 'automation', label: 'Automation', icon: Bot, color: 'text-purple-500' },
    { id: 'analytics', label: 'Data Analytics', icon: BarChart3, color: 'text-green-500' }
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const selectedServiceObjects = useMemo(
    () => services.filter(s => selectedServices.includes(s.id)),
    [selectedServices]
  );

  const totalPrice = useMemo(
    () => selectedServiceObjects.reduce((sum, s) => sum + s.basePrice, 0),
    [selectedServiceObjects]
  );

  const estimatedDuration = useMemo(() => {
    if (selectedServiceObjects.length === 0) return 0;
    // Calculate based on longest service + 20% for integration overhead
    const longestDuration = Math.max(...selectedServiceObjects.map(s => s.duration));
    return Math.ceil(longestDuration * 1.2);
  }, [selectedServiceObjects]);

  const bundleDiscount = useMemo(() => {
    const count = selectedServices.length;
    if (count >= 5) return 0.15; // 15% discount for 5+ services
    if (count >= 3) return 0.10; // 10% discount for 3-4 services
    return 0;
  }, [selectedServices.length]);

  const discountedPrice = totalPrice * (1 - bundleDiscount);

  const recommendations = useMemo(() => {
    const recs: string[] = [];
    const hasCloud = selectedServiceObjects.some(s => s.category === 'cloud');
    const hasSecurity = selectedServiceObjects.some(s => s.category === 'security');
    const hasAutomation = selectedServiceObjects.some(s => s.category === 'automation');
    const hasAnalytics = selectedServiceObjects.some(s => s.category === 'analytics');

    if (hasCloud && !hasSecurity) {
      recs.push('Consider adding Cloud Security to protect your cloud infrastructure');
    }
    if (selectedServices.includes('cloud-migration') && !selectedServices.includes('disaster-recovery')) {
      recs.push('Add Disaster Recovery to ensure business continuity post-migration');
    }
    if (hasAutomation && !hasAnalytics) {
      recs.push('Data Analytics can help measure and optimize your automation ROI');
    }
    if (selectedServices.includes('data-engineering') && !selectedServices.includes('data-visualization')) {
      recs.push('Data Visualization helps stakeholders understand insights from your data pipelines');
    }
    if (hasCloud && !hasAutomation) {
      recs.push('Automation services can maximize the value of your cloud investment');
    }

    return recs;
  }, [selectedServiceObjects, selectedServices]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-semibold mb-4">
              Custom Service Packages
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build Your Service Package
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Select multiple services to create a custom package. Get instant pricing, timeline estimates, and bundle discounts for comprehensive transformation initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Package Builder */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Selection */}
            <div className="lg:col-span-2 space-y-8">
              {categories.map(category => {
                const categoryServices = services.filter(s => s.category === category.id);
                const Icon = category.icon;
                
                return (
                  <Card key={category.id} className="border-2">
                    <CardHeader className="bg-secondary/30">
                      <CardTitle className="flex items-center gap-3">
                        <Icon className={`h-6 w-6 ${category.color}`} />
                        {category.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {categoryServices.map(service => {
                          const ServiceIcon = service.icon;
                          const isSelected = selectedServices.includes(service.id);
                          
                          return (
                            <div
                              key={service.id}
                              className={`flex items-start gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-accent bg-accent/5'
                                  : 'border-border hover:border-accent/50'
                              }`}
                              onClick={() => toggleService(service.id)}
                            >
                              <Checkbox
                                checked={isSelected}
                                onCheckedChange={() => toggleService(service.id)}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <h4 className="font-semibold mb-1">{service.name}</h4>
                                    <p className="text-sm text-muted-foreground">{service.description}</p>
                                  </div>
                                  <ServiceIcon className="h-5 w-5 text-accent flex-shrink-0 ml-2" />
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                  <div className="flex items-center gap-1">
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                    <span className="font-semibold">${service.basePrice}K</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span>{service.duration} weeks</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Package Summary (Sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="border-2 border-accent">
                  <CardHeader className="bg-accent/10">
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Package Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {selectedServices.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Package className="h-12 w-12 mx-auto mb-3 opacity-30" />
                        <p className="text-sm">Select services to build your custom package</p>
                      </div>
                    ) : (
                      <>
                        {/* Selected Services List */}
                        <div>
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Selected Services</h4>
                          <div className="space-y-2">
                            {selectedServiceObjects.map(service => (
                              <div key={service.id} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                                <span>{service.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="border-t pt-4">
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Subtotal</span>
                              <span className="font-semibold">${totalPrice}K</span>
                            </div>
                            {bundleDiscount > 0 && (
                              <div className="flex justify-between text-accent">
                                <span>Bundle Discount ({Math.round(bundleDiscount * 100)}%)</span>
                                <span>-${Math.round(totalPrice * bundleDiscount)}K</span>
                              </div>
                            )}
                            <div className="flex justify-between text-lg font-bold border-t pt-2">
                              <span>Total Investment</span>
                              <span className="text-accent">${Math.round(discountedPrice)}K</span>
                            </div>
                          </div>
                        </div>

                        {/* Timeline */}
                        <div className="bg-secondary rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-accent" />
                            <span className="font-semibold text-sm">Estimated Timeline</span>
                          </div>
                          <div className="text-2xl font-bold text-accent">{estimatedDuration} weeks</div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Includes integration overhead for multi-service delivery
                          </p>
                        </div>

                        {/* Recommendations */}
                        {recommendations.length > 0 && (
                          <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                            <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              Recommendations
                            </h4>
                            <ul className="space-y-2">
                              {recommendations.map((rec, i) => (
                                <li key={i} className="text-xs flex items-start gap-2">
                                  <span className="text-accent mt-0.5">•</span>
                                  <span>{rec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* CTAs */}
                        <div className="space-y-3">
                          <Button className="w-full bg-orange-gradient hover:opacity-90">
                            <Download className="mr-2 h-4 w-4" />
                            Download Package Summary
                          </Button>
                          <Link href="/contact">
                            <Button variant="outline" className="w-full">
                              Request Proposal
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>

                {/* Bundle Discount Info */}
                <Card className="bg-secondary border-0">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-3 text-sm">Bundle Discounts</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>3-4 services</span>
                        <span className="font-semibold text-accent">10% off</span>
                      </div>
                      <div className="flex justify-between">
                        <span>5+ services</span>
                        <span className="font-semibold text-accent">15% off</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Help Choosing Services?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Our federal technology experts can assess your requirements and recommend the optimal service package for your agency's transformation goals.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
