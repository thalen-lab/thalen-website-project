
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function TMFSupport() {
  const tmfCapabilities = [
    {
      title: 'TMF Proposal Development',
      description: 'We help agencies develop compelling TMF proposals including executive summaries, problem statements, solution descriptions, and implementation plans that align with TMF Board priorities.',
      benefits: ['Proposal writing', 'Executive summaries', 'Solution architecture', 'Implementation roadmaps']
    },
    {
      title: 'ROI & Business Case Development',
      description: 'We build detailed financial models showing cost savings, efficiency gains, and mission impact with 5-year projections that demonstrate clear return on investment.',
      benefits: ['Financial modeling', 'Cost-benefit analysis', 'ROI projections', 'Mission impact metrics']
    },
    {
      title: 'TMF Board Preparation',
      description: 'We prepare agencies for TMF Board presentations including pitch deck development, Q&A preparation, and mock presentations to ensure confidence and clarity.',
      benefits: ['Pitch deck development', 'Q&A preparation', 'Mock presentations', 'Board coaching']
    },
    {
      title: 'Implementation Oversight',
      description: 'We provide program management and implementation support to ensure TMF-funded projects deliver on promised outcomes and meet repayment obligations.',
      benefits: ['Program management', 'Milestone tracking', 'Risk mitigation', 'Reporting support']
    }
  ];

  const tmfPriorities = [
    {
      priority: 'Cybersecurity Modernization',
      description: 'Zero trust architecture, cloud security, identity management, and security operations modernization',
      examples: ['Zero trust implementation', 'Cloud security posture management', 'Identity and access management']
    },
    {
      priority: 'Legacy System Modernization',
      description: 'Migration from mainframe and legacy systems to modern cloud platforms with improved security and efficiency',
      examples: ['Mainframe migration', 'COBOL modernization', 'Cloud-native architecture']
    },
    {
      priority: 'Customer Experience Improvement',
      description: 'Citizen-facing digital services with mobile-first design, accessibility, and self-service capabilities',
      examples: ['Mobile applications', 'Self-service portals', 'Chatbots and virtual assistants']
    },
    {
      priority: 'Data Analytics & AI',
      description: 'Modern data platforms, self-service analytics, and AI/ML capabilities for mission-critical insights',
      examples: ['Cloud data warehouses', 'Self-service BI', 'Predictive analytics']
    }
  ];

  const proposalProcess = [
    { step: '1. Initial Consultation', description: 'Assess TMF eligibility, identify modernization opportunities, and develop initial concept' },
    { step: '2. Proposal Development', description: 'Write comprehensive proposal including problem statement, solution, ROI, and implementation plan' },
    { step: '3. Financial Modeling', description: 'Build detailed 5-year financial model showing costs, savings, and repayment schedule' },
    { step: '4. Board Preparation', description: 'Develop pitch deck, prepare Q&A, and conduct mock presentations' },
    { step: '5. Submission & Review', description: 'Submit proposal to TMF Program Management Office and respond to questions' },
    { step: '6. Implementation Support', description: 'Provide program management and oversight to ensure successful delivery' }
  ];

  const successFactors = [
    { factor: 'Clear Problem Statement', description: 'Articulate the current pain points, inefficiencies, and mission impact of legacy systems' },
    { factor: 'Compelling ROI', description: 'Demonstrate measurable cost savings and efficiency gains that justify the investment' },
    { factor: 'Realistic Implementation Plan', description: 'Provide detailed roadmap with milestones, risks, and mitigation strategies' },
    { factor: 'Executive Sponsorship', description: 'Secure strong executive support and commitment to drive the initiative' },
    { factor: 'Repayment Strategy', description: 'Show clear path to repay TMF funding through realized savings or appropriations' },
    { factor: 'Alignment with TMF Priorities', description: 'Connect proposal to TMF Board priorities like cybersecurity, legacy modernization, or CX' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/tmf-support-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 via-[#0A2540]/80 to-[#12344D]/75"></div>
        <div className="container relative text-white">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Services', href: '/consulting-services' },
                  { label: 'Digital Transformation', href: '/services/digital-transformation' },
                  { label: 'TMF Support' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="max-w-4xl">
            <div className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              TMF Support
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Technology Modernization Fund (TMF) Support
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              We help agencies secure Technology Modernization Fund awards through end-to-end proposal development, ROI modeling, TMF Board preparation, and implementation support—we've helped agencies pursue an estimated $45M+ in TMF funding.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Start TMF Proposal Development
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/capability-generator">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  Generate Capability Statement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TMF Capabilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Capabilities</h2>
            <h3 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">TMF Support Services</h3>
            <p className="text-xl text-slate-600">
              End-to-end support for Technology Modernization Fund proposals and implementation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {tmfCapabilities.map((capability, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-8">
                    <h4 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{capability.title}</h4>
                    <p className="text-slate-600 mb-4">{capability.description}</p>
                    <div className="space-y-2 pt-4 border-t-2 border-slate-100">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TMF Priorities */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Alignment</h2>
            <h3 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">TMF Board Priorities</h3>
            <p className="text-xl text-slate-600">
              We align proposals with TMF Board priorities to maximize approval chances.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {tmfPriorities.map((item, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-8">
                    <h4 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{item.priority}</h4>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    <div className="border-t-2 border-slate-100 pt-4 mt-4">
                      <h5 className="text-sm font-semibold text-[oklch(0.20_0.05_250)] mb-2">Example Projects:</h5>
                      <div className="space-y-2">
                        {item.examples.map((example, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-1.5"></span>
                            <span>{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</h2>
            <h3 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">TMF Proposal Process</h3>
            <p className="text-xl text-slate-600">
              A structured 6-step process from initial consultation to implementation support.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="border-l-2 border-[oklch(0.70_0.18_55)] pl-8 space-y-12">
              {proposalProcess.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 w-4 h-4 bg-[oklch(0.70_0.18_55)] rounded-full mt-1"></div>
                  <h4 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{item.step}</h4>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Key Factors</h2>
            <h3 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">TMF Proposal Success Factors</h3>
            <p className="text-xl text-slate-600">
              Critical elements that increase TMF proposal approval rates.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {successFactors.map((item, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">{item.factor}</h4>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Pursue TMF Funding?</h2>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Our TMF specialists can help you develop compelling proposals, build financial models, and prepare for TMF Board presentations.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Schedule TMF Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/digital-transformation">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  View All Modernization Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
