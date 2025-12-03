import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Target, Map, Compass } from 'lucide-react';

export default function Strategy() {
  const strategyBenefits = [
    {
      icon: Target,
      title: 'Mission-Aligned Analytics Strategy',
      description: 'Stop buying analytics tools without a plan. We help you develop a comprehensive data strategy that aligns analytics investments with mission objectives, ensuring every dollar spent on analytics delivers measurable value.'
    },
    {
      icon: Map,
      title: '3-Year Analytics Roadmap',
      description: 'You need a phased implementation plan that delivers quick wins while building toward long-term analytics maturity. We create realistic roadmaps that balance short-term results with strategic transformation.'
    },
    {
      icon: Compass,
      title: 'Data Governance Framework',
      description: 'Without governance, analytics initiatives fail. We establish data governance frameworks that define ownership, quality standards, security policies, and compliance requirements—ensuring analytics programs scale sustainably.'
    }
  ];

  const strategyComponents = [
    {
      title: 'Data Maturity Assessment',
      description: 'We assess your current analytics capabilities across six dimensions: data infrastructure, analytics tools, data governance, skills & training, data culture, and mission alignment. You receive a comprehensive maturity scorecard with gap analysis and improvement recommendations.',
      deliverables: ['Current state assessment', 'Maturity scorecard', 'Gap analysis', 'Prioritized recommendations']
    },
    {
      title: 'Analytics Use Case Identification',
      description: 'We work with mission stakeholders to identify high-value analytics use cases that deliver measurable outcomes. Each use case is evaluated for business value, technical feasibility, data readiness, and implementation complexity to prioritize the analytics roadmap.',
      deliverables: ['Use case inventory', 'Value & feasibility scoring', 'Data requirements analysis', 'Prioritization matrix']
    },
    {
      title: 'Data Architecture & Technology Selection',
      description: 'We design the target data architecture (data lakes, warehouses, lakehouses) and select FedRAMP-authorized analytics platforms that meet your requirements. Architecture decisions balance performance, cost, security, and vendor lock-in risk.',
      deliverables: ['Target architecture design', 'Technology evaluation & selection', 'Cost-benefit analysis', 'Migration strategy']
    },
    {
      title: 'Data Governance Framework',
      description: 'We establish data governance policies, roles, and processes that ensure data quality, security, and compliance. Governance frameworks define data ownership, stewardship responsibilities, quality standards, and escalation procedures.',
      deliverables: ['Governance operating model', 'Roles & responsibilities', 'Data quality standards', 'Policy documentation']
    },
    {
      title: '3-Year Implementation Roadmap',
      description: 'We create a phased implementation roadmap that delivers quick wins in 6-12 months while building toward long-term analytics maturity. Roadmaps include timelines, resource requirements, budget estimates, and success metrics for each phase.',
      deliverables: ['Phased roadmap', 'Resource & budget plan', 'Success metrics', 'Risk mitigation strategy']
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
            <span className="text-zinc-900">Data Strategy & Governance</span>
          </div>

          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-light text-zinc-900 leading-[1.1] tracking-tight">
              Data Strategy & Governance
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light max-w-4xl">
              Most government agencies (federal, state, and local) buy analytics tools without a strategy—then wonder why adoption is low and ROI is unclear. Analytics initiatives fail when they lack executive sponsorship, governance frameworks, and alignment with mission objectives. Thalen Technologies helps you develop comprehensive data strategies that define your analytics vision, prioritize use cases, select the right FedRAMP and StateRAMP-authorized platforms, and create realistic implementation roadmaps. From data maturity assessments to governance frameworks, we ensure your analytics investments deliver measurable mission impact.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 text-base font-normal rounded-none"
                >
                  Request Strategy Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services/data-analytics/assessment">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white px-8 h-12 text-base font-normal rounded-none"
                >
                  Take Data Maturity Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Strategy Benefits - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4 tracking-tight">
            Why Data Strategy Matters for Analytics Success
          </h2>
          <p className="text-xl text-zinc-600 leading-relaxed font-light mb-16 max-w-3xl">
            Analytics tools without strategy lead to wasted investments, low adoption, and unclear ROI. Strategy ensures analytics delivers mission value.
          </p>

          <div className="space-y-12">
            {strategyBenefits.map((benefit, index) => (
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

      {/* Strategy Components - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-16 tracking-tight">
            Comprehensive Data Strategy Components
          </h2>

          <div className="space-y-16">
            {strategyComponents.map((component, index) => (
              <div key={index} className="border-l-2 border-zinc-900 pl-8">
                <h3 className="text-2xl font-light text-zinc-900 mb-4">{component.title}</h3>
                <p className="text-base text-zinc-600 leading-relaxed mb-6">{component.description}</p>
                
                <div className="space-y-2">
                  <p className="text-sm font-normal text-zinc-900 mb-3">Key Deliverables:</p>
                  {component.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-zinc-600">{deliverable}</span>
                    </div>
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

      {/* Strategy Engagement Model - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-8 tracking-tight">
            6-Week Data Strategy Assessment
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed mb-12">
            Our data strategy assessment is a structured 6-week engagement that delivers a comprehensive analytics roadmap:
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">Week 1-2: Discovery & Assessment</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We interview stakeholders, assess current analytics capabilities, inventory data sources, and evaluate existing tools. You receive a current state assessment with maturity scoring across six dimensions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">Week 3: Use Case Identification & Prioritization</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We facilitate workshops with mission stakeholders to identify high-value analytics use cases. Each use case is scored for business value, technical feasibility, and data readiness to prioritize the roadmap.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">Week 4: Architecture & Technology Selection</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We design the target data architecture and evaluate FedRAMP-authorized analytics platforms. Technology recommendations are vendor-neutral and based on your requirements—not sales quotas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">Week 5: Governance Framework & Roadmap Development</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We establish data governance policies, define roles and responsibilities, and create a phased 3-year implementation roadmap with resource requirements and budget estimates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-zinc-900 mb-3">Week 6: Executive Briefing & Roadmap Delivery</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                We present findings and recommendations to executive leadership with a comprehensive strategy document, implementation roadmap, and next-step recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Data Maturity Model - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-8 tracking-tight">
            Data Maturity Assessment Framework
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed mb-8">
            We assess your analytics maturity across six dimensions, scoring each from Level 1 (Ad-Hoc) to Level 5 (Optimized):
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Data Infrastructure</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Data storage, pipelines, and integration capabilities that enable analytics at scale
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Analytics Tools & Platforms</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                BI, visualization, and ML platforms available to analysts and decision-makers
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Data Governance</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Policies, processes, and controls that ensure data quality, security, and compliance
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Skills & Training</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Analytics skills, training programs, and talent development initiatives
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Data Culture</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Executive sponsorship, data-driven decision-making, and analytics adoption
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-zinc-900 mb-2">Mission Alignment</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Analytics use cases aligned with mission objectives and measurable outcomes
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/services/data-analytics/assessment">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white px-8 h-12 text-base font-normal rounded-none"
              >
                Take Data Maturity Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Strategy Success Stories - Z100 Editorial Style */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-12 tracking-tight">
            Data Strategy Success Stories
          </h2>

          <div className="space-y-12">
            <div className="border-l-2 border-zinc-900 pl-8">
              <h3 className="text-xl font-normal text-zinc-900 mb-2">Department of Veterans Affairs</h3>
              <p className="text-base text-zinc-600 mb-4">
                Developed a 3-year analytics strategy that prioritized predictive analytics for claims processing, resulting in 60% faster processing times and $200M annual cost savings.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-sm text-zinc-900 px-4 py-2 border border-zinc-300">60% faster processing</span>
                <span className="text-sm text-zinc-900 px-4 py-2 border border-zinc-300">$200M annual savings</span>
                <span className="text-sm text-zinc-900 px-4 py-2 border border-zinc-300">3-year roadmap</span>
              </div>
            </div>

            <div className="border-l-2 border-zinc-900 pl-8">
              <h3 className="text-xl font-normal text-zinc-900 mb-2">State Health & Human Services Agency</h3>
              <p className="text-base text-zinc-600 mb-4">
                Conducted data maturity assessment and developed governance framework that improved data quality scores from 45% to 92% within 18 months.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-sm text-zinc-900 px-4 py-2 border border-zinc-300">92% data quality score</span>
                <span className="text-sm text-zinc-900 px-4 py-2 border border-zinc-300">18-month transformation</span>
                <span className="text-sm text-zinc-900 px-4 py-2 border border-zinc-300">Governance framework</span>
              </div>
            </div>

            <div className="border-l-2 border-zinc-900 pl-8">
              <h3 className="text-xl font-normal text-zinc-900 mb-2">Department of Defense Intelligence Agency</h3>
              <p className="text-base text-zinc-600 mb-4">
                Developed analytics strategy and platform selection that consolidated 12 legacy BI tools into 3 FedRAMP-authorized platforms, reducing costs by 65% while improving analyst productivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-sm text-zinc-900 px-4 py-2 border border-zinc-300">65% cost reduction</span>
                <span className="text-sm text-zinc-900 px-4 py-2 border border-zinc-300">12 to 3 platforms</span>
                <span className="text-sm text-zinc-900 px-4 py-2 border border-zinc-300">Improved productivity</span>
              </div>
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
              Ready to Develop Your Data Strategy?
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-light max-w-3xl">
              Let's discuss your analytics objectives and how we can help you develop a comprehensive data strategy that delivers measurable mission impact.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 text-base font-normal rounded-none"
                >
                  Request Strategy Assessment
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
