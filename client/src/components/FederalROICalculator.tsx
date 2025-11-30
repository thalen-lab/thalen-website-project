import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from 'lucide-react';

interface ROIResult {
  annualSavings: string;
  efficiencyGain: string;
  implementationTimeline: string;
  paybackPeriod: string;
  details: {
    laborSavings: string;
    errorReduction: string;
    processingTime: string;
    staffRedeployment: string;
  };
}

export default function FederalROICalculator() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<ROIResult | null>(null);

  const questions = [
    {
      id: 1,
      question: 'What is your agency size?',
      options: [
        { value: 'small', label: 'Small Agency', description: '< 1,000 employees' },
        { value: 'medium', label: 'Medium Agency', description: '1,000 - 10,000 employees' },
        { value: 'large', label: 'Large Agency', description: '10,000 - 50,000 employees' },
        { value: 'cabinet', label: 'Cabinet-Level Department', description: '> 50,000 employees' }
      ]
    },
    {
      id: 2,
      question: 'What is your primary project focus?',
      options: [
        { value: 'cloud', label: 'Cloud Migration', description: 'FedRAMP cloud infrastructure' },
        { value: 'data', label: 'Data Analytics', description: 'Data platforms and analytics' },
        { value: 'automation', label: 'Process Automation', description: 'RPA and workflow automation' },
        { value: 'cybersecurity', label: 'Cybersecurity', description: 'Zero-trust and compliance' }
      ]
    },
    {
      id: 3,
      question: 'What is your project scope?',
      options: [
        { value: 'pilot', label: 'Pilot Project', description: 'Single use case or department' },
        { value: 'division', label: 'Division-Wide', description: 'Multiple departments' },
        { value: 'agency', label: 'Agency-Wide', description: 'Entire agency deployment' },
        { value: 'enterprise', label: 'Enterprise', description: 'Multi-agency or department-wide' }
      ]
    },
    {
      id: 4,
      question: 'What is your implementation urgency?',
      options: [
        { value: 'strategic', label: 'Strategic Planning', description: '12-18 month timeline' },
        { value: 'standard', label: 'Standard Timeline', description: '6-12 month timeline' },
        { value: 'accelerated', label: 'Accelerated', description: '3-6 month timeline' },
        { value: 'urgent', label: 'Mission-Critical', description: '< 3 month timeline' }
      ]
    }
  ];

  const calculateROI = (): ROIResult => {
    const agencySize = answers[1];
    const projectFocus = answers[2];
    const projectScope = answers[3];
    const urgency = answers[4];

    // Base multipliers
    const sizeMultiplier = {
      small: 1,
      medium: 2.5,
      large: 5,
      cabinet: 10
    }[agencySize] || 1;

    const scopeMultiplier = {
      pilot: 0.5,
      division: 1,
      agency: 2,
      enterprise: 4
    }[projectScope] || 1;

    const focusData = {
      cloud: {
        baseSavings: 850000,
        efficiency: '40-55%',
        timeline: '6-9 months',
        laborSavings: '$450K',
        errorReduction: '35%',
        processingTime: '45%',
        staffRedeployment: '25 FTEs'
      },
      data: {
        baseSavings: 1200000,
        efficiency: '50-65%',
        timeline: '8-12 months',
        laborSavings: '$680K',
        errorReduction: '60%',
        processingTime: '55%',
        staffRedeployment: '35 FTEs'
      },
      automation: {
        baseSavings: 2100000,
        efficiency: '65-85%',
        timeline: '4-8 months',
        laborSavings: '$1.2M',
        errorReduction: '85%',
        processingTime: '75%',
        staffRedeployment: '65 FTEs'
      },
      cybersecurity: {
        baseSavings: 950000,
        efficiency: '30-45%',
        timeline: '6-10 months',
        laborSavings: '$520K',
        errorReduction: '40%',
        processingTime: '35%',
        staffRedeployment: '18 FTEs'
      }
    }[projectFocus] || {
      baseSavings: 1000000,
      efficiency: '40-60%',
      timeline: '6-12 months',
      laborSavings: '$500K',
      errorReduction: '45%',
      processingTime: '50%',
      staffRedeployment: '30 FTEs'
    };

    const totalSavings = focusData.baseSavings * sizeMultiplier * scopeMultiplier;
    
    const timelineAdjustment = {
      strategic: 1.2,
      standard: 1.0,
      accelerated: 0.85,
      urgent: 0.7
    }[urgency] || 1.0;

    const adjustedTimeline = focusData.timeline.split('-').map(t => 
      Math.round(parseInt(t) * timelineAdjustment)
    ).join('-');

    const payback = totalSavings > 5000000 ? '8-12 months' :
                   totalSavings > 2000000 ? '10-14 months' :
                   totalSavings > 1000000 ? '12-16 months' : '14-18 months';

    return {
      annualSavings: `$${(totalSavings / 1000000).toFixed(1)}M`,
      efficiencyGain: focusData.efficiency,
      implementationTimeline: `${adjustedTimeline} months`,
      paybackPeriod: payback,
      details: {
        laborSavings: `$${Math.round(parseFloat(focusData.laborSavings.replace(/[$K]/g, '')) * sizeMultiplier * scopeMultiplier)}K`,
        errorReduction: focusData.errorReduction,
        processingTime: focusData.processingTime,
        staffRedeployment: `${Math.round(parseFloat(focusData.staffRedeployment.replace(' FTEs', '')) * sizeMultiplier * scopeMultiplier)} FTEs`
      }
    };
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    
    if (currentQuestion < questions.length) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setResult(calculateROI()), 300);
    }
  };

  const resetCalculator = () => {
    setCurrentQuestion(1);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Your Estimated ROI</h3>
          <p className="text-lg text-muted-foreground">
            Based on your agency profile and project scope
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-10 w-10 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-accent mb-2">{result.annualSavings}</div>
              <div className="text-sm font-semibold mb-1">Annual Cost Savings</div>
              <div className="text-xs text-muted-foreground">Year 1 projected savings</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-10 w-10 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-accent mb-2">{result.efficiencyGain}</div>
              <div className="text-sm font-semibold mb-1">Efficiency Improvement</div>
              <div className="text-xs text-muted-foreground">Operational efficiency gain</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-10 w-10 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-accent mb-2">{result.implementationTimeline}</div>
              <div className="text-sm font-semibold mb-1">Implementation Time</div>
              <div className="text-xs text-muted-foreground">From kickoff to production</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-10 w-10 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-accent mb-2">{result.paybackPeriod}</div>
              <div className="text-sm font-semibold mb-1">Payback Period</div>
              <div className="text-xs text-muted-foreground">Time to ROI breakeven</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-secondary">
          <CardContent className="p-8">
            <h4 className="text-xl font-bold mb-6">Detailed ROI Breakdown</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <DollarSign className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Labor Cost Savings</div>
                  <div className="text-2xl font-bold text-accent">{result.details.laborSavings}</div>
                  <div className="text-sm text-muted-foreground">Annual labor efficiency savings</div>
                </div>
              </div>

              <div className="flex items-start">
                <TrendingUp className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Error Reduction</div>
                  <div className="text-2xl font-bold text-accent">{result.details.errorReduction}</div>
                  <div className="text-sm text-muted-foreground">Decrease in manual errors</div>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Processing Time Reduction</div>
                  <div className="text-2xl font-bold text-accent">{result.details.processingTime}</div>
                  <div className="text-sm text-muted-foreground">Faster task completion</div>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Staff Redeployment</div>
                  <div className="text-2xl font-bold text-accent">{result.details.staffRedeployment}</div>
                  <div className="text-sm text-muted-foreground">Reassigned to higher-value work</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            These estimates are based on similar federal agency implementations. Actual results may vary based on your specific requirements and environment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90" onClick={() => window.location.href = '/contact'}>
              Schedule ROI Discussion
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={resetCalculator}>
              Recalculate ROI
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion - 1];
  const progress = (currentQuestion / questions.length) * 100;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4">Federal Agency ROI Calculator</h3>
        <p className="text-lg text-muted-foreground">
          Answer 4 questions to estimate your project's cost savings, efficiency gains, and implementation timeline
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQuestion} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <h4 className="text-2xl font-bold mb-6">{currentQ.question}</h4>
            <RadioGroup value={answers[currentQuestion]} onValueChange={handleAnswer}>
              <div className="space-y-4">
                {currentQ.options.map((option) => (
                  <div key={option.value}>
                    <Label
                      htmlFor={option.value}
                      className="flex items-start p-4 border-2 border-border rounded-lg cursor-pointer hover:border-accent transition-colors"
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                      <div className="ml-4 flex-1">
                        <div className="font-semibold text-lg mb-1">{option.label}</div>
                        <div className="text-sm text-muted-foreground">{option.description}</div>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {currentQuestion > 1 && (
          <div className="text-center mt-4">
            <Button variant="outline" onClick={() => setCurrentQuestion(currentQuestion - 1)}>
              Previous Question
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
