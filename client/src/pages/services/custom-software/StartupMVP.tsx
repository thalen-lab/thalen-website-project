import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, Rocket, Zap, Users, TrendingUp, 
  CheckCircle2, Clock, DollarSign, Target, Lightbulb, BarChart3
} from 'lucide-react';
import { Link } from 'wouter';
import Breadcrumb from '@/components/Breadcrumb';

export default function StartupMVP() {
  const benefits = [
    {
      icon: Clock,
      title: "Fast Time to Market",
      description: "Launch your MVP in 8-12 weeks with agile sprints and rapid iteration."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Development",
      description: "Focus on core features first, minimize waste, and validate before scaling."
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Build what users actually need through research, prototyping, and testing."
    },
    {
      icon: TrendingUp,
      title: "Scalable Foundation",
      description: "Architecture designed to grow from hundreds to millions of users."
    },
    {
      icon: Target,
      title: "Product-Market Fit",
      description: "Validate your hypothesis and iterate based on real user feedback."
    },
    {
      icon: Lightbulb,
      title: "Investor-Ready",
      description: "Professional MVP that demonstrates traction and attracts funding."
    }
  ];

  const process = [
    {
      week: "Weeks 1-2",
      phase: "Discovery & Design",
      activities: ["User research & personas", "Competitor analysis", "Feature prioritization", "Wireframes & prototypes", "Technical architecture"]
    },
    {
      week: "Weeks 3-8",
      phase: "MVP Development",
      activities: ["Core feature development", "User authentication", "Database setup", "API development", "Weekly demos & feedback"]
    },
    {
      week: "Weeks 9-10",
      phase: "Testing & Refinement",
      activities: ["User acceptance testing", "Bug fixes & optimization", "Performance tuning", "Security audit", "Documentation"]
    },
    {
      week: "Weeks 11-12",
      phase: "Launch & Support",
      activities: ["Production deployment", "Monitoring setup", "User onboarding", "Analytics integration", "Post-launch support"]
    }
  ];

  const caseStudy = {
    startup: "HealthTech Startup",
    challenge: "Build a telemedicine MVP to validate market demand and secure Series A funding within 3 months.",
    solution: "Developed HIPAA-compliant video consultation platform with appointment scheduling, e-prescriptions, and patient records.",
    results: [
      { metric: "Time to Launch", value: "10 weeks" },
      { metric: "Seed Funding Raised", value: "$2M" },
      { metric: "Early Users", value: "5,000+" },
      { metric: "User Satisfaction", value: "4.7/5" }
    ]
  };

  const pricingTiers = [
    {
      name: "Essential MVP",
      price: "$40K - $60K",
      timeline: "8-10 weeks",
      features: [
        "1-2 core features",
        "Web or mobile (single platform)",
        "Basic user authentication",
        "Simple admin dashboard",
        "Cloud hosting setup",
        "2 weeks post-launch support"
      ]
    },
    {
      name: "Growth MVP",
      price: "$60K - $100K",
      timeline: "10-12 weeks",
      features: [
        "3-4 core features",
        "Web + mobile (iOS or Android)",
        "Advanced authentication (SSO)",
        "Analytics & reporting",
        "Payment integration",
        "4 weeks post-launch support"
      ],
      popular: true
    },
    {
      name: "Enterprise MVP",
      price: "$100K - $150K",
      timeline: "12-16 weeks",
      features: [
        "5+ core features",
        "Web + mobile (iOS + Android)",
        "Enterprise integrations",
        "Custom workflows",
        "Advanced security & compliance",
        "8 weeks post-launch support"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Services', href: '/consulting-services' },
                  { label: 'Custom Software Solutions', href: '/services/custom-software' },
                  { label: 'Startup MVP Development' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="max-w-4xl">
            <div className="text-sm mb-4">
              <Link href="/services/custom-software" className="hover:underline opacity-80">Custom Software Solutions</Link>
              <span className="mx-2">/</span>
              <span>Startup MVP Development</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Startup MVP Development
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Validate your product idea fast. We build investor-ready MVPs in 8-12 weeks that help startups secure funding and achieve product-market fit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
                <Link href="/contact">
                  Start Your MVP
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                View Success Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Build an MVP?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Test your idea, validate demand, and attract investors without breaking the bank.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <benefit.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our MVP Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 12-week sprint to launch your product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all active:scale-95">
                <CardContent className="p-8">
                  <div className="text-sm text-accent font-semibold mb-2">{item.week}</div>
                  <h3 className="text-xl font-bold mb-4">{item.phase}</h3>
                  <ul className="space-y-2">
                    {item.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Story</h2>
          </div>

          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-12">
              <div className="text-sm text-accent font-semibold mb-2">{caseStudy.startup}</div>
              <h3 className="text-3xl font-bold mb-6">Telemedicine MVP Secures $2M Seed Funding</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold mb-2">Challenge</h4>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Solution</h4>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 pt-6 border-t">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">{result.value}</div>
                    <div className="text-sm text-muted-foreground">{result.metric}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">MVP Pricing Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent, fixed-price packages to fit your budget and timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all ${tier.popular ? 'border-accent border-2' : ''}`}>
                <CardContent className="p-8">
                  {tier.popular && (
                    <div className="text-xs font-semibold text-accent mb-4 uppercase">Most Popular</div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-accent mb-2">{tier.price}</div>
                  <div className="text-sm text-muted-foreground mb-6">{tier.timeline}</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-orange-gradient hover:opacity-90" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What's Included in Every MVP</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Rocket, title: "Product Strategy", desc: "Feature prioritization and roadmap" },
              { icon: Users, title: "UX/UI Design", desc: "User research and interface design" },
              { icon: Zap, title: "Agile Development", desc: "2-week sprints with weekly demos" },
              { icon: BarChart3, title: "Analytics Setup", desc: "Track user behavior and metrics" },
              { icon: CheckCircle2, title: "QA Testing", desc: "Comprehensive testing and bug fixes" },
              { icon: TrendingUp, title: "Launch Support", desc: "Deployment and monitoring" },
              { icon: Lightbulb, title: "Documentation", desc: "Technical and user documentation" },
              { icon: DollarSign, title: "Post-Launch Support", desc: "2-8 weeks of maintenance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Validate Your Idea?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's build an MVP that proves your concept and attracts investors.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
            <Link href="/contact">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
