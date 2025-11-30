import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Target, TrendingDown, Shield, Users, CheckSquare, FileText, BarChart, Award } from 'lucide-react';

export default function PlatformSelection() {
  const selectionCapabilities = [
    {
      icon: Target,
      title: 'Requirements Analysis & Discovery',
      description: 'We help agencies define functional and technical requirements through stakeholder interviews, process mapping, and gap analysis to identify the right platform capabilities.',
      benefits: ['Stakeholder workshops', 'Process documentation', 'Requirements traceability matrix', 'Gap analysis reports']
    },
    {
      icon: BarChart,
      title: 'Platform Evaluation & Scoring',
      description: 'We evaluate 50+ FedRAMP and StateRAMP platforms using weighted scoring criteria including functionality, security, cost, vendor stability, and integration capabilities.',
      benefits: ['Platform comparison matrix', 'Weighted scoring model', 'Demo coordination', 'Reference checks']
    },
    {
      icon: TrendingDown,
      title: 'Total Cost of Ownership (TCO) Analysis',
      description: 'We calculate 5-year TCO including licensing, implementation, training, support, and hidden costs to ensure accurate budget planning and ROI projections.',
      benefits: ['5-year TCO modeling', 'ROI projections', 'Cost comparison analysis', 'Budget planning support']
    },
    {
      icon: Shield,
      title: 'Security & Compliance Assessment',
      description: 'We verify FedRAMP/StateRAMP authorization levels, assess security controls, and ensure platforms meet your agency\'s specific compliance requirements.',
      benefits: ['FedRAMP/StateRAMP verification', 'Security controls review', 'Compliance gap analysis', 'ATO readiness assessment']
    }
  ];

  const platformCategories = [
    {
      category: 'CRM & Case Management',
      platforms: [
        { name: 'Salesforce Government Cloud', fedramp: 'High', strengths: 'Customization, ecosystem, scalability' },
        { name: 'Microsoft Dynamics 365 Government', fedramp: 'High', strengths: 'Office 365 integration, familiar UX' },
        { name: 'ServiceNow Government', fedramp: 'High', strengths: 'ITSM, workflow automation' }
      ]
    },
    {
      category: 'HR & Financial Management',
      platforms: [
        { name: 'Workday Government Cloud', fedramp: 'Moderate', strengths: 'HCM, financial planning, analytics' },
        { name: 'Oracle Cloud Government', fedramp: 'High', strengths: 'ERP, procurement, supply chain' },
        { name: 'SAP NS2', fedramp: 'High', strengths: 'Enterprise resource planning' }
      ]
    },
    {
      category: 'Collaboration & Productivity',
      platforms: [
        { name: 'Microsoft 365 GCC High', fedramp: 'High', strengths: 'Email, Office apps, Teams collaboration' },
        { name: 'Google Workspace Government', fedramp: 'Moderate', strengths: 'Gmail, Docs, Drive, Meet' },
        { name: 'Slack Government', fedramp: 'Moderate', strengths: 'Team messaging, workflow automation' }
      ]
    },
    {
      category: 'Data & Analytics',
      platforms: [
        { name: 'Tableau Government', fedramp: 'Moderate', strengths: 'Visual analytics, dashboards' },
        { name: 'Qlik Government Cloud', fedramp: 'Moderate', strengths: 'Associative analytics, self-service BI' },
        { name: 'Domo Government', fedramp: 'Moderate', strengths: 'Cloud BI, real-time dashboards' }
      ]
    }
  ];

  const selectionProcess = [
    { step: '1. Discovery & Requirements', description: 'Stakeholder interviews, process mapping, requirements documentation' },
    { step: '2. Market Research', description: 'Identify FedRAMP/StateRAMP platforms that match requirements' },
    { step: '3. Platform Evaluation', description: 'Demos, reference checks, scoring against weighted criteria' },
    { step: '4. TCO Analysis', description: '5-year cost modeling including licensing, implementation, support' },
    { step: '5. Security Assessment', description: 'Verify authorization levels and compliance requirements' },
    { step: '6. Final Recommendation', description: 'Detailed recommendation report with implementation roadmap' }
  ];

  const decisionCriteria = [
    { name: 'Functional Fit', description: 'How well does the platform meet your agency\'s specific functional requirements?' },
    { name: 'Security & Compliance', description: 'FedRAMP/StateRAMP authorization level, security controls, compliance certifications' },
    { name: 'Total Cost of Ownership', description: '5-year TCO including licensing, implementation, training, support, and hidden costs' },
    { name: 'Integration Capabilities', description: 'APIs, connectors, and integration patterns for existing systems' },
    { name: 'Vendor Stability', description: 'Financial health, government customer base, long-term viability' },
    { name: 'User Experience', description: 'Ease of use, mobile access, accessibility compliance' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <Link href="/services/digital-transformation">
              <Button variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
                ← Back to IT Modernization
              </Button>
            </Link>
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Platform Selection
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              FedRAMP & StateRAMP Platform Selection
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We help agencies select optimal FedRAMP and StateRAMP platforms through vendor-neutral assessment, weighted scoring, TCO analysis, and security compliance verification—ensuring you choose the right solution for your mission.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Start Platform Selection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/capability-generator">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Generate Capability Statement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Capabilities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Selection Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vendor-neutral platform evaluation and selection services for government agencies
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {selectionCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                        <p className="text-muted-foreground mb-4">{capability.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Categories */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">FedRAMP & StateRAMP Platform Landscape</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We evaluate 50+ authorized platforms across every government technology category
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {platformCategories.map((category, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.platforms.map((platform, idx) => (
                      <div key={idx} className="border-l-2 border-border pl-4">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <div className="font-semibold">{platform.name}</div>
                          <div className="text-xs bg-muted px-2 py-1 rounded whitespace-nowrap">
                            FedRAMP {platform.fedramp}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">{platform.strengths}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Platform Selection Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured 6-step process ensures you select the right platform for your mission
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {selectionProcess.map((item, index) => (
              <div key={index} className="flex gap-3 p-6 bg-secondary rounded-lg border-2 border-border">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">{item.step}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Criteria */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Evaluation Criteria</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We evaluate platforms using weighted scoring across 6 critical dimensions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {decisionCriteria.map((criterion, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-2">{criterion.name}</div>
                      <div className="text-sm text-muted-foreground">{criterion.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Select Your Platform?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our platform selection specialists can help you evaluate FedRAMP and StateRAMP platforms and choose the right solution for your mission.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Schedule Platform Selection Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/digital-transformation">
                <Button size="lg" variant="outline">
                  View All Modernization Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
