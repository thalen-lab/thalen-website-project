import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function HealthcareAI() {
  return (
    <div className="min-h-screen flex-col bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container relative z-10">
          <Link href="/case-studies">
            <Button variant="ghost" className="text-white hover:text-orange-500 mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
          
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8">
              <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">Case Study</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white mb-8 leading-tight">
              Healthcare System Saves $12M Through AI Analytics
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
              How a regional healthcare network unified fragmented data systems to deliver real-time clinical insights and measurable improvements in patient outcomes
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4">The Opportunity</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-slate-900 leading-tight">
                A healthcare system recognized that fragmented data was preventing optimal patient care
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Healthcare organizations face a fundamental challenge in the modern era: they generate vast amounts of patient data, yet struggle to transform that data into actionable clinical insights. A regional healthcare system serving more than two million patients across fifteen facilities exemplified this paradox. Each facility operated its own electronic medical records system, creating data silos that prevented clinicians from seeing the complete picture of patient health. Critical information existed somewhere in the network, but remained effectively invisible when doctors needed it most.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                The healthcare system's leadership understood that this fragmentation carried real costs. Physicians ordered duplicate tests because they could not access results from other facilities. Patients experienced delayed diagnoses because relevant history remained locked in separate systems. Treatment plans reflected incomplete information, leading to suboptimal outcomes. The organization estimated that these inefficiencies cost more than fifteen million dollars annually, but the human cost of delayed or inadequate care proved far more significant.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed">
                The Chief Medical Officer recognized that artificial intelligence and advanced analytics offered a path forward. The organization needed to unify patient data across all facilities, provide real-time clinical insights at the point of care, and enable predictive analytics that could identify at-risk patients before conditions deteriorated. All of this needed to happen while maintaining strict HIPAA compliance and earning the trust of both clinicians and patients. The healthcare system was determined to prove that technology could enhance rather than complicate the practice of medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-slate-400 tracking-wider uppercase mb-4">The Solution</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-white leading-tight">
                An AI-powered platform unified data and delivered insights that transformed clinical decision-making
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The healthcare system needed more than a technical integration project. It required a fundamental transformation in how clinical data flowed through the organization and how that data informed patient care. Working with NexDyne, the organization designed and deployed an AI-powered analytics platform that created a unified view of patient information while respecting the autonomy of individual facilities and their existing systems.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The platform established secure connections to eight different electronic medical records systems, extracting and normalizing patient data in real time. Advanced natural language processing analyzed unstructured clinical notes, radiology reports, and physician observations to identify patterns that structured data alone would miss. Machine learning models trained on the healthcare system's historical data learned to predict which patients faced elevated risks for readmission, sepsis, or other adverse events, enabling proactive intervention before conditions became critical.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                The implementation prioritized clinical workflow integration over technical sophistication. Rather than requiring physicians to learn new systems, the platform delivered insights directly within existing EMR interfaces. A physician viewing a patient record would see AI-generated alerts about potential drug interactions, relevant test results from other facilities, and risk scores for various conditions. The system provided the information clinicians needed without adding burden to already demanding workflows. Comprehensive audit logging and encryption ensured that enhanced data access strengthened rather than compromised patient privacy protections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4">The Impact</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">$12M</div>
                <p className="text-slate-700 text-sm">in annual savings achieved</p>
              </div>
              
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">40%</div>
                <p className="text-slate-700 text-sm">improvement in patient outcomes</p>
              </div>
              
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">2M+</div>
                <p className="text-slate-700 text-sm">patients served by the system</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">15</div>
                <p className="text-slate-700 text-sm">facilities connected in real time</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  The analytics platform fundamentally changed how the healthcare system delivers care. Physicians now access complete patient histories regardless of where treatment occurred within the network. The AI-powered risk prediction models identify patients at elevated risk for readmission with 87 percent accuracy, enabling care coordinators to provide targeted follow-up that has reduced readmissions by 31 percent. Early warning alerts for sepsis and other acute conditions have decreased mortality rates for these conditions by 24 percent.
                </p>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  The financial impact exceeded initial projections. Duplicate testing decreased by 42 percent as physicians gained visibility into recent results from across the network. Average length of stay declined by 1.3 days as more complete information enabled faster diagnosis and treatment planning. The reduction in preventable readmissions alone saved more than eight million dollars annually. When combined with operational efficiencies and improved resource utilization, the platform delivered a return on investment in just fourteen months.
                </p>
                
                <p className="text-slate-700 text-lg leading-relaxed">
                  Perhaps most significantly, the transformation earned the trust of clinicians who initially approached the technology with skepticism. Physicians reported that the AI-generated insights proved consistently valuable, highlighting patterns they might have missed and providing relevant information at critical decision points. The platform enhanced rather than replaced clinical judgment, giving doctors better tools while respecting their expertise. This acceptance has enabled the healthcare system to expand the platform's capabilities, adding new predictive models and integrating additional data sources as the organization continues its journey toward truly data-driven care delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-slate-900 mb-6">
              Transform your healthcare data into better patient outcomes
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how AI-powered analytics can help your organization deliver higher quality care while reducing costs and maintaining compliance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
