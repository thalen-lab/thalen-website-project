
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, CheckCircle2, Lock, Key, Shield, UserCheck, Fingerprint, Users } from 'lucide-react';

export default function IdentityAccessManagement() {
  const iamCapabilities = [
    {
      icon: Key,
      title: 'Multi-Factor Authentication (MFA)',
      description: 'Implement PIV/CAC card authentication, hardware tokens, and biometric MFA to meet government identity assurance requirements (NIST 800-63).',
      benefits: ['PIV/CAC integration', 'Hardware token support', 'Biometric authentication', 'FIPS 140-2 compliant']
    },
    {
      icon: Shield,
      title: 'Privileged Access Management (PAM)',
      description: 'Control and monitor privileged accounts with just-in-time access, session recording, and automated credential rotation.',
      benefits: ['Just-in-time access', 'Session recording', 'Credential vaulting', 'Automated rotation']
    },
    {
      icon: Users,
      title: 'Identity Governance & Administration',
      description: 'Automate user lifecycle management, access reviews, and role-based access control with policy-driven governance.',
      benefits: ['Automated provisioning', 'Access certification', 'Role-based access', 'Policy enforcement']
    },
    {
      icon: Fingerprint,
      title: 'Single Sign-On (SSO)',
      description: 'Federated identity management with SAML 2.0, OAuth 2.0, and OpenID Connect for seamless access across applications.',
      benefits: ['SAML 2.0 federation', 'OAuth 2.0/OIDC', 'Application integration', 'Reduced password fatigue']
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
    'Okta',
    'Microsoft Entra ID (Azure AD)',
    'Ping Identity',
    'ForgeRock',
    'CyberArk',
    'BeyondTrust',
    'SailPoint',
    'Saviynt'
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
                { label: 'Identity & Access Management' }
              ]}
              className="text-primary-foreground/80 hover:text-primary-foreground mb-4"
            />
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Zero Trust • PIV/CAC Ready
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Identity & Access Management (IAM)
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Implement Zero Trust identity solutions with PIV/CAC authentication, privileged access management, and automated governance. Thalen Technologies delivers government-grade IAM that meets NIST 800-63 identity assurance requirements (federal, state, local) while improving user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule IAM Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Zero Trust Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IAM Capabilities */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive IAM Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end identity and access management from authentication to governance, designed for government security requirements across all levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {iamCapabilities.map((capability, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors hover:shadow-xl">
                <CardContent className="p-8">
                  <capability.icon className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground mb-6">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Trust Principles */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Zero Trust Identity Principles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern security framework that eliminates implicit trust and continuously verifies every access request.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {zeroTrustPrinciples.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{item.principle}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3 text-sm">Implementation:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.implementation.map((impl, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="h-2 w-2 bg-foreground rounded-full mr-2"></div>
                          <span>{impl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IAM Platforms */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise IAM Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert implementation and integration across leading identity and access management platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {iamPlatforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-accent">
                <CardContent className="p-6 text-center">
                  <UserCheck className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="font-semibold">{platform}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">IAM Implementation Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven outcomes from our identity and access management implementations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: '80%', label: 'Reduction in Help Desk Calls' },
              { metric: '< 30s', label: 'Average Login Time' },
              { metric: '99.9%', label: 'Authentication Uptime' },
              { metric: '100%', label: 'NIST 800-63 Compliance' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{item.metric}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Implement Zero Trust Identity</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule an IAM assessment and discover how Thalen Technologies can deliver secure, compliant identity and access management for your government environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule IAM Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View IAM Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
