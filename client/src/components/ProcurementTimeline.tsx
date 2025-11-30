import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string }[];
}

interface Recommendation {
  path: string;
  timeline: string;
  description: string;
  nextSteps: string[];
}

const questions: Question[] = [
  {
    id: 'agency_type',
    question: 'What type of government agency are you?',
    options: [
      { value: 'state', label: 'State Agency' },
      { value: 'county', label: 'County Government' },
      { value: 'city', label: 'City/Municipal Government' },
      { value: 'special', label: 'Special District' }
    ]
  },
  {
    id: 'project_size',
    question: 'What is your estimated project budget?',
    options: [
      { value: 'small', label: 'Under $100K' },
      { value: 'medium', label: '$100K - $500K' },
      { value: 'large', label: '$500K - $2M' },
      { value: 'enterprise', label: 'Over $2M' }
    ]
  },
  {
    id: 'urgency',
    question: 'What is your timeline requirement?',
    options: [
      { value: 'immediate', label: 'Need to start within 1 month' },
      { value: 'soon', label: '1-3 months' },
      { value: 'planned', label: '3-6 months' },
      { value: 'flexible', label: '6+ months' }
    ]
  },
  {
    id: 'procurement_experience',
    question: 'Do you have experience with cooperative purchasing contracts?',
    options: [
      { value: 'yes', label: 'Yes, we use them regularly' },
      { value: 'some', label: 'Some familiarity' },
      { value: 'no', label: 'No experience' }
    ]
  }
];

function getRecommendation(answers: Record<string, string>): Recommendation {
  const { agency_type, project_size, urgency, procurement_experience } = answers;

  // Cooperative purchasing - best for experienced users with urgent needs
  if (procurement_experience === 'yes' && (urgency === 'immediate' || urgency === 'soon')) {
    return {
      path: 'Cooperative Purchasing (NASPO, Sourcewell, OMNIA)',
      timeline: '1-4 weeks',
      description: 'Fastest procurement path using pre-negotiated contracts with no RFP required. Perfect for your urgent timeline and cooperative purchasing experience.',
      nextSteps: [
        'Verify your agency is eligible for NASPO ValuePoint, Sourcewell, or OMNIA Partners contracts',
        'Review NexDyne contract numbers and scope of services',
        'Issue purchase order or task order directly',
        'Schedule kickoff meeting within 1-2 weeks'
      ]
    };
  }

  // State master agreement - good for state agencies with some urgency
  if (agency_type === 'state' && (urgency === 'immediate' || urgency === 'soon')) {
    return {
      path: 'State Master Agreement',
      timeline: '1-4 weeks',
      description: 'Streamlined procurement through your state-specific IT services master agreement with pre-approved vendor status.',
      nextSteps: [
        'Contact us to confirm your state has a master agreement with NexDyne',
        'Review state-specific contract terms and pricing',
        'Issue task order against state contract',
        'Begin project within 1-4 weeks depending on state requirements'
      ]
    };
  }

  // Grant-funded - best for large projects with grant funding
  if ((project_size === 'large' || project_size === 'enterprise') && urgency !== 'immediate') {
    return {
      path: 'Grant-Funded Project (ARPA, BEAD, State Grants)',
      timeline: '4-8 weeks',
      description: 'Leverage federal or state grant funding (ARPA, BEAD, state technology grants) with comprehensive compliance tracking and audit-ready documentation.',
      nextSteps: [
        'Confirm grant eligibility and funding availability',
        'Review grant compliance requirements with NexDyne team',
        'Develop project scope aligned with grant objectives',
        'Submit grant application or amendment with NexDyne as implementation partner',
        'Begin project upon grant approval'
      ]
    };
  }

  // Traditional RFP - default for county/city or no cooperative experience
  if ((agency_type === 'county' || agency_type === 'city' || agency_type === 'special') || procurement_experience === 'no') {
    return {
      path: 'Traditional RFP Process',
      timeline: '4-6 weeks (response) + agency evaluation time',
      description: 'Comprehensive RFP response with local references, transparent pricing, and full compliance documentation tailored to your requirements.',
      nextSteps: [
        'Issue RFP with detailed requirements and evaluation criteria',
        'NexDyne will submit comprehensive response within 2-3 weeks',
        'Participate in oral presentations or demonstrations as required',
        'Award contract and begin project planning',
        'Typical total timeline: 8-12 weeks from RFP to project start'
      ]
    };
  }

  // Default to cooperative purchasing for medium projects with some experience
  return {
    path: 'Cooperative Purchasing (NASPO, Sourcewell, OMNIA)',
    timeline: '2-4 weeks',
    description: 'Streamlined procurement using cooperative purchasing contracts with pre-negotiated pricing and simplified compliance.',
    nextSteps: [
      'Verify your agency eligibility for cooperative contracts',
      'Review contract options and pricing with NexDyne team',
      'Issue purchase order against selected cooperative contract',
      'Schedule project kickoff within 2-4 weeks'
    ]
  };
}

export default function ProcurementTimeline() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const recommendation = getRecommendation(answers);
    
    return (
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-3xl font-bold mb-2">Recommended Procurement Path</h3>
            <p className="text-muted-foreground">Based on your agency profile and requirements</p>
          </div>

          <div className="bg-accent/10 border-2 border-accent rounded-lg p-8 mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-2xl font-bold mb-2">{recommendation.path}</h4>
                <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  Timeline: {recommendation.timeline}
                </div>
              </div>
            </div>
            <p className="text-lg mb-6">{recommendation.description}</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">Next Steps:</h4>
            <div className="space-y-3">
              {recommendation.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-accent text-accent-foreground rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-orange-gradient hover:opacity-90 flex-1"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Procurement Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleReset}
            >
              Start Over
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="p-12">
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8">{questions[currentQuestion].question}</h3>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="w-full text-left p-6 border-2 border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium group-hover:text-accent transition-colors">
                  {option.label}
                </span>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <div className="mt-8">
            <Button 
              variant="outline" 
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
            >
              Previous Question
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
