import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function APISecurity() {
  const securityCapabilities = [
    {
      title: 'API Authentication & Authorization',
      description: 'We help agencies implement OAuth 2.0, SAML, API keys, mutual TLS, and certificate-based authentication with role-based access controls (RBAC) and attribute-based access controls (ABAC).',
      benefits: ['OAuth 2.0 / OpenID Connect', 'SAML 2.0 federation', 'Mutual TLS (mTLS)', 'API key management']
    },
    {
      title: 'API Gateway & Management',
      description: 'We design and implement API gateways that provide centralized authentication, rate limiting, request validation, and traffic management for government APIs.',
      benefits: ['Rate limiting & throttling', 'Request/response validation', 'API versioning', 'Traffic management']
    },
    {
      title: 'API Threat Protection',
      description: 'We implement web application firewalls (WAF), DDoS protection, SQL injection prevention, and OWASP API Security Top 10 mitigations for all government APIs.',
      benefits: ['WAF integration', 'DDoS mitigation', 'Injection attack prevention', 'Bot detection']
    },
    {
      title: 'API Monitoring & Analytics',
      description: 'We build comprehensive monitoring dashboards that track API performance, security events, error rates, and usage patterns with real-time alerting.',
      benefits: ['Real-time monitoring', 'Security event alerting', 'Performance analytics', 'Usage tracking']
    }
  ];

  const authenticationMethods = [
    {
      category: 'OAuth 2.0 & OpenID Connect',
      methods: [
        { name: 'Authorization Code Flow', description: 'Secure authentication for web applications with user consent' },
        { name: 'Client Credentials Flow', description: 'Machine-to-machine authentication for backend services' },
        { name: 'JWT Bearer Tokens', description: 'Stateless authentication using JSON Web Tokens' }
      ]
    },
    {
      category: 'SAML 2.0 Federation',
      methods: [
        { name: 'Identity Provider (IdP) Integration', description: 'Connect with agency Active Directory or identity providers' },
        { name: 'Single Sign-On (SSO)', description: 'Unified authentication across multiple applications' },
        { name: 'Attribute-Based Access Control', description: 'Fine-grained authorization using SAML attributes' }
      ]
    },
    {
      category: 'API Key Management',
      methods: [
        { name: 'API Key Generation & Rotation', description: 'Automated key generation with scheduled rotation policies' },
        { name: 'Key Scoping & Permissions', description: 'Limit API keys to specific endpoints and operations' },
        { name: 'Key Revocation', description: 'Immediate key revocation for compromised credentials' }
      ]
    },
    {
      category: 'Certificate-Based Authentication',
      methods: [
        { name: 'Mutual TLS (mTLS)', description: 'Two-way certificate authentication for high-security APIs' },
        { name: 'PKI Integration', description: 'Integration with agency public key infrastructure' },
        { name: 'Certificate Validation', description: 'Real-time certificate revocation checking (OCSP/CRL)' }
      ]
    }
  ];

  const threatProtection = [
    { name: 'OWASP API Security Top 10', description: 'Protection against broken object level authorization, broken authentication, excessive data exposure, and other API vulnerabilities' },
    { name: 'SQL Injection Prevention', description: 'Input validation and parameterized queries to prevent SQL injection attacks' },
    { name: 'Cross-Site Scripting (XSS) Protection', description: 'Output encoding and content security policies to prevent XSS attacks' },
    { name: 'DDoS & Rate Limiting', description: 'Distributed denial-of-service protection and intelligent rate limiting to prevent abuse' }
  ];

  const monitoringFeatures = [
    { name: 'Real-Time Security Monitoring', description: 'Continuous monitoring of API traffic for suspicious patterns, anomalies, and security events' },
    { name: 'Performance Metrics', description: 'Track API response times, throughput, error rates, and availability with SLA monitoring' },
    { name: 'Audit Logging', description: 'Comprehensive logging of all API calls, authentication events, and data access for compliance' },
    { name: 'Alerting & Incident Response', description: 'Automated alerting for security events, performance degradation, and system failures' }
  ];

  const complianceFeatures = [
    { name: 'FedRAMP & StateRAMP Compliance', description: 'All API security controls follow FedRAMP and StateRAMP requirements including AC, AU, IA, and SC control families' },
    { name: 'FISMA Compliance', description: 'API security implementations meet FISMA Low, Moderate, and High security requirements' },
    { name: 'NIST 800-53 Controls', description: 'Comprehensive implementation of NIST 800-53 security controls for API protection' },
    { name: 'ATO Documentation Support', description: 'Security controls documentation, API security assessments, and data flow diagrams for ATO packages' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/services/system-integration/hero-api-security.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/85 to-[#12344D]/80"></div>
        <div className="container relative">
          <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Services', href: '/consulting-services' },
                  { label: 'System Integration', href: '/services/system-integration' },
                  { label: 'API Security & Management' }
                ]} 
                variant="light" 
              />
            </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <Link href="/services/system-integration">
              <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
                ← Back to Systems Integration
              </Button>
            </Link>
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              API Security
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              API Security & Management
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We help agencies design and implement secure API gateways with authentication, rate limiting, encryption, and comprehensive monitoring for government workloads—meeting FedRAMP, StateRAMP, and FISMA requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Start API Security Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/capability-generator">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  Generate Capability Statement
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Capabilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Capabilities</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">API Security Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive API security services for government workloads
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {securityCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="pt-8">
                    <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{capability.title}</h3>
                    <p className="text-slate-600 mb-4">{capability.description}</p>
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Methods */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Authentication</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Authentication Methods</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We implement industry-standard authentication protocols for government APIs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {authenticationMethods.map((category, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{category.category}</h3>
                  <div className="space-y-4">
                    {category.methods.map((method, idx) => (
                      <div key={idx} className="border-l-2 border-slate-200 pl-4">
                        <div className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">{method.name}</div>
                        <div className="text-sm text-slate-600">{method.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Protection</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">API Threat Protection</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive protection against API vulnerabilities and attacks
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {threatProtection.map((threat, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <div>
                      <div className="font-semibold mb-2 text-[oklch(0.20_0.05_250)]">{threat.name}</div>
                      <div className="text-sm text-slate-600">{threat.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Features */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Monitoring</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Monitoring & Analytics</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-time visibility into API performance and security
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {monitoringFeatures.map((feature, index) => (
              <div key={index} className="flex gap-3 p-6 bg-white rounded-lg border-2 border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                <div>
                  <div className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">{feature.name}</div>
                  <div className="text-sm text-slate-600">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Security First</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Compliance & Security</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              All API security implementations meet government compliance requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <div>
                      <div className="font-semibold mb-2 text-[oklch(0.20_0.05_250)]">{feature.name}</div>
                      <div className="text-sm text-slate-600">{feature.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your APIs?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our API security specialists can help you design and implement secure, compliant API gateways for your government workloads.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Schedule API Security Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/system-integration">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  View All Integration Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
