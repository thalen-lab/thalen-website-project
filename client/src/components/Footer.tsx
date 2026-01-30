import { Link } from 'wouter';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0A2540] text-white">
      {/* Also of Interest Section */}
      <div className="border-b border-white/10">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="font-bold text-sm uppercase tracking-wide text-white/80 whitespace-nowrap">
              Also of Interest
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              <Link href="/federal-solutions" className="hover:text-[#FF6B35] transition-colors">
                Federal Government Solutions
              </Link>
              <Link href="/services/automation" className="hover:text-[#FF6B35] transition-colors">
                Intelligent Automation Services
              </Link>
              <Link href="/case-studies" className="hover:text-[#FF6B35] transition-colors">
                Government Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="border-b border-white/10">
        <div className="container py-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Newsletter Form */}
            <div className="flex-1 max-w-2xl">
              <h3 className="font-semibold text-lg mb-4 text-white">Sign Up for Thalen Updates</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
                <Button 
                  type="submit" 
                  className="h-12 px-8 bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-semibold"
                >
                  Submit
                </Button>
              </form>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                className="h-12 px-6 border-white/30 text-white hover:bg-white/10 bg-transparent"
                onClick={() => toast.info('Sign In feature coming soon')}
              >
                Sign In
              </Button>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="h-12 px-6 border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Schedule an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Challenges Column */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Challenges</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  Why Thalen?
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  Cloud Modernization
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/data-analytics" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/compliance/fedramp" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="col-span-2">
            <h4 className="font-bold text-base mb-4 text-white">Solutions</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              <div className="space-y-3">
                <div>
                  <Link href="/services/automation" className="font-semibold text-[#FF6B35] hover:text-[#e55a2b] transition-colors">
                    Automate
                  </Link>
                  <p className="text-white/60 text-xs mt-0.5">Intelligent Process Automation</p>
                </div>
                <div>
                  <Link href="/services/data-analytics" className="font-semibold text-[#FF6B35] hover:text-[#e55a2b] transition-colors">
                    Analyze
                  </Link>
                  <p className="text-white/60 text-xs mt-0.5">Data Analytics & Intelligence</p>
                </div>
                <div>
                  <Link href="/services/cloud" className="font-semibold text-[#FF6B35] hover:text-[#e55a2b] transition-colors">
                    Modernize
                  </Link>
                  <p className="text-white/60 text-xs mt-0.5">Cloud Infrastructure</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <Link href="/services/cybersecurity" className="font-semibold text-[#FF6B35] hover:text-[#e55a2b] transition-colors">
                    Secure
                  </Link>
                  <p className="text-white/60 text-xs mt-0.5">Cybersecurity & Compliance</p>
                </div>
                <div>
                  <Link href="/services/application-development" className="font-semibold text-[#FF6B35] hover:text-[#e55a2b] transition-colors">
                    Build
                  </Link>
                  <p className="text-white/60 text-xs mt-0.5">Application Development</p>
                </div>
                <div>
                  <Link href="/services/digital-transformation" className="font-semibold text-[#FF6B35] hover:text-[#e55a2b] transition-colors">
                    Transform
                  </Link>
                  <p className="text-white/60 text-xs mt-0.5">Digital Transformation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Industries / Resources Column */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Industries</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-semibold text-white/80">Federal:</span>
                <Link href="/federal-solutions" className="text-white/70 hover:text-[#FF6B35] transition-colors ml-1">
                  Government
                </Link>
              </li>
              <li>
                <span className="font-semibold text-white/80">State & Local:</span>
                <Link href="/federal-solutions/state-local" className="text-white/70 hover:text-[#FF6B35] transition-colors ml-1">
                  Agencies
                </Link>
              </li>
              <li>
                <span className="font-semibold text-white/80">Healthcare:</span>
                <Link href="/industries/healthcare" className="text-white/70 hover:text-[#FF6B35] transition-colors ml-1">
                  Life Sciences
                </Link>
              </li>
              <li>
                <span className="font-semibold text-white/80">Financial:</span>
                <Link href="/industries/financial" className="text-white/70 hover:text-[#FF6B35] transition-colors ml-1">
                  Services
                </Link>
              </li>
            </ul>

            <h4 className="font-bold text-base mt-6 mb-4 text-white">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/resources" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  Resource Library
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  Events & Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-2">
                <span className="font-semibold text-white">1-800-THALEN</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-[#FF6B35] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-[#FF6B35] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-[#FF6B35] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contract Vehicles Column */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Contract Vehicles</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contract-vehicles" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  GSA Schedule
                </Link>
              </li>
              <li>
                <Link href="/contract-vehicles" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  SEWP V
                </Link>
              </li>
              <li>
                <Link href="/contract-vehicles" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  CIO-SP3
                </Link>
              </li>
              <li>
                <Link href="/compliance/fedramp" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  FedRAMP
                </Link>
              </li>
              <li>
                <Link href="/federal-solutions/cmmc" className="text-white/70 hover:text-[#FF6B35] transition-colors">
                  CMMC
                </Link>
              </li>
            </ul>

            {/* Federal Credentials */}
            <div className="mt-6 text-xs text-white/50 space-y-1">
              <p><span className="font-semibold">UEI:</span> XXXXXXXXX123</p>
              <p><span className="font-semibold">CAGE:</span> XXXXX</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-white/50 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-white mb-1">Phone</p>
                <p className="text-white/70">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-white/50 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-white mb-1">Email</p>
                <p className="text-white/70">contact@nexdyne.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-white/50 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-white mb-1">Headquarters</p>
                <p className="text-white/70">Washington, DC Metro Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#081c30]">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 Thalen Technologies, Inc. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/privacy" className="text-white/60 hover:text-[#FF6B35] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-[#FF6B35] transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="text-white/60 hover:text-[#FF6B35] transition-colors">
                Security
              </Link>
              <Link href="/accessibility" className="text-white/60 hover:text-[#FF6B35] transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
