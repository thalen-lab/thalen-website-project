import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Code, Workflow, Zap, Layers } from 'lucide-react';

export default function AppDevelopment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Application Development & Integration
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Custom applications, seamless integrations, and workflow automation for enhanced productivity. Modern architectures with API-first design and microservices.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: 'Custom Development', desc: 'Tailored applications built to your exact requirements' },
              { icon: Workflow, title: 'System Integration', desc: 'Seamless connectivity across enterprise systems' },
              { icon: Zap, title: 'API Development', desc: 'RESTful and GraphQL APIs for modern architectures' },
              { icon: Layers, title: 'Microservices', desc: 'Scalable, maintainable service-oriented architecture' }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8 text-center">
                  <item.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Modern Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['React', 'Node.js', 'Python', 'Java', 'Kubernetes', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST API', 'gRPC'].map((tech) => (
              <div key={tech} className="bg-card border border-border rounded-lg px-6 py-3 font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Solution?</h2>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
