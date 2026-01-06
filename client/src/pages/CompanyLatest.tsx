import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Sparkles, Rocket, Target, Zap, Clock, CheckCircle } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function CompanyLatest() {
  const highlights = [
    {
      icon: Rocket,
      title: 'New Service Launch',
      description: 'Introducing our enhanced AI-powered process automation suite, designed specifically for federal agency workflows.',
      status: 'Now Available'
    },
    {
      icon: Target,
      title: 'Expanded Capabilities',
      description: 'New FedRAMP High authorization enables us to serve agencies with the most stringent security requirements.',
      status: 'Certified'
    },
    {
      icon: Zap,
      title: 'Technology Updates',
      description: 'Latest platform updates include real-time analytics dashboards and enhanced compliance monitoring.',
      status: 'Released'
    }
  ];

  const milestones = [
    {
      quarter: 'Q1 2026',
      title: 'AI Governance Framework',
      description: 'Launch of comprehensive AI governance and responsible AI implementation services.'
    },
    {
      quarter: 'Q1 2026',
      title: 'Cloud Migration Accelerator',
      description: 'New automated tools for faster, more secure cloud migrations.'
    },
    {
      quarter: 'Q2 2026',
      title: 'Zero Trust Assessment Tool',
      description: 'Self-service security assessment for agencies beginning their zero trust journey.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-20 text-white">
        <div className="absolute inset-0 bg-[url('/img/patterns/hero-pattern.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="relative container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb 
              items={[
                { label: 'About', href: '/about' },
                { label: "Company's Latest" }
              ]} 
              variant="light" 
              className="mb-6 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-2xl xs:text-3xl sm:text-xl xs:text-2xl sm:text-2xl xs:text-3xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 text-center leading-tight text-white">
                Company's Latest
              </h1>
              
              <p className="text-base md:text-lg text-white/90 text-center max-w-3xl mx-auto">
                Discover what's new at Thalen Technologies—from product launches and service expansions to upcoming initiatives and strategic developments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Highlights */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Current Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The latest developments and achievements from our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 md:gap-8 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-3 sm:p-4 md:p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        <CheckCircle className="w-3 h-3" />
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Milestones */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A preview of what we're working on for our clients and partners.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#0A2540] text-white rounded-full text-xs font-medium">
                    <Clock className="w-3 h-3" />
                    {milestone.quarter}
                  </span>
                </div>
                <div className="flex-1 pb-6 border-l-2 border-gray-200 pl-6">
                  <h3 className="text-lg font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-[#0A2540] to-[#12344D] text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Stay Ahead
            </div>
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Want to Learn More?
            </h2>
            <p className="text-white/80 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Connect with our team to discuss how our latest capabilities can support your agency's mission.
            </p>
            <Link href="/schedule-assessment">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
