import { motion } from 'framer-motion';
import { Shield, ArrowRight, CheckCircle2, Building2, FileCheck, Award, Users, Lock, ChevronRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ImageWithLoader } from '@/components/ImageWithLoader';

export default function ConsultingServices() {
  // Featured certifications - main consulting services
  const featuredServices = [
    {
      name: 'FedRAMP & StateRAMP Implementation',
      description: 'Expert implementation services for FedRAMP and StateRAMP-authorized platforms across federal, state, and local agencies at Moderate and High impact levels with comprehensive ATO support.',
      icon: Building2,
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
      icon: FileCheck,
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
      icon: Shield,
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

  // Additional credentials
  const additionalCredentials = [
    { 
      name: 'NIST Framework', 
      shortDesc: 'Cybersecurity Framework v2.0 Expertise',
      fullDesc: 'Deep expertise in implementing NIST Cybersecurity Framework v2.0 across all five core functions: Identify, Protect, Detect, Respond, and Recover.',
      icon: Shield
    },
    { 
      name: 'GSA Schedule', 
      shortDesc: 'Application in Progress',
      fullDesc: 'Pursuing GSA Schedule contract to streamline procurement for federal agencies seeking our security and compliance services.',
      icon: Award
    },
    { 
      name: 'ATO Support', 
      shortDesc: 'FISMA Authority to Operate Services',
      fullDesc: 'End-to-end support for achieving and maintaining FISMA Authority to Operate, including security assessments, documentation, and continuous monitoring.',
      icon: FileCheck
    },
    { 
      name: 'CJIS Compliance', 
      shortDesc: 'Implementation Services',
      fullDesc: 'Specialized services for organizations handling Criminal Justice Information, ensuring full compliance with FBI CJIS Security Policy requirements.',
      icon: Lock
    },
    { 
      name: 'Cleared Personnel', 
      shortDesc: 'TS/SCI Available Upon Award',
      fullDesc: 'Access to cleared professionals with Top Secret/SCI clearances available upon contract award for sensitive government projects.',
      icon: Users
    }
  ];

  // Why choose us points
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
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#0A2540] via-[#1e3a4c] to-[#0A2540] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
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
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Security & Compliance Consulting</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Enterprise & Government<br />
              <span className="text-accent">Security & Compliance</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto">
              Built for the most demanding security and compliance requirements across government agencies and enterprise organizations. Our expert consultants guide you through every step of the certification journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link href="/resources">
                  View Resources
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Compliance & Certification Services
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Comprehensive consulting services to help your organization achieve and maintain critical security certifications and compliance frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={service.href} className="block h-full">
                    <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white group-hover:-translate-y-2">
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithLoader
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <CardContent className="p-6">
                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Features list */}
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        {/* Learn more link */}
                        <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                          Learn More
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Credentials Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-100 to-white">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Credentials & Authorizations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Additional Expertise
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Beyond our core certification services, we bring deep expertise across the full spectrum of government security and compliance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalCredentials.map((cred, index) => {
              const IconComponent = cred.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-slate-200 hover:border-accent/30 hover:shadow-lg transition-all duration-300 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-1">{cred.name}</h3>
                          <p className="text-sm text-accent font-medium mb-2">{cred.shortDesc}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{cred.fullDesc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Why NexDyne</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
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
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image */}
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              </div>
              
              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-slate-100"
              >
                <div className="text-4xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-slate-600">ATOs Supported</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0A2540] via-[#1e3a4c] to-[#0A2540]">
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
            <p className="text-xl text-slate-200 leading-relaxed mb-8">
              Schedule a consultation with our security and compliance experts to discuss your certification requirements and develop a roadmap to success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link href="/case-studies">
                  View Case Studies
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
