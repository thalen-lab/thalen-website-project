import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  
  // Refs for timeout delays to prevent menu from closing too quickly
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
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
      setAboutOpen(false);
    }
  }, [mobileMenuOpen]);

  // Solutions dropdown items
  const solutionsItems = [
    { name: 'Intelligent Automation', href: '/services/automation' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Cloud Modernization', href: '/services/cloud' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'ATO Support', href: '/services/ato-support' },
    { name: 'Application Development', href: '/services/application-development' },
    { name: 'Custom Software', href: '/services/custom-software' },
    { name: 'Digital Transformation', href: '/services/digital-transformation' },
  ];

  // About dropdown items
  const aboutItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'News & Updates', href: '/about/news-updates' },
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
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity shrink-0">
            <span className="text-lg md:text-xl lg:text-2xl font-bold">
              <span className="hidden sm:inline">Thalen Technologies, Inc</span>
              <span className="sm:hidden">Thalen</span>
            </span>
          </Link>

          {/* Desktop Navigation - NEOGOV Style */}
          <div className="hidden lg:flex items-center">
            {/* Main Nav Links */}
            <div className="flex items-center space-x-1 xl:space-x-2">
              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleSolutionsEnter}
                onMouseLeave={handleSolutionsLeave}
              >
                <button className="flex items-center space-x-1 px-4 py-2 text-sm font-medium uppercase tracking-wide hover:text-orange-signature transition-colors">
                  <span>Solutions</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {solutionsOpen && (
                  <div 
                    className="absolute left-0 top-full pt-2 z-50"
                    onMouseEnter={handleSolutionsEnter}
                    onMouseLeave={handleSolutionsLeave}
                  >
                    <div className="bg-card text-card-foreground rounded-lg shadow-xl border border-border py-2 min-w-[280px]">
                      {solutionsItems.map((item) => (
                        <Link 
                          key={item.href} 
                          href={item.href}
                          className="block px-4 py-2.5 text-sm hover:bg-orange-signature/10 hover:text-orange-signature transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Resources */}
              <Link 
                href="/government-resources" 
                className="px-4 py-2 text-sm font-medium uppercase tracking-wide hover:text-orange-signature transition-colors"
              >
                Resources
              </Link>

              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleAboutEnter}
                onMouseLeave={handleAboutLeave}
              >
                <button className="flex items-center space-x-1 px-4 py-2 text-sm font-medium uppercase tracking-wide hover:text-orange-signature transition-colors">
                  <span>About</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {aboutOpen && (
                  <div 
                    className="absolute left-0 top-full pt-2 z-50"
                    onMouseEnter={handleAboutEnter}
                    onMouseLeave={handleAboutLeave}
                  >
                    <div className="bg-card text-card-foreground rounded-lg shadow-xl border border-border py-2 min-w-[200px]">
                      {aboutItems.map((item) => (
                        <Link 
                          key={item.href} 
                          href={item.href}
                          className="block px-4 py-2.5 text-sm hover:bg-orange-signature/10 hover:text-orange-signature transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Case Studies */}
              <Link 
                href="/case-studies" 
                className="px-4 py-2 text-sm font-medium uppercase tracking-wide hover:text-orange-signature transition-colors"
              >
                Case Studies
              </Link>

              {/* Capability Statement */}
              <Link 
                href="/capability-statement" 
                className="px-4 py-2 text-sm font-medium uppercase tracking-wide hover:text-orange-signature transition-colors"
              >
                Capability Statement
              </Link>

              {/* Contact */}
              <Link 
                href="/contact" 
                className="px-4 py-2 text-sm font-medium uppercase tracking-wide hover:text-orange-signature transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="ml-6">
              <Link href="/schedule-assessment">
                <Button className="bg-orange-signature hover:bg-orange-signature/90 text-white font-semibold px-5 py-2 text-sm uppercase tracking-wide">
                  Schedule Assessment
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                  className="flex items-center justify-between w-full py-3 text-lg font-medium border-b border-primary-foreground/20"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsOpen && (
                  <div className="py-2 pl-4 space-y-1">
                    {solutionsItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block py-2.5 text-base text-primary-foreground/80 hover:text-orange-signature transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources */}
              <Link
                href="/government-resources"
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium border-b border-primary-foreground/20"
              >
                Resources
              </Link>

              {/* About Section */}
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center justify-between w-full py-3 text-lg font-medium border-b border-primary-foreground/20"
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
                        className="block py-2.5 text-base text-primary-foreground/80 hover:text-orange-signature transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Case Studies */}
              <Link
                href="/case-studies"
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium border-b border-primary-foreground/20"
              >
                Case Studies
              </Link>

              {/* Capability Statement */}
              <Link
                href="/capability-statement"
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium border-b border-primary-foreground/20"
              >
                Capability Statement
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium border-b border-primary-foreground/20"
              >
                Contact
              </Link>

              {/* CTA Button */}
              <div className="pt-6">
                <Link href="/schedule-assessment" onClick={closeMobileMenu}>
                  <Button className="w-full bg-orange-signature hover:bg-orange-signature/90 text-white font-semibold py-3 text-base">
                    Schedule Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
