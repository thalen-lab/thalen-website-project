import { ArrowRight, Target, TrendingUp, Users, Zap, CheckCircle2, BarChart3, Shield, Clock, DollarSign } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function StrategyDevelopment() {
  const strategicApproaches = [
    {
      icon: Target,
      title: "Vision & Goals Alignment",
      description: "Define clear transformation objectives aligned with mission priorities and stakeholder expectations.",
      deliverables: ["Vision statements", "Strategic objectives", "Success criteria"]
    },
    {
      icon: BarChart3,
      title: "Current State Assessment",
      description: "Comprehensive analysis of existing processes, systems, and organizational capabilities.",
      deliverables: ["Process mapping", "Technology inventory", "Capability assessment"]
    },
    {
      icon: TrendingUp,
      title: "Future State Design",
      description: "Define target operating model with optimized processes, technology architecture, and organizational structure.",
      deliverables: ["Target architecture", "Process redesign", "Operating model"]
    },
    {
      icon: Zap,
      title: "Transformation Roadmap",
      description: "Phased implementation plan with prioritized initiatives, resource requirements, and risk mitigation strategies.",
      deliverables: ["Implementation phases", "Resource plan", "Risk register"]
    }
  ];

  const keyComponents = [
    {
      icon: Users,
      title: "Stakeholder Engagement",
      description: "Executive workshops, department interviews, and cross-functional collaboration sessions"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify transformation risks, dependencies, and develop mitigation strategies"
    },
    {
      icon: DollarSign,
      title: "Business Case Development",
      description: "ROI analysis, cost-benefit modeling, and investment justification"
    },
    {
      icon: Clock,
      title: "Timeline Planning",
      description: "Realistic scheduling with milestones, dependencies, and critical path analysis"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/services/digital-transformation" className="hover:text-foreground transition-colors">
              Digital Transformation Enablement
            </Link>
            <span>/</span>
            <span className="text-foreground">Strategy Development</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-navy-gradient text-primary-foreground py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/strategy-development-hero.jpg" 
            alt="Strategic planning meeting" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/70" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-muted rounded-full text-sm font-semibold mb-6">
              Strategic Planning • Roadmap Development
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Transformation Strategy Development
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive strategic roadmaps that align digital transformation initiatives with mission objectives, stakeholder priorities, and organizational capabilities for measurable business outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
                <Link href="/contact">
                  Request Strategy Workshop
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Strategic Approach
            </h2>
            <p className="text-xl text-muted-foreground">
              Four-phase methodology delivering actionable transformation roadmaps aligned with your mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {strategicApproaches.map((approach, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <approach.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{approach.title}</h3>
                      <p className="text-muted-foreground mb-4">{approach.description}</p>
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-accent">Key Deliverables:</div>
                        <ul className="space-y-1">
                          {approach.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-foreground" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Strategy Development Components
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive elements ensuring transformation success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyComponents.map((component, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-muted rounded-full mb-4">
                    <component.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{component.title}</h3>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent">
              <CardContent className="p-8 md:p-12">
                <div className="text-sm font-semibold text-accent mb-2">FEDERAL AGENCY SUCCESS STORY</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Defense Agency Achieves $50M Cost Avoidance Through Strategic Roadmap
                </h3>
                <p className="text-muted-foreground mb-6">
                  Developed comprehensive 5-year digital transformation strategy for large defense agency, identifying $50M in cost avoidance opportunities through process optimization, legacy system modernization, and cloud migration. Strategic roadmap enabled phased implementation with clear ROI milestones and risk mitigation strategies.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">$50M</div>
                    <div className="text-sm text-muted-foreground">Cost Avoidance Identified</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">5-Year</div>
                    <div className="text-sm text-muted-foreground">Transformation Roadmap</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">12</div>
                    <div className="text-sm text-muted-foreground">Strategic Initiatives</div>
                  </div>
                </div>
                <Button asChild className="bg-accent text-accent-foreground hover:opacity-90">
                  <Link href="/case-studies">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Strategy Development Engagement
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-accent mb-2">8-12 Weeks</div>
                  <div className="text-sm font-semibold mb-2">Typical Duration</div>
                  <p className="text-sm text-muted-foreground">Comprehensive strategy development with stakeholder engagement and roadmap creation</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-accent mb-2">Executive</div>
                  <div className="text-sm font-semibold mb-2">Stakeholder Level</div>
                  <p className="text-sm text-muted-foreground">C-suite, senior leadership, and department heads actively involved</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-accent mb-2">Roadmap</div>
                  <div className="text-sm font-semibold mb-2">Primary Deliverable</div>
                  <p className="text-sm text-muted-foreground">Actionable 3-5 year transformation roadmap with phased initiatives</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
                <Link href="/contact">
                  Schedule Strategy Workshop
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Change Management</h3>
                <p className="text-sm text-muted-foreground mb-4">Structured approach to organizational transformation</p>
                <Link href="/services/digital-transformation/change-management" className="text-sm text-accent hover:underline flex items-center gap-1">
                  Learn More <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Training & Enablement</h3>
                <p className="text-sm text-muted-foreground mb-4">Comprehensive programs for user adoption</p>
                <Link href="/services/digital-transformation/training-enablement" className="text-sm text-accent hover:underline flex items-center gap-1">
                  Learn More <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Success Metrics</h3>
                <p className="text-sm text-muted-foreground mb-4">KPIs and dashboards to track transformation ROI</p>
                <Link href="/services/digital-transformation/success-metrics" className="text-sm text-accent hover:underline flex items-center gap-1">
                  Learn More <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
