import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Newspaper, Calendar, Bell, TrendingUp, Award, Users } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function NewsUpdates() {
  const newsItems = [
    {
      date: 'January 2026',
      category: 'Company News',
      title: 'Thalen Technologies Expands Federal Practice',
      description: 'New hires and expanded capabilities position Thalen for continued growth in federal automation services.',
      icon: TrendingUp
    },
    {
      date: 'December 2025',
      category: 'Awards',
      title: 'Recognized as Top Government IT Contractor',
      description: 'Industry recognition for excellence in government technology modernization and automation solutions.',
      icon: Award
    },
    {
      date: 'November 2025',
      category: 'Partnership',
      title: 'Strategic Partnership Announcement',
      description: 'New technology partnerships expand our capabilities in AI-powered automation and cloud services.',
      icon: Users
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
                { label: 'News & Updates' }
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
                News & Updates
              </h1>
              
              <p className="text-base md:text-lg text-white/90 text-center max-w-3xl mx-auto">
                Stay informed about the latest developments at Thalen Technologies, including company announcements, industry recognition, and partnership news.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Latest News</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recent announcements and updates from Thalen Technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 md:gap-8 max-w-5xl mx-auto">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-3 sm:p-4 md:p-6 md:p-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Bell className="w-4 h-4" />
              More Updates Coming Soon
            </div>
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Stay Connected
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              We're building out our news section with more detailed coverage of company developments, industry insights, and thought leadership. Subscribe to stay updated.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
