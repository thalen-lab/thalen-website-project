import { Link } from 'wouter';
import { APP_LOGO } from '@/const';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin, Shield, Award, Building2, FileCheck, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Main Footer Grid - Improved mobile layout */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-8 mb-4 sm:mb-6 md:mb-8 sm:mb-10 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
          {/* Company Info - Full width on mobile, 2 cols on xs-md */}
          <div className="col-span-1 xs:col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-3 sm:mb-4">
              <span className="text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">Thalen Technologies, Inc</span>
            </div>
            <p className="text-xs sm:text-sm opacity-90 mb-1.5 sm:mb-2 max-w-sm font-semibold text-[#FF6B35]">
              Powering Government Mission Success
            </p>
            <p className="text-xs sm:text-sm opacity-80 mb-3 sm:mb-4 max-w-sm leading-relaxed">
              For 25 years, we've partnered with federal, state, and local agencies to deliver mission-enabling technology solutions.
            </p>
            <div className="flex space-x-2 sm:space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-signature transition-colors p-2 -ml-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-signature transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-signature transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Government Solutions */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Government Solutions</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-90">
              <li><Link href="/federal-solutions" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">Federal Government</Link></li>
              <li><Link href="/federal-solutions/state-local" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">State & Local</Link></li>
              <li><Link href="/compliance/fedramp" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">FedRAMP Compliance</Link></li>
              <li><Link href="/federal-solutions/cmmc" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">CMMC Compliance</Link></li>
              <li><Link href="/contract-vehicles" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">Contract Vehicles</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-90">
              <li><Link href="/services/automation" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">Intelligent Automation</Link></li>
              <li><Link href="/services/data-analytics" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">Data Analytics</Link></li>
              <li><Link href="/services/cloud" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">Cloud Modernization</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">Cybersecurity</Link></li>
              <li><Link href="/services/ato-support" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">ATO Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-90">
              <li><Link href="/about" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">About Us</Link></li>
              <li><Link href="/federal-solutions/past-performance" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">Past Performance</Link></li>
              <li><Link href="/case-studies" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">Case Studies</Link></li>
              <li><Link href="/insights" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-orange-signature transition-colors py-1 inline-block min-h-[32px] flex items-center">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info - Improved mobile layout */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 mb-6 sm:mb-4 sm:mb-6 md:mb-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm opacity-90">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-0.5 sm:mb-1">Phone</p>
                <p className="text-xs sm:text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-0.5 sm:mb-1">Email</p>
                <p className="text-xs sm:text-sm break-all">contact@nexdyne.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3 xs:col-span-2 md:col-span-1">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-0.5 sm:mb-1">Headquarters</p>
                <p className="text-xs sm:text-sm">Washington, DC Metro Area</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Credentials Section - Improved mobile layout */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 mb-6 sm:mb-4 sm:mb-6 md:mb-8">
          <h4 className="text-center text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6 opacity-70">
            Certifications & Credentials
          </h4>
          {/* Mobile: 2x3 grid, Tablet: 3x2, Desktop: 5x1 row */}
          <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {/* FedRAMP Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 border border-primary-foreground/20">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-accent mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm font-bold text-accent">FedRAMP</span>
              <span className="text-[10px] sm:text-xs text-primary-foreground/70">Authorized</span>
            </div>

            {/* CMMC Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 border border-primary-foreground/20">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-accent mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm font-bold text-accent">CMMC</span>
              <span className="text-[10px] sm:text-xs text-primary-foreground/70">Level 2</span>
            </div>

            {/* FISMA Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 border border-primary-foreground/20">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-accent mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm font-bold text-accent">FISMA</span>
              <span className="text-[10px] sm:text-xs text-primary-foreground/70">Compliant</span>
            </div>

            {/* Small Business Badge */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 border border-primary-foreground/20">
              <Building2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-accent mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm font-bold text-accent">SBA</span>
              <span className="text-[10px] sm:text-xs text-primary-foreground/70">Small Biz</span>
            </div>

            {/* ISO Badge - spans 2 cols on mobile to center */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 border border-primary-foreground/20 col-span-2 xs:col-span-1">
              <Award className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-accent mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm font-bold text-accent">ISO 9001</span>
              <span className="text-[10px] sm:text-xs text-primary-foreground/70">Certified</span>
            </div>
          </div>

          {/* Federal Credentials Row - Improved mobile layout */}
          <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FileCheck className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
              <span className="text-primary-foreground/70">UEI:</span>
              <span className="font-mono font-semibold text-accent text-[10px] sm:text-xs md:text-sm">XXXXXXXXX123</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FileCheck className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
              <span className="text-primary-foreground/70">CAGE:</span>
              <span className="font-mono font-semibold text-accent text-[10px] sm:text-xs md:text-sm">XXXXX</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FileCheck className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
              <span className="text-primary-foreground/70">GSA Schedule</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Improved mobile layout */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm opacity-75 gap-3 sm:gap-4">
          <p className="text-center md:text-left">© 2024 Thalen Technologies, Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            <Link href="/privacy" className="hover:text-orange-signature transition-colors py-1 min-h-[32px] flex items-center">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-signature transition-colors py-1 min-h-[32px] flex items-center">Terms of Service</Link>
            <Link href="/security" className="hover:text-orange-signature transition-colors py-1 min-h-[32px] flex items-center">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
