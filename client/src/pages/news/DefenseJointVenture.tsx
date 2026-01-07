import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check, ArrowRight, Handshake, Target, Rocket } from 'lucide-react';
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
          <Link href="/about/news-updates" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#E07020] transition-colors mb-8">
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

            {/* Partnership Highlights */}
            <div className="my-10 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-purple-600 rounded-xl">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Alliance</h3>
                  <p className="text-gray-700">Combining complementary strengths to deliver comprehensive defense solutions</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white/60 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">AI + ML</p>
                  <p className="text-sm text-gray-600 mt-1">Advanced Intelligence</p>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">Defense</p>
                  <p className="text-sm text-gray-600 mt-1">Systems Integration</p>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">Mission</p>
                  <p className="text-sm text-gray-600 mt-1">Critical Solutions</p>
                </div>
              </div>
            </div>

            {/* Section Header */}
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
              Key capabilities of the joint venture include:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>AI-Enabled Defense Systems</strong> – Development and integration of artificial intelligence capabilities into defense platforms, including autonomous systems, predictive maintenance, and decision support.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Command and Control Modernization</strong> – Modernization of legacy command and control systems with advanced analytics, real-time data fusion, and enhanced situational awareness.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Logistics Optimization</strong> – AI-powered logistics solutions that improve supply chain visibility, predict maintenance requirements, and optimize resource allocation.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Cybersecurity Operations</strong> – Advanced threat detection and response capabilities tailored for defense networks and classified environments.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Training and Simulation</strong> – Next-generation training systems leveraging AI, virtual reality, and advanced simulation technologies.
              </li>
            </ul>

            {/* Section Header */}
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
              Initial focus areas for the joint venture include:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <Target className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <span><strong>Joint All-Domain Command and Control (JADC2)</strong> – Solutions that enable seamless data sharing and decision making across military domains.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <Target className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <span><strong>Predictive Logistics</strong> – AI-powered systems that anticipate maintenance needs and optimize supply chain operations.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <Target className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <span><strong>Autonomous Systems</strong> – Development and integration of autonomous capabilities for air, ground, and maritime platforms.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <Target className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <span><strong>Cyber Operations</strong> – Advanced capabilities for defensive and offensive cyber operations.</span>
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Security and Compliance
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The joint venture inherits the security credentials of both parent companies, including Thalen's FedRAMP High authorization and CMMC Level 2 certification. The entity will maintain facilities and personnel clearances appropriate for handling classified information up to the Secret level, with plans to expand to Top Secret capabilities.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Security is paramount in defense work," said the company's Chief Information Security Officer. "We've structured the joint venture to meet the most stringent security requirements from day one. Our combined security infrastructure provides the foundation for handling the DoD's most sensitive programs."
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Leadership and Operations
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The joint venture will be led by an experienced management team drawn from both parent companies, with deep expertise in defense programs and technology delivery. The entity will maintain its own facilities, contracts, and workforce while leveraging the resources and capabilities of both parent organizations.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "We've assembled a leadership team with the experience and credentials to succeed in the defense market," noted the CEO. "Our team includes veterans of major defense programs who understand what it takes to deliver mission-critical capabilities on time and on budget."
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Market Opportunity
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The joint venture enters a defense market increasingly focused on technology modernization and digital transformation. DoD spending on AI, cloud computing, and advanced analytics is projected to grow significantly over the coming years, creating substantial opportunities for companies with the right capabilities and credentials.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "The timing is right for this alliance," said the VP of Defense Solutions. "The DoD is actively seeking partners who can help accelerate technology adoption and deliver innovative solutions. This joint venture positions us to capture a meaningful share of that growing market."
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
              <Link href="/news/cloud-partnership" className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">Partnership</span>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-[#E07020] transition-colors">
                  Strategic Partnership with Leading Cloud Provider
                </h4>
                <p className="mt-2 text-sm text-gray-600">New technology partnerships expand our capabilities in AI-powered automation.</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#E07020]">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
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
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
