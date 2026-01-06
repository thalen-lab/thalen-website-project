import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function About() {
  const principles = [
    {
      number: '01',
      title: 'Powering Government Mission Success',
      description: 'Every automation strategy is designed to augment human decision-making with intelligent insights, not replace critical thinking. We believe the most powerful transformations happen when technology amplifies human expertise.'
    },
    {
      number: '02',
      title: 'Security by Design',
      description: 'Government-grade security isn\'t an afterthought—it\'s the foundation. Every solution is architected with zero-trust principles, comprehensive compliance frameworks, and the highest levels of operational security.'
    },
    {
      number: '03',
      title: 'Measurable Impact',
      description: 'Strategy without measurement is just hope. We architect every automation implementation with clear ROI metrics, performance baselines, and continuous optimization frameworks that demonstrate tangible business value.'
    }
  ];

  const values = [
    {
      title: 'Commitment',
      letter: 'C',
      description: 'Unwavering dedication to government mission success. We treat every agency engagement as mission-critical and deliver results that directly support public sector objectives with zero compromise on quality or security.'
    },
    {
      title: 'Balance',
      letter: 'B',
      description: 'Harmonizing innovation with stability. We balance modern AI capabilities with established methodologies, delivering results without operational disruption or unnecessary risk.'
    },
    {
      title: 'Accountability',
      letter: 'A',
      description: 'Measurable results, transparent reporting. We hold ourselves accountable to ROI projections, delivery timelines, and security standards — with real-time dashboards tracking every metric that matters.'
    },
    {
      title: 'Mastery',
      letter: 'M',
      description: 'Deep expertise across the full automation stack. Our team maintains implementation expertise in FedRAMP (federal agencies), StateRAMP/GovRAMP (state, local, tribal), and CMMC frameworks, along with cloud platform certifications (AWS, Azure), backed by 15+ years of specialized experience in government transformation.'
    }
  ];

  const teamStats = [
    { value: '25+', label: 'Years Federal Service' },
    { value: '500+', label: 'Agency Partners Served' },
    { value: '15+', label: 'FedRAMP Authorizations' },
    { value: '100%', label: 'Mission Success Rate' }
  ];

  const operationalStats = [
    { value: '100%', label: 'Onsite Integration' },
    { value: 'Zero', label: 'Operational Downtime' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero - Founding Story */}
      <section className="relative py-12 sm:py-16 md:py-20 text-white">
        <div className="absolute inset-0 bg-[url('/img/patterns/hero-pattern.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="relative container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb 
              items={[{ label: 'About Us' }]} 
              variant="light" 
              className="mb-6 md:mb-8"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 text-center leading-tight text-white">
                Powering Government Mission Success Through Technology
              </h1>
              
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white/90">
                <p>
                  For 25 years, Thalen Technologies has been the trusted technology partner for federal, state, and local government agencies. We've witnessed the evolution of government technology—from legacy mainframes to cloud-native solutions—and we've been there every step of the way, helping our agency partners modernize critical systems, secure sensitive data, and deliver superior citizen services.
                </p>
                
                <p>
                  We founded Thalen Technologies with a clear mission: to be the government's most trusted technology partner. We saw too many providers treating public sector work as just another contract. We knew there had to be a better way—one that combined deep government expertise with battle-tested methodologies specifically designed for the unique challenges of federal, state, and local agencies.
                </p>
                
                <p>
                  Today, we continue that mission with the same commitment to excellence that has made us a trusted partner to hundreds of government agencies across all levels. Our deep government expertise also enables us to bring government-grade security and compliance standards to regulated industries—applying the same rigorous frameworks demanded by our agency partners to solve challenges in healthcare, finance, and critical infrastructure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Mission</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">
              To deliver strategic automation that amplifies organizational capability while maintaining mission-critical security.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Our Principles</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-[120px_1fr] gap-8 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-7xl md:text-8xl font-bold text-[oklch(0.65_0.18_55)]/20">
                  {principle.number}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{principle.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Our Approach</h2>
              <p className="text-2xl md:text-3xl text-slate-600 mb-8">
                We transform complex government challenges into mission-enabling capabilities through intelligent automation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our specialty lies in architecting automation solutions for government environments—where security clearances are required, where compliance is non-negotiable, and where operational failure impacts citizens and national security. We deliver measurable mission impact while maintaining the highest standards of security and operational excellence that government demands.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Every engagement begins with deep process analysis to identify the highest-impact automation opportunities for your agency. We then deploy proven frameworks that integrate seamlessly with existing government operations, ensuring zero disruption while delivering significant results that scale with your mission requirements.
              </p>
              
              <Link href="/services/automation">
                <Button variant="outline" size="lg" className="group">
                  Our Automation Strategy
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* How We Operate */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">How we operate</h3>
            <p className="text-2xl md:text-3xl text-slate-600 mb-12">
              We deploy automation strategists directly to your agency's most critical operations.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our consultants embed with your agency teams to understand the nuances of government processes, identify optimization opportunities, and implement solutions that deliver immediate and lasting mission impact. We don't build from the outside looking in—we work from within your operations to architect transformation that serves your mission and the citizens who depend on it.
                </p>
              </div>
              
              <div>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  This approach allows us to deliver automation strategies that integrate seamlessly with existing government workflows, maintain operational security at the highest levels, and scale with your agency's evolving mission needs. Every solution is battle-tested in real-world government environments before full deployment.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {operationalStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Where We're Needed Most */}
            <div className="bg-[oklch(0.97_0.01_250)] rounded-lg p-8 md:p-12">
              <h4 className="text-2xl md:text-3xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Where we're needed most</h4>
              
              <div className="space-y-6 text-lg text-slate-600 mb-8">
                <p>
                  We identify the most critical operational challenges that pose the greatest risk not only to agency efficiency, but to mission success itself. Whether it's a federal agency struggling with manual processes that compromise national security timelines, a state government modernizing citizen services, or a local municipality streamlining operations, we focus our efforts where automation can deliver the most strategic value for government and the citizens they serve.
                </p>
                
                <p>
                  Government agencies face unique constraints—limited budgets, complex procurement requirements, and the critical need to maintain public trust. Our approach with all our agency partners is the same: identify the highest-impact opportunities and establish a partnership that transforms not just individual processes, but mission capability. We also extend this government-grade approach to regulated industries that demand the same level of security and compliance rigor.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h5 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">Strategic Assessment</h5>
                    <p className="text-slate-600">
                      We begin every engagement with comprehensive process analysis to identify the automation opportunities that will deliver maximum business impact.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h5 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">Embedded Implementation</h5>
                    <p className="text-slate-600">
                      Our teams work directly within your operations to ensure solutions integrate seamlessly with existing workflows and security requirements.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - CBAM */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The CBAM framework guides every engagement and drives our commitment to client success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="text-5xl font-bold text-[oklch(0.65_0.18_55)]/20 mb-2">{value.letter}</div>
                    <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Our people</h2>
              
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  At our foundation, we've assembled a team that combines practical expertise in automation technologies, deep understanding of government operations at every level, and an uncompromising engineering mindset focused on delivering measurable results in service of agency missions. Many of our team members have served in federal, state, and local government roles, bringing firsthand knowledge of the challenges our agency partners face.
                </p>
                
                <p>
                  What brings us together is an unwavering commitment to government mission success and the belief that intelligent automation should amplify public servant capability, enabling them to better serve citizens and accomplish their critical objectives.
                </p>
              </div>

              <Link href="/team">
                <Button variant="outline" size="lg" className="mt-8 group">
                  Meet Our Experts
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {teamStats.map((stat, index) => (
                <Card key={index} className="text-center bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-4xl md:text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Certifications & Compliance</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Government-Grade Security & Compliance</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Certified expertise across federal, state, and local government compliance frameworks with experience in high-security environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <Card className="text-center bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold mb-3 text-[oklch(0.20_0.05_250)]">FedRAMP Expert</h3>
                  <p className="text-sm text-slate-600">
                    Deep expertise implementing FedRAMP-authorized platforms for federal agencies at Moderate and High impact levels with proven ATO support.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="text-center bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="inline-block bg-[oklch(0.65_0.18_55)]/10 text-[oklch(0.65_0.18_55)] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    STATE & LOCAL
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-[oklch(0.20_0.05_250)]">StateRAMP/GovRAMP Authorized</h3>
                  <p className="text-sm text-slate-600">
                    Certified expertise implementing StateRAMP/GovRAMP-authorized platforms for state, local, and tribal governments with full authorization support.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold mb-3 text-[oklch(0.20_0.05_250)]">CMMC Consulting Services</h3>
                  <p className="text-sm text-slate-600">
                    Expert consulting to help defense contractors achieve CMMC Level 2 and Level 3 compliance through comprehensive gap analysis and controls implementation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="text-center bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold mb-3 text-[oklch(0.20_0.05_250)]">CJIS Compliant</h3>
                  <p className="text-sm text-slate-600">
                    CJIS-compliant implementations for state and local law enforcement agencies with full FBI security policy adherence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-slate-600 mb-4">
              Additional expertise: ISO 27001:2022 implementation services, NIST Cybersecurity Framework v2.0, GSA Schedule application in progress, Top Secret/SCI cleared personnel available upon contract award
            </p>
            <Card className="border-2 border-slate-200 bg-white max-w-4xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 text-[oklch(0.20_0.05_250)]">Federal Acquisition Regulation (FAR) Compliance</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Thalen Technologies maintains compliance with Federal Acquisition Regulation requirements for government IT services, including FAR Part 39 (Acquisition of Information Technology) and associated security clauses.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">FAR 52.204-21</p>
                    <p className="text-slate-600 text-xs">Basic Safeguarding of Covered Contractor Information Systems</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">FAR 52.239-1</p>
                    <p className="text-slate-600 text-xs">Privacy or Security Safeguards for IT systems and services</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">DFARS 252.204-7012</p>
                    <p className="text-slate-600 text-xs">Safeguarding Covered Defense Information (DoD contracts)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Our Vision for the Future</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Organizations around the world are using Thalen Technologies to transform their most important operations.
            </h2>
            
            <div className="space-y-6 text-lg text-white/90">
              <p>
                With Thalen Technologies's automation strategies, government agencies are achieving new levels of operational efficiency while maintaining the highest security standards. Federal departments are reducing processing times from weeks to hours, healthcare systems are improving patient outcomes through streamlined workflows, and critical infrastructure operators are enhancing reliability through predictive automation.
              </p>
              
              <p>
                Defense contractors are building stronger cases for mission readiness. Intelligence agencies are accelerating threat analysis capabilities. Healthcare organizations are directing resources more effectively to patient care. Manufacturing operations are optimizing supply chains with unprecedented precision. Financial institutions are strengthening compliance while improving service delivery.
              </p>
              
              <p>
                We are working to build a future in which government agencies, healthcare systems, and critical infrastructure operators can leverage automation to function as they were designed—to fulfill the missions with which they've been entrusted, to deliver maximum value to citizens, and to protect the systems most vital to our society.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
