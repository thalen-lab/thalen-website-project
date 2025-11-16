import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Cloud as CloudIcon, Shield, Zap, RefreshCw, Lock, Globe } from 'lucide-react';

export default function Cloud() {
  const features = [
    {
      icon: Zap,
      title: 'Zero-Downtime Migration',
      description: 'Seamless cloud migration with guaranteed operational continuity and zero business disruption.'
    },
    {
      icon: Shield,
      title: 'Government-Grade Security',
      description: 'FedRAMP Authorized infrastructure with CMMC Level 3 and FISMA compliance built-in.'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Vendor-agnostic architecture across AWS, Azure, and Google Cloud for maximum flexibility.'
    },
    {
      icon: RefreshCw,
      title: 'Automated DevOps',
      description: 'CI/CD pipelines, infrastructure as code, and automated deployment for rapid iteration.'
    },
    {
      icon: Lock,
      title: 'Zero-Trust Architecture',
      description: 'Identity-based security with continuous verification and least-privilege access controls.'
    },
    {
      icon: CloudIcon,
      title: 'Enterprise Scalability',
      description: 'Auto-scaling infrastructure that grows with your business while optimizing costs.'
    }
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services', services: ['EC2', 'S3', 'RDS', 'Lambda', 'EKS'] },
    { name: 'Microsoft Azure', services: ['VMs', 'Blob Storage', 'SQL Database', 'Functions', 'AKS'] },
    { name: 'Google Cloud Platform', services: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Functions', 'GKE'] }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloud Infrastructure & Modernization
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Zero-downtime migration and government-grade security with DevOps solutions that support and scale your business. Multi-cloud strategy with automated deployment pipelines.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Start Cloud Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Migration Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Cloud Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cloud services designed for mission-critical operations and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all border-2">
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary text-primary-foreground p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-accent mb-2">Defense Sector Success</div>
                  <h3 className="text-3xl font-bold mb-4">Zero-Downtime Cloud Migration for Defense Contractor</h3>
                  <p className="text-primary-foreground/90 mb-6">
                    NexDyne modernized a defense contractor's entire infrastructure while achieving CMMC Level 3 certification, maintaining 100% operational continuity throughout the transformation.
                  </p>
                  <Button className="bg-orange-gradient hover:opacity-90 w-fit">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-accent/10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-accent mb-2">100%</div>
                    <div className="text-lg text-muted-foreground mb-6">Uptime Maintained</div>
                    <div className="text-4xl font-bold text-accent mb-2">CMMC L3</div>
                    <div className="text-lg text-muted-foreground">Certified</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Multi-Cloud Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep expertise across all major cloud platforms for vendor-agnostic solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cloudProviders.map((provider, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{provider.name}</h3>
                  <ul className="space-y-2">
                    {provider.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="h-2 w-2 bg-accent rounded-full mr-3"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Migration Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful cloud adoption with zero disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Assessment', desc: 'Comprehensive infrastructure audit and readiness evaluation' },
              { step: '2', title: 'Planning', desc: 'Migration strategy, architecture design, and risk mitigation' },
              { step: '3', title: 'Migration', desc: 'Phased execution with continuous validation and rollback capability' },
              { step: '4', title: 'Optimization', desc: 'Performance tuning, cost optimization, and ongoing support' }
            ].map((phase, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-accent mb-3">{phase.step}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Modernize Your Infrastructure</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start your cloud journey with a comprehensive infrastructure assessment.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Cloud Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
