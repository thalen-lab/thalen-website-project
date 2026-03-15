import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react';
import { useState } from 'react';

export default function CMMCCertification() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Thalen Technologies Achieves CMMC Level 2 Certification';
  
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
              { label: 'CMMC Level 2 Certification' }
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
              <span className="text-sm text-gray-500">September 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Thalen Technologies Achieves CMMC Level 2 Certification
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Certification strengthens Thalen's position as a trusted defense contractor partner, enabling support for DoD contracts requiring protection of Controlled Unclassified Information.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Dateline */}
            <p className="text-gray-700 leading-relaxed">
              <strong>WASHINGTON, D.C. – September 15, 2025</strong> – Thalen Technologies, Inc., a leading provider of intelligent automation and AI solutions for government and enterprise clients, today announced that it has achieved Cybersecurity Maturity Model Certification (CMMC) Level 2, demonstrating its commitment to protecting Controlled Unclassified Information (CUI) in support of Department of Defense (DoD) missions.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The CMMC Level 2 certification was awarded following a rigorous assessment by a CMMC Third Party Assessment Organization (C3PAO), validating Thalen's implementation of 110 security practices aligned with NIST SP 800-171 requirements. This certification positions Thalen to support DoD contractors and primes on contracts requiring advanced cybersecurity protections.
            </p>

            <p className="text-gray-700 leading-relaxed">
              CMMC Level 2, designated as "Advanced," requires implementation of 110 security practices based on NIST SP 800-171. This level is designed to protect Controlled Unclassified Information and is required for contractors handling sensitive DoD information that, if compromised, could impact national security.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Protecting the Defense Industrial Base
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The CMMC program was established by the Department of Defense to enhance the cybersecurity posture of the Defense Industrial Base (DIB) and protect sensitive information from increasingly sophisticated cyber threats. As a certified organization, Thalen Technologies can now support DoD contracts that require CMMC Level 2 compliance.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Achieving CMMC Level 2 certification demonstrates our commitment to protecting the sensitive information entrusted to us by our defense clients," said the company's Chief Information Security Officer. "This certification reflects years of investment in building a mature cybersecurity program that meets the rigorous requirements of the DoD."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The certification validates Thalen's implementation of security practices across 14 domains: Access Control, Awareness and Training, Audit and Accountability, Configuration Management, Identification and Authentication, Incident Response, Maintenance, Media Protection, Personnel Security, Physical Protection, Risk Assessment, Security Assessment, System and Communications Protection, and System and Information Integrity.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Supporting Defense Missions
            </h2>

            <p className="text-gray-700 leading-relaxed">
              With CMMC Level 2 certification, Thalen Technologies is positioned to support a broader range of defense contracts and serve as a trusted partner for DoD prime contractors. The certification enables Thalen to handle CUI across its operations, including software development, cloud services, and consulting engagements.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Our defense clients can now engage Thalen with confidence, knowing that we meet the cybersecurity requirements mandated by the DoD," noted the company's Vice President of Defense Solutions. "This certification opens doors to new opportunities and strengthens our existing relationships with defense primes and agencies."
            </p>

            <p className="text-gray-700 leading-relaxed">
              Key capabilities now available under CMMC Level 2 certification include secure software development in CMMC-compliant environments with appropriate controls for protecting CUI throughout the development lifecycle. Cloud services for defense provide hosting and management of defense applications and data on CMMC-compliant infrastructure integrated with FedRAMP-authorized cloud platforms. Cybersecurity consulting offers advisory services to help defense contractors achieve and maintain their own CMMC certifications. Managed security services deliver 24/7 security monitoring and incident response for defense clients requiring CMMC-compliant security operations.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Comprehensive Security Program
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The CMMC Level 2 certification builds on Thalen's existing security credentials, which include FedRAMP High authorization and ISO 27001 certification. Together, these certifications demonstrate a comprehensive approach to information security that meets the requirements of the most demanding government clients.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Security is not a checkbox exercise for us—it's fundamental to how we operate," said the CISO. "Our security program is designed to protect our clients' information throughout its lifecycle, from initial receipt through processing, storage, and eventual disposition."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The company maintains a dedicated security team responsible for continuous monitoring, vulnerability management, incident response, and security awareness training. Regular assessments and audits ensure that security controls remain effective and aligned with evolving requirements.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Helping Clients Achieve Compliance
            </h2>

            <p className="text-gray-700 leading-relaxed">
              In addition to maintaining its own CMMC certification, Thalen Technologies offers services to help other defense contractors navigate the CMMC compliance journey. The company's cybersecurity consulting practice provides gap assessments, remediation planning, and implementation support to help organizations achieve and maintain their required CMMC levels.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Many organizations in the defense supply chain are struggling to understand and implement CMMC requirements," noted the Vice President of Defense Solutions. "We've been through the process ourselves and can help others navigate the complexities of achieving certification while maintaining focus on their core missions."
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
              <Link href="/news/fedramp-high-authorization" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 block">Compliance</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Achieves FedRAMP High Authorization
                </h4>
                <p className="text-sm text-gray-600">
                  Successfully completed FedRAMP High authorization for our government cloud platform.
                </p>
              </Link>
              <Link href="/news/defense-joint-venture" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2 block">Partnership</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Announces Defense Joint Venture
                </h4>
                <p className="text-sm text-gray-600">
                  Strategic partnership expands capabilities for defense and intelligence community clients.
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
