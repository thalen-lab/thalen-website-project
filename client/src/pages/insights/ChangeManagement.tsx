import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';

export default function ChangeManagement() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <div className="relative bg-[#0A2540] text-white py-24 sm:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/insights/hero-pattern.svg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Insights', href: '/insights' },
                  { label: 'Change Management' }
                ]} 
                variant="light" 
              />
            </div>
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Digital Transformation
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Change Management: The Key to Digital Transformation Success
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 mb-10">
              Why 70% of digital transformations fail and how to ensure yours succeeds through effective change management strategies that address the human side of technology adoption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white text-[oklch(0.22_0.06_250)] hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Contact Our Experts
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md bg-transparent text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)] transition-colors duration-300"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-xl leading-relaxed text-slate-600">
            Digital transformation initiatives fail at an alarming rate—studies consistently show that 70% or more do not achieve their intended objectives. The primary cause is not technology failure but change management failure. Organizations invest heavily in new systems and processes while underinvesting in the human elements that determine adoption and sustained use. This guide provides a comprehensive framework for change management in government digital transformation.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div
          className="my-12 bg-white border-2 border-slate-200 rounded-lg p-8 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">
            Key Takeaways
          </h3>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
              <span>Technology is the easy part—people and process change determine transformation success</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
              <span>Executive sponsorship must be visible, sustained, and authentic throughout the transformation</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
              <span>Communication should be continuous, multi-channel, and tailored to different stakeholder groups</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
              <span>Training alone is insufficient—ongoing support and reinforcement drive sustained adoption</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
              <span>Resistance is natural and often contains valuable feedback—engage rather than dismiss resisters</span>
            </li>
          </ul>
        </motion.div>

        {/* Main Content Sections */}
        <div className="prose prose-lg max-w-none text-slate-600 prose-h2:text-[oklch(0.20_0.05_250)] prose-h3:text-[oklch(0.20_0.05_250)] prose-strong:text-[oklch(0.20_0.05_250)]">
          <motion.section variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Why Transformations Fail</p>
            <h2>Understanding Common Pitfalls</h2>
            <p>
              Digital transformation failures rarely stem from technology problems. Modern enterprise software, cloud platforms, and automation tools are mature and capable. Failures occur when organizations cannot successfully transition people from old ways of working to new ones. Understanding common failure patterns enables proactive mitigation.
            </p>
            <p>
              Insufficient executive sponsorship undermines transformation efforts. When leaders delegate transformation to IT without visible, sustained engagement, employees conclude that the initiative is not truly important. Competing priorities, organizational politics, and change fatigue create resistance that only executive commitment can overcome.
            </p>
            <p>
              Poor communication leaves employees confused about why change is happening, what it means for them, and how to succeed in the new environment. Organizations often communicate the "what" of transformation without adequately addressing the "why" and "how." This gap breeds anxiety, rumors, and resistance.
            </p>
            <p>
              Inadequate training and support leave employees unable to perform effectively with new tools and processes. Training events without ongoing reinforcement result in rapid skill decay. Employees revert to familiar methods when new approaches prove difficult, undermining transformation objectives.
            </p>
          </motion.section>

          <motion.section className="mt-12" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Individual Change</p>
            <h2>The ADKAR Model for Individual Change</h2>
            <p>
              Successful organizational change requires successful individual change. The ADKAR model provides a framework for understanding and facilitating individual transitions through five sequential stages: Awareness, Desire, Knowledge, Ability, and Reinforcement.
            </p>
            <h3>Awareness</h3>
            <p>
              Individuals must understand why change is necessary before they can engage with it. Awareness building explains the business drivers, competitive pressures, or mission requirements that necessitate transformation. Without awareness, employees perceive change as arbitrary or threatening.
            </p>
            <h3>Desire</h3>
            <p>
              Understanding why change is necessary does not automatically create willingness to participate. Desire emerges when individuals see personal benefit in the change or understand consequences of not changing. Leaders must address "what's in it for me" questions honestly and compellingly.
            </p>
            <h3>Knowledge</h3>
            <p>
              Once individuals want to change, they need knowledge of how to change. This includes understanding new processes, learning new tools, and knowing where to find help. Knowledge transfer occurs through training, documentation, and peer learning.
            </p>
            <h3>Ability</h3>
            <p>
              Knowledge does not equal ability. Individuals need practice, coaching, and time to develop proficiency with new ways of working. The gap between knowing and doing often surprises organizations that underinvest in hands-on skill development.
            </p>
            <h3>Reinforcement</h3>
            <p>
              Sustained change requires reinforcement through recognition, rewards, accountability, and ongoing support. Without reinforcement, individuals drift back to familiar patterns. Reinforcement mechanisms must be designed into the transformation from the beginning.
            </p>
          </motion.section>
        </div>
      </div>

      {/* Alternate Background Section */}
      <div className="bg-[oklch(0.97_0.01_250)] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white border-2 border-slate-200 rounded-lg p-8 transition-all duration-300 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Change Readiness Assessment Dimensions</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-[oklch(0.65_0.18_55)] mb-3 uppercase tracking-wider">Organizational Factors</h5>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                    <span>History of change success/failure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                    <span>Current change saturation level</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                    <span>Leadership alignment and commitment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                    <span>Available resources and capacity</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-[oklch(0.65_0.18_55)] mb-3 uppercase tracking-wider">Individual Factors</h5>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                    <span>Understanding of change rationale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                    <span>Perceived personal impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                    <span>Trust in leadership</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                    <span>Skill and confidence levels</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="prose prose-lg max-w-none text-slate-600 prose-h2:text-[oklch(0.20_0.05_250)] prose-h3:text-[oklch(0.20_0.05_250)] prose-strong:text-[oklch(0.20_0.05_250)]">
          <motion.section variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Communication</p>
            <h2>Communication Strategies for Transformation</h2>
            <h3>The Communication Cascade</h3>
            <p>
              Effective transformation communication follows a cascade pattern. Executive leaders communicate vision and strategic rationale. Middle managers translate strategy into operational implications for their teams. Front-line supervisors address individual concerns and provide day-to-day guidance. Each level plays an essential role—skipping levels creates gaps that breed confusion and resistance.
            </p>
            <h3>Multi-Channel Approach</h3>
            <p>
              Different stakeholders consume information through different channels. Town halls reach broad audiences but lack personalization. Team meetings enable dialogue and Q&A. Email and intranet provide reference material. Informal conversations address individual concerns. Effective communication strategies employ multiple channels, with consistent messaging adapted to each channel's strengths.
            </p>
            <h3>Two-Way Communication</h3>
            <p>
              Communication must flow both ways. Feedback mechanisms—surveys, focus groups, suggestion systems, office hours—enable employees to voice concerns, ask questions, and contribute ideas. Leaders who listen and respond build trust and often receive valuable insights that improve transformation outcomes.
            </p>
          </motion.section>

          <motion.section className="mt-12" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Momentum</p>
            <h2>Building and Sustaining Momentum</h2>
            <h3>Quick Wins</h3>
            <p>
              Early, visible successes build confidence and momentum. Identify opportunities for quick wins that demonstrate transformation value and build credibility for larger changes. Quick wins should be genuine improvements, not manufactured successes—employees quickly recognize and discount artificial victories.
            </p>
            <h3>Change Champions</h3>
            <p>
              Change champions are influential employees who advocate for transformation within their peer groups. Champions provide peer-to-peer support, surface concerns before they become crises, and model successful adoption. Identifying, equipping, and supporting change champions multiplies change management capacity.
            </p>
            <h3>Managing Resistance</h3>
            <p>
              Resistance is a natural response to change and often contains valuable information. Rather than dismissing or suppressing resistance, effective change managers engage with it. Understanding the sources of resistance—fear, loss of status, legitimate concerns about the change approach—enables targeted responses that address root causes.
            </p>
          </motion.section>

          <motion.section className="mt-12" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Government Challenges</p>
            <h2>Government-Specific Change Challenges</h2>
            <h3>Civil Service Dynamics</h3>
            <p>
              Government workforce dynamics differ from private sector. Civil service protections, union considerations, and tenure patterns create different change dynamics. Leaders cannot simply mandate change—they must build genuine buy-in. The upside is that government employees often have deep mission commitment that can be leveraged to support transformation aligned with mission improvement.
            </p>
            <h3>Political Transitions</h3>
            <p>
              Government transformations must survive political transitions. Initiatives closely associated with particular administrations may face scrutiny or reversal when leadership changes. Building bipartisan support, demonstrating concrete results, and institutionalizing changes help transformations persist across political cycles.
            </p>
            <h3>Procurement Constraints</h3>
            <p>
              Government procurement processes can extend transformation timelines and limit flexibility. Change management strategies must account for procurement realities, maintaining momentum during lengthy acquisition processes and adapting to constraints that private sector transformations do not face.
            </p>
          </motion.section>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[oklch(0.22_0.06_250)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Making Change Stick</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Successful digital transformation requires equal attention to technology and people. Organizations that invest in change management alongside technology implementation dramatically improve their odds of success. Contact our team to discuss how we can support your transformation journey.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white text-[oklch(0.22_0.06_250)] hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Partner with Thalen Technologies <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
