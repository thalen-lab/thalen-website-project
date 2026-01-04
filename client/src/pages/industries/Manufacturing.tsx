import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';

export default function Manufacturing() {
  const challenges = [
    {
      title: 'Unplanned Downtime & Equipment Failures',
      description: 'Manufacturing facilities lose an average of $260,000 per hour during unplanned downtime. Traditional reactive maintenance approaches result in catastrophic equipment failures, production delays, and missed delivery commitments. The lack of real-time equipment health monitoring creates uncertainty in production planning and increases maintenance costs by up to 40%.'
    },
    {
      title: 'Supply Chain Visibility & Optimization',
      description: 'Complex global supply chains with hundreds of suppliers create visibility gaps that lead to inventory shortages, excess stock, and production disruptions. Manufacturers struggle to balance just-in-time delivery with supply chain resilience, especially during disruptions. Real-time tracking and predictive analytics are essential for optimizing inventory levels and supplier performance.'
    },
    {
      title: 'Quality Control & Defect Prevention',
      description: 'Manual quality inspection processes are slow, inconsistent, and fail to detect defects until late in production. This results in scrap costs, rework expenses, and customer returns that impact profitability and brand reputation. Computer vision and AI-powered quality systems can detect defects in real-time with 99.9% accuracy, preventing costly downstream issues.'
    },
    {
      title: 'Operational Efficiency & OEE Optimization',
      description: 'Most manufacturing facilities operate at 60-70% Overall Equipment Effectiveness (OEE) due to inefficiencies in availability, performance, and quality. Lack of real-time visibility into production metrics prevents rapid problem identification and continuous improvement. Digital transformation is essential to achieve comprehensive OEE targets above 85%.'
    }
  ];

  const solutions = [
    {
      title: 'Predictive Maintenance & Asset Optimization',
      description: 'We deploy IoT sensor networks and machine learning models that predict equipment failures 2-4 weeks before they occur, enabling proactive maintenance scheduling during planned downtime. Our predictive maintenance solutions analyze vibration, temperature, pressure, and acoustic data in real-time to identify anomalies and degradation patterns. Clients achieve 75% reduction in unplanned downtime, 40% lower maintenance costs, and 25% extension in equipment lifespan.'
    },
    {
      title: 'Digital Twin & Process Simulation',
      description: 'Our digital twin implementations create virtual replicas of production lines that enable real-time monitoring, what-if scenario testing, and process optimization without disrupting operations. These physics-based simulations integrate with MES, SCADA, and ERP systems to provide comprehensive operational visibility. Manufacturers use digital twins to optimize changeover times, test new production schedules, and train operators in virtual environments before physical implementation.'
    },
    {
      title: 'Real-Time OEE Monitoring & Analytics',
      description: 'We implement comprehensive OEE monitoring systems that track availability, performance, and quality metrics in real-time across all production assets. Automated data collection from PLCs, sensors, and vision systems eliminates manual data entry errors and provides instant visibility into production losses. Our analytics platforms identify root causes of inefficiency and deliver actionable insights that drive continuous improvement initiatives.'
    },
    {
      title: 'Supply Chain Intelligence & Optimization',
      description: 'Our supply chain analytics platforms integrate data from suppliers, logistics providers, and internal systems to provide end-to-end visibility and predictive insights. Machine learning models forecast demand, optimize inventory levels, and identify supply chain risks before they impact production. Clients achieve 30% reduction in inventory carrying costs, 95% on-time delivery performance, and improved supplier collaboration through shared visibility.'
    }
  ];

  const benefits = [
    { title: 'Digital Twin', desc: '35% efficiency gains through real-time simulation and virtual commissioning of production processes' },
    { title: 'Predictive Maintenance', desc: '75% reduction in unplanned downtime by predicting equipment failures 2-4 weeks in advance' },
    { title: 'OEE Optimization', desc: '99.2% average equipment effectiveness through real-time monitoring and continuous improvement' },
    { title: 'Smart Manufacturing', desc: 'IoT sensor networks providing real-time visibility into all production assets and processes' },
    { title: 'Process Automation', desc: 'Automated quality control and material handling reducing labor costs by 40% while improving consistency' },
    { title: 'Supply Chain Intelligence', desc: '30% inventory reduction through demand forecasting and optimized procurement strategies' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      <main>
        <section className="relative pt-24 pb-16 text-white">
          <div aria-hidden="true" className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
          <div aria-hidden="true" className="absolute inset-0 bg-[url(/assets/patterns/hero-pattern.svg)] bg-repeat"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl">
              <Breadcrumb items={[{ label: 'Industries' }, { label: 'Manufacturing' }]} />
              <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mt-8 mb-4">Industrial Excellence</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Manufacturing & Energy
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
                IoT-enabled predictive maintenance and digital twin solutions that maximize uptime and operational efficiency across industrial facilities. Transform operations with Industry 4.0 technologies that deliver measurable improvements in OEE, quality, and profitability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Schedule Industrial Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[oklch(0.97_0.01_250)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">99.2%</div>
                <div className="text-sm text-slate-600">Average Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">75%</div>
                <div className="text-sm text-slate-600">Downtime Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">35%</div>
                <div className="text-sm text-slate-600">Efficiency Gains</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">50+</div>
                <div className="text-sm text-slate-600">Facilities Optimized</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Key Benefits</p>
              <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Industrial Transformation Outcomes</h2>
              <p className="text-xl text-slate-600">
                Measurable improvements in equipment effectiveness, production efficiency, and operational costs through Industry 4.0 technologies and advanced analytics.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((item, index) => (
                <motion.div key={index} whileHover={{ y: -5 }}>
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[oklch(0.97_0.01_250)]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Challenges</p>
              <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Manufacturing Challenges We Solve</h2>
              <p className="text-xl text-slate-600">
                Industrial manufacturers face complex operational challenges that require specialized expertise in both manufacturing processes and advanced technology implementation to achieve comprehensive performance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {challenges.map((challenge, index) => (
                <motion.div key={index} whileHover={{ y: -5 }}>
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Solutions</p>
              <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Our Manufacturing Solutions</h2>
              <p className="text-xl text-slate-600">
                Comprehensive Industry 4.0 solutions designed specifically for discrete and process manufacturing, energy production, and industrial operations with proven ROI and rapid deployment.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {solutions.map((solution, index) => (
                <motion.div key={index} whileHover={{ y: -5 }}>
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
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

        <section className="py-20 bg-[oklch(0.97_0.01_250)]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Success Story</p>
              <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Manufacturing Success Story</h2>
              <p className="text-xl text-slate-600">
                Real-world results demonstrating the significant impact of predictive maintenance and Industry 4.0 technologies in large-scale manufacturing operations.
              </p>
            </div>
            <Card className="overflow-hidden max-w-5xl mx-auto bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="bg-[oklch(0.22_0.06_250)] text-white p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4">Major Auto Manufacturer</h3>
                    <p className="text-white/80 mb-6">Nexdyne implemented a predictive maintenance solution for a fleet of 2,000+ robotic arms, reducing downtime by 90% and saving $15M annually.</p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                        <span>90% reduction in robotic arm downtime</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                        <span>$15M+ annual savings in maintenance costs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                        <span>4-week early failure detection window</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-12">
                    <h4 className="text-lg font-semibold text-[oklch(0.20_0.05_250)] mb-2">Key Outcomes</h4>
                    <p className="text-slate-600 mb-6">The solution involved deploying 10,000+ IoT sensors and a custom machine learning platform that analyzes 5TB of data daily to predict failures.</p>
                    <Button variant="outline" className="border-[oklch(0.70_0.18_55)] text-[oklch(0.70_0.18_55)] hover:bg-[oklch(0.70_0.18_55)] hover:text-white">
                      Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-24 bg-[oklch(0.22_0.06_250)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Operations?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Schedule a complimentary industrial assessment to identify opportunities for digital transformation and operational excellence in your facilities.
            </p>
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
