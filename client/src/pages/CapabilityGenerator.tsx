import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Download, Mail, CheckCircle2, Building2, Shield, Award } from 'lucide-react';
import { toast } from 'sonner';
import Breadcrumb from '@/components/Breadcrumb';

export default function CapabilityGenerator() {
  const [agencyType, setAgencyType] = useState<'federal' | 'state-local'>('federal');
  const [selectedCompliance, setSelectedCompliance] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [generatedStatement, setGeneratedStatement] = useState<any>(null);

  const complianceOptions = {
    federal: [
      { id: 'fedramp', label: 'FedRAMP (Moderate/High)', description: 'Federal cloud security authorization' },
      { id: 'cmmc', label: 'CMMC Level 2/3', description: 'Defense contractor cybersecurity' },
      { id: 'nist-800-53', label: 'NIST 800-53', description: 'Federal security controls' },
      { id: 'nist-800-171', label: 'NIST 800-171', description: 'CUI protection requirements' },
      { id: 'fisma', label: 'FISMA', description: 'Federal information security' },
    ],
    'state-local': [
      { id: 'stateramp', label: 'StateRAMP', description: 'State cloud security authorization' },
      { id: 'cjis', label: 'CJIS', description: 'Criminal justice information security' },
      { id: 'hipaa', label: 'HIPAA', description: 'Healthcare data privacy' },
      { id: 'ferpa', label: 'FERPA', description: 'Education records privacy' },
      { id: 'state-privacy', label: 'State Privacy Laws', description: 'CCPA, GDPR-like requirements' },
    ]
  };

  const serviceOptions = [
    { id: 'cloud', label: 'Cloud Migration & Integration', icon: '☁️' },
    { id: 'cybersecurity', label: 'Cybersecurity & Compliance', icon: '🔒' },
    { id: 'data-analytics', label: 'Data Analytics & Intelligence', icon: '📊' },
    { id: 'automation', label: 'Intelligent Automation', icon: '⚙️' },
    { id: 'app-dev', label: 'Application Development', icon: '💻' },
    { id: 'digital-transformation', label: 'Digital Transformation', icon: '🚀' },
  ];

  const contractVehicles = {
    federal: [
      { name: 'GSA Schedule 70', number: 'GS-35F-0119Y', scope: 'IT Professional Services' },
      { name: 'GSA Schedule 84', number: 'GS-07F-0123X', scope: 'Law Enforcement & Security' },
      { name: 'SEWP V', number: 'NNG15SD21B', scope: 'NASA IT Procurement' },
      { name: 'NIH NITAAC CIO-SP3', number: 'HHSN316201200012W', scope: 'Health IT Solutions' },
    ],
    'state-local': [
      { name: 'NASPO ValuePoint', number: 'Cloud Solutions', scope: 'Multi-state cooperative' },
      { name: 'Sourcewell', number: '#012345-ABC', scope: 'Cooperative purchasing' },
      { name: 'OMNIA Partners', number: 'R191902', scope: 'Public sector procurement' },
      { name: 'State Master Agreements', number: 'Various', scope: 'State-specific contracts' },
    ]
  };

  const pastPerformance = {
    federal: [
      { agency: 'Department of Defense', contracts: 12, value: '$45M+', services: ['Cloud', 'Cybersecurity', 'Data Analytics'] },
      { agency: 'Department of Veterans Affairs', contracts: 8, value: '$28M+', services: ['Data Analytics', 'Automation', 'Cloud'] },
      { agency: 'Health & Human Services', contracts: 6, value: '$22M+', services: ['Data Analytics', 'Cloud', 'Integration'] },
      { agency: 'Intelligence Community', contracts: 4, value: '$35M+', services: ['Cybersecurity', 'Zero Trust', 'SOC'] },
    ],
    'state-local': [
      { agency: 'State Departments of Transportation', contracts: 8, value: '$6M+', services: ['Cloud', 'Data Analytics', 'Integration'] },
      { agency: 'State Health Departments', contracts: 7, value: '$5M+', services: ['Data Analytics', 'Cloud', 'Compliance'] },
      { agency: 'County Sheriff Departments', contracts: 6, value: '$4M+', services: ['Cybersecurity', 'CJIS', 'Cloud'] },
      { agency: 'Municipal Government', contracts: 4, value: '$3M+', services: ['Automation', 'Cloud', 'Integration'] },
    ]
  };

  const certifications = {
    federal: [
      'FedRAMP Implementation Partner',
      'CMMC Registered Practitioner',
      'ISO 27001:2022 Certified',
      'Cleared Personnel (Secret/TS-SCI)',
    ],
    'state-local': [
      'StateRAMP Implementation Partner',
      'CJIS Security Policy Compliant',
      'ISO 27001:2022 Certified',
      'State Vendor Certifications',
    ]
  };

  const handleComplianceToggle = (id: string) => {
    setSelectedCompliance(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const handleServiceToggle = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const generateStatement = () => {
    if (selectedServices.length === 0) {
      toast.error('Please select at least one service area');
      return;
    }

    const statement = {
      agencyType,
      compliance: selectedCompliance,
      services: selectedServices,
      contractVehicles: contractVehicles[agencyType],
      pastPerformance: pastPerformance[agencyType],
      certifications: certifications[agencyType],
      generatedDate: new Date().toLocaleDateString(),
    };

    setGeneratedStatement(statement);
    toast.success('Capability statement generated successfully!');
    
    // Scroll to preview
    setTimeout(() => {
      document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const downloadPDF = () => {
    toast.info('PDF generation feature coming soon. For now, please use the preview below and print to PDF.');
  };

  const emailStatement = () => {
    toast.info('Email feature coming soon. For now, please download the PDF and email manually.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Resources', href: '/resources' },
                  { label: 'Capability Generator' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Interactive Tool
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Capability Statement Generator
            </h1>
            <p className="text-base xs:text-lg sm:text-base xs:text-lg sm:text-xl md:text-2xl opacity-90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              Generate a customized capability statement tailored to your agency's specific needs, compliance requirements, and service areas. Get relevant past performance and contract vehicles instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Generator Form */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Step 1: Agency Type */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="h-6 w-6 text-accent mr-3" />
                    Step 1: Select Agency Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={agencyType} onValueChange={(value: any) => setAgencyType(value)}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:border-accent transition-colors cursor-pointer">
                      <RadioGroupItem value="federal" id="federal" />
                      <Label htmlFor="federal" className="cursor-pointer flex-1">
                        <div className="font-semibold">Federal Government</div>
                        <div className="text-sm text-muted-foreground">Government agencies, DoD, Intelligence Community</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:border-accent transition-colors cursor-pointer">
                      <RadioGroupItem value="state-local" id="state-local" />
                      <Label htmlFor="state-local" className="cursor-pointer flex-1">
                        <div className="font-semibold">State & Local Government</div>
                        <div className="text-sm text-muted-foreground">State agencies, counties, municipalities, education</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Step 2: Compliance Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-accent mr-3" />
                    Step 2: Compliance Requirements (Optional)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {complianceOptions[agencyType].map((option) => (
                      <div key={option.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:border-accent transition-colors">
                        <Checkbox
                          id={option.id}
                          checked={selectedCompliance.includes(option.id)}
                          onCheckedChange={() => handleComplianceToggle(option.id)}
                        />
                        <Label htmlFor={option.id} className="cursor-pointer flex-1">
                          <div className="font-semibold">{option.label}</div>
                          <div className="text-sm text-muted-foreground">{option.description}</div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Step 3: Service Needs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 text-accent mr-3" />
                    Step 3: Select Service Needs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {serviceOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-accent transition-colors">
                        <Checkbox
                          id={option.id}
                          checked={selectedServices.includes(option.id)}
                          onCheckedChange={() => handleServiceToggle(option.id)}
                        />
                        <Label htmlFor={option.id} className="cursor-pointer flex-1">
                          <span className="mr-2">{option.icon}</span>
                          <span className="font-medium">{option.label}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Generate Button */}
              <div className="flex gap-4">
                <Button size="lg" onClick={generateStatement} className="bg-orange-gradient hover:opacity-90 flex-1">
                  <FileText className="mr-2 h-5 w-5" />
                  Generate Capability Statement
                </Button>
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Your Selection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground mb-2">Agency Type</div>
                    <div className="text-sm font-medium">
                      {agencyType === 'federal' ? 'Federal Government' : 'State & Local Government'}
                    </div>
                  </div>
                  
                  {selectedCompliance.length > 0 && (
                    <div>
                      <div className="text-sm font-semibold text-muted-foreground mb-2">Compliance</div>
                      <div className="space-y-1">
                        {selectedCompliance.map(id => {
                          const option = complianceOptions[agencyType].find(o => o.id === id);
                          return (
                            <div key={id} className="text-sm flex items-center">
                              <CheckCircle2 className="h-3 w-3 text-foreground mr-2" />
                              {option?.label}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  {selectedServices.length > 0 && (
                    <div>
                      <div className="text-sm font-semibold text-muted-foreground mb-2">Services</div>
                      <div className="space-y-1">
                        {selectedServices.map(id => {
                          const option = serviceOptions.find(o => o.id === id);
                          return (
                            <div key={id} className="text-sm flex items-center">
                              <CheckCircle2 className="h-3 w-3 text-foreground mr-2" />
                              {option?.label}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {selectedServices.length === 0 && selectedCompliance.length === 0 && (
                    <div className="text-sm text-muted-foreground italic">
                      Select options above to see your customized capability statement
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      {generatedStatement && (
        <section id="preview" className="py-20 bg-secondary">
          <div className="container max-w-5xl">
            <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-3xl font-bold">Your Capability Statement</h2>
              <div className="flex gap-3">
                <Button onClick={downloadPDF} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
                <Button onClick={emailStatement} variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Statement
                </Button>
              </div>
            </div>

            <Card className="border-2">
              <CardContent className="p-12 space-y-8">
                {/* Header */}
                <div className="text-center border-b pb-8">
                  <h1 className="text-4xl font-bold mb-2">Thalen Technologies</h1>
                  <p className="text-xl text-muted-foreground">Powering Government Mission Success</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Capability Statement | Generated {generatedStatement.generatedDate}
                  </p>
                </div>

                {/* Company Overview */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Company Overview</h3>
                  <p className="text-muted-foreground mb-4">
                    Thalen Technologies is a leading {agencyType === 'federal' ? 'federal' : 'state and local'} government IT implementation consulting firm specializing in FedRAMP cloud solutions, cybersecurity compliance, data analytics, and intelligent automation. We deliver vendor-neutral expertise implementing and integrating best-of-breed platforms to help government agencies achieve mission outcomes.
                  </p>
                  <div className="grid md:grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-3xl font-bold text-accent">15+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-3xl font-bold text-accent">7+</div>
                      <div className="text-sm text-muted-foreground">Security Certifications</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-3xl font-bold text-accent">50+</div>
                      <div className="text-sm text-muted-foreground">FedRAMP Platforms</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-3xl font-bold text-accent">100+</div>
                      <div className="text-sm text-muted-foreground">Cleared Personnel</div>
                    </div>
                  </div>
                </div>

                {/* Core Capabilities */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Core Capabilities</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedServices.map(id => {
                      const service = serviceOptions.find(s => s.id === id);
                      return (
                        <div key={id} className="flex items-start p-4 bg-background rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-foreground mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">{service?.label}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Compliance & Certifications */}
                {selectedCompliance.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Compliance & Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedCompliance.map(id => {
                        const compliance = complianceOptions[agencyType].find(c => c.id === id);
                        return (
                          <div key={id} className="flex items-start">
                            <Shield className="h-4 w-4 text-accent mr-2 mt-0.5" />
                            <div className="text-sm">
                              <span className="font-semibold">{compliance?.label}</span>
                              <span className="text-muted-foreground"> - {compliance?.description}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-4 space-y-2">
                      {generatedStatement.certifications.map((cert: string, idx: number) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Award className="h-4 w-4 text-accent mr-2" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contract Vehicles */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Contract Vehicles</h3>
                  <div className="space-y-3">
                    {generatedStatement.contractVehicles.map((vehicle: any, idx: number) => (
                      <div key={idx} className="p-4 bg-background rounded-lg">
                        <div className="font-semibold">{vehicle.name}</div>
                        <div className="text-sm text-muted-foreground">Contract #{vehicle.number}</div>
                        <div className="text-sm mt-1">{vehicle.scope}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Past Performance */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Relevant Past Performance</h3>
                  <div className="space-y-4">
                    {generatedStatement.pastPerformance.map((perf: any, idx: number) => (
                      <div key={idx} className="p-4 bg-background rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-semibold">{perf.agency}</div>
                          <div className="text-sm">
                            <span className="font-semibold text-accent">{perf.contracts} contracts</span>
                            <span className="text-muted-foreground"> | </span>
                            <span className="font-semibold text-accent">{perf.value}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {perf.services.map((service: string, sidx: number) => (
                            <span key={sidx} className="text-xs bg-muted text-accent px-2 py-1 rounded">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="border-t pt-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Thalen Technologies, Inc.</p>
                    <p>Email: contracts@thalen.tech | Phone: (555) 123-4567</p>
                    <p>Website: www.thalen.tech</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
