import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Database, Cloud, Shield, Server, Lock, Zap, Network, FileCode } from "lucide-react";

interface ArchitectureLayer {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
  technologies: string[];
}

interface ArchitectureScenario {
  id: string;
  title: string;
  description: string;
  layers: ArchitectureLayer[];
}

const scenarios: ArchitectureScenario[] = [
  {
    id: "legacy-modernization",
    title: "Legacy System Modernization",
    description: "Transform COBOL/mainframe systems into cloud-native applications",
    layers: [
      {
        id: "legacy",
        title: "Legacy Systems",
        description: "Existing COBOL, mainframe, and monolithic applications",
        icon: <Database className="w-8 h-8" />,
        details: "We analyze your existing legacy systems, extract business logic, and create a migration roadmap that ensures zero downtime during modernization.",
        technologies: ["COBOL", "Mainframe", "Oracle DB", "AS/400"]
      },
      {
        id: "integration",
        title: "Integration Layer",
        description: "APIs and microservices for seamless data flow",
        icon: <Network className="w-8 h-8" />,
        details: "Our integration layer provides secure APIs that connect legacy systems with modern cloud applications, enabling gradual migration without disrupting operations.",
        technologies: ["REST APIs", "GraphQL", "Apache Kafka", "MuleSoft"]
      },
      {
        id: "cloud",
        title: "Cloud Platform",
        description: "Modern cloud-native architecture",
        icon: <Cloud className="w-8 h-8" />,
        details: "Deploy to FedRAMP-authorized cloud platforms with auto-scaling, high availability, and disaster recovery built-in.",
        technologies: ["AWS GovCloud", "Azure Government", "Kubernetes", "Docker"]
      },
      {
        id: "security",
        title: "Security & Compliance",
        description: "FedRAMP High, NIST 800-53, ATO support",
        icon: <Shield className="w-8 h-8" />,
        details: "Comprehensive security controls including encryption at rest and in transit, continuous monitoring, and automated compliance reporting.",
        technologies: ["FedRAMP High", "NIST 800-53", "FIPS 140-2", "Zero Trust"]
      }
    ]
  },
  {
    id: "cloud-integration",
    title: "Cloud Integration & APIs",
    description: "Connect multiple systems with secure, scalable APIs",
    layers: [
      {
        id: "systems",
        title: "Multiple Systems",
        description: "15+ disparate systems across agencies",
        icon: <Server className="w-8 h-8" />,
        details: "Integrate legacy databases, SaaS applications, and custom systems into a unified data ecosystem.",
        technologies: ["Oracle", "SQL Server", "Salesforce", "SAP"]
      },
      {
        id: "api-gateway",
        title: "API Gateway",
        description: "Centralized API management and security",
        icon: <Zap className="w-8 h-8" />,
        details: "Enterprise API gateway with rate limiting, authentication, monitoring, and analytics for all API traffic.",
        technologies: ["AWS API Gateway", "Kong", "OAuth 2.0", "JWT"]
      },
      {
        id: "microservices",
        title: "Microservices",
        description: "Scalable, independent service architecture",
        icon: <FileCode className="w-8 h-8" />,
        details: "Build modular microservices that can be deployed, scaled, and updated independently without affecting the entire system.",
        technologies: ["Node.js", "Python", "Go", "gRPC"]
      },
      {
        id: "data-sync",
        title: "Real-time Sync",
        description: "Event-driven data synchronization",
        icon: <Database className="w-8 h-8" />,
        details: "Real-time data replication and synchronization across all connected systems with conflict resolution and audit trails.",
        technologies: ["Apache Kafka", "Redis", "PostgreSQL", "Elasticsearch"]
      }
    ]
  },
  {
    id: "security-compliance",
    title: "Security & Compliance Architecture",
    description: "Multi-layered security for TS/SCI environments",
    layers: [
      {
        id: "perimeter",
        title: "Perimeter Security",
        description: "WAF, DDoS protection, network isolation",
        icon: <Shield className="w-8 h-8" />,
        details: "Web Application Firewall, DDoS mitigation, and network segmentation to protect against external threats.",
        technologies: ["AWS WAF", "CloudFlare", "VPC", "Network ACLs"]
      },
      {
        id: "identity",
        title: "Identity & Access",
        description: "Multi-factor authentication, RBAC, SSO",
        icon: <Lock className="w-8 h-8" />,
        details: "Role-based access control with multi-factor authentication, single sign-on, and privileged access management.",
        technologies: ["CAC/PIV", "SAML 2.0", "Active Directory", "Okta"]
      },
      {
        id: "encryption",
        title: "Data Encryption",
        description: "End-to-end encryption at rest and in transit",
        icon: <Lock className="w-8 h-8" />,
        details: "FIPS 140-2 validated encryption for all data, with hardware security modules for key management.",
        technologies: ["AES-256", "TLS 1.3", "AWS KMS", "HSM"]
      },
      {
        id: "monitoring",
        title: "Security Monitoring",
        description: "SIEM, continuous monitoring, incident response",
        icon: <Zap className="w-8 h-8" />,
        details: "24/7 security monitoring with automated threat detection, incident response, and compliance reporting.",
        technologies: ["Splunk", "AWS CloudWatch", "SIEM", "IDS/IPS"]
      }
    ]
  }
];

export default function ArchitectureDiagram() {
  const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);
  const [selectedLayer, setSelectedLayer] = useState<ArchitectureLayer | null>(null);

  return (
    <div className="space-y-8">
      {/* Scenario Selector */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => setSelectedScenario(scenario)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedScenario.id === scenario.id
                ? "bg-orange-gradient text-white shadow-lg"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            {scenario.title}
          </button>
        ))}
      </div>

      {/* Scenario Description */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{selectedScenario.title}</h3>
        <p className="text-muted-foreground">{selectedScenario.description}</p>
      </div>

      {/* Architecture Layers */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedScenario.layers.map((layer, index) => (
          <Card
            key={layer.id}
            className="cursor-pointer hover:shadow-xl transition-all hover:scale-105 relative"
            onClick={() => setSelectedLayer(layer)}
          >
            <CardContent className="p-6">
              {/* Layer Number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 text-accent">
                {layer.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold mb-2">{layer.title}</h4>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">{layer.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {layer.technologies.slice(0, 2).map((tech, idx) => (
                  <span key={idx} className="text-xs bg-secondary px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {layer.technologies.length > 2 && (
                  <span className="text-xs text-muted-foreground">
                    +{layer.technologies.length - 2} more
                  </span>
                )}
              </div>

              {/* Click Indicator */}
              <div className="mt-4 text-xs text-accent font-semibold">
                Click for details →
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Layer Details Dialog */}
      <Dialog open={!!selectedLayer} onOpenChange={() => setSelectedLayer(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              <div className="text-accent">
                {selectedLayer?.icon}
              </div>
              {selectedLayer?.title}
            </DialogTitle>
            <DialogDescription className="text-base mt-4">
              {selectedLayer?.details}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6">
            <h4 className="font-bold mb-3">Technologies & Tools</h4>
            <div className="flex flex-wrap gap-3">
              {selectedLayer?.technologies.map((tech, idx) => (
                <span key={idx} className="bg-secondary px-4 py-2 rounded-lg font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 bg-accent/10 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Need help with this layer?</strong> Our TS/SCI cleared solution architects can provide detailed technical consultation tailored to your agency's requirements.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
