import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react';
import { useState } from 'react';

export default function ZeroTrustSecurity() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Thalen Technologies Launches Zero Trust Security Framework';
  
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
    window.location.href = `mailto:?subject=${encodeURIComponent(articleTitle)}&body=${encodeURIComponent(`Read this article: ${articleUrl}`)}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-4">
          <Breadcrumb
            items={[
              { label: 'About', href: '/about' },
              { label: 'News & Updates', href: '/about/news-updates' },
              { label: 'Zero Trust Security Framework' }
            ]}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <article className="container max-w-4xl py-12 md:py-16 lg:py-20">
          
          {/* Back Link */}
          <Link href="/about/news-updates" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#FF6B35] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to News & Updates
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            {/* Category Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-50 text-red-700">
                Security
              </span>
              <span className="text-sm text-gray-500">June 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Thalen Technologies Launches Zero Trust Security Framework
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Comprehensive security solution helps federal agencies implement zero trust architecture in alignment with Executive Order 14028 and OMB M-22-09 requirements.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Dateline */}
            <p className="text-gray-700 leading-relaxed">
              <strong>WASHINGTON, D.C. – June 3, 2025</strong> – Thalen Technologies, Inc., a leading provider of intelligent automation and AI solutions for government and enterprise clients, today announced the launch of its Zero Trust Security Framework, a comprehensive solution designed to help federal agencies implement zero trust architecture in compliance with federal cybersecurity mandates.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The framework provides agencies with a structured approach to adopting zero trust principles, including identity verification, device validation, network segmentation, and continuous monitoring. The solution addresses the requirements outlined in Executive Order 14028 on Improving the Nation's Cybersecurity and OMB Memorandum M-22-09, which mandates federal agencies to achieve specific zero trust security goals.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Addressing Federal Zero Trust Requirements
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Federal agencies face significant challenges in transitioning from traditional perimeter-based security models to zero trust architecture. The transition requires fundamental changes to identity management, network architecture, application security, and data protection practices. Thalen's framework provides a roadmap for this transformation.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Zero trust is not just a technology initiative—it's a fundamental shift in how agencies approach security," said the company's Chief Information Security Officer. "Our framework helps agencies navigate this transition by providing clear guidance, proven methodologies, and integrated technology solutions that address all aspects of zero trust implementation."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The framework addresses five core pillars of zero trust architecture. Identity verification ensures that all users are authenticated and authorized before accessing any resource, with continuous verification throughout each session. Device validation confirms that all devices meet security requirements before granting access, with ongoing compliance monitoring. Network segmentation implements micro-segmentation to limit lateral movement and contain potential breaches. Application security protects applications through secure development practices, runtime protection, and continuous vulnerability management. Data protection ensures that data is encrypted, classified, and protected throughout its lifecycle.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Comprehensive Implementation Support
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thalen's Zero Trust Security Framework includes comprehensive implementation support to help agencies achieve their security goals. The company's experienced security consultants work with agencies to assess current security posture, develop implementation roadmaps, and execute transformation initiatives.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "We don't just provide technology—we provide the expertise and support agencies need to succeed," noted the company's Vice President of Cybersecurity Solutions. "Our team has deep experience in federal security requirements and has helped numerous agencies navigate complex security transformations."
            </p>

            <p className="text-gray-700 leading-relaxed">
              Implementation services include zero trust maturity assessment to evaluate current security posture against zero trust principles and identify gaps. Architecture design develops target state architecture aligned with agency mission requirements and federal mandates. Technology integration implements and configures zero trust technology components including identity providers, network security tools, and monitoring platforms. Policy development creates security policies and procedures that support zero trust operations. Training and enablement provides staff training on zero trust concepts, tools, and procedures.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Technology Integration
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The framework integrates with leading security technology providers to deliver comprehensive zero trust capabilities. Thalen has established partnerships with identity management, network security, endpoint protection, and security analytics vendors to provide agencies with best-of-breed solutions.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "We've built our framework to be technology-agnostic, allowing agencies to leverage their existing investments while filling gaps with proven solutions," said the CISO. "This approach minimizes disruption while accelerating time to value."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The framework supports integration with major identity providers for single sign-on and multi-factor authentication. Network security integration enables micro-segmentation and software-defined perimeter capabilities. Endpoint detection and response integration provides continuous device monitoring and threat detection. Security information and event management integration enables centralized logging and security analytics.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Compliance and Reporting
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The framework includes comprehensive compliance and reporting capabilities to help agencies demonstrate progress toward zero trust goals. Automated reporting tools track implementation progress against OMB M-22-09 milestones and generate documentation required for compliance reporting.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Compliance reporting is a significant burden for agencies," noted the Vice President of Cybersecurity Solutions. "Our framework automates much of this reporting, freeing security teams to focus on actual security improvements rather than documentation."
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Proven Results
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Early adopters of the framework have achieved significant improvements in their security posture. Agencies have reported reduced time to detect and respond to security incidents, improved visibility into network activity, and accelerated progress toward zero trust compliance milestones.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "The results speak for themselves," said the CISO. "Agencies that have implemented our framework are seeing real improvements in their security posture while making measurable progress toward federal compliance requirements."
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              About Thalen Technologies
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thalen Technologies is a leading provider of intelligent automation, AI solutions, and digital transformation services for government and enterprise clients. With over 15 years of experience and a proven track record of delivering measurable outcomes, Thalen helps organizations modernize their operations, enhance security posture, and achieve mission objectives. The company is headquartered in Washington, D.C. with offices across the United States. For more information, visit{' '}
              <Link href="/" className="text-[#FF6B35] hover:underline">www.thalentech.com</Link>.
            </p>

            {/* Media Contact */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-base">
                <strong className="text-gray-900">Media Contact:</strong><br />
                Corporate Communications<br />
                Thalen Technologies, Inc.<br />
                <a href="mailto:press@thalentech.com" className="text-[#FF6B35] hover:underline">press@thalentech.com</a>
              </p>
            </div>

          </div>

          {/* Social Share */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500">Share this article:</span>
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
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#1DA1F2] hover:text-white text-gray-600 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={shareViaEmail}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-700 hover:text-white text-gray-600 transition-colors"
                  aria-label="Share via Email"
                >
                  <Mail className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopyLink}
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#FF6B35] hover:text-white text-gray-600 transition-colors"
                  aria-label="Copy link"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related News</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/news/security-operations-center" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-red-600 mb-2 block">Security</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Opens Cybersecurity Operations Center
                </h4>
                <p className="text-sm text-gray-600">
                  New facility provides 24/7 threat monitoring and incident response for federal clients.
                </p>
              </Link>
              <Link href="/news/fedramp-high-authorization" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 block">Compliance</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Achieves FedRAMP High Authorization
                </h4>
                <p className="text-sm text-gray-600">
                  Successfully completed FedRAMP High authorization for our government cloud platform.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
