import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IncidentResponse() {
  const irCapabilities = [
    {
      title: 'Rapid Incident Response',
      description: 'Immediate response to security incidents with <1 hour activation time and 24/7 emergency hotline for critical breaches.',
      benefits: ['< 1 hour activation', '24/7 emergency hotline', 'On-site response available', 'TS/SCI cleared team']
    },
    {
      title: 'Digital Forensics',
      description: 'Court-admissible forensic analysis of compromised systems to identify attack vectors, scope, and attribution.',
      benefits: ['Forensic imaging', 'Malware analysis', 'Timeline reconstruction', 'Court-admissible evidence']
    },
    {
      title: 'Breach Containment',
      description: 'Rapid containment strategies to stop lateral movement and prevent further data exfiltration or system compromise.',
      benefits: ['Network segmentation', 'Account lockdown', 'Malware eradication', 'System isolation']
    },
    {
      title: 'Recovery & Remediation',
      description: 'Secure system restoration, vulnerability remediation, and implementation of controls to prevent recurrence.',
      benefits: ['Secure restoration', 'Vulnerability patching', 'Control implementation', 'Post-incident review']
    }
  ];

  const irProcess = [
    {
      phase: 'Preparation',
      description: 'Establish incident response plan, team roles, communication procedures, and technical capabilities before incidents occur.',
      activities: ['IR plan development', 'Team training', 'Tool deployment', 'Tabletop exercises']
    },
    {
      phase: 'Detection & Analysis',
      description: 'Identify security incidents, determine scope and severity, and classify based on impact to business operations.',
      activities: ['Incident detection', 'Scope analysis', 'Severity classification', 'Evidence collection']
    },
    {
      phase: 'Containment & Eradication',
      description: 'Contain the incident to prevent further damage, eradicate the threat, and secure compromised systems.',
      activities: ['Threat containment', 'Malware removal', 'Account remediation', 'System hardening']
    },
    {
      phase: 'Recovery & Lessons Learned',
      description: 'Restore normal operations, validate system integrity, and conduct post-incident review to improve defenses.',
      activities: ['System restoration', 'Validation testing', 'Post-incident report', 'Control improvements']
    }
  ];

  const forensicCapabilities = [
    'Disk & Memory Forensics',
    'Network Traffic Analysis',
    'Malware Reverse Engineering',
    'Log Analysis & Correlation',
    'Mobile Device Forensics',
    'Cloud Forensics (AWS/Azure/GCP)',
    'Email & Communication Analysis',
    'Timeline Reconstruction'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-28 bg-[url('/images/patterns/pattern-white.svg')] bg-center">
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85" />
        <div className="container relative">
          <div className="max-w-4xl text-white">
            <Breadcrumb 
              items={[
                { label: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
                { label: 'Incident Response & Forensics' }
              ]}
              className="text-white/80 hover:text-white mb-4"
            />
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              24/7 Emergency Response
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Incident Response & Forensics
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Rapid incident response and digital forensics services to contain breaches, investigate root causes, and restore operations with minimal impact. NexDyne Technology's TS/SCI cleared team delivers court-admissible forensic analysis and expert breach response for government agencies (federal, state, local).
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                Contact Emergency Response
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                Download IR Plan Template
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IR Capabilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Comprehensive Incident Response</h2>
            <p className="text-xl text-slate-600">
              End-to-end incident response from detection to recovery, designed for mission-critical government environments (federal, state, local).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {irCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{capability.title}</h3>
                  <p className="text-slate-600 mb-6">{capability.description}</p>
                  <ul className="space-y-3">
                    {capability.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
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

      {/* IR Process */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">NIST-Aligned Incident Response</h2>
            <p className="text-xl text-slate-600">
              Our structured incident response methodology follows NIST SP 800-61 guidelines for government agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {irProcess.map((step, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-[oklch(0.22_0.06_250)] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)]">{step.phase}</h3>
                  </div>
                  <p className="text-slate-600 mb-6">{step.description}</p>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-semibold mb-3 text-sm text-[oklch(0.20_0.05_250)]">Key Activities:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-1.5 mr-2"></span>
                          <span>{activity}</span>
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

      {/* Forensic Capabilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Forensic Analysis</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Digital Forensics Capabilities</h2>
            <p className="text-xl text-slate-600">
              Court-admissible forensic analysis across all digital evidence types for government investigations (federal, state, local).
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {forensicCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="font-semibold text-[oklch(0.20_0.05_250)]">{capability}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Proven Performance</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Incident Response Metrics</h2>
            <p className="text-xl text-slate-600">
              Established response times and containment rates for critical security incidents.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: '<1hr', label: 'Emergency Activation' },
              { metric: '<4hr', label: 'Mean Time to Contain' },
              { metric: '100%', label: 'Evidence Integrity' },
              { metric: '24/7', label: 'Emergency Hotline' }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg border-2 border-slate-200">
                <div className="text-5xl font-bold text-[oklch(0.65_0.18_55)] mb-2">{item.metric}</div>
                <div className="text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prepare for Security Incidents</h2>
          <p className="text-xl text-white/90 mb-8">
            Establish incident response capabilities before a breach occurs. Contact NexDyne Technology to develop your IR plan or activate emergency response services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              Contact Emergency Response
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
              Schedule IR Planning Session
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
