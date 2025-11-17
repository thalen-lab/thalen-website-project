import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, CheckCircle2, ArrowRight, AlertTriangle, FileCheck } from "lucide-react";
import { Link } from "wouter";

export default function CloudSecurity() {
  const securityLayers = [
    {
      icon: Shield,
      title: "FedRAMP Compliance",
      description: "End-to-end FedRAMP High, Moderate, and Low authorization support with continuous compliance monitoring.",
    },
    {
      icon: Lock,
      title: "Identity & Access Management",
      description: "Zero-trust architecture with MFA, role-based access controls, and privileged access management.",
    },
    {
      icon: Eye,
      title: "Threat Detection & Response",
      description: "24/7 security monitoring with automated threat detection, incident response, and forensics.",
    },
    {
      icon: FileCheck,
      title: "Compliance Automation",
      description: "Automated compliance reporting for FISMA, NIST 800-53, and DoD security requirements.",
    },
  ];

  const complianceFrameworks = [
    "FedRAMP High/Moderate/Low",
    "FISMA",
    "NIST 800-53",
    "NIST Cybersecurity Framework",
    "DoD Cloud Computing SRG",
    "CJIS Security Policy",
    "HIPAA/HITECH",
    "IRS 1075",
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
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Cloud Security & Compliance</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              FedRAMP-Compliant Cloud Security
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Implement comprehensive security controls and continuous compliance monitoring for federal cloud 
              environments with FedRAMP, FISMA, and NIST 800-53 frameworks.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Schedule Security Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Layers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Defense-in-depth security architecture for mission-critical cloud environments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <Card key={index} className="border-2 hover:border-orange-500 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{layer.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{layer.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Compliance Frameworks</h2>
            <p className="text-xl text-gray-600 mb-12">
              Expertise across all federal security and compliance requirements
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white border-2 border-blue-500 rounded-lg p-4 text-center">
                  <span className="font-semibold text-gray-900">{framework}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Secure Your Cloud Environment</h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a complimentary security assessment to identify vulnerabilities and compliance gaps.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Schedule Security Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
