import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, Key, Shield, Users, Fingerprint, UserCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function IdentityAccessManagement() {
  // Primary service offerings (4 core capabilities)
  const primaryServices = [
    {
      title: 'Multi-Factor Authentication (MFA)',
      description: 'Implement PIV/CAC card authentication, hardware tokens, and biometric MFA to meet government identity assurance requirements (NIST 800-63).',
      benefits: ['PIV/CAC integration', 'Hardware token support', 'Biometric authentication', 'FIPS 140-2 compliant'],
      link: '/services/identity-access-management/mfa'
    },
    {
      title: 'Privileged Access Management (PAM)',
      description: 'Control and monitor privileged accounts with just-in-time access, session recording, and automated credential rotation.',
      benefits: ['Just-in-time access', 'Session recording', 'Credential vaulting', 'Automated rotation'],
      link: '/services/identity-access-management/pam'
    },
    {
      title: 'Identity Governance & Administration',
      description: 'Automate user lifecycle management, access reviews, and role-based access control with policy-driven governance.',
      benefits: ['Automated provisioning', 'Access certification', 'Role-based access', 'Policy enforcement'],
      link: '/services/identity-access-management/governance'
    },
    {
      title: 'Single Sign-On (SSO)',
      description: 'Federated identity management with SAML 2.0, OAuth 2.0, and OpenID Connect for seamless access across applications.',
      benefits: ['SAML 2.0 federation', 'OAuth 2.0/OIDC', 'Application integration', 'Reduced password fatigue'],
      link: '/services/identity-access-management/sso'
    }
  ];

  // Additional capabilities (compact format)
  const additionalCapabilities = [
    { name: 'Zero Trust Architecture', description: 'Implement continuous verification and least-privilege access across all resources' },
    { name: 'Directory Services Integration', description: 'Seamless integration with Active Directory, Azure AD, and LDAP environments' },
    { name: 'Compliance Reporting', description: 'Automated compliance reporting for NIST 800-53, FedRAMP, and CMMC requirements' },
    { name: 'Identity Analytics', description: 'AI-powered anomaly detection and risk-based authentication decisions' }
  ];

  const caseStudies = [
    {
      category: 'Federal Government',
      title: 'Federal Agency Implements Zero Trust IAM',
      description: 'Deployed enterprise-wide Zero Trust identity solution with PIV/CAC authentication for 25,000+ users. Achieved NIST 800-63 AAL3 compliance with 99.9% authentication uptime.',
      attribution: 'Led by Thalen Technologies IAM Practice',
      tags: ['Zero Trust', 'PIV/CAC', 'FedRAMP'],
      link: '/case-studies/federal-agency-automation'
    },
    {
      category: 'Defense',
      title: 'DoD Contractor PAM Implementation',
      description: 'Implemented privileged access management across classified and unclassified networks. Reduced credential exposure risk by 95% with automated rotation.',
      attribution: 'Led by Thalen Technologies Security Team',
      tags: ['PAM', 'CMMC', 'Defense'],
      link: '/case-studies/dod-manufacturing-uptime'
    },
    {
      category: 'Healthcare',
      title: 'VA Medical Center SSO Deployment',
      description: 'Deployed federated SSO across 12 healthcare applications. Reduced login time by 80% while maintaining HIPAA compliance.',
      attribution: 'Led by Thalen Technologies Healthcare Practice',
      tags: ['SSO', 'HIPAA', 'Healthcare'],
      link: '/case-studies/va-medical-integration'
    }
  ];

  const zeroTrustPrinciples = [
    {
      principle: 'Never Trust, Always Verify',
      description: 'Continuous authentication and authorization for every access request, regardless of network location.',
      implementation: ['Continuous verification', 'Risk-based authentication', 'Device posture checking', 'Behavioral analytics']
    },
    {
      principle: 'Least Privilege Access',
      description: 'Grant minimum necessary permissions with just-in-time elevation and time-bound access grants.',
      implementation: ['JIT privilege elevation', 'Time-bound access', 'Attribute-based access', 'Dynamic policies']
    },
    {
      principle: 'Assume Breach',
      description: 'Design security controls assuming attackers are already inside the network perimeter.',
      implementation: ['Micro-segmentation', 'Lateral movement prevention', 'Anomaly detection', 'Session monitoring']
    },
    {
      principle: 'Verify Explicitly',
      description: 'Use all available data points (identity, device, location, behavior) to make access decisions.',
      implementation: ['Multi-factor verification', 'Device compliance', 'Location awareness', 'Risk scoring']
    }
  ];

  const iamPlatforms = [
    'Okta Government',
    'Microsoft Entra ID (Azure AD)',
    'Ping Identity Gov',
    'ForgeRock',
    'CyberArk Government',
    'BeyondTrust',
    'SailPoint',
    'Saviynt'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cybersecurity/iam-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/consulting-services' },
                { label: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
                { label: 'Identity & Access Management' }
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
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Zero Trust • PIV/CAC Ready</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Identity & Access Management (IAM)
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Implement Zero Trust identity solutions with PIV/CAC authentication, privileged access management, and automated governance. Thalen Technologies delivers government-grade IAM that meets NIST 800-63 identity assurance requirements (federal, state, local) while improving user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule IAM Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/resources">
                  Download Zero Trust Guide
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Primary IAM Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Core Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Comprehensive IAM Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              End-to-end identity and access management from authentication to governance, designed for government security requirements across all levels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link} className="block group h-full">
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3 group-hover:text-[oklch(0.65_0.18_55)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                            <span className="text-sm text-slate-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-[oklch(0.65_0.18_55)] text-sm font-semibold group-hover:gap-3 gap-2 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Capabilities */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Extended Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Additional IAM Capabilities</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">{capability.name}</h4>
                  <p className="text-sm text-slate-600">{capability.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Trust Principles */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Security Framework</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Zero Trust Identity Principles</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Modern security framework that eliminates implicit trust and continuously verifies every access request.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {zeroTrustPrinciples.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-[oklch(0.22_0.06_250)] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)]">{item.principle}</h3>
                    </div>
                    <p className="text-slate-600 mb-6">{item.description}</p>
                    <div className="border-t border-slate-200 pt-4">
                      <h4 className="font-semibold mb-3 text-sm text-[oklch(0.20_0.05_250)]">Implementation:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.implementation.map((impl, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="h-2 w-2 bg-[oklch(0.65_0.18_55)] rounded-full mr-2"></div>
                            <span className="text-slate-700">{impl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IAM Platforms */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Enterprise IAM Platforms</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Expert implementation and integration across leading identity and access management platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {iamPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)]">
                  <CardContent className="p-4 text-center">
                    <UserCheck className="h-8 w-8 text-[oklch(0.22_0.06_250)] mx-auto mb-2" />
                    <div className="font-semibold text-sm text-[oklch(0.20_0.05_250)]">{platform}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Proven Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">IAM Success Stories</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real-world IAM implementations delivering measurable security improvements for government agencies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={study.link} className="block group h-full">
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-semibold text-[oklch(0.65_0.18_55)] bg-[oklch(0.65_0.18_55)]/10 px-3 py-1 rounded-full">
                          {study.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3 group-hover:text-[oklch(0.65_0.18_55)] transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                        {study.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-[oklch(0.65_0.18_55)] text-sm font-semibold group-hover:gap-3 gap-2 transition-all">
                        Read Case Study <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Measurable Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">IAM Implementation Results</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Proven outcomes from our identity and access management implementations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: '80%', label: 'Reduction in Help Desk Calls' },
              { metric: '< 30s', label: 'Average Login Time' },
              { metric: '99.9%', label: 'Authentication Uptime' },
              { metric: '100%', label: 'NIST 800-63 Compliance' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[oklch(0.22_0.06_250)] mb-2">{item.metric}</div>
                <div className="text-sm text-slate-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cybersecurity/iam-hero.jpg')" }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/92 to-[#12344D]/88"></div>
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Implement Zero Trust Identity</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule an IAM assessment and discover how Thalen Technologies can deliver secure, compliant identity and access management for your government environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule IAM Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/case-studies">
                  View IAM Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
