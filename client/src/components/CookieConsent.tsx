import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { X, Cookie, Shield, BarChart3, Megaphone, ChevronDown, ChevronUp, Settings2 } from 'lucide-react';
import { Link } from 'wouter';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieCategory {
  id: keyof CookiePreferences;
  name: string;
  description: string;
  icon: React.ReactNode;
  required: boolean;
  details: string[];
}

const COOKIE_CONSENT_KEY = 'nexdyne_cookie_consent';
const COOKIE_PREFERENCES_KEY = 'nexdyne_cookie_preferences';

const cookieCategories: CookieCategory[] = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.',
    icon: <Shield className="w-5 h-5" />,
    required: true,
    details: [
      'Session management',
      'Security features',
      'Cookie consent preferences',
      'Form functionality'
    ]
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us understand which pages are the most and least popular and see how visitors move around the site.',
    icon: <BarChart3 className="w-5 h-5" />,
    required: false,
    details: [
      'Page view tracking',
      'User journey analysis',
      'Performance monitoring',
      'A/B testing support'
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.',
    icon: <Megaphone className="w-5 h-5" />,
    required: false,
    details: [
      'Personalized advertising',
      'Social media integration',
      'Remarketing campaigns',
      'Conversion tracking'
    ]
  }
];

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const saveConsent = useCallback((prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowPreferences(false);
  }, []);

  const handleAcceptAll = useCallback(() => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true
    });
  }, [saveConsent]);

  const handleRejectOptional = useCallback(() => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false
    });
  }, [saveConsent]);

  const handleSavePreferences = useCallback(() => {
    saveConsent(preferences);
  }, [preferences, saveConsent]);

  const togglePreference = useCallback((category: keyof CookiePreferences) => {
    if (category === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  }, []);

  const toggleCategoryDetails = useCallback((categoryId: string) => {
    setExpandedCategory(prev => prev === categoryId ? null : categoryId);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay for preferences modal */}
      {showPreferences && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300"
          onClick={() => setShowPreferences(false)}
        />
      )}

      {/* Main Banner */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-[9999] transition-transform duration-500 ease-out ${
          showPreferences ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="bg-[#0A2540] border-t border-white/10 shadow-2xl">
          <div className="container py-4 md:py-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
              {/* Cookie Icon & Text */}
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 bg-white/10 rounded-lg shrink-0 mt-0.5">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <div className="text-white/90 text-sm leading-relaxed">
                  <p className="font-medium text-white mb-1">We Value Your Privacy</p>
                  <p>
                    This site uses cookies and related technologies for site operation, analytics, and third-party advertising purposes as described in our{' '}
                    <Link href="/privacy" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">
                      Privacy Policy
                    </Link>
                    . You may choose to consent to our use of these technologies, reject non-essential technologies, or manage your preferences.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreferences(true)}
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent order-3 sm:order-1"
                >
                  <Settings2 className="w-4 h-4 mr-2" />
                  Manage Settings
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectOptional}
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent order-2"
                >
                  Reject Optional
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="bg-orange-500 hover:bg-orange-600 text-white border-0 order-1 sm:order-3"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#0A2540] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">Cookie Preferences</h2>
                  <p className="text-sm text-white/70">Manage your cookie settings</p>
                </div>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <p className="text-gray-600 text-sm mb-6">
                Please choose whether this site may use cookies or related technologies as described below. 
                You can learn more about how this site uses cookies and related technologies by reading our{' '}
                <Link href="/privacy" className="text-[#0A2540] hover:text-orange-500 underline underline-offset-2">
                  Privacy Policy
                </Link>.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4">
                {cookieCategories.map((category) => (
                  <div 
                    key={category.id}
                    className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-300"
                  >
                    {/* Category Header */}
                    <div className="p-4 bg-gray-50/50">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="p-2 bg-[#0A2540]/10 rounded-lg text-[#0A2540] shrink-0">
                            {category.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium text-gray-900">{category.name}</h3>
                              {category.required && (
                                <span className="text-xs bg-[#0A2540] text-white px-2 py-0.5 rounded-full">
                                  Required
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {category.description}
                            </p>
                          </div>
                        </div>
                        <div className="shrink-0 flex items-center gap-3">
                          {category.required ? (
                            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                              Always Active
                            </span>
                          ) : (
                            <Switch
                              checked={preferences[category.id]}
                              onCheckedChange={() => togglePreference(category.id)}
                              className="data-[state=checked]:bg-green-500"
                            />
                          )}
                        </div>
                      </div>

                      {/* Expand Details Button */}
                      <button
                        onClick={() => toggleCategoryDetails(category.id)}
                        className="flex items-center gap-1 text-sm text-[#0A2540] hover:text-orange-500 mt-3 transition-colors"
                      >
                        {expandedCategory === category.id ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            Hide Details
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            View Details
                          </>
                        )}
                      </button>
                    </div>

                    {/* Category Details */}
                    {expandedCategory === category.id && (
                      <div className="px-4 pb-4 bg-white border-t border-gray-100">
                        <ul className="mt-3 space-y-2">
                          {category.details.map((detail, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleSavePreferences}
                className="flex-1 bg-[#0A2540] hover:bg-[#12344D] text-white"
              >
                Save Preferences
              </Button>
              <Button
                variant="outline"
                onClick={handleRejectOptional}
                className="flex-1 border-gray-300 hover:bg-gray-100"
              >
                Reject Optional
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
              >
                Accept All
              </Button>
            </div>

            {/* Footer Links */}
            <div className="px-6 py-3 bg-gray-100 border-t border-gray-200 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-[#0A2540] underline underline-offset-2">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-[#0A2540] underline underline-offset-2">
                  Terms of Service
                </Link>
              </div>
              <span className="text-gray-400">
                Powered by NexDyne
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Hook to check cookie consent status
export function useCookieConsent() {
  const [consent, setConsent] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (hasConsent) {
      const preferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (preferences) {
        setConsent(JSON.parse(preferences));
      }
    }
  }, []);

  return consent;
}
