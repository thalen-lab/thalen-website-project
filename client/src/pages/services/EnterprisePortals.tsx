import { CheckCircle2, Globe, Users, Shield, Clock, Code2, Zap } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";

export default function EnterprisePortals() {
  const benefits = [
    { icon: Globe, title: "Section 508 Compliant", description: "Fully accessible portals meeting federal accessibility requirements for all users." },
    { icon: Users, title: "24/7 Self-Service", description: "Reduce call center volume and provide citizens with 24/7 access to services and information." },
    { icon: Shield, title: "Secure Authentication", description: "Multi-factor authentication, Login.gov integration, and role-based access control." },
    { icon: Clock, title: "Mobile-Responsive", description: "Optimized for all devices—desktop, tablet, and mobile—ensuring access anywhere, anytime." }
  ];

  const portalTypes = [
    { title: "Citizen Service Portals", description: "Benefits applications, permit requests, service requests, account management" },
    { title: "Case Management Portals", description: "Internal case tracking, document management, workflow automation, reporting" },
    { title: "Stakeholder Collaboration", description: "Partner portals, grant management, contractor coordination, document sharing" },
    { title: "Employee Self-Service", description: "HR portals, time tracking, leave requests, benefits enrollment, training" }
  ];

  const relatedServices = [
    { title: "Custom Application Development", description: "Build complex portal features and integrations beyond standard capabilities.", href: "/services/custom-application-development", icon: Code2 },
    { title: "Low-Code Development", description: "Rapidly deploy portal features using visual development platforms.", href: "/services/low-code-development", icon: Zap },
    { title: "System Integration", description: "Connect portals with backend systems, databases, and external services.", href: "/services/system-integration", icon: Shield }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6TTI1IDEzNGg3djFoLTd6TTE2IDEzNGg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container relative z-10">
          <Breadcrumb items={[{ label: "Application Development & Integration", href: "/services/application-development" }, { label: "Enterprise Portal Development" }]} />
          <div className="max-w-4xl mt-8">
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">Section 508 Compliant • Mobile-Responsive</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Enterprise Portal Development</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">Citizen-facing portals and internal case management systems with 24/7 self-service capabilities. Build secure, accessible portals that improve constituent experience and reduce operational costs.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white"><Link href="/contact">Start Your Portal</Link></Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10"><Link href="/package-builder">Build Service Package</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Build Enterprise Portals?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Portals improve citizen experience, reduce operational costs, and provide 24/7 access to services.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0"><Icon className="w-7 h-7 text-accent" /></div>
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
            <h2 className="text-4xl font-bold mb-4">Portal Types We Build</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">From citizen services to internal case management, we build portals tailored to your mission.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {portalTypes.map((type, index) => (
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
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Enterprise Portal?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Schedule a consultation to explore how portals can improve your citizen and employee experience.</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white"><Link href="/contact">Schedule Free Consultation</Link></Button>
        </div>
      </section>

      <RelatedServices title="Enhance Your Portal" services={relatedServices} />
      <Footer />
    </div>
  );
}
