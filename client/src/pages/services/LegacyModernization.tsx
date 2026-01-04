import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import Navigation from '@/components/Navigation';

export default function LegacyModernization() {
  const benefits = [
    {
      title: "Zero-Downtime Migration",
      description: "Phased migration strategies ensure continuous mission operations. We modernize incrementally, minimizing risk and maintaining service availability."
    },
    {
      title: "Cloud-Native Architecture",
      description: "Transform monolithic applications into microservices deployed on FedRAMP-authorized cloud platforms for improved scalability and resilience."
    },
    {
      title: "Reduced Technical Debt",
      description: "Eliminate costly maintenance of aging COBOL, mainframe, and legacy systems. Reduce operational costs by 40-60% while improving performance."
    },
    {
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
    },
    {
      title: "Custom Application Development",
      description: "Rebuild legacy systems as modern, mission-critical applications.",
      href: "/services/custom-application-development",
    },
    {
      title: "System Integration",
      description: "Connect modernized applications with remaining legacy systems during transition.",
      href: "/services/system-integration",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative text-white py-24">
        <div className="absolute inset-0 bg-[url('/img/pattern-dark.svg')] bg-repeat"></div>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        
        <div className="container relative z-10">
          <Breadcrumb 
            items={[
              { label: "Application Development & Integration", href: "/services/application-development" },
              { label: "Legacy System Modernization" }
            ]}
          />
          
          <div className="max-w-4xl mt-8">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Zero-Downtime Migration
            </p>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Legacy System Modernization
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform aging COBOL, mainframe, and legacy applications into modern, cloud-native systems. Reduce technical debt by 60%, improve performance, and maintain mission continuity throughout the transition.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                <Link href="/contact">Start Modernization <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/package-builder">Build Service Package</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Key Benefits</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Why Modernize Legacy Systems?</h2>
            <p className="text-lg text-slate-600">
              Legacy systems create operational risk, limit innovation, and drain budgets. Modernization enables agility and reduces costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[oklch(0.20_0.05_250)]">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernization Approaches */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Approach</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Modernization Strategies</h2>
            <p className="text-lg text-slate-600">
              We tailor our approach based on your timeline, budget, and requirements—from quick cloud migration to complete rebuilds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modernizationApproaches.map((approach, index) => (
              <motion.div 
                key={index} 
                className="bg-white border-2 border-slate-200 rounded-lg p-8 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{approach.title}</h3>
                <p className="text-slate-600 mb-4">{approach.description}</p>
                <div className="space-y-2 border-t border-slate-200 pt-4 mt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Best For:</span>
                    <span className="font-semibold text-right text-[oklch(0.20_0.05_250)]">{approach.bestFor}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Timeline:</span>
                    <span className="font-semibold text-[oklch(0.20_0.05_250)]">{approach.timeline}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Effort Level:</span>
                    <span className="font-semibold text-[oklch(0.20_0.05_250)]">{approach.effort}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Systems We Modernize */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Core Expertise</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Legacy Systems We Modernize</h2>
            <p className="text-lg text-slate-600">
              From COBOL mainframes to client-server applications, we have deep experience modernizing every type of legacy system.
            </p>
          </div>

          <div className="space-y-8">
            {legacySystems.map((system, index) => (
              <motion.div 
                key={index} 
                className="bg-[oklch(0.97_0.01_250)] rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{system.name}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-[oklch(0.20_0.05_250)]">Common Challenges:</h4>
                    <ul className="space-y-2">
                      {system.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-[oklch(0.20_0.05_250)]">NexDyne Technology Solution:</h4>
                    <p className="text-slate-600">{system.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Legacy Systems?</h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a free assessment to explore modernization strategies tailored to your systems, timeline, and budget.
          </p>
          <Button size="lg" asChild className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
            <Link href="/contact">Schedule Free Assessment <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
