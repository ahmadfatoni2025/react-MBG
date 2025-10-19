import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";

const Charts = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Charts</h1>
        <p className="text-muted-foreground">
          Chart.js is a third party plugin that is used to generate the charts in this theme.
          The charts below have been customized - for further customization options, please visit the official Chart.js documentation.
        </p>

        {/* Area Chart */}
        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4">Area Chart Example</h2>
          <div className="h-80 flex items-center justify-center bg-muted/30 rounded-lg">
            <p className="text-muted-foreground">Area Chart Visualization</p>
          </div>
        </Card>

        {/* Two Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-bold mb-4">Bar Chart Example</h2>
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <p className="text-muted-foreground">Bar Chart Visualization</p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-bold mb-4">Pie Chart Example</h2>
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <p className="text-muted-foreground">Pie Chart Visualization</p>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Charts;
