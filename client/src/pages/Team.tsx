
import { motion } from "framer-motion";
import { APP_TITLE } from "@/const";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    title: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    specializations: ["AI/ML Strategy", "Process Automation", "Enterprise Architecture"],
    certifications: ["AWS Solutions Architect", "CISSP", "PMP"],
    clearance: "TS/SCI",
    experience: "18+ years",
    bio: "Led automation architecture for Department of Defense systems from 2015-2023. Implemented machine learning frameworks for three federal agencies. Background includes systems engineering at Lockheed Martin and graduate research in distributed AI at MIT."
  },
  {
    name: "Michael Rodriguez",
    title: "Director of Federal Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    specializations: ["FedRAMP Compliance", "Zero Trust Architecture", "Cloud Migration"],
    certifications: ["CMMC Level 3", "Azure Expert", "CISM"],
    clearance: "TS/SCI",
    experience: "15+ years",
    bio: "Managed FedRAMP authorization processes for six government cloud migrations. Previously served as security architect at Booz Allen Hamilton. Holds CMMC Level 3 certification and has supported ATO processes for DoD and civilian agencies."
  },
  {
    name: "Jennifer Park",
    title: "Lead Automation Strategist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    specializations: ["RPA Implementation", "Workflow Optimization", "Change Management"],
    certifications: ["UiPath Advanced", "Blue Prism", "Six Sigma Black Belt"],
    clearance: "Secret",
    experience: "12+ years",
    bio: "Implemented RPA solutions for healthcare claims processing and manufacturing quality control systems. Certified in UiPath and Blue Prism platforms. Background includes process engineering at Johnson & Johnson and operational consulting."
  },
  {
    name: "David Thompson",
    title: "Principal Security Architect",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    specializations: ["Cybersecurity", "SIEM Integration", "Threat Detection"],
    certifications: ["CISSP", "CEH", "GIAC GPEN"],
    clearance: "TS/SCI",
    experience: "20+ years",
    bio: "Served as cybersecurity analyst at NSA from 2010-2018. Designed security architectures for automated intelligence systems. Holds CISSP and CEH certifications. Currently leads security assessments for government automation projects."
  },
  {
    name: "Dr. Aisha Williams",
    title: "Data Analytics Director",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    specializations: ["Predictive Analytics", "Data Governance", "ML Operations"],
    certifications: ["Google Cloud Professional", "Databricks Certified", "PhD Data Science"],
    clearance: "Secret",
    experience: "14+ years",
    bio: "PhD in Data Science from Stanford University. Built predictive analytics platforms for hospital systems and public health agencies. Published research on machine learning applications in healthcare operations. Previously worked at Kaiser Permanente's analytics division."
  },
  {
    name: "James Martinez",
    title: "Cloud Infrastructure Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    specializations: ["Cloud Modernization", "Infrastructure as Code", "DevSecOps"],
    certifications: ["AWS DevOps Professional", "Kubernetes CKA", "Terraform Associate"],
    clearance: "Secret",
    experience: "16+ years",
    bio: "Managed cloud infrastructure migrations for defense contractors requiring Impact Level 5 compliance. AWS Certified DevOps Professional with experience in Kubernetes orchestration. Previously led infrastructure teams at Northrop Grumman and SAIC."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Team() {
  useEffect(() => {
    document.title = `Our Team - ${APP_TITLE}`;
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative text-white py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?fit=crop&w=1920&q=80')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="container relative z-10">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'About Us', href: '/about' },
                { label: 'Our Team' }
              ]} 
              variant="light" 
            />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Our Team
            </p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our Automation Experts
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Elite team of automation strategists, security architects, and technology leaders with active clearances and deep expertise in government and enterprise transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.5 }}>
              <div className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-2">150+</div>
              <div className="text-slate-600">Combined Years Experience</div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-2">40+</div>
              <div className="text-slate-600">Active Certifications</div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-2">100%</div>
              <div className="text-slate-600">Security Cleared</div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-2">200+</div>
              <div className="text-slate-600">Successful Deployments</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Leadership & Expertise</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Our Core Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our team combines deep technical expertise with real-world operational experience in the most demanding government and enterprise environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-1">{member.name}</h3>
                  <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4">{member.title}</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{member.bio}</p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.20_0.05_250)] mb-3">Key Details</p>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span className="ml-3"><span className="font-semibold">Clearance:</span> {member.clearance}</span></li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span><span className="ml-3"><span className="font-semibold">Experience:</span> {member.experience}</span></li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.20_0.05_250)] mb-3">Specializations</p>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {member.specializations.map((spec) => (
                          <li key={spec} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                            <span className="ml-3">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.20_0.05_250)] mb-3">Certifications</p>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {member.certifications.map((cert) => (
                          <li key={cert} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                            <span className="ml-3">{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Schedule a strategic assessment with our automation experts to discuss your transformation objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[oklch(0.22_0.06_250)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Schedule Assessment
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[oklch(0.22_0.06_250)] transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
