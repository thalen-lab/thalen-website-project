import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Search,
  Lock,
  Layers,
  Award,
  CheckCircle2,
  Target,
  Shield,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function OurApproach() {
  const pillars = [
    {
      icon: Search,
      title: 'Rapid Assessment & Architecture',
      tagline: 'Comprehensive discovery and vendor-neutral design in 2 weeks',
      description: 'We begin every engagement with a comprehensive 2-week discovery phase that maps your current state, identifies compliance gaps, and designs a vendor-neutral architecture aligned with your mission objectives. Our assessments include stakeholder interviews, technical infrastructure review, security posture analysis, and detailed ROI projections.',
      features: [
        'Stakeholder alignment workshops',
        'Compliance gap analysis (FedRAMP, CMMC, FISMA)',
        'Platform-agnostic solution design',
        'Detailed implementation roadmap with milestones'
      ]
    },
    {
      icon: Lock,
      title: 'Security-Native Implementation',
      tagline: 'Security and compliance embedded from day one, not bolted on',
      description: 'Security and compliance are embedded from day one—not bolted on afterward. We implement only FedRAMP and StateRAMP-authorized platforms, configure zero-trust architectures by default, and prepare all security documentation needed for agency authorization. Every integration follows NIST 800-53 controls and agency-specific security requirements.',
      features: [
        'FedRAMP/StateRAMP-authorized platforms only',
        'Zero-trust architecture by default',
        'Complete ATO documentation packages',
        'NIST 800-53 controls implementation'
      ]
    },
    {
      icon: Layers,
      title: 'Vendor-Agnostic Solutions',
      tagline: 'Independent evaluation of 50+ platforms with zero vendor lock-in',
      description: 'We are not tied to any single vendor or platform. Our recommendations are based solely on your mission requirements, budget constraints, and technical environment. We evaluate 50+ FedRAMP-authorized platforms across automation, analytics, cloud, and integration categories to identify the best-fit solutions—then implement them with full transparency and knowledge transfer.',
      features: [
        'Independent platform evaluation and selection',
        'Multi-vendor integration expertise',
        'Avoid vendor lock-in with open standards',
        'Full knowledge transfer and documentation'
      ]
    },
    {
      icon: Award,
      title: 'Cleared Team Execution',
      tagline: 'Top Secret/SCI cleared personnel with 20+ years federal experience',
      description: 'Our team includes Top Secret/SCI cleared personnel with decades of federal government experience. We understand agency culture, procurement processes, and the unique challenges of implementing technology in classified and sensitive environments. Every project is staffed with experienced consultants who have delivered similar implementations for agencies like yours.',
      features: [
        'Top Secret/SCI cleared team members available',
        'Deep federal procurement expertise (GSA Schedule 70)',
        'Experience across 20+ federal agencies',
        'Proven change management and training delivery'
      ]
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We conduct a thorough analysis of your current technology landscape, compliance requirements, and mission objectives.',
      duration: '2 weeks'
    },
    {
      number: '02',
      title: 'Architecture & Design',
      description: 'Our team designs a vendor-neutral solution architecture that meets your security and compliance requirements.',
      duration: '2-4 weeks'
    },
    {
      number: '03',
      title: 'Implementation & Integration',
      description: 'We implement the solution with security embedded from day one, ensuring seamless integration with existing systems.',
      duration: '8-16 weeks'
    },
    {
      number: '04',
      title: 'Training & Knowledge Transfer',
      description: 'Comprehensive training and documentation ensure your team can maintain and optimize the solution long-term.',
      duration: '2-4 weeks'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold mb-4 uppercase tracking-wider">Our Approach</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How We Deliver Mission-Critical Results
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Four strategic pillars that ensure compliant, secure, and vendor-neutral technology implementations for government agencies. Each pillar represents a core commitment to excellence in government technology delivery.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-7xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Four Pillars of Excellence
            </h2>
            <p className="text-lg text-slate-600">
              Our methodology is built on four foundational pillars that guide every engagement, ensuring consistent delivery of mission-critical results.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-accent hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 lg:p-10">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-accent/10 mb-4">
                        <pillar.icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-lg font-semibold text-accent mb-4">
                        {pillar.tagline}
                      </p>
                    </div>
                    <p className="text-base text-slate-300 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    <ul className="space-y-3 text-slate-300">
                      {pillar.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container max-w-6xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              From Discovery to Delivery
            </h2>
            <p className="text-lg text-slate-600">
              Our proven engagement model ensures predictable outcomes and measurable results at every stage.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-16`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="text-4xl font-bold text-accent/20">{step.number}</span>
                        <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-3">{step.description}</p>
                      <span className="inline-block text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-md"></div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Approach Works Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold mb-4 uppercase tracking-wider">Why It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Built for Government Success
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our approach was developed specifically for the unique challenges of government technology implementation. We understand the regulatory landscape, procurement processes, and security requirements that define success in the public sector.
              </p>
              
              <div className="space-y-4">
                {[
                  'Compliance-first architecture ensures ATO readiness',
                  'Vendor-neutral recommendations eliminate conflicts of interest',
                  'Cleared personnel enable work in classified environments',
                  'Proven methodology reduces implementation risk'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Target, value: '50+', label: 'FedRAMP Platforms Evaluated' },
                { icon: Shield, value: '100%', label: 'Compliance Rate' },
                { icon: Users, value: '20+', label: 'Federal Agencies Served' },
                { icon: Award, value: 'TS/SCI', label: 'Cleared Personnel Available' }
              ].map((stat, index) => (
                <Card key={index} className="bg-slate-50 border-slate-100">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                      <stat.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your agency's requirements and learn how our approach can deliver mission-critical results for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
                <Link href="/contact">
                  Request Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
