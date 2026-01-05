import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { useLQIP } from '@/hooks/useLQIP';
import { usePrefetch } from '@/hooks/usePrefetch';
import { prefetchImage } from '@/lib/prefetch';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import PullToRefresh from '@/components/PullToRefresh';
import { toast } from 'sonner';
import { triggerHaptic } from '@/lib/haptics';

export default function Insights() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());
  const itemsPerPage = 9;

  const gridRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const [swipeDeltaX, setSwipeDeltaX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const handleRefresh = useCallback(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastRefreshed(new Date());
    toast.success('Content refreshed', {
      description: `Last updated: ${new Date().toLocaleTimeString()}`,
    });
  }, []);

  const insights = [
    {
      category: 'Automation Strategy',
      title: 'The ROI Methodology: Measuring Automation Success',
      excerpt: 'A comprehensive framework for calculating and tracking return on investment in intelligent automation initiatives.',
      author: 'Sarah Chen',
      authorSlug: 'sarah-chen',
      date: 'Nov 10, 2024',
      readTime: '8 min read',
      tags: ['ROI', 'Automation'],
      image: '/roi-analytics.png',
      href: '/insights/roi-methodology'
    },
    {
      category: 'Cybersecurity',
      title: 'Zero-Trust Architecture for Federal Agencies',
      excerpt: 'Implementation strategies for zero-trust security in government environments with FedRAMP compliance.',
      author: 'Michael Rodriguez',
      authorSlug: 'michael-rodriguez',
      date: 'Nov 8, 2024',
      readTime: '10 min read',
      tags: ['Security', 'Compliance'],
      image: '/zero-trust-capitol.png',
      href: '/insights/zero-trust'
    },
    {
      category: 'AI & Machine Learning',
      title: 'Responsible AI Implementation in Government',
      excerpt: 'Best practices for deploying AI systems that maintain transparency, accountability, and ethical standards.',
      author: 'Dr. Jennifer Park',
      authorSlug: 'jennifer-park',
      date: 'Nov 5, 2024',
      readTime: '12 min read',
      tags: ['AI', 'Ethics'],
      image: '/responsible-ai-vr.png',
      href: '/insights/responsible-ai'
    },
    {
      category: 'Cloud Modernization',
      title: 'Multi-Cloud Strategy: Avoiding Vendor Lock-In',
      excerpt: 'How to design cloud architectures that maintain flexibility across AWS, Azure, and Google Cloud.',
      author: 'David Thompson',
      authorSlug: 'david-thompson',
      date: 'Nov 1, 2024',
      readTime: '9 min read',
      tags: ['Cloud', 'Architecture'],
      image: '/images/insights/multi-cloud-team.png',
      href: '/insights/multi-cloud'
    },
    {
      category: 'Digital Transformation',
      title: 'Change Management: The Key to Transformation Success',
      excerpt: 'Why 70% of digital transformations fail and how to ensure yours succeeds through effective change management.',
      author: 'Lisa Martinez',
      authorSlug: 'lisa-martinez',
      date: 'Oct 28, 2024',
      readTime: '11 min read',
      tags: ['Transformation', 'Leadership'],
      image: '/insights-change-management.png',
      href: '/insights/change-management'
    },
    {
      category: 'Data Analytics',
      title: 'Real-Time Analytics at Government Scale',
      excerpt: 'Architecture patterns and technologies for processing billions of data points with sub-second latency.',
      author: 'James Wilson',
      authorSlug: 'james-wilson',
      date: 'Oct 25, 2024',
      readTime: '10 min read',
      tags: ['Analytics', 'Architecture'],
      image: '/insights-realtime-analytics.png',
      href: '/insights/real-time-analytics'
    }
  ];

  const categories = ['All', 'Automation Strategy', 'Cybersecurity', 'AI & Machine Learning', 'Cloud Modernization', 'Digital Transformation', 'Data Analytics'];

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      insight.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredInsights.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedInsights = filteredInsights.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsSwiping(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - touchStartX.current;
    const diffY = currentY - touchStartY.current;
    
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
      setSwipeDeltaX(diffX);
      setSwipeDirection(diffX > 0 ? 'right' : 'left');
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    const threshold = 80;
    
    if (Math.abs(swipeDeltaX) >= threshold) {
      if (swipeDeltaX < 0 && currentPage < totalPages) {
        setCurrentPage(prev => prev + 1);
        triggerHaptic('selection');
        toast.success(`Page ${currentPage + 1} of ${totalPages}`, {
          duration: 1500,
          position: 'bottom-center',
        });
      } else if (swipeDeltaX > 0 && currentPage > 1) {
        setCurrentPage(prev => prev - 1);
        triggerHaptic('selection');
        toast.success(`Page ${currentPage - 1} of ${totalPages}`, {
          duration: 1500,
          position: 'bottom-center',
        });
      } else {
        triggerHaptic('warning');
      }
    }
    
    touchStartX.current = null;
    touchStartY.current = null;
    setSwipeDeltaX(0);
    setIsSwiping(false);
    setSwipeDirection(null);
  }, [swipeDeltaX, currentPage, totalPages]);

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero */}
      <section className="relative py-12 sm:py-16 md:py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-pattern.svg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        <div className="container relative">
          <div className="mb-6 md:mb-8">
            <Breadcrumb 
              items={[{ label: 'Insights' }]} 
              variant="light" 
            />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[oklch(0.75_0.15_55)] font-semibold uppercase tracking-wider mb-4">Thought Leadership</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
              Insights & Analysis
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90">
              Expert perspectives on automation strategy, cybersecurity, digital transformation, and emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <Card className="overflow-hidden max-w-5xl mx-auto bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 p-0 rounded-lg">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden aspect-video md:aspect-auto">
                  <ImageWithLoader
                    src="/kearney-rpa-security.png" 
                    alt="Three Practical Recommendations to Secure RPA in Federal IT"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Featured Insight</p>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[oklch(0.20_0.05_250)]">
                    Three Practical Recommendations to Secure RPA in Federal IT
                  </h2>
                  <p className="text-slate-600 mb-6">
                    A.T. Kearney provides actionable guidance for federal agencies to mitigate risks associated with Robotic Process Automation.
                  </p>
                  <Link href="/insights/secure-rpa-federal" className="group font-semibold text-[oklch(0.20_0.05_250)] inline-flex items-center">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-12 md:py-20 bg-[oklch(0.97_0.01_250)]">
        <div className="container">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 md:items-center mb-8 md:mb-12">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-[oklch(0.70_0.18_55)] focus:border-[oklch(0.70_0.18_55)] outline-none transition"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors flex-shrink-0 ${selectedCategory === category ? 'bg-[oklch(0.22_0.06_250)] text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border-2 border-slate-200'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div 
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {paginatedInsights.map((insight, index) => (
              <motion.div
                key={insight.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden">
                  <CardContent className="p-0 flex-1 flex flex-col">
                    <Link href={insight.href}>
                      <div className="relative overflow-hidden aspect-[16/9]">
                        <ImageWithLoader src={insight.image} alt={insight.title} className="w-full h-full object-cover" />
                      </div>
                    </Link>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-2 uppercase tracking-wider text-xs">{insight.category}</p>
                      <h3 className="text-lg font-bold mb-3 text-[oklch(0.20_0.05_250)] flex-1">
                        <Link href={insight.href} className="hover:underline">{insight.title}</Link>
                      </h3>
                      <p className="text-slate-600 text-sm mb-4">{insight.excerpt}</p>
                      <div className="text-xs text-slate-500 mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                        <span>{insight.author}</span>
                        <span>{insight.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 md:mt-16 space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
                disabled={currentPage === 1}
                className="border-slate-300"
              >
                <span className="sr-only">Previous Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </Button>
              
              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={`ellipsis-${index}`} className="px-4 py-2 text-slate-500">...</span>
                ) : (
                  <Button 
                    key={page} 
                    variant={currentPage === page ? 'default' : 'outline'} 
                    onClick={() => setCurrentPage(page as number)}
                    className={`w-10 h-10 ${currentPage === page ? 'bg-[oklch(0.22_0.06_250)] text-white' : 'border-slate-300'}`}
                  >
                    {page}
                  </Button>
                )
              ))}

              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
                disabled={currentPage === totalPages}
                className="border-slate-300"
              >
                <span className="sr-only">Next Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </Button>
            </div>
          )}

          {filteredInsights.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-2 text-[oklch(0.20_0.05_250)]">No Results Found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your search or filter criteria.</p>
              <Button 
                variant="outline"
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="border-slate-300"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-white/90 mb-8">
              Get the latest insights on automation strategy, cybersecurity, and digital transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-500 bg-transparent focus:ring-2 focus:ring-white/50 focus:border-white outline-none placeholder:text-slate-400"
              />
              <Button className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-slate-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[oklch(0.20_0.05_250)]">Contact Us</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Request an assessment to discuss your agency's requirements.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact" className="bg-[oklch(0.22_0.06_250)] text-white hover:bg-opacity-90">
              Request Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
    </PullToRefresh>
  );
}
