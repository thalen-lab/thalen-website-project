import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { motion } from 'framer-motion';

export default function WhoWeAreSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl rounded-lg">
              <ImageWithLoader
                src="/security-operations-team.jpg"
                alt="Security operations team monitoring critical infrastructure"
                className="w-full h-auto"
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none"></div>
              
              {/* Decorative accent element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10"
          >
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
              What we do
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Comprehensive Technology Solutions
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              From cloud modernization and cybersecurity to data analytics and AI/ML, we deliver end-to-end technology solutions tailored for government and regulated sectors. Our services include intelligent automation, DevSecOps, application development, and digital transformation—all designed with compliance-first architecture and measurable outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="#services">
                  Core Capabilities
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2">
                <Link href="/about#team">
                  Join our team
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
