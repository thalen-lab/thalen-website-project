import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
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
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/img/patterns/hero-pattern.svg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Contact', href: '/contact' },
                { label: 'Government Relations' }
              ]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Specialized Support</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Government Relations
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90">
              Federal contracting and security clearance specialists for government automation initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Federal Contracting Info */}
            <div className="text-slate-600">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Federal Contracting</p>
              <h2 className="text-3xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Dedicated Government Expertise</h2>
              <p className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                Our government relations team provides specialized expertise in federal contracting, security compliance, and automation standards. We partner with agencies to deliver secure, efficient, and compliant AI-powered solutions.
              </p>

              <div className="space-y-6">
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="font-semibold mb-4 text-[oklch(0.20_0.05_250)]">Core Competencies</h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span>Federal contracting and procurement processes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span>Security clearance requirements and compliance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span>CMMC and FedRAMP certification guidance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span>Government automation standards and frameworks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                        <span>Defense and intelligence community solutions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="font-semibold mb-2 text-[oklch(0.20_0.05_250)]">Security Clearances</h3>
                    <p className="text-slate-600">
                      Our team maintains active Top Secret/SCI clearances and comprehensive compliance certifications to handle sensitive government projects.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Government Inquiry Form */}
            <div>
              <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Government Inquiry</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-600">Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]" placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-600">Title *</label>
                        <input type="text" name="title" required value={formData.title} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]" placeholder="Program Manager" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-600">Government Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]" placeholder="john.smith@agency.gov" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-600">Agency/Department *</label>
                      <input type="text" name="agency" required value={formData.agency} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]" placeholder="Department of Defense" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-600">Required Clearance Level</label>
                      <select name="clearanceLevel" value={formData.clearanceLevel} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]">
                        <option value="">Select clearance level</option>
                        <option value="Public Trust">Public Trust</option>
                        <option value="Secret">Secret</option>
                        <option value="Top Secret">Top Secret</option>
                        <option value="TS/SCI">TS/SCI</option>
                        <option value="None">None Required</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-600">Project Requirements *</label>
                      <textarea name="projectRequirements" required rows={6} value={formData.projectRequirements} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.18_55)]" placeholder="Describe your automation requirements and compliance needs..."></textarea>
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-[oklch(0.22_0.06_250)] text-white hover:bg-opacity-90" disabled={contactMutation.isPending}>
                      {contactMutation.isPending ? 'Sending...' : 'Submit Government Inquiry'}
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
