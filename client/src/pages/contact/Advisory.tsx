import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Send, Code, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';

export default function Advisory() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    organization: '',
    focusArea: '',
    technicalChallenge: ''
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      setFormData({
        name: '',
        role: '',
        email: '',
        organization: '',
        focusArea: '',
        technicalChallenge: ''
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
      company: formData.organization,
      phone: '',
      assessmentType: 'Technical Advisory',
      message: `Technical Role: ${formData.role}\nFocus Area: ${formData.focusArea}\n\nTechnical Challenge:\n${formData.technicalChallenge}`
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technical Advisory
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Expert guidance on automation technology stack and implementation strategy from our technical architects.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Technical Expertise */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Expertise</h2>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Technical Advisory Team</h3>
                  <a href="mailto:technical@thalentechnologies.com" className="text-accent hover:underline">
                    technical@thalentechnologies.com
                  </a>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Advisory Services</h3>
                  <p className="text-muted-foreground mb-4">
                    Our comprehensive technical advisory services include:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Technology stack evaluation and recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Architecture design and scalability planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Integration strategy and API design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Performance optimization and troubleshooting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Security architecture and compliance guidance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Expert Architects</h3>
                  <p className="text-sm">
                    Our technical team includes certified architects across all major automation platforms and cloud providers.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Technical Consultation Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Technical Consultation</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Technical Role *</label>
                        <input
                          type="text"
                          name="role"
                          required
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Solutions Architect"
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
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="john.smith@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Organization *</label>
                      <input
                        type="text"
                        name="organization"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Company Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Technical Focus Area *</label>
                      <select 
                        name="focusArea"
                        required
                        value={formData.focusArea}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select primary focus</option>
                        <option value="RPA & Process Automation">RPA & Process Automation</option>
                        <option value="Cloud Architecture">Cloud Architecture</option>
                        <option value="Data Analytics & AI/ML">Data Analytics & AI/ML</option>
                        <option value="Security & Compliance">Security & Compliance</option>
                        <option value="Integration & APIs">Integration & APIs</option>
                        <option value="DevSecOps">DevSecOps</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Technical Challenge *</label>
                      <textarea
                        name="technicalChallenge"
                        required
                        rows={6}
                        value={formData.technicalChallenge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Describe your technical challenge, current architecture, and specific areas where you need guidance..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-orange-gradient hover:opacity-90"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? 'Sending...' : 'Request Technical Advisory'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
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
