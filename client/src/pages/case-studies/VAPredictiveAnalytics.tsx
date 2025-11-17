import { ArrowRight, CheckCircle2, TrendingDown, Clock, DollarSign, Users } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function VAPredictiveAnalytics() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold text-orange-400 mb-4">CASE STUDY • PREDICTIVE ANALYTICS</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              VA Reduces Claims Processing Time 60% with Predictive Analytics
            </h1>
            <p className="text-xl opacity-90 mb-8">
              How the Department of Veterans Affairs deployed machine learning models to prioritize disability claims, reduce backlog, and deliver faster decisions to veterans
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <div className="font-semibold text-orange-400">Client</div>
                <div>Department of Veterans Affairs</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Industry</div>
                <div>Federal Government</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Timeline</div>
                <div>18 months</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Services</div>
                <div>Predictive Analytics, ML/AI, Data Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Impact at a Glance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <TrendingDown className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">60%</div>
                <div className="text-muted-foreground">Reduction in Average Processing Time</div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">125K</div>
                <div className="text-muted-foreground">Claims Processed Annually (Increase)</div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">$8.2M</div>
                <div className="text-muted-foreground">Annual Cost Savings</div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">94%</div>
                <div className="text-muted-foreground">Veteran Satisfaction Score</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              The Department of Veterans Affairs faced a critical backlog of over 400,000 disability compensation claims, with average processing times exceeding 180 days. Veterans were waiting months for decisions on benefits they had earned through service, creating hardship and eroding trust in the VA system.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              The existing claims processing workflow relied on manual review by adjudicators who evaluated medical records, service history, and supporting documentation. Claims were processed in the order received, regardless of complexity or urgency. Simple claims that could be decided quickly were stuck behind complex cases requiring extensive research.
            </p>
            <p className="text-lg text-muted-foreground">
              The VA needed a data-driven approach to intelligently prioritize claims, predict processing complexity, and route cases to the right adjudicators with the right expertise—all while maintaining accuracy and fairness in benefit determinations.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The NexDyne Solution</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">1. Predictive Complexity Scoring</h3>
                <p className="text-muted-foreground mb-4">
                  We built machine learning models that analyze incoming claims and predict processing complexity based on 47 variables including claimed conditions, medical evidence completeness, service history patterns, and historical adjudication outcomes. Each claim receives a complexity score (1-10) within seconds of submission.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-semibold mb-2">Key Features:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Natural language processing of medical narratives</li>
                    <li>• Pattern recognition across 12 million historical claims</li>
                    <li>• Real-time scoring with 89% accuracy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">2. Intelligent Claim Routing</h3>
                <p className="text-muted-foreground mb-4">
                  We developed an automated routing system that matches claims to adjudicators based on expertise, workload, and historical performance. Simple claims (complexity 1-3) are fast-tracked to specialists who can process them in days. Complex claims (8-10) are routed to senior adjudicators with relevant medical expertise.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-semibold mb-2">Routing Logic:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Adjudicator skill matching by condition type</li>
                    <li>• Dynamic workload balancing</li>
                    <li>• Priority scoring for urgent cases (terminally ill veterans)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">3. Decision Support Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  We created a real-time analytics dashboard that gives adjudicators instant access to relevant precedents, medical research, and decision support tools. The system surfaces similar past cases, suggests evidence requirements, and flags potential issues—reducing research time from hours to minutes.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-semibold mb-2">Dashboard Capabilities:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Similar case recommendation engine</li>
                    <li>• Automated evidence checklist generation</li>
                    <li>• Real-time quality assurance alerts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Results & Impact</h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">60% Faster Processing</h3>
                    <p className="text-muted-foreground">
                      Average claim processing time dropped from 180 days to 72 days. Simple claims are now decided in under 30 days, while complex cases receive appropriate time and expertise.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">125,000 Additional Claims Processed</h3>
                    <p className="text-muted-foreground">
                      The VA now processes 475,000 claims annually (up from 350,000) with the same staff size. The backlog has been reduced by 68% and continues to decline.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">$8.2M Annual Cost Savings</h3>
                    <p className="text-muted-foreground">
                      Reduced processing time translates to lower operational costs. The VA avoided hiring 45 additional adjudicators while increasing throughput.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">94% Veteran Satisfaction</h3>
                    <p className="text-muted-foreground">
                      Post-decision surveys show veteran satisfaction increased from 67% to 94%. Veterans appreciate faster decisions and better communication throughout the process.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Maintained 96% Accuracy Rate</h3>
                    <p className="text-muted-foreground">
                      Despite faster processing, decision accuracy remained at 96% (measured by appeals rate). The ML models flagged edge cases for senior review, ensuring quality was never compromised for speed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-3xl text-accent mb-6">"</div>
              <p className="text-xl mb-6 italic">
                NexDyne's predictive analytics platform transformed how we serve veterans. We are processing claims faster than ever while maintaining the accuracy and fairness that veterans deserve. The machine learning models give our adjudicators superpowers—they can focus on complex decisions while simple cases move through the system quickly.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-bold">Patricia Chen</div>
                  <div className="text-sm text-muted-foreground">Director of Claims Processing, Department of Veterans Affairs</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Used in This Project</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the NexDyne capabilities that delivered these results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Predictive Analytics & ML/AI</h3>
                <p className="text-muted-foreground mb-4">
                  Deploy machine learning models that predict outcomes, classify data, and automate decisions with government-grade accuracy.
                </p>
                <Link href="/services/data-analytics/ml-ai">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Data Engineering & Pipelines</h3>
                <p className="text-muted-foreground mb-4">
                  Build automated data pipelines that ingest, transform, and deliver mission-critical data at scale.
                </p>
                <Link href="/services/data-analytics/engineering">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Real-Time Analytics & Visualization</h3>
                <p className="text-muted-foreground mb-4">
                  Create interactive dashboards that give decision-makers instant access to operational intelligence.
                </p>
                <Link href="/services/data-analytics/visualization">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Operations with Predictive Analytics?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation. We will evaluate your data, identify high-impact ML use cases, and show you how predictive analytics can accelerate your mission.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Free ML Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
