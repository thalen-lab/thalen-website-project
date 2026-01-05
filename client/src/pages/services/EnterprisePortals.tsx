import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import Navigation from '@/components/Navigation';

export default function EnterprisePortals() {
  const benefits = [
    { title: "Section 508 Compliant", description: "Fully accessible portals meeting federal accessibility requirements for all users." },
    { title: "24/7 Self-Service", description: "Reduce call center volume and provide citizens with 24/7 access to services and information." },
    { title: "Secure Authentication", description: "Multi-factor authentication, Login.gov integration, and role-based access control." },
    { title: "Mobile-Responsive", description: "Optimized for all devices—desktop, tablet, and mobile—ensuring access anywhere, anytime." }
  ];

  const portalTypes = [
    { title: "Citizen Service Portals", description: "Benefits applications, permit requests, service requests, account management" },
    { title: "Case Management Portals", description: "Internal case tracking, document management, workflow automation, reporting" },
    { title: "Stakeholder Collaboration", description: "Partner portals, grant management, contractor coordination, document sharing" },
    { title: "Employee Self-Service", description: "HR portals, time tracking, leave requests, benefits enrollment, training" }
  ];

  const relatedServices = [
    { title: "Custom Application Development", description: "Build complex portal features and integrations beyond standard capabilities.", href: "/services/custom-application-development" },
    { title: "Low-Code Development", description: "Rapidly deploy portal features using visual development platforms.", href: "/services/low-code-development" },
    { title: "System Integration", description: "Connect portals with backend systems, databases, and external services.", href: "/services/system-integration" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="relative bg-[#0A2540] text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6TTI1IDEzNGg3djFoLTd6TTE2IDEzNGg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="container relative z-10">
          <Breadcrumb items={[{ label: "Application Development & Integration", href: "/services/application-development" }, { label: "Enterprise Portal Development" }]} />
          <div className="max-w-4xl mt-8">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Section 508 Compliant • Mobile-Responsive</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">Enterprise Portal Development</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">Citizen-facing portals and internal case management systems with 24/7 self-service capabilities. Build secure, accessible portals that improve constituent experience and reduce operational costs.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90"><Link href="/contact">Start Your Portal</Link></Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]"><Link href="/package-builder">Build Service Package</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Why Build Enterprise Portals?</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Improve Service Delivery and Reduce Costs</h2>
            <p className="text-xl text-slate-600">Portals improve citizen experience, reduce operational costs, and provide 24/7 access to services.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[oklch(0.20_0.05_250)]">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Portal Types We Build</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Solutions for Every Mission</h2>
            <p className="text-xl text-slate-600">From citizen services to internal case management, we build portals tailored to your mission.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {portalTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{type.title}</h3>
                <p className="text-slate-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Enterprise Portal?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">Schedule a consultation to explore how portals can improve your citizen and employee experience.</p>
          <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90"><Link href="/contact">Schedule Free Consultation</Link></Button>
        </div>
      </section>

      <RelatedServices title="Enhance Your Portal" services={relatedServices} />
      <Footer />
    </div>
  );
}
