import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

interface SaveSearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  searchQuery: string;
  industry: string;
  service: string;
  onSaved?: () => void;
}

export default function SaveSearchDialog({
  open,
  onOpenChange,
  searchQuery,
  industry,
  service,
  onSaved,
}: SaveSearchDialogProps) {
  const [name, setName] = useState('');
  const utils = trpc.useUtils();

  const saveMutation = trpc.savedSearches.create.useMutation({
    onSuccess: () => {
      toast.success('Search saved successfully!');
      utils.savedSearches.list.invalidate();
      setName('');
      onOpenChange(false);
      onSaved?.();
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to save search');
    },
  });

  const handleSave = () => {
    if (!name.trim()) {
      toast.error('Please enter a name for this search');
      return;
    }

    saveMutation.mutate({
      name: name.trim(),
      searchQuery,
      industry,
      service,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Save Search</DialogTitle>
          <DialogDescription>
            Give this search combination a name so you can quickly access it later.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Search Name</Label>
            <Input
              id="name"
              placeholder="e.g., Healthcare Automation"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSave();
                }
              }}
            />
          </div>
          <div className="grid gap-2 text-sm text-muted-foreground">
            <div>
              <span className="font-medium">Search:</span>{' '}
              {searchQuery || '(none)'}
            </div>
            <div>
              <span className="font-medium">Industry:</span> {industry}
            </div>
            <div>
              <span className="font-medium">Service:</span> {service}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={saveMutation.isPending}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={saveMutation.isPending}
            className="bg-orange-gradient"
          >
            {saveMutation.isPending ? 'Saving...' : 'Save Search'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
