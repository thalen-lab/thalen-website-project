import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function FedRAMPIntegration() {
  const integrationCapabilities = [
    {
      title: 'Multi-Platform API Integration',
      description: 'We help agencies connect 50+ FedRAMP and StateRAMP platforms through standardized REST APIs, webhooks, and event-driven architectures with real-time data synchronization.',
      benefits: ['Bi-directional data sync', 'Event-driven workflows', 'Real-time updates', 'Error handling & retry logic']
    },
    {
      title: 'Secure Integration Patterns',
      description: 'We implement OAuth 2.0, SAML, API keys, and certificate-based authentication with encryption in transit and at rest for all data flows between platforms.',
      benefits: ['OAuth 2.0 / SAML authentication', 'TLS 1.2+ encryption', 'API key rotation', 'Audit logging']
    },
    {
      title: 'Data Transformation & Mapping',
      description: 'We design data mapping logic that transforms data formats between platforms while maintaining data integrity, validation rules, and compliance requirements.',
      benefits: ['Schema mapping', 'Data validation', 'Format transformation', 'Duplicate detection']
    },
    {
      title: 'Integration Monitoring & Management',
      description: 'We implement comprehensive monitoring dashboards with alerting, performance metrics, error tracking, and automated recovery for all integration workflows.',
      benefits: ['Real-time monitoring', 'Error alerting', 'Performance metrics', 'Automated recovery']
    }
  ];

  const platformCategories = [
    {
      category: 'CRM & Case Management',
      platforms: [
        { name: 'Salesforce Government Cloud', description: 'Citizen services, case tracking, constituent relationship management' },
        { name: 'Microsoft Dynamics 365 Government', description: 'Customer engagement, field service, case management' },
        { name: 'ServiceNow Government', description: 'IT service management, workflow automation, incident tracking' }
      ]
    },
    {
      category: 'HR & Financial Systems',
      platforms: [
        { name: 'Workday Government Cloud', description: 'Human capital management, payroll, financial planning' },
        { name: 'Oracle Cloud Government', description: 'ERP, financial management, procurement' },
        { name: 'SAP NS2', description: 'Enterprise resource planning, supply chain management' }
      ]
    },
    {
      category: 'Collaboration & Productivity',
      platforms: [
        { name: 'Microsoft 365 GCC High', description: 'Email, document collaboration, team communication' },
        { name: 'Google Workspace Government', description: 'Cloud productivity, document management, video conferencing' },
        { name: 'Slack Government', description: 'Team messaging, workflow automation, app integrations' }
      ]
    },
    {
      category: 'Security & Compliance',
      platforms: [
        { name: 'Splunk Cloud Government', description: 'SIEM, log aggregation, security analytics' },
        { name: 'Palo Alto Prisma Cloud', description: 'Cloud security posture management, threat detection' },
        { name: 'Tenable Cloud Government', description: 'Vulnerability management, compliance scanning' }
      ]
    }
  ];

  const integrationPatterns = [
    { name: 'Point-to-Point Integration', description: 'Direct API connections between two platforms for simple use cases' },
    { name: 'Hub-and-Spoke Architecture', description: 'Central integration hub that connects multiple platforms through a unified layer' },
    { name: 'Event-Driven Integration', description: 'Real-time event streaming using message queues and pub/sub patterns' },
    { name: 'Batch Integration', description: 'Scheduled data synchronization for high-volume, non-real-time workflows' }
  ];

  const complianceFeatures = [
    { name: 'ATO Documentation Support', description: 'Security controls documentation, data flow diagrams, and API security assessments ready for ATO packages' },
    { name: 'FedRAMP & StateRAMP Compliance', description: 'All integration patterns follow FedRAMP and StateRAMP security requirements and authorization boundaries' },
    { name: 'Data Residency Controls', description: 'Ensure data remains within authorized cloud environments and complies with data sovereignty requirements' },
    { name: 'Audit Trail & Logging', description: 'Comprehensive logging of all API calls, data transformations, and system events for compliance audits' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/services/system-integration/hero-fedramp-integration.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/85 to-[#12344D]/80"></div>
        <div className="container relative">
          <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Services', href: '/consulting-services' },
                  { label: 'System Integration', href: '/services/system-integration' },
                  { label: 'FedRAMP Integration' }
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
            <div className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-6">
              Integration Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              FedRAMP & StateRAMP Platform Integration
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We help agencies connect multiple FedRAMP and StateRAMP-authorized platforms with secure APIs, unified data flows, and compliant integration patterns. Break down data silos while maintaining security controls.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Start Integration Project
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

      {/* Integration Capabilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Capabilities</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Platform Integration Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive integration services for connecting FedRAMP and StateRAMP platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {integrationCapabilities.map((capability, index) => (
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

      {/* Platform Categories */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Expertise</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Supported FedRAMP & StateRAMP Platforms</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We integrate 50+ authorized platforms across every government technology category
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {platformCategories.map((category, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">{category.category}</h3>
                  <div className="space-y-4">
                    {category.platforms.map((platform, idx) => (
                      <div key={idx} className="border-l-2 border-slate-200 pl-4">
                        <div className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">{platform.name}</div>
                        <div className="text-sm text-slate-600">{platform.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Patterns */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Architecture</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Integration Architecture Patterns</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We design integration architectures tailored to your agency's specific requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {integrationPatterns.map((pattern, index) => (
              <div key={index} className="flex gap-3 p-6 bg-[oklch(0.97_0.01_250)] rounded-lg border-2 border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                <div>
                  <div className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">{pattern.name}</div>
                  <div className="text-sm text-slate-600">{pattern.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Security First</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Compliance & Security Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              All integration implementations include comprehensive security controls and compliance documentation
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
            <h2 className="text-4xl font-bold mb-6">Ready to Connect Your Platforms?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our integration specialists can help you design and implement secure, compliant integrations between your FedRAMP and StateRAMP platforms.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Schedule Integration Consultation
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

      <Footer />
    </div>
  );
}
