import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, Clock, Shield, Download } from 'lucide-react';

export default function Methodology() {
  const [calculatorInputs, setCalculatorInputs] = useState({
    employees: '',
    avgSalary: '',
    hoursPerWeek: '',
    errorRate: ''
  });

  const [results, setResults] = useState<{
    annualSavings: number;
    roi: number;
    paybackMonths: number;
    fiveYearValue: number;
  } | null>(null);

  const calculateROI = () => {
    const employees = parseInt(calculatorInputs.employees) || 0;
    const avgSalary = parseInt(calculatorInputs.avgSalary) || 0;
    const hoursPerWeek = parseInt(calculatorInputs.hoursPerWeek) || 0;
    const errorRate = parseFloat(calculatorInputs.errorRate) || 0;

    // Conservative automation assumptions
    const automationRate = 0.65; // 65% of manual tasks automated
    const errorReductionRate = 0.85; // 85% error reduction
    const weeklyHoursSaved = hoursPerWeek * automationRate;
    const annualHoursSaved = weeklyHoursSaved * 52;
    const hourlyRate = avgSalary / 2080; // Annual salary / working hours
    const laborSavings = annualHoursSaved * hourlyRate * employees;
    
    // Error cost reduction (assuming 2 hours per error at $150/hour)
    const currentErrors = employees * 52 * (errorRate / 100);
    const errorCostReduction = currentErrors * errorReductionRate * 2 * 150;
    
    const totalAnnualSavings = laborSavings + errorCostReduction;
    const implementationCost = 150000; // Average project cost
    const roi = ((totalAnnualSavings - implementationCost) / implementationCost) * 100;
    const paybackMonths = (implementationCost / totalAnnualSavings) * 12;
    const fiveYearValue = (totalAnnualSavings * 5) - implementationCost;

    setResults({
      annualSavings: Math.round(totalAnnualSavings),
      roi: Math.round(roi),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      fiveYearValue: Math.round(fiveYearValue)
    });
  };

  const industryBenchmarks = [
    {
      industry: 'Federal Government',
      avgROI: '312%',
      payback: '4.2 months',
      efficiency: '85% process automation',
      example: 'Federal Agency achieved $18.5M annual savings'
    },
    {
      industry: 'Healthcare & Life Sciences',
      avgROI: '287%',
      payback: '5.1 months',
      efficiency: '78% claims processing automation',
      example: 'Hospital System saved $12M annually'
    },
    {
      industry: 'Manufacturing & Energy',
      avgROI: '345%',
      payback: '3.8 months',
      efficiency: '92% supply chain optimization',
      example: 'Manufacturer achieved 99.2% uptime'
    },
    {
      industry: 'Financial Services',
      avgROI: '298%',
      payback: '4.5 months',
      efficiency: '94% fraud detection accuracy',
      example: 'Bank prevented $47M in fraud annually'
    }
  ];

  const rapidPhases = [
    {
      phase: 'Research & Assessment',
      duration: '2-3 weeks',
      roiImpact: 'Identify $2-5M in automation opportunities',
      activities: [
        'Current state process mapping and documentation',
        'Bottleneck identification and prioritization',
        'ROI projection modeling with conservative estimates',
        'Technology stack assessment and gap analysis'
      ],
      deliverables: [
        'Comprehensive automation opportunity report',
        'Detailed ROI projections by process area',
        'Risk assessment and mitigation strategies'
      ]
    },
    {
      phase: 'Architecture & Planning',
      duration: '2-4 weeks',
      roiImpact: 'Optimize solution design for 30% cost reduction',
      activities: [
        'Solution architecture design and optimization',
        'Technology vendor evaluation and selection',
        'Phased implementation roadmap creation',
        'Security and compliance framework integration'
      ],
      deliverables: [
        'Detailed technical architecture documentation',
        'Implementation roadmap with milestones',
        'Security and compliance certification plan'
      ]
    },
    {
      phase: 'Implementation & Delivery',
      duration: '8-12 weeks',
      roiImpact: 'Deliver first measurable results in 30 days',
      activities: [
        'Agile development sprints with bi-weekly demos',
        'RPA bot deployment and ML model training',
        'Continuous integration and automated testing',
        'Zero-downtime migration and deployment'
      ],
      deliverables: [
        'Fully deployed automation solution',
        'Comprehensive testing and QA reports',
        'User training and documentation'
      ]
    },
    {
      phase: 'Performance & Optimization',
      duration: 'Ongoing',
      roiImpact: '15-25% efficiency gains through optimization',
      activities: [
        'Real-time performance monitoring and dashboards',
        'ROI tracking and quarterly business reviews',
        'Predictive maintenance and proactive optimization',
        'Continuous improvement recommendations'
      ],
      deliverables: [
        'Real-time ROI dashboards and reports',
        'Quarterly optimization recommendations',
        'Predictive analytics and trend analysis'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-accent mb-4">ROI Methodology</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The RAPID Framework ROI Methodology
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Our proven 4-phase approach delivers measurable ROI in 30 days with 100% success rate and zero operational disruption
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
                <Link href="#calculator">
                  Calculate Your ROI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="#framework">
                  View Framework Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">312%</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">30</div>
              <div className="text-sm text-muted-foreground">Days to First Results</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4.2</div>
              <div className="text-sm text-muted-foreground">Months Avg Payback</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Interactive ROI Calculator</h2>
              <p className="text-xl text-muted-foreground">
                Get a conservative estimate of your automation ROI in 60 seconds
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Current Operations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="employees">Number of Employees in Target Process</Label>
                    <Input
                      id="employees"
                      type="number"
                      placeholder="e.g., 50"
                      value={calculatorInputs.employees}
                      onChange={(e) => setCalculatorInputs({ ...calculatorInputs, employees: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="avgSalary">Average Annual Salary ($)</Label>
                    <Input
                      id="avgSalary"
                      type="number"
                      placeholder="e.g., 75000"
                      value={calculatorInputs.avgSalary}
                      onChange={(e) => setCalculatorInputs({ ...calculatorInputs, avgSalary: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hoursPerWeek">Manual Process Hours per Employee/Week</Label>
                    <Input
                      id="hoursPerWeek"
                      type="number"
                      placeholder="e.g., 20"
                      value={calculatorInputs.hoursPerWeek}
                      onChange={(e) => setCalculatorInputs({ ...calculatorInputs, hoursPerWeek: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="errorRate">Current Error Rate (%)</Label>
                    <Input
                      id="errorRate"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 5"
                      value={calculatorInputs.errorRate}
                      onChange={(e) => setCalculatorInputs({ ...calculatorInputs, errorRate: e.target.value })}
                    />
                  </div>
                  <Button onClick={calculateROI} className="w-full bg-accent text-accent-foreground hover:opacity-90">
                    Calculate ROI
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              <Card className="bg-accent text-accent-foreground">
                <CardHeader>
                  <CardTitle>Your Projected ROI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {results ? (
                    <>
                      <div className="border-b border-accent-foreground/20 pb-4">
                        <div className="text-sm opacity-90 mb-1">Annual Savings</div>
                        <div className="text-4xl font-bold flex items-center gap-2">
                          <DollarSign className="h-8 w-8" />
                          {results.annualSavings.toLocaleString()}
                        </div>
                      </div>
                      <div className="border-b border-accent-foreground/20 pb-4">
                        <div className="text-sm opacity-90 mb-1">Return on Investment</div>
                        <div className="text-4xl font-bold">{results.roi}%</div>
                      </div>
                      <div className="border-b border-accent-foreground/20 pb-4">
                        <div className="text-sm opacity-90 mb-1">Payback Period</div>
                        <div className="text-4xl font-bold flex items-center gap-2">
                          <Clock className="h-8 w-8" />
                          {results.paybackMonths} months
                        </div>
                      </div>
                      <div>
                        <div className="text-sm opacity-90 mb-1">5-Year Net Value</div>
                        <div className="text-4xl font-bold flex items-center gap-2">
                          <DollarSign className="h-8 w-8" />
                          {results.fiveYearValue.toLocaleString()}
                        </div>
                      </div>
                      <div className="pt-4">
                        <Button asChild variant="outline" className="w-full bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                          <Link href="/contact">
                            Schedule Detailed Assessment
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12 opacity-75">
                      <TrendingUp className="h-16 w-16 mx-auto mb-4" />
                      <p>Enter your information to see projected ROI</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Methodology Note:</strong> Our calculator uses conservative assumptions (65% automation rate, 85% error reduction) based on 15+ years of implementation data across 200+ projects. Actual results typically exceed projections by 15-30%. All calculations assume average implementation cost of $150,000 and include labor savings plus error cost reduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RAPID Framework Details */}
      <section id="framework" className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The RAPID Framework in Detail</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Results-Accelerated Process Intelligence & Delivery: Four phases engineered for maximum ROI with minimum risk
            </p>
          </div>

          <div className="space-y-8">
            {rapidPhases.map((phase, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{phase.phase}</h3>
                          <p className="text-sm text-muted-foreground">{phase.duration}</p>
                        </div>
                      </div>
                      <div className="bg-accent/10 p-4 rounded-lg">
                        <div className="text-sm font-semibold text-accent mb-1">ROI Impact</div>
                        <div className="font-bold">{phase.roiImpact}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Key Activities</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Deliverables</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry Benchmarks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real ROI data from 200+ implementations across regulated industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryBenchmarks.map((benchmark, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{benchmark.industry}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Average ROI</div>
                      <div className="text-3xl font-bold text-accent">{benchmark.avgROI}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Payback Period</div>
                      <div className="text-3xl font-bold text-accent">{benchmark.payback}</div>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-sm text-muted-foreground mb-1">Typical Efficiency Gain</div>
                    <div className="font-semibold">{benchmark.efficiency}</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm font-semibold mb-1">Case Example</div>
                    <div className="text-sm">{benchmark.example}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Download className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Download the Complete ROI Methodology Guide
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get our comprehensive 40-page methodology guide including detailed ROI calculation frameworks, industry benchmarks, and implementation best practices.
            </p>
            <Button asChild size="lg" className="bg-orange-gradient hover:opacity-90">
              <Link href="/contact">
                Request Methodology Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm opacity-75 mt-4">
              Includes: ROI Calculator Spreadsheet • Implementation Checklist • Security Compliance Framework
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
