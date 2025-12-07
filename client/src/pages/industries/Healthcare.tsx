import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Heart, Shield, TrendingUp, Activity, Users, Clock, Database } from 'lucide-react';

export default function Healthcare() {
  const challenges = [
    {
      title: 'Interoperability & Data Silos',
      description: 'Healthcare organizations struggle with fragmented data across EHR systems, lab platforms, imaging systems, and billing software. This lack of interoperability creates care coordination challenges, duplicate testing, and incomplete patient records that impact clinical decision-making and patient safety.'
    },
    {
      title: 'Regulatory Compliance Burden',
      description: 'Meeting HIPAA, HITECH, FDA 21 CFR Part 11, and state-specific privacy regulations requires continuous monitoring and documentation. Healthcare IT teams must balance compliance requirements with operational efficiency while protecting sensitive patient data across increasingly complex technology ecosystems.'
    },
    {
      title: 'Clinician Burnout & Administrative Load',
      description: 'Physicians and nurses spend up to 50% of their time on administrative tasks including EHR documentation, prior authorizations, and billing workflows. This administrative burden contributes to clinician burnout, reduces patient face time, and increases operational costs across healthcare organizations.'
    },
    {
      title: 'Value-Based Care Transition',
      description: 'The shift from fee-for-service to value-based care models requires real-time analytics, population health management, and quality metrics tracking. Healthcare organizations must demonstrate improved patient outcomes and cost efficiency while managing complex reimbursement models and quality reporting requirements.'
    }
  ];

  const solutions = [
    {
      icon: Database,
      title: 'Unified Data Integration',
      description: 'We implement comprehensive data integration platforms that connect disparate healthcare systems including Epic, Cerner, Meditech, and specialized clinical applications. Our HL7 FHIR-compliant integration layer enables real-time data exchange while maintaining HIPAA compliance. This unified approach provides clinicians with complete patient views, reduces duplicate testing by 35%, and enables advanced analytics across the care continuum.'
    },
    {
      icon: Activity,
      title: 'Clinical Workflow Automation',
      description: 'Our intelligent automation solutions reduce administrative burden on clinical staff by automating routine tasks including prior authorization processing, referral management, and clinical documentation. RPA bots handle repetitive workflows 24/7 with 99.9% accuracy, freeing clinicians to focus on patient care. Implementations typically reduce administrative time by 40% while improving compliance and reducing errors.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics & Population Health',
      description: 'We deploy machine learning models that predict patient deterioration, readmission risk, and chronic disease progression to enable proactive interventions. Our population health platforms aggregate data across care settings to identify high-risk patients, optimize care management resources, and demonstrate quality metrics for value-based contracts. Clients achieve 30% reduction in preventable readmissions and measurable improvements in HEDIS scores.'
    },
    {
      icon: Shield,
      title: 'HIPAA-Compliant Security Architecture',
      description: 'Every solution is designed with healthcare security requirements at its core, including end-to-end encryption, role-based access controls, comprehensive audit logging, and Business Associate Agreement (BAA) coverage. Our security framework exceeds HIPAA requirements and includes OCR audit readiness, breach notification protocols, and continuous vulnerability management to protect sensitive patient data.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Healthcare Excellence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Healthcare & Life Sciences
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              HIPAA-compliant automation and analytics solutions that improve patient outcomes while reducing operational costs. Support clinical workflows, enable value-based care, and facilitate data-driven decision making across your healthcare organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Healthcare Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Healthcare Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Stats */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Patients Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Outcome Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">$12M+</div>
              <div className="text-sm text-muted-foreground">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">HIPAA Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Healthcare Transformation Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements in clinical quality, operational efficiency, and financial performance through strategic automation and advanced analytics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Patient Outcomes', desc: '40% improvement through AI-powered analytics and predictive modeling that enables proactive interventions' },
              { icon: Shield, title: 'HIPAA Compliance', desc: 'Full BAA support with encrypted data handling, comprehensive audit trails, and OCR audit readiness' },
              { icon: TrendingUp, title: 'Cost Reduction', desc: '$12M+ average annual savings per facility through workflow optimization and resource utilization' },
              { icon: Clock, title: 'Administrative Efficiency', desc: '50% reduction in manual documentation time, freeing clinicians to focus on direct patient care' },
              { icon: Users, title: 'Care Coordination', desc: 'Unified patient views across care settings enabling seamless transitions and reducing readmissions by 30%' },
              { icon: Activity, title: 'Population Health', desc: 'Real-time risk stratification and care management tools that improve quality metrics and value-based outcomes' }
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

      {/* Healthcare Challenges */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Healthcare Challenges We Solve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Healthcare organizations face unique operational, regulatory, and clinical challenges that require specialized expertise in both healthcare workflows and advanced technology implementation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-accent">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Healthcare Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive automation and analytics services designed specifically for healthcare delivery, life sciences research, and medical device manufacturing with full regulatory compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <solution.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Healthcare Success Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world results demonstrating the significant impact of strategic automation and advanced analytics in healthcare delivery.
            </p>
          </div>
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary text-primary-foreground p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-accent mb-2">Featured Success</div>
                  <h3 className="text-3xl font-bold mb-4">Healthcare System Saves $12M Through AI Analytics</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    Real-time data intelligence platform improved patient outcomes by 40% across a multi-facility network while reducing operational costs.
                  </p>
                  <p className="text-primary-foreground/90 mb-6">
                    This regional health system serving 50,000+ patients struggled with fragmented data across six hospitals and 25 clinics. Our team implemented a unified analytics platform integrating Epic EHR, lab systems, and imaging platforms with predictive models for readmission risk and sepsis detection. The solution achieved full HIPAA compliance with BAA coverage and delivered measurable improvements in both clinical quality and financial performance within 6 months.
                  </p>
                  <Button className="bg-orange-gradient hover:opacity-90 w-fit">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-accent mb-2">$12M</div>
                    <div className="text-lg text-muted-foreground mb-8">Annual Savings</div>
                    <div className="grid grid-cols-2 gap-6 text-left">
                      <div>
                        <div className="text-3xl font-bold text-accent">40%</div>
                        <div className="text-sm text-muted-foreground">Outcome Improvement</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">30%</div>
                        <div className="text-sm text-muted-foreground">Readmission Reduction</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">50K+</div>
                        <div className="text-sm text-muted-foreground">Patients Served</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">6 months</div>
                        <div className="text-sm text-muted-foreground">to Full Deployment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Healthcare Delivery</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a healthcare automation assessment with our clinical informatics experts. We'll analyze your workflows, identify high-impact opportunities, and provide a detailed ROI projection tailored to your organization's clinical and financial goals.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Healthcare Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
