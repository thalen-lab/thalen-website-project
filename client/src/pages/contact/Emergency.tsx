import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';
import { ArrowRight } from 'lucide-react';

export default function Emergency() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    severity: '',
    incidentDescription: ''
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      setFormData({
        name: '',
        phone: '',
        email: '',
        severity: '',
        incidentDescription: ''
      });
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to submit form. Please try again.');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate({
      name: formData.name,
      email: formData.email,
      company: '',
      phone: formData.phone,
      assessmentType: 'Emergency Support',
      message: `EMERGENCY REQUEST\nSeverity: ${formData.severity}\n\nIncident Description:\n${formData.incidentDescription}`
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <section className="relative py-20 bg-[url('/img/pattern-dark.svg')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        <div className="container relative">
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Contact', href: '/contact' },
                { label: 'Emergency Response' }
              ]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">24/7 Critical Support</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Emergency Support
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              24/7 critical incident response for mission-critical system failures and automation emergencies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            <div>
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Immediate Response</p>
              <h2 className="text-3xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Contact Channels & Coverage</h2>
              
              <div className="space-y-6">
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-[oklch(0.20_0.05_250)]">
                      24/7 Emergency Hotline
                    </h3>
                    <a href="tel:1-800-NEXDYNE-911" className="text-[oklch(0.65_0.18_55)] hover:underline text-lg font-bold">
                      Call: 1-800-NEXDYNE-911
                    </a>
                    <p className="text-sm text-slate-600 mt-2">
                      For immediate assistance, call our 24/7 emergency hotline.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-[oklch(0.20_0.05_250)]">
                      Emergency Email
                    </h3>
                    <a href="mailto:emergency@thalentechnologies.com" className="text-[oklch(0.65_0.18_55)] hover:underline">
                      emergency@thalentechnologies.com
                    </a>
                     <p className="text-sm text-slate-600 mt-2">
                      For non-critical emergencies, you can email us.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 text-[oklch(0.20_0.05_250)]">Emergency Response Coverage</h3>
                    <p className="text-slate-600 mb-4">
                      24/7 emergency support for critical situations including:
                    </p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span>Mission-critical system failures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span>Automation process disruptions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span>Security incident automation response</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span>Data recovery and system restoration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span>Performance degradation troubleshooting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Report an Incident</p>
                  <h2 className="text-2xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Emergency Report Form</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-600">Primary Contact *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-600">Emergency Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-600">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]"
                        placeholder="emergency.contact@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-600">Incident Severity *</label>
                      <select 
                        name="severity"
                        required
                        value={formData.severity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]"
                      >
                        <option value="">Select severity level</option>
                        <option value="Critical">Critical - System Down</option>
                        <option value="High">High - Major Impact</option>
                        <option value="Medium">Medium - Partial Impact</option>
                        <option value="Low">Low - Minor Issue</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-600">Incident Description *</label>
                      <textarea
                        name="incidentDescription"
                        required
                        rows={6}
                        value={formData.incidentDescription}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]"
                        placeholder="Detailed description of the emergency, affected systems, and current impact..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-white text-[oklch(0.22_0.06_250)] border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? 'Sending...' : 'Submit Emergency Request'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-sm text-center text-slate-600">
                      For immediate assistance, call our 24/7 emergency hotline.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Response Time SLAs</h2>
            <p className="max-w-2xl mx-auto text-white/90 mb-8">
                Our commitment to rapid response ensures your critical systems are restored as quickly as possible. We adhere to the following service level agreements for emergency support.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[oklch(0.75_0.15_55)] mb-2">Critical Incidents</h3>
                    <p className="text-4xl font-bold">2-Hour</p>
                    <p className="text-white/80">Response Time</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[oklch(0.75_0.15_55)] mb-2">High Priority</h3>
                    <p className="text-4xl font-bold">4-Hour</p>
                    <p className="text-white/80">Response Time</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[oklch(0.75_0.15_55)] mb-2">Standard Emergencies</h3>
                    <p className="text-4xl font-bold">8-Hour</p>
                    <p className="text-white/80">Response Time</p>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
