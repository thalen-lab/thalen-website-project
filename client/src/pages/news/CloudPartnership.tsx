import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react';
import { useState } from 'react';

export default function CloudPartnership() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Thalen Technologies Announces Strategic Partnership with Leading Cloud Provider';
  
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
              { label: 'Strategic Cloud Partnership' }
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
              <span className="text-sm text-gray-500">November 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Thalen Technologies Announces Strategic Partnership with Leading Cloud Provider
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              New technology partnerships expand capabilities in AI-powered automation, cloud services, and FedRAMP-authorized solutions for government clients.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Dateline */}
            <p className="text-gray-700 leading-relaxed">
              <strong>WASHINGTON, D.C. – November 18, 2025</strong> – Thalen Technologies, Inc., a leading provider of intelligent automation and AI solutions for government and enterprise clients, today announced a strategic partnership with a major cloud infrastructure provider to expand its capabilities in delivering secure, scalable cloud solutions for federal agencies and regulated industries.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The partnership combines Thalen's deep expertise in government technology modernization with advanced cloud infrastructure capabilities, enabling faster deployment of mission-critical applications while maintaining the highest levels of security and compliance required for federal operations.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Expanding Cloud Capabilities
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Under the terms of the partnership, Thalen Technologies will gain enhanced access to cloud infrastructure resources, specialized training programs, and joint go-to-market opportunities focused on the federal sector. The collaboration will accelerate Thalen's ability to deliver comprehensive cloud solutions that meet the unique requirements of government clients.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "This partnership represents a significant milestone in our cloud strategy," said the company's Chief Technology Officer. "By combining our proven expertise in federal IT modernization with world-class cloud infrastructure, we can deliver even greater value to our government clients as they navigate their digital transformation journeys."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The partnership enables accelerated FedRAMP deployments through streamlined pathways to deploy applications on FedRAMP-authorized infrastructure, reducing time-to-authorization by up to 40%. Native integration with advanced AI and machine learning services enables rapid development and deployment of intelligent automation solutions. Enhanced capabilities for designing and implementing hybrid cloud environments span on-premises data centers and multiple cloud providers. Access to advanced security tools and services complements Thalen's existing cybersecurity offerings.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Benefits for Federal Clients
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Federal agencies will benefit from the partnership through improved service delivery, enhanced security capabilities, and access to cutting-edge cloud technologies. The collaboration enables Thalen to offer more comprehensive solutions that address the full spectrum of government cloud requirements.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Our federal clients are increasingly looking for partners who can deliver end-to-end cloud solutions," noted the company's Vice President of Federal Solutions. "This partnership strengthens our ability to serve as a trusted advisor and implementation partner for agencies at every stage of their cloud journey."
            </p>

            <p className="text-gray-700 leading-relaxed">
              Government clients will experience faster time to value through pre-configured solutions and accelerators that reduce deployment timelines and enable agencies to realize benefits more quickly. Cost optimization tools and expertise help agencies optimize their cloud spending and demonstrate ROI. Joint compliance frameworks ensure solutions meet FedRAMP, FISMA, and other federal security requirements. Early access to emerging cloud capabilities enables agencies to leverage the latest technologies for mission advantage.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Joint Solution Development
            </h2>

            <p className="text-gray-700 leading-relaxed">
              As part of the partnership, Thalen and its cloud partner will collaborate on developing joint solutions specifically designed for federal use cases. Initial focus areas include intelligent document processing, predictive maintenance for government facilities, and citizen services modernization.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "We're excited to work together on solutions that address real challenges facing federal agencies," said the CTO. "By combining our respective strengths, we can deliver innovative solutions that would be difficult to achieve independently."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The partnership also includes joint investment in a Federal Innovation Lab where Thalen and its partner will develop and demonstrate new capabilities for government clients. The lab will serve as a proving ground for emerging technologies and a resource for agencies exploring modernization options.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Training and Certification
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thalen Technologies will expand its cloud expertise through comprehensive training and certification programs. The company plans to significantly increase its number of certified cloud architects and engineers over the next 12 months, ensuring deep technical capabilities across its delivery teams.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Investing in our people is essential to delivering on the promise of this partnership," said the company's Chief Operating Officer. "We're committed to building a team with the skills and certifications needed to deliver world-class cloud solutions for our government clients."
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Looking Ahead
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The strategic partnership is expected to generate significant growth opportunities for Thalen Technologies while enabling federal agencies to accelerate their cloud adoption initiatives. Both organizations are committed to ongoing collaboration and continuous improvement of joint offerings.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Federal agencies interested in learning more about Thalen's enhanced cloud capabilities can contact the company's Federal Solutions team or visit the company's website for additional information.
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
              <Link href="/news/federal-practice-expansion" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 block">Company News</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Expands Federal Practice with New Leadership
                </h4>
                <p className="text-sm text-gray-600">
                  New executive hires and expanded capabilities position Thalen for continued growth.
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
