import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, CheckCircle2, Award } from 'lucide-react';

export default function FederalGovernment() {
  const capabilities = [
    'FedRAMP Authorized (Moderate & High)',
    'FISMA Moderate ATO',
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Core Competency
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Federal Government Solutions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Trusted partner for mission-critical automation and modernization across federal agencies. FedRAMP Authorized with Top Secret/SCI cleared teams.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Federal Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Government-Grade Security & Compliance</h2>
              <p className="text-lg text-muted-foreground mb-6">
                NexDyne maintains the highest levels of federal security certifications and clearances, enabling us to support classified and mission-critical operations across the federal government.
              </p>
              <ul className="space-y-3">
                {capabilities.map((cap, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, title: 'FedRAMP High', desc: 'Authorized' },
                { icon: Award, title: 'CMMC Level 3', desc: 'Certified' },
                { icon: Shield, title: 'TS/SCI', desc: 'Cleared Team' },
                { icon: Award, title: 'FISMA', desc: 'ATO Approved' }
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 text-accent mx-auto mb-3" />
                    <div className="font-bold text-lg mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Federal Agency Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven track record across defense, intelligence, and civilian agencies.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {agencies.map((agency, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg mb-2">{agency.name}</h3>
                  <p className="text-accent font-semibold">{agency.projects}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary text-primary-foreground p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-accent mb-2">Featured Success</div>
                  <h3 className="text-3xl font-bold mb-4">Federal Agency Achieves 85% Process Automation</h3>
                  <p className="text-primary-foreground/90 mb-6">
                    Transformed manual workflows into intelligent automation while maintaining Top Secret/SCI compliance, reducing processing time from 6 weeks to 2 days.
                  </p>
                  <Button className="bg-orange-gradient hover:opacity-90 w-fit">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-accent/10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-accent mb-2">85%</div>
                    <div className="text-lg text-muted-foreground">Automation Rate</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize Your Agency?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a federal automation assessment with our cleared experts.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Federal Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
