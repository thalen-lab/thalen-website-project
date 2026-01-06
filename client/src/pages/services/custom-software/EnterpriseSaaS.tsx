import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, Cloud, Users, DollarSign, TrendingUp, 
  CheckCircle2, Shield, Zap, Database, Settings, BarChart3
} from 'lucide-react';
import { Link } from 'wouter';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function EnterpriseSaaS() {
  const features = [
    {
      icon: Users,
      title: "Multi-Tenant Architecture",
      description: "Secure data isolation with shared infrastructure for cost efficiency and scalability."
    },
    {
      icon: DollarSign,
      title: "Subscription Management",
      description: "Flexible billing, tiered pricing, usage tracking, and automated invoicing."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Real-time dashboards, usage metrics, and business intelligence for data-driven decisions."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SSO, role-based access control, encryption, and compliance with SOC 2, GDPR, HIPAA."
    },
    {
      icon: Zap,
      title: "API & Integrations",
      description: "RESTful APIs, webhooks, and pre-built integrations with popular business tools."
    },
    {
      icon: Settings,
      title: "Customization Engine",
      description: "White-labeling, custom workflows, and tenant-specific configurations."
    }
  ];

  const techStack = [
    { category: "Frontend", tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", tech: ["Node.js", "Python/Django", "PostgreSQL", "Redis"] },
    { category: "Infrastructure", tech: ["AWS/Azure", "Kubernetes", "Docker", "Terraform"] },
    { category: "Payments", tech: ["Stripe", "PayPal", "Chargebee", "Recurly"] }
  ];

  const caseStudy = {
    client: "FinTech SaaS Platform",
    challenge: "Build a multi-tenant payment processing platform handling millions in transactions with 99.99% uptime requirements.",
    solution: "Developed microservices architecture with Kubernetes orchestration, PostgreSQL for data isolation, Redis for caching, and Stripe for payment processing.",
    results: [
      { metric: "Transaction Volume", value: "$50M+ annually" },
      { metric: "Uptime", value: "99.99%" },
      { metric: "Active Tenants", value: "500+" },
      { metric: "Time to Market", value: "4 months" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Services', href: '/consulting-services' },
                  { label: 'Custom Software Solutions', href: '/services/custom-software' },
                  { label: 'Enterprise SaaS Platforms' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise SaaS Platform Development
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl opacity-90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Build scalable, multi-tenant SaaS applications with subscription management, analytics, and enterprise-grade security. From MVP to millions of users.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
                <Link href="/contact">
                  Discuss Your SaaS Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                View Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise SaaS Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to launch and scale a successful SaaS business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <feature.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4">SaaS Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern, proven technologies for building scalable SaaS platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold mb-4 text-accent">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.tech.map((tech, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4">Our SaaS Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 4-phase methodology for launching successful SaaS products.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "Discovery & Planning",
                description: "Market research, competitor analysis, feature prioritization, and technical architecture design.",
                duration: "2-3 weeks"
              },
              {
                phase: "MVP Development",
                description: "Core features, multi-tenant setup, authentication, billing integration, and admin dashboard.",
                duration: "8-12 weeks"
              },
              {
                phase: "Beta Launch & Iteration",
                description: "User onboarding, feedback collection, feature refinement, and performance optimization.",
                duration: "4-6 weeks"
              },
              {
                phase: "Scale & Growth",
                description: "Advanced features, integrations, analytics, and infrastructure scaling for growth.",
                duration: "Ongoing"
              }
            ].map((item, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.phase}</h3>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                <div className="text-sm text-accent font-semibold">{item.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Story</h2>
          </div>

          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-12">
              <div className="text-sm text-accent font-semibold mb-2">{caseStudy.client}</div>
              <h3 className="text-3xl font-bold mb-6">Payment Processing SaaS Platform</h3>
              
              <div className="space-y-6 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                <div>
                  <h4 className="font-bold mb-2">Challenge</h4>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Solution</h4>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 pt-6 border-t">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">{result.value}</div>
                    <div className="text-sm text-muted-foreground">{result.metric}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4">Flexible Engagement Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the model that fits your timeline and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Fixed-Price MVP",
                price: "$80K - $150K",
                timeline: "3-4 months",
                features: ["Core SaaS features", "Multi-tenant setup", "Billing integration", "Admin dashboard", "Basic analytics"]
              },
              {
                title: "Dedicated Team",
                price: "$15K - $25K/month",
                timeline: "6+ months",
                features: ["Full-time developers", "Ongoing feature development", "DevOps & scaling", "Support & maintenance", "Flexible scope"]
              },
              {
                title: "Equity Partnership",
                price: "Negotiable",
                timeline: "Varies",
                features: ["Reduced upfront cost", "Shared success model", "Long-term partnership", "Strategic guidance", "Revenue share"]
              }
            ].map((model, index) => (
              <Card key={index} className="hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2">{model.title}</h3>
                  <div className="text-3xl font-bold text-accent mb-2">{model.price}</div>
                  <div className="text-sm text-muted-foreground mb-6">{model.timeline}</div>
                  <ul className="space-y-3">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your SaaS Platform?</h2>
          <p className="text-xl opacity-90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a roadmap to launch your SaaS business.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
            <Link href="/contact">
              Schedule a Consultation
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
