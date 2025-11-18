import { CheckCircle2, Zap, Clock, DollarSign, Wrench, Code2, Shield, Rocket } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";

export default function LowCodeDevelopment() {
  const benefits = [
    {
      icon: Zap,
      title: "10x Faster Development",
      description: "Visual development platforms enable rapid application delivery. Deploy working applications in weeks instead of months or years."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Delivery",
      description: "Reduce development costs by 40-60% compared to traditional coding. Lower total cost of ownership with easier maintenance and updates."
    },
    {
      icon: Wrench,
      title: "Easy Maintenance & Updates",
      description: "Visual interfaces make updates simple and fast. Non-developers can make configuration changes, reducing dependency on IT teams."
    },
    {
      icon: Rocket,
      title: "Rapid Innovation",
      description: "Test new ideas quickly without massive investment. Iterate based on user feedback and evolve applications as needs change."
    }
  ];

  const useCases = [
    {
      title: "Form-Based Applications",
      description: "Permit applications, benefit requests, compliance forms, data collection tools",
      icon: Code2
    },
    {
      title: "Approval Workflows",
      description: "Multi-step approval processes, routing logic, notifications, audit trails",
      icon: CheckCircle2
    },
    {
      title: "Dashboards & Reporting",
      description: "Real-time dashboards, KPI tracking, custom reports, data visualization",
      icon: Clock
    },
    {
      title: "Case Management",
      description: "Simple case tracking, task assignment, status updates, document attachment",
      icon: Shield
    }
  ];

  const platforms = [
    {
      name: "Microsoft Power Platform",
      description: "Power Apps, Power Automate, Power BI for rapid development and integration with Microsoft 365.",
      capabilities: ["Forms and workflows", "SharePoint integration", "Office 365 connectivity", "Azure cloud deployment"]
    },
    {
      name: "Salesforce Platform",
      description: "Lightning Platform for building custom apps on top of Salesforce CRM infrastructure.",
      capabilities: ["CRM integration", "Mobile-first design", "AppExchange marketplace", "Declarative development"]
    },
    {
      name: "ServiceNow",
      description: "Now Platform for IT service management and enterprise workflow automation.",
      capabilities: ["ITSM workflows", "Service catalog", "Change management", "Integration hub"]
    },
    {
      name: "OutSystems",
      description: "Enterprise-grade low-code for complex, mission-critical applications with full lifecycle support.",
      capabilities: ["Full-stack development", "AI-assisted coding", "Mobile apps", "Legacy integration"]
    }
  ];

  const relatedServices = [
    {
      title: "Custom Application Development",
      description: "For complex requirements that need full custom coding and advanced architecture.",
      href: "/services/custom-application-development",
      icon: Code2
    },
    {
      title: "System Integration",
      description: "Connect your low-code applications with legacy systems and external services.",
      href: "/services/system-integration",
      icon: Zap
    },
    {
      title: "Enterprise Portals",
      description: "Build citizen-facing portals and self-service platforms with low-code speed.",
      href: "/services/enterprise-portals",
      icon: Shield
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
              { label: "Low-Code Development" }
            ]}
          />
          
          <div className="max-w-4xl mt-8">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Rapid Deployment • Agile & Flexible
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Low-Code/Rapid Application Development
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Accelerate digital transformation with visual development platforms. Deploy FedRAMP-compliant applications in weeks, not years. Perfect for forms, workflows, dashboards, and simple case management systems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/compare-services">Compare Approaches</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Low-Code Development?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Low-code platforms dramatically reduce development time and costs while maintaining security and compliance standards.
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

      {/* Use Cases */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ideal Use Cases for Low-Code</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Low-code excels at form-based applications, workflows, dashboards, and simple case management—perfect for many federal use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Low-Code Platforms */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise Low-Code Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with leading low-code platforms to deliver FedRAMP-compliant applications tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="border-2 border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                <p className="text-muted-foreground mb-6">{platform.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {platform.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Choose Low-Code vs Custom */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Low-Code vs. Custom Development</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding when to use low-code versus custom development ensures you choose the right approach for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-600">Choose Low-Code When:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Speed to market is critical (weeks vs. months)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Requirements are straightforward (forms, workflows, dashboards)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Budget is limited or cost savings are important</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Non-technical users need to make updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Platform integration is a priority (Microsoft 365, Salesforce)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Choose Custom Development When:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Complex business logic or algorithms are required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>High performance and scalability are critical</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Unique user experience or advanced UI is needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Legacy system integration requires custom connectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Platform limitations would compromise requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Digital Transformation?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a consultation to explore how low-code development can help you deploy applications faster and more cost-effectively.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices
        title="Complement Your Low-Code Applications"
        services={relatedServices}
      />

      <Footer />
    </div>
  );
}
