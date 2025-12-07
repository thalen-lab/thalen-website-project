import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Tailwind classes for editorial style
const editorialContainer = "container max-w-5xl";
const serifHeadline = "font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6";
const serifSectionTitle = "font-serif text-3xl md:text-4xl font-bold mb-8";
const bodyCopy = "text-lg leading-relaxed text-muted-foreground mb-6";
const darkSection = "py-20 bg-gray-900 text-white";
const darkSerifHeadline = "font-serif text-3xl md:text-4xl font-bold mb-8 text-white";

export default function VAPredictiveAnalytics() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 bg-navy-gradient text-primary-foreground">
        <div className={editorialContainer}>
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-sm font-semibold text-orange-400">CASE STUDY • PREDICTIVE ANALYTICS</span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                GSA Schedule 70
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                Public Trust Clearance
              </span>
            </div>
            <h1 className={serifHeadline}>
              Accelerating Veteran Services: How Predictive Analytics Cut Claims Processing Time by 60%
            </h1>
            <p className="text-xl opacity-90 mb-8">
              A deep dive into the Department of Veterans Affairs' successful deployment of machine learning to prioritize disability claims, drastically reduce the backlog, and deliver faster, more accurate decisions to those who served.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <div className="font-semibold text-orange-400">Client</div>
                <div>Department of Veterans Affairs</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Industry</div>
                <div>Federal Government</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Timeline</div>
                <div>18 months</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Contract Value</div>
                <div>$6.8M</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Services</div>
                <div>Predictive Analytics, ML/AI, Data Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Opportunity Section */}
      <section className="py-20">
        <div className={editorialContainer}>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-2">The Challenge</p>
          <h2 className={serifSectionTitle}>The Critical Need for Claims Modernization</h2>
          <div className="prose prose-lg max-w-none">
            <p className={bodyCopy}>
              The Department of Veterans Affairs (VA) faced a significant and growing challenge in managing the volume of disability compensation claims. With a backlog exceeding 400,000 cases, the average processing time had ballooned to over 180 days. This delay created substantial hardship for veterans awaiting crucial benefits they had earned through their service, leading to widespread frustration and a decline in trust in the VA's ability to deliver timely support. The core issue was a manual, first-in, first-out workflow that could not adapt to the complexity of modern claims.
            </p>
            <p className={bodyCopy}>
              The traditional claims adjudication process relied heavily on human review, where staff manually evaluated extensive medical records, service histories, and supporting documentation. This approach treated every claim equally, regardless of its inherent complexity or the urgency of the veteran's situation. Consequently, simple claims that could be resolved quickly were often delayed for months, trapped behind highly complex cases that required extensive research, inter-departmental coordination, and specialized medical expertise.
            </p>
            <p className={bodyCopy}>
              To address this systemic inefficiency, the VA recognized the imperative to adopt a data-driven strategy. The goal was to implement a solution that could intelligently triage incoming claims, accurately predict their processing complexity, and dynamically route them to the most appropriate adjudicators. This modernization effort was essential not only to reduce the backlog and processing times but also to ensure the continued accuracy, fairness, and integrity of benefit determinations for all veterans.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Solution Section */}
      <section className={darkSection}>
        <div className={editorialContainer}>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-2">The Solution</p>
          <h2 className={darkSerifHeadline}>Implementing an Intelligent Claims Prioritization Engine</h2>
          <div className="prose prose-lg max-w-none text-white">
            <p className={bodyCopy}>
              NexDyne partnered with the VA to design and deploy a comprehensive Predictive Analytics solution centered on a machine learning-driven claims prioritization engine. The initial phase involved building sophisticated models trained on over 12 million historical claims. These models analyze incoming submissions against 47 key variables—including claimed conditions, completeness of medical evidence, service history patterns, and past adjudication outcomes—to assign a real-time complexity score (1-10) to each claim within seconds of its arrival.
            </p>
            <p className={bodyCopy}>
              The core innovation was the development of an intelligent claim routing system. This system leverages the predictive complexity score to automatically match claims with the most suitable adjudicators based on their specific expertise, current workload, and historical performance metrics. Simple, low-complexity claims (scores 1-3) are fast-tracked to specialized teams for rapid resolution, often within days. Conversely, highly complex cases (scores 8-10) are routed to senior adjudicators with relevant medical and legal expertise, ensuring they receive the necessary attention without delaying simpler cases.
            </p>
            <p className={bodyCopy}>
              To further enhance efficiency and decision quality, we integrated a real-time Decision Support Dashboard. This tool provides adjudicators with instant access to relevant case precedents, medical research, and automated evidence checklists. By surfacing similar past cases and flagging potential issues, the system drastically reduces the time spent on research and quality assurance, transforming a process that once took hours into a matter of minutes. This holistic approach ensures that every veteran's claim is handled with the appropriate speed and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* 4. The Impact Section - Statistics Grid */}
      <section className="py-20 bg-muted/30">
        <div className={editorialContainer}>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-2">The Impact</p>
          <h2 className={serifSectionTitle}>Transforming Service Delivery for Veterans</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold font-serif text-accent mb-2">60%</div>
              <div className="text-lg font-medium text-gray-700">Reduction in Average Processing Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold font-serif text-accent mb-2">125K</div>
              <div className="text-lg font-medium text-gray-700">Additional Claims Processed Annually</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold font-serif text-accent mb-2">$8.2M</div>
              <div className="text-lg font-medium text-gray-700">Annual Operational Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold font-serif text-accent mb-2">94%</div>
              <div className="text-lg font-medium text-gray-700">Veteran Satisfaction Score</div>
            </div>
          </div>
          
          {/* The Impact Section - Paragraphs */}
          <div className="prose prose-lg max-w-none">
            <p className={bodyCopy}>
              The implementation of the Predictive Analytics engine yielded immediate and profound results for the Department of Veterans Affairs and the veterans they serve. The most critical metric—average claim processing time—saw a dramatic reduction from 180 days down to 72 days, a 60% improvement. This acceleration means veterans are receiving their earned benefits significantly faster, directly alleviating financial and emotional stress. Furthermore, the system successfully triages simple claims, which are now resolved in under 30 days, while ensuring complex cases are not rushed and receive the full attention of senior, specialized staff.
            </p>
            <p className={bodyCopy}>
              Operational efficiency also saw a massive boost. The VA is now capable of processing 475,000 claims annually, an increase of 125,000 cases from the previous baseline of 350,000, all without increasing the size of the adjudication staff. This increase in throughput has been instrumental in tackling the long-standing backlog, which has been reduced by 68% and continues to trend downward. The ability to manage higher volumes with existing resources translates directly into substantial financial benefits for the agency.
            </p>
            <p className={bodyCopy}>
              Beyond the quantitative metrics, the project has restored a crucial element of trust and service quality. The efficiency gains resulted in an estimated $8.2 million in annual operational cost savings, primarily by avoiding the need to hire 45 additional full-time adjudicators. Most importantly, the focus on faster, more accurate service delivery has been reflected in veteran feedback, with the overall satisfaction score rising to 94%. This case demonstrates the transformative power of applying advanced data science to mission-critical government services.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Ready to Transform Your Mission-Critical Operations?</h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how NexDyne's predictive analytics and AI solutions can help your agency reduce backlogs, optimize resource allocation, and deliver superior service.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
