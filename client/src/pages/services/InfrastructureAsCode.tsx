import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GitBranch, Zap, Shield, CheckCircle2, ArrowRight, Code, RefreshCw } from "lucide-react";
import { Link } from "wouter";

export default function InfrastructureAsCode() {
  const benefits = [
    {
      icon: Zap,
      title: "Rapid Provisioning",
      description: "Deploy complete infrastructure in minutes vs. days with automated, repeatable processes.",
    },
    {
      icon: Shield,
      title: "Consistency & Compliance",
      description: "Ensure all environments meet security standards with version-controlled infrastructure code.",
    },
    {
      icon: RefreshCw,
      title: "Disaster Recovery",
      description: "Rebuild entire environments instantly with infrastructure-as-code templates and automation.",
    },
    {
      icon: Code,
      title: "Audit Trail",
      description: "Complete visibility into infrastructure changes with Git history and automated compliance reporting.",
    },
  ];

  const tools = [
    { name: "Terraform", description: "Multi-cloud infrastructure provisioning with declarative configuration" },
    { name: "AWS CloudFormation", description: "Native AWS infrastructure automation with stack management" },
    { name: "Azure Resource Manager", description: "Azure infrastructure deployment with ARM templates" },
    { name: "Ansible", description: "Configuration management and application deployment automation" },
    { name: "Kubernetes", description: "Container orchestration and cloud-native application deployment" },
    { name: "GitLab CI/CD", description: "Automated pipeline for infrastructure testing and deployment" },
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
              <GitBranch className="w-4 h-4" />
              <span className="text-sm font-medium">Infrastructure as Code</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Automated Infrastructure Provisioning
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Deploy and manage cloud infrastructure with version-controlled, auditable code using Terraform, 
              CloudFormation, and CI/CD pipelines for repeatable, compliant deployments.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Schedule IaC Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IaC Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform infrastructure management with automation and version control
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IaC Tools & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade tools for infrastructure automation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Automate Your Infrastructure</h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a consultation to explore how Infrastructure as Code can accelerate your cloud operations.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Schedule IaC Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
