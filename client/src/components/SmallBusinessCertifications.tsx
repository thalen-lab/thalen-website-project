import { Link } from "wouter";
import { Button } from "@/components/ui/button";


export default function SmallBusinessCertifications() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Experience & Expertise */}
          <div className="p-8 hover:shadow-lg transition-shadow text-white border border-slate-700" style={{ backgroundColor: '#1e3a4c' }}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold pb-3 border-b-2 border-white/30">
                Government-Focused Expertise
              </h3>
            </div>
            <p className="text-white/95 mb-6 leading-relaxed">
              Our team specializes in federal technology modernization with deep experience in FedRAMP, FISMA, and agency-specific compliance requirements. We understand the unique challenges of government IT transformation and deliver solutions that meet mission-critical standards.
            </p>
            <Link href="/about">
              <Button variant="outline" className="group border-white text-white hover:bg-white hover:text-slate-900">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Small Business Status */}
          <div className="p-8 hover:shadow-lg transition-shadow text-white border border-slate-700" style={{ backgroundColor: '#1e3a4c' }}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold pb-3 border-b-2 border-white/30">
                Small Business & 8(a) Pursuit
              </h3>
            </div>
            <ul className="space-y-3 mb-6 list-none">
              <li className="flex items-start gap-2">
                <span className="text-white/90 mt-0.5 flex-shrink-0">•</span>
                <p className="text-white/95 text-sm">
                  <strong className="text-white">SAM.gov Registered</strong> - Ready to contract with UEI and CAGE code
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/90 mt-0.5 flex-shrink-0">•</span>
                <p className="text-white/95 text-sm">
                  <strong className="text-white">Pursuing 8(a) Certification</strong> - Application in progress for SBA Business Development Program
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/90 mt-0.5 flex-shrink-0">•</span>
                <p className="text-white/95 text-sm">
                  <strong className="text-white">Small Business Partner</strong> - Help agencies meet mandatory 23% small business contracting goals
                </p>
              </li>
            </ul>
            <Link href="/certifications">
              <Button variant="outline" className="group border-white text-white hover:bg-white hover:text-slate-900">
                View Certifications
              </Button>
            </Link>
          </div>

          {/* Values & Culture */}
          <div className="p-8 hover:shadow-lg transition-shadow text-white border border-slate-700" style={{ backgroundColor: '#1e3a4c' }}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold pb-3 border-b-2 border-white/30">
                Mission-Driven Partnership
              </h3>
            </div>
            <p className="text-white/95 mb-6 leading-relaxed">
              We are committed to delivering boutique, high-quality service that larger contractors cannot match. As a small business, we provide agile response times, direct access to senior leadership, and personalized attention to every engagement.
            </p>
            <Link href="/about">
              <Button variant="outline" className="group border-white text-white hover:bg-white hover:text-slate-900">
                Our Approach
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Reference Bar */}
        <div className="mt-12 p-6 border border-slate-700" style={{ backgroundColor: '#1e3a4c' }}>
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
