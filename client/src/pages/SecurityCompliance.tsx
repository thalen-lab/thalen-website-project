import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function SecurityCompliance() {
  const certifications = [
    {
      logo: '/certifications/fedramp-logo.png',
      title: 'FedRAMP Authorized',
      description: 'Our solutions meet the rigorous security requirements of the Federal Risk and Authorization Management Program.'
    },
    {
      logo: '/certifications/cmmc-logo.jpeg',
      title: 'CMMC Compliant',
      description: 'Certified under the Cybersecurity Maturity Model Certification framework for defense contractor requirements.'
    },
    {
      logo: '/certifications/soc2-logo.png',
      title: 'SOC 2 Type II',
      description: 'Independently audited controls for security, availability, processing integrity, confidentiality, and privacy.'
    },
    {
      logo: '/certifications/iso27001-logo.png',
      title: 'ISO 27001',
      description: 'Certified information security management system meeting international standards.'
    },
    {
      logo: '/certifications/stateramp-logo.png',
      title: 'StateRAMP Ready',
      description: 'Authorized for state and local government cloud deployments with verified security controls.'
    },
    {
      logo: '/certifications/hipaa-logo.png',
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

      {/* Editorial Introduction */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                In an era where cyber threats evolve by the hour and regulatory requirements grow increasingly complex, security cannot be an afterthought—it must be woven into the very fabric of every solution we deliver. At Thalen Technologies, Inc., we have built our practice on the principle that trust is earned through rigorous adherence to the most demanding security standards in the industry.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our comprehensive compliance portfolio represents more than a collection of certifications; it reflects our unwavering commitment to protecting the sensitive data and critical operations of the organizations we serve. From federal agencies safeguarding national security to healthcare providers protecting patient privacy, our clients depend on us to meet and exceed the most stringent security requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Certifications & Authorizations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive compliance portfolio ensures we meet the strictest security requirements across government and regulated industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Logo Container */}
                <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-6">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.title} certification logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-bold mb-3 text-[#0A2540]">{cert.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
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
