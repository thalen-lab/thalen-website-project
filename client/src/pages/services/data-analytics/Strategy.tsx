import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, Target, TrendingUp, Users, FileText, Lightbulb, BarChart3, Search, Database, Bot } from 'lucide-react';

export default function DataStrategy() {
  const strategyBenefits = [
    {
      icon: Target,
      title: 'Mission-Aligned Roadmap',
      description: 'Connect data initiatives directly to agency mission objectives with a 3-year roadmap that prioritizes projects by impact, feasibility, and strategic value.'
    },
    {
      icon: TrendingUp,
      title: 'Data Maturity Assessment',
      description: 'Understand where your agency stands today across data governance, infrastructure, analytics capabilities, and organizational culture using our Federal Data Maturity Model.'
    },
    {
      icon: Users,
      title: 'Stakeholder Alignment',
      description: 'Build consensus across IT, mission teams, and leadership through collaborative workshops that ensure your data strategy has buy-in from day one.'
    }
  ];

  const strategyComponents = [
    {
      title: 'Current State Assessment',
      description: 'We evaluate your existing data landscape including systems, governance, quality, security posture, and organizational capabilities.',
      deliverables: ['Data inventory & lineage', 'Maturity score across 5 dimensions', 'Gap analysis report']
    },
    {
      title: 'Future State Vision',
      description: 'Define what success looks like for your agency with clear metrics, target capabilities, and alignment to mission objectives.',
      deliverables: ['Target architecture', 'Success metrics & KPIs', 'Business case development']
    },
    {
      title: 'Strategic Roadmap',
      description: 'Prioritized implementation plan with quick wins, foundational projects, and transformational initiatives over a 3-year horizon.',
      deliverables: ['Phased project roadmap', 'Resource & budget estimates', 'Risk mitigation plan']
    },
    {
      title: 'Governance Framework',
      description: 'Establish data governance structures, policies, roles, and decision-making processes to sustain your data-driven transformation.',
      deliverables: ['Governance operating model', 'Data policies & standards', 'RACI matrix']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <nav className="text-sm mb-6 opacity-80">
            <Link href="/services/data-analytics" className="hover:text-accent">Data Analytics & Intelligence</Link>
            <span className="mx-2">/</span>
            <span>Data Strategy & Roadmap</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-semibold mb-4">
              Strategic Planning
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Data Strategy & Roadmap
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Your agency collects massive amounts of data, but are you using it to drive mission outcomes? Most federal organizations lack a coherent data strategy—analytics projects happen in silos, data quality is inconsistent, and nobody owns data governance. Thalen Technologies builds comprehensive data strategies that align analytics investments with mission priorities, establish sustainable governance, and deliver measurable results within 12 months.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request Strategy Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Strategy Framework
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Federal Agencies Need a Data Strategy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Without a clear strategy, data initiatives fail to deliver ROI, duplicate efforts waste resources, and agencies miss opportunities to improve mission outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategyBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <benefit.icon className="h-14 w-14 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Strategy Problem */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Cost of No Strategy</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Federal agencies spend millions on analytics tools, data platforms, and dashboards—but without a coherent strategy, these investments fail to deliver value. Projects get funded based on who asks loudest, not what drives mission impact. Data quality problems persist because nobody owns governance. Analytics teams build solutions that leadership does not use because requirements were never aligned.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Thalen Technologies's Data Strategy Basecamp is a 6-week engagement that gives you clarity. We assess your current state, define your target vision, and build a prioritized roadmap with quick wins and long-term transformational projects. You will know exactly what to build, in what order, and why it matters to your mission.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold mb-1">6-Week Basecamp Engagement</div>
                    <div className="text-sm text-muted-foreground">Rapid assessment and roadmap development—not a year-long consulting engagement</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold mb-1">Federal Data Maturity Model</div>
                    <div className="text-sm text-muted-foreground">Benchmark your capabilities against peer agencies and identify improvement priorities</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold mb-1">Quick Wins Identified</div>
                    <div className="text-sm text-muted-foreground">Every roadmap includes 3-6 month quick wins that demonstrate value immediately</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="h-8 w-8 text-accent" />
                  <div className="text-sm font-semibold text-accent uppercase tracking-wide">Federal Strategy Success</div>
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  "We had 12 different analytics initiatives underway with no coordination. Three teams were building similar dashboards. Nobody owned data quality. Our CIO brought in Thalen Technologies for a data strategy engagement. In 6 weeks, they gave us a clear roadmap, consolidated our projects, and identified $2M in duplicate spending. One year later, we have a functioning data governance council, enterprise data platform, and analytics that leadership actually uses."
                </p>
                <div className="border-t border-accent/20 pt-4">
                  <div className="font-semibold">Jennifer Martinez</div>
                  <div className="text-sm text-muted-foreground">Chief Data Officer - Department of Transportation</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategy Components */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What is Included in a Thalen Technologies Data Strategy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our Data Strategy Basecamp delivers four key components over 6 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {strategyComponents.map((component, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{component.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{component.description}</p>
                  <div className="bg-secondary rounded-lg p-4">
                    <div className="text-sm font-semibold mb-2">Key Deliverables:</div>
                    <ul className="space-y-1">
                      {component.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-navy-gradient text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">6 Weeks</div>
                  <div className="text-sm opacity-80">Strategy development timeline</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5 Dimensions</div>
                  <div className="text-sm opacity-80">Maturity assessment areas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">3 Years</div>
                  <div className="text-sm opacity-80">Strategic roadmap horizon</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">12 Months</div>
                  <div className="text-sm opacity-80">Time to measurable results</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Thalen Technologies Approach */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The Thalen Technologies Data Strategy Framework</h2>
              <p className="text-xl text-muted-foreground">
                Our proven approach balances strategic vision with tactical execution.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Discovery & Assessment (Week 1-2)</h3>
                      <p className="text-muted-foreground mb-3">We interview stakeholders across your agency, inventory data systems, review existing analytics initiatives, and assess data governance maturity. You receive a comprehensive current state report with maturity scoring across data strategy, architecture, governance, quality, and culture.</p>
                      <div className="text-sm font-semibold text-accent">Deliverable: Current State Assessment & Maturity Scorecard</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Vision & Prioritization (Week 3-4)</h3>
                      <p className="text-muted-foreground mb-3">Through collaborative workshops, we define your target data capabilities, identify high-impact use cases, and prioritize initiatives based on mission value, feasibility, and dependencies. Leadership reviews and approves the strategic direction before roadmap development.</p>
                      <div className="text-sm font-semibold text-accent">Deliverable: Target Vision & Prioritized Use Case Portfolio</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Roadmap Development (Week 5)</h3>
                      <p className="text-muted-foreground mb-3">We build a phased 3-year roadmap with quick wins (3-6 months), foundational projects (6-18 months), and transformational initiatives (18-36 months). Each project includes scope, resource estimates, dependencies, and success metrics.</p>
                      <div className="text-sm font-semibold text-accent">Deliverable: 3-Year Strategic Roadmap with Project Charters</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Governance & Presentation (Week 6)</h3>
                      <p className="text-muted-foreground mb-3">We design your data governance operating model including roles, decision rights, policies, and oversight structures. The final week includes executive presentation of the strategy, roadmap, and governance framework with Q&A and refinement.</p>
                      <div className="text-sm font-semibold text-accent">Deliverable: Governance Framework & Executive Presentation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complementary Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Maximize your data strategy impact with these related Thalen Technologies offerings
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Digital Transformation Enablement</h3>
                <p className="text-muted-foreground mb-4">
                  Turn your data strategy into organizational change. Our change management experts help you build data literacy, establish new workflows, and drive adoption across your agency.
                </p>
                <Link href="/services/digital-transformation">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Cybersecurity & Compliance</h3>
                <p className="text-muted-foreground mb-4">
                  Protect your data assets with FedRAMP-authorized security controls. We implement data classification, access governance, and compliance frameworks aligned to your strategy.
                </p>
                <Link href="/services/cybersecurity">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Data Strategy?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation. We will review your current data landscape and provide a proposal for a 6-week Data Strategy Basecamp engagement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Strategy Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Maturity Model
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Data Assessment & Readiness',
            description: 'Evaluate your current data landscape and identify gaps before implementing your strategy.',
            href: '/services/data-analytics/assessment',
            icon: Search
          },
          {
            title: 'Data Engineering & Infrastructure',
            description: 'Build the technical foundation to execute your data strategy with modern data pipelines.',
            href: '/services/data-analytics/engineering',
            icon: Database
          },
          {
            title: 'Intelligent Automation',
            description: 'Leverage data insights to drive automated decision-making and process optimization.',
            href: '/services/automation',
            icon: Bot
          }
        ]}
        title="Execute Your Data Strategy"
        description="Transform strategy into reality with these complementary data and automation services."
      />

      <Footer />
    </div>
  );
}
