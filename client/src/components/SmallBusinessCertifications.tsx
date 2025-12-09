import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, Building2, Target, CheckCircle2 } from "lucide-react";

export default function SmallBusinessCertifications() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Experience & Expertise */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg hover:shadow-lg transition-shadow text-white">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold pb-3 border-b-2 border-white/30">
                Government-Focused Expertise
              </h3>
            </div>
            <p className="text-white/95 mb-6 leading-relaxed">
              Our team specializes in federal technology modernization with deep experience in FedRAMP, FISMA, and agency-specific compliance requirements. We understand the unique challenges of government IT transformation and deliver solutions that meet mission-critical standards.
            </p>
            <Link href="/about">
              <Button className="w-full bg-white text-blue-700 hover:bg-blue-50">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Small Business Status */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg hover:shadow-lg transition-shadow text-white">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold pb-3 border-b-2 border-white/30">
                Small Business & 8(a) Pursuit
              </h3>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-white/90 mt-0.5 flex-shrink-0" />
                <p className="text-white/95 text-sm">
                  <strong className="text-white">SAM.gov Registered</strong> - Ready to contract with UEI and CAGE code
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-white/90 mt-0.5 flex-shrink-0" />
                <p className="text-white/95 text-sm">
                  <strong className="text-white">Pursuing 8(a) Certification</strong> - Application in progress for SBA Business Development Program
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-white/90 mt-0.5 flex-shrink-0" />
                <p className="text-white/95 text-sm">
                  <strong className="text-white">Small Business Partner</strong> - Help agencies meet mandatory 23% small business contracting goals
                </p>
              </div>
            </div>
            <Link href="/certifications">
              <Button className="w-full bg-white text-blue-700 hover:bg-blue-50">
                View Certifications
              </Button>
            </Link>
          </div>

          {/* Values & Culture */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg hover:shadow-lg transition-shadow text-white">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold pb-3 border-b-2 border-white/30">
                Mission-Driven Partnership
              </h3>
            </div>
            <p className="text-white/95 mb-6 leading-relaxed">
              We are committed to delivering boutique, high-quality service that larger contractors cannot match. As a small business, we provide agile response times, direct access to senior leadership, and personalized attention to every engagement.
            </p>
            <Link href="/about">
              <Button className="w-full bg-white text-blue-700 hover:bg-blue-50">
                Our Approach
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Reference Bar */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-blue-200 text-sm mb-1">Status</p>
              <p className="text-white font-semibold">Small Business</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm mb-1">8(a) Program</p>
              <p className="text-white font-semibold">Application Pending</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm mb-1">SAM.gov</p>
              <p className="text-white font-semibold">Active & Registered</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm mb-1">Primary NAICS</p>
              <p className="text-white font-semibold">541512, 541519</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
