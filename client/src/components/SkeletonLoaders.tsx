import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

// Card Skeleton - for case study and insight cards
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl overflow-hidden bg-card border border-border", className)}>
      {/* Image placeholder */}
      <Skeleton className="aspect-[16/10] w-full" />
      
      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category badge */}
        <Skeleton className="h-5 w-24 rounded-full" />
        
        {/* Title */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>
        
        {/* Description */}
        <div className="space-y-2 pt-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        
        {/* Footer / CTA */}
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-8 w-24 rounded-md" />
        </div>
      </div>
    </div>
  );
}

// Case Study Card Skeleton - specific styling for case studies
export function CaseStudyCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn(
      "group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50",
      className
    )}>
      {/* Image with overlay */}
      <div className="relative aspect-[4/3]">
        <Skeleton className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
      </div>
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3">
        {/* Category */}
        <Skeleton className="h-5 w-28 rounded-full bg-slate-700/50" />
        
        {/* Title */}
        <div className="space-y-2">
          <Skeleton className="h-6 w-full bg-slate-700/50" />
          <Skeleton className="h-6 w-4/5 bg-slate-700/50" />
        </div>
        
        {/* Tags */}
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full bg-slate-700/50" />
          <Skeleton className="h-6 w-20 rounded-full bg-slate-700/50" />
          <Skeleton className="h-6 w-14 rounded-full bg-slate-700/50" />
        </div>
      </div>
    </div>
  );
}

// Insight Card Skeleton - for blog/insight cards
export function InsightCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn(
      "rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors",
      className
    )}>
      {/* Image */}
      <Skeleton className="aspect-[16/9] w-full" />
      
      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category & Date */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
        
        {/* Title */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-2/3" />
        </div>
        
        {/* Excerpt */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
        
        {/* Author & Read time */}
        <div className="flex items-center gap-3 pt-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Grid Skeleton - for card grids
export function CardGridSkeleton({ 
  count = 6, 
  columns = 3,
  variant = 'default',
  className 
}: { 
  count?: number; 
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'case-study' | 'insight';
  className?: string;
}) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  const CardComponent = {
    'default': CardSkeleton,
    'case-study': CaseStudyCardSkeleton,
    'insight': InsightCardSkeleton
  }[variant];

  return (
    <div className={cn(`grid gap-6 ${gridCols[columns]}`, className)}>
      {Array.from({ length: count }).map((_, i) => (
        <CardComponent key={i} />
      ))}
    </div>
  );
}

// Hero Section Skeleton
export function HeroSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("relative min-h-[60vh] flex items-center", className)}>
      {/* Background */}
      <Skeleton className="absolute inset-0" />
      
      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow */}
          <Skeleton className="h-5 w-32 rounded-full" />
          
          {/* Title */}
          <div className="space-y-3">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-4/5" />
          </div>
          
          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-40 rounded-lg" />
            <Skeleton className="h-12 w-36 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Stats Section Skeleton
export function StatsSkeleton({ count = 4, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("grid gap-8 md:grid-cols-2 lg:grid-cols-4", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="text-center space-y-2">
          <Skeleton className="h-12 w-24 mx-auto" />
          <Skeleton className="h-4 w-32 mx-auto" />
        </div>
      ))}
    </div>
  );
}

// Service Card Skeleton
export function ServiceCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn(
      "p-6 rounded-xl bg-card border border-border space-y-4",
      className
    )}>
      {/* Icon */}
      <Skeleton className="h-12 w-12 rounded-lg" />
      
      {/* Title */}
      <Skeleton className="h-6 w-3/4" />
      
      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      
      {/* Link */}
      <Skeleton className="h-4 w-24" />
    </div>
  );
}

// Partner Logo Skeleton
export function PartnerLogoSkeleton({ className }: { className?: string }) {
  return (
    <Skeleton className={cn("h-12 w-32 rounded-md", className)} />
  );
}

// Testimonial Skeleton
export function TestimonialSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 rounded-xl bg-card border border-border space-y-4", className)}>
      {/* Quote */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      
      {/* Author */}
      <div className="flex items-center gap-3 pt-2">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-36" />
        </div>
      </div>
    </div>
  );
}

// Table Row Skeleton
export function TableRowSkeleton({ columns = 5, className }: { columns?: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 p-4 border-b border-border", className)}>
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton key={i} className="h-4 flex-1" />
      ))}
    </div>
  );
}

// List Item Skeleton
export function ListItemSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 p-4", className)}>
      <Skeleton className="h-10 w-10 rounded-lg flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <Skeleton className="h-8 w-20 rounded-md" />
    </div>
  );
}

// Content Section Skeleton - for article/page content
export function ContentSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Heading */}
      <Skeleton className="h-8 w-2/3" />
      
      {/* Paragraphs */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      
      {/* Subheading */}
      <Skeleton className="h-6 w-1/2 mt-8" />
      
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}

// Carousel Skeleton
export function CarouselSkeleton({ 
  itemCount = 3,
  className 
}: { 
  itemCount?: number;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="flex gap-6 overflow-hidden">
        {Array.from({ length: itemCount }).map((_, i) => (
          <div key={i} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
            <CardSkeleton />
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: itemCount }).map((_, i) => (
          <Skeleton key={i} className="h-2 w-2 rounded-full" />
        ))}
      </div>
    </div>
  );
}

// Form Skeleton
export function FormSkeleton({ fields = 4, className }: { fields?: number; className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      {Array.from({ length: fields }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      ))}
      <Skeleton className="h-12 w-full rounded-lg mt-4" />
    </div>
  );
}
