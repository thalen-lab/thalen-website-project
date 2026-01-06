import { Button } from "@/components/ui/button";
import { Printer, Eye } from "lucide-react";
import { useState } from "react";

interface PrintButtonProps {
  /** Label text for the button */
  label?: string;
  /** Additional CSS classes */
  className?: string;
  /** Button variant */
  variant?: "default" | "outline" | "ghost" | "secondary";
  /** Button size */
  size?: "default" | "sm" | "lg" | "icon";
  /** Show icon only (no label) */
  iconOnly?: boolean;
}

/**
 * PrintButton Component
 * 
 * A reusable button that triggers the browser's print dialog.
 * Designed for contracting officers and users who prefer physical copies.
 * 
 * The button is automatically hidden when printing via CSS.
 */
export function PrintButton({
  label = "Print This Page",
  className = "",
  variant = "outline",
  size = "default",
  iconOnly = false,
}: PrintButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  if (iconOnly) {
    return (
      <Button
        variant={variant}
        size="icon"
        onClick={handlePrint}
        className={`print-button no-print ${className}`}
        aria-label="Print this page"
        title="Print this page"
      >
        <Printer className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handlePrint}
      className={`print-button no-print ${className}`}
      aria-label={label}
    >
      <Printer className="h-4 w-4 mr-2" />
      {label}
    </Button>
  );
}

/**
 * FloatingPrintButton Component
 * 
 * A fixed-position print button that floats in the corner of the screen.
 * Useful for long pages where the user might want to print at any point.
 */
export function FloatingPrintButton({
  position = "bottom-right",
}: {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}) {
  const handlePrint = () => {
    window.print();
  };

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-24 right-6",
    "top-left": "top-24 left-6",
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={handlePrint}
      className={`print-button no-print fixed ${positionClasses[position]} z-40 shadow-lg hover:shadow-xl transition-shadow bg-white border border-gray-200 hover:bg-gray-50`}
      aria-label="Print this page"
      title="Print this page"
    >
      <Printer className="h-5 w-5 text-gray-700" />
    </Button>
  );
}

/**
 * PrintWithPreviewButton Component
 * 
 * A button that shows a print preview dialog before printing.
 */
export function PrintWithPreviewButton({
  label = "Print with Preview",
  className = "",
  variant = "outline",
  size = "default",
  previewUrl,
}: PrintButtonProps & { previewUrl?: string }) {
  const handleClick = () => {
    if (previewUrl) {
      window.open(previewUrl, '_blank');
    } else {
      window.print();
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={`print-button no-print ${className}`}
      aria-label={label}
    >
      <Eye className="h-4 w-4 mr-2" />
      {label}
    </Button>
  );
}

export default PrintButton;
