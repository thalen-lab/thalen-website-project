import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function CustomSoftware() {
  const services = [
    {
      title: "Enterprise SaaS Platforms",
      description: "Multi-tenant SaaS applications with subscription management, analytics, and scalable infrastructure.",
      features: [
        "Multi-tenant architecture",
        "Subscription & billing",
        "Usage analytics",
        "API integrations"
      ],
      link: "/services/custom-software/enterprise-saas"
    },
    {
      title: "Startup MVP Development",
      description: "Rapid prototyping and MVP development to validate your product-market fit and secure funding.",
      features: [
        "2-3 month delivery",
        "Agile sprints",
        "User feedback loops",
        "Scalable foundation"
      ],
      link: "/services/custom-software/startup-mvp"
    },
    {
      title: "Custom Business Applications",
      description: "Tailored internal tools, CRMs, ERPs, and workflow automation to streamline operations.",
      features: [
        "Process automation",
        "Custom workflows",
        "Role-based access",
        "Third-party integrations"
      ],
      link: "/services/custom-software/business-apps"
    },
    {
      title: "API & Microservices Development",
      description: "RESTful APIs, GraphQL, and microservices architecture for modern, scalable applications.",
      features: [
        "API design & documentation",
        "Microservices architecture",
        "Real-time data sync",
        "Webhook integrations"
      ],
      link: "/services/custom-software/api-microservices"
    },
    {
      title: "Mobile App Development",
      description: "Native iOS/Android apps and cross-platform solutions with React Native or Flutter.",
      features: [
        "iOS & Android native",
        "Cross-platform frameworks",
        "Offline-first design",
        "Push notifications"
      ],
      link: "/services/custom-software/mobile-apps"
    },
    {
      title: "Legacy System Modernization",
      description: "Transform outdated monolithic applications into modern, cloud-native microservices.",
      features: [
        "Incremental migration",
        "Zero-downtime transition",
        "Cloud-native refactoring",
        "Performance optimization"
      ],
      link: "/services/custom-software/legacy-modernization"
    }
  ];

  const caseStudies = [
    {
      industry: "FinTech Startup",
      title: "Payment Processing SaaS Platform",
      description: "Built multi-tenant payment gateway processing $50M+ annually with 99.99% uptime.",
      metrics: [
        { label: "Transaction Volume", value: "$50M+" },
        { label: "Uptime", value: "99.99%" },
        { label: "Time to Market", value: "4 months" }
      ]
    },
    {
      industry: "E-Commerce",
      title: "Custom Marketplace Platform",
      description: "Developed two-sided marketplace connecting 10K+ buyers with 500+ sellers, handling $5M GMV.",
      metrics: [
        { label: "Active Users", value: "10K+" },
        { label: "GMV", value: "$5M" },
        { label: "Conversion Rate", value: "8.5%" }
      ]
    },
    {
      industry: "Healthcare Tech",
      title: "Telemedicine Mobile App",
      description: "HIPAA-compliant telehealth platform serving 50K+ patients with video consultations and e-prescriptions.",
      metrics: [
        { label: "Patients Served", value: "50K+" },
        { label: "Consultations", value: "200K+" },
        { label: "App Rating", value: "4.8/5" }
      ]
    }
  ];

  const techStack = [
    { category: "Frontend", technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"] },
    { category: "Backend", technologies: ["Node.js", "Python", "Java", "Go", ".NET", "Ruby"] },
    { category: "Mobile", technologies: ["React Native", "Flutter", "Swift", "Kotlin"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"] },
    { category: "Databases", technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] }
  ];

  const engagementModels = [
    {
      title: "Fixed-Price Projects",
      description: "Well-defined scope with fixed timeline and budget. Ideal for MVPs and small projects.",
      bestFor: "MVPs, prototypes, defined requirements"
    },
    {
      title: "Dedicated Team",
      description: "Dedicated developers working exclusively on your project. Full control and flexibility.",
      bestFor: "Long-term projects, evolving requirements"
    },
    {
      title: "Time & Materials",
      description: "Pay for actual time and resources used. Maximum flexibility for changing requirements.",
      bestFor: "Complex projects, uncertain scope"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/custom-software-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="container relative z-10">
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Custom Software' }
              ]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Commercial & Enterprise Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Custom Software Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Bespoke software engineered to solve your unique business challenges. From concept to deployment, we deliver SaaS platforms, mobile apps, and enterprise solutions that drive competitive advantage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90" asChild>
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Services</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Our Custom Software Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From startup MVPs to enterprise-grade platforms, we build software that scales with your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={service.link}>
                      <a className="inline-flex items-center gap-2 text-[oklch(0.65_0.18_55)] font-semibold hover:gap-3 transition-all active:scale-95">
                        Learn More
                        <ArrowRight className="h-5 w-5" />
                      </a>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Our Agile Development Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that delivers working software in weeks, not months.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { phase: "Discovery", description: "Requirements gathering, user research, and technical architecture planning." },
              { phase: "Design", description: "UI/UX design, prototyping, and user testing for optimal experience." },
              { phase: "Development", description: "Agile sprints with continuous integration and weekly demos." },
              { phase: "Launch & Support", description: "Deployment, monitoring, and ongoing maintenance and enhancements." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[oklch(0.75_0.15_55)] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{item.phase}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Technologies</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Modern Technology Stack</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We use current technologies to build fast, scalable, and maintainable applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {techStack.map((stack, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-[oklch(0.20_0.05_250)] mb-4 text-center">{stack.category}</h3>
                <div className="flex flex-col gap-2">
                  {stack.technologies.map((tech, idx) => (
                    <div key={idx} className="px-4 py-2 bg-[oklch(0.97_0.01_250)] rounded-lg text-sm text-slate-600 text-center">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Success Stories</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Real Results, Real Impact</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real results from our custom software engagements with startups and enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 flex flex-col h-full">
                    <p className="text-sm text-[oklch(0.65_0.18_55)] font-semibold mb-2">{study.industry}</p>
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4 flex-grow">{study.title}</h3>
                    <p className="text-slate-600 mb-6">{study.description}</p>
                    <div className="space-y-3 mt-auto">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="flex justify-between items-center border-t border-slate-200 pt-3">
                          <span className="text-sm text-slate-600">{metric.label}</span>
                          <span className="text-lg font-bold text-[oklch(0.20_0.05_250)]">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Collaboration Models</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Flexible Engagement Models</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the engagement model that best fits your project needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{model.title}</h3>
                    <p className="text-slate-600 mb-6 flex-grow">{model.description}</p>
                    <div className="pt-4 border-t border-slate-200 mt-auto">
                      <div className="text-sm font-semibold text-[oklch(0.65_0.18_55)] mb-1">Best For:</div>
                      <div className="text-sm text-slate-600">{model.bestFor}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Custom Solution?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a tailored development plan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]" asChild>
              <Link href="/methodology">
                View Our Process
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
