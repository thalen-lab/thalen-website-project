import { useState } from "react";
import { ChevronDown, FileText, Mail, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ContractVehicle {
  name: string;
  description: string;
  role: 'prime' | 'subcontractor' | 'pursuing';
  details?: string[];
  scope?: string;
  contact?: string;
  contractNumber?: string;
  periodOfPerformance?: string;
  capabilities?: string[];
}

interface VehicleCategory {
  title: string;
  description: string;
  vehicles: ContractVehicle[];
}

const contractCategories: VehicleCategory[] = [
  {
    title: "GSA Schedule Contracts",
    description: "Government-wide contract vehicles providing streamlined procurement access to federal, state, and local agencies.",
    vehicles: [
      {
        name: "GSA IT Schedule 70",
        role: "pursuing",
        contractNumber: "47QTCA24D001E",
        description: "IT Professional Services schedule providing pre-negotiated pricing and terms for federal agencies. NexDyne holds this vehicle and is actively seeking subcontracting and teaming opportunities with prime contractors.",
        scope: "IT professional services including cloud solutions, cybersecurity, data analytics, application development, and IT consulting services available to federal, state, and local government agencies.",
        capabilities: [
          "IT Professional Services (SIN 54151S)",
          "Cloud Computing Services",
          "Cybersecurity and Information Assurance",
          "Data Analytics and Business Intelligence",
          "Application Development and Modernization",
          "IT Consulting and Advisory Services",
          "Available for teaming and subcontracting opportunities"
        ],
        periodOfPerformance: "Active - Seeking teaming partnerships"
      }
    ]
  },
  {
    title: "Agency-Specific Contract Vehicles",
    description: "Specialized contract vehicles for specific federal agencies. NexDyne is positioned to support prime contractors through subcontracting and teaming arrangements.",
    vehicles: [
      {
        name: "FBI ITSSS-2",
        role: "pursuing",
        description: "Federal Bureau of Investigation IT Support and Services contract vehicle. NexDyne holds access to this vehicle and is seeking subcontracting opportunities with prime contractors supporting FBI IT modernization initiatives.",
        scope: "Comprehensive IT support services for FBI including application development, infrastructure support, cybersecurity operations, data analytics, and IT service management.",
        capabilities: [
          "Application development and maintenance",
          "IT infrastructure support and operations",
          "Cybersecurity operations and compliance",
          "Data analytics and intelligence platforms",
          "IT service management and help desk",
          "Cloud migration and modernization",
          "Available for subcontracting partnerships"
        ],
        contractNumber: "Small Business vehicle",
        periodOfPerformance: "Active - Seeking teaming opportunities"
      },
      {
        name: "FEC ITSS",
        role: "pursuing",
        description: "Federal Election Commission IT Support Services contract vehicle. NexDyne holds this vehicle and is actively pursuing subcontracting opportunities to support FEC's technology modernization and application support needs.",
        scope: "Application support, system maintenance, IT infrastructure services, and technology consulting for the Federal Election Commission's mission-critical systems.",
        capabilities: [
          "Application support and maintenance",
          "System integration and modernization",
          "Database administration and optimization",
          "IT infrastructure management",
          "Cybersecurity and compliance support",
          "Technical documentation and training",
          "Seeking subcontracting partnerships"
        ],
        contractNumber: "Active vehicle",
        periodOfPerformance: "Active - Pursuing subcontracting opportunities"
      }
    ]
  },
  {
    title: "Teaming & Subcontracting Vehicles",
    description: "Contract vehicles where NexDyne actively seeks partnerships with prime contractors to deliver specialized IT services.",
    vehicles: [
      {
        name: "PBGC ITIOSS",
        role: "pursuing",
        description: "Pension Benefit Guaranty Corporation IT Infrastructure Operations and Support Services. NexDyne is positioned as a subcontractor and actively seeking teaming arrangements with prime contractors supporting PBGC's IT infrastructure needs.",
        scope: "IT infrastructure operations, system administration, network management, cybersecurity operations, and technical support services for PBGC's enterprise IT environment.",
        capabilities: [
          "IT infrastructure operations and monitoring",
          "System administration and maintenance",
          "Network management and optimization",
          "Cybersecurity operations and incident response",
          "Help desk and technical support services",
          "Cloud infrastructure management",
          "Active subcontracting partnerships available"
        ],
        contractNumber: "Subcontractor position",
        periodOfPerformance: "Active - Seeking prime contractor partnerships"
      }
    ]
  },
  {
    title: "GSA Professional Services Schedule (PSS)",
    description: "Consulting and advisory services schedule for strategic planning and implementation support.",
    vehicles: [
      {
        name: "GSA PSS - Management Consulting",
        role: "pursuing",
        description: "Professional services schedule for management consulting and organizational transformation. The PSS provides agencies with access to strategic planning, process improvement, and change management consulting services.",
        scope: "Management consulting and advisory services including strategic planning, process improvement, change management, performance measurement, and organizational design for federal agencies.",
        capabilities: [
          "Strategic planning and roadmap development",
          "Process improvement and optimization consulting",
          "Change management and organizational transformation",
          "Performance measurement and analytics",
          "Organizational design and development",
          "Leadership development and training",
          "Innovation and continuous improvement programs"
        ],
        contractNumber: "Application in progress",
        periodOfPerformance: "Target award: 2026"
      }
    ]
  },
  {
    title: "Small Business Set-Asides & Certifications",
    description: "Specialized contract vehicles and certifications for small business federal contractors.",
    vehicles: [
      {
        name: "SBA 8(a) Program",
        role: "pursuing",
        description: "Small Business Administration program providing sole-source contracting opportunities up to $4M for services. The 8(a) Business Development Program assists small disadvantaged businesses in competing in the federal marketplace.",
        scope: "Comprehensive IT services and solutions available through sole-source contracts up to $4M (services) or competitive set-aside opportunities for small disadvantaged businesses.",
        capabilities: [
          "Sole-source contracts up to $4M (services)",
          "Competitive set-aside opportunities",
          "Mentor-protégé program participation",
          "Business development support and training",
          "Access to federal contracting resources",
          "Technical assistance and counseling",
          "Networking and partnership opportunities"
        ],
        contractNumber: "Certification in progress",
        periodOfPerformance: "9-year program participation"
      },
      {
        name: "HUBZone Certification",
        role: "pursuing",
        description: "Historically Underutilized Business Zone certification providing competitive advantages in federal procurement. HUBZone certification offers price evaluation preferences and set-aside contract opportunities.",
        scope: "IT services and solutions with competitive advantages including 10% price evaluation preference and access to set-aside contracts for businesses located in historically underutilized business zones.",
        capabilities: [
          "10% price evaluation preference in competitions",
          "Set-aside contract opportunities",
          "Sole-source awards up to $7M (services)",
          "Priority consideration for competitive awards",
          "Access to specialized training programs",
          "Networking and business development events",
          "Technical assistance and support"
        ],
        contractNumber: "Application in progress",
        periodOfPerformance: "Ongoing certification"
      },
      {
        name: "WOSB/EDWOSB Certification",
        role: "pursuing",
        description: "Women-Owned Small Business and Economically Disadvantaged Women-Owned Small Business certifications. These certifications provide access to set-aside contracts and competitive advantages in federal procurement.",
        scope: "IT services and solutions with access to set-aside contract opportunities and competitive advantages for women-owned small businesses in designated NAICS codes.",
        capabilities: [
          "Set-aside contract opportunities in designated industries",
          "Competitive advantages in federal procurement",
          "Access to federal contracting programs and resources",
          "Networking and business development opportunities",
          "Mentorship and technical assistance programs",
          "Training and professional development",
          "Partnership opportunities with prime contractors"
        ],
        contractNumber: "Application in progress",
        periodOfPerformance: "Ongoing certification"
      }
    ]
  },
  {
    title: "State & Local Cooperative Contracts",
    description: "Cooperative purchasing contracts extending federal pricing to state and local government agencies.",
    vehicles: [
      {
        name: "NASPO ValuePoint",
        role: "pursuing",
        description: "National Association of State Procurement Officials cooperative purchasing program. NASPO ValuePoint provides state and local governments with access to competitively solicited contracts for IT products and services.",
        scope: "IT hardware, software, cloud services, cybersecurity, and professional services available to all 50 states, territories, and participating local governments through cooperative purchasing agreements.",
        capabilities: [
          "IT hardware and software solutions",
          "Cloud services and infrastructure",
          "Cybersecurity products and services",
          "Professional services and consulting",
          "Available to all 50 states and territories",
          "Local government and K-12 education access",
          "Higher education institution eligibility"
        ],
        contractNumber: "Application in progress",
        periodOfPerformance: "Target award: 2026"
      },
      {
        name: "Sourcewell (formerly NJPA)",
        role: "pursuing",
        description: "Cooperative purchasing organization serving government, education, and nonprofit organizations. Sourcewell provides access to competitively solicited contracts for technology solutions and professional services.",
        scope: "Technology solutions, professional development, consulting services, and software licensing available to 50,000+ participating government, education, and nonprofit agencies through cooperative purchasing.",
        capabilities: [
          "Technology solutions and services",
          "Professional development and training",
          "Consulting and advisory services",
          "Software licensing and support",
          "Access to 50,000+ participating agencies",
          "Government, education, and nonprofit eligibility",
          "Streamlined procurement process"
        ],
        contractNumber: "Application in progress",
        periodOfPerformance: "Target award: 2026"
      }
    ]
  }
];

function VehicleAccordion({ category }: { category: VehicleCategory }) {
  const [openVehicles, setOpenVehicles] = useState<Set<string>>(new Set());

  const toggleVehicle = (vehicleName: string) => {
    const newOpen = new Set(openVehicles);
    if (newOpen.has(vehicleName)) {
      newOpen.delete(vehicleName);
    } else {
      newOpen.add(vehicleName);
    }
    setOpenVehicles(newOpen);
  };

  const getRoleBadge = (role: 'prime' | 'subcontractor' | 'pursuing') => {
    const styles = {
      prime: "bg-green-100 text-green-800 border-green-200",
      subcontractor: "bg-blue-100 text-blue-800 border-blue-200",
      pursuing: "bg-amber-100 text-amber-800 border-amber-200"
    };
    
    const labels = {
      prime: "Prime Contractor",
      subcontractor: "Subcontractor",
      pursuing: "Pursuing"
    };

    return (
      <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold border ${styles[role]}`}>
        {labels[role]}
      </span>
    );
  };

  return (
    <div className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">{category.title}</h2>
        <p className="text-lg text-slate-600">{category.description}</p>
      </div>

      <div className="space-y-4">
        {category.vehicles.map((vehicle) => {
          const isOpen = openVehicles.has(vehicle.name);
          return (
            <div
              key={vehicle.name}
              className="border border-slate-200 bg-white transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => toggleVehicle(vehicle.name)}
                className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {vehicle.name}
                    </h3>
                    {getRoleBadge(vehicle.role)}
                  </div>
                  <p className="text-slate-600 leading-relaxed">{vehicle.description}</p>
                </div>
                <ChevronDown
                  className={`ml-4 h-5 w-5 text-slate-400 transition-transform flex-shrink-0 mt-1 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                  {vehicle.scope && (
                    <div className="mb-6 p-4 bg-slate-50 border-l-4 border-slate-300">
                      <h4 className="font-semibold text-slate-900 mb-2">Contract Scope</h4>
                      <p className="text-slate-700 leading-relaxed">{vehicle.scope}</p>
                    </div>
                  )}

                  {vehicle.capabilities && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-slate-600" />
                        Key Capabilities
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {vehicle.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-slate-400 mt-2 mr-3" />
                            <p className="text-slate-600 text-sm leading-relaxed">{capability}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                    {vehicle.contractNumber && (
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-1 flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Contract Status
                        </p>
                        <p className="text-sm text-slate-600 pl-6">{vehicle.contractNumber}</p>
                      </div>
                    )}
                    {vehicle.periodOfPerformance && (
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-1 flex items-center">
                          <Building2 className="h-4 w-4 mr-2" />
                          Period of Performance
                        </p>
                        <p className="text-sm text-slate-600 pl-6">{vehicle.periodOfPerformance}</p>
                      </div>
                    )}
                  </div>

                  {vehicle.contact && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <a
                        href={`mailto:${vehicle.contact}`}
                        className="inline-flex items-center text-sm text-slate-700 hover:text-slate-900 font-medium"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Contact for more information
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ContractVehicles() {
  return (
    <>
      <SEO
        title="Contract Vehicles | NexDyne Technology"
        description="Explore NexDyne Technology' federal contract vehicles including GWACs, MACs, GSA Schedules, and agency-specific IDIQs for streamlined government procurement."
        keywords="federal contract vehicles, GSA schedule, GWAC, IDIQ, government contracts, federal procurement, small business set-asides"
      />
      <Navigation />

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2000')] bg-cover bg-center opacity-10" />
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="text-sm font-medium">Federal Procurement</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Contract Vehicles & Teaming Opportunities
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                NexDyne Technology holds multiple federal contract vehicles and is actively seeking subcontracting and teaming opportunities with prime contractors. We bring specialized IT capabilities, small business credentials, and proven past performance to support your agency's technology initiatives through strategic partnerships.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Our Team
                  </Button>
                </Link>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="/nexdyne-capabilities-statement.pdf" download>
                    <FileText className="mr-2 h-5 w-5" />
                    Download Capabilities Statement
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Strategic Partnerships for Government IT Services
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                NexDyne Technology holds access to key federal contract vehicles including GSA IT Schedule 70, FBI ITSSS-2, PBGC ITIOSS, and FEC ITSS. We are actively seeking subcontracting and teaming partnerships with prime contractors to deliver specialized IT services across federal agencies. Our approach emphasizes collaboration, bringing deep technical expertise and agile delivery capabilities to support your contract performance and agency mission success.
              </p>
            </div>
          </div>
        </div>

        {/* Contract Categories */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            {contractCategories.map((category) => (
              <VehicleAccordion key={category.title} category={category} />
            ))}
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="bg-slate-900 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Seeking Teaming Partnerships</h2>
              <p className="text-lg text-slate-300 mb-8">
                NexDyne Technology is actively seeking teaming opportunities with prime contractors to support agency contracts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                    <Mail className="mr-2 h-5 w-5" />
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/services/automation">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SAM.gov Registration Notice */}
        <div className="bg-blue-50 border-t border-blue-100">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">SAM.gov Registration</h3>
                  <p className="text-slate-600 mb-4">
                    NexDyne Technology maintains active registration in the System for Award Management (SAM.gov), the official U.S. government system for federal contractors. Our CAGE Code and UEI are available upon request for proposal submissions and contract awards.
                  </p>
                  <p className="text-sm text-slate-500">
                    <strong>NAICS Codes:</strong> 541512 (Computer Systems Design Services), 541519 (Other Computer Related Services), 541611 (Administrative Management and General Management Consulting Services), 541690 (Other Scientific and Technical Consulting Services)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
