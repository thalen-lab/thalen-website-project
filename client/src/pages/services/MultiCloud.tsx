import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Shield, Zap, CheckCircle2, ArrowRight, Cloud, Database } from "lucide-react";
import { Link } from "wouter";

export default function MultiCloud() {
  const benefits = [
    {
      icon: Shield,
      title: "Vendor Independence",
      description: "Avoid vendor lock-in with portable architectures across AWS, Azure, and Google Cloud platforms.",
    },
    {
      icon: Zap,
      title: "High Availability",
      description: "99.99% uptime with automated failover across multiple cloud providers and regions.",
    },
    {
      icon: Database,
      title: "Disaster Recovery",
      description: "Geographic redundancy and automated backup across cloud providers for mission-critical data.",
    },
    {
      icon: Server,
      title: "Workload Optimization",
      description: "Deploy workloads to the most cost-effective and performant cloud platform for each use case.",
    },
  ];

  const architectures = [
    {
      title: "Multi-Cloud Strategy",
      description: "Distribute workloads across multiple public cloud providers (AWS, Azure, GCP) for resilience and flexibility.",
      useCases: ["Mission-critical applications", "Geographic redundancy", "Vendor diversification"],
    },
    {
      title: "Hybrid Cloud",
      description: "Seamlessly integrate on-premises infrastructure with public cloud for regulatory compliance and data sovereignty.",
      useCases: ["Classified workloads", "Data residency requirements", "Legacy system integration"],
    },
    {
      title: "Cloud-Agnostic Design",
      description: "Build portable applications using Kubernetes, Terraform, and cloud-agnostic services for maximum flexibility.",
      useCases: ["Long-term vendor independence", "Portable applications", "Cost optimization"],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <Link href="/services/cloud">
              <Button variant="ghost" className="text-blue-200 hover:text-white mb-6 -ml-4">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Cloud Services
              </Button>
            </Link>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <Server className="w-4 h-4" />
              <span className="text-sm font-medium">Multi-Cloud & Hybrid Solutions</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Resilient Multi-Cloud & Hybrid Architectures
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Deploy mission-critical workloads across multiple cloud providers and on-premises infrastructure 
              for maximum resilience, flexibility, and vendor independence.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Schedule Architecture Review
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Multi-Cloud Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic advantages of multi-cloud and hybrid architectures
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-2 hover:border-orange-500 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Architecture Approaches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored multi-cloud and hybrid strategies for federal agencies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {architectures.map((arch, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{arch.title}</h3>
                  <p className="text-gray-600 mb-4">{arch.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <ul className="space-y-2">
                      {arch.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build a Resilient Multi-Cloud Strategy?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a complimentary architecture review to explore multi-cloud and hybrid solutions 
              tailored for your agency's mission requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Schedule Architecture Review
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
