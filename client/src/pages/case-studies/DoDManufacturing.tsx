import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

export default function DoDManufacturing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <motion.section 
        className="relative py-24 text-white bg-[oklch(0.18_0.06_250)]/85"
        style={{
          backgroundImage: `url('/img/patterns/pattern-hero.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',          
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Department of Defense Case Study
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              DoD Manufacturing Facility Achieves 99.2% Uptime with Predictive Maintenance
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Implementing FedRAMP-authorized cybersecurity platforms and IoT-powered predictive maintenance across 50 production lines, eliminating 75% of unplanned downtime while achieving CMMC Level 3 certification.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Metrics */}
      <section className="py-16 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { value: '99.2%', label: 'System Uptime' },
              { value: '75%', label: 'Downtime Reduction' },
              { value: '$12.5M', label: 'Annual Savings' },
              { value: 'CMMC L3', label: 'Compliance Achieved' }
            ].map((metric, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{metric.value}</div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl text-left">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Challenge</p>
          <h2 className="text-4xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Modernizing Mission-Critical Manufacturing</h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p>
              A Department of Defense manufacturing facility producing critical defense components across 50 production lines experienced 150+ unplanned downtime incidents annually. The facility's aging industrial control systems, some over 15 years old, lacked predictive maintenance capabilities and had significant cybersecurity vulnerabilities. Unplanned downtime disrupted mission-critical production schedules, threatened delivery commitments, and cost over $18 million annually in lost production and emergency repairs.
            </p>
            <p>
              NexDyne Technologies was awarded a contract through DoD's IDIQ vehicle to modernize the facility's cybersecurity posture, implement predictive maintenance analytics, and achieve CMMC Level 3 certification. The solution would eliminate unplanned downtime, provide real-time operational visibility, and ensure compliance with stringent defense cybersecurity requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-4xl">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-center">The Solution</p>
          <h2 className="text-4xl font-bold mb-12 text-[oklch(0.20_0.05_250)] text-center">Integrated Cybersecurity & Predictive Maintenance</h2>
          <div className="space-y-8">
            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">FedRAMP-Authorized Cybersecurity Platform</h3>
                <p className="text-lg text-slate-600 mb-6">
                  NexDyne deployed FedRAMP-authorized cybersecurity platforms with zero-trust network architecture and continuous monitoring specifically designed for ICS/SCADA environments.
                </p>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'Implemented zero-trust network architecture with micro-segmentation',
                    'Deployed FedRAMP-authorized endpoint protection on all industrial control systems',
                    'Established continuous monitoring with SIEM integration for real-time threat detection',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">IoT-Powered Predictive Maintenance</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Deployed IoT sensors across 50 production lines with machine learning-powered predictive maintenance analytics, identifying equipment failures 72 hours before occurrence with 94% accuracy.
                </p>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'Installed 2,500+ IoT sensors monitoring vibration, temperature, and pressure',
                    'Achieved 94% accuracy in predicting equipment failures 72 hours in advance',
                    'Eliminated 75% of unplanned downtime incidents (150 to 38 annually)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider text-center">Results & Impact</p>
          <h2 className="text-4xl font-bold mb-12 text-[oklch(0.20_0.05_250)] text-center">Achieving Operational Excellence</h2>
          
          <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Client Testimonial</h3>
              <blockquote className="text-lg italic text-slate-600 mb-4 border-l-4 border-[oklch(0.65_0.18_55)] pl-6">
                "NexDyne's predictive maintenance platform transformed our manufacturing operations. We went from 150+ unplanned downtime incidents per year to just 38, achieving 99.2% uptime. The 72-hour advance warning for equipment failures allows us to schedule maintenance during planned downtime, eliminating emergency repairs that disrupted production."
              </blockquote>
              <p className="font-semibold text-[oklch(0.20_0.05_250)]">— Facility Director, DoD Manufacturing Facility</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Modernize Your Manufacturing Operations</h2>
          <p className="text-xl mb-8 text-white/90">
            Learn how NexDyne can help your facility achieve operational excellence, implement predictive maintenance, and achieve CMMC compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
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
