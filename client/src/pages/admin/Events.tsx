import { useState } from 'react';
import { Link } from 'wouter';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { ImportExportButtons } from '@/components/ImportExportButtons';

export default function AdminEvents() {
  const [statusFilter, setStatusFilter] = useState<'upcoming' | 'ongoing' | 'completed' | 'cancelled' | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [bulkAction, setBulkAction] = useState<'upcoming' | 'ongoing' | 'completed' | 'cancelled' | 'delete' | ''>('');
  const [showBulkDeleteDialog, setShowBulkDeleteDialog] = useState(false);

  const { data: events = [], isLoading, refetch } = trpc.admin.events.list.useQuery({
    status: statusFilter === 'all' ? undefined : statusFilter,
    search: searchQuery || undefined,
  });

  const deleteMutation = trpc.admin.events.delete.useMutation({
    onSuccess: () => {
      toast.success('Event deleted successfully');
      refetch();
      setDeleteId(null);
    },
    onError: (error) => {
      toast.error(`Failed to delete event: ${error.message}`);
    },
  });

  const utils = trpc.useUtils();
  
  const importMutation = trpc.admin.events.import.useMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const bulkUpdateStatusMutation = trpc.admin.events.bulkUpdateStatus.useMutation({
    onSuccess: (data) => {
      toast.success(`${data.count} event(s) updated successfully`);
      refetch();
      setSelectedIds([]);
      setBulkAction('');
    },
    onError: (error) => {
      toast.error(`Failed to update events: ${error.message}`);
    },
  });

  const bulkDeleteMutation = trpc.admin.events.bulkDelete.useMutation({
    onSuccess: (data) => {
      toast.success(`${data.count} event(s) deleted successfully`);
      refetch();
      setSelectedIds([]);
      setShowBulkDeleteDialog(false);
    },
    onError: (error) => {
      toast.error(`Failed to delete events: ${error.message}`);
    },
  });

  const handleDelete = () => {
    if (deleteId) {
      deleteMutation.mutate({ id: deleteId });
    }
  };

  const handleSelectAll = () => {
    if (selectedIds.length === events.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(events.map(event => event.id));
    }
  };

  const handleSelectOne = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleBulkAction = () => {
    if (selectedIds.length === 0) {
      toast.error('Please select at least one event');
      return;
    }

    if (!bulkAction) {
      toast.error('Please select an action');
      return;
    }

    if (bulkAction === 'delete') {
      setShowBulkDeleteDialog(true);
    } else {
      bulkUpdateStatusMutation.mutate({ ids: selectedIds, status: bulkAction });
    }
  };

  const confirmBulkDelete = () => {
    bulkDeleteMutation.mutate({ ids: selectedIds });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'ongoing':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'completed':
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
      case 'cancelled':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="text-muted-foreground mt-1">
            Manage webinars, conferences, and other events
          </p>
        </div>
        <div className="flex gap-2">
          <ImportExportButtons
            onExport={async (format) => {
              return await utils.admin.events.export.fetch({ format });
            }}
            onImport={async (format, data) => {
              return await importMutation.mutateAsync({ format, data });
            }}
            contentType="events"
          />
          <Link href="/admin/events/new">
            <Button className="bg-orange-gradient hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              New Event
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters and Bulk Actions */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="ongoing">Ongoing</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bulk Actions Toolbar */}
        {selectedIds.length > 0 && (
          <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <span className="text-sm font-medium text-blue-900">
              {selectedIds.length} selected
            </span>
            <Select value={bulkAction} onValueChange={(value: any) => setBulkAction(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Bulk action..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="upcoming">Mark Upcoming</SelectItem>
                <SelectItem value="ongoing">Mark Ongoing</SelectItem>
                <SelectItem value="completed">Mark Completed</SelectItem>
                <SelectItem value="cancelled">Mark Cancelled</SelectItem>
                <SelectItem value="delete">Delete</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleBulkAction} disabled={!bulkAction}>
              Apply
            </Button>
            <Button variant="ghost" onClick={() => setSelectedIds([])}>
              Clear Selection
            </Button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedIds.length === events.length && events.length > 0}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  Loading events...
                </TableCell>
              </TableRow>
            ) : events.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No events found. Create your first event to get started.
                </TableCell>
              </TableRow>
            ) : (
              events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedIds.includes(event.id)}
                      onCheckedChange={() => handleSelectOne(event.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium max-w-xs truncate">
                    {event.title}
                  </TableCell>
                  <TableCell>{event.eventType}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {format(new Date(event.startDate), 'MMM d, yyyy h:mm a')}
                  </TableCell>
                  <TableCell>{event.location || 'Virtual'}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {format(new Date(event.createdAt), 'MMM d, yyyy')}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/events#${event.slug}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/admin/events/${event.id}/edit`}>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setDeleteId(event.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the event
              and remove it from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Bulk Delete Confirmation Dialog */}
      <AlertDialog open={showBulkDeleteDialog} onOpenChange={setShowBulkDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {selectedIds.length} event(s)?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the selected events
              and remove them from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmBulkDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete {selectedIds.length} Event(s)
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
