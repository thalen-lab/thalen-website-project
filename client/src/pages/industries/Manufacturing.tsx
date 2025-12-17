import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Factory, Zap, BarChart3, Cpu, Settings, TrendingUp, Shield, Network } from 'lucide-react';

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
      icon: Zap,
      title: 'Predictive Maintenance & Asset Optimization',
      description: 'We deploy IoT sensor networks and machine learning models that predict equipment failures 2-4 weeks before they occur, enabling proactive maintenance scheduling during planned downtime. Our predictive maintenance solutions analyze vibration, temperature, pressure, and acoustic data in real-time to identify anomalies and degradation patterns. Clients achieve 75% reduction in unplanned downtime, 40% lower maintenance costs, and 25% extension in equipment lifespan.'
    },
    {
      icon: Factory,
      title: 'Digital Twin & Process Simulation',
      description: 'Our digital twin implementations create virtual replicas of production lines that enable real-time monitoring, what-if scenario testing, and process optimization without disrupting operations. These physics-based simulations integrate with MES, SCADA, and ERP systems to provide comprehensive operational visibility. Manufacturers use digital twins to optimize changeover times, test new production schedules, and train operators in virtual environments before physical implementation.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time OEE Monitoring & Analytics',
      description: 'We implement comprehensive OEE monitoring systems that track availability, performance, and quality metrics in real-time across all production assets. Automated data collection from PLCs, sensors, and vision systems eliminates manual data entry errors and provides instant visibility into production losses. Our analytics platforms identify root causes of inefficiency and deliver actionable insights that drive continuous improvement initiatives.'
    },
    {
      icon: Network,
      title: 'Supply Chain Intelligence & Optimization',
      description: 'Our supply chain analytics platforms integrate data from suppliers, logistics providers, and internal systems to provide end-to-end visibility and predictive insights. Machine learning models forecast demand, optimize inventory levels, and identify supply chain risks before they impact production. Clients achieve 30% reduction in inventory carrying costs, 95% on-time delivery performance, and improved supplier collaboration through shared visibility.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Industrial Excellence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Manufacturing & Energy
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              IoT-enabled predictive maintenance and digital twin solutions that maximize uptime and operational efficiency across industrial facilities. Transform operations with Industry 4.0 technologies that deliver measurable improvements in OEE, quality, and profitability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Industrial Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Manufacturing Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Stats */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">99.2%</div>
              <div className="text-sm text-muted-foreground">Average Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">75%</div>
              <div className="text-sm text-muted-foreground">Downtime Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">35%</div>
              <div className="text-sm text-muted-foreground">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Facilities Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industrial Transformation Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements in equipment effectiveness, production efficiency, and operational costs through Industry 4.0 technologies and advanced analytics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: 'Digital Twin', desc: '35% efficiency gains through real-time simulation and virtual commissioning of production processes' },
              { icon: Zap, title: 'Predictive Maintenance', desc: '75% reduction in unplanned downtime by predicting equipment failures 2-4 weeks in advance' },
              { icon: BarChart3, title: 'OEE Optimization', desc: '99.2% average equipment effectiveness through real-time monitoring and continuous improvement' },
              { icon: Cpu, title: 'Smart Manufacturing', desc: 'IoT sensor networks providing real-time visibility into all production assets and processes' },
              { icon: Settings, title: 'Process Automation', desc: 'Automated quality control and material handling reducing labor costs by 40% while improving consistency' },
              { icon: TrendingUp, title: 'Supply Chain Intelligence', desc: '30% inventory reduction through demand forecasting and optimized procurement strategies' }
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

      {/* Manufacturing Challenges */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Manufacturing Challenges We Solve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industrial manufacturers face complex operational challenges that require specialized expertise in both manufacturing processes and advanced technology implementation to achieve comprehensive performance.
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
            <h2 className="text-4xl font-bold mb-4">Our Manufacturing Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive Industry 4.0 solutions designed specifically for discrete and process manufacturing, energy production, and industrial operations with proven ROI and rapid deployment.
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
            <h2 className="text-4xl font-bold mb-4">Manufacturing Success Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world results demonstrating the significant impact of predictive maintenance and Industry 4.0 technologies in large-scale manufacturing operations.
            </p>
          </div>
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary text-primary-foreground p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-accent mb-2">Featured Success</div>
                  <h3 className="text-3xl font-bold mb-4">Manufacturing Giant Achieves 99.2% Uptime</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    Predictive maintenance automation eliminated 75% of unplanned downtime across 50+ facilities, saving $45M annually.
                  </p>
                  <p className="text-primary-foreground/90 mb-6">
                    This Fortune 500 manufacturer operated 50+ facilities with chronic equipment reliability issues causing production delays and customer delivery failures. Our team deployed IoT sensor networks across 2,000+ critical assets with machine learning models that predict failures weeks in advance. The predictive maintenance platform integrated with existing CMMS and ERP systems, enabling proactive work order generation and parts procurement. Results exceeded expectations with 99.2% uptime achieved within 12 months.
                  </p>
                  <Button className="bg-orange-gradient hover:opacity-90 w-fit">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-accent mb-2">99.2%</div>
                    <div className="text-lg text-muted-foreground mb-8">System Uptime</div>
                    <div className="grid grid-cols-2 gap-6 text-left">
                      <div>
                        <div className="text-3xl font-bold text-accent">75%</div>
                        <div className="text-sm text-muted-foreground">Downtime Reduction</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">$45M</div>
                        <div className="text-sm text-muted-foreground">Annual Savings</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">2,000+</div>
                        <div className="text-sm text-muted-foreground">Assets Monitored</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">12 months</div>
                        <div className="text-sm text-muted-foreground">to Full Deployment</div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Optimize Industrial Operations</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule an industrial automation assessment with our manufacturing experts. We'll analyze your operations, identify high-impact opportunities for predictive maintenance and process optimization, and provide a detailed ROI projection tailored to your facility's specific challenges.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Industrial Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
