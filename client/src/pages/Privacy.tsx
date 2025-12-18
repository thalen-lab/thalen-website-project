import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Mail } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { APP_TITLE } from '@/const';

export default function Privacy() {
  const lastUpdated = "December 15, 2024";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-16 bg-navy-gradient text-primary-foreground">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[{ label: 'Privacy Policy' }]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg opacity-90">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {APP_TITLE} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us. The personal information we collect may include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Business information (company name, job title, industry)</li>
                  <li>Account credentials (username and password)</li>
                  <li>Payment information (processed through secure third-party payment processors)</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you access our website, we may automatically collect certain information about your device and usage, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Device information (browser type, operating system, device identifiers)</li>
                  <li>Log information (access times, pages viewed, IP address)</li>
                  <li>Location information (general geographic location based on IP address)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Responding to your comments, questions, and requests</li>
                  <li>Sending promotional communications (with your consent)</li>
                  <li>Monitoring and analyzing trends, usage, and activities</li>
                  <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
                  <li>Personalizing and improving your experience</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with third-party vendors, consultants, and other service providers who perform services on our behalf</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business</li>
                  <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities</li>
                  <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, and that of our users or others</li>
                  <li><strong>With Your Consent:</strong> We may share your information with your consent or at your direction</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. We cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to rectify inaccurate personal information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to restrict processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing of your personal information</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites and services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to review the privacy policy of every site you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child under 18 without verification of parental consent, we take steps to remove that information from our servers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>privacy@thalen.tech</span>
                </div>
                <p className="text-muted-foreground mt-4">
                  {APP_TITLE}<br />
                  1800 K Street NW, Suite 900<br />
                  Washington, DC 20006
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
