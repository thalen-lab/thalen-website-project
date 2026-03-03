import AdminLayout from "@/components/AdminLayout";
import AdminBreadcrumb from "@/components/AdminBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { FileText, Briefcase, Calendar, Plus } from "lucide-react";
import { Link } from "wouter";

export default function AdminDashboard() {
  const { data: stats, isLoading } = trpc.admin.stats.useQuery();

  const quickActions = [
    {
      title: "New Blog Post",
      href: "/admin/blog-posts/new",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      title: "New Case Study",
      href: "/admin/case-studies/new",
      icon: Briefcase,
      color: "bg-green-500",
    },
    {
      title: "New Event",
      href: "/admin/events/new",
      icon: Calendar,
      color: "bg-purple-500",
    },
  ];

  const statsCards = [
    {
      title: "Blog Posts",
      value: stats?.blogPosts || 0,
      icon: FileText,
      href: "/admin/blog-posts",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Case Studies",
      value: stats?.caseStudies || 0,
      icon: Briefcase,
      href: "/admin/case-studies",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Events",
      value: stats?.events || 0,
      icon: Calendar,
      href: "/admin/events",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Breadcrumb */}
        <AdminBreadcrumb 
          items={[
            { label: "Dashboard" }
          ]} 
        />

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-navy-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome to the Thalen Technologies content management system
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <Link key={stat.title} href={stat.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </CardTitle>
                    <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-navy-900">
                      {isLoading ? "..." : stat.value}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      View all {stat.title.toLowerCase()}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link key={action.title} href={action.href}>
                    <Button
                      variant="outline"
                      className="w-full h-auto py-6 flex flex-col items-center gap-3 hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors"
                    >
                      <div className={`p-3 rounded-lg ${action.color} text-white`}>
                        <Plus className="w-6 h-6" />
                      </div>
                      <span className="font-medium">{action.title}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 text-center py-8">
              Recent content activity will appear here
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
