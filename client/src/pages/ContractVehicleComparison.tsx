import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, CheckCircle2, XCircle, Clock, DollarSign, 
  TrendingUp, Shield, FileText, Download, AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';

interface ContractVehicle {
  id: string;
  name: string;
  type: 'federal' | 'state-local' | 'both';
  description: string;
  bestFor: string[];
  procurementTime: string;
  competitiveAdvantage: string;
  pastWinRate: string;
  typicalContractSize: string;
  pros: string[];
  cons: string[];
  requirements: string[];
  score?: number;
}

export default function ContractVehicleComparison() {
  const [agencyType, setAgencyType] = useState<'federal' | 'state-local'>('federal');
  const [contractSize, setContractSize] = useState('');
  const [timeline, setTimeline] = useState('');
  const [recommendations, setRecommendations] = useState<ContractVehicle[]>([]);
  const [showResults, setShowResults] = useState(false);

  const contractVehicles: ContractVehicle[] = [
    {
      id: 'gsa-schedule-70',
      name: 'GSA Schedule 70',
      type: 'both',
      description: 'IT Professional Services schedule providing streamlined procurement for federal, state, and local agencies.',
      bestFor: ['IT services', 'Cloud solutions', 'Cybersecurity', 'Data analytics'],
      procurementTime: '2-4 weeks',
      competitiveAdvantage: 'Pre-negotiated pricing, simplified procurement process',
      pastWinRate: '78%',
      typicalContractSize: '$100K - $5M',
      pros: [
        'Fast procurement (2-4 weeks)',
        'Pre-competed and approved',
        'Available to all federal agencies',
        'State/local can also use',
        'Flexible task order structure'
      ],
      cons: [
        'High competition',
        'Lower profit margins due to MFC',
        'Requires GSA Schedule maintenance',
        'May not be best for very large contracts'
      ],
      requirements: [
        'GSA Schedule contract holder',
        'Past performance references',
        'Technical capability demonstration'
      ]
    },
    {
      id: 'gsa-schedule-84',
      name: 'GSA Schedule 84',
      type: 'federal',
      description: 'Total Solutions for Law Enforcement, Security, Facilities Management, Fire, Rescue, and Emergency Response.',
      bestFor: ['Security solutions', 'Law enforcement IT', 'Emergency response systems'],
      procurementTime: '2-4 weeks',
      competitiveAdvantage: 'Specialized for security and law enforcement',
      pastWinRate: '72%',
      typicalContractSize: '$200K - $3M',
      pros: [
        'Specialized for security sector',
        'Fast procurement',
        'Pre-negotiated terms',
        'Access to federal law enforcement'
      ],
      cons: [
        'Limited to security-related services',
        'Narrower customer base',
        'Requires security expertise'
      ],
      requirements: [
        'GSA Schedule 84 contract',
        'Security clearances (for some work)',
        'Law enforcement experience'
      ]
    },
    {
      id: 'idiq',
      name: 'IDIQ (Indefinite Delivery/Indefinite Quantity)',
      type: 'federal',
      description: 'Long-term contracts with multiple task orders, ideal for ongoing relationships and larger programs.',
      bestFor: ['Long-term programs', 'Multiple projects', 'Ongoing support', 'Large-scale implementations'],
      procurementTime: '3-6 months (initial), 2-6 weeks (task orders)',
      competitiveAdvantage: 'Long-term relationship, reduced competition for task orders',
      pastWinRate: '65%',
      typicalContractSize: '$5M - $50M (ceiling)',
      pros: [
        'Long-term relationship (5-10 years)',
        'Multiple task orders under one vehicle',
        'Reduced competition after award',
        'Larger contract values',
        'Predictable revenue stream'
      ],
      cons: [
        'Lengthy initial procurement (3-6 months)',
        'High competition for initial award',
        'Requires significant proposal effort',
        'May require past performance'
      ],
      requirements: [
        'Strong past performance',
        'Technical expertise demonstration',
        'Financial capability',
        'Detailed proposal response'
      ]
    },
    {
      id: 'sewp',
      name: 'SEWP V (NASA)',
      type: 'federal',
      description: 'NASA Solutions for Enterprise-Wide Procurement for IT products and services.',
      bestFor: ['IT products', 'Hardware/software', 'Cloud services', 'Professional services'],
      procurementTime: '2-6 weeks',
      competitiveAdvantage: 'Fast procurement, competitive pricing',
      pastWinRate: '70%',
      typicalContractSize: '$500K - $10M',
      pros: [
        'Fast procurement process',
        'Available to all federal agencies',
        'Flexible for products and services',
        'Competitive pricing'
      ],
      cons: [
        'Requires SEWP contract holder',
        'High competition',
        'NASA-managed process'
      ],
      requirements: [
        'SEWP V contract holder',
        'Technical capability',
        'Competitive pricing'
      ]
    },
    {
      id: 'nitaac',
      name: 'NIH NITAAC CIO-SP3',
      type: 'federal',
      description: 'Chief Information Officer - Solutions and Partners 3 for comprehensive IT solutions.',
      bestFor: ['Health IT', 'Large IT programs', 'Enterprise solutions', 'Cloud migration'],
      procurementTime: '4-8 weeks',
      competitiveAdvantage: 'Health IT focus, large contract ceiling',
      pastWinRate: '68%',
      typicalContractSize: '$2M - $20M',
      pros: [
        'Large contract ceiling',
        'Health IT specialization',
        'Available to all federal agencies',
        'Comprehensive IT services'
      ],
      cons: [
        'Requires CIO-SP3 contract',
        'Competitive environment',
        'Complex proposal requirements'
      ],
      requirements: [
        'CIO-SP3 contract holder',
        'Health IT experience preferred',
        'Strong technical team'
      ]
    },
    {
      id: 'naspo',
      name: 'NASPO ValuePoint',
      type: 'state-local',
      description: 'Multi-state cooperative purchasing for cloud services and IT solutions.',
      bestFor: ['Cloud services', 'State agencies', 'Multi-state deployments'],
      procurementTime: '3-6 weeks',
      competitiveAdvantage: 'Multi-state reach, cooperative purchasing',
      pastWinRate: '75%',
      typicalContractSize: '$200K - $5M',
      pros: [
        'Access to all 50 states',
        'Cooperative purchasing benefits',
        'Simplified procurement',
        'Multi-state contracts possible'
      ],
      cons: [
        'State-specific requirements vary',
        'May require state amendments',
        'Competition from national vendors'
      ],
      requirements: [
        'NASPO ValuePoint contract',
        'Multi-state capability',
        'State government experience'
      ]
    },
    {
      id: 'sourcewell',
      name: 'Sourcewell',
      type: 'state-local',
      description: 'Cooperative purchasing organization serving 50,000+ government, education, and nonprofit entities.',
      bestFor: ['Education', 'Local government', 'Nonprofits', 'IT services'],
      procurementTime: '2-4 weeks',
      competitiveAdvantage: 'Broad reach, simplified procurement',
      pastWinRate: '80%',
      typicalContractSize: '$100K - $3M',
      pros: [
        'Very broad customer base (50,000+)',
        'Fast procurement',
        'Education sector access',
        'Nonprofit eligibility'
      ],
      cons: [
        'Smaller average contract size',
        'High volume, lower margins',
        'Requires Sourcewell contract'
      ],
      requirements: [
        'Sourcewell contract holder',
        'Education/local govt experience',
        'Competitive pricing'
      ]
    },
    {
      id: 'omnia',
      name: 'OMNIA Partners',
      type: 'state-local',
      description: 'Public sector procurement cooperative providing competitively solicited contracts.',
      bestFor: ['Local government', 'Public sector', 'IT services', 'Cloud solutions'],
      procurementTime: '2-4 weeks',
      competitiveAdvantage: 'Large cooperative, simplified process',
      pastWinRate: '77%',
      typicalContractSize: '$150K - $4M',
      pros: [
        'Large cooperative network',
        'Fast procurement',
        'Public sector focus',
        'Simplified contracting'
      ],
      cons: [
        'Requires OMNIA contract',
        'Competition from established vendors',
        'Contract maintenance requirements'
      ],
      requirements: [
        'OMNIA Partners contract',
        'Public sector experience',
        'Competitive pricing'
      ]
    },
    {
      id: 'state-master',
      name: 'State Master Agreements',
      type: 'state-local',
      description: 'Direct state-specific IT services contracts with departments of technology and administration.',
      bestFor: ['State-specific work', 'Long-term state relationships', 'Large state programs'],
      procurementTime: '6-12 weeks (initial), 2-4 weeks (task orders)',
      competitiveAdvantage: 'Direct state relationship, reduced competition',
      pastWinRate: '70%',
      typicalContractSize: '$500K - $10M',
      pros: [
        'Direct state relationship',
        'Long-term contracts (3-5 years)',
        'Reduced competition after award',
        'Larger contract values'
      ],
      cons: [
        'State-specific requirements',
        'Lengthy initial procurement',
        'May require in-state presence',
        'Limited to one state'
      ],
      requirements: [
        'State-specific qualifications',
        'Past performance in state',
        'May require local presence',
        'Detailed proposal response'
      ]
    }
  ];

  const getRecommendations = () => {
    if (!contractSize || !timeline) {
      toast.error('Please fill in all fields');
      return;
    }

    const size = parseFloat(contractSize);
    
    // Filter by agency type
    let filtered = contractVehicles.filter(v => 
      v.type === agencyType || v.type === 'both'
    );

    // Score each vehicle based on inputs
    const scored = filtered.map(vehicle => {
      let score = 0;
      
      // Contract size scoring
      const sizeRange = vehicle.typicalContractSize.match(/\$([0-9.]+)([KM])/g);
      if (sizeRange) {
        const minMatch = sizeRange[0].match(/\$([0-9.]+)([KM])/);
        const maxMatch = sizeRange[1]?.match(/\$([0-9.]+)([KM])/) || minMatch;
        
        if (minMatch && maxMatch) {
          const min = parseFloat(minMatch[1]) * (minMatch[2] === 'M' ? 1000000 : 1000);
          const max = parseFloat(maxMatch[1]) * (maxMatch[2] === 'M' ? 1000000 : 1000);
          
          if (size >= min && size <= max) {
            score += 40; // Perfect fit
          } else if (size < min) {
            score += 20; // Below typical range
          } else {
            score += 30; // Above typical range (still good)
          }
        }
      }

      // Timeline scoring
      const procTime = vehicle.procurementTime.toLowerCase();
      if (timeline === 'immediate' && procTime.includes('2-4 weeks')) {
        score += 30;
      } else if (timeline === 'short-term' && (procTime.includes('weeks') || procTime.includes('2-6 weeks'))) {
        score += 25;
      } else if (timeline === 'mid-term') {
        score += 20;
      } else if (timeline === 'long-term' && procTime.includes('months')) {
        score += 25;
      }

      // Win rate scoring
      const winRate = parseInt(vehicle.pastWinRate);
      score += winRate / 5; // Up to 20 points for 100% win rate

      return { ...vehicle, score };
    });

    // Sort by score and take top 3-4
    const sorted = scored.sort((a, b) => b.score - a.score);
    const top = sorted.slice(0, Math.min(4, sorted.length));
    
    setRecommendations(top);
    setShowResults(true);
    toast.success('Recommendations generated!');
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const downloadReport = () => {
    toast.info('PDF download feature coming soon. Contact us for a detailed comparison report.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Interactive Tool
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contract Vehicle Comparison Tool
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Find the optimal contract vehicle for your agency's needs. Get personalized recommendations based on your agency type, contract size, and procurement timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Input Form */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Tell Us About Your Procurement</CardTitle>
              <p className="text-muted-foreground">
                Answer a few questions to receive tailored contract vehicle recommendations
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Agency Type */}
              <div>
                <Label className="text-base font-semibold mb-3 block">Agency Type</Label>
                <RadioGroup value={agencyType} onValueChange={(value: any) => setAgencyType(value)}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 p-4 border-2 rounded-lg hover:border-accent transition-colors cursor-pointer">
                      <RadioGroupItem value="federal" id="comp-federal" />
                      <Label htmlFor="comp-federal" className="cursor-pointer flex-1">
                        <div className="font-semibold">Federal Government</div>
                        <div className="text-sm text-muted-foreground">GSA, IDIQ, SEWP, NITAAC</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border-2 rounded-lg hover:border-accent transition-colors cursor-pointer">
                      <RadioGroupItem value="state-local" id="comp-state-local" />
                      <Label htmlFor="comp-state-local" className="cursor-pointer flex-1">
                        <div className="font-semibold">State & Local Government</div>
                        <div className="text-sm text-muted-foreground">NASPO, Sourcewell, OMNIA, State Contracts</div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Contract Size */}
              <div>
                <Label htmlFor="contract-size" className="text-base font-semibold">Estimated Contract Value ($)</Label>
                <Input
                  id="contract-size"
                  type="number"
                  placeholder="e.g., 2500000 for $2.5M"
                  value={contractSize}
                  onChange={(e) => setContractSize(e.target.value)}
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Enter the approximate total contract value in dollars
                </p>
              </div>

              {/* Timeline */}
              <div>
                <Label htmlFor="timeline" className="text-base font-semibold">Procurement Timeline</Label>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (Need to award in 0-30 days)</SelectItem>
                    <SelectItem value="short-term">Short-term (1-3 months)</SelectItem>
                    <SelectItem value="mid-term">Mid-term (3-6 months)</SelectItem>
                    <SelectItem value="long-term">Long-term (6+ months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={getRecommendations} size="lg" className="w-full bg-orange-gradient">
                <TrendingUp className="mr-2 h-5 w-5" />
                Get Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results */}
      {showResults && recommendations.length > 0 && (
        <section id="results" className="py-20 bg-secondary">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Recommended Contract Vehicles</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Based on your inputs, here are the best contract vehicles ranked by fit
              </p>
              <Button onClick={downloadReport} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Comparison Report
              </Button>
            </div>

            <div className="space-y-6">
              {recommendations.map((vehicle, index) => (
                <Card key={vehicle.id} className="border-2 hover:border-accent transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent text-lg">
                            #{index + 1}
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{vehicle.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{vehicle.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Match Score</div>
                        <div className="text-3xl font-bold text-accent">{Math.round(vehicle.score || 0)}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Key Metrics */}
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-background rounded-lg">
                        <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                        <div className="font-semibold text-sm">{vehicle.procurementTime}</div>
                        <div className="text-xs text-muted-foreground">Procurement Time</div>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <TrendingUp className="h-6 w-6 text-accent mx-auto mb-2" />
                        <div className="font-semibold text-sm">{vehicle.pastWinRate}</div>
                        <div className="text-xs text-muted-foreground">Past Win Rate</div>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <DollarSign className="h-6 w-6 text-accent mx-auto mb-2" />
                        <div className="font-semibold text-sm">{vehicle.typicalContractSize}</div>
                        <div className="text-xs text-muted-foreground">Typical Size</div>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <Shield className="h-6 w-6 text-accent mx-auto mb-2" />
                        <div className="font-semibold text-sm">{vehicle.type === 'both' ? 'Federal + State/Local' : vehicle.type === 'federal' ? 'Federal' : 'State/Local'}</div>
                        <div className="text-xs text-muted-foreground">Eligibility</div>
                      </div>
                    </div>

                    {/* Best For */}
                    <div>
                      <h4 className="font-semibold mb-3">Best For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.bestFor.map((item, idx) => (
                          <span key={idx} className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Competitive Advantage */}
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold mb-1">Competitive Advantage</div>
                          <div className="text-sm">{vehicle.competitiveAdvantage}</div>
                        </div>
                      </div>
                    </div>

                    {/* Pros and Cons */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          Advantages
                        </h4>
                        <ul className="space-y-2">
                          {vehicle.pros.map((pro, idx) => (
                            <li key={idx} className="text-sm flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <XCircle className="h-5 w-5 text-orange-500 mr-2" />
                          Considerations
                        </h4>
                        <ul className="space-y-2">
                          {vehicle.cons.map((con, idx) => (
                            <li key={idx} className="text-sm flex items-start">
                              <XCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="font-semibold mb-3">Requirements to Use This Vehicle:</h4>
                      <ul className="space-y-2">
                        {vehicle.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm flex items-start">
                            <FileText className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <Link href="/contact">
                        <Button className="w-full">
                          Discuss {vehicle.name} Strategy
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Expert Guidance?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our government contracting specialists can help you develop a winning strategy for any contract vehicle.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/federal-solutions">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Contract Vehicles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
