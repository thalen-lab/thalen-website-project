import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { trpc } from '@/lib/trpc';
import { Bookmark, Trash2, Bell, BellOff } from 'lucide-react';
import { toast } from 'sonner';

interface SavedSearchesDropdownProps {
  onLoadSearch: (search: { searchQuery: string; industry: string; service: string }) => void;
}

export default function SavedSearchesDropdown({ onLoadSearch }: SavedSearchesDropdownProps) {
  const { data: savedSearches = [], isLoading } = trpc.savedSearches.list.useQuery();
  const utils = trpc.useUtils();

  const deleteMutation = trpc.savedSearches.delete.useMutation({
    onSuccess: () => {
      toast.success('Saved search deleted');
      utils.savedSearches.list.invalidate();
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to delete saved search');
    },
  });

  const handleDelete = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this saved search?')) {
      deleteMutation.mutate({ id });
    }
  };

  if (isLoading) {
    return (
      <Button variant="outline" disabled>
        <Bookmark className="h-4 w-4 mr-2" />
        Loading...
      </Button>
    );
  }

  if (savedSearches.length === 0) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Bookmark className="h-4 w-4 mr-2" />
          Saved Searches ({savedSearches.length})
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-80">
        <DropdownMenuLabel>Your Saved Searches</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {savedSearches.map((search) => (
          <DropdownMenuItem
            key={search.id}
            className="flex items-start justify-between cursor-pointer"
            onClick={() =>
              onLoadSearch({
                searchQuery: search.searchQuery || '',
                industry: search.industry || 'All',
                service: search.service || 'All',
              })
            }
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{search.name}</span>
                {search.emailNotifications === 1 ? (
                  <span title="Email notifications enabled">
                    <Bell className="h-3 w-3 text-accent" />
                  </span>
                ) : (
                  <span title="Email notifications disabled">
                    <BellOff className="h-3 w-3 text-muted-foreground" />
                  </span>
                )}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {search.searchQuery && `"${search.searchQuery}" • `}
                {search.industry !== 'All' && `${search.industry} • `}
                {search.service !== 'All' && search.service}
              </div>
            </div>
            <button
              onClick={(e) => handleDelete(e, search.id)}
              className="ml-2 p-1 hover:bg-destructive/10 rounded transition-colors"
              aria-label="Delete saved search"
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
