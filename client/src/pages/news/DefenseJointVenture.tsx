import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react';
import { useState } from 'react';

export default function DefenseJointVenture() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Thalen Technologies Announces Joint Venture with Defense Contractor';
  
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
              { label: 'Defense Joint Venture' }
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-50 text-purple-700">
                Partnership
              </span>
              <span className="text-sm text-gray-500">April 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Thalen Technologies Announces Joint Venture with Defense Contractor
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Strategic alliance combines expertise in defense systems integration with advanced AI capabilities to deliver next-generation solutions for DoD missions.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Dateline */}
            <p className="text-gray-700 leading-relaxed">
              <strong>WASHINGTON, D.C. – April 22, 2025</strong> – Thalen Technologies, Inc., a leading provider of intelligent automation and AI solutions for government and enterprise clients, today announced the formation of a joint venture with a major defense contractor to deliver advanced technology solutions for Department of Defense (DoD) missions. The strategic alliance combines Thalen's expertise in AI and intelligent automation with its partner's deep experience in defense systems integration.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The joint venture, which will operate as a separate entity, is positioned to pursue large-scale defense contracts requiring both advanced technology capabilities and proven defense program management experience. The alliance represents a significant expansion of both companies' ability to serve the defense market.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Complementary Capabilities
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The joint venture brings together complementary capabilities that address the full spectrum of defense technology requirements. Thalen contributes its expertise in artificial intelligence, machine learning, intelligent automation, and cloud technologies, while its partner brings decades of experience in defense systems integration, program management, and mission support.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "This joint venture represents a powerful combination of capabilities," said the company's Chief Executive Officer. "By joining forces with a proven defense contractor, we can deliver comprehensive solutions that neither company could provide independently. Together, we're positioned to address the DoD's most challenging technology requirements."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The joint venture delivers AI-enabled defense systems through development and integration of artificial intelligence capabilities into defense platforms, including autonomous systems, predictive maintenance, and decision support. Command and control modernization efforts focus on modernizing legacy systems with advanced analytics, real-time data fusion, and enhanced situational awareness. Logistics optimization leverages AI-powered solutions that improve supply chain visibility, predict maintenance requirements, and optimize resource allocation. Cybersecurity operations provide advanced threat detection and response capabilities tailored for defense networks and classified environments. Training and simulation capabilities deliver next-generation training systems leveraging AI, virtual reality, and advanced simulation technologies.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Addressing DoD Priorities
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The joint venture is specifically designed to address key DoD modernization priorities, including the adoption of artificial intelligence, digital transformation, and the integration of advanced technologies into warfighting capabilities. The alliance positions both companies to compete for major defense programs requiring these capabilities.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "The Department of Defense has made clear that AI and advanced technologies are central to maintaining military advantage," noted the company's Vice President of Defense Solutions. "This joint venture positions us to be a key partner in that transformation, bringing together the technology innovation and defense expertise needed to deliver mission success."
            </p>

            <p className="text-gray-700 leading-relaxed">
              Initial focus areas for the joint venture include Joint All-Domain Command and Control (JADC2) solutions that enable seamless data sharing and decision making across military domains. Predictive logistics capabilities leverage AI-powered systems that anticipate maintenance needs and optimize supply chain operations. Autonomous systems development and integration addresses air, ground, and maritime platforms. Cyber operations provide advanced capabilities for defensive and offensive cyber operations.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Security and Compliance
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The joint venture inherits the security credentials of both parent companies, including Thalen's FedRAMP High authorization and CMMC Level 2 certification. The entity will maintain facilities and personnel clearances appropriate for handling classified information up to the Secret level, with plans to expand to Top Secret capabilities.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Security is paramount in defense work," said the company's Chief Information Security Officer. "We've structured the joint venture to meet the most stringent security requirements from day one. Our combined security infrastructure provides the foundation for handling the DoD's most sensitive programs."
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Leadership and Governance
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The joint venture will be led by an experienced management team drawn from both parent companies, with a board of directors representing both organizations. The governance structure ensures that the venture benefits from the strategic guidance of both partners while maintaining operational independence.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "We've assembled a leadership team with deep experience in defense programs and advanced technology," said the CEO. "This team has the expertise and relationships needed to establish the joint venture as a trusted partner for the DoD's most important missions."
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Market Opportunity
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The joint venture is positioned to pursue a significant pipeline of defense opportunities, including programs related to AI adoption, digital transformation, and modernization of legacy systems. The combined capabilities of both parent companies enable the venture to compete for programs that would be difficult for either company to pursue independently.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "The defense market opportunity for AI and advanced technologies is substantial and growing," noted the Vice President of Defense Solutions. "This joint venture positions us to capture a meaningful share of that opportunity while delivering real value to our defense clients."
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
              <Link href="/news/cmmc-certification" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-red-600 mb-2 block">Security</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Achieves CMMC Level 2 Certification
                </h4>
                <p className="text-sm text-gray-600">
                  Certification validates commitment to protecting controlled unclassified information.
                </p>
              </Link>
              <Link href="/news/federal-automation-contract" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2 block">Contract</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Awarded Federal Automation Contract
                </h4>
                <p className="text-sm text-gray-600">
                  Multi-year contract to modernize document processing for federal agency.
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
