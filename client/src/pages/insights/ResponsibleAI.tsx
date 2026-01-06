import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function ResponsibleAI() {
  return (
    <div className="bg-white text-slate-600">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider">AI & Machine Learning</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">Responsible AI Implementation in Government: A Framework for Ethical Deployment</h1>
          <p className="text-white/90 max-w-3xl mx-auto mt-6 text-xl">Best practices for deploying AI systems that maintain transparency, accountability, and ethical standards in government environments. Learn how to build trust while leveraging AI's transformative potential.</p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-white text-[oklch(0.22_0.06_250)] px-6 py-3 rounded-md font-semibold">Get Started</button>
            <button className="bg-transparent border-white border text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)] px-6 py-3 rounded-md font-semibold">Learn More</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Breadcrumb items={[{ href: '/insights', label: 'Insights' }, { label: 'Responsible AI' }]} />
        <div className="prose lg:prose-xl max-w-none mx-auto text-slate-600">
          <p className="text-xl leading-relaxed">
            Artificial intelligence is transforming government operations, from fraud detection to citizen services. However, the deployment of AI systems in government contexts carries unique responsibilities. Public trust, equity concerns, and accountability requirements demand a thoughtful approach that balances innovation with ethical considerations. This guide provides a comprehensive framework for responsible AI implementation in government environments.
          </p>

          {/* Key Takeaways */}
          <div className="my-10 bg-white border-2 border-slate-200 rounded-lg hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all p-8">
            <h3 className="text-2xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">Key Takeaways</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                Responsible AI requires governance frameworks addressing fairness, transparency, and accountability
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                Bias detection and mitigation must be integrated throughout the AI lifecycle
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                Human oversight remains essential for high-stakes government decisions
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                Explainability requirements vary based on decision impact and affected populations
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                Continuous monitoring and auditing ensure AI systems remain aligned with intended outcomes
              </li>
            </ul>
          </div>

          <h2 className="text-[oklch(0.20_0.05_250)]">The Imperative for Responsible AI in Government</h2>
          <p>
            Government AI systems affect millions of citizens across critical domains including benefits administration, law enforcement, healthcare, and national security. Unlike commercial AI applications where users can choose alternatives, government AI often operates in contexts where citizens have limited choice. This asymmetry creates heightened obligations for fairness, accuracy, and accountability.
          </p>
          <p>
            Executive Order 14110 on Safe, Secure, and Trustworthy AI establishes federal requirements for AI governance, risk management, and civil rights protections. Agencies must develop AI governance frameworks, conduct impact assessments, and ensure human oversight for consequential decisions. These requirements reflect growing recognition that AI's benefits must be balanced against potential harms.
          </p>
          <p>
            The stakes are significant. Biased AI systems can perpetuate or amplify existing inequities, eroding public trust in government institutions. Opaque decision-making processes undermine due process rights and make it difficult for citizens to understand or contest adverse decisions. Responsible AI implementation addresses these concerns while enabling agencies to leverage AI's transformative potential.
          </p>

          <h2 className="text-[oklch(0.20_0.05_250)]">Core Principles of Responsible AI</h2>
          
          <h3 className="text-[oklch(0.20_0.05_250)]">Fairness and Non-Discrimination</h3>
          <p>
            AI systems must treat all individuals and groups equitably, avoiding discrimination based on protected characteristics. This requires proactive bias detection throughout the AI lifecycle—from training data selection through deployment and monitoring. Statistical fairness metrics provide quantitative measures, but must be complemented by qualitative assessment of real-world impacts.
          </p>
          <p>
            Achieving fairness often involves difficult tradeoffs. Different fairness definitions can be mathematically incompatible, requiring agencies to make explicit choices about which fairness criteria to prioritize. These decisions should be made transparently, with input from affected communities and documentation of the reasoning behind chosen approaches.
          </p>

          <h3 className="text-[oklch(0.20_0.05_250)]">Transparency and Explainability</h3>
          <p>
            Citizens have a right to understand how AI systems affect them. Transparency encompasses disclosure that AI is being used, explanation of how decisions are made, and access to information needed to contest adverse outcomes. The level of explanation required varies based on decision stakes and affected populations.
          </p>
          <p>
            Technical explainability approaches range from inherently interpretable models (decision trees, linear models) to post-hoc explanation methods for complex models (SHAP values, LIME). For government applications, explanations must be meaningful to non-technical audiences, including citizens, oversight bodies, and courts.
          </p>

          <h3 className="text-[oklch(0.20_0.05_250)]">Accountability and Oversight</h3>
          <p>
            Clear accountability structures ensure that humans remain responsible for AI-assisted decisions. This includes defined roles for AI governance, documented decision-making processes, and mechanisms for identifying and correcting errors. Accountability extends throughout the AI supply chain, including vendors and contractors providing AI components.
          </p>
          <p>
            Human oversight requirements scale with decision stakes. Low-risk applications may operate with periodic review, while high-stakes decisions affecting individual rights require human review before action. Agencies must resist the temptation to defer excessively to AI recommendations, maintaining genuine human judgment in the decision process.
          </p>

          <h3 className="text-[oklch(0.20_0.05_250)]">Privacy and Data Protection</h3>
          <p>
            AI systems often require large datasets that may include sensitive personal information. Privacy-preserving techniques—including differential privacy, federated learning, and synthetic data—can enable AI development while protecting individual privacy. Data minimization principles ensure that AI systems access only the information necessary for their intended purpose.
          </p>

          <h2 className="text-[oklch(0.20_0.05_250)]">Implementing Responsible AI: A Practical Framework</h2>
          
          <h3 className="text-[oklch(0.20_0.05_250)]">Phase 1: Governance Foundation</h3>
          <p>
            Establish AI governance structures including an AI ethics board or committee with diverse representation. Develop agency-specific AI principles aligned with federal requirements and mission context. Create policies addressing AI use case approval, risk assessment, and ongoing monitoring. Train staff on responsible AI principles and their practical application.
          </p>

          <h3 className="text-[oklch(0.20_0.05_250)]">Phase 2: Risk Assessment and Use Case Evaluation</h3>
          <p>
            Implement structured processes for evaluating proposed AI applications. Assess potential impacts on civil rights, privacy, and equity. Categorize use cases by risk level to determine appropriate governance requirements. Document intended purposes, limitations, and safeguards for each AI system.
          </p>

          {/* Risk Assessment Framework */}
          <div className="my-8 bg-white border-2 border-slate-200 rounded-lg hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all p-8">
            <h4 className="font-bold mb-4 text-[oklch(0.20_0.05_250)]">AI Risk Assessment Framework</h4>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-r">
                <p className="font-semibold text-green-800">Low Risk</p>
                <p className="text-sm text-slate-600">Administrative automation, document classification, internal analytics. Periodic review sufficient.</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-r">
                <p className="font-semibold text-yellow-800">Medium Risk</p>
                <p className="text-sm text-slate-600">Resource allocation, eligibility screening, fraud detection. Regular auditing and bias testing required.</p>
              </div>
              <div className="p-4 bg-red-50 rounded-r">
                <p className="font-semibold text-red-800">High Risk</p>
                <p className="text-sm text-slate-600">Benefits determination, law enforcement, healthcare decisions. Human review required for all consequential decisions.</p>
              </div>
            </div>
          </div>

          <h3 className="text-[oklch(0.20_0.05_250)]">Phase 3: Development with Responsibility Built In</h3>
          <p>
            Integrate responsible AI practices throughout the development lifecycle. Conduct bias audits on training data and model outputs. Implement explainability features appropriate to the use case. Design human-in-the-loop processes for high-stakes decisions. Document model development, validation, and limitations.
          </p>

          <h3 className="text-[oklch(0.20_0.05_250)]">Phase 4: Deployment and Monitoring</h3>
          <p>
            Deploy AI systems with appropriate safeguards and monitoring. Establish performance baselines and alert thresholds for drift detection. Implement feedback mechanisms for users and affected individuals. Conduct regular audits assessing fairness, accuracy, and alignment with intended purposes.
          </p>

          <h2 className="text-[oklch(0.20_0.05_250)]">Common Pitfalls and How to Avoid Them</h2>
          
          <h3 className="text-[oklch(0.20_0.05_250)]">Over-Reliance on Technical Solutions</h3>
          <p>
            Responsible AI cannot be achieved through technical measures alone. Bias mitigation algorithms, fairness constraints, and explainability tools are necessary but insufficient. Organizational culture, governance processes, and human judgment remain essential. Avoid the temptation to treat responsible AI as a purely technical problem.
          </p>

          <h3 className="text-[oklch(0.20_0.05_250)]">Checkbox Compliance</h3>
          <p>
            Responsible AI requires genuine commitment, not superficial compliance. Impact assessments conducted as formalities, ethics reviews that rubber-stamp decisions, and monitoring that goes unheeded undermine the purpose of governance frameworks. Build cultures where responsible AI principles are genuinely valued and practiced.
          </p>

          <h3 className="text-[oklch(0.20_0.05_250)]">Ignoring Affected Communities</h3>
          <p>
            AI systems affect real people whose perspectives are essential to responsible development. Engage affected communities in defining requirements, evaluating impacts, and identifying concerns. Community input often reveals issues that technical analysis misses and builds trust in AI systems.
          </p>

          <h2 className="text-[oklch(0.20_0.05_250)]">Building Trust Through Responsible AI</h2>
          <p>
            Responsible AI implementation is not a constraint on innovation—it's a foundation for sustainable AI adoption. AI systems that are fair, transparent, and accountable earn public trust, enabling broader deployment and greater impact. Agencies that invest in responsible AI practices position themselves as leaders in ethical technology use.
          </p>
          <p>
            The path forward requires sustained commitment from agency leadership, investment in governance capabilities, and genuine engagement with affected communities. Technical excellence must be paired with ethical rigor. The result is AI that serves the public interest while upholding the values that define democratic governance.
          </p>
          <p>
            Thalen's responsible AI practice combines technical expertise with deep understanding of government requirements and ethical considerations. Contact our team to discuss how we can support your agency's responsible AI journey.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Implement Responsible AI?</h2>
          <p className="mt-4 max-w-2xl mx-auto">Let Thalen Technologies guide your agency toward ethical, transparent, and accountable AI solutions that build public trust.</p>
          <div className="mt-8">
            <button className="bg-white text-[oklch(0.22_0.06_250)] px-6 py-3 rounded-md font-semibold flex items-center gap-2 mx-auto">
              Contact Us <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
