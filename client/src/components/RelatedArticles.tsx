import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock, User } from 'lucide-react';
import { getRelatedArticles } from '@/data/insights';

interface RelatedArticlesProps {
  currentArticleHref: string;
  limit?: number;
}

export default function RelatedArticles({ currentArticleHref, limit = 3 }: RelatedArticlesProps) {
  const relatedArticles = getRelatedArticles(currentArticleHref, limit);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Link key={index} href={article.href}>
                <Card className="group hover:shadow-xl transition-all h-full cursor-pointer">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-sm font-semibold text-accent mb-2">{article.category}</div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-[#FF6B35] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <User className="h-3 w-3 mr-1" />
                      <span className="mr-3">{article.author}</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
