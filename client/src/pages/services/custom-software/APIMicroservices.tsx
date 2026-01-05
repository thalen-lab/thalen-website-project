import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, Layers, Zap, Database, Cloud, 
  CheckCircle2, Code2, Lock, BarChart3, Workflow, GitBranch
} from 'lucide-react';
import { Link } from 'wouter';

export default function APIMicroservices() {
  const services = [
    {
      icon: Code2,
      title: "RESTful API Development",
      description: "Scalable REST APIs with proper versioning, documentation, and authentication.",
      features: ["OpenAPI/Swagger docs", "OAuth 2.0 / JWT auth", "Rate limiting", "Versioning strategy"]
    },
    {
      icon: Layers,
      title: "GraphQL APIs",
      description: "Flexible GraphQL APIs for efficient data fetching and real-time subscriptions.",
      features: ["Schema design", "Query optimization", "Real-time subscriptions", "Apollo Server"]
    },
    {
      icon: GitBranch,
      title: "Microservices Architecture",
      description: "Decompose monoliths into independent, scalable microservices.",
      features: ["Service decomposition", "Event-driven design", "API gateway", "Service mesh"]
    },
    {
      icon: Workflow,
      title: "Webhook Integrations",
      description: "Real-time event notifications and third-party system integrations.",
      features: ["Event streaming", "Retry logic", "Payload validation", "Webhook security"]
    },
    {
      icon: Database,
      title: "Data Synchronization",
      description: "Real-time data sync between systems with conflict resolution.",
      features: ["Two-way sync", "Conflict resolution", "Delta updates", "Change data capture"]
    },
    {
      icon: Lock,
      title: "API Security & Governance",
      description: "Enterprise-grade security, monitoring, and compliance for APIs.",
      features: ["API key management", "Threat detection", "Audit logging", "Compliance reporting"]
    }
  ];

  const techStack = [
    { category: "API Frameworks", tech: ["Node.js/Express", "Python/FastAPI", "Go/Gin", "Java/Spring Boot"] },
    { category: "API Gateways", tech: ["Kong", "AWS API Gateway", "Azure API Management", "Apigee"] },
    { category: "Message Queues", tech: ["RabbitMQ", "Apache Kafka", "AWS SQS", "Redis Pub/Sub"] },
    { category: "Monitoring", tech: ["Datadog", "New Relic", "Prometheus", "Grafana"] }
  ];

  const caseStudy = {
    client: "E-Commerce Platform",
    challenge: "Integrate 15+ disparate systems (inventory, CRM, payment, shipping) with real-time data sync and 99.9% uptime.",
    solution: "Built microservices architecture with API gateway, event-driven messaging, and centralized monitoring.",
    results: [
      { metric: "Systems Integrated", value: "15+" },
      { metric: "API Uptime", value: "99.95%" },
      { metric: "Response Time", value: "<100ms" },
      { metric: "Daily API Calls", value: "10M+" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="text-sm mb-4">
              <Link href="/services/custom-software" className="hover:underline opacity-80">Custom Software Solutions</Link>
              <span className="mx-2">/</span>
              <span>API & Microservices Development</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              API & Microservices Development
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Build scalable, resilient APIs and microservices architecture. Connect systems, enable integrations, and future-proof your technology stack.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
                <Link href="/contact">
                  Discuss Your API Needs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                View Integration Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">API & Microservices Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From RESTful APIs to event-driven microservices, we build the backbone of modern applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
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

      {/* Technology Stack */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">API Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Established tools for building robust, scalable APIs.
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Common Use Cases</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Layers, title: "System Integration", desc: "Connect legacy systems with modern apps" },
              { icon: Cloud, title: "Third-Party APIs", desc: "Integrate with Stripe, Salesforce, AWS" },
              { icon: Workflow, title: "Event-Driven Architecture", desc: "Real-time notifications and updates" },
              { icon: BarChart3, title: "Data Aggregation", desc: "Combine data from multiple sources" },
              { icon: Zap, title: "Mobile Backend", desc: "APIs powering iOS and Android apps" },
              { icon: Database, title: "Data Migration", desc: "Move data between platforms safely" },
              { icon: Lock, title: "Partner Integrations", desc: "Secure B2B API connections" },
              { icon: GitBranch, title: "Monolith Decomposition", desc: "Break down legacy monoliths" }
            ].map((useCase, index) => (
              <div key={index} className="text-center">
                <useCase.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Story</h2>
          </div>

          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-12">
              <div className="text-sm text-accent font-semibold mb-2">{caseStudy.client}</div>
              <h3 className="text-3xl font-bold mb-6">Microservices Architecture Handles 10M+ Daily API Calls</h3>
              
              <div className="space-y-6 mb-8">
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

      {/* Best Practices */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our API Development Best Practices</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Comprehensive Documentation", desc: "OpenAPI/Swagger specs, code examples, and interactive testing" },
              { title: "Versioning Strategy", desc: "Backward compatibility and graceful deprecation" },
              { title: "Security First", desc: "OAuth 2.0, API keys, rate limiting, and threat detection" },
              { title: "Performance Optimization", desc: "Caching, pagination, and query optimization" },
              { title: "Monitoring & Logging", desc: "Real-time alerts, error tracking, and performance metrics" },
              { title: "Testing & QA", desc: "Unit tests, integration tests, and load testing" }
            ].map((practice, index) => (
              <Card key={index} className="hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">{practice.title}</h3>
                  <p className="text-muted-foreground">{practice.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Investment Range</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pricing based on API complexity, integrations, and traffic volume.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { tier: "Simple API", price: "$20K - $50K", desc: "Basic CRUD API with authentication and documentation" },
              { tier: "Complex API", price: "$50K - $120K", desc: "Multiple endpoints, integrations, webhooks, and monitoring" },
              { tier: "Microservices", price: "$120K+", desc: "Full microservices architecture with event-driven design" }
            ].map((tier, index) => (
              <Card key={index} className="hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-bold text-accent mb-4">{tier.price}</div>
                  <p className="text-muted-foreground">{tier.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Scalable APIs?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's design an API strategy that connects your systems and enables growth.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
            <Link href="/contact">
              Schedule an API Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
