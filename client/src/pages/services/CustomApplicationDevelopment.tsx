import { Shield, Lock, CheckCircle2, Rocket, Server, Database, Cloud, Users, Zap, Code2, ArrowRight, GitBranch } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import Navigation from '@/components/Navigation';

export default function CustomApplicationDevelopment() {
  const benefits = [
    {
      icon: Shield,
      title: "FedRAMP-Authorized Development",
      description: "Our development processes and infrastructure are FedRAMP authorized, ensuring your applications meet federal security requirements from day one."
    },
    {
      icon: Lock,
      title: "TS/SCI Cleared Teams",
      description: "Work with development teams holding Top Secret/SCI clearances, enabling us to handle your most sensitive mission requirements."
    },
    {
      icon: CheckCircle2,
      title: "Full ATO Support",
      description: "We provide complete Authority to Operate (ATO) support, including security documentation, compliance validation, and ongoing monitoring."
    },
    {
      icon: Rocket,
      title: "Mission-Critical Reliability",
      description: "Built for 99.99% uptime with disaster recovery, redundancy, and 24/7 monitoring to ensure continuous mission support."
    }
  ];

  const capabilities = [
    {
      icon: Server,
      title: "Enterprise Applications",
      items: [
        "Case management systems",
        "Workflow automation platforms",
        "Document management solutions",
        "Grant and contract management"
      ]
    },
    {
      icon: Database,
      title: "Data-Intensive Applications",
      items: [
        "Real-time analytics dashboards",
        "Data collection and validation",
        "Reporting and compliance tools",
        "Geospatial applications"
      ]
    },
    {
      icon: GitBranch,
      title: "Integration Platforms",
      items: [
        "API gateways and management",
        "System-to-system integration",
        "Legacy system connectors",
        "Microservices architecture"
      ]
    },
    {
      icon: Code2,
      title: "Specialized Solutions",
      items: [
        "Investigative case tracking",
        "Benefits administration",
        "Regulatory compliance tools",
        "Emergency response systems"
      ]
    }
  ];

  const developmentProcess = [
    {
      phase: "Requirements & Architecture",
      description: "We work closely with your team to understand mission objectives, user needs, and technical requirements. Our architects design scalable, secure solutions that align with federal standards.",
      deliverables: ["Requirements documentation", "System architecture design", "Security control mapping", "Technology stack selection"]
    },
    {
      phase: "Agile Development",
      description: "Using 2-week sprints, our TS/SCI cleared teams build your application iteratively. You see working software early and often, with continuous feedback loops ensuring alignment.",
      deliverables: ["Working software increments", "Sprint demos", "Automated test suites", "Security scan results"]
    },
    {
      phase: "Security & Compliance",
      description: "Security is built in from the start. We conduct continuous security testing, vulnerability scanning, and compliance validation throughout development.",
      deliverables: ["Security test results", "Compliance documentation", "Penetration test reports", "ATO package preparation"]
    },
    {
      phase: "Deployment & Support",
      description: "We deploy to FedRAMP-authorized cloud environments with zero-downtime strategies. Post-launch, we provide 24/7 support and continuous improvement.",
      deliverables: ["Production deployment", "Operations runbooks", "Training materials", "24/7 support coverage"]
    }
  ];

  const relatedServices = [
    {
      title: "Low-Code Development",
      description: "Accelerate delivery with visual development platforms for rapid application deployment.",
      href: "/services/low-code-development",
      icon: Zap
    },
    {
      title: "Application Security",
      description: "Secure SDLC practices with continuous security testing and compliance validation.",
      href: "/services/application-security",
      icon: Shield
    },
    {
      title: "System Integration",
      description: "Connect your custom applications with legacy systems and modern cloud services.",
      href: "/services/system-integration",
      icon: GitBranch
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6TTI1IDEzNGg3djFoLTd6TTE2IDEzNGg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="container relative z-10">
          <Breadcrumb 
            items={[
              { label: "Application Development & Integration", href: "/services/application-development" },
              { label: "Custom Application Development" }
            ]}
          />
          
          <div className="max-w-4xl mt-8">
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              FedRAMP Authorized • TS/SCI Cleared Teams
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Custom Application Development
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Mission-critical applications built specifically for government agencies. Our TS/SCI cleared development teams deliver FedRAMP-authorized solutions that meet the unique challenges of government operations, from case management to emergency response systems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/package-builder">Build Service Package</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Custom Development?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When off-the-shelf solutions can't meet your mission requirements, custom applications provide the flexibility, security, and performance you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Capabilities */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Application Types We Build</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From enterprise platforms to specialized mission systems, we develop applications that solve complex federal challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold mb-4">{capability.title}</h3>
                  <ul className="space-y-2">
                    {capability.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven, agile methodology that delivers secure, compliant applications on time and on budget.
            </p>
          </div>

          <div className="space-y-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="bg-secondary rounded-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{step.phase}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm border border-border">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Mission-Critical Application?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a complimentary consultation with our application development experts to discuss your requirements and explore how we can help achieve your mission objectives.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices
        title="Enhance Your Custom Application"
        services={relatedServices}
      />

      <Footer />
    </div>
  );
}
