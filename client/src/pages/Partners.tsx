import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { FloatingPrintButton } from '@/components/PrintButton';

export default function Partners() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#0A2540] py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/assets/patterns/pattern-1.svg')" }}
        ></div>
        <div className="container max-w-5xl relative z-10">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb items={[{ label: "Partners" }]} />
          </div>
          <div className="max-w-3xl">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Technology Partnerships
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              We implement the platforms you need—without vendor lock-in
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Thalen Technologies maintains strategic partnerships with 50+ FedRAMP and StateRAMP-authorized technology providers. We don't sell platforms—we help federal, state, and local agencies implement the right solutions for their mission requirements.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 gap-2">
                  Schedule Assessment <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/methodology">
                <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white">
                  View Our Methodology
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor-Neutral Positioning Statement */}
      <section className="py-16 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Vendor-Neutral Consulting</h3>
              <p className="text-slate-600 text-sm">
                We evaluate and recommend platforms based on your requirements—not commission structures.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Implementation Expertise</h3>
              <p className="text-slate-600 text-sm">
                Our team holds certifications across 50+ platforms—we implement what you choose, not what we sell.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Government-First Focus</h3>
              <p className="text-slate-600 text-sm">
                All partnerships support FedRAMP/StateRAMP compliance for federal, state, and local agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FedRAMP/StateRAMP Authorized Platforms We Implement */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 text-center">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Expertise</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              FedRAMP & StateRAMP-Authorized Platforms
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our consulting team maintains active certifications and implementation experience across government-authorized cloud platforms, security tools, and enterprise software. We help you navigate vendor selection, procurement, and deployment.
            </p>
          </div>

          {/* Cloud Infrastructure & Platforms */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 pb-16 border-b border-slate-200">
            <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">Cloud Infrastructure & Platforms</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">AWS GovCloud (FedRAMP High)</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Secure cloud infrastructure for federal agencies with IL4/IL5 workloads
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Migration & modernization consulting</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Landing zone design and implementation</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Cost optimization and FinOps</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Microsoft Azure Government</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Enterprise cloud platform with government-specific compliance
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Hybrid cloud architecture design</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Active Directory integration</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>DevSecOps pipeline setup</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Google Cloud Platform (GCP)</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Advanced data analytics and AI/ML capabilities for government
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>BigQuery data warehouse implementation</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Kubernetes (GKE) orchestration</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Vertex AI model deployment</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Oracle Cloud Infrastructure</h4>
                <p className="text-sm text-slate-600 mb-3">
                  High-performance infrastructure for mission-critical workloads
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Database migration and optimization</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Disaster recovery planning</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Autonomous database setup</span></li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Cybersecurity & Compliance */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 pb-16 border-b border-slate-200">
            <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">Cybersecurity & Compliance</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Palo Alto Networks</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Next-generation firewall and zero-trust security architecture
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Zero-trust network design</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Prisma Cloud implementation</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Security policy automation</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">CrowdStrike Falcon</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Endpoint detection and response (EDR) for government agencies
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Endpoint protection deployment</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Threat hunting and incident response</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Integration with SIEM platforms</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Splunk Enterprise Security</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Security information and event management (SIEM) platform
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>SIEM architecture and deployment</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Custom dashboard development</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Compliance reporting automation</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Tenable.io</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Vulnerability management and continuous monitoring
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Continuous vulnerability scanning</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Risk-based prioritization</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Compliance dashboard setup</span></li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Data & Analytics Platforms */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 pb-16 border-b border-slate-200">
            <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">Data & Analytics Platforms</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Snowflake Government</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Cloud data warehouse for secure government analytics
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Data warehouse architecture design</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>ETL pipeline development</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Data governance implementation</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Databricks</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Unified data analytics platform for large-scale data engineering and machine learning
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Lakehouse architecture setup</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>ML model development and deployment</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Real-time streaming analytics</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Tableau Government</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Visual analytics and business intelligence platform
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Dashboard and visualization design</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Self-service analytics enablement</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Enterprise deployment and governance</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Microsoft Power BI</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Business analytics and reporting for government agencies
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Report and dashboard development</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Power Query data transformation</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Embedded analytics integration</span></li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Process Automation & AI */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16 pb-16 border-b border-slate-200">
            <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">Process Automation & AI</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">UiPath Government Cloud</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Robotic process automation (RPA) for government workflows
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>RPA opportunity assessment</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Bot development and deployment</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Center of Excellence (CoE) setup</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Automation Anywhere</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Intelligent automation platform with AI capabilities
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Intelligent document processing</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Process discovery and mining</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Bot lifecycle management</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">OpenAI Azure Government</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Large language models (LLMs) for government use cases
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>LLM use case identification</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Prompt engineering and fine-tuning</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Responsible AI governance</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">DataRobot</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Automated machine learning (AutoML) platform
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Predictive model development</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Model monitoring and governance</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>MLOps pipeline automation</span></li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Enterprise Software & Integration */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">Enterprise Software & Integration</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">ServiceNow Government</h4>
                <p className="text-sm text-slate-600 mb-3">
                  IT service management (ITSM) and workflow automation
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>ITSM implementation and configuration</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Custom workflow development</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Integration with legacy systems</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Salesforce Government Cloud</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Constituent relationship management (CRM) platform
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>CRM implementation and customization</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Lightning component development</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Data migration and integration</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">MuleSoft Anypoint</h4>
                <p className="text-sm text-slate-600 mb-3">
                  API-led integration platform for government agencies
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>API strategy and design</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Integration architecture</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Microservices implementation</span></li>
                </ul>
              </motion.div>
              <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
                <h4 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">Workato</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Enterprise automation and integration platform (iPaaS)
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Low-code integration development</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Recipe library customization</span></li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span>Cross-platform workflow automation</span></li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help You Choose */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-5xl">
          <div className="mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 text-center">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              How We Help You Navigate Platform Selection
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our vendor-neutral consulting approach ensures you select and implement platforms based on mission requirements—not sales pressure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-4 sm:p-6 md:p-8 text-center transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
              <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)] mb-4">01</div>
              <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">Requirements Analysis</h3>
              <p className="text-slate-600">
                We assess your current state, mission objectives, compliance requirements, and technical constraints to define platform evaluation criteria.
              </p>
            </motion.div>
            <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-4 sm:p-6 md:p-8 text-center transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
              <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)] mb-4">02</div>
              <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">Vendor Evaluation</h3>
              <p className="text-slate-600">
                We evaluate FedRAMP/StateRAMP-authorized platforms against your criteria, providing objective scoring and recommendations without vendor bias.
              </p>
            </motion.div>
            <motion.div className="bg-white border-2 border-slate-200 rounded-lg p-4 sm:p-6 md:p-8 text-center transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl">
              <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)] mb-4">03</div>
              <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">Implementation & Optimization</h3>
              <p className="text-slate-600">
                Once you select a platform, our certified engineers implement, configure, and optimize it for your specific use cases and workflows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="bg-[oklch(0.22_0.06_250)] text-white rounded-2xl p-12 text-center">
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Need help selecting the right platforms for your agency?
            </h2>
            <p className="text-lg text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
              Schedule a free 60-minute assessment to discuss your requirements and explore FedRAMP/StateRAMP-authorized solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 gap-2">
                Schedule Free Assessment <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
