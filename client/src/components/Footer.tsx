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

      {/* Main Footer Grid */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thalen Technologies, Inc</h3>
            <p className="text-sm font-semibold text-[#FF6B35] mb-3">
              Powering Government Mission Success
            </p>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              For 25 years, we've partnered with federal, state, and local agencies to deliver mission-enabling technology solutions.
            </p>
            <div className="flex space-x-4">
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

          {/* Government Solutions */}
          <div>
            <h4 className="font-bold text-base mb-4 text-gray-900">Government Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/federal-solutions" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Federal Government
                </Link>
              </li>
              <li>
                <Link href="/federal-solutions/state-local" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  State & Local
                </Link>
              </li>
              <li>
                <Link href="/compliance/fedramp" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  FedRAMP Compliance
                </Link>
              </li>
              <li>
                <Link href="/federal-solutions/cmmc" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  CMMC Compliance
                </Link>
              </li>
              <li>
                <Link href="/contract-vehicles" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Contract Vehicles
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base mb-4 text-gray-900">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/automation" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Intelligent Automation
                </Link>
              </li>
              <li>
                <Link href="/services/data-analytics" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Data Analytics
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
                <Link href="/services/ato-support" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  ATO Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-base mb-4 text-gray-900">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/federal-solutions/past-performance" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Past Performance
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
