import { CheckCircle2, Rocket, Cloud, Shield, TrendingUp, Code2, Database, Zap } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";

export default function LegacyModernization() {
  const benefits = [
    {
      icon: Rocket,
      title: "Zero-Downtime Migration",
      description: "Phased migration strategies ensure continuous mission operations. We modernize incrementally, minimizing risk and maintaining service availability."
    },
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Transform monolithic applications into microservices deployed on FedRAMP-authorized cloud platforms for improved scalability and resilience."
    },
    {
      icon: TrendingUp,
      title: "Reduced Technical Debt",
      description: "Eliminate costly maintenance of aging COBOL, mainframe, and legacy systems. Reduce operational costs by 40-60% while improving performance."
    },
    {
      icon: Shield,
      title: "Enhanced Security & Compliance",
      description: "Modern applications built with security-first principles, meeting current NIST 800-53 and FedRAMP requirements that legacy systems can't achieve."
    }
  ];

  const modernizationApproaches = [
    {
      title: "Replatform (Lift & Shift)",
      description: "Move applications to cloud infrastructure with minimal changes",
      bestFor: "Quick cloud migration, time-sensitive projects",
      timeline: "2-4 months",
      effort: "Low"
    },
    {
      title: "Refactor",
      description: "Restructure code to improve performance and maintainability",
      bestFor: "Applications with solid architecture needing optimization",
      timeline: "4-8 months",
      effort: "Medium"
    },
    {
      title: "Rearchitect",
      description: "Redesign using modern patterns (microservices, cloud-native)",
      bestFor: "Scalability requirements, modern user experience needs",
      timeline: "8-16 months",
      effort: "High"
    },
    {
      title: "Rebuild",
      description: "Completely rewrite using modern languages and frameworks",
      bestFor: "Outdated technology, significant new requirements",
      timeline: "12-24 months",
      effort: "High"
    }
  ];

  const legacySystems = [
    {
      name: "COBOL/Mainframe",
      challenges: ["Aging workforce", "High operational costs", "Limited scalability", "Difficult integration"],
      solution: "Migrate to Java/Python microservices on cloud infrastructure with API wrappers for gradual transition"
    },
    {
      name: "Client-Server Applications",
      challenges: ["Desktop dependencies", "Limited accessibility", "Difficult updates", "Poor mobile support"],
      solution: "Transform into web-based applications with responsive design and cloud deployment"
    },
    {
      name: "Legacy Databases",
      challenges: ["Proprietary formats", "Limited query capabilities", "Poor performance", "Expensive licenses"],
      solution: "Migrate to PostgreSQL or cloud-native databases with data transformation and validation"
    },
    {
      name: "Monolithic Applications",
      challenges: ["Difficult to update", "Scaling limitations", "Technology lock-in", "High risk changes"],
      solution: "Decompose into microservices with API gateways and containerized deployment"
    }
  ];

  const relatedServices = [
    {
      title: "Cloud Infrastructure",
      description: "Migrate modernized applications to FedRAMP-authorized cloud platforms.",
      href: "/services/cloud",
      icon: Cloud
    },
    {
      title: "Custom Application Development",
      description: "Rebuild legacy systems as modern, mission-critical applications.",
      href: "/services/custom-application-development",
      icon: Code2
    },
    {
      title: "System Integration",
      description: "Connect modernized applications with remaining legacy systems during transition.",
      href: "/services/system-integration",
      icon: Database
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6TTI1IDEzNGg3djFoLTd6TTE2IDEzNGg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="container relative z-10">
          <Breadcrumb 
            items={[
              { label: "Application Development & Integration", href: "/services/application-development" },
              { label: "Legacy System Modernization" }
            ]}
          />
          
          <div className="max-w-4xl mt-8">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Zero-Downtime Migration • Cloud-Native
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Legacy System Modernization
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Transform aging COBOL, mainframe, and legacy applications into modern, cloud-native systems. Reduce technical debt by 60%, improve performance, and maintain mission continuity throughout the transition.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">Start Modernization</Link>
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
            <h2 className="text-4xl font-bold mb-4">Why Modernize Legacy Systems?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Legacy systems create operational risk, limit innovation, and drain budgets. Modernization unlocks agility and reduces costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Modernization Approaches */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Modernization Approaches</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We tailor our approach based on your timeline, budget, and requirements—from quick cloud migration to complete rebuilds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modernizationApproaches.map((approach, index) => (
              <div key={index} className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-3">{approach.title}</h3>
                <p className="text-muted-foreground mb-4">{approach.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Best For:</span>
                    <span className="font-semibold">{approach.bestFor}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-semibold">{approach.timeline}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Effort Level:</span>
                    <span className="font-semibold">{approach.effort}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Systems We Modernize */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Legacy Systems We Modernize</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From COBOL mainframes to client-server applications, we have deep experience modernizing every type of legacy system.
            </p>
          </div>

          <div className="space-y-8">
            {legacySystems.map((system, index) => (
              <div key={index} className="bg-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">{system.name}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-3 text-red-600">Common Challenges:</h4>
                    <ul className="space-y-2">
                      {system.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-red-600">✗</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-green-600">Thalen Technologies Solution:</h4>
                    <p className="text-sm text-muted-foreground">{system.solution}</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Legacy Systems?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a free assessment to explore modernization strategies tailored to your systems, timeline, and budget.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link href="/contact">Schedule Free Assessment</Link>
          </Button>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices
        title="Complete Your Modernization Journey"
        services={relatedServices}
      />

      <Footer />
    </div>
  );
}
