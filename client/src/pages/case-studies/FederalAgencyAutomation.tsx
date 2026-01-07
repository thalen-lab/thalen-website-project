import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function FederalAgencyAutomation() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Federal Agency Achieves 85% Process Automation';
  
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
    window.location.href = `mailto:?subject=${encodeURIComponent(articleTitle)}&body=${encodeURIComponent(`Read this case study: ${articleUrl}`)}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-4">
          <Breadcrumb
            items={[
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Federal Agency Process Automation' }
            ]}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <article className="container max-w-4xl py-12 md:py-16 lg:py-20">
          
          {/* Back Link */}
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#E07020] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            {/* Category Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700">
                Federal Government
              </span>
              <span className="text-sm text-gray-500">Intelligent Automation</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Federal Agency Achieves 85% Process Automation
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              How a large federal agency transformed benefit processing through intelligent automation while maintaining the highest security standards.
            </p>
          </header>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 mb-12 border-y border-gray-200">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E07020]">85%</div>
              <div className="text-sm text-gray-600 mt-1">Manual workflows automated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E07020]">67%</div>
              <div className="text-sm text-gray-600 mt-1">Reduction in processing time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E07020]">6 mo</div>
              <div className="text-sm text-gray-600 mt-1">Return on investment</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E07020]">$4.2M</div>
              <div className="text-sm text-gray-600 mt-1">Total contract value</div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* The Opportunity */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Opportunity
            </h2>

            <p className="text-gray-700 leading-relaxed">
              One of the hallmarks of successful government agencies is their commitment to continuous improvement. No matter how well they serve their constituents, they are always looking to deliver better outcomes and prepare for the next challenge. A large federal agency processing over 50,000 benefit applications monthly exemplified this mindset. Although the agency maintained high accuracy standards and strong security protocols, leadership recognized that manual workflows were creating unnecessary delays and preventing staff from focusing on complex cases requiring human judgment.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The agency could see that automation technology was evolving rapidly, transforming operations across both private and public sectors. Staff spent 70 percent of their time on repetitive data entry and validation tasks, leading to processing delays of 45 to 60 days. As the agency's Chief Operations Officer noted, efficiency, accuracy, and technology adoption would become core attributes for future success in federal service delivery.
            </p>

            <p className="text-gray-700 leading-relaxed">
              To secure its position in that future, the agency was determined to lead the adoption of intelligent automation. It aspired to reduce processing times for constituents, create a more engaging workplace for staff by eliminating tedious tasks, and establish a scalable foundation for handling future volume increases. The agency needed to accomplish all of this while maintaining strict TS/SCI compliance and FedRAMP High authorization requirements.
            </p>

            {/* The Solution */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Solution
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The agency needed to embrace automation technology to both improve existing operations and, more importantly, to create transformative new capabilities. A technology upgrade alone would not be enough. The agency also needed to evolve its operational culture by fundamentally changing how staff approached their work, making the entire organization more agile, faster at innovation, and far more efficient.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Working with Thalen Technologies, the agency implemented a phased automation strategy using UiPath's FedRAMP-authorized robotic process automation platform. The approach prioritized high-volume, rules-based processes that could deliver immediate impact while building toward comprehensive workflow automation. The implementation began with establishing secure infrastructure and comprehensive audit logging, then expanded systematically across twelve additional workflows including data validation, document processing, and inter-system transfers.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The technical architecture connected the RPA platform to fifteen legacy systems, including COBOL mainframes, using secure API gateways. Custom middleware enabled seamless data flow while maintaining strict security boundaries. Role-based access controls and encrypted credential vaults ensured that automation enhanced rather than compromised security posture. Real-time monitoring dashboards provided visibility into bot performance, while exception handling workflows ensured human oversight remained integral to the process.
            </p>

            {/* The Impact */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Impact
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The automation platform now processes the majority of routine benefit applications without human intervention, reducing average processing time from 45 days to just 15 days. Staff who previously spent their time on data entry now focus on complex cases requiring nuanced judgment and direct constituent interaction. The agency has redeployed 120 full-time equivalents to higher-value work, including fraud detection, quality assurance, and process improvement initiatives.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Error rates in data processing decreased by 94 percent, as automated validation eliminated the transcription mistakes inherent in manual data entry. The comprehensive audit logging actually strengthened the agency's security posture, providing unprecedented visibility into every system interaction. During the most recent security assessment, auditors noted that the automated workflows demonstrated better compliance with data handling procedures than previous manual processes.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Perhaps most significantly, the agency established a foundation for continuous innovation. The RPA platform now serves as an integration layer connecting legacy systems to modern applications, enabling capabilities that would have required years of system replacement. Staff trained in automation development have created fifteen additional bots to address emerging needs, demonstrating that the transformation extended beyond technology to fundamentally change how the organization approaches operational challenges.
            </p>

          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to transform your operations?</h3>
            <p className="text-gray-600 mb-6">
              Discover how intelligent automation can help your agency deliver better outcomes while maintaining the highest security standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-[#E07020] hover:bg-[#c55e15] text-white">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </div>

          {/* Social Share */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500">Share this case study:</span>
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
                  className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-600 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={shareViaEmail}
                  className="p-2 rounded-full bg-gray-100 hover:bg-[#E07020] hover:text-white text-gray-600 transition-colors"
                  aria-label="Share via Email"
                >
                  <Mail className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopyLink}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                  aria-label="Copy link"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
