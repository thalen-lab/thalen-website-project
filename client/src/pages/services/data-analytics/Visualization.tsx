import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import { ArrowRight, Activity, Gauge, Eye } from 'lucide-react';

export default function Visualization() {
  const visualizationBenefits = [
    {
      icon: Activity,
      title: 'Real-Time Operational Dashboards',
      description: 'Monitor mission-critical operations as they happen with sub-second data refresh rates. Track threats, operations, logistics, and resource status in real-time—not with yesterday\'s batch reports.'
    },
    {
      icon: Gauge,
      title: 'Executive Command Centers',
      description: 'Give leadership the intelligence they need to make decisions with confidence. Purpose-built dashboards that surface critical KPIs, anomalies, and trends without overwhelming users with irrelevant data.'
    },
    {
      icon: Eye,
      title: 'Predictive Insights, Not Just Historical Reports',
      description: 'Move beyond backward-looking reports. Our analytics platforms combine real-time data with ML models to forecast trends, predict failures, and identify emerging threats before they escalate.'
    }
  ];

  const useCases = [
    {
      title: 'Intelligence Analysis Workbenches',
      description: 'Analysts need to correlate data from dozens of sources, identify patterns, and brief leadership—all under time pressure. Thalen Technologies builds custom intelligence workbenches that integrate SIGINT, HUMINT, OSINT, and other data streams into unified visual analysis environments.',
      metrics: ['50+ data sources integrated', '3-second query response', 'Classified data handling']
    },
    {
      title: 'Operational Command & Control',
      description: 'Military and emergency response operations require real-time situational awareness. We build command center dashboards that display asset locations, mission status, weather, threats, and logistics on unified displays with map-based visualization.',
      metrics: ['Real-time GPS tracking', 'Multi-source data fusion', 'Mobile field access']
    },
    {
      title: 'Fraud Detection & Monitoring',
      description: 'Benefits programs lose billions to fraud annually. Our fraud detection dashboards combine transaction monitoring, behavioral analytics, and ML-based anomaly detection to flag suspicious activity in real-time for investigator review.',
      metrics: ['$500M+ fraud prevented', '95% detection accuracy', 'Automated case routing']
    },
    {
      title: 'Performance Management Dashboards',
      description: 'Agency leaders need visibility into program performance, budget execution, and mission outcomes. We build executive dashboards that track KPIs, highlight variances, and enable drill-down analysis without requiring SQL or BI tool training.',
      metrics: ['50+ KPIs tracked', 'Automated reporting', 'Mobile executive access']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section - Z100 Editorial Style */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container max-w-5xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-12">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-zinc-900 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/data-analytics" className="hover:text-zinc-900 transition-colors">Data Analytics</Link>
            <span>/</span>
            <span className="text-zinc-900">Real-Time Analytics & Visualization</span>
          </div>

          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-light text-zinc-900 leading-[1.1] tracking-tight">
              Real-Time Analytics & Visualization
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light max-w-4xl">
              Government operations (federal, state, and local) do not run on last night's batch reports. When threats emerge, operations unfold, or crises develop, decision-makers need real-time intelligence—not data that is hours or days old. Thalen Technologies builds mission-critical analytics platforms using FedRAMP and StateRAMP-authorized tools that deliver actionable insights in real-time with government-grade security. From intelligence analysis to operational command centers, our dashboards turn massive data streams into clear, actionable intelligence.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 text-base font-normal rounded-none"
                >
                  Request Dashboard Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white px-8 h-12 text-base font-normal rounded-none"
              >
                View Visualization Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Why Real-Time Analytics Matter - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4 tracking-tight">
            Why Real-Time Analytics Matter for Federal Missions
          </h2>
          <p className="text-xl text-zinc-600 leading-relaxed font-light mb-16 max-w-3xl">
            When decisions have national security implications, you cannot afford to wait for overnight ETL jobs to complete.
          </p>

          <div className="space-y-12">
            {visualizationBenefits.map((benefit, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <benefit.icon className="h-8 w-8 text-zinc-900" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-zinc-900 mb-3">{benefit.title}</h3>
                  <p className="text-base text-zinc-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Use Cases - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-16 tracking-tight">
            Real-Time Analytics Use Cases
          </h2>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div key={index} className="border-l-2 border-zinc-900 pl-8">
                <h3 className="text-2xl font-light text-zinc-900 mb-4">{useCase.title}</h3>
                <p className="text-base text-zinc-600 leading-relaxed mb-6">{useCase.description}</p>
                
                <div className="flex flex-wrap gap-4">
                  {useCase.metrics.map((metric, idx) => (
                    <span key={idx} className="text-sm text-zinc-900 px-4 py-2 border border-zinc-300">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* FedRAMP Platforms - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-8 tracking-tight">
            FedRAMP-Authorized Visualization Platforms
          </h2>
          
          <p className="text-base text-zinc-600 leading-relaxed mb-8">
            We implement and integrate government-authorized analytics platforms that meet your security and compliance requirements:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Tableau Government</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Industry-leading visual analytics with FedRAMP authorization for interactive dashboards and embedded analytics
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Microsoft Power BI Government</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Integrated with Microsoft 365 GCC High for seamless data access and collaboration
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Qlik Government</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Associative analytics engine for complex data relationships and ad-hoc exploration
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Domo Government</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Cloud-native BI platform with mobile-first design and automated data pipelines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Implementation Approach - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-12 tracking-tight">
            Our Analytics Implementation Approach
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">1. Requirements Discovery & Platform Selection</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We start by understanding your mission requirements, data sources, user needs, and compliance constraints. Then we help you select the RIGHT FedRAMP-authorized platform—not just the one we happen to sell.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">2. Data Architecture & Integration</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Before building dashboards, we ensure your data architecture can support real-time analytics. This includes data pipeline development, API integration, caching strategies, and performance optimization.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">3. Dashboard Design & Development</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We design dashboards with mission users—not just IT stakeholders. Our UX-focused approach ensures dashboards surface the right insights at the right time without overwhelming users with irrelevant data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">4. Security, Testing & Deployment</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                All dashboards undergo security review, performance testing, and user acceptance testing before production deployment. We implement role-based access controls, data masking, and audit logging as required.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">5. Training & Sustainment</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We train your team to maintain and extend dashboards after deployment. Our goal is to enable your team to be self-sufficient—not create vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* CTA Section - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 tracking-tight">
              Ready to Build Real-Time Analytics Dashboards?
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-light max-w-3xl">
              Let's discuss your visualization requirements and how we can help you implement FedRAMP-authorized analytics platforms that deliver mission-critical intelligence.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 text-base font-normal rounded-none"
                >
                  Request Dashboard Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
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
