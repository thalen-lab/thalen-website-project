import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check, ArrowRight, Shield, CheckCircle } from 'lucide-react';
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
          <Link href="/about/news-updates" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#E07020] transition-colors mb-8">
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

            {/* Highlight Box */}
            <div className="my-10 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">FedRAMP High Impact Level</h3>
                  <p className="text-gray-700">
                    FedRAMP High is the most rigorous authorization level, requiring compliance with 421 security controls. It is required for cloud systems that process highly sensitive government data where loss of confidentiality, integrity, or availability could have severe or catastrophic adverse effects.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Header */}
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
              The authorization process included extensive documentation, technical testing, and validation of:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Access Control</strong> – Comprehensive identity and access management ensuring only authorized personnel can access systems and data.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Audit and Accountability</strong> – Robust logging and monitoring capabilities that provide complete visibility into system activities.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Incident Response</strong> – Mature incident response capabilities with 24/7 security operations and rapid response procedures.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>System and Communications Protection</strong> – Advanced encryption, network segmentation, and boundary protection mechanisms.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Continuous Monitoring</strong> – Ongoing security assessment and authorization processes that maintain security posture over time.</span>
              </li>
            </ul>

            {/* Section Header */}
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
              The authorized platform includes:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>Intelligent Automation Platform</strong> – AI-powered process automation capabilities for document processing, workflow optimization, and decision support.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Data Analytics Environment</strong> – Secure analytics and business intelligence tools for mission data analysis and reporting.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Application Hosting</strong> – Secure infrastructure for hosting mission-critical applications with high availability and disaster recovery.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Integration Services</strong> – Secure APIs and integration capabilities for connecting with agency systems and external data sources.
              </li>
            </ul>

            {/* Section Header */}
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

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Streamlined Agency Adoption
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Federal agencies can leverage Thalen's FedRAMP High authorization to accelerate their own cloud adoption initiatives. The authorization package is available through the FedRAMP Marketplace, enabling agencies to review security documentation and issue their own Authority to Operate (ATO) based on the existing authorization.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "FedRAMP's 'do once, use many' approach means agencies can benefit from our security investment without duplicating assessment efforts," explained the VP of Federal Solutions. "This significantly reduces the time and cost for agencies to adopt our cloud services."
            </p>

            {/* About Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              About Thalen Technologies
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thalen Technologies is a leading provider of intelligent automation, AI solutions, and digital transformation services for government and enterprise clients. With over 15 years of experience and a proven track record of delivering measurable outcomes, Thalen helps organizations modernize their operations, enhance security posture, and achieve mission objectives. The company is headquartered in Washington, D.C. with offices across the United States. For more information, visit{' '}
              <Link href="/" className="text-[#E07020] hover:underline">www.thalentech.com</Link>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              About FedRAMP
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The Federal Risk and Authorization Management Program (FedRAMP) is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services. FedRAMP enables agencies to rapidly adopt secure cloud solutions through reuse of security assessments across the federal government.
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
              <Link href="/news/stateramp-authorization" className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Compliance</span>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-[#E07020] transition-colors">
                  StateRAMP Authorization Achieved
                </h4>
                <p className="mt-2 text-sm text-gray-600">Cloud platform now authorized for state and local government deployments.</p>
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
