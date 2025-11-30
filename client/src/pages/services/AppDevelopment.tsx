import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Code, Workflow, Zap, Layers, Shield, CheckCircle2, Clock, Users } from 'lucide-react';
import { Link } from 'wouter';

export default function AppDevelopment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6TTI1IDEzNGg3djFoLTd6TTE2IDEzNGg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              FedRAMP Authorized • Secure SDLC
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Application Development & Integration for Mission-Critical Systems
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Your agency needs applications that meet strict security requirements while delivering modern user experiences. Thalen Technologies builds FedRAMP-authorized, CMMC-compliant applications using proven methodologies that balance innovation with the stability your mission demands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Request Development Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Development Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Federal Agencies Choose Thalen Technologies */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Federal Agencies Choose Thalen Technologies for Application Development</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike commercial development shops, we understand the unique challenges of building applications for government—from ATO requirements to legacy system integration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Security-First Development",
                description: "Every application is built with NIST 800-53 controls, FedRAMP requirements, and CMMC compliance from day one. We don't retrofit security—we architect it into every layer of your application."
              },
              {
                icon: Clock,
                title: "Accelerated Delivery",
                description: "Our proven Agile methodology delivers working software in 2-week sprints. See progress immediately and course-correct early, avoiding the delays and cost overruns common in government projects."
              },
              {
                icon: Layers,
                title: "Modern Architecture",
                description: "Microservices, API-first design, containerization, and cloud-native patterns ensure your applications scale efficiently and integrate seamlessly with existing systems."
              },
              {
                icon: Users,
                title: "Knowledge Transfer Included",
                description: "We don't just deliver code—we train your team on architecture, deployment, and maintenance. You own the application and the expertise to evolve it long after we're gone."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Government Application Development Different */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">What Makes Government Application Development Different?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-center mb-12">
                Building applications for federal agencies isn't just about writing code—it's about navigating complex compliance frameworks, integrating with legacy systems, and delivering solutions that meet mission-critical security standards while providing modern user experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
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
                <Card key={index} className="hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <CheckCircle2 className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Federal Application Development Use Cases */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Federal Application Development Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="bg-accent/10 rounded-lg p-4 mt-4">
                    <p className="text-sm font-semibold text-accent">Average Impact:</p>
                    <p className="text-lg font-bold">{useCase.metrics}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Thalen Technologies Application Development Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just write code—we partner with your team to deliver mission-critical applications that meet security requirements and user needs.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Discovery & Requirements",
                description: "We interview stakeholders, observe workflows, and document functional and security requirements. You'll receive a detailed specification with user stories, wireframes, and architecture diagrams.",
                deliverable: "Requirements Document + Architecture Blueprint"
              },
              {
                number: "2",
                title: "Security Architecture & ATO Planning",
                description: "Before writing code, we design security controls, data handling procedures, and compliance frameworks. Our team prepares ATO documentation in parallel with development.",
                deliverable: "Security Architecture Document + ATO Roadmap"
              },
              {
                number: "3",
                title: "Agile Development & Testing",
                description: "We build your application in 2-week sprints with continuous stakeholder feedback. Automated testing, code review, and security scanning happen on every commit.",
                deliverable: "Working Software + Test Coverage Reports"
              },
              {
                number: "4",
                title: "Deployment & Knowledge Transfer",
                description: "Your application goes live with monitoring dashboards and runbooks. We train your team on architecture, deployment procedures, and ongoing maintenance.",
                deliverable: "Production Application + Trained Internal Team"
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-lg p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {phase.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{phase.description}</p>
                <div className="border-t border-border pt-4 mt-4">
                  <p className="text-xs font-semibold text-accent mb-1">Deliverable:</p>
                  <p className="text-sm font-medium">{phase.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Modern Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use proven, government-approved technologies that balance innovation with long-term maintainability.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                technologies: ["React", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "Material UI"]
              },
              {
                category: "Backend",
                technologies: ["Node.js", "Python", "Java", ".NET Core", "Go", "Ruby on Rails"]
              },
              {
                category: "Databases",
                technologies: ["PostgreSQL", "MongoDB", "Oracle", "SQL Server", "Redis", "Elasticsearch"]
              },
              {
                category: "Cloud & DevOps",
                technologies: ["AWS GovCloud", "Azure Government", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD"]
              }
            ].map((stack, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-4 text-center">{stack.category}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {stack.technologies.map((tech) => (
                    <div key={tech} className="bg-secondary border border-border rounded-lg px-4 py-2 font-medium text-sm hover:shadow-md transition-all">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Applications Delivered" },
              { number: "30", label: "Average Days to First Release" },
              { number: "99.8%", label: "Uptime SLA" },
              { number: "12", label: "Average Months to ATO" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Mission-Critical Application?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Schedule a free development assessment. We'll review your requirements, propose an architecture, and provide a detailed project plan with timeline and cost estimates.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Request Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/methodology">
              <Button size="lg" variant="outline">
                View Development Methodology
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
