import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Users, Target, TrendingUp, Award, BookOpen, MessageSquare, BarChart, Shield } from 'lucide-react';

export default function ChangeManagement() {
  const changeCapabilities = [
    {
      icon: Users,
      title: 'Stakeholder Engagement & Communication',
      description: 'We help agencies build stakeholder coalitions, executive sponsorship, and communication strategies that keep everyone informed and engaged throughout modernization.',
      benefits: ['Stakeholder mapping', 'Communication plans', 'Executive briefings', 'Town hall facilitation']
    },
    {
      icon: Target,
      title: 'Change Impact Assessment',
      description: 'We analyze how modernization affects processes, roles, systems, and culture to identify risks and develop targeted mitigation strategies.',
      benefits: ['Process impact analysis', 'Role mapping', 'Risk identification', 'Mitigation planning']
    },
    {
      icon: BookOpen,
      title: 'Training & Adoption Programs',
      description: 'We design role-based training curricula, hands-on workshops, and self-service resources that ensure users can effectively use new systems.',
      benefits: ['Role-based training', 'Hands-on workshops', 'Quick reference guides', 'Video tutorials']
    },
    {
      icon: BarChart,
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
      framework: 'Lewin\'s Change Management Model',
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <Link href="/services/digital-transformation">
              <Button variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
                ← Back to IT Modernization
              </Button>
            </Link>
            <div className="inline-block bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Change Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Change Management & User Adoption
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We help agencies manage organizational change through structured programs using proven frameworks (Prosci ADKAR, Kotter 8-Step) with stakeholder engagement, role-based training, and adoption measurement—ensuring modernization investments deliver lasting impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Start Change Management Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/capability-generator">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Generate Capability Statement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Change Capabilities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Change Management Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive change management services for government modernization programs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {changeCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                        <p className="text-muted-foreground mb-4">{capability.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Change Frameworks */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Change Management Frameworks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We apply proven change management frameworks tailored to your agency's needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {changeFrameworks.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-3">{item.framework}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="text-sm font-semibold mb-1">Best For:</div>
                    <div className="text-sm text-muted-foreground">{item.bestFor}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Change Activities */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Change Management Activities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive activities that drive successful organizational change
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {changeActivities.map((item, index) => (
              <div key={index} className="flex gap-3 p-6 bg-secondary rounded-lg border-2 border-border">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">{item.activity}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approaches */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Training & Adoption Strategies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-modal training approaches ensure users can effectively use new systems
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trainingApproaches.map((approach, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-2">{approach.name}</div>
                      <div className="text-sm text-muted-foreground">{approach.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Drive Successful Change?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our change management specialists can help you build stakeholder engagement, training programs, and adoption strategies that ensure modernization success.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Schedule Change Management Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/digital-transformation">
                <Button size="lg" variant="outline">
                  View All Modernization Services
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
