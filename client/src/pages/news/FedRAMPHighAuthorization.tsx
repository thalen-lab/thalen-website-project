import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react';
import { useState } from 'react';

export default function FedRAMPHighAuthorization() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Thalen Technologies Achieves FedRAMP High Authorization';
  
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
              { label: 'FedRAMP High Authorization' }
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700">
                Compliance
              </span>
              <span className="text-sm text-gray-500">October 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Thalen Technologies Achieves FedRAMP High Authorization
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Successfully completed FedRAMP High authorization for our government cloud platform, enabling secure federal deployments for the most sensitive government data.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Dateline */}
            <p className="text-gray-700 leading-relaxed">
              <strong>WASHINGTON, D.C. – October 22, 2025</strong> – Thalen Technologies, Inc., a leading provider of intelligent automation and AI solutions for government and enterprise clients, today announced that its Government Cloud Platform has achieved Federal Risk and Authorization Management Program (FedRAMP) High authorization, the highest level of security authorization available under the federal cloud security framework.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The FedRAMP High authorization demonstrates Thalen's commitment to meeting the most stringent security requirements for federal cloud deployments and positions the company to serve agencies handling the most sensitive government data and mission-critical operations.
            </p>

            <p className="text-gray-700 leading-relaxed">
              FedRAMP High represents the most rigorous authorization level within the federal cloud security framework, requiring compliance with 421 security controls across 17 control families. This authorization level is required for cloud systems that process highly sensitive government data where loss of confidentiality, integrity, or availability could have severe or catastrophic adverse effects on organizational operations, organizational assets, or individuals.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Rigorous Security Assessment
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The FedRAMP High authorization was achieved following a comprehensive security assessment conducted by an accredited Third Party Assessment Organization (3PAO). The assessment validated Thalen's implementation of 421 security controls across 17 control families, demonstrating the platform's ability to protect federal data at the highest impact level.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Achieving FedRAMP High authorization represents a significant milestone for Thalen Technologies," said the company's Chief Information Security Officer. "This authorization validates our long-standing commitment to security excellence and enables us to serve federal agencies with the most demanding security requirements."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The authorization process included extensive documentation, technical testing, and validation across multiple security domains. Access control measures ensure comprehensive identity and access management so that only authorized personnel can access systems and data. Audit and accountability capabilities provide robust logging and monitoring with complete visibility into system activities. Mature incident response capabilities include 24/7 security operations and rapid response procedures.
            </p>

            <p className="text-gray-700 leading-relaxed">
              System and communications protection features include advanced encryption, network segmentation, and boundary protection mechanisms. Continuous monitoring processes maintain ongoing security assessment and authorization to preserve security posture over time.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Enabling Secure Federal Deployments
            </h2>

            <p className="text-gray-700 leading-relaxed">
              With FedRAMP High authorization, Thalen Technologies can now provide cloud services to federal agencies across all impact levels, including those handling controlled unclassified information (CUI), personally identifiable information (PII), protected health information (PHI), and law enforcement sensitive data.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "This authorization opens doors to serve agencies that were previously unable to leverage our cloud capabilities due to their security requirements," noted the company's Vice President of Federal Solutions. "We can now support a broader range of federal missions while maintaining the security posture that agencies require."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The authorized platform includes Thalen's Intelligent Automation Platform with AI-powered process automation capabilities for document processing, workflow optimization, and decision support. The Data Analytics Environment provides secure analytics and business intelligence tools for mission data analysis and reporting. Application Hosting delivers secure infrastructure for hosting mission-critical applications with high availability and disaster recovery. Integration Services offer secure APIs and integration capabilities for connecting with agency systems and external data sources.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Commitment to Continuous Compliance
            </h2>

            <p className="text-gray-700 leading-relaxed">
              FedRAMP authorization is not a one-time achievement but an ongoing commitment to maintaining security excellence. Thalen Technologies has implemented comprehensive continuous monitoring processes that ensure the platform maintains its security posture and compliance status over time.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Security is not a destination but a journey," said the CISO. "Our continuous monitoring program ensures that we identify and address potential security issues proactively, maintaining the trust that federal agencies place in our platform."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The continuous monitoring program includes monthly vulnerability scanning, annual penetration testing, ongoing security control assessments, and regular reporting to the FedRAMP Program Management Office (PMO) and authorizing agencies.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Streamlined Agency Adoption
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Federal agencies can leverage Thalen's FedRAMP High authorization to accelerate their own cloud adoption initiatives. The authorization package is available through the FedRAMP Marketplace, enabling agencies to review security documentation and issue their own Authority to Operate (ATO) based on the existing authorization.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "The reuse of our FedRAMP authorization can save agencies months of assessment time and significant resources," explained the Vice President of Federal Solutions. "We've done the hard work of demonstrating compliance with 421 controls so that agencies can focus on their missions rather than duplicating security assessments."
            </p>

            <p className="text-gray-700 leading-relaxed">
              Thalen's Federal Solutions team is available to support agencies through the ATO process, providing documentation, technical briefings, and implementation support to ensure successful deployments.
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
              <Link href="/news/cmmc-certification" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2 block">Compliance</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Achieves CMMC Level 2 Certification
                </h4>
                <p className="text-sm text-gray-600">
                  Certification validates commitment to protecting controlled unclassified information.
                </p>
              </Link>
              <Link href="/news/security-operations-center" className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider text-red-600 mb-2 block">Security</span>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors mb-2">
                  Thalen Technologies Opens Expanded Cybersecurity Operations Center
                </h4>
                <p className="text-sm text-gray-600">
                  New 24/7 Security Operations Center provides enhanced threat monitoring and incident response.
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
