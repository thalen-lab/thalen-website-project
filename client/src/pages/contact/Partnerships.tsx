import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';

export default function Partnerships() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    organization: '',
    projectOverview: ''
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      setFormData({
        name: '',
        title: '',
        email: '',
        organization: '',
        projectOverview: ''
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
      assessmentType: 'Strategic Partnership',
      message: `Title: ${formData.title}\n\nProject Overview:\n${formData.projectOverview}`
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
              Strategic Partnerships
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Enterprise automation consulting and strategic transformation initiatives for government and Fortune 500 organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Get Started */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get Started</h2>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Direct Contact</h3>
                  <a href="mailto:partnerships@nexdynetechnologies.com" className="text-accent hover:underline">
                    partnerships@nexdynetechnologies.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">What We Cover</h3>
                  <p className="text-muted-foreground mb-4">
                    Our strategic partnership services include:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Enterprise automation strategy and planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Digital transformation roadmaps</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Technology stack evaluation and selection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>ROI analysis and business case development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Large-scale implementation planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Quick Contact Form</h2>
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
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="CTO"
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
                      <label className="block text-sm font-medium mb-2">Project Overview *</label>
                      <textarea
                        name="projectOverview"
                        required
                        rows={6}
                        value={formData.projectOverview}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Brief description of your automation initiative..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-orange-gradient hover:opacity-90"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? 'Sending...' : 'Submit Partnership Inquiry'}
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
