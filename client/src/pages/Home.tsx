import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Shield, 
  Cloud, 
  BarChart3,
  Cpu,
  Code,
  Users,
  FileCheck,
  Zap,
  Database
} from 'lucide-react';

export default function Home() {
  const servicesLeft = [
    {
      icon: Cpu,
      title: 'Process Automation & RPA',
      description: 'Streamline government operations with intelligent automation solutions that reduce manual work, minimize errors, and accelerate service delivery while maintaining compliance.',
      href: '/services/automation'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Intelligence',
      description: 'Transform raw data into actionable insights with advanced analytics platforms that enable evidence-based decision making and improve program outcomes.',
      href: '/services/data-analytics'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Security',
      description: 'Modernize IT infrastructure with secure, scalable cloud solutions that meet FedRAMP requirements and support mission-critical applications.',
      href: '/services/cloud'
    }
  ];

  const servicesRight = [
    {
      icon: FileCheck,
      title: 'Compliance & Governance',
      description: 'Navigate complex regulatory requirements with comprehensive compliance frameworks that ensure adherence to federal standards and protect sensitive data.',
      href: '/services/cybersecurity'
    },
    {
      icon: Code,
      title: 'Application Development & Integration',
      description: 'Build and integrate custom applications that connect legacy systems with modern platforms, enabling seamless data flow and improved user experiences.',
      href: '/services/system-integration'
    },
    {
      icon: Zap,
      title: 'Digital Transformation & Modernization',
      description: 'Lead organizational change with strategic technology initiatives that modernize processes, enhance citizen services, and drive operational excellence.',
      href: '/services/digital-transformation'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a1628]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]" />
        
        <div className="container relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Government<br />
            Technology<br />
            Implementation<br />
            Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            We deliver end-to-end technology solutions that modernize government operations, enhance security, and improve citizen services through proven implementation expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#ff6b35] hover:bg-[#ff5520] text-white px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">
                Schedule Assessment
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Two Ways We Serve Section */}
      <section className="py-20 px-4 bg-[#0f1f3a]">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Two Ways We Serve<br />Government Agencies
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Whether you need to optimize existing systems or implement new technology platforms, we provide comprehensive solutions tailored to your mission requirements and compliance needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              {servicesLeft.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-[#0a1628] border-gray-700 hover:border-[#ff6b35] transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center group-hover:bg-[#ff6b35]/20 transition-colors">
                          <Icon className="w-6 h-6 text-[#ff6b35]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <Link href={service.href}>
                            <span className="inline-flex items-center text-[#ff6b35] hover:text-[#ff5520] font-medium group-hover:gap-2 transition-all">
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {servicesRight.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-[#0a1628] border-gray-700 hover:border-[#ff6b35] transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center group-hover:bg-[#ff6b35]/20 transition-colors">
                          <Icon className="w-6 h-6 text-[#ff6b35]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <Link href={service.href}>
                            <span className="inline-flex items-center text-[#ff6b35] hover:text-[#ff5520] font-medium group-hover:gap-2 transition-all">
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-[#0a1628]">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Agency?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our government technology experts to discuss your modernization goals and compliance requirements.
          </p>
          <Button 
            size="lg" 
            className="bg-[#ff6b35] hover:bg-[#ff5520] text-white px-8 py-6 text-lg font-semibold"
            asChild
          >
            <Link href="/contact">
              Contact Us Today
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
