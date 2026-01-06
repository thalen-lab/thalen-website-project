import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function AppDevelopment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 text-white bg-[#0A2540]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6TTI1IDEzNGg3djFoLTd6TTE2IDEzNGg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-6">
              FedRAMP Authorized • Secure SDLC
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Application Development & Integration for Mission-Critical Systems
            </h1>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Your agency needs applications that meet strict security requirements while delivering modern user experiences. Thalen Technologies builds FedRAMP-authorized, CMMC-compliant applications using proven methodologies that balance innovation with the stability your mission demands.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Request Development Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  View Development Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Federal Agencies Choose Thalen Technologies */}
      <section className="py-20 bg-white text-[oklch(0.20_0.05_250)]">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Why Choose Us</p>
            <h2 className="text-4xl font-bold mb-4">Why Federal Agencies Choose Thalen Technologies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unlike commercial development shops, we understand the unique challenges of building applications for government—from ATO requirements to legacy system integration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Security-First Development",
                description: "Every application is built with NIST 800-53 controls, FedRAMP requirements, and CMMC compliance from day one. We don't retrofit security—we architect it into every layer of your application."
              },
              {
                title: "Accelerated Delivery",
                description: "Our proven Agile methodology delivers working software in 2-week sprints. See progress immediately and course-correct early, avoiding the delays and cost overruns common in government projects."
              },
              {
                title: "Modern Architecture",
                description: "Microservices, API-first design, containerization, and cloud-native patterns ensure your applications scale efficiently and integrate seamlessly with existing systems."
              },
              {
                title: "Knowledge Transfer Included",
                description: "We don't just deliver code—we train your team on architecture, deployment, and maintenance. You own the application and the expertise to evolve it long after we're gone."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Government Application Development Different */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)] text-[oklch(0.20_0.05_250)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
                <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Approach</p>
                <h2 className="text-4xl font-bold mb-6">What Makes Government Application Development Different?</h2>
                <p className="text-lg text-slate-600">
                    Building applications for government agencies isn't just about writing code—it's about navigating complex compliance frameworks, integrating with legacy systems, and delivering solutions that meet mission-critical security standards while providing modern user experiences.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-12">
              {[
                {
                  title: "Works with Legacy Systems",
                  description: "Integrate seamlessly with mainframes, COBOL systems, and decades-old databases without expensive modernization projects"
                },
                {
                  title: "Built-In Compliance",
                  description: "NIST 800-53 controls, FedRAMP monitoring, FISMA reporting, and ATO documentation included from the start"
                },
                {
                  title: "Rapid Deployment",
                  description: "2-week sprints from requirements to working software, with continuous stakeholder feedback and course correction"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Federal Application Development Use Cases */}
      <section className="py-20 bg-white text-[oklch(0.20_0.05_250)]">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Use Cases</p>
            <h2 className="text-4xl font-bold mb-4">Federal Application Development Use Cases</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From citizen-facing portals to internal workflow systems, we build applications that transform how agencies operate.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Citizen Service Portals",
                description: "Public-facing applications for benefits enrollment, FOIA requests, permit applications, and self-service citizen interactions. Section 508 compliant with multi-language support.",
                metrics: "90% reduction in call center volume"
              },
              {
                title: "Case Management Systems",
                description: "Workflow automation for investigations, adjudications, grant reviews, and compliance tracking. Role-based access control with full audit trails for every action.",
                metrics: "70% faster case resolution"
              },
              {
                title: "Data Analytics Dashboards",
                description: "Real-time operational dashboards, executive reporting, and predictive analytics platforms. Connect to multiple data sources with automated ETL pipelines.",
                metrics: "95% reduction in manual reporting"
              },
              {
                title: "Mobile Field Applications",
                description: "Offline-capable mobile apps for inspectors, law enforcement, and field personnel. Secure data sync, geolocation tracking, and digital signature capture.",
                metrics: "80% improvement in field productivity"
              },
              {
                title: "Enterprise Integration Hubs",
                description: "API gateways and integration platforms connecting legacy systems, cloud services, and third-party applications. Real-time data exchange with guaranteed delivery.",
                metrics: "99.9% uptime SLA"
              },
              {
                title: "Secure Collaboration Platforms",
                description: "Internal communication, document management, and project collaboration tools. End-to-end encryption with granular permission controls.",
                metrics: "60% reduction in email volume"
              }
            ].map((useCase, index) => (
                <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-slate-600 mb-4">{useCase.description}</p>
                  <div className="bg-slate-100 rounded-lg p-4 mt-4">
                    <p className="text-sm font-semibold text-[oklch(0.65_0.18_55)]">Average Impact:</p>
                    <p className="text-lg font-bold text-[oklch(0.20_0.05_250)]">{useCase.metrics}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Build Your Next Mission-Critical Application?</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                Let's discuss your requirements and see how Thalen Technologies can help you deliver secure, compliant, and modern applications that meet your agency's unique needs.
            </p>
            <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                    Request a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
