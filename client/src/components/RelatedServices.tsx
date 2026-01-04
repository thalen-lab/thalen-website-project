import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
}

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
  description?: string;
}

export default function RelatedServices({ 
  services, 
  title = "Related Services",
  description = "Explore complementary services that work together with this solution."
}: RelatedServicesProps) {
  return (
    <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_250)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Explore More</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">{title}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <Card className="bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 cursor-pointer h-full group">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)] mb-3 group-hover:text-[oklch(0.55_0.18_55)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[oklch(0.65_0.18_55)] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
