import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ATOSupport() {
  const phases = [
    {
      number: 1,
      title: "Project Kickoff: Security by Design",
      description: "During initial project planning, NexDyne Technology conducts a security requirements assessment to determine the appropriate authorization framework (FedRAMP, FISMA Moderate/High, DoD IL-4/5). We architect the system with security controls built in from the start, not bolted on later. This includes selecting FedRAMP-authorized cloud platforms when applicable to leverage inherited controls and accelerate authorization timelines.",
      activities: ["Authorization framework determination", "Security control baseline selection", "Architecture security review", "FedRAMP/StateRAMP platform evaluation"],
      deliverables: ["Security requirements document", "Control inheritance matrix", "ATO timeline integrated into project plan"]
    },
    {
      number: 2,
      title: "Development: Documentation in Parallel",
      description: "As NexDyne Technology develops and configures the system, our security team simultaneously documents security controls in the System Security Plan (SSP). We implement required controls using Infrastructure as Code and automated configuration management, creating auditable evidence of compliance. This parallel approach eliminates the typical post-development scramble to document what was built.",
      activities: ["System Security Plan (SSP) development", "Security control implementation", "Configuration management automation", "Continuous monitoring setup"],
      deliverables: ["Complete SSP documentation", "Security policies and procedures", "Control implementation evidence"]
    },
    {
      number: 3,
      title: "Testing: Security Assessment Coordination",
      description: "NexDyne Technology coordinates with third-party assessment organizations (3PAO) to validate security control effectiveness. We prepare the environment for assessment, manage the testing process, and rapidly remediate any findings. Our experience with federal security assessments means we anticipate common issues and address them proactively, minimizing assessment delays and rework.",
      activities: ["Pre-assessment readiness review", "3PAO coordination and support", "Vulnerability scanning and pen testing", "Finding remediation and retesting"],
      deliverables: ["Security Assessment Report (SAR)", "Plan of Action & Milestones (POA&M)", "Remediation evidence documentation"]
    },
    {
      number: 4,
      title: "Authorization & Go-Live",
      description: "NexDyne Technology prepares the authorization package and coordinates with the agency's Authorizing Official (AO) to secure final ATO approval. We establish continuous monitoring capabilities to maintain authorization and provide ongoing compliance support. The system goes live on schedule with full authorization in place—no delays, no surprises.",
      activities: ["Authorization package preparation", "Authorizing Official (AO) coordination", "Continuous monitoring implementation", "Go-live support and validation"],
      deliverables: ["ATO approval letter", "Continuous monitoring plan", "Ongoing compliance reporting"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/federal-building.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Government Solutions', href: '/federal-solutions' },
                { label: 'ATO Support & Authorization' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">ATO Support Built Into Every Implementation</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ATO Support & Authorization
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              When federal agencies choose NexDyne Technology to implement cloud migrations, automation platforms, 
              or data systems, they get more than technical expertise—they get a contractor who navigates 
              the entire ATO process from day one, ensuring your system goes live on schedule.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/methodology">
                  View RAPID Framework
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our ATO Approach Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Our ATO Approach</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Federal systems require Authority to Operate (ATO) before going live. NexDyne Technology 
              integrates security authorization into every implementation project from day one, ensuring 
              your system achieves ATO on schedule without delays.
            </p>
            
            <Card className="p-8 bg-white border-2 border-[oklch(0.70_0.18_55)]">
              <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-6">What Sets NexDyne Technology Apart</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-3">Deep Security Expertise</h4>
                  <ul className="space-y-2">
                    {["NIST 800-53 control implementation specialists on every project", "Proven System Security Plan (SSP) development methodology", "Established relationships with 3PAO assessment organizations"].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-3">Parallel Development Model</h4>
                  <ul className="space-y-2">
                    {["Security documentation progresses alongside technical development", "Continuous monitoring built into system architecture", "ATO milestones integrated into project timelines from kickoff"].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ATO Support Throughout Implementation Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.22_0.06_250)]">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Implementation Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ATO Support Throughout Implementation</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              NexDyne Technology integrates ATO activities into every phase of system implementation, ensuring 
              security authorization progresses in parallel with technical development—not as an afterthought.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-[oklch(0.65_0.18_55)] flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{phase.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{phase.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{phase.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-[oklch(0.97_0.01_250)] p-4 rounded-lg">
                          <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-3">Key Activities</h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                                <span className="text-sm text-slate-700">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-[oklch(0.97_0.01_250)] p-4 rounded-lg">
                          <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-3">Deliverables</h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                                <span className="text-sm text-slate-700">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FedRAMP Advantage Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Strategy</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Leveraging FedRAMP & StateRAMP</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              NexDyne Technology leverages FedRAMP and StateRAMP authorized platforms to accelerate 
              ATO timelines when appropriate. Using a FedRAMP-authorized platform does not automatically 
              grant your agency ATO—your specific implementation still requires authorization.
            </p>
            
            <Card className="p-8 bg-[oklch(0.22_0.06_250)] text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">Understanding Control Inheritance</h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                FedRAMP authorization means the cloud platform infrastructure (AWS GovCloud, Azure Government, 
                Salesforce Government Cloud) has been pre-authorized by the vendor. This provides 
                <strong> inherited controls</strong> that reduce the number of controls your agency must 
                implement and document.
              </p>
              <p className="text-white/90 leading-relaxed">
                However, <strong>customer-managed controls</strong> remain your responsibility: platform 
                configuration, user access management, system integration, and data handling all require 
                documentation and validation. NexDyne Technology manages this inheritance model by documenting 
                which controls are inherited versus agency-managed, and implementing customer-managed controls correctly.
              </p>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">FedRAMP Advantages</h3>
                  <ul className="space-y-3">
                    {["Reduced ATO timeline: 6-9 months vs. 18-24 months for custom systems", "Inherited infrastructure controls reduce documentation burden", "Platform vendor maintains continuous monitoring for inherited controls", "Proven security baseline accepted across federal agencies"].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Agency Responsibilities</h3>
                  <ul className="space-y-3">
                    {["Document agency-specific system configuration and data flows", "Implement customer-managed security controls (access, encryption, logging)", "Conduct security assessment for the agency's implementation", "Obtain agency-specific ATO from Authorizing Official"].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAR Compliance Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Regulatory Compliance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">FAR Compliance Integrated with ATO Process</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Federal Acquisition Regulation requirements are integrated into our ATO methodology, ensuring contract compliance throughout the security authorization lifecycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Security Safeguards (FAR 52.239-1)",
                description: "Our ATO process ensures compliance with FAR 52.239-1 Privacy or Security Safeguards, documenting security controls and privacy protections required for federal IT systems.",
                items: ["Security control implementation documented in System Security Plan (SSP)", "Privacy Impact Assessment (PIA) completed for systems handling PII", "Continuous monitoring ensures ongoing compliance with security requirements"]
              },
              {
                title: "Information Safeguarding (FAR 52.204-21)",
                description: "ATO implementations include FAR 52.204-21 Basic Safeguarding requirements for Covered Contractor Information Systems, protecting federal information throughout the project lifecycle.",
                items: ["NIST SP 800-171 controls implemented for CUI protection", "Incident response procedures documented and tested", "Security assessment validates safeguarding effectiveness"]
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{card.title}</h3>
                  <p className="text-slate-600 mb-4">{card.description}</p>
                  <ul className="space-y-2">
                    {card.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mt-8 p-8 bg-white border-2 border-[oklch(0.70_0.18_55)]">
              <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Procurement Advantages</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Streamlined Contract Execution", desc: "Pre-established FAR compliance frameworks reduce contract negotiation time and enable faster project initiation." },
                  { title: "Reduced Oversight Burden", desc: "Documented compliance with FAR security requirements minimizes agency oversight and contractor management effort." },
                  { title: "Audit-Ready Documentation", desc: "Maintained compliance records support agency audits and CPARS evaluations with evidence of regulatory adherence." }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Implementation Expertise with ATO Built-In</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Partner with NexDyne Technology for implementation expertise that includes security 
              authorization from day one. Your systems go live on schedule with full ATO in place.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View Case Studies
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
