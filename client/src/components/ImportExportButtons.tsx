import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Download, Upload } from 'lucide-react';
import { toast } from 'sonner';

interface ImportExportButtonsProps {
  onExport: (format: 'csv' | 'json') => Promise<{ data: string }>;
  onImport: (format: 'csv' | 'json', data: string) => Promise<{ success: boolean; imported: number; total: number }>;
  contentType: string; // e.g., "blog posts", "case studies", "events"
}

export function ImportExportButtons({ onExport, onImport, contentType }: ImportExportButtonsProps) {
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [importFormat, setImportFormat] = useState<'csv' | 'json'>('json');
  const [isImporting, setIsImporting] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = async (format: 'csv' | 'json') => {
    setIsExporting(true);
    try {
      const result = await onExport(format);
      
      if (!result.data) {
        toast.error(`No ${contentType} to export`);
        return;
      }

      // Create download
      const blob = new Blob([result.data], { 
        type: format === 'json' ? 'application/json' : 'text/csv' 
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${contentType.replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.${format}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success(`${contentType} exported successfully`);
    } catch (error: any) {
      toast.error(`Export failed: ${error.message}`);
    } finally {
      setIsExporting(false);
    }
  };

  const handleImportClick = (format: 'csv' | 'json') => {
    setImportFormat(format);
    setShowImportDialog(true);
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    try {
      const text = await file.text();
      const result = await onImport(importFormat, text);

      if (result.success) {
        toast.success(`Successfully imported ${result.imported} of ${result.total} ${contentType}`);
        setShowImportDialog(false);
      }
    } catch (error: any) {
      toast.error(`Import failed: ${error.message}`);
    } finally {
      setIsImporting(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <>
      <div className="flex gap-2">
        {/* Export Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" disabled={isExporting}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleExport('json')}>
              Export as JSON
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleExport('csv')}>
              Export as CSV
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Import Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleImportClick('json')}>
              Import from JSON
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleImportClick('csv')}>
              Import from CSV
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Import Dialog */}
      <Dialog open={showImportDialog} onOpenChange={setShowImportDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Import {contentType}</DialogTitle>
            <DialogDescription>
              Select a {importFormat.toUpperCase()} file to import {contentType}. 
              Existing items with the same ID will be skipped.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <input
              ref={fileInputRef}
              type="file"
              accept={importFormat === 'json' ? '.json' : '.csv'}
              onChange={handleFileChange}
              className="hidden"
            />
            <Button onClick={handleFileSelect} disabled={isImporting} className="w-full">
              {isImporting ? 'Importing...' : `Select ${importFormat.toUpperCase()} File`}
            </Button>
          </div>

          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setShowImportDialog(false)}
              disabled={isImporting}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
