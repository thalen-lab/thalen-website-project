import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, CheckCircle2, Shield, Eye, Lock } from 'lucide-react';
import { Link } from 'wouter';

export default function IntelligenceSecurity() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold">
                Intelligence Community Case Study
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                IDIQ Contract
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                TS/SCI Clearance
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Intelligence Agency: Secure Collaboration Platform
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Cross-domain collaboration platform enabled secure information sharing across 15 agencies while maintaining TS/SCI compartmentalization.
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
              { value: '15', label: 'Agencies Connected', icon: Eye },
              { value: 'TS/SCI', label: 'Security Level', icon: Shield },
              { value: '5,000+', label: 'Cleared Users', icon: CheckCircle2 },
              { value: '0', label: 'Security Incidents', icon: Lock }
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
              A major intelligence agency needed to enable secure collaboration across 15 partner agencies while maintaining strict compartmentalization of Top Secret/Sensitive Compartmented Information (TS/SCI). Legacy systems created information silos that hindered mission-critical intelligence sharing.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Thalen Technologies designed and deployed a cross-domain collaboration platform with attribute-based access control, automated classification, and continuous monitoring, enabling secure information sharing across 5,000+ cleared personnel while maintaining zero security incidents over 3+ years of operation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 p-6 bg-secondary rounded-lg">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Contract Type</h3>
                <p className="text-lg font-bold">IDIQ Task Order</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Contract Value</h3>
                <p className="text-lg font-bold">$22.3M (36 months)</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Security Clearance</h3>
                <p className="text-lg font-bold">TS/SCI with Poly</p>
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
                title: 'Information Silos',
                description: 'Critical intelligence fragmented across 15 agencies with no secure mechanism for cross-agency collaboration and information sharing.'
              },
              {
                title: 'Compartmentalization Requirements',
                description: 'Need to maintain strict TS/SCI compartmentalization with attribute-based access control across multiple classification levels and special access programs.'
              },
              {
                title: 'Cross-Domain Security',
                description: 'Requirement for secure information flow between classification domains while preventing unauthorized disclosure or data spillage.'
              },
              {
                title: 'Audit & Compliance',
                description: 'Comprehensive audit trails required for all access, modifications, and sharing activities to meet IC ICD 503 requirements.'
              }
            ].map((challenge, index) => (
              <Card key={index}>
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
          <h2 className="text-4xl font-bold mb-8">Our Solution</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Attribute-Based Access Control (ABAC)',
                description: 'Implemented fine-grained ABAC system enforcing access decisions based on clearance level, need-to-know, special access programs, and organizational affiliation.'
              },
              {
                title: 'Automated Classification Engine',
                description: 'Deployed ML-powered classification engine automatically tagging content with appropriate classification markings and compartment labels with 99.1% accuracy.'
              },
              {
                title: 'Cross-Domain Guard Architecture',
                description: 'Built secure cross-domain solution enabling controlled information flow between classification levels with human-in-the-loop review for sensitive transfers.'
              },
              {
                title: 'Secure Collaboration Tools',
                description: 'Developed classified messaging, document collaboration, and video conferencing tools with end-to-end encryption and ephemeral key management.'
              },
              {
                title: 'Continuous Monitoring & Threat Detection',
                description: 'Implemented behavioral analytics and anomaly detection identifying insider threats and unauthorized access attempts in real-time.'
              },
              {
                title: 'Comprehensive Audit System',
                description: 'Built immutable audit trail capturing all user activities with automated compliance reporting meeting IC ICD 503 requirements.'
              }
            ].map((solution, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-foreground mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Measurable Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { metric: '15', label: 'Agencies Connected', detail: 'Seamless cross-agency collaboration' },
              { metric: '5,000+', label: 'Cleared Users', detail: 'Active platform users' },
              { metric: '0', label: 'Security Incidents', detail: 'Perfect security record' },
              { metric: '99.1%', label: 'Classification Accuracy', detail: 'Automated classification engine' },
              { metric: '85%', label: 'Faster Intelligence Sharing', detail: 'Reduced sharing time' },
              { metric: '100%', label: 'Audit Compliance', detail: 'IC ICD 503 compliance maintained' }
            ].map((result, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{result.metric}</div>
                  <div className="text-lg font-semibold mb-1">{result.label}</div>
                  <div className="text-sm text-muted-foreground">{result.detail}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12">
              <div className="text-6xl text-accent mb-6">"</div>
              <blockquote className="text-2xl font-medium mb-8">
                Thalen Technologies's cross-domain collaboration platform has significantly improved how we share intelligence across the IC. The platform maintains the strictest security standards while enabling the collaboration our mission requires. Three years of zero security incidents speaks to the quality of their security architecture and implementation.
              </blockquote>
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center text-accent font-bold text-xl mr-4">
                  [REDACTED]
                </div>
                <div>
                  <div className="font-bold text-lg">[Name Withheld]</div>
                  <div className="text-primary-foreground/80">Deputy Director</div>
                  <div className="text-sm text-primary-foreground/60">Intelligence Community Agency</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Technologies & Methodologies</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Attribute-Based Access Control',
              'Cross-Domain Solution',
              'PKI',
              'End-to-End Encryption',
              'Machine Learning',
              'NLP',
              'Behavioral Analytics',
              'SIEM',
              'IC ICD 503',
              'NIST 800-53',
              'Zero-Trust Architecture',
              'DevSecOps',
              'Kubernetes',
              'PostgreSQL',
              'Agile/SAFe'
            ].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Secure Your Classified Operations</h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how Thalen Technologies's intelligence community solutions can enable secure collaboration at the highest classification levels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Classified Briefing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
