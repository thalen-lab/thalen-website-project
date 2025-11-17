import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Clock, User, Search } from 'lucide-react';

export default function Insights() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const insights = [
    {
      category: 'Automation Strategy',
      title: 'The ROI Methodology: Measuring Automation Success',
      excerpt: 'A comprehensive framework for calculating and tracking return on investment in intelligent automation initiatives.',
      author: 'Sarah Chen',
      date: 'Nov 10, 2024',
      readTime: '8 min read',
      tags: ['ROI', 'Strategy', 'Automation'],
      href: '/insights/roi-methodology'
    },
    {
      category: 'Cybersecurity',
      title: 'Zero-Trust Architecture for Federal Agencies',
      excerpt: 'Implementation strategies for zero-trust security in government environments with FedRAMP compliance.',
      author: 'Michael Rodriguez',
      date: 'Nov 8, 2024',
      readTime: '10 min read',
      tags: ['Security', 'Federal', 'Compliance'],
      href: '/insights/zero-trust'
    },
    {
      category: 'AI & Machine Learning',
      title: 'Responsible AI Implementation in Government',
      excerpt: 'Best practices for deploying AI systems that maintain transparency, accountability, and ethical standards.',
      author: 'Dr. Jennifer Park',
      date: 'Nov 5, 2024',
      readTime: '12 min read',
      tags: ['AI', 'Ethics', 'Government'],
      href: '/insights/responsible-ai'
    },
    {
      category: 'Cloud Modernization',
      title: 'Multi-Cloud Strategy: Avoiding Vendor Lock-In',
      excerpt: 'How to design cloud architectures that maintain flexibility across AWS, Azure, and Google Cloud.',
      author: 'David Thompson',
      date: 'Nov 1, 2024',
      readTime: '9 min read',
      tags: ['Cloud', 'Strategy', 'Architecture'],
      href: '/insights/multi-cloud'
    },
    {
      category: 'Digital Transformation',
      title: 'Change Management: The Key to Transformation Success',
      excerpt: 'Why 70% of digital transformations fail and how to ensure yours succeeds through effective change management.',
      author: 'Lisa Martinez',
      date: 'Oct 28, 2024',
      readTime: '11 min read',
      tags: ['Transformation', 'Change Management', 'Leadership'],
      href: '/insights/change-management'
    },
    {
      category: 'Data Analytics',
      title: 'Real-Time Analytics at Government Scale',
      excerpt: 'Architecture patterns and technologies for processing billions of data points with sub-second latency.',
      author: 'James Wilson',
      date: 'Oct 25, 2024',
      readTime: '10 min read',
      tags: ['Analytics', 'Big Data', 'Architecture'],
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
                <div className="bg-accent/10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-accent mb-2">Featured Article</div>
                    <div className="text-6xl font-bold text-accent mb-4">2024</div>
                    <div className="text-lg font-semibold">Automation Trends Report</div>
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-accent mb-2">Industry Report</div>
                  <h3 className="text-3xl font-bold mb-4">The State of Federal Automation</h3>
                  <p className="text-muted-foreground mb-6">
                    Our annual report analyzing automation adoption, ROI trends, and emerging technologies across federal agencies.
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
              Stay informed with expert analysis and practical guidance from NexDyne's thought leaders.
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
              Showing {filteredInsights.length} {filteredInsights.length === 1 ? 'article' : 'articles'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>

          {/* Insights Grid */}
          {filteredInsights.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((insight, index) => (
                <Link key={index} href={insight.href}>
                  <Card className="group hover:shadow-xl transition-all flex flex-col h-full cursor-pointer">
                    <CardContent className="p-8 flex flex-col flex-1">
                      <div className="text-sm font-semibold text-accent mb-3">{insight.category}</div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {insight.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 flex-1">{insight.excerpt}</p>

                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <User className="h-4 w-4 mr-2" />
                        <span className="mr-4">{insight.author}</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{insight.readTime}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {insight.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-background px-3 py-1 rounded-full border border-border">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
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
          <Card className="max-w-4xl mx-auto bg-accent/10 border-accent/20">
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
