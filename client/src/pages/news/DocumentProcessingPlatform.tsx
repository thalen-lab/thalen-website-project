import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check, ArrowRight, FileText, Zap, Brain, Target } from 'lucide-react';
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
          <Link href="/about/news-updates" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#E07020] transition-colors mb-8">
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

            {/* Feature Highlights */}
            <div className="my-10 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="p-3 bg-blue-600 rounded-xl w-fit mb-4">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered Classification</h3>
                <p className="text-sm text-gray-600">Automatically categorizes documents across 200+ document types with 99.5% accuracy using advanced machine learning models.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <div className="p-3 bg-green-600 rounded-xl w-fit mb-4">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Intelligent Extraction</h3>
                <p className="text-sm text-gray-600">Extracts structured data from unstructured documents including handwritten forms, scanned images, and complex layouts.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
                <div className="p-3 bg-purple-600 rounded-xl w-fit mb-4">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Real-Time Processing</h3>
                <p className="text-sm text-gray-600">Processes documents in seconds, not hours, enabling same-day turnaround for time-sensitive workflows.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                <div className="p-3 bg-orange-600 rounded-xl w-fit mb-4">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Validation & QA</h3>
                <p className="text-sm text-gray-600">Built-in validation rules and human-in-the-loop workflows ensure accuracy for high-stakes decisions.</p>
              </div>
            </div>

            {/* Section Header */}
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
              Key capabilities designed for federal use cases include:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>Multi-Format Support</strong> – Processes PDFs, images, emails, faxes, and electronic forms with equal accuracy, handling the diverse document types common in government operations.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Handwriting Recognition</strong> – Advanced OCR capabilities accurately extract data from handwritten forms and annotations, a critical requirement for many federal workflows.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>PII Detection and Redaction</strong> – Automatically identifies and protects personally identifiable information in accordance with federal privacy requirements.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Audit Trail</strong> – Complete logging of all processing activities supports compliance requirements and enables quality assurance reviews.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Integration APIs</strong> – RESTful APIs enable seamless integration with existing agency systems, case management platforms, and workflow tools.
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Proven Results
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The platform has been validated through pilot deployments with multiple federal agencies, demonstrating significant improvements in processing efficiency and accuracy:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>Benefits Administration</strong> – A federal benefits agency reduced application processing time from 5 days to 4 hours, enabling faster service delivery to citizens.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Healthcare Claims</strong> – A healthcare agency achieved 99.7% accuracy in claims data extraction, reducing rework and payment errors.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Immigration Services</strong> – An immigration agency processed 3x more applications with existing staff by automating document intake and classification.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Tax Processing</strong> – A revenue agency reduced manual data entry by 90%, redirecting staff to higher-value audit and compliance activities.
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              "The results from our pilot deployments exceeded our expectations," noted the company's Vice President of Product. "Agencies are seeing immediate, measurable improvements in their operations. More importantly, they're able to serve citizens faster and more accurately."
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Security and Compliance
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The IDP platform is deployed on Thalen's FedRAMP High authorized infrastructure, ensuring it meets the most stringent federal security requirements. The platform also supports HIPAA compliance for healthcare document processing and includes features specifically designed for handling Controlled Unclassified Information (CUI).
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Security is non-negotiable for federal document processing," said the company's Chief Information Security Officer. "We've built security into every layer of the platform, from data encryption and access controls to audit logging and continuous monitoring. Agencies can trust that their sensitive documents are protected."
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Continuous Learning
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Unlike traditional rules-based document processing systems, Thalen's IDP platform continuously learns and improves from user feedback. When human reviewers correct extraction errors or validate uncertain results, the system incorporates these corrections to improve future accuracy.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "The platform gets smarter over time," explained the CTO. "Each correction teaches the system something new. Agencies that have been using the platform for several months are seeing accuracy rates continue to climb as the models learn their specific document types and data patterns."
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Availability
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The Intelligent Document Processing platform is available immediately for federal agencies through Thalen's existing contract vehicles, including GSA MAS, CIO-SP3, and SEWP V. The company offers flexible deployment options including cloud-hosted, hybrid, and on-premises configurations to meet diverse agency requirements.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Federal agencies interested in learning more about the IDP platform can request a demonstration through Thalen's website or contact the Federal Solutions team directly.
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
              <Link href="/news/federal-automation-contract" className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Company News</span>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-[#E07020] transition-colors">
                  Awarded $15M Federal Automation Contract
                </h4>
                <p className="mt-2 text-sm text-gray-600">Multi-year contract to modernize federal agency operations through intelligent automation.</p>
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
