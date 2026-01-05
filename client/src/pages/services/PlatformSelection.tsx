import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function PlatformSelection() {
  const selectionCapabilities = [
    {
      title: 'Requirements Analysis & Discovery',
      description: 'We help agencies define functional and technical requirements through stakeholder interviews, process mapping, and gap analysis to identify the right platform capabilities.',
      benefits: ['Stakeholder workshops', 'Process documentation', 'Requirements traceability matrix', 'Gap analysis reports']
    },
    {
      title: 'Platform Evaluation & Scoring',
      description: 'We evaluate 50+ FedRAMP and StateRAMP platforms using weighted scoring criteria including functionality, security, cost, vendor stability, and integration capabilities.',
      benefits: ['Platform comparison matrix', 'Weighted scoring model', 'Demo coordination', 'Reference checks']
    },
    {
      title: 'Total Cost of Ownership (TCO) Analysis',
      description: 'We calculate 5-year TCO including licensing, implementation, training, support, and hidden costs to ensure accurate budget planning and ROI projections.',
      benefits: ['5-year TCO modeling', 'ROI projections', 'Cost comparison analysis', 'Budget planning support']
    },
    {
      title: 'Security & Compliance Assessment',
      description: "We verify FedRAMP/StateRAMP authorization levels, assess security controls, and ensure platforms meet your agency's specific compliance requirements.",
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
    { name: 'Functional Fit', description: "How well does the platform meet your agency's specific functional requirements?" },
    { name: 'Security & Compliance', description: 'FedRAMP/StateRAMP authorization level, security controls, compliance certifications' },
    { name: 'Total Cost of Ownership', description: '5-year TCO including licensing, implementation, training, support, and hidden costs' },
    { name: 'Integration Capabilities', description: 'APIs, connectors, and integration patterns for existing systems' },
    { name: 'Vendor Stability', description: 'Financial health, government customer base, long-term viability' },
    { name: 'User Experience', description: 'Ease of use, mobile access, accessibility compliance' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/platform-selection-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/75"></div>
        <div className="container relative">
          <div className="max-w-4xl">
            <div className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Platform Selection
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              FedRAMP & StateRAMP Platform Selection
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We help agencies select optimal FedRAMP and StateRAMP platforms through vendor-neutral assessment, weighted scoring, TCO analysis, and security compliance verification—ensuring you choose the right solution for your mission.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Start Platform Selection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/capability-generator">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  Generate Capability Statement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Capabilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Capabilities</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Platform Selection Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Vendor-neutral platform evaluation and selection services for government agencies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {selectionCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="pt-8">
                    <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{capability.title}</h3>
                    <p className="text-slate-600 mb-4">{capability.description}</p>
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Categories */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Landscape</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">FedRAMP & StateRAMP Authorized Platforms</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We evaluate 50+ authorized platforms across every government technology category.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {platformCategories.map((category, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">{category.category}</h3>
                  <div className="space-y-4">
                    {category.platforms.map((platform, idx) => (
                      <div key={idx}>
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <div className="font-semibold text-[oklch(0.20_0.05_250)]">{platform.name}</div>
                          <div className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded whitespace-nowrap">
                            FedRAMP {platform.fedramp}
                          </div>
                        </div>
                        <div className="text-sm text-slate-600">{platform.strengths}</div>
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
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Our Platform Selection Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A structured 6-step process ensures you select the right platform for your mission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {selectionProcess.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-[oklch(0.97_0.01_250)] rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                <div>
                  <div className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">{item.step}</div>
                  <div className="text-sm text-slate-600">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Criteria */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Evaluation Criteria</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Key Decision Factors</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We evaluate platforms using weighted scoring across 6 critical dimensions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {decisionCriteria.map((criterion, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                <div>
                  <div className="font-semibold mb-2 text-[oklch(0.20_0.05_250)]">{criterion.name}</div>
                  <div className="text-sm text-slate-600">{criterion.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Select Your Platform?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our platform selection specialists can help you evaluate FedRAMP and StateRAMP platforms and choose the right solution for your mission.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Schedule Platform Selection Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/digital-transformation">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
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
