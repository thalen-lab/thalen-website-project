import { ArrowRight, BarChart3, TrendingUp, Target, Activity, CheckCircle2, DollarSign, Users, Clock, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SuccessMetrics() {
  const metricCategories = [
    {
      icon: DollarSign,
      title: "Financial Metrics",
      description: "Quantify transformation ROI through cost savings, revenue growth, and efficiency gains.",
      metrics: ["Cost reduction", "Revenue increase", "ROI percentage", "Payback period"]
    },
    {
      icon: Users,
      title: "Adoption Metrics",
      description: "Track user engagement, system utilization, and behavioral change across the organization.",
      metrics: ["User adoption rate", "Active users", "Feature utilization", "Login frequency"]
    },
    {
      icon: Clock,
      title: "Operational Metrics",
      description: "Measure process efficiency improvements, cycle time reductions, and productivity gains.",
      metrics: ["Process cycle time", "Throughput", "Error rates", "Automation rate"]
    },
    {
      icon: Zap,
      title: "Performance Metrics",
      description: "Monitor system performance, availability, and technical health of transformation initiatives.",
      metrics: ["System uptime", "Response time", "Transaction volume", "Incident rate"]
    }
  ];

  const dashboardCapabilities = [
    {
      icon: BarChart3,
      title: "Executive Dashboards",
      description: "High-level KPIs and strategic metrics for C-suite and board reporting"
    },
    {
      icon: TrendingUp,
      title: "Operational Dashboards",
      description: "Real-time operational metrics for department managers and team leads"
    },
    {
      icon: Target,
      title: "Project Dashboards",
      description: "Initiative-specific tracking for project managers and transformation teams"
    },
    {
      icon: Activity,
      title: "User Analytics",
      description: "Detailed user behavior analysis and adoption pattern identification"
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
            <span className="text-foreground">Success Metrics</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-navy-gradient text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-accent/20 rounded-full text-sm font-semibold mb-6">
              KPIs • Dashboards • ROI Measurement
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success Metrics & Performance Tracking
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive KPI frameworks and real-time dashboards tracking transformation ROI, user adoption, operational efficiency, and business outcomes to ensure measurable success and continuous improvement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
                <Link href="/contact">
                  Request Metrics Assessment
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

      {/* Metric Categories */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Metrics Framework
            </h2>
            <p className="text-xl text-muted-foreground">
              Four-dimensional approach to measuring transformation success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {metricCategories.map((category, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <category.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-accent">Key Metrics:</div>
                        <ul className="grid grid-cols-2 gap-2">
                          {category.metrics.map((metric, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                              {metric}
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

      {/* Dashboard Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real-Time Dashboard Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Role-based dashboards providing actionable insights for every stakeholder
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardCapabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 bg-accent/10 rounded-lg mb-4">
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
                <div className="text-sm font-semibold text-accent mb-2">CIVILIAN AGENCY SUCCESS STORY</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Department of Transportation Achieves 250% ROI Through Metrics-Driven Transformation
                </h3>
                <p className="text-muted-foreground mb-6">
                  Implemented comprehensive metrics framework and executive dashboards for Department of Transportation's digital transformation initiative, enabling data-driven decision making and continuous optimization. Real-time visibility into adoption metrics, operational efficiency, and cost savings resulted in 250% ROI within 18 months and $25M in documented cost avoidance.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">250%</div>
                    <div className="text-sm text-muted-foreground">ROI Achieved</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">$25M</div>
                    <div className="text-sm text-muted-foreground">Cost Avoidance</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">18 Months</div>
                    <div className="text-sm text-muted-foreground">To Target ROI</div>
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

      {/* Metrics Implementation Process */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Metrics Implementation Process
            </h2>
            
            <div className="space-y-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">1</div>
                    <h3 className="text-xl font-bold">Baseline Assessment</h3>
                  </div>
                  <p className="text-sm text-muted-foreground ml-14">
                    Establish current-state metrics and performance benchmarks before transformation
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">2</div>
                    <h3 className="text-xl font-bold">KPI Framework Design</h3>
                  </div>
                  <p className="text-sm text-muted-foreground ml-14">
                    Define success metrics aligned with transformation objectives and stakeholder priorities
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">3</div>
                    <h3 className="text-xl font-bold">Data Integration</h3>
                  </div>
                  <p className="text-sm text-muted-foreground ml-14">
                    Connect data sources, establish data pipelines, and ensure data quality
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">4</div>
                    <h3 className="text-xl font-bold">Dashboard Development</h3>
                  </div>
                  <p className="text-sm text-muted-foreground ml-14">
                    Build role-based dashboards with real-time visualizations and actionable insights
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">5</div>
                    <h3 className="text-xl font-bold">Continuous Monitoring</h3>
                  </div>
                  <p className="text-sm text-muted-foreground ml-14">
                    Track metrics, analyze trends, and provide regular reporting to stakeholders
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-accent/10 rounded-lg p-6 mb-8">
              <h3 className="font-bold mb-3">Dashboard Technology Stack</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold mb-2">Visualization</div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Power BI</li>
                    <li>• Tableau</li>
                    <li>• Looker</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold mb-2">Data Integration</div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Azure Data Factory</li>
                    <li>• AWS Glue</li>
                    <li>• Informatica</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold mb-2">Analytics</div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Google Analytics</li>
                    <li>• Adobe Analytics</li>
                    <li>• Custom BI</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
                <Link href="/contact">
                  Start Measuring Success
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
                <h3 className="font-bold mb-2">Training & Enablement</h3>
                <p className="text-sm text-muted-foreground mb-4">Comprehensive programs for user adoption</p>
                <Link href="/services/digital-transformation/training-enablement" className="text-sm text-accent hover:underline flex items-center gap-1">
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
