import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";

export default function PastPerformance() {
  const commercialProjects = [
    {
      sector: "Financial Services",
      sectorColor: "oklch(0.65_0.18_55)",
      title: "Real-Time Fraud Detection Platform",
      description1: "Designed and implemented an advanced fraud detection system for a major financial institution processing over 50 million transactions daily. The platform leveraged machine learning algorithms and real-time analytics to identify suspicious patterns and reduce false positives by 65%.",
      description2: "The solution delivered an estimated $18M in annual savings through fraud prevention and reduced manual review costs. Machine learning models trained on historical transaction data achieved 92% detection accuracy, while the system maintained sub-second response times for transaction analysis and risk scoring. The platform's ability to process massive transaction volumes in real time transformed the institution's fraud prevention capabilities and significantly reduced operational overhead.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      imageAlt: "Financial data analytics dashboard"
    },
    {
      sector: "Healthcare",
      sectorColor: "oklch(0.55_0.18_140)",
      title: "Enterprise Health Data Integration Platform",
      description1: "Architected and deployed a comprehensive data integration platform connecting disparate electronic health record (EHR) systems, laboratory information systems, and imaging repositories across a multi-hospital network serving 2.3 million patients annually.",
      description2: "The platform achieved a 40% reduction in duplicate tests through unified patient data visibility, enabling clinicians to access complete patient histories across all facilities. The HIPAA-compliant architecture featured end-to-end encryption and comprehensive audit logging to protect sensitive health information. Processing 15 million records daily with 99.97% uptime, the system became the backbone of clinical operations across the entire hospital network.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      imageAlt: "Healthcare technology and medical data"
    },
    {
      sector: "Manufacturing",
      sectorColor: "oklch(0.55_0.18_280)",
      title: "IoT-Enabled Predictive Maintenance System",
      description1: "Developed an industrial IoT platform for a global manufacturing company with 47 production facilities. The system collected real-time sensor data from 12,000 machines and used predictive analytics to forecast equipment failures before they occurred.",
      description2: "The implementation generated an estimated $24M in annual savings from reduced unplanned downtime and maintenance costs. Proactive maintenance scheduling enabled by the platform resulted in a 78% reduction in equipment failures across all facilities. Real-time dashboards provided operational insights to plant managers, enabling data-driven decisions that optimized production efficiency and extended equipment lifecycles throughout the global manufacturing network.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      imageAlt: "Industrial manufacturing facility with IoT sensors"
    }
  ];

  const governmentProjects = [
    {
      sector: "Federal Law Enforcement",
      sectorColor: "oklch(0.55_0.18_250)",
      title: "FBI FACE Services Unit Application Development",
      description1: "Team members contributed to the development and operational deployment of an automated workflow for the FBI's Facial Analysis, Comparison, and Evaluation (FACE) Services Unit. The system supported end-to-end processing of facial images from field investigations.",
      description2: "The automated facial recognition workflow replaced manual multi-platform processes, achieving a 75% efficiency improvement over previous methods. Mobile application development using agile methodology and commercial off-the-shelf (COTS) integration enabled field agents to capture and process biometric data in real time, significantly accelerating investigative workflows and improving the accuracy of facial recognition matches across the FBI's national database.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      imageAlt: "Biometric facial recognition technology"
    },
    {
      sector: "Federal Benefits Administration",
      sectorColor: "oklch(0.55_0.18_140)",
      title: "Pension Benefit Guaranty Corporation (PBGC) Modernization Support",
      description1: "Team members provided comprehensive IT modernization support for the Pension Benefit Guaranty Corporation, the federal agency that protects the retirement incomes of over 34 million American workers in private-sector defined benefit pension plans.",
      description2: "Infrastructure modernization efforts encompassed workstations, servers, and network infrastructure upgrades that improved system reliability and performance. Security engineering initiatives implemented technology management systems and access controls to protect sensitive pension data. Data warehousing and analytics capabilities supported public-facing web applications and Freedom of Information Act (FOIA) management, enabling PBGC to better serve pension plan participants and meet transparency requirements.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      imageAlt: "Financial data and pension management systems"
    },
    {
      sector: "Federal Law Enforcement",
      sectorColor: "oklch(0.55_0.18_280)",
      title: "FBI National Data Exchange (N-DEX) IT Services",
      description1: "Team members executed a comprehensive range of IT services for the FBI's National Data Exchange (N-DEX) Program Office, supporting the exchange of authorized law enforcement information between federal, state, and local agencies nationwide.",
      description2: "Program management services included strategic planning and system training that helped agencies effectively utilize the N-DEX platform. Data analysis services with custom adapter development enabled seamless data exchange between disparate law enforcement systems across jurisdictions. Quality control activities ensured data integrity across participating agencies, maintaining the reliability and accuracy of shared intelligence that supports criminal investigations and public safety operations nationwide.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      imageAlt: "Law enforcement data systems and technology"
    }
  ];

  const capabilities = [
    {
      title: "Enterprise Modernization",
      description: "Our team excels in legacy system migration, cloud infrastructure deployment, API integration, and DevOps automation. We transform outdated technology stacks into modern, scalable platforms that reduce operational costs and improve system performance."
    },
    {
      title: "Data & Analytics",
      description: "We build sophisticated data integration platforms, develop machine learning models, implement real-time analytics systems, and design enterprise data warehousing solutions. Our data engineering expertise enables organizations to extract actionable insights from complex datasets."
    },
    {
      title: "Security & Compliance",
      description: "Our security practice encompasses HIPAA compliance, security engineering, access control systems, and comprehensive audit logging. We implement defense-in-depth strategies that protect sensitive data while maintaining system usability and performance."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/past-performance-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Government Solutions', href: '/federal-solutions' },
                { label: 'Past Performance' }
              ]} 
              variant="light" 
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Federal Solutions</p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Past Performance
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              A proven track record of delivering mission-critical technology solutions across commercial industries and government sectors. Our team brings extensive experience in enterprise modernization, data analytics, cybersecurity, and intelligent automation.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/contract-vehicles">
                  View Contract Vehicles
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commercial Experience Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Commercial Sector</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Commercial Industry Experience</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our team has delivered transformative technology solutions across multiple commercial sectors, bringing proven methodologies and best practices to every engagement.
            </p>
          </motion.div>

          <div className="space-y-20">
            {commercialProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : ''}`}
              >
                <div className={index % 2 === 0 ? 'order-2 md:order-1' : ''}>
                  <span 
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                    style={{ backgroundColor: `${project.sectorColor}20`, color: project.sectorColor }}
                  >
                    {project.sector}
                  </span>
                  <h3 className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{project.title}</h3>
                  <p className="text-lg text-slate-600 mb-4 leading-relaxed">{project.description1}</p>
                  <p className="text-lg text-slate-600 leading-relaxed">{project.description2}</p>
                </div>
                <div className={index % 2 === 0 ? 'order-1 md:order-2' : ''}>
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <img 
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Experience Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Government Sector</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Government Sector Experience</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our team members bring valuable experience from government contracting environments, having contributed to mission-critical projects for federal agencies.
            </p>
          </motion.div>

          <div className="space-y-20">
            {governmentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center`}
              >
                <div className={index % 2 === 1 ? 'order-2 md:order-1' : ''}>
                  <span 
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                    style={{ backgroundColor: `${project.sectorColor}20`, color: project.sectorColor }}
                  >
                    {project.sector}
                  </span>
                  <h3 className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{project.title}</h3>
                  <p className="text-lg text-slate-600 mb-4 leading-relaxed">{project.description1}</p>
                  <p className="text-lg text-slate-600 leading-relaxed">{project.description2}</p>
                </div>
                <div className={index % 2 === 1 ? 'order-1 md:order-2' : ''}>
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <img 
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Summary Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Expertise</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Core Capabilities</h2>
            <p className="text-lg text-slate-600">
              Our past performance demonstrates deep expertise across critical technology domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-3 sm:p-4 md:p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{capability.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{capability.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Project?</h2>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Let's explore how our proven experience can help you achieve your technology modernization goals. We're actively seeking teaming partnerships and subcontracting opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/contract-vehicles">
                  View Contract Vehicles
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
