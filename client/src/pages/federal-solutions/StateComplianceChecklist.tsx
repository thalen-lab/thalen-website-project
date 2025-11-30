import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Shield, AlertCircle, Download } from 'lucide-react';

export default function StateComplianceChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const complianceCategories = [
    {
      name: 'StateRAMP Compliance',
      icon: Shield,
      items: [
        { id: 'stateramp-1', text: 'Cloud service provider has StateRAMP authorization or is in process' },
        { id: 'stateramp-2', text: 'Security controls documented and mapped to StateRAMP baseline' },
        { id: 'stateramp-3', text: 'Continuous monitoring plan established for StateRAMP requirements' },
        { id: 'stateramp-4', text: 'State-specific data residency requirements identified and addressed' },
        { id: 'stateramp-5', text: 'Third-party assessment organization (3PAO) engaged for StateRAMP audit' }
      ]
    },
    {
      name: 'CJIS Security Policy (Law Enforcement)',
      icon: Shield,
      items: [
        { id: 'cjis-1', text: 'FBI CJIS Security Policy requirements reviewed and documented' },
        { id: 'cjis-2', text: 'Background checks completed for all personnel with CJI access' },
        { id: 'cjis-3', text: 'Advanced authentication (MFA) implemented for CJI systems' },
        { id: 'cjis-4', text: 'Encryption at rest and in transit for all CJI data' },
        { id: 'cjis-5', text: 'CJIS Security Addendum signed with cloud/SaaS providers' },
        { id: 'cjis-6', text: 'Annual CJIS security awareness training completed by all users' }
      ]
    },
    {
      name: 'State Data Privacy & Protection',
      icon: Shield,
      items: [
        { id: 'privacy-1', text: 'State-specific data privacy laws identified (CCPA, SHIELD Act, etc.)' },
        { id: 'privacy-2', text: 'Data breach notification procedures comply with state requirements' },
        { id: 'privacy-3', text: 'Personal information inventory and data mapping completed' },
        { id: 'privacy-4', text: 'Data retention and disposal policies align with state records laws' },
        { id: 'privacy-5', text: 'Privacy impact assessment (PIA) completed for new systems' },
        { id: 'privacy-6', text: 'Consent mechanisms for data collection comply with state law' }
      ]
    },
    {
      name: 'State Procurement & Contracting',
      icon: Shield,
      items: [
        { id: 'procurement-1', text: 'Cooperative purchasing agreements reviewed (NASPO, Sourcewell, OMNIA)' },
        { id: 'procurement-2', text: 'State-specific procurement thresholds and approval processes followed' },
        { id: 'procurement-3', text: 'Vendor registration completed with state procurement office' },
        { id: 'procurement-4', text: 'Required insurance certificates and bonding obtained' },
        { id: 'procurement-5', text: 'Contract terms comply with state model IT contract requirements' },
        { id: 'procurement-6', text: 'Minority/women-owned business participation goals addressed' }
      ]
    },
    {
      name: 'State IT Security Standards',
      icon: Shield,
      items: [
        { id: 'security-1', text: 'State IT security policy and standards reviewed and documented' },
        { id: 'security-2', text: 'Vulnerability scanning and penetration testing scheduled' },
        { id: 'security-3', text: 'Incident response plan aligns with state CISO requirements' },
        { id: 'security-4', text: 'Security awareness training program meets state mandates' },
        { id: 'security-5', text: 'Access controls and least privilege principles implemented' },
        { id: 'security-6', text: 'Security audit logs retained per state requirements (typically 1-7 years)' }
      ]
    },
    {
      name: 'State Accessibility Requirements',
      icon: Shield,
      items: [
        { id: 'accessibility-1', text: 'WCAG 2.1 Level AA compliance verified for web applications' },
        { id: 'accessibility-2', text: 'Section 508 accessibility standards met for IT systems' },
        { id: 'accessibility-3', text: 'Accessibility testing completed with assistive technologies' },
        { id: 'accessibility-4', text: 'Accessibility conformance report (VPAT) prepared and published' },
        { id: 'accessibility-5', text: 'State-specific accessibility requirements identified and addressed' }
      ]
    }
  ];

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setCheckedItems(prev => ({ ...prev, [id]: checked }));
  };

  const totalItems = complianceCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const completionPercentage = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  const getComplianceStatus = () => {
    if (completionPercentage >= 90) return { text: 'Excellent', color: 'text-green-600' };
    if (completionPercentage >= 70) return { text: 'Good', color: 'text-blue-600' };
    if (completionPercentage >= 50) return { text: 'Fair', color: 'text-yellow-600' };
    return { text: 'Needs Attention', color: 'text-red-600' };
  };

  const status = getComplianceStatus();

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
              State Government Compliance Checklist
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Comprehensive compliance checklist for state and local government IT projects covering StateRAMP, CJIS, state data privacy laws, procurement requirements, and accessibility standards.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <Card className="border-2 border-accent">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">{completionPercentage}%</div>
                  <p className="text-sm text-muted-foreground">Compliance Complete</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{checkedCount} / {totalItems}</div>
                  <p className="text-sm text-muted-foreground">Items Completed</p>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold mb-2 ${status.color}`}>{status.text}</div>
                  <p className="text-sm text-muted-foreground">Compliance Status</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="w-full bg-muted rounded-full h-4">
                  <div 
                    className="bg-accent rounded-full h-4 transition-all duration-500"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Checklist Categories */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="space-y-8">
            {complianceCategories.map((category, catIndex) => {
              const categoryChecked = category.items.filter(item => checkedItems[item.id]).length;
              const categoryTotal = category.items.length;
              const categoryPercentage = Math.round((categoryChecked / categoryTotal) * 100);

              return (
                <Card key={catIndex} className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <category.icon className="h-8 w-8 text-accent mr-3" />
                        <div>
                          <h3 className="text-2xl font-bold">{category.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {categoryChecked} of {categoryTotal} items completed
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">{categoryPercentage}%</div>
                      </div>
                    </div>

                    <div className="w-full bg-muted rounded-full h-2 mb-6">
                      <div 
                        className="bg-accent rounded-full h-2 transition-all duration-300"
                        style={{ width: `${categoryPercentage}%` }}
                      />
                    </div>

                    <div className="space-y-4">
                      {category.items.map((item) => (
                        <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                          <Checkbox
                            id={item.id}
                            checked={checkedItems[item.id] || false}
                            onCheckedChange={(checked) => handleCheckboxChange(item.id, checked as boolean)}
                            className="mt-1"
                          />
                          <label
                            htmlFor={item.id}
                            className="text-sm leading-relaxed cursor-pointer flex-1"
                          >
                            {item.text}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-5xl">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <AlertCircle className="h-8 w-8 text-accent mr-3" />
                <h2 className="text-2xl font-bold">Compliance Recommendations</h2>
              </div>

              {completionPercentage < 100 ? (
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Complete High-Priority Items First</p>
                      <p className="text-sm text-muted-foreground">
                        Focus on StateRAMP and CJIS requirements if applicable to your agency, as these are often mandatory for cloud and law enforcement systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Engage Compliance Experts Early</p>
                      <p className="text-sm text-muted-foreground">
                        Work with experienced consultants who understand state-specific requirements to avoid costly delays and rework.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Document Everything</p>
                      <p className="text-sm text-muted-foreground">
                        Maintain detailed documentation of compliance activities, decisions, and evidence for audits and assessments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Plan for Continuous Compliance</p>
                      <p className="text-sm text-muted-foreground">
                        Compliance is ongoing—establish processes for continuous monitoring, annual reviews, and updates as requirements change.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Excellent Compliance Posture!</h3>
                  <p className="text-muted-foreground mb-6">
                    You've addressed all key compliance areas. Schedule a consultation to validate your compliance documentation and prepare for audits.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-orange-gradient hover:opacity-90">
                      Schedule Compliance Review
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Download & Next Steps */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <Download className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Download Checklist</h3>
                <p className="text-muted-foreground mb-6">
                  Export your compliance checklist progress as a PDF to share with stakeholders or track over time.
                </p>
                <Button variant="outline" className="w-full border-2 border-dashed">
                  Download PDF Report
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Get Expert Help</h3>
                <p className="text-muted-foreground mb-6">
                  Our state/local government compliance team can help you address gaps and prepare for audits.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-orange-gradient hover:opacity-90">
                    Request Compliance Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Help with State Compliance?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our team has deep expertise with StateRAMP, CJIS, and state-specific compliance requirements. Schedule a consultation to discuss your compliance roadmap.
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
