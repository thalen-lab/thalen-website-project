import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function DigitalTransformation() {
  const primaryServices = [
    {
      title: 'Digital Transformation Strategy',
      description: 'Develop comprehensive transformation strategies that maximize your existing technology investments—with FedRAMP/StateRAMP platform recommendations only when new capabilities and compliance requirements align with mission objectives and TCO analysis.',
      benefits: ['50+ FedRAMP/StateRAMP platform evaluations', 'Vendor-neutral recommendations', 'Multi-year strategic roadmap'],
      link: '/services/platform-selection'
    },
    {
      title: 'Legacy System Modernization',
      description: 'Modernize mainframe and legacy systems through incremental refactoring, API wrappers, and process optimization—preserving mission continuity and institutional knowledge without forced platform migrations or vendor lock-in.',
      benefits: ['Zero downtime migrations', 'Data integrity validation', 'User adoption programs'],
      link: '/services/legacy-modernization-dt'
    },
    {
      title: 'Change Management & Training',
      description: 'Transform your existing operations through process redesign, change management, and workforce enablement—with technology platform changes introduced only when organizational readiness and mission needs align.',
      benefits: ['85% user adoption rate', 'Change champion programs', 'Executive governance'],
      link: '/services/change-management'
    },
    {
      title: 'Technology Modernization Fund (TMF) Support',
      description: 'End-to-end TMF proposal development, ROI modeling, and implementation support for agencies seeking modernization funding.',
      benefits: ['TMF proposal writing', 'ROI and business case', 'Implementation oversight'],
      link: '/services/tmf-support'
    }
  ];

  const additionalCapabilities = [
    { name: 'Digital Service Delivery', description: 'Modernize citizen-facing services with mobile-first design and accessibility' },
    { name: 'Data Modernization & Analytics', description: 'Migrate to cloud data platforms and implement self-service analytics' },
    { name: 'Cybersecurity Modernization', description: 'Implement zero trust architecture and modern security operations' },
    { name: 'Continuous Improvement & Optimization', description: 'Post-implementation optimization and performance tuning' }
  ];

  const keyDifferentiators = [
    {
      title: 'Vendor-Neutral Modernization',
      description: "We don't sell platforms—we help you select the RIGHT FedRAMP and StateRAMP solutions for your mission, then implement them successfully. No vendor lock-in, no hidden agendas."
    },
    {
      title: 'Change Management First',
      description: "Technology alone doesn't transform agencies—people do. We integrate change management from day one, ensuring your modernization investments deliver lasting impact."
    },
    {
      title: 'TMF & Modernization Funding Expertise',
      description: "We've helped agencies secure $45M+ in Technology Modernization Fund awards with compelling business cases and implementation experience."
    }
  ];

  const governmentExperience = [
    { agency: 'Federal Civilian Agencies', projects: '25+ modernization projects', clearance: 'Public Trust' },
    { agency: 'Department of Defense', projects: '10 IT transformation programs', clearance: 'Secret' },
    { agency: 'State & Local Government', projects: '35+ digital transformation initiatives', clearance: 'N/A' }
  ];

  const modernizationApproaches = [
    { 
      title: 'Assess Current State', 
      description: 'Comprehensive assessment of legacy systems, technical debt, and modernization readiness',
      deliverables: ['Current state architecture', 'Technical debt analysis', 'Modernization roadmap']
    },
    { 
      title: 'Select FedRAMP & StateRAMP Platforms', 
      description: 'Vendor-neutral evaluation and selection of optimal cloud platforms and SaaS solutions',
      deliverables: ['Platform comparison matrix', 'TCO analysis', 'Vendor recommendations']
    },
    { 
      title: 'Implement & Migrate', 
      description: 'Phased implementation with zero business disruption, comprehensive testing, and rollback plans',
      deliverables: ['Migration playbooks', 'Cutover plans', 'Rollback procedures']
    },
    { 
      title: 'Train & Adopt', 
      description: 'Role-based training programs, change champion networks, and adoption measurement',
      deliverables: ['Training curricula', 'Adoption dashboards', 'Change management plans']
    },
    { 
      title: 'Optimize & Improve', 
      description: 'Continuous improvement cycles with user feedback, performance tuning, and cost optimization',
      deliverables: ['Optimization reports', 'Cost savings analysis', 'Performance metrics']
    }
  ];

  const tmfSuccessStories = [
    { agency: 'Federal Civilian Agency', award: '$15M', project: 'Legacy mainframe modernization to cloud-native architecture', roi: '40% cost reduction' },
    { agency: 'Department of Veterans Affairs', award: '$18M', project: 'Citizen services digital transformation', roi: '60% faster service delivery' },
    { agency: 'Department of Justice', award: '$12M', project: 'Case management system modernization', roi: '50% efficiency gain' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/digital-transformation-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="container relative">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Digital Transformation' }
              ]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl">
            <div className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-6">
              Implementation Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Digital Transformation & Modernization
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Thalen Technologies delivers transformation through a dual approach: first, we modernize your existing operations through process redesign, change management, and technology optimization—with FedRAMP platforms implemented only when compliance requires it or new capabilities align with mission objectives. Vendor-neutral consulting with TMF support and proven adoption strategies.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Start Modernization Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/compliance-roadmap">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  Generate Modernization Roadmap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <div className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Why Choose Us</div>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Why Agencies Choose Thalen Technologies for Modernization</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not a platform vendor—we're modernization specialists who help you select and implement the right solutions for your mission.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="pt-8">
                    <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <div className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Core Services</div>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Core Modernization Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From platform selection to change management and TMF support
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            {primaryServices.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all group h-full flex flex-col">
                  <CardContent className="pt-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{service.title}</h3>
                    <p className="text-slate-600 mb-4 flex-grow">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={service.link} className="mt-auto">
                      <Button variant="outline" className="w-full border-slate-300 text-[oklch(0.20_0.05_250)] hover:bg-[oklch(0.97_0.01_250)] hover:border-[oklch(0.70_0.18_55)]">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Capabilities */}
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border-2 border-slate-200">
            <h3 className="text-2xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Additional Modernization Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {additionalCapabilities.map((capability, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <div>
                    <div className="font-semibold text-[oklch(0.20_0.05_250)] mb-1">{capability.name}</div>
                    <div className="text-sm text-slate-600">{capability.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Experience */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            <div className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Experience</div>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Government Modernization Experience</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by federal, state, and local agencies for mission-critical transformations
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {governmentExperience.map((exp, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="pt-8 text-center">
                    <h3 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">{exp.agency}</h3>
                    <p className="text-2xl font-bold text-[oklch(0.65_0.18_55)] mb-2">{exp.projects}</p>
                    <div className="inline-block bg-[oklch(0.97_0.01_250)] px-3 py-1 rounded-full text-sm text-slate-600">
                      Clearance: {exp.clearance}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernization Approach */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            <div className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</div>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Our Modernization Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proven 5-phase methodology that ensures successful transformation
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[oklch(0.65_0.18_55)]/30 hidden md:block" />
            <div className="space-y-8">
              {modernizationApproaches.map((phase, index) => (
                <motion.div key={index} className="relative md:pl-12" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <div className="absolute left-0 top-5 h-8 w-8 rounded-full bg-[oklch(0.65_0.18_55)] flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                    {index + 1}
                  </div>
                  <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2 text-[oklch(0.20_0.05_250)]">{phase.title}</h3>
                      <p className="text-slate-600 mb-4">{phase.description}</p>
                      <div>
                        <div className="text-sm font-semibold mb-2 text-[oklch(0.20_0.05_250)]">Key Deliverables:</div>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <span key={idx} className="text-xs bg-[oklch(0.97_0.01_250)] text-slate-600 px-3 py-1 rounded-full">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TMF Success Stories */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            <div className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">TMF Success</div>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Technology Modernization Fund (TMF) Success</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We've helped agencies secure $45M+ in TMF awards with compelling business cases and proven implementation
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {tmfSuccessStories.map((story, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="pt-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">{story.award}</div>
                        <div className="text-sm text-slate-500">TMF Award</div>
                      </div>
                    </div>
                    <h3 className="font-bold mb-2 text-[oklch(0.20_0.05_250)]">{story.agency}</h3>
                    <p className="text-sm text-slate-600 mb-3 flex-grow">{story.project}</p>
                    <div className="bg-[oklch(0.97_0.01_250)] rounded-lg px-3 py-2 mt-4">
                      <div className="text-xs text-slate-500">Achieved ROI:</div>
                      <div className="font-semibold text-[oklch(0.20_0.05_250)]">{story.roi}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-[oklch(0.65_0.18_55)] text-white hover:bg-[oklch(0.65_0.18_55)]/90">
                Explore TMF Opportunities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize Your Agency?</h2>
          <p className="text-xl opacity-90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            Our modernization specialists can help you assess your current state, select optimal platforms, and execute a successful transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Schedule Modernization Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/federal-solutions">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                View Federal Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
