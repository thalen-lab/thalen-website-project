import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { trpc } from '@/lib/trpc';
import { triggerHaptic } from '@/lib/haptics';
import { toast } from 'sonner';

/**
 * Mobile-optimized contact form landing page
 * Streamlined for quick conversion with minimal cognitive load
 */
export default function MobileContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      triggerHaptic('success');
      setSubmitted(true);
      toast.success('Message sent successfully!');
    },
    onError: (error) => {
      triggerHaptic('error');
      toast.error('Failed to send message. Please try again.');
      console.error('Contact form error:', error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      triggerHaptic('error');
      toast.error('Please fill in all required fields');
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Success state
  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <Navigation />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">
            Message Sent!
          </h1>
          <p className="text-slate-300 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            Thank you for contacting us. Our team will get back to you within 24 hours.
          </p>
          <div className="space-y-3">
            <Link href="/">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Back to Home
              </Button>
            </Link>
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-800"
            >
              Send Another Message
            </Button>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      {/* Header */}
      <div className="bg-slate-900/50 border-b border-slate-700 sticky top-0 z-10 backdrop-blur-sm">
        <div className="container max-w-2xl py-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-2xl py-8 px-4">
        {/* Hero Section */}
        <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-300">
            We'll respond within 24 hours
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-2 gap-3 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
          <a
            href="tel:+18005551234"
            className="flex flex-col items-center gap-2 p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:border-orange-500/50 transition-all active:scale-95"
          >
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-orange-500" />
            </div>
            <span className="text-sm font-medium text-white">Call Us</span>
            <span className="text-xs text-slate-400">1-800-555-1234</span>
          </a>
          <a
            href="mailto:contact@thalentech.com"
            className="flex flex-col items-center gap-2 p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:border-orange-500/50 transition-all active:scale-95"
          >
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-orange-500" />
            </div>
            <span className="text-sm font-medium text-white">Email Us</span>
            <span className="text-xs text-slate-400">Quick reply</span>
          </a>
        </div>

        {/* Divider */}
        <div className="relative mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-900 px-2 text-slate-400">Or send a message</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              Your Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              autoComplete="name"
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              autoComplete="email"
              inputMode="email"
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
              Phone Number <span className="text-slate-500">(Optional)</span>
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              autoComplete="tel"
              inputMode="tel"
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              Your Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or question..."
              required
              rows={5}
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={contactMutation.isPending}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-base font-semibold"
          >
            {contactMutation.isPending ? 'Sending...' : 'Send Message'}
          </Button>

          <p className="text-xs text-center text-slate-400">
            By submitting this form, you agree to our privacy policy
          </p>
        </form>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-1">24h</div>
              <div className="text-xs text-slate-400">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-1">15+</div>
              <div className="text-xs text-slate-400">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
              <div className="text-xs text-slate-400">Confidential</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
