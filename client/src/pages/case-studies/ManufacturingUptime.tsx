import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";

export default function ManufacturingUptime() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 text-white">
        <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dot-grid-white.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Breadcrumb
              items={[
                { label: "Case Studies", href: "/case-studies" },
                { label: "Manufacturing Uptime" },
              ]}
              variant="dark"
              className="mb-8"
            />
          </motion.div>

          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">
              Manufacturing & Industrial
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Manufacturing Giant Achieves 99.2% Uptime
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
              How a Fortune 500 manufacturer transformed operations through
              predictive maintenance and industrial cybersecurity across fifty
              facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="container grid md:grid-cols-3 gap-12">
          {/* Key Metrics Sidebar */}
          <aside className="md:col-span-1 md:sticky md:top-24 self-start">
            <div className="bg-[oklch(0.97_0.01_250)] p-8 rounded-lg">
              <h3 className="text-[oklch(0.20_0.05_250)] text-xl font-bold mb-6">
                Key Metrics
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                  <div>
                    <p className="text-3xl font-bold text-[oklch(0.20_0.05_250)]">
                      99.2%
                    </p>
                    <p className="text-slate-600">System Uptime</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                  <div>
                    <p className="text-3xl font-bold text-[oklch(0.20_0.05_250)]">
                      75%
                    </p>
                    <p className="text-slate-600">Downtime Reduction</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                  <div>
                    <p className="text-3xl font-bold text-[oklch(0.20_0.05_250)]">
                      $18M
                    </p>
                    <p className="text-slate-600">Annual Savings</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2 mr-3"></span>
                  <div>
                    <p className="text-3xl font-bold text-[oklch(0.20_0.05_250)]">
                      50+
                    </p>
                    <p className="text-slate-600">Facilities Connected</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          {/* Article Content */}
          <article className="md:col-span-2 prose prose-lg max-w-none text-slate-600">
            <div>
              <h4 className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">
                The Opportunity
              </h4>
              <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6 tracking-tight">
                A manufacturing leader recognized that unplanned downtime was
                eroding competitive advantage.
              </h2>
              <p>
                Manufacturing excellence depends on reliability. A Fortune 500
                company operating more than fifty facilities across North America
                understood this principle intellectually, yet struggled to achieve
                it operationally. The organization experienced an average of eight
                percent unplanned downtime across its production lines, costing
                seventy-two million dollars annually in lost production,
                emergency repairs, and expedited shipping to meet customer
                commitments. Each unexpected equipment failure created cascading
                effects throughout the supply chain, damaging relationships with
                customers who depended on predictable delivery schedules.
              </p>
              <p>
                The company's leadership recognized that the problem extended
                beyond aging equipment. The organization's maintenance practices
                remained fundamentally reactive, responding to failures rather
                than preventing them. Industrial control systems that managed
                production lines lacked adequate cybersecurity protections,
                creating vulnerabilities that could enable both accidental
                disruptions and deliberate attacks. The company needed to
                transform its approach to operational technology, embracing
                predictive maintenance and modern security practices that would
                prevent problems rather than merely responding to them.
              </p>
            </div>

            <div className="mt-16">
              <h4 className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">
                The Solution
              </h4>
              <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6 tracking-tight">
                An integrated platform combined predictive maintenance with
                industrial cybersecurity.
              </h2>
              <p>
                The manufacturer needed a comprehensive solution that addressed
                both the technical and cultural dimensions of the reliability
                challenge. Working with NexDyne, the organization deployed an
                integrated platform combining industrial cybersecurity, IoT sensor
                networks, and artificial intelligence-powered predictive
                maintenance. The implementation began with a detailed assessment
                of equipment health, maintenance practices, and cybersecurity
                posture across all facilities, establishing baselines that would
                measure progress and identify priorities.
              </p>
              <p>
                The technical architecture deployed thousands of sensors across
                critical equipment, monitoring vibration, temperature, pressure,
                and other indicators that signal impending failures. Machine
                learning models trained on the company's historical maintenance
                data learned to recognize patterns that preceded equipment
                problems, enabling maintenance teams to intervene before failures
                occurred. The platform integrated with existing enterprise
                resource planning and computerized maintenance management
                systems, automatically generating work orders when predictive
                models identified equipment requiring attention.
              </p>
            </div>

            <div className="mt-16">
              <h4 className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">
                The Impact
              </h4>
              <h2 className="text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-6 tracking-tight">
                The transformation established a foundation for continuous
                improvement and competitive differentiation.
              </h2>
              <p>
                The transformation fundamentally changed how the manufacturer
                operates. Unplanned downtime decreased by seventy-five percent,
                with system uptime reaching 99.2 percent across all facilities.
                Maintenance teams shifted from fighting fires to preventing them,
                using predictive insights to schedule interventions during
                planned maintenance windows rather than responding to emergency
                failures. This shift improved both equipment reliability and
                maintenance team morale, as technicians could take pride in
                preventing problems rather than merely reacting to crises.
              </p>
              <p>
                The financial impact exceeded initial projections. The reduction
                in unplanned downtime saved eighteen million dollars annually in
                direct costs, while improved reliability enabled the company to
                accept additional customer commitments that generated substantial
                new revenue. Equipment lifespan increased by an average of thirty
                percent as predictive maintenance prevented the cascading damage
                that occurs when minor problems go unaddressed.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Ready to Enhance Your Operations?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Learn how NexDyne's industrial solutions can drive efficiency and
            reliability in your manufacturing environment.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/solutions/industrial-iot">
              <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
