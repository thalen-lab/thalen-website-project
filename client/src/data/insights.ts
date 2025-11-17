// Shared insights data for use across pages
export interface Insight {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorSlug: string;
  date: string;
  readTime: string;
  tags: string[];
  href: string;
}

export const allInsights: Insight[] = [
  {
    category: 'Automation Strategy',
    title: 'The ROI Methodology: Measuring Automation Success',
    excerpt: 'A comprehensive framework for calculating and tracking return on investment in intelligent automation initiatives.',
    author: 'Sarah Chen',
    authorSlug: 'sarah-chen',
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
    authorSlug: 'michael-rodriguez',
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
    authorSlug: 'jennifer-park',
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
    authorSlug: 'david-thompson',
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
    authorSlug: 'lisa-martinez',
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
    authorSlug: 'james-wilson',
    date: 'Oct 25, 2024',
    readTime: '10 min read',
    tags: ['Analytics', 'Big Data', 'Architecture'],
    href: '/insights/real-time-analytics'
  }
];

// Get related articles based on matching tags and category
export function getRelatedArticles(currentArticleHref: string, limit: number = 3): Insight[] {
  const currentArticle = allInsights.find(insight => insight.href === currentArticleHref);
  
  if (!currentArticle) {
    return [];
  }

  // Calculate relevance score for each article
  const scoredArticles = allInsights
    .filter(insight => insight.href !== currentArticleHref) // Exclude current article
    .map(insight => {
      let score = 0;
      
      // Add points for matching tags (higher priority)
      const matchingTags = insight.tags.filter(tag => 
        currentArticle.tags.includes(tag)
      ).length;
      score += matchingTags * 3;
      
      // Add points for matching category (lower priority)
      if (insight.category === currentArticle.category) {
        score += 1;
      }
      
      return { insight, score };
    })
    .filter(item => item.score > 0) // Only include articles with some relevance
    .sort((a, b) => b.score - a.score); // Sort by score descending

  // If we don't have enough related articles, fill with recent articles
  const relatedArticles = scoredArticles.slice(0, limit).map(item => item.insight);
  
  if (relatedArticles.length < limit) {
    const remainingSlots = limit - relatedArticles.length;
    const recentArticles = allInsights
      .filter(insight => 
        insight.href !== currentArticleHref && 
        !relatedArticles.includes(insight)
      )
      .slice(0, remainingSlots);
    
    relatedArticles.push(...recentArticles);
  }

  return relatedArticles;
}
