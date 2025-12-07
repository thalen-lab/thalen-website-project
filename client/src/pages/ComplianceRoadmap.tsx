import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, CheckCircle2, Clock, DollarSign, Users, 
  Shield, FileText, Download, AlertTriangle, Zap
} from 'lucide-react';
import { toast } from 'sonner';

interface Milestone {
  id: string;
  phase: string;
  title: string;
  duration: string;
  durationWeeks: number;
  description: string;
  deliverables: string[];
  resources: string[];
  estimatedCost: string;
  dependencies: string[];
}

interface Roadmap {
  framework: string;
  maturityLevel: string;
  totalDuration: string;
  totalCost: string;
  milestones: Milestone[];
}

export default function ComplianceRoadmap() {
  const [framework, setFramework] = useState<'fedramp' | 'cmmc' | 'stateramp'>('fedramp');
  const [maturityLevel, setMaturityLevel] = useState('');
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [showResults, setShowResults] = useState(false);

  const roadmapData: {[key: string]: {[key: string]: Roadmap}} = {
    fedramp: {
      'none': {
        framework: 'FedRAMP',
        maturityLevel: 'Starting from scratch',
        totalDuration: '12-18 months',
        totalCost: '$500K - $1.5M',
        milestones: [
          {
            id: 'fed-1',
            phase: 'Phase 1',
            title: 'Initial Assessment & Gap Analysis',
            duration: '4-6 weeks',
            durationWeeks: 5,
            description: 'Comprehensive assessment of current security posture against FedRAMP requirements',
            deliverables: [
              'Current state security assessment',
              'Gap analysis report',
              'Remediation priority matrix',
              'Initial project plan and timeline'
            ],
            resources: [
              '1 Security Architect',
              '2 Security Engineers',
              '1 Compliance Specialist'
            ],
            estimatedCost: '$40K - $60K',
            dependencies: []
          },
          {
            id: 'fed-2',
            phase: 'Phase 2',
            title: 'System Security Plan (SSP) Development',
            duration: '8-12 weeks',
            durationWeeks: 10,
            description: 'Develop comprehensive System Security Plan documenting all security controls',
            deliverables: [
              'Complete SSP document',
              'Security control implementation details',
              'System architecture diagrams',
              'Data flow diagrams'
            ],
            resources: [
              '1 Security Architect',
              '2 Technical Writers',
              '1 Compliance Specialist'
            ],
            estimatedCost: '$80K - $120K',
            dependencies: ['fed-1']
          },
          {
            id: 'fed-3',
            phase: 'Phase 3',
            title: 'Security Control Implementation',
            duration: '16-24 weeks',
            durationWeeks: 20,
            description: 'Implement all required security controls and remediate identified gaps',
            deliverables: [
              'Implemented security controls',
              'Configuration baselines',
              'Security policies and procedures',
              'Training materials'
            ],
            resources: [
              '1 Security Architect',
              '4 Security Engineers',
              '2 System Administrators',
              '1 Compliance Specialist'
            ],
            estimatedCost: '$250K - $500K',
            dependencies: ['fed-2']
          },
          {
            id: 'fed-4',
            phase: 'Phase 4',
            title: 'Security Assessment & Testing',
            duration: '8-12 weeks',
            durationWeeks: 10,
            description: 'Independent third-party assessment of security controls',
            deliverables: [
              'Security Assessment Report (SAR)',
              'Plan of Action & Milestones (POA&M)',
              'Vulnerability scan reports',
              'Penetration test results'
            ],
            resources: [
              '3PAO Assessment Team (4-6 people)',
              '2 Internal Security Engineers (support)'
            ],
            estimatedCost: '$80K - $150K',
            dependencies: ['fed-3']
          },
          {
            id: 'fed-5',
            phase: 'Phase 5',
            title: 'Authorization Package & Submission',
            duration: '4-8 weeks',
            durationWeeks: 6,
            description: 'Finalize authorization package and submit to FedRAMP PMO',
            deliverables: [
              'Complete authorization package',
              'Executive summary',
              'Risk assessment',
              'Continuous monitoring plan'
            ],
            resources: [
              '1 Security Architect',
              '1 Technical Writer',
              '1 Compliance Specialist'
            ],
            estimatedCost: '$30K - $50K',
            dependencies: ['fed-4']
          },
          {
            id: 'fed-6',
            phase: 'Phase 6',
            title: 'ATO & Continuous Monitoring',
            duration: '4-8 weeks + ongoing',
            durationWeeks: 6,
            description: 'Receive Authority to Operate and establish continuous monitoring',
            deliverables: [
              'FedRAMP ATO letter',
              'Continuous monitoring procedures',
              'Monthly POA&M updates',
              'Quarterly assessment reports'
            ],
            resources: [
              '1 Security Operations Manager',
              '2 Security Engineers (ongoing)',
              '1 Compliance Specialist (ongoing)'
            ],
            estimatedCost: '$20K - $40K initial + $15K-$25K/month ongoing',
            dependencies: ['fed-5']
          }
        ]
      },
      'basic': {
        framework: 'FedRAMP',
        maturityLevel: 'Basic security controls in place',
        totalDuration: '9-12 months',
        totalCost: '$350K - $900K',
        milestones: [
          {
            id: 'fed-b1',
            phase: 'Phase 1',
            title: 'Gap Assessment & Remediation Planning',
            duration: '3-4 weeks',
            durationWeeks: 3.5,
            description: 'Assess existing controls against FedRAMP requirements',
            deliverables: ['Gap analysis', 'Remediation plan', 'Updated timeline'],
            resources: ['1 Security Architect', '2 Security Engineers'],
            estimatedCost: '$25K - $40K',
            dependencies: []
          },
          {
            id: 'fed-b2',
            phase: 'Phase 2',
            title: 'SSP Development & Updates',
            duration: '6-8 weeks',
            durationWeeks: 7,
            description: 'Develop or update System Security Plan',
            deliverables: ['Complete SSP', 'Updated architecture diagrams'],
            resources: ['1 Security Architect', '2 Technical Writers'],
            estimatedCost: '$60K - $90K',
            dependencies: ['fed-b1']
          },
          {
            id: 'fed-b3',
            phase: 'Phase 3',
            title: 'Control Remediation & Enhancement',
            duration: '12-16 weeks',
            durationWeeks: 14,
            description: 'Remediate gaps and enhance existing controls',
            deliverables: ['Implemented controls', 'Updated procedures'],
            resources: ['1 Security Architect', '3 Security Engineers'],
            estimatedCost: '$180K - $350K',
            dependencies: ['fed-b2']
          },
          {
            id: 'fed-b4',
            phase: 'Phase 4',
            title: 'Assessment & Authorization',
            duration: '8-12 weeks',
            durationWeeks: 10,
            description: '3PAO assessment and authorization package',
            deliverables: ['SAR', 'POA&M', 'Authorization package'],
            resources: ['3PAO Team', '2 Internal Engineers'],
            estimatedCost: '$70K - $130K',
            dependencies: ['fed-b3']
          },
          {
            id: 'fed-b5',
            phase: 'Phase 5',
            title: 'ATO & Continuous Monitoring',
            duration: '4-6 weeks + ongoing',
            durationWeeks: 5,
            description: 'Receive ATO and establish monitoring',
            deliverables: ['ATO letter', 'Monitoring procedures'],
            resources: ['1 Security Ops Manager', '2 Engineers'],
            estimatedCost: '$15K - $30K + $15K-$25K/month',
            dependencies: ['fed-b4']
          }
        ]
      },
      'advanced': {
        framework: 'FedRAMP',
        maturityLevel: 'Strong security posture, minor gaps',
        totalDuration: '6-9 months',
        totalCost: '$200K - $500K',
        milestones: [
          {
            id: 'fed-a1',
            phase: 'Phase 1',
            title: 'Readiness Assessment',
            duration: '2-3 weeks',
            durationWeeks: 2.5,
            description: 'Final readiness check and minor gap identification',
            deliverables: ['Readiness report', 'Minor gap remediation plan'],
            resources: ['1 Security Architect', '1 Compliance Specialist'],
            estimatedCost: '$15K - $25K',
            dependencies: []
          },
          {
            id: 'fed-a2',
            phase: 'Phase 2',
            title: 'SSP Finalization',
            duration: '4-6 weeks',
            durationWeeks: 5,
            description: 'Finalize and polish System Security Plan',
            deliverables: ['Final SSP', 'Supporting documentation'],
            resources: ['1 Security Architect', '1 Technical Writer'],
            estimatedCost: '$40K - $60K',
            dependencies: ['fed-a1']
          },
          {
            id: 'fed-a3',
            phase: 'Phase 3',
            title: 'Minor Remediation',
            duration: '6-8 weeks',
            durationWeeks: 7,
            description: 'Address minor gaps and enhance documentation',
            deliverables: ['Remediated controls', 'Updated procedures'],
            resources: ['2 Security Engineers'],
            estimatedCost: '$60K - $100K',
            dependencies: ['fed-a2']
          },
          {
            id: 'fed-a4',
            phase: 'Phase 4',
            title: '3PAO Assessment',
            duration: '6-8 weeks',
            durationWeeks: 7,
            description: 'Independent security assessment',
            deliverables: ['SAR', 'POA&M'],
            resources: ['3PAO Team'],
            estimatedCost: '$60K - $120K',
            dependencies: ['fed-a3']
          },
          {
            id: 'fed-a5',
            phase: 'Phase 5',
            title: 'Authorization & Go-Live',
            duration: '3-4 weeks + ongoing',
            durationWeeks: 3.5,
            description: 'Final authorization and continuous monitoring setup',
            deliverables: ['ATO', 'Monitoring plan'],
            resources: ['1 Security Ops Manager', '1 Engineer'],
            estimatedCost: '$25K - $45K + $15K-$25K/month',
            dependencies: ['fed-a4']
          }
        ]
      }
    },
    cmmc: {
      'none': {
        framework: 'CMMC Level 2',
        maturityLevel: 'Starting from scratch',
        totalDuration: '9-12 months',
        totalCost: '$300K - $800K',
        milestones: [
          {
            id: 'cmmc-1',
            phase: 'Phase 1',
            title: 'CMMC Readiness Assessment',
            duration: '3-4 weeks',
            durationWeeks: 3.5,
            description: 'Assess current security posture against CMMC Level 2 requirements',
            deliverables: ['Gap analysis', 'NIST 800-171 compliance assessment', 'Remediation roadmap'],
            resources: ['1 CMMC Registered Practitioner', '2 Security Engineers'],
            estimatedCost: '$30K - $50K',
            dependencies: []
          },
          {
            id: 'cmmc-2',
            phase: 'Phase 2',
            title: 'System Security Plan (SSP) Development',
            duration: '6-8 weeks',
            durationWeeks: 7,
            description: 'Develop SSP documenting NIST 800-171 controls',
            deliverables: ['SSP document', 'Security policies', 'Procedures'],
            resources: ['1 Security Architect', '2 Technical Writers'],
            estimatedCost: '$60K - $90K',
            dependencies: ['cmmc-1']
          },
          {
            id: 'cmmc-3',
            phase: 'Phase 3',
            title: 'Control Implementation',
            duration: '16-20 weeks',
            durationWeeks: 18,
            description: 'Implement all 110 NIST 800-171 controls',
            deliverables: ['Implemented controls', 'Configuration baselines', 'Training materials'],
            resources: ['1 Security Architect', '3 Security Engineers', '1 Compliance Specialist'],
            estimatedCost: '$150K - $350K',
            dependencies: ['cmmc-2']
          },
          {
            id: 'cmmc-4',
            phase: 'Phase 4',
            title: 'Practice Maturity & Documentation',
            duration: '8-12 weeks',
            durationWeeks: 10,
            description: 'Demonstrate practice maturity for Level 2',
            deliverables: ['Practice documentation', 'Evidence collection', 'Process documentation'],
            resources: ['1 CMMC Practitioner', '2 Security Engineers'],
            estimatedCost: '$40K - $80K',
            dependencies: ['cmmc-3']
          },
          {
            id: 'cmmc-5',
            phase: 'Phase 5',
            title: 'C3PAO Assessment',
            duration: '4-6 weeks',
            durationWeeks: 5,
            description: 'Third-party CMMC assessment',
            deliverables: ['CMMC assessment report', 'Certification (if passed)', 'POA&M (if needed)'],
            resources: ['C3PAO Assessment Team'],
            estimatedCost: '$20K - $50K',
            dependencies: ['cmmc-4']
          },
          {
            id: 'cmmc-6',
            phase: 'Phase 6',
            title: 'Continuous Compliance',
            duration: 'Ongoing',
            durationWeeks: 0,
            description: 'Maintain CMMC compliance and prepare for re-assessment',
            deliverables: ['Monthly compliance reviews', 'Annual re-assessment preparation'],
            resources: ['1 Compliance Manager', '1 Security Engineer'],
            estimatedCost: '$10K-$15K/month ongoing',
            dependencies: ['cmmc-5']
          }
        ]
      },
      'basic': {
        framework: 'CMMC Level 2',
        maturityLevel: 'Some NIST 800-171 controls in place',
        totalDuration: '6-9 months',
        totalCost: '$180K - $450K',
        milestones: [
          {
            id: 'cmmc-b1',
            phase: 'Phase 1',
            title: 'Gap Assessment',
            duration: '2-3 weeks',
            durationWeeks: 2.5,
            description: 'Assess existing controls against CMMC requirements',
            deliverables: ['Gap analysis', 'Prioritized remediation plan'],
            resources: ['1 CMMC Practitioner', '1 Security Engineer'],
            estimatedCost: '$20K - $35K',
            dependencies: []
          },
          {
            id: 'cmmc-b2',
            phase: 'Phase 2',
            title: 'SSP Enhancement',
            duration: '4-6 weeks',
            durationWeeks: 5,
            description: 'Update and enhance existing SSP',
            deliverables: ['Updated SSP', 'Enhanced policies'],
            resources: ['1 Security Architect', '1 Technical Writer'],
            estimatedCost: '$40K - $60K',
            dependencies: ['cmmc-b1']
          },
          {
            id: 'cmmc-b3',
            phase: 'Phase 3',
            title: 'Gap Remediation',
            duration: '12-16 weeks',
            durationWeeks: 14,
            description: 'Remediate identified gaps',
            deliverables: ['Implemented controls', 'Updated procedures'],
            resources: ['2 Security Engineers', '1 Compliance Specialist'],
            estimatedCost: '$90K - $200K',
            dependencies: ['cmmc-b2']
          },
          {
            id: 'cmmc-b4',
            phase: 'Phase 4',
            title: 'Practice Maturity',
            duration: '6-8 weeks',
            durationWeeks: 7,
            description: 'Demonstrate Level 2 practice maturity',
            deliverables: ['Practice documentation', 'Evidence'],
            resources: ['1 CMMC Practitioner', '1 Security Engineer'],
            estimatedCost: '$30K - $60K',
            dependencies: ['cmmc-b3']
          },
          {
            id: 'cmmc-b5',
            phase: 'Phase 5',
            title: 'Assessment & Certification',
            duration: '4-6 weeks + ongoing',
            durationWeeks: 5,
            description: 'C3PAO assessment and ongoing compliance',
            deliverables: ['CMMC certification', 'Compliance procedures'],
            resources: ['C3PAO Team', '1 Compliance Manager'],
            estimatedCost: '$20K - $45K + $10K-$15K/month',
            dependencies: ['cmmc-b4']
          }
        ]
      },
      'advanced': {
        framework: 'CMMC Level 2',
        maturityLevel: 'Most controls implemented, minor gaps',
        totalDuration: '4-6 months',
        totalCost: '$100K - $250K',
        milestones: [
          {
            id: 'cmmc-a1',
            phase: 'Phase 1',
            title: 'Readiness Review',
            duration: '1-2 weeks',
            durationWeeks: 1.5,
            description: 'Final readiness check',
            deliverables: ['Readiness report', 'Minor gap list'],
            resources: ['1 CMMC Practitioner'],
            estimatedCost: '$10K - $20K',
            dependencies: []
          },
          {
            id: 'cmmc-a2',
            phase: 'Phase 2',
            title: 'Documentation Finalization',
            duration: '3-4 weeks',
            durationWeeks: 3.5,
            description: 'Finalize all documentation',
            deliverables: ['Final SSP', 'Complete evidence package'],
            resources: ['1 Security Architect', '1 Technical Writer'],
            estimatedCost: '$25K - $40K',
            dependencies: ['cmmc-a1']
          },
          {
            id: 'cmmc-a3',
            phase: 'Phase 3',
            title: 'Minor Remediation',
            duration: '4-6 weeks',
            durationWeeks: 5,
            description: 'Address minor gaps',
            deliverables: ['Remediated controls', 'Updated evidence'],
            resources: ['1 Security Engineer'],
            estimatedCost: '$30K - $60K',
            dependencies: ['cmmc-a2']
          },
          {
            id: 'cmmc-a4',
            phase: 'Phase 4',
            title: 'Practice Maturity Validation',
            duration: '3-4 weeks',
            durationWeeks: 3.5,
            description: 'Validate practice maturity',
            deliverables: ['Practice evidence', 'Process documentation'],
            resources: ['1 CMMC Practitioner'],
            estimatedCost: '$15K - $30K',
            dependencies: ['cmmc-a3']
          },
          {
            id: 'cmmc-a5',
            phase: 'Phase 5',
            title: 'Certification & Maintenance',
            duration: '2-3 weeks + ongoing',
            durationWeeks: 2.5,
            description: 'Assessment and ongoing compliance',
            deliverables: ['CMMC certification', 'Maintenance plan'],
            resources: ['C3PAO Team', '1 Compliance Manager'],
            estimatedCost: '$20K - $40K + $10K-$15K/month',
            dependencies: ['cmmc-a4']
          }
        ]
      }
    },
    stateramp: {
      'none': {
        framework: 'StateRAMP',
        maturityLevel: 'Starting from scratch',
        totalDuration: '10-14 months',
        totalCost: '$400K - $1M',
        milestones: [
          {
            id: 'state-1',
            phase: 'Phase 1',
            title: 'Initial Assessment',
            duration: '4-6 weeks',
            durationWeeks: 5,
            description: 'Assess current state against StateRAMP requirements',
            deliverables: ['Gap analysis', 'Remediation plan'],
            resources: ['1 Security Architect', '2 Security Engineers'],
            estimatedCost: '$35K - $55K',
            dependencies: []
          },
          {
            id: 'state-2',
            phase: 'Phase 2',
            title: 'SSP Development',
            duration: '8-10 weeks',
            durationWeeks: 9,
            description: 'Develop System Security Plan',
            deliverables: ['Complete SSP', 'Security documentation'],
            resources: ['1 Security Architect', '2 Technical Writers'],
            estimatedCost: '$70K - $110K',
            dependencies: ['state-1']
          },
          {
            id: 'state-3',
            phase: 'Phase 3',
            title: 'Control Implementation',
            duration: '16-24 weeks',
            durationWeeks: 20,
            description: 'Implement all required security controls',
            deliverables: ['Implemented controls', 'Procedures', 'Training'],
            resources: ['1 Security Architect', '4 Security Engineers'],
            estimatedCost: '$200K - $450K',
            dependencies: ['state-2']
          },
          {
            id: 'state-4',
            phase: 'Phase 4',
            title: 'Security Assessment',
            duration: '8-10 weeks',
            durationWeeks: 9,
            description: 'Third-party security assessment',
            deliverables: ['SAR', 'POA&M', 'Test results'],
            resources: ['3PAO Team', '2 Internal Engineers'],
            estimatedCost: '$70K - $140K',
            dependencies: ['state-3']
          },
          {
            id: 'state-5',
            phase: 'Phase 5',
            title: 'Authorization & Monitoring',
            duration: '4-6 weeks + ongoing',
            durationWeeks: 5,
            description: 'Receive authorization and establish monitoring',
            deliverables: ['StateRAMP authorization', 'Monitoring procedures'],
            resources: ['1 Security Ops Manager', '2 Engineers'],
            estimatedCost: '$25K - $45K + $12K-$20K/month',
            dependencies: ['state-4']
          }
        ]
      },
      'basic': {
        framework: 'StateRAMP',
        maturityLevel: 'Basic security controls in place',
        totalDuration: '7-10 months',
        totalCost: '$250K - $600K',
        milestones: [
          {
            id: 'state-b1',
            phase: 'Phase 1',
            title: 'Gap Assessment',
            duration: '3-4 weeks',
            durationWeeks: 3.5,
            description: 'Assess gaps against StateRAMP',
            deliverables: ['Gap analysis', 'Remediation plan'],
            resources: ['1 Security Architect', '1 Security Engineer'],
            estimatedCost: '$25K - $40K',
            dependencies: []
          },
          {
            id: 'state-b2',
            phase: 'Phase 2',
            title: 'SSP Enhancement',
            duration: '6-8 weeks',
            durationWeeks: 7,
            description: 'Enhance existing SSP',
            deliverables: ['Updated SSP', 'Enhanced documentation'],
            resources: ['1 Security Architect', '1 Technical Writer'],
            estimatedCost: '$50K - $80K',
            dependencies: ['state-b1']
          },
          {
            id: 'state-b3',
            phase: 'Phase 3',
            title: 'Gap Remediation',
            duration: '12-16 weeks',
            durationWeeks: 14,
            description: 'Remediate identified gaps',
            deliverables: ['Implemented controls', 'Updated procedures'],
            resources: ['1 Security Architect', '3 Security Engineers'],
            estimatedCost: '$120K - $280K',
            dependencies: ['state-b2']
          },
          {
            id: 'state-b4',
            phase: 'Phase 4',
            title: 'Assessment & Authorization',
            duration: '6-8 weeks + ongoing',
            durationWeeks: 7,
            description: '3PAO assessment and authorization',
            deliverables: ['SAR', 'Authorization', 'Monitoring plan'],
            resources: ['3PAO Team', '1 Security Ops Manager'],
            estimatedCost: '$55K - $100K + $12K-$20K/month',
            dependencies: ['state-b3']
          }
        ]
      },
      'advanced': {
        framework: 'StateRAMP',
        maturityLevel: 'Strong security posture',
        totalDuration: '5-7 months',
        totalCost: '$150K - $350K',
        milestones: [
          {
            id: 'state-a1',
            phase: 'Phase 1',
            title: 'Readiness Assessment',
            duration: '2-3 weeks',
            durationWeeks: 2.5,
            description: 'Final readiness check',
            deliverables: ['Readiness report', 'Minor gap list'],
            resources: ['1 Security Architect'],
            estimatedCost: '$15K - $25K',
            dependencies: []
          },
          {
            id: 'state-a2',
            phase: 'Phase 2',
            title: 'Documentation Finalization',
            duration: '4-6 weeks',
            durationWeeks: 5,
            description: 'Finalize all documentation',
            deliverables: ['Final SSP', 'Complete documentation'],
            resources: ['1 Security Architect', '1 Technical Writer'],
            estimatedCost: '$35K - $55K',
            dependencies: ['state-a1']
          },
          {
            id: 'state-a3',
            phase: 'Phase 3',
            title: 'Minor Remediation',
            duration: '6-8 weeks',
            durationWeeks: 7,
            description: 'Address minor gaps',
            deliverables: ['Remediated controls', 'Updated evidence'],
            resources: ['2 Security Engineers'],
            estimatedCost: '$50K - $90K',
            dependencies: ['state-a2']
          },
          {
            id: 'state-a4',
            phase: 'Phase 4',
            title: 'Assessment & Go-Live',
            duration: '4-6 weeks + ongoing',
            durationWeeks: 5,
            description: '3PAO assessment and authorization',
            deliverables: ['StateRAMP authorization', 'Monitoring plan'],
            resources: ['3PAO Team', '1 Security Ops Manager'],
            estimatedCost: '$50K - $80K + $12K-$20K/month',
            dependencies: ['state-a3']
          }
        ]
      }
    }
  };

  const generateRoadmap = () => {
    if (!maturityLevel) {
      toast.error('Please select your current maturity level');
      return;
    }

    const selectedRoadmap = roadmapData[framework][maturityLevel];
    setRoadmap(selectedRoadmap);
    setShowResults(true);
    toast.success('Compliance roadmap generated!');
    
    setTimeout(() => {
      document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const downloadRoadmap = () => {
    toast.info('PDF download feature coming soon. Contact us for a detailed roadmap document.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-muted text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Interactive Tool
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Compliance Roadmap Generator
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Generate a customized implementation roadmap for FedRAMP, CMMC, or StateRAMP compliance. Get detailed timelines, milestones, resource requirements, and cost estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Input Form */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Configure Your Compliance Roadmap</CardTitle>
              <p className="text-muted-foreground">
                Select your target compliance framework and current security maturity level
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Framework Selection */}
              <div>
                <Label className="text-base font-semibold mb-3 block">Target Compliance Framework</Label>
                <RadioGroup value={framework} onValueChange={(value: any) => setFramework(value)}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 p-4 border-2 rounded-lg hover:border-accent transition-colors cursor-pointer">
                      <RadioGroupItem value="fedramp" id="road-fedramp" />
                      <Label htmlFor="road-fedramp" className="cursor-pointer flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">FedRAMP (Moderate/High)</div>
                            <div className="text-sm text-muted-foreground">Federal cloud security authorization</div>
                          </div>
                          <Shield className="h-6 w-6 text-accent" />
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border-2 rounded-lg hover:border-accent transition-colors cursor-pointer">
                      <RadioGroupItem value="cmmc" id="road-cmmc" />
                      <Label htmlFor="road-cmmc" className="cursor-pointer flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">CMMC Level 2</div>
                            <div className="text-sm text-muted-foreground">DoD contractor cybersecurity certification</div>
                          </div>
                          <Shield className="h-6 w-6 text-accent" />
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border-2 rounded-lg hover:border-accent transition-colors cursor-pointer">
                      <RadioGroupItem value="stateramp" id="road-stateramp" />
                      <Label htmlFor="road-stateramp" className="cursor-pointer flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">StateRAMP</div>
                            <div className="text-sm text-muted-foreground">State cloud security authorization</div>
                          </div>
                          <Shield className="h-6 w-6 text-accent" />
                        </div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Maturity Level */}
              <div>
                <Label htmlFor="maturity" className="text-base font-semibold">Current Security Maturity Level</Label>
                <Select value={maturityLevel} onValueChange={setMaturityLevel}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your current maturity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">
                      <div>
                        <div className="font-semibold">Starting from Scratch</div>
                        <div className="text-xs text-muted-foreground">No formal security controls implemented</div>
                      </div>
                    </SelectItem>
                    <SelectItem value="basic">
                      <div>
                        <div className="font-semibold">Basic Controls in Place</div>
                        <div className="text-xs text-muted-foreground">Some security controls, significant gaps remain</div>
                      </div>
                    </SelectItem>
                    <SelectItem value="advanced">
                      <div>
                        <div className="font-semibold">Strong Security Posture</div>
                        <div className="text-xs text-muted-foreground">Most controls implemented, minor gaps only</div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={generateRoadmap} size="lg" className="w-full bg-orange-gradient">
                <Zap className="mr-2 h-5 w-5" />
                Generate Compliance Roadmap
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Roadmap Results */}
      {showResults && roadmap && (
        <section id="roadmap" className="py-20 bg-secondary">
          <div className="container max-w-6xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{roadmap.framework} Compliance Roadmap</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Customized implementation plan for {roadmap.maturityLevel.toLowerCase()}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-background px-6 py-3 rounded-lg">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Total Duration</div>
                    <div className="font-bold">{roadmap.totalDuration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-background px-6 py-3 rounded-lg">
                  <DollarSign className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Estimated Cost</div>
                    <div className="font-bold">{roadmap.totalCost}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-background px-6 py-3 rounded-lg">
                  <FileText className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Milestones</div>
                    <div className="font-bold">{roadmap.milestones.length} Phases</div>
                  </div>
                </div>
              </div>
              <Button onClick={downloadRoadmap} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Roadmap PDF
              </Button>
            </div>

            {/* Timeline Visualization */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Implementation Timeline</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent/30" />
                
                {/* Milestones */}
                <div className="space-y-8">
                  {roadmap.milestones.map((milestone, index) => (
                    <div key={milestone.id} className="relative pl-20">
                      {/* Timeline dot */}
                      <div className="absolute left-5 top-6 h-8 w-8 rounded-full bg-accent flex items-center justify-center text-white font-bold z-10">
                        {index + 1}
                      </div>
                      
                      <Card className="border-2 hover:border-accent transition-colors">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="text-sm text-accent font-semibold mb-1">{milestone.phase}</div>
                              <CardTitle className="text-xl mb-2">{milestone.title}</CardTitle>
                              <p className="text-sm text-muted-foreground">{milestone.description}</p>
                            </div>
                            <div className="text-right ml-4">
                              <div className="flex items-center gap-2 text-sm font-semibold mb-1">
                                <Clock className="h-4 w-4 text-accent" />
                                {milestone.duration}
                              </div>
                              <div className="flex items-center gap-2 text-sm font-semibold">
                                <DollarSign className="h-4 w-4 text-accent" />
                                {milestone.estimatedCost}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {/* Deliverables */}
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-foreground mr-2" />
                              Key Deliverables
                            </h4>
                            <ul className="grid md:grid-cols-2 gap-2">
                              {milestone.deliverables.map((deliverable, idx) => (
                                <li key={idx} className="text-sm flex items-start">
                                  <span className="text-accent mr-2">•</span>
                                  <span>{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Resources */}
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center">
                              <Users className="h-4 w-4 text-accent mr-2" />
                              Required Resources
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {milestone.resources.map((resource, idx) => (
                                <span key={idx} className="text-xs bg-muted text-accent px-3 py-1 rounded-full">
                                  {resource}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Dependencies */}
                          {milestone.dependencies.length > 0 && (
                            <div className="pt-3 border-t">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <AlertTriangle className="h-4 w-4 mr-2" />
                                <span>Depends on: {milestone.dependencies.map(dep => {
                                  const depMilestone = roadmap.milestones.find(m => m.id === dep);
                                  return depMilestone?.title;
                                }).join(', ')}</span>
                              </div>
                            </div>
                          )}

                          {/* CTA */}
                          {index === 0 && (
                            <div className="pt-3 border-t">
                              <Link href="/contact">
                                <Button variant="outline" className="w-full">
                                  Get Expert Help with This Phase
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </Link>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <Card className="border-2 border-accent/50 bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-accent mr-3" />
                  Important Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  <strong>Timelines:</strong> Actual timelines may vary based on organization size, complexity, and resource availability. The estimates provided are typical ranges based on our experience.
                </p>
                <p className="text-sm">
                  <strong>Costs:</strong> Cost estimates include consulting services, assessment fees, and implementation support. They do not include technology purchases, infrastructure costs, or internal staff time.
                </p>
                <p className="text-sm">
                  <strong>Resources:</strong> Resource requirements assume dedicated team members. Part-time allocation will extend timelines proportionally.
                </p>
                <p className="text-sm">
                  <strong>Continuous Compliance:</strong> Achieving certification is just the beginning. Ongoing monitoring, annual assessments, and continuous improvement are required to maintain compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Compliance Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our compliance experts can help you navigate the entire process, from initial assessment to certification and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Compliance Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/government-resources">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Compliance Guides
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
