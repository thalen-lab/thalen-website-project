import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function GovernmentITContractorAward() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Thalen Technologies Recognized as Top Government IT Contractor 2025';
  
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
              { label: 'Top Government IT Contractor 2025' }
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-50 text-amber-700">
                Awards
              </span>
              <span className="text-sm text-gray-500">December 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Thalen Technologies Recognized as Top Government IT Contractor 2025
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Industry recognition for excellence in government technology modernization, automation solutions, and mission-critical implementations.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Dateline */}
            <p className="text-gray-700 leading-relaxed">
              <strong>WASHINGTON, D.C. – December 15, 2025</strong> – Thalen Technologies, Inc., a leading provider of intelligent automation and AI solutions for government and enterprise clients, has been named a Top Government IT Contractor for 2025 by Government Technology Awards, recognizing the company's exceptional contributions to federal technology modernization and mission-critical service delivery.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The prestigious award acknowledges Thalen's consistent track record of delivering transformative technology solutions that help government agencies improve operational efficiency, enhance citizen services, and achieve measurable mission outcomes. The recognition comes after a year of significant growth and successful project deliveries across multiple federal agencies.
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Excellence in Government Technology
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The Government Technology Awards evaluates contractors based on multiple criteria including project outcomes, innovation, customer satisfaction, and overall impact on government operations. Thalen Technologies distinguished itself through its comprehensive approach to technology modernization that combines cutting-edge automation capabilities with deep understanding of federal requirements.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "We are deeply honored to receive this recognition from Government Technology Awards," said the company's Chief Executive Officer. "This award reflects the dedication of our entire team and our unwavering commitment to helping federal agencies achieve their missions through innovative technology solutions. Our success is measured by the success of our government partners."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The award specifically highlighted Thalen's work in several key areas that have driven significant improvements for federal clients:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>Intelligent Process Automation</strong> – Implementation of AI-powered automation solutions that have reduced manual processing times by up to 85% across multiple agencies, freeing staff to focus on higher-value mission activities.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Cloud Modernization</strong> – Successful migration of legacy systems to FedRAMP-authorized cloud environments, improving system reliability, security posture, and operational agility.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Cybersecurity Excellence</strong> – Deployment of zero trust architecture implementations and continuous monitoring solutions that have strengthened federal cybersecurity defenses.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Data Analytics & AI</strong> – Development of advanced analytics platforms that enable data-driven decision making and predictive capabilities for mission-critical operations.
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Measurable Impact
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Throughout 2025, Thalen Technologies delivered measurable results that demonstrate the value of its approach to government technology modernization:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>$47M in documented cost savings</strong> for federal clients through automation and process optimization initiatives
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>99.7% system availability</strong> maintained across all managed government platforms
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>12 successful FedRAMP authorizations</strong> supported for cloud service implementations
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>98% customer satisfaction rating</strong> based on independent surveys of government clients
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              "The results speak for themselves," noted the company's Chief Operating Officer. "Our clients are achieving real, measurable improvements in their operations. Whether it's reducing processing times, cutting costs, or improving service delivery to citizens, we're committed to delivering outcomes that matter."
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Industry Recognition
            </h2>

            <p className="text-gray-700 leading-relaxed">
              This award adds to Thalen's growing list of industry recognitions, including being named to the GovTech 100 list for three consecutive years and receiving multiple excellence awards for specific project implementations. The company's commitment to quality and innovation continues to set it apart in the competitive government contracting landscape.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Government Technology Awards noted that Thalen's approach to combining technical excellence with deep understanding of government missions was a key differentiator. The company's investments in obtaining and maintaining critical certifications including FedRAMP High authorization and CMMC Level 2 certification demonstrate its commitment to meeting the highest standards required for federal work.
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Looking Forward
            </h2>

            <p className="text-gray-700 leading-relaxed">
              As Thalen Technologies enters 2026, the company remains focused on expanding its capabilities and deepening its partnerships with federal agencies. Key initiatives include enhanced AI governance services to help agencies comply with new federal AI requirements, expanded cybersecurity offerings aligned with evolving threat landscapes, and continued investment in talent and technology.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "This recognition motivates us to continue pushing the boundaries of what's possible in government technology," said the CEO. "We're excited about the opportunities ahead and remain committed to being a trusted partner for agencies seeking to modernize their operations and better serve the American public."
            </p>

            {/* About Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              About Thalen Technologies
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thalen Technologies is a leading provider of intelligent automation, AI solutions, and digital transformation services for government and enterprise clients. With over 15 years of experience and a proven track record of delivering measurable outcomes, Thalen helps organizations modernize their operations, enhance security posture, and achieve mission objectives. The company is headquartered in Washington, D.C. with offices across the United States. For more information, visit{' '}
              <Link href="/" className="text-[#FF6B35] hover:underline">www.thalentech.com</Link>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              About Government Technology Awards
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Government Technology Awards is an independent organization that recognizes excellence in government technology and the contractors who deliver innovative solutions to public sector clients. The annual awards program evaluates companies based on project outcomes, innovation, customer satisfaction, and overall contribution to government modernization efforts.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related News</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/news/federal-practice-expansion" className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Company News</span>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors">
                  Thalen Technologies Expands Federal Practice with New Leadership
                </h4>
                <p className="mt-2 text-sm text-gray-600">New executive hires and expanded capabilities position Thalen for continued growth.</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#FF6B35]">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/news/govtech-100" className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Awards</span>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors">
                  Named to GovTech 100 List for Third Consecutive Year
                </h4>
                <p className="mt-2 text-sm text-gray-600">Recognition for innovative solutions transforming government service delivery.</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#FF6B35]">
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
