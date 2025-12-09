import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, Building2, Handshake } from "lucide-react";

export default function SmallBusinessCertifications() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0A2540] to-[#1e3a4c]">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Experience & Expertise */}
          <div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-[#FF6B35] transition-all duration-300 hover:shadow-xl group">
            <div className="mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0A2540] to-[#1e3a4c] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Government-Focused Expertise
              </h3>
              <div className="w-16 h-1 bg-[#FF6B35] rounded-full"></div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our team specializes in federal technology modernization with deep experience in FedRAMP, FISMA, and agency-specific compliance requirements. We understand the unique challenges of government IT transformation and deliver solutions that meet mission-critical standards.
            </p>
            <Link href="/about">
              <Button variant="outline" className="group/btn border-slate-400 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all duration-300">
                Learn More
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
          </div>

          {/* Small Business Status */}
          <div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-[#FF6B35] transition-all duration-300 hover:shadow-xl group">
            <div className="mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0A2540] to-[#1e3a4c] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Small Business & 8(a) Pursuit
              </h3>
              <div className="w-16 h-1 bg-[#FF6B35] rounded-full"></div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-sm">SAM.gov Registered</p>
                  <p className="text-slate-300 text-sm">Ready to contract with UEI and CAGE code</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-sm">Pursuing 8(a) Certification</p>
                  <p className="text-slate-300 text-sm">Application in progress for SBA Business Development Program</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-sm">Small Business Partner</p>
                  <p className="text-slate-300 text-sm">Help agencies meet mandatory 23% small business contracting goals</p>
                </div>
              </div>
            </div>
            <Link href="/certifications">
              <Button variant="outline" className="group/btn border-slate-400 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all duration-300">
                View Certifications
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
          </div>

          {/* Values & Culture */}
          <div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-[#FF6B35] transition-all duration-300 hover:shadow-xl group">
            <div className="mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0A2540] to-[#1e3a4c] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Mission-Driven Partnership
              </h3>
              <div className="w-16 h-1 bg-[#FF6B35] rounded-full"></div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              We are committed to delivering boutique, high-quality service that larger contractors cannot match. As a small business, we provide agile response times, direct access to senior leadership, and personalized attention to every engagement.
            </p>
            <Link href="/about">
              <Button variant="outline" className="group/btn border-slate-400 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all duration-300">
                Our Approach
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Reference Bar */}
        <div className="mt-12 bg-white p-8 border border-slate-200 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group cursor-default">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-semibold">Status</p>
              <p className="text-[#0A2540] font-bold text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                Small Business
              </p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-semibold">8(a) Program</p>
              <p className="text-[#0A2540] font-bold text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                Application Pending
              </p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-semibold">SAM.gov</p>
              <p className="text-[#0A2540] font-bold text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                Active & Registered
              </p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-semibold">Primary NAICS</p>
              <p className="text-[#0A2540] font-bold text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                541512, 541519
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
