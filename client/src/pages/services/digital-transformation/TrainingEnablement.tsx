import { ArrowRight, GraduationCap, Users, Video, FileText, CheckCircle2, Target, BarChart3, Headphones, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function TrainingEnablement() {
  const trainingApproaches = [
    {
      icon: Users,
      title: "Instructor-Led Training",
      description: "Interactive classroom and virtual training sessions with experienced instructors and hands-on exercises.",
      formats: ["In-person workshops", "Virtual classrooms", "Hybrid sessions"]
    },
    {
      icon: Video,
      title: "E-Learning & Self-Paced",
      description: "On-demand video courses, interactive modules, and microlearning content accessible anytime, anywhere.",
      formats: ["Video tutorials", "Interactive modules", "Knowledge checks"]
    },
    {
      icon: Headphones,
      title: "On-the-Job Support",
      description: "Real-time assistance, job aids, and performance support tools embedded in daily workflows.",
      formats: ["Help desk support", "Quick reference guides", "Contextual help"]
    },
    {
      icon: BookOpen,
      title: "Train-the-Trainer Programs",
      description: "Develop internal training capacity by certifying subject matter experts as trainers and champions.",
      formats: ["Trainer certification", "Champion networks", "Knowledge transfer"]
    }
  ];

  const trainingServices = [
    {
      icon: Target,
      title: "Training Needs Assessment",
      description: "Identify skill gaps, learning objectives, and training requirements across user groups"
    },
    {
      icon: FileText,
      title: "Curriculum Development",
      description: "Design comprehensive training curricula aligned with transformation objectives"
    },
    {
      icon: GraduationCap,
      title: "Content Creation",
      description: "Develop engaging training materials including videos, guides, and interactive exercises"
    },
    {
      icon: Users,
      title: "Training Delivery",
      description: "Execute training programs through multiple delivery channels and formats"
    },
    {
      icon: BarChart3,
      title: "Learning Analytics",
      description: "Track training completion, assessment scores, and knowledge retention metrics"
    },
    {
      icon: Headphones,
      title: "Post-Training Support",
      description: "Provide ongoing support through help desk, office hours, and refresher sessions"
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
            <span className="text-foreground">Training & Enablement</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-navy-gradient text-primary-foreground py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/training-enablement-hero.jpg" 
            alt="Corporate training workshop" 
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
                  { label: 'Training & Enablement' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-muted rounded-full text-sm font-semibold mb-6">
              User Training • Knowledge Transfer • Adoption Support
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Training & User Enablement Programs
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive training programs ensuring successful user adoption through instructor-led sessions, e-learning content, on-the-job support, and train-the-trainer certification for sustained organizational capability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
                <Link href="/contact">
                  Request Training Assessment
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

      {/* Training Approaches */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multi-Modal Training Delivery
            </h2>
            <p className="text-xl text-muted-foreground">
              Flexible training approaches tailored to different learning styles and organizational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingApproaches.map((approach, index) => (
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
                        <div className="text-sm font-semibold text-accent">Training Formats:</div>
                        <ul className="space-y-1">
                          {approach.formats.map((format, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-foreground" />
                              {format}
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

      {/* Training Services */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Training Services
            </h2>
            <p className="text-xl text-muted-foreground">
              End-to-end training program development and delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 bg-muted rounded-lg mb-4">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
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
                  Department of Labor Trains 8,000+ Employees on New Case Management System
                </h3>
                <p className="text-muted-foreground mb-6">
                  Developed and delivered comprehensive training program for Department of Labor's new case management system, training 8,000+ employees across 50 states through blended learning approach combining instructor-led sessions, e-learning modules, and on-the-job support. Achieved 92% training completion rate and 88% knowledge retention.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">8,000+</div>
                    <div className="text-sm text-muted-foreground">Employees Trained</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">92%</div>
                    <div className="text-sm text-muted-foreground">Training Completion</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">88%</div>
                    <div className="text-sm text-muted-foreground">Knowledge Retention</div>
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

      {/* Training Program Structure */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Typical Training Program Structure
            </h2>
            
            <div className="space-y-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">1</div>
                    <h3 className="text-xl font-bold">Needs Assessment & Planning</h3>
                    <span className="ml-auto text-sm text-muted-foreground">2-3 weeks</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-14">
                    Identify training requirements, define learning objectives, and develop training strategy
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">2</div>
                    <h3 className="text-xl font-bold">Content Development</h3>
                    <span className="ml-auto text-sm text-muted-foreground">4-6 weeks</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-14">
                    Create training materials, videos, guides, and interactive exercises
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">3</div>
                    <h3 className="text-xl font-bold">Pilot & Refinement</h3>
                    <span className="ml-auto text-sm text-muted-foreground">1-2 weeks</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-14">
                    Test training with pilot group, gather feedback, and refine content
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">4</div>
                    <h3 className="text-xl font-bold">Training Delivery</h3>
                    <span className="ml-auto text-sm text-muted-foreground">Varies by scope</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-14">
                    Roll out training program through multiple channels and formats
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">5</div>
                    <h3 className="text-xl font-bold">Post-Training Support</h3>
                    <span className="ml-auto text-sm text-muted-foreground">Ongoing</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-14">
                    Provide continuous support, refresher sessions, and knowledge reinforcement
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
                <Link href="/contact">
                  Start Your Training Program
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
                <h3 className="font-bold mb-2">Change Management</h3>
                <p className="text-sm text-muted-foreground mb-4">Structured approach to organizational transformation</p>
                <Link href="/services/digital-transformation/change-management" className="text-sm text-accent hover:underline flex items-center gap-1">
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
