import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle2, TrendingUp, Target, DollarSign, Shield, Database } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import { Link } from "wouter";
import Breadcrumb from '@/components/Breadcrumb';
import { FloatingPrintButton } from '@/components/PrintButton';

interface Question {
  id: number;
  category: string;
  question: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    category: "Data Governance",
    question: "How would you describe your organization's data governance framework?",
    options: [
      { label: "No formal governance - data managed ad-hoc by individual teams", score: 1 },
      { label: "Basic policies exist but enforcement is inconsistent", score: 2 },
      { label: "Documented governance with assigned data stewards", score: 3 },
      { label: "Mature governance with automated compliance monitoring", score: 4 },
      { label: "Enterprise-wide governance with continuous optimization", score: 5 },
    ],
  },
  {
    id: 2,
    category: "Data Infrastructure",
    question: "What is the current state of your data infrastructure?",
    options: [
      { label: "Siloed databases with no integration", score: 1 },
      { label: "Some integration but mostly manual data transfers", score: 2 },
      { label: "Centralized data warehouse with ETL processes", score: 3 },
      { label: "Modern data lake with automated pipelines", score: 4 },
      { label: "Real-time data fabric with streaming capabilities", score: 5 },
    ],
  },
  {
    id: 3,
    category: "Analytics Capabilities",
    question: "How does your organization currently use data for decision-making?",
    options: [
      { label: "Decisions based on intuition or anecdotal evidence", score: 1 },
      { label: "Basic reports generated manually in spreadsheets", score: 2 },
      { label: "Automated dashboards with historical data", score: 3 },
      { label: "Predictive analytics for forecasting and planning", score: 4 },
      { label: "Real-time AI-driven insights embedded in operations", score: 5 },
    ],
  },
  {
    id: 4,
    category: "Data Quality",
    question: "How would you rate your data quality and accuracy?",
    options: [
      { label: "Frequent errors and inconsistencies - data not trusted", score: 1 },
      { label: "Quality issues identified but not systematically addressed", score: 2 },
      { label: "Data validation rules in place with periodic audits", score: 3 },
      { label: "Automated quality monitoring with issue tracking", score: 4 },
      { label: "Proactive data quality management with ML-based anomaly detection", score: 5 },
    ],
  },
  {
    id: 5,
    category: "Data Skills & Culture",
    question: "What is the level of data literacy across your organization?",
    options: [
      { label: "Most staff lack basic data skills", score: 1 },
      { label: "Small team of analysts, limited data culture", score: 2 },
      { label: "Growing data skills with formal training programs", score: 3 },
      { label: "Data-driven culture with embedded analytics teams", score: 4 },
      { label: "Organization-wide data fluency with citizen data scientists", score: 5 },
    ],
  },
  {
    id: 6,
    category: "Data Security & Compliance",
    question: "How mature is your data security and compliance program?",
    options: [
      { label: "Minimal security controls, compliance gaps", score: 1 },
      { label: "Basic access controls but manual compliance tracking", score: 2 },
      { label: "Role-based access with documented compliance processes", score: 3 },
      { label: "Automated security monitoring and compliance reporting", score: 4 },
      { label: "Zero-trust architecture with continuous compliance validation", score: 5 },
    ],
  },
  {
    id: 7,
    category: "Data Integration",
    question: "How well are your data systems integrated?",
    options: [
      { label: "No integration - data trapped in silos", score: 1 },
      { label: "Manual data exports and imports between systems", score: 2 },
      { label: "Point-to-point integrations with some automation", score: 3 },
      { label: "Enterprise integration platform connecting key systems", score: 4 },
      { label: "Real-time API-driven integration across all systems", score: 5 },
    ],
  },
  {
    id: 8,
    category: "Advanced Analytics",
    question: "To what extent do you use machine learning and AI?",
    options: [
      { label: "No ML/AI capabilities", score: 1 },
      { label: "Exploring ML with pilot projects", score: 2 },
      { label: "ML models in production for specific use cases", score: 3 },
      { label: "ML embedded in multiple business processes", score: 4 },
      { label: "Enterprise AI platform with automated ML pipelines", score: 5 },
    ],
  },
];

