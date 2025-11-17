import { Code2, Zap, Rocket, Shield, GitBranch, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ApplicationDevelopment() {
  const services = [
    {
      icon: Code2,
      title: "Custom Application Development",
      description: "Mission-critical applications built for federal agencies with FedRAMP authorization and TS/SCI cleared teams.",
      link: "/services/custom-application-development",
      benefits: [
        "FedRAMP-authorized development",
        "TS/SCI cleared development teams",
        "NIST 800-53 compliance",
        "ATO support included"
      ]
    },
    {
      icon: Zap,
      title: "Low-Code/Rapid Application Development",
      description: "Accelerate digital transformation with visual development platforms. Deploy applications in weeks, not years.",
      link: "/services/low-code-development",
      benefits: [
        "10x faster development",
        "Agile and flexible",
        "Cost-effective delivery",
        "Easy maintenance and updates"
      ]
    },
    {
      icon: Rocket,
      title: "Legacy System Modernization",
      description: "Transform aging COBOL and mainframe systems into modern, cloud-native applications while maintaining mission continuity.",
      link: "/services/legacy-modernization",
      benefits: [
        "Zero-downtime migration",
        "Cloud-native architecture",
        "Reduced technical debt",
        "Improved performance"
      ]
    },
    {
      icon: Shield,
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
      icon: GitBranch,
      title: "System Integration & APIs",
      description: "Connect legacy and modern systems with secure, scalable APIs and microservices architecture.",
      link: "/services/system-integration",
      benefits: [
        "Seamless data flow",
        "API management",
        "Real-time synchronization",
        "Microservices architecture"
      ]
    },
    {
      icon: Lock,
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
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Core Service
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Application Development & Integration
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Mission-critical applications for federal agencies. Our TS/SCI cleared development teams deliver FedRAMP-authorized solutions with full ATO support, ensuring your applications meet the highest security and compliance standards.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/compare-services">Compare Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Application Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom development to legacy modernization, we provide end-to-end application services tailored for federal agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all border-2 hover:border-accent">
                <CardContent className="p-8">
                  <service.icon className="h-16 w-16 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.link}>
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Delivery Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful delivery of mission-critical applications with full compliance and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-8 relative">
                <div className="text-6xl font-bold text-accent/10 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NexDyne */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose NexDyne for Application Development?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine deep federal expertise with cutting-edge development practices to deliver applications that meet the unique challenges of government missions.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Security Clearances</h3>
                    <p className="text-muted-foreground">TS/SCI cleared development teams with decades of federal experience.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">FedRAMP Authorized</h3>
                    <p className="text-muted-foreground">Proven track record with 50+ successful FedRAMP ATOs across agencies.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Agile Delivery</h3>
                    <p className="text-muted-foreground">Iterative development with continuous feedback and rapid deployment cycles.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Modern Technology Stack</h3>
                    <p className="text-muted-foreground">Cloud-native, microservices architecture with cutting-edge frameworks and tools.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Operations?</h3>
              <p className="text-blue-100 mb-8">
                Schedule a complimentary consultation with our application development experts to discuss your mission requirements and explore how we can help.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white w-full">
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
