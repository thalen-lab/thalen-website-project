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
  CheckCircle2,
  ArrowRight,
  Play,
  Download,
  Mail
} from 'lucide-react';

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
      description: 'Comprehensive overview of updated FedRAMP requirements for 2024, including new security controls, documentation changes, and authorization timeline optimization strategies.',
      topics: [
        'Updated FedRAMP Moderate & High baseline controls',
        'New continuous monitoring requirements',
        'Documentation best practices and common pitfalls',
        'Timeline optimization: 12-month authorization roadmap',
        'Q&A with FedRAMP authorization experts'
      ],
      audience: 'Federal IT leaders, compliance officers, cloud service providers',
      spots: 150,
      registered: 87
    },
    {
      id: 'webinar-ai-governance',
      title: 'Responsible AI Governance: From Policy to Practice',
      date: 'January 10, 2025',
      time: '1:00 PM - 2:30 PM EST',
      duration: '90 minutes',
      format: 'Live Webinar + Workshop',
      presenter: 'Dr. Priya Patel, Chief Strategy Officer',
      description: 'Practical framework for implementing responsible AI governance in government and enterprise environments, including bias detection, explainability requirements, and compliance frameworks.',
      topics: [
        'Building an AI governance framework from scratch',
        'Bias detection and mitigation strategies',
        'Explainability requirements for regulated industries',
        'NIST AI Risk Management Framework implementation',
        'Case study: Healthcare AI governance in action'
      ],
      audience: 'CIOs, data scientists, compliance teams, AI project managers',
      spots: 200,
      registered: 134
    },
    {
      id: 'webinar-automation-roi',
      title: 'Measuring Automation ROI: Beyond Cost Savings',
      date: 'January 24, 2025',
      time: '2:00 PM - 3:00 PM EST',
      duration: '60 minutes',
      format: 'Live Webinar',
      presenter: 'Marcus Williams, CTO',
      description: 'Advanced ROI methodology covering both quantitative metrics (labor savings, error reduction) and qualitative benefits (employee satisfaction, risk mitigation) with real-world case study analysis.',
      topics: [
        'Comprehensive ROI calculation methodology',
        'Measuring intangible benefits: risk reduction, compliance, agility',
        'Industry benchmarks: Federal 312%, Healthcare 287%, Manufacturing 345%',
        'Building executive-level ROI presentations',
        'Interactive ROI calculator walkthrough'
      ],
      audience: 'CFOs, automation program managers, business analysts',
      spots: 175,
      registered: 92
    },
    {
      id: 'workshop-zero-trust',
      title: 'Zero-Trust Architecture Workshop: Hands-On Implementation',
      date: 'February 7, 2025',
      time: '10:00 AM - 4:00 PM EST',
      duration: '6 hours',
      format: 'Virtual Workshop',
      presenter: 'James Rodriguez, CISO & Security Team',
      description: 'Full-day hands-on workshop covering zero-trust architecture design, implementation, and migration strategies. Includes live demos, architecture reviews, and personalized consultation.',
      topics: [
        'Zero-trust principles and architecture patterns',
        'Identity and access management (IAM) implementation',
        'Network segmentation and micro-segmentation strategies',
        'Continuous monitoring and threat detection',
        'Migration roadmap: phased zero-trust adoption',
        'Live architecture review and Q&A'
      ],
      audience: 'Security architects, network engineers, CISOs',
      spots: 50,
      registered: 38
    }
  ];

  const pastEvents = [
    {
      id: 'past-cmmc-level3',
      title: 'CMMC Level 3 Certification: Complete Roadmap',
      date: 'November 12, 2024',
      duration: '75 minutes',
      views: 847,
      recording: true,
      slides: true,
      presenter: 'James Rodriguez, CISO',
      description: 'Step-by-step guide to achieving CMMC Level 3 certification covering all 130 practices, assessment preparation, and common audit findings.'
    },
    {
      id: 'past-healthcare-ai',
      title: 'AI in Healthcare: Real-World ROI and Implementation',
      date: 'October 28, 2024',
      duration: '60 minutes',
      views: 1243,
      recording: true,
      slides: true,
      presenter: 'Dr. Priya Patel, Chief Strategy Officer',
      description: 'Case study analysis of healthcare AI implementations delivering $12M+ savings, including patient outcome improvements and operational efficiency gains.'
    },
    {
      id: 'past-cloud-migration',
      title: 'Zero-Downtime Cloud Migration Strategies',
      date: 'October 15, 2024',
      duration: '90 minutes',
      views: 1089,
      recording: true,
      slides: true,
      presenter: 'Marcus Williams, CTO',
      description: 'Proven methodologies for migrating mission-critical workloads to cloud with zero downtime, including defense contractor case study achieving 100% uptime.'
    },
    {
      id: 'past-process-automation',
      title: 'Federal Process Automation: 85% Efficiency Gains',
      date: 'September 20, 2024',
      duration: '60 minutes',
      views: 1456,
      recording: true,
      slides: true,
      presenter: 'Sarah Chen, CEO',
      description: 'Deep dive into federal agency automation project reducing processing time from 6 weeks to 2 days through intelligent workflow automation.'
    },
    {
      id: 'past-rapid-framework',
      title: 'The RAPID Framework: 4-Phase Automation Methodology',
      date: 'September 5, 2024',
      duration: '75 minutes',
      views: 1672,
      recording: true,
      slides: true,
      presenter: 'Marcus Williams, CTO',
      description: 'Introduction to Thalen Technologies\'s proprietary RAPID Framework delivering average 312% ROI through structured automation implementation.'
    },
    {
      id: 'past-multi-cloud',
      title: 'Multi-Cloud Strategy for Government & Enterprise',
      date: 'August 22, 2024',
      duration: '60 minutes',
      views: 923,
      recording: true,
      slides: true,
      presenter: 'Marcus Williams, CTO',
      description: 'Strategic approach to multi-cloud architecture across AWS GovCloud, Azure Government, and Google Cloud with vendor lock-in mitigation.'
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
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }} />
        </div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Webinars & Events</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Expert-led training, workshops, and thought leadership sessions on automation, cybersecurity, and digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-foreground" />
                <span>Free Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-foreground" />
                <span>Live Q&A Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-foreground" />
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
              className={selectedCategory === 'upcoming' ? 'bg-accent hover:bg-accent/90' : ''}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Upcoming Events
            </Button>
            <Button
              variant={selectedCategory === 'past' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('past')}
              className={selectedCategory === 'past' ? 'bg-accent hover:bg-accent/90' : ''}
            >
              <Video className="mr-2 h-4 w-4" />
              Past Recordings
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {selectedCategory === 'upcoming' && (
        <section className="py-20">
          <div className="container">
            <div className="space-y-8 max-w-5xl mx-auto">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-3 bg-muted rounded-lg">
                            <Calendar className="h-6 w-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>{event.registered}/{event.spots} registered</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="text-xs bg-muted text-accent px-3 py-1 rounded-full font-semibold">
                                {event.format}
                              </span>
                              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                                {event.duration}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">What You'll Learn:</h4>
                          <ul className="space-y-1">
                            {event.topics.map((topic, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4 text-sm">
                          <span className="font-semibold">Presenter:</span> {event.presenter}
                        </div>

                        <div className="mb-6 text-sm text-muted-foreground">
                          <span className="font-semibold">Target Audience:</span> {event.audience}
                        </div>

                        <Button 
                          className="w-full sm:w-auto bg-accent hover:bg-accent/90"
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
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {pastEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-muted rounded-lg">
                        <Video className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                          <span>{event.date}</span>
                          <span>•</span>
                          <span>{event.duration}</span>
                          <span>•</span>
                          <span>{event.views} views</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold">Presenter:</span> {event.presenter}
                    </div>

                    <div className="flex gap-2">
                      {event.recording && (
                        <Button variant="outline" size="sm" className="flex-1">
                          <Play className="mr-2 h-4 w-4" />
                          Watch Recording
                        </Button>
                      )}
                      {event.slides && (
                        <Button variant="outline" size="sm" className="flex-1">
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-lg w-full">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 bg-muted rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Register for Event</h3>
                <p className="text-muted-foreground text-sm">
                  {selectedEvent.title}
                </p>
                <p className="text-sm text-accent font-semibold mt-2">
                  {selectedEvent.date} • {selectedEvent.time}
                </p>
              </div>
              
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold mb-2 block">Full Name</label>
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
                  <label className="text-sm font-semibold mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john.smith@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="flex gap-3">
                  <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90">
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
                  >
                    Cancel
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
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
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <Mail className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Event</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our monthly newsletter for event announcements, industry insights, and exclusive automation resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="your.email@company.com"
                  className="flex-1"
                />
                <Button className="bg-accent hover:bg-accent/90">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient diagonal-top text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Custom Training?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We offer private workshops and customized training programs tailored to your organization's specific automation and security needs.
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
