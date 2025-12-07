import { Link } from 'wouter';
import { APP_LOGO } from '@/const';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={APP_LOGO} alt="Incentro" className="h-16" />
            </div>
            <p className="text-sm opacity-90 mb-4 max-w-sm">
              Govern Smart. The Automation Strategy Authority for government and enterprise.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/services/automation" className="hover:text-accent transition-colors">Automation Strategy</Link></li>
              <li><Link href="/services/analytics" className="hover:text-accent transition-colors">Data Analytics</Link></li>
              <li><Link href="/services/cloud" className="hover:text-accent transition-colors">Cloud Modernization</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-accent transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Industries</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/industries/federal-government" className="hover:text-accent transition-colors">Federal Government</Link></li>
              <li><Link href="/industries/healthcare" className="hover:text-accent transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/manufacturing" className="hover:text-accent transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/financial" className="hover:text-accent transition-colors">Financial Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/insights" className="hover:text-accent transition-colors">Insights</Link></li>
              <li><Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm opacity-90">
            <div className="flex items-start space-x-3">
              <Phone className="h-6 w-6 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="h-6 w-6 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Email</p>
                <p>contact@thalen.tech</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Headquarters</p>
                <p>Washington, DC Metro Area</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>© 2024 Incentro. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="/security" className="hover:text-accent transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
