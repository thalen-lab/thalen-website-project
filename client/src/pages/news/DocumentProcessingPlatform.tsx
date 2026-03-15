import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react';
import { useState } from 'react';

export default function DocumentProcessingPlatform() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Thalen Technologies Launches AI-Powered Document Processing Platform';
  
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
              { label: 'AI Document Processing Platform' }
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-green-50 text-green-700">
                Technology
              </span>
              <span className="text-sm text-gray-500">July 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Thalen Technologies Launches AI-Powered Document Processing Platform
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              New intelligent document processing solution reduces manual review time by 85% while maintaining 99.7% accuracy for federal agencies handling high-volume document workflows.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Dateline */}
            <p className="text-gray-700 leading-relaxed">
              <strong>WASHINGTON, D.C. – July 8, 2025</strong> – Thalen Technologies, Inc., a leading provider of intelligent automation and AI solutions for government and enterprise clients, today announced the launch of its next-generation Intelligent Document Processing (IDP) platform, designed specifically to address the unique challenges federal agencies face in managing high-volume document workflows.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The new platform leverages advanced artificial intelligence, machine learning, and natural language processing to automate the classification, extraction, and validation of data from diverse document types. Early adopters have reported processing time reductions of up to 85% while achieving accuracy rates exceeding 99.7%.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Platform Capabilities
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The platform delivers four core capabilities essential to modern document processing. AI-powered classification automatically categorizes documents across more than 200 document types with 99.5% accuracy using advanced machine learning models. Intelligent extraction captures structured data from unstructured documents including handwritten forms, scanned images, and complex layouts. Real-time processing handles documents in seconds rather than hours, enabling same-day turnaround for time-sensitive workflows. Built-in validation rules and human-in-the-loop workflows ensure accuracy for high-stakes decisions.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Addressing Federal Document Challenges
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Federal agencies process billions of documents annually, from benefit applications and tax forms to immigration paperwork and healthcare records. Traditional manual processing is slow, error-prone, and resource-intensive. The new IDP platform addresses these challenges with purpose-built capabilities for government document workflows.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Federal agencies are drowning in paper," said the company's Chief Technology Officer. "Our new platform gives them the tools to transform document processing from a bottleneck into a competitive advantage. We've combined the latest advances in AI with deep understanding of federal requirements to create a solution that delivers real results."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The platform provides multi-format support that processes PDFs, images, emails, faxes, and electronic forms with equal accuracy, handling the diverse document types common in government operations. Advanced OCR capabilities accurately extract data from handwritten forms and annotations, a critical requirement for many federal workflows. Automatic identification and protection of personally identifiable information ensures compliance with federal privacy requirements. Complete logging of all processing activities supports compliance requirements and enables quality assurance reviews. RESTful APIs enable seamless integration with existing agency systems, case management platforms, and workflow tools.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Proven Results
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The platform has been validated through pilot deployments with multiple federal agencies, demonstrating significant improvements in processing efficiency and accuracy.
            </p>

            <p className="text-gray-700 leading-relaxed">
              A federal benefits agency reduced application processing time from 5 days to 4 hours, enabling faster service delivery to citizens. A healthcare agency achieved 99.7% accuracy in claims data extraction, reducing rework and payment errors. An immigration agency processed three times more applications with existing staff by automating document intake and classification. A revenue agency reduced manual data entry by 90%, redirecting staff to higher-value audit and compliance activities.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "The results from our pilot deployments exceeded our expectations," noted the company's Vice President of Product. "Agencies are seeing immediate, measurable improvements in their operations. More importantly, they're able to serve citizens faster and more accurately."
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Security and Compliance
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The IDP platform is deployed on Thalen's FedRAMP High authorized infrastructure, ensuring it meets the most stringent federal security requirements. The platform also supports HIPAA compliance for healthcare document processing and includes features specifically designed for handling Controlled Unclassified Information (CUI).
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Security is non-negotiable for federal document processing," said the company's Chief Information Security Officer. "We've built security into every layer of the platform, from data encryption and access controls to audit logging and continuous monitoring. Agencies can trust that their sensitive documents are protected."
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Implementation and Support
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thalen offers comprehensive implementation services to help agencies deploy the IDP platform quickly and effectively. The company's experienced team works with agencies to configure the platform for their specific document types, integrate with existing systems, and train staff on platform capabilities.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "We don't just deliver software—we deliver outcomes," said the Vice President of Product. "Our implementation team has deep experience in federal document workflows and works closely with agencies to ensure they realize the full value of the platform."
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Availability
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The Intelligent Document Processing platform is available immediately through Thalen's existing contract vehicles including GSA MAS, CIO-SP3, and SEWP V. Federal agencies interested in learning more can schedule a demonstration through the company's website or contact the Federal Solutions team directly.
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
              <Link href="/news/federal-automation-contract" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2 block">Contract</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Awarded Federal Automation Contract
                </h4>
                <p className="text-sm text-gray-600">
                  Multi-year contract to modernize document processing for federal agency.
                </p>
              </Link>
              <Link href="/news/fedramp-high-authorization" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 block">Compliance</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Achieves FedRAMP High Authorization
                </h4>
                <p className="text-sm text-gray-600">
                  Successfully completed FedRAMP High authorization for our government cloud platform.
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
