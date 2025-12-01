import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
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
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl cursor-pointer h-full group">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="flex items-center text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
