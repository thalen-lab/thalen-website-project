import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FloatingPrintButton } from '@/components/PrintButton';

interface CaseStudySection {
  title: string;
  content: string[];
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle?: string;
  sections: CaseStudySection[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export default function CaseStudyLayout({
  title,
  subtitle,
  sections,
  ctaTitle = "Ready to transform your organization?",
  ctaDescription = "Discover how our solutions can help your agency achieve similar results while maintaining compliance and security.",
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Clean Header - TrustArc Style */}
      <main className="flex-1 pt-32 pb-24">
        <article className="container max-w-3xl mx-auto px-6">
          {/* Back Link */}
          <Link href="/case-studies" className="inline-flex items-center text-[oklch(0.55_0.15_250)] hover:text-[oklch(0.45_0.15_250)] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[oklch(0.15_0.05_250)] leading-tight mb-6">
            {title}
          </h1>

          {/* Subtitle/Lead */}
          {subtitle && (
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
              {subtitle}
            </p>
          )}

          {/* Content Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-6">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-slate-600 leading-relaxed mb-6 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-[oklch(0.15_0.05_250)] mb-4">
              {ctaTitle}
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              {ctaDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[oklch(0.65_0.18_55)] hover:bg-[oklch(0.55_0.18_55)] text-white">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                <Link href="/case-studies">
                  Explore More Case Studies
                </Link>
              </Button>
            </div>
          </section>
        </article>
      </main>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
