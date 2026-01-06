import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  Building2,
  DollarSign
} from "lucide-react";

interface PastPerformanceProject {
  agency: string;
  contract: string;
  value: string;
  duration: string;
  outcome: string;
  savings: string;
  metrics: string[];
  naics: string;
  vehicleUsed: string;
}

interface Testimonial {
  quote: string;
  author: string;
  agency: string;
  project: string;
}

const pastPerformance: PastPerformanceProject[] = [
  {
    agency: "Department of Defense",
    contract: "Federal Agency Process Automation",
    value: "$24.5M",
    duration: "2020-2024",
    outcome: "85% process automation achieved",
    savings: "$18M annual cost savings",
    metrics: [
      "Automated 127 mission-critical workflows",
      "Reduced processing time by 73%",
      "Zero security incidents over 4-year period",
      "95% user satisfaction rating"
    ],
    naics: "541511",
    vehicleUsed: "GSA Schedule 70"
  },
  {
    agency: "Department of Health & Human Services",
    contract: "Healthcare Claims Processing Modernization",
    value: "$16.8M",
    duration: "2019-2023",
    outcome: "60% faster claims processing",
    savings: "$12M cost reduction",
    metrics: [
      "Processed 2.3M claims annually",
      "Reduced claim denial rate by 42%",
      "HIPAA compliance maintained throughout",
      "Improved beneficiary satisfaction by 38%"
    ],
    naics: "541512",
    vehicleUsed: "GSA MAS"
  },
  {
    agency: "Department of Defense",
    contract: "Enterprise Cloud Migration & Security",
    value: "$32.4M",
    duration: "2021-2025",
    outcome: "15,000 workloads migrated to FedRAMP High cloud",
    savings: "40% infrastructure cost reduction",
    metrics: [
      "Zero downtime during migration",
      "FedRAMP High authorization achieved",
      "Migrated 850TB of classified data securely",
      "Implemented zero-trust architecture"
    ],
    naics: "518210",
    vehicleUsed: "SEWP V"
  },
  {
    agency: "Department of Veterans Affairs",
    contract: "Real-Time Analytics Platform",
    value: "$8.9M",
    duration: "2022-2024",
    outcome: "Real-time visibility into veteran services delivery",
    savings: "$5.2M operational efficiency gains",
    metrics: [
      "Integrated 47 disparate data sources",
      "Reduced report generation time from days to minutes",
      "Enabled predictive analytics for resource allocation",
      "Improved veteran wait times by 28%"
    ],
    naics: "541519",
    vehicleUsed: "GSA Schedule 70"
  }
];

const testimonials: Testimonial[] = [
  {
    quote: "Thalen's automation solution transformed our operations. The 85% automation rate exceeded our expectations and the ROI was realized within 8 months.",
    author: "Director of Digital Transformation",
    agency: "Department of Defense",
    project: "Process Automation Initiative"
  },
  {
    quote: "The cloud migration was executed flawlessly. Zero downtime, full FedRAMP compliance, and significant cost savings. Thalen Technologies is our trusted partner for mission-critical modernization.",
    author: "Chief Information Officer",
    agency: "Defense Agency",
    project: "Cloud Migration Program"
  },
  {
    quote: "Their analytics platform gave us real-time insights we never had before. The impact on veteran services has been measurable and meaningful.",
    author: "Deputy CIO",
    agency: "Department of Veterans Affairs",
    project: "Analytics Modernization"
  }
];

export default function PastPerformance() {
  return (
    <>
      {/* Past Performance Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 font-medium mb-4">
              Proven Results
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Past Performance Highlights</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Successful delivery of high-value, mission-critical contracts across federal agencies
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 md:space-y-4 sm:space-y-3 sm:space-y-2 sm:space-y-3 md:space-y-4 md:space-y-6 md:space-y-8 max-w-6xl mx-auto">
            {pastPerformance.map((project, index) => (
              <Card key={index} className="border-2">
                <CardHeader className="bg-slate-50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-5 w-5 text-slate-700" />
                        <span className="text-sm font-semibold text-slate-700">{project.agency}</span>
                      </div>
                      <CardTitle className="text-2xl mb-2">{project.contract}</CardTitle>
                      <CardDescription className="text-base">{project.outcome}</CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 md:text-right">
                      <div className="flex items-center md:justify-end gap-2">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        <span className="text-2xl font-bold text-green-600">{project.value}</span>
                      </div>
                      <div className="text-sm text-slate-600">{project.duration}</div>
                      <Badge variant="outline" className="w-fit md:ml-auto">
                        {project.vehicleUsed}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-orange-600" />
                        Key Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {project.metrics.map((metric, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-orange-600" />
                        Impact Summary
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-slate-600 mb-1">Cost Savings</div>
                          <div className="text-lg font-bold text-green-600">{project.savings}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-600 mb-1">NAICS Code</div>
                          <div className="font-mono text-sm">{project.naics}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-600 mb-1">Contract Vehicle</div>
                          <div className="text-sm">{project.vehicleUsed}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Agency Testimonials</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              What federal leaders say about working with Thalen Technologies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <svg className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-orange-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-sm mb-4 italic">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-slate-600">{testimonial.agency}</div>
                    <div className="text-xs text-slate-700 mt-1">{testimonial.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-orange-400">$82.6M</div>
              <div className="text-sm md:text-base opacity-90">Total Contract Value</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-orange-400">$35.2M</div>
              <div className="text-sm md:text-base opacity-90">Documented Savings</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-orange-400">100%</div>
              <div className="text-sm md:text-base opacity-90">On-Time Delivery Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-orange-400">4</div>
              <div className="text-sm md:text-base opacity-90">Active Contract Vehicles</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
