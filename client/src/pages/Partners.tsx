import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cloud, Lock, Database, Zap, Cpu } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export default function Partners() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section - Clean White/Navy Editorial Design */}
      <section className="relative bg-white py-24 border-b border-border">
        <div className="container max-w-5xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb 
              items={[{ label: 'Partners' }]} 
              variant="dark" 
            />
          </div>
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Technology Partnerships</p>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              We implement the platforms you need—without vendor lock-in
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Thalen Technologies maintains strategic partnerships with 50+ FedRAMP and StateRAMP-authorized technology providers. We don't sell platforms—we help federal, state, and local agencies implement the right solutions for their mission requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Schedule Assessment <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/methodology">
                <Button size="lg" variant="outline">
                  View Our Methodology
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor-Neutral Positioning Statement */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold text-lg mb-2">Vendor-Neutral Consulting</h3>
              <p className="text-muted-foreground text-sm">
                We evaluate and recommend platforms based on your requirements—not commission structures.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold text-lg mb-2">Implementation Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Our team holds certifications across 50+ platforms—we implement what you choose, not what we sell.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold text-lg mb-2">Government-First Focus</h3>
              <p className="text-muted-foreground text-sm">
                All partnerships support FedRAMP/StateRAMP compliance for federal, state, and local agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FedRAMP/StateRAMP Authorized Platforms We Implement */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              FedRAMP & StateRAMP-authorized platforms we implement
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Our consulting team maintains active certifications and implementation experience across government-authorized cloud platforms, security tools, and enterprise software. We help you navigate vendor selection, procurement, and deployment.
            </p>
          </div>

          {/* Cloud Infrastructure & Platforms */}
          <div className="mb-16 pb-16 border-b border-border">
            <div className="flex items-center gap-3 mb-8">
              <Cloud className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Cloud Infrastructure & Platforms</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">AWS GovCloud (FedRAMP High)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Secure cloud infrastructure for federal agencies with IL4/IL5 workloads
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Migration & modernization consulting</li>
                  <li>• Landing zone design and implementation</li>
                  <li>• Cost optimization and FinOps</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Microsoft Azure Government</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Enterprise cloud platform with government-specific compliance
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Hybrid cloud architecture design</li>
                  <li>• Active Directory integration</li>
                  <li>• DevSecOps pipeline setup</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Google Cloud Platform (GCP)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Advanced data analytics and AI/ML capabilities for government
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• BigQuery data warehouse implementation</li>
                  <li>• Kubernetes (GKE) orchestration</li>
                  <li>• Vertex AI model deployment</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Oracle Cloud Infrastructure</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  High-performance infrastructure for mission-critical workloads
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Database migration and optimization</li>
                  <li>• Disaster recovery planning</li>
                  <li>• Autonomous database setup</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cybersecurity & Compliance */}
          <div className="mb-16 pb-16 border-b border-border">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Cybersecurity & Compliance</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Palo Alto Networks</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Next-generation firewall and zero-trust security architecture
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Zero-trust network design</li>
                  <li>• Prisma Cloud implementation</li>
                  <li>• Security policy automation</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">CrowdStrike Falcon</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Endpoint detection and response (EDR) for government agencies
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Endpoint protection deployment</li>
                  <li>• Threat hunting and incident response</li>
                  <li>• Integration with SIEM platforms</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Splunk Enterprise Security</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Security information and event management (SIEM) platform
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• SIEM architecture and deployment</li>
                  <li>• Custom dashboard development</li>
                  <li>• Compliance reporting automation</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Tenable.io</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Vulnerability management and continuous monitoring
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Continuous vulnerability scanning</li>
                  <li>• Risk-based prioritization</li>
                  <li>• Compliance dashboard setup</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data & Analytics Platforms */}
          <div className="mb-16 pb-16 border-b border-border">
            <div className="flex items-center gap-3 mb-8">
              <Database className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Data & Analytics Platforms</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Snowflake Government</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Cloud data warehouse for secure government analytics
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Data warehouse architecture design</li>
                  <li>• ETL pipeline development</li>
                  <li>• Data governance implementation</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Databricks</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Unified analytics platform for data engineering and AI
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lakehouse architecture setup</li>
                  <li>• ML model development and deployment</li>
                  <li>• Real-time streaming analytics</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Tableau Government</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Visual analytics and business intelligence platform
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dashboard and visualization design</li>
                  <li>• Self-service analytics enablement</li>
                  <li>• Enterprise deployment and governance</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Microsoft Power BI</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Business analytics and reporting for government agencies
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Report and dashboard development</li>
                  <li>• Power Query data transformation</li>
                  <li>• Embedded analytics integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process Automation & AI */}
          <div className="mb-16 pb-16 border-b border-border">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Process Automation & AI</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">UiPath Government Cloud</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Robotic process automation (RPA) for government workflows
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• RPA opportunity assessment</li>
                  <li>• Bot development and deployment</li>
                  <li>• Center of Excellence (CoE) setup</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Automation Anywhere</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Intelligent automation platform with AI capabilities
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Intelligent document processing</li>
                  <li>• Process discovery and mining</li>
                  <li>• Bot lifecycle management</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">OpenAI Azure Government</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Large language models (LLMs) for government use cases
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• LLM use case identification</li>
                  <li>• Prompt engineering and fine-tuning</li>
                  <li>• Responsible AI governance</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">DataRobot</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Automated machine learning (AutoML) platform
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Predictive model development</li>
                  <li>• Model monitoring and governance</li>
                  <li>• MLOps pipeline automation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enterprise Software & Integration */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Enterprise Software & Integration</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">ServiceNow Government</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  IT service management (ITSM) and workflow automation
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• ITSM implementation and configuration</li>
                  <li>• Custom workflow development</li>
                  <li>• Integration with legacy systems</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Salesforce Government Cloud</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Constituent relationship management (CRM) platform
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• CRM implementation and customization</li>
                  <li>• Lightning component development</li>
                  <li>• Data migration and integration</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">MuleSoft Anypoint</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  API-led integration platform for government agencies
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• API strategy and design</li>
                  <li>• Integration architecture</li>
                  <li>• Microservices implementation</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-lg mb-2">Workato</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Enterprise automation and integration platform (iPaaS)
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Low-code integration development</li>
                  <li>• Recipe library customization</li>
                  <li>• Cross-platform workflow automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help You Choose */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              How we help you navigate platform selection
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Our vendor-neutral consulting approach ensures you select and implement platforms based on mission requirements—not sales pressure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-3xl font-bold text-accent mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Requirements Analysis</h3>
              <p className="text-muted-foreground">
                We assess your current state, mission objectives, compliance requirements, and technical constraints to define platform evaluation criteria.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-3xl font-bold text-accent mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Vendor Evaluation</h3>
              <p className="text-muted-foreground">
                We evaluate FedRAMP/StateRAMP-authorized platforms against your criteria, providing objective scoring and recommendations without vendor bias.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-3xl font-bold text-accent mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Implementation & Optimization</h3>
              <p className="text-muted-foreground">
                Once you select a platform, our certified engineers implement, configure, and optimize it for your specific use cases and workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="bg-primary text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need help selecting the right platforms for your agency?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a free 60-minute assessment to discuss your requirements and explore FedRAMP/StateRAMP-authorized solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                Schedule Free Assessment <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
