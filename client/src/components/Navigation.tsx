import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';


export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

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
            {/* Solutions Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-orange-signature transition-colors py-2">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-card text-card-foreground rounded-lg shadow-xl border border-border p-6">
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
                            className="block px-2 py-2 text-sm hover:bg-orange-signature/10 hover:text-orange-signature transition-colors rounded"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Services Column */}
                    <div>
                      <h3 className="font-semibold text-orange-signature mb-3 text-sm uppercase tracking-wide">
                        {solutionsItems.services.title}
                      </h3>
                      <div className="space-y-1">
                        {solutionsItems.services.items.map((item) => (
                          <Link 
                            key={item.href} 
                            href={item.href}
                            className="block px-2 py-2 text-sm hover:bg-orange-signature/10 hover:text-orange-signature transition-colors rounded"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Industries Column */}
                    <div>
                      <h3 className="font-semibold text-orange-signature mb-3 text-sm uppercase tracking-wide">
                        {solutionsItems.industries.title}
                      </h3>
                      <div className="space-y-1">
                        {solutionsItems.industries.items.map((item) => (
                          <Link 
                            key={item.href} 
                            href={item.href}
                            className="block px-2 py-2 text-sm hover:bg-orange-signature/10 hover:text-orange-signature transition-colors rounded"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Learn Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setLearnOpen(true)}
              onMouseLeave={() => setLearnOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-orange-signature transition-colors py-2">
                <span>Learn</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {learnOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-card text-card-foreground rounded-lg shadow-xl border border-border py-2">
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
              )}
            </div>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-orange-signature transition-colors py-2">
                <span>About</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-card text-card-foreground rounded-lg shadow-xl border border-border py-2">
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
              )}
            </div>

            {/* Standalone Links */}
            <Link href="/case-studies" className="hover:text-orange-signature transition-colors py-2">
              Case Studies
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
              {/* Solutions Accordion */}
              <div className="border-b border-primary-foreground/20">
                <button 
                  className="flex items-center justify-between w-full py-4 min-h-[52px] font-medium text-lg touch-feedback"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsOpen && (
                  <div className="pb-4 space-y-4">
                    {/* Government Solutions */}
                    <div>
                      <div className="px-4 py-2 text-sm font-semibold text-orange-signature uppercase tracking-wide">
                        {solutionsItems.governmentSolutions.title}
                      </div>
                      {solutionsItems.governmentSolutions.items.map((item) => (
                        <Link 
                          key={item.href} 
                          href={item.href}
                          className="block py-3 px-6 min-h-[48px] text-base text-primary-foreground/90 hover:text-orange-signature hover:bg-primary-foreground/5 rounded-lg flex items-center touch-feedback"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    {/* Services */}
                    <div>
                      <div className="px-4 py-2 text-sm font-semibold text-orange-signature uppercase tracking-wide">
                        {solutionsItems.services.title}
                      </div>
                      {solutionsItems.services.items.map((item) => (
                        <Link 
                          key={item.href} 
                          href={item.href}
                          className="block py-3 px-6 min-h-[48px] text-base text-primary-foreground/90 hover:text-orange-signature hover:bg-primary-foreground/5 rounded-lg flex items-center touch-feedback"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    {/* Industries */}
                    <div>
                      <div className="px-4 py-2 text-sm font-semibold text-orange-signature uppercase tracking-wide">
                        {solutionsItems.industries.title}
                      </div>
                      {solutionsItems.industries.items.map((item) => (
                        <Link 
                          key={item.href} 
                          href={item.href}
                          className="block py-3 px-6 min-h-[48px] text-base text-primary-foreground/90 hover:text-orange-signature hover:bg-primary-foreground/5 rounded-lg flex items-center touch-feedback"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Learn Accordion */}
              <div className="border-b border-primary-foreground/20">
                <button 
                  className="flex items-center justify-between w-full py-4 min-h-[52px] font-medium text-lg touch-feedback"
                  onClick={() => setLearnOpen(!learnOpen)}
                >
                  <span>Learn</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${learnOpen ? 'rotate-180' : ''}`} />
                </button>
                {learnOpen && (
                  <div className="pb-4 space-y-1">
                    {learnItems.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href}
                        className="block py-3 px-4 min-h-[48px] text-base text-primary-foreground/90 hover:text-orange-signature hover:bg-primary-foreground/5 rounded-lg touch-feedback"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-primary-foreground/60">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About Accordion */}
              <div className="border-b border-primary-foreground/20">
                <button 
                  className="flex items-center justify-between w-full py-4 min-h-[52px] font-medium text-lg touch-feedback"
                  onClick={() => setAboutOpen(!aboutOpen)}
                >
                  <span>About</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {aboutOpen && (
                  <div className="pb-4 space-y-1">
                    {aboutItems.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href}
                        className="block py-3 px-4 min-h-[48px] text-base text-primary-foreground/90 hover:text-orange-signature hover:bg-primary-foreground/5 rounded-lg touch-feedback"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-primary-foreground/60">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Standalone Links */}
              <Link 
                href="/case-studies" 
                className="block py-4 min-h-[52px] font-medium text-lg border-b border-primary-foreground/20 flex items-center touch-feedback"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
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
