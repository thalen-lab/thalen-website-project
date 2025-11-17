import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  DollarSign,
  Gauge,
  Shield,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Zap,
  Clock,
} from "lucide-react";
import { Link } from "wouter";

export default function CloudOptimization() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Average 40-60% reduction in cloud spending through right-sizing, reserved instances, and automated cost controls.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Improve application performance by 200-300% through architecture optimization and resource tuning.",
    },
    {
      icon: Shield,
      title: "Security Enhancement",
      description: "Strengthen security posture while optimizing costs with automated compliance and threat detection.",
    },
    {
      icon: Clock,
      title: "Continuous Monitoring",
      description: "24/7 monitoring with automated alerts and remediation for cost anomalies and performance issues.",
    },
  ];

  const optimizationAreas = [
    {
      title: "Compute Optimization",
      items: [
        "Right-sizing EC2/VM instances based on actual usage",
        "Implementing auto-scaling for dynamic workloads",
        "Leveraging spot instances for non-critical workloads",
        "Optimizing container and Kubernetes resource allocation",
      ],
    },
    {
      title: "Storage Optimization",
      items: [
        "Implementing intelligent tiering for S3/Blob storage",
        "Optimizing database instance types and storage",
        "Automated lifecycle policies for data archival",
        "Deduplication and compression strategies",
      ],
    },
    {
      title: "Network Optimization",
      items: [
        "Optimizing data transfer costs across regions",
        "Implementing CDN for content delivery",
        "VPC peering and transit gateway optimization",
        "Load balancer and traffic routing efficiency",
      ],
    },
    {
      title: "Licensing Optimization",
      items: [
        "Reserved instance and savings plan analysis",
        "License mobility and BYOL strategies",
        "Commitment-based discount optimization",
        "Third-party software license management",
      ],
    },
  ];

  const process = [
    {
      step: "Assess",
      description: "Comprehensive analysis of current cloud usage, costs, and performance metrics",
    },
    {
      step: "Identify",
      description: "Pinpoint optimization opportunities across compute, storage, and network resources",
    },
    {
      step: "Implement",
      description: "Execute optimization strategies with minimal disruption to operations",
    },
    {
      step: "Monitor",
      description: "Continuous monitoring and automated optimization recommendations",
    },
  ];

  const metrics = [
    { value: "45%", label: "Average Cost Savings" },
    { value: "250%", label: "Performance Improvement" },
    { value: "90%", label: "Resource Utilization" },
    { value: "24/7", label: "Continuous Monitoring" },
  ];

  return (
    <div className="min-h-screen">
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
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Cloud Optimization & Cost Management</span>
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Maximize Cloud ROI with Intelligent Optimization
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Reduce cloud spending by 40-60% while improving performance through continuous monitoring, 
              automated optimization, and strategic resource management.
            </p>

            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Get Free Cost Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">{metric.value}</div>
                <div className="text-sm text-blue-200">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Optimization Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud optimization delivering measurable business value
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

      {/* Optimization Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Optimization Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive optimization across all cloud resource categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {optimizationAreas.map((area, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {area.title}
                  </h3>
                  <ul className="space-y-3">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Optimization Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to continuous cloud cost and performance optimization
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {phase.step}
                </h3>
                <p className="text-gray-600">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Optimizing Your Cloud Costs Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free cloud cost analysis and discover how much you can save with NexDyne's 
              optimization services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  Get Free Cost Analysis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Optimization Results
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
