import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function DODDataPipelines() {
  // Utility component for the statistics grid
  const StatItem = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center p-6 bg-white border-2 border-slate-200 rounded-lg transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
      <div className="text-4xl font-bold mb-1 text-[oklch(0.20_0.05_250)] font-sans">{value}</div>
      <div className="text-sm text-slate-600 font-sans">{label}</div>
    </div>
  );

  // Utility component for the main body text style
  const EditorialParagraph = ({ children }: { children: React.ReactNode }) => (
    <p className="text-lg text-slate-600 leading-relaxed mb-6 font-sans">
      {children}
    </p>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-pattern.svg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider text-sm">CASE STUDY • DATA ENGINEERING</span>
              <span className="inline-block bg-white/10 text-white/90 px-3 py-1 rounded-full text-xs font-semibold">
                IDIQ Contract
              </span>
              <span className="inline-block bg-white/10 text-white/90 px-3 py-1 rounded-full text-xs font-semibold">
                Secret Clearance
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
              Modernizing Defense Logistics: Automated Data Pipelines Deliver Real-Time Visibility and $12 Million in Annual Savings
            </h1>
            <p className="text-xl text-white/90 mb-8 font-sans">
              How the Department of Defense eliminated manual data integration work and achieved real-time supply chain visibility across 47 systems.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-sans text-white/90">
              <div>
                <div className="font-semibold text-[oklch(0.75_0.15_55)] uppercase tracking-wider">Client</div>
                <div className="text-white">Department of Defense</div>
              </div>
              <div>
                <div className="font-semibold text-[oklch(0.75_0.15_55)] uppercase tracking-wider">Industry</div>
                <div className="text-white">Federal Government</div>
              </div>
              <div>
                <div className="font-semibold text-[oklch(0.75_0.15_55)] uppercase tracking-wider">Timeline</div>
                <div className="text-white">24 months</div>
              </div>
              <div>
                <div className="font-semibold text-[oklch(0.75_0.15_55)] uppercase tracking-wider">Contract Value</div>
                <div className="text-white">$18.5M</div>
              </div>
              <div>
                <div className="font-semibold text-[oklch(0.75_0.15_55)] uppercase tracking-wider">Services</div>
                <div className="text-white">Data Engineering, Cloud Infrastructure, Integration</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-sm text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Opportunity</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[oklch(0.20_0.05_250)]">The Imperative for Real-Time Logistics in a $180 Billion Supply Chain</h3>
          
          <EditorialParagraph>
            The Department of Defense (DOD) logistics command oversees a vast, complex supply chain valued at over $180 billion. This critical operation was managed across 47 disparate, siloed systems, including legacy mainframes, various ERP platforms, and specialized warehouse management tools. The inherent heterogeneity of these systems—each with unique data formats, update frequencies, and access protocols—created a significant data integration challenge.
          </EditorialParagraph>
          
          <EditorialParagraph>
            To gain any holistic view of the supply chain, a dedicated team of 35 data analysts was required to manually extract, transform, and load data into common reporting formats, often relying on error-prone spreadsheets. This laborious process consumed 18 hours for a single reporting cycle. Consequently, by the time leadership received critical supply chain reports, the underlying data was already outdated, severely limiting the ability to make timely, informed decisions.
          </EditorialParagraph>
          
          <EditorialParagraph>
            Mission readiness and operational efficiency demanded a fundamental shift. The DOD required real-time, unified visibility into inventory levels, shipment statuses, and procurement activities. The manual data integration model was unsustainable and posed a risk to logistics optimization. The clear objective was to implement automated, scalable data pipelines capable of handling the immense volume and complexity of defense logistics data.
          </EditorialParagraph>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl">
          <h2 className="text-sm text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Solution</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[oklch(0.20_0.05_250)]">Architecting a Secure, Cloud-Native Data Ecosystem for Mission-Critical Data</h3>
          
          <EditorialParagraph>
            The solution began with the design and deployment of a FedRAMP-authorized, cloud-native data lake within AWS GovCloud. This architecture established a secure, central repository for all supply chain data, utilizing services like S3 for scalable raw data storage, AWS Glue for robust ETL orchestration, and Athena for efficient, cost-effective SQL querying. This foundation provided the necessary security, scalability, and compliance framework for defense-level data workloads.
          </EditorialParagraph>
          
          <EditorialParagraph>
            The core of the solution involved building 47 custom, high-performance data connectors. These connectors were engineered to automatically and securely extract data from each of the 47 source systems, with a refresh cycle reduced to every 15 minutes. Each pipeline incorporated system-specific authentication, rate-limiting, and self-healing error recovery logic, ensuring continuous, reliable data flow without manual intervention.
          </EditorialParagraph>
          
          <EditorialParagraph>
            To ensure data integrity, a comprehensive Data Quality and Governance Framework was implemented. This framework applies automated validation rules at every stage of the pipeline, flagging anomalies and maintaining a complete audit trail for compliance and data lineage. Finally, a unified analytics layer was created to provide a single semantic model, allowing logistics officers to query data using familiar business terms, thereby democratizing access to real-time supply chain intelligence.
          </EditorialParagraph>
        </div>
      </section>

      {/* The Impact Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-sm text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Impact</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[oklch(0.20_0.05_250)]">Transformative Results in Operational Efficiency and Cost Reduction</h3>
          
          {/* Statistics Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <StatItem value="$12M" label="Annual Cost Savings" />
            <StatItem value="95%" label="Reduction in Manual Data Work" />
            <StatItem value="15 Min" label="Data Refresh Time (from 18 Hrs)" />
            <StatItem value="47" label="Disparate Systems Integrated" />
          </div>

          <EditorialParagraph>
            The implementation of the automated data pipelines delivered immediate and substantial returns on investment. By eliminating the need for 35 full-time employees to perform manual data extraction and transformation, the Department of Defense realized an annual operational cost saving of $12 million. These highly skilled analysts were subsequently redeployed to higher-value activities, such as supply chain optimization and advanced demand forecasting.
          </EditorialParagraph>
          
          <EditorialParagraph>
            Operational efficiency saw a dramatic improvement, with a 95% reduction in manual data work. The automated system now processes 2.4 million records daily with near-zero human intervention. This shift allowed analysts to dedicate their time to strategic analysis rather than data janitorial tasks, fundamentally changing the nature of the logistics command's data operations.
          </EditorialParagraph>
          
          <EditorialParagraph>
            Most critically, the data refresh time was reduced from an unacceptable 18 hours to a near real-time 15 minutes. This real-time visibility into inventory, shipments, and procurement enabled leadership to make faster, data-driven decisions, leading to the identification and redistribution of $340 million in excess inventory. The system has maintained a 99.8% pipeline uptime over 18 months, demonstrating the reliability and resilience required for mission-critical defense infrastructure.
          </EditorialParagraph>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Automate Your Data Pipelines?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto font-sans">
            Schedule a free pipeline assessment. We will evaluate your current data processes, identify automation opportunities, and show you how to achieve real-time data visibility.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 transition-colors">
              <Link to="/contact/sales">
                Request Free Pipeline Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)] transition-colors">
              <Link to="/case-studies">
                View All Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
