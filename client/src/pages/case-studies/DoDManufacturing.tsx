import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, TrendingUp, Clock, Shield, AlertTriangle } from 'lucide-react';

export default function DoDManufacturing() {
  const metrics = [
    { icon: TrendingUp, value: '99.2%', label: 'System Uptime', description: 'Achieved 99.2% uptime across all production lines' },
    { icon: AlertTriangle, value: '75%', label: 'Downtime Reduction', description: 'Eliminated 75% of unplanned downtime incidents' },
    { icon: Clock, value: '4.2 hrs', label: 'MTTR Improvement', description: 'Mean time to repair reduced from 18hrs to 4.2hrs' },
    { icon: Shield, value: 'Zero', label: 'Security Incidents', description: 'Zero cybersecurity incidents in 24 months' }
  ];

  const challenges = [
    {
      title: 'Frequent Unplanned Downtime',
      description: 'Manufacturing facility experienced 150+ unplanned downtime incidents annually across 50 production lines, impacting critical defense production schedules and mission readiness.'
    },
    {
      title: 'Aging Industrial Control Systems',
      description: 'Legacy SCADA and industrial control systems (ICS) spanning 15+ years with limited cybersecurity controls and no predictive maintenance capabilities.'
    },
    {
      title: 'CMMC Level 3 Compliance Gap',
      description: 'Facility required Cybersecurity Maturity Model Certification (CMMC) Level 3 compliance for Controlled Unclassified Information (CUI) but had significant security control gaps.'
    },
    {
      title: 'Limited Operational Visibility',
      description: 'No real-time visibility into equipment health, production metrics, or cybersecurity posture across distributed manufacturing operations.'
    }
  ];

  const solutions = [
    {
      title: 'FedRAMP Cybersecurity Platform Deployment',
      description: 'Implemented FedRAMP-authorized cybersecurity platforms (Palo Alto Networks Prisma Cloud Gov, CrowdStrike Falcon Gov) with zero-trust network architecture and continuous monitoring for ICS/SCADA environments.'
    },
    {
      title: 'Predictive Maintenance Analytics',
      description: 'Deployed IoT sensors across 50 production lines with ML-powered predictive maintenance analytics, identifying equipment failures 72 hours before occurrence with 94% accuracy.'
    },
    {
      title: 'CMMC Level 3 Compliance Implementation',
      description: 'Implemented 130 NIST 800-171 security controls with comprehensive documentation, continuous monitoring, and third-party assessment support achieving CMMC Level 3 certification in 8 months.'
    },
    {
      title: 'Operational Intelligence Dashboard',
      description: 'Built real-time operational intelligence platform integrating production metrics, equipment health, cybersecurity posture, and supply chain data for executive decision-making.'
    }
  ];

  const outcomes = [
    '99.2% system uptime achieved across all 50 production lines',
    '75% reduction in unplanned downtime incidents (150 to 38 annually)',
    'Mean time to repair (MTTR) reduced from 18 hours to 4.2 hours',
    '$12.5M annual cost savings from downtime elimination and efficiency gains',
    'CMMC Level 3 certification achieved in 8 months',
    'Zero cybersecurity incidents in 24 months of production operation',
    '94% accuracy in predictive maintenance failure detection',
    'Real-time visibility across all manufacturing operations and security posture'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Department of Defense Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              DoD Manufacturing Facility Achieves 99.2% Uptime
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Deployed FedRAMP-authorized cybersecurity platforms and predictive maintenance analytics for defense manufacturing operations, eliminating 75% of unplanned downtime across 50+ production lines.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Discuss Your Manufacturing Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/cybersecurity">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Cybersecurity Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Operational Excellence Achieved</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements in uptime, cybersecurity, and operational efficiency supporting critical defense production.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                    <metric.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">{metric.value}</div>
                  <div className="font-semibold mb-2">{metric.label}</div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Facility Overview</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Organization:</strong> Department of Defense manufacturing facility
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Mission:</strong> Critical defense component manufacturing for military systems
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Scale:</strong> 50 production lines across 850,000 sq ft facility
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Workforce:</strong> 1,200 manufacturing and engineering personnel
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Compliance:</strong> CMMC Level 3, NIST 800-171, DFARS 252.204-7012
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="/manufacturing-security.jpg" 
                alt="DoD Manufacturing Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Operational Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Critical uptime, cybersecurity, and compliance challenges threatening defense production schedules.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Thalen Technologies Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cybersecurity, predictive maintenance, and compliance solution for defense manufacturing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <div className="bg-accent text-accent-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold">{solution.title}</h3>
                  </div>
                  <p className="text-muted-foreground ml-12">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Project Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dramatic improvements in uptime, cost efficiency, cybersecurity posture, and regulatory compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-lg">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-accent/10">
        <div className="container">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="text-6xl text-accent mb-4">"</div>
                <p className="text-2xl font-medium mb-6">
                  Thalen Technologies's solution transformed our manufacturing operations from reactive firefighting to proactive optimization. The 99.2% uptime achievement and CMMC Level 3 certification have positioned us as a model facility within the DoD manufacturing ecosystem. The $12.5M annual savings and zero security incidents demonstrate their exceptional technical and compliance expertise.
                </p>
                <div className="border-t pt-6">
                  <p className="font-bold text-lg">Facility Director</p>
                  <p className="text-muted-foreground">Department of Defense Manufacturing Facility</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Defense Operations?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a cybersecurity assessment to discuss your facility's security posture, compliance requirements, and operational resilience needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services/cybersecurity">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Cybersecurity Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
