import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Users, Target, TrendingUp, BookOpen } from 'lucide-react';

export default function DigitalTransformation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital Transformation Enablement
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              End-to-end transformation support including change management, training, and adoption strategies. Ensure your technology investments deliver lasting business value.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Begin Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Strategy Development', desc: 'Comprehensive roadmaps aligned with business objectives' },
              { icon: Users, title: 'Change Management', desc: 'Structured approach to organizational transformation' },
              { icon: BookOpen, title: 'Training & Enablement', desc: 'Comprehensive programs for user adoption' },
              { icon: TrendingUp, title: 'Success Metrics', desc: 'KPIs and dashboards to track transformation ROI' }
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
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Transformation Success Factors</h2>
            <div className="space-y-6">
              {[
                { title: 'Executive Sponsorship', desc: 'Secure leadership commitment and strategic alignment' },
                { title: 'User Adoption', desc: 'Drive engagement through training and change management' },
                { title: 'Continuous Improvement', desc: 'Iterate based on metrics and user feedback' },
                { title: 'Cultural Transformation', desc: 'Build a culture that embraces innovation and change' }
              ].map((factor, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-start">
                    <div className="text-3xl font-bold text-accent mr-6">{index + 1}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{factor.title}</h3>
                      <p className="text-muted-foreground">{factor.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Organization</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Partner with us to ensure your digital transformation delivers measurable business outcomes.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Strategy Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
