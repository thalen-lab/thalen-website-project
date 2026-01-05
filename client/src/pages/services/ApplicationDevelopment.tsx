import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AssessmentForm from "@/components/AssessmentForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from '@/components/Breadcrumb';

export default function ApplicationDevelopment() {
  const services = [
    {
      title: "Custom Application Development",
      description: "Build custom applications tailored to your mission requirements using modern frameworks—or integrate FedRAMP-authorized platforms when commercial capabilities align with your needs and vendor-neutral architecture prevents lock-in.",
      link: "/services/custom-application-development",
      benefits: [
        "FedRAMP-authorized development",
        "TS/SCI cleared development teams",
        "NIST 800-53 compliance",
        "ATO support included"
      ]
    },
    {
      title: "Low-Code/Rapid Application Development",
      description: "Rapidly prototype and deploy applications with custom low-code solutions—or implement FedRAMP low-code platforms (Appian Gov, OutSystems Gov) when compliance requires certified tools and governance at scale.",
      link: "/services/low-code-development",
      benefits: [
        "10x faster development",
        "Agile and flexible",
        "Cost-effective delivery",
        "Easy maintenance and updates"
      ]
    },
    {
      title: "Legacy System Modernization",
      description: "Modernize your legacy COBOL and mainframe systems with API wrappers, microservices, and incremental refactoring—preserving mission continuity while reducing technical debt without forced platform migrations.",
      link: "/services/legacy-modernization",
      benefits: [
        "Zero-downtime migration",
        "Cloud-native architecture",
        "Reduced technical debt",
        "Improved performance"
      ]
    },
    {
      title: "Enterprise Portal Development",
      description: "Citizen-facing portals and internal case management systems with 24/7 self-service capabilities.",
      link: "/services/enterprise-portals",
      benefits: [
        "Section 508 compliant",
        "Mobile-responsive design",
        "Secure authentication",
        "24/7 availability"
      ]
    },
    {
      title: "System Integration & APIs",
      description: "Integrate your existing systems with custom APIs and middleware—or connect FedRAMP platforms (Salesforce Gov, ServiceNow Gov, Workday) when enterprise orchestration and vendor ecosystems align with mission needs.",
      link: "/services/system-integration",
      benefits: [
        "Seamless data flow",
        "API management",
        "Real-time synchronization",
        "Microservices architecture"
      ]
    },
    {
      title: "Application Security & Compliance",
      description: "Secure SDLC practices with continuous security testing and compliance validation for federal requirements.",
      link: "/services/application-security",
      benefits: [
        "Secure SDLC implementation",
        "Continuous security testing",
        "FedRAMP compliance validation",
        "Vulnerability remediation"
      ]
    }
  ];

  const deliveryProcess = [
    {
      number: "01",
      title: "Discover",
      description: "Work with our team to define your mission objectives, technical requirements, and compliance needs."
    },
    {
      number: "02",
      title: "Design",
      description: "We provide a custom project timeline, development process, architecture design, and initial prototype."
    },
    {
      number: "03",
      title: "Develop",
      description: "Our TS/SCI cleared teams implement your solution with continuous QA, security testing, and project management."
    },
    {
      number: "04",
      title: "Deploy",
      description: "We deploy your application with ATO support, ensuring seamless integration and compliance documentation."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />
      <main>
        {/* Hero Section */}
        <motion.section 
          className="relative py-24 md:py-32 text-white overflow-hidden" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/application-development-hero.jpg')" }}
          ></div>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <motion.div 
                className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Core Service
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Application Development & Integration
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/90 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Thalen Technologies delivers application solutions through a dual approach: first, we integrate and modernize your existing systems with custom APIs and workflows—then connect FedRAMP platforms (Salesforce Gov, ServiceNow Gov, Workday) when vendor-neutral architecture ensures no lock-in. Our TS/SCI cleared teams ensure compliance and mission continuity.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 active:scale-95 transition-all font-semibold">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)] active:scale-95 transition-all font-semibold">
                  <Link href="/compare-services">Compare Services</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Comprehensive Application Services</p>
              <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">End-to-End Application Expertise</h2>
              <p className="text-xl text-slate-600">
                From custom development to legacy modernization, we provide end-to-end application services tailored for government agencies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 flex flex-col">
                    <CardContent className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{service.title}</h3>
                      <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
                      
                      <ul className="space-y-3 mb-8">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto">
                        <Button asChild variant="outline" className="w-full border-slate-300 hover:bg-[oklch(0.22_0.06_250)] hover:text-white transition-all active:scale-95">
                          <Link href={service.link}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Process */}
        <section className="py-20 bg-[oklch(0.97_0.01_250)]">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Delivery Process</p>
              <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">A Proven Methodology for Success</h2>
              <p className="text-xl text-slate-600">
                A proven methodology that ensures successful delivery of mission-critical applications with full compliance and security.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliveryProcess.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg p-8 relative border-2 border-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl font-bold text-[oklch(0.9_0.02_250)] mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Modernize Your Applications?</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Let's discuss how Thalen Technologies can help you build, integrate, and secure your mission-critical systems. Schedule a free consultation with our experts today.
            </p>
            <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 active:scale-95 transition-all font-semibold">
              <Link href="/contact">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
