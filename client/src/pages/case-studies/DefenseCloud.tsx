import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, CheckCircle2, Cloud, Shield, Clock } from 'lucide-react';
import { Link } from 'wouter';

export default function DefenseCloud() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Defense Contractor Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Defense Contractor: Zero-Downtime Cloud Migration
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Modernized entire infrastructure while achieving CMMC Level 3 certification with 100% uptime maintained throughout 18-month migration.
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
              { value: '100%', label: 'Uptime Maintained', icon: CheckCircle2 },
              { value: '18 months', label: 'Migration Timeline', icon: Clock },
              { value: 'CMMC L3', label: 'Certification Achieved', icon: Shield },
              { value: '$4.5M', label: 'Annual Infrastructure Savings', icon: Cloud }
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
              A major defense contractor with $2B+ in annual DoD contracts operated on aging on-premises infrastructure that limited agility and increased security risks. The company needed to modernize to cloud infrastructure while maintaining 100% operational continuity and achieving CMMC Level 3 certification required for future DoD contracts.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              NexDyne designed and executed a phased cloud migration strategy that modernized 150+ applications and 500TB of classified data across AWS GovCloud and Azure Government, achieving zero downtime and full CMMC Level 3 compliance within 18 months.
            </p>
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
                title: 'Zero-Downtime Requirement',
                description: 'Mission-critical systems supporting active DoD programs required 100% uptime during migration with no service interruptions.'
              },
              {
                title: 'CMMC Level 3 Compliance',
                description: 'New DoD contracts required CMMC Level 3 certification with 130+ security controls across all cloud infrastructure.'
              },
              {
                title: 'Classified Data Migration',
                description: '500TB of CUI and classified data requiring secure transfer protocols and continuous chain-of-custody documentation.'
              },
              {
                title: 'Legacy Application Modernization',
                description: '150+ applications spanning 15 years of development requiring refactoring or replacement for cloud compatibility.'
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
                title: 'Phased Migration Strategy',
                description: 'Developed 6-phase migration roadmap prioritizing non-critical systems first, enabling team learning and process refinement before migrating mission-critical applications.'
              },
              {
                title: 'Hybrid Cloud Architecture',
                description: 'Designed multi-cloud architecture leveraging AWS GovCloud for compute workloads and Azure Government for data analytics, with secure interconnects and unified identity management.'
              },
              {
                title: 'Zero-Trust Security Framework',
                description: 'Implemented comprehensive zero-trust architecture with micro-segmentation, continuous authentication, and automated threat detection achieving CMMC Level 3 requirements.'
              },
              {
                title: 'Automated Migration Tooling',
                description: 'Built custom migration automation tools reducing manual effort by 70% and ensuring consistent security configurations across all migrated workloads.'
              },
              {
                title: 'Continuous Compliance Monitoring',
                description: 'Deployed automated compliance monitoring with real-time dashboards tracking 130+ CMMC controls, enabling rapid remediation of any configuration drift.'
              },
              {
                title: 'Team Training & Enablement',
                description: 'Executed comprehensive training program for 85 engineers and administrators, building internal cloud expertise for ongoing operations.'
              }
            ].map((solution, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
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
      <section className="py-20 bg-accent/10">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Measurable Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { metric: '100%', label: 'Uptime Maintained', detail: 'Zero service interruptions during migration' },
              { metric: 'CMMC Level 3', label: 'Certification Achieved', detail: 'First-time pass on certification audit' },
              { metric: '$4.5M', label: 'Annual Savings', detail: '40% reduction in infrastructure costs' },
              { metric: '150+', label: 'Applications Migrated', detail: '100% successful migration rate' },
              { metric: '500TB', label: 'Data Migrated', detail: 'Zero data loss or corruption' },
              { metric: '85', label: 'Engineers Trained', detail: '100% cloud certification achievement' }
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
                NexDyne's expertise in both cloud architecture and defense compliance was exceptional. They delivered a zero-downtime migration while achieving CMMC Level 3 certification on the first audit. The $4.5M in annual savings exceeded our projections, and our team is now fully enabled to operate in the cloud.
              </blockquote>
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl mr-4">
                  MR
                </div>
                <div>
                  <div className="font-bold text-lg">Michael Rodriguez</div>
                  <div className="text-primary-foreground/80">Chief Information Officer</div>
                  <div className="text-sm text-primary-foreground/60">Defense Contractor (Name Withheld)</div>
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
              'AWS GovCloud',
              'Azure Government',
              'Kubernetes',
              'Docker',
              'Terraform',
              'Ansible',
              'CloudEndure',
              'AWS Migration Hub',
              'Azure Migrate',
              'CMMC Level 3',
              'NIST 800-171',
              'Zero-Trust Architecture',
              'DevSecOps',
              'Infrastructure as Code',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize Your Infrastructure?</h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how NexDyne's proven cloud migration methodology can deliver zero-downtime modernization with full compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Cloud Assessment
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
