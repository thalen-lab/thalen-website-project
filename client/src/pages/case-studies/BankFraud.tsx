import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, CheckCircle2, Shield, DollarSign, AlertTriangle } from 'lucide-react';
import { Link } from 'wouter';

export default function BankFraud() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Financial Services Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Fraud Detection: $45M in Prevented Losses
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Real-time ML fraud detection reduced false positives by 80% while preventing $45M in fraudulent transactions annually.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              <Download className="mr-2 h-5 w-5" />
              Download Full Case Study (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '$45M', label: 'Fraud Prevented', icon: DollarSign },
              { value: '80%', label: 'False Positive Reduction', icon: CheckCircle2 },
              { value: '98.5%', label: 'Detection Accuracy', icon: Shield },
              { value: '<100ms', label: 'Detection Latency', icon: AlertTriangle }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              A top-10 U.S. bank processing 500M+ transactions annually faced escalating fraud losses ($60M+ annually) and customer friction from rule-based fraud detection generating 35% false positive rates. The bank needed a modern fraud detection system balancing security and customer experience.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              NexDyne designed and deployed an AI-powered fraud detection platform using advanced machine learning and behavioral analytics, reducing fraud losses by 75% ($45M prevented annually) while cutting false positives by 80% and improving customer satisfaction scores by 28 points.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Escalating Fraud Losses',
                description: '$60M+ annual fraud losses with increasing sophistication of fraud attacks including synthetic identity fraud and account takeover.'
              },
              {
                title: 'High False Positive Rates',
                description: '35% false positive rate from rule-based systems causing customer friction, declined legitimate transactions, and operational costs.'
              },
              {
                title: 'Real-Time Detection Requirements',
                description: 'Need for sub-100ms fraud detection on 500M+ annual transactions without impacting customer experience or transaction throughput.'
              },
              {
                title: 'Regulatory Compliance',
                description: 'Strict regulatory requirements for model explainability, audit trails, and fair lending compliance across all fraud decisions.'
              }
            ].map((challenge, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Our Solution</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Multi-Model ML Architecture',
                description: 'Built ensemble of specialized ML models (gradient boosting, neural networks, graph analytics) each optimized for specific fraud types with model stacking for final decisions.'
              },
              {
                title: 'Behavioral Analytics Engine',
                description: 'Developed behavioral profiling system analyzing 200+ features per transaction including device fingerprinting, geolocation patterns, and transaction velocity.'
              },
              {
                title: 'Real-Time Scoring Infrastructure',
                description: 'Deployed high-performance scoring infrastructure processing 15,000+ transactions per second with sub-100ms latency using distributed computing.'
              },
              {
                title: 'Explainable AI Framework',
                description: 'Implemented SHAP-based model explainability providing human-readable fraud reasons for every decision, meeting regulatory requirements.'
              },
              {
                title: 'Continuous Learning Pipeline',
                description: 'Built automated retraining pipeline incorporating new fraud patterns weekly, maintaining model accuracy as fraud tactics evolve.'
              },
              {
                title: 'Fraud Analyst Workbench',
                description: 'Created investigator tools with case management, network visualization, and automated evidence gathering reducing investigation time by 60%.'
              }
            ].map((solution, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-accent/10">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Measurable Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { metric: '$45M', label: 'Fraud Prevented', detail: '75% reduction in fraud losses' },
              { metric: '80%', label: 'False Positive Reduction', detail: 'From 35% to 7% false positive rate' },
              { metric: '98.5%', label: 'Detection Accuracy', detail: 'Across all fraud types' },
              { metric: '<100ms', label: 'Detection Latency', detail: 'Real-time scoring performance' },
              { metric: '+28pts', label: 'Customer Satisfaction', detail: 'Reduced friction from false declines' },
              { metric: '60%', label: 'Investigation Time Reduction', detail: 'Analyst productivity improvement' }
            ].map((result, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{result.metric}</div>
                  <div className="text-lg font-semibold mb-1">{result.label}</div>
                  <div className="text-sm text-muted-foreground">{result.detail}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12">
              <div className="text-6xl text-accent mb-6">"</div>
              <blockquote className="text-2xl font-medium mb-8">
                NexDyne's AI fraud detection platform delivered results beyond our expectations. The $45M in prevented fraud is significant, but the 80% reduction in false positives has transformed our customer experience. Our fraud analysts now focus on sophisticated cases instead of reviewing false alarms, and customer satisfaction has never been higher.
              </blockquote>
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl mr-4">
                  RP
                </div>
                <div>
                  <div className="font-bold text-lg">Robert Patterson</div>
                  <div className="text-primary-foreground/80">Chief Risk Officer</div>
                  <div className="text-sm text-primary-foreground/60">Top-10 U.S. Bank</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Technologies & Methodologies</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Python',
              'TensorFlow',
              'XGBoost',
              'LightGBM',
              'Apache Kafka',
              'Apache Spark',
              'Redis',
              'Neo4j',
              'AWS SageMaker',
              'SHAP',
              'Feature Engineering',
              'Ensemble Methods',
              'Graph Analytics',
              'MLOps',
              'Agile/Scrum'
            ].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Protect Your Institution from Fraud</h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how NexDyne's AI fraud detection solutions can reduce losses while improving customer experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Fraud Risk Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
