import { useState } from "react";
import { ChevronDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";

interface ContractVehicle {
  name: string;
  description: string;
  details?: string[];
  contact?: string;
  contractNumber?: string;
  periodOfPerformance?: string;
}

interface VehicleCategory {
  title: string;
  description: string;
  vehicles: ContractVehicle[];
}

const contractCategories: VehicleCategory[] = [
  {
    title: "Government-Wide Acquisition Contracts (GWACs)",
    description: "Pre-competed contracts available to all federal agencies for streamlined procurement of IT services and solutions.",
    vehicles: [
      {
        name: "GSA Alliant 2",
        description: "Comprehensive IT solutions contract vehicle for large-scale, complex IT projects across federal agencies.",
        details: [
          "Artificial Intelligence and Machine Learning implementation",
          "Cloud migration and modernization services",
          "Cybersecurity and compliance solutions",
          "Data analytics and business intelligence",
          "Legacy system modernization"
        ],
        contractNumber: "Pursuing - Application in progress",
        periodOfPerformance: "Target award: 2026"
      },
      {
        name: "NIH CIO-SP4",
        description: "Chief Information Officer Solutions and Partners 4 contract vehicle supporting health and research agencies.",
        details: [
          "Health IT systems integration",
          "Research data management platforms",
          "Clinical analytics and reporting",
          "HIPAA-compliant application development",
          "Scientific computing infrastructure"
        ],
        contractNumber: "Pursuing - Application in progress",
        periodOfPerformance: "Target award: 2026"
      }
    ]
  },
  {
    title: "Multiple Agency Contracts (MACs)",
    description: "Multi-agency contract vehicles providing flexible procurement options for federal IT services.",
    vehicles: [
      {
        name: "GSA Multiple Award Schedule (MAS) IT",
        description: "General Services Administration schedule for commercial IT products and services at pre-negotiated prices.",
        details: [
          "IT Professional Services (SIN 54151S)",
          "Cloud Computing Services (SIN 518210C)",
          "Cybersecurity Services (SIN 54151HACS)",
          "Software as a Service (SaaS) solutions",
          "Training and staff augmentation"
        ],
        contractNumber: "Pursuing - Schedule 70 successor",
        periodOfPerformance: "Target award: 2026"
      },
      {
        name: "GSA ASTRO",
        description: "Alliances, Strategy, Transformation, Research, and Operations contract for strategic consulting services.",
        details: [
          "Digital transformation strategy",
          "Process optimization consulting",
          "Change management services",
          "Technology roadmap development",
          "Organizational transformation"
        ],
        contractNumber: "Pursuing - Application in progress",
        periodOfPerformance: "Target award: 2026"
      }
    ]
  },
  {
    title: "Agency-Specific Indefinite Delivery / Indefinite Quantity Contracts (IDIQs)",
    description: "Dedicated contract vehicles for specific federal agencies with specialized requirements.",
    vehicles: [
      {
        name: "NASA SEWP (Solutions for Enterprise-Wide Procurement)",
        description: "NASA's premier GWAC for IT hardware, software, and services supporting enterprise-wide technology needs.",
        details: [
          "Enterprise IT hardware and software",
          "Cloud infrastructure solutions",
          "Data center equipment and services",
          "Networking and telecommunications",
          "IT security products and services"
        ],
        contractNumber: "Pursuing - SEWP VI application",
        periodOfPerformance: "Target award: 2026"
      },
      {
        name: "DHS EAGLE II",
        description: "Department of Homeland Security Enterprise Acquisition Gateway for Leading-Edge Solutions contract.",
        details: [
          "Homeland security IT solutions",
          "Border security technology",
          "Emergency response systems",
          "Critical infrastructure protection",
          "Cybersecurity and threat detection"
        ],
        contractNumber: "Pursuing - Application in progress",
        periodOfPerformance: "Target award: 2026"
      },
      {
        name: "Air Force NETCENTS-2",
        description: "Network-Centric Solutions contract for Air Force networking and IT infrastructure services.",
        details: [
          "Enterprise network services",
          "Application development and maintenance",
          "IT infrastructure modernization",
          "Cloud computing solutions",
          "Cybersecurity operations"
        ],
        contractNumber: "Pursuing - Application in progress",
        periodOfPerformance: "Target award: 2026"
      },
      {
        name: "Army ITES-SW2",
        description: "Information Technology Enterprise Solutions - Software 2 contract for Army IT services.",
        details: [
          "Custom software development",
          "Enterprise application integration",
          "IT infrastructure support",
          "Cloud migration services",
          "DevSecOps implementation"
        ],
        contractNumber: "Pursuing - Application in progress",
        periodOfPerformance: "Target award: 2026"
      }
    ]
  },
  {
    title: "GSA Professional Services Schedule (PSS)",
    description: "Consulting and advisory services schedule for strategic planning and implementation support.",
    vehicles: [
      {
        name: "GSA PSS - Management Consulting",
        description: "Professional services schedule for management consulting and organizational transformation.",
        details: [
          "Strategic planning and roadmap development",
          "Process improvement and optimization",
          "Change management consulting",
          "Performance measurement and analytics",
          "Organizational design and development"
        ],
        contractNumber: "Pursuing - Application in progress",
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
        description: "Small Business Administration program providing sole-source contracting opportunities up to $4M for services.",
        details: [
          "Sole-source contracts up to $4M (services)",
          "Competitive set-aside opportunities",
          "Mentor-protégé program participation",
          "Business development support",
          "Access to federal contracting training"
        ],
        contractNumber: "Certification in progress",
        periodOfPerformance: "9-year program participation"
      },
      {
        name: "HUBZone Certification",
        description: "Historically Underutilized Business Zone certification providing competitive advantages in federal procurement.",
        details: [
          "10% price evaluation preference",
          "Set-aside contract opportunities",
          "Sole-source awards up to $7M (services)",
          "Priority consideration for competitive awards",
          "Access to specialized training programs"
        ],
        contractNumber: "Pursuing - Application in progress",
        periodOfPerformance: "Ongoing certification"
      },
      {
        name: "WOSB/EDWOSB Certification",
        description: "Women-Owned Small Business and Economically Disadvantaged Women-Owned Small Business certifications.",
        details: [
          "Set-aside contract opportunities",
          "Competitive advantages in procurement",
          "Access to federal contracting programs",
          "Networking and business development",
          "Mentorship opportunities"
        ],
        contractNumber: "Pursuing - Application in progress",
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
        description: "National Association of State Procurement Officials cooperative purchasing program.",
        details: [
          "IT hardware and software solutions",
          "Cloud services and infrastructure",
          "Cybersecurity products and services",
          "Professional services and consulting",
          "Available to all 50 states and territories"
        ],
        contractNumber: "Pursuing - Application in progress",
        periodOfPerformance: "Target award: 2026"
      },
      {
        name: "Sourcewell (formerly NJPA)",
        description: "Cooperative purchasing organization serving government, education, and nonprofit organizations.",
        details: [
          "Technology solutions and services",
          "Professional development and training",
          "Consulting and advisory services",
          "Software licensing and support",
          "Access to 50,000+ participating agencies"
        ],
        contractNumber: "Pursuing - Application in progress",
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
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {vehicle.name}
                  </h3>
                  <p className="text-slate-600">{vehicle.description}</p>
                </div>
                <ChevronDown
                  className={`ml-4 h-5 w-5 text-slate-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                  {vehicle.details && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {vehicle.details.map((detail, idx) => (
                          <li key={idx} className="text-slate-600 pl-4 border-l-2 border-slate-200">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    {vehicle.contractNumber && (
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-1">Status:</p>
                        <p className="text-sm text-slate-600">{vehicle.contractNumber}</p>
                      </div>
                    )}
                    {vehicle.periodOfPerformance && (
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-1">Timeline:</p>
                        <p className="text-sm text-slate-600">{vehicle.periodOfPerformance}</p>
                      </div>
                    )}
                  </div>

                  {vehicle.contact && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <a
                        href={`mailto:${vehicle.contact}`}
                        className="inline-flex items-center text-sm text-slate-700 hover:text-slate-900"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        {vehicle.contact}
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
        title="Contract Vehicles | Thalen Technologies"
        description="Explore Thalen Technologies' federal contract vehicles including GWACs, MACs, GSA Schedules, and agency-specific IDIQs for streamlined government procurement."
        keywords="federal contract vehicles, GSA schedule, GWAC, IDIQ, government contracts, federal procurement, small business set-asides"
      />

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
                Contract Vehicles
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Thalen Technologies holds and is actively pursuing major government-wide acquisition contracts, multiple agency contracts, and agency-specific task order vehicles in support of federal, state, and local agencies. Our contract vehicles provide pre-negotiated terms and conditions for streamlined procurement of technology services and solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Our Team
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <FileText className="mr-2 h-5 w-5" />
                    Download Capabilities Statement
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Streamlined Access to Technology Services
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you're a federal agency seeking IT modernization services or a prospective partner, our contract vehicles provide efficient procurement pathways for artificial intelligence, cloud infrastructure, cybersecurity, data analytics, and application development services under pre-competed terms and conditions.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-slate-300 mb-8">
                Our team is ready to discuss how our contract vehicles can support your agency's technology modernization initiatives. Contact us to learn more about our capabilities and procurement options.
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
                    Thalen Technologies maintains active registration in the System for Award Management (SAM.gov), the official U.S. government system for federal contractors. Our CAGE Code and UEI are available upon request for proposal submissions and contract awards.
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
    </>
  );
}
