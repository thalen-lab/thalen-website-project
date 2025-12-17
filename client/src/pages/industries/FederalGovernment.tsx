import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, CheckCircle2, Award, Users, Clock, DollarSign, Target } from 'lucide-react';

export default function FederalGovernment() {
  const capabilities = [
    'FedRAMP Authorized (Moderate & High)',
    'StateRAMP Authorized Platforms',
    'FISMA Moderate ATO',
    'CJIS Compliant (Law Enforcement)',
    'Top Secret/SCI Cleared Team',
    'NIST 800-171 Compliance',
    'Continuous Monitoring (ConMon)',
    'Authority to Operate (ATO) Support'
  ];

  const agencies = [
    { name: 'Department of Defense', projects: '15+ Projects' },
    { name: 'Intelligence Community', projects: 'TS/SCI Cleared' },
    { name: 'Civilian Agencies', projects: '25+ Agencies' },
    { name: 'State & Local Gov', projects: 'Nationwide' }
  ];

  const challenges = [
    {
      title: 'Legacy System Modernization',
      description: 'Government agencies operate critical infrastructure on aging COBOL and mainframe systems that are expensive to maintain and difficult to integrate with modern technologies. These legacy systems create operational bottlenecks, security vulnerabilities, and limit the ability to deliver citizen services efficiently.'
    },
    {
      title: 'Compliance & Security Requirements',
      description: 'Meeting stringent federal security standards including FedRAMP, FISMA, NIST 800-53, and CMMC requires specialized expertise and continuous monitoring. Agencies must balance mission effectiveness with rigorous compliance requirements while protecting sensitive data and maintaining operational security.'
    },
    {
      title: 'Budget Constraints & ROI Pressure',
      description: 'Federal IT budgets face increasing scrutiny with mandates to demonstrate measurable ROI and cost savings. Agencies must modernize aging infrastructure while reducing operational costs, often with limited resources and competing priorities across multiple mission-critical systems.'
    },
    {
      title: 'Workforce Transformation',
      description: 'The federal workforce faces a skills gap as experienced personnel retire and new technologies emerge. Agencies must train existing staff on modern automation tools while competing with private sector for technical talent, all while maintaining continuity of mission-critical operations.'
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: 'Zero-Trust Security Architecture',
      description: 'We implement comprehensive zero-trust frameworks that exceed federal security requirements while enabling operational agility. Our approach includes continuous authentication, micro-segmentation, and real-time threat detection across all network layers. Every solution is designed with FedRAMP High authorization in mind, incorporating defense-in-depth strategies that protect sensitive data while maintaining mission effectiveness.'
    },
    {
      icon: Target,
      title: 'Mission-Focused Automation',
      description: 'Our automation strategies align directly with agency mission objectives, delivering measurable improvements in operational efficiency and citizen service delivery. We analyze existing workflows to identify high-impact automation opportunities that reduce manual processing time by an average of 85% while maintaining full compliance with federal regulations. Each implementation includes comprehensive change management to ensure successful adoption across the organization.'
    },
    {
      icon: Users,
      title: 'Cleared Team & ATO Support',
      description: 'Our Top Secret/SCI cleared engineers and consultants have decades of combined federal experience, enabling us to work on classified systems and sensitive operations. We provide end-to-end ATO support including security control implementation, documentation preparation, and continuous monitoring setup. Our team has successfully achieved 50+ federal ATOs across multiple agencies and impact levels.'
    },
    {
      icon: Clock,
      title: 'Agile Delivery & Rapid Deployment',
      description: 'We leverage agile methodologies tailored for federal environments, delivering working capabilities in 30-day sprints while maintaining full documentation and compliance requirements. Our RAPID Framework accelerates time-to-value through iterative development, continuous stakeholder engagement, and automated testing pipelines. This approach reduces typical project timelines by 40% compared to traditional waterfall methods.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Core Competency
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Government Agency Solutions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Trusted partner for mission-critical automation and modernization across federal, state, and local government agencies. FedRAMP and StateRAMP authorized with Top Secret/SCI cleared teams delivering measurable results for defense, intelligence, civilian, and public sector operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Government Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Government Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Experience Stats */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Federal Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Successful ATOs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">$2.3B+</div>
              <div className="text-sm text-muted-foreground">Federal ROI Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Security Clearance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Challenges */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Federal IT Challenges We Solve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Government agencies face unique operational, security, and budgetary challenges that require specialized expertise and proven methodologies. Thalen Technologies delivers solutions that address these complex requirements while maintaining mission continuity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-accent">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Federal Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive automation and modernization services designed specifically for federal requirements, delivered by cleared professionals with deep government experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <solution.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Government-Grade Security & Compliance</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Thalen Technologies maintains the highest levels of federal security certifications and clearances, enabling us to support classified and mission-critical operations across the federal government. Our comprehensive compliance framework ensures that every solution meets or exceeds federal security requirements while maintaining operational efficiency.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We provide end-to-end ATO support including security control implementation, documentation preparation, continuous monitoring setup, and ongoing compliance management. Our proven methodology has achieved a 100% success rate across 50+ federal ATOs spanning FedRAMP Moderate, FedRAMP High, and FISMA authorizations.
              </p>
              <ul className="space-y-3">
                {capabilities.map((cap, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-foreground mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, title: 'FedRAMP High', desc: 'Authorized' },
                { icon: Award, title: 'CMMC Level 3', desc: 'Certified' },
                { icon: Shield, title: 'TS/SCI', desc: 'Cleared Team' },
                { icon: Award, title: 'FISMA', desc: 'ATO Approved' }
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 text-accent mx-auto mb-3" />
                    <div className="font-bold text-lg mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agency Experience */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Federal Agency Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience across defense, intelligence, and civilian agencies. Our cleared teams have delivered mission-critical automation and modernization projects for agencies spanning the entire federal landscape, from Cabinet-level departments to independent agencies and state/local governments.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {agencies.map((agency, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg mb-2">{agency.name}</h3>
                  <p className="text-accent font-semibold">{agency.projects}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* StateRAMP Explainer */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                State & Local Compliance
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Understanding StateRAMP</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                StateRAMP (State Risk and Authorization Management Program) is the state and local government equivalent of FedRAMP, providing a standardized approach to security assessment and authorization for cloud services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">What is StateRAMP?</h3>
                  <p className="text-muted-foreground mb-4">
                    StateRAMP is a nonprofit organization that provides a standardized approach for state and local governments to assess and authorize cloud service providers. It was created to address the unique security and compliance needs of state and local agencies while reducing duplication of effort across jurisdictions.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Based on FedRAMP framework but tailored for state/local needs',
                      'Recognized by 20+ states as acceptable security framework',
                      'Reduces time and cost for state agencies to adopt cloud services',
                      'Provides reciprocity across participating states'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Why StateRAMP Matters</h3>
                  <p className="text-muted-foreground mb-4">
                    State and local governments face similar security challenges as federal agencies but often lack the resources to conduct independent security assessments of cloud providers. StateRAMP authorization signals that a platform has been rigorously vetted for government use.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Accelerates procurement by providing pre-vetted platforms',
                      'Ensures consistent security standards across jurisdictions',
                      'Reduces cost of security assessments for state agencies',
                      'Enables data sovereignty and in-state residency requirements'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">StateRAMP vs. FedRAMP: Key Differences</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left py-3 px-4 font-semibold">Aspect</th>
                        <th className="text-left py-3 px-4 font-semibold">FedRAMP</th>
                        <th className="text-left py-3 px-4 font-semibold">StateRAMP</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="py-3 px-4 font-medium">Target Audience</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">Federal agencies</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">State & local governments</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Authorization Levels</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">Low, Moderate, High</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">Level 1, Level 2</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Security Controls</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">NIST 800-53 (federal)</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">NIST 800-53 (adapted for state/local)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Data Residency</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">US-based (GovCloud)</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">State-specific options available</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Reciprocity</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">Across federal agencies</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">Across participating states</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Cost & Timeline</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">$500K-$5M, 12-24 months</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">$100K-$1M, 6-12 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">20+</div>
                  <div className="text-sm text-muted-foreground mb-3">States Participating</div>
                  <p className="text-xs text-muted-foreground">Growing number of states recognizing StateRAMP as acceptable security framework</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground mb-3">Authorized Platforms</div>
                  <p className="text-xs text-muted-foreground">Cloud services that have achieved StateRAMP authorization</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">60%</div>
                  <div className="text-sm text-muted-foreground mb-3">Faster Procurement</div>
                  <p className="text-xs text-muted-foreground">Average reduction in time-to-authorization for state agencies</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-12 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Thalen Technologies StateRAMP Expertise</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We help state and local agencies implement StateRAMP-authorized platforms and navigate the authorization process for custom solutions. Our team has successfully deployed StateRAMP-authorized infrastructure for DOTs, health departments, law enforcement agencies, and municipal governments across multiple states.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'StateRAMP-authorized platform implementation (Salesforce Gov Cloud, AWS GovCloud, Azure Government)',
                    'State-specific data residency and sovereignty requirements',
                    'CJIS compliance for law enforcement integration',
                    'StateRAMP authorization support for custom applications',
                    'Multi-state reciprocity planning and documentation',
                    'Continuous monitoring and compliance maintenance'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Federal Success Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world results from our federal automation engagements demonstrate the measurable impact of strategic automation combined with deep compliance expertise.
            </p>
          </div>
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary text-primary-foreground p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-accent mb-2">Featured Success</div>
                  <h3 className="text-3xl font-bold mb-4">Federal Agency Achieves 85% Process Automation</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    Transformed manual workflows into intelligent automation while maintaining Top Secret/SCI compliance, reducing processing time from 6 weeks to 2 days.
                  </p>
                  <p className="text-primary-foreground/90 mb-6">
                    This large civilian agency was struggling with paper-based workflows that created bottlenecks across multiple departments. Our team implemented a comprehensive RPA solution with AI-assisted document processing, integrated with existing legacy systems through secure APIs. The solution achieved FedRAMP Moderate ATO in 8 months and delivered immediate operational improvements while maintaining full NIST 800-53 compliance.
                  </p>
                  <Button className="bg-orange-gradient hover:opacity-90 w-fit">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-accent mb-2">85%</div>
                    <div className="text-lg text-muted-foreground mb-8">Automation Rate</div>
                    <div className="grid grid-cols-2 gap-6 text-left">
                      <div>
                        <div className="text-3xl font-bold text-accent">6 weeks</div>
                        <div className="text-sm text-muted-foreground">to 2 days</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">$12M</div>
                        <div className="text-sm text-muted-foreground">Annual Savings</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">8 months</div>
                        <div className="text-sm text-muted-foreground">to ATO</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">Zero</div>
                        <div className="text-sm text-muted-foreground">Security Incidents</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize Your Agency?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a federal automation assessment with our cleared experts. We'll analyze your current operations, identify high-impact automation opportunities, and provide a detailed ROI projection tailored to your agency's mission objectives.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Federal Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
