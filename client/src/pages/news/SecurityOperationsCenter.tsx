import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react';
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

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Comprehensive Security Operations
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The expanded CSOC delivers four core capabilities essential to modern federal cybersecurity. The facility provides continuous 24/7 threat monitoring through advanced SIEM and threat intelligence platforms, enabling real-time surveillance of client environments. A dedicated incident response team stands ready around the clock with a 15-minute initial response service level agreement, ensuring rapid containment of security events.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The center integrates with federal threat feeds and proprietary intelligence sources to enable proactive defense through comprehensive threat intelligence. Additionally, automated compliance reporting capabilities support FISMA, FedRAMP, CMMC, and other federal requirements, reducing the administrative burden on agency security teams while maintaining continuous compliance visibility.
            </p>

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
              The facility leverages AI-powered threat detection, with advanced machine learning algorithms analyzing billions of security events daily to identify potential threats and anomalies that might escape traditional detection methods. Proactive threat hunting teams continuously search for indicators of compromise and advanced persistent threats that may have evaded automated detection. Experienced incident responders remain available 24/7 to contain, eradicate, and recover from security incidents with minimal business impact.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Continuous vulnerability scanning and assessment provides prioritized remediation guidance based on threat intelligence and asset criticality. Automated response playbooks accelerate incident response through security orchestration, reducing mean time to remediation across all client environments.
            </p>

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

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Integration with Federal Threat Sharing
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The CSOC is integrated with federal threat sharing programs including CISA's Automated Indicator Sharing (AIS) program, enabling rapid dissemination of threat intelligence across the federal ecosystem. This integration ensures that Thalen's clients benefit from the collective intelligence of the federal cybersecurity community.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Threat sharing is essential in today's environment," said the company's Vice President of Cybersecurity Services. "No organization can defend against modern threats in isolation. By participating in federal threat sharing programs, we ensure our clients benefit from intelligence gathered across the entire federal enterprise."
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Service Offerings
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The expanded CSOC supports a comprehensive range of managed security services tailored for federal clients. Managed Detection and Response services provide continuous monitoring and expert response to security events. Security Information and Event Management as a service delivers cloud-based SIEM capabilities with federal compliance reporting. Endpoint Detection and Response offers advanced endpoint protection with real-time threat detection and automated response.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The facility also provides vulnerability management through continuous scanning, assessment, and remediation tracking. Penetration testing services include regular security assessments by certified ethical hackers. Compliance monitoring ensures continuous monitoring and reporting for federal security requirements.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Availability and Engagement
            </h2>

            <p className="text-gray-700 leading-relaxed">
              CSOC services are available to federal agencies through Thalen's existing contract vehicles including GSA MAS, CIO-SP3, and SEWP V. The company offers flexible engagement models ranging from fully managed services to co-managed arrangements that augment existing agency security teams.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Federal agencies interested in learning more about the expanded CSOC capabilities can schedule a briefing through the company's website or contact the Cybersecurity Services team directly.
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
              <Link href="/news/fedramp-high-authorization" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 block">Compliance</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Achieves FedRAMP High Authorization
                </h4>
                <p className="text-sm text-gray-600">
                  Successfully completed FedRAMP High authorization for our government cloud platform.
                </p>
              </Link>
              <Link href="/news/cmmc-certification" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2 block">Compliance</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Achieves CMMC Level 2 Certification
                </h4>
                <p className="text-sm text-gray-600">
                  Certification validates commitment to protecting controlled unclassified information.
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
