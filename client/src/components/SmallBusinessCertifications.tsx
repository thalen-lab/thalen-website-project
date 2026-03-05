import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, Shield, Clock, CheckCircle } from "lucide-react";

export default function SmallBusinessCertifications() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-[#0A2540] to-[#12344D]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 lg:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#FF6B35]/20 border border-[#FF6B35]/40 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6B35]" />
            <span className="text-[#FF6B35] font-semibold text-xs sm:text-sm">25 Years of Federal Government Service</span>
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            Trusted Government Partner
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto px-4 sm:px-0">
            Thalen Technologies brings deep expertise, proven credentials, and unwavering commitment to government mission success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* 25 Years Experience */}
          <div className="bg-slate-800/50 p-4 sm:p-5 md:p-6 lg:p-8 border border-slate-700 hover:border-[#FF6B35] transition-all duration-300 hover:shadow-xl group rounded-lg">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#FF6B35] to-[#e55a2b] rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2">
                25 Years Federal Service
              </h3>
              <div className="w-12 sm:w-14 md:w-16 h-1 bg-[#FF6B35] rounded-full"></div>
            </div>
            <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
              Thalen Technologies is built on over two decades of combined team expertise serving as trusted technology partners for federal, state, and local government agencies.
            </p>
            <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6">
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6B35] flex-shrink-0" />
                <span>50+ Agency Partners Served</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6B35] flex-shrink-0" />
                <span>100% Client Satisfaction Rate</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6B35] flex-shrink-0" />
                <span>7+ Security Certifications Held</span>
              </div>
            </div>
            <Link href="/about">
              <Button variant="outline" size="sm" className="group/btn border-slate-400 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all duration-300 text-xs sm:text-sm min-h-[40px] sm:min-h-[44px]">
                Our Story
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
          </div>

          {/* Compliance Credentials */}
          <div className="bg-slate-800/50 p-4 sm:p-5 md:p-6 lg:p-8 border border-slate-700 hover:border-[#FF6B35] transition-all duration-300 hover:shadow-xl group rounded-lg">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0A2540] to-[#12344D] rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2">
                Compliance Credentials
              </h3>
              <div className="w-12 sm:w-14 md:w-16 h-1 bg-[#FF6B35] rounded-full"></div>
            </div>
            <div className="space-y-2.5 sm:space-y-3 md:space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-5 md:mb-6">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-sm">FedRAMP Authorized</p>
                  <p className="text-slate-300 text-xs sm:text-sm">15+ successful authorizations</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-sm">CMMC Level 2 Certified</p>
                  <p className="text-slate-300 text-xs sm:text-sm">100% first-time pass rate</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-sm">FISMA Compliant</p>
                  <p className="text-slate-300 text-xs sm:text-sm">High-impact systems expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-sm">ISO 9001:2015 Certified</p>
                  <p className="text-slate-300 text-xs sm:text-sm">Quality management excellence</p>
                </div>
              </div>
            </div>
            <Link href="/compliance/fedramp">
              <Button variant="outline" size="sm" className="group/btn border-slate-400 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all duration-300 text-xs sm:text-sm min-h-[40px] sm:min-h-[44px]">
                View Credentials
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
          </div>

          {/* Small Business Status */}
          <div className="bg-slate-800/50 p-4 sm:p-5 md:p-6 lg:p-8 border border-slate-700 hover:border-[#FF6B35] transition-all duration-300 hover:shadow-xl group rounded-lg sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0A2540] to-[#12344D] rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2">
                Small Business Certifications
              </h3>
              <div className="w-12 sm:w-14 md:w-16 h-1 bg-[#FF6B35] rounded-full"></div>
            </div>
            <div className="space-y-2.5 sm:space-y-3 md:space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-5 md:mb-6">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-sm">SBA Small Business</p>
                  <p className="text-slate-300 text-xs sm:text-sm">Certified small business contractor</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-sm">SAM.gov Registered</p>
                  <p className="text-slate-300 text-xs sm:text-sm">Active with UEI and CAGE code</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-sm">GSA Schedule Holder</p>
                  <p className="text-slate-300 text-xs sm:text-sm">Streamlined procurement</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-sm">8(a) Program</p>
                  <p className="text-slate-300 text-xs sm:text-sm">Eligible for set-aside contracts</p>
                </div>
              </div>
            </div>
            <Link href="/contract-vehicles">
              <Button variant="outline" size="sm" className="group/btn border-slate-400 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all duration-300 text-xs sm:text-sm min-h-[40px] sm:min-h-[44px]">
                Contract Vehicles
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Reference Bar */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 bg-white p-4 sm:p-5 md:p-6 lg:p-8 border border-slate-200 rounded-lg shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="text-center group cursor-default">
              <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2 font-semibold">Experience</p>
              <p className="text-[#0A2540] font-bold text-sm sm:text-base md:text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                25+ Years
              </p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2 font-semibold">FedRAMP</p>
              <p className="text-[#0A2540] font-bold text-sm sm:text-base md:text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                Authorized
              </p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2 font-semibold">CMMC</p>
              <p className="text-[#0A2540] font-bold text-sm sm:text-base md:text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                Level 2
              </p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2 font-semibold">SAM.gov</p>
              <p className="text-[#0A2540] font-bold text-sm sm:text-base md:text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                Active
              </p>
            </div>
            <div className="text-center group cursor-default col-span-2 sm:col-span-1 md:col-span-1">
              <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2 font-semibold">Primary NAICS</p>
              <p className="text-[#0A2540] font-bold text-sm sm:text-base md:text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                541512
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
