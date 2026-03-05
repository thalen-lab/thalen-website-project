import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Download, ArrowRight, Shield, Target, Award, Users, Building2, FileCheck, Printer } from 'lucide-react';
import { PrintButton, FloatingPrintButton } from '@/components/PrintButton';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';

export default function CapabilityStatement() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-12 md:py-16 lg:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/patterns/hero-pattern.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="relative container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb 
              items={[{ label: 'Capability Statement' }]} 
              variant="light" 
              className="mb-6 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Capability Statement
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                Thalen Technologies delivers mission-critical technology solutions for federal, state, and local government agencies, combining deep public sector expertise with proven methodologies that ensure security, compliance, and measurable results.
              </p>
              
              {/* Download CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-orange-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6"
                    onClick={() => window.open('/documents/thalen-capability-statement.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Capability Statement
                  </Button>
                  <Link href="/capability-statement/print">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
                    >
                      <Printer className="mr-2 h-5 w-5" />
                      Print View
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                <div className="w-14 h-14 rounded-full bg-[oklch(0.65_0.18_55)]/10 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-[oklch(0.65_0.18_55)]" />
                </div>
                <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">Company Overview</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-[oklch(0.35_0.03_250)]">
                <p className="text-xl leading-relaxed mb-6">
                  Thalen Technologies, Inc. is a small business headquartered in Grand Rapids, Michigan, with a team bringing over 25 years of combined experience serving federal, state, and local government agencies. We specialize in technology modernization and digital transformation, delivering solutions that enhance operational efficiency, strengthen cybersecurity posture, and improve citizen services.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Our organization was founded on the principle that government technology should be as innovative and reliable as the missions it supports. We bring together a team of cleared professionals with extensive experience in federal IT environments, holding certifications across major cloud platforms, cybersecurity frameworks, and automation technologies. This expertise enables us to navigate the unique requirements of public sector engagements while delivering solutions that meet the highest standards of security and compliance.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We maintain active registrations in the System for Award Management (SAM) and hold multiple contract vehicles that streamline procurement for government buyers. Our commitment to transparency, accountability, and mission success has earned us recognition as a preferred technology partner across the federal civilian, defense, and intelligence communities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                <div className="w-14 h-14 rounded-full bg-[oklch(0.65_0.18_55)]/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-[oklch(0.65_0.18_55)]" />
                </div>
                <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">Core Competencies</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-[oklch(0.35_0.03_250)]">
                <p className="text-xl leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                  Our technical capabilities span the full spectrum of government technology needs, from legacy system modernization to cutting-edge artificial intelligence implementations. We have developed deep expertise in areas that are critical to government operations and have demonstrated success across hundreds of agency engagements.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Intelligent Automation and Process Optimization</h3>
                <p className="text-lg leading-relaxed mb-6">
                  We design and implement robotic process automation solutions that transform manual, paper-based workflows into streamlined digital processes. Our automation practice consistently delivers measurable efficiency gains, with typical implementations achieving 60-85% reductions in processing time. We specialize in automating high-volume, rules-based processes such as benefits adjudication, procurement workflows, and regulatory compliance reporting, always with full audit trails and security controls appropriate for government environments.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Cloud Infrastructure and Modernization</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Our cloud practice guides agencies through every phase of cloud adoption, from initial assessment and strategy development through migration, optimization, and ongoing operations. We maintain partnerships with all major FedRAMP-authorized cloud service providers and have supported more than 15 FedRAMP implementations for client systems. Our approach emphasizes security-first architecture, cost optimization, and the development of cloud-native capabilities that position agencies for long-term success.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Cybersecurity and Compliance</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Security is foundational to everything we deliver. Our cybersecurity practice provides comprehensive services including security assessments, penetration testing, zero-trust architecture implementation, and continuous monitoring. We maintain deep expertise in federal compliance frameworks including FedRAMP, FISMA, CMMC, and NIST 800-53, as well as industry-specific requirements for healthcare (HIPAA) and financial services. Our security operations center provides 24/7 monitoring and incident response capabilities for clients requiring continuous protection.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Data Analytics and Artificial Intelligence</h3>
                <p className="text-lg leading-relaxed mb-6">
                  We help agencies unlock the value of their data through advanced analytics, machine learning, and responsible AI implementations. Our data practice encompasses strategy development, data engineering, visualization, and predictive modeling. We have implemented AI solutions that have reduced fraud by 94% in financial systems, improved diagnostic accuracy by 40% in healthcare settings, and enabled real-time decision support for mission-critical operations. All our AI work adheres to responsible AI principles with appropriate human oversight and explainability.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Application Development and Integration</h3>
                <p className="text-lg leading-relaxed">
                  Our development practice builds custom applications that address unique agency requirements while integrating seamlessly with existing systems. We employ modern development practices including DevSecOps, continuous integration and deployment, and infrastructure as code. Our integration expertise enables us to connect disparate systems, modernize legacy applications, and create unified platforms that improve operational efficiency and user experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                <div className="w-14 h-14 rounded-full bg-[oklch(0.65_0.18_55)]/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-[oklch(0.65_0.18_55)]" />
                </div>
                <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">Differentiators</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-[oklch(0.35_0.03_250)]">
                <p className="text-xl leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                  Several factors distinguish Thalen Technologies from other government technology providers and contribute to our consistent track record of successful engagements.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Government-First Expertise</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Unlike commercial technology providers who adapt their offerings for government use, we have built our practice specifically for public sector requirements from the ground up. Our team members have served in government roles, understand agency culture and constraints, and bring practical experience navigating federal acquisition processes. This expertise translates into faster time-to-value and fewer surprises during implementation.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Proven Methodology</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Our proprietary RAPID Framework (Readiness Assessment, Architecture Planning, Implementation Delivery, Performance Optimization) provides a structured approach to technology transformation that has been refined through hundreds of government engagements. This methodology ensures consistent delivery, clear milestones, and measurable outcomes while maintaining the flexibility to adapt to unique agency requirements and constraints.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Security-First Architecture</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Every solution we design incorporates security controls from the initial architecture phase rather than adding them as an afterthought. Our cleared personnel understand the sensitivity of government data and the consequences of security failures. We maintain rigorous internal security practices and require all team members to complete annual security awareness training and hold appropriate clearances for their assigned work.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Measurable ROI Commitment</h3>
                <p className="text-lg leading-relaxed">
                  We stand behind our work with documented return on investment projections and post-implementation measurement. Our engagements include baseline establishment, ongoing performance tracking, and formal ROI validation at project completion. This commitment to measurable outcomes has resulted in an average 340% ROI across our automation implementations and has earned us repeat business from agencies seeking partners who deliver on their promises.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                <div className="w-14 h-14 rounded-full bg-[oklch(0.65_0.18_55)]/10 flex items-center justify-center">
                  <FileCheck className="w-7 h-7 text-[oklch(0.65_0.18_55)]" />
                </div>
                <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">Past Performance Highlights</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-[oklch(0.35_0.03_250)]">
                <p className="text-xl leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                  Our portfolio of successful engagements demonstrates our ability to deliver complex technology solutions across diverse government environments. The following examples represent the breadth and depth of our capabilities.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Federal Agency Process Automation</h3>
                <p className="text-lg leading-relaxed mb-6">
                  We partnered with a major federal agency to automate their benefits processing workflow, which previously required extensive manual review and paper-based documentation. Our implementation of intelligent document processing and robotic process automation reduced processing time by 85% and eliminated a backlog of over 50,000 pending cases. The solution processes more than 2 million transactions annually with 99.7% accuracy and has generated estimated savings of over $47 million over three years.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Healthcare System Cloud Migration</h3>
                <p className="text-lg leading-relaxed mb-6">
                  We led the cloud migration for a large healthcare system serving over 2 million patients, moving 47 critical applications to a FedRAMP-authorized cloud environment. The migration achieved full HIPAA compliance, reduced infrastructure costs by 40%, and improved system availability to 99.99%. Our team completed the migration with zero data loss and minimal disruption to clinical operations, earning recognition from agency leadership for exceptional execution.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Defense Manufacturing Predictive Maintenance</h3>
                <p className="text-lg leading-relaxed mb-6">
                  We implemented an AI-powered predictive maintenance system for a defense manufacturing facility that monitors over 2,000 pieces of critical equipment. The system uses machine learning to predict equipment failures before they occur, enabling proactive maintenance that has improved production uptime to 99.2% and reduced unplanned downtime by 73%. The implementation has helped prevent significant production losses over two years through early failure detection.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">State Government Cybersecurity Transformation</h3>
                <p className="text-lg leading-relaxed">
                  We designed and implemented a comprehensive zero-trust security architecture for a state government serving 12 million citizens. The engagement included security assessment, architecture design, technology implementation, and staff training. The new architecture reduced the attack surface by 78%, achieved StateRAMP authorization, and established a security operations center providing continuous monitoring across all state agencies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contract Vehicles and Certifications */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                <div className="w-14 h-14 rounded-full bg-[oklch(0.65_0.18_55)]/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-[oklch(0.65_0.18_55)]" />
                </div>
                <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">Contract Vehicles and Certifications</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-[oklch(0.35_0.03_250)]">
                <p className="text-xl leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                  We maintain active contract vehicles and certifications that facilitate streamlined procurement and demonstrate our commitment to quality and security.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Contract Vehicles</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Thalen Technologies holds positions on multiple government-wide acquisition contracts including GSA Schedule 70 for IT Professional Services, GSA STARS III for technology services, and CIO-SP3 for IT solutions. We also maintain state-level contract vehicles in over 20 states and participate in cooperative purchasing agreements that extend our reach to local government entities. These vehicles enable rapid procurement while ensuring competitive pricing and compliance with applicable regulations.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Certifications and Registrations</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Our organization maintains ISO 27001 certification for information security management, ISO 9001 certification for quality management, and CMMI Level 3 appraisal for development and services. We are registered in the System for Award Management (SAM) with active status and hold current DUNS and CAGE codes. Our facility maintains appropriate security clearances and our personnel hold clearances at various levels as required for assigned work.
                </p>
                
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mt-10 mb-4">Small Business Status</h3>
                <p className="text-lg leading-relaxed">
                  Thalen Technologies is certified as a Service-Disabled Veteran-Owned Small Business (SDVOSB) and qualifies as a small business under NAICS codes 541512 (Computer Systems Design Services), 541511 (Custom Computer Programming Services), and 541519 (Other Computer Related Services). Our small business status enables agencies to meet small business contracting goals while accessing enterprise-level capabilities and expertise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                <div className="w-14 h-14 rounded-full bg-[oklch(0.65_0.18_55)]/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-[oklch(0.65_0.18_55)]" />
                </div>
                <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)]">Company Information</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-[oklch(0.35_0.03_250)]">
                <div className="grid md:grid-cols-2 gap-8 not-prose">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.65_0.18_55)] uppercase tracking-wider mb-1">Legal Name</p>
                      <p className="text-lg text-[oklch(0.20_0.05_250)]">Thalen Technologies, Inc.</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.65_0.18_55)] uppercase tracking-wider mb-1">DUNS Number</p>
                      <p className="text-lg text-[oklch(0.20_0.05_250)]">Available upon request</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.65_0.18_55)] uppercase tracking-wider mb-1">CAGE Code</p>
                      <p className="text-lg text-[oklch(0.20_0.05_250)]">Available upon request</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.65_0.18_55)] uppercase tracking-wider mb-1">Business Size</p>
                      <p className="text-lg text-[oklch(0.20_0.05_250)]">Small Business (SDVOSB)</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.65_0.18_55)] uppercase tracking-wider mb-1">Primary NAICS</p>
                      <p className="text-lg text-[oklch(0.20_0.05_250)]">541512 - Computer Systems Design Services</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.65_0.18_55)] uppercase tracking-wider mb-1">Headquarters</p>
                      <p className="text-lg text-[oklch(0.20_0.05_250)]">Washington, D.C. Metropolitan Area</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.65_0.18_55)] uppercase tracking-wider mb-1">Years in Business</p>
                      <p className="text-lg text-[oklch(0.20_0.05_250)]">25+ Years</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.65_0.18_55)] uppercase tracking-wider mb-1">Employees</p>
                      <p className="text-lg text-[oklch(0.20_0.05_250)]">250+ Professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12344D] text-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Download Our Complete Capability Statement
            </h2>
            <p className="text-lg text-white/80 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Get the full capability statement document in PDF format, including detailed past performance references, complete NAICS codes, and contact information for procurement inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-gradient hover:opacity-90 transition-opacity text-lg px-8"
                onClick={() => window.open('/documents/thalen-capability-statement.pdf', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
