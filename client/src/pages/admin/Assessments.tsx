import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Mail, Phone, Building, Shield, FileText, Calendar, Bell } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

export default function Assessments() {
  const [statusFilter, setStatusFilter] = useState<"all" | "new" | "contacted" | "qualified" | "converted" | "closed">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAssessment, setSelectedAssessment] = useState<any>(null);
  const [editingNotes, setEditingNotes] = useState("");
  const [editingStatus, setEditingStatus] = useState<"new" | "contacted" | "qualified" | "converted" | "closed">("new");

  const utils = trpc.useUtils();

  // Fetch assessments with filters
  const { data: assessments = [], isLoading } = trpc.methodologyAssessment.list.useQuery({
    status: statusFilter,
    search: searchQuery,
  });

  // Update assessment mutation
  const updateMutation = trpc.methodologyAssessment.update.useMutation({
    onSuccess: () => {
      toast.success("Assessment updated successfully");
      utils.methodologyAssessment.list.invalidate();
      setSelectedAssessment(null);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update assessment");
    },
  });

  const triggerRemindersMutation = trpc.methodologyAssessment.triggerReminders.useMutation({
    onSuccess: () => {
      toast.success("Reminder check completed successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to trigger reminders");
    },
  });

  const handleOpenDetails = (assessment: any) => {
    setSelectedAssessment(assessment);
    setEditingNotes(assessment.internalNotes || "");
    setEditingStatus(assessment.status);
  };

  const handleSaveChanges = () => {
    if (!selectedAssessment) return;

    updateMutation.mutate({
      id: selectedAssessment.id,
      status: editingStatus,
      internalNotes: editingNotes,
    });
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "new":
        return "default";
      case "contacted":
        return "secondary";
      case "qualified":
        return "outline";
      case "converted":
        return "default";
      case "closed":
        return "secondary";
      default:
        return "default";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "contacted":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "qualified":
        return "text-green-600 bg-green-50 border-green-200";
      case "converted":
        return "text-purple-600 bg-purple-50 border-purple-200";
      case "closed":
        return "text-gray-600 bg-gray-50 border-gray-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Assessment Requests</h1>
          <p className="text-muted-foreground mt-2">
            Manage RAPID Framework methodology assessment submissions
          </p>
        </div>
        <Button
          onClick={() => triggerRemindersMutation.mutate()}
          disabled={triggerRemindersMutation.isPending}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Bell className="h-4 w-4" />
          {triggerRemindersMutation.isPending ? "Checking..." : "Check Reminders Now"}
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by agency, contact name, or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Status Filter */}
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
                <SelectItem value="converted">Converted</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        Showing {assessments.length} assessment{assessments.length !== 1 ? "s" : ""}
      </div>

      {/* Assessments List */}
      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading assessments...</p>
        </div>
      ) : assessments.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No assessments found matching your filters.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {assessments.map((assessment) => (
            <Card key={assessment.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  {/* Left: Assessment Info */}
                  <div className="flex-1 space-y-3">
                    {/* Header Row */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Building className="h-5 w-5 text-muted-foreground" />
                          {assessment.agencyName}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {assessment.contactName}
                        </p>
                      </div>
                      <Badge className={`${getStatusColor(assessment.status)} border`}>
                        {assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1)}
                      </Badge>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${assessment.email}`} className="hover:underline">
                          {assessment.email}
                        </a>
                      </div>
                      {assessment.phone && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <a href={`tel:${assessment.phone}`} className="hover:underline">
                            {assessment.phone}
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Compliance Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Framework:</span>
                        <span className="text-muted-foreground">{assessment.complianceFramework}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Auth Status:</span>
                        <span className="text-muted-foreground">{assessment.authStatus}</span>
                      </div>
                    </div>

                    {/* Timestamp */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Submitted {format(new Date(assessment.createdAt), "MMM d, yyyy 'at' h:mm a")}
                    </div>

                    {/* Details Preview */}
                    {assessment.details && (
                      <div className="text-sm text-muted-foreground bg-secondary/50 p-3 rounded-md">
                        <p className="font-medium text-foreground mb-1">Additional Details:</p>
                        <p className="line-clamp-2">{assessment.details}</p>
                      </div>
                    )}

                    {/* Internal Notes Preview */}
                    {assessment.internalNotes && (
                      <div className="text-sm text-muted-foreground bg-orange-50 p-3 rounded-md border border-orange-200">
                        <p className="font-medium text-foreground mb-1">Internal Notes:</p>
                        <p className="line-clamp-2">{assessment.internalNotes}</p>
                      </div>
                    )}
                  </div>

                  {/* Right: Actions */}
                  <div className="flex md:flex-col gap-2">
                    <Button
                      onClick={() => handleOpenDetails(assessment)}
                      variant="outline"
                      className="flex-1 md:flex-none"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Details Dialog */}
      <Dialog open={!!selectedAssessment} onOpenChange={() => setSelectedAssessment(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Assessment Details</DialogTitle>
            <DialogDescription>
              View and manage assessment request details
            </DialogDescription>
          </DialogHeader>

          {selectedAssessment && (
            <div className="space-y-6">
              {/* Agency & Contact Info */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Agency Name</label>
                  <p className="text-sm text-muted-foreground mt-1">{selectedAssessment.agencyName}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Contact Name</label>
                    <p className="text-sm text-muted-foreground mt-1">{selectedAssessment.contactName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a href={`mailto:${selectedAssessment.email}`} className="hover:underline">
                        {selectedAssessment.email}
                      </a>
                    </p>
                  </div>
                </div>

                {selectedAssessment.phone && (
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a href={`tel:${selectedAssessment.phone}`} className="hover:underline">
                        {selectedAssessment.phone}
                      </a>
                    </p>
                  </div>
                )}
              </div>

              {/* Compliance Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Compliance Framework</label>
                  <p className="text-sm text-muted-foreground mt-1">{selectedAssessment.complianceFramework}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Authorization Status</label>
                  <p className="text-sm text-muted-foreground mt-1">{selectedAssessment.authStatus}</p>
                </div>
              </div>

              {/* Additional Details */}
              {selectedAssessment.details && (
                <div>
                  <label className="text-sm font-medium">Additional Details</label>
                  <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap bg-secondary/50 p-3 rounded-md">
                    {selectedAssessment.details}
                  </p>
                </div>
              )}

              {/* Status Update */}
              <div>
                <label className="text-sm font-medium">Status</label>
                <Select value={editingStatus} onValueChange={(value: any) => setEditingStatus(value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="qualified">Qualified</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Internal Notes */}
              <div>
                <label className="text-sm font-medium">Internal Notes</label>
                <Textarea
                  value={editingNotes}
                  onChange={(e) => setEditingNotes(e.target.value)}
                  placeholder="Add internal notes for sales pipeline tracking..."
                  rows={6}
                  className="mt-1"
                />
              </div>

              {/* Timestamps */}
              <div className="text-xs text-muted-foreground space-y-1 bg-secondary/50 p-3 rounded-md">
                <p>Submitted: {format(new Date(selectedAssessment.createdAt), "MMM d, yyyy 'at' h:mm a")}</p>
                <p>Last Updated: {format(new Date(selectedAssessment.updatedAt), "MMM d, yyyy 'at' h:mm a")}</p>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setSelectedAssessment(null)}>
                  Cancel
                </Button>
                <Button
                  onClick={handleSaveChanges}
                  disabled={updateMutation.isPending}
                  className="bg-orange-gradient"
                >
                  {updateMutation.isPending ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
