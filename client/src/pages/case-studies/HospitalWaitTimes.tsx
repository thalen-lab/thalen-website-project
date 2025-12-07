import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'wouter';

// Custom components for editorial style
const EditorialSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 ${className}`}>
    <div className="container max-w-4xl">
      {children}
    </div>
  </section>
);

const EditorialHeadline = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-8 ${className}`}>
    {children}
  </h2>
);

const EditorialBody = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
    {children}
  </p>
);

const StatsGrid = ({ metrics }: { metrics: Array<{ value: string; label: string }> }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
    {metrics.map((metric: { value: string; label: string }, index: number) => (
      <div key={index} className="p-4">
        <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{metric.value}</div>
        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{metric.label}</div>
      </div>
    ))}
  </div>
);

export default function HospitalWaitTimes() {
  const mainHeadline = "Transforming Emergency Care: AI-Driven Patient Flow Reduces Hospital Wait Times by 65%";
  const metrics = [
    { value: '65%', label: 'Wait Time Reduction' },
    { value: '+42pts', label: 'Patient Satisfaction' },
    { value: '15%', label: 'Volume Increase' },
    { value: '92%', label: 'Forecast Accuracy' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* 1. Hero */}
      <EditorialSection className="relative py-24 bg-navy-gradient text-primary-foreground">
        <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Healthcare Operations Case Study
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
          {mainHeadline}
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8">
          A major urban medical center leveraged advanced AI to cut average emergency department wait times from 4.2 hours to 1.5 hours, significantly boosting operational efficiency and patient trust.
        </p>
        <Button size="lg" className="bg-orange-gradient hover:opacity-90">
          <Download className="mr-2 h-5 w-5" />
          Download Full Case Study (PDF)
        </Button>
      </EditorialSection>

      {/* 2. The Opportunity */}
      <EditorialSection className="bg-background">
        <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Section I</div>
        <EditorialHeadline>The Opportunity: Addressing Critical Bottlenecks in Emergency Care</EditorialHeadline>
        
        <EditorialBody>
          The partner, a 500-bed urban medical center managing over 150,000 annual emergency room visits, faced a critical operational challenge: chronic overcrowding. Average patient wait times consistently exceeded four hours, a metric that placed significant strain on both clinical staff and patient safety protocols, raising serious concerns regarding EMTALA compliance.
        </EditorialBody>
        
        <EditorialBody>
          This operational inefficiency directly translated into a crisis of patient experience. Satisfaction scores were consistently ranked in the bottom tenth percentile nationally, a factor that not only damaged the hospital's reputation within the community but also exposed the institution to substantial financial penalties from the Centers for Medicare & Medicaid Services (CMS) for excessive wait times.
        </EditorialBody>
        
        <EditorialBody>
          The core issue was a reliance on fragmented, manual processes for critical functions like staffing, bed assignment, and inter-departmental communication. These systems lacked the agility to adapt to the highly fluctuating, unpredictable demand of a major urban emergency department, leading to persistent bottlenecks and the underutilization of available clinical capacity across the facility.
        </EditorialBody>
      </EditorialSection>

      {/* 3. The Solution */}
      <EditorialSection className="bg-secondary text-secondary-foreground">
        <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Section II</div>
        <EditorialHeadline className="text-secondary-foreground">The Solution: Implementing a Predictive Patient Flow Ecosystem</EditorialHeadline>
        
        <EditorialBody>
          The engagement began with the deployment of a comprehensive, AI-powered patient flow optimization platform. This solution was engineered to move beyond reactive management by integrating predictive intelligence into every stage of the patient journey, from initial triage to final discharge. The objective was to create a unified, dynamic system capable of self-optimizing in real-time.
        </EditorialBody>
        
        <EditorialBody>
          A key component was the development of machine learning models that could forecast ER volume and patient acuity with 92% accuracy, predicting demand 6 to 12 hours in advance. This predictive capability allowed the hospital to transition from static to dynamic staffing models, proactively allocating nursing and physician resources, and preparing critical assets like imaging suites and lab capacity before peak demand materialized.
        </EditorialBody>
        
        <EditorialBody>
          Furthermore, the platform introduced intelligent patient routing and dynamic bed management. By automating triage and coordinating discharge timing with housekeeping workflows, the system ensured that patients were directed to the optimal care pathway immediately and that inpatient beds were turned over with maximum efficiency. This orchestration eliminated critical handoff failures and communication gaps that previously stalled patient movement.
        </EditorialBody>
      </EditorialSection>

      {/* 4. The Impact */}
      <EditorialSection className="bg-background">
        <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Section III</div>
        <EditorialHeadline>The Impact: Delivering Measurable Improvements in Care Quality and Efficiency</EditorialHeadline>
        
        {/* Statistics Grid */}
        <StatsGrid metrics={metrics} />

        <EditorialBody>
          The implementation yielded immediate and profound operational improvements. The primary goal of reducing patient wait times was exceeded, with the average emergency department stay dropping by 65%, from a critical 4.2 hours down to a manageable 1.5 hours. This dramatic reduction not only improved the patient experience but also significantly mitigated the hospital's exposure to regulatory risk.
        </EditorialBody>
        
        <EditorialBody>
          The success was validated by a substantial surge in patient trust and satisfaction. The hospital's patient satisfaction scores improved by 42 points, elevating their national ranking from the 32nd percentile to the 74th percentile. This improvement, coupled with the elimination of all CMS penalties related to excessive wait times, demonstrated the platform's direct impact on both quality of care and financial stability.
        </EditorialBody>
        
        <EditorialBody>
          Crucially, the new system enabled the medical center to absorb a 15% increase in annual patient volume without requiring any physical expansion of the facility or a net increase in full-time staff. The improved resource utilization and 35% gain in staff efficiency confirmed that the AI-driven approach had successfully transformed a bottlenecked operation into a high-throughput, high-quality care delivery system.
        </EditorialBody>
      </EditorialSection>

      {/* CTA */}
      <EditorialSection className="bg-navy-gradient text-primary-foreground">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Optimize Your Public Service Delivery</h2>
          <p className="text-xl leading-relaxed opacity-90 mb-8">
            Discover how our predictive intelligence and workflow automation solutions can help your organization reduce operational friction and deliver superior public services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Government Technology Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </EditorialSection>

      <Footer />
    </div>
  );
}
