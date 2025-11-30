import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, TrendingUp, Activity, Clock, Database, Users } from 'lucide-react';

export default function CountyHealthDepartmentCaseStudy() {
  const metrics = [
    { icon: Clock, value: '40%', label: 'Faster Outbreak Response' },
    { icon: Database, value: '12', label: 'Systems Integrated' },
    { icon: Users, value: '2.5M', label: 'County Residents Served' },
    { icon: Activity, value: 'Real-Time', label: 'Disease Surveillance' }
  ];

  const challenges = [
    '12 disconnected health systems with no data sharing capabilities',
    'Manual disease surveillance requiring 48-72 hours for outbreak detection',
    'HIPAA compliance requirements for protected health information (PHI)',
    'State health department integration for mandatory reporting',
    'Limited IT budget and 10-month implementation timeline',
    'Need for real-time analytics accessible to 200+ county health workers'
  ];

  const solutions = [
    {
      title: 'HIPAA-Compliant Data Integration Hub',
      description: 'Built secure integration platform connecting 12 county health systems (EHR, lab, immunization, vital records) with HIPAA-compliant data exchange and PHI protection controls.'
    },
    {
      title: 'Real-Time Disease Surveillance',
      description: 'Implemented automated disease surveillance system analyzing patient data in real-time to detect outbreak patterns, replacing manual 48-72 hour reporting delays.'
    },
    {
      title: 'State Health Department Integration',
      description: 'Integrated county systems with state health department for automated mandatory disease reporting, case investigation coordination, and resource allocation.'
    },
    {
      title: 'Public Health Analytics Dashboard',
      description: 'Deployed role-based analytics dashboards for epidemiologists, nurses, and administrators with real-time disease trends, outbreak alerts, and population health metrics.'
    }
  ];

  const outcomes = [
    {
      title: 'Faster Outbreak Response',
      value: '40% improvement',
      description: 'Reduced outbreak detection and response time by 40% through real-time surveillance, enabling faster public health interventions and containment measures.'
    },
    {
      title: 'Automated Reporting',
      value: '100% compliance',
      description: 'Achieved 100% on-time state reporting compliance with automated disease reporting, eliminating manual data entry and reducing reporting errors by 92%.'
    },
    {
      title: 'Comprehensive Data Access',
      value: '12 systems unified',
      description: 'Unified 12 previously disconnected systems providing complete patient health history for case investigations and contact tracing.'
    },
    {
      title: 'Improved Population Health',
      value: '25% increase',
      description: 'Increased preventive care outreach by 25% through data-driven identification of at-risk populations and targeted intervention programs.'
    }
  ];

  const technologies = [
    'Azure Government (HIPAA-compliant)',
    'HL7 FHIR for health data exchange',
    'Azure API Management for integration',
    'Power BI Gov for public health dashboards',
    'Azure SQL Database with encryption',
    'State health information exchange (HIE)',
    'Role-based access controls (RBAC)',
    'Automated disease reporting workflows'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              County Government Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              County Health Department: Real-Time Disease Surveillance Integration
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              How a county health department improved outbreak response time by 40% with HIPAA-compliant integration of 12 health systems and real-time disease surveillance for 2.5 million residents.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">County Government</span>
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">HIPAA Compliance</span>
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">Health IT Integration</span>
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">Public Health</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="border-2 text-center">
                <CardContent className="p-8">
                  <metric.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">{metric.value}</div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">The Challenge</h2>
            <p className="text-xl text-muted-foreground">
              The county health department served 2.5 million residents with 12 disconnected health systems that couldn't share data. Disease surveillance relied on manual chart reviews and phone calls, creating 48-72 hour delays in outbreak detection. This fragmented approach limited their ability to respond quickly to public health threats.
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Key Challenges</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start">
                    <Activity className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Solution</h2>
            <p className="text-xl text-muted-foreground">
              NexDyne designed and implemented a HIPAA-compliant health data integration platform connecting 12 county systems with real-time disease surveillance, automated state reporting, and public health analytics dashboards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <CheckCircle2 className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Implementation Approach</h2>
          
          <div className="space-y-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">HIPAA Assessment & System Discovery (Weeks 1-3)</h3>
                    <p className="text-muted-foreground mb-4">
                      Conducted comprehensive HIPAA compliance assessment, documented security controls for PHI protection, inventoried all 12 health systems (EHR, lab, immunization, vital records), and established data governance framework.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">HIPAA Assessment</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">System Inventory</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Data Governance</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Integration Platform Build & System Connections (Weeks 4-22)</h3>
                    <p className="text-muted-foreground mb-4">
                      Built HIPAA-compliant integration hub on Azure Government, implemented HL7 FHIR interfaces for each system, established secure data pipelines with PHI encryption, and validated data quality and completeness.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Integration Hub</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">HL7 FHIR</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">PHI Encryption</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Surveillance System & State Integration (Weeks 18-32)</h3>
                    <p className="text-muted-foreground mb-4">
                      Developed real-time disease surveillance algorithms, built automated state health department reporting workflows, created public health analytics dashboards with role-based access, and integrated with state HIE.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Disease Surveillance</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">State Reporting</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Analytics Dashboards</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Training & Production Launch (Weeks 33-40)</h3>
                    <p className="text-muted-foreground mb-4">
                      Trained 200+ county health workers (epidemiologists, nurses, administrators) on new platform, validated HIPAA compliance with county privacy officer, and launched production system with 24/7 monitoring.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">User Training</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">HIPAA Validation</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Production Launch</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Outcomes & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <TrendingUp className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">{outcome.title}</h3>
                  <div className="text-3xl font-bold text-accent mb-3">{outcome.value}</div>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Technologies & Platforms</h2>
          
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <div className="text-6xl mb-6">"</div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-8 italic">
            NexDyne's health data integration platform has revolutionized our public health response capabilities. The 40% improvement in outbreak detection time has been critical for protecting our 2.5 million residents, and the automated state reporting has eliminated countless hours of manual work. Their deep understanding of HIPAA requirements and health IT standards was essential to our success.
          </blockquote>
          <div className="font-semibold text-xl">Director of Public Health</div>
          <div className="text-accent">County Health Department</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your County Agency?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn how NexDyne can help your county or local government agency implement HIPAA-compliant health IT integration and analytics solutions with proven results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule State/Local Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/federal-solutions/state-local">
              <Button size="lg" variant="outline">
                View State/Local Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
