import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function FederalGovernment() {
  const capabilities = [
    'FedRAMP Authorized (Moderate & High)',
    'StateRAMP Authorized Platforms',
    'FISMA Moderate ATO',
    'CJIS Compliant (Law Enforcement)',
    'Top Secret/SCI Cleared Team',
    'NIST 800-171 Compliance',
    'Continuous Monitoring (ConMon)',
    'Authority to Operate (ATO) Support'
  ];

  const agencies = [
    { name: 'Department of Defense', projects: '15+ Projects' },
    { name: 'Intelligence Community', projects: 'TS/SCI Cleared' },
    { name: 'Civilian Agencies', projects: '25+ Agencies' },
    { name: 'State & Local Gov', projects: 'Nationwide' }
  ];

  const challenges = [
    {
      title: 'Legacy System Modernization',
      description: 'Government agencies operate critical infrastructure on aging COBOL and mainframe systems that are expensive to maintain and difficult to integrate with modern technologies. These legacy systems create operational bottlenecks, security vulnerabilities, and limit the ability to deliver citizen services efficiently.'
    },
    {
      title: 'Compliance & Security Requirements',
      description: 'Meeting stringent federal security standards including FedRAMP, FISMA, NIST 800-53, and CMMC requires specialized expertise and continuous monitoring. Agencies must balance mission effectiveness with rigorous compliance requirements while protecting sensitive data and maintaining operational security.'
    },
    {
      title: 'Budget Constraints & ROI Pressure',
      description: 'Federal IT budgets face increasing scrutiny with mandates to demonstrate measurable ROI and cost savings. Agencies must modernize aging infrastructure while reducing operational costs, often with limited resources and competing priorities across multiple mission-critical systems.'
    },
    {
      title: 'Workforce Transformation',
      description: 'The federal workforce faces a skills gap as experienced personnel retire and new technologies emerge. Agencies must train existing staff on modern automation tools while competing with private sector for technical talent, all while maintaining continuity of mission-critical operations.'
    }
  ];

  const solutions = [
    {
      title: 'Zero-Trust Security Architecture',
      description: 'We implement comprehensive zero-trust frameworks that exceed federal security requirements while enabling operational agility. Our approach includes continuous authentication, micro-segmentation, and real-time threat detection across all network layers. Every solution is designed with FedRAMP High authorization in mind, incorporating defense-in-depth strategies that protect sensitive data while maintaining mission effectiveness.'
    },
    {
      title: 'Mission-Focused Automation',
      description: 'Our automation strategies align directly with agency mission objectives, delivering measurable improvements in operational efficiency and citizen service delivery. We analyze existing workflows to identify high-impact automation opportunities that reduce manual processing time by an average of 85% while maintaining full compliance with federal regulations. Each implementation includes comprehensive change management to ensure successful adoption across the organization.'
    },
    {
      title: 'Cleared Team & ATO Support',
      description: 'Our Top Secret/SCI cleared engineers and consultants have decades of combined federal experience, enabling us to work on classified systems and sensitive operations. We provide end-to-end ATO support including security control implementation, documentation preparation, and continuous monitoring setup. Our team has successfully achieved 50+ federal ATOs across multiple agencies and impact levels.'
    },
    {
      title: 'Agile Delivery & Rapid Deployment',
      description: 'We leverage agile methodologies tailored for federal environments, delivering working capabilities in 30-day sprints while maintaining full documentation and compliance requirements. Our RAPID Framework accelerates time-to-value through iterative development, continuous stakeholder engagement, and automated testing pipelines. This approach reduces typical project timelines by 40% compared to traditional waterfall methods.'
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
          style={{ backgroundImage: "url('/federal-solutions-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Industries' },
                { label: 'Federal Government' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Core Competency</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Government Agency Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Trusted partner for mission-critical automation and modernization across federal, state, and local government agencies. FedRAMP and StateRAMP authorized with Top Secret/SCI cleared teams delivering measurable results for defense, intelligence, civilian, and public sector operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule Government Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View Government Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Federal Experience Stats */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '15+', label: 'Years Federal Experience' },
              { value: '50+', label: 'Successful ATOs' },
              { value: '$2.3B+', label: 'Federal ROI Delivered' },
              { value: '100%', label: 'Security Clearance Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Federal Challenges */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Challenges</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Federal IT Challenges We Solve</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Government agencies face unique operational, security, and budgetary challenges that require specialized expertise and proven methodologies. Thalen Technologies delivers solutions that address these complex requirements while maintaining mission continuity.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{challenge.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Our Federal Solutions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive automation and modernization services designed specifically for federal requirements, delivered by cleared professionals with deep government experience.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{solution.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Security & Compliance</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Government-Grade Security & Compliance</h2>
              <p className="text-lg text-slate-600 mb-6">
                Thalen Technologies maintains the highest levels of federal security certifications and clearances, enabling us to support classified and mission-critical operations across the federal government. Our comprehensive compliance framework ensures that every solution meets or exceeds federal security requirements while maintaining operational efficiency.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                We provide end-to-end ATO support including security control implementation, documentation preparation, continuous monitoring setup, and ongoing compliance management. Our proven methodology has achieved a 100% success rate across 50+ federal ATOs spanning FedRAMP Moderate, FedRAMP High, and FISMA authorizations.
              </p>
              <ul className="space-y-3">
                {capabilities.map((cap, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-lg text-slate-700">{cap}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { title: 'FedRAMP High', desc: 'Authorized' },
                { title: 'CMMC Level 3', desc: 'Certified' },
                { title: 'TS/SCI', desc: 'Cleared Team' },
                { title: 'FISMA', desc: 'ATO Approved' }
              ].map((item, index) => (
                <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="font-bold text-lg text-[oklch(0.20_0.05_250)] mb-1">{item.title}</div>
                    <div className="text-sm text-slate-600">{item.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agency Experience */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Federal Agency Experience</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experience across defense, intelligence, and civilian agencies. Our cleared teams have delivered mission-critical automation and modernization projects for agencies spanning the entire federal landscape, from Cabinet-level departments to independent agencies and state/local governments.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {agencies.map((agency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-lg text-[oklch(0.20_0.05_250)] mb-2">{agency.name}</h3>
                    <p className="text-[oklch(0.65_0.18_55)] font-semibold">{agency.projects}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* StateRAMP Explainer */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">State & Local Compliance</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Understanding StateRAMP</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                StateRAMP (State Risk and Authorization Management Program) is the state and local government equivalent of FedRAMP, providing a standardized approach to security assessment and authorization for cloud services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">What is StateRAMP?</h3>
                    <p className="text-slate-600 mb-4">
                      StateRAMP is a nonprofit organization that provides a standardized approach for state and local governments to assess and authorize cloud service providers. It was created to address the unique security and compliance needs of state and local agencies while reducing duplication of effort across jurisdictions.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Based on FedRAMP framework but tailored for state/local needs',
                        'Recognized by 20+ states as acceptable security framework',
                        'Reduces time and cost for state agencies to adopt cloud services',
                        'Provides reciprocity across participating states'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Why StateRAMP Matters</h3>
                    <p className="text-slate-600 mb-4">
                      State and local governments face similar security challenges as federal agencies but often lack the resources to conduct independent security assessments of cloud providers. StateRAMP authorization signals that a platform has been rigorously vetted for government use.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Accelerates procurement by providing pre-vetted platforms',
                        'Ensures consistent security standards across jurisdictions',
                        'Reduces cost of security assessments for state agencies',
                        'Enables data sovereignty and in-state residency requirements'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white border-2 border-[oklch(0.70_0.18_55)]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-6">StateRAMP vs. FedRAMP: Key Differences</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-slate-200">
                          <th className="text-left py-3 px-4 font-semibold text-[oklch(0.20_0.05_250)]">Aspect</th>
                          <th className="text-left py-3 px-4 font-semibold text-[oklch(0.20_0.05_250)]">FedRAMP</th>
                          <th className="text-left py-3 px-4 font-semibold text-[oklch(0.20_0.05_250)]">StateRAMP</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr>
                          <td className="py-3 px-4 font-medium text-[oklch(0.20_0.05_250)]">Target Audience</td>
                          <td className="py-3 px-4 text-sm text-slate-600">Federal agencies</td>
                          <td className="py-3 px-4 text-sm text-slate-600">State & local governments</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-[oklch(0.20_0.05_250)]">Authorization Levels</td>
                          <td className="py-3 px-4 text-sm text-slate-600">Low, Moderate, High</td>
                          <td className="py-3 px-4 text-sm text-slate-600">Level 1, Level 2</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-[oklch(0.20_0.05_250)]">Security Controls</td>
                          <td className="py-3 px-4 text-sm text-slate-600">NIST 800-53 (federal)</td>
                          <td className="py-3 px-4 text-sm text-slate-600">NIST 800-53 (adapted for state/local)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-[oklch(0.20_0.05_250)]">Data Residency</td>
                          <td className="py-3 px-4 text-sm text-slate-600">US-based (GovCloud)</td>
                          <td className="py-3 px-4 text-sm text-slate-600">State-specific options available</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-[oklch(0.20_0.05_250)]">Reciprocity</td>
                          <td className="py-3 px-4 text-sm text-slate-600">Across federal agencies</td>
                          <td className="py-3 px-4 text-sm text-slate-600">Across participating states</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-[oklch(0.20_0.05_250)]">Cost & Timeline</td>
                          <td className="py-3 px-4 text-sm text-slate-600">$500K-$5M, 12-24 months</td>
                          <td className="py-3 px-4 text-sm text-slate-600">$100K-$1M, 6-12 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { value: '20+', label: 'States Participating', desc: 'Growing number of states recognizing StateRAMP as acceptable security framework' },
                { value: '50+', label: 'Authorized Platforms', desc: 'Cloud services that have achieved StateRAMP authorization' },
                { value: '60%', label: 'Faster Procurement', desc: 'Average reduction in time-to-authorization for state agencies' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)] mb-2">{stat.value}</div>
                      <div className="text-sm text-[oklch(0.20_0.05_250)] font-semibold mb-3">{stat.label}</div>
                      <p className="text-xs text-slate-600">{stat.desc}</p>
                    </CardContent>
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
              <Card className="mt-12 bg-[oklch(0.97_0.01_250)] border-2 border-[oklch(0.70_0.18_55)]/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Thalen Technologies StateRAMP Expertise</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    We help state and local agencies implement StateRAMP-authorized platforms and navigate the authorization process for custom solutions. Our team has successfully deployed StateRAMP-authorized infrastructure for DOTs, health departments, law enforcement agencies, and municipal governments across multiple states.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'StateRAMP-authorized platform implementation (Salesforce Gov Cloud, AWS GovCloud, Azure Government)',
                      'State-specific data residency and sovereignty requirements',
                      'CJIS compliance for law enforcement integration',
                      'StateRAMP authorization support for custom applications',
                      'Multi-state reciprocity planning and documentation',
                      'Continuous monitoring and compliance maintenance'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Success Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Federal Success Story</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real-world results from our federal automation engagements demonstrate the measurable impact of strategic automation combined with deep compliance expertise.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden max-w-5xl mx-auto border-2 border-slate-200">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="bg-[oklch(0.22_0.06_250)] text-white p-12 flex flex-col justify-center">
                    <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-2 uppercase tracking-wider text-sm">Featured Success</p>
                    <h3 className="text-3xl font-bold mb-4">Federal Agency Achieves 85% Process Automation</h3>
                    <p className="text-white/90 mb-4">
                      Transformed manual workflows into intelligent automation while maintaining Top Secret/SCI compliance, reducing processing time from 6 weeks to 2 days.
                    </p>
                    <p className="text-white/90 mb-6">
                      This large civilian agency was struggling with paper-based workflows that created bottlenecks across multiple departments. Our team implemented a comprehensive RPA solution with AI-assisted document processing, integrated with existing legacy systems through secure APIs. The solution achieved FedRAMP Moderate ATO in 8 months and delivered immediate operational improvements while maintaining full NIST 800-53 compliance.
                    </p>
                    <Button asChild className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 w-fit">
                      <Link href="/case-studies">
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-[oklch(0.97_0.01_250)] p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl font-bold text-[oklch(0.65_0.18_55)] mb-2">85%</div>
                      <div className="text-lg text-slate-600 mb-8">Automation Rate</div>
                      <div className="grid grid-cols-2 gap-6 text-left">
                        <div>
                          <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">6 weeks</div>
                          <div className="text-sm text-slate-600">to 2 days</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">$12M</div>
                          <div className="text-sm text-slate-600">Annual Savings</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">8 months</div>
                          <div className="text-sm text-slate-600">to ATO</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">Zero</div>
                          <div className="text-sm text-slate-600">Security Incidents</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Modernize Your Agency?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a federal automation assessment with our cleared experts. We'll analyze your current operations, identify high-impact automation opportunities, and provide a detailed ROI projection tailored to your agency's mission objectives.
            </p>
            <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
              <Link href="/contact">
                Schedule Federal Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
