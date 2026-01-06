import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, Lock, CheckCircle, FileCheck, Server, Eye } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function SecurityCompliance() {
  const certifications = [
    {
      icon: Shield,
      title: 'FedRAMP Authorized',
      description: 'Our solutions meet the rigorous security requirements of the Federal Risk and Authorization Management Program.'
    },
    {
      icon: Lock,
      title: 'CMMC Compliant',
      description: 'Certified under the Cybersecurity Maturity Model Certification framework for defense contractor requirements.'
    },
    {
      icon: FileCheck,
      title: 'SOC 2 Type II',
      description: 'Independently audited controls for security, availability, processing integrity, confidentiality, and privacy.'
    },
    {
      icon: CheckCircle,
      title: 'ISO 27001',
      description: 'Certified information security management system meeting international standards.'
    },
    {
      icon: Server,
      title: 'StateRAMP Ready',
      description: 'Authorized for state and local government cloud deployments with verified security controls.'
    },
    {
      icon: Eye,
      title: 'HIPAA Compliant',
      description: 'Meeting healthcare data protection requirements for protected health information (PHI).'
    }
  ];

  const securityPrinciples = [
    {
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify. Our security model assumes no implicit trust and continuously validates every access request.'
    },
    {
      title: 'Defense in Depth',
      description: 'Multiple layers of security controls protect your data at every level—network, application, and data.'
    },
    {
      title: 'Continuous Monitoring',
      description: '24/7 security operations center monitoring for threats, anomalies, and compliance violations.'
    },
    {
      title: 'Incident Response',
      description: 'Rapid response protocols and tested playbooks ensure minimal impact from security events.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-20 text-white">
        <div className="absolute inset-0 bg-[url('/img/patterns/hero-pattern.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="relative container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb 
              items={[
                { label: 'About', href: '/about' },
                { label: 'Security & Compliance' }
              ]} 
              variant="light" 
              className="mb-6 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-2xl xs:text-3xl sm:text-xl xs:text-2xl sm:text-2xl xs:text-3xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 text-center leading-tight text-white">
                Security & Compliance
              </h1>
              
              <p className="text-base md:text-lg text-white/90 text-center max-w-3xl mx-auto">
                Government-grade security is our foundation, not an afterthought. We maintain the highest levels of security certifications and compliance frameworks to protect your mission-critical systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Certifications & Authorizations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive compliance portfolio ensures we meet the strictest security requirements across government and regulated industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-3 sm:p-4 md:p-6 md:p-8">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0A2540] to-[#12344D] flex items-center justify-center mb-4">
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                    <p className="text-gray-600">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Principles */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Security Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Security is embedded in everything we do, from solution design to ongoing operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {securityPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-[#0A2540] text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Request Our Security Documentation
            </h2>
            <p className="text-white/80 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Need detailed security documentation for your procurement process? Contact us to request our security packages, compliance attestations, and authorization documentation.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                Request Documentation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
