import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cloud,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Database,
  Server,
  Lock,
  Clock,
} from "lucide-react";
import { Link } from "wouter";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CloudMigration() {
  const benefits = [
    {
      icon: Zap,
      title: "Zero Downtime Migration",
      description: "Proven strategies ensuring 99.99% uptime during transition with automated failover and rollback capabilities.",
    },
    {
      icon: Shield,
      title: "FedRAMP Compliant",
      description: "End-to-end migration to FedRAMP High, Moderate, or Low authorized cloud environments with continuous compliance monitoring.",
    },
    {
      icon: Database,
      title: "Complete Data Integrity",
      description: "Automated validation and verification processes ensuring 100% data accuracy and consistency throughout migration.",
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "30-day migration framework vs. industry average of 6-12 months, accelerating your cloud transformation timeline.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of current infrastructure, applications, and dependencies with detailed migration roadmap.",
      deliverables: ["Infrastructure inventory", "Dependency mapping", "Risk assessment", "Migration strategy document"],
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design target cloud architecture optimized for performance, security, and cost-efficiency with FedRAMP compliance.",
      deliverables: ["Cloud architecture diagrams", "Security controls matrix", "Cost optimization plan", "Disaster recovery design"],
    },
    {
      step: "03",
      title: "Migration Execution",
      description: "Phased migration with automated tools, continuous monitoring, and real-time validation ensuring zero data loss.",
      deliverables: ["Automated migration scripts", "Validation reports", "Performance benchmarks", "Rollback procedures"],
    },
    {
      step: "04",
      title: "Optimization & Handoff",
      description: "Post-migration optimization, performance tuning, and comprehensive knowledge transfer to your team.",
      deliverables: ["Performance optimization report", "Operations runbooks", "Training materials", "Support transition plan"],
    },
  ];

  const migrationTypes = [
    {
      title: "Rehost (Lift & Shift)",
      description: "Rapidly migrate applications to cloud with minimal changes, ideal for time-sensitive migrations.",
      useCase: "Legacy systems requiring quick cloud adoption",
    },
    {
      title: "Replatform",
      description: "Optimize applications during migration by leveraging cloud-native services without full redesign.",
      useCase: "Applications needing performance improvements",
    },
    {
      title: "Refactor/Re-architect",
      description: "Redesign applications to fully leverage cloud-native capabilities for maximum efficiency.",
      useCase: "Critical systems requiring modernization",
    },
    {
      title: "Hybrid Migration",
      description: "Maintain on-premises infrastructure while migrating select workloads to cloud environments.",
      useCase: "Agencies with regulatory or operational constraints",
    },
  ];

  const technologies = [
    "AWS Migration Hub",
    "Azure Migrate",
    "Google Cloud Migrate",
    "CloudEndure",
    "Terraform",
    "Ansible",
    "Kubernetes",
    "Docker",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* Hero Section */}
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
              <Cloud className="w-4 h-4" />
              <span className="text-sm font-medium">Cloud Migration & Transition</span>
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Seamless Cloud Migration with Zero Downtime
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Migrate mission-critical systems to FedRAMP-compliant cloud environments with proven strategies 
              that ensure complete data integrity, zero downtime, and accelerated timelines.
            </p>

            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Schedule Migration Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Migration Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven migration strategies designed for federal mission success
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured, repeatable methodology ensuring successful cloud transitions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {process.map((phase, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl font-bold text-orange-500">{phase.step}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {deliverable}
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

      {/* Migration Types */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Migration Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored approaches based on your agency's specific needs and constraints
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {migrationTypes.map((type, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {type.description}
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                    <p className="text-sm font-medium text-blue-900">
                      <span className="text-blue-600">Best for:</span> {type.useCase}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Migration Technologies & Tools
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Enterprise-grade tools and automation for reliable, repeatable migrations
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-6 py-3"
                >
                  <span className="font-semibold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Cloud Migration?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a complimentary migration assessment to discover how NexDyne can 
              accelerate your cloud transition with zero downtime.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  Schedule Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View Migration Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
