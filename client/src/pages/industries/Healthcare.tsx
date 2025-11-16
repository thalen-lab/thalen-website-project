import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Heart, Shield, TrendingUp } from 'lucide-react';

export default function Healthcare() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Healthcare & Life Sciences
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              HIPAA-compliant automation and analytics solutions that improve patient outcomes while reducing operational costs. FDA 21 CFR Part 11 ready.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Healthcare Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Patient Outcomes', desc: '40% improvement through AI-powered analytics' },
              { icon: Shield, title: 'HIPAA Compliance', desc: 'Full BAA support with encrypted data handling' },
              { icon: TrendingUp, title: 'Cost Reduction', desc: '$12M+ average annual savings per facility' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <item.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary text-primary-foreground p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">Healthcare System Saves $12M Through AI Analytics</h3>
                  <p className="text-primary-foreground/90 mb-6">
                    Real-time data intelligence platform improved patient outcomes by 40% across a multi-facility network.
                  </p>
                  <Button className="bg-orange-gradient hover:opacity-90 w-fit">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-accent/10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-accent mb-2">$12M</div>
                    <div className="text-lg text-muted-foreground">Annual Savings</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Healthcare Delivery</h2>
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
