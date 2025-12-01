import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, Shield, Lock, Zap, Eye, FileCheck, AlertTriangle, Network, Key } from 'lucide-react';

export default function APISecurity() {
  const securityCapabilities = [
    {
      icon: Lock,
      title: 'API Authentication & Authorization',
      description: 'We help agencies implement OAuth 2.0, SAML, API keys, mutual TLS, and certificate-based authentication with role-based access controls (RBAC) and attribute-based access controls (ABAC).',
      benefits: ['OAuth 2.0 / OpenID Connect', 'SAML 2.0 federation', 'Mutual TLS (mTLS)', 'API key management']
    },
    {
      icon: Shield,
      title: 'API Gateway & Management',
      description: 'We design and implement API gateways that provide centralized authentication, rate limiting, request validation, and traffic management for government APIs.',
      benefits: ['Rate limiting & throttling', 'Request/response validation', 'API versioning', 'Traffic management']
    },
    {
      icon: AlertTriangle,
      title: 'API Threat Protection',
      description: 'We implement web application firewalls (WAF), DDoS protection, SQL injection prevention, and OWASP API Security Top 10 mitigations for all government APIs.',
      benefits: ['WAF integration', 'DDoS mitigation', 'Injection attack prevention', 'Bot detection']
    },
    {
      icon: Eye,
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <Breadcrumb 
              items={[
                { label: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
                { label: 'API Security & Management' }
              ]}
              className="text-primary-foreground/80 hover:text-primary-foreground mb-4"
            />
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              API Security
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              API Security & Management
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We help agencies design and implement secure API gateways with authentication, rate limiting, encryption, and comprehensive monitoring for government workloads—meeting FedRAMP, StateRAMP, and FISMA requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Start API Security Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/capability-generator">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Generate Capability Statement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Capabilities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">API Security Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive API security services for government systems and integrations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {securityCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                        <p className="text-muted-foreground mb-4">{capability.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authentication Methods */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">API Authentication Methods</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement industry-standard authentication protocols for government APIs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {authenticationMethods.map((category, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <Key className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                      <div className="space-y-4">
                        {category.methods.map((method, idx) => (
                          <div key={idx} className="border-l-2 border-border pl-4">
                            <div className="font-semibold mb-1">{method.name}</div>
                            <div className="text-sm text-muted-foreground">{method.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">API Threat Protection</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement comprehensive protection against API security threats and vulnerabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {threatProtection.map((threat, index) => (
              <div key={index} className="flex gap-3 p-6 bg-secondary rounded-lg border-2 border-border">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">{threat.name}</div>
                  <div className="text-sm text-muted-foreground">{threat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Features */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">API Monitoring & Analytics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive monitoring and analytics for API security, performance, and compliance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {monitoringFeatures.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-2">{feature.name}</div>
                      <div className="text-sm text-muted-foreground">{feature.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compliance & Governance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All API security implementations meet FedRAMP, StateRAMP, and FISMA requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-2">{feature.name}</div>
                      <div className="text-sm text-muted-foreground">{feature.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your APIs?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our API security specialists can help you design and implement comprehensive security controls for government APIs and integrations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Schedule API Security Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/system-integration">
                <Button size="lg" variant="outline">
                  View All Integration Services
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
