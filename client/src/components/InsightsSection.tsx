import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { ImageWithLoader } from '@/components/ImageWithLoader';

export default function InsightsSection() {
  const featuredInsights = [
    {
      category: 'Automation Strategy',
      title: 'The ROI Methodology: Measuring Automation Success',
      excerpt: 'A comprehensive framework for calculating and tracking return on investment in intelligent automation initiatives.',
      date: 'Nov 10, 2024',
      readTime: '8 min read',
      image: '/roi-analytics.png',
      href: '/insights/roi-methodology'
    },
    {
      category: 'Cybersecurity',
      title: 'Zero-Trust Architecture for Federal Agencies',
      excerpt: 'Implementation strategies for zero-trust security in government environments with FedRAMP compliance.',
      date: 'Nov 8, 2024',
      readTime: '10 min read',
      image: '/zero-trust-capitol.png',
      href: '/insights/zero-trust'
    },
    {
      category: 'AI & Machine Learning',
      title: 'Responsible AI Implementation in Government',
      excerpt: 'Best practices for deploying AI systems that maintain transparency, accountability, and ethical standards.',
      date: 'Nov 5, 2024',
      readTime: '12 min read',
      image: '/responsible-ai-vr.png',
      href: '/insights/responsible-ai'
    }
  ];

  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-white overflow-hidden">
      <div className="container relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 sm:gap-4 lg:gap-8 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-8 sm:w-10 h-[2px] bg-[#FF6B35]"></div>
              <span className="text-[#FF6B35] font-semibold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em]">Insights</span>
            </div>
            
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-2 sm:mb-3 leading-[1.1] tracking-tight">
              Expert Perspectives
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
              Thought leadership and practical guidance on government technology, compliance, and digital transformation from our team of experts.
            </p>
          </motion.div>
          
          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/insights" className="group inline-flex items-center gap-2 text-[#0A2540] hover:text-[#FF6B35] font-semibold tracking-wider text-xs sm:text-sm uppercase transition-colors min-h-[44px]">
              View All Insights
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Insights Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {featuredInsights.map((insight, index) => (
            <motion.div
              key={insight.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={insight.href}>
                <Card className="group h-full bg-white border border-slate-200 hover:border-[#FF6B35] transition-all duration-300 overflow-hidden cursor-pointer">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ImageWithLoader
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                      <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-[#0A2540]/90 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-500 mb-2 sm:mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {insight.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {insight.readTime}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0A2540] mb-1.5 sm:mb-2 leading-tight group-hover:text-[#FF6B35] transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3 sm:mb-4">
                      {insight.excerpt}
                    </p>
                    
                    {/* Read More Link */}
                    <span className="inline-flex items-center gap-1.5 text-[#0A2540] group-hover:text-[#FF6B35] font-semibold text-[10px] sm:text-xs uppercase tracking-wider transition-colors">
                      Read Article
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
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
