import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, RefreshCw, Cloud, Zap, Shield, 
  CheckCircle2, Database, Code2, TrendingUp, Layers, GitBranch
} from 'lucide-react';
import { Link } from 'wouter';

export default function LegacyModernization() {
  const approaches = [
    {
      icon: RefreshCw,
      title: "Replatforming",
      description: "Lift and shift to modern infrastructure with minimal code changes.",
      bestFor: "Quick wins, cloud migration, reducing hosting costs"
    },
    {
      icon: Code2,
      title: "Refactoring",
      description: "Restructure existing code to improve maintainability and performance.",
      bestFor: "Improving code quality, reducing technical debt"
    },
    {
      icon: Layers,
      title: "Rearchitecting",
      description: "Redesign application architecture (e.g., monolith to microservices).",
      bestFor: "Scalability, flexibility, modern architecture patterns"
    },
    {
      icon: GitBranch,
      title: "Rebuilding",
      description: "Rewrite from scratch using modern frameworks and best practices.",
      bestFor: "Outdated tech stack, major feature additions"
    },
    {
      icon: Cloud,
      title: "Replacing",
      description: "Replace legacy system with commercial off-the-shelf (COTS) or SaaS.",
      bestFor: "Commodity functions, faster time to value"
    },
    {
      icon: Zap,
      title: "Strangler Fig Pattern",
      description: "Gradually replace legacy system piece by piece with zero downtime.",
      bestFor: "Risk mitigation, continuous delivery"
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Reduced Costs", desc: "Lower maintenance and hosting expenses" },
    { icon: Zap, title: "Improved Performance", desc: "Faster response times and better UX" },
    { icon: Shield, title: "Enhanced Security", desc: "Modern security practices and compliance" },
    { icon: Cloud, title: "Cloud Scalability", desc: "Auto-scaling and high availability" },
    { icon: Database, title: "Better Data Access", desc: "APIs and integrations with modern tools" },
    { icon: Code2, title: "Easier Maintenance", desc: "Clean code and modern frameworks" }
  ];

  const caseStudy = {
    client: "Insurance Company",
    challenge: "Modernize 20-year-old mainframe-based policy management system serving 500K customers with zero downtime.",
    solution: "Implemented strangler fig pattern: built microservices API layer, migrated data to cloud PostgreSQL, and gradually replaced UI modules.",
    results: [
      { metric: "Downtime", value: "0 hours" },
      { metric: "Performance Improvement", value: "10x faster" },
      { metric: "Cost Reduction", value: "-40%" },
      { metric: "Migration Timeline", value: "18 months" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="text-sm mb-4">
              <Link href="/services/custom-software" className="hover:underline opacity-80">Custom Software Solutions</Link>
              <span className="mx-2">/</span>
              <span>Legacy System Modernization</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Legacy System Modernization
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Transform outdated monolithic applications into modern, cloud-native microservices. Reduce technical debt, improve performance, and enable innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
                <Link href="/contact">
                  Start Modernization Assessment
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

      {/* Modernization Approaches */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Modernization Strategies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right approach based on your goals, timeline, and risk tolerance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <approach.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{approach.title}</h3>
                  <p className="text-muted-foreground mb-4">{approach.description}</p>
                  <div className="text-sm text-accent font-semibold">Best for: {approach.bestFor}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Modernize?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The business case for legacy system modernization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Modernization Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A phased, risk-managed approach to legacy transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "Assessment & Planning",
                description: "Analyze current system, identify pain points, define modernization roadmap, and estimate ROI.",
                duration: "2-4 weeks"
              },
              {
                phase: "Proof of Concept",
                description: "Build POC for highest-risk components to validate approach and technology choices.",
                duration: "4-6 weeks"
              },
              {
                phase: "Incremental Migration",
                description: "Migrate in phases with parallel run, automated testing, and rollback plans.",
                duration: "6-18 months"
              },
              {
                phase: "Optimization & Decommission",
                description: "Optimize performance, train teams, and safely decommission legacy systems.",
                duration: "1-3 months"
              }
            ].map((item, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.phase}</h3>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                <div className="text-sm text-accent font-semibold">{item.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Story</h2>
          </div>

          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-12">
              <div className="text-sm text-accent font-semibold mb-2">{caseStudy.client}</div>
              <h3 className="text-3xl font-bold mb-6">Mainframe Modernization with Zero Downtime</h3>
              
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

      {/* Common Scenarios */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Common Modernization Scenarios</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Mainframe to Cloud", desc: "Migrate COBOL/mainframe applications to modern cloud infrastructure" },
              { title: "Monolith to Microservices", desc: "Break down monolithic apps into independently deployable services" },
              { title: "Client-Server to Web/Mobile", desc: "Replace desktop apps with modern web and mobile interfaces" },
              { title: "On-Prem to SaaS", desc: "Transition from self-hosted to cloud-based SaaS model" },
              { title: "Database Modernization", desc: "Migrate from legacy databases to modern SQL/NoSQL solutions" },
              { title: "API-First Architecture", desc: "Add API layer to legacy systems for modern integrations" }
            ].map((scenario, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                  <p className="text-muted-foreground">{scenario.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Mitigate Risk</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven strategies to ensure successful modernization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Parallel Run", desc: "Run old and new systems side-by-side" },
              { title: "Automated Testing", desc: "Comprehensive test suites for regression" },
              { title: "Rollback Plans", desc: "Quick revert if issues arise" },
              { title: "Data Migration", desc: "Validated data migration with checksums" },
              { title: "Phased Rollout", desc: "Gradual user migration" },
              { title: "Training & Documentation", desc: "Prepare teams for new system" },
              { title: "Performance Monitoring", desc: "Real-time metrics and alerts" },
              { title: "Stakeholder Communication", desc: "Regular updates and demos" }
            ].map((strategy, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{strategy.title}</h3>
                <p className="text-sm text-muted-foreground">{strategy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Investment Range</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pricing varies widely based on system complexity and modernization approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { tier: "Replatforming", price: "$50K - $150K", desc: "Lift and shift to cloud with minimal changes" },
              { tier: "Refactoring", price: "$150K - $500K", desc: "Code restructuring and architecture improvements" },
              { tier: "Rearchitecting", price: "$500K+", desc: "Full microservices transformation" }
            ].map((tier, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-bold text-accent mb-4">{tier.price}</div>
                  <p className="text-muted-foreground">{tier.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize Your Legacy Systems?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's assess your current systems and create a modernization roadmap.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
            <Link href="/contact">
              Request Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
