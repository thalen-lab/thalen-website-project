import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react';
import { useState } from 'react';

export default function FederalPracticeExpansion() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Thalen Technologies Expands Federal Practice with New Leadership';
  
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
              { label: 'Federal Practice Expansion' }
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700">
                Company News
              </span>
              <span className="text-sm text-gray-500">January 6, 2026</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Thalen Technologies Expands Federal Practice with New Leadership
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              New executive hires and expanded capabilities position Thalen Technologies for continued growth in federal automation and AI services.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Dateline */}
            <p className="text-gray-700 leading-relaxed">
              <strong>WASHINGTON, D.C. – January 6, 2026</strong> – Thalen Technologies, Inc., a leading provider of intelligent automation and AI solutions for government and enterprise clients, today announced a significant expansion of its Federal Practice with the appointment of key leadership positions and the launch of new service capabilities designed to accelerate digital transformation across federal agencies.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The expansion comes at a critical time as federal agencies face increasing pressure to modernize legacy systems, implement AI governance frameworks, and meet stringent cybersecurity requirements. Thalen's enhanced Federal Practice brings together deep technical expertise with proven methodologies to help agencies navigate these complex challenges while delivering measurable mission outcomes.
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Strategic Leadership Appointments
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The company has appointed several senior executives to lead its federal growth initiatives. These appointments reflect Thalen's commitment to building a world-class team with the experience and credentials necessary to serve the most demanding government missions.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Our federal clients are facing unprecedented challenges as they work to modernize their operations while maintaining the highest levels of security and compliance," said the company's Chief Executive Officer. "By strengthening our leadership team and expanding our capabilities, we're positioning Thalen to be the partner of choice for agencies seeking to leverage automation and AI to achieve their mission objectives."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The new leadership team brings extensive experience from both the public and private sectors, including backgrounds in federal IT modernization, cybersecurity, cloud migration, and intelligent automation. Their collective expertise spans multiple agencies and includes successful delivery of large-scale transformation programs.
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Expanded Service Capabilities
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Alongside the leadership expansion, Thalen is launching several new service offerings tailored specifically for federal clients:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>AI Governance & Compliance Services</strong> – Comprehensive support for agencies implementing AI governance frameworks in accordance with OMB M-24-18 and Executive Order 14110, including risk assessment, policy development, and continuous monitoring.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>FedRAMP Acceleration Program</strong> – Streamlined pathways to FedRAMP authorization leveraging Thalen's proven methodologies and deep understanding of federal security requirements.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Intelligent Document Processing</strong> – Advanced AI-powered solutions for automating document-intensive workflows, reducing processing times by up to 85% while improving accuracy and compliance.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Zero Trust Implementation</strong> – End-to-end support for agencies advancing their zero trust architecture adoption in alignment with CISA's Zero Trust Maturity Model 2.0.
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Proven Track Record
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The expansion builds on Thalen's established track record of delivering successful outcomes for federal clients. Over the past three years, the company has helped agencies achieve significant operational improvements, including:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>85% reduction</strong> in manual processing time for a major federal agency's benefits administration program
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Estimated $12M in annual savings</strong> through intelligent automation of healthcare claims processing
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>99.2% system uptime</strong> for mission-critical defense manufacturing operations
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>60% faster</strong> FedRAMP authorization timelines through streamlined assessment processes
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Contract Vehicles & Certifications
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thalen Technologies maintains multiple contract vehicles to facilitate federal procurement, including GSA MAS, CIO-SP3, and SEWP V. The company holds FedRAMP High authorization and CMMC Level 2 certification, demonstrating its commitment to meeting the most stringent federal security requirements.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "We've invested significantly in building the infrastructure, processes, and certifications that federal agencies require," noted the company's Chief Operating Officer. "This expansion allows us to scale our proven capabilities to serve more agencies and deliver greater impact across the federal landscape."
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Looking Ahead
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The Federal Practice expansion is part of Thalen's broader strategic vision to become the leading provider of intelligent automation solutions for mission-critical government operations. The company plans to continue investing in talent acquisition, technology partnerships, and service innovation throughout 2026.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Federal agencies interested in learning more about Thalen's expanded capabilities can schedule a consultation through the company's website or contact the Federal Practice team directly.
            </p>

            {/* About Section */}
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
                <a href="mailto:press@thalentechnologies.com" className="text-[#FF6B35] hover:underline">press@thalentechnologies.com</a>
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
              <Link href="/about/news-updates" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 block">Awards</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Recognized as Top Government IT Contractor 2025
                </h4>
                <p className="text-sm text-gray-600">
                  Industry recognition for excellence in government technology modernization and automation solutions.
                </p>
              </Link>
              <Link href="/about/news-updates" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2 block">Partnership</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Strategic Partnership with Leading Cloud Provider
                </h4>
                <p className="text-sm text-gray-600">
                  New technology partnerships expand capabilities in AI-powered automation and FedRAMP-authorized solutions.
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