interface MaturityLevel {
  level: string;
  description: string;
  color: string;
  services: string[];
  estimatedROI: string;
  timeline: string;
}

const maturityLevels: Record<string, MaturityLevel> = {
  initial: {
    level: "Initial (8-16 points)",
    description: "Your organization is in the early stages of data maturity. Data is managed ad-hoc with minimal governance and limited analytics capabilities.",
    color: "text-red-600",
    services: ["Data Strategy & Roadmap", "Data Governance Framework", "Data Infrastructure Assessment"],
    estimatedROI: "200-300% over 3 years",
    timeline: "12-18 months to reach Developing level",
  },
  developing: {
    level: "Developing (17-24 points)",
    description: "Your organization has basic data capabilities but lacks consistency and automation. There are opportunities for significant improvement.",
    color: "text-[#FF6B35]",
    services: ["Enterprise Data Platform", "Data Quality Management", "Analytics Dashboard Development"],
    estimatedROI: "150-250% over 2 years",
    timeline: "9-12 months to reach Defined level",
  },
  defined: {
    level: "Defined (25-32 points)",
    description: "Your organization has documented processes and centralized data infrastructure. Focus should shift to optimization and advanced analytics.",
    color: "text-yellow-600",
    services: ["Predictive Analytics & ML/AI", "Real-Time Analytics Platform", "Data Engineering Automation"],
    estimatedROI: "100-150% over 18 months",
    timeline: "6-9 months to reach Managed level",
  },
  managed: {
    level: "Managed (33-36 points)",
    description: "Your organization has mature data capabilities with automated processes. Focus on continuous improvement and emerging technologies.",
    color: "text-blue-600",
    services: ["Advanced ML/AI Models", "Real-Time Streaming Analytics", "AI-Driven Decision Support"],
    estimatedROI: "75-125% over 12 months",
    timeline: "6-12 months to reach Optimized level",
  },
  optimized: {
    level: "Optimized (37-40 points)",
    description: "Your organization is a data-driven leader with enterprise-wide analytics and AI capabilities. Focus on innovation and competitive advantage.",
    color: "text-green-600",
    services: ["AI Innovation Lab", "Advanced Analytics R&D", "Data Monetization Strategy"],
    estimatedROI: "50-100% through continuous innovation",
    timeline: "Ongoing optimization and innovation",
  },
};

function getMaturityLevel(score: number): MaturityLevel {
  if (score <= 16) return maturityLevels.initial;
  if (score <= 24) return maturityLevels.developing;
  if (score <= 32) return maturityLevels.defined;
  if (score <= 36) return maturityLevels.managed;
  return maturityLevels.optimized;
}

