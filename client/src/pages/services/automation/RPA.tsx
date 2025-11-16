import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Bot, Clock, Shield, Zap, TrendingUp, Users } from 'lucide-react';

export default function RPA() {
  const benefits = [
    {
      icon: Bot,
      title: 'AI-Powered Digital Workers',
      description: 'Software robots execute processes 24/7 with zero errors, including while your team sleeps. Handle peak workloads without hiring additional staff.'
    },
    {
      icon: Zap,
      title: 'Rapid 4-6 Week Deployment',
      description: 'From concept to production in weeks, not months. Our proven methodology delivers working bots fast with measurable ROI from day one.'
    },
    {
      icon: Shield,
      title: 'FedRAMP & CMMC Compliant',
      description: 'Government-certified RPA solutions that work seamlessly with your existing IT infrastructure—no expensive system upgrades required.'
    }
  ];

  const useCases = [
    {
      title: 'Document Processing & Data Entry',
      description: 'Automate form submissions, data extraction from PDFs, and cross-system data transfers that currently consume hours of manual work.',
      timesSaved: '85%',
      icon: Clock
    },
    {
      title: 'Compliance & Audit Reporting',
      description: 'Generate FedRAMP, FISMA, and CMMC compliance reports automatically with audit trails and version control built in.',
      timesSaved: '92%',
      icon: Shield
    },
    {
      title: 'Citizen Service Requests',
      description: 'Process FOIA requests, benefits applications, and permit submissions faster with intelligent routing and status updates.',
      timesSaved: '78%',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <nav className="text-sm mb-6 opacity-80">
            <Link href="/services/automation" className="hover:text-accent">Intelligent Automation</Link>
            <span className="mx-2">/</span>
            <span>Robotic Process Automation</span>
          </nav>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Robotic Process Automation (RPA)
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Stop wasting your team's talent on repetitive data entry, copying, and pasting. RPA deploys AI-powered digital workers that execute tasks 24/7 with zero errors, freeing your people to focus on mission-critical work that requires human judgment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule RPA Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download RPA Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">RPA for Sustained Competitive Advantage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Government agencies and enterprises trust NexDyne RPA to eliminate bottlenecks, reduce costs, and improve citizen service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8 text-center">
                  <benefit.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is RPA */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What is RPA?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Robotic Process Automation uses software robots to automate your business processes. These digital workers take on all those repetitive, rule-based tasks—from processing FOIA requests to transferring data between legacy systems.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                The best part? RPA bots use the same systems as your employees do, meaning no expensive IT infrastructure upgrades. They work alongside your team, handling the tedious work while your people focus on complex decision-making and citizen engagement.
              </p>
              <p className="text-lg text-muted-foreground">
                For federal agencies and regulated industries, our RPA solutions are FedRAMP-authorized and CMMC Level 2 certified, ensuring your automation meets the strictest security and compliance standards.
              </p>
            </div>

            <Card className="bg-accent/5 border-2 border-accent">
              <CardContent className="p-8">
                <div className="text-sm font-semibold text-accent mb-3">FEDERAL AGENCY TESTIMONIAL</div>
                <p className="text-lg italic mb-4">
                  "We were spending 60% of our time on manual data entry between our case management and reporting systems. Mistakes were constant, and backlogs were growing. NexDyne's RPA bots eliminated the errors and cut processing time by 85%. Our team can now focus on actually serving citizens instead of pushing paper."
                </p>
                <div className="text-sm font-semibold">Colonel James Martinez, USMC (Ret.)</div>
                <div className="text-sm text-muted-foreground">Director of Operations - Department of Veterans Affairs</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Common RPA Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From federal agencies to healthcare providers, organizations deploy RPA to eliminate their biggest time drains.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <useCase.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  <div className="bg-accent/10 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold text-accent mb-1">{useCase.timesSaved}</div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The NexDyne RPA Method */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The NexDyne RPA Method Works</h2>
              <p className="text-xl text-muted-foreground">
                Forget long deployment timelines. We believe in speed with security.
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Process Analysis (Week 1)</h3>
                      <p className="text-muted-foreground">We analyze your workflows, identify the biggest time drains, and map out which processes are ideal for automation. You'll see exactly where RPA will deliver ROI.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Bot Development (Weeks 2-4)</h3>
                      <p className="text-muted-foreground">Our certified RPA developers build and test your first bot using government-approved tools. We handle FedRAMP compliance, security reviews, and integration with your existing systems.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Deployment & Training (Weeks 5-6)</h3>
                      <p className="text-muted-foreground">Your bot goes live in production. We train your team on monitoring, exception handling, and bot management. You'll see measurable time savings within days.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Scale & Optimize (Ongoing)</h3>
                      <p className="text-muted-foreground">Because you automate error-prone processes that consume massive amounts of time, you'll typically see ROI within 6-9 months. Then we help you scale to additional processes.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-8 w-8 text-accent" />
                    <div>
                      <div className="font-bold text-lg">Average ROI: 6-9 Months</div>
                      <div className="text-sm text-muted-foreground">Typical payback period for government RPA implementations</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Deploy Your First Bot?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free RPA assessment and we'll identify your top 3 automation opportunities with projected ROI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View RPA Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
