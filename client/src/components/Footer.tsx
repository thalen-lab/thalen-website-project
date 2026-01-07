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
    <footer className="bg-[#f5f5f0] text-gray-800">
      {/* Also of Interest Section */}
      <div className="border-b border-gray-300">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="font-bold text-sm uppercase tracking-wide text-gray-700 whitespace-nowrap">
              Also of Interest
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
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
      <div className="border-b border-gray-300">
        <div className="container py-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Newsletter Form */}
            <div className="flex-1 max-w-2xl">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Sign Up for Thalen Updates</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 bg-white border-gray-300 text-gray-800 placeholder:text-gray-500"
                  required
                />
                <Button 
                  type="submit" 
                  className="h-12 px-8 bg-[#0A2540] hover:bg-[#12344D] text-white font-semibold"
                >
                  Submit
                </Button>
              </form>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                className="h-12 px-6 border-gray-400 text-gray-700 hover:bg-gray-100 bg-white"
                onClick={() => toast.info('Sign In feature coming soon')}
              >
                Sign In
              </Button>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="h-12 px-6 border-gray-400 text-gray-700 hover:bg-gray-100 bg-white"
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
            <h4 className="font-bold text-base mb-4 text-gray-900">Challenges</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Why Thalen?
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Cloud Modernization
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/data-analytics" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/compliance/fedramp" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="col-span-2">
            <h4 className="font-bold text-base mb-4 text-gray-900">Solutions</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              <div className="space-y-3">
                <div>
                  <Link href="/services/automation" className="font-semibold text-[#FF6B35] hover:text-[#e55a2b] transition-colors">
                    Automate
                  </Link>
                  <p className="text-gray-600 text-xs mt-0.5">Intelligent Process Automation</p>
                </div>
                <div>
                  <Link href="/services/data-analytics" className="font-semibold text-[#FF6B35] hover:text-[#e55a2b] transition-colors">
                    Analyze
                  </Link>
                  <p className="text-gray-600 text-xs mt-0.5">Data Analytics & Intelligence</p>
                </div>
                <div>
                  <Link href="/services/cloud" className="font-semibold text-[#FF6B35] hover:text-[#e55a2b] transition-colors">
                    Modernize
                  </Link>
                  <p className="text-gray-600 text-xs mt-0.5">Cloud Infrastructure</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <Link href="/services/cybersecurity" className="font-semibold text-[#FF6B35] hover:text-[#e55a2b] transition-colors">
                    Secure
                  </Link>
                  <p className="text-gray-600 text-xs mt-0.5">Cybersecurity & Compliance</p>
                </div>
                <div>
                  <Link href="/services/application-development" className="font-semibold text-[#FF6B35] hover:text-[#e55a2b] transition-colors">
                    Build
                  </Link>
                  <p className="text-gray-600 text-xs mt-0.5">Application Development</p>
                </div>
                <div>
                  <Link href="/services/digital-transformation" className="font-semibold text-[#FF6B35] hover:text-[#e55a2b] transition-colors">
                    Transform
                  </Link>
                  <p className="text-gray-600 text-xs mt-0.5">Digital Transformation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Industries / Resources Column */}
          <div>
            <h4 className="font-bold text-base mb-4 text-gray-900">Industries</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-semibold text-gray-700">Federal:</span>
                <Link href="/federal-solutions" className="text-gray-600 hover:text-[#FF6B35] transition-colors ml-1">
                  Government
                </Link>
              </li>
              <li>
                <span className="font-semibold text-gray-700">State & Local:</span>
                <Link href="/federal-solutions/state-local" className="text-gray-600 hover:text-[#FF6B35] transition-colors ml-1">
                  Agencies
                </Link>
              </li>
              <li>
                <span className="font-semibold text-gray-700">Healthcare:</span>
                <Link href="/industries/healthcare" className="text-gray-600 hover:text-[#FF6B35] transition-colors ml-1">
                  Life Sciences
                </Link>
              </li>
              <li>
                <span className="font-semibold text-gray-700">Financial:</span>
                <Link href="/industries/financial" className="text-gray-600 hover:text-[#FF6B35] transition-colors ml-1">
                  Services
                </Link>
              </li>
            </ul>

            <h4 className="font-bold text-base mt-6 mb-4 text-gray-900">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/resources" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Resource Library
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Events & Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-base mb-4 text-gray-900">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-2">
                <span className="font-semibold text-gray-800">1-800-THALEN</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-[#FF6B35] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-[#FF6B35] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-[#FF6B35] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contract Vehicles Column */}
          <div>
            <h4 className="font-bold text-base mb-4 text-gray-900">Contract Vehicles</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contract-vehicles" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  GSA Schedule
                </Link>
              </li>
              <li>
                <Link href="/contract-vehicles" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  SEWP V
                </Link>
              </li>
              <li>
                <Link href="/contract-vehicles" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  CIO-SP3
                </Link>
              </li>
              <li>
                <Link href="/compliance/fedramp" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  FedRAMP
                </Link>
              </li>
              <li>
                <Link href="/federal-solutions/cmmc" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  CMMC
                </Link>
              </li>
            </ul>

            {/* Federal Credentials */}
            <div className="mt-6 text-xs text-gray-500 space-y-1">
              <p><span className="font-semibold">UEI:</span> XXXXXXXXX123</p>
              <p><span className="font-semibold">CAGE:</span> XXXXX</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-300 mt-10 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900 mb-1">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900 mb-1">Email</p>
                <p className="text-gray-600">contact@nexdyne.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900 mb-1">Headquarters</p>
                <p className="text-gray-600">Washington, DC Metro Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 bg-[#eaeae5]">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2024 Thalen Technologies, Inc. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/privacy" className="hover:text-[#FF6B35] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#FF6B35] transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="hover:text-[#FF6B35] transition-colors">
                Security
              </Link>
              <Link href="/accessibility" className="hover:text-[#FF6B35] transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
