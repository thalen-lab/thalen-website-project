import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('upcoming');
  const [registeringEvent, setRegisteringEvent] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const upcomingEvents = [
    {
      id: 'webinar-fedramp-2024',
      title: 'FedRAMP Authorization in 2024: New Requirements & Best Practices',
      date: 'December 15, 2024',
      time: '2:00 PM - 3:00 PM EST',
      duration: '60 minutes',
      format: 'Live Webinar',
      presenter: 'James Rodriguez, CISO',
      description: 'Comprehensive overview of updated FedRAMP requirements for 2024, including new security controls, documentation changes, and authorization timeline optimization strategies for federal agencies and cloud service providers.',
      topics: [
        'Updated FedRAMP Moderate & High baseline controls',
        'New continuous monitoring requirements for federal systems',
        'Documentation best practices and common compliance pitfalls',
        'Timeline optimization: 12-month authorization roadmap',
        'Q&A with FedRAMP authorization experts'
      ],
      audience: 'Federal IT leaders, compliance officers, cloud service providers',
      spots: 150,
      registered: 87,
      cpeCredits: 1.0
    },
    {
      id: 'webinar-ai-governance',
      title: 'Responsible AI Governance: From Policy to Practice in Government',
      date: 'January 10, 2025',
      time: '1:00 PM - 2:30 PM EST',
      duration: '90 minutes',
      format: 'Live Webinar + Workshop',
      presenter: 'Dr. Priya Patel, Chief Strategy Officer',
      description: 'Practical framework for implementing responsible AI governance in federal, state, and local government environments, including bias detection, explainability requirements, and compliance with NIST AI Risk Management Framework.',
      topics: [
        'Building an AI governance framework for government agencies',
        'Bias detection and mitigation strategies for public sector AI',
        'Explainability requirements for regulated government systems',
        'NIST AI Risk Management Framework implementation guide',
        'Case study: Federal healthcare AI governance in action'
      ],
      audience: 'Government CIOs, data scientists, compliance teams, AI project managers',
      spots: 200,
      registered: 134,
      cpeCredits: 1.5
    },
    {
      id: 'webinar-automation-roi',
      title: 'Measuring Automation ROI: Beyond Cost Savings for Government Agencies',
      date: 'January 24, 2025',
      time: '2:00 PM - 3:00 PM EST',
      duration: '60 minutes',
      format: 'Live Webinar',
      presenter: 'Marcus Williams, CTO',
      description: 'Advanced ROI methodology covering both quantitative metrics (labor savings, error reduction) and qualitative benefits (citizen satisfaction, risk mitigation) with real-world federal agency case study analysis.',
      topics: [
        'Comprehensive ROI calculation methodology for government automation',
        'Measuring intangible benefits: risk reduction, compliance, mission agility',
        'Federal agency benchmarks: 312% average ROI, 85% efficiency gains',
        'Building executive-level ROI presentations for budget justification',
        'Interactive ROI calculator walkthrough for government use cases'
      ],
      audience: 'Government CFOs, automation program managers, business analysts',
      spots: 175,
      registered: 92,
      cpeCredits: 1.0
    },
    {
      id: 'workshop-zero-trust',
      title: 'Zero-Trust Architecture Workshop: Hands-On Implementation for Government',
      date: 'February 7, 2025',
      time: '10:00 AM - 4:00 PM EST',
      duration: '6 hours',
      format: 'Virtual Workshop',
      presenter: 'James Rodriguez, CISO & Security Team',
      description: 'Full-day hands-on workshop covering zero-trust architecture design, implementation, and migration strategies for federal, state, and local government agencies. Includes live demos, architecture reviews, and personalized consultation.',
      topics: [
        'Zero-trust principles and architecture patterns for government',
        'Identity and access management (IAM) implementation for federal systems',
        'Network segmentation and micro-segmentation strategies',
        'Continuous monitoring and threat detection for government networks',
        'Migration roadmap: phased zero-trust adoption for agencies',
        'Live architecture review and Q&A session'
      ],
      audience: 'Government security architects, network engineers, CISOs',
      spots: 50,
      registered: 38,
      cpeCredits: 6.0
    }
  ];

  const pastEvents = [
    {
      id: 'past-cmmc-level3',
      title: 'CMMC Level 3 Certification: Complete Roadmap for Defense Contractors',
      date: 'November 12, 2024',
      duration: '75 minutes',
      views: 847,
      recording: true,
      slides: true,
      presenter: 'James Rodriguez, CISO',
      description: 'Step-by-step guide to achieving CMMC Level 3 certification covering all 130 practices, assessment preparation, and common audit findings for defense contractors and federal suppliers.'
    },
    {
      id: 'past-healthcare-ai',
      title: 'AI in Federal Healthcare: Real-World ROI and Implementation',
      date: 'October 28, 2024',
      duration: '60 minutes',
      views: 1243,
      recording: true,
      slides: true,
      presenter: 'Dr. Priya Patel, Chief Strategy Officer',
      description: 'Case study analysis of federal healthcare AI implementations delivering $12M+ savings, including patient outcome improvements and operational efficiency gains at VA and HHS agencies.'
    },
    {
      id: 'past-cloud-migration',
      title: 'Zero-Downtime Cloud Migration Strategies for Government Agencies',
      date: 'October 15, 2024',
      duration: '90 minutes',
      views: 1089,
      recording: true,
      slides: true,
      presenter: 'Marcus Williams, CTO',
      description: 'Proven methodologies for migrating mission-critical government workloads to FedRAMP-authorized cloud with zero downtime, including defense agency case study achieving 100% uptime.'
    },
    {
      id: 'past-process-automation',
      title: 'Federal Process Automation: 85% Efficiency Gains in Government Operations',
      date: 'September 20, 2024',
      duration: '60 minutes',
      views: 1456,
      recording: true,
      slides: true,
      presenter: 'Sarah Chen, CEO',
      description: 'Deep dive into federal agency automation project reducing processing time from 6 weeks to 2 days through intelligent workflow automation and RPA implementation.'
    },
    {
      id: 'past-rapid-framework',
      title: 'The RAPID Framework: 4-Phase Automation Methodology for Government',
      date: 'September 5, 2024',
      duration: '75 minutes',
      views: 1672,
      recording: true,
      slides: true,
      presenter: 'Marcus Williams, CTO',
      description: 'Introduction to Thalen Technologies\'s proprietary RAPID Framework delivering average 312% ROI for federal agencies through structured automation implementation and change management.'
    },
    {
      id: 'past-multi-cloud',
      title: 'Multi-Cloud Strategy for Government: AWS GovCloud, Azure Government, Google Cloud',
      date: 'August 22, 2024',
      duration: '60 minutes',
      views: 923,
      recording: true,
      slides: true,
      presenter: 'Marcus Williams, CTO',
      description: 'Strategic approach to multi-cloud architecture across AWS GovCloud, Azure Government, and Google Cloud with vendor lock-in mitigation and FedRAMP compliance considerations.'
    }
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name && registeringEvent) {
      // In production, this would send registration to backend
      alert(`Thank you for registering, ${name}! Confirmation email sent to ${email}`);
      setEmail('');
      setName('');
      setRegisteringEvent(null);
    }
  };

  const selectedEvent = upcomingEvents.find(e => e.id === registeringEvent);

  return (
    <div className="bg-white text-slate-900">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-cover bg-center py-24 md:py-32 text-white"
          style={{ backgroundImage: "url('/images/patterns/pattern-1.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Learn from the Experts</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Webinars & Events
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                Expert-led training, workshops, and thought leadership sessions on automation, cybersecurity, and digital transformation for federal, state, and local government agencies.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-slate-100">
                  <a href="#upcoming-events">View Upcoming Events <ArrowRight className="w-4 h-4 ml-2" /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="upcoming-events" className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
          <div className="container">
            <div className="flex justify-center mb-12">
              <div className="bg-white p-1.5 rounded-full shadow-md">
                <Button
                  onClick={() => setSelectedCategory('upcoming')}
                  variant={selectedCategory === 'upcoming' ? 'default' : 'ghost'}
                  className={`rounded-full px-6 md:px-8 ${selectedCategory === 'upcoming' ? 'bg-[oklch(0.22_0.06_250)] text-white' : 'text-slate-600'}`}>
                  Upcoming Events
                </Button>
                <Button
                  onClick={() => setSelectedCategory('past')}
                  variant={selectedCategory === 'past' ? 'default' : 'ghost'}
                  className={`rounded-full px-6 md:px-8 ${selectedCategory === 'past' ? 'bg-[oklch(0.22_0.06_250)] text-white' : 'text-slate-600'}`}>
                  On-Demand Library
                </Button>
              </div>
            </div>

            {selectedCategory === 'upcoming' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden rounded-2xl">
                    <CardContent className="p-8 flex flex-col flex-grow">
                      <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-2 uppercase tracking-wider text-sm">{event.format}</p>
                      <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4 leading-snug">{event.title}</h3>
                      <div className="flex items-center text-slate-600 text-sm mb-4 space-x-4">
                        <span>{event.date}</span>
                        <span>&bull;</span>
                        <span>{event.time}</span>
                      </div>
                      <p className="text-slate-600 mb-6 flex-grow">{event.description}</p>
                      <div className="space-y-3 mb-8">
                        {event.topics.slice(0, 3).map((topic, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                            <span className="text-slate-600">{topic}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto pt-6 border-t border-slate-200">
                        <Button onClick={() => setRegisteringEvent(event.id)} className="w-full bg-[oklch(0.22_0.06_250)] text-white hover:bg-[oklch(0.28_0.07_250)]">
                          Register Now <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            )}

            {selectedCategory === 'past' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden rounded-2xl">
                    <CardContent className="p-8 flex flex-col flex-grow">
                      <p className="text-slate-500 text-sm mb-2">{event.date}</p>
                      <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-4 flex-grow">{event.title}</h3>
                      <div className="mt-auto pt-6 border-t border-slate-200 flex justify-between items-center">
                        <p className="text-sm text-slate-600">{event.views.toLocaleString()} views</p>
                        <Button asChild variant="outline" size="sm" className="border-[oklch(0.70_0.18_55)] text-[oklch(0.70_0.18_55)] hover:bg-[oklch(0.70_0.18_55)] hover:text-white">
                          <Link href="#">Watch Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[oklch(0.22_0.06_250)] text-white py-20 md:py-28">
          <div className="container text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              Can't make a live event? Subscribe to our newsletter for on-demand recordings, presentation slides, and exclusive content delivered straight to your inbox.
            </p>
            <form className="max-w-lg mx-auto flex gap-4">
              <Input type="email" placeholder="Enter your email" className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-[oklch(0.75_0.15_55)]" />
              <Button type="submit" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-slate-100">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>

      <FloatingPrintButton position="bottom-right" />
      <Footer />

      {registeringEvent && selectedEvent && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setRegisteringEvent(null)}
        >
          <motion.div 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: 50, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl text-[oklch(0.20_0.05_250)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-2">Register for Event</h2>
              <p className="text-slate-600 mb-6">You are registering for: <span className="font-semibold">{selectedEvent.title}</span></p>
              
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full" />
                </div>
                <div className="flex justify-end pt-4 space-x-4">
                  <Button type="button" variant="ghost" onClick={() => setRegisteringEvent(null)} className="text-slate-600">Cancel</Button>
                  <Button type="submit" className="bg-[oklch(0.22_0.06_250)] text-white hover:bg-[oklch(0.28_0.07_250)]">Confirm Registration</Button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
