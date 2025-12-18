import { Link } from 'wouter';
import { APP_LOGO } from '@/const';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin, Shield, Award, Building2, FileCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-12">
          {/* Company Info - Full width on mobile */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-4">
              <img src={APP_LOGO} alt="Thalen Technologies" className="h-12 md:h-16" />
            </div>
            <p className="text-sm opacity-90 mb-4 max-w-sm">
              Govern Smart. The Automation Strategy Authority for government and enterprise.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-signature transition-colors p-2 -ml-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-signature transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-signature transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4">Services</h3>
            <ul className="space-y-2 md:space-y-2 text-sm opacity-90">
              <li><Link href="/services/automation" className="hover:text-orange-signature transition-colors py-1 inline-block">Automation Strategy</Link></li>
              <li><Link href="/services/analytics" className="hover:text-orange-signature transition-colors py-1 inline-block">Data Analytics</Link></li>
              <li><Link href="/services/cloud" className="hover:text-orange-signature transition-colors py-1 inline-block">Cloud Modernization</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-orange-signature transition-colors py-1 inline-block">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4">Industries</h3>
            <ul className="space-y-2 md:space-y-2 text-sm opacity-90">
              <li><Link href="/industries/federal-government" className="hover:text-orange-signature transition-colors py-1 inline-block">Federal Government</Link></li>
              <li><Link href="/industries/healthcare" className="hover:text-orange-signature transition-colors py-1 inline-block">Healthcare</Link></li>
              <li><Link href="/industries/manufacturing" className="hover:text-orange-signature transition-colors py-1 inline-block">Manufacturing</Link></li>
              <li><Link href="/industries/financial" className="hover:text-orange-signature transition-colors py-1 inline-block">Financial Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4">Company</h3>
            <ul className="space-y-2 md:space-y-2 text-sm opacity-90">
              <li><Link href="/about" className="hover:text-orange-signature transition-colors py-1 inline-block">About Us</Link></li>
              <li><Link href="/insights" className="hover:text-orange-signature transition-colors py-1 inline-block">Insights</Link></li>
              <li><Link href="/case-studies" className="hover:text-orange-signature transition-colors py-1 inline-block">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-orange-signature transition-colors py-1 inline-block">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm opacity-90">
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 md:h-6 md:w-6 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 md:h-6 md:w-6 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Email</p>
                <p>contact@thalen.tech</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:col-span-2 md:col-span-1">
              <MapPin className="h-5 w-5 md:h-6 md:w-6 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Headquarters</p>
                <p>Washington, DC Metro Area</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Credentials Section */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10">
            {/* Small Business Certification Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3 md:py-4 border border-primary-foreground/20 w-full md:w-auto max-w-[280px]">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                <span className="text-base md:text-lg font-bold text-accent">SBA</span>
              </div>
              <span className="text-xs text-primary-foreground/80">U.S. Small Business</span>
              <span className="text-xs text-primary-foreground/80 mb-2">Administration</span>
              <div className="bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-semibold">
                SMALL BUSINESS CERTIFIED
              </div>
            </div>

            {/* ISO 9001:2015 Certification Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3 md:py-4 border border-primary-foreground/20 w-full md:w-auto md:min-w-[280px] max-w-[280px]">
              <div className="text-center mb-2">
                <span className="text-lg md:text-xl font-bold text-accent">ISO 9001:2015</span>
              </div>
              <span className="text-sm font-semibold text-primary-foreground mb-1">CERTIFIED COMPANY</span>
              <div className="flex items-center gap-2 mt-1">
                <Award className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground/70" />
                <span className="text-xs text-primary-foreground/70">Quality Management System</span>
              </div>
            </div>

            {/* UEI & CAGE Code Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3 md:py-4 border border-primary-foreground/20 w-full md:w-auto max-w-[280px]">
              <div className="flex items-center gap-2 mb-3">
                <FileCheck className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                <span className="text-sm font-semibold text-primary-foreground">Federal Credentials</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="text-xs text-primary-foreground/70 block">UEI</span>
                  <span className="text-xs md:text-sm font-mono font-semibold text-accent">XXXXXXXXX123</span>
                </div>
                <div>
                  <span className="text-xs text-primary-foreground/70 block">CAGE Code</span>
                  <span className="text-xs md:text-sm font-mono font-semibold text-accent">XXXXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75 gap-4">
          <p className="text-center md:text-left">© 2024 Thalen Technologies. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/privacy" className="hover:text-orange-signature transition-colors py-1">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-signature transition-colors py-1">Terms of Service</Link>
            <Link href="/security" className="hover:text-orange-signature transition-colors py-1">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
