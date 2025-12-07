import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  FileText, Download, Shield, Calculator, 
  BookOpen, ClipboardCheck, TrendingUp, Cloud, Lock,
  DollarSign, Clock, Users, ArrowRight, Building2,
  CheckCircle2, AlertCircle, BarChart3, Target, Info, Circle
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
  const [roiScenario, setRoiScenario] = useState<'conservative' | 'moderate' | 'aggressive'>('moderate');

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

    // Scenario-based assumptions (based on DHS research)
    const scenarios = {
      conservative: {
        infrastructureReduction: 0.25,  // 25% cost reduction
        fteReduction: 0.40,             // 40% FTE reduction
        downtimeReduction: 0.60,        // 60% downtime reduction
        migrationCostMultiplier: 0.22,  // 22% of annual cost
        productivityGain: 0.10          // 10% productivity gain
      },
      moderate: {
        infrastructureReduction: 0.35,  // 35% cost reduction
        fteReduction: 0.50,             // 50% FTE reduction
        downtimeReduction: 0.70,        // 70% downtime reduction
        migrationCostMultiplier: 0.18,  // 18% of annual cost
        productivityGain: 0.15          // 15% productivity gain
      },
      aggressive: {
        infrastructureReduction: 0.45,  // 45% cost reduction
        fteReduction: 0.60,             // 60% FTE reduction
        downtimeReduction: 0.80,        // 80% downtime reduction
        migrationCostMultiplier: 0.15,  // 15% of annual cost
        productivityGain: 0.20          // 20% productivity gain
      }
    };

    const scenario = scenarios[roiScenario];

    // Calculate savings
    const cloudCost = current * (1 - scenario.infrastructureReduction);
    const infrastructureSavings = current - cloudCost;

    // FTE savings: reduction percentage * 2080 hours/year * $75/hour average
    const fteSavings = (fte * scenario.fteReduction) * 2080 * 75;

    // Downtime reduction savings
    const downtimeSavings = (downtime * scenario.downtimeReduction) * hourlyCost;

    // Productivity gains from faster deployment and scalability
    const productivityGains = (infrastructureSavings + fteSavings) * scenario.productivityGain;

    const totalAnnualSavings = infrastructureSavings + fteSavings + downtimeSavings + productivityGains;
    const threeYearSavings = totalAnnualSavings * 3;
    
    // Migration cost
    const migrationCost = current * scenario.migrationCostMultiplier;
    const netSavings = threeYearSavings - migrationCost;
    const roi = ((netSavings / migrationCost) * 100).toFixed(0);
    const paybackMonths = ((migrationCost / totalAnnualSavings) * 12).toFixed(1);

    setCloudROI({
      infrastructureSavings: infrastructureSavings.toFixed(0),
      fteSavings: fteSavings.toFixed(0),
      downtimeSavings: downtimeSavings.toFixed(0),
      productivityGains: productivityGains.toFixed(0),
      totalAnnualSavings: totalAnnualSavings.toFixed(0),
      threeYearSavings: threeYearSavings.toFixed(0),
      migrationCost: migrationCost.toFixed(0),
      netSavings: netSavings.toFixed(0),
      roi,
      paybackMonths,
      scenario: roiScenario
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

    // Scenario-based assumptions (based on government automation research)
    const scenarios = {
      conservative: {
        timeReduction: 0.75,      // 75% time reduction
        errorReduction: 0.85,     // 85% error reduction
        productivityGain: 0.12,   // 12% productivity gain
        implementationMultiplier: 0.55  // 55% of first-year savings
      },
      moderate: {
        timeReduction: 0.85,      // 85% time reduction
        errorReduction: 0.90,     // 90% error reduction
        productivityGain: 0.15,   // 15% productivity gain
        implementationMultiplier: 0.45  // 45% of first-year savings
      },
      aggressive: {
        timeReduction: 0.92,      // 92% time reduction
        errorReduction: 0.95,     // 95% error reduction
        productivityGain: 0.20,   // 20% productivity gain
        implementationMultiplier: 0.35  // 35% of first-year savings
      }
    };

    const scenario = scenarios[roiScenario];

    // Calculate time savings
    const hoursPerMonth = (processes * minutes) / 60;
    const annualHours = hoursPerMonth * 12;
    const timeSavings = annualHours * hourlyRate * scenario.timeReduction;

    // Calculate error reduction savings
    const errorCostPerProcess = 25; // Average $25 per error to fix (government context)
    const currentErrorCost = (processes * 12) * (errorRate / 100) * errorCostPerProcess;
    const errorReduction = currentErrorCost * scenario.errorReduction;

    // Calculate productivity gains
    const productivityGain = timeSavings * scenario.productivityGain;

    // Compliance and audit benefits (10% of time savings)
    const complianceBenefits = timeSavings * 0.10;

    const totalAnnualSavings = timeSavings + errorReduction + productivityGain + complianceBenefits;
    const threeYearSavings = totalAnnualSavings * 3;
    
    // Implementation cost
    const implementationCost = totalAnnualSavings * scenario.implementationMultiplier;
    const netSavings = threeYearSavings - implementationCost;
    const roi = ((netSavings / implementationCost) * 100).toFixed(0);
    const paybackMonths = ((implementationCost / totalAnnualSavings) * 12).toFixed(1);

    setAutomationROI({
      timeSavings: timeSavings.toFixed(0),
      errorReduction: errorReduction.toFixed(0),
      productivityGain: productivityGain.toFixed(0),
      complianceBenefits: complianceBenefits.toFixed(0),
      totalAnnualSavings: totalAnnualSavings.toFixed(0),
      threeYearSavings: threeYearSavings.toFixed(0),
      implementationCost: implementationCost.toFixed(0),
      netSavings: netSavings.toFixed(0),
      roi,
      paybackMonths,
      hoursPerMonth: hoursPerMonth.toFixed(0),
      scenario: roiScenario
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

      {/* Hero Section - RUXI Rule #2: Government Agency Positioning */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Building2 className="h-4 w-4" />
              Trusted by Federal, State & Local Government Agencies
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Government Resources Hub
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Comprehensive tools, compliance guides, and ROI calculators designed specifically for government agencies navigating digital transformation, cloud migration, and cybersecurity compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#calculators">
                <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                  Explore ROI Calculators
                  <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#guides">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  <span className="transition-colors duration-300 group-hover:text-accent">HIPAA Compliance Guide</span>
                  <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links - Editorial Style */}
      <section className="py-16 bg-background border-t">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            <a href="#guides" className="group block border-b border-border pb-6 transition-all duration-300 hover:border-accent">
              <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-accent">Compliance Guides</h3>
              <p className="text-muted-foreground">FedRAMP, CMMC, StateRAMP</p>
            </a>
            <a href="#checklists" className="group block border-b border-border pb-6 transition-all duration-300 hover:border-accent">
              <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-accent">Interactive Checklists</h3>
              <p className="text-muted-foreground">Readiness assessments</p>
            </a>
            <a href="#calculators" className="group block border-b border-border pb-6 transition-all duration-300 hover:border-accent">
              <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-accent">ROI Calculators</h3>
              <p className="text-muted-foreground">Cloud, automation, security</p>
            </a>
            <a href="#procurement" className="group block border-b border-border pb-6 transition-all duration-300 hover:border-accent">
              <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-accent">Procurement Guides</h3>
              <p className="text-muted-foreground">Federal & state/local</p>
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
            <Card className="border-2 transition-all duration-300 hover:border-accent group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-foreground mr-3 transition-colors duration-300 group-hover:text-accent" />
                  <span className="transition-colors duration-300 group-hover:text-accent">FedRAMP ATO Process Guide</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Comprehensive guide to achieving FedRAMP Authorization to Operate (ATO) for cloud service providers and government agencies implementing cloud solutions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">FedRAMP authorization levels (Low, Moderate, High)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">System Security Plan (SSP) development</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Security assessment and authorization process</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Continuous monitoring requirements</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
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
            <Card className="border-2 transition-all duration-300 hover:border-accent group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-6 w-6 text-foreground mr-3 transition-colors duration-300 group-hover:text-accent" />
                  <span className="transition-colors duration-300 group-hover:text-accent">CMMC Readiness Guide</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Prepare your organization for Cybersecurity Maturity Model Certification (CMMC) required for DoD contractors handling Controlled Unclassified Information (CUI).
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">CMMC Level 2 and Level 3 requirements</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">NIST 800-171 compliance mapping</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Gap assessment and remediation planning</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Third-party assessment preparation</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
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
            <Card className="border-2 transition-all duration-300 hover:border-accent group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-foreground mr-3 transition-colors duration-300 group-hover:text-accent" />
                  <span className="transition-colors duration-300 group-hover:text-accent">StateRAMP Compliance Guide</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Navigate StateRAMP authorization for cloud service providers serving state and local government agencies with security requirements.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">StateRAMP authorization process overview</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Differences from FedRAMP requirements</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">State-specific compliance requirements</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Security control implementation</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
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
            <Card className="border-2 transition-all duration-300 hover:border-accent group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-6 w-6 text-foreground mr-3 transition-colors duration-300 group-hover:text-accent" />
                  <span className="transition-colors duration-300 group-hover:text-accent">CJIS Compliance Guide</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Ensure compliance with Criminal Justice Information Services (CJIS) Security Policy for law enforcement and public safety agencies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">CJIS Security Policy requirements</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Personnel screening and training</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Advanced authentication requirements</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Audit logging and monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
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

      {/* StateRAMP vs FedRAMP Comparison */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">StateRAMP vs. FedRAMP: Strategic Comparison</h2>
            <p className="text-xl text-muted-foreground">
              Understanding the key differences to make informed cloud security authorization decisions
            </p>
          </div>

          {/* Overview Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 transition-all duration-300 hover:border-accent group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-foreground mr-3 transition-colors duration-300 group-hover:text-accent" />
                  <span className="transition-colors duration-300 group-hover:text-accent">FedRAMP (Federal)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  The Federal Risk and Authorization Management Program standardizes cloud security assessment and authorization for <strong>federal government agencies</strong>.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Mandatory</strong> for federal agencies</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Managed by GSA (General Services Administration)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Timeline: <strong>12-18 months</strong> typical</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Cost: <strong>$250K-$3M+</strong> (by impact level)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Access to $50B+ federal cloud market</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all duration-300 hover:border-accent group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="h-6 w-6 text-foreground mr-3 transition-colors duration-300 group-hover:text-accent" />
                  <span className="transition-colors duration-300 group-hover:text-accent">StateRAMP (State & Local)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  StateRAMP provides FedRAMP-equivalent security authorization for cloud services used by <strong>state and local government agencies</strong>.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Preferred</strong> by state/local agencies</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Managed by non-profit organization</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Timeline: <strong>4-6 months</strong> typical</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Cost: <strong>30-50% less</strong> than FedRAMP</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">"Authorize once, use many times" across states</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Comparison Table */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Detailed Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Feature</th>
                      <th className="text-left p-3 font-semibold">FedRAMP</th>
                      <th className="text-left p-3 font-semibold">StateRAMP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Primary Customer</td>
                      <td className="p-3">Federal government agencies</td>
                      <td className="p-3">State and local governments, educational institutions</td>
                    </tr>
                    <tr className="border-b bg-secondary/30">
                      <td className="p-3 font-medium">Governing Body</td>
                      <td className="p-3">GSA (federal mandate)</td>
                      <td className="p-3">Non-profit organization (not federal)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Authorization Process</td>
                      <td className="p-3">JAB P-ATO or Agency ATO</td>
                      <td className="p-3">Simplified, state-level authorization</td>
                    </tr>
                    <tr className="border-b bg-secondary/30">
                      <td className="p-3 font-medium">Security Baseline</td>
                      <td className="p-3">NIST SP 800-53 (federal)</td>
                      <td className="p-3">NIST SP 800-53 (same baseline)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Timeline</td>
                      <td className="p-3">12-18 months (can extend to 24+)</td>
                      <td className="p-3">4-6 months (faster pathway)</td>
                    </tr>
                    <tr className="border-b bg-secondary/30">
                      <td className="p-3 font-medium">Initial Cost</td>
                      <td className="p-3">$250K-$3M+ (by impact level)</td>
                      <td className="p-3">$150K-$400K (30-50% less)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Annual Maintenance</td>
                      <td className="p-3">$100K-$1M+ (continuous monitoring)</td>
                      <td className="p-3">Lower ongoing costs</td>
                    </tr>
                    <tr className="border-b bg-secondary/30">
                      <td className="p-3 font-medium">Authorization Expiration</td>
                      <td className="p-3">Annual reassessment required</td>
                      <td className="p-3">StateRAMP Ready status does not expire</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Fast Track Option</td>
                      <td className="p-3">N/A</td>
                      <td className="p-3">Yes, for FedRAMP-authorized CSPs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Decision Guide */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="border-2 transition-all duration-300 hover:border-accent group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 text-foreground mr-3" />
                  When to Choose FedRAMP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span>Serving federal agencies (mandatory requirement)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span>Targeting broad federal market access</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span>Handling federal data classification needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span>Multi-year federal contracts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all duration-300 hover:border-accent group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 text-foreground mr-3" />
                  When to Choose StateRAMP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span>Serving state and local government agencies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span>Cost-effective authorization pathway</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span>Faster market entry (4-6 months)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span>Regional or state-specific operations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* State-Specific Programs */}
          <Card className="border-2 mt-8">
            <CardHeader>
              <CardTitle>State-Specific RAMP Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Several states have developed their own versions of StateRAMP tailored to local requirements:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="font-semibold mb-1">TX-RAMP</div>
                  <div className="text-xs text-muted-foreground">Texas Department of Information Resources</div>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="font-semibold mb-1">AZ-RAMP</div>
                  <div className="text-xs text-muted-foreground">Arizona Department of Administration</div>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="font-semibold mb-1">GA-RAMP</div>
                  <div className="text-xs text-muted-foreground">Georgia Technology Authority</div>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="font-semibold mb-1">OH-RAMP</div>
                  <div className="text-xs text-muted-foreground">Ohio state-specific framework</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Get FedRAMP/StateRAMP Guidance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
                    <ClipboardCheck className="h-6 w-6 text-foreground mr-3" />
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

          {/* Scenario Selector */}
          <Card className="mb-8 border-2 bg-secondary/50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-foreground" />
                    <h3 className="font-semibold text-lg">ROI Scenario</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Select an assumption scenario based on your organization's risk tolerance and transformation goals.
                  </p>
                </div>
                <div className="w-full md:w-64">
                  <Select value={roiScenario} onValueChange={(value: any) => setRoiScenario(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select scenario" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conservative">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          <span>Conservative</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="moderate">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4" />
                          <span>Moderate (Recommended)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="aggressive">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          <span>Aggressive</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4 grid md:grid-cols-3 gap-3 text-xs">
                <div className="flex items-start gap-2 p-3 bg-background rounded-lg">
                  <Info className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Conservative</div>
                    <div className="text-muted-foreground">Lower savings estimates, higher implementation costs. Best for risk-averse organizations.</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-background rounded-lg">
                  <Info className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Moderate</div>
                    <div className="text-muted-foreground">Industry-standard assumptions based on government agency benchmarks.</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-background rounded-lg">
                  <Info className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Aggressive</div>
                    <div className="text-muted-foreground">Higher savings potential with optimized implementation. Requires strong change management.</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="cloud" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="cloud">Cloud Migration ROI</TabsTrigger>
              <TabsTrigger value="automation">Automation ROI</TabsTrigger>
            </TabsList>

            {/* Cloud Migration Calculator */}
            <TabsContent value="cloud">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-2 transition-all duration-300 hover:border-accent group">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cloud className="h-6 w-6 text-foreground mr-3 transition-colors duration-300 group-hover:text-accent" />
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

                <Card className="border-2 transition-all duration-300 hover:border-accent group">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-6 w-6 text-foreground mr-3 transition-colors duration-300 group-hover:text-accent" />
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
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Productivity Gains:</span>
                            <span className="font-semibold">${parseInt(cloudROI.productivityGains).toLocaleString()}/year</span>
                          </div>
                          <div className="flex justify-between text-sm pt-3 border-t">
                            <span className="text-muted-foreground">Estimated Migration Cost:</span>
                            <span className="font-semibold">${parseInt(cloudROI.migrationCost).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground pt-2">
                            <span>Scenario: {cloudROI.scenario.charAt(0).toUpperCase() + cloudROI.scenario.slice(1)}</span>
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
                <Card className="border-2 transition-all duration-300 hover:border-accent group">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-6 w-6 text-foreground mr-3" />
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

                <Card className="border-2 transition-all duration-300 hover:border-accent group">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-6 w-6 text-foreground mr-3 transition-colors duration-300 group-hover:text-accent" />
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
                            <span className="text-muted-foreground">Time Savings:</span>
                            <span className="font-semibold">${parseInt(automationROI.timeSavings).toLocaleString()}/year</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Error Reduction:</span>
                            <span className="font-semibold">${parseInt(automationROI.errorReduction).toLocaleString()}/year</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Productivity Gains:</span>
                            <span className="font-semibold">${parseInt(automationROI.productivityGain).toLocaleString()}/year</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Compliance & Audit Benefits:</span>
                            <span className="font-semibold">${parseInt(automationROI.complianceBenefits).toLocaleString()}/year</span>
                          </div>
                          <div className="flex justify-between text-sm pt-3 border-t">
                            <span className="text-muted-foreground">Estimated Implementation Cost:</span>
                            <span className="font-semibold">${parseInt(automationROI.implementationCost).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground pt-2">
                            <span>Scenario: {automationROI.scenario.charAt(0).toUpperCase() + automationROI.scenario.slice(1)}</span>
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
            <Card className="border-2 transition-all duration-300 hover:border-accent group">
              <CardHeader>
                <CardTitle className="transition-colors duration-300 group-hover:text-accent">Federal Procurement Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Understanding FAR, GSA Schedules, and federal contract vehicles for efficient IT procurement.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">GSA Schedule procurement process</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">IDIQ and BPA contract vehicles</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Set-aside contracts (8(a), SDVOSB, WOSB)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Past performance evaluation criteria</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Compliance and security requirements</span>
                  </div>
                </div>
                <Button onClick={() => downloadGuide('Federal Procurement Guide')} variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Federal Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all duration-300 hover:border-accent group">
              <CardHeader>
                <CardTitle className="transition-colors duration-300 group-hover:text-accent">State & Local Procurement Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Navigating cooperative purchasing, state master agreements, and local procurement requirements.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Cooperative purchasing contracts (NASPO, Sourcewell)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">State master agreement process</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">Local vendor preferences and requirements</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-sm">State-specific compliance (StateRAMP, CJIS)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mr-3 mt-1.5 flex-shrink-0" />
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
