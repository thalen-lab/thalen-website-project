import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Download } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";

export default function DefenseCloud() {
  const impactMetrics = [
    { value: '100%', label: 'Uptime Maintained' },
    { value: '18 mo', label: 'Migration Timeline' },
    { value: 'Level 3', label: 'CMMC Certification' },
    { value: '$4.5M', label: 'Annual Savings' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/defense-cyber-ops.b7c4e1f3.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Defense Cloud Migration' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Defense Case Study</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Defense Contractor Achieves Zero-Downtime Cloud Migration
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              How a major defense contractor modernized its entire infrastructure while maintaining continuous operations and achieving CMMC Level 3 certification
            </p>
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
              <Download className="mr-2 h-5 w-5" />
              Download Full Case Study (PDF)
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Opportunity Section */}
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
              A defense contractor recognized that legacy infrastructure threatened future competitiveness
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                Defense contractors operate in an environment where technological capability directly determines competitive advantage. A major contractor with more than two billion dollars in annual Department of Defense contracts understood this reality acutely. The company's aging on-premises infrastructure, built over two decades of organic growth and acquisitions, had become a strategic liability. Legacy systems limited the organization's ability to respond quickly to new contract opportunities, increased cybersecurity risks, and consumed resources that could be better deployed toward innovation.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                The situation grew more urgent as the Department of Defense announced that future contracts would require Cybersecurity Maturity Model Certification at Level 3. The contractor's existing infrastructure could not meet these requirements without fundamental modernization. Leadership recognized that the organization faced a choice: undertake a comprehensive cloud migration that would position the company for future growth, or accept gradual obsolescence as competitors leveraged more modern technology platforms.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                The challenge extended beyond technology. The contractor supported critical defense programs that operated continuously. Any disruption to these systems could jeopardize national security missions and breach contract obligations. The Chief Information Officer needed to modernize the entire infrastructure while maintaining perfect operational continuity. The organization required a partner who understood both the technical complexities of large-scale cloud migration and the unique requirements of defense sector operations. The contractor was determined to prove that comprehensive modernization and zero downtime were not mutually exclusive objectives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution Section */}
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
              A phased migration strategy delivered complete modernization without compromising operations
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg text-white/90 leading-relaxed">
                The contractor needed more than a lift-and-shift migration. The organization required a transformation that would modernize application architectures, strengthen security posture, and establish a foundation for continuous innovation. Working with NexDyne, the contractor designed and executed an eighteen-month migration strategy that moved more than 150 applications and 500 terabytes of classified data to AWS GovCloud and Azure Government environments.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                The approach prioritized risk mitigation through careful sequencing and comprehensive testing. The migration began with non-critical applications that would provide valuable lessons without jeopardizing essential operations. Each application moved through a standardized process: assessment and planning, architecture redesign for cloud-native capabilities, parallel deployment in the target environment, extensive testing and validation, cutover during planned maintenance windows, and post-migration optimization. This methodology ensured that the team identified and resolved issues before they could impact production systems.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                The technical architecture leveraged the unique capabilities of government cloud environments while maintaining strict security boundaries. Sensitive workloads deployed to AWS GovCloud regions with FedRAMP High authorization. The platform implemented defense-in-depth security with network segmentation, encryption at rest and in transit, comprehensive logging and monitoring, and automated compliance validation. The migration team worked closely with DoD cybersecurity assessors throughout the process, ensuring that the new environment would meet CMMC Level 3 requirements. By the time the final application migrated, the contractor had achieved certification and established operational patterns that would maintain compliance as the environment evolved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Impact Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] leading-snug">
              Transforming competitive position through modernization
            </h2>
          </motion.div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              The migration transformed the contractor's competitive position. The organization achieved CMMC Level 3 certification three months before the DoD deadline, positioning itself to compete for contracts that many competitors could not yet pursue. The modern cloud infrastructure enabled the contractor to respond to new opportunities with unprecedented speed. Proposal teams could spin up development environments in hours rather than weeks, allowing the organization to demonstrate technical capabilities during the competitive process rather than merely describing them.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              The financial impact exceeded initial projections. Infrastructure costs decreased by 4.5 million dollars annually as the organization eliminated expensive data center leases and reduced the staff required for hardware maintenance. The cloud platform's elasticity allowed the contractor to scale resources to match project demands, avoiding both over-provisioning during quiet periods and capacity constraints during peak workloads. The migration achieved return on investment in just over two years, with ongoing savings continuing to accrue.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Perhaps most significantly, the transformation established a foundation for continuous innovation. Development teams adopted cloud-native architectures and DevSecOps practices that accelerated software delivery while strengthening security. The contractor now deploys new capabilities multiple times per week rather than quarterly, enabling rapid response to changing mission requirements. The organization's success with cloud migration has become a competitive differentiator in its own right, with the DoD citing the contractor's modern infrastructure as a factor in several recent contract awards. The company proved that defense contractors could achieve the agility of commercial technology companies without compromising the security and reliability that national security missions demand.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Modernize your infrastructure without compromising operations
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discover how strategic cloud migration can help your organization achieve compliance, reduce costs, and accelerate innovation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule a Consultation
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
