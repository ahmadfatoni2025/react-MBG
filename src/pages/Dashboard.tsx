import { DollarSign, ShoppingCart, FileText, MessageSquare, Download, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { ProgressCard } from "@/components/dashboard/ProgressCard";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Earnings (Monthly)"
          value="$40,000"
          icon={DollarSign}
          colorClass="bg-primary/10 text-primary"
          trend="Monthly earnings overview"
        />
        <StatCard
          title="Earnings (Annual)"
          value="$215,000"
          icon={TrendingUp}
          colorClass="bg-success/10 text-success"
          trend="Annual revenue report"
        />
        <StatCard
          title="Tasks"
          value="50%"
          icon={FileText}
          colorClass="bg-info/10 text-info"
          trend="Task completion rate"
        />
        <StatCard
          title="Pending Requests"
          value="18"
          icon={MessageSquare}
          colorClass="bg-warning/10 text-warning"
          trend="Awaiting response"
        />
      </div>

      {/* Two Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Card */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Earnings Overview</h2>
            <button className="text-sm text-primary hover:text-primary/80">
              <Download className="w-4 h-4" />
            </button>
          </div>
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
            <p className="text-muted-foreground">Chart Area</p>
          </div>
        </Card>

        {/* Revenue Sources */}
        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4">Revenue Sources</h2>
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
            <p className="text-muted-foreground">Pie Chart Area</p>
          </div>
        </Card>
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4">Projects</h2>
          <div className="space-y-4">
            <ProgressCard title="Server Migration" percentage={20} color="warning" />
            <ProgressCard title="Sales Tracking" percentage={40} color="primary" />
            <ProgressCard title="Customer Database" percentage={60} color="success" />
            <ProgressCard title="Payout Details" percentage={80} color="info" />
            <ProgressCard title="Account Setup" percentage={100} color="success" />
          </div>
        </Card>

        {/* Color Palette */}
        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4">Illustrations</h2>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Add custom illustrations and graphics to give your project a unique look and feel.
            </p>
            <div className="h-48 flex items-center justify-center bg-muted/30 rounded-lg">
              <p className="text-muted-foreground">Illustration Area</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Create your own custom illustrations using modern design tools.
            </p>
          </div>
        </Card>
      </div>

      {/* Development Approach */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-l-primary">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Utility First</h3>
              <p className="text-sm text-muted-foreground">
                Build responsive layouts quickly using modern utility-first CSS framework.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-success">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-success" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Components</h3>
              <p className="text-sm text-muted-foreground">
                Reusable components make development faster and more maintainable.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-info">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-info/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-info" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive documentation makes it easy to get started and build.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity Table */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">2024-01-15</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Created new project</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-success text-success-foreground">
                    Completed
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2024-01-14</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Updated user profile</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-info text-info-foreground">
                    In Progress
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2024-01-13</TableCell>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>Submitted report</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-warning text-warning-foreground">
                    Pending
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2024-01-12</TableCell>
                <TableCell>Alice Williams</TableCell>
                <TableCell>Closed ticket #482</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-success text-success-foreground">
                    Completed
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
