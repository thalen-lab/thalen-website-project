import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, ArrowRight, Shield, AlertCircle, Code } from 'lucide-react';
import { Link } from 'wouter';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    assessmentType: '',
    message: ''
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        assessmentType: '',
        message: ''
      });
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to submit form. Please try again.');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[{ label: 'Contact' }]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90">
              Contact us to discuss how our services can support your agency's technology requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Reach Us */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Ways to Reach Us</h2>
            </div>

            <div className="space-y-0">
              {/* Strategic Partnerships */}
              <Link href="/contact/partnerships">
                <div className="group py-6 border-b border-border hover:bg-accent/5 transition-colors cursor-pointer">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">Strategic Partnerships</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-muted-foreground text-sm">
                        Inquire about enterprise automation consulting and strategic transformation initiatives
                      </p>
                      <ArrowRight className="h-5 w-5 text-accent ml-4 flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Government Relations */}
              <Link href="/contact/government">
                <div className="group py-6 border-b border-border hover:bg-accent/5 transition-colors cursor-pointer">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">Government Relations</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-muted-foreground text-sm">
                        Connect with our federal contracting and security clearance specialists
                      </p>
                      <ArrowRight className="h-5 w-5 text-accent ml-4 flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Emergency Support */}
              <Link href="/contact/emergency">
                <div className="group py-6 border-b border-border hover:bg-red-500/5 transition-colors cursor-pointer">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <h3 className="text-xl font-semibold group-hover:text-red-500 transition-colors">Emergency Support</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-muted-foreground text-sm">
                        24/7 critical incident response for mission-critical system failures
                      </p>
                      <ArrowRight className="h-5 w-5 text-red-500 ml-4 flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Technical Advisory */}
              <Link href="/contact/advisory">
                <div className="group py-6 border-b border-border hover:bg-accent/5 transition-colors cursor-pointer">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">Technical Advisory</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-muted-foreground text-sm">
                        Get expert guidance on automation technology stack and implementation strategy
                      </p>
                      <ArrowRight className="h-5 w-5 text-accent ml-4 flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of automation experts is ready to discuss your strategic transformation needs.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <Phone className="h-7 w-7 text-accent mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start">
                    <Mail className="h-7 w-7 text-accent mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">contact@thalen.tech</p>
                      <p className="text-sm text-muted-foreground">24-hour response time</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start">
                    <MapPin className="h-7 w-7 text-accent mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Headquarters</h3>
                      <p className="text-muted-foreground">
                        1800 K Street NW, Suite 900<br />
                        Washington, DC 20006
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Security Clearances</h3>
                <p className="text-sm text-muted-foreground">
                  Our team maintains active Top Secret/SCI clearances and is available for classified discussions in secure facilities.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">Request Assessment</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="John Doe"
                        />
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
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Assessment Type</label>
                      <select 
                        name="assessmentType"
                        value={formData.assessmentType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select an option</option>
                        <option value="automation">Automation Assessment</option>
                        <option value="security">Security Assessment</option>
                        <option value="cloud">Cloud Modernization</option>
                        <option value="analytics">Analytics Strategy</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Tell us about your automation needs..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-orange-gradient hover:opacity-90"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prefer to Talk Directly?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a call with our automation strategists to discuss your specific needs.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Call
          </Button>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
