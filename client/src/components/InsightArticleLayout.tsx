import { ReactNode } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedArticles from '@/components/RelatedArticles';
import SocialShare from '@/components/SocialShare';
import CommentSection from '@/components/CommentSection';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FloatingPrintButton } from '@/components/PrintButton';

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
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1 pt-32 pb-24">
        <article className="container max-w-3xl mx-auto px-6">
          {/* Back Link */}
          <Link href="/insights" className="inline-flex items-center text-[oklch(0.55_0.15_250)] hover:text-[oklch(0.45_0.15_250)] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[oklch(0.15_0.05_250)] leading-tight mb-6">
            {title}
          </h1>

          {/* Subtitle/Description */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
            {description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-12 pb-8 border-b border-slate-200">
            {authorSlug ? (
              <Link href={`/authors/${authorSlug}`} className="hover:text-[oklch(0.55_0.15_250)] transition-colors">
                {author}
              </Link>
            ) : (
              <span>{author}</span>
            )}
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
            <span>•</span>
            <span className="text-[oklch(0.55_0.15_250)]">{category}</span>
          </div>

          {/* Article Content - Clean prose styling */}
          <div className="article-content">
            {children}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Share */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4">Share this article</p>
            <SocialShare 
              title={title}
              url={`/insights/${articleSlug}`}
              description={description}
            />
          </div>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              Ready to transform your organization?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Let's discuss how Thalen Technologies can help you implement these strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[oklch(0.65_0.18_55)] hover:bg-[oklch(0.55_0.18_55)] text-white">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                <Link href="/insights">
                  Explore More Insights
                </Link>
              </Button>
            </div>
          </section>
        </article>

        {/* Related Articles */}
        <div className="mt-16 bg-slate-50 py-16">
          <div className="container max-w-5xl mx-auto px-6">
            <RelatedArticles 
              currentArticleHref={`/insights/${articleSlug}`}
              limit={3}
            />
          </div>
        </div>

        {/* Comments Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl mx-auto px-6">
            <CommentSection articleSlug={articleSlug} />
          </div>
        </section>
      </main>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
