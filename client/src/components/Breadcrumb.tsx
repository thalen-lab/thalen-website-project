import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`inline-flex items-center text-sm ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="inline-flex items-center">
          {index > 0 && (
            <ChevronRight className="h-4 w-4 mx-2 opacity-60" />
          )}
          {item.href ? (
            <Link href={item.href}>
              <span className="hover:opacity-100 transition-opacity cursor-pointer">
                {item.label}
              </span>
            </Link>
          ) : (
            <span className="opacity-90">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
