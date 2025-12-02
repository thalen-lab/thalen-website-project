import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Clock, User, Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Insights() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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
      image: '/responsible-ai-circuit.png',
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

  // Filter insights based on search query and selected category
  const filteredInsights = insights.filter(insight => {
    const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      insight.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredInsights.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedInsights = filteredInsights.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Generate page numbers to display
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Insights & Thought Leadership
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Expert perspectives on automation strategy, cybersecurity, digital transformation, and emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-20">
        <div className="container">
          <Card className="overflow-hidden max-w-5xl mx-auto hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img 
                    src="/rpa-article.a7f3b2e1.png" 
                    alt="Three Practical Recommendations to Secure Robotic Process Automation (RPA) in a Federal IT environment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-accent mb-2">Featured Article</div>
                  <h3 className="text-3xl font-bold mb-4">Three Practical Recommendations to Secure RPA in Federal IT</h3>
                  <p className="text-muted-foreground mb-6">
                    This article provides three overarching recommendations for RPA Program Teams to support the successful implementation and operation of the program.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Written by Kearney Principal Mark Munster
                  </p>
                  <Button className="bg-orange-gradient hover:opacity-90 w-fit">
                    Download Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Insights Grid with Filtering */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with expert analysis and practical guidance from Thalen Technologies's thought leaders.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search insights by title, topic, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : 'bg-background border border-border hover:border-accent hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              {filteredInsights.length > 0 ? (
                <>
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredInsights.length)} of {filteredInsights.length} {filteredInsights.length === 1 ? 'article' : 'articles'}
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </>
              ) : (
                <>
                  Showing 0 articles
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </>
              )}
            </p>
          </div>

          {/* Insights Grid */}
          {paginatedInsights.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {paginatedInsights.map((insight, index) => (
                  <Link key={index} href={insight.href}>
                    <Card className="group hover:shadow-xl transition-all flex flex-col h-full cursor-pointer overflow-hidden">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img
                          src={insight.image}
                          alt={insight.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="text-xs font-semibold text-white bg-accent px-3 py-1 rounded-full">
                            {insight.category}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                          {insight.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 flex-1">{insight.excerpt}</p>

                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <User className="h-4 w-4 mr-2" />
                          <span className="mr-4">{insight.author}</span>
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{insight.readTime}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {insight.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-sm text-muted-foreground">{insight.date}</span>
                          <Button variant="ghost" size="sm" className="group-hover:text-accent">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>

                  <div className="flex gap-1">
                    {getPageNumbers().map((page, index) => (
                      page === '...' ? (
                        <span key={`ellipsis-${index}`} className="px-3 py-2 text-muted-foreground">
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page as number)}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                            currentPage === page
                              ? 'bg-accent text-accent-foreground shadow-md'
                              : 'bg-background border border-border hover:border-accent hover:text-accent'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-muted border-accent/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get the latest insights on automation strategy, cybersecurity, and digital transformation delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
                />
                <Button className="bg-orange-gradient hover:opacity-90">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a strategic assessment with our automation experts.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Schedule Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
