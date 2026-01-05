import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';

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

  return (
    <nav className={`inline-flex items-center text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center gap-1">
        {/* Home link */}
        <li className="inline-flex items-center">
          <Link href="/">
            <span className={`inline-flex items-center gap-1 transition-colors cursor-pointer ${baseTextColor}`}>
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </span>
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <ChevronRight className={`h-4 w-4 mx-1.5 ${separatorColor}`} />
            {item.href ? (
              <Link href={item.href}>
                <span className={`transition-colors cursor-pointer ${baseTextColor}`}>
                  {item.label}
                </span>
              </Link>
            ) : (
              <span className={`font-medium ${activeTextColor}`}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
