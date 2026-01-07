import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function DoDManufacturingUptime() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'DoD Manufacturing Facility Achieves 99.2% Uptime';
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(articleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(articleTitle)}`, '_blank');
  };

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(articleTitle)}&body=${encodeURIComponent(`Read this case study: ${articleUrl}`)}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-4">
          <Breadcrumb
            items={[
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'DoD Manufacturing Uptime' }
            ]}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <article className="container max-w-4xl py-12 md:py-16 lg:py-20">
          
          {/* Back Link */}
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#E07020] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            {/* Category Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-green-50 text-green-700">
                Defense
              </span>
              <span className="text-sm text-gray-500">Predictive Maintenance</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              DoD Manufacturing Facility Achieves 99.2% Uptime
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Deployed FedRAMP-authorized cybersecurity platforms and predictive maintenance analytics for DoD defense manufacturing operations, eliminating 75% of unplanned downtime.
            </p>
          </header>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 mb-12 border-y border-gray-200">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E07020]">99.2%</div>
              <div className="text-sm text-gray-600 mt-1">System uptime achieved</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E07020]">78%</div>
              <div className="text-sm text-gray-600 mt-1">Reduced unplanned downtime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E07020]">Level 3</div>
              <div className="text-sm text-gray-600 mt-1">CMMC certified</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E07020]">45%</div>
              <div className="text-sm text-gray-600 mt-1">Maintenance cost reduction</div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* The Opportunity */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Opportunity
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A critical DoD manufacturing facility producing defense components was experiencing frequent unplanned equipment failures that disrupted production schedules and threatened mission-critical supply chains. The facility operated 24/7 with aging equipment and relied on reactive maintenance that resulted in costly emergency repairs and production delays. Equipment downtime averaged 18-22% annually, with each incident requiring 12-48 hours for diagnosis and repair.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The facility needed to modernize maintenance operations while meeting strict DoD cybersecurity requirements including CMMC Level 3 certification for handling Controlled Unclassified Information. Leadership recognized that predictive maintenance technology had matured to the point where it could transform their operations, but implementation would require careful attention to security requirements and integration with legacy industrial control systems.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The stakes were significant. Production delays at this facility had downstream effects on defense programs across multiple branches of the military. The facility needed to achieve near-continuous operations while maintaining air-gapped network segments for classified operations and ensuring all systems met the stringent requirements for handling CUI.
            </p>

            {/* The Solution */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Solution
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Working with Thalen Technologies, the facility implemented a comprehensive predictive maintenance platform using FedRAMP-authorized IoT and analytics tools. The approach enabled the facility to shift from reactive to proactive maintenance while meeting all DoD cybersecurity requirements. The implementation began with a thorough equipment criticality analysis that identified 45 high-priority assets and established baseline performance metrics from historical failure data.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The technical infrastructure included deployment of over 200 industrial IoT sensors monitoring vibration, temperature, pressure, and power consumption across critical equipment. Edge computing capabilities enabled real-time data processing while maintaining CMMC-compliant data collection and transmission protocols. The sensor network fed into machine learning models that analyzed 50 million data points daily to predict failures 7-14 days in advance.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Security architecture received particular attention throughout the implementation. The platform achieved CMMC Level 3 compliance with encrypted data transmission, role-based access control, and comprehensive audit logging. Integration with existing CMMS, ERP, and supply chain systems enabled automated work order generation when the predictive models identified potential issues. Real-time dashboards provided maintenance teams with mobile alerts, while the air-gapped network segments for classified operations remained completely isolated.
            </p>

            {/* The Impact */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Impact
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The predictive maintenance platform transformed facility operations, achieving 99.2% equipment uptime compared to the previous 78-82% baseline. Unplanned downtime decreased by 78%, with the remaining incidents typically resolved within 2-4 hours rather than the previous 12-48 hour average. The facility now schedules maintenance during planned production windows, eliminating the cascade effects that previously disrupted defense supply chains.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Maintenance costs decreased by 45% as the facility shifted from emergency repairs to planned interventions. The predictive models proved remarkably accurate, identifying potential failures with sufficient lead time to order parts and schedule technicians without disrupting production. Spare parts inventory optimization reduced carrying costs while ensuring critical components remained available when needed.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The successful CMMC Level 3 certification validated the security architecture and positioned the facility as a model for other DoD manufacturing operations. The platform now serves as a foundation for additional capabilities including digital twin modeling and advanced analytics. Most importantly, the facility has established the operational resilience required to support mission-critical defense programs with confidence.
            </p>

          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to achieve operational excellence?</h3>
            <p className="text-gray-600 mb-6">
              Discover how predictive maintenance and IoT analytics can transform your manufacturing operations while meeting the most stringent security requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-[#E07020] hover:bg-[#c55e15] text-white">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </div>

          {/* Social Share */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500">Share this case study:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={shareOnLinkedIn}
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#0077B5] hover:text-white text-gray-600 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={shareOnTwitter}
                  className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-600 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={shareViaEmail}
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#E07020] hover:text-white text-gray-600 transition-colors"
                  aria-label="Share via Email"
                >
                  <Mail className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopyLink}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                  aria-label="Copy link"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
