import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Shield,
  FileCheck,
  Calendar,
  Building,
} from "lucide-react";
import { format } from "date-fns";

export default function AssessmentAnalytics() {
  const { data: analytics, isLoading } = trpc.methodologyAssessment.analytics.useQuery();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Assessment Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Loading analytics data...
          </p>
        </div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Assessment Analytics</h1>
          <p className="text-muted-foreground mt-2">
            No analytics data available.
          </p>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "contacted":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "qualified":
        return "bg-green-100 text-green-700 border-green-300";
      case "converted":
        return "bg-purple-100 text-purple-700 border-purple-300";
      case "closed":
        return "bg-gray-100 text-gray-700 border-gray-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Assessment Analytics</h1>
        <p className="text-muted-foreground mt-2">
          Track assessment request trends, conversion rates, and prospect segments
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Assessments */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Assessments</p>
                <p className="text-3xl font-bold mt-2">{analytics.totalAssessments}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conversion Rate */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                <p className="text-3xl font-bold mt-2">{analytics.conversionRate}%</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Qualified + Converted leads
            </p>
          </CardContent>
        </Card>

        {/* New Requests */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">New Requests</p>
                <p className="text-3xl font-bold mt-2">
                  {analytics.byStatus.find(s => s.status === "new")?.count || 0}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Awaiting contact
            </p>
          </CardContent>
        </Card>

        {/* Qualified Leads */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Qualified Leads</p>
                <p className="text-3xl font-bold mt-2">
                  {analytics.byStatus.find(s => s.status === "qualified")?.count || 0}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Ready for conversion
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Status Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.byStatus.map((item) => {
                const percentage = analytics.totalAssessments > 0
                  ? (item.count / analytics.totalAssessments) * 100
                  : 0;
                return (
                  <div key={item.status} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium capitalize">{item.status}</span>
                      <span className="text-muted-foreground">
                        {item.count} ({Math.round(percentage)}%)
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          item.status === "new"
                            ? "bg-blue-500"
                            : item.status === "contacted"
                            ? "bg-yellow-500"
                            : item.status === "qualified"
                            ? "bg-green-500"
                            : item.status === "converted"
                            ? "bg-purple-500"
                            : "bg-gray-400"
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Compliance Framework Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Compliance Framework Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.byComplianceFramework.map((item) => {
                const percentage = analytics.totalAssessments > 0
                  ? (item.count / analytics.totalAssessments) * 100
                  : 0;
                return (
                  <div key={item.framework} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{item.framework}</span>
                      <span className="text-muted-foreground">
                        {item.count} ({Math.round(percentage)}%)
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Authorization Status Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            Authorization Status Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {analytics.byAuthStatus.map((item) => {
              const percentage = analytics.totalAssessments > 0
                ? (item.count / analytics.totalAssessments) * 100
                : 0;
              return (
                <div key={item.authStatus} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.authStatus}</span>
                    <span className="text-muted-foreground">{item.count}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-navy-600"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {Math.round(percentage)}% of total
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Assessments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Assessment Requests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analytics.recentAssessments.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                No recent assessments
              </p>
            ) : (
              analytics.recentAssessments.map((assessment) => (
                <div
                  key={assessment.id}
                  className="flex items-start justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{assessment.agencyName}</p>
                      <Badge className={`${getStatusColor(assessment.status)} border text-xs`}>
                        {assessment.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {assessment.contactName} • {assessment.email}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        {assessment.complianceFramework}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building className="h-3 w-3" />
                        {assessment.authStatus}
                      </span>
                    </div>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    {format(new Date(assessment.createdAt), "MMM d, yyyy")}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Insights & Recommendations */}
      <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-600" />
            Key Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-600 mt-2" />
            <p className="text-sm">
              <strong>Top Framework:</strong>{" "}
              {analytics.byComplianceFramework[0]?.framework || "N/A"} with{" "}
              {analytics.byComplianceFramework[0]?.count || 0} requests
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-600 mt-2" />
            <p className="text-sm">
              <strong>Conversion Rate:</strong> {analytics.conversionRate}% of leads are qualified or converted
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-600 mt-2" />
            <p className="text-sm">
              <strong>Follow-up Priority:</strong>{" "}
              {analytics.byStatus.find(s => s.status === "new")?.count || 0} new requests need immediate attention
            </p>
          </div>
          {analytics.byAuthStatus.length > 0 && (
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-600 mt-2" />
              <p className="text-sm">
                <strong>High-Value Segment:</strong> Focus on{" "}
                {analytics.byAuthStatus[0]?.authStatus || "N/A"} agencies ({analytics.byAuthStatus[0]?.count || 0} requests)
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
