import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, FileText, Briefcase, CalendarDays } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'wouter';

export default function AdminScheduledContent() {
  const { data: blogPosts = [], refetch: refetchBlogs } = trpc.admin.blogPosts.list.useQuery({
    status: 'scheduled',
  });

  const { data: caseStudies = [], refetch: refetchCaseStudies } = trpc.admin.caseStudies.list.useQuery({
    status: 'scheduled',
  });

  const { data: events = [], refetch: refetchEvents } = trpc.admin.events.list.useQuery({
    status: 'scheduled',
  });

  // Combine and sort all scheduled content by publish date
  const scheduledContent = [
    ...blogPosts.map((post) => ({
      id: post.id,
      type: 'blog' as const,
      title: post.title,
      scheduledPublishAt: post.scheduledPublishAt,
      editUrl: `/admin/blog-posts/edit/${post.id}`,
    })),
    ...caseStudies.map((study) => ({
      id: study.id,
      type: 'case-study' as const,
      title: study.title,
      scheduledPublishAt: study.scheduledPublishAt,
      editUrl: `/admin/case-studies/edit/${study.id}`,
    })),
    ...events.map((event) => ({
      id: event.id,
      type: 'event' as const,
      title: event.title,
      scheduledPublishAt: event.scheduledPublishAt,
      editUrl: `/admin/events/edit/${event.id}`,
    })),
  ]
    .filter((item) => item.scheduledPublishAt)
    .sort((a, b) => new Date(a.scheduledPublishAt!).getTime() - new Date(b.scheduledPublishAt!).getTime());

  const getTypeIcon = (type: 'blog' | 'case-study' | 'event') => {
    switch (type) {
      case 'blog':
        return <FileText className="h-4 w-4" />;
      case 'case-study':
        return <Briefcase className="h-4 w-4" />;
      case 'event':
        return <CalendarDays className="h-4 w-4" />;
    }
  };

  const getTypeBadge = (type: 'blog' | 'case-study' | 'event') => {
    const colors = {
      blog: 'bg-blue-100 text-blue-800',
      'case-study': 'bg-green-100 text-green-800',
      event: 'bg-purple-100 text-purple-800',
    };
    const labels = {
      blog: 'Blog Post',
      'case-study': 'Case Study',
      event: 'Event',
    };
    return (
      <Badge className={colors[type]} variant="secondary">
        {getTypeIcon(type)}
        <span className="ml-1">{labels[type]}</span>
      </Badge>
    );
  };

  const getTimeUntilPublish = (scheduledDate: Date) => {
    const now = new Date();
    const scheduled = new Date(scheduledDate);
    const diff = scheduled.getTime() - now.getTime();

    if (diff < 0) {
      return 'Publishing soon...';
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
      return `In ${days} day${days > 1 ? 's' : ''}, ${hours} hour${hours !== 1 ? 's' : ''}`;
    } else if (hours > 0) {
      return `In ${hours} hour${hours > 1 ? 's' : ''}, ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else {
      return `In ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Scheduled Content</h1>
        <p className="text-muted-foreground mt-2">
          View and manage all scheduled content across blog posts, case studies, and events
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Scheduled</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{scheduledContent.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{blogPosts.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Case Studies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{caseStudies.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Scheduled Content List */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Publications</CardTitle>
          <CardDescription>
            Content will be automatically published at the scheduled times
          </CardDescription>
        </CardHeader>
        <CardContent>
          {scheduledContent.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No scheduled content found.</p>
              <p className="text-sm text-muted-foreground mt-1">
                Schedule content from the blog posts, case studies, or events pages.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {scheduledContent.map((item) => (
                <div
                  key={`${item.type}-${item.id}`}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      {getTypeBadge(item.type)}
                      <h3 className="font-medium">{item.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{format(new Date(item.scheduledPublishAt!), 'MMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{format(new Date(item.scheduledPublishAt!), 'h:mm a')}</span>
                      </div>
                      <span className="text-orange-600 font-medium">
                        {getTimeUntilPublish(item.scheduledPublishAt!)}
                      </span>
                    </div>
                  </div>
                  <Link href={item.editUrl}>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
