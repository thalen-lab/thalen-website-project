import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  Clock, 
  Users, 
  Video,
  ArrowRight,
  Play,
  Download,
  Mail,
  Award
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

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
      description: 'Introduction to Thalen Technologies\' proprietary RAPID Framework delivering average 312% ROI for federal agencies through structured automation implementation and change management.'
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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }} />
        </div>
        <div className="container relative">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[{ label: 'Events' }]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Webinars & Events
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Expert-led training, workshops, and thought leadership sessions on automation, cybersecurity, and digital transformation for federal, state, and local government agencies.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span>Free Registration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span>Live Q&A Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span>CPE Credits Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Toggle */}
      <section className="py-8 bg-secondary border-b">
        <div className="container">
          <div className="flex justify-center gap-4">
            <Button
              variant={selectedCategory === 'upcoming' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('upcoming')}
              className={selectedCategory === 'upcoming' ? 'bg-accent hover:bg-accent/90 transition-all' : 'hover:bg-secondary/80 transition-all'}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Upcoming Events
            </Button>
            <Button
              variant={selectedCategory === 'past' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('past')}
              className={selectedCategory === 'past' ? 'bg-accent hover:bg-accent/90 transition-all' : 'hover:bg-secondary/80 transition-all'}
            >
              <Video className="mr-2 h-4 w-4" />
              Past Recordings
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {selectedCategory === 'upcoming' && (
        <section className="py-20 bg-background">
          <div className="container">
            <div className="space-y-8 max-w-5xl mx-auto">
              {upcomingEvents.map((event) => (
                <Card 
                  key={event.id} 
                  className="hover:shadow-2xl transition-all duration-300 border-border hover:border-primary/20 group"
                >
                  <CardContent className="p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                            <Calendar className="h-7 w-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                              {event.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-primary" />
                                <span>{event.registered}/{event.spots} registered</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Award className="h-4 w-4 text-primary" />
                                <span>{event.cpeCredits} CPE Credits</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-5">
                              <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-semibold">
                                {event.format}
                              </span>
                              <span className="text-xs bg-secondary text-foreground px-3 py-1.5 rounded-full font-medium">
                                {event.duration}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">What You'll Learn:</h4>
                          <ul className="space-y-2">
                            {event.topics.map((topic, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                                <span className="leading-relaxed">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4 text-sm">
                          <span className="font-semibold text-foreground">Presenter:</span>{' '}
                          <span className="text-muted-foreground">{event.presenter}</span>
                        </div>

                        <div className="mb-8 text-sm">
                          <span className="font-semibold text-foreground">Target Audience:</span>{' '}
                          <span className="text-muted-foreground">{event.audience}</span>
                        </div>

                        <Button 
                          className="w-full sm:w-auto bg-accent hover:bg-accent/90 hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
                          onClick={() => setRegisteringEvent(event.id)}
                        >
                          Register Free
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {selectedCategory === 'past' && (
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {pastEvents.map((event) => (
                <Card 
                  key={event.id} 
                  className="hover:shadow-2xl transition-all duration-300 border-border hover:border-primary/20 group"
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="p-2.5 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                        <Video className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                          <span>{event.date}</span>
                          <span className="text-primary">•</span>
                          <span>{event.duration}</span>
                          <span className="text-primary">•</span>
                          <span>{event.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="text-sm mb-6">
                      <span className="font-semibold text-foreground">Presenter:</span>{' '}
                      <span className="text-muted-foreground">{event.presenter}</span>
                    </div>

                    <div className="flex gap-3">
                      {event.recording && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 hover:bg-primary/5 hover:border-primary/30 transition-all"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Watch Recording
                        </Button>
                      )}
                      {event.slides && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 hover:bg-primary/5 hover:border-primary/30 transition-all"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download Slides
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Registration Modal */}
      {registeringEvent && selectedEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="max-w-lg w-full shadow-2xl">
            <CardContent className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-5">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Register for Event</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {selectedEvent.title}
                </p>
                <p className="text-sm text-primary font-semibold mt-3">
                  {selectedEvent.date} • {selectedEvent.time}
                </p>
              </div>
              
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="text-sm font-semibold mb-2 block text-foreground">Full Name</label>
                  <Input
                    type="text"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-semibold mb-2 block text-foreground">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john.smith@agency.gov"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-accent hover:bg-accent/90 hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Complete Registration
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => {
                      setRegisteringEvent(null);
                      setEmail('');
                      setName('');
                    }}
                    className="hover:bg-secondary transition-all"
                  >
                    Cancel
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground text-center leading-relaxed pt-2">
                  You'll receive a confirmation email with webinar access link and calendar invite.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <Card className="max-w-4xl mx-auto border-border shadow-lg">
            <CardContent className="p-10 md:p-12 text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
                <Mail className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Event</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Subscribe to our monthly newsletter for event announcements, government technology insights, and exclusive automation resources for federal, state, and local agencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="your.email@agency.gov"
                  className="flex-1"
                />
                <Button className="bg-accent hover:bg-accent/90 hover:shadow-lg hover:scale-105 active:scale-95 transition-all">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Need Custom Training for Your Agency?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            We offer private workshops and customized training programs tailored to your federal, state, or local government agency's specific automation, cybersecurity, and digital transformation needs.
          </p>
          <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
            <Link href="/contact">
              Request Custom Training
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
