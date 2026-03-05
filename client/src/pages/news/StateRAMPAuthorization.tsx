import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check, ArrowRight, Building2, MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function StateRAMPAuthorization() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Thalen Technologies Achieves StateRAMP Authorization';
  
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
              { label: 'StateRAMP Authorization' }
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
              <span className="text-sm text-gray-500">March 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Thalen Technologies Achieves StateRAMP Authorization
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Cloud platform now authorized for state and local government deployments, expanding Thalen's public sector reach and enabling secure cloud adoption across all levels of government.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Dateline */}
            <p className="text-gray-700 leading-relaxed">
              <strong>WASHINGTON, D.C. – March 18, 2025</strong> – Thalen Technologies, Inc., a leading provider of intelligent automation and AI solutions for government and enterprise clients, today announced that its Government Cloud Platform has achieved StateRAMP authorization, enabling state and local government agencies to leverage Thalen's cloud services with confidence in their security posture.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The StateRAMP authorization complements Thalen's existing FedRAMP High authorization, creating a comprehensive compliance portfolio that addresses the security requirements of government clients at all levels. State and local agencies can now adopt Thalen's cloud solutions knowing they meet rigorous security standards validated through independent assessment.
            </p>

            {/* Highlight Box */}
            <div className="my-10 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">StateRAMP Authorization</h3>
                  <p className="text-gray-700 mb-4">
                    StateRAMP provides a standardized approach to cloud security verification for state and local governments, modeled after the federal FedRAMP program. Authorization demonstrates that cloud services meet security requirements appropriate for government data.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4" /> Security Verified
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4" /> Continuous Monitoring
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4" /> Third-Party Assessed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Expanding Public Sector Reach
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The StateRAMP authorization significantly expands Thalen's addressable market in the public sector. With over 90,000 state and local government entities in the United States, the authorization opens doors to a vast market of agencies seeking secure, modern cloud solutions.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "StateRAMP authorization is a natural extension of our commitment to serving government clients at all levels," said the company's Chief Executive Officer. "State and local agencies face many of the same challenges as federal agencies—legacy systems, manual processes, and increasing citizen expectations. Now they can leverage our proven solutions with confidence in their security."
            </p>

            <p className="text-gray-700 leading-relaxed">
              Key benefits for state and local government clients include:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>Streamlined Procurement</strong> – StateRAMP authorization simplifies the security review process, enabling faster procurement decisions and reduced time to deployment.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Verified Security</strong> – Independent third-party assessment provides assurance that Thalen's platform meets rigorous security standards appropriate for government data.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Continuous Monitoring</strong> – Ongoing security monitoring and regular assessments ensure the platform maintains its security posture over time.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Reciprocity</strong> – StateRAMP authorization is recognized across participating states, reducing duplicative security reviews.
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Solutions for State and Local Government
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thalen's StateRAMP-authorized platform supports a range of solutions designed to address the unique challenges facing state and local government agencies:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>Citizen Services Modernization</strong> – Digital platforms that improve citizen experience and reduce wait times for government services including licensing, permits, and benefits.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Process Automation</strong> – Intelligent automation solutions that streamline back-office operations, reduce manual processing, and improve accuracy.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Data Analytics</strong> – Analytics platforms that help agencies leverage their data for better policy decisions and operational improvements.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Document Management</strong> – AI-powered document processing solutions that automate classification, extraction, and routing of government documents.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Case Management</strong> – Modern case management systems for health and human services, child welfare, workforce development, and other programs.
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Addressing State and Local Challenges
            </h2>

            <p className="text-gray-700 leading-relaxed">
              State and local governments face unique challenges including budget constraints, aging infrastructure, workforce shortages, and increasing citizen expectations. Thalen's solutions are designed to help agencies do more with less while improving service delivery.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "State and local agencies are under tremendous pressure to modernize while managing tight budgets," noted the company's Vice President of State and Local Solutions. "Our cloud-based solutions offer a path to modernization without the capital investment and ongoing maintenance burden of traditional on-premises systems."
            </p>

            <p className="text-gray-700 leading-relaxed">
              Early adopters of Thalen's state and local solutions have achieved significant results:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>A state health department reduced benefits processing time by 70% through intelligent automation</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>A county government achieved an estimated $3M in annual savings by automating document-intensive workflows</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>A city improved citizen satisfaction scores by 40% after implementing digital service delivery</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>A state agency reduced case processing backlogs by 60% through workflow automation</span>
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Comprehensive Compliance Portfolio
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The StateRAMP authorization joins Thalen's comprehensive compliance portfolio, which includes FedRAMP High authorization, CMMC Level 2 certification, SOC 2 Type II attestation, and ISO 27001 certification. This portfolio enables Thalen to serve clients across the full spectrum of government and regulated industries.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Our investment in compliance demonstrates our commitment to meeting the security requirements of all our government clients," said the company's Chief Information Security Officer. "Whether federal, state, or local, agencies can trust that our platform meets the standards appropriate for their data and operations."
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Availability
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thalen's StateRAMP-authorized services are available immediately for state and local government agencies. The company offers flexible procurement options including direct contracts, cooperative purchasing agreements, and state-specific contract vehicles.
            </p>

            <p className="text-gray-700 leading-relaxed">
              State and local agencies interested in learning more about Thalen's solutions can request a demonstration through the company's website or contact the State and Local Solutions team directly.
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
              About StateRAMP
            </h2>

            <p className="text-gray-700 leading-relaxed">
              StateRAMP is a nonprofit membership organization that provides a standardized approach to cloud security verification for state and local governments. Modeled after the federal FedRAMP program, StateRAMP offers a common security framework that enables cloud service providers to demonstrate their security posture and helps government agencies make informed procurement decisions.
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
              <Link href="/news/fedramp-high-authorization" className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Compliance</span>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors">
                  Thalen Technologies Achieves FedRAMP High Authorization
                </h4>
                <p className="mt-2 text-sm text-gray-600">Successfully completed FedRAMP High authorization for our government cloud platform.</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#FF6B35]">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/news/cloud-partnership" className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">Partnership</span>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors">
                  Strategic Partnership with Leading Cloud Provider
                </h4>
                <p className="mt-2 text-sm text-gray-600">New technology partnerships expand our capabilities in AI-powered automation.</p>
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
