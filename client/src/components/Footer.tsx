import { Link } from 'wouter';
import { APP_LOGO } from '@/const';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin, Shield, Award, Building2, FileCheck, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-12">
          {/* Company Info - Full width on mobile */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-4">
              <span className="text-2xl md:text-3xl font-bold">Thalen Technologies, Inc</span>
            </div>
            <p className="text-sm opacity-90 mb-2 max-w-sm font-semibold text-[#FF6B35]">
              Powering Government Mission Success
            </p>
            <p className="text-sm opacity-80 mb-4 max-w-sm">
              For 25 years, we've partnered with federal, state, and local agencies to deliver mission-enabling technology solutions.
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

          {/* Government Solutions */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4">Government Solutions</h3>
            <ul className="space-y-2 md:space-y-2 text-sm opacity-90">
              <li><Link href="/federal-solutions" className="hover:text-orange-signature transition-colors py-1 inline-block">Federal Government</Link></li>
              <li><Link href="/federal-solutions/state-local" className="hover:text-orange-signature transition-colors py-1 inline-block">State & Local</Link></li>
              <li><Link href="/compliance/fedramp" className="hover:text-orange-signature transition-colors py-1 inline-block">FedRAMP Compliance</Link></li>
              <li><Link href="/federal-solutions/cmmc" className="hover:text-orange-signature transition-colors py-1 inline-block">CMMC Compliance</Link></li>
              <li><Link href="/contract-vehicles" className="hover:text-orange-signature transition-colors py-1 inline-block">Contract Vehicles</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4">Services</h3>
            <ul className="space-y-2 md:space-y-2 text-sm opacity-90">
              <li><Link href="/services/automation" className="hover:text-orange-signature transition-colors py-1 inline-block">Intelligent Automation</Link></li>
              <li><Link href="/services/data-analytics" className="hover:text-orange-signature transition-colors py-1 inline-block">Data Analytics</Link></li>
              <li><Link href="/services/cloud" className="hover:text-orange-signature transition-colors py-1 inline-block">Cloud Modernization</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-orange-signature transition-colors py-1 inline-block">Cybersecurity</Link></li>
              <li><Link href="/services/ato-support" className="hover:text-orange-signature transition-colors py-1 inline-block">ATO Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4">Company</h3>
            <ul className="space-y-2 md:space-y-2 text-sm opacity-90">
              <li><Link href="/about" className="hover:text-orange-signature transition-colors py-1 inline-block">About Us</Link></li>
              <li><Link href="/federal-solutions/past-performance" className="hover:text-orange-signature transition-colors py-1 inline-block">Past Performance</Link></li>
              <li><Link href="/case-studies" className="hover:text-orange-signature transition-colors py-1 inline-block">Case Studies</Link></li>
              <li><Link href="/insights" className="hover:text-orange-signature transition-colors py-1 inline-block">Insights</Link></li>
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
                <p>contact@nexdyne.com</p>
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
          <h4 className="text-center text-sm font-semibold uppercase tracking-wider mb-6 opacity-70">
            Certifications & Credentials
          </h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
            {/* FedRAMP Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-5 py-3 md:py-4 border border-primary-foreground/20 w-full md:w-auto max-w-[200px]">
              <Shield className="h-6 w-6 md:h-7 md:w-7 text-accent mb-2" />
              <span className="text-sm font-bold text-accent">FedRAMP</span>
              <span className="text-xs text-primary-foreground/70">Authorized</span>
            </div>

            {/* CMMC Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-5 py-3 md:py-4 border border-primary-foreground/20 w-full md:w-auto max-w-[200px]">
              <Shield className="h-6 w-6 md:h-7 md:w-7 text-accent mb-2" />
              <span className="text-sm font-bold text-accent">CMMC</span>
              <span className="text-xs text-primary-foreground/70">Level 2 Certified</span>
            </div>

            {/* FISMA Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-5 py-3 md:py-4 border border-primary-foreground/20 w-full md:w-auto max-w-[200px]">
              <CheckCircle className="h-6 w-6 md:h-7 md:w-7 text-accent mb-2" />
              <span className="text-sm font-bold text-accent">FISMA</span>
              <span className="text-xs text-primary-foreground/70">Compliant</span>
            </div>

            {/* Small Business Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-5 py-3 md:py-4 border border-primary-foreground/20 w-full md:w-auto max-w-[200px]">
              <Building2 className="h-6 w-6 md:h-7 md:w-7 text-accent mb-2" />
              <span className="text-sm font-bold text-accent">SBA</span>
              <span className="text-xs text-primary-foreground/70">Small Business</span>
            </div>

            {/* ISO Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-5 py-3 md:py-4 border border-primary-foreground/20 w-full md:w-auto max-w-[200px]">
              <Award className="h-6 w-6 md:h-7 md:w-7 text-accent mb-2" />
              <span className="text-sm font-bold text-accent">ISO 9001</span>
              <span className="text-xs text-primary-foreground/70">Certified</span>
            </div>
          </div>

          {/* Federal Credentials Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground/70">UEI:</span>
              <span className="font-mono font-semibold text-accent">XXXXXXXXX123</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground/70">CAGE:</span>
              <span className="font-mono font-semibold text-accent">XXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground/70">GSA Schedule</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75 gap-4">
          <p className="text-center md:text-left">© 2024 Thalen Technologies, Inc. All rights reserved.</p>
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
