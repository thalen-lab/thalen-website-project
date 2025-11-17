import { CheckCircle2, GitBranch, Database, Zap, Shield, Code2, Cloud } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";

export default function SystemIntegration() {
  const benefits = [
    { icon: Zap, title: "Seamless Data Flow", description: "Enable real-time data synchronization across systems without manual intervention." },
    { icon: Shield, title: "Secure Integration", description: "API gateways, encryption, and authentication ensure secure system-to-system communication." },
    { icon: Database, title: "Legacy Connectivity", description: "Connect modern applications with mainframe, COBOL, and legacy databases using adapters and APIs." },
    { icon: GitBranch, title: "Microservices Architecture", description: "Build scalable, maintainable integrations using modern microservices patterns." }
  ];

  const integrationTypes = [
    { title: "API Development & Management", description: "RESTful APIs, GraphQL, API gateways, rate limiting, authentication, documentation" },
    { title: "Enterprise Service Bus (ESB)", description: "Message queuing, event-driven architecture, publish/subscribe patterns, transformation" },
    { title: "Data Integration", description: "ETL pipelines, real-time sync, batch processing, data validation, error handling" },
    { title: "Cloud Integration", description: "Connect on-premise systems with cloud services, hybrid architecture, secure tunnels" }
  ];

  const relatedServices = [
    { title: "Custom Application Development", description: "Build custom integrations and middleware for complex requirements.", link: "/services/custom-application-development", icon: Code2 },
    { title: "Legacy Modernization", description: "Modernize legacy systems to enable easier integration with modern applications.", link: "/services/legacy-modernization", icon: Database },
    { title: "Cloud Infrastructure", description: "Deploy integration platforms on FedRAMP-authorized cloud infrastructure.", link: "/services/cloud", icon: Cloud }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6TTI1IDEzNGg3djFoLTd6TTE2IDEzNGg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container relative z-10">
          <Breadcrumb items={[{ label: "Application Development & Integration", href: "/services/application-development" }, { label: "System Integration & APIs" }]} />
          <div className="max-w-4xl mt-8">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">Seamless Integration • Real-Time Sync</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">System Integration & APIs</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">Connect legacy and modern systems with secure, scalable APIs and microservices architecture. Enable data flow across disparate systems while maintaining security and compliance.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white"><Link href="/contact">Start Integration</Link></Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10"><Link href="/package-builder">Build Service Package</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why System Integration Matters</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Break down data silos and enable seamless information flow across your enterprise.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><Icon className="w-7 h-7 text-accent" /></div>
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

      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Integration Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">From APIs to enterprise service buses, we provide comprehensive integration solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {integrationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect Your Systems?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Schedule a consultation to explore integration strategies for your enterprise architecture.</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white"><Link href="/contact">Schedule Free Consultation</Link></Button>
        </div>
      </section>

      <RelatedServices title="Complete Your Integration" services={relatedServices} />
      <Footer />
    </div>
  );
}
