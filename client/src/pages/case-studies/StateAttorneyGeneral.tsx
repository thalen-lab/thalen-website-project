import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function StateAttorneyGeneral() {
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
              State Attorney General Prevents $50M+ in Fraud
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
              How a state attorney general's office implemented AI-powered fraud detection with CJIS compliance, analyzing 2.3M cases and preventing more than fifty million dollars in fraud
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
                A state attorney general recognized that traditional fraud detection methods missed sophisticated schemes
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Consumer protection ranks among the most important responsibilities of state attorneys general, yet fraud schemes grow increasingly sophisticated as criminals leverage technology to operate at scale. A state attorney general's office responsible for protecting twelve million residents confronted this reality through a surge in consumer complaints about financial fraud, identity theft, and deceptive business practices. The office's consumer protection division received more than two hundred thousand complaints annually, but limited staff could investigate only a small fraction in depth. Meanwhile, sophisticated fraud schemes that victimized hundreds or thousands of consumers often remained undetected until substantial harm had occurred.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                The challenge extended beyond simple volume. Traditional fraud detection relied on individual complaints reaching a threshold that triggered investigation, but modern fraud schemes deliberately operated below these thresholds to avoid detection. A scam that defrauded each victim of two hundred dollars might steal millions in aggregate while generating complaints that appeared isolated and unrelated. The office's investigators possessed deep expertise in identifying fraud patterns, but manual review of hundreds of thousands of complaints made it impossible to connect the dots across seemingly disparate cases. The attorney general estimated that undetected fraud cost state residents more than one hundred million dollars annually.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed">
                The attorney general's leadership recognized that artificial intelligence and advanced analytics could transform fraud detection. Machine learning algorithms could analyze all complaints simultaneously, identifying patterns and connections that would be invisible to manual review. The challenge required more than technical capability. Any solution needed to comply with Criminal Justice Information Services security requirements, integrate with existing case management systems, and support rather than replace the judgment of experienced investigators who would ultimately decide which cases warranted prosecution.
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
                An AI-powered platform detected fraud patterns invisible to traditional methods
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The attorney general's office needed a platform that could analyze massive volumes of complaint data while meeting the strict security requirements for law enforcement systems. Working with NexDyne, the office deployed a CJIS-compliant fraud detection platform that applied machine learning and network analysis to identify fraud schemes operating across the state. The platform integrated with the office's existing case management system, enriching complaint data with external information sources while maintaining the security controls required for handling criminal justice information.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The technical architecture leveraged multiple AI techniques to detect fraud patterns. Natural language processing analyzed complaint narratives to identify similar descriptions of fraudulent schemes even when victims used different terminology. Network analysis mapped relationships between complaints based on shared phone numbers, addresses, bank accounts, and other identifiers, revealing organized fraud operations that targeted multiple victims. Machine learning models trained on historical cases learned to predict which complaints likely represented serious fraud warranting immediate investigation. The platform generated risk scores and relationship maps that enabled investigators to quickly assess whether individual complaints represented isolated incidents or components of larger fraud schemes.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                The implementation prioritized investigator workflow and decision-making authority. Rather than automating investigation decisions, the platform provided investigators with insights and recommendations that enhanced their ability to identify significant cases. Investigators could explore the relationships and patterns that the AI identified, applying their expertise to determine whether the evidence warranted further action. The system maintained comprehensive audit trails documenting how AI-generated insights influenced case decisions, providing the transparency required in law enforcement contexts. CJIS compliance ensured that the platform could integrate with criminal justice databases, enabling investigators to identify fraud schemes that crossed state lines or involved known criminal organizations.
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
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">$50M+</div>
                <p className="text-slate-700 text-sm">fraud prevented</p>
              </div>
              
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">2.3M</div>
                <p className="text-slate-700 text-sm">cases analyzed</p>
              </div>
              
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">73%</div>
                <p className="text-slate-700 text-sm">more schemes detected</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-3">12M</div>
                <p className="text-slate-700 text-sm">residents protected</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  The fraud detection platform transformed the attorney general's consumer protection capabilities. The office now identifies seventy-three percent more fraud schemes than under manual review processes, detecting sophisticated operations that would have remained invisible using traditional methods. During the first two years of operation, investigations enabled by the platform prevented more than fifty million dollars in fraud through enforcement actions, restitution orders, and consumer warnings about active schemes. The platform's ability to detect fraud early in its lifecycle has substantially reduced the harm that schemes inflict before law enforcement intervention.
                </p>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  The operational improvements extended beyond fraud detection. Investigators report that AI-generated insights enable them to assess case significance much faster, allowing the office to prioritize resources toward cases with the greatest consumer impact. The platform identified several multi-state fraud operations that led to coordinated enforcement actions with other attorneys general, demonstrating how technology can enhance interstate cooperation on consumer protection. The office has expanded the platform to analyze complaints in additional areas including data privacy violations and unfair business practices, multiplying the initial investment's value.
                </p>
                
                <p className="text-slate-700 text-lg leading-relaxed">
                  Perhaps most significantly, the platform established the attorney general's office as a national leader in technology-enabled consumer protection. Other states have studied the implementation as a model for their own fraud detection initiatives, and the success has attracted additional resources and legislative support for consumer protection efforts. The transformation demonstrated that artificial intelligence can enhance rather than replace human judgment in law enforcement contexts, providing investigators with insights that enable more effective protection of consumers while respecting the discretion and expertise that experienced professionals bring to complex cases.
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
              Transform your consumer protection with AI-powered fraud detection
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Discover how CJIS-compliant fraud detection platforms can help your office identify sophisticated schemes, protect consumers, and maximize investigative resources.
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
