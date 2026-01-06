import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

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
      title: 'Unified Data Integration',
      description: 'We implement comprehensive data integration platforms that connect disparate healthcare systems including Epic, Cerner, Meditech, and specialized clinical applications. Our HL7 FHIR-compliant integration layer enables real-time data exchange while maintaining HIPAA compliance. This unified approach provides clinicians with complete patient views, reduces duplicate testing by 35%, and enables advanced analytics across the care continuum.'
    },
    {
      title: 'Clinical Workflow Automation',
      description: 'Our intelligent automation solutions reduce administrative burden on clinical staff by automating routine tasks including prior authorization processing, referral management, and clinical documentation. RPA bots handle repetitive workflows 24/7 with 99.9% accuracy, freeing clinicians to focus on patient care. Implementations typically reduce administrative time by 40% while improving compliance and reducing errors.'
    },
    {
      title: 'Predictive Analytics & Population Health',
      description: 'We deploy machine learning models that predict patient deterioration, readmission risk, and chronic disease progression to enable proactive interventions. Our population health platforms aggregate data across care settings to identify high-risk patients, optimize care management resources, and demonstrate quality metrics for value-based contracts. Clients achieve 30% reduction in preventable readmissions and measurable improvements in HEDIS scores.'
    },
    {
      title: 'HIPAA-Compliant Security Architecture',
      description: 'Every solution is designed with healthcare security requirements at its core, including end-to-end encryption, role-based access controls, comprehensive audit logging, and Business Associate Agreement (BAA) coverage. Our security framework exceeds HIPAA requirements and includes OCR audit readiness, breach notification protocols, and continuous vulnerability management to protect sensitive patient data.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main>
        <section className="relative py-20 sm:py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white">
          <div aria-hidden="true" className="absolute inset-0 bg-[#0A2540]"></div>
          <div className="absolute inset-0 bg-[url(/img/patterns/hero-pattern.svg)] bg-center bg-repeat opacity-5"></div>
          <div className="relative container z-10">
            <div className="max-w-4xl">
              <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
                Healthcare Excellence
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Healthcare & Life Sciences
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                HIPAA-compliant automation and analytics solutions that improve patient outcomes while reducing operational costs. Support clinical workflows, enable value-based care, and facilitate data-driven decision making across your healthcare organization.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                <Button size="lg" asChild>
                  <a href="#" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                    Schedule Healthcare Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[oklch(0.97_0.01_250)]">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center text-[oklch(0.20_0.05_250)]">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">Patients Impacted</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">40%</div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">Outcome Improvement</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">$12M+</div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">Average Annual Savings</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">HIPAA Compliance</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-10 sm:py-14 md:py-20 lg:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Key Outcomes</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[oklch(0.20_0.05_250)] mb-4">Healthcare Transformation Outcomes</h2>
              <p className="text-lg text-slate-600">
                Measurable improvements in clinical quality, operational efficiency, and financial performance through strategic automation and advanced analytics.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Patient Outcomes', desc: '40% improvement through AI-powered analytics and predictive modeling that enables proactive interventions' },
                { title: 'HIPAA Compliance', desc: 'Full BAA support with encrypted data handling, comprehensive audit trails, and OCR audit readiness' },
                { title: 'Cost Reduction', desc: '$12M+ average annual savings per facility through workflow optimization and resource utilization' },
                { title: 'Administrative Efficiency', desc: '50% reduction in manual documentation time, freeing clinicians to focus on direct patient care' },
                { title: 'Care Coordination', desc: 'Unified patient views across care settings enabling seamless transitions and reducing readmissions by 30%' },
                { title: 'Population Health', desc: 'Real-time risk stratification and care management tools that improve quality metrics and value-based outcomes' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-2 border-slate-200 rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-10 sm:py-14 md:py-20 lg:py-24 bg-[oklch(0.97_0.01_250)]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Challenges</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[oklch(0.20_0.05_250)] mb-4">Healthcare Challenges We Solve</h2>
              <p className="text-lg text-slate-600">
                Healthcare organizations face unique operational, regulatory, and clinical challenges that require specialized expertise in both healthcare workflows and advanced technology implementation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-4 sm:p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{challenge.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-10 sm:py-14 md:py-20 lg:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Solutions</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[oklch(0.20_0.05_250)] mb-4">Our Healthcare Solutions</h2>
              <p className="text-lg text-slate-600">
                Comprehensive automation and analytics services designed specifically for healthcare delivery, life sciences research, and medical device manufacturing with full regulatory compliance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 max-w-6xl mx-auto">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <div>
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{solution.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-10 sm:py-14 md:py-20 lg:py-24 bg-[oklch(0.97_0.01_250)]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Success Story</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[oklch(0.20_0.05_250)] mb-4">Healthcare Success Story</h2>
              <p className="text-lg text-slate-600">
                Real-world results demonstrating the significant impact of strategic automation and advanced analytics in healthcare delivery.
              </p>
            </div>
            <Card className="overflow-hidden max-w-5xl mx-auto bg-white border-2 border-slate-200 rounded-xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="bg-[oklch(0.22_0.06_250)] text-white p-4 sm:p-6 md:p-8 sm:p-12 flex flex-col justify-center">
                    <p className="font-semibold text-[oklch(0.75_0.15_55)] mb-2 uppercase tracking-wider">Featured Success</p>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">Healthcare System Saves $12M Through AI Analytics</h3>
                    <p className="text-white/90 mb-6">
                      Real-time data intelligence platform improved patient outcomes by 40% across a multi-facility network while reducing operational costs.
                    </p>
                    <Button asChild className="w-fit bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                      <a href="#">
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <div className="bg-white p-4 sm:p-6 md:p-8 sm:p-12 flex items-center justify-center">
                    <div className="text-center w-full">
                      <div className="text-6xl sm:text-7xl font-bold text-[oklch(0.20_0.05_250)] mb-2">$12M</div>
                      <div className="text-base text-slate-600 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 uppercase tracking-wider">Annual Savings</div>
                      <div className="grid grid-cols-2 gap-6 text-left text-[oklch(0.20_0.05_250)]">
                        <div>
                          <div className="text-3xl font-bold">40%</div>
                          <div className="text-sm text-slate-600">Outcome Improvement</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold">30%</div>
                          <div className="text-sm text-slate-600">Readmission Reduction</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold">50K+</div>
                          <div className="text-sm text-slate-600">Patients Served</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold">6 mo</div>
                          <div className="text-sm text-slate-600">to Full Deployment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 sm:py-10 sm:py-14 md:py-20 lg:py-24 bg-[oklch(0.22_0.06_250)] text-white">
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Transform Healthcare Delivery</h2>
            <p className="text-lg sm:text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Schedule a healthcare automation assessment with our clinical informatics experts. We'll analyze your workflows, identify high-impact opportunities, and provide a detailed ROI projection tailored to your organization's clinical and financial goals.
            </p>
            <Button size="lg" asChild>
              <a href="#" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Schedule Healthcare Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
