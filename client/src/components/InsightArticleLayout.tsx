import { ReactNode } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedArticles from '@/components/RelatedArticles';
import SocialShare from '@/components/SocialShare';
import CommentSection from '@/components/CommentSection';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

interface InsightArticleLayoutProps {
  category: string;
  categoryColor?: string;
  title: string;
  author: string;
  authorSlug?: string;
  date: string;
  readTime: string;
  description: string;
  articleSlug: string;
  tags: string[];
  children: ReactNode;
}

export default function InsightArticleLayout({
  category,
  categoryColor = 'bg-lime-400 text-gray-900',
  title,
  author,
  authorSlug,
  date,
  readTime,
  description,
  articleSlug,
  tags,
  children
}: InsightArticleLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Article Header - Clean Mission Cloud Style */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-amber-50 to-amber-100/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Back Link & Category */}
            <div className="flex items-center gap-4 mb-8">
              <Link href="/insights">
                <span className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All Insights
                </span>
              </Link>
              <span className="text-muted-foreground">•</span>
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${categoryColor}`}>
                {category}
              </span>
            </div>

            {/* Publication Date */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4" />
              <span>Published {date}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              {title}
            </h1>

            {/* Description/Excerpt */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              {description}
            </p>

            {/* Author & Read Time */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {authorSlug ? (
                  <Link href={`/authors/${authorSlug}`}>
                    <span className="hover:text-accent transition-colors cursor-pointer font-medium">
                      {author}
                    </span>
                  </Link>
                ) : (
                  <span className="font-medium">{author}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-amber-100/50 to-amber-50/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Social Share - Top */}
            <div className="mb-10 pb-8 border-b border-amber-200/50">
              <SocialShare 
                title={title}
                url={`/insights/${articleSlug}`}
                description={description}
              />
            </div>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none 
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-lime-400 prose-blockquote:bg-amber-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            ">
              {children}
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-amber-200/50">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Share - Bottom */}
            <div className="mt-8 pt-8 border-t border-amber-200/50">
              <p className="text-sm text-muted-foreground mb-4">Share this article</p>
              <SocialShare 
                title={title}
                url={`/insights/${articleSlug}`}
                description={description}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles 
        currentArticleHref={`/insights/${articleSlug}`}
        limit={3}
      />

      {/* Comments Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-amber-50/50 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <CommentSection articleSlug={articleSlug} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how Thalen Technologies can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-lime-400 text-slate-900 hover:bg-lime-500 font-semibold">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/insights">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore More Insights
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
