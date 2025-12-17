import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Search,
  ShieldCheck,
  Layers,
  Award,
  CheckCircle2,
  Target,
  Shield,
  Users,
  Building2,
  Landmark,
  Scale,
  FileCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function OurApproach() {
  const pillars = [
    {
      icon: Search,
      title: 'Rapid Assessment & Architecture',
      tagline: 'Comprehensive discovery and vendor-neutral design in 2 weeks',
      description: 'We begin every engagement with a comprehensive 2-week discovery phase that maps your current state, identifies compliance gaps, and designs a vendor-neutral architecture aligned with your mission objectives. Whether you are a federal agency, state department, local municipality, or regulated enterprise, our assessments are tailored to your specific regulatory environment and operational requirements.',
      features: [
        'Stakeholder alignment workshops across all organizational levels',
        'Multi-framework compliance analysis (FedRAMP, StateRAMP, CMMC, FISMA, SOX, HIPAA)',
        'Platform-agnostic solution design for any government or regulatory context',
        'Detailed implementation roadmap with milestones and ROI projections'
      ],
      sectors: ['Federal', 'State', 'Local', 'Regulatory']
    },
    {
      icon: ShieldCheck,
      title: 'Security-Native Implementation',
      tagline: 'Security and compliance embedded from day one, not bolted on',
      description: 'Security and compliance are embedded from day one—not bolted on afterward. We implement only authorized platforms appropriate for your jurisdiction: FedRAMP for federal, StateRAMP for state and local, and industry-specific frameworks for regulated sectors. Every integration follows NIST 800-53 controls, zero-trust principles, and your agency or organization-specific security requirements.',
      features: [
        'FedRAMP, StateRAMP, and TX-RAMP authorized platforms',
        'Zero-trust architecture by default for all implementations',
        'Complete ATO and compliance documentation packages',
        'NIST 800-53, SOC 2, HIPAA, and PCI-DSS controls implementation'
      ],
      sectors: ['Federal', 'State', 'Local', 'Regulatory']
    },
    {
      icon: Layers,
      title: 'Vendor-Agnostic Solutions',
      tagline: 'Independent evaluation of 50+ platforms with zero vendor lock-in',
      description: 'We are not tied to any single vendor or platform. Our recommendations are based solely on your mission requirements, budget constraints, and regulatory environment. We evaluate 50+ authorized platforms across automation, analytics, cloud, and integration categories—selecting the best-fit solutions for federal agencies, state governments, local municipalities, and regulated industries alike.',
      features: [
        'Independent platform evaluation tailored to your compliance needs',
        'Multi-vendor integration expertise across government and enterprise',
        'Avoid vendor lock-in with open standards and interoperability',
        'Full knowledge transfer and comprehensive documentation'
      ],
      sectors: ['Federal', 'State', 'Local', 'Regulatory']
    },
    {
      icon: Award,
      title: 'Cleared & Credentialed Team',
      tagline: 'Top Secret/SCI cleared personnel with deep public sector expertise',
      description: 'Our team includes Top Secret/SCI cleared personnel with decades of experience across federal, state, local, and regulated industry environments. We understand agency culture, procurement processes, and the unique challenges of implementing technology in sensitive environments—from classified federal systems to state health departments to local emergency services to financial institutions.',
      features: [
        'Top Secret/SCI cleared team members for classified work',
        'Deep procurement expertise (GSA Schedule, state contracts, cooperative purchasing)',
        'Experience across 20+ federal agencies, 15+ states, and regulated industries',
        'Proven change management and training delivery at all levels'
      ],
      sectors: ['Federal', 'State', 'Local', 'Regulatory']
    }
  ];

  const sectorIcons = {
    'Federal': Landmark,
    'State': Building2,
    'Local': Users,
    'Regulatory': Scale
  };

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We conduct a thorough analysis of your current technology landscape, compliance requirements, and mission objectives across your specific regulatory context.',
      duration: '2 weeks'
    },
    {
      number: '02',
      title: 'Architecture & Design',
      description: 'Our team designs a vendor-neutral solution architecture that meets your security, compliance, and jurisdictional requirements.',
      duration: '2-4 weeks'
    },
    {
      number: '03',
      title: 'Implementation & Integration',
      description: 'We implement the solution with security embedded from day one, ensuring seamless integration with existing systems and full compliance.',
      duration: '8-16 weeks'
    },
    {
      number: '04',
      title: 'Training & Knowledge Transfer',
      description: 'Comprehensive training and documentation ensure your team can maintain, optimize, and scale the solution long-term.',
      duration: '2-4 weeks'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section - Signature Blue */}
      <section className="relative py-24 md:py-32 bg-[oklch(0.22_0.06_250)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.06_250)] via-[oklch(0.22_0.06_250)] to-[oklch(0.28_0.05_250)]"></div>
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.75_0.15_220)] font-semibold mb-4 uppercase tracking-wider">Our Approach</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How We Deliver Mission-Critical Results
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Four strategic pillars that ensure compliant, secure, and vendor-neutral technology implementations for government at every level and regulated industries.
            </p>
            {/* Sector badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'Federal Government', icon: Landmark },
                { label: 'State Government', icon: Building2 },
                { label: 'Local Government', icon: Users },
                { label: 'Regulated Industries', icon: Scale }
              ].map((sector) => (
                <div 
                  key={sector.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium"
                >
                  <sector.icon className="h-4 w-4 text-[oklch(0.75_0.15_220)]" />
                  {sector.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[oklch(0.97_0.01_250)] to-transparent"></div>
      </section>

      {/* Four Pillars Section - Clean Professional Design */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-7xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              The Four Pillars of Excellence
            </h2>
            <p className="text-lg text-slate-600">
              Our methodology is built on four foundational pillars that guide every engagement—whether federal, state, local, or regulated industry—ensuring consistent delivery of mission-critical results.
            </p>
          </motion.div>

          {/* Pillars Grid - Signature Blue Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white border border-slate-200 hover:border-[oklch(0.45_0.12_250)] hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Top accent bar */}
                  <div className="h-1.5 bg-gradient-to-r from-[oklch(0.35_0.10_250)] to-[oklch(0.45_0.12_250)]"></div>
                  <CardContent className="p-8 lg:p-10">
                    {/* Icon and Title */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[oklch(0.22_0.06_250)] mb-4 group-hover:scale-105 transition-transform duration-300">
                        <pillar.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-base font-semibold text-[oklch(0.45_0.12_250)]">
                        {pillar.tagline}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {pillar.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[oklch(0.45_0.12_250)] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Sector Tags */}
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Serving</p>
                      <div className="flex flex-wrap gap-2">
                        {pillar.sectors.map((sector) => {
                          const SectorIcon = sectorIcons[sector as keyof typeof sectorIcons];
                          return (
                            <span 
                              key={sector}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[oklch(0.95_0.02_250)] text-[oklch(0.30_0.05_250)] text-xs font-medium"
                            >
                              <SectorIcon className="h-3.5 w-3.5" />
                              {sector}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-6xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.45_0.12_250)] font-semibold mb-4 uppercase tracking-wider">Compliance Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Frameworks We Navigate
            </h2>
            <p className="text-lg text-slate-600">
              Deep expertise across the compliance landscape for government and regulated industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'FedRAMP', type: 'Federal' },
              { name: 'StateRAMP', type: 'State' },
              { name: 'TX-RAMP', type: 'State' },
              { name: 'CMMC', type: 'Defense' },
              { name: 'FISMA', type: 'Federal' },
              { name: 'NIST 800-53', type: 'All Sectors' },
              { name: 'SOC 2', type: 'Enterprise' },
              { name: 'HIPAA', type: 'Healthcare' },
              { name: 'PCI-DSS', type: 'Financial' },
              { name: 'SOX', type: 'Financial' },
              { name: 'CJIS', type: 'Law Enforcement' },
              { name: 'IRS 1075', type: 'Tax/Revenue' }
            ].map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[oklch(0.97_0.01_250)] border border-slate-200 rounded-lg p-4 text-center hover:border-[oklch(0.45_0.12_250)] hover:shadow-md transition-all duration-300"
              >
                <FileCheck className="h-6 w-6 text-[oklch(0.35_0.10_250)] mx-auto mb-2" />
                <p className="font-bold text-[oklch(0.20_0.05_250)] text-sm">{framework.name}</p>
                <p className="text-xs text-slate-500">{framework.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.45_0.12_250)] font-semibold mb-4 uppercase tracking-wider">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              From Discovery to Delivery
            </h2>
            <p className="text-lg text-slate-600">
              Our proven engagement model ensures predictable outcomes and measurable results at every stage.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[oklch(0.35_0.10_250)]/20 -translate-x-1/2"></div>
            
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
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="text-4xl font-bold text-[oklch(0.35_0.10_250)]/20">{step.number}</span>
                        <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)]">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-3">{step.description}</p>
                      <span className="inline-block text-sm font-semibold text-[oklch(0.35_0.10_250)] bg-[oklch(0.35_0.10_250)]/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[oklch(0.35_0.10_250)] border-4 border-white shadow-md"></div>
                  
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
              <p className="text-[oklch(0.45_0.12_250)] font-semibold mb-4 uppercase tracking-wider">Why It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">
                Built for Public Sector & Regulated Industry Success
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our approach was developed specifically for the unique challenges of government and regulated industry technology implementation. We understand the regulatory landscape, procurement processes, and security requirements that define success across federal, state, local, and enterprise environments.
              </p>
              
              <div className="space-y-4">
                {[
                  'Compliance-first architecture ensures authorization readiness',
                  'Vendor-neutral recommendations eliminate conflicts of interest',
                  'Cleared personnel enable work in classified and sensitive environments',
                  'Proven methodology reduces implementation risk across all sectors'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[oklch(0.45_0.12_250)] flex-shrink-0 mt-0.5" />
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
                { icon: Target, value: '50+', label: 'Authorized Platforms Evaluated' },
                { icon: Shield, value: '100%', label: 'Compliance Rate' },
                { icon: Landmark, value: '20+', label: 'Federal Agencies Served' },
                { icon: Building2, value: '15+', label: 'State & Local Governments' },
                { icon: Scale, value: '30+', label: 'Regulated Enterprises' },
                { icon: Award, value: 'TS/SCI', label: 'Cleared Personnel Available' }
              ].map((stat, index) => (
                <Card key={index} className="bg-[oklch(0.97_0.01_250)] border-slate-200 hover:border-[oklch(0.45_0.12_250)] transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[oklch(0.22_0.06_250)] mb-4">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Signature Blue */}
      <section className="py-16 md:py-20 bg-[oklch(0.22_0.06_250)] text-white">
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
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your organization's requirements and learn how our approach can deliver mission-critical results—whether you're federal, state, local, or a regulated enterprise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Request Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
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
