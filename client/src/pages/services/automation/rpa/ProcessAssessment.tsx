import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessAssessment() {
  const assessmentPhases = [
    {
      phase: 'Phase 1',
      title: 'Process Inventory & Documentation',
      duration: '1-2 weeks',
      activities: [
        'Interview agency stakeholders and process owners',
        'Document current-state workflows with process maps',
        'Identify pain points, bottlenecks, and manual tasks',
        'Collect time tracking and volume data'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Automation Opportunity Scoring',
      duration: '1 week',
      activities: [
        'Evaluate each process against automation feasibility criteria',
        'Calculate ROI potential (time savings × labor cost)',
        'Assess technical complexity and implementation risk',
        'Score and rank opportunities using proprietary matrix'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Business Case Development',
      duration: '1-2 weeks',
      activities: [
        'Build detailed ROI models for top 5-10 opportunities',
        'Estimate implementation costs and timelines',
        'Document compliance and security considerations',
        'Create executive presentation with recommendations'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Roadmap & Prioritization',
      duration: '1 week',
      activities: [
        'Develop 12-18 month automation roadmap',
        'Sequence projects based on ROI, complexity, and dependencies',
        'Identify quick wins (30-60 day implementations)',
        'Define success metrics and KPIs for each initiative'
      ]
    }
  ];

  const assessmentCriteria = [
    {
      criterion: 'Rule-Based & Repeatable',
      description: 'Process follows consistent rules with minimal exceptions',
      ideal: 'Same steps every time, clear decision logic'
    },
    {
      criterion: 'High Volume & Frequency',
      description: 'Process runs frequently with significant transaction volume',
      ideal: 'Daily/weekly execution, 100+ transactions/month'
    },
    {
      criterion: 'Time-Consuming',
      description: 'Process consumes significant staff time',
      ideal: '10+ hours/week of manual effort'
    },
    {
      criterion: 'Digital Inputs',
      description: 'Process uses structured digital data (not paper-based)',
      ideal: 'Data in spreadsheets, databases, or web forms'
    },
    {
      criterion: 'Stable Systems',
      description: 'Underlying systems are stable with minimal changes',
      ideal: 'No major system upgrades planned in next 12 months'
    },
    {
      criterion: 'Error-Prone',
      description: 'Manual process has high error rates or rework',
      ideal: 'Frequent data entry errors or quality issues'
    }
  ];

  const deliverables = [
    {
      title: 'Process Inventory Report',
      description: 'Comprehensive catalog of all evaluated processes with current-state documentation, time/volume data, and pain point analysis.',
      pages: '20-30 pages'
    },
    {
      title: 'Automation Opportunity Matrix',
      description: 'Scored and ranked list of automation candidates with feasibility assessment, ROI projections, and implementation complexity ratings.',
      pages: '10-15 pages'
    },
    {
      title: 'Business Case Package',
      description: 'Detailed ROI models for top opportunities including cost-benefit analysis, implementation timeline, resource requirements, and risk assessment.',
      pages: '30-40 pages'
    },
    {
      title: 'Implementation Roadmap',
      description: '12-18 month phased roadmap with sequenced projects, resource allocation, milestone definitions, and success metrics.',
      pages: '15-20 pages'
    }
  ];

  const roiExample = {
    process: 'Vendor Invoice Processing',
    currentState: {
      volume: '500 invoices/month',
      timePerInvoice: '15 minutes',
      totalHours: '125 hours/month',
      laborCost: '$50/hour',
      monthlyCost: '$6,250',
      errorRate: '8%'
    },
    futureState: {
      automationRate: '85%',
      timePerInvoice: '2 minutes (bot)',
      totalHours: '17 hours/month',
      monthlySavings: '$5,400',
      annualSavings: '$64,800',
      paybackPeriod: '8.3 months'
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/rpa-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Intelligent Automation', href: '/services/automation' },
                { label: 'Government RPA', href: '/services/automation/rpa' },
                { label: 'Process Assessment' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Foundation for RPA Success</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              RPA Process Assessment & Discovery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Not all processes are good automation candidates. Our comprehensive assessment helps government agencies (federal, state, and local) identify highest-value opportunities with detailed ROI projections, implementation roadmaps, and risk analysis—so you invest in bots that deliver measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View Case Study
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Assessment Phases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Methodology</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              4-Phase Assessment Methodology
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Typically completed in 4-6 weeks with minimal disruption to government agency operations (federal, state, and local)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {assessmentPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[oklch(0.65_0.18_55)] text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm text-[oklch(0.65_0.18_55)] font-semibold">{phase.phase}</div>
                        <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)]">{phase.title}</h3>
                        <div className="text-sm text-slate-500">Duration: {phase.duration}</div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Criteria */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Evaluation Framework</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              What Makes a Good RPA Candidate?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We evaluate every process against these 6 criteria to predict automation success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessmentCriteria.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-2">{item.criterion}</h3>
                    <p className="text-sm text-slate-600 mb-3">{item.description}</p>
                    <div className="bg-[oklch(0.97_0.01_250)] rounded-lg px-3 py-2">
                      <div className="text-xs text-[oklch(0.65_0.18_55)] font-semibold">Ideal State:</div>
                      <div className="text-xs text-slate-700">{item.ideal}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Example */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">ROI Analysis</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Real-World ROI Example
            </h2>
            <p className="text-lg text-slate-600">
              Federal agency vendor invoice processing automation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-6 text-center">{roiExample.process}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-4 pb-2 border-b-2 border-slate-200">Current State</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-sm">
                        <span className="text-slate-600">Volume:</span>
                        <span className="font-semibold text-[oklch(0.20_0.05_250)]">{roiExample.currentState.volume}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-slate-600">Time per Invoice:</span>
                        <span className="font-semibold text-[oklch(0.20_0.05_250)]">{roiExample.currentState.timePerInvoice}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-slate-600">Total Hours/Month:</span>
                        <span className="font-semibold text-[oklch(0.20_0.05_250)]">{roiExample.currentState.totalHours}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-slate-600">Labor Cost:</span>
                        <span className="font-semibold text-[oklch(0.20_0.05_250)]">{roiExample.currentState.laborCost}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-slate-600">Monthly Cost:</span>
                        <span className="font-semibold text-[oklch(0.20_0.05_250)]">{roiExample.currentState.monthlyCost}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-slate-600">Error Rate:</span>
                        <span className="font-semibold text-red-600">{roiExample.currentState.errorRate}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[oklch(0.65_0.18_55)] mb-4 pb-2 border-b-2 border-[oklch(0.65_0.18_55)]">Future State (Automated)</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-sm">
                        <span className="text-slate-600">Automation Rate:</span>
                        <span className="font-semibold text-[oklch(0.65_0.18_55)]">{roiExample.futureState.automationRate}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-slate-600">Time per Invoice:</span>
                        <span className="font-semibold text-[oklch(0.65_0.18_55)]">{roiExample.futureState.timePerInvoice}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-slate-600">Total Hours/Month:</span>
                        <span className="font-semibold text-[oklch(0.65_0.18_55)]">{roiExample.futureState.totalHours}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-slate-600">Monthly Savings:</span>
                        <span className="font-semibold text-green-600">{roiExample.futureState.monthlySavings}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-slate-600">Annual Savings:</span>
                        <span className="font-semibold text-green-600">{roiExample.futureState.annualSavings}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-slate-600">Payback Period:</span>
                        <span className="font-semibold text-[oklch(0.65_0.18_55)]">{roiExample.futureState.paybackPeriod}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">What You Receive</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Assessment Deliverables
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)]">{deliverable.title}</h3>
                      <span className="text-xs bg-[oklch(0.65_0.18_55)]/10 text-[oklch(0.65_0.18_55)] px-2 py-1 rounded font-semibold">{deliverable.pages}</span>
                    </div>
                    <p className="text-sm text-slate-600">{deliverable.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Discover Your Automation Opportunities?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a complimentary consultation to discuss your agency's processes and learn how our assessment methodology can identify high-value automation candidates.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/services/automation/rpa">
                  Back to RPA Services
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
