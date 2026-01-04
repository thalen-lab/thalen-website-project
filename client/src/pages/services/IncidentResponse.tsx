
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, CheckCircle2, Shield, AlertCircle, Search, FileText, Lock, RefreshCw } from 'lucide-react';

export default function IncidentResponse() {
  const irCapabilities = [
    {
      icon: AlertCircle,
      title: 'Rapid Incident Response',
      description: 'Immediate response to security incidents with <1 hour activation time and 24/7 emergency hotline for critical breaches.',
      benefits: ['< 1 hour activation', '24/7 emergency hotline', 'On-site response available', 'TS/SCI cleared team']
    },
    {
      icon: Search,
      title: 'Digital Forensics',
      description: 'Court-admissible forensic analysis of compromised systems to identify attack vectors, scope, and attribution.',
      benefits: ['Forensic imaging', 'Malware analysis', 'Timeline reconstruction', 'Court-admissible evidence']
    },
    {
      icon: Lock,
      title: 'Breach Containment',
      description: 'Rapid containment strategies to stop lateral movement and prevent further data exfiltration or system compromise.',
      benefits: ['Network segmentation', 'Account lockdown', 'Malware eradication', 'System isolation']
    },
    {
      icon: RefreshCw,
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <Breadcrumb 
              items={[
                { label: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
                { label: 'Incident Response & Forensics' }
              ]}
              className="text-primary-foreground/80 hover:text-primary-foreground mb-4"
            />
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              &lt; 1 Hour Response • 24/7 Emergency Hotline
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Incident Response & Forensics
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Rapid incident response and digital forensics services to contain breaches, investigate root causes, and restore operations with minimal impact. NexDyne Technology's TS/SCI cleared team delivers court-admissible forensic analysis and expert breach response for government agencies (federal, state, local).
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Contact Emergency Response
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download IR Plan Template
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IR Capabilities */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Incident Response Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end incident response from detection to recovery, designed for mission-critical government environments (federal, state, local).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {irCapabilities.map((capability, index) => (
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

      {/* IR Process */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">NIST-Aligned Incident Response Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured incident response methodology following NIST SP 800-61 guidelines for government agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {irProcess.map((step, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{step.phase}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3 text-sm">Key Activities:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="h-2 w-2 bg-foreground rounded-full mr-2"></div>
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
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Digital Forensics Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Court-admissible forensic analysis across all digital evidence types for government investigations (federal, state, local).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {forensicCapabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-accent">
                <CardContent className="p-6 text-center">
                  <FileText className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="font-semibold text-sm">{capability}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Incident Response Performance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Established response times and containment rates for critical security incidents.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: '<1hr', label: 'Emergency Activation Time' },
              { metric: '<4hr', label: 'Mean Time to Contain' },
              { metric: '100%', label: 'Forensic Evidence Integrity' },
              { metric: '24/7', label: 'Emergency Hotline' }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prepare for Security Incidents</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Establish incident response capabilities before a breach occurs. Contact NexDyne Technology to develop your IR plan or activate emergency response services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Contact Emergency Response
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule IR Planning Session
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
