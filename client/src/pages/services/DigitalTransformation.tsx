import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Users, Target, TrendingUp, BookOpen, AlertTriangle, CheckCircle2, Lightbulb, Shield } from 'lucide-react';
import { Link } from 'wouter';

export default function DigitalTransformation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6TTI1IDEzNGg3djFoLTd6TTE2IDEzNGg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Proven Transformation Framework • 85% Success Rate
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Digital Transformation Enablement for Federal Agencies
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Technology alone doesn't transform agencies—people do. NexDyne combines technical implementation with change management, training, and adoption strategies that ensure your digital investments deliver lasting mission impact. We've guided 40+ federal agencies through successful transformations with measurable ROI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Begin Transformation Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/methodology">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Transformation Framework
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Federal Transformation Is Different */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Why Federal Digital Transformation Is Different</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-center mb-12">
                Unlike private sector transformations, federal agencies face unique challenges: multi-year budget cycles, complex stakeholder landscapes, stringent security requirements, and workforce cultures resistant to change. Success requires more than technology—it demands a proven framework that addresses these realities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  icon: AlertTriangle,
                  title: "Common Transformation Failures",
                  items: [
                    "70% of transformations fail due to poor change management",
                    "Technology deployed without user training or adoption strategy",
                    "Executive sponsorship fades after initial launch",
                    "No metrics to prove ROI, leading to budget cuts"
                  ]
                },
                {
                  icon: CheckCircle2,
                  title: "The NexDyne Difference",
                  items: [
                    "Change management integrated from day one, not retrofitted",
                    "Comprehensive training programs with role-based curricula",
                    "Executive dashboards showing real-time transformation metrics",
                    "Continuous improvement cycles based on user feedback"
                  ]
                }
              ].map((column, index) => (
                <Card key={index} className="hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <column.icon className={`h-12 w-12 mb-4 ${index === 0 ? 'text-red-500' : 'text-green-500'}`} />
                    <h3 className="text-2xl font-bold mb-4">{column.title}</h3>
                    <ul className="space-y-3">
                      {column.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${index === 0 ? 'bg-red-500' : 'bg-green-500'}`}></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Services */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Transformation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just implement technology—we transform how your agency operates, ensuring adoption and delivering measurable outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Target, 
                title: 'Strategy Development', 
                desc: 'Multi-year roadmaps aligned with mission objectives, budget realities, and technical constraints. We map current state, define future state, and create actionable transformation plans.', 
                href: '/services/digital-transformation/strategy-development',
                metric: '3-5 year strategic roadmap'
              },
              { 
                icon: Users, 
                title: 'Change Management', 
                desc: 'Structured approach to organizational transformation using proven frameworks (Prosci ADKAR, Kotter 8-Step). We address resistance, build champions, and ensure lasting cultural change.', 
                href: '/services/digital-transformation/change-management',
                metric: '85% user adoption rate'
              },
              { 
                icon: BookOpen, 
                title: 'Training & Enablement', 
                desc: 'Role-based training programs with hands-on labs, video tutorials, and job aids. We don\'t just train users—we create internal experts who can train future employees.', 
                href: '/services/digital-transformation/training-enablement',
                metric: '95% training completion'
              },
              { 
                icon: TrendingUp, 
                title: 'Success Metrics', 
                desc: 'Executive dashboards tracking transformation KPIs, ROI, and user adoption. Real-time visibility into what\'s working and what needs course correction.', 
                href: '/services/digital-transformation/success-metrics',
                metric: 'Real-time ROI tracking'
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all flex flex-col">
                <CardContent className="p-8 flex flex-col flex-1">
                  <item.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{item.desc}</p>
                  <div className="bg-accent/10 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-accent mb-1">Deliverable:</p>
                    <p className="text-sm font-bold">{item.metric}</p>
                  </div>
                  <Link href={item.href} className="text-sm text-accent hover:underline flex items-center gap-1 font-semibold">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Success Factors */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Critical Success Factors for Federal Transformation</h2>
            <div className="space-y-6">
              {[
                { 
                  icon: Shield,
                  title: 'Executive Sponsorship & Governance', 
                  desc: 'Secure C-suite commitment with transformation steering committees, monthly executive reviews, and clear escalation paths. We help you build the governance structure that keeps transformation on track even when leadership changes.',
                  impact: 'Reduces project delays by 60%'
                },
                { 
                  icon: Users,
                  title: 'User Adoption & Change Champions', 
                  desc: 'Identify and train change champions in every department who advocate for transformation, provide peer support, and gather feedback. We create a grassroots movement that complements top-down mandates.',
                  impact: 'Increases adoption rates by 40%'
                },
                { 
                  icon: TrendingUp,
                  title: 'Continuous Improvement & Metrics', 
                  desc: 'Establish feedback loops with quarterly retrospectives, user surveys, and KPI dashboards. Transformation isn\'t a one-time project—it\'s an ongoing journey of optimization and refinement.',
                  impact: 'Drives 25% efficiency gains post-launch'
                },
                { 
                  icon: Lightbulb,
                  title: 'Cultural Transformation & Innovation', 
                  desc: 'Build a culture that embraces experimentation, learns from failure, and rewards innovation. We help agencies shift from risk-averse bureaucracies to agile, mission-driven organizations.',
                  impact: 'Reduces time-to-market by 50%'
                }
              ].map((factor, index) => (
                <Card key={index} className="hover:shadow-xl transition-all">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <factor.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{factor.title}</h3>
                      <p className="text-muted-foreground mb-4">{factor.desc}</p>
                      <div className="bg-secondary rounded-lg px-4 py-2 inline-block">
                        <p className="text-sm font-semibold text-accent">Average Impact: {factor.impact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Outcomes */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Measurable Transformation Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our transformation engagements deliver quantifiable results that prove ROI to stakeholders and secure continued investment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Operational Efficiency",
                outcomes: [
                  "70% reduction in manual processes",
                  "50% faster decision-making cycles",
                  "40% decrease in operational costs",
                  "99.5% system uptime post-transformation"
                ]
              },
              {
                title: "User Adoption & Satisfaction",
                outcomes: [
                  "85% user adoption within 6 months",
                  "90% employee satisfaction scores",
                  "60% reduction in support tickets",
                  "95% training completion rates"
                ]
              },
              {
                title: "Mission Impact",
                outcomes: [
                  "3x increase in citizen service capacity",
                  "80% improvement in case resolution time",
                  "65% reduction in compliance violations",
                  "$12M average annual cost savings"
                ]
              }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground font-medium">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "40+", label: "Agencies Transformed" },
              { number: "85%", label: "Transformation Success Rate" },
              { number: "$450M+", label: "Total ROI Delivered" },
              { number: "18", label: "Average Months to Full Adoption" }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Agency?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Schedule a free transformation assessment. We'll evaluate your current state, identify transformation opportunities, and create a roadmap with clear milestones and ROI projections.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Request Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline">
                View Transformation Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
