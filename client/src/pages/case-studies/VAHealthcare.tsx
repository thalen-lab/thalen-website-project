import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, TrendingDown, Users, Clock, Database } from 'lucide-react';

export default function VAHealthcare() {
  const metrics = [
    { icon: Database, value: '12', label: 'Systems Integrated', description: 'Unified 12 disparate healthcare systems' },
    { icon: TrendingDown, value: '60%', label: 'Admin Burden Reduced', description: 'Administrative workload decreased by 60%' },
    { icon: Users, value: '500K+', label: 'Veterans Served', description: 'Improved care coordination for 500K+ veterans' },
    { icon: Clock, value: '4.2 days', label: 'Appointment Wait Time', description: 'Reduced from 18 days to 4.2 days average' }
  ];

  const challenges = [
    {
      title: 'Fragmented Patient Data',
      description: 'Patient health records scattered across 12 disconnected systems (VistA, CPRS, JLV, Cerner, and 8 legacy systems) preventing comprehensive care coordination and creating safety risks.'
    },
    {
      title: 'Manual Data Reconciliation',
      description: 'Clinical staff spent 4-6 hours daily manually reconciling patient data across systems, reducing time available for direct patient care and causing appointment delays.'
    },
    {
      title: 'Interoperability Barriers',
      description: 'Legacy systems built on incompatible technologies with no standardized data exchange, requiring custom integration for each system pair (66 potential integrations).'
    },
    {
      title: 'HIPAA & FedRAMP Compliance',
      description: 'Integration solution required strict HIPAA compliance for Protected Health Information (PHI) and FedRAMP authorization for cloud-based components.'
    }
  ];

  const solutions = [
    {
      title: 'FedRAMP Integration Platform',
      description: 'Deployed MuleSoft Government Cloud (FedRAMP High) as enterprise integration platform with FHIR-compliant APIs, HL7 messaging, and real-time data synchronization across all 12 systems.'
    },
    {
      title: 'Master Patient Index (MPI)',
      description: 'Implemented enterprise Master Patient Index with probabilistic matching algorithms achieving 99.8% accuracy in patient identity resolution across disparate systems.'
    },
    {
      title: 'Clinical Data Repository',
      description: 'Built centralized clinical data repository aggregating patient records from all systems with longitudinal health record views, medication reconciliation, and care gap identification.'
    },
    {
      title: 'HIPAA-Compliant Security Architecture',
      description: 'Implemented comprehensive HIPAA security controls including end-to-end encryption, role-based access control, audit logging, and continuous monitoring achieving FedRAMP High authorization.'
    }
  ];

  const outcomes = [
    '12 disparate healthcare systems unified into single patient view',
    '60% reduction in administrative burden for clinical staff',
    'Appointment wait times reduced from 18 days to 4.2 days average',
    '500K+ veterans benefit from improved care coordination',
    '99.8% patient identity matching accuracy across systems',
    '$18M annual cost savings from administrative efficiency',
    'Zero HIPAA violations in 30 months of production operation',
    'Real-time clinical data access for 8,500+ VA healthcare providers'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Veterans Affairs Case Study
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              VA Medical Center Integrates 12 Legacy Systems
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Unified patient data across 12 disparate VA healthcare systems with FedRAMP-authorized integration platforms, reducing administrative burden by 60% and improving care coordination for 500K+ veterans.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Discuss Your Integration Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/automation">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Integration Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Healthcare Transformation Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements in care coordination, administrative efficiency, and veteran satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                    <metric.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">{metric.value}</div>
                  <div className="font-semibold mb-2">{metric.label}</div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Medical Center Overview</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Organization:</strong> Large VA Medical Center (VAMC) network
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Scope:</strong> 8 hospitals, 42 outpatient clinics across 3-state region
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Patient Population:</strong> 500K+ enrolled veterans
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Staff:</strong> 8,500 healthcare providers and administrative personnel
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Compliance:</strong> HIPAA, FedRAMP High, VA Directive 6500
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="/healthcare-legacy-it.jpg" 
                alt="VA Medical Center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Healthcare IT Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Critical interoperability, care coordination, and compliance challenges impacting veteran care quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Thalen Technologies Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise integration platform unifying 12 healthcare systems with HIPAA and FedRAMP compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <div className="bg-accent text-accent-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold">{solution.title}</h3>
                  </div>
                  <p className="text-muted-foreground ml-12">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Project Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Significant improvements in care quality, operational efficiency, and veteran satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-lg">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-accent/10">
        <div className="container">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="text-6xl text-accent mb-4">"</div>
                <p className="text-2xl font-medium mb-6">
                  Thalen Technologies's integration solution has fundamentally transformed how we deliver care to veterans. The unified patient view across all 12 systems has eliminated dangerous data gaps, reduced appointment wait times by 77%, and freed our clinical staff to focus on patient care instead of system navigation. The $18M annual savings and zero HIPAA violations demonstrate their exceptional healthcare IT and compliance expertise.
                </p>
                <div className="border-t pt-6">
                  <p className="font-bold text-lg">Chief Medical Information Officer</p>
                  <p className="text-muted-foreground">VA Medical Center Network</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Integrate Your Healthcare Systems?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a healthcare IT assessment to discuss your integration challenges, interoperability requirements, and care coordination goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Healthcare IT Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services/automation">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Integration Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
