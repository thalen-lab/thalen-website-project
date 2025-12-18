import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Send, AlertCircle, Phone, Mail, CheckCircle } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';

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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero - Red Theme for Emergency */}
      <section className="relative py-20 bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white">
        <div className="container">
          {/* Breadcrumb */}
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Emergency Support
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              24/7 critical incident response for mission-critical system failures and automation emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Immediate Response */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Immediate Response</h2>
              
              <Card className="mb-6 border-l-4 border-l-red-500 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center text-red-900">
                    <Phone className="h-5 w-5 text-red-600 mr-2" />
                    24/7 Emergency Hotline
                  </h3>
                  <a href="tel:1-800-NEXDYNE-911" className="text-red-600 hover:underline text-lg font-bold">
                    Call: 1-800-NEXDYNE-911
                  </a>
                  <p className="text-sm text-red-700 mt-2">
                    For immediate assistance, call our 24/7 emergency hotline
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6 border-l-4 border-l-red-500 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center text-red-900">
                    <Mail className="h-5 w-5 text-red-600 mr-2" />
                    Emergency Email
                  </h3>
                  <a href="mailto:emergency@thalentechnologies.com" className="text-red-600 hover:underline">
                    emergency@thalentechnologies.com
                  </a>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Emergency Response Coverage</h3>
                  <p className="text-muted-foreground mb-4">
                    24/7 emergency support for critical situations including:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Mission-critical system failures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Automation process disruptions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Security incident automation response</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Data recovery and system restoration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Performance degradation troubleshooting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-yellow-900">Response Times</h3>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li><strong>Critical incidents:</strong> 2-hour response</li>
                    <li><strong>High priority:</strong> 4-hour response</li>
                    <li><strong>Standard emergencies:</strong> 8-hour response</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Report Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Emergency Report</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Primary Contact *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Emergency Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="emergency.contact@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Incident Severity *</label>
                      <select 
                        name="severity"
                        required
                        value={formData.severity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="">Select severity level</option>
                        <option value="Critical">Critical - System Down</option>
                        <option value="High">High - Major Impact</option>
                        <option value="Medium">Medium - Partial Impact</option>
                        <option value="Low">Low - Minor Issue</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Incident Description *</label>
                      <textarea
                        name="incidentDescription"
                        required
                        rows={6}
                        value={formData.incidentDescription}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Detailed description of the emergency, affected systems, and current impact..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? 'Sending...' : 'Submit Emergency Request'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-sm text-center text-muted-foreground">
                      For immediate assistance, call our 24/7 emergency hotline
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
