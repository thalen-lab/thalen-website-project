import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Printer, Download, Eye, EyeOff, Loader2 } from 'lucide-react';
import { APP_LOGO, APP_TITLE } from '@/const';
import { usePdfGeneration } from '@/hooks/usePdfGeneration';
import { toast } from 'sonner';

/**
 * CapabilityStatementPrint - Dedicated Print View Page
 * 
 * A simplified, single-page print layout for the Capability Statement
 * that consolidates all key information onto 1-2 pages for easy distribution.
 * 
 * Features:
 * - Print-optimized layout designed for 1-2 pages
 * - Print preview mode toggle
 * - Direct print and PDF download options
 * - No navigation/footer clutter
 */
export default function CapabilityStatementPrint() {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  const { generatePdf, isGenerating } = usePdfGeneration({
    filename: 'Thalen-Technologies-Capability-Statement.pdf',
    orientation: 'portrait',
    format: 'letter',
    margin: 10,
  });

  // Handle print
  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  // Handle PDF download
  const handleDownloadPDF = async () => {
    toast.info('Generating PDF...', { duration: 2000 });
    await generatePdf('print-content');
    toast.success('PDF downloaded successfully!');
  };

  // Add print event listeners
  useEffect(() => {
    const beforePrint = () => setIsPrinting(true);
    const afterPrint = () => setIsPrinting(false);

    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);

    return () => {
      window.removeEventListener('beforeprint', beforePrint);
      window.removeEventListener('afterprint', afterPrint);
    };
  }, []);

  return (
    <div className={`min-h-screen ${isPreviewMode ? 'bg-gray-200 p-4 sm:p-6 md:p-8' : 'bg-white'}`}>
      {/* Control Bar - Hidden when printing */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-[#0A2540] text-white shadow-lg">
        <div className="container py-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <Link href="/capability-statement">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Full Page
                </Button>
              </Link>
              <span className="text-white/60 hidden sm:inline">|</span>
              <span className="text-sm font-medium hidden sm:inline">Print View - Capability Statement</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="text-white hover:bg-white/10"
              >
                {isPreviewMode ? (
                  <>
                    <EyeOff className="h-4 w-4 mr-2" />
                    Exit Preview
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4 mr-2" />
                    Print Preview
                  </>
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownloadPDF}
                className="text-white hover:bg-white/10"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </>
                )}
              </Button>
              <Button
                size="sm"
                onClick={handlePrint}
                className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white"
                disabled={isPrinting}
              >
                <Printer className="h-4 w-4 mr-2" />
                {isPrinting ? 'Printing...' : 'Print'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Print Content Container */}
      <div className={`${isPreviewMode ? 'max-w-[8.5in] mx-auto bg-white shadow-2xl mt-16' : 'mt-16'}`}>
        <div id="print-content" className={`print-content ${isPreviewMode ? 'p-[0.75in]' : 'container py-8'}`}>
          
          {/* Header with Logo */}
          <header className="print-header-section border-b-2 border-[#0A2540] pb-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src={APP_LOGO} 
                  alt={APP_TITLE}
                  className="h-12 w-auto"
                />
                <div>
                  <h1 className="text-2xl font-bold text-[#0A2540]">Thalen Technologies, Inc.</h1>
                  <p className="text-sm text-gray-600">Capability Statement</p>
                </div>
              </div>
              <div className="text-right text-sm text-gray-600">
                <p>SDVOSB Certified</p>
                <p>Washington, D.C. Metro Area</p>
              </div>
            </div>
          </header>

          {/* Two Column Layout for Print */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2">
            
            {/* Left Column */}
            <div className="space-y-5">
              
              {/* Company Overview */}
              <section>
                <h2 className="text-lg font-bold text-[#0A2540] border-b border-gray-300 pb-1 mb-2">
                  Company Overview
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Thalen Technologies is a small business headquartered in Grand Rapids, Michigan, specializing in technology 
                  modernization and digital transformation for government agencies. With a team bringing 25+ years 
                  of combined experience, we deliver solutions that enhance operational efficiency, strengthen 
                  cybersecurity, and improve citizen services.
                </p>
              </section>

              {/* Core Competencies */}
              <section>
                <h2 className="text-lg font-bold text-[#0A2540] border-b border-gray-300 pb-1 mb-2">
                  Core Competencies
                </h2>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li><strong>Intelligent Automation</strong> - RPA, process optimization, measurable efficiency gains</li>
                  <li><strong>Cloud Infrastructure</strong> - FedRAMP migrations, 15+ implementations supported</li>
                  <li><strong>Cybersecurity</strong> - Zero-trust architecture, FISMA, CMMC, NIST 800-53</li>
                  <li><strong>Data Analytics & AI</strong> - Predictive modeling, responsible AI implementations</li>
                  <li><strong>Application Development</strong> - DevSecOps, legacy modernization, integration</li>
                </ul>
              </section>

              {/* Differentiators */}
              <section>
                <h2 className="text-lg font-bold text-[#0A2540] border-b border-gray-300 pb-1 mb-2">
                  Key Differentiators
                </h2>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li><strong>Government-First Expertise</strong> - Built specifically for public sector</li>
                  <li><strong>RAPID Framework</strong> - Proven methodology with 340% average ROI</li>
                  <li><strong>Security-First Architecture</strong> - Cleared personnel, rigorous controls</li>
                  <li><strong>Measurable ROI Commitment</strong> - Documented outcomes, post-implementation validation</li>
                </ul>
              </section>

              {/* Past Performance Highlights */}
              <section>
                <h2 className="text-lg font-bold text-[#0A2540] border-b border-gray-300 pb-1 mb-2">
                  Past Performance Highlights
                </h2>
                <div className="text-sm text-gray-700 space-y-2">
                  <div className="border-l-2 border-[#FF6B35] pl-2">
                    <p className="font-semibold">Federal Agency Process Automation</p>
                    <p className="text-xs">85% reduction in processing time, estimated $47M savings over 3 years</p>
                  </div>
                  <div className="border-l-2 border-[#FF6B35] pl-2">
                    <p className="font-semibold">Healthcare Cloud Migration</p>
                    <p className="text-xs">47 applications migrated, 99.99% availability, HIPAA compliant</p>
                  </div>
                  <div className="border-l-2 border-[#FF6B35] pl-2">
                    <p className="font-semibold">Defense Predictive Maintenance</p>
                    <p className="text-xs">99.2% uptime, 73% reduction in unplanned downtime</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              
              {/* Company Information Box */}
              <section className="bg-gray-50 border border-gray-200 rounded p-4 print:bg-gray-100">
                <h2 className="text-lg font-bold text-[#0A2540] mb-3">
                  Company Information
                </h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div>
                    <p className="text-xs font-semibold text-[#FF6B35] uppercase">Legal Name</p>
                    <p className="text-gray-800">Thalen Technologies, Inc.</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#FF6B35] uppercase">Business Size</p>
                    <p className="text-gray-800">Small Business (SDVOSB)</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#FF6B35] uppercase">Primary NAICS</p>
                    <p className="text-gray-800">541512</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#FF6B35] uppercase">Years in Business</p>
                    <p className="text-gray-800">25+ Years</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#FF6B35] uppercase">Headquarters</p>
                    <p className="text-gray-800">Washington, D.C. Metro</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#FF6B35] uppercase">Employees</p>
                    <p className="text-gray-800">250+ Professionals</p>
                  </div>
                </div>
              </section>

              {/* NAICS Codes */}
              <section>
                <h2 className="text-lg font-bold text-[#0A2540] border-b border-gray-300 pb-1 mb-2">
                  NAICS Codes
                </h2>
                <div className="text-sm text-gray-700 grid grid-cols-2 gap-1">
                  <p><strong>541512</strong> - Computer Systems Design</p>
                  <p><strong>541511</strong> - Custom Programming</p>
                  <p><strong>541519</strong> - Other Computer Related</p>
                  <p><strong>518210</strong> - Data Processing</p>
                  <p><strong>541330</strong> - Engineering Services</p>
                  <p><strong>541690</strong> - Scientific Consulting</p>
                </div>
              </section>

              {/* Contract Vehicles */}
              <section>
                <h2 className="text-lg font-bold text-[#0A2540] border-b border-gray-300 pb-1 mb-2">
                  Contract Vehicles
                </h2>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>GSA Schedule 70 - IT Professional Services</li>
                  <li>GSA STARS III - Technology Services</li>
                  <li>CIO-SP3 - IT Solutions</li>
                  <li>State Contracts in 20+ States</li>
                </ul>
              </section>

              {/* Certifications */}
              <section>
                <h2 className="text-lg font-bold text-[#0A2540] border-b border-gray-300 pb-1 mb-2">
                  Certifications & Registrations
                </h2>
                <div className="text-sm text-gray-700 grid grid-cols-2 gap-1">
                  <p>• ISO 27001 Certified</p>
                  <p>• ISO 9001 Certified</p>
                  <p>• CMMI Level 3</p>
                  <p>• SAM Registered</p>
                  <p>• SDVOSB Certified</p>
                  <p>• Facility Clearance</p>
                </div>
              </section>

              {/* Key Metrics */}
              <section className="bg-[#0A2540] text-white rounded p-4 print:bg-gray-800">
                <h2 className="text-lg font-bold mb-3">
                  Key Metrics
                </h2>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <p className="text-2xl font-bold text-[#FF6B35]">50+</p>
                    <p className="text-xs">Agency Partners</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#FF6B35]">7+</p>
                    <p className="text-xs">Security Certifications</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#FF6B35]">15+</p>
                    <p className="text-xs">FedRAMP Implementations</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#FF6B35]">99.7%</p>
                    <p className="text-xs">Processing Accuracy</p>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="border-t-2 border-[#0A2540] pt-3">
                <h2 className="text-lg font-bold text-[#0A2540] mb-2">
                  Contact Information
                </h2>
                <div className="text-sm text-gray-700">
                  <p><strong>Website:</strong> www.thalentech.com</p>
                  <p><strong>Email:</strong> contracts@thalentech.com</p>
                  <p><strong>Phone:</strong> (202) 555-0100</p>
                  <p><strong>Address:</strong> 1200 Technology Drive, Suite 400, Arlington, VA 22201</p>
                </div>
              </section>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-6 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Thalen Technologies, Inc. All rights reserved.</p>
            <p className="mt-1">DUNS and CAGE codes available upon request.</p>
          </footer>
        </div>
      </div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .print-content {
            padding: 0.5in !important;
            max-width: none !important;
          }
          
          @page {
            size: letter;
            margin: 0.5in;
          }
          
          /* Force colors in print */
          .bg-\\[\\#0A2540\\] {
            background-color: #0A2540 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          .text-\[\#FF6B35\] {
            color: #FF6B35 !important;            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          .bg-gray-50, .print\\:bg-gray-100 {
            background-color: #f9fafb !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          .border-\[\#FF6B35\] {
            border-color: #FF6B35 !important;
          }          
          /* Ensure two-column layout in print */
          .print\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            display: grid !important;
          }
        }
        
        /* Preview mode styles */
        ${isPreviewMode ? `
          .print-content {
            font-size: 10pt;
          }
          
          .print-content h1 {
            font-size: 18pt;
          }
          
          .print-content h2 {
            font-size: 12pt;
          }
          
          .print-content p, .print-content li {
            font-size: 9pt;
          }
        ` : ''}
      `}</style>
    </div>
  );
}
