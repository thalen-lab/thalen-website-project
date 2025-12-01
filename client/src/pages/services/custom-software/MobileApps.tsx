import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, Smartphone, Tablet, Zap, Users, 
  CheckCircle2, Cloud, Bell, Lock, BarChart3, Wifi
} from 'lucide-react';
import { Link } from 'wouter';

export default function MobileApps() {
  const platforms = [
    {
      icon: Smartphone,
      title: "Native iOS Development",
      description: "Swift-based iOS apps optimized for iPhone and iPad with native performance.",
      features: ["Swift & SwiftUI", "App Store optimization", "iOS-specific features", "TestFlight beta testing"]
    },
    {
      icon: Tablet,
      title: "Native Android Development",
      description: "Kotlin-based Android apps for phones, tablets, and wearables.",
      features: ["Kotlin & Jetpack Compose", "Google Play deployment", "Material Design", "Android fragmentation handling"]
    },
    {
      icon: Zap,
      title: "Cross-Platform Development",
      description: "Single codebase for iOS and Android using React Native or Flutter.",
      features: ["React Native / Flutter", "Shared business logic", "Platform-specific UI", "Faster time to market"]
    }
  ];

  const features = [
    { icon: Bell, title: "Push Notifications", desc: "Engage users with timely alerts" },
    { icon: Lock, title: "Biometric Authentication", desc: "Face ID, Touch ID, fingerprint" },
    { icon: Cloud, title: "Cloud Sync", desc: "Real-time data synchronization" },
    { icon: Wifi, title: "Offline Mode", desc: "Work without internet connection" },
    { icon: BarChart3, title: "Analytics Integration", desc: "Track user behavior and metrics" },
    { icon: Users, title: "Social Login", desc: "Sign in with Google, Apple, Facebook" }
  ];

  const caseStudy = {
    client: "FinTech Startup",
    challenge: "Build a mobile banking app with biometric auth, real-time transactions, and offline mode for 100K+ users.",
    solution: "Developed native iOS and Android apps with end-to-end encryption, push notifications, and seamless cloud sync.",
    results: [
      { metric: "App Store Rating", value: "4.8/5" },
      { metric: "Active Users", value: "150K+" },
      { metric: "Transactions/Month", value: "500K+" },
      { metric: "Crash-Free Rate", value: "99.9%" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl">
            <div className="text-sm mb-4">
              <Link href="/services/custom-software" className="hover:underline opacity-80">Custom Software Solutions</Link>
              <span className="mx-2">/</span>
              <span>Mobile App Development</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Native iOS, Android, and cross-platform mobile apps that delight users. From consumer apps to enterprise mobility solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
                <Link href="/contact">
                  Discuss Your App Idea
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Options */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right approach for your app: native for performance or cross-platform for speed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <platform.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{platform.title}</h3>
                  <p className="text-muted-foreground mb-6">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Essential Mobile Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern mobile app capabilities that users expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mobile Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to App Store launch in 12-16 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "UX/UI Design",
                description: "User research, wireframes, high-fidelity mockups, and interactive prototypes.",
                duration: "2-3 weeks"
              },
              {
                phase: "Development",
                description: "Agile sprints, weekly builds, and continuous integration/deployment.",
                duration: "8-12 weeks"
              },
              {
                phase: "Testing & QA",
                description: "Device testing, performance optimization, security audit, and beta testing.",
                duration: "2-3 weeks"
              },
              {
                phase: "Launch & Support",
                description: "App Store submission, marketing assets, monitoring, and post-launch updates.",
                duration: "1-2 weeks"
              }
            ].map((item, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.phase}</h3>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                <div className="text-sm text-accent font-semibold">{item.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Story</h2>
          </div>

          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-12">
              <div className="text-sm text-accent font-semibold mb-2">{caseStudy.client}</div>
              <h3 className="text-3xl font-bold mb-6">Mobile Banking App Reaches 150K+ Users</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold mb-2">Challenge</h4>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Solution</h4>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 pt-6 border-t">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">{result.value}</div>
                    <div className="text-sm text-muted-foreground">{result.metric}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Types of Mobile Apps We Build</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Consumer Apps", examples: ["Social networking", "E-commerce", "On-demand services", "Entertainment"] },
              { title: "Enterprise Apps", examples: ["Field service", "Sales enablement", "Inventory management", "Employee portals"] },
              { title: "FinTech Apps", examples: ["Mobile banking", "Payment processing", "Investment platforms", "Expense tracking"] },
              { title: "HealthTech Apps", examples: ["Telemedicine", "Fitness tracking", "Patient portals", "Medication reminders"] }
            ].map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                  <ul className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mobile App Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Investment varies based on complexity, features, and platform choice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: "Simple App",
                price: "$40K - $80K",
                features: ["Single platform (iOS or Android)", "5-10 screens", "Basic features", "API integration", "3 months timeline"]
              },
              {
                tier: "Complex App",
                price: "$80K - $150K",
                features: ["iOS + Android (cross-platform)", "15-25 screens", "Advanced features", "Backend development", "4-6 months timeline"]
              },
              {
                tier: "Enterprise App",
                price: "$150K+",
                features: ["Native iOS + Android", "Complex workflows", "Enterprise integrations", "Custom backend", "6+ months timeline"]
              }
            ].map((tier, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-bold text-accent mb-6">{tier.price}</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's turn your app idea into reality with a user-centric mobile experience.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90" asChild>
            <Link href="/contact">
              Start Your Mobile Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
