import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, TrendingUp, Shield, DollarSign, Clock, Users, Database, Zap } from 'lucide-react';

export default function StateAttorneyGeneralCaseStudy() {
  const metrics = [
    { icon: DollarSign, value: '$50M+', label: 'Annual Fraud Prevented' },
    { icon: Database, value: '10M+', label: 'Daily Transactions Analyzed' },
    { icon: Zap, value: '<100ms', label: 'Real-Time Detection Latency' },
    { icon: TrendingUp, value: '94%', label: 'Fraud Detection Accuracy' }
  ];

  const challenges = [
    'Legacy fraud detection system processing only 2% of transactions with 48-hour delay',
    'CJIS compliance requirements for criminal justice data integration',
    'Need for real-time machine learning analytics on sensitive financial data',
    'Integration with 8 state agencies and 12 financial institutions',
    'State data privacy law compliance (state equivalent of CCPA)',
    'Limited IT budget and 9-month implementation timeline'
  ];

  const solutions = [
    {
      title: 'CJIS-Compliant Cloud Infrastructure',
      description: 'Deployed StateRAMP-authorized cloud platform with CJIS Security Policy controls including encrypted data at rest/transit, multi-factor authentication, and audit logging meeting FBI requirements.'
    },
    {
      title: 'Real-Time ML Fraud Detection Engine',
      description: 'Implemented machine learning models analyzing 10M+ daily transactions with sub-100ms latency, detecting patterns across unemployment insurance, Medicaid, tax refunds, and vendor payments.'
    },
    {
      title: 'Secure Multi-Agency Data Integration',
      description: 'Integrated data feeds from Department of Labor, Health Services, Revenue, and 12 financial institutions with role-based access controls and data masking for PII protection.'
    },
    {
      title: 'Compliance-First Architecture',
      description: 'Built comprehensive compliance framework addressing CJIS, StateRAMP, state data privacy laws, and criminal justice information sharing policies with full audit trails.'
    }
  ];

  const outcomes = [
    {
      title: 'Massive Fraud Prevention',
      value: '$50M+ annually',
      description: 'Prevented over $50 million in fraudulent payments in first year of operation, with ROI achieved in 4.2 months.'
    },
    {
      title: 'Real-Time Detection',
      value: '100% coverage',
      description: 'Increased transaction analysis from 2% to 100% with real-time detection replacing 48-hour batch processing delays.'
    },
    {
      title: 'High Accuracy',
      value: '94% precision',
      description: 'Achieved 94% fraud detection accuracy with only 3% false positive rate, reducing manual investigation workload by 85%.'
    },
    {
      title: 'Rapid Deployment',
      value: '8.5 months',
      description: 'Completed full implementation in 8.5 months including CJIS compliance validation, under original 9-month timeline and budget.'
    }
  ];

  const technologies = [
    'AWS GovCloud (StateRAMP-authorized)',
    'Apache Kafka for real-time streaming',
    'TensorFlow for ML model development',
    'Amazon SageMaker Gov for model deployment',
    'PostgreSQL with encryption at rest',
    'Tableau Gov for fraud analytics dashboards',
    'CJIS-compliant identity management',
    'Splunk for security monitoring'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              State Government Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              State Attorney General: CJIS-Compliant Fraud Detection System
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              How a state Attorney General's office prevented $50M+ in annual fraud with a CJIS-compliant real-time ML analytics platform processing 10M+ daily transactions across multiple state agencies.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">State Government</span>
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">CJIS Compliance</span>
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">Machine Learning</span>
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm">Fraud Detection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="border-2 text-center">
                <CardContent className="p-8">
                  <metric.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">{metric.value}</div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">The Challenge</h2>
            <p className="text-xl text-muted-foreground">
              The state Attorney General's Financial Crimes Division was losing tens of millions annually to sophisticated fraud schemes targeting unemployment insurance, Medicaid, tax refunds, and vendor payments. Their legacy batch-processing system could only analyze 2% of transactions with a 48-hour delay, allowing fraudsters to exploit the detection gap.
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Key Challenges</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start">
                    <Shield className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Solution</h2>
            <p className="text-xl text-muted-foreground">
              Thalen Technologies designed and implemented a CJIS-compliant, StateRAMP-authorized real-time fraud detection platform with machine learning analytics, multi-agency data integration, and comprehensive compliance controls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <CheckCircle2 className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Implementation Approach</h2>
          
          <div className="space-y-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">CJIS Compliance Assessment (Weeks 1-2)</h3>
                    <p className="text-muted-foreground mb-4">
                      Conducted comprehensive CJIS Security Policy gap analysis, documented security controls, completed background checks for all project personnel, and established CJIS-compliant development environment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">CJIS Gap Analysis</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Background Checks</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Security Controls</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data Integration & ML Model Development (Weeks 3-16)</h3>
                    <p className="text-muted-foreground mb-4">
                      Built secure data pipelines from 8 state agencies and 12 financial institutions, developed ML fraud detection models using historical data, and implemented real-time streaming analytics with sub-100ms latency.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Data Integration</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">ML Model Training</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Real-Time Streaming</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Platform Deployment & CJIS Validation (Weeks 17-30)</h3>
                    <p className="text-muted-foreground mb-4">
                      Deployed StateRAMP-authorized cloud infrastructure, conducted CJIS compliance validation with state CISO, performed penetration testing, and completed user acceptance testing with fraud investigators.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Cloud Deployment</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">CJIS Validation</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Penetration Testing</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Training & Production Launch (Weeks 31-36)</h3>
                    <p className="text-muted-foreground mb-4">
                      Trained 45 fraud investigators and analysts on the new platform, established 24/7 monitoring and support processes, and launched production system processing 10M+ daily transactions with continuous ML model refinement.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">User Training</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">24/7 Monitoring</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Production Launch</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Outcomes & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <TrendingUp className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">{outcome.title}</h3>
                  <div className="text-3xl font-bold text-accent mb-3">{outcome.value}</div>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Technologies & Platforms</h2>
          
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <div className="text-6xl mb-6">"</div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-8 italic">
            Thalen Technologies delivered a game-changing fraud detection system that's already saved taxpayers over $50 million. Their deep understanding of CJIS compliance requirements and ability to implement sophisticated ML analytics on a tight timeline was exceptional. This platform has transformed how we protect state programs from fraud.
          </blockquote>
          <div className="font-semibold text-xl">Chief Deputy Attorney General</div>
          <div className="text-accent">Financial Crimes Division</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your State Agency?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn how Thalen Technologies can help your state or local government agency implement CJIS-compliant, StateRAMP-authorized solutions with proven results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule State/Local Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/federal-solutions/state-local">
              <Button size="lg" variant="outline">
                View State/Local Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
