import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight, CheckCircle2 } from "lucide-react";

export default function PastPerformance() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-blue-300">Federal Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Past Performance
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A proven track record of delivering mission-critical technology solutions across commercial industries and government sectors. Our team brings extensive experience in enterprise modernization, data analytics, cybersecurity, and intelligent automation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Discuss Your Project
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/federal-solutions/contract-vehicles">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Contract Vehicles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Experience Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Commercial Industry Experience</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our team has delivered transformative technology solutions across multiple commercial sectors, bringing proven methodologies and best practices to every engagement.
            </p>
          </div>

          {/* Project 1: Financial Services - Fraud Detection */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-blue-700">Financial Services</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Real-Time Fraud Detection Platform
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Designed and implemented an advanced fraud detection system for a major financial institution processing over 50 million transactions daily. The platform leveraged machine learning algorithms and real-time analytics to identify suspicious patterns and reduce false positives by 65%.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>$18M annual savings</strong> through fraud prevention and reduced manual review costs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>92% detection accuracy</strong> with machine learning models trained on historical transaction data</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>Sub-second response times</strong> for transaction analysis and risk scoring</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Machine Learning</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Real-Time Analytics</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Cloud Infrastructure</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Data Engineering</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop" 
                  alt="Financial data analytics dashboard"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Project 2: Healthcare - Data Integration */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" 
                  alt="Healthcare technology and medical data"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-green-700">Healthcare</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Enterprise Health Data Integration Platform
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Architected and deployed a comprehensive data integration platform connecting disparate electronic health record (EHR) systems, laboratory information systems, and imaging repositories across a multi-hospital network serving 2.3 million patients annually.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>40% reduction in duplicate tests</strong> through unified patient data visibility</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>HIPAA-compliant architecture</strong> with end-to-end encryption and audit logging</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>15 million records processed daily</strong> with 99.97% uptime</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Data Integration</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">HIPAA Compliance</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">API Development</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Cloud Migration</span>
              </div>
            </div>
          </div>

          {/* Project 3: Manufacturing - Predictive Maintenance */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-purple-700">Manufacturing</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                IoT-Enabled Predictive Maintenance System
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Developed an industrial IoT platform for a global manufacturing company with 47 production facilities. The system collected real-time sensor data from 12,000+ machines and used predictive analytics to forecast equipment failures before they occurred.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>$24M annual savings</strong> from reduced unplanned downtime and maintenance costs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>78% reduction in equipment failures</strong> through proactive maintenance scheduling</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>Real-time dashboards</strong> providing operational insights to plant managers</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">IoT Integration</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Predictive Analytics</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Edge Computing</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Data Visualization</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
                  alt="Industrial manufacturing facility with IoT sensors"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Experience Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Government Sector Experience</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our team members bring valuable experience from government contracting environments, having contributed to mission-critical projects for federal agencies.
            </p>
          </div>

          {/* Government Project 1: FBI FACE Services */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop" 
                  alt="Biometric facial recognition technology"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-blue-700">Federal Law Enforcement</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                FBI FACE Services Unit Application Development
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Team members contributed to the development and operational deployment of an automated workflow for the FBI's Facial Analysis, Comparison, and Evaluation (FACE) Services Unit. The system supported end-to-end processing of facial images from field investigations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>Automated facial recognition workflow</strong> replacing manual multi-platform processes</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>75% efficiency improvement</strong> over previous manual processing methods</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>Mobile application development</strong> with agile methodology and COTS integration</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Biometric Systems</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Mobile Development</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Agile Development</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">COTS Integration</span>
              </div>
            </div>
          </div>

          {/* Government Project 2: PBGC Modernization */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-green-700">Federal Benefits Administration</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Pension Benefit Guaranty Corporation (PBGC) Modernization Support
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Team members provided systems development, infrastructure modernization, and security engineering support to PBGC under multiple IDIQ and single award contracts. Work included operations and maintenance, modernization, and enhancement support for business applications.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>Infrastructure modernization</strong> including workstations, servers, and network infrastructure</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>Security engineering</strong> with technology management systems and access controls</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>Data warehousing and analytics</strong> for public-facing web applications and FOIA management</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Infrastructure Modernization</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Security Engineering</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Data Warehousing</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Application Development</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" 
                  alt="Financial data and pension management systems"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Government Project 3: FBI N-DEX */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop" 
                  alt="Law enforcement data systems and technology"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-purple-700">Federal Law Enforcement</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                FBI National Data Exchange (N-DEX) IT Services
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Team members executed a comprehensive range of IT services for the FBI's National Data Exchange (N-DEX) Program Office, supporting the exchange of authorized law enforcement information between federal, state, and local agencies nationwide.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>Program management services</strong> including strategic planning and system training</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>Data analysis services</strong> with custom adapter development for data exchange</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700"><strong>Quality control activities</strong> ensuring data integrity across law enforcement agencies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Data Integration</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Program Management</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Custom Adapters</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Quality Assurance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Summary Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Core Capabilities</h2>
            <p className="text-xl text-slate-600 mb-12 text-center">
              Our past performance demonstrates deep expertise across critical technology domains
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Modernization</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Legacy system migration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Cloud infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>API integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>DevOps automation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Data & Analytics</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Data integration platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Machine learning models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Real-time analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Data warehousing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Security & Compliance</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>HIPAA compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Security engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Access control systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Audit logging</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Discuss Your Project?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's explore how our proven experience can help you achieve your technology modernization goals. We're actively seeking teaming partnerships and subcontracting opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Contact Us Today
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/federal-solutions/contract-vehicles">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Contract Vehicles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
