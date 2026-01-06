import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';


export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  
  // Mobile submenu states for nested navigation
  const [mobileGovSolutionsOpen, setMobileGovSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  
  // Refs for timeout delays to prevent menu from closing too quickly
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const learnTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
      if (learnTimeoutRef.current) clearTimeout(learnTimeoutRef.current);
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    };
  }, []);
  
  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setSolutionsOpen(true);
  };
  
  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };
  
  const handleLearnEnter = () => {
    if (learnTimeoutRef.current) clearTimeout(learnTimeoutRef.current);
    setLearnOpen(true);
  };
  
  const handleLearnLeave = () => {
    learnTimeoutRef.current = setTimeout(() => {
      setLearnOpen(false);
    }, 150);
  };
  
  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutOpen(true);
  };
  
  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutOpen(false);
    }, 150);
  };

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

  // Reset mobile submenu states when main menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setSolutionsOpen(false);
      setLearnOpen(false);
      setAboutOpen(false);
      setMobileGovSolutionsOpen(false);
      setMobileServicesOpen(false);
      setMobileIndustriesOpen(false);
    }
  }, [mobileMenuOpen]);

  // Solutions dropdown - nests Government Solutions, Services, Industries
  const solutionsItems = {
    governmentSolutions: {
      title: 'Government Solutions',
      items: [
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
      ]
    },
    services: {
      title: 'Services',
      items: [
        { name: 'Intelligent Automation & Process Optimization', href: '/services/automation' },
        { name: 'Data Analytics & Intelligence', href: '/services/data-analytics' },
        { name: 'Cloud Infrastructure & Modernization', href: '/services/cloud' },
        { name: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
        { name: 'Security & Compliance Consulting', href: '/consulting-services' },
        { name: 'ATO Support & Authorization', href: '/services/ato-support' },
        { name: 'Application Development & Integration', href: '/services/application-development' },
        { name: 'Custom Software Solutions', href: '/services/custom-software' },
        { name: 'Digital Transformation Enablement', href: '/services/digital-transformation' },
      ]
    },
    industries: {
      title: 'Industries',
      items: [
        { name: 'Federal Government', href: '/industries/federal-government' },
        { name: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
        { name: 'Manufacturing & Energy', href: '/industries/manufacturing' },
        { name: 'Financial Services', href: '/industries/financial' },
      ]
    }
  };

  // Learn dropdown - nests Insights, Resources, Events
  const learnItems = [
    { name: 'Insights', href: '/insights', description: 'Industry trends and thought leadership' },
    { name: 'Resources', href: '/government-resources', description: 'Guides, whitepapers, and tools' },
    { name: 'Events', href: '/events', description: 'Webinars, conferences, and meetups' },
  ];

  // About dropdown - nests About Thalen, Social Responsibility, Security & Compliance, News & Updates, Company's Latest, Careers
  const aboutItems = [
    { name: 'About Thalen', href: '/about', description: 'Get to know us better' },
    { name: 'Social Responsibility', href: '/about/social-responsibility', description: 'How we give back' },
    { name: 'Security & Compliance', href: '/about/security-compliance', description: 'ISO 27001, CMMC & more' },
    { name: 'News & Updates', href: '/about/news-updates', description: 'Industry news and trends' },
    { name: "Company's Latest", href: '/about/company-latest', description: 'Updates from Thalen' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
  ];

  // Close mobile menu helper
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg safe-area-inset">
      <div className="container">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity shrink-0">
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              <span className="hidden sm:inline">Thalen Technologies, Inc</span>
              <span className="sm:hidden">Thalen</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-5 2xl:space-x-6">
            {/* Solutions Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleSolutionsEnter}
              onMouseLeave={handleSolutionsLeave}
            >
              <button className="flex items-center space-x-1 hover:text-orange-signature transition-colors py-2">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {solutionsOpen && (
                <div 
                  className="fixed left-1/2 -translate-x-1/2 top-16 sm:top-20 lg:top-24 pt-2 z-50 w-[95vw] max-w-5xl"
                  onMouseEnter={handleSolutionsEnter}
                  onMouseLeave={handleSolutionsLeave}
                >
                <div className="bg-card text-card-foreground rounded-lg shadow-xl border border-border p-3 sm:p-4 md:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Government Solutions Column */}
                    <div>
                      <h3 className="font-semibold text-orange-signature mb-3 text-sm uppercase tracking-wide">
                        {solutionsItems.governmentSolutions.title}
                      </h3>
                      <div className="space-y-1">
                        {solutionsItems.governmentSolutions.items.map((item) => (
                          <Link 
                            key={item.href} 
                            href={item.href}
                            className="block px-2 py-1.5 text-sm hover:bg-orange-signature/10 hover:text-orange-signature transition-colors rounded truncate"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Services Column */}
                    <div className="border-l border-border pl-6">
                      <h3 className="font-semibold text-orange-signature mb-3 text-sm uppercase tracking-wide">
                        {solutionsItems.services.title}
                      </h3>
                      <div className="space-y-1">
                        {solutionsItems.services.items.map((item) => (
                          <Link 
                            key={item.href} 
                            href={item.href}
                            className="block px-2 py-1.5 text-sm hover:bg-orange-signature/10 hover:text-orange-signature transition-colors rounded truncate"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Industries Column */}
                    <div className="border-l border-border pl-6">
                      <h3 className="font-semibold text-orange-signature mb-3 text-sm uppercase tracking-wide">
                        {solutionsItems.industries.title}
                      </h3>
                      <div className="space-y-1">
                        {solutionsItems.industries.items.map((item) => (
                          <Link 
                            key={item.href} 
                            href={item.href}
                            className="block px-2 py-1.5 text-sm hover:bg-orange-signature/10 hover:text-orange-signature transition-colors rounded truncate"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              )}
            </div>

            {/* Learn Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleLearnEnter}
              onMouseLeave={handleLearnLeave}
            >
              <button className="flex items-center space-x-1 hover:text-orange-signature transition-colors py-2">
                <span>Learn</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {learnOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-72 z-50"
                  onMouseEnter={handleLearnEnter}
                  onMouseLeave={handleLearnLeave}
                >
                <div className="bg-card text-card-foreground rounded-lg shadow-xl border border-border py-2">
                  {learnItems.map((item) => (
                    <Link 
                      key={item.href} 
                      href={item.href}
                      className="block px-4 py-3 hover:bg-orange-signature/10 hover:text-orange-signature transition-colors"
                    >
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </Link>
                  ))}
                </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button className="flex items-center space-x-1 hover:text-orange-signature transition-colors py-2">
                <span>About</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {aboutOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-72 z-50"
                  onMouseEnter={handleAboutEnter}
                  onMouseLeave={handleAboutLeave}
                >
                <div className="bg-card text-card-foreground rounded-lg shadow-xl border border-border py-2">
                  {aboutItems.map((item) => (
                    <Link 
                      key={item.href} 
                      href={item.href}
                      className="block px-4 py-3 hover:bg-orange-signature/10 hover:text-orange-signature transition-colors"
                    >
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </Link>
                  ))}
                </div>
                </div>
              )}
            </div>

            {/* Standalone Links */}
            <Link href="/case-studies" className="hover:text-orange-signature transition-colors py-2">
              Case Studies
            </Link>
            <Link href="/capability-statement" className="hover:text-orange-signature transition-colors py-2">
              Capability Statement
            </Link>
            <Link href="/contact" className="hover:text-orange-signature transition-colors py-2">
              Contact
            </Link>
            
            <Button asChild className="bg-orange-gradient hover:opacity-90 transition-opacity">
              <Link href="/contact">Schedule Assessment</Link>
            </Button>
          </div>

          {/* Mobile menu button - Enhanced touch target */}
          <button
            className="xl:hidden p-2 sm:p-3 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2 sm:-mr-3 touch-feedback active:scale-95 transition-transform"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 sm:h-7 sm:w-7" /> : <Menu className="h-6 w-6 sm:h-7 sm:w-7" />}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay with improved scrolling */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-0 top-14 sm:top-16 md:top-20 bg-primary z-40 overflow-y-auto overscroll-contain -webkit-overflow-scrolling-touch">
            <div className="container py-4 sm:py-6 pb-24 space-y-1 sm:space-y-2">
              {/* Solutions Accordion with nested submenus */}
              <div className="border-b border-primary-foreground/20">
                <button 
                  className="flex items-center justify-between w-full py-3 sm:py-4 min-h-[48px] sm:min-h-[52px] font-medium text-base sm:text-lg touch-feedback active:bg-primary-foreground/5 rounded-lg transition-colors"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsOpen && (
                  <div className="pb-3 sm:pb-4 space-y-2 sm:space-y-3">
                    {/* Government Solutions - Collapsible */}
                    <div className="ml-2 sm:ml-4">
                      <button 
                        className="flex items-center justify-between w-full py-2 sm:py-2.5 px-3 sm:px-4 min-h-[44px] text-sm font-semibold text-orange-signature uppercase tracking-wide touch-feedback active:bg-primary-foreground/5 rounded-lg"
                        onClick={() => setMobileGovSolutionsOpen(!mobileGovSolutionsOpen)}
                      >
                        <span>{solutionsItems.governmentSolutions.title}</span>
                        <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${mobileGovSolutionsOpen ? 'rotate-90' : ''}`} />
                      </button>
                      {mobileGovSolutionsOpen && (
                        <div className="mt-1 space-y-0.5">
                          {solutionsItems.governmentSolutions.items.map((item) => (
                            <Link 
                              key={item.href} 
                              href={item.href}
                              className="block py-2.5 sm:py-3 px-4 sm:px-6 min-h-[44px] text-sm sm:text-base text-primary-foreground/90 hover:text-orange-signature active:bg-primary-foreground/5 rounded-lg flex items-center touch-feedback transition-colors"
                              onClick={closeMobileMenu}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Services - Collapsible */}
                    <div className="ml-2 sm:ml-4">
                      <button 
                        className="flex items-center justify-between w-full py-2 sm:py-2.5 px-3 sm:px-4 min-h-[44px] text-sm font-semibold text-orange-signature uppercase tracking-wide touch-feedback active:bg-primary-foreground/5 rounded-lg"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      >
                        <span>{solutionsItems.services.title}</span>
                        <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-90' : ''}`} />
                      </button>
                      {mobileServicesOpen && (
                        <div className="mt-1 space-y-0.5">
                          {solutionsItems.services.items.map((item) => (
                            <Link 
                              key={item.href} 
                              href={item.href}
                              className="block py-2.5 sm:py-3 px-4 sm:px-6 min-h-[44px] text-sm sm:text-base text-primary-foreground/90 hover:text-orange-signature active:bg-primary-foreground/5 rounded-lg flex items-center touch-feedback transition-colors"
                              onClick={closeMobileMenu}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Industries - Collapsible */}
                    <div className="ml-2 sm:ml-4">
                      <button 
                        className="flex items-center justify-between w-full py-2 sm:py-2.5 px-3 sm:px-4 min-h-[44px] text-sm font-semibold text-orange-signature uppercase tracking-wide touch-feedback active:bg-primary-foreground/5 rounded-lg"
                        onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                      >
                        <span>{solutionsItems.industries.title}</span>
                        <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${mobileIndustriesOpen ? 'rotate-90' : ''}`} />
                      </button>
                      {mobileIndustriesOpen && (
                        <div className="mt-1 space-y-0.5">
                          {solutionsItems.industries.items.map((item) => (
                            <Link 
                              key={item.href} 
                              href={item.href}
                              className="block py-2.5 sm:py-3 px-4 sm:px-6 min-h-[44px] text-sm sm:text-base text-primary-foreground/90 hover:text-orange-signature active:bg-primary-foreground/5 rounded-lg flex items-center touch-feedback transition-colors"
                              onClick={closeMobileMenu}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Learn Accordion */}
              <div className="border-b border-primary-foreground/20">
                <button 
                  className="flex items-center justify-between w-full py-3 sm:py-4 min-h-[48px] sm:min-h-[52px] font-medium text-base sm:text-lg touch-feedback active:bg-primary-foreground/5 rounded-lg transition-colors"
                  onClick={() => setLearnOpen(!learnOpen)}
                >
                  <span>Learn</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${learnOpen ? 'rotate-180' : ''}`} />
                </button>
                {learnOpen && (
                  <div className="pb-3 sm:pb-4 space-y-0.5 sm:space-y-1">
                    {learnItems.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href}
                        className="block py-2.5 sm:py-3 px-3 sm:px-4 min-h-[44px] text-primary-foreground/90 hover:text-orange-signature active:bg-primary-foreground/5 rounded-lg touch-feedback transition-colors"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-medium text-sm sm:text-base">{item.name}</div>
                        <div className="text-xs sm:text-sm text-primary-foreground/60">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About Accordion */}
              <div className="border-b border-primary-foreground/20">
                <button 
                  className="flex items-center justify-between w-full py-3 sm:py-4 min-h-[48px] sm:min-h-[52px] font-medium text-base sm:text-lg touch-feedback active:bg-primary-foreground/5 rounded-lg transition-colors"
                  onClick={() => setAboutOpen(!aboutOpen)}
                >
                  <span>About</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {aboutOpen && (
                  <div className="pb-3 sm:pb-4 space-y-0.5 sm:space-y-1">
                    {aboutItems.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href}
                        className="block py-2.5 sm:py-3 px-3 sm:px-4 min-h-[44px] text-primary-foreground/90 hover:text-orange-signature active:bg-primary-foreground/5 rounded-lg touch-feedback transition-colors"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-medium text-sm sm:text-base">{item.name}</div>
                        <div className="text-xs sm:text-sm text-primary-foreground/60">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Standalone Links */}
              <Link 
                href="/case-studies" 
                className="block py-3 sm:py-4 min-h-[48px] sm:min-h-[52px] font-medium text-base sm:text-lg border-b border-primary-foreground/20 flex items-center touch-feedback active:bg-primary-foreground/5 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Case Studies
              </Link>
              <Link 
                href="/capability-statement" 
                className="block py-3 sm:py-4 min-h-[48px] sm:min-h-[52px] font-medium text-base sm:text-lg border-b border-primary-foreground/20 flex items-center touch-feedback active:bg-primary-foreground/5 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Capability Statement
              </Link>
              <Link 
                href="/contact" 
                className="block py-3 sm:py-4 min-h-[48px] sm:min-h-[52px] font-medium text-base sm:text-lg border-b border-primary-foreground/20 flex items-center touch-feedback active:bg-primary-foreground/5 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>

              {/* CTA Button */}
              <div className="pt-4 sm:pt-6">
                <Button asChild className="w-full bg-orange-gradient hover:opacity-90 transition-opacity min-h-[48px] sm:min-h-[52px] text-base sm:text-lg">
                  <Link href="/contact" onClick={closeMobileMenu}>
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
