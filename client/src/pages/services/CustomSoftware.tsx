import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Cpu, Settings, Rocket } from 'lucide-react';

export default function CustomSoftware() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Custom Software Solutions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Bespoke software engineered to solve your unique business challenges. From concept to deployment, we deliver solutions that drive competitive advantage.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: 'Enterprise Software', desc: 'Mission-critical systems built for scale and reliability' },
              { icon: Settings, title: 'Legacy Modernization', desc: 'Transform outdated systems into modern platforms' },
              { icon: Rocket, title: 'Rapid Prototyping', desc: 'Fast MVP development to validate concepts quickly' }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <item.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {['Discovery', 'Design', 'Development', 'Deployment'].map((phase, index) => (
                <div key={phase} className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">{index + 1}</div>
                  <div className="font-semibold">{phase}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Great</h2>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
