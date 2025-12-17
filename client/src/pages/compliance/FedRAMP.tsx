import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, FileText, Lock, Cloud, Users, Shield } from "lucide-react";
import { Link } from "wouter";

export default function FedRAMP() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero Section - Minimalist Design */}
      <section className="relative bg-[#0a1628] text-white py-32">
        <div className="container">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              FEDRAMP & STATERAMP AUTHORIZATION SERVICES
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl">
              Navigate federal and state government cloud security requirements with confidence. We deliver secure, compliant cloud solutions tailored to the unique needs of federal agencies and state governments with comprehensive authorization support.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-medium"
                >
                  Schedule FedRAMP Consultation →
                </Button>
              </Link>
              <Link href="/resources">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium bg-transparent"
                >
                  Download FedRAMP Checklist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is FedRAMP Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy-900 mb-8">What is FedRAMP?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Federal Risk and Authorization Management Program (FedRAMP) is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services used by federal agencies.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                FedRAMP was established to accelerate the adoption of secure cloud solutions across the federal government by creating a "do once, use many times" framework for cloud security assessments. This eliminates redundant agency security assessments and enables faster, more cost-effective cloud adoption while maintaining the highest security standards.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Key FedRAMP Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Security Controls:</strong> Implementation of NIST 800-53 security controls based on impact level (Low, Moderate, or High)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Continuous Monitoring:</strong> Ongoing assessment and reporting of security posture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Third-Party Assessment:</strong> Independent validation by FedRAMP-accredited 3PAO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Authorization:</strong> Approval from the Joint Authorization Board (JAB) or individual agency ATO</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">FedRAMP Implementation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NexDyne provides end-to-end support for achieving and maintaining FedRAMP authorization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Readiness Assessment</h3>
              <p className="text-gray-600">
                Comprehensive gap analysis against FedRAMP requirements to identify remediation priorities and create a roadmap to authorization.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Security Controls Implementation</h3>
              <p className="text-gray-600">
                Design and deployment of technical, operational, and management controls aligned with NIST 800-53 baselines.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">System Security Plan (SSP)</h3>
              <p className="text-gray-600">
                Development of comprehensive SSP documentation including security architecture, control narratives, and evidence artifacts.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">3PAO Assessment Support</h3>
              <p className="text-gray-600">
                Coordination with Third-Party Assessment Organizations and remediation of findings to achieve successful authorization.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Continuous Monitoring</h3>
              <p className="text-gray-600">
                Implementation of automated monitoring solutions and monthly reporting to maintain ongoing authorization status.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Training & Knowledge Transfer</h3>
              <p className="text-gray-600">
                Staff training on FedRAMP requirements and best practices to build internal compliance expertise.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy-900 mb-8">Why Choose NexDyne for FedRAMP?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-700">
                    Successfully guided multiple federal agencies and cloud service providers through FedRAMP authorization, including JAB P-ATO and agency-specific ATOs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">Deep Technical Expertise</h3>
                  <p className="text-gray-700">
                    Our team includes certified security professionals with extensive experience in NIST frameworks, cloud security architecture, and federal compliance requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">Accelerated Timeline</h3>
                  <p className="text-gray-700">
                    Our streamlined methodology and automation tools reduce time-to-authorization by 40% compared to industry averages, getting you operational faster.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">Cost-Effective Approach</h3>
                  <p className="text-gray-700">
                    Reduce compliance costs through reusable documentation templates, automated evidence collection, and efficient project management.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-700">
                    We don't just help you achieve authorization—we provide continuous support for maintaining compliance and adapting to evolving requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a1628] text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Achieve FedRAMP Authorization?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our FedRAMP experts to discuss your compliance requirements and develop a customized roadmap to authorization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
              >
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/resources">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
              >
                Explore Compliance Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
