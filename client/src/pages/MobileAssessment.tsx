import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, CheckCircle2, ArrowLeft, Building2, Users, DollarSign } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { trpc } from '@/lib/trpc';
import { triggerHaptic } from '@/lib/haptics';
import { toast } from 'sonner';

/**
 * Mobile-optimized assessment scheduling landing page
 * Streamlined for quick conversion with clear value proposition
 */
export default function MobileAssessment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    challenge: '',
    timeline: 'asap',
  });
  const [submitted, setSubmitted] = useState(false);

  const assessmentMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      triggerHaptic('success');
      setSubmitted(true);
      toast.success('Assessment scheduled successfully!');
    },
    onError: (error) => {
      triggerHaptic('error');
      toast.error('Failed to schedule assessment. Please try again.');
      console.error('Assessment form error:', error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Assessment Request
Organization: ${formData.organization}
Role: ${formData.role}
Challenge: ${formData.challenge}
Timeline: ${formData.timeline}
Phone: ${formData.phone}`;

    assessmentMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name || !formData.email) {
        triggerHaptic('error');
        toast.error('Please fill in all required fields');
        return;
      }
    }
    triggerHaptic('selection');
    setStep(step + 1);
  };

  const handleBack = () => {
    triggerHaptic('selection');
    setStep(step - 1);
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
            Assessment Scheduled!
          </h1>
          <p className="text-slate-300 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            Our team will contact you within 24 hours to confirm your free government IT assessment.
          </p>
          <div className="space-y-3">
            <Link href="/">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Back to Home
              </Button>
            </Link>
            <Link href="/methodology">
              <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                Learn About Our Process
              </Button>
            </Link>
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
          <div className="flex items-center justify-between">
            <Link href="/">
              <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm">Back</span>
              </button>
            </Link>
            <div className="text-xs text-slate-400">
              Step {step} of 2
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-slate-800/30">
        <div className="container max-w-2xl">
          <div className="h-1 bg-slate-700">
            <div
              className="h-full bg-orange-500 transition-all duration-300"
              style={{ width: `${(step / 2) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-2xl py-8 px-4">
        {/* Hero Section */}
        {step === 1 && (
          <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-orange-500" />
            </div>
            <h1 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Free IT Assessment
            </h1>
            <p className="text-lg text-slate-300">
              Discover opportunities to optimize your government IT operations
            </p>
          </div>
        )}

        {/* Value Propositions */}
        {step === 1 && (
          <div className="grid grid-cols-3 gap-3 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
              <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <DollarSign className="w-5 h-5 text-orange-500" />
              </div>
              <div className="text-xs font-medium text-white mb-1">100% Free</div>
              <div className="text-xs text-slate-400">No obligation</div>
            </div>
            <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
              <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-orange-500" />
              </div>
              <div className="text-xs font-medium text-white mb-1">Expert Team</div>
              <div className="text-xs text-slate-400">15+ years</div>
            </div>
            <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700">
              <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Building2 className="w-5 h-5 text-orange-500" />
              </div>
              <div className="text-xs font-medium text-white mb-1">Gov Focus</div>
              <div className="text-xs text-slate-400">Specialized</div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Step 1: Contact Information */}
          {step === 1 && (
            <>
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
                  Work Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@agency.gov"
                  required
                  autoComplete="email"
                  inputMode="email"
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500"
                />
              </div>

              <Button
                type="button"
                onClick={handleNext}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-base font-semibold"
              >
                Continue
              </Button>
            </>
          )}

          {/* Step 2: Organization & Challenge */}
          {step === 2 && (
            <>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Tell Us About Your Needs
                </h2>
                <p className="text-sm text-slate-300">
                  Help us prepare for your assessment
                </p>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-2">
                  Organization/Agency *
                </label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Department of..."
                  required
                  autoComplete="organization"
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Role *
                </label>
                <Input
                  id="role"
                  name="role"
                  type="text"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="CIO, IT Director, etc."
                  required
                  autoComplete="organization-title"
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-slate-300 mb-2">
                  Main Challenge *
                </label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  placeholder="What's your biggest IT challenge right now?"
                  required
                  rows={4}
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 resize-none"
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-slate-300 mb-2">
                  Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 bg-slate-800/50 border border-slate-700 rounded-md text-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                >
                  <option value="asap">As soon as possible</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 h-12"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={assessmentMutation.isPending}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white h-12 text-base font-semibold"
                >
                  {assessmentMutation.isPending ? 'Scheduling...' : 'Schedule Assessment'}
                </Button>
              </div>

              <p className="text-xs text-center text-slate-400">
                We'll contact you within 24 hours to confirm your assessment
              </p>
            </>
          )}
        </form>

        {/* Trust Indicators (Step 1 only) */}
        {step === 1 && (
          <div className="mt-8 pt-8 border-t border-slate-700">
            <div className="text-center mb-4">
              <p className="text-sm font-medium text-slate-300">Trusted by Government Agencies</p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-500 mb-1">$2.3B</div>
                <div className="text-xs text-slate-400">ROI Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500 mb-1">200+</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500 mb-1">98%</div>
                <div className="text-xs text-slate-400">Satisfaction</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
