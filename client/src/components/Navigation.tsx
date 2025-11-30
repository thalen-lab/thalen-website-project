import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { APP_LOGO } from '@/const';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const services = [
    { name: 'Intelligent Automation & Process Optimization', href: '/services/automation' },
    { name: 'Data Analytics & Intelligence', href: '/services/data-analytics' },
    { name: 'Cloud Infrastructure & Modernization', href: '/services/cloud' },
    { name: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
    { name: 'Application Development & Integration', href: '/services/application-development' },
    { name: 'Custom Software Solutions', href: '/services/custom-software' },
    { name: 'Digital Transformation Enablement', href: '/services/digital-transformation' },
  ];

  const industries = [
    { name: 'Federal Government', href: '/industries/federal-government' },
    { name: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
    { name: 'Manufacturing & Energy', href: '/industries/manufacturing' },
    { name: 'Financial Services', href: '/industries/financial' },
  ];

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src={APP_LOGO} alt="Incentro" className="h-20 transition-transform duration-300 hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-accent transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-card text-card-foreground rounded-lg shadow-xl border border-border py-2">
                  {services.map((service) => (
                    <Link 
                      key={service.href} 
                      href={service.href}
                      className="block px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-accent transition-colors">
                <span>Industries</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card text-card-foreground rounded-lg shadow-xl border border-border py-2">
                  {industries.map((industry) => (
                    <Link 
                      key={industry.href} 
                      href={industry.href}
                      className="block px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/insights" className="hover:text-accent transition-colors">
              Insights
            </Link>
            <Link href="/case-studies" className="hover:text-accent transition-colors">
              Case Studies
            </Link>
            <Link href="/federal-solutions" className="hover:text-accent transition-colors">
              Federal Solutions
            </Link>
            <Link href="/government-resources" className="hover:text-accent transition-colors">
              Resources
            </Link>
            <Link href="/events" className="hover:text-accent transition-colors">
              Events
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
            
            <Button asChild className="bg-orange-gradient hover:opacity-90 transition-opacity">
              <Link href="/contact">Schedule Assessment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 font-medium"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {services.map((service) => (
                    <Link 
                      key={service.href} 
                      href={service.href}
                      className="block py-2 text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button 
                className="flex items-center justify-between w-full py-2 font-medium"
                onClick={() => setIndustriesOpen(!industriesOpen)}
              >
                <span>Industries</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {industries.map((industry) => (
                    <Link 
                      key={industry.href} 
                      href={industry.href}
                      className="block py-2 text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/insights" 
              className="block py-2 font-medium hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link 
              href="/case-studies" 
              className="block py-2 font-medium hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link 
              href="/federal-solutions" 
              className="block py-2 font-medium hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Federal Solutions
            </Link>
            <Link 
              href="/government-resources" 
              className="block py-2 font-medium hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/events" 
              className="block py-2 font-medium hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/about" 
              className="block py-2 font-medium hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 font-medium hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Button asChild className="w-full bg-orange-gradient hover:opacity-90 transition-opacity mt-4">
              <Link href="/contact">Schedule Assessment</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
