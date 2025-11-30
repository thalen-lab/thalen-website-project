import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import { ArrowRight, Brain, AlertTriangle, TrendingUp, Shield, Eye, Zap, Database, Bot } from 'lucide-react';

export default function MLAI() {
  const mlBenefits = [
    {
      icon: AlertTriangle,
      title: 'Fraud Detection & Prevention',
      description: 'Identify fraudulent benefits claims, procurement fraud, and financial anomalies before payments are issued. ML models analyze patterns across millions of transactions to flag suspicious activity for investigator review.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Maintenance',
      description: 'Prevent equipment failures before they happen. ML models analyze sensor data from aircraft, vehicles, and critical infrastructure to predict failures weeks in advance—reducing downtime and saving millions in emergency repairs.'
    },
    {
      icon: Eye,
      title: 'Threat Intelligence & Cyber Defense',
      description: 'Detect cyber threats and insider risks in real-time. ML-powered anomaly detection identifies unusual network behavior, unauthorized access attempts, and data exfiltration before damage occurs.'
    }
  ];

  const mlUseCases = [
    {
      title: 'Benefits Fraud Detection',
      description: 'Federal benefits programs lose billions to fraudulent claims annually. Thalen Technologies built an ML-powered fraud detection system for a major benefits agency that analyzes claim patterns, applicant behavior, and third-party data to flag suspicious claims before payment. The system reduced fraud losses by 40% while maintaining a 95% accuracy rate to avoid false positives that delay legitimate claims.',
      impact: '$500M fraud prevented annually',
      accuracy: '95% detection accuracy',
      falsePositives: '<2% false positive rate'
    },
    {
      title: 'Predictive Maintenance for Defense Systems',
      description: 'Aircraft downtime costs the military millions per day. We deployed ML models that analyze sensor data from engines, avionics, and structural components to predict failures 30-60 days in advance. Maintenance crews can now schedule repairs during planned downtime instead of responding to emergency failures.',
      impact: '35% reduction in unplanned downtime',
      accuracy: '92% prediction accuracy',
      savings: '$120M annual maintenance savings'
    },
    {
      title: 'Insider Threat Detection',
      description: 'Insider threats are the hardest security risks to detect. Thalen Technologies built an ML system for a defense agency that analyzes user behavior patterns—file access, email activity, network connections, physical access—to identify anomalies that indicate potential insider threats. The system flags high-risk users for security review without overwhelming analysts with false alarms.',
      impact: '12 insider threats detected',
      accuracy: '88% detection accuracy',
      response: '90% faster investigation time'
    },
    {
      title: 'Budget Forecasting & Resource Optimization',
      description: 'Federal agencies struggle with budget forecasting due to complex variables and political uncertainty. We built ML models that analyze historical spending patterns, program performance, economic indicators, and policy changes to forecast budget needs with 95% accuracy. Leadership can now make data-driven resource allocation decisions instead of relying on gut instinct.',
      impact: '$50M budget optimization',
      accuracy: '95% forecast accuracy',
      planning: '18-month forecast horizon'
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
            <span>Predictive Analytics & ML/AI</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-semibold mb-4">
              AI-Powered Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Predictive Analytics & ML/AI
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Stop reacting to problems after they happen. Thalen Technologies deploys machine learning models and AI-powered analytics that predict fraud, forecast failures, detect threats, and optimize operations before issues escalate. Our ML implementations are not black boxes—every prediction includes transparent reasoning, bias detection, and model governance to meet federal accountability standards. From fraud detection to predictive maintenance, we turn your data into actionable foresight.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Request ML Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View ML Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ML Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Federal Agencies Need Predictive Analytics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reactive analytics tell you what happened. Predictive analytics tell you what will happen—giving you time to prevent problems before they occur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mlBenefits.map((benefit, index) => (
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

      {/* The ML Problem */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Black-Box AI Is Not Acceptable for Government</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Commercial ML platforms are optimized for marketing and sales predictions where mistakes are tolerable. Federal applications—fraud detection, threat assessment, benefits eligibility—require explainability, bias detection, and accountability. You cannot tell Congress "the algorithm decided" when a decision is challenged.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Thalen Technologies builds explainable AI systems where every prediction includes transparent reasoning. Our ML implementations include bias detection, fairness metrics, model governance, and full audit trails. You will understand not just what the model predicts, but why—and you will have documentation to defend decisions under congressional oversight and IG audits.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold mb-1">Explainable AI (XAI)</div>
                    <div className="text-sm text-muted-foreground">SHAP, LIME, and attention mechanisms provide transparent reasoning for every prediction</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold mb-1">Bias Detection & Fairness</div>
                    <div className="text-sm text-muted-foreground">Continuous monitoring for demographic bias, disparate impact, and fairness metrics</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold mb-1">Model Governance & Audit Trails</div>
                    <div className="text-sm text-muted-foreground">Full lineage tracking, version control, and audit logs for regulatory compliance</div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ML Use Cases */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven ML/AI Use Cases for Federal Agencies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thalen Technologies has deployed production ML systems for fraud detection, predictive maintenance, threat intelligence, and operational optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mlUseCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="grid grid-cols-3 gap-4 bg-secondary rounded-lg p-4">
                    <div>
                      <div className="text-2xl font-bold text-accent">{useCase.impact}</div>
                      <div className="text-xs text-muted-foreground">Business Impact</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">{useCase.accuracy}</div>
                      <div className="text-xs text-muted-foreground">Model Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">{useCase.falsePositives || useCase.savings || useCase.response || useCase.planning}</div>
                      <div className="text-xs text-muted-foreground">Additional Metric</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ML Technology Stack */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ML/AI Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use proven, government-approved ML frameworks and tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">ML Frameworks</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>TensorFlow & PyTorch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Scikit-learn for classical ML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>XGBoost & LightGBM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Hugging Face Transformers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Explainability & Governance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>SHAP for feature importance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>LIME for local explanations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>MLflow for model tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Fairlearn for bias detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Deployment & Monitoring</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Kubernetes for model serving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>TensorFlow Serving & TorchServe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Prometheus for model monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    <span>Evidently AI for drift detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-navy-gradient text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">95%+</div>
                  <div className="text-sm opacity-80">Model accuracy</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">&lt;2%</div>
                  <div className="text-sm opacity-80">False positive rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-80">Explainable predictions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-80">Model monitoring</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complementary Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Maximize your ML/AI impact with these related Thalen Technologies offerings
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Intelligent Automation & Process Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Embed ML predictions into automated workflows. Our RPA solutions can trigger actions based on model outputs, creating closed-loop intelligent automation systems.
                </p>
                <Link href="/services/automation">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Application Development & Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Build ML-powered applications that serve predictions to end users. We develop APIs, web apps, and mobile interfaces that make your models accessible and actionable.
                </p>
                <Link href="/services/app-development">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Deploy Predictive Analytics for Your Mission?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free ML assessment. We will evaluate your data, identify high-impact ML use cases, and provide a roadmap for implementation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request ML Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download ML Guide
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Data Engineering & Infrastructure',
            description: 'Build scalable data pipelines that power your machine learning models.',
            href: '/services/data-analytics/engineering',
            icon: Database
          },
          {
            title: 'Predictive Analytics & Forecasting',
            description: 'Apply ML models to predict outcomes, forecast trends, and optimize operations.',
            href: '/services/predictive-analytics',
            icon: TrendingUp
          },
          {
            title: 'Intelligent Automation',
            description: 'Integrate AI models into automated workflows for intelligent decision-making.',
            href: '/services/automation',
            icon: Bot
          }
        ]}
        title="Complete AI/ML Solutions"
        description="Combine machine learning with data engineering, analytics, and automation for end-to-end AI capabilities."
      />

      <Footer />
    </div>
  );
}
