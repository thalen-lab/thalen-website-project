import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { CheckCircle2, Shield, Lock, FileCheck, Clock, Users, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export default function FedRAMP() {
  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security Posture",
      description: "Implement rigorous security controls that meet federal standards and protect sensitive government data."
    },
    {
      icon: Lock,
      title: "Standardized Compliance",
      description: "Leverage a standardized approach to security assessment, authorization, and continuous monitoring."
    },
    {
      icon: FileCheck,
      title: "Accelerated Authorization",
      description: "Reduce time to authorization with our proven FedRAMP compliance methodology and templates."
    },
    {
      icon: Clock,
      title: "Continuous Monitoring",
      description: "Maintain compliance with automated continuous monitoring and reporting capabilities."
    }
  ];

  const services = [
    {
      title: "FedRAMP Readiness Assessment",
      description: "Comprehensive evaluation of your current security posture against FedRAMP requirements, identifying gaps and creating a detailed remediation roadmap.",
      deliverables: ["Gap analysis report", "Remediation roadmap", "Cost and timeline estimates"]
    },
    {
      title: "System Security Plan (SSP) Development",
      description: "Complete SSP documentation package including security controls implementation, policies, and procedures aligned with NIST 800-53.",
      deliverables: ["Complete SSP documentation", "Control implementation descriptions", "Policy and procedure templates"]
    },
    {
      title: "Security Controls Implementation",
      description: "Technical implementation of required security controls across your cloud infrastructure, applications, and operational processes.",
      deliverables: ["Implemented security controls", "Configuration documentation", "Testing and validation reports"]
    },
    {
      title: "3PAO Assessment Support",
      description: "End-to-end support throughout the Third Party Assessment Organization (3PAO) assessment process, including evidence collection and remediation.",
      deliverables: ["Evidence packages", "Assessment coordination", "Finding remediation support"]
    },
    {
      title: "Authorization Package Preparation",
      description: "Complete preparation of all required authorization package documents for submission to the FedRAMP PMO or agency authorization.",
      deliverables: ["Authorization package", "Security assessment report", "Plan of Action & Milestones (POA&M)"]
    },
    {
      title: "Continuous Monitoring & Maintenance",
      description: "Ongoing continuous monitoring, monthly reporting, and annual assessment support to maintain your FedRAMP authorization.",
      deliverables: ["Monthly continuous monitoring reports", "Annual assessment support", "Change management coordination"]
    }
  ];

  const process = [
    {
      phase: "Phase 1",
      title: "Readiness Assessment",
      duration: "4-6 weeks",
      activities: ["Current state evaluation", "Gap analysis", "Roadmap development", "Resource planning"]
    },
    {
      phase: "Phase 2",
      title: "Documentation & Implementation",
      duration: "3-6 months",
      activities: ["SSP development", "Security controls implementation", "Policy creation", "Evidence collection"]
    },
    {
      phase: "Phase 3",
      title: "Assessment & Authorization",
      duration: "3-4 months",
      activities: ["3PAO assessment", "Finding remediation", "Authorization package preparation", "PMO submission"]
    },
    {
      phase: "Phase 4",
      title: "Continuous Monitoring",
      duration: "Ongoing",
      activities: ["Monthly reporting", "Continuous monitoring", "Change management", "Annual assessments"]
    }
  ];

  const caseStudy = {
    title: "SaaS Provider Achieves FedRAMP Moderate Authorization in 9 Months",
    challenge: "A leading SaaS platform needed FedRAMP Moderate authorization to expand into the federal market but lacked internal expertise and resources.",
    solution: "Thalen Technologies led the complete FedRAMP authorization process, from readiness assessment through successful authorization, implementing 325+ security controls and managing the 3PAO assessment.",
    results: [
      "Achieved FedRAMP Moderate authorization in 9 months",
      "Implemented 325+ security controls across AWS infrastructure",
      "Passed 3PAO assessment with zero high findings",
      "$45M in new federal contracts secured within first year",
      "Established continuous monitoring program for ongoing compliance"
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
                { label: 'FedRAMP' }
              ]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              Federal Cloud Security
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              FedRAMP Authorization Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Accelerate your path to FedRAMP authorization with our proven methodology, expert guidance, and comprehensive support. We help cloud service providers achieve and maintain FedRAMP compliance for federal agencies, opening doors to billions in federal opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule FedRAMP Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Download FedRAMP Guide
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
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-slate-600">FedRAMP Authorizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">9 Months</div>
              <div className="text-slate-600">Average Time to ATO</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-slate-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">325+</div>
              <div className="text-slate-600">Security Controls</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is FedRAMP Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">What is FedRAMP?</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p>
                The Federal Risk and Authorization Management Program (FedRAMP) is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services used by federal agencies.
              </p>
              <p>
                FedRAMP authorization is required for cloud service providers who want to do business with federal agencies. The program establishes rigorous security requirements based on NIST standards and provides a "do once, use many times" framework that reduces duplication of effort and accelerates the adoption of secure cloud solutions across federal government.
              </p>
              <p>
                There are three FedRAMP authorization levels: Low, Moderate, and High, each corresponding to the potential impact level of the data being processed. Most federal agencies require FedRAMP Moderate authorization at minimum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why FedRAMP Authorization Matters</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              FedRAMP authorization opens the door to federal opportunities and demonstrates your commitment to the highest security standards.
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our FedRAMP Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive support throughout your entire FedRAMP journey, from initial readiness assessment to ongoing continuous monitoring.
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
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our FedRAMP Authorization Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven four-phase methodology that takes you from readiness assessment to full authorization and beyond.
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
      <section className="py-20 bg-white">
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

            <div className="bg-slate-50 rounded-lg p-8">
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
            <Users className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your FedRAMP Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our FedRAMP experts are ready to assess your readiness, develop your authorization strategy, and guide you through every step of the process.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Download FedRAMP Checklist
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
