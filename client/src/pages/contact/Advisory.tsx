import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
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
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero */}
      <section className="relative py-24 bg-[url('/img/patterns/hero-pattern.svg')] bg-center">
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85" />
        <div className="container relative text-center text-white">
          <div className="mb-4">
            <Breadcrumb 
              items={[
                { label: 'Contact', href: '/contact' },
                { label: 'Advisory Services' }
              ]} 
              variant="light" 
            />
          </div>
          <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Expert Guidance</p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Technical Advisory
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8"
          >
            Expert guidance on automation technology stack and implementation strategy from our technical architects.
          </motion.p>
          <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
            <a href="#consultation-form">Request Consultation</a>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section id="consultation-form" className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Technical Expertise */}
            <div>
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Expertise</p>
              <h2 className="text-3xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Actionable Technical Guidance</h2>
              <p className="text-slate-600 mb-8">Our team provides in-depth analysis and strategic advice to ensure your technology choices align with your business goals for scalability, performance, and security.</p>

              <div className="space-y-6">
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 text-[oklch(0.20_0.05_250)]">Advisory Services</h3>
                    <ul className="space-y-3 text-slate-600">
                      {[ "Technology stack evaluation and recommendations", "Architecture design and scalability planning", "Integration strategy and API design", "Performance optimization and troubleshooting", "Security architecture and compliance guidance" ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-[oklch(0.20_0.05_250)]">Expert Architects</h3>
                    <p className="text-slate-600">
                      Our technical team includes certified architects across all major automation platforms and cloud providers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Technical Consultation Form */}
            <div>
              <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Request a Technical Consultation</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-600">Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]" placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-600">Technical Role *</label>
                        <input type="text" name="role" required value={formData.role} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]" placeholder="Solutions Architect" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-600">Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]" placeholder="john.smith@company.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-600">Organization *</label>
                      <input type="text" name="organization" required value={formData.organization} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]" placeholder="Company Name" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-600">Technical Focus Area *</label>
                      <select name="focusArea" required value={formData.focusArea} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]">
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
                      <label className="block text-sm font-medium mb-2 text-slate-600">Technical Challenge *</label>
                      <textarea name="technicalChallenge" required rows={6} value={formData.technicalChallenge} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]" placeholder="Describe your technical challenge, current architecture, and specific areas where you need guidance..."></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[oklch(0.22_0.06_250)] text-white hover:bg-[oklch(0.22_0.06_250)]/90" disabled={contactMutation.isPending}>
                      {contactMutation.isPending ? 'Sending...' : 'Request Technical Advisory'}
                      <ArrowRight className="ml-2 h-5 w-5" />
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
