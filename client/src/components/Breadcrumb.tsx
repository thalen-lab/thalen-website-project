import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';
import { useMemo } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Breadcrumb({ items, className = '', variant = 'dark' }: BreadcrumbProps) {
  const baseTextColor = variant === 'light' 
    ? 'text-white/70 hover:text-white' 
    : 'text-muted-foreground hover:text-foreground';
  const activeTextColor = variant === 'light' 
    ? 'text-white' 
    : 'text-foreground';
  const separatorColor = variant === 'light' 
    ? 'text-white/40' 
    : 'text-muted-foreground/50';

  // Generate JSON-LD structured data for SEO
  const structuredData = useMemo(() => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    
    const itemListElement = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl || "/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href ? { "item": `${baseUrl}${item.href}` } : {})
      }))
    ];

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    };
  }, [items]);

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <nav className={`inline-flex items-center text-sm ${className}`} aria-label="Breadcrumb">
        <ol className="inline-flex items-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
          {/* Home link */}
          <li 
            className="inline-flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link href="/">
              <span 
                className={`inline-flex items-center gap-1 transition-colors cursor-pointer ${baseTextColor}`}
                itemProp="item"
              >
                <Home className="h-4 w-4" />
                <span className="sr-only" itemProp="name">Home</span>
              </span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          
          {items.map((item, index) => (
            <li 
              key={index} 
              className="inline-flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className={`h-4 w-4 mx-1.5 ${separatorColor}`} aria-hidden="true" />
              {item.href ? (
                <Link href={item.href}>
                  <span 
                    className={`transition-colors cursor-pointer ${baseTextColor}`}
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </span>
                </Link>
              ) : (
                <span className={`font-medium ${activeTextColor}`} itemProp="name">
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
