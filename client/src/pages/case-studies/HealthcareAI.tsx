import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, CheckCircle2, Heart, DollarSign, Users } from 'lucide-react';
import { Link } from 'wouter';

export default function HealthcareAI() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Healthcare Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Healthcare System Saves $12M Through AI Analytics
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Data intelligence platform delivered real-time insights improving patient outcomes by 40% while achieving full HIPAA compliance across 15 facilities.
            </p>
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              <Download className="mr-2 h-5 w-5" />
              Download Full Case Study (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '$12M', label: 'Annual Savings', icon: DollarSign },
              { value: '40%', label: 'Outcome Improvement', icon: Heart },
              { value: '2M+', label: 'Patients Served', icon: Users },
              { value: '15', label: 'Facilities Connected', icon: CheckCircle2 }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              A regional healthcare system serving 2M+ patients across 15 facilities struggled with fragmented data systems, leading to delayed diagnoses, suboptimal treatment plans, and operational inefficiencies costing millions annually.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Thalen Technologies designed and deployed an AI-powered analytics platform that unified patient data across all facilities, providing real-time clinical insights while maintaining strict HIPAA compliance and achieving measurable improvements in both patient outcomes and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Fragmented Data Systems',
                description: '8 different EMR systems across 15 facilities with no unified view of patient data, leading to incomplete clinical pictures.'
              },
              {
                title: 'Delayed Clinical Insights',
                description: 'Critical patient data analysis taking 24-48 hours, delaying treatment decisions and impacting outcomes.'
              },
              {
                title: 'HIPAA Compliance Complexity',
                description: 'Need for real-time data sharing while maintaining strict HIPAA compliance and patient privacy protections.'
              },
              {
                title: 'Operational Inefficiencies',
                description: '$15M+ annual waste from duplicated tests, extended stays, and preventable readmissions.'
              }
            ].map((challenge, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Our Solution</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Unified Data Platform',
                description: 'Built HIPAA-compliant data lake integrating 8 EMR systems, providing real-time unified patient views across all 15 facilities.'
              },
              {
                title: 'AI-Powered Clinical Analytics',
                description: 'Deployed machine learning models for predictive analytics, identifying high-risk patients and recommending optimal treatment pathways with 92% accuracy.'
              },
              {
                title: 'Real-Time Dashboards',
                description: 'Created role-based dashboards for clinicians, administrators, and executives with real-time insights and alerts for critical patient conditions.'
              },
              {
                title: 'Automated Compliance Monitoring',
                description: 'Implemented continuous HIPAA compliance monitoring with automated audit trails and access controls across all data touchpoints.'
              },
              {
                title: 'Clinician Training Program',
                description: 'Executed comprehensive training for 1,200+ clinicians with ongoing support and optimization based on user feedback.'
              }
            ].map((solution, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-accent/10">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Measurable Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { metric: '$12M', label: 'Annual Savings', detail: 'ROI achieved in 18 months' },
              { metric: '40%', label: 'Outcome Improvement', detail: 'Reduced complications and readmissions' },
              { metric: '92%', label: 'Prediction Accuracy', detail: 'AI model performance' },
              { metric: '24-48h → 15min', label: 'Analysis Time', detail: '99% reduction in data analysis time' },
              { metric: '1,200+', label: 'Clinicians Trained', detail: '96% user adoption rate' },
              { metric: '100%', label: 'HIPAA Compliance', detail: 'Zero compliance violations' }
            ].map((result, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{result.metric}</div>
                  <div className="text-lg font-semibold mb-1">{result.label}</div>
                  <div className="text-sm text-muted-foreground">{result.detail}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12">
              <div className="text-6xl text-accent mb-6">"</div>
              <blockquote className="text-2xl font-medium mb-8">
                The AI analytics platform from Thalen Technologies has fundamentally transformed how we deliver care. Real-time insights have enabled our clinicians to make faster, more informed decisions, directly improving patient outcomes. The $12M in savings was significant, but the improvement in care quality is priceless.
              </blockquote>
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl mr-4">
                  SM
                </div>
                <div>
                  <div className="font-bold text-lg">Dr. Sarah Martinez</div>
                  <div className="text-primary-foreground/80">Chief Medical Information Officer</div>
                  <div className="text-sm text-primary-foreground/60">Regional Healthcare System</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Technologies & Methodologies</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Python',
              'TensorFlow',
              'PyTorch',
              'Apache Spark',
              'Snowflake',
              'Tableau',
              'FHIR',
              'HL7',
              'Azure Health Data Services',
              'Docker',
              'Kubernetes',
              'HIPAA Compliance',
              'BAA Framework',
              'Machine Learning',
              'Agile/Scrum'
            ].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Healthcare Delivery</h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how Thalen Technologies's healthcare analytics solutions can improve patient outcomes and operational efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Healthcare Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
