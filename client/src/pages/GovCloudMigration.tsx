import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GovCloudMigration() {
  const pillars = [
    {
      title: 'Cloud Readiness Assessment',
      tagline: 'Comprehensive evaluation and migration strategy in 4-8 weeks',
      description: 'We begin every cloud migration with a comprehensive assessment of your current infrastructure, applications, and processes. Our team evaluates cloud readiness, develops TCO analysis, and creates a detailed migration roadmap aligned with your mission objectives.',
      features: [
        'Current state infrastructure and application inventory',
        'Application portfolio analysis and dependency mapping',
        'Total Cost of Ownership (TCO) and ROI analysis',
        'Migration roadmap with prioritized workloads and timeline'
      ],
      sectors: ['Federal', 'State', 'Defense']
    },
    {
      title: 'Secure Architecture Design',
      tagline: 'FedRAMP-compliant cloud architecture built for your mission',
      description: 'Our architects design secure, scalable, and compliant cloud infrastructure aligned with federal requirements. We leverage FedRAMP-authorized platforms (AWS GovCloud, Azure Government, Google Cloud for Government) to accelerate authorization timelines.',
      features: [
        'Reference architecture for government cloud platforms',
        'Network and security design with zero-trust principles',
        'High availability and disaster recovery planning',
        'Control inheritance documentation for ATO acceleration'
      ],
      sectors: ['Federal', 'State', 'Defense']
    },
    {
      title: 'Migration Execution',
      tagline: 'Phased migration with zero downtime for mission-critical systems',
      description: 'We execute migrations using proven methodologies—rehost, replatform, or refactor—based on your application characteristics and modernization goals. Our automated migration tools and 24/7 support ensure minimal risk and zero downtime.',
      features: [
        'Phased workload migration with rollback procedures',
        'Data migration with integrity validation and verification',
        'Application testing and performance optimization',
        'Continuous monitoring and incident response'
      ],
      sectors: ['Federal', 'State', 'Defense']
    },
    {
      title: 'Optimization & Operations',
      tagline: 'Ongoing optimization and Cloud Center of Excellence',
      description: 'Post-migration, we help you optimize costs, improve performance, and establish a Cloud Center of Excellence. Our team provides ongoing support, training, and governance to maximize the value of your cloud investment.',
      features: [
        'Cost optimization and resource right-sizing',
        'Performance tuning and continuous improvement',
        'Cloud Center of Excellence establishment',
        'Staff training and knowledge transfer'
      ],
      sectors: ['Federal', 'State', 'Defense']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Assess & Plan',
      description: 'Comprehensive discovery and assessment of your current infrastructure, applications, and processes. Develop TCO analysis, business case, and migration roadmap.',
      duration: '4-8 weeks',
      deliverables: ['Current state assessment', 'Application portfolio analysis', 'TCO and business case', 'Migration strategy and roadmap']
    },
    {
      number: '02',
      title: 'Design & Prepare',
      description: 'Design secure, compliant cloud architecture and establish landing zone. Prepare pilot migration and validate approach before full-scale execution.',
      duration: '6-10 weeks',
      deliverables: ['Cloud architecture design', 'Landing zone setup', 'Security controls design', 'Pilot migration planning']
    },
    {
      number: '03',
      title: 'Migrate & Validate',
      description: 'Execute phased workload migration with data validation, application testing, and performance optimization. Maintain zero downtime for mission-critical systems.',
      duration: '3-12 months',
      deliverables: ['Phased workload migration', 'Data migration and validation', 'Application testing', 'Performance optimization']
    },
    {
      number: '04',
      title: 'Optimize & Operate',
      description: 'Optimize costs and performance, establish Cloud Center of Excellence, and provide ongoing support and training for long-term success.',
      duration: 'Ongoing',
      deliverables: ['Cost optimization', 'Performance tuning', 'Continuous monitoring', 'Cloud Center of Excellence']
    }
  ];

  const stats = [
    { value: '75+', label: 'Cloud Migrations Completed' },
    { value: '2,500+', label: 'Applications Migrated' },
    { value: '42%', label: 'Average TCO Reduction' },
    { value: '99.99%', label: 'Uptime During Migration' },
    { value: '20+', label: 'Federal Agencies Served' },
    { value: 'TS/SCI', label: 'Cleared Personnel Available' }
  ];

  const cloudPlatforms = [
    { name: 'AWS GovCloud', type: 'FedRAMP High' },
    { name: 'Azure Government', type: 'FedRAMP High' },
    { name: 'Google Cloud Gov', type: 'FedRAMP Moderate/High' },
    { name: 'Oracle Cloud Gov', type: 'FedRAMP High' },
    { name: 'IBM Cloud Gov', type: 'FedRAMP High' },
    { name: 'Salesforce Gov', type: 'FedRAMP High' }
  ];

  const migrationStrategies = [
    {
      title: 'Rehost (Lift & Shift)',
      tagline: 'Fastest migration with minimal changes',
      description: 'Move applications to cloud with minimal changes. Ideal for legacy applications and quick migration needs. Provides 20-30% cost savings with the fastest time to value.',
      features: [
        'Minimal application changes required',
        'Fastest migration timeline',
        '20-30% cost savings',
        'Best for legacy applications and quick wins'
      ]
    },
    {
      title: 'Replatform (Lift & Reshape)',
      tagline: 'Targeted optimizations without re-architecture',
      description: 'Make targeted optimizations to leverage managed services without changing core architecture. Provides 30-40% cost savings with moderate migration timeline.',
      features: [
        'Leverage managed services (RDS, containers)',
        'Moderate migration timeline',
        '30-40% cost savings',
        'Best for applications that benefit from managed services'
      ]
    },
    {
      title: 'Refactor (Re-architect)',
      tagline: 'Cloud-native redesign for maximum value',
      description: 'Redesign applications to be cloud-native with microservices, serverless, and containers. Provides 40-60% cost savings and maximum scalability and resilience.',
      features: [
        'Cloud-native architecture (microservices, serverless)',
        'Longer migration timeline',
        '40-60% cost savings',
        'Best for mission-critical apps requiring scalability'
      ]
    }
  ];

  const caseStudy = {
    title: 'Federal Agency Migrates 200+ Applications to AWS GovCloud',
    challenge: 'A large federal agency needed to migrate 200+ legacy applications from aging on-premises data centers to AWS GovCloud while maintaining FedRAMP High compliance and zero downtime for mission-critical systems.',
    results: [
      'Successfully migrated 200+ applications in 18 months',
      'Achieved 42% reduction in total cost of ownership',
      'Maintained 99.99% uptime for mission-critical systems',
      'Reduced application deployment time from months to days',
      'Improved disaster recovery (RTO reduced from 48 hours to 4 hours)',
      'Established Cloud Center of Excellence with 30+ trained staff'
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-24 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cloud-hero.jpg')" }}
        ></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb 
              items={[
                { label: 'Government Solutions', href: '/federal-solutions' },
                { label: 'Government Cloud Migration' }
              ]} 
              variant="light" 
            />
          </div>
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider">Cloud Modernization</p>
            <h1 className="text-2xl xs:text-3xl sm:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Government Cloud Migration Services
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Accelerate your agency's digital transformation with secure, compliant migration to AWS GovCloud, 
              Azure Government, or Google Cloud for Government. Our proven methodology ensures minimal risk, 
              zero downtime, and maximum value from your cloud investment.
            </p>
            {/* Sector badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              {['Federal Government', 'State Government', 'Defense & Intelligence'].map((sector) => (
                <div 
                  key={sector}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium"
                >
                  {sector}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule Cloud Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                <Link href="/resources">
                  Download Migration Guide
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-7xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Migration Methodology</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              The Four Pillars of Cloud Migration Success
            </h2>
            <p className="text-lg text-slate-600">
              Our proven methodology ensures secure, compliant, and successful cloud migrations for government agencies at every level.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                    {/* Title */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[oklch(0.20_0.05_250)] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-base font-semibold text-[oklch(0.65_0.18_55)]">
                        {pillar.tagline}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    
                    {/* Features - Bullet points */}
                    <ul className="space-y-3 mb-6">
                      {pillar.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Sector Tags */}
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Serving</p>
                      <div className="flex flex-wrap gap-2">
                        {pillar.sectors.map((sector) => (
                          <span 
                            key={sector}
                            className="inline-flex items-center px-3 py-1.5 rounded-full bg-[oklch(0.95_0.02_250)] text-[oklch(0.30_0.05_250)] text-xs font-medium"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container max-w-6xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Platform Expertise</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Government Cloud Platforms
            </h2>
            <p className="text-lg text-slate-600">
              Deep expertise across all major FedRAMP-authorized government cloud platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[oklch(0.97_0.01_250)] border-2 border-slate-200 rounded-lg p-4 text-center hover:border-[oklch(0.70_0.18_55)] hover:shadow-md transition-all duration-300"
              >
                <p className="font-bold text-[oklch(0.20_0.05_250)] text-sm">{platform.name}</p>
                <p className="text-xs text-slate-500">{platform.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Migration Process</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              From Assessment to Optimization
            </h2>
            <p className="text-lg text-slate-600">
              A proven four-phase methodology that minimizes risk and maximizes value from your cloud migration.
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
                  className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-colors duration-300">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="text-4xl font-bold text-[oklch(0.35_0.10_250)]/20">{step.number}</span>
                        <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)]">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-4">{step.description}</p>
                      <span className="inline-block text-sm font-semibold text-[oklch(0.35_0.10_250)] bg-[oklch(0.35_0.10_250)]/10 px-3 py-1 rounded-full mb-4">
                        {step.duration}
                      </span>
                      {/* Deliverables */}
                      <div className={`pt-4 border-t border-slate-100 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Deliverables</p>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                              <span className="text-xs text-slate-600">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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

      {/* Migration Strategies Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white">
        <div className="container max-w-6xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Migration Strategies</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
              Tailored Approach for Every Application
            </h2>
            <p className="text-lg text-slate-600">
              We select the optimal migration strategy based on your application characteristics, business requirements, and modernization goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {migrationStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-2">{strategy.title}</h3>
                      <p className="text-base font-semibold text-[oklch(0.65_0.18_55)]">{strategy.tagline}</p>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">{strategy.description}</p>
                    <ul className="space-y-3">
                      {strategy.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-slate-700">{feature}</span>
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

      {/* Stats Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-[oklch(0.97_0.01_250)]">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Why Thalen Technologies</p>
              <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">
                Proven Cloud Migration Expertise
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                Thalen Technologies has successfully migrated thousands of applications to government cloud platforms. Our team includes cleared personnel with deep expertise in FedRAMP, FISMA, and DoD compliance requirements.
              </p>
              
              {/* Bullet points */}
              <div className="space-y-4">
                {[
                  'Deep expertise across AWS GovCloud, Azure Government, and Google Cloud',
                  'Proven methodology with 99.99% uptime during migrations',
                  'Average 42% reduction in Total Cost of Ownership',
                  'Cleared personnel for classified and sensitive environments'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
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
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-colors duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                    <div className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[oklch(0.22_0.06_250)]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold mb-4 uppercase tracking-wider text-center">Success Story</p>
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">{caseStudy.title}</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 text-center">
              {caseStudy.challenge}
            </p>
            
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-6">Results Achieved</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[oklch(0.75_0.15_55)] flex-shrink-0 mt-2"></span>
                      <span className="text-white/90">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6">Ready to Modernize Your Infrastructure?</h2>
            <p className="text-xl text-slate-600 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Start your cloud migration journey with a comprehensive assessment. Our experts will evaluate 
              your current environment, identify opportunities, and develop a customized migration roadmap.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="bg-[oklch(0.65_0.18_55)] text-white hover:bg-[oklch(0.60_0.18_55)] hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
                <Link href="/contact">
                  Schedule Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[oklch(0.20_0.05_250)] text-[oklch(0.20_0.05_250)] hover:bg-[oklch(0.20_0.05_250)] hover:text-white">
                <Link href="/resources">
                  Download TCO Calculator
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
