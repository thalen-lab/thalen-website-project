import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface AdminBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * AdminBreadcrumb component with JSON-LD structured data for SEO
 * Provides navigation breadcrumbs for admin pages with schema.org markup
 */
export default function AdminBreadcrumb({ items, className = "" }: AdminBreadcrumbProps) {
  // Generate JSON-LD structured data for breadcrumbs
  const generateJsonLd = () => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Admin",
          "item": `${baseUrl}/admin`
        },
        ...items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": item.label,
          ...(item.href ? { "item": `${baseUrl}${item.href}` } : {})
        }))
      ]
    };

    return JSON.stringify(breadcrumbList);
  };

  // Inject JSON-LD script into document head
  useEffect(() => {
    const existingScript = document.getElementById("breadcrumb-jsonld");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "breadcrumb-jsonld";
    script.type = "application/ld+json";
    script.textContent = generateJsonLd();
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("breadcrumb-jsonld");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [items]);

  // Build full breadcrumb trail including Admin root
  const fullItems: BreadcrumbItem[] = [
    { label: "Admin", href: "/admin" },
    ...items
  ];

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center text-sm ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          const isFirst = index === 0;

          return (
            <li key={index} className="flex items-center">
              {/* Separator */}
              {!isFirst && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400 flex-shrink-0" />
              )}

              {/* Breadcrumb item */}
              {isLast || !item.href ? (
                <span 
                  className={`${
                    isLast 
                      ? "text-navy-900 font-medium" 
                      : "text-gray-500"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {isFirst && (
                    <Home className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                  )}
                  {item.label}
                </span>
              ) : (
                <Link href={item.href}>
                  <span className="text-gray-500 hover:text-[#FF6B35] transition-colors cursor-pointer flex items-center">
                    {isFirst && (
                      <Home className="w-4 h-4 mr-1.5" />
                    )}
                    {item.label}
                  </span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
