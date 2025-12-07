import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'wouter';

// --- Component Definition ---
export default function IntelligenceSecurity() {
  // Data for the statistics grid (4 metrics required for The Impact section)
  const impactMetrics = [
    { value: '15', label: 'Agencies Connected' },
    { value: '5,000+', label: 'Cleared Users' },
    { value: '0', label: 'Security Incidents' },
    { value: '99.1%', label: 'Classification Accuracy' }
  ];

  // Main Headline for the Hero section
  const mainHeadline = "Establishing a Zero-Trust Cross-Domain Platform for Secure Intelligence Sharing Across Fifteen Agencies";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold">
                Intelligence Community Case Study
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              {mainHeadline}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              A secure, cross-domain collaboration platform enabling 15 partner agencies to share Top Secret/SCI information while maintaining strict compartmentalization and achieving a three-year record of zero security incidents.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              <Download className="mr-2 h-5 w-5" />
              Download Full Case Study (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">The Opportunity</p>
          <h2 className="text-4xl font-serif font-bold mb-8 leading-snug">
            Bridging Information Silos While Upholding the Highest Standards of Compartmentalized Security
          </h2>
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Intelligence Community (IC) operates on a foundation of shared, timely information, yet a major agency faced a critical challenge: intelligence was fragmented across 15 distinct partner organizations. Legacy systems were inherently siloed, lacking a secure, unified mechanism for cross-agency collaboration. This structural impediment significantly hindered mission-critical intelligence sharing, slowing down response times and creating operational inefficiencies in a high-stakes environment where seconds can determine mission success.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The core difficulty was not merely connecting the agencies, but doing so while adhering to the most stringent security protocols. The platform required the capability to handle Top Secret/Sensitive Compartmented Information (TS/SCI) and maintain strict compartmentalization. This necessitated a system capable of fine-grained access control, ensuring that only personnel with the correct clearance, need-to-know, and special access program authorization could view specific data, a requirement that traditional perimeter-based security models could not satisfy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Furthermore, the solution had to facilitate secure information flow between different classification domains—a complex cross-domain security challenge—while preventing unauthorized disclosure or data spillage. This operational requirement was compounded by the need for a comprehensive, immutable audit trail for all access, modifications, and sharing activities, ensuring continuous compliance with rigorous IC directives such as ICD 503. The agency required a partner capable of delivering a secure, scalable, and fully compliant platform under an IDIQ contract.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">The Solution</p>
          <h2 className="text-4xl font-serif font-bold mb-8 leading-snug">
            Implementing a Zero-Trust Architecture with Automated Classification and Cross-Domain Guardrails
          </h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              Our team designed and deployed a comprehensive, Zero-Trust-based cross-domain collaboration platform. The foundational element was a fine-grained Attribute-Based Access Control (ABAC) system, which enforced access decisions dynamically based on a user's clearance level, organizational affiliation, and the specific attributes of the data being requested. This replaced outdated role-based models, providing the necessary precision to maintain strict TS/SCI compartmentalization across all 15 partner agencies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              To manage the immense volume of classified data, we integrated an advanced Machine Learning-powered classification engine. This engine automatically tagged content with appropriate classification markings and compartment labels, achieving a verified accuracy rate of 99.1%. This automation significantly reduced human error and the administrative burden associated with manual classification. Concurrently, a secure cross-domain guard architecture was established to enable controlled, monitored information flow between different classification levels, incorporating human-in-the-loop review for all sensitive transfers.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The platform was completed with a suite of secure collaboration tools, including classified messaging, document co-editing, and video conferencing, all protected by end-to-end encryption and ephemeral key management. Furthermore, a continuous monitoring system, utilizing behavioral analytics and anomaly detection, was implemented to identify potential insider threats and unauthorized access attempts in real-time. This holistic approach ensured both maximum operational utility and uncompromised security compliance.
            </p>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="py-20 bg-muted">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">The Impact</p>
          <h2 className="text-4xl font-serif font-bold mb-8 leading-snug">
            Achieving Seamless Collaboration with a Three-Year Record of Perfect Security
          </h2>
          
          {/* Statistics Grid - Clean Grid Format */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-accent mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The deployment of the secure collaboration platform resulted in an immediate and measurable improvement in operational efficiency across the Intelligence Community. By connecting all 15 partner agencies and providing a unified, secure environment, the platform eliminated the critical information silos that had previously hampered intelligence operations. This integration enabled over 5,000 cleared users to actively collaborate, leading to an 85% reduction in the time required to share critical intelligence across domains.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crucially, the platform’s robust security architecture has delivered a perfect security record, with zero security incidents reported over three years of continuous operation. This achievement is a direct result of the fine-grained ABAC, the automated classification engine, and the continuous monitoring system, which collectively enforce a strict Zero-Trust posture. The 99.1% accuracy of the automated classification engine ensures that data is correctly handled from ingestion, minimizing the risk of accidental spillage or unauthorized access.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond security and speed, the solution ensured full regulatory compliance. The comprehensive, immutable audit system captures every user action, providing the necessary data for automated compliance reporting and maintaining 100% adherence to IC ICD 503 requirements. This success story demonstrates that it is possible to achieve unprecedented levels of cross-agency collaboration and speed without compromising the most stringent national security standards.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-snug">
            Secure Your Classified Operations
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Discover how our intelligence community solutions can enable secure collaboration at the highest classification levels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Classified Briefing
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
      </section>

      <Footer />
    </div>
  );
}
