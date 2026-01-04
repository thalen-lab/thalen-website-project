import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { APP_TITLE } from '@/const';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Privacy() {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      title: "Introduction",
      content: [
        `${APP_TITLE} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.`,
      ],
    },
    {
      title: "Information We Collect",
      subsections: [
        {
          title: "Personal Information",
          content: [
            "We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us. The personal information we collect may include:",
          ],
          list: [
            "Name and contact information (email address, phone number, mailing address)",
            "Business information (company name, job title, industry)",
            "Account credentials (username and password)",
            "Payment information (processed through secure third-party payment processors)",
            "Communication preferences",
          ],
        },
        {
          title: "Automatically Collected Information",
          content: [
            "When you access our website, we may automatically collect certain information about your device and usage, including:",
          ],
          list: [
            "Device information (browser type, operating system, device identifiers)",
            "Log information (access times, pages viewed, IP address)",
            "Location information (general geographic location based on IP address)",
            "Cookies and similar tracking technologies",
          ],
        },
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use the information we collect for various purposes, including:",
      ],
      list: [
        "Providing, maintaining, and improving our services",
        "Processing transactions and sending related information",
        "Responding to your comments, questions, and requests",
        "Sending promotional communications (with your consent)",
        "Monitoring and analyzing trends, usage, and activities",
        "Detecting, investigating, and preventing fraudulent transactions and other illegal activities",
        "Personalizing and improving your experience",
        "Complying with legal obligations",
      ],
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We may share your information in the following circumstances:",
      ],
      list: [
        "Service Providers: We may share information with third-party vendors, consultants, and other service providers who perform services on our behalf",
        "Business Transfers: In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business",
        "Legal Requirements: If required to do so by law or in response to valid requests by public authorities",
        "Protection of Rights: To protect our rights, privacy, safety, or property, and that of our users or others",
        "With Your Consent: We may share your information with your consent or at your direction",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. We cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.",
      ],
    },
    {
      title: "Data Retention",
      content: [
        "We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.",
      ],
    },
    {
      title: "Your Privacy Rights",
      content: [
        "Depending on your location, you may have certain rights regarding your personal information, including:",
      ],
      list: [
        "The right to access your personal information",
        "The right to rectify inaccurate personal information",
        "The right to request deletion of your personal information",
        "The right to restrict processing of your personal information",
        "The right to data portability",
        "The right to object to processing of your personal information",
        "The right to withdraw consent",
      ],
      outro: "To exercise any of these rights, please contact us using the information provided below.",
    },
    {
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.",
      ],
    },
    {
      title: "Third-Party Links",
      content: [
        "Our website may contain links to third-party websites and services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to review the privacy policy of every site you visit.",
      ],
    },
    {
      title: "Children's Privacy",
      content: [
        "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child under 18 without verification of parental consent, we take steps to remove that information from our servers.",
      ],
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date. You are advised to review this Privacy Policy periodically for any changes.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative bg-pattern-dark py-24 text-white">
          <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
                Your Data, Protected
              </p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-4 text-white"
              >
                Privacy Policy
              </motion.h1>
              <p className="text-lg text-white/90">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              {sections.map((section, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-6">{section.title}</h2>
                  {section.content?.map((p, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4">{p}</p>
                  ))}
                  
                  {section.list && (
                    <ul className="space-y-3 mt-6">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections?.map((sub, i) => (
                    <div key={i} className="mt-8">
                      <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{sub.title}</h3>
                      {sub.content?.map((p, j) => (
                        <p key={j} className="text-slate-600 leading-relaxed mb-4">{p}</p>
                      ))}
                      {sub.list && (
                        <ul className="space-y-3 mt-6">
                          {sub.list.map((item, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                              <span className="text-slate-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {section.outro && (
                     <p className="text-slate-600 leading-relaxed mt-6">{section.outro}</p>
                  )}
                </motion.div>
              ))}

              {/* Contact CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[oklch(0.22_0.06_250)] text-white p-8 rounded-lg mt-16"
              >
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy, please contact us.
                </p>
                <a href="mailto:privacy@nexdyne.com" className="inline-flex items-center gap-2 bg-white text-[oklch(0.22_0.06_250)] font-semibold px-6 py-3 rounded-md hover:bg-slate-200 transition-colors">
                  <span>Email our Privacy Team</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="text-sm text-white/60 mt-8 border-t border-white/20 pt-6">
                  <p className="font-semibold">{APP_TITLE}</p>
                  <p>1800 K Street NW, Suite 900</p>
                  <p>Washington, DC 20006</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
