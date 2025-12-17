import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Send, Shield, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';

export default function Government() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    agency: '',
    clearanceLevel: '',
    projectRequirements: ''
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      setFormData({
        name: '',
        title: '',
        email: '',
        agency: '',
        clearanceLevel: '',
        projectRequirements: ''
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
      company: formData.agency,
      phone: '',
      assessmentType: 'Government Relations',
      message: `Title: ${formData.title}\nRequired Clearance Level: ${formData.clearanceLevel}\n\nProject Requirements:\n${formData.projectRequirements}`
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
              Government Relations
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Federal contracting and security clearance specialists for government automation initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Federal Contracting */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Federal Contracting</h2>
              
              <Card className="mb-6 border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Shield className="h-5 w-5 text-accent mr-2" />
                    Government Relations
                  </h3>
                  <a href="mailto:govrelations@nexdynetechnologies.com" className="text-accent hover:underline">
                    govrelations@nexdynetechnologies.com
                  </a>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Specialized Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Our government relations team provides expertise in:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Federal contracting and procurement processes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Security clearance requirements and compliance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>CMMC and FedRAMP certification guidance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Government automation standards and frameworks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Defense and intelligence community solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Security Clearances</h3>
                  <p className="text-sm">
                    Our team maintains active Top Secret/SCI clearances and comprehensive compliance certifications.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Government Inquiry Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Government Inquiry</h2>
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
                        <label className="block text-sm font-medium mb-2">Title *</label>
                        <input
                          type="text"
                          name="title"
                          required
                          value={formData.title}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Program Manager"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Government Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="john.smith@agency.gov"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Agency/Department *</label>
                      <input
                        type="text"
                        name="agency"
                        required
                        value={formData.agency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Department of Defense"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Required Clearance Level</label>
                      <select 
                        name="clearanceLevel"
                        value={formData.clearanceLevel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select clearance level</option>
                        <option value="Public Trust">Public Trust</option>
                        <option value="Secret">Secret</option>
                        <option value="Top Secret">Top Secret</option>
                        <option value="TS/SCI">TS/SCI</option>
                        <option value="None">None Required</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Requirements *</label>
                      <textarea
                        name="projectRequirements"
                        required
                        rows={6}
                        value={formData.projectRequirements}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Describe your automation requirements and compliance needs..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-orange-gradient hover:opacity-90"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? 'Sending...' : 'Submit Government Inquiry'}
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
