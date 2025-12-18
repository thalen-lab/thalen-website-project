import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, DollarSign, Shield, Brain, Lock, TrendingUp, FileCheck, AlertTriangle, Users } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function Financial() {
  const challenges = [
    {
      title: 'Fraud Detection & Financial Crime',
      description: 'Financial institutions lose billions annually to fraud, money laundering, and cybercrime. Traditional rule-based systems generate excessive false positives that overwhelm investigation teams while sophisticated attacks slip through undetected. Real-time fraud detection with machine learning is essential to identify complex patterns across millions of daily transactions while minimizing customer friction.'
    },
    {
      title: 'Regulatory Compliance & Reporting',
      description: 'Banks and financial institutions face an ever-expanding web of regulations including Dodd-Frank, Basel III, MiFID II, GDPR, and AML requirements. Manual compliance processes are expensive, error-prone, and struggle to keep pace with regulatory changes. Automated compliance monitoring and reporting systems are critical to reduce risk, lower costs, and demonstrate regulatory adherence.'
    },
    {
      title: 'Legacy System Modernization',
      description: 'Core banking systems running on mainframes and COBOL create operational bottlenecks, limit digital innovation, and increase cybersecurity risks. These legacy platforms are expensive to maintain, difficult to integrate with modern fintech solutions, and lack the agility required for competitive digital banking experiences. Modernization must occur without disrupting 24/7 financial operations.'
    },
    {
      title: 'Customer Experience & Digital Banking',
      description: 'Customers expect seamless omnichannel banking experiences with instant account access, real-time payments, and personalized financial advice. Legacy systems and siloed data prevent banks from delivering modern digital experiences that match fintech competitors. AI-powered personalization and real-time decisioning are essential to retain customers and grow market share.'
    }
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'AI-Powered Fraud Detection',
      description: 'Our machine learning models analyze transaction patterns, user behavior, and network relationships in real-time to detect fraud with 99.9% accuracy while reducing false positives by 90%. The system processes 50M+ daily transactions with sub-100ms latency, enabling instant fraud blocking without impacting legitimate customer transactions. Adaptive models continuously learn from new fraud patterns and investigator feedback to stay ahead of evolving threats.'
    },
    {
      icon: Shield,
      title: 'Automated Compliance & Risk Management',
      description: 'We implement comprehensive RegTech solutions that automate AML transaction monitoring, KYC verification, sanctions screening, and regulatory reporting across multiple jurisdictions. Our platforms integrate with core banking systems to provide real-time compliance monitoring and automated suspicious activity report (SAR) generation. Clients reduce compliance costs by 60% while improving regulatory audit outcomes and reducing false positive alerts by 85%.'
    },
    {
      icon: Lock,
      title: 'Zero-Trust Security Architecture',
      description: 'Our security implementations exceed financial industry standards including PCI-DSS, SOC 2 Type II, and ISO 27001 with defense-in-depth strategies that protect customer data and financial transactions. We deploy multi-factor authentication, encryption at rest and in transit, micro-segmentation, and continuous threat monitoring. Every solution includes penetration testing, vulnerability management, and incident response planning to maintain the highest security posture.'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Risk Analytics & Portfolio Optimization',
      description: 'Our advanced analytics platforms provide real-time risk scoring, credit decisioning, and portfolio optimization using machine learning models trained on historical performance data. These systems enable instant loan approvals, dynamic pricing strategies, and proactive risk mitigation. Financial institutions achieve 40% faster loan processing, 25% improvement in portfolio performance, and enhanced regulatory capital efficiency through better risk quantification.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Industries' },
                { label: 'Financial Services' }
              ]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Financial Innovation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Financial Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Real-time fraud detection, regulatory compliance automation, and AI-powered risk analytics for banks, insurance, and fintech companies. Secure financial innovation that balances customer experience with regulatory requirements and operational efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Financial Services Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Financial Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Stats */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">Daily Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Fraud Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Compliance Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">PCI-DSS Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Financial Services Transformation Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements in fraud prevention, regulatory compliance, operational efficiency, and customer experience through AI-powered automation and advanced analytics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: 'Fraud Detection', desc: '99.9% accuracy processing 50M+ daily transactions with real-time blocking and 90% reduction in false positives' },
              { icon: Shield, title: 'Compliance Automation', desc: 'SOC 2, PCI-DSS, and regulatory reporting automation reducing compliance costs by 60% while improving audit outcomes' },
              { icon: DollarSign, title: 'Risk Analytics', desc: 'Real-time risk scoring and portfolio optimization enabling instant decisions with 40% faster loan processing' },
              { icon: Lock, title: 'Cybersecurity', desc: 'Zero-trust architecture with multi-layer defense protecting customer data and financial transactions 24/7' },
              { icon: FileCheck, title: 'AML & KYC', desc: 'Automated transaction monitoring and identity verification reducing false positives by 85% while maintaining compliance' },
              { icon: Users, title: 'Customer Experience', desc: 'Seamless digital banking with instant approvals and personalized financial advice powered by AI' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <item.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Challenges */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Financial Services Challenges We Solve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Financial institutions face complex regulatory, security, and operational challenges that require specialized expertise in both financial services and advanced technology implementation to maintain competitive advantage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-accent">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Financial Services Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive RegTech and FinTech solutions designed specifically for banks, insurance companies, payment processors, and financial services firms with proven ROI and regulatory compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <solution.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Financial Services Success Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world results demonstrating the significant impact of AI-powered fraud detection and risk analytics in large-scale financial operations.
            </p>
          </div>
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary text-primary-foreground p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-accent mb-2">Featured Success</div>
                  <h3 className="text-3xl font-bold mb-4">Bank Achieves Real-Time Fraud Detection at Scale</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    AI-powered fraud detection processing 50M+ daily transactions with 99.9% accuracy and 90% reduction in false positives.
                  </p>
                  <p className="text-primary-foreground/90 mb-6">
                    This regional bank with 5M+ customers struggled with legacy fraud detection systems that generated thousands of false positives daily while missing sophisticated fraud patterns. Our team implemented a machine learning platform that analyzes transaction patterns, device fingerprints, and behavioral biometrics in real-time. The system integrates with core banking platforms and card networks to block fraudulent transactions within milliseconds while maintaining seamless customer experience. Results exceeded expectations with $25M in prevented fraud losses and 90% reduction in false positive alerts.
                  </p>
                  <Button className="bg-orange-gradient hover:opacity-90 w-fit">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-accent mb-2">50M+</div>
                    <div className="text-lg text-muted-foreground mb-8">Daily Transactions</div>
                    <div className="grid grid-cols-2 gap-6 text-left">
                      <div>
                        <div className="text-3xl font-bold text-accent">99.9%</div>
                        <div className="text-sm text-muted-foreground">Detection Accuracy</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">$25M</div>
                        <div className="text-sm text-muted-foreground">Fraud Prevented</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">90%</div>
                        <div className="text-sm text-muted-foreground">Fewer False Positives</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">&lt;100ms</div>
                        <div className="text-sm text-muted-foreground">Decision Latency</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Secure Financial Innovation</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a financial services automation assessment with our RegTech and FinTech experts. We'll analyze your fraud detection, compliance, and risk management needs, and provide a detailed ROI projection tailored to your institution's specific regulatory and operational requirements.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Financial Services Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
