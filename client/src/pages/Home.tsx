import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Shield, 
  Cloud, 
  BarChart3,
  Cpu,
  Code,
  Users,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Cpu,
      title: 'Process Automation & Optimization',
      description: 'Transform manual processes into automated workflows with RPA, intelligent orchestration, and seamless legacy system integration. Reduce operational costs while improving accuracy and compliance.',
      href: '/services/automation'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Intelligence',
      description: 'Turn data into actionable insights with advanced analytics, real-time visualization, and predictive modeling. Make data-driven decisions that improve mission outcomes and operational efficiency.',
      href: '/services/data-analytics'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Modernization',
      description: 'Migrate to secure, scalable cloud infrastructure with FedRAMP-authorized platforms. Modernize legacy systems while maintaining security, compliance, and operational continuity.',
      href: '/services/cloud'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Protect critical systems with zero-trust architecture, continuous monitoring, and comprehensive compliance frameworks. Meet CMMC, FISMA, and FedRAMP requirements with confidence.',
      href: '/services/cybersecurity'
    },
    {
      icon: Code,
      title: 'Application Development & Integration',
      description: 'Build custom applications and integrate disparate systems with modern APIs and microservices. Connect legacy platforms to new technologies without vendor lock-in.',
      href: '/services/system-integration'
    },
    {
      icon: Users,
      title: 'Digital Transformation & Enablement',
      description: 'Drive organizational change with strategic planning, change management, and technology adoption programs. Transform operations while ensuring workforce readiness and stakeholder buy-in.',
      href: '/services/digital-transformation'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Government Technology Implementation Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Comprehensive technology solutions for federal, state, and local agencies. From automation to analytics, we deliver secure, compliant, and mission-critical operations through proven implementation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Schedule Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/5">
                <Link href="/methodology">
                  Our Methodology
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Government Technology Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions for federal, state, and local agencies. From automation to analytics, we deliver secure, compliant, and mission-critical operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Link href={service.href}>
                      <span className="text-accent hover:text-accent/80 font-medium inline-flex items-center group-hover:gap-2 transition-all">
                        Learn More <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-lg text-muted-foreground">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">$2.3B</div>
              <div className="text-lg text-muted-foreground">Client ROI Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
              <div className="text-lg text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Request an assessment to understand how our proven methodology can support your mission-critical operations, enhance security, and improve citizen services through proven implementation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Schedule Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/5">
                <Link href="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
