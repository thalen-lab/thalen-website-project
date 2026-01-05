import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function SystemIntegration() {
  const primaryServices = [
    {
      title: 'FedRAMP & StateRAMP Platform Integration',
      description: 'We help agencies connect multiple FedRAMP and StateRAMP-authorized platforms (Salesforce Government Cloud, ServiceNow, Workday, etc.) with secure APIs and unified data flows.',
      benefits: ['50+ FedRAMP platform connectors', 'ATO-compliant API gateways', 'Real-time data synchronization'],
      link: '/services/fedramp-integration'
    },
    {
      title: 'Legacy System Modernization',
      description: 'We help agencies integrate mainframe, COBOL, and legacy databases with modern FedRAMP and StateRAMP platforms using secure adapters, APIs, and middleware.',
      benefits: ['Zero business disruption', 'Bidirectional data sync', 'Compliance-ready architecture'],
      link: '/services/legacy-integration'
    },
    {
      title: 'Hybrid Cloud Integration',
      description: 'We help agencies connect on-premise systems with FedRAMP and StateRAMP cloud platforms through secure tunnels, VPNs, and hybrid architecture patterns.',
      benefits: ['Multi-cloud orchestration', 'Secure hybrid connectivity', 'Workload portability'],
      link: '/services/hybrid-cloud'
    },
    {
      title: 'API Security & Management',
      description: 'We help agencies design and implement secure API gateways with authentication, rate limiting, encryption, and comprehensive monitoring for government workloads.',
      benefits: ['OAuth 2.0 / SAML implementation', 'API threat protection', 'Compliance logging'],
      link: '/services/api-security'
    }
  ];

  const additionalCapabilities = [
    { name: 'Enterprise Service Bus (ESB) Implementation', description: 'Message queuing and event-driven architecture for complex integrations' },
    { name: 'Data Integration & ETL Pipelines', description: 'Automated data transformation and synchronization across systems' },
    { name: 'Microservices Architecture', description: 'Build scalable, maintainable integrations using modern patterns' },
    { name: 'Integration Platform as a Service (iPaaS)', description: 'Deploy and manage integrations on FedRAMP and StateRAMP-authorized platforms' }
  ];

  const keyDifferentiators = [
    {
      title: 'Multi-Vendor Integration Expertise',
      description: 'We integrate 50+ FedRAMP and StateRAMP platforms including Salesforce Gov Cloud, ServiceNow, Workday, Adobe, and dozens of specialized government SaaS solutions.'
    },
    {
      title: 'Vendor-Neutral Architecture',
      description: 'We design integration architectures that avoid vendor lock-in, ensuring you can swap platforms without rebuilding your entire integration layer.'
    },
    {
      title: 'ATO-Ready Integration Patterns',
      description: 'All integration designs include security controls documentation, API security assessments, and data flow diagrams ready for ATO packages.'
    }
  ];

  const governmentExperience = [
    { agency: 'Federal Civilian Agencies', projects: '20+ integration projects', clearance: 'Public Trust' },
    { agency: 'Department of Defense', projects: '12 multi-system integrations', clearance: 'Secret' },
    { agency: 'State & Local Government', projects: '30+ system integration projects', clearance: 'N/A' }
  ];

  const fedrampIntegrations = [
    { 
      category: 'CRM & Case Management', 
      platforms: ['Salesforce Government Cloud', 'Microsoft Dynamics 365 Government', 'ServiceNow Government'],
      useCase: 'Citizen services, case tracking, constituent management'
    },
    {
      category: 'HR & Financial Systems', 
      platforms: ['Workday Government Cloud', 'Oracle Cloud Government', 'SAP NS2'],
      useCase: 'Employee management, payroll, financial operations'
    },
    {
      category: 'Collaboration & Productivity', 
      platforms: ['Microsoft 365 GCC High', 'Google Workspace Government', 'Slack Government'],
      useCase: 'Team collaboration, document management, communication'
    },
    {
      category: 'Security & Compliance', 
      platforms: ['Splunk Cloud Government', 'Palo Alto Prisma Cloud', 'Tenable Cloud Government'],
      useCase: 'SIEM, threat detection, vulnerability management'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/services/system-integration/hero-system-integration.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/85 to-[#12344D]/80"></div>
        <div className="container relative">
          <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Services', href: '/consulting-services' },
                  { label: 'System Integration' }
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
            <div className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Implementation Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Government Systems Integration & Interoperability
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We integrate multiple FedRAMP and StateRAMP-authorized platforms, legacy government systems, and agency-specific applications with secure APIs and compliant data flows. Vendor-neutral consulting that breaks down data silos.
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

      {/* Key Differentiators */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Why Choose Us</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Why Agencies Choose NexDyne for Integration</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not a platform vendor—we're integration specialists who make your chosen FedRAMP platforms work together seamlessly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="pt-8">
                    <h3 className="text-xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Services</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Core Integration Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From FedRAMP platform integration to legacy system modernization
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {primaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full group">
                  <CardContent className="pt-8 flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-3 text-[oklch(0.20_0.05_250)]">{service.title}</h3>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                            <span className="text-sm text-slate-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link href={service.link} className="mt-auto">
                      <Button variant="outline" className="w-full border-slate-300 text-[oklch(0.20_0.05_250)] hover:bg-[oklch(0.97_0.01_250)] hover:border-[oklch(0.70_0.18_55)]">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Capabilities */}
          <div className="bg-[oklch(0.97_0.01_250)] rounded-lg p-8 border-2 border-slate-200">
            <h3 className="text-2xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Additional Integration Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCapabilities.map((capability, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                  <div>
                    <div className="font-semibold mb-1 text-[oklch(0.20_0.05_250)]">{capability.name}</div>
                    <div className="text-sm text-slate-600">{capability.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Experience */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Experience</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Government Integration Experience</h2>
            <p className="text-xl text-slate-600">
              Trusted by federal, state, and local agencies for mission-critical integrations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {governmentExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="pt-8 text-center">
                    <h3 className="font-bold text-lg mb-2 text-[oklch(0.20_0.05_250)]">{exp.agency}</h3>
                    <p className="text-3xl font-bold text-[oklch(0.65_0.18_55)] mb-2">{exp.projects}</p>
                    <div className="inline-block bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-600">
                      Clearance: {exp.clearance}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FedRAMP Integrations Table */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Expertise</p>
            <h2 className="text-4xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">FedRAMP & StateRAMP Platform Integrations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We have extensive experience integrating the following government-authorized cloud platforms.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 bg-[oklch(0.97_0.01_250)] text-[oklch(0.20_0.05_250)] font-semibold border-b-2 border-slate-200">Category</th>
                  <th className="p-4 bg-[oklch(0.97_0.01_250)] text-[oklch(0.20_0.05_250)] font-semibold border-b-2 border-slate-200">Platforms</th>
                  <th className="p-4 bg-[oklch(0.97_0.01_250)] text-[oklch(0.20_0.05_250)] font-semibold border-b-2 border-slate-200">Common Use Case</th>
                </tr>
              </thead>
              <tbody>
                {fedrampIntegrations.map((item, index) => (
                  <tr key={index} className="border-b border-slate-200">
                    <td className="p-4 align-top font-semibold text-[oklch(0.20_0.05_250)]">{item.category}</td>
                    <td className="p-4 align-top text-slate-600">{item.platforms.join(', ')}</td>
                    <td className="p-4 align-top text-slate-600">{item.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Integrate Your Government Systems?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Let's discuss your integration challenges and build a roadmap for a more connected, efficient, and compliant government infrastructure. Our vendor-neutral experts are ready to help.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
