import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Users, Clock, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function StateEnergyCommission() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-[url('/img/pattern-dark.svg')] bg-center"
          style={{ maskImage: 'linear-gradient(to bottom, white 20%, transparent 100%)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="container relative">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Case Studies', href: '/case-studies' },
                  { label: 'State Energy Commission' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="max-w-4xl">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              State Government Case Study
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              State Energy Commission Reduces Grid Outages 65% with Predictive Analytics
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Implementing StateRAMP-authorized IoT platform monitoring 500+ substations with 15,000+ sensors, enabling predictive maintenance that reduced outages by 65% for 8.5 million residents.
            </p>
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Download Full Case Study (PDF)
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-[oklch(0.20_0.05_250)]">
            {[
              { value: '65%', label: 'Outage Reduction', icon: TrendingUp },
              { value: '500+', label: 'Substations Monitored', icon: Zap },
              { value: '15K+', label: 'IoT Sensors Deployed', icon: Clock },
              { value: '$12M', label: 'Annual Savings', icon: Users }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-8 w-8 text-[oklch(0.65_0.18_55)] mx-auto mb-3" />
                <div className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.65_0.18_55)] mb-2">{metric.value}</div>
                <div className="text-sm text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container max-w-4xl text-[oklch(0.20_0.05_250)]">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Overview</p>
          <h2 className="text-4xl font-bold mb-6">Project Snapshot</h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="mb-6">
              A state Energy Commission serving 8.5 million residents faced increasing grid outages due to aging infrastructure and reactive maintenance practices. The commission manually monitored 500+ substations across the state with no early warning system for equipment failures. Outages disrupted businesses, affected critical services, and cost the state economy over $45 million annually. Emergency repairs were expensive and time-consuming, while residents experienced extended power disruptions.
            </p>
            <p className="mb-6">
              Thalen Technologies Technologies was selected through a competitive state procurement process to design and implement a StateRAMP-authorized IoT platform for real-time grid monitoring and predictive maintenance. The solution would deploy 15,000+ sensors across 500+ substations, integrate with legacy SCADA systems, and use machine learning to predict equipment failures weeks in advance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-8 p-3 sm:p-4 md:p-6 bg-[oklch(0.97_0.01_250)] rounded-lg">
              <div>
                <h3 className="text-sm font-semibold text-slate-600 mb-2">Contract Type</h3>
                <p className="text-lg font-bold text-[oklch(0.20_0.05_250)]">State Cooperative Purchase</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-600 mb-2">Contract Value</h3>
                <p className="text-lg font-bold text-[oklch(0.20_0.05_250)]">$6.8M (12 months)</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-600 mb-2">Compliance</h3>
                <p className="text-lg font-bold text-[oklch(0.20_0.05_250)]">StateRAMP + NERC CIP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl text-[oklch(0.20_0.05_250)]">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Challenge</p>
          <h2 className="text-4xl font-bold mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">Navigating a Complex Energy Landscape</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Aging Grid Infrastructure',
                description: 'Increasing outage frequency and duration affecting 8.5M residents. Aging equipment failures disrupted businesses and critical services, costing the state economy $45M+ annually.'
              },
              {
                title: 'Manual Substation Monitoring',
                description: '500+ substations monitored manually with no predictive capabilities. Field technicians performed reactive inspections, missing early warning signs of equipment degradation.'
              },
              {
                title: 'Reactive Maintenance Approach',
                description: 'No predictive maintenance capabilities led to costly emergency repairs during outages. Equipment failures occurred unexpectedly, extending restoration times and increasing costs.'
              },
              {
                title: 'StateRAMP Compliance Requirements',
                description: 'Cloud-based monitoring platform required StateRAMP authorization for state data security. Legacy SCADA systems needed secure integration with modern analytics platforms.'
              }
            ].map((challenge, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{challenge.title}</h3>
                  <p className="text-slate-600">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container max-w-4xl text-[oklch(0.20_0.05_250)]">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Solution</p>
          <h2 className="text-4xl font-bold mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">A Future-Ready IoT & Analytics Platform</h2>
          <div className="space-y-8">
            {[
              {
                title: "StateRAMP-Authorized IoT Platform",
                description: "Thalen Technologies deployed a StateRAMP-authorized cloud platform on Azure Government with 15,000+ IoT sensors across 500+ substations, collecting real-time data on temperature, vibration, load, and equipment health.",
                points: [
                  'Deployed 15,000+ IoT sensors across 500+ substations statewide',
                  'Implemented StateRAMP-authorized Azure Government cloud infrastructure',
                  'Collected real-time data on temperature, vibration, electrical load, and equipment health',
                  'Achieved NERC CIP compliance for critical infrastructure protection',
                  'Established secure data pipelines with encryption and access controls'
                ]
              },
              {
                title: "Predictive Maintenance Analytics",
                description: "Implemented machine learning models analyzing sensor data to predict equipment failures 2-4 weeks in advance with 89% accuracy, enabling proactive maintenance and preventing outages.",
                points: [
                  'Developed ML models trained on 5 years of historical maintenance and outage data',
                  'Achieved 89% accuracy in predicting equipment failures 2-4 weeks in advance',
                  'Enabled proactive maintenance scheduling during planned downtime windows',
                  'Reduced emergency repairs by 78% through early failure detection',
                  'Prevented 65% of potential outages through predictive interventions'
                ]
              },
              {
                title: "Real-Time Grid Monitoring Dashboard",
                description: "Built comprehensive monitoring dashboard using Power BI Gov with real-time visualization of grid health, automated alerting for anomalies, and mobile access for field technicians.",
                points: [
                  'Created real-time dashboards visualizing grid health across 500+ substations',
                  'Implemented automated alerting for equipment anomalies and threshold violations',
                  'Developed mobile app for field technicians with work order integration',
                  'Reduced average fault detection and response time by 45 minutes',
                  'Enabled data-driven decision-making for maintenance prioritization'
                ]
              },
              {
                title: "Legacy SCADA Integration",
                description: "Integrated existing SCADA systems with modern analytics platform using secure APIs and data transformation pipelines, preserving existing operational workflows while adding predictive capabilities.",
                points: [
                  'Integrated 500+ legacy SCADA systems with modern analytics platform',
                  'Implemented secure API middleware for real-time data exchange',
                  'Ensured seamless data flow between legacy systems and the new cloud platform',
                  'Preserved existing operational workflows for grid operators',
                  'Enhanced legacy systems with modern predictive analytics capabilities'
                ]
              }
            ].map((solution, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{solution.title}</h3>
                  <p className="text-lg text-slate-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3 text-slate-600">
                    {solution.points.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl text-[oklch(0.20_0.05_250)]">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Results</p>
          <h2 className="text-4xl font-bold mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">A More Resilient and Efficient State Grid</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: '65% Reduction in Grid Outages',
                description: 'Predictive maintenance prevented over 200 major outages in the first year, improving grid reliability for 8.5 million residents and saving an estimated $28M in economic losses.'
              },
              {
                title: '$12M in Annual Operational Savings',
                description: 'Reduced emergency repair costs by 78% and optimized maintenance schedules, resulting in over $12 million in verified savings for the commission in the first 12 months.'
              },
              {
                title: 'StateRAMP Authorization Achieved',
                description: 'The platform achieved StateRAMP High authorization in 6 months, ensuring compliance with state data security requirements and setting a new standard for public sector IoT projects.'
              },
              {
                title: '45-Minute Faster Fault Response',
                description: 'Real-time monitoring and mobile alerts enabled field technicians to identify and address grid issues 45 minutes faster on average, significantly reducing downtime.'
              }
            ].map((result, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{result.title}</h3>
                  <p className="text-slate-600">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Modernize Your Infrastructure with Thalen Technologies</h2>
          <p className="text-xl text-white/80 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            Secure, compliant, and powerful solutions for the public sector. Let's discuss how our IoT and analytics platforms can transform your operations, reduce costs, and improve services for your constituents.
          </p>
          <Button size="lg" asChild className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
            <Link to="/contact/sales">
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
