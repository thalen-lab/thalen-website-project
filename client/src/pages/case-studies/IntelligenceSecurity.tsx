import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'wouter';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';

export default function IntelligenceSecurity() {
  const impactMetrics = [
    { value: '15', label: 'Agencies Connected' },
    { value: '5,000+', label: 'Cleared Users' },
    { value: '0', label: 'Security Incidents' },
    { value: '99.1%', label: 'Classification Accuracy' }
  ];

  const mainHeadline = "Establishing a Zero-Trust Cross-Domain Platform for Secure Intelligence Sharing Across Fifteen Agencies";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/intelligence-ops.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Intelligence Community' }
              ]} 
              variant="light" 
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Intelligence Community Case Study</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {mainHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              A secure, cross-domain collaboration platform enabling 15 partner agencies to share Top Secret/SCI information while maintaining strict compartmentalization and achieving a three-year record of zero security incidents.
            </p>
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
              <Download className="mr-2 h-5 w-5" />
              Download Full Case Study (PDF)
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Opportunity</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-8 leading-snug">
              Bridging Information Silos While Upholding the Highest Standards of Compartmentalized Security
            </h2>
            <div className="space-y-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                The Intelligence Community (IC) operates on a foundation of shared, timely information, yet a major agency faced a critical challenge: intelligence was fragmented across 15 distinct partner organizations. Legacy systems were inherently siloed, lacking a secure, unified mechanism for cross-agency collaboration. This structural impediment significantly hindered mission-critical intelligence sharing, slowing down response times and creating operational inefficiencies in a high-stakes environment where seconds can determine mission success.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The core difficulty was not merely connecting the agencies, but doing so while adhering to the most stringent security protocols. The platform required the capability to handle Top Secret/Sensitive Compartmented Information (TS/SCI) and maintain strict compartmentalization. This necessitated a system capable of fine-grained access control, ensuring that only personnel with the correct clearance, need-to-know, and special access program authorization could view specific data, a requirement that traditional perimeter-based security models could not satisfy.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Furthermore, the solution had to facilitate secure information flow between different classification domains—a complex cross-domain security challenge—while preventing unauthorized disclosure or data spillage. This operational requirement was compounded by the need for a comprehensive, immutable audit trail for all access, modifications, and sharing activities, ensuring continuous compliance with rigorous IC directives such as ICD 503. The agency required a partner capable of delivering a secure, scalable, and fully compliant platform under an IDIQ contract.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 md:py-28 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
              Implementing a Zero-Trust Architecture with Automated Classification and Cross-Domain Guardrails
            </h2>
            <div className="space-y-8">
              <p className="text-lg text-white/90 leading-relaxed">
                Our team designed and deployed a comprehensive, Zero-Trust-based cross-domain collaboration platform. The foundational element was a fine-grained Attribute-Based Access Control (ABAC) system, which enforced access decisions dynamically based on a user's clearance level, organizational affiliation, and the specific attributes of the data being requested. This replaced outdated role-based models, providing the necessary precision to maintain strict TS/SCI compartmentalization across all 15 partner agencies.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                To manage the immense volume of classified data, we integrated an advanced Machine Learning-powered classification engine. This engine automatically tagged content with appropriate classification markings and compartment labels, achieving a verified accuracy rate of 99.1%. This automation significantly reduced human error and the administrative burden associated with manual classification. Concurrently, a secure cross-domain guard architecture was established to enable controlled, monitored information flow between different classification levels, incorporating human-in-the-loop review for all sensitive transfers.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                The platform was completed with a suite of secure collaboration tools, including classified messaging, document co-editing, and video conferencing, all protected by end-to-end encryption and ephemeral key management. Furthermore, a continuous monitoring system, utilizing behavioral analytics and anomaly detection, was implemented to identify potential insider threats and unauthorized access attempts in real-time. This holistic approach ensured both maximum operational utility and uncompromised security compliance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Impact */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-8 leading-snug">
              Achieving Seamless Collaboration with a Three-Year Record of Perfect Security
            </h2>
            
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-lg border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-[oklch(0.65_0.18_55)] mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-600 uppercase tracking-wider">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                The deployment of the secure collaboration platform resulted in an immediate and measurable improvement in operational efficiency across the Intelligence Community. By connecting all 15 partner agencies and providing a unified, secure environment, the platform eliminated the critical information silos that had previously hampered intelligence operations. This integration enabled over 5,000 cleared users to actively collaborate, leading to an 85% reduction in the time required to share critical intelligence across domains.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Crucially, the platform's robust security architecture has delivered a perfect security record, with zero security incidents reported over three years of continuous operation. This achievement is a direct result of the fine-grained ABAC, the automated classification engine, and the continuous monitoring system, which collectively enforce a strict Zero-Trust posture. The 99.1% accuracy of the automated classification engine ensures that data is correctly handled from ingestion, minimizing the risk of accidental spillage or unauthorized access.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Beyond security and speed, the solution ensured full regulatory compliance. The comprehensive, immutable audit system captures every user action, providing the necessary data for automated compliance reporting and maintaining 100% adherence to IC ICD 503 requirements. This success story demonstrates that it is possible to achieve unprecedented levels of cross-agency collaboration and speed without compromising the most stringent national security standards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Secure Your Classified Operations
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover how our intelligence community solutions can enable secure collaboration at the highest classification levels.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule Classified Briefing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View More Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
