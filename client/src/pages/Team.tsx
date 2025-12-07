import { motion } from "framer-motion";
import { Award, Shield, Code, Database, Cloud, Lock, Users, Briefcase } from "lucide-react";
import { APP_TITLE } from "@/const";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-navy-gradient text-primary-foreground py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              OUR TEAM
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our Automation Experts
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Elite team of automation strategists, security architects, and technology leaders with active clearances and deep expertise in government and enterprise transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Combined Years Experience</div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-muted-foreground">Active Certifications</div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Security Cleared</div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Successful Deployments</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leadership & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                className="bg-card rounded-lg border-2 border-border overflow-hidden hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold mb-4">{member.title}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <span className="font-semibold">Clearance:</span> {member.clearance}
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Briefcase className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <span className="font-semibold">Experience:</span> {member.experience}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold">Specializations</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((spec) => (
                        <span
                          key={spec}
                          className="text-xs bg-muted text-accent px-2 py-1 rounded"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold">Certifications</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="text-xs bg-secondary text-foreground px-2 py-1 rounded"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient diagonal-top text-primary-foreground">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Schedule a strategic assessment with our automation experts to discuss your transformation objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-orange-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Schedule Assessment
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors"
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
