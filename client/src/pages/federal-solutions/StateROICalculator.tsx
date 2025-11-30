import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Calculator, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

export default function StateROICalculator() {
  const [inputs, setInputs] = useState({
    agencyType: 'state',
    annualBudget: '',
    employeeCount: '',
    manualProcessHours: '',
    avgHourlyRate: '',
    systemCount: '',
    dataVolume: ''
  });

  const [results, setResults] = useState<any>(null);

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateROI = () => {
    const budget = parseFloat(inputs.annualBudget) || 0;
    const employees = parseFloat(inputs.employeeCount) || 0;
    const manualHours = parseFloat(inputs.manualProcessHours) || 0;
    const hourlyRate = parseFloat(inputs.avgHourlyRate) || 45; // Default state employee rate
    const systems = parseFloat(inputs.systemCount) || 0;

    // Calculate automation savings (40% reduction in manual hours)
    const automationSavings = manualHours * 0.4 * hourlyRate * 52;

    // Calculate cloud migration savings (25% infrastructure cost reduction)
    const cloudSavings = budget * 0.15; // Assume 15% of budget is IT infrastructure

    // Calculate data analytics value (10% efficiency gain)
    const analyticsSavings = (employees * hourlyRate * 2080) * 0.10;

    // Calculate integration savings ($50K per system integrated)
    const integrationSavings = systems * 50000;

    const totalAnnualSavings = automationSavings + cloudSavings + analyticsSavings + integrationSavings;
    const threeYearSavings = totalAnnualSavings * 3;
    const estimatedInvestment = totalAnnualSavings * 0.4; // Typical 40% of first year savings
    const roi = ((threeYearSavings - estimatedInvestment) / estimatedInvestment) * 100;

    setResults({
      automationSavings,
      cloudSavings,
      analyticsSavings,
      integrationSavings,
      totalAnnualSavings,
      threeYearSavings,
      estimatedInvestment,
      roi,
      paybackMonths: (estimatedInvestment / (totalAnnualSavings / 12))
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              State & Local Government Tool
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              State Government ROI Calculator
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Calculate the potential return on investment for IT modernization projects at your state or local government agency. Get instant estimates for automation, cloud migration, data analytics, and systems integration.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Calculator className="h-8 w-8 text-accent mr-3" />
                    <h2 className="text-2xl font-bold">Agency Information</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="agencyType">Agency Type</Label>
                      <select
                        id="agencyType"
                        value={inputs.agencyType}
                        onChange={(e) => handleInputChange('agencyType', e.target.value)}
                        className="w-full mt-2 px-4 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="state">State Agency</option>
                        <option value="county">County Government</option>
                        <option value="city">City/Municipal</option>
                        <option value="special">Special District</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="annualBudget">Annual IT Budget ($)</Label>
                      <Input
                        id="annualBudget"
                        type="number"
                        placeholder="5000000"
                        value={inputs.annualBudget}
                        onChange={(e) => handleInputChange('annualBudget', e.target.value)}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Total annual IT operating budget</p>
                    </div>

                    <div>
                      <Label htmlFor="employeeCount">Number of Employees</Label>
                      <Input
                        id="employeeCount"
                        type="number"
                        placeholder="500"
                        value={inputs.employeeCount}
                        onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Total agency staff count</p>
                    </div>

                    <div>
                      <Label htmlFor="manualProcessHours">Manual Process Hours/Week</Label>
                      <Input
                        id="manualProcessHours"
                        type="number"
                        placeholder="200"
                        value={inputs.manualProcessHours}
                        onChange={(e) => handleInputChange('manualProcessHours', e.target.value)}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Weekly hours spent on manual, repetitive tasks</p>
                    </div>

                    <div>
                      <Label htmlFor="avgHourlyRate">Average Hourly Rate ($)</Label>
                      <Input
                        id="avgHourlyRate"
                        type="number"
                        placeholder="45"
                        value={inputs.avgHourlyRate}
                        onChange={(e) => handleInputChange('avgHourlyRate', e.target.value)}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Average fully-loaded hourly cost per employee</p>
                    </div>

                    <div>
                      <Label htmlFor="systemCount">Number of Legacy Systems</Label>
                      <Input
                        id="systemCount"
                        type="number"
                        placeholder="8"
                        value={inputs.systemCount}
                        onChange={(e) => handleInputChange('systemCount', e.target.value)}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Separate systems requiring integration</p>
                    </div>

                    <Button 
                      onClick={calculateROI}
                      className="w-full bg-orange-gradient hover:opacity-90"
                      size="lg"
                    >
                      Calculate ROI
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div>
              {results ? (
                <div className="space-y-6">
                  <Card className="border-2 border-accent">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <TrendingUp className="h-8 w-8 text-accent mr-3" />
                        <h2 className="text-2xl font-bold">Projected ROI</h2>
                      </div>

                      <div className="text-center mb-8">
                        <div className="text-5xl font-bold text-accent mb-2">
                          {results.roi.toFixed(0)}%
                        </div>
                        <p className="text-muted-foreground">3-Year Return on Investment</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-secondary rounded-lg">
                          <DollarSign className="h-6 w-6 text-accent mx-auto mb-2" />
                          <div className="text-2xl font-bold">{formatCurrency(results.totalAnnualSavings)}</div>
                          <p className="text-xs text-muted-foreground">Annual Savings</p>
                        </div>
                        <div className="text-center p-4 bg-secondary rounded-lg">
                          <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                          <div className="text-2xl font-bold">{results.paybackMonths.toFixed(1)}</div>
                          <p className="text-xs text-muted-foreground">Months to Payback</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-secondary rounded">
                          <span className="text-sm">Process Automation Savings</span>
                          <span className="font-bold">{formatCurrency(results.automationSavings)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-secondary rounded">
                          <span className="text-sm">Cloud Migration Savings</span>
                          <span className="font-bold">{formatCurrency(results.cloudSavings)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-secondary rounded">
                          <span className="text-sm">Data Analytics Value</span>
                          <span className="font-bold">{formatCurrency(results.analyticsSavings)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-secondary rounded">
                          <span className="text-sm">Systems Integration Savings</span>
                          <span className="font-bold">{formatCurrency(results.integrationSavings)}</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">3-Year Total Savings</span>
                          <span className="text-xl font-bold text-accent">{formatCurrency(results.threeYearSavings)}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <span>Estimated Investment</span>
                          <span>{formatCurrency(results.estimatedInvestment)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-3">Next Steps</h3>
                      <ul className="space-y-2 text-sm mb-4">
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>Schedule a detailed assessment with our state/local government team</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>Review state-specific compliance requirements (StateRAMP, CJIS)</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>Explore cooperative purchasing contracts for streamlined procurement</span>
                        </li>
                      </ul>
                      <Link href="/contact">
                        <Button className="w-full bg-orange-gradient hover:opacity-90">
                          Request Detailed Assessment
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card className="border-2 h-full flex items-center justify-center">
                  <CardContent className="p-12 text-center">
                    <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Enter Your Agency Information</h3>
                    <p className="text-muted-foreground">
                      Fill out the form on the left to calculate your potential ROI from IT modernization projects.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* State/Local Benchmarks */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">State & Local Government Benchmarks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry benchmarks for IT modernization ROI across state and local government agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">40-60%</div>
                <p className="text-sm font-semibold mb-1">Process Automation</p>
                <p className="text-xs text-muted-foreground">Reduction in manual processing time</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">25-35%</div>
                <p className="text-sm font-semibold mb-1">Cloud Migration</p>
                <p className="text-xs text-muted-foreground">Infrastructure cost savings</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">15-20%</div>
                <p className="text-sm font-semibold mb-1">Data Analytics</p>
                <p className="text-xs text-muted-foreground">Operational efficiency gains</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">12-18</div>
                <p className="text-sm font-semibold mb-1">Payback Period</p>
                <p className="text-xs text-muted-foreground">Months to full ROI</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize Your Agency?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our state/local government team to discuss your IT modernization roadmap and explore StateRAMP-authorized platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/federal-solutions/state-local">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View State/Local Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
