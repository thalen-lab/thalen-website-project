import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

// Helper component for the statistics grid
const StatGrid = ({ metrics }: { metrics: Array<{ value: string; label: string }> }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
    {metrics.map((metric: { value: string; label: string }, index: number) => (
      <div key={index} className="p-4">
        <div className="text-5xl md:text-6xl font-bold text-accent mb-2 font-serif">{metric.value}</div>
        <div className="text-base text-muted-foreground">{metric.label}</div>
      </div>
    ))}
  </div>
);

// Helper component for section content
const SectionContent = ({ children }: { children: React.ReactNode }) => (
  <div className="prose max-w-none text-lg leading-relaxed text-muted-foreground space-y-6">
    {children}
  </div>
);

export default function AerospaceDigitalTwin() {
  const metrics = [
    { value: '40%', label: 'Maintenance Cost Reduction' },
    { value: '70%', label: 'Unscheduled Maintenance Reduction' },
    { value: '$95M', label: 'Annual Operational Savings' },
    { value: '12%', label: 'Aircraft Availability Improvement' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-24 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Case Studies', href: '/case-studies' },
                  { label: 'Aerospace Digital Twin' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Aerospace & Defense Case Study
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">
            Digital Twin Platform Drives $95M Annual Savings for Major Aerospace Fleet Operations
          </h1>
          <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl opacity-90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            A comprehensive digital twin platform enabled predictive maintenance, reducing unscheduled maintenance by 70% and improving operational availability.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Section I</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">The Opportunity</h2>
          <SectionContent>
            <p>
              A leading aerospace and defense organization, managing a vast fleet of commercial aircraft, faced a critical challenge: escalating maintenance expenditures exceeding $240 million annually. The reliance on traditional, time-based maintenance schedules led to unnecessary component replacements, excessive downtime, and a high operational cost base.
            </p>
            <p>
              This reactive approach was further complicated by frequent, unscheduled maintenance events. These unexpected failures severely disrupted flight schedules, negatively impacting service delivery and creating significant logistical strain. The lack of foresight into component health meant the organization was constantly reacting to failures rather than proactively preventing them.
            </p>
            <p>
              The imperative was clear: transition from a costly, reactive maintenance model to a data-driven, predictive framework. The organization required a sophisticated, integrated platform capable of providing real-time fleet health monitoring and accurate forecasting of component degradation to optimize maintenance windows and maximize asset utilization.
            </p>
          </SectionContent>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Section II</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">The Solution</h2>
          <SectionContent>
            <p className="text-lg leading-relaxed text-gray-300">
              To address this complex operational need, a comprehensive digital twin platform was engineered and deployed across the entire fleet of over 250 aircraft. This solution created high-fidelity virtual replicas of each asset, integrating vast streams of real-time sensor telemetry with advanced physics-based models to simulate wear and fatigue under actual operating conditions.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              The core of the solution was a sophisticated predictive maintenance engine powered by machine learning. This engine analyzed over 10,000 sensor streams per aircraft, enabling the accurate forecasting of component failures 30 to 90 days in advance with an 89% prediction accuracy. This foresight allowed maintenance teams to move from emergency repairs to planned, optimized interventions.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Furthermore, the project established a unified data platform, consolidating siloed information from maintenance records, flight operations, and supply chain logistics. This holistic data view, coupled with optimization algorithms, allowed for the intelligent scheduling of maintenance activities, minimizing operational disruption while ensuring maximum safety and component life.
            </p>
          </SectionContent>
        </div>
      </section>

      {/* The Impact */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Section III</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">The Impact</h2>
          
          {/* Statistics Grid */}
          <StatGrid metrics={metrics} />

          <div className="mt-12">
            <SectionContent>
              <p>
                The implementation of the digital twin platform delivered immediate and substantial financial returns. Maintenance costs were reduced by a remarkable 40%, translating to an annual operational saving of $95 million. This rapid return on investment was achieved by eliminating unnecessary maintenance tasks and optimizing the timing of essential repairs.
              </p>
              <p>
                Operational reliability saw a dramatic improvement, with unscheduled maintenance events plummeting by 70%. By accurately predicting and preventing failures, the organization significantly enhanced its service delivery consistency and reduced the logistical complexity associated with unexpected groundings.
              </p>
              <p>
                The strategic shift to predictive maintenance also resulted in a 12% improvement in aircraft availability. With a comprehensive, data-driven view of fleet health, the aerospace organization is now operating with greater efficiency, reduced risk, and a significantly lower total cost of ownership for its critical assets.
              </p>
            </SectionContent>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Partner with Us for Predictive Maintenance Excellence</h2>
          <p className="text-xl opacity-90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Discover how our digital twin solutions can transform your operational efficiency, reduce costs, and enhance the reliability of your most critical assets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Digital Twin Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
