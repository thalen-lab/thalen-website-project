import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import Navigation from '@/components/Navigation';

export default function LowCodeDevelopment() {
  const benefits = [
    {
      title: "10x Faster Development",
      description: "Visual development platforms enable rapid application delivery. Deploy working applications in weeks instead of months or years."
    },
    {
      title: "Cost-Effective Delivery",
      description: "Reduce development costs by 40-60% compared to traditional coding. Lower total cost of ownership with easier maintenance and updates."
    },
    {
      title: "Easy Maintenance & Updates",
      description: "Visual interfaces make updates simple and fast. Non-developers can make configuration changes, reducing dependency on IT teams."
    },
    {
      title: "Rapid Innovation",
      description: "Test new ideas quickly without massive investment. Iterate based on user feedback and evolve applications as needs change."
    }
  ];

  const useCases = [
    {
      title: "Form-Based Applications",
      description: "Permit applications, benefit requests, compliance forms, data collection tools",
    },
    {
      title: "Approval Workflows",
      description: "Multi-step approval processes, routing logic, notifications, audit trails",
    },
    {
      title: "Dashboards & Reporting",
      description: "Real-time dashboards, KPI tracking, custom reports, data visualization",
    },
    {
      title: "Case Management",
      description: "Simple case tracking, task assignment, status updates, document attachment",
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
    },
    {
      title: "System Integration",
      description: "Connect your low-code applications with legacy systems and external services.",
      href: "/services/system-integration",
    },
    {
      title: "Enterprise Portals",
      description: "Build citizen-facing portals and self-service platforms with low-code speed.",
      href: "/services/enterprise-portals",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-cover bg-center text-white py-24">
          <div className="absolute inset-0 bg-[url('/img/pattern-hero.svg')] bg-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
          
          <div className="container relative z-10">
            <Breadcrumb 
              items={[
                { label: "Application Development & Integration", href: "/services/application-development" },
                { label: "Low-Code Development" }
              ]}
            />
            
            <div className="max-w-4xl mt-8">
              <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
                Rapid Deployment • Agile & Flexible
              </p>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Low-Code/Rapid Application Development
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Accelerate digital transformation with visual development platforms. Deploy FedRAMP-compliant applications in weeks, not years. Perfect for forms, workflows, dashboards, and simple case management systems.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  <Link href="/contact">Start Your Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  <Link href="/compare-services">Compare Approaches</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Core Advantages</p>
              <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Why Choose Low-Code Development?</h2>
              <p className="text-xl text-slate-600">
                Low-code platforms dramatically reduce development time and costs while maintaining security and compliance standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 bg-[oklch(0.97_0.01_250)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="w-7 h-7 text-[oklch(0.75_0.15_55)]">→</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[oklch(0.20_0.05_250)]">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-[oklch(0.97_0.01_250)]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Common Applications</p>
              <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Ideal Use Cases for Low-Code</h2>
              <p className="text-xl text-slate-600">
                Low-code excels at form-based applications, workflows, dashboards, and simple case management—perfect for many federal use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold mb-2 text-lg text-[oklch(0.20_0.05_250)]">{useCase.title}</h3>
                  <p className="text-sm text-slate-600">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Low-Code Platforms */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Technology Partners</p>
              <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Enterprise Low-Code Platforms</h2>
              <p className="text-xl text-slate-600">
                We work with leading low-code platforms to deliver FedRAMP-compliant applications tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white border-2 border-slate-200 rounded-lg p-8 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{platform.name}</h3>
                  <p className="text-slate-600 mb-6">{platform.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {platform.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-sm text-slate-600">{capability}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Choose Low-Code vs Custom */}
        <section className="py-20 bg-[oklch(0.97_0.01_250)]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Decision Guide</p>
              <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Low-Code vs. Custom Development</h2>
              <p className="text-xl text-slate-600">
                Understanding when to use low-code versus custom development ensures you choose the right approach for your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white border-2 border-slate-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Choose Low-Code When:</h3>
                <ul className="space-y-3">
                  {[ "Speed to market is critical (weeks vs. months)", "Requirements are straightforward (forms, workflows, dashboards)", "Budget is limited or cost savings are important", "Non-technical users need to make updates", "Platform integration is a priority (Microsoft 365, Salesforce)" ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Choose Custom Dev When:</h3>
                <ul className="space-y-3">
                  {[ "Unique, complex business logic is required", "High performance and scalability are critical", "Specific UI/UX or branding is non-negotiable", "Full control over the technology stack is needed", "Complex third-party integrations are involved" ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <RelatedServices services={relatedServices} />

        {/* CTA Section */}
        <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Accelerate Your Mission?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how low-code development can help you achieve your goals faster and more efficiently. Contact us for a free consultation and see if rapid application development is the right fit for your agency.
            </p>
            <Button size="lg" asChild className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              <Link href="/contact">Get a Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
