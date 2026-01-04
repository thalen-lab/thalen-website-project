
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ImageWithLoader } from '@/components/ImageWithLoader';

export default function ConsultingServices() {
  const featuredServices = [
    {
      name: 'FedRAMP & StateRAMP Implementation',
      description: 'Expert implementation services for FedRAMP and StateRAMP-authorized platforms across federal, state, and local agencies at Moderate and High impact levels with comprehensive ATO support.',
      image: '/fedramp-capitol.jpg',
      href: '/services/fedramp',
      features: [
        'Moderate & High impact level expertise',
        'Comprehensive ATO documentation',
        'Continuous monitoring setup',
        'POA&M management'
      ]
    },
    {
      name: 'ISO 27001 Implementation Services',
      description: 'Proven methodologies for implementing ISO 27001:2022-compliant information security management systems for government and enterprise clients seeking certification.',
      image: '/iso-logo.jpg',
      href: '/services/iso-27001',
      features: [
        'Gap analysis & risk assessment',
        'ISMS documentation development',
        'Internal audit preparation',
        'Certification support'
      ]
    },
    {
      name: 'CMMC Consulting Services',
      description: 'Expert consulting to help defense contractors achieve CMMC Level 2 and Level 3 compliance through comprehensive gap analysis, controls implementation, and audit preparation.',
      image: '/cmmc-consulting.jpg',
      href: '/cmmc',
      features: [
        'CMMC Level 2 & 3 readiness',
        'CUI protection strategies',
        'SSP & POA&M development',
        'C3PAO audit preparation'
      ]
    }
  ];

  const additionalCredentials = [
    { 
      name: 'NIST Framework', 
      shortDesc: 'Cybersecurity Framework v2.0 Expertise',
      fullDesc: 'Deep expertise in implementing NIST Cybersecurity Framework v2.0 across all five core functions: Identify, Protect, Detect, Respond, and Recover.',
    },
    { 
      name: 'GSA Schedule', 
      shortDesc: 'Application in Progress',
      fullDesc: 'Pursuing GSA Schedule contract to streamline procurement for federal agencies seeking our security and compliance services.',
    },
    { 
      name: 'ATO Support', 
      shortDesc: 'FISMA Authority to Operate Services',
      fullDesc: 'End-to-end support for achieving and maintaining FISMA Authority to Operate, including security assessments, documentation, and continuous monitoring.',
    },
    { 
      name: 'CJIS Compliance', 
      shortDesc: 'Implementation Services',
      fullDesc: 'Specialized services for organizations handling Criminal Justice Information, ensuring full compliance with FBI CJIS Security Policy requirements.',
    },
    { 
      name: 'Cleared Personnel', 
      shortDesc: 'TS/SCI Available Upon Award',
      fullDesc: 'Access to cleared professionals with Top Secret/SCI clearances available upon contract award for sensitive government projects.',
    }
  ];

  const whyChooseUs = [
    {
      title: 'Government-Focused Expertise',
      description: 'Our team brings decades of combined experience working exclusively with federal, state, and local government agencies.'
    },
    {
      title: 'Vendor-Neutral Approach',
      description: 'We recommend the best solutions for your mission, not the ones that benefit our partnerships.'
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully supported 50+ ATO authorizations across civilian and defense agencies.'
    },
    {
      title: 'Cleared Team Members',
      description: 'Access to personnel with active security clearances for sensitive engagements.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithLoader
            src="/compliance-first-approach.jpg"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85" />
        </div>
        
        <div className="container relative z-10">
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Consulting Services' }
              ]} 
              variant="light" 
            />
          </div>
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Security & Compliance Consulting</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Enterprise & Government<br />
              <span className="text-[oklch(0.75_0.15_55)]">Security & Compliance</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Built for the most demanding security and compliance requirements across government agencies and enterprise organizations. Our expert consultants guide you through every step of the certification journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:scale-105 active:scale-95 transition-all">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-6">
              Compliance & Certification Services
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Comprehensive consulting services to help your organization achieve and maintain critical security certifications and compliance frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={service.href} className="block h-full">
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithLoader
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{service.name}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center text-[oklch(0.65_0.18_55)] font-semibold group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Credentials & Authorizations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">
              Additional Expertise
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Beyond our core certification services, we bring deep expertise across the full spectrum of government security and compliance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalCredentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[oklch(0.20_0.05_250)] mb-1">{cred.name}</h3>
                    <p className="text-sm text-[oklch(0.65_0.18_55)] font-semibold mb-2">{cred.shortDesc}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cred.fullDesc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Why NexDyne</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">
                Your Trusted Compliance Partner
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We understand the unique challenges government agencies and contractors face in achieving and maintaining compliance. Our team brings the expertise, clearances, and proven methodologies to ensure your success.
              </p>
              
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <div>
                      <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithLoader
                  src="/compliance-first-approach.jpg"
                  alt="Security compliance consulting team"
                  className="w-full h-auto"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border-2 border-slate-200"
              >
                <div className="text-4xl font-bold text-[oklch(0.65_0.18_55)] mb-1">50+</div>
                <div className="text-sm text-slate-600">ATOs Supported</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Achieve Compliance?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Schedule a consultation with our security and compliance experts to discuss your certification requirements and develop a roadmap to success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:scale-105 active:scale-95 transition-all">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
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
