import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PastPerformance() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-[#003366] text-white py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/past-performance-hero.jpg" 
            alt="Professional team collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#003366]/85 to-[#003366]/70"></div>
        </div>
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
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Designed and implemented an advanced fraud detection system for a major financial institution processing over 50 million transactions daily. The platform leveraged machine learning algorithms and real-time analytics to identify suspicious patterns and reduce false positives by 65%.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                The solution delivered $18M in annual savings through fraud prevention and reduced manual review costs. Machine learning models trained on historical transaction data achieved 92% detection accuracy, while the system maintained sub-second response times for transaction analysis and risk scoring. The platform's ability to process massive transaction volumes in real time transformed the institution's fraud prevention capabilities and significantly reduced operational overhead.
              </p>
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
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Architected and deployed a comprehensive data integration platform connecting disparate electronic health record (EHR) systems, laboratory information systems, and imaging repositories across a multi-hospital network serving 2.3 million patients annually.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                The platform achieved a 40% reduction in duplicate tests through unified patient data visibility, enabling clinicians to access complete patient histories across all facilities. The HIPAA-compliant architecture featured end-to-end encryption and comprehensive audit logging to protect sensitive health information. Processing 15 million records daily with 99.97% uptime, the system became the backbone of clinical operations across the entire hospital network.
              </p>
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
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Developed an industrial IoT platform for a global manufacturing company with 47 production facilities. The system collected real-time sensor data from 12,000 machines and used predictive analytics to forecast equipment failures before they occurred.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                The implementation generated $24M in annual savings from reduced unplanned downtime and maintenance costs. Proactive maintenance scheduling enabled by the platform resulted in a 78% reduction in equipment failures across all facilities. Real-time dashboards provided operational insights to plant managers, enabling data-driven decisions that optimized production efficiency and extended equipment lifecycles throughout the global manufacturing network.
              </p>
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
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Team members contributed to the development and operational deployment of an automated workflow for the FBI's Facial Analysis, Comparison, and Evaluation (FACE) Services Unit. The system supported end-to-end processing of facial images from field investigations.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                The automated facial recognition workflow replaced manual multi-platform processes, achieving a 75% efficiency improvement over previous methods. Mobile application development using agile methodology and commercial off-the-shelf (COTS) integration enabled field agents to capture and process biometric data in real time, significantly accelerating investigative workflows and improving the accuracy of facial recognition matches across the FBI's national database.
              </p>
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
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Team members provided systems development, infrastructure modernization, and security engineering support to PBGC under multiple IDIQ and single award contracts. Work included operations and maintenance, modernization, and enhancement support for business applications.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Infrastructure modernization efforts encompassed workstations, servers, and network infrastructure upgrades that improved system reliability and performance. Security engineering initiatives implemented technology management systems and access controls to protect sensitive pension data. Data warehousing and analytics capabilities supported public-facing web applications and Freedom of Information Act (FOIA) management, enabling PBGC to better serve pension plan participants and meet transparency requirements.
              </p>
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
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Team members executed a comprehensive range of IT services for the FBI's National Data Exchange (N-DEX) Program Office, supporting the exchange of authorized law enforcement information between federal, state, and local agencies nationwide.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Program management services included strategic planning and system training that helped agencies effectively utilize the N-DEX platform. Data analysis services with custom adapter development enabled seamless data exchange between disparate law enforcement systems across jurisdictions. Quality control activities ensured data integrity across participating agencies, maintaining the reliability and accuracy of shared intelligence that supports criminal investigations and public safety operations nationwide.
              </p>
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
                <p className="text-slate-600 leading-relaxed">
                  Our team excels in legacy system migration, cloud infrastructure deployment, API integration, and DevOps automation. We transform outdated technology stacks into modern, scalable platforms that reduce operational costs and improve system performance.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Data & Analytics</h3>
                <p className="text-slate-600 leading-relaxed">
                  We build sophisticated data integration platforms, develop machine learning models, implement real-time analytics systems, and design enterprise data warehousing solutions. Our data engineering expertise enables organizations to extract actionable insights from complex datasets.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Security & Compliance</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our security practice encompasses HIPAA compliance, security engineering, access control systems, and comprehensive audit logging. We implement defense-in-depth strategies that protect sensitive data while maintaining system usability and performance.
                </p>
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

      <Footer />
    </div>
  );
}
