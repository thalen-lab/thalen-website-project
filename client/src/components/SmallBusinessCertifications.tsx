import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Building2, Target, CheckCircle2 } from "lucide-react";

export default function SmallBusinessCertifications() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Experience & Expertise */}
          <Card className="p-8 hover:shadow-lg transition-shadow border-slate-200">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              Government-Focused Expertise
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our team specializes in federal technology modernization with deep experience in FedRAMP, FISMA, and agency-specific compliance requirements. We understand the unique challenges of government IT transformation and deliver solutions that meet mission-critical standards.
            </p>
            <Link href="/about">
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Link>
          </Card>

          {/* Small Business Status */}
          <Card className="p-8 hover:shadow-lg transition-shadow border-orange-200 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -mr-16 -mt-16 opacity-50" />
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                Small Business & 8(a) Pursuit
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 text-sm">
                    <strong>SAM.gov Registered</strong> - Ready to contract with UEI and CAGE code
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 text-sm">
                    <strong>Pursuing 8(a) Certification</strong> - Application in progress for SBA Business Development Program
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 text-sm">
                    <strong>Small Business Partner</strong> - Help agencies meet mandatory 23% small business contracting goals
                  </p>
                </div>
              </div>
              <Link href="/certifications">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  View Certifications
                </Button>
              </Link>
            </div>
          </Card>

          {/* Values & Culture */}
          <Card className="p-8 hover:shadow-lg transition-shadow border-slate-200">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              Mission-Driven Partnership
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We are committed to delivering boutique, high-quality service that larger contractors cannot match. As a small business, we provide agile response times, direct access to senior leadership, and personalized attention to every engagement.
            </p>
            <Link href="/about">
              <Button variant="outline" className="w-full">
                Our Approach
              </Button>
            </Link>
          </Card>
        </div>

        {/* Quick Reference Bar */}
        <div className="mt-12 p-6 bg-slate-900 rounded-lg">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-slate-400 text-sm mb-1">Status</p>
              <p className="text-white font-semibold">Small Business</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">8(a) Program</p>
              <p className="text-white font-semibold">Application Pending</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">SAM.gov</p>
              <p className="text-white font-semibold">Active & Registered</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">Primary NAICS</p>
              <p className="text-white font-semibold">541512, 541519</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
