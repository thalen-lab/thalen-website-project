import { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { trpc } from '@/lib/trpc';
import AdminLayout from '@/components/AdminLayout';
import AdminBreadcrumb from '@/components/AdminBreadcrumb';
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

export default function CaseStudyForm() {
  const [, params] = useRoute('/admin/case-studies/:id/edit');
  const [, navigate] = useLocation();
  const isEdit = !!params?.id;
  const caseStudyId = params?.id ? parseInt(params.id) : undefined;

  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    clientName: '',
    industry: 'Federal Government',
    service: 'Automation',
    summary: '',
    content: '',
    featuredImage: '',
    metric1Value: '',
    metric1Label: '',
    metric2Value: '',
    metric2Label: '',
    metric3Value: '',
    metric3Label: '',
    tags: '',
    status: 'draft' as 'draft' | 'published' | 'archived' | 'scheduled',
    scheduledPublishAt: null as Date | null,
  });

  // Fetch existing case study if editing
  const { data: existingCaseStudy, isLoading } = trpc.admin.caseStudies.get.useQuery(
    { id: caseStudyId! },
    { enabled: isEdit && !!caseStudyId }
  );

  useEffect(() => {
    if (existingCaseStudy) {
      setFormData({
        slug: existingCaseStudy.slug,
        title: existingCaseStudy.title,
        clientName: existingCaseStudy.clientName,
        industry: existingCaseStudy.industry,
        service: existingCaseStudy.service,
        summary: existingCaseStudy.summary,
        content: existingCaseStudy.content,
        featuredImage: existingCaseStudy.featuredImage || '',
        metric1Value: existingCaseStudy.metric1Value || '',
        metric1Label: existingCaseStudy.metric1Label || '',
        metric2Value: existingCaseStudy.metric2Value || '',
        metric2Label: existingCaseStudy.metric2Label || '',
        metric3Value: existingCaseStudy.metric3Value || '',
        metric3Label: existingCaseStudy.metric3Label || '',
        tags: existingCaseStudy.tags || '',
        status: existingCaseStudy.status,
        scheduledPublishAt: existingCaseStudy.scheduledPublishAt ? new Date(existingCaseStudy.scheduledPublishAt) : null,
      });
    }
  }, [existingCaseStudy]);

  const createMutation = trpc.admin.caseStudies.create.useMutation({
    onSuccess: () => {
      toast.success('Case study created successfully');
      navigate('/admin/case-studies');
    },
    onError: (error) => {
      toast.error(`Failed to create case study: ${error.message}`);
    },
  });

  const updateMutation = trpc.admin.caseStudies.update.useMutation({
    onSuccess: () => {
      toast.success('Case study updated successfully');
      navigate('/admin/case-studies');
    },
    onError: (error) => {
      toast.error(`Failed to update case study: ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit && caseStudyId) {
      updateMutation.mutate({ id: caseStudyId, ...formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleTitleChange = (value: string) => {
    setFormData({ ...formData, title: value });
    // Auto-generate slug from title if creating new case study
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
        <p className="text-muted-foreground">Loading case study...</p>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <AdminBreadcrumb 
          items={[
            { label: "Case Studies", href: "/admin/case-studies" },
            { label: isEdit ? "Edit Case Study" : "New Case Study" }
          ]} 
        />

        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/admin/case-studies')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold">
            {isEdit ? 'Edit Case Study' : 'New Case Study'}
          </h1>
        </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter case study title"
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
                  URL: /case-studies/{formData.slug || 'your-slug'}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="clientName">Client Name *</Label>
                <Input
                  id="clientName"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  placeholder="Enter client or company name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">Summary *</Label>
                <Textarea
                  id="summary"
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Brief summary of the case study"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Content *</Label>
                <RichTextEditor
                  content={formData.content}
                  onChange={(content: string) => setFormData({ ...formData, content })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Key Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="metric1Value">Metric 1 Value</Label>
                  <Input
                    id="metric1Value"
                    value={formData.metric1Value}
                    onChange={(e) => setFormData({ ...formData, metric1Value: e.target.value })}
                    placeholder="e.g., 85%"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metric1Label">Metric 1 Label</Label>
                  <Input
                    id="metric1Label"
                    value={formData.metric1Label}
                    onChange={(e) => setFormData({ ...formData, metric1Label: e.target.value })}
                    placeholder="e.g., Process Automation"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="metric2Value">Metric 2 Value</Label>
                  <Input
                    id="metric2Value"
                    value={formData.metric2Value}
                    onChange={(e) => setFormData({ ...formData, metric2Value: e.target.value })}
                    placeholder="e.g., $2.4M"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metric2Label">Metric 2 Label</Label>
                  <Input
                    id="metric2Label"
                    value={formData.metric2Label}
                    onChange={(e) => setFormData({ ...formData, metric2Label: e.target.value })}
                    placeholder="e.g., Annual Savings"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="metric3Value">Metric 3 Value</Label>
                  <Input
                    id="metric3Value"
                    value={formData.metric3Value}
                    onChange={(e) => setFormData({ ...formData, metric3Value: e.target.value })}
                    placeholder="e.g., 6 weeks"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metric3Label">Metric 3 Label</Label>
                  <Input
                    id="metric3Label"
                    value={formData.metric3Label}
                    onChange={(e) => setFormData({ ...formData, metric3Label: e.target.value })}
                    placeholder="e.g., Implementation Time"
                  />
                </div>
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
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.status === 'scheduled' && (
                <div className="space-y-2">
                  <Label htmlFor="scheduledPublishAt">Scheduled Publish Date & Time *</Label>
                  <Input
                    id="scheduledPublishAt"
                    type="datetime-local"
                    value={formData.scheduledPublishAt ? new Date(formData.scheduledPublishAt.getTime() - formData.scheduledPublishAt.getTimezoneOffset() * 60000).toISOString().slice(0, 16) : ''}
                    onChange={(e) => setFormData({ ...formData, scheduledPublishAt: e.target.value ? new Date(e.target.value) : null })}
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Content will be automatically published at this time
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="industry">Industry *</Label>
                <Select
                  value={formData.industry}
                  onValueChange={(value) => setFormData({ ...formData, industry: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Federal Government">Federal Government</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="Financial Services">Financial Services</SelectItem>
                    <SelectItem value="Defense">Defense</SelectItem>
                    <SelectItem value="Energy">Energy</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Automation">Automation</SelectItem>
                    <SelectItem value="Analytics">Analytics</SelectItem>
                    <SelectItem value="Cloud">Cloud</SelectItem>
                    <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="AI">AI</SelectItem>
                    <SelectItem value="Security">Security</SelectItem>
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
            {isEdit ? 'Update Case Study' : 'Create Case Study'}
          </Button>
        </div>
      </form>
      </div>
    </AdminLayout>
  );
}
