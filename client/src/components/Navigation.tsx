import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';


export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [governmentSolutionsOpen, setGovernmentSolutionsOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const services = [
    { name: 'Intelligent Automation & Process Optimization', href: '/services/automation' },
    { name: 'Data Analytics & Intelligence', href: '/services/data-analytics' },
    { name: 'Cloud Infrastructure & Modernization', href: '/services/cloud' },
    { name: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
    { name: 'Security & Compliance Consulting', href: '/consulting-services' },
    { name: 'ATO Support & Authorization', href: '/services/ato-support' },
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

  const governmentSolutions = [
    { name: 'Core Capabilities', href: '/core-capabilities' },
    { name: 'Federal Government', href: '/federal-solutions' },
    { name: 'State & Local Government', href: '/federal-solutions/state-local' },
    { name: 'Defense & Intelligence', href: '/industries/federal-government' },
    { name: 'FedRAMP Compliance', href: '/compliance/fedramp' },
    { name: 'StateRAMP/GovRAMP', href: '/compliance/stateramp' },
    { name: 'CMMC Compliance', href: '/federal-solutions/cmmc' },
    { name: 'ATO Support & Authorization', href: '/services/ato-support' },
    { name: 'Government Cloud Migration', href: '/federal-solutions/cloud-migration' },
    { name: 'Past Performance', href: '/federal-solutions/past-performance' },
    { name: 'Contract Vehicles', href: '/contract-vehicles' },
  ];

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg safe-area-inset">
      <div className="container">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity shrink-0">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold">
              <span className="hidden md:inline">Thalen Technologies, Inc</span>
              <span className="md:hidden">Thalen</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-5 2xl:space-x-6">
            {/* Government Solutions Dropdown - First for GovTech focus */}
            <div 
              className="relative"
              onMouseEnter={() => setGovernmentSolutionsOpen(true)}
              onMouseLeave={() => setGovernmentSolutionsOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-orange-signature transition-colors py-2">
                <span>Government Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {governmentSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-card text-card-foreground rounded-lg shadow-xl border border-border py-2">
                  {governmentSolutions.map((solution) => (
                    <Link 
                      key={solution.href} 
                      href={solution.href}
                      className="block px-4 py-3 hover:bg-orange-signature/10 hover:text-orange-signature transition-colors"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-orange-signature transition-colors py-2">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-card text-card-foreground rounded-lg shadow-xl border border-border py-2">
                  {services.map((service) => (
                    <Link 
                      key={service.href} 
                      href={service.href}
                      className="block px-4 py-3 hover:bg-orange-signature/10 hover:text-orange-signature transition-colors"
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
              <button className="flex items-center space-x-1 hover:text-orange-signature transition-colors py-2">
                <span>Industries</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card text-card-foreground rounded-lg shadow-xl border border-border py-2">
                  {industries.map((industry) => (
                    <Link 
                      key={industry.href} 
                      href={industry.href}
                      className="block px-4 py-3 hover:bg-orange-signature/10 hover:text-orange-signature transition-colors"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/insights" className="hover:text-orange-signature transition-colors py-2">
              Insights
            </Link>
            <Link href="/case-studies" className="hover:text-orange-signature transition-colors py-2">
              Case Studies
            </Link>
            <Link href="/government-resources" className="hover:text-orange-signature transition-colors py-2">
              Resources
            </Link>
            <Link href="/events" className="hover:text-orange-signature transition-colors py-2">
              Events
            </Link>
            <Link href="/about" className="hover:text-orange-signature transition-colors py-2">
              About
            </Link>
            <Link href="/contact" className="hover:text-orange-signature transition-colors py-2">
              Contact
            </Link>
            
            <Button asChild className="bg-orange-gradient hover:opacity-90 transition-opacity">
              <Link href="/contact">Schedule Assessment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-3 min-h-[48px] min-w-[48px] flex items-center justify-center -mr-3 touch-feedback"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-0 top-16 sm:top-20 bg-primary z-40 overflow-y-auto overscroll-contain">
            <div className="container py-6 pb-24 space-y-2">
              {/* Government Solutions Accordion - First for GovTech focus */}
              <div className="border-b border-primary-foreground/20">
                <button 
                  className="flex items-center justify-between w-full py-4 min-h-[52px] font-medium text-lg touch-feedback"
                  onClick={() => setGovernmentSolutionsOpen(!governmentSolutionsOpen)}
                >
                  <span>Government Solutions</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${governmentSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {governmentSolutionsOpen && (
                  <div className="pb-4 space-y-1">
                    {governmentSolutions.map((solution) => (
                      <Link 
                        key={solution.href} 
                        href={solution.href}
                        className="block py-3 px-4 min-h-[48px] text-base text-primary-foreground/90 hover:text-orange-signature hover:bg-primary-foreground/5 rounded-lg flex items-center touch-feedback"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Accordion */}
              <div className="border-b border-primary-foreground/20">
                <button 
                  className="flex items-center justify-between w-full py-4 min-h-[52px] font-medium text-lg touch-feedback"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pb-4 space-y-1">
                    {services.map((service) => (
                      <Link 
                        key={service.href} 
                        href={service.href}
                        className="block py-3 px-4 min-h-[48px] text-base text-primary-foreground/90 hover:text-orange-signature hover:bg-primary-foreground/5 rounded-lg flex items-center touch-feedback"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries Accordion */}
              <div className="border-b border-primary-foreground/20">
                <button 
                  className="flex items-center justify-between w-full py-4 min-h-[52px] font-medium text-lg touch-feedback"
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                >
                  <span>Industries</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} />
                </button>
                {industriesOpen && (
                  <div className="pb-4 space-y-1">
                    {industries.map((industry) => (
                      <Link 
                        key={industry.href} 
                        href={industry.href}
                        className="block py-3 px-4 min-h-[48px] text-base text-primary-foreground/90 hover:text-orange-signature hover:bg-primary-foreground/5 rounded-lg flex items-center touch-feedback"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <Link 
                href="/insights" 
                className="block py-4 min-h-[52px] font-medium text-lg border-b border-primary-foreground/20 flex items-center touch-feedback"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insights
              </Link>
              <Link 
                href="/case-studies" 
                className="block py-4 min-h-[52px] font-medium text-lg border-b border-primary-foreground/20 flex items-center touch-feedback"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                href="/government-resources" 
                className="block py-4 min-h-[52px] font-medium text-lg border-b border-primary-foreground/20 flex items-center touch-feedback"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/events" 
                className="block py-4 min-h-[52px] font-medium text-lg border-b border-primary-foreground/20 flex items-center touch-feedback"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="/about" 
                className="block py-4 min-h-[52px] font-medium text-lg border-b border-primary-foreground/20 flex items-center touch-feedback"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block py-4 min-h-[52px] font-medium text-lg border-b border-primary-foreground/20 flex items-center touch-feedback"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* CTA Button */}
              <div className="pt-6">
                <Button asChild className="w-full bg-orange-gradient hover:opacity-90 transition-opacity min-h-[52px] text-lg">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Schedule Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
