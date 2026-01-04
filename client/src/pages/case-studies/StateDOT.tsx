import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, CheckCircle2, TrendingUp, Users, Clock, MapPin } from 'lucide-react';
import { Link } from 'wouter';

export default function StateDOT() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold">
                State Government Case Study
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                StateRAMP Authorized
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                CJIS Compliant
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              State DOT Modernizes Asset Management with 92% Efficiency Gain
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Migrating 40-year-old mainframe infrastructure to Salesforce Government Cloud, enabling real-time asset tracking across 12,000 miles of highway and 2,400 bridges.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              <Download className="mr-2 h-5 w-5" />
              Download Full Case Study (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '92%', label: 'Efficiency Improvement', icon: TrendingUp },
              { value: '14 months', label: 'Project Timeline', icon: Clock },
              { value: '$3.8M', label: 'Annual Cost Savings', icon: TrendingUp },
              { value: '850+', label: 'Users Trained', icon: Users }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              A state Department of Transportation managing 12,000+ miles of highway, 2,400 bridges, and $800M in annual infrastructure spending relied on a 40-year-old COBOL mainframe system for asset management. The legacy system lacked mobile access, real-time reporting, and integration with modern GIS platforms, creating operational inefficiencies and limiting the agency's ability to respond to infrastructure emergencies.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              NexDyne Technology was selected through a competitive RFP process to migrate the DOT's asset management system to Salesforce Government Cloud, a StateRAMP-authorized platform. The project required zero downtime during migration, integration with existing GIS and financial systems, and comprehensive training for 850+ field and office personnel.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 p-6 bg-secondary rounded-lg">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Contract Type</h3>
                <p className="text-lg font-bold">State Master Agreement</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Contract Value</h3>
                <p className="text-lg font-bold">$2.8M (14 months)</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Compliance</h3>
                <p className="text-lg font-bold">StateRAMP Authorized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">The Challenge</h2>
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
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">The Solution</h2>
          <div className="space-y-8">
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Salesforce Government Cloud Migration</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  NexDyne Technology designed and implemented a comprehensive asset management solution on Salesforce Government Cloud (StateRAMP Authorized), replacing the 40-year-old mainframe with a modern, mobile-first platform.
                </p>
                <ul className="space-y-3">
                  {[
                    'Migrated 2.4M asset records from COBOL mainframe to Salesforce with zero data loss',
                    'Built custom mobile app for field crews to access asset data and submit inspection reports offline',
                    'Integrated Salesforce with ArcGIS for real-time location-based asset visualization',
                    'Connected to SAP financial system for automated budget tracking and procurement workflows',
                    'Implemented predictive maintenance algorithms using historical inspection data'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">StateRAMP Compliance & Data Sovereignty</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Ensured full compliance with state security and data residency requirements through StateRAMP-authorized infrastructure.
                </p>
                <ul className="space-y-3">
                  {[
                    'Deployed on Salesforce Government Cloud with StateRAMP authorization',
                    'Configured data residency to keep all state data within state boundaries',
                    'Implemented role-based access controls (RBAC) for 850+ users across 12 district offices',
                    'Achieved state CISO approval with comprehensive security documentation',
                    'Established disaster recovery with in-state backup infrastructure'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Change Management & Training</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Comprehensive training program ensuring smooth adoption across field crews, engineers, and administrative staff.
                </p>
                <ul className="space-y-3">
                  {[
                    'Trained 850+ users through role-based training programs (field crews, engineers, administrators)',
                    'Created 40+ training videos and quick reference guides for common workflows',
                    'Established DOT Center of Excellence with 12 power users for ongoing support',
                    'Conducted 6-week pilot with 3 districts before statewide rollout',
                    'Provided 90-day hypercare support post-launch with dedicated on-site team'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Operational Efficiency',
                metrics: [
                  '92% reduction in time to access asset data',
                  'Real-time asset tracking for 12,000+ miles of highway',
                  'Mobile access for 600+ field crews',
                  '85% reduction in manual data entry'
                ]
              },
              {
                title: 'Cost Savings',
                metrics: [
                  '$3.8M annual savings (mainframe decommissioning)',
                  '$1.2M eliminated in annual maintenance costs',
                  '40% reduction in emergency repair response time',
                  'ROI achieved in 11 months'
                ]
              },
              {
                title: 'Compliance & Security',
                metrics: [
                  'StateRAMP authorized infrastructure',
                  '100% data residency within state boundaries',
                  'State CISO approval in 6 months',
                  'Zero security incidents since launch'
                ]
              },
              {
                title: 'User Adoption',
                metrics: [
                  '94% user satisfaction score',
                  '850+ users trained and certified',
                  '98% mobile app adoption by field crews',
                  'Zero downtime during migration'
                ]
              }
            ].map((result, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{result.title}</h3>
                  <ul className="space-y-2">
                    {result.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Client Testimonial</h3>
              <p className="text-lg mb-6 leading-relaxed">
                "NexDyne Technology improved our 40-year-old mainframe system into a modern, mobile-first platform in just 14 months. Our field crews now have real-time access to asset data on their tablets, and we've reduced emergency response times by 40%. The StateRAMP-authorized Salesforce platform gave our CISO confidence that we were meeting all state security requirements. This project has fundamentally changed how we manage infrastructure."
              </p>
              <div className="border-t border-accent/20 pt-4">
                <div className="font-semibold">Jennifer Martinez</div>
                <div className="text-sm text-muted-foreground">Chief Information Officer - State Department of Transportation</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Cloud Platform',
                technologies: ['Salesforce Government Cloud (StateRAMP)', 'AWS GovCloud (backup/DR)', 'In-state data centers']
              },
              {
                category: 'Integration',
                technologies: ['MuleSoft (iPaaS)', 'ArcGIS REST API', 'SAP ERP integration', 'Legacy mainframe ETL']
              },
              {
                category: 'Mobile & Analytics',
                technologies: ['Salesforce Mobile App', 'Tableau (embedded analytics)', 'Einstein Analytics', 'Offline-first architecture']
              }
            ].map((stack, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">{stack.category}</h3>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {tech}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient diagonal-top text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize Your State Infrastructure?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Learn how NexDyne Technology can help your state agency migrate from legacy systems to StateRAMP-authorized cloud platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/case-studies">
                View More Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
