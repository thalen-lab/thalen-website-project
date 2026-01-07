import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'wouter';
import { ArrowLeft, Linkedin, Twitter, Mail, Link2, Check, ArrowRight, Trophy, Star } from 'lucide-react';
import { useState } from 'react';

export default function GovTech100() {
  const [copied, setCopied] = useState(false);
  
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const articleTitle = 'Thalen Technologies Named to GovTech 100 List for Third Consecutive Year';
  
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
              { label: 'GovTech 100 Recognition' }
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-50 text-amber-700">
                Awards
              </span>
              <span className="text-sm text-gray-500">June 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
              Thalen Technologies Named to GovTech 100 List for Third Consecutive Year
            </h1>

            {/* Subtitle/Deck */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Recognition for innovative solutions that transform how government agencies deliver services and engage with citizens through intelligent automation and AI.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Dateline */}
            <p className="text-gray-700 leading-relaxed">
              <strong>WASHINGTON, D.C. – June 10, 2025</strong> – Thalen Technologies, Inc., a leading provider of intelligent automation and AI solutions for government and enterprise clients, has been named to the prestigious GovTech 100 list for the third consecutive year by Government Technology magazine. The annual list recognizes the 100 companies making the biggest impact on state and local government through technology innovation.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The recognition highlights Thalen's continued leadership in developing and deploying solutions that help government agencies modernize operations, improve citizen services, and achieve measurable mission outcomes. The company's inclusion on the list for three straight years demonstrates sustained excellence and ongoing commitment to government technology innovation.
            </p>

            {/* Award Highlight */}
            <div className="my-10 p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-500 rounded-xl">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">GovTech 100</h3>
                  <p className="text-gray-600">Three-Time Honoree: 2023, 2024, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="ml-2 text-sm font-medium text-gray-700">Recognized for Excellence in Government Technology Innovation</span>
              </div>
            </div>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Driving Government Innovation
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The GovTech 100 list is compiled annually by Government Technology magazine's editorial team, which evaluates companies based on their impact on government operations, innovation in product development, customer satisfaction, and overall contribution to the government technology ecosystem.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Being named to the GovTech 100 for the third consecutive year is a tremendous honor," said the company's Chief Executive Officer. "This recognition reflects our team's dedication to developing solutions that make a real difference for government agencies and the citizens they serve. We're proud to be part of a community of innovators working to transform public sector technology."
            </p>

            <p className="text-gray-700 leading-relaxed">
              Government Technology magazine specifically highlighted several areas where Thalen has demonstrated leadership:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>Intelligent Process Automation</strong> – Development of AI-powered automation solutions that have helped agencies reduce processing times by up to 85% while improving accuracy and compliance.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Citizen Service Modernization</strong> – Implementation of digital service delivery platforms that improve citizen experience and reduce wait times for government services.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Data-Driven Decision Making</strong> – Deployment of analytics solutions that enable agencies to leverage their data for better policy decisions and operational improvements.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Cybersecurity Excellence</strong> – Delivery of security solutions that help agencies protect sensitive data and maintain compliance with evolving requirements.
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Impact Across Government
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Over the past year, Thalen Technologies has expanded its impact across federal, state, and local government clients. The company's solutions are now deployed in agencies serving over 50 million citizens, processing millions of transactions annually and delivering billions of dollars in documented efficiency gains.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "The scale of impact we're achieving is remarkable," noted the company's Chief Operating Officer. "But what matters most is the individual citizen who gets their benefits faster, the caseworker who can focus on helping people instead of pushing paper, and the agency leader who can make better decisions with real-time data. That's what drives us."
            </p>

            <p className="text-gray-700 leading-relaxed">
              Key achievements over the past year include:
            </p>

            <ul className="space-y-4 my-8">
              <li className="text-gray-700 leading-relaxed">
                <strong>$200M+ in documented cost savings</strong> delivered to government clients through automation and process optimization
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>15 new agency deployments</strong> across federal, state, and local government
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>98% customer satisfaction rating</strong> based on independent surveys
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>50+ new automation use cases</strong> developed and deployed
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>99.9% platform availability</strong> maintained across all production deployments
              </li>
            </ul>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Commitment to Innovation
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thalen's continued recognition on the GovTech 100 reflects the company's ongoing investment in research and development. Over the past year, Thalen has introduced several new capabilities including advanced document processing, predictive analytics, and enhanced cybersecurity features designed specifically for government use cases.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "Innovation is in our DNA," said the company's Chief Technology Officer. "We're constantly exploring new technologies and approaches that can help government agencies work more effectively. Our R&D investments ensure that we stay ahead of the curve and continue delivering cutting-edge solutions to our clients."
            </p>

            <p className="text-gray-700 leading-relaxed">
              The company's innovation agenda for the coming year includes expanded AI capabilities, enhanced integration with emerging technologies, and new solutions designed to address evolving government priorities around equity, accessibility, and sustainability.
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Industry Leadership
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Beyond product development, Thalen Technologies has established itself as a thought leader in government technology. Company executives regularly speak at industry conferences, contribute to policy discussions, and share best practices through publications and webinars.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "We believe in giving back to the community that has supported our growth," noted the CEO. "By sharing our knowledge and experience, we hope to raise the bar for government technology across the board. When the whole ecosystem improves, everyone benefits—especially citizens."
            </p>

            {/* Section Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Looking Forward
            </h2>

            <p className="text-gray-700 leading-relaxed">
              As Thalen Technologies looks ahead, the company remains focused on expanding its impact and continuing to innovate. Key priorities include deepening partnerships with government agencies, expanding into new markets, and developing next-generation solutions that leverage emerging technologies like generative AI and advanced analytics.
            </p>

            <p className="text-gray-700 leading-relaxed">
              "This recognition motivates us to work even harder," said the CEO. "We're just getting started. The opportunities to transform government through technology are enormous, and we're committed to leading that transformation for years to come."
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
              About the GovTech 100
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The GovTech 100 is an annual list compiled by Government Technology magazine recognizing the 100 companies making the biggest impact on state and local government through technology innovation. The list is developed through a rigorous evaluation process that considers product innovation, market presence, customer satisfaction, and overall contribution to government technology advancement.
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
              <Link href="/news/government-it-contractor-award" className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Awards</span>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-[#E07020] transition-colors">
                  Recognized as Top Government IT Contractor 2025
                </h4>
                <p className="mt-2 text-sm text-gray-600">Industry recognition for excellence in government technology modernization.</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#E07020]">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
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
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
