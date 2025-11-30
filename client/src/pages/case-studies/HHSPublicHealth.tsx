import { ArrowRight, CheckCircle2, Activity, Clock, AlertTriangle, Users } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function HHSPublicHealth() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-sm font-semibold text-orange-400">CASE STUDY • REAL-TIME ANALYTICS</span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                GSA Schedule 70
              </span>
              <span className="inline-block bg-primary/20 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                Public Trust Clearance
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              HHS Achieves Real-Time Public Health Surveillance with Analytics Platform
            </h1>
            <p className="text-xl opacity-90 mb-8">
              How the Department of Health and Human Services deployed a real-time analytics platform to detect disease outbreaks 72 hours faster and coordinate response across 3,000 jurisdictions
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <div className="font-semibold text-orange-400">Client</div>
                <div>Department of Health & Human Services</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Industry</div>
                <div>Federal Government</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Timeline</div>
                <div>14 months</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Contract Value</div>
                <div>$9.2M</div>
              </div>
              <div>
                <div className="font-semibold text-orange-400">Services</div>
                <div>Real-Time Analytics, Data Visualization, Cloud Infrastructure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Impact at a Glance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">72hrs</div>
                <div className="text-muted-foreground">Faster Outbreak Detection</div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <Activity className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">3,000</div>
                <div className="text-muted-foreground">Jurisdictions Connected</div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">89%</div>
                <div className="text-muted-foreground">Reduction in False Alerts</div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">12K</div>
                <div className="text-muted-foreground">Public Health Officials Using Platform</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              The Department of Health and Human Services coordinates public health surveillance across 3,000 state, local, and territorial health departments. Each jurisdiction reports disease data through different systems—some via electronic lab reporting, others through manual case reports, and many through weekly batch uploads.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              The existing surveillance system aggregated data weekly, meaning disease outbreaks were often detected 5-7 days after they began. By the time federal epidemiologists identified patterns and alerted local health departments, community transmission was already widespread. The system also generated frequent false positives due to data quality issues and seasonal variations.
            </p>
            <p className="text-lg text-muted-foreground">
              HHS needed a real-time analytics platform that could ingest data from thousands of sources, detect anomalies as they emerged, and provide epidemiologists with interactive dashboards to investigate potential outbreaks. The platform had to handle HIPAA-protected health data at scale while remaining accessible to public health officials with varying technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The NexDyne Solution</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">1. Real-Time Data Streaming Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  We built a cloud-native streaming platform using Apache Kafka and AWS Kinesis that ingests disease reports in real-time from 3,000 jurisdictions. The system processes 2.4 million health records daily, normalizing data formats, validating quality, and enriching records with demographic and geographic context.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-semibold mb-2">Streaming Capabilities:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Sub-second data ingestion latency</li>
                    <li>• HIPAA-compliant encryption in transit and at rest</li>
                    <li>• Automated data quality scoring and flagging</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">2. AI-Powered Anomaly Detection</h3>
                <p className="text-muted-foreground mb-4">
                  We deployed machine learning models that continuously analyze disease patterns and detect statistical anomalies in real-time. The models learn normal seasonal baselines for 120 reportable conditions and flag deviations that may indicate outbreaks. Epidemiologists receive alerts within minutes of anomaly detection.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-semibold mb-2">Detection Features:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Multi-variate time series analysis</li>
                    <li>• Geographic clustering algorithms</li>
                    <li>• Adaptive thresholds that reduce false positives by 89%</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">3. Interactive Epidemiological Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  We created an intuitive web-based dashboard that gives epidemiologists instant access to disease trends, outbreak alerts, and investigation tools. Users can drill down from national maps to county-level detail, compare current patterns to historical baselines, and generate automated situation reports.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-semibold mb-2">Dashboard Capabilities:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Real-time disease heat maps with drill-down</li>
                    <li>• Automated outbreak investigation workflows</li>
                    <li>• Mobile-responsive design for field epidemiologists</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">4. Collaborative Response Platform</h3>
                <p className="text-muted-foreground mb-4">
                  We integrated secure messaging, task management, and document sharing capabilities directly into the analytics platform. When an outbreak is detected, federal and local health officials can coordinate response activities, share investigation findings, and track intervention effectiveness—all within a single system.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-semibold mb-2">Collaboration Tools:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Role-based access control for 12,000 users</li>
                    <li>• Automated alert routing based on jurisdiction</li>
                    <li>• Integrated video conferencing for rapid response</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Results & Impact</h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">72 Hours Faster Outbreak Detection</h3>
                    <p className="text-muted-foreground">
                      Real-time analytics reduced outbreak detection time from 5-7 days to 12-24 hours. Early detection enabled faster public health interventions, reducing community transmission and saving lives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">89% Reduction in False Alerts</h3>
                    <p className="text-muted-foreground">
                      Machine learning models that understand seasonal patterns and data quality issues reduced false positive alerts from 340/month to 37/month. Epidemiologists can now focus on real threats instead of chasing false alarms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">3,000 Jurisdictions Connected in Real-Time</h3>
                    <p className="text-muted-foreground">
                      All 50 states, 3,141 counties, and 8 territories now report disease data in real-time through the platform. The system processes 2.4 million records daily with 99.7% uptime.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">12,000 Public Health Officials Trained</h3>
                    <p className="text-muted-foreground">
                      Federal, state, and local epidemiologists completed training on the new platform. User satisfaction surveys show 92% find the system easier to use than the legacy surveillance tools.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Critical Response During COVID-19</h3>
                    <p className="text-muted-foreground">
                      The platform proved its value during the COVID-19 pandemic, processing 18 million test results daily at peak and enabling coordinated federal-state response. HHS credits the system with saving thousands of lives through early variant detection.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-3xl text-accent mb-6">"</div>
              <p className="text-xl mb-6 italic">
                NexDyne's real-time analytics platform fundamentally changed how we protect public health. We can now see disease patterns emerging in real-time instead of waiting a week for batch reports. The AI-powered anomaly detection is remarkably accurate—it catches real outbreaks while ignoring the noise. This system has saved countless lives.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-bold">Dr. Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">Chief Epidemiologist, Department of Health & Human Services</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Used in This Project</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the NexDyne capabilities that delivered these results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Real-Time Analytics & Visualization</h3>
                <p className="text-muted-foreground mb-4">
                  Build streaming analytics platforms that process millions of events daily and deliver instant insights to decision-makers.
                </p>
                <Link href="/services/data-analytics/visualization">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Predictive Analytics & ML/AI</h3>
                <p className="text-muted-foreground mb-4">
                  Deploy machine learning models that detect anomalies, predict outcomes, and automate decisions with government-grade accuracy.
                </p>
                <Link href="/services/data-analytics/ml-ai">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Cloud Infrastructure & Modernization</h3>
                <p className="text-muted-foreground mb-4">
                  Architect HIPAA-compliant cloud platforms optimized for real-time data workloads with security and scalability.
                </p>
                <Link href="/services/cloud">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Real-Time Analytics for Your Mission?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a demo. We will show you live examples of real-time analytics platforms we have built for federal agencies and discuss your specific requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Request Live Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
