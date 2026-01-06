import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function StateDOT() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/pattern-dark.svg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="container relative">
          <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Case Studies', href: '/case-studies' },
                  { label: 'State DOT' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider">
                State Government Case Study
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              State DOT Modernizes Asset Management with 92% Efficiency Gain
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Migrating 40-year-old mainframe infrastructure to Salesforce Government Cloud, enabling real-time asset tracking across 12,000 miles of highway and 2,400 bridges.
            </p>
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Download Full Case Study (PDF)
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-2">92%</div>
              <div className="text-sm text-slate-600">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-2">14 months</div>
              <div className="text-sm text-slate-600">Project Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-2">$3.8M</div>
              <div className="text-sm text-slate-600">Annual Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-2">850+</div>
              <div className="text-sm text-slate-600">Users Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Story</p>
          <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Project Overview</h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="mb-6">
              A state Department of Transportation managing 12,000+ miles of highway, 2,400 bridges, and $800M in annual infrastructure spending relied on a 40-year-old COBOL mainframe system for asset management. The legacy system lacked mobile access, real-time reporting, and integration with modern GIS platforms, creating operational inefficiencies and limiting the agency's ability to respond to infrastructure emergencies.
            </p>
            <p>
              Thalen Technologies was selected through a competitive RFP process to migrate the DOT's asset management system to Salesforce Government Cloud, a StateRAMP-authorized platform. The project required zero downtime during migration, integration with existing GIS and financial systems, and comprehensive training for 850+ field and office personnel.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Challenge</p>
          <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-8">Legacy Systems and Modern Demands</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Legacy Mainframe Limitations',
                description: 'COBOL-based system from 1983 with no mobile access, no real-time reporting, and $1.2M annual maintenance costs.'
              },
              {
                title: 'Disconnected Systems',
                description: 'Asset data in mainframe, GIS data in ArcGIS, financial data in SAP—no integration, requiring manual data reconciliation.'
              },
              {
                title: 'Emergency Response Delays',
                description: 'Field crews lacked real-time access to asset condition data during emergency repairs, causing delays and safety risks.'
              },
              {
                title: 'Compliance Requirements',
                description: 'State mandate requiring cloud platforms to be StateRAMP authorized with data sovereignty in-state.'
              }
            ].map((challenge, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{challenge.title}</h3>
                  <p className="text-slate-600">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Solution</p>
          <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-8">A Cloud-First, Mobile-Ready Platform</h2>
          <div className="space-y-8">
            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Salesforce Government Cloud Migration</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Thalen Technologies designed and implemented a comprehensive asset management solution on Salesforce Government Cloud (StateRAMP Authorized), replacing the 40-year-old mainframe with a modern, mobile-first platform.
                </p>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'Migrated 2.4M asset records from COBOL mainframe to Salesforce with zero data loss',
                    'Built custom mobile app for field crews to access asset data and submit inspection reports offline',
                    'Integrated Salesforce with ArcGIS for real-time location-based asset visualization',
                    'Connected to SAP financial system for automated budget tracking and procurement workflows',
                    'Implemented predictive maintenance algorithms using historical inspection data'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">StateRAMP Compliance & Data Sovereignty</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Ensured full compliance with state security and data residency requirements through StateRAMP-authorized infrastructure.
                </p>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'Deployed on Salesforce Government Cloud with StateRAMP authorization',
                    'Configured data residency to keep all state data within state boundaries',
                    'Implemented role-based access controls (RBAC) for 850+ users across 12 district offices',
                    'Achieved state CISO approval with comprehensive security documentation',
                    'Established disaster recovery with in-state backup infrastructure'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Change Management & Training</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Comprehensive training program ensuring smooth adoption across field crews, engineers, and administrative staff.
                </p>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'Trained 850+ users through role-based training programs (field crews, engineers, administrators)',
                    'Created 40+ training videos and quick reference guides for common workflows',
                    'Established DOT Center of Excellence with 12 power users for ongoing support',
                    'Conducted 6-week pilot with 3 districts before statewide rollout',
                    'Provided 90-day hypercare support post-launch with dedicated on-site team'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Results</p>
          <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-8">Measurable Impact and Transformation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Operational Efficiency</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  '92% reduction in time to access asset data',
                  'Real-time asset tracking for 12,000+ miles of highway',
                  'Mobile access for 600+ field crews',
                  '85% reduction in manual data entry'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Cost Savings</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  '$3.8M annual savings (mainframe decommissioning)',
                  '$1.2M eliminated in annual maintenance costs',
                  '40% reduction in emergency repair response time',
                  'ROI achieved in 11 months'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Compliance & Security</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  'StateRAMP authorized cloud environment',
                  'In-state data sovereignty maintained',
                  'Passed all state cybersecurity audits',
                  'CJIS compliance for law enforcement data'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Adoption & User Satisfaction</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  '850+ users trained and actively using the system',
                  '94% user satisfaction rate in post-launch survey',
                  '40% increase in data-driven decision making',
                  'Center of Excellence established for long-term success'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.22_0.06_250)] text-white py-20">
        <div className="container text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Modernize Your Infrastructure</h2>
          <p className="text-xl text-white/80 mb-8">
            Thalen Technologies helps government agencies replace legacy systems with secure, compliant, and efficient cloud platforms. Contact us to learn how we can help you achieve similar results.
          </p>
          <Button size="lg" asChild className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
            <Link href="/contact">
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
