import { useState } from "react";
import { ChevronDown, FileText, Mail, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import PastPerformance from "@/components/PastPerformance";
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
    title: "Government-Wide Acquisition Contracts (GWACs)",
    description: "Pre-competed contracts available to all federal agencies for streamlined procurement of IT services and solutions.",
    vehicles: [
      {
        name: "GSA Alliant 2",
        role: "pursuing",
        description: "Comprehensive IT solutions contract vehicle for large-scale, complex IT projects across federal agencies. Alliant 2 provides agencies with access to cutting-edge technology solutions including artificial intelligence, cloud computing, cybersecurity, and data analytics services.",
        scope: "Full lifecycle IT services including strategic planning, systems design and development, cloud migration, cybersecurity implementation, data analytics, and ongoing operations and maintenance for federal agencies.",
        capabilities: [
          "Artificial Intelligence and Machine Learning implementation",
          "Cloud migration and modernization services",
          "Cybersecurity and compliance solutions (FedRAMP, FISMA, NIST)",
          "Data analytics and business intelligence platforms",
          "Legacy system modernization and integration",
          "DevSecOps and agile development services",
          "IT infrastructure optimization"
        ],
        contractNumber: "Application in progress",
        periodOfPerformance: "Target award: 2026"
      },
      {
        name: "NIH CIO-SP4",
        role: "pursuing",
        description: "Chief Information Officer Solutions and Partners 4 contract vehicle supporting the National Institutes of Health and other health and research agencies. CIO-SP4 provides comprehensive IT services for health research, clinical systems, and scientific computing.",
        scope: "Enterprise IT solutions for health and research agencies including health IT systems integration, research data management, clinical analytics, HIPAA-compliant application development, and scientific computing infrastructure.",
        capabilities: [
          "Health IT systems integration and interoperability",
          "Research data management platforms and repositories",
          "Clinical analytics and reporting systems",
          "HIPAA-compliant application development",
          "Scientific computing infrastructure and HPC",
          "Electronic health record (EHR) modernization",
          "Biomedical research informatics"
        ],
        contractNumber: "Application in progress",
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
        role: "pursuing",
        description: "General Services Administration schedule for commercial IT products and services at pre-negotiated prices. The MAS IT schedule consolidates multiple IT-related Special Item Numbers (SINs) to provide agencies with streamlined access to technology solutions.",
        scope: "Commercial IT products and services including professional services, cloud computing, cybersecurity, software as a service (SaaS), training, and staff augmentation at pre-negotiated government pricing.",
        capabilities: [
          "IT Professional Services (SIN 54151S)",
          "Cloud Computing Services (SIN 518210C)",
          "Cybersecurity Services (SIN 54151HACS)",
          "Software as a Service (SaaS) solutions",
          "Training and staff augmentation",
          "IT consulting and advisory services",
          "Managed IT services and support"
        ],
        contractNumber: "Schedule 70 successor - Application in progress",
        periodOfPerformance: "Target award: 2026"
      },
      {
        name: "GSA ASTRO",
        role: "pursuing",
        description: "Alliances, Strategy, Transformation, Research, and Operations contract for strategic consulting services. ASTRO provides agencies with access to management consulting, strategic planning, and organizational transformation services.",
        scope: "Strategic consulting and advisory services including digital transformation strategy, process optimization, change management, technology roadmap development, and organizational transformation initiatives.",
        capabilities: [
          "Digital transformation strategy and roadmapping",
          "Process optimization and reengineering consulting",
          "Change management and organizational development",
          "Technology roadmap development and planning",
          "Organizational transformation and restructuring",
          "Performance measurement and analytics",
          "Innovation and emerging technology adoption"
        ],
        contractNumber: "Application in progress",
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
        role: "pursuing",
        description: "NASA's premier GWAC for IT hardware, software, and services supporting enterprise-wide technology needs. SEWP provides streamlined procurement for IT products and solutions across federal agencies.",
        scope: "Enterprise IT hardware, software, and services including cloud infrastructure, data center equipment, networking, telecommunications, and IT security products for federal agencies.",
        capabilities: [
          "Enterprise IT hardware and software procurement",
          "Cloud infrastructure solutions and services",
          "Data center equipment and modernization",
          "Networking and telecommunications infrastructure",
          "IT security products and services",
          "End-user computing devices and support",
          "Software licensing and enterprise agreements"
        ],
        contractNumber: "SEWP VI - Application in progress",
        periodOfPerformance: "Target award: 2026"
      },
      {
        name: "DHS EAGLE II",
        role: "pursuing",
        description: "Department of Homeland Security Enterprise Acquisition Gateway for Leading-Edge Solutions contract. EAGLE II provides DHS and other agencies with access to comprehensive IT solutions for homeland security missions.",
        scope: "Homeland security IT solutions including border security technology, emergency response systems, critical infrastructure protection, cybersecurity, and threat detection for DHS and partner agencies.",
        capabilities: [
          "Homeland security IT solutions and systems",
          "Border security technology and surveillance",
          "Emergency response and disaster recovery systems",
          "Critical infrastructure protection",
          "Cybersecurity and threat detection platforms",
          "Identity and access management systems",
          "Intelligence and information sharing solutions"
        ],
        contractNumber: "Application in progress",
        periodOfPerformance: "Target award: 2026"
      },
      {
        name: "Air Force NETCENTS-2",
        role: "pursuing",
        description: "Network-Centric Solutions contract for Air Force networking and IT infrastructure services. NETCENTS-2 provides comprehensive IT services for Air Force enterprise networks, applications, and infrastructure.",
        scope: "Enterprise network services, application development and maintenance, IT infrastructure modernization, cloud computing, and cybersecurity operations for the United States Air Force.",
        capabilities: [
          "Enterprise network services and infrastructure",
          "Application development and maintenance",
          "IT infrastructure modernization and optimization",
          "Cloud computing solutions and migration",
          "Cybersecurity operations and monitoring",
          "Network operations center (NOC) services",
          "IT service management and support"
        ],
        contractNumber: "Application in progress",
        periodOfPerformance: "Target award: 2026"
      },
      {
        name: "Army ITES-SW2",
        role: "pursuing",
        description: "Information Technology Enterprise Solutions - Software 2 contract for Army IT services. ITES-SW2 provides comprehensive software development, integration, and IT infrastructure services for the United States Army.",
        scope: "Custom software development, enterprise application integration, IT infrastructure support, cloud migration, and DevSecOps implementation for Army systems and applications.",
        capabilities: [
          "Custom software development and engineering",
          "Enterprise application integration and APIs",
          "IT infrastructure support and operations",
          "Cloud migration and modernization services",
          "DevSecOps implementation and automation",
          "Application security and vulnerability management",
          "Agile development and continuous delivery"
        ],
        contractNumber: "Application in progress",
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
        title="Contract Vehicles | Thalen Technologies"
        description="Explore Thalen Technologies' federal contract vehicles including GWACs, MACs, GSA Schedules, and agency-specific IDIQs for streamlined government procurement."
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
                Contract Vehicles
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Thalen Technologies is actively pursuing major government-wide acquisition contracts, multiple agency contracts, and agency-specific task order vehicles in support of federal, state, and local agencies. Our contract vehicles will provide pre-negotiated terms and conditions for streamlined procurement of technology services and solutions.
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
                Streamlined Access to Technology Services
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Thalen Technologies provides government agencies with a full range of IT services through solutions and Indefinite Delivery Indefinite Quantity (IDIQ) vehicles, as both a prime and subcontractor on various contract vehicles. We also have a commercialized products division with the focus on building custom software solutions that deliver high value digital media intelligence.
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

        {/* Past Performance Section */}
        <PastPerformance />

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
      <Footer />
    </>
  );
}
