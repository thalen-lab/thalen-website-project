import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  
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
      if (window.innerWidth >= 1024) {
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

  // Reset submenu states when main menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setSolutionsOpen(false);
      setLearnOpen(false);
      setAboutOpen(false);
    }
  }, [mobileMenuOpen]);

  // Government Solutions column items - using correct existing routes
  const governmentSolutionsItems = [
    { name: 'Core Capabilities', href: '/core-capabilities' },
    { name: 'Federal Government', href: '/industries/federal-government' },
    { name: 'State & Local Government', href: '/federal-solutions/state-local' },
    { name: 'Defense & Intelligence', href: '/sectors/federal-government' },
    { name: 'FedRAMP Compliance', href: '/compliance/fedramp' },
    { name: 'StateRAMP/GovRAMP', href: '/compliance/stateramp' },
    { name: 'CMMC Compliance', href: '/federal-solutions/cmmc' },
    { name: 'ATO Support & Authorization', href: '/services/ato-support' },
    { name: 'Government Cloud Migration', href: '/federal-solutions/cloud-migration' },
    { name: 'Past Performance', href: '/federal-solutions/past-performance' },
    { name: 'Contract Vehicles', href: '/contract-vehicles' },
  ];

  // Services column items - using correct existing routes
  const servicesItems = [
    { name: 'Intelligent Automation & Process Opti...', href: '/services/automation' },
    { name: 'Data Analytics & Intelligence', href: '/services/data-analytics' },
    { name: 'Cloud Infrastructure & Modernization', href: '/services/cloud' },
    { name: 'Cybersecurity & Compliance', href: '/services/cybersecurity' },
    { name: 'Security & Compliance Consulting', href: '/consulting-services' },
    { name: 'ATO Support & Authorization', href: '/services/ato-support' },
    { name: 'Application Development & Integration', href: '/services/application-development' },
    { name: 'Custom Software Solutions', href: '/services/custom-software' },
    { name: 'Digital Transformation Enablement', href: '/services/digital-transformation' },
  ];

  // Industries column items - using correct existing routes
  const industriesItems = [
    { name: 'Federal Government', href: '/industries/federal-government' },
    { name: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
    { name: 'Manufacturing & Energy', href: '/industries/manufacturing' },
    { name: 'Financial Services', href: '/industries/financial-services' },
  ];

  // Learn dropdown items with descriptions - using correct existing routes
  const learnItems = [
    { name: 'Insights', description: 'Industry trends and thought leadership', href: '/insights' },
    { name: 'Resources', description: 'Guides, whitepapers, and tools', href: '/government-resources' },
    { name: 'Events', description: 'Webinars, conferences, and meetups', href: '/events' },
  ];

  // About dropdown items with descriptions - using correct existing routes
  const aboutItems = [
    { name: 'About Thalen', description: 'Get to know us better', href: '/about' },
    { name: 'Social Responsibility', description: 'How we give back', href: '/about/social-responsibility' },
    { name: 'Security & Compliance', description: 'ISO 27001, CMMC & more', href: '/about/security-compliance' },
    { name: 'News & Updates', description: 'Industry news and trends', href: '/about/news-updates' },
    { name: "Company's Latest", description: 'Updates from Thalen', href: '/about/company-latest' },
    { name: 'Careers', description: 'Join our team', href: '/careers' },
  ];

  // Close mobile menu helper
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity shrink-0">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032212491/n2sqWjWBoABpEmsxkmyy92/ThalenTechnologiesLogoDesignTransparent1_7790e9c6.png" 
              alt="Thalen Technologies" 
              className="h-8 md:h-10 lg:h-11 w-auto max-w-[220px] md:max-w-[260px] lg:max-w-[300px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {/* Main Nav Links */}
            <div className="flex items-center space-x-1 xl:space-x-2">
              {/* Solutions Mega-Menu Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleSolutionsEnter}
                onMouseLeave={handleSolutionsLeave}
              >
                <button className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium hover:text-accent transition-colors ${solutionsOpen ? 'text-accent' : 'text-primary-foreground/90'}`}>
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsOpen && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
                    onMouseEnter={handleSolutionsEnter}
                    onMouseLeave={handleSolutionsLeave}
                  >
                    <div className="bg-white text-gray-800 rounded-lg shadow-2xl border border-gray-200 p-6 min-w-[800px]">
                      <div className="grid grid-cols-3 gap-8">
                        {/* Government Solutions Column */}
                        <div>
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Government Solutions</h3>
                          <div className="space-y-1">
                            {governmentSolutionsItems.map((item) => (
                              <Link 
                                key={item.href} 
                                href={item.href}
                                className="block py-1.5 text-sm text-gray-700 hover:text-orange-signature transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Services Column */}
                        <div>
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Services</h3>
                          <div className="space-y-1">
                            {servicesItems.map((item) => (
                              <Link 
                                key={item.href + item.name} 
                                href={item.href}
                                className="block py-1.5 text-sm text-gray-700 hover:text-orange-signature transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Industries Column */}
                        <div>
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Industries</h3>
                          <div className="space-y-1">
                            {industriesItems.map((item) => (
                              <Link 
                                key={item.href} 
                                href={item.href}
                                className="block py-1.5 text-sm text-gray-700 hover:text-orange-signature transition-colors"
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
                <button className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium hover:text-accent transition-colors ${learnOpen ? 'text-accent' : 'text-primary-foreground/90'}`}>
                  <span>Learn</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${learnOpen ? 'rotate-180' : ''}`} />
                </button>
                {learnOpen && (
                  <div 
                    className="absolute left-0 top-full pt-2 z-50"
                    onMouseEnter={handleLearnEnter}
                    onMouseLeave={handleLearnLeave}
                  >
                    <div className="bg-white text-gray-800 rounded-lg shadow-2xl border border-gray-200 py-3 min-w-[280px]">
                      {learnItems.map((item) => (
                        <Link 
                          key={item.href} 
                          href={item.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="text-sm font-medium text-gray-800">{item.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
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
                <button className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium hover:text-accent transition-colors ${aboutOpen ? 'text-accent' : 'text-primary-foreground/90'}`}>
                  <span>About</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {aboutOpen && (
                  <div 
                    className="absolute left-0 top-full pt-2 z-50"
                    onMouseEnter={handleAboutEnter}
                    onMouseLeave={handleAboutLeave}
                  >
                    <div className="bg-white text-gray-800 rounded-lg shadow-2xl border border-gray-200 py-3 min-w-[280px]">
                      {aboutItems.map((item) => (
                        <Link 
                          key={item.href} 
                          href={item.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="text-sm font-medium text-gray-800">{item.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Case Studies */}
              <Link 
                href="/case-studies" 
                className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors"
              >
                Case Studies
              </Link>

              {/* Capability Statement */}
              <Link 
                href="/capability-statement" 
                className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors"
              >
                Capability Statement
              </Link>

              {/* Contact */}
              <Link 
                href="/contact" 
                className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="ml-6">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-orange-gradient hover:opacity-90 text-white font-semibold px-5 py-2.5 text-sm rounded-md transition-all shadow-md hover:shadow-lg"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-primary z-40 overflow-y-auto">
          <div className="container py-6">
            <div className="space-y-1">
              {/* Solutions Section */}
              <div>
                <button
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="flex items-center justify-between w-full py-3 text-lg font-medium text-primary-foreground border-b border-white/10"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsOpen && (
                  <div className="py-4 pl-4 space-y-4">
                    {/* Government Solutions */}
                    <div>
                      <h4 className="text-xs font-semibold text-primary-foreground/50 uppercase tracking-wider mb-2">Government Solutions</h4>
                      <div className="space-y-1">
                        {governmentSolutionsItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="block py-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Services */}
                    <div>
                      <h4 className="text-xs font-semibold text-primary-foreground/50 uppercase tracking-wider mb-2">Services</h4>
                      <div className="space-y-1">
                        {servicesItems.map((item) => (
                          <Link
                            key={item.href + item.name}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="block py-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Industries */}
                    <div>
                      <h4 className="text-xs font-semibold text-primary-foreground/50 uppercase tracking-wider mb-2">Industries</h4>
                      <div className="space-y-1">
                        {industriesItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="block py-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Learn Section */}
              <div>
                <button
                  onClick={() => setLearnOpen(!learnOpen)}
                  className="flex items-center justify-between w-full py-3 text-lg font-medium text-primary-foreground border-b border-white/10"
                >
                  <span>Learn</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${learnOpen ? 'rotate-180' : ''}`} />
                </button>
                {learnOpen && (
                  <div className="py-2 pl-4 space-y-1">
                    {learnItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block py-2.5"
                      >
                        <div className="text-base text-primary-foreground hover:text-accent transition-colors">{item.name}</div>
                        <div className="text-xs text-primary-foreground/50">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About Section */}
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center justify-between w-full py-3 text-lg font-medium text-primary-foreground border-b border-white/10"
                >
                  <span>About</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {aboutOpen && (
                  <div className="py-2 pl-4 space-y-1">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block py-2.5"
                      >
                        <div className="text-base text-primary-foreground hover:text-accent transition-colors">{item.name}</div>
                        <div className="text-xs text-primary-foreground/50">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Case Studies */}
              <Link
                href="/case-studies"
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium text-primary-foreground border-b border-white/10"
              >
                Case Studies
              </Link>

              {/* Capability Statement */}
              <Link
                href="/capability-statement"
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium text-primary-foreground border-b border-white/10"
              >
                Capability Statement
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium text-primary-foreground border-b border-white/10"
              >
                Contact
              </Link>

              {/* CTA Button */}
              <div className="pt-6">
                <Link 
                  href="/contact" 
                  onClick={closeMobileMenu}
                  className="block w-full text-center bg-orange-gradient hover:opacity-90 text-white font-semibold py-3 text-base rounded-md transition-all shadow-md hover:shadow-lg"
                >
                  Schedule Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
