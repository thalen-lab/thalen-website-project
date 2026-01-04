import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChangeManagement() {
  const changeCapabilities = [
    {
      title: 'Stakeholder Engagement & Communication',
      description: 'We help agencies build stakeholder coalitions, executive sponsorship, and communication strategies that keep everyone informed and engaged throughout modernization.',
      benefits: ['Stakeholder mapping', 'Communication plans', 'Executive briefings', 'Town hall facilitation']
    },
    {
      title: 'Change Impact Assessment',
      description: 'We analyze how modernization affects processes, roles, systems, and culture to identify risks and develop targeted mitigation strategies.',
      benefits: ['Process impact analysis', 'Role mapping', 'Risk identification', 'Mitigation planning']
    },
    {
      title: 'Training & Adoption Programs',
      description: 'We design role-based training curricula, hands-on workshops, and self-service resources that ensure users can effectively use new systems.',
      benefits: ['Role-based training', 'Hands-on workshops', 'Quick reference guides', 'Video tutorials']
    },
    {
      title: 'Adoption Measurement & Optimization',
      description: 'We track adoption metrics, user feedback, and system usage to identify barriers and continuously improve the change program.',
      benefits: ['Adoption dashboards', 'User surveys', 'Usage analytics', 'Continuous improvement']
    }
  ];

  const changeFrameworks = [
    {
      framework: 'Prosci ADKAR Model',
      description: 'Individual change management framework focusing on Awareness, Desire, Knowledge, Ability, and Reinforcement',
      bestFor: 'User-centric modernization projects requiring individual behavior change'
    },
    {
      framework: 'Kotter 8-Step Process',
      description: 'Organizational change model emphasizing urgency, vision, empowerment, and short-term wins',
      bestFor: 'Large-scale transformation programs requiring cultural change'
    },
    {
      framework: "Lewin's Change Management Model",
      description: 'Three-stage model (Unfreeze, Change, Refreeze) for organizational transitions',
      bestFor: 'Process-focused changes with clear before/after states'
    },
    {
      framework: 'McKinsey 7-S Framework',
      description: 'Holistic model examining Strategy, Structure, Systems, Shared Values, Style, Staff, and Skills',
      bestFor: 'Complex organizational transformations affecting multiple dimensions'
    }
  ];

  const changeActivities = [
    { activity: 'Change Champion Network', description: 'Identify and train change champions across departments to advocate for modernization' },
    { activity: 'Resistance Management', description: 'Identify sources of resistance and develop targeted strategies to address concerns' },
    { activity: 'Executive Governance', description: 'Establish steering committees and governance structures for decision-making' },
    { activity: 'User Feedback Loops', description: 'Continuous feedback collection through surveys, focus groups, and help desk analytics' },
    { activity: 'Celebration & Recognition', description: 'Recognize early adopters and celebrate milestones to build momentum' },
    { activity: 'Sustainment Planning', description: 'Ensure changes stick through reinforcement, monitoring, and continuous improvement' }
  ];

  const trainingApproaches = [
    { name: 'Instructor-Led Training (ILT)', description: 'In-person or virtual classroom training with live instructors for complex topics' },
    { name: 'Hands-On Workshops', description: 'Interactive labs using sandbox environments for practice with real scenarios' },
    { name: 'E-Learning Modules', description: 'Self-paced online courses with videos, quizzes, and interactive simulations' },
    { name: 'Quick Reference Guides', description: 'Job aids, cheat sheets, and step-by-step guides for common tasks' },
    { name: 'Train-the-Trainer Programs', description: 'Certify internal trainers to scale training across the organization' },
    { name: 'Just-in-Time Support', description: 'Help desk, chatbots, and embedded support during go-live periods' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-[url(/img/pattern-d.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl text-white"
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Service
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Change Management & User Adoption
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We help agencies manage organizational change through structured programs using proven frameworks (Prosci ADKAR, Kotter 8-Step) with stakeholder engagement, role-based training, and adoption measurement—ensuring modernization investments deliver lasting impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Start Change Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/capability-statement">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  Generate Capability Statement
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Change Capabilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Capabilities</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Change Management Services</h2>
            <p className="text-xl text-slate-600">
              Comprehensive change management services for government modernization programs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {changeCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                  <CardContent className="pt-8">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{capability.title}</h3>
                    <p className="text-slate-600 mb-4">{capability.description}</p>
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                          <span className="text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Change Frameworks */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Frameworks</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Proven Change Management Frameworks</h2>
            <p className="text-xl text-slate-600">
              We apply industry-standard change management frameworks tailored to your agency's unique context and needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {changeFrameworks.map((item, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3">{item.framework}</h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <div className="border-t border-slate-100 pt-4 mt-4">
                    <p className="text-sm font-semibold text-[oklch(0.20_0.05_250)] mb-1">Best For:</p>
                    <p className="text-sm text-slate-600">{item.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Change Activities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Activities</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Key Change Management Activities</h2>
            <p className="text-xl text-slate-600">
              A structured set of activities to drive successful organizational change and ensure lasting adoption.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {changeActivities.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-[oklch(0.97_0.01_250)] rounded-lg border-2 border-transparent">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                <div>
                  <p className="font-semibold text-[oklch(0.20_0.05_250)] mb-1">{item.activity}</p>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approaches */}
      <section className="py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Training</p>
            <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Training & Adoption Strategies</h2>
            <p className="text-xl text-slate-600">
              Multi-modal training approaches ensure users can effectively learn and adopt new systems and processes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {trainingApproaches.map((approach, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all h-full">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
                    <div>
                      <p className="font-semibold text-[oklch(0.20_0.05_250)] mb-2">{approach.name}</p>
                      <p className="text-sm text-slate-600">{approach.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Drive Successful Change?</h2>
            <p className="text-xl text-white/80 mb-8">
              Our change management specialists can help you build stakeholder engagement, training programs, and adoption strategies that ensure modernization success.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
                  View All Services
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
