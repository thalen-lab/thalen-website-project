import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Partners() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Orange Gradient */}
      <section className="relative bg-orange-gradient py-32 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-white/80 mb-4">Partners</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Together we deliver enterprise-grade solutions
              </h1>
            </div>
            
            {/* Partner Logo Visualization */}
            <div className="relative">
              <div className="bg-[oklch(0.35_0.05_250)] rounded-[3rem] p-12 transform rotate-6">
                <div className="grid grid-cols-3 gap-4">
                  {/* Placeholder partner logos in organic shape */}
                  <div className="bg-accent/30 rounded-2xl p-6 flex items-center justify-center text-white font-bold text-sm">
                    AWS
                  </div>
                  <div className="bg-accent/40 rounded-2xl p-6 flex items-center justify-center text-white font-bold text-lg">
                    UiPath
                  </div>
                  <div className="bg-accent/30 rounded-2xl p-6 flex items-center justify-center text-white font-bold text-sm">
                    Google
                  </div>
                  <div className="bg-accent/40 rounded-2xl p-6 flex items-center justify-center text-white font-bold text-sm">
                    Palo Alto
                  </div>
                  <div className="bg-accent/50 rounded-2xl p-6 flex items-center justify-center text-white font-bold text-xl">
                    OpenAI
                  </div>
                  <div className="bg-accent/30 rounded-2xl p-6 flex items-center justify-center text-white font-bold text-sm">
                    Splunk
                  </div>
                  <div className="bg-accent/30 rounded-2xl p-6 flex items-center justify-center text-white font-bold text-sm">
                    Snowflake
                  </div>
                  <div className="bg-accent/40 rounded-2xl p-6 flex items-center justify-center text-white font-bold text-sm">
                    ServiceNow
                  </div>
                  <div className="bg-accent/30 rounded-2xl p-6 flex items-center justify-center text-white font-bold text-sm">
                    Azure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners We Are Proud Of */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-primary">
            Partners we are proud of
          </h2>

          {/* Process Automation */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-primary">Process Automation</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-6xl font-bold text-accent mb-4">Ui</div>
                <h4 className="text-xl font-bold text-primary">UiPath</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">AA</div>
                <h4 className="text-xl font-bold text-primary">Automation Anywhere</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">BP</div>
                <h4 className="text-xl font-bold text-primary">Blue Prism</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">W</div>
                <h4 className="text-xl font-bold text-primary">Workato</h4>
              </div>
            </div>
          </div>

          {/* Cloud Platforms */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-primary">Cloud Platforms</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">AWS</div>
                <h4 className="text-xl font-bold text-primary">AWS GovCloud</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">GC</div>
                <h4 className="text-xl font-bold text-primary">Google Cloud</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">Az</div>
                <h4 className="text-xl font-bold text-primary">Microsoft Azure</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">OC</div>
                <h4 className="text-xl font-bold text-primary">Oracle Cloud</h4>
              </div>
            </div>
          </div>

          {/* Data & Analytics */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-primary">Data & Analytics</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">❄</div>
                <h4 className="text-xl font-bold text-primary">Snowflake</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">DB</div>
                <h4 className="text-xl font-bold text-primary">Databricks</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">T</div>
                <h4 className="text-xl font-bold text-primary">Tableau</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">PB</div>
                <h4 className="text-xl font-bold text-primary">Power BI</h4>
              </div>
            </div>
          </div>

          {/* Cybersecurity */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-primary">Cybersecurity</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">PA</div>
                <h4 className="text-xl font-bold text-primary">Palo Alto Networks</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">CS</div>
                <h4 className="text-xl font-bold text-primary">CrowdStrike</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">S</div>
                <h4 className="text-xl font-bold text-primary">Splunk</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">F5</div>
                <h4 className="text-xl font-bold text-primary">F5 Networks</h4>
              </div>
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-primary">AI & Machine Learning</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">⚡</div>
                <h4 className="text-xl font-bold text-primary">OpenAI</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">A</div>
                <h4 className="text-xl font-bold text-primary">Anthropic</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">DR</div>
                <h4 className="text-xl font-bold text-primary">DataRobot</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">H2</div>
                <h4 className="text-xl font-bold text-primary">H2O.ai</h4>
              </div>
            </div>
          </div>

          {/* Enterprise Software */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-primary">Enterprise Software</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">SN</div>
                <h4 className="text-xl font-bold text-primary">ServiceNow</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">SF</div>
                <h4 className="text-xl font-bold text-primary">Salesforce</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">SAP</div>
                <h4 className="text-xl font-bold text-primary">SAP</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">WD</div>
                <h4 className="text-xl font-bold text-primary">Workday</h4>
              </div>
            </div>
          </div>

          {/* DevOps & Integration */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-primary">DevOps & Integration</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">GH</div>
                <h4 className="text-xl font-bold text-primary">GitHub</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">GL</div>
                <h4 className="text-xl font-bold text-primary">GitLab</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">JK</div>
                <h4 className="text-xl font-bold text-primary">Jenkins</h4>
              </div>
              <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center hover:border-accent transition-colors group">
                <div className="text-5xl font-bold text-accent mb-4">K8</div>
                <h4 className="text-xl font-bold text-primary">Kubernetes</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to leverage our partner ecosystem?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Our strategic partnerships enable us to deliver best-in-class solutions tailored to your mission-critical needs.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full transition-colors">
              Contact Us
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
