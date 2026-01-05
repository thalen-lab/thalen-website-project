import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, Briefcase, Workflow, Users, Database, 
  CheckCircle2, Zap, Settings, BarChart3, Lock, Cloud
} from 'lucide-react';
import { Link } from 'wouter';

export default function BusinessApps() {
  const solutions = [
    {
      icon: Briefcase,
      title: "Custom CRM Systems",
      description: "Tailored customer relationship management with pipeline tracking, lead scoring, and sales automation.",
      examples: ["Sales pipeline management", "Customer data centralization", "Email campaign integration", "Reporting dashboards"]
    },
    {
      icon: Database,
      title: "Enterprise Resource Planning (ERP)",
      description: "Unified business management covering inventory, accounting, HR, and supply chain.",
      examples: ["Inventory management", "Financial reporting", "HR & payroll", "Supply chain tracking"]
    },
    {
      icon: Workflow,
      title: "Workflow Automation Tools",
      description: "Streamline repetitive tasks with custom automation, approvals, and notifications.",
      examples: ["Approval workflows", "Document management", "Task automation", "Email notifications"]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence Dashboards",
      description: "Real-time analytics and reporting for data-driven decision making.",
      examples: ["KPI dashboards", "Custom reports", "Data visualization", "Predictive analytics"]
    },
    {
      icon: Users,
      title: "Employee Portals",
      description: "Internal platforms for HR, onboarding, training, and collaboration.",
      examples: ["Employee self-service", "Time tracking", "Training modules", "Document repository"]
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Connect disparate systems with APIs, webhooks, and middleware solutions.",
      examples: ["Third-party API integration", "Legacy system connectors", "Data synchronization", "Webhook automation"]
    }
  ];

  const caseStudy = {
    industry: "Manufacturing Company",
    challenge: "Replace spreadsheet-based inventory management with custom ERP system tracking 50K+ SKUs across 10 warehouses.",
    solution: "Built cloud-based ERP with real-time inventory tracking, automated reordering, supplier management, and financial reporting.",
    results: [
      { metric: "Inventory Accuracy", value: "99.5%" },
      { metric: "Order Processing Time", value: "-60%" },
      { metric: "Annual Cost Savings", value: "$500K" },
      { metric: "User Adoption", value: "95%" }
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
              <span>Custom Business Applications</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Custom Business Applications
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Tailored internal tools, CRMs, ERPs, and workflow automation that streamline operations and eliminate manual processes. Built specifically for your business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
                <Link href="/contact">
                  Discuss Your Needs
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

      {/* Solutions */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Business Application Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Custom software that automates workflows and centralizes business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <solution.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade capabilities built into every custom application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lock, title: "Role-Based Access", desc: "Granular permissions and security controls" },
              { icon: Cloud, title: "Cloud-Native", desc: "Scalable, reliable cloud infrastructure" },
              { icon: Workflow, title: "Workflow Engine", desc: "Configurable approval and routing logic" },
              { icon: BarChart3, title: "Reporting & Analytics", desc: "Custom dashboards and data exports" },
              { icon: Zap, title: "API Integrations", desc: "Connect with existing business tools" },
              { icon: Database, title: "Data Management", desc: "Centralized, secure data storage" },
              { icon: Users, title: "Multi-User Support", desc: "Concurrent access for teams" },
              { icon: Settings, title: "Customizable", desc: "Adapt to changing business needs" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Story</h2>
          </div>

          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-12">
              <div className="text-sm text-accent font-semibold mb-2">{caseStudy.industry}</div>
              <h3 className="text-3xl font-bold mb-6">Custom ERP Saves $500K Annually</h3>
              
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

      {/* Development Approach */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Development Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborative process ensuring the solution fits your exact needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "Requirements Gathering",
                description: "Deep dive into current processes, pain points, and desired outcomes with stakeholder interviews.",
                duration: "1-2 weeks"
              },
              {
                step: "Design & Prototyping",
                description: "Wireframes, user flows, and clickable prototypes for validation before development.",
                duration: "2-3 weeks"
              },
              {
                step: "Iterative Development",
                description: "Agile sprints with regular demos and feedback loops to ensure alignment.",
                duration: "8-16 weeks"
              },
              {
                step: "Training & Rollout",
                description: "User training, documentation, phased rollout, and ongoing support.",
                duration: "2-4 weeks"
              }
            ].map((item, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                <div className="text-sm text-accent font-semibold">{item.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Investment Range</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pricing varies based on complexity, integrations, and user count.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: "Simple Tools",
                price: "$30K - $60K",
                examples: ["Basic CRM", "Task management", "Simple workflows", "Up to 50 users"]
              },
              {
                tier: "Mid-Complexity Apps",
                price: "$60K - $150K",
                examples: ["Advanced CRM/ERP", "Multiple integrations", "Custom reporting", "Up to 500 users"]
              },
              {
                tier: "Enterprise Systems",
                price: "$150K+",
                examples: ["Full ERP suite", "Complex workflows", "Advanced analytics", "Unlimited users"]
              }
            ].map((tier, index) => (
              <Card key={index} className="hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-bold text-accent mb-6">{tier.price}</div>
                  <ul className="space-y-3">
                    {tier.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{example}</span>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Streamline Your Operations?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your business processes and design a custom solution.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
            <Link href="/contact">
              Schedule a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
