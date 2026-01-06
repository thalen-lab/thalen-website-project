import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Heart, Calendar, Users, MapPin, ExternalLink } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function SocialResponsibility() {
  const initiatives = [
    {
      image: '/img/social/stem-education.jpg',
      title: 'STEM Education',
      description: 'Supporting the next generation of technology leaders through scholarships, mentorship programs, and partnerships with universities and community colleges.'
    },
    {
      image: '/img/social/veteran-employment.jpg',
      title: 'Veteran Employment',
      description: 'Committed to hiring and supporting military veterans transitioning to civilian careers in technology and government consulting.'
    },
    {
      image: '/img/social/community-outreach.jpg',
      title: 'Community Outreach',
      description: 'Active engagement with local communities through volunteer programs, technology donations, and pro-bono consulting for nonprofits.'
    },
    {
      image: '/img/social/sustainability.webp',
      title: 'Environmental Sustainability',
      description: 'Implementing green IT practices, reducing our carbon footprint, and helping clients achieve their sustainability goals through efficient technology solutions.'
    },
    {
      image: '/img/social/diversity-inclusion.png',
      title: 'Diversity & Inclusion',
      description: 'Building a workplace that celebrates diversity and fosters inclusion, ensuring equal opportunities for all team members.'
    },
    {
      image: '/img/social/small-business.jpg',
      title: 'Small Business Support',
      description: 'Partnering with small and disadvantaged businesses to create opportunities and strengthen the government contracting ecosystem.'
    }
  ];

  const upcomingWorkshops = [
    {
      title: 'Introduction to RPA for Government Agencies',
      date: 'February 15, 2026',
      location: 'Virtual Webinar',
      description: 'Learn the fundamentals of Robotic Process Automation and how it can transform your agency operations.'
    },
    {
      title: 'Agentic AI: The Future of Intelligent Automation',
      date: 'March 8, 2026',
      location: 'Washington, DC',
      description: 'Explore how AI agents can autonomously handle complex workflows and decision-making processes.'
    },
    {
      title: 'Building Your First Automation: Hands-On Workshop',
      date: 'March 22, 2026',
      location: 'Virtual Workshop',
      description: 'A practical, hands-on session where participants build their first automation bot.'
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
                At NexDyne Technology, we believe that success is measured not just by business outcomes, but by the positive impact we create in our communities, for our people, and for the planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section - Text Left, Image Right */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Our Commitment
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#0A2540]">
                Building Stronger Communities Through Technology
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At NexDyne Technology, our commitment to social responsibility extends far beyond the boundaries of our business operations. We recognize that as a technology leader serving government agencies and enterprises, we have both the opportunity and the obligation to leverage our expertise for the greater good of our communities.
                </p>
                <p>
                  For over two decades, we have invested in programs that create lasting, meaningful change. From supporting STEM education initiatives that inspire the next generation of innovators, to providing career pathways for military veterans transitioning to civilian life, our social impact programs reflect our core values of service, excellence, and integrity.
                </p>
                <p>
                  We believe that technology should be a force for positive transformation—not just in the organizations we serve, but in the lives of individuals and communities across the nation. This belief drives every initiative we undertake and every partnership we forge.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/social/commitment-team.jpg" 
                  alt="NexDyne team collaborating on community initiatives"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 to-transparent"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#0A2540]/10 to-[#0A2540]/5 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Agency Workshops Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A2540] to-[#12344D] text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/social/rpa-workshop.jpg" 
                  alt="RPA and automation workshop training session"
                  className="w-full h-[400px] lg:h-[450px] object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Community Education
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Empowering Local Agencies Through Automation Education
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  We are deeply committed to helping local government agencies and small organizations understand and harness the transformative power of automation technologies. Through our free workshops and webinars, we demystify Robotic Process Automation (RPA) and Agentic AI, making these powerful tools accessible to agencies of all sizes.
                </p>
                <p>
                  Our educational programs are designed specifically for government professionals who want to modernize their operations but may lack the resources or expertise to get started. From introductory sessions that explain the fundamentals of automation, to hands-on workshops where participants build their first bots, we provide the knowledge and confidence agencies need to begin their automation journey.
                </p>
                <p>
                  By investing in this education, we're not just sharing technology—we're helping create more efficient, responsive government services that better serve citizens across our communities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Upcoming Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center">Upcoming Workshops & Webinars</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingWorkshops.map((workshop, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-white mb-3">{workshop.title}</h4>
                    <div className="flex items-center gap-2 text-orange-300 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {workshop.location}
                    </div>
                    <p className="text-white/70 text-sm mb-4">{workshop.description}</p>
                    <Link href="/events">
                      <Button variant="outline" size="sm" className="border-orange-400 text-orange-300 hover:bg-orange-500/20 w-full">
                        Register Now <ExternalLink className="ml-2 w-3 h-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#0A2540]">Our Social Impact Initiatives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're dedicated to creating lasting positive change through meaningful initiatives that align with our values and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={initiative.image} 
                      alt={initiative.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">{initiative.title}</h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600">{initiative.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
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
              Get Involved
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#0A2540]">
              Partner With Us for Greater Impact
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you're interested in attending our workshops, partnering on community initiatives, or exploring how we can support your organization's social responsibility goals, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  View Upcoming Events <Calendar className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
