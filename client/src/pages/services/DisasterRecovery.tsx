import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, Shield, Clock, CheckCircle2, ArrowRight, Database, Server } from "lucide-react";
import { Link } from "wouter";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function DisasterRecovery() {
  const benefits = [
    {
      icon: Clock,
      title: "Rapid Recovery",
      description: "RTO of 1-4 hours and RPO of 15 minutes for mission-critical systems with automated failover.",
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Multi-region backup with encryption at rest and in transit, ensuring complete data integrity.",
    },
    {
      icon: RefreshCw,
      title: "Automated Failover",
      description: "Continuous health monitoring with automatic failover to secondary regions during outages.",
    },
    {
      icon: Server,
      title: "Business Continuity",
      description: "Comprehensive BC/DR plans with regular testing and validation for mission assurance.",
    },
  ];

  const strategies = [
    {
      title: "Backup & Restore",
      rto: "24 hours",
      rpo: "24 hours",
      description: "Cost-effective solution for non-critical systems with daily backups to cloud storage.",
    },
    {
      title: "Pilot Light",
      rto: "4-8 hours",
      rpo: "1 hour",
      description: "Minimal infrastructure running in DR site, rapidly scaled during disaster events.",
    },
    {
      title: "Warm Standby",
      rto: "1-4 hours",
      rpo: "15 minutes",
      description: "Scaled-down version of production running continuously with real-time data replication.",
    },
    {
      title: "Hot Standby (Active-Active)",
      rto: "Minutes",
      rpo: "Near-zero",
      description: "Full production environment running in multiple regions with automatic load balancing.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
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
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm font-medium">Disaster Recovery & Business Continuity</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Mission-Critical Disaster Recovery
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ensure business continuity with robust DR/BC strategies featuring automated failover, 
              multi-region backup, and rapid recovery for mission-critical federal operations.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Schedule DR Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DR/BC Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive disaster recovery and business continuity for federal missions
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DR Strategies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored disaster recovery approaches based on your RTO/RPO requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {strategies.map((strategy, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{strategy.title}</h3>
                  <div className="flex gap-4 mb-3">
                    <div className="bg-blue-50 border border-blue-200 rounded px-3 py-1">
                      <span className="text-xs font-semibold text-blue-900">RTO: {strategy.rto}</span>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded px-3 py-1">
                      <span className="text-xs font-semibold text-green-900">RPO: {strategy.rpo}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Protect Your Mission-Critical Operations</h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a complimentary DR assessment to evaluate your current capabilities and design a robust recovery strategy.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Schedule DR Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
