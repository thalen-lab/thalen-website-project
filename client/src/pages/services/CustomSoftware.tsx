import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, Cloud, Code2, Smartphone, Rocket, CheckCircle2, Layers, Database, Users, TrendingUp 
} from 'lucide-react';
import { Link } from 'wouter';

export default function CustomSoftware() {
  const services = [
    {
      icon: Cloud,
      title: "Enterprise SaaS Platforms",
      description: "Multi-tenant SaaS applications with subscription management, analytics, and scalable infrastructure.",
      features: [
        "Multi-tenant architecture",
        "Subscription & billing",
        "Usage analytics",
        "API integrations"
      ],
      link: "/services/custom-software/enterprise-saas"
    },
    {
      icon: Rocket,
      title: "Startup MVP Development",
      description: "Rapid prototyping and MVP development to validate your product-market fit and secure funding.",
      features: [
        "2-3 month delivery",
        "Agile sprints",
        "User feedback loops",
        "Scalable foundation"
      ],
      link: "/services/custom-software/startup-mvp"
    },
    {
      icon: Code2,
      title: "Custom Business Applications",
      description: "Tailored internal tools, CRMs, ERPs, and workflow automation to streamline operations.",
      features: [
        "Process automation",
        "Custom workflows",
        "Role-based access",
        "Third-party integrations"
      ],
      link: "/services/custom-software/business-apps"
    },
    {
      icon: Layers,
      title: "API & Microservices Development",
      description: "RESTful APIs, GraphQL, and microservices architecture for modern, scalable applications.",
      features: [
        "API design & documentation",
        "Microservices architecture",
        "Real-time data sync",
        "Webhook integrations"
      ],
      link: "/services/custom-software/api-microservices"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS/Android apps and cross-platform solutions with React Native or Flutter.",
      features: [
        "iOS & Android native",
        "Cross-platform frameworks",
        "Offline-first design",
        "Push notifications"
      ],
      link: "/services/custom-software/mobile-apps"
    },
    {
      icon: Database,
      title: "Legacy System Modernization",
      description: "Transform outdated monolithic applications into modern, cloud-native microservices.",
      features: [
        "Incremental migration",
        "Zero-downtime transition",
        "Cloud-native refactoring",
        "Performance optimization"
      ],
      link: "/services/custom-software/legacy-modernization"
    }
  ];

  const caseStudies = [
    {
      industry: "FinTech Startup",
      title: "Payment Processing SaaS Platform",
      description: "Built multi-tenant payment gateway processing $50M+ annually with 99.99% uptime.",
      metrics: [
        { label: "Transaction Volume", value: "$50M+" },
        { label: "Uptime", value: "99.99%" },
        { label: "Time to Market", value: "4 months" }
      ]
    },
    {
      industry: "E-Commerce",
      title: "Custom Marketplace Platform",
      description: "Developed two-sided marketplace connecting 10K+ buyers with 500+ sellers, handling $5M GMV.",
      metrics: [
        { label: "Active Users", value: "10K+" },
        { label: "GMV", value: "$5M" },
        { label: "Conversion Rate", value: "8.5%" }
      ]
    },
    {
      industry: "Healthcare Tech",
      title: "Telemedicine Mobile App",
      description: "HIPAA-compliant telehealth platform serving 50K+ patients with video consultations and e-prescriptions.",
      metrics: [
        { label: "Patients Served", value: "50K+" },
        { label: "Consultations", value: "200K+" },
        { label: "App Rating", value: "4.8/5" }
      ]
    }
  ];

  const techStack = [
    { category: "Frontend", technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"] },
    { category: "Backend", technologies: ["Node.js", "Python", "Java", "Go", ".NET", "Ruby"] },
    { category: "Mobile", technologies: ["React Native", "Flutter", "Swift", "Kotlin"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"] },
    { category: "Databases", technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] }
  ];

  const engagementModels = [
    {
      icon: Rocket,
      title: "Fixed-Price Projects",
      description: "Well-defined scope with fixed timeline and budget. Ideal for MVPs and small projects.",
      bestFor: "MVPs, prototypes, defined requirements"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Dedicated developers working exclusively on your project. Full control and flexibility.",
      bestFor: "Long-term projects, evolving requirements"
    },
    {
      icon: TrendingUp,
      title: "Time & Materials",
      description: "Pay for actual time and resources used. Maximum flexibility for changing requirements.",
      bestFor: "Complex projects, uncertain scope"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-semibold mb-6">
              Implementation Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Custom Software Solutions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We help agencies build custom software solutions tailored to their mission requirements—modernizing existing applications first, then developing new FedRAMP-authorized solutions when needed. From citizen-facing portals to internal case management systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Custom Software Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup MVPs to enterprise-grade platforms, we build software that scales with your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all group">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link}>
                    <a className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all active:scale-95">
                      Learn More
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Agile Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that delivers working software in weeks, not months.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "Discovery",
                description: "Requirements gathering, user research, and technical architecture planning."
              },
              {
                phase: "Design",
                description: "UI/UX design, prototyping, and user testing for optimal experience."
              },
              {
                phase: "Development",
                description: "Agile sprints with continuous integration and weekly demos."
              },
              {
                phase: "Launch & Support",
                description: "Deployment, monitoring, and ongoing maintenance and enhancements."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.phase}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Modern Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use current technologies to build fast, scalable, and maintainable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-bold mb-4 text-accent">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, idx) => (
                    <div key={idx} className="px-4 py-2 bg-secondary rounded-lg text-sm">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our custom software engagements with startups and enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <div className="text-sm text-accent font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  <div className="space-y-3">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center border-t pt-3">
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        <span className="text-lg font-bold text-accent">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Flexible Engagement Models</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the engagement model that best fits your project needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <Card key={index} className="hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8 text-center">
                  <model.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{model.title}</h3>
                  <p className="text-muted-foreground mb-6">{model.description}</p>
                  <div className="pt-4 border-t">
                    <div className="text-sm font-semibold text-accent mb-1">Best For:</div>
                    <div className="text-sm text-muted-foreground">{model.bestFor}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Custom Solution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a tailored development plan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/methodology">
                View Our Process
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
