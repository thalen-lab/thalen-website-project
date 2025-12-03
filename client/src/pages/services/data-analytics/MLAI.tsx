import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, AlertTriangle, TrendingUp, Eye } from 'lucide-react';

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
      metrics: ['$500M fraud prevented annually', '95% detection accuracy', '<2% false positive rate']
    },
    {
      title: 'Predictive Maintenance for Defense Systems',
      description: 'Aircraft downtime costs the military millions per day. We deployed ML models that analyze sensor data from engines, avionics, and structural components to predict failures 30-60 days in advance. Maintenance crews can now schedule repairs during planned downtime instead of responding to emergency failures.',
      metrics: ['35% reduction in unplanned downtime', '92% prediction accuracy', '$120M annual maintenance savings']
    },
    {
      title: 'Insider Threat Detection',
      description: 'Insider threats are the hardest security risks to detect. Thalen Technologies built an ML system for a defense agency that analyzes user behavior patterns—file access, email activity, network connections, physical access—to identify anomalies that indicate potential insider threats. The system flags high-risk users for security review without overwhelming analysts with false alarms.',
      metrics: ['12 insider threats detected', '88% detection accuracy', '90% faster investigation time']
    },
    {
      title: 'Budget Forecasting & Resource Optimization',
      description: 'Government agencies struggle with budget forecasting due to complex variables and political uncertainty. We built ML models that analyze historical spending patterns, program performance, economic indicators, and policy changes to forecast budget needs with 95% accuracy. Leadership can now make data-driven resource allocation decisions instead of relying on gut instinct.',
      metrics: ['$50M budget optimization', '95% forecast accuracy', '18-month forecast horizon']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section - Z100 Editorial Style */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container max-w-5xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-12">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-zinc-900 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/data-analytics" className="hover:text-zinc-900 transition-colors">Data Analytics</Link>
            <span>/</span>
            <span className="text-zinc-900">Predictive Analytics & ML/AI</span>
          </div>

          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-light text-zinc-900 leading-[1.1] tracking-tight">
              Predictive Analytics & ML/AI
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light max-w-4xl">
              Stop reacting to problems after they happen. Thalen Technologies deploys machine learning models and AI-powered analytics using FedRAMP and StateRAMP-authorized platforms that predict fraud, forecast failures, detect threats, and optimize operations before issues escalate. Our ML implementations are not black boxes—every prediction includes transparent reasoning, bias detection, and model governance to meet government accountability standards (federal, state, and local). From fraud detection to predictive maintenance, we turn your data into actionable foresight.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 text-base font-normal rounded-none"
                >
                  Request ML/AI Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white px-8 h-12 text-base font-normal rounded-none"
              >
                View ML Use Cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* ML Benefits - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4 tracking-tight">
            Why Machine Learning Matters for Government Operations
          </h2>
          <p className="text-xl text-zinc-600 leading-relaxed font-light mb-16 max-w-3xl">
            Traditional analytics tell you what happened. Machine learning tells you what will happen—and what to do about it.
          </p>

          <div className="space-y-12">
            {mlBenefits.map((benefit, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <benefit.icon className="h-8 w-8 text-zinc-900" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-zinc-900 mb-3">{benefit.title}</h3>
                  <p className="text-base text-zinc-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* ML Use Cases - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-16 tracking-tight">
            Machine Learning Implementation Success Stories
          </h2>

          <div className="space-y-16">
            {mlUseCases.map((useCase, index) => (
              <div key={index} className="border-l-2 border-zinc-900 pl-8">
                <h3 className="text-2xl font-light text-zinc-900 mb-4">{useCase.title}</h3>
                <p className="text-base text-zinc-600 leading-relaxed mb-6">{useCase.description}</p>
                
                <div className="flex flex-wrap gap-4">
                  {useCase.metrics.map((metric, idx) => (
                    <span key={idx} className="text-sm text-zinc-900 px-4 py-2 border border-zinc-300">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* FedRAMP ML Platforms - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-8 tracking-tight">
            FedRAMP-Authorized ML/AI Platforms
          </h2>
          
          <p className="text-base text-zinc-600 leading-relaxed mb-8">
            We deploy machine learning models using government-authorized AI platforms that meet your security and compliance requirements:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">AWS SageMaker (GovCloud)</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                End-to-end ML platform for building, training, and deploying models at scale with FedRAMP High authorization
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Azure Machine Learning Government</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Enterprise ML platform integrated with Azure Government services for seamless data access and model deployment
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">DataRobot Government</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Automated machine learning platform with explainable AI and model governance built for government compliance
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">H2O.ai</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Open-source ML platform with enterprise features for transparent, auditable model development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* ML Implementation Approach - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-12 tracking-tight">
            Our ML/AI Implementation Approach
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">1. Problem Definition & Use Case Validation</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Not every problem needs machine learning. We start by validating whether ML is the right solution, defining success metrics, and ensuring you have the data quality and volume required for accurate predictions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">2. Data Preparation & Feature Engineering</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                ML models are only as good as the data they train on. We clean, normalize, and engineer features from your raw data to maximize model accuracy while detecting and mitigating bias.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">3. Model Development & Training</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We develop and train multiple model architectures, compare performance, and select the best approach for your use case. All models include explainability features so you understand WHY predictions are made.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">4. Model Validation & Bias Testing</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Before deployment, we rigorously test models for accuracy, bias, and fairness. Government ML systems must meet accountability standards—we ensure your models pass scrutiny.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">5. Deployment & Model Governance</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We deploy models into production with monitoring, governance, and retraining pipelines. Models degrade over time—we ensure yours stay accurate and compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Explainable AI & Model Governance - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-8 tracking-tight">
            Explainable AI & Model Governance
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed mb-8">
            Government agencies cannot deploy black-box ML models that make decisions without explanation. We implement explainable AI (XAI) techniques that provide transparent reasoning for every prediction:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Feature Importance Analysis</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Understand which data features drive model predictions and ensure they align with domain expertise
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">SHAP (SHapley Additive exPlanations)</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Quantify the contribution of each feature to individual predictions for audit and accountability
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Bias Detection & Mitigation</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Test models for demographic bias and implement fairness constraints to ensure equitable outcomes
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Model Governance Framework</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Document model development, validation, deployment, and monitoring for regulatory compliance and audit trails
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* CTA Section - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 tracking-tight">
              Ready to Deploy Predictive Analytics?
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-light max-w-3xl">
              Let's discuss your ML/AI requirements and how we can help you implement FedRAMP-authorized platforms that deliver actionable predictions with transparent, explainable reasoning.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 text-base font-normal rounded-none"
                >
                  Request ML/AI Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
