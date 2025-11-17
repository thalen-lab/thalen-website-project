import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cloud,
  Shield,
  Zap,
  Lock,
  Server,
  GitBranch,
  Database,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import { Link } from "wouter";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CloudServices() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration & Transition",
      description:
        "Seamlessly migrate mission-critical systems to FedRAMP-compliant cloud environments with zero downtime and complete data integrity.",
      link: "/services/cloud/migration",
    },
    {
      icon: TrendingUp,
      title: "Cloud Optimization & Cost Management",
      description:
        "Optimize cloud spending and performance with continuous monitoring, right-sizing, and automated cost controls for federal budgets.",
      link: "/services/cloud/optimization",
    },
    {
      icon: Server,
      title: "Multi-Cloud & Hybrid Solutions",
      description:
        "Deploy resilient multi-cloud and hybrid architectures that meet stringent government security and availability requirements.",
      link: "/services/cloud/multi-cloud",
    },
    {
      icon: Shield,
      title: "Cloud Security & Compliance",
      description:
        "Implement FedRAMP, FISMA, and NIST-compliant security controls with continuous monitoring and automated compliance reporting.",
      link: "/services/cloud/security",
    },
    {
      icon: GitBranch,
      title: "Infrastructure as Code",
      description:
        "Automate infrastructure provisioning with Terraform, CloudFormation, and CI/CD pipelines for repeatable, auditable deployments.",
      link: "/services/cloud/infrastructure-as-code",
    },
    {
      icon: RefreshCw,
      title: "Disaster Recovery & Business Continuity",
      description:
        "Design and implement robust DR/BC strategies with automated failover, backup, and recovery for mission-critical operations.",
      link: "/services/cloud/disaster-recovery",
    },
  ];

  const capabilities = [
    {
      icon: Award,
      title: "FedRAMP Authorized",
      description: "Deep expertise in FedRAMP High, Moderate, and Low authorization processes",
    },
    {
      icon: Lock,
      title: "Security Clearances",
      description: "Team members with active Secret and Top Secret clearances for classified work",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "30-day framework for cloud migration vs. industry average of 6-12 months",
    },
    {
      icon: Database,
      title: "Zero Downtime",
      description: "Proven migration strategies ensuring 99.99% uptime during transitions",
    },
  ];

  const metrics = [
    { value: "85%", label: "Average Cost Reduction" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "30 Days", label: "Migration Timeline" },
    { value: "100%", label: "Compliance Rate" },
  ];

  const caseStudy = {
    agency: "Federal Civilian Agency",
    challenge: "Legacy on-premises infrastructure with high maintenance costs and limited scalability",
    solution: "Migrated 200+ applications to AWS GovCloud with FedRAMP High authorization",
    results: [
      "85% reduction in infrastructure costs",
      "Zero downtime during migration",
      "Achieved FedRAMP High ATO in 6 months",
      "Improved system performance by 300%",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFhMjAzZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <Cloud className="w-4 h-4" />
              <span className="text-sm font-medium">Cloud Infrastructure & Modernization</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Mission-Critical Cloud Transformation
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Accelerate your agency's cloud adoption with FedRAMP-compliant infrastructure, 
              zero-downtime migrations, and proven security frameworks designed for federal mission success.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg">
                  Schedule Cloud Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">{metric.value}</div>
                <div className="text-sm text-blue-200">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end cloud infrastructure and modernization services designed for 
              federal agencies and mission-critical operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href={service.link}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500 cursor-pointer group">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Federal Agencies Choose NexDyne
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven expertise in secure, compliant, and mission-critical cloud infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Proven Results for Federal Agencies
              </h2>
              <p className="text-xl text-blue-100">
                Real-world cloud transformation success story
              </p>
            </div>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-orange-400">
                      {caseStudy.agency}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-200 mb-2">Challenge</h4>
                      <p className="text-white/90">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-200 mb-2">Solution</h4>
                      <p className="text-white/90">{caseStudy.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-4">Results</h4>
                    <ul className="space-y-3">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/case-studies">
                      <Button className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                        Read Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a complimentary cloud readiness assessment and discover how NexDyne 
              can accelerate your agency's cloud transformation journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg">
                  Schedule Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn About Our Team
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
