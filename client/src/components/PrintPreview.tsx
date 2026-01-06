import { useState, useEffect, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Printer, Download, X, Maximize2, Minimize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PrintPreviewProps {
  children: ReactNode;
  /** ID for the printable content container */
  contentId?: string;
  /** Title shown in the preview header */
  title?: string;
  /** Callback when print is triggered */
  onPrint?: () => void;
  /** Callback when PDF download is triggered */
  onDownloadPdf?: () => void;
  /** Whether PDF generation is in progress */
  isGeneratingPdf?: boolean;
  /** Additional class names for the container */
  className?: string;
}

/**
 * PrintPreview Component
 * 
 * Provides a print preview mode that shows users exactly how the page
 * will look when printed before they commit to printing.
 * 
 * Features:
 * - Toggle between normal view and print preview
 * - Simulated paper view with margins
 * - Print and PDF download buttons
 * - Fullscreen preview option
 */
export function PrintPreview({
  children,
  contentId = 'print-content',
  title = 'Print Preview',
  onPrint,
  onDownloadPdf,
  isGeneratingPdf = false,
  className,
}: PrintPreviewProps) {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle print
  const handlePrint = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  // Handle escape key to exit preview
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isPreviewMode) {
        setIsPreviewMode(false);
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPreviewMode]);

  // Prevent body scroll when in fullscreen preview
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  if (!isPreviewMode) {
    return (
      <div className={cn('relative', className)}>
        {/* Preview Toggle Button */}
        <div className="no-print mb-4 flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPreviewMode(true)}
            className="gap-2"
          >
            <Eye className="h-4 w-4" />
            Print Preview
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrint}
            className="gap-2"
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
          {onDownloadPdf && (
            <Button
              variant="outline"
              size="sm"
              onClick={onDownloadPdf}
              disabled={isGeneratingPdf}
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              {isGeneratingPdf ? 'Generating...' : 'Download PDF'}
            </Button>
          )}
        </div>
        
        {/* Normal Content */}
        <div id={contentId}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 bg-gray-600/90 overflow-auto',
        isFullscreen ? 'p-0' : 'p-8',
        className
      )}
    >
      {/* Preview Header */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-[#0A2540] text-white shadow-lg">
        <div className="container py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-medium">{title}</span>
              <span className="text-white/60 text-sm">Press ESC to exit</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="text-white hover:bg-white/10"
              >
                {isFullscreen ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </Button>
              {onDownloadPdf && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onDownloadPdf}
                  disabled={isGeneratingPdf}
                  className="text-white hover:bg-white/10 gap-2"
                >
                  <Download className="h-4 w-4" />
                  {isGeneratingPdf ? 'Generating...' : 'PDF'}
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePrint}
                className="text-white hover:bg-white/10 gap-2"
              >
                <Printer className="h-4 w-4" />
                Print
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsPreviewMode(false);
                  setIsFullscreen(false);
                }}
                className="text-white hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Paper Preview */}
      <div
        className={cn(
          'mx-auto bg-white shadow-2xl mt-16',
          isFullscreen ? 'w-full min-h-screen' : 'max-w-[8.5in]'
        )}
        style={{
          minHeight: isFullscreen ? '100vh' : '11in',
        }}
      >
        <div
          id={contentId}
          className="p-[0.75in]"
          style={{
            fontSize: '10pt',
          }}
        >
          {children}
        </div>
      </div>

      {/* Page indicator */}
      <div className="no-print fixed bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm">
        Preview Mode - Page dimensions: 8.5" x 11" (Letter)
      </div>
    </div>
  );
}

/**
 * PrintPreviewToggle - A simple button to toggle print preview
 */
export function PrintPreviewToggle({
  isPreview,
  onToggle,
  className,
}: {
  isPreview: boolean;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className={cn('gap-2', className)}
    >
      {isPreview ? (
        <>
          <EyeOff className="h-4 w-4" />
          Exit Preview
        </>
      ) : (
        <>
          <Eye className="h-4 w-4" />
          Print Preview
        </>
      )}
    </Button>
  );
}

export default PrintPreview;
