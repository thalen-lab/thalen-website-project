import { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save } from 'lucide-react';
import { toast } from 'sonner';
import RichTextEditor from '@/components/RichTextEditor';
import { MediaPicker } from '@/components/MediaPicker';

export default function EventForm() {
  const [, params] = useRoute('/admin/events/:id/edit');
  const [, navigate] = useLocation();
  const isEdit = !!params?.id;
  const eventId = params?.id ? parseInt(params.id) : undefined;

  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    eventType: 'Webinar',
    description: '',
    content: '',
    featuredImage: '',
    startDate: '',
    endDate: '',
    location: '',
    registrationUrl: '',
    speakers: '',
    tags: '',
    status: 'upcoming' as 'upcoming' | 'ongoing' | 'completed' | 'cancelled',
  });

  // Fetch existing event if editing
  const { data: existingEvent, isLoading } = trpc.admin.events.get.useQuery(
    { id: eventId! },
    { enabled: isEdit && !!eventId }
  );

  useEffect(() => {
    if (existingEvent) {
      setFormData({
        slug: existingEvent.slug,
        title: existingEvent.title,
        eventType: existingEvent.eventType,
        description: existingEvent.description,
        content: existingEvent.content,
        featuredImage: existingEvent.featuredImage || '',
        startDate: new Date(existingEvent.startDate).toISOString().slice(0, 16),
        endDate: existingEvent.endDate ? new Date(existingEvent.endDate).toISOString().slice(0, 16) : '',
        location: existingEvent.location || '',
        registrationUrl: existingEvent.registrationUrl || '',
        speakers: existingEvent.speakers || '',
        tags: existingEvent.tags || '',
        status: existingEvent.status,
      });
    }
  }, [existingEvent]);

  const createMutation = trpc.admin.events.create.useMutation({
    onSuccess: () => {
      toast.success('Event created successfully');
      navigate('/admin/events');
    },
    onError: (error) => {
      toast.error(`Failed to create event: ${error.message}`);
    },
  });

  const updateMutation = trpc.admin.events.update.useMutation({
    onSuccess: () => {
      toast.success('Event updated successfully');
      navigate('/admin/events');
    },
    onError: (error) => {
      toast.error(`Failed to update event: ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submitData = {
      ...formData,
      startDate: new Date(formData.startDate),
      endDate: formData.endDate ? new Date(formData.endDate) : undefined,
    };

    if (isEdit && eventId) {
      updateMutation.mutate({ id: eventId, ...submitData });
    } else {
      createMutation.mutate(submitData);
    }
  };

  const handleTitleChange = (value: string) => {
    setFormData({ ...formData, title: value });
    // Auto-generate slug from title if creating new event
    if (!isEdit && !formData.slug) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      setFormData((prev) => ({ ...prev, slug }));
    }
  };

  if (isEdit && isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-muted-foreground">Loading event...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/admin/events')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-3xl font-bold">
          {isEdit ? 'Edit Event' : 'New Event'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter event title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="url-friendly-slug"
                  required
                />
                <p className="text-sm text-muted-foreground">
                  URL: /events#{formData.slug || 'your-slug'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type *</Label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Webinar">Webinar</SelectItem>
                      <SelectItem value="Conference">Conference</SelectItem>
                      <SelectItem value="Workshop">Workshop</SelectItem>
                      <SelectItem value="Training">Training</SelectItem>
                      <SelectItem value="Meetup">Meetup</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Virtual or physical location"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date & Time *</Label>
                  <Input
                    id="startDate"
                    type="datetime-local"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date & Time</Label>
                  <Input
                    id="endDate"
                    type="datetime-local"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of the event"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Full Details *</Label>
                <RichTextEditor
                  content={formData.content}
                  onChange={(content: string) => setFormData({ ...formData, content })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="speakers">Speakers</Label>
                <Input
                  id="speakers"
                  value={formData.speakers}
                  onChange={(e) => setFormData({ ...formData, speakers: e.target.value })}
                  placeholder="Comma-separated speaker names"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="registrationUrl">Registration URL</Label>
                <Input
                  id="registrationUrl"
                  value={formData.registrationUrl}
                  onChange={(e) => setFormData({ ...formData, registrationUrl: e.target.value })}
                  placeholder="https://example.com/register"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Publishing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: any) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="Comma-separated tags"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <MediaPicker
                value={formData.featuredImage}
                onChange={(url) => setFormData({ ...formData, featuredImage: url })}
                label="Featured Image"
              />
            </CardContent>
          </Card>

          <Button
            type="submit"
            className="w-full bg-orange-gradient hover:opacity-90"
            disabled={createMutation.isPending || updateMutation.isPending}
          >
            <Save className="h-4 w-4 mr-2" />
            {isEdit ? 'Update Event' : 'Create Event'}
          </Button>
        </div>
      </form>
    </div>
  );
}
