import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Mail } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { APP_TITLE } from '@/const';

export default function Terms() {
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
              items={[{ label: 'Terms of Service' }]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
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
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and {APP_TITLE} ("Company," "we," "us," or "our") concerning your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {APP_TITLE} provides enterprise technology consulting services, including but not limited to intelligent automation, data analytics, cloud infrastructure, cybersecurity, application development, and digital transformation services. Our services are designed for business and government clients seeking to optimize their technology operations and achieve strategic objectives.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                  <li>Ensuring your account information remains accurate and up-to-date</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We reserve the right to suspend or terminate your account if any information provided proves to be inaccurate, false, or misleading.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unless otherwise indicated, the website and all content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by {APP_TITLE}, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Prohibited Uses</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to use our services:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To transmit any advertising or promotional material without our prior written consent</li>
                  <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
                  <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the services</li>
                  <li>To introduce any viruses, trojan horses, worms, or other material that is malicious or technologically harmful</li>
                  <li>To attempt to gain unauthorized access to any portion of the services or any other systems or networks</li>
                  <li>To use any robot, spider, or other automatic device to access the services for any purpose</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Service Agreements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Professional services provided by {APP_TITLE} are governed by separate service agreements, statements of work, or master service agreements executed between the parties. These Terms govern your use of our website and general services, while specific project engagements are subject to additional terms and conditions as set forth in applicable service agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our business relationship. This includes, but is not limited to, business strategies, technical data, customer information, and any other information designated as confidential. Confidentiality obligations survive the termination of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to defend, indemnify, and hold harmless {APP_TITLE}, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Governing Law and Jurisdiction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the District of Columbia, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Washington, D.C., and you hereby consent to personal jurisdiction and venue therein.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after any revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Entire Agreement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms, together with our Privacy Policy and any other legal notices published by us on the website, constitute the entire agreement between you and {APP_TITLE} concerning your use of the website and services.
                </p>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>legal@thalen.tech</span>
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
