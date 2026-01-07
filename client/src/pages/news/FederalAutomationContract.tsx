import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check, ArrowRight, DollarSign, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function FederalAutomationContract() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Thalen Technologies Awarded $15M Federal Automation Contract';
  
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
              { label: '$15M Federal Contract Award' }
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700">
                Company News
              </span>
              <span className="text-sm text-gray-500">August 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Thalen Technologies Awarded $15M Federal Automation Contract
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Multi-year contract to modernize federal agency operations through intelligent automation and process optimization, delivering measurable efficiency gains.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Dateline */}
            <p className="text-gray-700 leading-relaxed">
              <strong>WASHINGTON, D.C. – August 12, 2025</strong> – Thalen Technologies, Inc., a leading provider of intelligent automation and AI solutions for government and enterprise clients, today announced it has been awarded a $15 million, five-year contract to implement intelligent automation solutions for a major federal agency. The contract will support the agency's digital transformation initiatives and modernize critical operational processes.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Under the terms of the contract, Thalen will deploy its proven automation platform and methodology to streamline document-intensive workflows, reduce manual processing times, and improve service delivery to agency stakeholders. The engagement represents one of the largest automation initiatives undertaken by the agency to date.
            </p>

            {/* Highlight Box */}
            <div className="my-10 p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-600 rounded-xl">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contract Details</h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500">Contract Value</p>
                      <p className="text-2xl font-bold text-gray-900">$15M</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="text-2xl font-bold text-gray-900">5 Years</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Expected ROI</p>
                      <p className="text-2xl font-bold text-gray-900">300%+</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Processes Automated</p>
                      <p className="text-2xl font-bold text-gray-900">50+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Transforming Agency Operations
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The contract focuses on automating high-volume, repetitive processes that currently consume significant staff time and resources. By implementing intelligent automation, the agency expects to redirect thousands of staff hours annually toward higher-value mission activities while improving accuracy and reducing processing backlogs.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "We are honored to be selected for this transformative engagement," said the company's Chief Executive Officer. "This contract reflects the agency's confidence in our ability to deliver measurable results and demonstrates the growing recognition of intelligent automation as a critical enabler of government modernization."
            </p>

            <p className="text-gray-700 leading-relaxed">
              Key focus areas of the automation initiative include:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>Document Processing Automation</strong> – Implementation of AI-powered document classification, data extraction, and validation to accelerate processing of incoming correspondence, applications, and supporting documentation.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Workflow Optimization</strong> – Redesign and automation of end-to-end business processes to eliminate bottlenecks, reduce handoffs, and improve cycle times.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Data Integration</strong> – Development of automated data flows between legacy systems and modern platforms to improve data quality and reduce manual data entry.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Reporting and Analytics</strong> – Implementation of automated reporting capabilities to provide real-time visibility into operational performance and support data-driven decision making.
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Proven Methodology
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thalen will leverage its RAPID Framework methodology, which has been refined through dozens of successful federal automation engagements. The framework emphasizes rapid value delivery, stakeholder engagement, and sustainable change management to ensure lasting results.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Our approach goes beyond technology implementation," noted the company's Vice President of Federal Solutions. "We work closely with agency stakeholders to understand their unique challenges, identify the highest-impact automation opportunities, and build internal capabilities that ensure long-term success."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The engagement will be executed in phases, with initial automation deployments expected within the first 90 days. This phased approach allows the agency to realize early benefits while building momentum for broader transformation.
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Expected Outcomes
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Based on Thalen's experience with similar engagements, the agency anticipates significant improvements across multiple dimensions:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>85% reduction</strong> in manual processing time for document-intensive workflows</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>99.5% accuracy</strong> in automated data extraction and validation</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>60% faster</strong> end-to-end processing times for key workflows</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>$45M+ in projected savings</strong> over the contract period through efficiency gains</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>50,000+ staff hours</strong> redirected annually to mission-critical activities</span>
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Building on Success
            </h2>

            <p className="text-gray-700 leading-relaxed">
              This contract award builds on Thalen's track record of successful federal automation engagements. Over the past five years, the company has delivered automation solutions that have generated over $200 million in documented cost savings for federal clients while improving service delivery and employee satisfaction.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Every engagement teaches us something new about how to deliver value in the federal environment," said the CEO. "We're constantly refining our approach based on lessons learned and emerging technologies. This contract gives us the opportunity to apply everything we've learned to help another agency achieve its modernization goals."
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Contract Vehicle
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The contract was awarded through the GSA Multiple Award Schedule (MAS) IT Category, demonstrating the efficiency of government-wide acquisition vehicles for procuring innovative technology solutions. Thalen maintains multiple contract vehicles to facilitate federal procurement, including GSA MAS, CIO-SP3, and SEWP V.
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
              <Link href="/news/federal-practice-expansion" className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Company News</span>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-[#E07020] transition-colors">
                  Thalen Technologies Expands Federal Practice with New Leadership
                </h4>
                <p className="mt-2 text-sm text-gray-600">New executive hires and expanded capabilities position Thalen for continued growth.</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#E07020]">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/news/document-processing-platform" className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Technology</span>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-[#E07020] transition-colors">
                  Launch of AI-Powered Document Processing Platform
                </h4>
                <p className="mt-2 text-sm text-gray-600">New intelligent document processing solution reduces manual review time by 85%.</p>
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