export default function DataMaturityAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const maturityResult = getMaturityLevel(totalScore);

  const handleAnswer = (score: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: score });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        {/* Results Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-primary-foreground">
          <div className="container text-center">
            <CheckCircle2 className="h-16 w-16 mx-auto mb-6 text-green-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Data Maturity Assessment Results</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Based on your responses, here's your personalized roadmap for data analytics transformation
            </p>
          </div>
        </section>

        {/* Maturity Score */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-4xl">
            <Card className="hover:shadow-lg transition-all active:scale-95">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold mb-2">{totalScore}/40</div>
                  <div className={`text-2xl font-semibold ${maturityResult.color}`}>
                    {maturityResult.level}
                  </div>
                </div>
                <Progress value={(totalScore / 40) * 100} className="h-3 mb-4" />
                <p className="text-center text-muted-foreground">
                  {maturityResult.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recommended Services */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              <Target className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Recommended Next Steps</h2>
            </div>
            <div className="grid gap-4 mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
              {maturityResult.services.map((service, index) => (
                <Card key={index} className="hover:border-accent hover:shadow-lg transition-all border-2">
                  <CardContent className="p-3 sm:p-4 md:p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-card border-2 border-border text-foreground font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{service}</h3>
                      </div>
                    </div>
                    <Link href="/services/data-analytics">
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ROI & Timeline */}
            <div className="grid md:grid-cols-2 gap-6 mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
              <Card className="hover:shadow-lg hover:border-accent transition-all border-2">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-bold">Estimated ROI</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-2">{maturityResult.estimatedROI}</p>
                  <p className="text-sm text-muted-foreground">
                    Based on typical outcomes for organizations at your maturity level
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg hover:border-accent transition-all border-2">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold">Implementation Timeline</h3>
                  </div>
                  <p className="text-3xl font-bold text-blue-600 mb-2">{maturityResult.timeline}</p>
                  <p className="text-sm text-muted-foreground">
                    Estimated time to advance to the next maturity level
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <Card className="bg-navy-gradient text-primary-foreground hover:shadow-2xl transition-all active:scale-95">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your Data Maturity?</h3>
                <p className="mb-6 opacity-90">
                  Schedule a free consultation with our data analytics experts to discuss your personalized roadmap
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" onClick={handleRestart} className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Retake Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      <RelatedServices 
        services={[
          {
            title: 'Data Strategy & Roadmap',
            description: 'Develop a comprehensive data strategy based on assessment findings and organizational goals.',
            href: '/services/data-analytics/strategy',
            icon: Target
          },
          {
            title: 'Data Engineering & Pipelines',
            description: 'Build robust data infrastructure to address gaps identified in your assessment.',
            href: '/services/data-analytics/engineering',
            icon: Database
          },
          {
            title: 'Data Governance & Compliance',
            description: 'Implement governance frameworks to manage data quality, security, and regulatory compliance.',
            href: '/services/data-governance',
            icon: Shield
          }
        ]}
        title="Act on Assessment Insights"
        description="Transform assessment findings into actionable improvements with these data services."
      />

        <FloatingPrintButton position="bottom-right" />
      <Footer />
      </div>
    );
  }

  const question = questions[currentQuestion];
  const currentAnswer = answers[question.id];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Assessment Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Maturity Assessment</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            Evaluate your organization's current data capabilities and receive a personalized roadmap for improvement
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </section>

      {/* Question */}
      <section className="py-16 flex-1">
        <div className="container max-w-3xl">
          <Card className="hover:shadow-lg transition-all active:scale-95">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="text-sm font-semibold text-muted-foreground mb-4">{question.category}</div>
              <h2 className="text-2xl font-bold mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">{question.question}</h2>
              
              <div className="space-y-3 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.score)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      currentAnswer === option.score
                        ? "border-accent bg-muted"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        currentAnswer === option.score
                          ? "border-accent bg-accent"
                          : "border-border"
                      }`}>
                        {currentAnswer === option.score && (
                          <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                        )}
                      </div>
                      <span>{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentAnswer === undefined}
                >
                  {currentQuestion === questions.length - 1 ? "View Results" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <RelatedServices 
        services={[
          {
            title: 'Data Strategy & Roadmap',
            description: 'Develop a comprehensive data strategy based on assessment findings and organizational goals.',
            href: '/services/data-analytics/strategy',
            icon: Target
          },
          {
            title: 'Data Engineering & Pipelines',
            description: 'Build robust data infrastructure to address gaps identified in your assessment.',
            href: '/services/data-analytics/engineering',
            icon: Database
          },
          {
            title: 'Data Governance & Compliance',
            description: 'Implement governance frameworks to manage data quality, security, and regulatory compliance.',
            href: '/services/data-governance',
            icon: Shield
          }
        ]}
        title="Act on Assessment Insights"
        description="Transform assessment findings into actionable improvements with these data services."
      />

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
