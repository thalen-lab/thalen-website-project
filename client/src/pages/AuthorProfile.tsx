import { Link, useParams } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Clock, User, Linkedin, Twitter, Mail, Award, BookOpen } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

// Author data structure
const authors = {
  'sarah-chen': {
    name: 'Sarah Chen',
    title: 'Director of Automation Strategy',
    bio: 'Sarah Chen leads Thalen Technologies\'s automation strategy practice with over 15 years of experience helping government agencies achieve measurable ROI through intelligent automation. She specializes in RPA implementation, process optimization, and change management for large-scale government transformations.',
    expertise: ['Intelligent Automation', 'ROI Measurement', 'Process Optimization', 'Change Management'],
    credentials: ['Certified Automation Professional (CAP)', 'PMP', 'Six Sigma Black Belt'],
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah.chen@thalentechnologies.com'
    },
    image: '/authors/sarah-chen.jpg',
    stats: {
      articles: 12,
      totalReadTime: 96
    }
  },
  'michael-rodriguez': {
    name: 'Michael Rodriguez',
    title: 'Chief Security Architect',
    bio: 'Michael Rodriguez is Thalen Technologies\'s Chief Security Architect with 18 years of experience in federal cybersecurity. He leads zero-trust architecture implementations and FedRAMP compliance initiatives for defense and intelligence agencies. Michael holds multiple security certifications and regularly advises federal CISOs on emerging threats.',
    expertise: ['Zero-Trust Architecture', 'FedRAMP Compliance', 'CMMC', 'Cloud Security'],
    credentials: ['CISSP', 'CISM', 'CEH', 'AWS Security Specialty'],
    social: {
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      twitter: 'https://twitter.com/mrodriguez_sec',
      email: 'michael.rodriguez@thalentechnologies.com'
    },
    image: '/authors/michael-rodriguez.jpg',
    stats: {
      articles: 15,
      totalReadTime: 135
    }
  },
  'jennifer-park': {
    name: 'Dr. Jennifer Park',
    title: 'AI Ethics & Governance Lead',
    bio: 'Dr. Jennifer Park leads Thalen Technologies\'s responsible AI practice, ensuring government AI deployments maintain transparency, accountability, and ethical standards. With a Ph.D. in Computer Science and 12 years in AI governance, she advises government agencies on AI policy, bias mitigation, and explainability frameworks.',
    expertise: ['Responsible AI', 'AI Governance', 'Machine Learning', 'Bias Mitigation'],
    credentials: ['Ph.D. Computer Science', 'Certified AI Ethics Professional', 'IEEE Senior Member'],
    social: {
      linkedin: 'https://linkedin.com/in/drjenniferpark',
      twitter: 'https://twitter.com/drjpark_ai',
      email: 'jennifer.park@thalentechnologies.com'
    },
    image: '/authors/jennifer-park.jpg',
    stats: {
      articles: 18,
      totalReadTime: 180
    }
  },
  'david-thompson': {
    name: 'David Thompson',
    title: 'Cloud Architecture Principal',
    bio: 'David Thompson is a Cloud Architecture Principal at Thalen Technologies with 14 years of experience designing multi-cloud strategies for government agencies. He specializes in avoiding vendor lock-in while maintaining security and compliance across AWS, Azure, and Google Cloud platforms.',
    expertise: ['Multi-Cloud Architecture', 'Cloud Migration', 'Infrastructure as Code', 'DevSecOps'],
    credentials: ['AWS Solutions Architect Professional', 'Azure Solutions Architect Expert', 'GCP Professional Architect'],
    social: {
      linkedin: 'https://linkedin.com/in/davidthompson',
      twitter: 'https://twitter.com/dthompson_cloud',
      email: 'david.thompson@thalentechnologies.com'
    },
    image: '/authors/david-thompson.jpg',
    stats: {
      articles: 14,
      totalReadTime: 126
    }
  },
  'lisa-martinez': {
    name: 'Lisa Martinez',
    title: 'Digital Transformation Director',
    bio: 'Lisa Martinez directs digital transformation initiatives at Thalen Technologies, bringing 16 years of experience in change management and organizational transformation. She has led successful transformations at multiple government agencies, focusing on stakeholder engagement, communication strategies, and sustainable adoption.',
    expertise: ['Change Management', 'Digital Transformation', 'Stakeholder Engagement', 'Organizational Design'],
    credentials: ['Prosci Certified Change Practitioner', 'PMP', 'Certified ScrumMaster'],
    social: {
      linkedin: 'https://linkedin.com/in/lisamartinez',
      twitter: 'https://twitter.com/lmartinez_dx',
      email: 'lisa.martinez@thalentechnologies.com'
    },
    image: '/authors/lisa-martinez.jpg',
    stats: {
      articles: 13,
      totalReadTime: 143
    }
  },
  'james-wilson': {
    name: 'James Wilson',
    title: 'Chief Data Architect',
    bio: 'James Wilson serves as Thalen Technologies\'s Chief Data Architect, specializing in real-time analytics platforms for government-scale data processing. With 17 years of experience, he designs systems that process billions of data points with sub-second latency while maintaining security and compliance.',
    expertise: ['Real-Time Analytics', 'Big Data Architecture', 'Data Engineering', 'Stream Processing'],
    credentials: ['Google Cloud Professional Data Engineer', 'Databricks Certified', 'AWS Big Data Specialty'],
    social: {
      linkedin: 'https://linkedin.com/in/jameswilson',
      twitter: 'https://twitter.com/jwilson_data',
      email: 'james.wilson@thalentechnologies.com'
    },
    image: '/authors/james-wilson.jpg',
    stats: {
      articles: 16,
      totalReadTime: 160
    }
  }
};

