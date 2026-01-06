import { useState, useCallback } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface UsePdfGenerationOptions {
  filename?: string;
  orientation?: 'portrait' | 'landscape';
  format?: 'a4' | 'letter';
  margin?: number;
}

interface UsePdfGenerationReturn {
  generatePdf: (elementId: string) => Promise<void>;
  isGenerating: boolean;
  error: string | null;
}

/**
 * Custom hook for generating PDFs from HTML elements
 * Uses html2canvas to capture the element and jsPDF to create the PDF
 */
export function usePdfGeneration(options: UsePdfGenerationOptions = {}): UsePdfGenerationReturn {
  const {
    filename = 'document.pdf',
    orientation = 'portrait',
    format = 'letter',
    margin = 10,
  } = options;

  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generatePdf = useCallback(async (elementId: string) => {
    setIsGenerating(true);
    setError(null);

    try {
      const element = document.getElementById(elementId);
      if (!element) {
        throw new Error(`Element with id "${elementId}" not found`);
      }

      // Capture the element as a canvas
      const canvas = await html2canvas(element, {
        scale: 2, // Higher quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      // Calculate dimensions
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation,
        unit: 'mm',
        format,
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth - (margin * 2);
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add pages if content is longer than one page
      let heightLeft = imgHeight;
      let position = margin;
      let pageNumber = 1;

      // Add first page
      pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= (pageHeight - margin * 2);

      // Add additional pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight + margin;
        pdf.addPage();
        pageNumber++;
        pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
        heightLeft -= (pageHeight - margin * 2);
      }

      // Save the PDF
      pdf.save(filename);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate PDF';
      setError(errorMessage);
      console.error('PDF generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  }, [filename, orientation, format, margin]);

  return {
    generatePdf,
    isGenerating,
    error,
  };
}

/**
 * Generate a PDF from a specific element without using the hook
 * Useful for one-off PDF generation
 */
export async function generatePdfFromElement(
  elementId: string,
  options: UsePdfGenerationOptions = {}
): Promise<Blob | null> {
  const {
    orientation = 'portrait',
    format = 'letter',
    margin = 10,
  } = options;

  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation,
      unit: 'mm',
      format,
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth - (margin * 2);
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = margin;

    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    heightLeft -= (pageHeight - margin * 2);

    while (heightLeft > 0) {
      position = heightLeft - imgHeight + margin;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= (pageHeight - margin * 2);
    }

    return pdf.output('blob');
  } catch (err) {
    console.error('PDF generation error:', err);
    return null;
  }
}

export default usePdfGeneration;
