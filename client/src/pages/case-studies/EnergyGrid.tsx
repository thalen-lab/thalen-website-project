import Navigation from '@/components/Navigation';
import { Button } from "@/components/ui/button";
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/Breadcrumb';

// Custom components for editorial style
const EditorialSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-20 ${className}`}>
    <div className="container max-w-4xl mx-auto px-4">
      {children}
    </div>
  </section>
);

const EditorialHeadline = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[oklch(0.20_0.05_250)]">
    {children}
  </h2>
);

const EditorialSubHeadline = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-serif font-semibold mb-4 text-[oklch(0.20_0.05_250)]">
    {children}
  </h3>
);

const EditorialBody = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg leading-relaxed text-slate-600 mb-6">
    {children}
  </p>
);

const StatGrid = ({ metrics }: { metrics: { value: string, label: string }[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16">
    {metrics.map((metric, index) => (
      <div key={index} className="text-center p-6 bg-white border-2 border-slate-200 rounded-lg transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
        <div className="text-4xl md:text-5xl font-bold text-[oklch(0.22_0.06_250)] mb-1">{metric.value}</div>
        <div className="text-sm uppercase tracking-wider text-slate-600">{metric.label}</div>
      </div>
    ))}
  </div>
);

export default function EnergyGrid() {
  const metrics = [
    { value: '60%', label: 'Outage Reduction (SAIDI)' },
    { value: '75%', label: 'Restoration Time Reduction' },
    { value: '$85M', label: 'Annual Operational Savings' },
    { value: '45%', label: 'Renewable Energy Integration' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <section 
        className="relative py-24 text-white bg-cover bg-center"
        style={{backgroundImage: "url('/images/case-studies/energy-grid-hero-bg.jpg')"}}
      >
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        <div className="container max-w-4xl mx-auto px-4 relative">
          <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Case Studies', href: '/case-studies' },
                  { label: 'Energy Grid Optimization' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-6">
            Energy & Utilities Case Study
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-6 leading-tight">
            AI-Powered Grid Modernization Delivers Unprecedented Reliability and Sustainability for a Major Utility.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            AI-powered grid optimization reduced outages by 60% while improving renewable energy integration for 3M+ customers.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-gray-100">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* The Opportunity */}
      <EditorialSection className="bg-white">
        <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Challenge</p>
        <EditorialHeadline>Aging Infrastructure Meets Modern Demands</EditorialHeadline>
        <EditorialBody>
          A major regional utility, responsible for serving over three million customers across a vast 50,000 square mile service territory, faced a critical challenge with its aging infrastructure. Decades of operation had resulted in a grid with limited real-time visibility and reliance on manual processes. This foundational deficit led directly to frequent service interruptions and protracted restoration times, creating a significant operational burden and eroding customer trust.
        </EditorialBody>
        <EditorialBody>
          Compounding the infrastructure challenge was the utility's commitment to integrating a rapidly increasing volume of intermittent renewable energy sources, such as solar and wind. The existing grid architecture was not designed to manage the unpredictable supply fluctuations inherent in these sources, leading to complex grid stability issues. This technical complexity threatened to undermine both reliability targets and the utility's sustainability goals.
        </EditorialBody>
      </EditorialSection>

      {/* The Solution */}
      <EditorialSection className="bg-[oklch(0.97_0.01_250)]">
        <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Solution</p>
        <EditorialHeadline>An AI-Driven Smart Grid Ecosystem</EditorialHeadline>
        <EditorialBody>
          Our approach centered on the design and deployment of a holistic, AI-driven smart grid ecosystem. The initial phase involved establishing a foundational layer of intelligence through the deployment of over 50,000 smart meters and 2,000 grid sensors. This massive IoT infrastructure provided the utility with unprecedented, real-time visibility into grid conditions, load patterns, and equipment health, transforming a previously opaque system into a transparent, data-rich environment.
        </EditorialBody>
        <EditorialBody>
          Building upon this data foundation, we implemented advanced machine learning models for AI-powered grid optimization. These models were engineered to perform highly accurate load forecasting and automated grid balancing, optimizing power flow in real-time to manage the inherent variability of renewable energy sources. Crucially, this system included automated fault detection and isolation capabilities, enabling the grid to identify and self-heal localized issues within seconds, drastically minimizing the scope and duration of service disruptions.
        </EditorialBody>
      </EditorialSection>

      {/* The Impact */}
      <EditorialSection className="bg-white">
        <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Impact</p>
        <EditorialHeadline>Transformative Results in Reliability and Efficiency</EditorialHeadline>
        <StatGrid metrics={metrics} />
        <EditorialBody>
          The implementation of the AI-powered smart grid yielded immediate and transformative results across the utility's operations and customer experience. The most significant outcome was a 60% reduction in the System Average Interruption Duration Index (SAIDI), moving the utility from 240 minutes to a best-in-class 96 minutes. This dramatic improvement in reliability was directly supported by a 75% reduction in average restoration time, a testament to the effectiveness of the automated fault detection and isolation systems.
        </EditorialBody>
        <EditorialBody>
          Beyond reliability, the modernization initiative delivered substantial financial and environmental benefits. Operational efficiency gains, driven by predictive maintenance and optimized power flow, resulted in $85 million in verifiable annual savings. Furthermore, the advanced grid management capabilities successfully enabled the utility to increase its renewable energy mix from 12% to 45%, demonstrating a clear pathway to meeting ambitious sustainability targets without compromising grid stability.
        </EditorialBody>
      </EditorialSection>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Modernize Your Critical Infrastructure</h2>
          <p className="text-xl leading-relaxed opacity-90 mb-8">
            Discover how our intelligent infrastructure solutions can improve reliability, enable sustainability, and drive operational savings for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-gray-100">
                Schedule Infrastructure Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
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
