import { ArrowRight, Users, MessageSquare, TrendingUp, Shield, CheckCircle2, Target, BarChart3, Heart, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function ChangeManagement() {
  const changePhases = [
    {
      icon: Target,
      title: "Prepare for Change",
      description: "Build change management foundation with stakeholder analysis, impact assessment, and readiness evaluation.",
      activities: ["Stakeholder mapping", "Impact analysis", "Readiness assessment", "Change team formation"]
    },
    {
      icon: MessageSquare,
      title: "Manage Change",
      description: "Execute change management plan with targeted communications, training programs, and resistance management.",
      activities: ["Communication campaigns", "Training delivery", "Resistance management", "Sponsor coaching"]
    },
    {
      icon: TrendingUp,
      title: "Reinforce Change",
      description: "Sustain transformation through adoption monitoring, feedback collection, and continuous improvement.",
      activities: ["Adoption tracking", "Feedback loops", "Course correction", "Success celebration"]
    }
  ];

  const changeCapabilities = [
    {
      icon: Users,
      title: "Stakeholder Engagement",
      description: "Executive sponsorship, champion networks, and cross-functional collaboration strategies"
    },
    {
      icon: MessageSquare,
      title: "Communication Planning",
      description: "Multi-channel communication strategies tailored to different stakeholder groups"
    },
    {
      icon: Heart,
      title: "Resistance Management",
      description: "Proactive identification and mitigation of resistance through targeted interventions"
    },
    {
      icon: Lightbulb,
      title: "Culture Transformation",
      description: "Organizational culture assessment and alignment with transformation objectives"
    },
    {
      icon: BarChart3,
      title: "Change Metrics",
      description: "Adoption KPIs, sentiment analysis, and change effectiveness measurement"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Change risk identification, assessment, and mitigation planning"
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
            <span className="text-foreground">Change Management</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-navy-gradient text-primary-foreground py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/change-management-hero.jpg" 
            alt="Change management leadership" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/70" />
        </div>
        <div className="container relative z-10">
          <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Services', href: '/consulting-services' },
                  { label: 'Digital Transformation', href: '/services/digital-transformation' },
                  { label: 'Change Management' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-muted rounded-full text-sm font-semibold mb-6">
              Organizational Change • Adoption Strategy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Change Management & Organizational Transformation
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Structured change management approach ensuring successful adoption of digital transformation initiatives through stakeholder engagement, communication strategies, and resistance management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
                <Link href="/contact">
                  Request Change Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/methodology">View Our Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Change Management Phases */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Three-Phase Change Management Approach
            </h2>
            <p className="text-xl text-muted-foreground">
              Proven methodology for driving organizational transformation and user adoption
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {changePhases.map((phase, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                        <phase.icon className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl font-bold text-accent">{index + 1}</span>
                        <h3 className="text-2xl font-bold">{phase.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{phase.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0" />
                            <span className="text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Change Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Change Management Capabilities
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive change management services ensuring transformation success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {changeCapabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 bg-muted rounded-lg mb-4">
                    <capability.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
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
                <div className="text-sm font-semibold text-accent mb-2">HEALTHCARE AGENCY SUCCESS STORY</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  VA Medical Center Achieves 95% User Adoption Through Structured Change Management
                </h3>
                <p className="text-muted-foreground mb-6">
                  Implemented comprehensive change management program for VA medical center's EHR modernization, achieving 95% user adoption within 6 months through targeted training, champion networks, and continuous support. Change management approach minimized resistance and ensured clinical staff embraced new technology.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">95%</div>
                    <div className="text-sm text-muted-foreground">User Adoption Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">6 Months</div>
                    <div className="text-sm text-muted-foreground">To Full Adoption</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">2,500+</div>
                    <div className="text-sm text-muted-foreground">Clinical Staff Trained</div>
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

      {/* Change Management Framework */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Change Management Framework
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">ADKAR Model Integration</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Awareness, Desire, Knowledge, Ability, Reinforcement framework for individual change
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground" />
                      Individual change assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground" />
                      Targeted interventions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground" />
                      Progress tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Kotter's 8-Step Process</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Organizational change methodology for large-scale transformation initiatives
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground" />
                      Create urgency and vision
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground" />
                      Build coalition and empower
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground" />
                      Generate wins and anchor change
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
                <Link href="/contact">
                  Start Your Change Journey
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
                <h3 className="font-bold mb-2">Strategy Development</h3>
                <p className="text-sm text-muted-foreground mb-4">Comprehensive roadmaps aligned with business objectives</p>
                <Link href="/services/digital-transformation/strategy-development" className="text-sm text-accent hover:underline flex items-center gap-1">
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

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
