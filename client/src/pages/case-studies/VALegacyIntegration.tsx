import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function VALegacyIntegration() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'VA Medical Center Integrates 12 Legacy Systems';
  
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
              { label: 'VA Medical Center Integration' }
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-50 text-purple-700">
                Healthcare
              </span>
              <span className="text-sm text-gray-500">Enterprise Integration</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              VA Medical Center Integrates 12 Legacy Systems
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Unified patient data across 12 disparate VA healthcare systems with FedRAMP-authorized integration platforms, reducing administrative burden by 60% and improving care coordination.
            </p>
          </header>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 mb-12 border-y border-gray-200">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E07020]">12</div>
              <div className="text-sm text-gray-600 mt-1">Systems integrated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E07020]">60%</div>
              <div className="text-sm text-gray-600 mt-1">Reduced admin burden</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E07020]">8,500</div>
              <div className="text-sm text-gray-600 mt-1">Staff members impacted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E07020]">100%</div>
              <div className="text-sm text-gray-600 mt-1">HIPAA compliance</div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* The Opportunity */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Opportunity
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A large VA Medical Center operated 12 separate healthcare information systems that did not communicate with each other, forcing clinical and administrative staff to manually enter the same patient information into multiple systems. This data fragmentation created significant inefficiencies and increased the risk of medical errors. Clinicians spent 30-40% of their time on administrative tasks rather than patient care, while duplicate data entry across systems led to inconsistencies in patient records.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Staff had no unified view of patient information, requiring them to log into multiple systems to piece together a complete picture of each veteran's health status. The situation was particularly challenging for care coordination, where specialists needed to understand the full context of a patient's treatment history before making clinical decisions. Emergency situations were especially problematic, as clinicians sometimes had to make critical decisions without access to complete patient records.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The facility needed to integrate these systems while maintaining HIPAA compliance and ensuring zero disruption to patient care operations. Any solution would need to work with the existing VistA EHR system, proprietary clinical applications, pharmacy systems, laboratory information systems, and radiology PACS. The integration had to be seamless enough that staff would adopt it willingly, while robust enough to handle the volume and sensitivity of healthcare data.
            </p>

            {/* The Solution */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Solution
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Working with Thalen Technologies, the medical center implemented a comprehensive integration platform using FedRAMP-authorized iPaaS technology. The approach created a unified data layer that enabled seamless information flow across all 12 healthcare systems while maintaining strict HIPAA compliance and data security standards. The implementation began with detailed discovery work that mapped data flows across all systems and identified critical integration points through extensive collaboration with clinical and administrative staff.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The technical foundation included a FedRAMP-compliant iPaaS platform with HL7 FHIR support, connecting VistA EHR, pharmacy systems, lab systems, radiology PACS, and administrative applications. A master patient index ensured consistent patient identification across all systems with automated duplicate detection. The platform built 45 integration workflows connecting clinical, administrative, and ancillary systems with real-time data synchronization and validation rules.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Security architecture received careful attention throughout the implementation. End-to-end encryption, role-based access control, and comprehensive audit logging ensured compliance with HIPAA requirements and VA security standards. The unified clinical dashboard provided a single-pane-of-glass view of patient information across all systems, while comprehensive staff training and ongoing support ensured successful adoption throughout the organization.
            </p>

            {/* The Impact */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Impact
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The integration platform transformed how 8,500 staff members access and work with patient information. Administrative burden decreased by 60% as duplicate data entry was eliminated and information flowed automatically between systems. Clinicians now spend significantly more time on direct patient care, with the unified dashboard providing immediate access to complete patient records regardless of which system originally captured the data.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Care coordination improved dramatically as specialists gained visibility into the full context of each patient's treatment history. The master patient index eliminated the record inconsistencies that previously created confusion and potential safety risks. Emergency department staff now have immediate access to complete patient information, enabling faster and more informed clinical decisions during critical situations.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The platform achieved and maintained 100% HIPAA compliance while processing millions of healthcare transactions. The comprehensive audit logging provides complete visibility into data access patterns, supporting both compliance requirements and quality improvement initiatives. Most importantly, the integration has established a foundation for future capabilities including advanced analytics, population health management, and enhanced veteran engagement tools.
            </p>

          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to unify your healthcare systems?</h3>
            <p className="text-gray-600 mb-6">
              Discover how enterprise integration can eliminate data silos, reduce administrative burden, and improve care coordination across your organization.
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
