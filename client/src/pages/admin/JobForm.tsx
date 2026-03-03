import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save, Loader2, Eye } from 'lucide-react';
import { Link, useParams, useLocation } from 'wouter';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import AdminLayout from '@/components/AdminLayout';

export default function AdminJobForm() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const isEditing = !!(params.id && params.id !== 'new');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    employmentType: 'Full-time',
    experienceLevel: 'Mid-Level',
    salaryRange: '',
    summary: '',
    description: '',
    requirements: '',
    niceToHave: '',
    benefits: '',
    clearanceRequired: 'None',
    remoteAllowed: false,
    applicationDeadline: '',
    status: 'draft' as 'draft' | 'published' | 'closed' | 'archived',
  });

  // Fetch existing job if editing
  const { data: existingJob, isLoading: isLoadingJob } = trpc.jobs.adminGetById.useQuery(
    { id: Number(params.id) },
    { enabled: !!isEditing }
  );

  useEffect(() => {
    if (existingJob) {
      setFormData({
        title: existingJob.title,
        department: existingJob.department,
        location: existingJob.location,
        employmentType: existingJob.employmentType,
        experienceLevel: existingJob.experienceLevel,
        salaryRange: existingJob.salaryRange || '',
        summary: existingJob.summary,
        description: existingJob.description,
        requirements: existingJob.requirements,
        niceToHave: existingJob.niceToHave || '',
        benefits: existingJob.benefits || '',
        clearanceRequired: existingJob.clearanceRequired || 'None',
        remoteAllowed: existingJob.remoteAllowed || false,
        applicationDeadline: existingJob.applicationDeadline 
          ? new Date(existingJob.applicationDeadline).toISOString().split('T')[0] 
          : '',
        status: existingJob.status as any,
      });
    }
  }, [existingJob]);

  const createMutation = trpc.jobs.adminCreate.useMutation({
    onSuccess: (data) => {
      toast.success('Job created successfully');
      navigate('/admin/jobs');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create job');
      setIsSubmitting(false);
    },
  });

  const updateMutation = trpc.jobs.adminUpdate.useMutation({
    onSuccess: () => {
      toast.success('Job updated successfully');
      navigate('/admin/jobs');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update job');
      setIsSubmitting(false);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      applicationDeadline: formData.applicationDeadline || undefined,
    };

    if (isEditing) {
      updateMutation.mutate({ id: Number(params.id), ...payload });
    } else {
      createMutation.mutate(payload);
    }
  };

  if (isEditing && isLoadingJob) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#FF6B35]" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/admin/jobs">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">
              {isEditing ? 'Edit Job' : 'Create New Job'}
            </h1>
            <p className="text-gray-500">
              {isEditing ? 'Update job posting details' : 'Add a new career opportunity'}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Job Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Senior Cloud Solutions Architect"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="department">Department *</Label>
                  <Input
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    placeholder="e.g., Engineering"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., Washington, DC / Remote"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="employmentType">Employment Type *</Label>
                  <Select
                    value={formData.employmentType}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, employmentType: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="experienceLevel">Experience Level *</Label>
                  <Select
                    value={formData.experienceLevel}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, experienceLevel: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Entry-Level">Entry-Level</SelectItem>
                      <SelectItem value="Mid-Level">Mid-Level</SelectItem>
                      <SelectItem value="Senior">Senior</SelectItem>
                      <SelectItem value="Lead">Lead</SelectItem>
                      <SelectItem value="Executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="salaryRange">Salary Range</Label>
                  <Input
                    id="salaryRange"
                    name="salaryRange"
                    value={formData.salaryRange}
                    onChange={handleInputChange}
                    placeholder="e.g., $120,000 - $160,000"
                  />
                </div>
                <div>
                  <Label htmlFor="clearanceRequired">Security Clearance</Label>
                  <Select
                    value={formData.clearanceRequired}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, clearanceRequired: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="None">None Required</SelectItem>
                      <SelectItem value="Public Trust">Public Trust</SelectItem>
                      <SelectItem value="Secret">Secret</SelectItem>
                      <SelectItem value="Top Secret">Top Secret</SelectItem>
                      <SelectItem value="TS/SCI">TS/SCI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Switch
                    id="remoteAllowed"
                    checked={formData.remoteAllowed}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, remoteAllowed: checked }))}
                  />
                  <Label htmlFor="remoteAllowed">Remote work allowed</Label>
                </div>
              </div>

              <div>
                <Label htmlFor="applicationDeadline">Application Deadline</Label>
                <Input
                  id="applicationDeadline"
                  name="applicationDeadline"
                  type="date"
                  value={formData.applicationDeadline}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </Card>

          {/* Job Description */}
          <Card>
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="summary">Summary *</Label>
                <Textarea
                  id="summary"
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  placeholder="Brief overview of the position (1-2 sentences)"
                  rows={2}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Full Description * (Markdown supported)</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Detailed description of the role, responsibilities, and team..."
                  rows={8}
                  required
                />
              </div>

              <div>
                <Label htmlFor="requirements">Requirements * (Markdown supported)</Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="- 5+ years of experience in...&#10;- Bachelor's degree in...&#10;- Strong knowledge of..."
                  rows={6}
                  required
                />
              </div>

              <div>
                <Label htmlFor="niceToHave">Nice to Have (Markdown supported)</Label>
                <Textarea
                  id="niceToHave"
                  name="niceToHave"
                  value={formData.niceToHave}
                  onChange={handleInputChange}
                  placeholder="- Experience with...&#10;- Certifications in..."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="benefits">Benefits (Markdown supported)</Label>
                <Textarea
                  id="benefits"
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleInputChange}
                  placeholder="- Competitive salary&#10;- Health insurance&#10;- 401(k) matching..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Publishing */}
          <Card>
            <CardHeader>
              <CardTitle>Publishing</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, status: value as any }))}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500 mt-1">
                  Only published jobs are visible on the careers page.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Link href="/admin/jobs">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
            <div className="flex gap-3">
              {isEditing && existingJob?.status === 'published' && (
                <Link href={`/careers/${existingJob.slug}`}>
                  <Button type="button" variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                </Link>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] hover:from-[#e55a2b] hover:to-[#c84d1a] text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    {isEditing ? 'Update Job' : 'Create Job'}
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