// All insights data
const allInsights = [
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

export default function AuthorProfile() {
  const params = useParams();
  const authorSlug = params.slug as string;
  const author = authors[authorSlug as keyof typeof authors];

  // Filter articles by this author
  const authorArticles = allInsights.filter(insight => insight.authorSlug === authorSlug);

  if (!author) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Author Not Found</h1>
            <p className="text-muted-foreground mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">The author profile you're looking for doesn't exist.</p>
            <Link href="/insights">
              <Button>Back to Insights</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Author Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container">
          <div className="mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Insights', href: '/insights' },
                  { label: 'Author Profile' }
                ]} 
                variant="light" 
              />
            </div>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Author Image */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full bg-muted flex items-center justify-center text-6xl font-bold">
                  {author.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{author.name}</h1>
                <p className="text-xl opacity-90 mb-6">{author.title}</p>
                <p className="text-lg opacity-80 mb-6 leading-relaxed">{author.bio}</p>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                  <a href={author.social.twitter} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                  </a>
                  <a href={`mailto:${author.social.email}`}>
                    <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Expertise */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Stats */}
              <Card>
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-6 w-6 text-accent" />
                    <h3 className="text-lg font-semibold">Published Articles</h3>
                  </div>
                  <p className="text-3xl font-bold text-accent">{author.stats.articles}</p>
                  <p className="text-sm text-muted-foreground mt-1">{author.stats.totalReadTime} min total read time</p>
                </CardContent>
              </Card>

              {/* Expertise */}
              <Card className="md:col-span-2">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-6 w-6 text-accent" />
                    <h3 className="text-lg font-semibold">Areas of Expertise</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {author.expertise.map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-muted text-accent rounded-full text-sm font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Certifications & Credentials</p>
                    <div className="flex flex-wrap gap-2">
                      {author.credentials.map((credential, index) => (
                        <span key={index} className="text-sm px-3 py-1 bg-background rounded-full border border-border">
                          {credential}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Author's Articles */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl xs:text-2xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">Articles by {author.name}</h2>

            {authorArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {authorArticles.map((insight, index) => (
                  <Link key={index} href={insight.href}>
                    <Card className="group hover:shadow-xl transition-all flex flex-col h-full cursor-pointer">
                      <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                        <div className="text-sm font-semibold text-accent mb-3">{insight.category}</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B35] transition-colors">
                          {insight.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 flex-1">{insight.excerpt}</p>

                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{insight.readTime}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {insight.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs bg-secondary px-3 py-1 rounded-full border border-border">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{insight.date}</span>
                          <Button variant="ghost" size="sm" className="group-hover:text-[#FF6B35]">
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
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground">No articles published yet.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl opacity-90 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            Request an assessment to discuss your agency's technology requirements.
          </p>
          <Button size="lg" className="bg-orange-gradient hover:opacity-90">
            Request Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
