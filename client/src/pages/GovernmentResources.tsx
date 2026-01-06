import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import Breadcrumb from '@/components/Breadcrumb';

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

    const scenarios = {
      conservative: { infrastructureReduction: 0.25, fteReduction: 0.40, downtimeReduction: 0.60, migrationCostMultiplier: 0.22, productivityGain: 0.10 },
      moderate: { infrastructureReduction: 0.35, fteReduction: 0.50, downtimeReduction: 0.70, migrationCostMultiplier: 0.18, productivityGain: 0.15 },
      aggressive: { infrastructureReduction: 0.45, fteReduction: 0.60, downtimeReduction: 0.80, migrationCostMultiplier: 0.15, productivityGain: 0.20 }
    };
    const scenario = scenarios[roiScenario];

    const cloudCost = current * (1 - scenario.infrastructureReduction);
    const infrastructureSavings = current - cloudCost;
    const fteSavings = (fte * scenario.fteReduction) * 2080 * 75;
    const downtimeSavings = (downtime * scenario.downtimeReduction) * hourlyCost;
    const productivityGains = (infrastructureSavings + fteSavings) * scenario.productivityGain;
    const totalAnnualSavings = infrastructureSavings + fteSavings + downtimeSavings + productivityGains;
    const threeYearSavings = totalAnnualSavings * 3;
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

    const scenarios = {
      conservative: { timeReduction: 0.75, errorReduction: 0.85, productivityGain: 0.12, implementationMultiplier: 0.55 },
      moderate: { timeReduction: 0.85, errorReduction: 0.90, productivityGain: 0.15, implementationMultiplier: 0.45 },
      aggressive: { timeReduction: 0.92, errorReduction: 0.95, productivityGain: 0.20, implementationMultiplier: 0.35 }
    };
    const scenario = scenarios[roiScenario];

    const hoursPerMonth = (processes * minutes) / 60;
    const annualHours = hoursPerMonth * 12;
    const timeSavings = annualHours * hourlyRate * scenario.timeReduction;
    const errorCostPerProcess = 25;
    const currentErrorCost = (processes * 12) * (errorRate / 100) * errorCostPerProcess;
    const errorReduction = currentErrorCost * scenario.errorReduction;
    const productivityGain = timeSavings * scenario.productivityGain;
    const complianceBenefits = timeSavings * 0.10;
    const totalAnnualSavings = timeSavings + errorReduction + productivityGain + complianceBenefits;
    const threeYearSavings = totalAnnualSavings * 3;
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative py-28 text-white bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85">
          <div
            className="absolute inset-0 bg-[url('/img/patterns/hero-pattern.svg')] opacity-5"
            style={{ backgroundSize: '400px' }}
          ></div>
          <div className="container relative">
            <div className="max-w-4xl text-center mx-auto">
              <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
                Government & Public Sector
              </p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
              >
                Modernizing Government Technology
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10"
              >
                Nexdyne provides secure, compliant, and efficient technology solutions to help federal, state, and local government agencies better serve their communities.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-4 justify-center"
              >
                <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 hover:text-white">
                  <Link href="#solutions">Explore Solutions</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 bg-[oklch(0.97_0.01_250)]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
              <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Core Government Solutions</h2>
              <p className="text-lg text-slate-600">
                We deliver specialized solutions to address the unique challenges of public sector organizations, focusing on security, compliance, and digital transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[oklch(0.20_0.05_250)]">Cloud & Infrastructure Modernization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">Securely migrate to the cloud, optimize infrastructure, and enhance operational efficiency with FedRAMP and StateRAMP compliant solutions.</p>
                  <Button variant="link" asChild className="p-0 text-[oklch(0.65_0.18_55)] hover:text-[oklch(0.65_0.18_55)]/80">
                    <Link href="#calculators">Calculate Cloud ROI <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[oklch(0.20_0.05_250)]">Automation & Process Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">Automate repetitive tasks, streamline workflows, and reduce errors to improve service delivery and free up valuable personnel resources.</p>
                  <Button variant="link" asChild className="p-0 text-[oklch(0.65_0.18_55)] hover:text-[oklch(0.65_0.18_55)]/80">
                    <Link href="#calculators">Estimate Automation Savings <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[oklch(0.20_0.05_250)]">Compliance & Security Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">Navigate complex regulatory landscapes like CMMC, FedRAMP, and StateRAMP with our automated compliance and continuous monitoring tools.</p>
                  <Button variant="link" asChild className="p-0 text-[oklch(0.65_0.18_55)] hover:text-[oklch(0.65_0.18_55)]/80">
                    <Link href="#checklists">Assess CMMC Readiness <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks Section */}
        <section id="frameworks" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Compliance Frameworks</p>
              <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">FedRAMP vs. StateRAMP</h2>
              <p className="text-lg text-slate-600">
                Understand the key differences between federal and state-level cloud security authorizations to choose the right path for your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
              <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[oklch(0.20_0.05_250)]">FedRAMP (Federal)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">The Federal Risk and Authorization Management Program standardizes cloud security for <strong>federal government agencies</strong>.</p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span><span><strong>Mandatory</strong> for federal agencies</span></li>
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span><span>Managed by GSA (General Services Administration)</span></li>
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span><span>Timeline: <strong>12-18 months</strong> typical</span></li>
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span><span>Cost: <strong>$250K-$3M+</strong> (by impact level)</span></li>
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span><span>Access to $50B+ federal cloud market</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[oklch(0.20_0.05_250)]">StateRAMP (State & Local)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">StateRAMP provides a standardized security framework for cloud services used by <strong>state and local governments</strong>.</p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span><span><strong>Preferred</strong> by state/local agencies</span></li>
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span><span>Managed by a non-profit organization</span></li>
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span><span>Timeline: <strong>4-6 months</strong> typical</span></li>
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span><span>Cost: <strong>30-50% less</strong> than FedRAMP</span></li>
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span><span>"Authorize once, use many times" across states</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-[oklch(0.22_0.06_250)] text-white hover:bg-[oklch(0.22_0.06_250)]/90">
                <Link href="/contact">Get FedRAMP/StateRAMP Guidance <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Interactive Checklists */}
        <section id="checklists" className="py-20 bg-[oklch(0.97_0.01_250)]">
          <div className="container max-w-4xl">
            <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
              <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Interactive Compliance Checklists</h2>
              <p className="text-lg text-slate-600">Track your compliance readiness for CMMC Level 2 with our interactive checklist.</p>
            </div>

            <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-[oklch(0.20_0.05_250)] mb-2">CMMC Level 2 Readiness Checklist</CardTitle>
                    <p className="text-slate-600">Track your progress toward CMMC Level 2 certification requirements.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[oklch(0.65_0.18_55)]">{cmmcProgress.toFixed(0)}%</div>
                    <div className="text-sm text-slate-500">Complete</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div 
                    className="bg-[oklch(0.65_0.18_55)] h-3 rounded-full transition-all duration-300"
                    style={{ width: `${cmmcProgress}%` }}
                  />
                </div>

                <div className="space-y-3 max-h-96 overflow-y-auto p-1">
                  {cmmcRequirements.map((req) => (
                    <div key={req.id} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                      <Checkbox
                        id={req.id}
                        checked={cmmcChecklist[req.id] || false}
                        onCheckedChange={(checked) => 
                          setCmmcChecklist(prev => ({ ...prev, [req.id]: checked as boolean }))
                        }
                      />
                      <Label htmlFor={req.id} className="cursor-pointer flex-1">
                        <div className="font-semibold text-sm text-[oklch(0.20_0.05_250)]">{req.category}</div>
                        <div className="text-sm text-slate-600">{req.item}</div>
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ROI Calculators */}
        <section id="calculators" className="py-20 bg-white">
          <div className="container max-w-6xl">
            <div className="text-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
              <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">ROI Calculators</p>
              <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">Justify Your IT Modernization</h2>
              <p className="text-lg text-slate-600">Calculate the potential return on investment for your cloud migration and process automation initiatives.</p>
            </div>

            <Card className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 border-2 border-slate-200 bg-[oklch(0.97_0.01_250)]">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-[oklch(0.20_0.05_250)] mb-1">ROI Scenario</h3>
                    <p className="text-sm text-slate-600">Select an assumption scenario based on your organization's risk tolerance and transformation goals.</p>
                  </div>
                  <div className="w-full md:w-64">
                    <Select value={roiScenario} onValueChange={(value: any) => setRoiScenario(value)}>
                      <SelectTrigger><SelectValue placeholder="Select scenario" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conservative">Conservative</SelectItem>
                        <SelectItem value="moderate">Moderate (Recommended)</SelectItem>
                        <SelectItem value="aggressive">Aggressive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="cloud" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cloud">Cloud Migration ROI</TabsTrigger>
                <TabsTrigger value="automation">Process Automation ROI</TabsTrigger>
              </TabsList>
              <TabsContent value="cloud" className="mt-8">
                <Card className="bg-white border-2 border-slate-200">
                  <div className="grid md:grid-cols-2">
                    <div className="p-4 sm:p-6 md:p-8">
                      <h3 className="text-2xl font-semibold text-[oklch(0.20_0.05_250)] mb-6">Cloud Migration ROI Calculator</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="currentInfrastructureCost">Current Annual Infrastructure Cost ($)</Label>
                          <Input id="currentInfrastructureCost" type="number" placeholder="e.g., 500000" value={cloudInputs.currentInfrastructureCost} onChange={e => setCloudInputs({...cloudInputs, currentInfrastructureCost: e.target.value})} />
                        </div>
                        <div>
                          <Label htmlFor="fteMaintenance">FTEs for Infrastructure Maintenance</Label>
                          <Input id="fteMaintenance" type="number" placeholder="e.g., 5" value={cloudInputs.fteMaintenance} onChange={e => setCloudInputs({...cloudInputs, fteMaintenance: e.target.value})} />
                        </div>
                        <div>
                          <Label htmlFor="downtimeHoursYear">Annual Downtime Hours</Label>
                          <Input id="downtimeHoursYear" type="number" placeholder="e.g., 20" value={cloudInputs.downtimeHoursYear} onChange={e => setCloudInputs({...cloudInputs, downtimeHoursYear: e.target.value})} />
                        </div>
                        <div>
                          <Label htmlFor="avgHourlyCost">Average Hourly Cost of Downtime ($)</Label>
                          <Input id="avgHourlyCost" type="number" placeholder="e.g., 1500" value={cloudInputs.avgHourlyCost} onChange={e => setCloudInputs({...cloudInputs, avgHourlyCost: e.target.value})} />
                        </div>
                        <Button onClick={calculateCloudROI} className="w-full bg-[oklch(0.22_0.06_250)] text-white hover:bg-[oklch(0.22_0.06_250)]/90">Calculate ROI</Button>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 bg-[oklch(0.97_0.01_250)] rounded-r-lg">
                      <h3 className="text-2xl font-semibold text-[oklch(0.20_0.05_250)] mb-6">3-Year ROI Projection</h3>
                      {cloudROI ? (
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="font-semibold text-[oklch(0.20_0.05_250)]">3-Year Net Savings</span>
                            <span className="text-2xl font-bold text-[oklch(0.65_0.18_55)]">${new Intl.NumberFormat().format(cloudROI.netSavings)}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="font-semibold text-[oklch(0.20_0.05_250)]">Return on Investment (ROI)</span>
                            <span className="text-2xl font-bold text-[oklch(0.65_0.18_55)]">{cloudROI.roi}%</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="font-semibold text-[oklch(0.20_0.05_250)]">Payback Period</span>
                            <span className="text-2xl font-bold text-[oklch(0.65_0.18_55)]">{cloudROI.paybackMonths} months</span>
                          </div>
                          <p className="text-xs text-slate-500 text-center">Based on a {cloudROI.scenario} scenario.</p>
                        </div>
                      ) : (
                        <div className="text-center text-slate-500 py-16">Enter your data to see ROI projections.</div>
                      )}
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="automation" className="mt-8">
                <Card className="bg-white border-2 border-slate-200">
                  <div className="grid md:grid-cols-2">
                    <div className="p-4 sm:p-6 md:p-8">
                      <h3 className="text-2xl font-semibold text-[oklch(0.20_0.05_250)] mb-6">Process Automation ROI Calculator</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="processesPerMonth">Manual Processes per Month</Label>
                          <Input id="processesPerMonth" type="number" placeholder="e.g., 1000" value={automationInputs.processesPerMonth} onChange={e => setAutomationInputs({...automationInputs, processesPerMonth: e.target.value})} />
                        </div>
                        <div>
                          <Label htmlFor="minutesPerProcess">Minutes per Process</Label>
                          <Input id="minutesPerProcess" type="number" placeholder="e.g., 15" value={automationInputs.minutesPerProcess} onChange={e => setAutomationInputs({...automationInputs, minutesPerProcess: e.target.value})} />
                        </div>
                        <div>
                          <Label htmlFor="fteHourlyRate">FTE Average Hourly Rate ($)</Label>
                          <Input id="fteHourlyRate" type="number" placeholder="e.g., 45" value={automationInputs.fteHourlyRate} onChange={e => setAutomationInputs({...automationInputs, fteHourlyRate: e.target.value})} />
                        </div>
                        <div>
                          <Label htmlFor="errorRate">Manual Process Error Rate (%)</Label>
                          <Input id="errorRate" type="number" placeholder="e.g., 5" value={automationInputs.errorRate} onChange={e => setAutomationInputs({...automationInputs, errorRate: e.target.value})} />
                        </div>
                        <Button onClick={calculateAutomationROI} className="w-full bg-[oklch(0.22_0.06_250)] text-white hover:bg-[oklch(0.22_0.06_250)]/90">Calculate ROI</Button>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 bg-[oklch(0.97_0.01_250)] rounded-r-lg">
                      <h3 className="text-2xl font-semibold text-[oklch(0.20_0.05_250)] mb-6">3-Year ROI Projection</h3>
                      {automationROI ? (
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="font-semibold text-[oklch(0.20_0.05_250)]">3-Year Net Savings</span>
                            <span className="text-2xl font-bold text-[oklch(0.65_0.18_55)]">${new Intl.NumberFormat().format(automationROI.netSavings)}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="font-semibold text-[oklch(0.20_0.05_250)]">Return on Investment (ROI)</span>
                            <span className="text-2xl font-bold text-[oklch(0.65_0.18_55)]">{automationROI.roi}%</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="font-semibold text-[oklch(0.20_0.05_250)]">Payback Period</span>
                            <span className="text-2xl font-bold text-[oklch(0.65_0.18_55)]">{automationROI.paybackMonths} months</span>
                          </div>
                          <p className="text-xs text-slate-500 text-center">Based on a {automationROI.scenario} scenario.</p>
                        </div>
                      ) : (
                        <div className="text-center text-slate-500 py-16">Enter your data to see ROI projections.</div>
                      )}
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Modernize Your Agency?</h2>
            <p className="text-lg text-white/80 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Let's discuss your specific needs and how Nexdyne can help you achieve your modernization goals. Schedule a free consultation with our public sector experts today.
            </p>
            <Button asChild size="lg" className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
