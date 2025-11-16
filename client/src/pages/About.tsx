import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Target, Award, Users, Globe } from 'lucide-react';

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
    { year: '2009', title: 'Founded', desc: 'NexDyne established with focus on government automation' },
    { year: '2012', title: 'FedRAMP Authorized', desc: 'Achieved first major security certification' },
    { year: '2015', title: 'Enterprise Expansion', desc: 'Extended services to commercial sector' },
    { year: '2018', title: 'CMMC Level 3', desc: 'Advanced cybersecurity certification obtained' },
    { year: '2020', title: 'AI Integration', desc: 'Launched intelligent automation practice' },
    { year: '2024', title: 'Industry Leader', desc: '$2.3B+ in projected client ROI delivered' }
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
              The principles that guide every engagement and drive our commitment to client success.
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
              15+ years of continuous innovation and client success.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {timeline.map((milestone, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-accent mb-3">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Years of Excellence' },
              { value: '$2.3B+', label: 'Client ROI Delivered' },
              { value: '100+', label: 'Successful Projects' },
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

      {/* Leadership */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Expert Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team brings decades of combined experience in automation, cybersecurity, and digital transformation across government and enterprise sectors.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                NexDyne's leadership team includes former federal CIOs, certified cybersecurity professionals, and automation strategy experts who have delivered transformative results for the nation's most critical missions.
              </p>
              <Button className="bg-orange-gradient hover:opacity-90">
                Meet Our Team
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
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
