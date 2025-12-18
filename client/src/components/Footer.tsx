import { Link } from 'wouter';
import { APP_LOGO } from '@/const';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin, Shield, Award, Building2, FileCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={APP_LOGO} alt="Thalen Technologies" className="h-16" />
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

        {/* Certifications & Credentials Section */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
            {/* Small Business Certification Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-primary-foreground/20">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-8 w-8 text-accent" />
                <span className="text-lg font-bold text-accent">SBA</span>
              </div>
              <span className="text-xs text-primary-foreground/80">U.S. Small Business</span>
              <span className="text-xs text-primary-foreground/80 mb-2">Administration</span>
              <div className="bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-semibold">
                SMALL BUSINESS CERTIFIED
              </div>
            </div>

            {/* ISO 9001:2015 Certification Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-primary-foreground/20 min-w-[280px]">
              <div className="text-center mb-2">
                <span className="text-xl font-bold text-accent">ISO 9001:2015</span>
              </div>
              <span className="text-sm font-semibold text-primary-foreground mb-1">CERTIFIED COMPANY</span>
              <div className="flex items-center gap-2 mt-1">
                <Award className="h-5 w-5 text-primary-foreground/70" />
                <span className="text-xs text-primary-foreground/70">Quality Management System</span>
              </div>
            </div>

            {/* UEI & CAGE Code Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-primary-foreground/20">
              <div className="flex items-center gap-2 mb-3">
                <FileCheck className="h-6 w-6 text-accent" />
                <span className="text-sm font-semibold text-primary-foreground">Federal Credentials</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="text-xs text-primary-foreground/70 block">UEI</span>
                  <span className="text-sm font-mono font-semibold text-accent">XXXXXXXXX123</span>
                </div>
                <div>
                  <span className="text-xs text-primary-foreground/70 block">CAGE Code</span>
                  <span className="text-sm font-mono font-semibold text-accent">XXXXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>© 2024 Thalen Technologies. All rights reserved.</p>
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
