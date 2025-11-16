import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, DollarSign, Shield, Brain } from 'lucide-react';

export default function Financial() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Financial Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Real-time fraud detection, regulatory compliance automation, and AI-powered risk analytics for banks, insurance, and fintech companies.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Financial Services Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: 'Fraud Detection', desc: '99.9% accuracy processing 50M+ daily transactions' },
              { icon: Shield, title: 'Compliance', desc: 'SOC 2, PCI-DSS, and regulatory reporting automation' },
              { icon: DollarSign, title: 'Risk Analytics', desc: 'Real-time risk scoring and portfolio optimization' }
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
                  <h3 className="text-3xl font-bold mb-4">Bank Achieves Real-Time Fraud Detection at Scale</h3>
                  <p className="text-primary-foreground/90 mb-6">
                    AI-powered fraud detection processing 50M+ daily transactions with 99.9% accuracy and zero false positives.
                  </p>
                  <Button className="bg-orange-gradient hover:opacity-90 w-fit">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-accent/10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-accent mb-2">50M+</div>
                    <div className="text-lg text-muted-foreground">Daily Transactions</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Secure Financial Innovation</h2>
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
