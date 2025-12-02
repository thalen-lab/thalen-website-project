import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  FileText, Download, CheckCircle2, Shield, Calculator, 
  BookOpen, ClipboardCheck, TrendingUp, Cloud, Lock,
  DollarSign, Clock, Users, ArrowRight 
} from 'lucide-react';
import { toast } from 'sonner';

export default function GovernmentResources() {
  // ROI Calculator State
  const [cloudInputs, setCloudInputs] = useState({
    currentInfrastructureCost: '',
    fteMaintenance: '',
    downtimeHoursYear: '',
    avgHourlyCost: ''
  });

  const [automationInputs, setAutomationInputs] = useState({
    processesPerMonth: '',
    minutesPerProcess: '',
    fteHourlyRate: '',
    errorRate: ''
  });

  const [cloudROI, setCloudROI] = useState<any>(null);
  const [automationROI, setAutomationROI] = useState<any>(null);

  // CMMC Checklist State
  const [cmmcChecklist, setCmmcChecklist] = useState<{[key: string]: boolean}>({});

  const cmmcRequirements = [
    { id: 'access-control', category: 'Access Control', item: 'Limit system access to authorized users and processes' },
    { id: 'awareness-training', category: 'Awareness & Training', item: 'Ensure personnel are trained in cybersecurity' },
    { id: 'audit-accountability', category: 'Audit & Accountability', item: 'Create and retain system audit logs' },
    { id: 'configuration-management', category: 'Configuration Management', item: 'Establish and maintain baseline configurations' },
    { id: 'identification-authentication', category: 'Identification & Authentication', item: 'Identify and authenticate users and devices' },
    { id: 'incident-response', category: 'Incident Response', item: 'Establish operational incident handling capability' },
    { id: 'maintenance', category: 'Maintenance', item: 'Perform maintenance on systems' },
    { id: 'media-protection', category: 'Media Protection', item: 'Protect CUI on system media' },
    { id: 'personnel-security', category: 'Personnel Security', item: 'Screen individuals prior to authorizing access' },
    { id: 'physical-protection', category: 'Physical Protection', item: 'Limit physical access to systems and equipment' },
    { id: 'risk-assessment', category: 'Risk Assessment', item: 'Periodically assess risk to operations and assets' },
    { id: 'security-assessment', category: 'Security Assessment', item: 'Periodically assess security controls' },
    { id: 'system-communications', category: 'System & Communications Protection', item: 'Monitor and control communications at system boundaries' },
    { id: 'system-information', category: 'System & Information Integrity', item: 'Identify and manage information system flaws' },
  ];

  const calculateCloudROI = () => {
    const current = parseFloat(cloudInputs.currentInfrastructureCost) || 0;
    const fte = parseFloat(cloudInputs.fteMaintenance) || 0;
    const downtime = parseFloat(cloudInputs.downtimeHoursYear) || 0;
    const hourlyCost = parseFloat(cloudInputs.avgHourlyCost) || 0;

    if (current === 0) {
      toast.error('Please enter current infrastructure cost');
      return;
    }

    // Typical cloud savings: 30-40% infrastructure cost reduction
    const cloudCost = current * 0.65; // 35% reduction
    const infrastructureSavings = current - cloudCost;

    // FTE savings: typically 50% reduction in maintenance staff
    const fteSavings = (fte * 0.5) * 2080 * 75; // 50% reduction, 2080 hours/year, $75/hour

    // Downtime reduction: typically 70% reduction
    const downtimeSavings = (downtime * 0.7) * hourlyCost;

    const totalAnnualSavings = infrastructureSavings + fteSavings + downtimeSavings;
    const threeYearSavings = totalAnnualSavings * 3;
    
    // Typical migration cost: 15-20% of annual infrastructure cost
    const migrationCost = current * 0.18;
    const netSavings = threeYearSavings - migrationCost;
    const roi = ((netSavings / migrationCost) * 100).toFixed(0);
    const paybackMonths = ((migrationCost / totalAnnualSavings) * 12).toFixed(1);

    setCloudROI({
      infrastructureSavings: infrastructureSavings.toFixed(0),
      fteSavings: fteSavings.toFixed(0),
      downtimeSavings: downtimeSavings.toFixed(0),
      totalAnnualSavings: totalAnnualSavings.toFixed(0),
      threeYearSavings: threeYearSavings.toFixed(0),
      migrationCost: migrationCost.toFixed(0),
      netSavings: netSavings.toFixed(0),
      roi,
      paybackMonths
    });

    toast.success('ROI calculated successfully!');
  };

  const calculateAutomationROI = () => {
    const processes = parseFloat(automationInputs.processesPerMonth) || 0;
    const minutes = parseFloat(automationInputs.minutesPerProcess) || 0;
    const hourlyRate = parseFloat(automationInputs.fteHourlyRate) || 0;
    const errorRate = parseFloat(automationInputs.errorRate) || 0;

    if (processes === 0 || minutes === 0) {
      toast.error('Please enter process volume and time per process');
      return;
    }

    // Calculate time savings
    const hoursPerMonth = (processes * minutes) / 60;
    const annualHours = hoursPerMonth * 12;
    const timeSavings = annualHours * hourlyRate * 0.85; // 85% time reduction typical

    // Calculate error reduction savings
    const errorCostPerProcess = 15; // Average $15 per error to fix
    const currentErrorCost = (processes * 12) * (errorRate / 100) * errorCostPerProcess;
    const errorReduction = currentErrorCost * 0.90; // 90% error reduction

    // Calculate productivity gains
    const productivityGain = timeSavings * 0.15; // 15% additional productivity

    const totalAnnualSavings = timeSavings + errorReduction + productivityGain;
    const threeYearSavings = totalAnnualSavings * 3;
    
    // Typical implementation cost
    const implementationCost = annualHours * 50; // $50/hour for implementation
    const netSavings = threeYearSavings - implementationCost;
    const roi = ((netSavings / implementationCost) * 100).toFixed(0);
    const paybackMonths = ((implementationCost / totalAnnualSavings) * 12).toFixed(1);

    setAutomationROI({
      timeSavings: timeSavings.toFixed(0),
      errorReduction: errorReduction.toFixed(0),
      productivityGain: productivityGain.toFixed(0),
      totalAnnualSavings: totalAnnualSavings.toFixed(0),
      threeYearSavings: threeYearSavings.toFixed(0),
      implementationCost: implementationCost.toFixed(0),
      netSavings: netSavings.toFixed(0),
      roi,
      paybackMonths,
      hoursPerMonth: hoursPerMonth.toFixed(0)
    });

    toast.success('ROI calculated successfully!');
  };

  const downloadGuide = (guideName: string) => {
    toast.info(`${guideName} download will be available soon. Contact us for immediate access.`);
  };

  const cmmcProgress = (Object.values(cmmcChecklist).filter(Boolean).length / cmmcRequirements.length) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Government Buyer Resources
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Resources Hub for Government IT Decision-Makers
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Comprehensive guides, interactive checklists, and ROI calculators to support informed procurement decisions for federal, state, and local government agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            <a href="#guides" className="block">
              <Card className="hover:border-accent transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Compliance Guides</h3>
                  <p className="text-sm text-muted-foreground">FedRAMP, CMMC, StateRAMP</p>
                </CardContent>
              </Card>
            </a>
            <a href="#checklists" className="block">
              <Card className="hover:border-accent transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <ClipboardCheck className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Interactive Checklists</h3>
                  <p className="text-sm text-muted-foreground">Readiness assessments</p>
                </CardContent>
              </Card>
            </a>
            <a href="#calculators" className="block">
              <Card className="hover:border-accent transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <Calculator className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-bold mb-2">ROI Calculators</h3>
                  <p className="text-sm text-muted-foreground">Cloud, automation, security</p>
                </CardContent>
              </Card>
            </a>
            <a href="#procurement" className="block">
              <Card className="hover:border-accent transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <FileText className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Procurement Guides</h3>
                  <p className="text-sm text-muted-foreground">Federal & state/local</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Compliance Guides */}
      <section id="guides" className="py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compliance Guides</h2>
            <p className="text-xl text-muted-foreground">
              Step-by-step guides for navigating complex government compliance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FedRAMP ATO Guide */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-accent mr-3" />
                  FedRAMP ATO Process Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Comprehensive guide to achieving FedRAMP Authorization to Operate (ATO) for cloud service providers and government agencies implementing cloud solutions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">FedRAMP authorization levels (Low, Moderate, High)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">System Security Plan (SSP) development</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Security assessment and authorization process</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Continuous monitoring requirements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Timeline and cost estimates</span>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button onClick={() => downloadGuide('FedRAMP ATO Guide')} variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide
                  </Button>
                  <Link href="/contact">
                    <Button variant="outline">
                      Get Expert Help
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* CMMC Readiness Guide */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-6 w-6 text-accent mr-3" />
                  CMMC Readiness Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Prepare your organization for Cybersecurity Maturity Model Certification (CMMC) required for DoD contractors handling Controlled Unclassified Information (CUI).
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">CMMC Level 2 and Level 3 requirements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">NIST 800-171 compliance mapping</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Gap assessment and remediation planning</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Third-party assessment preparation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Cost and timeline planning</span>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button onClick={() => downloadGuide('CMMC Readiness Guide')} variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide
                  </Button>
                  <Link href="/contact">
                    <Button variant="outline">
                      Get Expert Help
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* StateRAMP Guide */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-accent mr-3" />
                  StateRAMP Compliance Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Navigate StateRAMP authorization for cloud service providers serving state and local government agencies with security requirements.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">StateRAMP authorization process overview</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Differences from FedRAMP requirements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">State-specific compliance requirements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Security control implementation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Assessment and authorization timeline</span>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button onClick={() => downloadGuide('StateRAMP Guide')} variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide
                  </Button>
                  <Link href="/contact">
                    <Button variant="outline">
                      Get Expert Help
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* CJIS Compliance Guide */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-6 w-6 text-accent mr-3" />
                  CJIS Compliance Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Ensure compliance with Criminal Justice Information Services (CJIS) Security Policy for law enforcement and public safety agencies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">CJIS Security Policy requirements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Personnel screening and training</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Advanced authentication requirements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Audit logging and monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Cloud service provider compliance</span>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button onClick={() => downloadGuide('CJIS Compliance Guide')} variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide
                  </Button>
                  <Link href="/contact">
                    <Button variant="outline">
                      Get Expert Help
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Checklists */}
      <section id="checklists" className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Interactive Compliance Checklists</h2>
            <p className="text-xl text-muted-foreground">
              Track your compliance readiness with interactive checklists
            </p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center mb-2">
                    <ClipboardCheck className="h-6 w-6 text-accent mr-3" />
                    CMMC Level 2 Readiness Checklist
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Track your progress toward CMMC Level 2 certification requirements
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-accent">{cmmcProgress.toFixed(0)}%</div>
                  <div className="text-sm text-muted-foreground">Complete</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full bg-secondary rounded-full h-3">
                <div 
                  className="bg-accent h-3 rounded-full transition-all duration-300"
                  style={{ width: `${cmmcProgress}%` }}
                />
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {cmmcRequirements.map((req) => (
                  <div key={req.id} className="flex items-start space-x-3 p-3 bg-background rounded-lg">
                    <Checkbox
                      id={req.id}
                      checked={cmmcChecklist[req.id] || false}
                      onCheckedChange={(checked) => 
                        setCmmcChecklist(prev => ({ ...prev, [req.id]: checked as boolean }))
                      }
                    />
                    <Label htmlFor={req.id} className="cursor-pointer flex-1">
                      <div className="font-semibold text-sm">{req.category}</div>
                      <div className="text-sm text-muted-foreground">{req.item}</div>
                    </Label>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={() => toast.info('Full assessment report coming soon')} 
                  variant="outline" 
                  className="flex-1"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export Progress Report
                </Button>
                <Link href="/contact">
                  <Button>
                    Get Professional Assessment
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ROI Calculators */}
      <section id="calculators" className="py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ROI Calculators</h2>
            <p className="text-xl text-muted-foreground">
              Calculate potential return on investment for your IT modernization initiatives
            </p>
          </div>

          <Tabs defaultValue="cloud" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="cloud">Cloud Migration ROI</TabsTrigger>
              <TabsTrigger value="automation">Automation ROI</TabsTrigger>
            </TabsList>

            {/* Cloud Migration Calculator */}
            <TabsContent value="cloud">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cloud className="h-6 w-6 text-accent mr-3" />
                      Cloud Migration Inputs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="current-cost">Current Annual Infrastructure Cost ($)</Label>
                      <Input
                        id="current-cost"
                        type="number"
                        placeholder="500000"
                        value={cloudInputs.currentInfrastructureCost}
                        onChange={(e) => setCloudInputs({...cloudInputs, currentInfrastructureCost: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="fte-maintenance">FTEs for Infrastructure Maintenance</Label>
                      <Input
                        id="fte-maintenance"
                        type="number"
                        placeholder="3"
                        value={cloudInputs.fteMaintenance}
                        onChange={(e) => setCloudInputs({...cloudInputs, fteMaintenance: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="downtime">Downtime Hours per Year</Label>
                      <Input
                        id="downtime"
                        type="number"
                        placeholder="40"
                        value={cloudInputs.downtimeHoursYear}
                        onChange={(e) => setCloudInputs({...cloudInputs, downtimeHoursYear: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="hourly-cost">Average Hourly Cost of Downtime ($)</Label>
                      <Input
                        id="hourly-cost"
                        type="number"
                        placeholder="5000"
                        value={cloudInputs.avgHourlyCost}
                        onChange={(e) => setCloudInputs({...cloudInputs, avgHourlyCost: e.target.value})}
                      />
                    </div>
                    <Button onClick={calculateCloudROI} className="w-full bg-orange-gradient">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate Cloud ROI
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-6 w-6 text-accent mr-3" />
                      Projected ROI Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {cloudROI ? (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-secondary rounded-lg">
                            <DollarSign className="h-6 w-6 text-accent mx-auto mb-2" />
                            <div className="text-2xl font-bold text-accent">${parseInt(cloudROI.totalAnnualSavings).toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">Annual Savings</div>
                          </div>
                          <div className="text-center p-4 bg-secondary rounded-lg">
                            <TrendingUp className="h-6 w-6 text-accent mx-auto mb-2" />
                            <div className="text-2xl font-bold text-accent">{cloudROI.roi}%</div>
                            <div className="text-xs text-muted-foreground">3-Year ROI</div>
                          </div>
                          <div className="text-center p-4 bg-secondary rounded-lg">
                            <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                            <div className="text-2xl font-bold text-accent">{cloudROI.paybackMonths}</div>
                            <div className="text-xs text-muted-foreground">Payback (Months)</div>
                          </div>
                          <div className="text-center p-4 bg-secondary rounded-lg">
                            <DollarSign className="h-6 w-6 text-accent mx-auto mb-2" />
                            <div className="text-2xl font-bold text-accent">${parseInt(cloudROI.threeYearSavings).toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">3-Year Savings</div>
                          </div>
                        </div>

                        <div className="space-y-3 pt-4 border-t">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Infrastructure Cost Reduction:</span>
                            <span className="font-semibold">${parseInt(cloudROI.infrastructureSavings).toLocaleString()}/year</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">FTE Savings:</span>
                            <span className="font-semibold">${parseInt(cloudROI.fteSavings).toLocaleString()}/year</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Downtime Reduction:</span>
                            <span className="font-semibold">${parseInt(cloudROI.downtimeSavings).toLocaleString()}/year</span>
                          </div>
                          <div className="flex justify-between text-sm pt-3 border-t">
                            <span className="text-muted-foreground">Estimated Migration Cost:</span>
                            <span className="font-semibold">${parseInt(cloudROI.migrationCost).toLocaleString()}</span>
                          </div>
                        </div>

                        <Link href="/contact">
                          <Button className="w-full">
                            Get Detailed Assessment
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    ) : (
                      <div className="text-center py-12 text-muted-foreground">
                        <Calculator className="h-16 w-16 mx-auto mb-4 opacity-20" />
                        <p>Enter your current infrastructure details to calculate potential ROI</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Automation Calculator */}
            <TabsContent value="automation">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-6 w-6 text-accent mr-3" />
                      Automation Inputs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="processes">Manual Processes per Month</Label>
                      <Input
                        id="processes"
                        type="number"
                        placeholder="1000"
                        value={automationInputs.processesPerMonth}
                        onChange={(e) => setAutomationInputs({...automationInputs, processesPerMonth: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="minutes">Average Minutes per Process</Label>
                      <Input
                        id="minutes"
                        type="number"
                        placeholder="15"
                        value={automationInputs.minutesPerProcess}
                        onChange={(e) => setAutomationInputs({...automationInputs, minutesPerProcess: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="rate">FTE Hourly Rate ($)</Label>
                      <Input
                        id="rate"
                        type="number"
                        placeholder="45"
                        value={automationInputs.fteHourlyRate}
                        onChange={(e) => setAutomationInputs({...automationInputs, fteHourlyRate: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="error-rate">Current Error Rate (%)</Label>
                      <Input
                        id="error-rate"
                        type="number"
                        placeholder="5"
                        value={automationInputs.errorRate}
                        onChange={(e) => setAutomationInputs({...automationInputs, errorRate: e.target.value})}
                      />
                    </div>
                    <Button onClick={calculateAutomationROI} className="w-full bg-orange-gradient">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate Automation ROI
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-6 w-6 text-accent mr-3" />
                      Projected ROI Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {automationROI ? (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-secondary rounded-lg">
                            <DollarSign className="h-6 w-6 text-accent mx-auto mb-2" />
                            <div className="text-2xl font-bold text-accent">${parseInt(automationROI.totalAnnualSavings).toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">Annual Savings</div>
                          </div>
                          <div className="text-center p-4 bg-secondary rounded-lg">
                            <TrendingUp className="h-6 w-6 text-accent mx-auto mb-2" />
                            <div className="text-2xl font-bold text-accent">{automationROI.roi}%</div>
                            <div className="text-xs text-muted-foreground">3-Year ROI</div>
                          </div>
                          <div className="text-center p-4 bg-secondary rounded-lg">
                            <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                            <div className="text-2xl font-bold text-accent">{automationROI.paybackMonths}</div>
                            <div className="text-xs text-muted-foreground">Payback (Months)</div>
                          </div>
                          <div className="text-center p-4 bg-secondary rounded-lg">
                            <Users className="h-6 w-6 text-accent mx-auto mb-2" />
                            <div className="text-2xl font-bold text-accent">{automationROI.hoursPerMonth}</div>
                            <div className="text-xs text-muted-foreground">Hours Saved/Month</div>
                          </div>
                        </div>

                        <div className="space-y-3 pt-4 border-t">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Time Savings (85% reduction):</span>
                            <span className="font-semibold">${parseInt(automationROI.timeSavings).toLocaleString()}/year</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Error Reduction (90%):</span>
                            <span className="font-semibold">${parseInt(automationROI.errorReduction).toLocaleString()}/year</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Productivity Gains:</span>
                            <span className="font-semibold">${parseInt(automationROI.productivityGain).toLocaleString()}/year</span>
                          </div>
                          <div className="flex justify-between text-sm pt-3 border-t">
                            <span className="text-muted-foreground">Estimated Implementation Cost:</span>
                            <span className="font-semibold">${parseInt(automationROI.implementationCost).toLocaleString()}</span>
                          </div>
                        </div>

                        <Link href="/contact">
                          <Button className="w-full">
                            Get Detailed Assessment
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    ) : (
                      <div className="text-center py-12 text-muted-foreground">
                        <Calculator className="h-16 w-16 mx-auto mb-4 opacity-20" />
                        <p>Enter your process details to calculate automation ROI</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Procurement Guides */}
      <section id="procurement" className="py-20 bg-secondary">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Procurement Process Guides</h2>
            <p className="text-xl text-muted-foreground">
              Navigate federal and state/local procurement processes effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Federal Procurement Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Understanding FAR, GSA Schedules, and federal contract vehicles for efficient IT procurement.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">GSA Schedule procurement process</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">IDIQ and BPA contract vehicles</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Set-aside contracts (8(a), SDVOSB, WOSB)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Past performance evaluation criteria</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Compliance and security requirements</span>
                  </div>
                </div>
                <Button onClick={() => downloadGuide('Federal Procurement Guide')} variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Federal Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>State & Local Procurement Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Navigating cooperative purchasing, state master agreements, and local procurement requirements.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Cooperative purchasing contracts (NASPO, Sourcewell)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">State master agreement process</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Local vendor preferences and requirements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">State-specific compliance (StateRAMP, CJIS)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-foreground mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">RFP response best practices</span>
                  </div>
                </div>
                <Button onClick={() => downloadGuide('State/Local Procurement Guide')} variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download State/Local Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Expert Guidance?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our government IT consulting team can provide personalized assessments, compliance support, and implementation planning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Consultation
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
      </section>

      <Footer />
    </div>
  );
}
