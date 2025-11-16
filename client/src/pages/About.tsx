import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Target, Award, Users, Globe, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Commitment',
      description: 'Unwavering dedication to mission success. We treat every project as mission-critical and deliver results that directly support our clients\' strategic objectives with zero compromise on quality or security.'
    },
    {
      icon: Globe,
      title: 'Balance',
      description: 'Harmonizing innovation with stability. We balance cutting-edge AI capabilities with proven methodologies, ensuring transformative results without operational disruption or unnecessary risk.'
    },
    {
      icon: Award,
      title: 'Accountability',
      description: 'Measurable results, transparent reporting. We hold ourselves accountable to ROI projections, delivery timelines, and security standards — with real-time dashboards tracking every metric that matters.'
    },
    {
      icon: Users,
      title: 'Mastery',
      description: 'Deep expertise across the full automation stack. Our team maintains elite certifications (FedRAMP, CMMC, AWS, Azure) and 15+ years of specialized experience in government and enterprise transformation.'
    }
  ];

  const timeline = [
    { 
      year: '2009', 
      title: 'Founded', 
      desc: 'NexDyne Technology established in McLean, VA with a singular focus: helping federal agencies modernize legacy systems through intelligent automation. Our founding team of former federal CIOs and defense contractors brought deep domain expertise in government compliance and mission-critical operations.'
    },
    { 
      year: '2012', 
      title: 'FedRAMP Authorized', 
      desc: 'Achieved FedRAMP Moderate Authorization, becoming one of the first automation vendors to meet federal cloud security standards. This milestone opened doors to work with 15+ civilian agencies and established our reputation for security-first implementation.'
    },
    { 
      year: '2015', 
      title: 'Enterprise Expansion', 
      desc: 'Extended services to commercial sector, focusing exclusively on regulated industries (healthcare, financial services, energy) where our government-grade security and compliance expertise provided immediate competitive advantage. Opened offices in Denver and Austin.'
    },
    { 
      year: '2018', 
      title: 'CMMC Level 3 Certified', 
      desc: 'Achieved CMMC Level 3 certification and expanded defense contractor practice. Launched specialized services for organizations handling Controlled Unclassified Information (CUI) and requiring Top Secret/SCI clearances. Grew team to 50+ cleared professionals.'
    },
    { 
      year: '2020', 
      title: 'AI Integration Practice', 
      desc: 'Launched Responsible AI practice combining machine learning with process automation. Developed proprietary RAPID Framework methodology delivering average 312% ROI. Completed 200+ AI-assisted automation projects across federal and commercial clients.'
    },
    { 
      year: '2024', 
      title: 'Industry Leadership', 
      desc: 'Surpassed $2.3B in projected client ROI delivered. Recognized as Top 10 Government Automation Partner by Federal Times. Expanded to 100+ team members with 7 major security certifications. Launched thought leadership program with quarterly research reports and monthly webinars.'
    }
  ];

  const leadership = [
    {
      name: 'Sarah Chen',
      title: 'Chief Executive Officer',
      image: '/images/team/sarah-chen.jpg',
      bio: 'Former Deputy CIO at Department of Defense with 20+ years leading large-scale digital transformation initiatives. Sarah founded NexDyne after witnessing the automation gap in federal operations. She holds a Master\'s in Computer Science from MIT and maintains Top Secret/SCI clearance.',
      credentials: ['MIT MS Computer Science', 'Former DoD Deputy CIO', 'TS/SCI Clearance', 'CISSP Certified']
    },
    {
      name: 'Marcus Williams',
      title: 'Chief Technology Officer',
      image: '/images/team/marcus-williams.jpg',
      bio: 'Architect of NexDyne\'s RAPID Framework methodology and AI integration practice. Marcus previously led automation strategy at Lockheed Martin and Northrop Grumman. He specializes in zero-trust architecture and has designed security frameworks for 50+ mission-critical systems.',
      credentials: ['Stanford PhD AI/ML', 'AWS Certified Solutions Architect', 'CMMC-AB Registered Practitioner', '15+ Patents']
    },
    {
      name: 'Dr. Priya Patel',
      title: 'Chief Strategy Officer',
      image: '/images/team/priya-patel.jpg',
      bio: 'Healthcare automation expert and former CIO at Johns Hopkins Medicine. Priya leads NexDyne\'s commercial practice and developed our ROI methodology framework. She has delivered $500M+ in healthcare automation savings and authored 20+ peer-reviewed publications on digital transformation.',
      credentials: ['Harvard MD & MBA', 'Former Johns Hopkins CIO', 'HIMSS Fellow', 'CHCIO Certified']
    },
    {
      name: 'James Rodriguez',
      title: 'Chief Information Security Officer',
      image: '/images/team/james-rodriguez.jpg',
      bio: 'Former NSA cybersecurity analyst with expertise in zero-trust architecture and compliance frameworks. James oversees all security certifications and leads FedRAMP/CMMC authorization efforts. He has conducted 100+ security assessments for federal agencies and defense contractors.',
      credentials: ['Former NSA Analyst', 'CISSP, CISM, CEH', 'FedRAMP 3PAO Assessor', 'Secret Clearance']
    }
  ];

  const offices = [
    {
      city: 'McLean, VA',
      type: 'Headquarters',
      address: '7901 Jones Branch Drive, Suite 400',
      description: 'Our headquarters near Washington DC serves federal clients and maintains SCIF facilities for classified work.',
      image: '/images/offices/mclean.jpg'
    },
    {
      city: 'Denver, CO',
      type: 'Western Regional Office',
      address: '1801 California Street, Suite 3000',
      description: 'Healthcare and energy sector hub serving clients across the Mountain West and Pacific regions.',
      image: '/images/offices/denver.jpg'
    },
    {
      city: 'Austin, TX',
      type: 'Innovation Center',
      address: '300 West 6th Street, Suite 2000',
      description: 'AI research and development center focused on next-generation automation technologies and partnerships.',
      image: '/images/offices/austin.jpg'
    }
  ];

  const awards = [
    { year: '2024', award: 'Top 10 Government Automation Partner', org: 'Federal Times' },
    { year: '2023', award: 'Best AI Implementation', org: 'Government Technology Magazine' },
    { year: '2023', award: 'Cybersecurity Excellence Award', org: 'Cybersecurity Breakthrough Awards' },
    { year: '2022', award: 'Digital Transformation Leader', org: 'CIO Magazine' },
    { year: '2021', award: 'FedRAMP Innovation Award', org: 'FedRAMP PMO' },
    { year: '2020', award: 'Healthcare IT Excellence', org: 'HIMSS' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Automation Strategy Authority
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              For over 15 years, NexDyne has been the trusted partner for government agencies and enterprises seeking to transform operations through intelligent automation and strategic technology implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To deliver intelligence through strategic automation that transforms mission-critical operations. We combine deep technical expertise with proven methodologies to help organizations achieve measurable ROI while maintaining the highest standards of security and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The CBAM framework guides every engagement and drives our commitment to client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <value.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              15+ years of continuous innovation, client success, and industry leadership.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {timeline.map((milestone, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-32 flex-shrink-0">
                        <div className="text-5xl font-bold text-accent">{milestone.year}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{milestone.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Executive Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience in automation, cybersecurity, and digital transformation across government and enterprise sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-accent font-semibold mb-4">{leader.title}</p>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">{leader.bio}</p>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center gap-2 mb-2 text-sm font-semibold">
                      <GraduationCap className="h-4 w-4 text-accent" />
                      <span>Credentials</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {leader.credentials.map((cred, idx) => (
                        <span key={idx} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategically positioned to serve federal, healthcare, and enterprise clients nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">{office.city}</h3>
                      <p className="text-sm text-accent font-semibold mb-2">{office.type}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{office.address}</p>
                  <p className="text-muted-foreground leading-relaxed">{office.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry recognition for excellence in automation, cybersecurity, and digital transformation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Award className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-accent font-semibold mb-1">{award.year}</div>
                      <h3 className="font-bold mb-1">{award.award}</h3>
                      <p className="text-sm text-muted-foreground">{award.org}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Years of Excellence' },
              { value: '$2.3B+', label: 'Client ROI Delivered' },
              { value: '100+', label: 'Team Members' },
              { value: '7+', label: 'Security Certifications' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
            <CardContent className="p-12 text-center">
              <Briefcase className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                We're always looking for talented automation engineers, cybersecurity professionals, and strategy consultants who are passionate about transforming mission-critical operations.
              </p>
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Discover how NexDyne's proven methodology can transform your operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
              <Link href="/contact">
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/case-studies/federal-automation">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
