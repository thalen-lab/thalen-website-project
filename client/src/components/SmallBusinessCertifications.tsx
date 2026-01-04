import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, Building2, Handshake, Shield, Clock, CheckCircle } from "lucide-react";

export default function SmallBusinessCertifications() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#0A2540] to-[#12344D]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FF6B35]/20 border border-[#FF6B35]/40 rounded-full px-4 py-2 mb-4">
            <Clock className="w-4 h-4 text-[#FF6B35]" />
            <span className="text-[#FF6B35] font-semibold text-sm">25 Years of Federal Government Service</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted Government Partner
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            NexDyne Technology brings deep expertise, proven credentials, and unwavering commitment to government mission success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* 25 Years Experience */}
          <div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-[#FF6B35] transition-all duration-300 hover:shadow-xl group">
            <div className="mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#E05A25] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                25 Years Federal Service
              </h3>
              <div className="w-16 h-1 bg-[#FF6B35] rounded-full"></div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              For over two decades, NexDyne has been the trusted technology partner for federal, state, and local government agencies. Our deep institutional knowledge and battle-tested methodologies ensure mission success every time.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>500+ Agency Partners Served</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>100% Mission Success Rate</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>$2.3B+ Client ROI Delivered</span>
              </div>
            </div>
            <Link href="/about">
              <Button variant="outline" className="group/btn border-slate-400 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all duration-300">
                Our Story
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
          </div>

          {/* Compliance Credentials */}
          <div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-[#FF6B35] transition-all duration-300 hover:shadow-xl group">
            <div className="mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0A2540] to-[#12344D] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Compliance Credentials
              </h3>
              <div className="w-16 h-1 bg-[#FF6B35] rounded-full"></div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-sm">FedRAMP Authorized</p>
                  <p className="text-slate-300 text-sm">15+ successful authorizations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-sm">CMMC Level 2 Certified</p>
                  <p className="text-slate-300 text-sm">100% first-time pass rate</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-sm">FISMA Compliant</p>
                  <p className="text-slate-300 text-sm">High-impact systems expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-sm">ISO 9001:2015 Certified</p>
                  <p className="text-slate-300 text-sm">Quality management excellence</p>
                </div>
              </div>
            </div>
            <Link href="/compliance/fedramp">
              <Button variant="outline" className="group/btn border-slate-400 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all duration-300">
                View Credentials
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
          </div>

          {/* Small Business Status */}
          <div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-[#FF6B35] transition-all duration-300 hover:shadow-xl group">
            <div className="mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0A2540] to-[#12344D] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Small Business Certifications
              </h3>
              <div className="w-16 h-1 bg-[#FF6B35] rounded-full"></div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-sm">SBA Small Business</p>
                  <p className="text-slate-300 text-sm">Certified small business contractor</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-sm">SAM.gov Registered</p>
                  <p className="text-slate-300 text-sm">Active with UEI and CAGE code</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-sm">GSA Schedule Holder</p>
                  <p className="text-slate-300 text-sm">Streamlined procurement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-sm">8(a) Program</p>
                  <p className="text-slate-300 text-sm">Eligible for set-aside contracts</p>
                </div>
              </div>
            </div>
            <Link href="/contract-vehicles">
              <Button variant="outline" className="group/btn border-slate-400 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all duration-300">
                Contract Vehicles
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Reference Bar */}
        <div className="mt-10 md:mt-12 lg:mt-16 bg-white p-6 md:p-8 border border-slate-200 rounded-lg shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            <div className="text-center group cursor-default">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-semibold">Experience</p>
              <p className="text-[#0A2540] font-bold text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                25+ Years
              </p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-semibold">FedRAMP</p>
              <p className="text-[#0A2540] font-bold text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                Authorized
              </p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-semibold">CMMC</p>
              <p className="text-[#0A2540] font-bold text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                Level 2 Certified
              </p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-semibold">SAM.gov</p>
              <p className="text-[#0A2540] font-bold text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                Active
              </p>
            </div>
            <div className="text-center group cursor-default col-span-2 md:col-span-1">
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
