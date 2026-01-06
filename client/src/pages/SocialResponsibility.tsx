import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Heart, Users, Globe, Leaf, GraduationCap, Building2 } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function SocialResponsibility() {
  const initiatives = [
    {
      icon: GraduationCap,
      title: 'STEM Education',
      description: 'Supporting the next generation of technology leaders through scholarships, mentorship programs, and partnerships with universities and community colleges.'
    },
    {
      icon: Users,
      title: 'Veteran Employment',
      description: 'Committed to hiring and supporting military veterans transitioning to civilian careers in technology and government consulting.'
    },
    {
      icon: Globe,
      title: 'Community Outreach',
      description: 'Active engagement with local communities through volunteer programs, technology donations, and pro-bono consulting for nonprofits.'
    },
    {
      icon: Leaf,
      title: 'Environmental Sustainability',
      description: 'Implementing green IT practices, reducing our carbon footprint, and helping clients achieve their sustainability goals through efficient technology solutions.'
    },
    {
      icon: Heart,
      title: 'Diversity & Inclusion',
      description: 'Building a workplace that celebrates diversity and fosters inclusion, ensuring equal opportunities for all team members.'
    },
    {
      icon: Building2,
      title: 'Small Business Support',
      description: 'Partnering with small and disadvantaged businesses to create opportunities and strengthen the government contracting ecosystem.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-20 text-white">
        <div className="absolute inset-0 bg-[url('/img/patterns/hero-pattern.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="relative container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb 
              items={[
                { label: 'About', href: '/about' },
                { label: 'Social Responsibility' }
              ]} 
              variant="light" 
              className="mb-6 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-2xl xs:text-3xl sm:text-xl xs:text-2xl sm:text-2xl xs:text-3xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 text-center leading-tight text-white">
                Making a Difference Beyond Technology
              </h1>
              
              <p className="text-base md:text-lg text-white/90 text-center max-w-3xl mx-auto">
                At Thalen Technologies, we believe that success is measured not just by business outcomes, but by the positive impact we create in our communities, for our people, and for the planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Commitment to Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're dedicated to creating lasting positive change through meaningful initiatives that align with our values and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 md:gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-3 sm:p-4 md:p-6 md:p-8">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                      <initiative.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                    <p className="text-gray-600">{initiative.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              More Details Coming Soon
            </div>
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Full Social Responsibility Report
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              We're currently compiling our comprehensive social responsibility report, including detailed metrics, success stories, and our roadmap for continued community impact. Check back soon for the complete story.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
