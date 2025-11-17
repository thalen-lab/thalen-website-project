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
import { Checkbox } from '@/components/ui/checkbox';
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
  const [emailNotifications, setEmailNotifications] = useState(true);
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
      emailNotifications: emailNotifications ? 1 : 0,
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
          <div className="flex items-start space-x-2">
            <Checkbox
              id="emailNotifications"
              checked={emailNotifications}
              onCheckedChange={(checked) => setEmailNotifications(checked as boolean)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="emailNotifications"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Email notifications
              </Label>
              <p className="text-sm text-muted-foreground">
                Get notified when new case studies match this search
              </p>
            </div>
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
