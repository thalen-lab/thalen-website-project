import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check, ArrowRight, Shield, Eye, Clock, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function SecurityOperationsCenter() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Thalen Technologies Opens Expanded Cybersecurity Operations Center';
  
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
              { label: 'Security Operations Center' }
            ]}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <article className="container max-w-4xl py-12 md:py-16 lg:py-20">
          
          {/* Back Link */}
          <Link href="/about/news-updates" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#E07020] transition-colors mb-8">
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
              <span className="text-sm text-gray-500">May 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Thalen Technologies Opens Expanded Cybersecurity Operations Center
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              New 24/7 Security Operations Center provides enhanced threat monitoring, incident response, and managed security services for federal clients facing increasingly sophisticated cyber threats.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Dateline */}
            <p className="text-gray-700 leading-relaxed">
              <strong>WASHINGTON, D.C. – May 15, 2025</strong> – Thalen Technologies, Inc., a leading provider of intelligent automation and AI solutions for government and enterprise clients, today announced the opening of its expanded Cybersecurity Operations Center (CSOC), a state-of-the-art facility designed to provide 24/7 threat monitoring, incident response, and managed security services for federal agencies and critical infrastructure operators.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The new facility represents a significant expansion of Thalen's cybersecurity capabilities, tripling the company's security operations capacity and introducing advanced threat detection technologies powered by artificial intelligence and machine learning. The CSOC is staffed by a team of certified security professionals with deep expertise in federal cybersecurity requirements and threat landscapes.
            </p>

            {/* SOC Capabilities */}
            <div className="my-10 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border border-red-100">
                <div className="p-3 bg-red-600 rounded-xl w-fit mb-4">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Threat Monitoring</h3>
                <p className="text-sm text-gray-600">Continuous surveillance of client environments using advanced SIEM and threat intelligence platforms.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                <div className="p-3 bg-orange-600 rounded-xl w-fit mb-4">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Rapid Incident Response</h3>
                <p className="text-sm text-gray-600">Expert incident response team available around the clock with 15-minute initial response SLA.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="p-3 bg-blue-600 rounded-xl w-fit mb-4">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Threat Intelligence</h3>
                <p className="text-sm text-gray-600">Integration with federal threat feeds and proprietary intelligence sources for proactive defense.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
                <div className="p-3 bg-purple-600 rounded-xl w-fit mb-4">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance Reporting</h3>
                <p className="text-sm text-gray-600">Automated compliance reporting for FISMA, FedRAMP, CMMC, and other federal requirements.</p>
              </div>
            </div>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Responding to Evolving Threats
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The expansion comes at a critical time as federal agencies face increasingly sophisticated cyber threats from nation-state actors, criminal organizations, and other adversaries. The CSOC is designed to provide the advanced capabilities needed to detect, respond to, and recover from these threats while maintaining compliance with federal security requirements.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "The threat landscape facing federal agencies has never been more challenging," said the company's Chief Information Security Officer. "Our expanded CSOC gives agencies access to enterprise-grade security operations capabilities without the cost and complexity of building and staffing their own facilities. We're bringing together the best people, processes, and technology to protect our clients' most critical assets."
            </p>

            <p className="text-gray-700 leading-relaxed">
              Key capabilities of the new CSOC include:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>AI-Powered Threat Detection</strong> – Advanced machine learning algorithms analyze billions of security events daily to identify potential threats and anomalies that might escape traditional detection methods.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Threat Hunting</strong> – Proactive threat hunting teams continuously search for indicators of compromise and advanced persistent threats that may have evaded automated detection.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Incident Response</strong> – Experienced incident responders available 24/7 to contain, eradicate, and recover from security incidents with minimal business impact.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Vulnerability Management</strong> – Continuous vulnerability scanning and assessment with prioritized remediation guidance based on threat intelligence and asset criticality.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Security Orchestration</strong> – Automated response playbooks that accelerate incident response and reduce mean time to remediation.
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Federal-Grade Security
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The CSOC operates from a secure facility that meets federal requirements for handling sensitive information. The facility features redundant power and connectivity, physical security controls, and personnel security measures appropriate for supporting federal clients with stringent security requirements.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "We've built the CSOC to the same standards we would expect for protecting our own most sensitive operations," noted the CISO. "From the physical facility to our personnel screening processes to our operational procedures, everything is designed to meet or exceed federal requirements."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The CSOC team includes professionals with active security clearances and certifications including CISSP, CISM, CEH, GIAC, and others. All team members undergo rigorous background checks and continuous security training to ensure they remain current on the latest threats and defensive techniques.
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Integration with Federal Threat Sharing
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The CSOC is integrated with federal threat sharing programs including CISA's Automated Indicator Sharing (AIS) program, enabling rapid dissemination of threat intelligence across the federal ecosystem. This integration ensures that Thalen's clients benefit from the collective intelligence of the federal cybersecurity community.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Threat sharing is essential in today's environment," said the company's Vice President of Cybersecurity Services. "No organization can defend against modern threats in isolation. By participating in federal threat sharing programs, we ensure our clients benefit from intelligence gathered across the entire federal enterprise."
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Service Offerings
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The expanded CSOC supports a range of managed security services tailored for federal clients:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>Managed Detection and Response (MDR)</strong> – Comprehensive threat monitoring and response services with guaranteed SLAs for detection and response times.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Security Information and Event Management (SIEM)</strong> – Fully managed SIEM services including log collection, correlation, analysis, and alerting.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Endpoint Detection and Response (EDR)</strong> – Advanced endpoint protection with real-time monitoring and automated response capabilities.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Vulnerability Management as a Service</strong> – Continuous vulnerability assessment with prioritized remediation guidance and tracking.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Incident Response Retainer</strong> – Pre-positioned incident response services with guaranteed response times and dedicated resources.
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Availability
            </h2>

            <p className="text-gray-700 leading-relaxed">
              CSOC services are available immediately for federal agencies through Thalen's existing contract vehicles. The company offers flexible engagement models ranging from fully managed services to co-managed arrangements that complement agencies' existing security capabilities.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Federal agencies interested in learning more about the CSOC can request a briefing or facility tour through Thalen's website or by contacting the Cybersecurity Services team directly.
            </p>

            {/* About Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              About Thalen Technologies
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thalen Technologies is a leading provider of intelligent automation, AI solutions, and digital transformation services for government and enterprise clients. With over 15 years of experience and a proven track record of delivering measurable outcomes, Thalen helps organizations modernize their operations, enhance security posture, and achieve mission objectives. The company is headquartered in Washington, D.C. with offices across the United States. For more information, visit{' '}
              <Link href="/" className="text-[#E07020] hover:underline">www.thalentech.com</Link>.
            </p>

            {/* Media Contact */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-base">
                <strong className="text-gray-900">Media Contact:</strong><br />
                Corporate Communications<br />
                Thalen Technologies, Inc.<br />
                <a href="mailto:press@thalentech.com" className="text-[#E07020] hover:underline">press@thalentech.com</a>
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
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#E07020] hover:text-white text-gray-600 transition-colors"
                  aria-label="Copy link"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related News</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/news/cmmc-certification" className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">Security</span>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-[#E07020] transition-colors">
                  New CMMC Level 2 Certification Achieved
                </h4>
                <p className="mt-2 text-sm text-gray-600">Strengthening our position as a trusted defense contractor partner.</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#E07020]">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/news/fedramp-high-authorization" className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Compliance</span>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-[#E07020] transition-colors">
                  Thalen Technologies Achieves FedRAMP High Authorization
                </h4>
                <p className="mt-2 text-sm text-gray-600">Successfully completed FedRAMP High authorization for our government cloud platform.</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#E07020]">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
