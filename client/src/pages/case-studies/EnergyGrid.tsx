import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';

// Custom components for editorial style
const EditorialSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-20 ${className}`}>
    <div className="container max-w-4xl">
      {children}
    </div>
  </section>
);

const EditorialHeadline = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gray-900">
    {children}
  </h2>
);

const EditorialSubHeadline = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800">
    {children}
  </h3>
);

const EditorialBody = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg leading-relaxed text-gray-700 mb-6">
    {children}
  </p>
);

const StatGrid = ({ metrics }: { metrics: { value: string, label: string }[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 p-6 border-t border-b border-gray-200">
    {metrics.map((metric, index) => (
      <div key={index} className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-1">{metric.value}</div>
        <div className="text-sm uppercase tracking-wider text-gray-600">{metric.label}</div>
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-24 bg-gray-50 text-gray-900">
        <div className="container max-w-4xl">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
            Energy & Utilities Case Study
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-6 leading-tight">
            AI-Powered Grid Modernization Delivers Unprecedented Reliability and Sustainability for a Major Utility.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            AI-powered grid optimization reduced outages by 60% while improving renewable energy integration for 3M+ customers.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="mr-2 h-5 w-5" />
            Download Full Case Study (PDF)
          </Button>
        </div>
      </section>

      {/* The Opportunity */}
      <EditorialSection>
        <EditorialHeadline>The Opportunity</EditorialHeadline>
        <EditorialBody>
          A major regional utility, responsible for serving over three million customers across a vast 50,000 square mile service territory, faced a critical challenge with its aging infrastructure. Decades of operation had resulted in a grid with limited real-time visibility and reliance on manual processes. This foundational deficit led directly to frequent service interruptions and protracted restoration times, creating a significant operational burden and eroding customer trust.
        </EditorialBody>
        <EditorialBody>
          Compounding the infrastructure challenge was the utility's commitment to integrating a rapidly increasing volume of intermittent renewable energy sources, such as solar and wind. The existing grid architecture was not designed to manage the unpredictable supply fluctuations inherent in these sources, leading to complex grid stability issues. This technical complexity threatened to undermine both reliability targets and the utility's sustainability goals.
        </EditorialBody>
        <EditorialBody>
          The confluence of aging assets, complex renewable integration, and rising customer expectations for 99.99% reliability demanded a comprehensive, forward-looking solution. The utility recognized that manual grid management and reactive maintenance were no longer viable, costing over $120 million annually in operational expenses and lost revenue. A strategic, $500 million investment in smart grid modernization was deemed essential to secure the grid's future resilience and efficiency.
        </EditorialBody>
      </EditorialSection>

      {/* The Solution */}
      <EditorialSection className="bg-gray-900 text-white">
        <EditorialHeadline>The Solution</EditorialHeadline>
        <EditorialBody>
          Our approach centered on the design and deployment of a holistic, AI-driven smart grid ecosystem. The initial phase involved establishing a foundational layer of intelligence through the deployment of over 50,000 smart meters and 2,000 grid sensors. This massive IoT infrastructure provided the utility with unprecedented, real-time visibility into grid conditions, load patterns, and equipment health, transforming a previously opaque system into a transparent, data-rich environment.
        </EditorialBody>
        <EditorialBody>
          Building upon this data foundation, we implemented advanced machine learning models for AI-powered grid optimization. These models were engineered to perform highly accurate load forecasting and automated grid balancing, optimizing power flow in real-time to manage the inherent variability of renewable energy sources. Crucially, this system included automated fault detection and isolation capabilities, enabling the grid to identify and self-heal localized issues within seconds, drastically minimizing the scope and duration of service disruptions.
        </EditorialBody>
        <EditorialBody>
          The final phase integrated a comprehensive Distributed Energy Resource Management System (DERMS) to actively manage the utility's growing portfolio of 15,000+ distributed solar installations and battery storage systems. This, combined with a robust cybersecurity framework that meets stringent NERC CIP requirements, ensured that the modernized grid was not only intelligent and efficient but also secure and compliant. The solution delivered a unified platform for operational excellence, customer engagement, and long-term asset management.
        </EditorialBody>
      </EditorialSection>

      {/* The Impact */}
      <EditorialSection>
        <EditorialHeadline>The Impact</EditorialHeadline>
        <StatGrid metrics={metrics} />
        <EditorialBody>
          The implementation of the AI-powered smart grid yielded immediate and transformative results across the utility's operations and customer experience. The most significant outcome was a 60% reduction in the System Average Interruption Duration Index (SAIDI), moving the utility from 240 minutes to a best-in-class 96 minutes. This dramatic improvement in reliability was directly supported by a 75% reduction in average restoration time, a testament to the effectiveness of the automated fault detection and isolation systems.
        </EditorialBody>
        <EditorialBody>
          Beyond reliability, the modernization initiative delivered substantial financial and environmental benefits. Operational efficiency gains, driven by predictive maintenance and optimized power flow, resulted in $85 million in verifiable annual savings. Furthermore, the advanced grid management capabilities successfully enabled the utility to increase its renewable energy mix from 12% to 45%, demonstrating a clear pathway to meeting ambitious sustainability targets without compromising grid stability.
        </EditorialBody>
        <EditorialBody>
          The project also fundamentally reshaped the utility's relationship with its customers. With 50,000+ smart meters deployed, the utility achieved 100% customer coverage, providing the data necessary for a new customer engagement platform. This combination of improved service and enhanced communication led to a surge in customer satisfaction, which rose from 68% to an industry-leading 92%. The smart grid modernization project successfully established a resilient, intelligent, and sustainable foundation for the utility's next four decades of service.
        </EditorialBody>
      </EditorialSection>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Modernize Your Critical Infrastructure</h2>
          <p className="text-xl leading-relaxed opacity-90 mb-8">
            Discover how our intelligent infrastructure solutions can improve reliability, enable sustainability, and drive operational savings for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Infrastructure Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
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
