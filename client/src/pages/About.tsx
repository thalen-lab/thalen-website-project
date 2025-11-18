import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Target, Award, Users, Globe, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const principles = [
    {
      number: '01',
      title: 'Intelligence, Delivered',
      description: 'Every automation strategy is designed to augment human decision-making with intelligent insights, not replace critical thinking. We believe the most powerful transformations happen when technology amplifies human expertise.'
    },
    {
      number: '02',
      title: 'Security by Design',
      description: 'Government-grade security isn\'t an afterthought—it\'s the foundation. Every solution is architected with zero-trust principles, comprehensive compliance frameworks, and the highest levels of operational security.'
    },
    {
      number: '03',
      title: 'Measurable Impact',
      description: 'Strategy without measurement is just hope. We architect every automation implementation with clear ROI metrics, performance baselines, and continuous optimization frameworks that demonstrate tangible business value.'
    }
  ];

  const approaches = [
    {
      title: 'Strategic Assessment',
      description: 'We begin every engagement with comprehensive process analysis to identify the automation opportunities that will deliver maximum business impact.',
      icon: Target
    },
    {
      number: '02',
      title: 'Embedded Implementation',
      description: 'Our teams work directly within your operations to ensure solutions integrate seamlessly with existing workflows and security requirements.',
      icon: Users
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Commitment',
      letter: 'C',
      description: 'Unwavering dedication to mission success. We treat every project as mission-critical and deliver results that directly support our clients\' strategic objectives with zero compromise on quality or security.'
    },
    {
      icon: Globe,
      title: 'Balance',
      letter: 'B',
      description: 'Harmonizing innovation with stability. We balance cutting-edge AI capabilities with proven methodologies, ensuring transformative results without operational disruption or unnecessary risk.'
    },
    {
      icon: Award,
      title: 'Accountability',
      letter: 'A',
      description: 'Measurable results, transparent reporting. We hold ourselves accountable to ROI projections, delivery timelines, and security standards — with real-time dashboards tracking every metric that matters.'
    },
    {
      icon: Users,
      title: 'Mastery',
      letter: 'M',
      description: 'Deep expertise across the full automation stack. Our team maintains elite certifications (FedRAMP, CMMC, AWS, Azure) and 15+ years of specialized experience in government and enterprise transformation.'
    }
  ];

  const teamStats = [
    { value: '25+', label: 'Automation Technologies Mastered' },
    { value: '7+', label: 'Security Clearance Certifications' },
    { value: '15+', label: 'Years Average Experience' },
    { value: '100%', label: 'Mission-Critical Focus' }
  ];

  const operationalStats = [
    { value: '100%', label: 'Onsite Integration' },
    { value: 'Zero', label: 'Operational Downtime' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero - Founding Story */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
              With the right strategy and proven automation frameworks, government and enterprise organizations can still solve complex problems and transform operations for measurable impact.
            </h1>
            
            <div className="space-y-6 text-lg opacity-90">
              <p>
                When we looked at the automation landscape in 2024, we saw solutions that were too rigid to handle novel challenges, systems that took too long to deploy, and platforms that required too many specialists to maintain and improve.
              </p>
              
              <p>
                We saw automation approaches that failed against complex processes, and all-or-nothing implementations that forced organizations to make unacceptable trade-offs between maintaining operational security and achieving transformation goals.
              </p>
              
              <p>
                We saw a need for a different kind of automation strategy company, and we knew it would take a different kind of approach to build it. That's why we founded NexDyne Technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">Our Mission</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Organizations around the world are using NexDyne to transform their most important operations.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground text-left mt-12">
              <p>
                With NexDyne's automation strategies, government agencies are achieving new levels of operational efficiency while maintaining the highest security standards. Federal departments are reducing processing times from weeks to hours, healthcare systems are improving patient outcomes through streamlined workflows, and critical infrastructure operators are enhancing reliability through predictive automation.
              </p>
              
              <p>
                Defense contractors are building stronger cases for mission readiness. Intelligence agencies are accelerating threat analysis capabilities. Healthcare organizations are directing resources more effectively to patient care. Manufacturing operations are optimizing supply chains with unprecedented precision. Financial institutions are strengthening compliance while improving service delivery.
              </p>
              
              <p>
                We are working to build a future in which government agencies, healthcare systems, and critical infrastructure operators can leverage automation to function as they were designed—to fulfill the missions with which they've been entrusted, to deliver maximum value to citizens, and to protect the systems most vital to our society.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Principles</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-[120px_1fr] gap-8 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-7xl md:text-8xl font-bold text-accent/20">
                  {principle.number}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Approach</h2>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
                We transform complex operational challenges into strategic competitive advantages through intelligent automation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our specialty lies in architecting automation solutions for the most demanding environments—where security clearances are required, where compliance is non-negotiable, and where operational failure has serious consequences. We deliver measurable ROI while maintaining the highest standards of security and operational excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every engagement begins with deep process analysis to identify the highest-impact automation opportunities. We then deploy proven frameworks that integrate seamlessly with existing operations, ensuring zero disruption while delivering transformational results that scale with organizational growth.
              </p>
              
              <Link href="/services">
                <Button variant="outline" size="lg" className="group">
                  Our Automation Strategy
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* How We Operate */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">How we operate</h3>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12">
              We deploy automation strategists directly to your most critical operations.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our consultants embed with your teams to understand the nuances of your processes, identify optimization opportunities, and implement solutions that deliver immediate and lasting impact. We don't build from the outside looking in—we work from within your operations to architect transformation that works.
                </p>
              </div>
              
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  This approach allows us to deliver automation strategies that integrate seamlessly with existing workflows, maintain operational security, and scale with your organization's evolving needs. Every solution is battle-tested in real-world environments before full deployment.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  {operationalStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Where We're Needed Most */}
            <div className="bg-muted rounded-lg p-8 md:p-12">
              <h4 className="text-2xl md:text-3xl font-bold mb-6">Where we're needed most</h4>
              
              <div className="space-y-6 text-lg text-muted-foreground mb-8">
                <p>
                  We identify the most critical operational challenges that pose the greatest risk not only to organizational efficiency, but to mission success itself. Whether it's a federal agency struggling with manual processes that compromise national security timelines, or a healthcare system where outdated workflows impact patient outcomes, we focus our efforts where automation can deliver the most strategic value.
                </p>
                
                <p>
                  Some organizations have the resources to optimize every process. Many don't. Our approach with all our clients is the same: identify the highest-impact opportunities and establish a partnership that transforms not just individual processes, but organizational capability.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-accent/20">
                  <CardContent className="p-6">
                    <h5 className="text-xl font-bold mb-3">Strategic Assessment</h5>
                    <p className="text-muted-foreground">
                      We begin every engagement with comprehensive process analysis to identify the automation opportunities that will deliver maximum business impact.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20">
                  <CardContent className="p-6">
                    <h5 className="text-xl font-bold mb-3">Embedded Implementation</h5>
                    <p className="text-muted-foreground">
                      Our teams work directly within your operations to ensure solutions integrate seamlessly with existing workflows and security requirements.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - CBAM */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The CBAM framework guides every engagement and drives our commitment to client success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="text-5xl font-bold text-accent/20 mb-2">{value.letter}</div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our people</h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At our foundation around the world, we've assembled a team that combines practical expertise in automation technologies, deep understanding of government and enterprise operations, and an uncompromising engineering mindset focused on delivering measurable results in service of organizational missions.
                </p>
                
                <p>
                  What brings us together is an unwavering commitment to operational excellence and the belief that intelligent automation should amplify human capability, not replace it.
                </p>
              </div>

              <Link href="/team">
                <Button variant="outline" size="lg" className="mt-8 group">
                  Meet Our Experts
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {teamStats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">Our Vision for the Future</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Organizations around the world are using NexDyne to transform their most important operations.
            </h2>
            
            <div className="space-y-6 text-lg opacity-90">
              <p>
                With NexDyne's automation strategies, government agencies are achieving new levels of operational efficiency while maintaining the highest security standards. Federal departments are reducing processing times from weeks to hours, healthcare systems are improving patient outcomes through streamlined workflows, and critical infrastructure operators are enhancing reliability through predictive automation.
              </p>
              
              <p>
                Defense contractors are building stronger cases for mission readiness. Intelligence agencies are accelerating threat analysis capabilities. Healthcare organizations are directing resources more effectively to patient care. Manufacturing operations are optimizing supply chains with unprecedented precision. Financial institutions are strengthening compliance while improving service delivery.
              </p>
              
              <p>
                We are working to build a future in which government agencies, healthcare systems, and critical infrastructure operators can leverage automation to function as they were designed—to fulfill the missions with which they've been entrusted, to deliver maximum value to citizens, and to protect the systems most vital to our society.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
