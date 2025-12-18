import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { CheckCircle2, Cloud, Lock, Zap, DollarSign, Shield, TrendingUp, ArrowRight, Server } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export default function GovCloudMigration() {
  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security & Compliance",
      description: "Meet FedRAMP, CJIS, ITAR, and other federal security requirements with purpose-built government cloud infrastructure."
    },
    {
      icon: DollarSign,
      title: "Reduced Total Cost of Ownership",
      description: "Eliminate capital expenses for hardware and data centers while reducing operational costs by up to 40%."
    },
    {
      icon: Zap,
      title: "Improved Performance & Scalability",
      description: "Scale resources on-demand to meet mission requirements without over-provisioning or capacity constraints."
    },
    {
      icon: TrendingUp,
      title: "Accelerated Innovation",
      description: "Deploy new capabilities faster with cloud-native services, DevSecOps practices, and automated infrastructure."
    }
  ];

  const platforms = [
    {
      name: "AWS GovCloud",
      description: "Isolated AWS regions designed for US government agencies and contractors with stringent compliance requirements.",
      features: ["FedRAMP High authorized", "CJIS, ITAR, DoD SRG compliance", "Dedicated support for government", "Full AWS service portfolio"],
      bestFor: "Federal agencies and contractors requiring FedRAMP High or DoD IL4/IL5"
    },
    {
      name: "Azure Government",
      description: "Microsoft's dedicated cloud for US government with physical and logical network isolation from commercial Azure.",
      features: ["FedRAMP High authorized", "DoD Impact Level 5 (IL5)", "Screened US personnel", "Hybrid cloud integration"],
      bestFor: "Agencies using Microsoft ecosystem or requiring hybrid cloud capabilities"
    },
    {
      name: "Google Cloud for Government",
      description: "Google's government cloud offering with advanced security controls and compliance certifications.",
      features: ["FedRAMP Moderate/High", "CJIS compliance", "Advanced AI/ML capabilities", "Zero-trust security model"],
      bestFor: "Agencies prioritizing data analytics, AI/ML, and modern application development"
    }
  ];

  const services = [
    {
      title: "Cloud Readiness Assessment",
      description: "Comprehensive evaluation of your current infrastructure, applications, and processes to determine cloud readiness and develop a migration strategy.",
      deliverables: ["Current state assessment", "Application portfolio analysis", "TCO and ROI analysis", "Migration roadmap and timeline"]
    },
    {
      title: "Migration Planning & Strategy",
      description: "Detailed migration planning including workload prioritization, dependency mapping, risk assessment, and phased migration approach.",
      deliverables: ["Migration strategy document", "Workload prioritization matrix", "Risk mitigation plan", "Success metrics and KPIs"]
    },
    {
      title: "Infrastructure Design & Architecture",
      description: "Design of secure, scalable, and compliant cloud architecture aligned with federal requirements and best practices.",
      deliverables: ["Reference architecture", "Network and security design", "High availability design", "Disaster recovery plan"]
    },
    {
      title: "Application Migration & Modernization",
      description: "Migration of applications using rehost, replatform, or refactor strategies, with modernization to leverage cloud-native capabilities.",
      deliverables: ["Migrated applications", "Performance optimization", "Cloud-native enhancements", "Integration testing"]
    },
    {
      title: "Data Migration & Validation",
      description: "Secure transfer of data to government cloud with validation, integrity checks, and minimal downtime.",
      deliverables: ["Data migration execution", "Data validation reports", "Integrity verification", "Rollback procedures"]
    },
    {
      title: "Security & Compliance Implementation",
      description: "Implementation of security controls, compliance frameworks, and continuous monitoring to meet federal requirements.",
      deliverables: ["Security controls implementation", "Compliance documentation", "Continuous monitoring setup", "Security assessment reports"]
    }
  ];

  const process = [
    {
      phase: "Phase 1",
      title: "Assess & Plan",
      duration: "4-8 weeks",
      activities: ["Discovery and assessment", "Application portfolio analysis", "TCO and business case", "Migration strategy and roadmap"]
    },
    {
      phase: "Phase 2",
      title: "Design & Prepare",
      duration: "6-10 weeks",
      activities: ["Cloud architecture design", "Landing zone setup", "Security controls design", "Pilot migration planning"]
    },
    {
      phase: "Phase 3",
      title: "Migrate & Validate",
      duration: "3-12 months",
      activities: ["Phased workload migration", "Data migration and validation", "Application testing", "Performance optimization"]
    },
    {
      phase: "Phase 4",
      title: "Optimize & Operate",
      duration: "Ongoing",
      activities: ["Cost optimization", "Performance tuning", "Continuous monitoring", "Cloud Center of Excellence"]
    }
  ];

  const migrationStrategies = [
    {
      strategy: "Rehost (Lift & Shift)",
      description: "Move applications to cloud with minimal changes",
      timeframe: "Fastest",
      costSavings: "20-30%",
      bestFor: "Legacy applications, quick migration needs"
    },
    {
      strategy: "Replatform (Lift & Reshape)",
      description: "Make targeted optimizations without changing core architecture",
      timeframe: "Moderate",
      costSavings: "30-40%",
      bestFor: "Applications that benefit from managed services"
    },
    {
      strategy: "Refactor (Re-architect)",
      description: "Redesign applications to be cloud-native",
      timeframe: "Longer",
      costSavings: "40-60%",
      bestFor: "Mission-critical apps requiring scalability and resilience"
    }
  ];

  const caseStudy = {
    title: "Federal Agency Migrates 200+ Applications to AWS GovCloud in 18 Months",
    challenge: "A large federal agency needed to migrate 200+ legacy applications from aging on-premises data centers to AWS GovCloud while maintaining FedRAMP High compliance and zero downtime for mission-critical systems.",
    solution: "NexDyne led a phased migration approach, starting with a comprehensive assessment and pilot migration, followed by wave-based migration of applications using rehost, replatform, and refactor strategies. We implemented automated migration tools, established a cloud center of excellence, and provided 24/7 support throughout the transition.",
    results: [
      "Successfully migrated 200+ applications in 18 months",
      "Achieved 42% reduction in total cost of ownership",
      "Maintained 99.99% uptime for mission-critical systems",
      "Reduced application deployment time from months to days",
      "Improved disaster recovery capabilities (RTO reduced from 48 hours to 4 hours)",
      "Established cloud center of excellence with 30+ trained staff"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'GovCloud Migration' }
              ]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              Cloud Modernization
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Government Cloud Migration Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Accelerate your agency's digital transformation with secure, compliant migration to AWS GovCloud, Azure Government, or Google Cloud for Government. Our proven methodology ensures minimal risk, zero downtime, and maximum value from your cloud investment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule Cloud Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Download Migration Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative diagonal cut */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 40%, 0 100%)' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">75+</div>
              <div className="text-slate-600">Cloud Migrations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">2,500+</div>
              <div className="text-slate-600">Applications Migrated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">42%</div>
              <div className="text-slate-600">Average TCO Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">99.99%</div>
              <div className="text-slate-600">Uptime During Migration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Migrate to Government Cloud?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Government cloud platforms provide the security, compliance, and capabilities federal agencies need to modernize their IT infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Government Cloud Platforms</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We have deep expertise across all major government cloud platforms, helping you choose the right platform for your mission requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-slate-200 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Cloud className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{platform.description}</p>
                  <div>
                    <div className="text-sm font-semibold text-slate-700 mb-2">Key Features:</div>
                    <ul className="space-y-1">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-sm font-semibold text-slate-700 mb-1">Best For:</div>
                    <p className="text-sm text-slate-600">{platform.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Strategies Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Migration Strategies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We tailor our migration approach based on your application characteristics, business requirements, and modernization goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {migrationStrategies.map((item, index) => (
              <Card key={index} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">{item.strategy}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{item.description}</p>
                  <div className="space-y-3 pt-4 border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-700">Timeframe:</span>
                      <span className="text-sm text-slate-600">{item.timeframe}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-700">Cost Savings:</span>
                      <span className="text-sm font-bold text-green-600">{item.costSavings}</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-sm font-semibold text-slate-700 mb-1">Best For:</div>
                      <p className="text-sm text-slate-600">{item.bestFor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Migration Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end migration services covering every aspect of your cloud transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-slate-200 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-slate-700">Key Deliverables:</div>
                    {service.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Migration Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven four-phase methodology that minimizes risk and maximizes value from your cloud migration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <Card key={index} className="border-slate-200 relative">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100">
                    {phase.phase}
                  </Badge>
                  <CardTitle className="text-xl text-slate-900">{phase.title}</CardTitle>
                  <div className="text-sm text-slate-500">{phase.duration}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
              Success Story
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{caseStudy.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">The Challenge</h3>
                <p className="text-slate-600">{caseStudy.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Our Solution</h3>
                <p className="text-slate-600">{caseStudy.solution}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Results Achieved</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Server className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Infrastructure?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your cloud migration journey with a comprehensive assessment. Our experts will evaluate your current environment, identify opportunities, and develop a customized migration roadmap.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Download TCO Calculator
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
