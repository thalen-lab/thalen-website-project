
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumb from '@/components/Breadcrumb';

export default function VAHealthcare() {
  return (
    <div className="min-h-screen flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-cover bg-center" style={{ backgroundImage: "url('/images/case-studies/va-healthcare-hero.jpg')" }}>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-100"></div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Case Study
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white mb-8 leading-tight">
              VA Medical Center Integrates 12 Legacy Systems
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              How a VA medical center integrated twelve disparate healthcare systems using FedRAMP-authorized iPaaS platform, reducing administrative burden by 60% for 8,500 staff members
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Opportunity</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-[oklch(0.20_0.05_250)] leading-tight">
                A VA medical center recognized that fragmented systems compromised care coordination
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Veterans Affairs medical centers serve populations with complex healthcare needs that require coordination across multiple specialties and services. A large VA medical center serving more than five hundred thousand veterans confronted a critical challenge: twelve separate information systems operated independently, creating data silos that prevented effective care coordination. The electronic health records system, pharmacy management platform, laboratory information system, radiology system, and eight other specialized applications each maintained their own databases with limited ability to share information. Clinicians and administrative staff spent substantial time manually transferring data between systems, searching for information across multiple applications, and reconciling inconsistent records.
              </p>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                This fragmentation carried real consequences for veterans and staff alike. A physician prescribing medication might not have immediate visibility into recent laboratory results stored in a separate system, creating potential safety risks. Care coordinators managing complex cases spent hours each week gathering information from multiple systems to understand the complete picture of a veteran's care. Administrative staff processed the same information multiple times as it moved through different systems, consuming time that could have been devoted to direct patient support. The medical center estimated that system fragmentation cost more than eight thousand hours of staff time weekly while creating quality and safety risks that no healthcare organization could accept.
              </p>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                The medical center's leadership understood that replacing all twelve systems was neither feasible nor desirable, as each provided specialized functionality that served important needs. Instead, they recognized that modern integration platforms could connect these disparate systems, enabling seamless data flow while preserving the specialized capabilities that made each system valuable. Any solution needed FedRAMP authorization to operate in the VA's cloud environment, robust security controls to protect sensitive veteran health information, and integration capabilities sophisticated enough to handle the complex data transformations required when connecting healthcare systems built on different standards and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Solution</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-[oklch(0.20_0.05_250)] leading-tight">
                A FedRAMP-authorized integration platform unified systems while preserving specialized capabilities
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The medical center needed an integration platform that could connect diverse healthcare systems while meeting the strict security and compliance requirements that govern VA operations. Working with NexDyne, the medical center deployed a FedRAMP-authorized integration platform as a service that established secure, real-time connections between all twelve legacy systems. The platform translated data between the different formats and standards that each system used, enabling seamless information flow while preserving the specialized functionality that made each system valuable to its users.
              </p>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The technical architecture implemented a hub-and-spoke model where the integration platform served as a central data exchange connecting all twelve systems. Rather than requiring point-to-point connections between every system pair, which would have created sixty-six separate integration points, the platform enabled each system to connect once to the central hub. The platform handled complex data transformations, converting laboratory results from one format to another, mapping medication codes between different coding systems, and reconciling patient identifiers across systems that used different identification schemes. Real-time event processing ensured that updates in one system immediately propagated to others, eliminating the delays that had previously characterized manual data transfer.
              </p>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                The implementation prioritized security and compliance alongside technical functionality. The platform implemented comprehensive encryption for data in transit and at rest, role-based access controls that ensured users could only access information appropriate to their function, and detailed audit logging that tracked every data access and transformation. These controls met both HIPAA requirements for protecting health information and the additional security standards that govern VA systems. The FedRAMP authorization provided assurance that the platform met federal security requirements, enabling the medical center to leverage cloud-based integration capabilities while maintaining the security posture required for handling veteran health information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">The Impact</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.18_55)] mb-3">60%</div>
                <p className="text-slate-600 text-sm">reduction in admin burden</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.18_55)] mb-3">12</div>
                <p className="text-slate-600 text-sm">systems integrated</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.18_55)] mb-3">8,500</div>
                <p className="text-slate-600 text-sm">staff members supported</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.18_55)] mb-3">500K+</div>
                <p className="text-slate-600 text-sm">veterans served</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  The integration platform transformed operations at the VA medical center. Staff members report that administrative burden decreased by sixty percent as automated data flow eliminated manual transfer tasks that previously consumed substantial time. Clinicians now access complete patient information through their primary system without needing to log into multiple applications, improving both efficiency and the quality of clinical decision-making. Care coordinators manage complex cases more effectively as they can see the complete picture of a veteran's care across all specialties and services. The medical center estimates that the integration platform saves more than eight thousand staff hours weekly, time that can now be devoted to direct patient care and support.
                </p>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  The quality and safety improvements proved equally significant. Medication errors decreased by forty-two percent as physicians gained immediate visibility into recent laboratory results and current medications when prescribing new treatments. Care coordination improved measurably, with veterans reporting better communication between different providers and services. The medical center's patient satisfaction scores increased substantially, driven largely by improvements in care coordination and reduced administrative friction. The platform's audit capabilities provide complete visibility into how information flows through the system, supporting both quality improvement initiatives and compliance requirements.
                </p>
                
                <p className="text-slate-600 text-lg leading-relaxed">
                  Perhaps most importantly, the integration platform established a foundation for continued innovation in veteran care delivery. The medical center has used the platform to implement new services that would have been impossible with fragmented systems, including a telehealth program that provides integrated access to patient information for remote consultations. Other VA medical centers are adopting similar integration approaches, and the success has influenced VA-wide strategies for modernizing healthcare information technology. The transformation demonstrated that legacy systems can be unified without wholesale replacement, delivering substantial benefits through integration while preserving the specialized capabilities that make individual systems valuable. The approach offers a pragmatic path forward for healthcare organizations that must balance the need for modern integration with the reality of substantial existing technology investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-6">
              Transform your healthcare systems with seamless integration
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Discover how FedRAMP-authorized integration platforms can help your organization unify legacy systems, reduce administrative burden, and improve care coordination while maintaining security and compliance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 hover:text-white">
                  View More Case Studies
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
