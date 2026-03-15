import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { APP_TITLE } from '@/const';
import { motion } from 'framer-motion';

export default function Terms() {
  const lastUpdated = "December 15, 2024";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-[url('/assets/patterns/pattern-1.svg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Legal Framework
            </p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Terms of Service
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/90"
            >
              Last Updated: {lastUpdated}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-[oklch(0.20_0.05_250)]">
            <div className="space-y-10">
              <div className="prose prose-lg max-w-none prose-p:text-slate-600 prose-h2:text-[oklch(0.20_0.05_250)] prose-h2:font-semibold prose-h2:mb-4 prose-strong:text-[oklch(0.20_0.05_250)] prose-strong:font-semibold">
                <h2>Agreement to Terms</h2>
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and {APP_TITLE} ("Company," "we," "us," or "our") concerning your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.
                </p>

                <h2>Description of Services</h2>
                <p>
                  {APP_TITLE} provides enterprise technology consulting services, including but not limited to intelligent automation, data analytics, cloud infrastructure, cybersecurity, application development, and digital transformation services. Our services are designed for business and government clients seeking to optimize their technology operations and achieve strategic objectives.
                </p>

                <h2>User Accounts</h2>
                <p>
                  When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
                </p>
                <ul className="space-y-3 not-prose">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">Maintaining the confidentiality of your account credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">All activities that occur under your account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">Notifying us immediately of any unauthorized use of your account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">Ensuring your account information remains accurate and up-to-date</span>
                  </li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend or terminate your account if any information provided proves to be inaccurate, false, or misleading.
                </p>

                <h2>Intellectual Property Rights</h2>
                <p>
                  Unless otherwise indicated, the website and all content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by {APP_TITLE}, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
                </p>

                <h2>Prohibited Uses</h2>
                <p>
                  You agree not to use our services:
                </p>
                <ul className="space-y-3 not-prose">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">In any way that violates any applicable federal, state, local, or international law or regulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">To transmit any advertising or promotional material without our prior written consent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the services</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">To introduce any viruses, trojan horses, worms, or other material that is malicious or technologically harmful</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">To attempt to gain unauthorized access to any portion of the services or any other systems or networks</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <span className="text-slate-600">To use any robot, spider, or other automatic device to access the services for any purpose</span>
                  </li>
                </ul>

                <h2>Service Agreements</h2>
                <p>
                  Professional services provided by {APP_TITLE} are governed by separate service agreements, statements of work, or master service agreements executed between the parties. These Terms govern your use of our website and general services, while specific project engagements are subject to additional terms and conditions as set forth in applicable service agreements.
                </p>

                <h2>Confidentiality</h2>
                <p>
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our business relationship. This includes, but is not limited to, business strategies, technical data, customer information, and any other information designated as confidential. Confidentiality obligations survive the termination of these Terms.
                </p>

                <h2>Disclaimer of Warranties</h2>
                <p>
                  THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                  IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                </p>

                <h2>Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless {APP_TITLE}, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the services.
                </p>

                <h2>Governing Law and Jurisdiction</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the District of Columbia, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Washington, D.C., and you hereby consent to personal jurisdiction and venue therein.
                </p>

                <h2>Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after any revisions become effective, you agree to be bound by the revised terms.
                </p>

                <h2>Severability</h2>
                <p>
                  If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
                </p>

                <h2>Entire Agreement</h2>
                <p>
                  These Terms, together with our Privacy Policy and any other legal notices published by us on the website, constitute the entire agreement between you and {APP_TITLE} concerning your use of the website and services.
                </p>
              </div>

              <div className="bg-[oklch(0.22_0.06_250)] text-white p-4 sm:p-6 md:p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
                <p className="text-white/80 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-4">
                    <a href="mailto:legal@thalentechnologies.com" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail flex-shrink-0 text-[oklch(0.75_0.15_55)]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        <span>legal@thalentechnologies.com</span>
                    </a>
                    <div className="flex items-start gap-3 text-white/90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin flex-shrink-0 mt-1 text-[oklch(0.75_0.15_55)]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        <p className="text-white/80">
                          {APP_TITLE}<br />
                          1800 K Street NW, Suite 900<br />
                          Washington, DC 20006
                        </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
