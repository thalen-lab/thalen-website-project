import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

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
      title: 'AI-Powered Fraud Detection',
      description: 'Our machine learning models analyze transaction patterns, user behavior, and network relationships in real-time to detect fraud with 99.9% accuracy while reducing false positives by 90%. The system processes 50M+ daily transactions with sub-100ms latency, enabling instant fraud blocking without impacting legitimate customer transactions. Adaptive models continuously learn from new fraud patterns and investigator feedback to stay ahead of evolving threats.'
    },
    {
      title: 'Automated Compliance & Risk Management',
      description: 'We implement comprehensive RegTech solutions that automate AML transaction monitoring, KYC verification, sanctions screening, and regulatory reporting across multiple jurisdictions. Our platforms integrate with core banking systems to provide real-time compliance monitoring and automated suspicious activity report (SAR) generation. Clients reduce compliance costs by 60% while improving regulatory audit outcomes and reducing false positive alerts by 85%.'
    },
    {
      title: 'Zero-Trust Security Architecture',
      description: 'Our security implementations exceed financial industry standards including PCI-DSS, SOC 2 Type II, and ISO 27001 with defense-in-depth strategies that protect customer data and financial transactions. We deploy multi-factor authentication, encryption at rest and in transit, micro-segmentation, and continuous threat monitoring. Every solution includes penetration testing, vulnerability management, and incident response planning to maintain the highest security posture.'
    },
    {
      title: 'Real-Time Risk Analytics & Portfolio Optimization',
      description: 'Our advanced analytics platforms provide real-time risk scoring, credit decisioning, and portfolio optimization using machine learning models trained on historical performance data. These systems enable instant loan approvals, dynamic pricing strategies, and proactive risk mitigation. Financial institutions achieve 40% faster loan processing, 25% improvement in portfolio performance, and enhanced regulatory capital efficiency through better risk quantification.'
    }
  ];

  const benefits = [
    { title: 'Fraud Detection', desc: '99.9% accuracy processing 50M+ daily transactions with real-time blocking and 90% reduction in false positives' },
    { title: 'Compliance Automation', desc: 'SOC 2, PCI-DSS, and regulatory reporting automation reducing compliance costs by 60% while improving audit outcomes' },
    { title: 'Risk Analytics', desc: 'Real-time risk scoring and portfolio optimization enabling instant decisions with 40% faster loan processing' },
    { title: 'Cybersecurity', desc: 'Zero-trust architecture with multi-layer defense protecting customer data and financial transactions 24/7' },
    { title: 'AML & KYC', desc: 'Automated transaction monitoring and identity verification reducing false positives by 85% while maintaining compliance' },
    { title: 'Customer Experience', desc: 'Seamless digital banking with instant approvals and personalized financial advice powered by AI' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        <section className="relative py-24 text-white bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85">
          <div className="absolute inset-0 bg-[url('/img/pattern.svg')] bg-center opacity-10"></div>
          <div className="container relative">
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
              <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Financial Innovation</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Financial Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Real-time fraud detection, regulatory compliance automation, and AI-powered risk analytics for banks, insurance, and fintech companies. Secure financial innovation that balances customer experience with regulatory requirements and operational efficiency.
              </p>
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Schedule Financial Services Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[oklch(0.97_0.01_250)]">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-2">50M+</div>
                <div className="text-sm text-slate-600">Daily Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-2">99.9%</div>
                <div className="text-sm text-slate-600">Fraud Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-2">60%</div>
                <div className="text-sm text-slate-600">Compliance Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-2">100%</div>
                <div className="text-sm text-slate-600">PCI-DSS Compliant</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Outcomes</p>
              <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Financial Services Transformation</h2>
              <p className="text-xl text-slate-600">
                Measurable improvements in fraud prevention, regulatory compliance, operational efficiency, and customer experience through AI-powered automation and advanced analytics.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Card className="text-center bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[oklch(0.97_0.01_250)]">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Challenges</p>
              <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Industry Hurdles We Overcome</h2>
              <p className="text-xl text-slate-600">
                Financial institutions face complex regulatory, security, and operational challenges that require specialized expertise in both financial services and advanced technology.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[oklch(0.20_0.05_250)]">{challenge.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Solutions</p>
              <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Our Financial Services Offerings</h2>
              <p className="text-xl text-slate-600">
                Comprehensive RegTech and FinTech solutions for banks, insurance companies, and payment processors with proven ROI and regulatory compliance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {solutions.map((solution, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{solution.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{solution.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[oklch(0.22_0.06_250)] text-white py-20">
          <div className="container text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Modernize Your Financial Systems?</h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss how Nexdyne can help you navigate the complexities of digital transformation in the financial sector. Schedule a complimentary assessment with our experts today.
            </p>
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Contact Our Financial Tech Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
